import Link from "next/link";
import { Phone, ArrowRight, Star, CheckCircle2, Shield, Clock, Banknote, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { QuickOfferForm } from "@/components/forms/QuickOfferForm";
import { ServiceArea } from "@/components/sections/ServiceArea";
import {
  comparison,
  faqs,
  processSteps,
  site,
  testimonials,
} from "@/content/site";

const VALUE_NUMBERS = [
  { number: "$0", label: "Commissions", caption: "vs. 5–6% with an agent" },
  { number: "$0", label: "Repairs", caption: "we handle every fix" },
  { number: "$0", label: "Closing costs", caption: "we cover them at the table" },
  { number: "7", label: "Days to close", caption: "or pick a date 90 days out" },
] as const;

/**
 * Direct — bold direct-response. Maximum conversion focus. Top reviews bar,
 * comparison table near the top, big-number value props, faces grid, two
 * separate CTAs and form positions. High-contrast black/cream/amber.
 */
export function DirectHome() {
  return (
    <>
      {/* TOP REVIEWS BAR */}
      <div className="border-b border-rule/15 bg-ink py-2 text-paper">
        <Container className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center font-sans text-xs">
          <span className="inline-flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber text-amber" aria-hidden />
            ))}
            <strong className="font-semibold">[TO FILL] Google reviews</strong>
          </span>
          <span className="text-paper/60">·</span>
          <span>Locally owned in Rhode Island since [TO FILL]</span>
          <span className="text-paper/60">·</span>
          <a
            href={`tel:${site.phone.web}`}
            className="font-semibold text-amber hover:text-amber-deep"
          >
            <Phone className="mr-1 inline h-3.5 w-3.5" aria-hidden />
            {site.phone.web}
          </a>
        </Container>
      </div>

      {/* HERO — bold black headline + form, side-by-side */}
      <section className="relative overflow-hidden bg-paper">
        <Container className="grid items-center gap-10 py-12 md:grid-cols-12 md:gap-12 md:py-20">
          <div className="md:col-span-7">
            <p className="inline-block rounded-sm bg-amber px-2.5 py-1 font-sans text-xs font-bold uppercase tracking-wider text-ink">
              Cash · As-Is · Close in 7 Days
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.98] tracking-tight text-ink md:text-7xl">
              Sell your house.
              <br />
              <span className="text-amber-deep">Skip the agent.</span>
              <br />
              Get paid in cash.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink">
              We pay cash for houses across Rhode Island and southeastern Mass —
              any condition, any situation. Written offer in 24 hours. Close in
              as little as 7 days.
            </p>
            <ul className="mt-7 grid gap-2 font-sans text-base font-medium text-ink sm:grid-cols-2">
              {[
                "No agent commissions",
                "No repairs needed",
                "No closing costs",
                "No showings, ever",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-deep" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/get-offer"
                className="inline-flex items-center justify-center rounded-md bg-amber px-6 py-4 font-sans text-base font-bold uppercase tracking-wide text-ink shadow-lantern transition-colors hover:bg-amber-deep hover:text-paper"
              >
                Get my cash offer now
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center justify-center rounded-md border-2 border-ink px-5 py-3 font-sans text-base font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                Call {site.phone.web}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-lg border-2 border-ink bg-paper shadow-2xl">
              <div className="bg-ink px-5 py-3 font-sans text-sm font-bold uppercase tracking-wider text-amber">
                Free, no-obligation cash offer
              </div>
              <div className="p-5 md:p-6">
                <QuickOfferForm source="home-direct" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BIG NUMBERS — what you save */}
      <section className="bg-ink py-12 text-paper md:py-16">
        <Container>
          <div className="text-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber">
              What you save with PorchLight
            </p>
            <h2 className="mt-3 font-display text-3xl text-paper md:text-4xl">
              The math is simple.
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-4">
            {VALUE_NUMBERS.map((v) => (
              <li
                key={v.label}
                className="rounded-lg border border-paper/15 bg-paper/5 p-6 text-center"
              >
                <span className="block font-display text-6xl font-bold text-amber md:text-7xl">
                  {v.number}
                </span>
                <span className="mt-2 block font-sans text-base font-bold uppercase tracking-wide text-paper">
                  {v.label}
                </span>
                <span className="mt-1 block font-sans text-xs text-paper/70">
                  {v.caption}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* COMPARISON UP HIGH */}
      <section className="bg-paper-2/60 py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-deep">
              Apples to apples
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              How we compare to the alternatives.
            </h2>
          </div>
          <div className="mt-10 hidden overflow-hidden rounded-lg border-2 border-ink bg-paper md:block">
            <table className="w-full text-left font-sans">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="px-5 py-4 font-display text-base font-bold">&nbsp;</th>
                  <th className="px-5 py-4 font-display text-base font-bold text-amber">
                    PorchLight
                  </th>
                  <th className="px-5 py-4 font-display text-base font-bold">
                    Real estate agent
                  </th>
                  <th className="px-5 py-4 font-display text-base font-bold">FSBO</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-rule/15">
                {comparison.map((row) => (
                  <tr key={row.dimension} className="hover:bg-paper-2/40">
                    <th
                      scope="row"
                      className="px-5 py-4 align-top font-display text-sm font-bold text-ink"
                    >
                      {row.dimension}
                    </th>
                    <td className="bg-amber/10 px-5 py-4 align-top text-sm font-bold text-ink">
                      <CheckCircle2 className="mr-1.5 inline h-4 w-4 text-amber-deep" aria-hidden />
                      {row.porchlight}
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-ink-muted">
                      <X className="mr-1.5 inline h-4 w-4 text-ink/40" aria-hidden />
                      {row.agent}
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-ink-muted">
                      <X className="mr-1.5 inline h-4 w-4 text-ink/40" aria-hidden />
                      {row.fsbo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* mobile compact */}
          <ul className="mt-8 space-y-3 md:hidden">
            {comparison.slice(0, 5).map((row) => (
              <li key={row.dimension} className="rounded-md border-2 border-ink bg-paper p-4">
                <p className="font-display text-base font-bold text-ink">{row.dimension}</p>
                <p className="mt-2 rounded bg-amber/15 p-2 font-sans text-sm font-bold text-ink">
                  PorchLight: {row.porchlight}
                </p>
                <p className="mt-1 font-sans text-xs text-ink-muted">Agent: {row.agent}</p>
                <p className="font-sans text-xs text-ink-muted">FSBO: {row.fsbo}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* TRUST INDICATORS — three big badges */}
      <section className="bg-paper py-14 md:py-16">
        <Container>
          <ul className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                stat: "[TO FILL]",
                label: "Houses purchased",
                caption: "Real, verifiable, and growing every month",
              },
              {
                icon: <Star className="h-8 w-8" />,
                stat: "[TO FILL] / 5",
                label: "Average review rating",
                caption: "From sellers we've actually closed with",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                stat: "1 hr",
                label: "Average response time",
                caption: "We answer our own phones during business hours",
              },
            ].map((t) => (
              <li
                key={t.label}
                className="flex items-start gap-4 rounded-lg border-2 border-ink bg-paper-2/40 p-5"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber text-ink">
                  {t.icon}
                </span>
                <div>
                  <span className="block font-display text-3xl font-bold text-ink">
                    {t.stat}
                  </span>
                  <span className="mt-0.5 block font-sans text-sm font-bold uppercase tracking-wide text-ink">
                    {t.label}
                  </span>
                  <span className="mt-1 block font-sans text-xs text-ink-muted">
                    {t.caption}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FACES — sellers we bought from */}
      <section className="bg-paper-2/60 py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-deep">
              Real sellers · Real houses · Real reviews
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              Neighbors who&rsquo;ve sold to us.
            </h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={`${t.name}-${i}`} className="rounded-lg border-2 border-ink bg-paper">
                <PhotoSlot
                  alt={`${t.name} photo`}
                  caption={`Photo of ${t.name} at the property — natural, smiling, informal. With permission.`}
                  aspect="aspect-[4/3]"
                  className="rounded-b-none rounded-t-md"
                />
                <div className="p-5">
                  <div className="flex gap-0.5 text-amber">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-amber" aria-hidden />
                    ))}
                  </div>
                  <p className="mt-3 font-display text-base leading-snug text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 font-sans text-sm font-bold text-ink">{t.name}</p>
                  <p className="font-sans text-xs text-ink-muted">
                    {t.situation} · {t.location}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* PROCESS — bold timeline */}
      <section className="bg-paper py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-deep">
              How it works
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              Three steps. No surprises.
            </h2>
          </div>
          <ol className="mt-10 grid gap-0 md:grid-cols-3">
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className="relative border-2 border-ink p-6 md:-ml-[2px] md:p-8"
              >
                <span className="absolute -top-5 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber font-display text-xl font-bold text-ink shadow-lantern">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ServiceArea />

      {/* MID-PAGE CTA BAND */}
      <section className="bg-amber py-14 md:py-16">
        <Container className="grid items-center gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Ready to see your number? It takes about two minutes.
            </h2>
            <p className="mt-3 font-sans text-base text-ink/80">
              Free. No obligation. We close at a real attorney&rsquo;s office.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Link
              href="/get-offer"
              className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-4 font-sans text-base font-bold uppercase tracking-wide text-amber transition-colors hover:bg-paper hover:text-ink"
            >
              Get my offer
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ — concise */}
      <section className="bg-paper py-16 md:py-20">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-deep">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              Quick answers.
            </h2>
          </div>
          <ul className="md:col-span-8 space-y-5">
            {faqs.slice(0, 5).map((f) => (
              <li key={f.q} className="rounded-md border-2 border-ink bg-paper-2/40 p-5">
                <p className="font-display text-lg font-bold text-ink">{f.q}</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
                  {f.a}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* SECOND FORM — final close */}
      <section className="bg-ink py-16 text-paper md:py-20">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber">
              Your turn
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-paper md:text-5xl">
              Get your no-obligation cash offer.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-paper/80">
              Two minutes online, or call us — whatever&rsquo;s easier. We&rsquo;ll
              respond within an hour during business hours.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-7 inline-flex items-center gap-2 font-display text-3xl font-bold text-amber hover:text-paper"
            >
              <Phone className="h-7 w-7" aria-hidden />
              {site.phone.web}
            </a>
            <ul className="mt-8 grid gap-2 font-sans text-sm text-paper">
              {[
                <span key="1" className="inline-flex items-center gap-2">
                  <Banknote className="h-4 w-4 text-amber" aria-hidden /> No fees, no
                  commissions, no closing costs
                </span>,
                <span key="2" className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber" aria-hidden /> Close in 7 to
                  90 days &mdash; you choose
                </span>,
                <span key="3" className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4 text-amber" aria-hidden /> Real
                  attorney&rsquo;s closing, real wire transfer, real Rhode Island
                  business
                </span>,
              ].map((node, i) => (
                <li key={i}>{node}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-lg bg-paper p-6 text-ink md:p-8">
              <LeadForm source="home-direct-bottom" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
