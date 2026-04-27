/**
 * PorchLight lead-intake Worker.
 *
 * Receives signed payloads from the Next.js Edge route at `/api/lead`,
 * verifies HMAC + Turnstile, writes a durable backup to KV, then fans out:
 *
 *   1. Close CRM           — creates a lead with contact + property address
 *   2. Telegram            — instant notification to the owner with a deep
 *                            link back to the new Close lead
 *   3. GA4 (server-side)   — fires a `generate_lead` conversion event via the
 *                            Measurement Protocol so attribution survives
 *                            ad-blockers
 *
 * KV write happens FIRST and synchronously, so even a total fan-out failure
 * leaves a recoverable record. Fan-out runs inside ctx.waitUntil with
 * Promise.allSettled so any single dependency being down can't cascade.
 */

import { leadSchema, quickOfferSchema, type Lead, type QuickOffer } from "../../../lib/leadSchema";
import { hmacSha256Hex, timingSafeEqualHex } from "../../../lib/hmac";

export interface Env {
  LEAD_WORKER_HMAC_SECRET: string;
  LEADS?: KVNamespace;
  CLOSE_API_KEY?: string;
  CLOSE_LEAD_PIPELINE_ID?: string;
  CLOSE_OWNER_USER_ID?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_OWNER_CHAT_ID?: string;
  TURNSTILE_SECRET_KEY?: string;
  GA4_MEASUREMENT_ID?: string;
  GA4_API_SECRET?: string;
}

type IntakeEnvelope =
  | { kind: "full"; receivedAt: string; ip?: string; userAgent?: string; data: Lead }
  | { kind: "quick"; receivedAt: string; ip?: string; userAgent?: string; data: QuickOffer };

const json = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (req.method !== "POST") return json(405, { error: "Method not allowed" });

    const signature = req.headers.get("X-PorchLight-Signature");
    if (!signature) return json(401, { error: "Missing signature" });

    const raw = await req.text();
    const expected = await hmacSha256Hex(env.LEAD_WORKER_HMAC_SECRET, raw);
    if (!timingSafeEqualHex(signature, expected)) {
      return json(401, { error: "Invalid signature" });
    }

    let envelope: IntakeEnvelope;
    try {
      const parsed = JSON.parse(raw) as { kind?: string; data?: unknown } & Record<string, unknown>;
      if (parsed.kind === "quick") {
        const data = quickOfferSchema.parse(parsed.data);
        envelope = { ...(parsed as object), kind: "quick", data } as IntakeEnvelope;
      } else {
        const data = leadSchema.parse(parsed.data);
        envelope = { ...(parsed as object), kind: "full", data } as IntakeEnvelope;
      }
    } catch (err) {
      console.error("[worker] schema validation failed:", err);
      return json(422, { error: "Validation failed" });
    }

    if (envelope.data.turnstileToken && env.TURNSTILE_SECRET_KEY) {
      const ok = await verifyTurnstile(
        env.TURNSTILE_SECRET_KEY,
        envelope.data.turnstileToken,
        envelope.ip,
      );
      if (!ok) {
        console.warn("[worker] turnstile rejected token");
        return json(403, { error: "Anti-spam check failed" });
      }
    }

    const leadId = await generateLeadId(envelope);

    // 1. Durable backup — synchronous so the response can't return ok if the
    //    backup didn't land. 30-day TTL gives plenty of room to replay if both
    //    Close and Telegram were down.
    if (env.LEADS) {
      try {
        await env.LEADS.put(`lead:${leadId}`, raw, { expirationTtl: 60 * 60 * 24 * 30 });
      } catch (err) {
        console.error("[worker] kv backup failed:", err);
        return json(503, { error: "Lead backup failed; please try again." });
      }
    } else {
      console.warn("[worker] LEADS KV namespace not bound; skipping backup");
    }

    // 2. Fan out — never block the response. Each handler swallows its own
    //    errors so one outage can't cascade into another.
    ctx.waitUntil(
      (async () => {
        const closePromise = sendToClose(env, envelope).catch((e) => {
          console.error("[worker] close error", e);
          return null;
        });
        const closeLeadId = await closePromise;
        await Promise.allSettled([
          sendToTelegram(env, envelope, closeLeadId).catch((e) =>
            console.error("[worker] telegram error", e),
          ),
          sendGa4Event(env, envelope, leadId).catch((e) =>
            console.error("[worker] ga4 error", e),
          ),
          // Mark KV record as fanned out so we know which IDs need replay.
          env.LEADS?.put(`status:${leadId}`, JSON.stringify({ closeLeadId, ts: Date.now() }), {
            expirationTtl: 60 * 60 * 24 * 30,
          }).catch((e) => console.error("[worker] kv status error", e)),
        ]);
      })(),
    );

    return json(200, { ok: true, leadId });
  },
};

