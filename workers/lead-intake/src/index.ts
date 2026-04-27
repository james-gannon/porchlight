/**
 * PorchLight lead-intake Worker.
 *
 * Receives signed payloads from the Next.js Edge route at `/api/lead`,
 * verifies HMAC + Turnstile, then fans out to:
 *   1. Close CRM (creates a lead with contact + opportunity)
 *   2. Telegram (instant notification to the owner)
 *
 * Both fan-outs run with `Promise.allSettled` so a Telegram outage doesn't
 * block Close, and vice versa. Errors are surfaced to Workers logs but the
 * client always sees a generic success response if the payload was valid.
 */

import { leadSchema, quickOfferSchema, type Lead, type QuickOffer } from "../../../lib/leadSchema";
import { hmacSha256Hex, timingSafeEqualHex } from "../../../lib/hmac";

export interface Env {
  LEAD_WORKER_HMAC_SECRET: string;
  CLOSE_API_KEY?: string;
  CLOSE_LEAD_PIPELINE_ID?: string;
  CLOSE_OWNER_USER_ID?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_OWNER_CHAT_ID?: string;
  TURNSTILE_SECRET_KEY?: string;
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

    // Verify Turnstile if a token is present and a secret is configured.
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

    // Fan out — don't block the response on these.
    ctx.waitUntil(
      Promise.allSettled([
        sendToClose(env, envelope).catch((e) => console.error("[worker] close error", e)),
        sendToTelegram(env, envelope).catch((e) =>
          console.error("[worker] telegram error", e),
        ),
      ]).then(() => undefined),
    );

    return json(200, { ok: true });
  },
};

// --- Close CRM ---

async function sendToClose(env: Env, envelope: IntakeEnvelope): Promise<void> {
  if (!env.CLOSE_API_KEY) {
    console.warn("[worker] CLOSE_API_KEY not set; skipping Close push");
    return;
  }

  const auth = `Basic ${btoa(`${env.CLOSE_API_KEY}:`)}`;
  const data = envelope.data;
  const isFull = envelope.kind === "full";

  // Compose lead name: "Last, First — 123 Main St" (full) or "Quick — 123 Main St"
  const name = isFull
    ? `${(data as Lead).lastName}, ${(data as Lead).firstName} — ${data.propertyAddress}`
    : `Quick lead — ${data.propertyAddress}`;

  const contactName = isFull
    ? `${(data as Lead).firstName} ${(data as Lead).lastName}`
    : (data as QuickOffer).firstName ?? "Web visitor";

  const phones = [{ phone: data.phone, type: "mobile" }];
  const emails = isFull ? [{ email: (data as Lead).email, type: "office" }] : [];

  const description = buildLeadDescription(envelope);

  const customFields = isFull ? buildCloseCustomFields(envelope) : {};

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
    ...customFields,
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

function buildCloseCustomFields(envelope: IntakeEnvelope): Record<string, unknown> {
  // Close uses `custom.<field-id>` keys — leave keys unset until the user
  // creates the corresponding fields in their Close instance and sets the IDs.
  // Returning an empty object means we skip custom fields cleanly.
  void envelope;
  return {};
}

// --- Telegram ---

async function sendToTelegram(env: Env, envelope: IntakeEnvelope): Promise<void> {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_OWNER_CHAT_ID) {
    console.warn("[worker] Telegram not configured; skipping notification");
    return;
  }

  const text = formatTelegramMessage(envelope);
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

function formatTelegramMessage(envelope: IntakeEnvelope): string {
  const d = envelope.data;
  if (envelope.kind === "quick") {
    const q = d as QuickOffer;
    return [
      "*New quick lead* :sparkles:",
      `*Address:* ${escape(q.propertyAddress)}`,
      `*Phone:* ${escape(q.phone)}`,
      q.firstName ? `*Name:* ${escape(q.firstName)}` : null,
      `*Source:* ${escape(q.source ?? "(unknown)")}`,
      `*Page:* ${escape(q.pagePath ?? "(unknown)")}`,
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
  ]
    .filter(Boolean)
    .join("\n");
}

// Markdown special chars that Telegram cares about. Escape conservatively.
function escape(s: string): string {
  return s.replace(/[*_`[\]()]/g, (m) => `\\${m}`);
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
