import { NextResponse, type NextRequest } from "next/server";
import { leadSchema, quickOfferSchema } from "@/lib/leadSchema";
import { hmacSha256Hex } from "@/lib/hmac";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16 * 1024;

/**
 * Lead intake proxy.
 *
 * Re-validates the payload server-side, signs it with HMAC, and forwards to
 * the Cloudflare Worker which handles Close CRM + Telegram. We keep the Worker
 * URL and HMAC secret on the server only — never exposed to the browser.
 *
 * Use ?type=quick to validate against the QuickOfferSchema instead of the
 * full lead schema.
 */
export async function POST(req: NextRequest) {
  const workerUrl = process.env.LEAD_WORKER_URL;
  const hmacSecret = process.env.LEAD_WORKER_HMAC_SECRET;

  if (!workerUrl || !hmacSecret) {
    // In local dev / preview without secrets, accept the form and return 200
    // so the UI flow can be exercised. Log to the server console.
    if (process.env.NODE_ENV !== "production") {
      const body = await safeReadJson(req);
      console.warn("[lead] worker not configured; payload accepted in dev:", body);
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: "Lead intake is temporarily unavailable. Please call us." },
      { status: 503 },
    );
  }

  // Body size guard
  const contentLength = Number(req.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  const json = await safeReadJson(req);
  if (!json) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const isQuick = req.nextUrl.searchParams.get("type") === "quick";
  const schema = isQuick ? quickOfferSchema : leadSchema;
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  // Honeypot triggered — pretend success.
  const honeypot = (parsed.data as { website?: string }).website;
  if (honeypot && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "";
  const userAgent = req.headers.get("user-agent") ?? "";

  const payload = JSON.stringify({
    kind: isQuick ? "quick" : "full",
    receivedAt: new Date().toISOString(),
    ip,
    userAgent,
    data: parsed.data,
  });

  const signature = await hmacSha256Hex(hmacSecret, payload);

  try {
    const res = await fetch(workerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-PorchLight-Signature": signature,
      },
      body: payload,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[lead] worker rejected:", res.status, text);
      return NextResponse.json(
        { error: "We couldn't submit your information. Please try again or call us." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] worker fetch failed:", err);
    return NextResponse.json(
      { error: "We couldn't submit your information. Please try again or call us." },
      { status: 502 },
    );
  }
}

async function safeReadJson(req: NextRequest): Promise<unknown> {
  try {
    return await req.json();
  } catch {
    return null;
  }
}
