import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { faqs, processSteps, site, testimonials } from "@/content/site";

/**
 * Gazette — local newspaper. Front-page masthead, multi-column articles,
 * columnist headshots, classifieds-style "we buy houses" listing. Reads like
 * a Pawtucket community paper or a vintage local broadsheet. Hyperlocal trust
 * signal.
 *
 * Color: newsprint cream + ink + a single faded ad-color (washed teal) for
 * accents. Typography: condensed serif for headlines, body serif, monospace
 * for kickers/datelines.
 */

const NEWS_INK = "#1A1A1A";
const FADED_TEAL = "#3A6B6E";
const NEWSPRINT = "#F2EAD7";
const NEWSPRINT_DARKER = "#E5DCC4";

export function GazetteHome() {
  return (
    <div style={{ backgroundColor: NEWSPRINT, color: NEWS_INK }}>
      {/* MASTHEAD */}
      <header className="border-b-4 border-double border-ink">
        <Container className="py-6">
          <div className="flex items-center justify-between border-b border-ink/30 pb-2 font-mono text-[11px] uppercase tracking-widest text-ink/70">
            <span>Vol. I &middot; No. 7</span>
            <span>Established 2026</span>
            <span>Twenty-five cents</span>
          </div>
          <div className="py-3 text-center">
            <p
              className="font-display text-base italic tracking-wide"
              style={{ color: FADED_TEAL }}
            >
              The local broadsheet for sellers in Rhode Island and the South Coast
            </p>
            <h1 className="mt-1 font-display text-6xl uppercase leading-none tracking-tight md:text-8xl">
              The PorchLight Gazette
            </h1>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 border-t border-ink/30 pt-2 font-mono text-[11px] uppercase tracking-widest text-ink/70 md:flex-row">
            <span>Spring Edition · {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>Providence · Pawtucket · Cranston · Newport · Fall River · New Bedford · Plymouth</span>
            <span>{site.phone.web}</span>
          </div>
        </Container>
      </header>

      {/* FRONT PAGE — multi-column lead story + sidebar */}
      <section className="border-b-2 border-ink">
        <Container className="grid gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14">
          {/* Lead story — 8 cols */}
          <article className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: FADED_TEAL }}>
              Front page &middot; Lead story
            </p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-[1.02] tracking-tight md:text-6xl">
              Local company quietly buys 100 RI houses, doesn&rsquo;t lowball anyone.
            </h2>
            <p className="mt-3 font-display text-base italic text-ink-muted">
              Special to the Gazette &middot; By the Editorial Desk &middot; {site.owner.name}, founder
            </p>
            <PhotoSlot
              alt="Founder in front of a recently purchased home"
              caption="Editorial photo: founder standing on the steps of a recent purchase, candid mid-stride OR mid-conversation. Newspaper-feel, not glamour."
              aspect="aspect-[16/9]"
              className="mt-5 rounded-none border border-ink/20"
            />
            <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink/60">
              Above &mdash; {site.owner.name} on a recent closing morning. Photograph by [TO FILL].
            </p>

            <div className="mt-6 columns-1 gap-8 font-display text-lg leading-[1.6] text-ink first-letter:font-display first-letter:text-7xl first-letter:leading-none first-letter:float-left first-letter:mr-3 first-letter:mt-1 md:columns-2">
              <p>
                <strong>Providence &mdash;</strong> While much of the cash-buying
                world races to the bottom on price, a small Rhode Island company
                has spent the last several years doing something different:
                buying houses honestly, paying fair numbers, and walking sellers
                away from deals that aren&rsquo;t in their interest.
              </p>
              <p className="mt-4">
                PorchLight Home Offers, founded by {site.owner.name}, has bought
                north of [TO FILL] homes across Rhode Island and southeastern
                Massachusetts &mdash; mostly from inheritors, tired landlords,
                and folks 90 days from foreclosure. The company has no
                advertising budget to speak of. Most leads come from a single,
                hand-printed postcard.
              </p>
              <p className="mt-4">
                &ldquo;We&rsquo;re not trying to be everyone&rsquo;s buyer,&rdquo;
                {site.owner.name} said. &ldquo;If listing nets you more, we&rsquo;ll
                say so out loud, and tell you who to call. We&rsquo;re only
                useful when speed, certainty, or the condition of the house
                matters more than squeezing the last few percent.&rdquo;
              </p>
              <p className="mt-4">
                The company closes at a real attorney&rsquo;s office, never
                assigns contracts, and shares the math behind every offer in
                writing. Sellers we contacted described the experience as,
                variously: &ldquo;refreshingly normal,&rdquo; &ldquo;weirdly
                honest,&rdquo; and &ldquo;the only one who didn&rsquo;t feel
                like a scam.&rdquo;
              </p>
              <p className="mt-4">
                Continued on page two &rsaquo;
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t-2 border-ink/30 pt-6">
              <Link
                href="/get-offer"
                className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Request your offer
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="font-display text-2xl italic"
              >
                Call {site.phone.web}
              </a>
            </div>
          </article>

          {/* Sidebar — 4 cols */}
          <aside className="md:col-span-4">
            {/* Inset 1: stats */}
            <div className="border-2 border-ink p-5">
              <p className="border-b border-ink/30 pb-2 text-center font-mono text-[11px] uppercase tracking-widest text-ink/70">
                The numbers
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  { n: "[TO FILL]", l: "houses purchased to date" },
                  { n: "14 days", l: "average time to close" },
                  { n: "$0", l: "agent commissions" },
                  { n: "100%", l: "closings at a real attorney's office" },
                ].map((s) => (
                  <li key={s.l} className="border-b border-dotted border-ink/30 pb-2 last:border-0">
                    <p className="font-display text-3xl">{s.n}</p>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">{s.l}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inset 2: editorial cartoon / photo */}
            <div className="mt-6 border-2 border-ink p-3">
              <PhotoSlot
                alt="A house we bought"
                caption="Editorial cut: a typical recent purchase. B&W. Sized like a small newspaper cut."
                aspect="aspect-square"
                className="rounded-none"
              />
              <p className="mt-2 text-center font-mono text-[11px] italic text-ink-muted">
                A typical recent purchase, Smith Hill.
              </p>
            </div>

            {/* Inset 3: classified ad */}
            <div className="mt-6 border-2 border-double border-ink p-5 text-center" style={{ backgroundColor: NEWSPRINT_DARKER }}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/70">Classified</p>
              <h3 className="mt-2 font-display text-3xl uppercase tracking-wide">We Buy Houses</h3>
              <p className="mt-2 font-display text-base italic">Cash · As-Is · Any Condition</p>
              <p className="mt-3 border-t border-ink/30 pt-3 font-display text-sm leading-relaxed">
                Local Rhode Island operator. We close at attorney&rsquo;s
                office. No fees, no commissions, no surprises.
              </p>
              <a
                href={`tel:${site.phone.web}`}
                className="mt-3 inline-flex items-center gap-2 font-display text-2xl"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {site.phone.web}
              </a>
            </div>
          </aside>
        </Container>
      </section>

      {/* PAGE TWO — three-column secondary stories */}
      <section className="border-b-2 border-ink">
        <Container className="py-10 md:py-14">
          <div className="border-b-2 border-ink pb-2 text-center font-mono text-[11px] uppercase tracking-widest text-ink/60">
            Page Two &middot; In the neighborhood
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:divide-x md:divide-ink/20">
            {/* Story A: Process */}
            <article className="md:pr-6">
              <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: FADED_TEAL }}>
                Local interest
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase leading-tight">
                How a sale to PorchLight unfolds, in three brief steps.
              </h3>
              <ol className="mt-4 space-y-4 font-display text-base leading-relaxed">
                {processSteps.map((s, i) => (
                  <li key={s.title} className="border-l-4 border-ink pl-4">
                    <p className="font-mono text-xs italic text-ink-muted">Step {i + 1}</p>
                    <p className="font-display text-lg font-bold">{s.title}.</p>
                    <p className="mt-1 text-ink-muted">{s.body}</p>
                  </li>
                ))}
              </ol>
            </article>

            {/* Story B: Testimonial feature */}
            <article className="md:px-6">
              <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: FADED_TEAL }}>
                Reader letter
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase leading-tight">
                &ldquo;After my mom passed, the house just sat there.&rdquo;
              </h3>
              <PhotoSlot
                alt="Reader photo"
                caption="Reader photo: testimonial subject, candid, in front of the property."
                aspect="aspect-[4/3]"
                className="mt-4 rounded-none border border-ink/20"
              />
              <p className="mt-4 font-display text-base leading-relaxed">
                {testimonials[0]?.quote ?? "[TO FILL]"}
              </p>
              <p className="mt-3 font-mono text-xs italic text-ink-muted">
                &mdash; {testimonials[0]?.name ?? "[TO FILL]"}, {testimonials[0]?.location ?? "[TO FILL]"}
              </p>
            </article>

            {/* Story C: Op-ed */}
            <article className="md:pl-6">
              <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: FADED_TEAL }}>
                Op-ed
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase leading-tight">
                A note from the founder: when you should NOT sell to us.
              </h3>
              <p className="mt-3 font-mono text-xs italic text-ink-muted">
                By {site.owner.name}, founder of PorchLight
              </p>
              <div className="mt-4 space-y-3 font-display text-base leading-relaxed">
                <p>
                  Most cash-buyer websites will never tell you this, so I will:
                  if your house is in good shape and you have time, you should
                  list with an agent. Period.
                </p>
                <p>
                  We&rsquo;re only the right call if speed, certainty, or
                  condition matters more than getting the last few percent. If
                  you&rsquo;re not sure which camp you&rsquo;re in, call us
                  anyway. Free advice; we&rsquo;re happy to give it.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* COLUMNISTS / TESTIMONIALS */}
      <section className="border-b-2 border-ink py-12 md:py-16" style={{ backgroundColor: NEWSPRINT_DARKER }}>
        <Container>
          <div className="border-b-2 border-ink pb-2 text-center font-mono text-[11px] uppercase tracking-widest text-ink/60">
            Page Three &middot; Letters from neighbors
          </div>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={`${t.name}-${i}`} className="bg-paper p-5 ring-1 ring-ink/10">
                <div className="flex items-start gap-4">
                  <PhotoSlot
                    alt={`${t.name} headshot`}
                    caption={`Tiny columnist headshot of ${t.name} — circular crop or square. B&W ok.`}
                    aspect="aspect-square"
                    className="w-20 shrink-0 rounded-none border border-ink/20"
                  />
                  <div>
                    <p className="font-display text-lg font-bold">{t.name}</p>
                    <p className="font-mono text-[11px] italic text-ink-muted">
                      {t.situation} &middot; {t.location}
                    </p>
                  </div>
                </div>
                <p className="mt-4 border-t border-ink/15 pt-4 font-display text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* DEAR EDITOR — FAQ in letter form */}
      <section className="border-b-2 border-ink py-12 md:py-16">
        <Container>
          <div className="border-b-2 border-ink pb-2 text-center font-mono text-[11px] uppercase tracking-widest text-ink/60">
            Page Four &middot; Dear Editor
          </div>
          <div className="mt-8 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl uppercase leading-tight">Reader Q &amp; A</h2>
              <p className="mt-3 font-display text-base italic leading-relaxed text-ink-muted">
                The most common questions we get from sellers. Answered with no
                spin and minimal jargon.
              </p>
            </div>
            <ol className="md:col-span-8 space-y-6">
              {faqs.slice(0, 6).map((f, i) => (
                <li key={f.q} className="border-b border-dotted border-ink/30 pb-5 last:border-0">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                    Question {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-display text-xl">{f.q}</p>
                  <p className="mt-2 font-display text-base leading-relaxed text-ink-muted">
                    <span className="font-bold uppercase tracking-wider">Editor:</span>{" "}
                    {f.a}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* CLASSIFIEDS / SERVICE AREA */}
      <section className="border-b-2 border-ink py-12 md:py-16" style={{ backgroundColor: NEWSPRINT_DARKER }}>
        <Container>
          <div className="border-b-2 border-ink pb-2 text-center font-mono text-[11px] uppercase tracking-widest text-ink/60">
            Page Five &middot; Classifieds &middot; Service Area
          </div>
          <ul className="mt-8 grid gap-3 md:grid-cols-4">
            {[
              { county: "Rhode Island", cities: "Providence · Cranston · Warwick · Pawtucket · East Providence · Woonsocket · Newport · Bristol · Westerly · North Kingstown" },
              { county: "Bristol County, MA", cities: "Fall River · New Bedford · Taunton" },
              { county: "Plymouth County, MA", cities: "Plymouth · Brockton · Bridgewater · Middleborough · Wareham" },
              { county: "Norfolk County, MA", cities: "Quincy · Weymouth · Braintree · Franklin · Stoughton" },
            ].map((g) => (
              <li key={g.county} className="border-2 border-ink bg-paper p-4">
                <p className="border-b border-ink/30 pb-2 font-display text-sm font-bold uppercase">{g.county}</p>
                <p className="mt-2 font-display text-sm leading-relaxed">{g.cities}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center font-display text-sm italic text-ink-muted">
            Don&rsquo;t see your town? Telephone the editor &mdash; we cover
            most of the area regardless.
          </p>
        </Container>
      </section>

      {/* TEAR-OUT FORM */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="border-b-2 border-ink pb-2 text-center font-mono text-[11px] uppercase tracking-widest text-ink/60">
            Tear-out coupon
          </div>
          <div className="mx-auto mt-8 max-w-3xl border-4 border-dashed border-ink p-6 md:p-10">
            <div className="text-center">
              <h2 className="font-display text-4xl uppercase tracking-tight md:text-5xl">
                Request your offer.
              </h2>
              <p className="mt-3 font-display text-lg italic text-ink-muted">
                Fill below. We&rsquo;ll reply within one business hour.
              </p>
              <a
                href={`tel:${site.phone.web}`}
                className="mt-3 inline-flex items-center gap-2 font-display text-2xl italic"
              >
                <Phone className="h-5 w-5" aria-hidden />
                or call {site.phone.web}
              </a>
            </div>
            <div className="mt-8">
              <LeadForm source="home-gazette" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

