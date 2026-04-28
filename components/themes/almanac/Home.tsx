import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { faqs, processSteps, sellReasons, site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Almanac — Old Farmers' Almanac aesthetic, applied to homebuying. Decorative
 * double-rule borders, woodcut-style flourishes, sectioned content (a glossary,
 * "common house sicknesses," "the seller's calendar"), heavy serif body. Trust
 * through encyclopedic depth.
 *
 * Color: cream + ink + dark moss + faded brick red. Typography: serif body
 * everywhere; condensed display caps for section headings; small caps for
 * decorative labels.
 */

const BRICK = "#9C3D2A";
const DEEP_MOSS = "#3A4A3A";

export function AlmanacHome() {
  return (
    <div className="bg-[#F4EFE4] text-ink">
      {/* MASTHEAD */}
      <header className="border-b-4 border-double border-ink/40">
        <Container className="py-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink/60">
            Volume I &middot; No. 1 &middot; Spring 2026 &middot; Twenty-five cents
          </p>
          <Ornament className="mx-auto mt-3" />
          <h1 className="mt-3 font-display text-5xl uppercase italic leading-tight tracking-tight md:text-7xl">
            The PorchLight Almanac
          </h1>
          <p className="mt-3 font-display text-base italic text-ink-muted">
            A practical guide for selling a house, prepared for sellers in Rhode Island and the South Coast.
          </p>
          <Ornament className="mx-auto mt-4" />
          <p className="mt-4 font-display text-sm italic text-ink-muted">
            &mdash; Compiled by {site.owner.name}, founder &mdash;
          </p>
        </Container>
      </header>

      {/* HERO — woodcut illustration left, intro essay right */}
      <section className="border-b-2 border-ink/30">
        <Container className="grid items-stretch gap-0 md:grid-cols-12">
          <div className="border-r-2 border-double border-ink/30 p-6 md:col-span-5 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: BRICK }}>
              Frontispiece
            </p>
            <PhotoSlot
              alt="A New England porch at sunrise, etched/illustrated style"
              caption="Frontispiece — woodcut-style illustration of a New England porch / weather vane / lantern. B&W ink-line. Textbook engraving feel."
              aspect="aspect-[3/4]"
              className="mt-4 rounded-none border border-ink/30"
            />
            <p className="mt-3 font-display text-xs italic text-ink-muted">
              Plate I. &mdash; A porch, examined.
            </p>
          </div>
          <div className="p-6 md:col-span-7 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: BRICK }}>
              From the publisher
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              On the matter of selling a house in unusual circumstances.
            </h2>
            <div className="mt-6 space-y-4 font-display text-lg leading-relaxed text-ink first-letter:font-display first-letter:text-7xl first-letter:leading-none first-letter:float-left first-letter:mr-3 first-letter:mt-1" style={{ /* @ts-ignore */ ['--tw-prose-body' as string]: 'red' }}>
              <p>
                The traditional path of selling a home &mdash; agent, listing,
                showings, offers, contingencies, inspections, repairs, second
                appraisals &mdash; is well documented elsewhere. This almanac
                concerns itself with the other path: when a house must be sold
                quickly, as it is, with minimum disruption to the seller&rsquo;s
                life.
              </p>
              <p>
                Inheritance. Tired landlords. Foreclosure on the calendar.
                Divorces. Vacant houses bleeding tax dollars. Houses that have
                seen better decades. We buy these directly, in cash, and we
                close at a real attorney&rsquo;s office. What follows is the
                practical reference: how it works, when it&rsquo;s right, when
                it isn&rsquo;t, and what to expect.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t-2 border-double border-ink/30 pt-6">
              <Link
                href="/get-offer"
                className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Request an offer
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="font-display text-xl italic"
              >
                or telephone {site.phone.web}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="border-b-2 border-ink/30 bg-paper-2/40 py-12">
        <Container className="max-w-3xl">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: BRICK }}>
            Contents
          </p>
          <Ornament className="mx-auto mt-3" />
          <ol className="mt-8 grid gap-x-12 gap-y-2 md:grid-cols-2">
            {[
              "I. The seller's calendar",
              "II. Common house sicknesses",
              "III. A glossary of useful terms",
              "IV. The reasons we are most often called",
              "V. The proceeding, in three parts",
              "VI. Verbatim, from neighbors",
              "VII. Frequently posed questions",
              "VIII. Where we travel",
            ].map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-2 border-b border-dotted border-ink/30 pb-1 font-display text-base"
              >
                <span className="flex-1 italic">{item}</span>
                <span className="font-mono text-xs text-ink-muted">{Math.floor(Math.random() * 99 + 1).toString().padStart(2, '0')}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* THE SELLER'S CALENDAR */}
      <Article number="I" title="The Seller's Calendar" subtitle="Approximate timing, from first call to wire transfer.">
        <ol className="grid gap-0 border-y-2 border-double border-ink/30">
          {[
            { day: "Day 0", note: "Seller calls or texts. We listen, ask a few questions, schedule a 20-minute walk-through." },
            { day: "Day 1–2", note: "Walk-through. We look at the major systems and the cost of the work, and we leave you alone to think." },
            { day: "Day 2", note: "Written offer with the math, by email or text. No verbal pressure, no follow-up calls until you reach back out." },
            { day: "Day 3–14", note: "Title search, attorney prep, your decision-making. We don't push." },
            { day: "Day 7–90", note: "Closing, on whatever date works for your move. Funds wire that day." },
          ].map((d, i) => (
            <li key={d.day} className={cn("grid grid-cols-12 border-b border-dotted border-ink/30 last:border-0 p-5", i % 2 === 1 && "bg-paper-2/40")}>
              <span className="col-span-3 font-mono text-sm uppercase tracking-widest text-ink/70">{d.day}</span>
              <span className="col-span-9 font-display text-lg leading-relaxed">{d.note}</span>
            </li>
          ))}
        </ol>
      </Article>

      {/* COMMON HOUSE SICKNESSES */}
      <Article number="II" title="Common House Sicknesses" subtitle="A non-exhaustive catalogue of conditions we are accustomed to.">
        <ul className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {[
            { name: "Failed roof", detail: "Curling shingles, interior staining, sagging deck. We expect this on most of our purchases." },
            { name: "Knob & tube remnants", detail: "Common in pre-war housing. Affects insurability and lender financing &mdash; not us." },
            { name: "Settling foundation", detail: "Hairline cracks: cosmetic. Step cracks or active water: factored honestly into the offer." },
            { name: "Hoarder situation", detail: "Surface or wall-to-wall. We handle the cleanout. Take only what's meaningful." },
            { name: "Vacant for years", detail: "Pipes, mice, possible vandalism. We've bought worse." },
            { name: "Code violations", detail: "We work with the city to clear them post-close. You don't have to." },
          ].map((s) => (
            <li key={s.name} className="border-l-4 pl-5" style={{ borderColor: BRICK }}>
              <p className="font-display text-xl italic">{s.name}.</p>
              <p className="mt-1 font-display text-base leading-relaxed text-ink-muted">{s.detail}</p>
            </li>
          ))}
        </ul>
      </Article>

      {/* GLOSSARY */}
      <Article number="III" title="A Glossary of Useful Terms" subtitle="So you and we are speaking the same language.">
        <dl className="grid gap-x-12 gap-y-4 font-display text-base md:grid-cols-2">
          {[
            { t: "ARV", d: "After-repair value. What the house is worth after it's been renovated to current market standard." },
            { t: "As-is", d: "Sold in present condition, with no repairs, no warranties. The way we always buy." },
            { t: "Title clear", d: "No outstanding liens, judgments, or ownership disputes preventing transfer." },
            { t: "Probate", d: "The legal process of authorizing an estate's executor to sell. Usually 30–90 days in RI." },
            { t: "Cash buyer", d: "A buyer using their own funds, not a mortgage. No appraisal contingency, no lender fall-through." },
            { t: "Wholesaler", d: "An operator who signs a contract to buy and then assigns it to someone else. We are not this." },
            { t: "Closing statement", d: "The itemized accounting of money in and out at closing. We share ours in advance." },
            { t: "Earnest money", d: "Good-faith deposit to lock in a contract. Held by the closing attorney, applied to purchase." },
          ].map((g) => (
            <div key={g.t} className="border-b border-dotted border-ink/30 pb-3">
              <dt className="font-bold uppercase tracking-wide">{g.t}.</dt>
              <dd className="mt-1 italic text-ink-muted">{g.d}</dd>
            </div>
          ))}
        </dl>
      </Article>

      {/* WHY WE'RE CALLED */}
      <Article number="IV" title="The Reasons We Are Most Often Called" subtitle="Categorised, in approximate order of frequency.">
        <ol className="grid gap-x-10 gap-y-5 md:grid-cols-2">
          {sellReasons.map((r, i) => (
            <li key={r.title} className="grid grid-cols-[auto_1fr] gap-4">
              <span
                className="font-display text-3xl"
                style={{ color: BRICK }}
              >
                {i + 1}.
              </span>
              <div>
                <p className="font-display text-xl italic">{r.title}.</p>
                <p className="mt-1 font-display text-base leading-relaxed text-ink-muted">{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Article>

      {/* THE PROCEEDING */}
      <Article number="V" title="The Proceeding, In Three Parts" subtitle="A simple narrative.">
        <ol className="space-y-10">
          {processSteps.map((s, i) => (
            <li key={s.title} className="grid gap-4 md:grid-cols-12">
              <span className="md:col-span-2 font-display text-5xl italic" style={{ color: BRICK }}>
                {["First", "Second", "Third"][i]}
              </span>
              <div className="md:col-span-10">
                <p className="font-display text-2xl">{s.title}.</p>
                <p className="mt-2 font-display text-lg leading-relaxed text-ink-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Article>

      {/* VERBATIM */}
      <Article number="VI" title="Verbatim, From Neighbors" subtitle="Reprinted with permission.">
        <ul className="grid gap-8 md:grid-cols-2">
          {[
            { q: "[TO FILL] Honest math. They showed me their numbers. Even pointed out one thing I could've negotiated up. Who does that.", who: "[TO FILL] · Cranston, RI" },
            { q: "[TO FILL] We got three other 'cash offers' from random texts. Two ghosted. PorchLight closed in 12 days, on the date we asked.", who: "[TO FILL] · Fall River, MA" },
            { q: "[TO FILL] My biggest fear was being lowballed because Mom's house was a wreck. They walked me through every line. I felt taken care of.", who: "[TO FILL] · East Providence, RI" },
            { q: "[TO FILL] I asked them to wait until probate finished. They waited. No pressure calls. Just patient.", who: "[TO FILL] · Plymouth, MA" },
          ].map((v, i) => (
            <li key={i} className="border-l-4 pl-5" style={{ borderColor: DEEP_MOSS }}>
              <p className="font-display text-xl italic leading-snug">&ldquo;{v.q}&rdquo;</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-ink-muted">{v.who}</p>
            </li>
          ))}
        </ul>
      </Article>

      {/* FAQ */}
      <Article number="VII" title="Frequently Posed Questions" subtitle="With unhurried answers.">
        <ol className="space-y-7">
          {faqs.slice(0, 6).map((f, i) => (
            <li key={f.q} className="grid grid-cols-[auto_1fr] gap-4 border-b border-dotted border-ink/30 pb-6 last:border-0">
              <span className="font-display text-xl italic" style={{ color: BRICK }}>{i + 1}.</span>
              <div>
                <p className="font-display text-xl">{f.q}</p>
                <p className="mt-2 font-display text-base leading-relaxed text-ink-muted">{f.a}</p>
              </div>
            </li>
          ))}
        </ol>
      </Article>

      <ServiceArea />

      {/* COLOPHON / FORM */}
      <section className="border-y-4 border-double border-ink/40 py-16 md:py-20">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 text-center md:text-left">
            <Ornament className="mb-4 md:mx-0" />
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: BRICK }}>
              Correspondence
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase italic leading-tight md:text-5xl">
              To request your offer.
            </h2>
            <p className="mt-5 font-display text-lg italic leading-relaxed text-ink-muted">
              Affix the particulars to the form opposite, or telephone the
              author directly.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-6 inline-flex items-center gap-2 font-display text-3xl italic"
            >
              <Phone className="h-6 w-6" aria-hidden />
              {site.phone.web}
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="relative border-2 border-double border-ink/40 bg-paper p-6 md:p-8">
              <div className="absolute -top-3 left-6 bg-[#F4EFE4] px-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Form &mdash; PL.1
              </div>
              <LeadForm source="home-almanac" />
            </div>
          </div>
        </Container>
      </section>

      {/* COLOPHON FOOTNOTE */}
      <section className="py-10 text-center">
        <Container>
          <Ornament className="mx-auto" />
          <p className="mt-4 font-display text-sm italic text-ink-muted">
            Set in Fraunces &amp; Inter. Printed in Rhode Island, on the
            internet, in the year of our Lord {new Date().getFullYear()}.
          </p>
        </Container>
      </section>
    </div>
  );
}

// --- Helpers ---

function Article({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <article className="border-b-2 border-ink/30 py-16 md:py-20">
      <Container>
        <header className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: BRICK }}>
            Article {number}
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase italic leading-tight md:text-5xl">
            {title}.
          </h2>
          <p className="mt-2 font-display text-base italic text-ink-muted">{subtitle}</p>
          <Ornament className="mx-auto mt-4" />
        </header>
        <div className="mt-12">{children}</div>
      </Container>
    </article>
  );
}

function Ornament({ className }: { className?: string }) {
  // Simple decorative flourish — three diamonds with rules. Used between sections.
  return (
    <div
      aria-hidden
      className={cn("flex w-fit items-center gap-2 text-ink-muted", className)}
    >
      <span className="block h-px w-12 bg-current" />
      <span className="text-base">❦</span>
      <span className="text-xs">◆</span>
      <span className="text-base">❦</span>
      <span className="block h-px w-12 bg-current" />
    </div>
  );
}
