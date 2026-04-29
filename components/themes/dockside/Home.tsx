import Link from "next/link";
import { Phone, ArrowRight, Anchor, Compass, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { faqs, processSteps, site, testimonials } from "@/content/site";

/**
 * Dockside — coastal New England. Deep navy + sand + sun-faded teal + buoy
 * red accents. "Your neighbor on the South Coast." Maritime layout, lighthouse
 * / dock photography, process described as "navigation."
 *
 * James is hardcoded. site.ts left untouched.
 */

const SAND = "#EFE5D2";
const SAND_DARK = "#DCCFB0";
const NAVY = "#1B2D3F";
const NAVY_LIGHT = "#2E4661";
const TEAL = "#5C8893";
const BUOY_RED = "#B6453A";

export function DocksideHome() {
  return (
    <div style={{ backgroundColor: SAND, color: NAVY }}>
      {/* TOP NAUTICAL RULE */}
      <div className="border-b" style={{ borderColor: NAVY, backgroundColor: NAVY }}>
        <Container className="py-2 text-center font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: SAND }}>
          ⚓ &nbsp; Rhode Island &amp; the South Coast &nbsp; · &nbsp; Family-owned since [TO FILL]
          &nbsp; · &nbsp; {site.phone.web}
        </Container>
      </div>

      {/* HERO — split with maritime illustration mood */}
      <section className="border-b-2" style={{ borderColor: `${NAVY}33` }}>
        <Container className="grid gap-10 py-14 md:grid-cols-12 md:gap-14 md:py-20">
          <div className="md:col-span-7">
            <p
              className="inline-flex items-center gap-2 rounded-sm px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ backgroundColor: `${TEAL}25`, color: NAVY_LIGHT }}
            >
              <Compass className="h-3 w-3" aria-hidden /> Charting the South Coast
            </p>
            <h1
              className="mt-5 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl"
              style={{ color: NAVY }}
            >
              When you&rsquo;re ready to sell,
              <br />
              <span style={{ color: TEAL }} className="italic">we&rsquo;ll help you</span>{" "}
              <span style={{ color: NAVY }}>chart the course.</span>
            </h1>
            <p
              className="mt-6 max-w-xl font-display text-xl leading-relaxed"
              style={{ color: NAVY_LIGHT }}
            >
              I&rsquo;m James &mdash; co-owner of PorchLight Home Offers and
              your neighbor across Rhode Island and the South Coast. We buy
              houses cash, as-is, anywhere from Westerly to Plymouth. No agents,
              no showings, no fall-throughs. Just a steady hand on the tiller
              when you need one.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-offer"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-sans text-sm font-bold uppercase tracking-widest transition-colors"
                style={{ backgroundColor: NAVY, color: SAND }}
              >
                Drop a line
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center gap-2 border-b-2 pb-1 font-display text-2xl"
                style={{ color: NAVY, borderColor: BUOY_RED }}
              >
                <Phone className="h-5 w-5" aria-hidden style={{ color: BUOY_RED }} />
                {site.phone.web}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <PhotoSlot
              alt="Coastal New England — a porch overlooking water at golden hour"
              caption="Hero photo: a New England coastal scene OR James in front of a recently-bought South Coast home. Atmospheric, golden-hour. Don't go too touristy — this is working coast, not vacation brochure."
              aspect="aspect-[4/5]"
              className="rounded-none ring-1"
            />
            <div
              className="mt-3 flex items-center justify-between border-y px-3 py-2 font-mono text-[11px] uppercase tracking-widest"
              style={{ borderColor: `${NAVY}33`, color: NAVY_LIGHT }}
            >
              <span><Anchor className="mr-1 inline h-3 w-3" aria-hidden />James &middot; Co-owner</span>
              <span>RI &middot; SE Mass</span>
            </div>
          </div>
        </Container>
      </section>

      {/* TIDE TABLE — service area shown as port log */}
      <section className="border-b-2 py-14 md:py-20" style={{ borderColor: `${NAVY}33` }}>
        <Container>
          <div className="flex items-baseline justify-between gap-4 border-b-2 pb-3" style={{ borderColor: NAVY }}>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: NAVY_LIGHT }}>
              Port log &middot; service area
            </p>
            <p className="font-mono text-[11px]" style={{ color: NAVY_LIGHT }}>
              All counties · all towns
            </p>
          </div>
          <h2
            className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-5xl"
            style={{ color: NAVY }}
          >
            We work every harbor between Westerly and Plymouth.
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                county: "Rhode Island",
                ports: ["Providence", "Cranston", "Warwick", "Pawtucket", "Newport", "Bristol", "Westerly", "N. Kingstown"],
              },
              { county: "Bristol Co. MA", ports: ["Fall River", "New Bedford", "Taunton"] },
              {
                county: "Plymouth Co. MA",
                ports: ["Plymouth", "Brockton", "Bridgewater", "Middleboro", "Wareham"],
              },
              {
                county: "Norfolk Co. MA",
                ports: ["Quincy", "Weymouth", "Braintree", "Franklin", "Stoughton"],
              },
            ].map((g) => (
              <li
                key={g.county}
                className="border-l-2 pl-4"
                style={{ borderColor: TEAL }}
              >
                <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: NAVY_LIGHT }}>
                  {g.county}
                </p>
                <ul className="mt-3 space-y-1.5 font-display text-base" style={{ color: NAVY }}>
                  {g.ports.map((p) => (
                    <li key={p} className="flex items-baseline gap-2">
                      <span style={{ color: BUOY_RED }} aria-hidden>
                        ◆
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* THREE BUOYS — process as navigation */}
      <section className="border-b-2 py-16 md:py-24" style={{ borderColor: `${NAVY}33`, backgroundColor: SAND_DARK }}>
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: NAVY_LIGHT }}>
            Three buoys to home port
          </p>
          <h2
            className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-5xl"
            style={{ color: NAVY }}
          >
            How a sale to us actually goes.
          </h2>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {processSteps.map((s, i) => (
              <li key={s.title} className="relative">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-bold ring-4"
                  style={{ backgroundColor: BUOY_RED, color: SAND, boxShadow: `0 0 0 8px ${SAND_DARK}` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-display text-2xl" style={{ color: NAVY }}>
                  {s.title}
                </h3>
                <p className="mt-3 font-display text-base leading-relaxed" style={{ color: NAVY_LIGHT }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FORECLOSURE / STORM SECTION — themed as "weathering a storm" */}
      <section className="py-16 md:py-24" style={{ backgroundColor: NAVY, color: SAND }}>
        <Container className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p
              className="inline-flex items-center gap-2 rounded-sm px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ backgroundColor: `${BUOY_RED}30`, color: SAND }}
            >
              When the weather turns
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl" style={{ color: SAND }}>
              Foreclosure on the calendar?
              <br />
              <span style={{ color: TEAL }}>You don&rsquo;t weather it alone.</span>
            </h2>
            <p className="mt-5 max-w-2xl font-display text-lg leading-relaxed" style={{ color: `${SAND}DD` }}>
              We&rsquo;ve helped countless homeowners avoid losing their house
              to a foreclosure auction &mdash; including many where attorneys
              had given up and lenders had stopped returning calls. James
              knows how to talk to loss-mitigation, verify payoffs, and quietly
              close before a sale date. Whether you sell to us or not,
              we&rsquo;ll help you get clear answers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/sell/pre-foreclosure"
                className="inline-flex items-center gap-2 px-5 py-3 font-sans text-sm font-bold uppercase tracking-widest transition-colors"
                style={{ backgroundColor: BUOY_RED, color: SAND }}
              >
                How we help
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center gap-2"
                style={{ color: SAND }}
              >
                <Phone className="h-4 w-4" aria-hidden style={{ color: TEAL }} />
                Call James &mdash; {site.phone.web}
              </a>
            </div>
          </div>
          <aside className="md:col-span-5">
            <div className="border p-6" style={{ borderColor: `${SAND}30` }}>
              <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: TEAL }}>
                A small lighthouse, not a lifeline
              </p>
              <p className="mt-3 font-display text-base leading-relaxed" style={{ color: `${SAND}DD` }}>
                We&rsquo;re not magic. But we&rsquo;ve seen this storm before
                and we know which way the current runs. Your conversation with
                James stays private &mdash; whether or not we end up buying
                your house.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      {/* TESTIMONIALS as captain's log */}
      <section className="border-b-2 py-16 md:py-24" style={{ borderColor: `${NAVY}33` }}>
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: NAVY_LIGHT }}>
            Captain&rsquo;s log &middot; from neighbors
          </p>
          <h2
            className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-5xl"
            style={{ color: NAVY }}
          >
            What sellers said after closing.
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="border-l-4 p-6"
                style={{ borderColor: BUOY_RED, backgroundColor: SAND_DARK }}
              >
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest" style={{ color: NAVY_LIGHT }}>
                  <MapPin className="h-3 w-3" aria-hidden style={{ color: BUOY_RED }} />
                  {t.location}
                </div>
                <p className="mt-3 font-display text-lg italic leading-snug" style={{ color: NAVY }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 font-display text-sm font-semibold" style={{ color: NAVY_LIGHT }}>
                  &mdash; {t.name}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ — rolled like a chart */}
      <section className="py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: NAVY_LIGHT }}>
              Frequently rolled up
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl" style={{ color: NAVY }}>
              Common questions.
            </h2>
            <p className="mt-4 font-display text-base leading-relaxed" style={{ color: NAVY_LIGHT }}>
              The ones we hear before sellers commit to a call.
            </p>
          </div>
          <ol className="md:col-span-8 space-y-6">
            {faqs.slice(0, 6).map((f, i) => (
              <li
                key={f.q}
                className="border-b pb-6 last:border-0"
                style={{ borderColor: `${NAVY}1F` }}
              >
                <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: BUOY_RED }}>
                  Q{String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-display text-xl" style={{ color: NAVY }}>
                  {f.q}
                </p>
                <p className="mt-2 font-display text-base leading-relaxed" style={{ color: NAVY_LIGHT }}>
                  {f.a}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FORM — sand band with navy panel */}
      <section className="py-16 md:py-24" style={{ backgroundColor: SAND_DARK }}>
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: NAVY_LIGHT }}>
              Drop a line
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl" style={{ color: NAVY }}>
              When you&rsquo;re ready, send up a flare.
            </h2>
            <p className="mt-5 font-display text-lg leading-relaxed" style={{ color: NAVY_LIGHT }}>
              Two minutes online, or call James direct &mdash; whichever you
              prefer. We&rsquo;ll respond within an hour during business hours.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-7 inline-flex items-center gap-2 border-b-2 pb-1 font-display text-3xl"
              style={{ color: NAVY, borderColor: BUOY_RED }}
            >
              <Phone className="h-6 w-6" aria-hidden style={{ color: BUOY_RED }} />
              {site.phone.web}
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="p-6 md:p-8" style={{ backgroundColor: SAND, border: `1px solid ${NAVY}33` }}>
              <div className="mb-5 flex items-center justify-between border-b pb-3" style={{ borderColor: `${NAVY}33` }}>
                <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: NAVY_LIGHT }}>
                  Property intake
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: NAVY_LIGHT }}>
                  Form &middot; PL.{new Date().getFullYear()}
                </p>
              </div>
              <LeadForm source="home-dockside" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
