# lead-intake (Cloudflare Worker)

Receives lead submissions from the Next.js app at `/api/lead`, verifies the HMAC
signature, validates the payload against the shared Zod schema in
`lib/leadSchema.ts`, then:

1. **KV backup** — synchronously writes the raw payload to the `LEADS` KV
   namespace with a 30-day TTL. This is the durability floor — even a total
   downstream outage leaves a recoverable record.
2. **Close CRM** — creates a lead with contact, phone, email, and property
   address; returns the new lead ID.
3. **Telegram** — instant notification to the owner's chat with a deep link
   to the new Close lead.
4. **GA4 (server-side)** — fires a `generate_lead` conversion via Measurement
   Protocol, so attribution survives ad-blockers.

Steps 2–4 run inside `ctx.waitUntil(Promise.allSettled([...]))` so any single
service being down doesn't fail the response or block the others.

## One-time setup

```bash
cd workers/lead-intake
pnpm install

# Create the KV namespace and paste the returned id into wrangler.toml
wrangler kv:namespace create LEADS

# Generate and store the HMAC secret (must match the Vercel env var)
openssl rand -hex 32 | wrangler secret put LEAD_WORKER_HMAC_SECRET

# Required secrets
wrangler secret put CLOSE_API_KEY
wrangler secret put TELEGRAM_BOT_TOKEN
wrangler secret put TELEGRAM_OWNER_CHAT_ID
wrangler secret put TURNSTILE_SECRET_KEY

# Optional secrets
wrangler secret put CLOSE_LEAD_PIPELINE_ID
wrangler secret put CLOSE_OWNER_USER_ID
wrangler secret put GA4_MEASUREMENT_ID
wrangler secret put GA4_API_SECRET
```

## Deploy

```bash
pnpm deploy
```

## Environment variables

| Name | Required | Used for |
|---|---|---|
| `LEAD_WORKER_HMAC_SECRET` | yes | Verifies the signature from the Next.js Edge route. Must match the value in Vercel. |
| `CLOSE_API_KEY` | yes | Close CRM API key. |
| `CLOSE_LEAD_PIPELINE_ID` | no | Status ID to set new leads to. |
| `CLOSE_OWNER_USER_ID` | no | User ID to attribute new leads to. |
| `TELEGRAM_BOT_TOKEN` | yes | Bot token from `@BotFather`. |
| `TELEGRAM_OWNER_CHAT_ID` | yes | Chat ID to send notifications to. |
| `TURNSTILE_SECRET_KEY` | yes | Cloudflare Turnstile server-side secret. |
| `GA4_MEASUREMENT_ID` | no | GA4 stream ID (`G-XXXX`). Without it, server-side events are skipped. |
| `GA4_API_SECRET` | no | Created in GA4 → Admin → Data Streams → Measurement Protocol API secrets. |

## KV namespace

The `LEADS` namespace stores two key types per lead:

- `lead:{id}` — the raw signed payload, 30-day TTL. Replay source.
- `status:{id}` — `{ closeLeadId, ts }` written after fan-out. If this key is
  missing for a `lead:{id}`, fan-out failed and the lead is replayable.

You can list keys with `wrangler kv:key list --binding=LEADS` and inspect a
specific one with `wrangler kv:key get lead:abcd1234 --binding=LEADS`.

## Replaying a failed lead

If Close or Telegram was down when a lead came in, you can re-run fan-out by
re-POSTing the stored payload back through the Next.js Edge route — the
signature is verified against the same secret, so a stored payload remains
valid as long as the secret hasn't rotated.
