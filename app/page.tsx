import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-paper via-paper to-paper-2/60" />
        <div className="container py-20 md:py-28">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-amber-deep">
            Rhode Island · Bristol County · Plymouth County
          </p>
          <h1 className="mt-4 max-w-3xl">
            Sell your house the simple way —{" "}
            <span className="text-amber-deep">cash, as-is, on your timeline.</span>
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg text-ink-muted">
            No agents. No repairs. No showings. We&rsquo;re local neighbors who buy houses
            across Rhode Island and southeastern Massachusetts — and we&rsquo;ll show you
            our number in days, not months.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/get-offer" className="btn-primary">
              Get my cash offer
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
            <a href={`tel:${site.phone.web}`} className="btn-ghost">
              <Phone className="mr-2 h-4 w-4 text-amber-deep" aria-hidden />
              Call {site.phone.web}
            </a>
          </div>
          <p className="mt-6 max-w-xl rounded-md border border-amber/30 bg-amber/10 p-3 font-sans text-xs text-ink-muted">
            <strong className="text-ink">Phase 0 placeholder.</strong> This page exists to
            verify the brand system, fonts, layout, and Vercel pipeline. Phase 1 replaces it
            with the full home page (hero form, process steps, comparison table, testimonials,
            service area, owner story, FAQ).
          </p>
        </div>
      </section>

      <section className="border-t border-rule/10 bg-paper-2/40">
        <div className="container grid gap-8 py-16 md:grid-cols-3">
          {[
            { k: "1", t: "Tell us about the house", b: "Address, condition, situation. Two minutes." },
            { k: "2", t: "Get a fair cash offer", b: "Honest, no-pressure. Walk away anytime." },
            { k: "3", t: "Pick your closing date", b: "7 days or 90 — your call. We cover closing costs." },
          ].map((s) => (
            <div key={s.k} className="rounded-lg border border-rule/10 bg-paper p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber font-display text-lg font-semibold text-ink shadow-lantern">
                {s.k}
              </div>
              <h3 className="mt-4">{s.t}</h3>
              <p className="mt-2 font-sans text-sm text-ink-muted">{s.b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
