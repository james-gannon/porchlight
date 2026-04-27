# PorchLight Home Offers — Repo Conventions

This file briefs future AI sessions and human contributors on how this codebase is organized. Keep it short and current.

## Stack

- Next.js 14 (App Router, RSC by default), TypeScript strict
- Tailwind CSS + shadcn/ui (Radix primitives), `lucide-react` icons
- Structured TS data files for city/county/property-type pages (Phase 2)
- MDX via `@next/mdx` planned for the blog (Phase 3)
- Self-hosted Fraunces (display) + Inter (sans) via `next/font/google`
- Vercel hosting; preview deploy per branch
- Cloudflare Worker for lead intake (separate `workers/` directory)

## Brand tokens

The brand system is the single source of truth in `app/globals.css` (CSS vars) and `tailwind.config.ts` (Tailwind theme). Use Tailwind classes; do NOT hardcode hex colors.

| Token | Tailwind | Use |
|---|---|---|
| `--paper` | `bg-paper text-paper` | Default page background |
| `--cream-2` | `bg-paper-2` | Section bands, cards-in-cards |
| `--ink` | `text-ink bg-ink` | Headlines, body |
| `--ink-muted` | `text-ink-muted` | Secondary copy |
| `--amber` | `bg-amber text-amber` | Primary CTA |
| `--amber-deep` | `bg-amber-deep text-amber-deep` | CTA hover, focus ring, accent text |
| `--moss` | `text-moss bg-moss` | Tertiary accent |
| `--rule` | `border-rule` (use with `/10`–`/20` alpha) | Hairlines |

Buttons use the `.btn-primary` and `.btn-ghost` component classes in `globals.css`.

## Directory structure

```
app/                  # Next.js App Router pages
  api/lead/           # Edge route — proxies signed payload to the Worker
  sell-my-house-fast/[city]/   # Dynamic city pages (Phase 2)
  we-buy-houses/[county]/      # Dynamic county hubs (Phase 2)
  sell/[type]/        # Dynamic property-type pages (Phase 2)
components/
  layout/             # Header, Footer, MobileStickyCTA
  sections/           # Reusable page sections (Hero, FAQ, Testimonials, ...)
  forms/              # LeadForm, QuickOfferForm, Turnstile
  seo/                # JsonLd renderer
  ui/                 # shadcn-style primitives
content/
  site.ts             # NAP, hours, owner, social, service areas, FAQ, comparison
  cities.ts           # Per-city structured data (Phase 2)
  counties.ts         # County hubs (Phase 2)
  propertyTypes.ts    # Property-type pages (Phase 2)
lib/
  cn.ts               # Tailwind class merger
  schema.ts           # JSON-LD generators
  leadSchema.ts       # Zod schema shared with Worker
  hmac.ts             # HMAC SHA-256 helpers shared with Worker
  content.ts          # Content lookups + slug helpers (Phase 2)
public/               # Static assets, logos, OG images
workers/lead-intake/  # Cloudflare Worker (Close + Telegram + KV + GA4)
```

## Content authoring

`content/site.ts` is the source of truth for NAP — never duplicate phone/address/email anywhere else. Per-city/county/property pages are TS data objects in `content/cities.ts`, `content/counties.ts`, and `content/propertyTypes.ts`; the dynamic route renders them through a shared template.

Why TS data files instead of MDX: the per-page content is highly structured (name, neighborhoods, FAQ, etc.), TS gives type safety on the link graph, and we avoid the contentlayer maintenance burden. MDX will land in Phase 3 for blog posts where free-form prose is the actual value.

All open content items are flagged with the literal `TO_FILL_*` prefix in `content/site.ts` and `[TO FILL]` in visible copy. Search the repo for those before launch.

## Conventions

- Server Components by default. Add `"use client"` only when a component needs state or browser APIs (forms, accordions).
- Always `next/image` (never `<img>`); always `next/link` (never `<a>` for internal routes); always `next/font` (never `@import` from googleapis).
- Forms: react-hook-form + Zod. Schema lives in `lib/leadSchema.ts` so the Cloudflare Worker can re-validate server-side.
- Phone numbers come from `content/site.ts` only. See "Phone strategy" below.
- Accessibility: every interactive element has a visible focus ring (amber); every image has `alt`; color contrast meets WCAG 2.2 AA against the brand palette.
- Performance budgets: LCP < 2.0s, CLS < 0.05, INP < 200ms, JS on home < 90 KB gzip after Phase 3 polish.

## Phone strategy

Until paid traffic is meaningful, **one vanity number serves as the canonical NAP across the site, GBP, and every citation listing**. NAP consistency is non-negotiable for local-pack ranking, so resist the urge to expose CallRail tracking numbers in citations.

- Set `phone.web`, `phone.gbp`, and `phone.fallback` in `content/site.ts` to the same vanity number. The fields exist separately so we can introduce per-channel CallRail DNI later (Phase 3, when Google Ads spend justifies it) without refactoring.
- Source attribution before that point comes from Plausible/GA4 referrer + UTM data, plus the GA4 server-side `generate_lead` event the Worker fires.
- Avoid Close's auto-provisioned numbers as the public-facing number — they're pool numbers and rotate, which breaks NAP.

## Google Business Profile

- **Primary category**: "Real estate agency". There is no "Cash home buyer" category, and "Real estate agency" outranks "Real estate investor" in the local pack for buy/sell intent queries.
- **Secondary categories**: "Property investment company", "Real estate consultant".
- Skip "Real estate appraiser" — different licensure, can trigger profile review.
- Service-Area Business: hide the address, list cities + counties as service areas (max 20). Use a separate CallRail GBP number once we wire CallRail.

## Commands

```bash
pnpm dev          # Dev server on :3000
pnpm build        # Production build
pnpm typecheck    # tsc --noEmit
pnpm lint         # next lint
pnpm format       # prettier --write .
```

## Environment

Copy `.env.example` to `.env.local` and fill in. The Worker has its own env (managed via `wrangler secret put` — see `workers/lead-intake/README.md`).

## Phasing (see `/root/.claude/plans/hi-calude-i-d-love-sequential-scroll.md` for full plan)

- **Phase 0** (✓): scaffold, brand system, layout shell.
- **Phase 1** (✓): core pages, LeadForm, /thank-you, Cloudflare Worker → KV + Close + Telegram + GA4.
- **Phase 2** (✓): programmatic city/county/property pages, JSON-LD, OG image generation.
- **Phase 3**: analytics wiring (Plausible, GA4 client, Clarity), blog, SEO polish, bundle-size budget.
- **Phase 4**: pre-launch checklist, Google Business Profile setup.
