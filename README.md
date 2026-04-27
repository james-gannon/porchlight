# PorchLight Home Offers

Marketing site for PorchLight Home Offers — cash home buyer serving Rhode Island and southeastern Massachusetts.

## Quick start

```bash
pnpm install
cp .env.example .env.local   # fill in secrets
pnpm dev                     # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Dev server with hot reload |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm typecheck` | TypeScript check (strict) |
| `pnpm lint` | ESLint via `next lint` |
| `pnpm format` | Prettier write |

## Stack

Next.js 14 · TypeScript · Tailwind · shadcn/ui · MDX (Phase 2) · Cloudflare Workers · Vercel.

See `CLAUDE.md` for repo conventions and `/root/.claude/plans/` for the full build plan.
