import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { ServiceArea } from "@/components/sections/ServiceArea";
import {
  faqs,
  ownerStory,
  processSteps,
  sellReasons,
  site,
  testimonials,
} from "@/content/site";

/**
 * Letter — editorial / longform / owner-led. Inspired by regional magazine
 * profiles. All-serif typography, asymmetric grid, the owner story sits up
 * front instead of buried; the form lives at the end after the reader has
 * gotten to know us.
 */
export function LetterHome() {
  return (
    <>
      {/* HERO — full-width photo + a short, hand-set introduction. No form. */}
      <section className="border-b border-rule/10 bg-paper">
        <Container className="py-10 md:py-16">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
            A letter from {site.name}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.06] tracking-tight md:text-7xl">
            We&rsquo;re local, we&rsquo;re small, and we buy the houses our
            neighbors are ready to walk away from.
          </h1>
        </Container>
        <PhotoSlot
          alt="Owner standing on a Rhode Island porch in golden hour light"
          caption="Hero photo: owner on a porch (one of the houses we bought) — golden hour, 35mm, candid not posed. Fills the full hero width."
          aspect="aspect-[16/7]"
          className="rounded-none"
        />
        <Container className="grid gap-10 py-10 md:grid-cols-12 md:py-14">
          <div className="md:col-span-7">
            <p className="font-display text-2xl leading-relaxed text-ink-muted md:text-[26px]">
              <span className="text-ink">Hi.</span>{" "}
              {ownerStory.paragraphs[0]}
            </p>
            <p className="mt-6 font-display text-xl leading-relaxed text-ink-muted">
              {ownerStory.paragraphs[1]}
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-md border-l-2 border-amber p-6 text-ink">
              <p className="font-display text-2xl italic leading-snug">
                &ldquo;Selling to PorchLight wasn&rsquo;t about getting the highest
                number. It was about being treated like a person while we sorted
                out my mom&rsquo;s estate.&rdquo;
              </p>
              <p className="mt-4 font-sans text-sm text-ink-muted">
                — {testimonials[0]?.name ?? "[TO FILL]"} ·{" "}
                {testimonials[0]?.location ?? "[TO FILL]"}
              </p>
            </div>
          </aside>
        </Container>
      </section>

      {/* WHY US — written in second person, like a personal letter */}
      <section className="bg-paper-2/40 py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
              Chapter one
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              How a sale to us actually goes.
            </h2>
            <p className="mt-5 font-display text-lg italic text-ink-muted">
              No jargon. No high-pressure call. Just a conversation, then a
              written number.
            </p>
          </div>
          <ol className="md:col-span-8 space-y-10">
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className="grid grid-cols-[auto_1fr] gap-6 border-b border-rule/15 pb-10 last:border-0 last:pb-0"
              >
                <span className="font-display text-6xl text-amber-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-3 font-display text-lg leading-relaxed text-ink-muted">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* OWNER STORY — heavy serif, double column drop cap */}
      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <PhotoSlot
              alt="Portrait of the founder"
              caption="Owner portrait — 4:5 vertical, neutral background, eye contact, slight smile. Shot indoors with window light."
              aspect="aspect-[4/5]"
            />
            <p className="mt-3 font-sans text-xs italic text-ink-muted">
              {site.owner.name}, founder
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
              Chapter two
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              {ownerStory.headline}
            </h2>
            <div className="mt-7 space-y-5 font-display text-xl leading-[1.55] text-ink first-letter:font-display first-letter:text-7xl first-letter:leading-none first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-deep">
              {ownerStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHEN WE'RE THE RIGHT FIT — written as candid prose, not a pitch */}
      <section className="bg-paper-2/40 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
              Chapter three
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              When we&rsquo;re the right call — and when we&rsquo;re honestly not.
            </h2>
            <p className="mt-5 font-display text-lg leading-relaxed text-ink-muted">
              If your house is in great shape and you have time, an agent will
              probably get you more dollars. We&rsquo;ll tell you that out loud.
              We&rsquo;re the right call when one of these is true:
            </p>
          </div>
          <ul className="mt-12 grid gap-y-8 md:grid-cols-2 md:gap-x-12">
            {sellReasons.map((r) => (
              <li key={r.title} className="border-l-2 border-amber/40 pl-5">
                <h3 className="font-display text-xl text-ink">{r.title}</h3>
                <p className="mt-2 font-display text-base leading-relaxed text-ink-muted">
                  {r.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FULL-WIDTH PULL QUOTE */}
      <section className="bg-ink py-16 text-paper md:py-20">
        <Container className="max-w-4xl text-center">
          <p className="font-display text-3xl italic leading-snug md:text-5xl">
            &ldquo;The number was lower than the agent&rsquo;s, but I&rsquo;d
            already been through one fall-through and didn&rsquo;t have it in me
            to keep going. PorchLight closed in nine days.&rdquo;
          </p>
          <p className="mt-6 font-sans text-sm uppercase tracking-[0.22em] text-paper/70">
            {testimonials[2]?.name ?? "[TO FILL]"} ·{" "}
            {testimonials[2]?.location ?? "[TO FILL]"}
          </p>
        </Container>
      </section>

      {/* HOUSES WE'VE BOUGHT — small grid of property photos */}
      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
              Recent
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              A few houses we&rsquo;ve bought lately.
            </h2>
            <p className="mt-4 font-display text-lg italic text-ink-muted">
              Real properties, real situations. With each seller&rsquo;s
              permission, naturally.
            </p>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { caption: "Smith Hill triple-decker — closed 11 days, tenants stayed in place." },
              { caption: "Inherited cape in Cranston — full cleanout, closed in 14 days." },
              { caption: "Fall River three-decker, vacant for 3 years — as-is." },
            ].map((p) => (
              <li key={p.caption}>
                <PhotoSlot
                  alt="A house we bought"
                  caption={p.caption}
                  aspect="aspect-[4/3]"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ServiceArea />

      {/* FAQ — numbered editorial list */}
      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
              Notes
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              The questions everyone asks.
            </h2>
          </div>
          <ol className="mt-12 max-w-3xl space-y-10">
            {faqs.slice(0, 6).map((f, i) => (
              <li
                key={f.q}
                className="grid grid-cols-[auto_1fr] gap-6 border-b border-rule/15 pb-8 last:border-0"
              >
                <span className="font-display text-3xl text-amber-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl italic text-ink">{f.q}</h3>
                  <p className="mt-3 font-display text-lg leading-relaxed text-ink-muted">
                    {f.a}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FORM AT THE END — earned, not demanded */}
      <section className="border-t border-rule/10 bg-paper-2/60 py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
              Hello
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              When you&rsquo;re ready, here&rsquo;s how to reach us.
            </h2>
            <p className="mt-5 font-display text-lg leading-relaxed text-ink-muted">
              Two minutes online below, or call &mdash; we answer our own
              phones. Either way, no pressure.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-8 inline-flex items-center gap-2 font-display text-3xl text-ink hover:text-amber-deep"
            >
              <Phone className="h-6 w-6 text-amber-deep" aria-hidden />
              {site.phone.web}
            </a>
            <p className="mt-2 font-sans text-sm text-ink-muted">
              Mon&ndash;Fri {site.hours.monFri}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1 font-display text-base italic text-amber-deep hover:text-ink"
            >
              Read our full story
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-md border border-rule/15 bg-paper p-6 md:p-8">
              <LeadForm source="home-letter" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
