import Link from "next/link";
import { Phone, ArrowRight, Hammer, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { faqs, processSteps, site, testimonials } from "@/content/site";

/**
 * Steady — workshop blue + leather brown + safety yellow + utility off-white.
 * Tradesman / blue-collar trust. "Built on handshakes." James in workboots.
 * Function over decoration. Stencil display + utility sans body.
 */

const OFFWHITE = "#EFEAE0";
const SHOP_BLUE = "#1F3A5F";
const SHOP_BLUE_DEEP = "#142844";
const LEATHER = "#7A4A1F";
const SAFETY = "#F2C300";
const STEEL = "#3D4654";

export function SteadyHome() {
  return (
    <div style={{ backgroundColor: OFFWHITE, color: SHOP_BLUE_DEEP }}>
      {/* TOP STRIPE */}
      <div
        style={{
          background: `repeating-linear-gradient(135deg, ${SAFETY} 0 16px, ${SHOP_BLUE_DEEP} 16px 32px)`,
          height: "8px",
        }}
        aria-hidden
      />

      {/* BAND */}
      <div style={{ backgroundColor: SHOP_BLUE_DEEP, color: OFFWHITE }}>
        <Container className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-center font-mono text-[11px] uppercase tracking-[0.22em]">
          <span><Hammer className="mr-1 inline h-3 w-3" aria-hidden style={{ color: SAFETY }} /> Family-owned · RI &amp; SE Mass</span>
          <span style={{ color: `${OFFWHITE}99` }}>·</span>
          <span>James picks up: <span style={{ color: SAFETY }}>{site.phone.web}</span></span>
          <span style={{ color: `${OFFWHITE}99` }}>·</span>
          <span>Mon&ndash;Fri {site.hours.monFri}</span>
        </Container>
      </div>

      {/* HERO — block typography, hard-edged */}
      <section className="border-b-4" style={{ borderColor: SHOP_BLUE_DEEP }}>
        <Container className="grid gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-20">
          <div className="md:col-span-7">
            <p
              className="inline-block rounded-sm px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ backgroundColor: SAFETY, color: SHOP_BLUE_DEEP }}
            >
              Built on handshakes
            </p>
            <h1
              className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl"
              style={{ color: SHOP_BLUE_DEEP }}
            >
              Real cash.
              <br />
              Real attorney.
              <br />
              <span style={{ color: SAFETY, backgroundColor: SHOP_BLUE_DEEP, padding: "0 0.25em" }}>
                Real James.
              </span>
            </h1>
            <p
              className="mt-6 max-w-xl font-sans text-lg leading-relaxed"
              style={{ color: STEEL }}
            >
              I&rsquo;m James, co-owner of PorchLight Home Offers. We&rsquo;re
              a small Rhode Island team that buys houses cash, as-is. I answer
              the phone, I meet you at the house, I cut the wire transfer. No
              middlemen, no contract assignments, no surprises at closing.
            </p>
            <ul className="mt-7 grid gap-2 font-sans text-base font-semibold sm:grid-cols-2" style={{ color: SHOP_BLUE_DEEP }}>
              {[
                "Cash on hand — not a wholesaler",
                "No commissions, no closing costs",
                "Close in 7 days or your timeline",
                "Tenants in place? Not a problem.",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden style={{ color: LEATHER }} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/get-offer"
                className="inline-flex items-center gap-2 px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] transition-colors"
                style={{ backgroundColor: SHOP_BLUE_DEEP, color: SAFETY }}
              >
                Request offer
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center gap-2 border-2 px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.18em]"
                style={{ borderColor: SHOP_BLUE_DEEP, color: SHOP_BLUE_DEEP }}
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.phone.web}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <PhotoSlot
                alt="James at a recent purchase, in workboots"
                caption="Hero photo: James in workwear (Carhartt-style, jeans, boots, NOT suit). Standing in front of a recent purchase OR mid-walk-through. Confident, neighborly, working class."
                aspect="aspect-[4/5]"
                className="rounded-none"
              />
              {/* Safety stripe */}
              <div
                className="absolute -bottom-3 -left-3 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: SAFETY, color: SHOP_BLUE_DEEP }}
              >
                James &middot; Co-owner
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CREDENTIAL ROW */}
      <section style={{ backgroundColor: SHOP_BLUE_DEEP, color: OFFWHITE }}>
        <Container className="grid gap-6 py-10 md:grid-cols-4">
          {[
            { stat: "[TO FILL]", label: "Houses purchased" },
            { stat: "14 days", label: "Avg. close" },
            { stat: "100%", label: "Closings at attorney" },
            { stat: "$0", label: "Fees, ever" },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p
                className="font-display text-5xl font-bold leading-none"
                style={{ color: SAFETY }}
              >
                {s.stat}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: `${OFFWHITE}AA` }}>
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* FORECLOSURE — workshop sign */}
      <section className="border-b-4 py-16 md:py-20" style={{ borderColor: SHOP_BLUE_DEEP }}>
        <Container>
          <div
            className="relative grid gap-8 p-6 md:grid-cols-12 md:gap-10 md:p-10"
            style={{
              backgroundColor: OFFWHITE,
              border: `4px solid ${SHOP_BLUE_DEEP}`,
              boxShadow: `8px 8px 0 0 ${LEATHER}`,
            }}
          >
            {/* Diagonal "open" tab */}
            <div
              className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ backgroundColor: SAFETY, color: SHOP_BLUE_DEEP }}
            >
              <ShieldCheck className="h-3 w-3" aria-hidden />
              Specialty: foreclosure help
            </div>
            <div className="md:col-span-7">
              <h2
                className="font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl"
                style={{ color: SHOP_BLUE_DEEP }}
              >
                Behind on the mortgage?
                <br />
                <span style={{ color: LEATHER }}>We&rsquo;ve got you.</span>
              </h2>
              <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed" style={{ color: STEEL }}>
                We&rsquo;ve helped countless homeowners avoid losing their
                house to a foreclosure auction &mdash; including ones where
                the attorney went silent and the bank stopped picking up.
                James knows how to talk to loss-mitigation, verify payoffs,
                and quietly close before a sale date. Whether you sell to us
                or not, you get clear answers.
              </p>
              <Link
                href="/sell/pre-foreclosure"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.18em] transition-colors"
                style={{ backgroundColor: LEATHER, color: OFFWHITE }}
              >
                See how it works
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ul className="md:col-span-5 space-y-3 self-center font-sans text-sm" style={{ color: SHOP_BLUE_DEEP }}>
              {[
                "We talk to your bank's loss-mit team directly.",
                "Short sales, payoff verifications, deed-in-lieu — we know the playbook.",
                "Closings before the sale date, when the timing's right.",
                "Confidential. Yard sign-free. Nothing public until closing day.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 border-l-4 py-1 pl-3" style={{ borderColor: SAFETY }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* PROCESS — three crates */}
      <section className="border-b-4 py-16 md:py-20" style={{ borderColor: SHOP_BLUE_DEEP, backgroundColor: SHOP_BLUE_DEEP, color: OFFWHITE }}>
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: SAFETY }}>
            How a job runs
          </p>
          <h2
            className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl"
            style={{ color: OFFWHITE }}
          >
            Three steps. No surprises.
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className="relative p-6"
                style={{
                  border: `2px solid ${OFFWHITE}55`,
                  backgroundColor: `${OFFWHITE}08`,
                }}
              >
                <div
                  className="absolute -top-4 left-4 px-3 py-1 font-mono text-sm font-bold tracking-widest"
                  style={{ backgroundColor: SAFETY, color: SHOP_BLUE_DEEP }}
                >
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="mt-4 font-display text-2xl font-bold uppercase tracking-tight"
                  style={{ color: OFFWHITE }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed" style={{ color: `${OFFWHITE}CC` }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* SITUATIONS WE HANDLE — utilitarian list */}
      <section className="border-b-4 py-16 md:py-20" style={{ borderColor: SHOP_BLUE_DEEP }}>
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: LEATHER }}>
            Job sheet
          </p>
          <h2
            className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl"
            style={{ color: SHOP_BLUE_DEEP }}
          >
            Situations we handle.
          </h2>
          <ul className="mt-10 grid gap-0 border-t-2" style={{ borderColor: SHOP_BLUE_DEEP }}>
            {[
              { t: "Inherited house", b: "We work with executors and probate attorneys. Out-of-state heirs welcome." },
              { t: "Tired landlord", b: "Tenants in place — fine. Behind on rent — fine. Section 8 — fine." },
              { t: "Pre-foreclosure", b: "Sale date on the calendar? Call now. We've stopped many." },
              { t: "Damaged / hoarder house", b: "Roof, foundation, fire, mold, animals. Don't fix anything." },
              { t: "Probate / estate", b: "We can sign now and close once authority is granted." },
              { t: "Relocating, fast", b: "Closing date around your move date. Remote closings welcome." },
              { t: "Divorce", b: "One number both parties react to. Discreet, on the decree's timeline." },
              { t: "Vacant for years", b: "Pipes, vandalism, taxes piling — we've seen worse." },
            ].map((s) => (
              <li
                key={s.t}
                className="grid grid-cols-12 border-b-2 p-5"
                style={{ borderColor: `${SHOP_BLUE_DEEP}33` }}
              >
                <p className="col-span-12 font-display text-xl font-bold uppercase tracking-tight md:col-span-3" style={{ color: SHOP_BLUE_DEEP }}>
                  {s.t}
                </p>
                <p className="col-span-12 font-sans text-base leading-relaxed md:col-span-9" style={{ color: STEEL }}>
                  {s.b}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* TESTIMONIALS — work-order style */}
      <section className="border-b-4 py-16 md:py-20" style={{ borderColor: SHOP_BLUE_DEEP, backgroundColor: OFFWHITE }}>
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: LEATHER }}>
            What sellers said
          </p>
          <h2
            className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl"
            style={{ color: SHOP_BLUE_DEEP }}
          >
            Closed jobs.
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="border-2 p-5"
                style={{ borderColor: SHOP_BLUE_DEEP, backgroundColor: OFFWHITE }}
              >
                <div className="flex items-center justify-between border-b-2 pb-2" style={{ borderColor: `${SHOP_BLUE_DEEP}33` }}>
                  <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: LEATHER }}>
                    Closed
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: SHOP_BLUE_DEEP }}>
                    {t.location}
                  </p>
                </div>
                <p className="mt-4 font-sans text-base leading-relaxed" style={{ color: SHOP_BLUE_DEEP }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 border-t pt-3 font-sans text-sm font-bold" style={{ color: SHOP_BLUE_DEEP, borderColor: `${SHOP_BLUE_DEEP}33` }}>
                  &mdash; {t.name}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ — utility list */}
      <section className="border-b-4 py-16 md:py-20" style={{ borderColor: SHOP_BLUE_DEEP }}>
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: LEATHER }}>
              Spec sheet
            </p>
            <h2
              className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl"
              style={{ color: SHOP_BLUE_DEEP }}
            >
              Common questions.
            </h2>
          </div>
          <ol className="md:col-span-8 space-y-5">
            {faqs.slice(0, 6).map((f, i) => (
              <li
                key={f.q}
                className="border-l-4 bg-paper/0 p-5"
                style={{ borderColor: SAFETY, backgroundColor: `${SHOP_BLUE_DEEP}08` }}
              >
                <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: LEATHER }}>
                  Q{String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-display text-lg font-bold uppercase tracking-tight" style={{ color: SHOP_BLUE_DEEP }}>
                  {f.q}
                </p>
                <p className="mt-2 font-sans text-base leading-relaxed" style={{ color: STEEL }}>
                  {f.a}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FORM — work order */}
      <section className="py-16 md:py-20">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: LEATHER }}>
              Open a job
            </p>
            <h2
              className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl"
              style={{ color: SHOP_BLUE_DEEP }}
            >
              Request your offer.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed" style={{ color: STEEL }}>
              Two minutes. James returns the call within an hour during business hours.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-7 inline-flex items-center gap-2 font-display text-3xl font-bold tracking-tight"
              style={{ color: SHOP_BLUE_DEEP }}
            >
              <Phone className="h-7 w-7" aria-hidden style={{ color: SAFETY, backgroundColor: SHOP_BLUE_DEEP, padding: "4px", borderRadius: "999px" }} />
              {site.phone.web}
            </a>
          </div>
          <div className="md:col-span-7">
            <div
              className="p-6 md:p-8"
              style={{
                backgroundColor: OFFWHITE,
                border: `4px solid ${SHOP_BLUE_DEEP}`,
                boxShadow: `8px 8px 0 0 ${SAFETY}`,
              }}
            >
              <div className="mb-5 flex items-center justify-between border-b-2 pb-3" style={{ borderColor: `${SHOP_BLUE_DEEP}33` }}>
                <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: SHOP_BLUE_DEEP }}>
                  Work order &middot; intake
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: LEATHER }}>
                  PL.{new Date().getFullYear()}
                </p>
              </div>
              <LeadForm source="home-steady" />
            </div>
          </div>
        </Container>
      </section>

      {/* BOTTOM STRIPE */}
      <div
        style={{
          background: `repeating-linear-gradient(135deg, ${SAFETY} 0 16px, ${SHOP_BLUE_DEEP} 16px 32px)`,
          height: "8px",
        }}
        aria-hidden
      />
    </div>
  );
}
