import Link from "next/link";
import { Phone, ArrowRight, Sun, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { faqs, processSteps, site, testimonials } from "@/content/site";

/**
 * First Light — dawn peach + dusty pink + soft sage + cream. Emotional /
 * hopeful. Built around the brief's line: "We bring light to the
 * uncertainty." Foreclosure help is the emotional centerpiece, not buried.
 *
 * Soft serif headlines, airy sans body, lots of negative space, warm sun
 * gradients. Reads like a wellness brand or a careful therapy practice.
 */

const CREAM = "#FBF4E8";
const PEACH = "#F4C5A0";
const PEACH_DEEP = "#D88E5C";
const DUSTY_ROSE = "#D9A6A0";
const SOFT_SAGE = "#A4B5A0";
const DEEP_SAGE = "#5C7159";
const COCOA = "#3F2E26";

const SUNRISE = `linear-gradient(180deg, ${CREAM} 0%, ${PEACH}40 45%, ${DUSTY_ROSE}30 70%, ${CREAM} 100%)`;

export function FirstLightHome() {
  return (
    <div style={{ backgroundColor: CREAM, color: COCOA }}>
      {/* HERO — sunrise gradient + photo + soft headline */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: SUNRISE }} aria-hidden />
        <Container className="grid items-center gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
          <div className="md:col-span-7">
            <p
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${DEEP_SAGE}15`, color: DEEP_SAGE }}
            >
              <Sun className="h-3 w-3" aria-hidden /> Family-owned in Rhode Island
            </p>
            <h1
              className="mt-6 font-display text-5xl leading-[1.04] tracking-tight md:text-7xl"
              style={{ color: COCOA }}
            >
              When everything feels uncertain, we bring{" "}
              <span style={{ color: PEACH_DEEP }} className="italic">
                a little light.
              </span>
            </h1>
            <p
              className="mt-7 max-w-xl font-display text-xl leading-relaxed"
              style={{ color: `${COCOA}CC` }}
            >
              I&rsquo;m James, co-owner of PorchLight Home Offers. We&rsquo;re a
              small Rhode Island family business, and we buy houses cash from
              neighbors going through hard chapters &mdash; an inheritance, a
              foreclosure, a divorce, a relocation, a hoarder&rsquo;s house, a
              parent&rsquo;s passing. We&rsquo;ll pick up the phone. We&rsquo;ll
              meet you at the house. We&rsquo;ll help you find your footing
              again, whether or not we end up buying.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/get-offer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-sans text-sm font-semibold transition-colors"
                style={{ backgroundColor: PEACH_DEEP, color: CREAM }}
              >
                Talk to James
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center gap-2 font-display text-2xl"
                style={{ color: COCOA }}
              >
                <Phone className="h-5 w-5" aria-hidden style={{ color: PEACH_DEEP }} />
                {site.phone.web}
              </a>
            </div>
            <p className="mt-3 font-display text-sm italic" style={{ color: `${COCOA}99` }}>
              No script, no pitch, no pressure. Just a conversation.
            </p>
          </div>
          <div className="md:col-span-5">
            <div
              className="relative overflow-hidden rounded-[2rem] p-3"
              style={{ backgroundColor: CREAM, boxShadow: `0 30px 60px -20px ${PEACH_DEEP}55` }}
            >
              <PhotoSlot
                alt="Soft morning light through a porch window"
                caption="Hero photo: warm soft-light moment — sunrise on a porch, OR James meeting a homeowner with morning light streaming. Soft, golden, unposed. Very emotional."
                aspect="aspect-[4/5]"
                className="rounded-[1.5rem]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FORECLOSURE — THE emotional centerpiece */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: `${SOFT_SAGE}25` }}
      >
        <Container className="max-w-4xl text-center">
          <p
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ backgroundColor: `${DEEP_SAGE}20`, color: DEEP_SAGE }}
          >
            <Heart className="h-3 w-3" aria-hidden /> If you&rsquo;re facing foreclosure
          </p>
          <h2
            className="mt-6 font-display text-4xl leading-tight md:text-6xl"
            style={{ color: COCOA }}
          >
            You should have someone in your{" "}
            <span style={{ color: DEEP_SAGE }} className="italic">
              corner
            </span>
            .
          </h2>
          <p
            className="mx-auto mt-7 max-w-2xl font-display text-xl leading-relaxed"
            style={{ color: `${COCOA}CC` }}
          >
            We&rsquo;ve helped countless families avoid losing a home to
            auction &mdash; including ones where attorneys had stopped
            returning calls and lenders had gone quiet. James knows how to
            talk to loss-mitigation, verify payoffs, and quietly close before
            a sale date. Whether you decide to sell to us or not, you&rsquo;ll
            get clear answers.
          </p>
          <p
            className="mx-auto mt-5 max-w-2xl font-display text-lg italic leading-relaxed"
            style={{ color: PEACH_DEEP }}
          >
            You don&rsquo;t have to figure this out alone.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/sell/pre-foreclosure"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-semibold transition-colors"
              style={{ backgroundColor: DEEP_SAGE, color: CREAM }}
            >
              How we help
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={`tel:${site.phone.web}`}
              className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-sans text-sm font-semibold transition-colors"
              style={{ borderColor: DEEP_SAGE, color: DEEP_SAGE }}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call James now
            </a>
          </div>
        </Container>
      </section>

      {/* GENTLE THREE-STEP */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${PEACH}40`, color: PEACH_DEEP }}
            >
              How it goes
            </p>
            <h2
              className="mt-5 font-display text-4xl leading-tight md:text-5xl"
              style={{ color: COCOA }}
            >
              Three steps, gently.
            </h2>
            <p className="mt-4 font-display text-lg leading-relaxed" style={{ color: `${COCOA}AA` }}>
              We move at your pace. If today isn&rsquo;t the day, we&rsquo;ll
              be here next month too.
            </p>
          </div>
          <ol className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
            {processSteps.map((s, i) => (
              <li key={s.title} className="text-center">
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full font-display text-3xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${PEACH} 0%, ${PEACH_DEEP} 100%)`,
                    color: CREAM,
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  className="mt-6 font-display text-2xl"
                  style={{ color: COCOA }}
                >
                  {s.title}
                </h3>
                <p
                  className="mx-auto mt-3 max-w-xs font-display text-base leading-relaxed"
                  style={{ color: `${COCOA}AA` }}
                >
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* SITUATIONS — soft cards */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: `${PEACH}25` }}
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${DEEP_SAGE}20`, color: DEEP_SAGE }}
            >
              No problem
            </p>
            <h2
              className="mt-5 font-display text-4xl leading-tight md:text-5xl"
              style={{ color: COCOA }}
            >
              We&rsquo;ve seen this chapter before.
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {[
              { t: "Inherited a house you don't know what to do with.", b: "We'll meet you there. Walk through it. Explain your options. No charge for the conversation." },
              { t: "Moving out of state — and time is short.", b: "We close on your timeline. Remote closings are routine for us." },
              { t: "Behind on the mortgage and don't know who to trust.", b: "We've stopped many auctions. Even if you don't sell to us, we can help you understand your options." },
              { t: "House is in rough shape and you're embarrassed.", b: "Don't be. Roof, foundation, hoarder, fire damage — we've bought all of it. No judgment." },
              { t: "Tenants in place who won't leave.", b: "We buy occupied. You don't have to be the bad guy." },
              { t: "You're going through a divorce.", b: "We can structure the closing around your settlement. Discreet, on the decree's timeline." },
            ].map((s) => (
              <li
                key={s.t}
                className="rounded-2xl p-6"
                style={{ backgroundColor: CREAM, boxShadow: `0 10px 30px -10px ${PEACH_DEEP}25` }}
              >
                <h3 className="font-display text-xl" style={{ color: PEACH_DEEP }}>
                  {s.t}
                </h3>
                <p className="mt-2 font-display text-base leading-relaxed" style={{ color: `${COCOA}AA` }}>
                  {s.b}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* TESTIMONIALS — gentle quotes */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${DUSTY_ROSE}40`, color: COCOA }}
            >
              What sellers say
            </p>
            <h2
              className="mt-5 font-display text-4xl leading-tight md:text-5xl"
              style={{ color: COCOA }}
            >
              The notes we keep on the fridge.
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="rounded-3xl p-7 text-center"
                style={{
                  backgroundColor: CREAM,
                  border: `1px solid ${DUSTY_ROSE}40`,
                  boxShadow: `0 10px 30px -15px ${PEACH_DEEP}30`,
                }}
              >
                <p
                  aria-hidden
                  className="font-display text-5xl leading-none"
                  style={{ color: PEACH }}
                >
                  &ldquo;
                </p>
                <p
                  className="mt-2 font-display text-lg italic leading-snug"
                  style={{ color: COCOA }}
                >
                  {t.quote}
                </p>
                <p className="mt-6 font-display text-sm" style={{ color: PEACH_DEEP }}>
                  &mdash; {t.name}, {t.location}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ — soft accordion-feel */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: `${SOFT_SAGE}20` }}
      >
        <Container className="max-w-3xl">
          <div className="text-center">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${DEEP_SAGE}15`, color: DEEP_SAGE }}
            >
              Frequent worries
            </p>
            <h2
              className="mt-5 font-display text-4xl leading-tight md:text-5xl"
              style={{ color: COCOA }}
            >
              The questions sellers ask gently first.
            </h2>
          </div>
          <ol className="mt-12 space-y-5">
            {faqs.slice(0, 6).map((f) => (
              <li
                key={f.q}
                className="rounded-2xl p-6"
                style={{ backgroundColor: CREAM, border: `1px solid ${SOFT_SAGE}55` }}
              >
                <p
                  className="font-display text-xl"
                  style={{ color: COCOA }}
                >
                  {f.q}
                </p>
                <p className="mt-3 font-display text-base leading-relaxed" style={{ color: `${COCOA}AA` }}>
                  {f.a}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FORM — sunrise framing */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10" style={{ background: SUNRISE }} aria-hidden />
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${PEACH}40`, color: PEACH_DEEP }}
            >
              When you&rsquo;re ready
            </p>
            <h2
              className="mt-5 font-display text-4xl leading-tight md:text-5xl"
              style={{ color: COCOA }}
            >
              Drop us a line. We&rsquo;ll meet you where you are.
            </h2>
            <p className="mt-5 font-display text-lg leading-relaxed" style={{ color: `${COCOA}AA` }}>
              Two minutes is enough to start. James responds within an hour
              during business hours, usually faster. No salespitch &mdash;
              ever.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-8 inline-flex items-center gap-2 font-display text-3xl"
              style={{ color: COCOA }}
            >
              <Phone className="h-6 w-6" aria-hidden style={{ color: PEACH_DEEP }} />
              {site.phone.web}
            </a>
            <p className="mt-2 font-display text-sm italic" style={{ color: DEEP_SAGE }}>
              Mon&ndash;Fri {site.hours.monFri}
            </p>
          </div>
          <div className="md:col-span-7">
            <div
              className="rounded-[2rem] p-7 md:p-9"
              style={{ backgroundColor: CREAM, boxShadow: `0 30px 60px -20px ${PEACH_DEEP}40` }}
            >
              <LeadForm source="home-first-light" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
