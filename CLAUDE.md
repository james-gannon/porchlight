# PorchLight Home Offers — Repo Conventions

This file briefs future AI sessions and human contributors on how this codebase is organized. Keep it short and current.

## Stack

- Next.js 14 (App Router, RSC by default), TypeScript strict
- Tailwind CSS + shadcn/ui (Radix primitives), `lucide-react` icons
- MDX content via `contentlayer2` (Phase 2)
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
  api/                # Edge routes (lead intake, revalidate)
  (marketing)/        # Marketing route group (will be added in Phase 1)
components/
  layout/             # Header, Footer, MobileStickyCTA
  sections/           # Reusable page sections (Hero, FAQ, Testimonials, ...)
  forms/              # LeadForm, QuickOfferForm
  seo/                # JsonLd generators
  ui/                 # shadcn primitives
content/
  site.ts             # NAP, hours, owner, social, service areas
  cities/*.mdx        # Per-city pages (Phase 2)
  counties/*.mdx      # County hubs (Phase 2)
  property-types/*.mdx
  blog/*.mdx
lib/
  cn.ts               # Tailwind class merger
  schema.ts           # JSON-LD generators (Phase 3)
  leadSchema.ts       # Zod schema shared with Worker (Phase 1)
public/               # Static assets, logos, OG images
styles/               # (reserved — currently tokens live in globals.css)
workers/lead-intake/  # Cloudflare Worker (Phase 1)
```

## Content authoring

`content/site.ts` is the source of truth for NAP — never duplicate phone/address/email anywhere else. Per-city/county/property pages are MDX with frontmatter and a body; the dynamic route renders them.

All open content items are flagged with the literal `TO_FILL_*` prefix in `content/site.ts` and as `[TO FILL]` in MDX frontmatter. Search the repo for those before launch.

## Conventions

- Server Components by default. Add `"use client"` only when a component needs state or browser APIs (forms, accordions).
- Always `next/image` (never `<img>`); always `next/link` (never `<a>` for internal routes); always `next/font` (never `@import` from googleapis).
- Forms: react-hook-form + Zod. Schema lives in `lib/leadSchema.ts` so the Cloudflare Worker can re-validate server-side.
- Phone numbers come from `content/site.ts` only (so the CallRail-tracked number is consistent everywhere).
- Accessibility: every interactive element has a visible focus ring (amber); every image has `alt`; color contrast meets WCAG 2.2 AA against the brand palette.
- Performance budgets: LCP < 2.0s, CLS < 0.05, INP < 200ms, JS on home < 90 KB gzip after Phase 3 polish.

## Commands

```bash
pnpm dev          # Dev server on :3000
pnpm build        # Production build
pnpm typecheck    # tsc --noEmit
pnpm lint         # next lint
pnpm format       # prettier --write .
```

## Environment

Copy `.env.example` to `.env.local` and fill in. The Worker has its own env (managed via `wrangler secret put`).

## Phasing (see `/root/.claude/plans/hi-calude-i-d-love-sequential-scroll.md` for full plan)

- **Phase 0** (✓ this commit): scaffold, brand system, layout shell.
- **Phase 1**: core pages, LeadForm, Cloudflare Worker → Close + Telegram.
- **Phase 2**: programmatic city/county/property pages, JSON-LD, OG image generation.
- **Phase 3**: analytics, blog, SEO polish.
- **Phase 4**: pre-launch checklist, Google Business Profile setup.