// --- Lead ID ---

async function generateLeadId(envelope: IntakeEnvelope): Promise<string> {
  const enc = new TextEncoder();
  const seed = `${envelope.receivedAt}:${envelope.data.propertyAddress}:${envelope.data.phone}`;
  const buf = await crypto.subtle.digest("SHA-256", enc.encode(seed));
  return Array.from(new Uint8Array(buf))
    .slice(0, 8)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// --- Close CRM ---

async function sendToClose(env: Env, envelope: IntakeEnvelope): Promise<string | null> {
  if (!env.CLOSE_API_KEY) {
    console.warn("[worker] CLOSE_API_KEY not set; skipping Close push");
    return null;
  }

  const auth = `Basic ${btoa(`${env.CLOSE_API_KEY}:`)}`;
  const data = envelope.data;
  const isFull = envelope.kind === "full";

  const name = isFull
    ? `${(data as Lead).lastName}, ${(data as Lead).firstName} — ${data.propertyAddress}`
    : `Quick lead — ${data.propertyAddress}`;

  const contactName = isFull
    ? `${(data as Lead).firstName} ${(data as Lead).lastName}`
    : (data as QuickOffer).firstName ?? "Web visitor";

  const phones = [{ phone: data.phone, type: "mobile" }];
  const emails = isFull ? [{ email: (data as Lead).email, type: "office" }] : [];

  const description = buildLeadDescription(envelope);

  const body: Record<string, unknown> = {
    name,
    description,
    contacts: [{ name: contactName, phones, emails }],
    addresses: isFull
      ? [
          {
            label: "property",
            address_1: data.propertyAddress,
            city: (data as Lead).city,
            state: (data as Lead).state,
            zipcode: (data as Lead).postalCode,
            country: "US",
          },
        ]
      : [{ label: "property", address_1: data.propertyAddress, country: "US" }],
  };

  if (env.CLOSE_LEAD_PIPELINE_ID) body.status_id = env.CLOSE_LEAD_PIPELINE_ID;
  if (env.CLOSE_OWNER_USER_ID) body.created_by = env.CLOSE_OWNER_USER_ID;

  const res = await fetch("https://api.close.com/api/v1/lead/", {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Close ${res.status}: ${text.slice(0, 500)}`);
  }
  const created = (await res.json().catch(() => null)) as { id?: string } | null;
  return created?.id ?? null;
}

function buildLeadDescription(envelope: IntakeEnvelope): string {
  const d = envelope.data;
  const lines: string[] = [
    `Source: ${d.source ?? "(unknown)"}`,
    `Page: ${d.pagePath ?? "(unknown)"}`,
    `Received: ${envelope.receivedAt}`,
  ];
  if (envelope.ip) lines.push(`IP: ${envelope.ip}`);
  if (envelope.userAgent) lines.push(`UA: ${envelope.userAgent}`);

  if (envelope.kind === "full") {
    const f = d as Lead;
    lines.push("", "Property:");
    lines.push(`  ${f.propertyAddress}, ${f.city}, ${f.state} ${f.postalCode}`);
    lines.push(`  Type: ${f.propertyType} · Condition: ${f.condition}`);
    if (f.bedrooms != null) lines.push(`  Beds: ${f.bedrooms}`);
    if (f.bathrooms != null) lines.push(`  Baths: ${f.bathrooms}`);
    lines.push(`  Situation: ${f.situation}`);
    lines.push(`  Timeline: ${f.timeline}`);
    if (f.notes) lines.push("", "Notes:", f.notes);
  }
  return lines.join("\n");
}

// --- Telegram ---

async function sendToTelegram(
  env: Env,
  envelope: IntakeEnvelope,
  closeLeadId: string | null,
): Promise<void> {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_OWNER_CHAT_ID) {
    console.warn("[worker] Telegram not configured; skipping notification");
    return;
  }

  const text = formatTelegramMessage(envelope, closeLeadId);
  const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_OWNER_CHAT_ID,
      text,
      parse_mode: "Markdown",
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Telegram ${res.status}: ${body.slice(0, 300)}`);
  }
}

function formatTelegramMessage(envelope: IntakeEnvelope, closeLeadId: string | null): string {
  const d = envelope.data;
  const closeLine = closeLeadId
    ? `\nOpen in Close: https://app.close.com/lead/${closeLeadId}/`
    : "";

  if (envelope.kind === "quick") {
    const q = d as QuickOffer;
    return [
      "*New quick lead* ⚡",
      `*Address:* ${escape(q.propertyAddress)}`,
      `*Phone:* ${escape(q.phone)}`,
      q.firstName ? `*Name:* ${escape(q.firstName)}` : null,
      `*Source:* ${escape(q.source ?? "(unknown)")}`,
      `*Page:* ${escape(q.pagePath ?? "(unknown)")}`,
      closeLine || null,
    ]
      .filter(Boolean)
      .join("\n");
  }
  const f = d as Lead;
  return [
    "*New cash-offer lead*",
    `*${escape(f.firstName)} ${escape(f.lastName)}*`,
    `📞 ${escape(f.phone)} · ✉️ ${escape(f.email)}`,
    `🏠 ${escape(f.propertyAddress)}, ${escape(f.city)}, ${f.state} ${escape(f.postalCode)}`,
    `Condition: ${f.condition} · Type: ${f.propertyType}`,
    `Situation: ${f.situation} · Timeline: ${f.timeline}`,
    f.notes ? `\n_${escape(f.notes.slice(0, 300))}_` : null,
    `\nSource: ${escape(f.source ?? "(unknown)")} · Page: ${escape(f.pagePath ?? "(unknown)")}`,
    closeLine || null,
  ]
    .filter(Boolean)
    .join("\n");
}

function escape(s: string): string {
  return s.replace(/[*_`[\]()]/g, (m) => `\\${m}`);
}

// --- GA4 server-side ---

async function sendGa4Event(
  env: Env,
  envelope: IntakeEnvelope,
  leadId: string,
): Promise<void> {
  if (!env.GA4_MEASUREMENT_ID || !env.GA4_API_SECRET) return;

  // GA4 Measurement Protocol expects a stable client_id. We don't have access
  // to the browser's `_ga` cookie from the Worker, so we synthesize a stable
  // pseudo client_id from the lead ID. This trades cross-device join for
  // guaranteed conversion delivery — the right call when the choice is between
  // "no event" and "an event with a synthetic client_id."
  const clientId = `lead.${leadId}`;
  const data = envelope.data;

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(
    env.GA4_MEASUREMENT_ID,
  )}&api_secret=${encodeURIComponent(env.GA4_API_SECRET)}`;

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      client_id: clientId,
      non_personalized_ads: false,
      events: [
        {
          name: "generate_lead",
          params: {
            engagement_time_msec: 1,
            lead_kind: envelope.kind,
            source: data.source ?? "(unknown)",
            page_path: data.pagePath ?? "(unknown)",
            value: 1,
            currency: "USD",
          },
        },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GA4 ${res.status}: ${body.slice(0, 200)}`);
  }
}

// --- Turnstile ---

async function verifyTurnstile(
  secret: string,
  token: string,
  ip: string | undefined,
): Promise<boolean> {
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  if (!res.ok) return false;
  const body = (await res.json()) as { success?: boolean };
  return Boolean(body.success);
}
