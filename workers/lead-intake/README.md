# lead-intake (Cloudflare Worker)

Receives lead submissions from the Next.js app at `/api/lead`, verifies the HMAC
signature, validates the payload against the shared Zod schema in
`lib/leadSchema.ts`, then pushes:

1. **Close CRM** — creates a lead with contact, phone, email, and property address.
2. **Telegram** — sends an instant notification to the owner's chat.

Both fan-outs run inside `ctx.waitUntil(Promise.allSettled([...]))` so one
service being down doesn't fail the response.

## Local dev

```bash
cd workers/lead-intake
pnpm install
pnpm dev
```

The worker shares `lib/leadSchema.ts` and `lib/hmac.ts` with the Next app via
relative paths, so the schema cannot drift.

## Deploy

```bash
pnpm deploy
```

## Required secrets

Set with `wrangler secret put NAME`:

| Name | Used for |
|---|---|
| `LEAD_WORKER_HMAC_SECRET` | Verifies the signature from the Next.js Edge route. Must match the value the Next app uses. |
| `CLOSE_API_KEY` | Close CRM API key (Personal API key or org-level integration). |
| `CLOSE_LEAD_PIPELINE_ID` | Optional. Status ID to set new leads to. |
| `CLOSE_OWNER_USER_ID` | Optional. User ID to attribute new leads to. |
| `TELEGRAM_BOT_TOKEN` | Bot token from `@BotFather`. |
| `TELEGRAM_OWNER_CHAT_ID` | Chat ID to send notifications to. Get yours by DMing the bot, then hitting `https://api.telegram.org/bot<TOKEN>/getUpdates`. |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile server-side secret. |

## Generating an HMAC secret

Use a long random value:

```bash
openssl rand -hex 32
```

Set it identically in both places:

```bash
# Worker
wrangler secret put LEAD_WORKER_HMAC_SECRET

# Vercel (Next.js app)
vercel env add LEAD_WORKER_HMAC_SECRET
```
