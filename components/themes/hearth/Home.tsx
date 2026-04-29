import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { faqs, processSteps, sellReasons, site, testimonials } from "@/content/site";

/**
 * Hearth — old Yankee magazine cozy. Rust + mustard + parchment + woodgrain.
 * Pull-up-a-chair voice. Hand-drawn dingbats. James warming up the room.
 */

const PARCHMENT = "#F2E6CB";
const PARCHMENT_DEEP = "#E2D2AE";
const RUST = "#A24C2A";
const RUST_DEEP = "#7A3217";
const MUSTARD = "#C8983A";
const COFFEE = "#3F2E20";
const OLIVE = "#5C6A3D";

const WOODGRAIN_BG = `repeating-linear-gradient(90deg, ${PARCHMENT_DEEP}55 0 1px, transparent 1px 4px), repeating-linear-gradient(180deg, ${PARCHMENT_DEEP}30 0 30px, transparent 30px 31px)`;

export function HearthHome() {
  return (
    <div style={{ backgroundColor: PARCHMENT, color: COFFEE }}>
      {/* HEAD RULE */}
      <div className="border-b-2" style={{ borderColor: COFFEE, backgroundColor: COFFEE }}>
        <Container className="py-2 text-center font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: PARCHMENT }}>
          ❦ &nbsp; Family-owned in Rhode Island &nbsp; · &nbsp; Pull up a chair &nbsp; · &nbsp; {site.phone.web}
          &nbsp; ❦
        </Container>
      </div>

      {/* HERO — magazine cover with woodgrain frame */}
      <section className="border-b-2" style={{ borderColor: `${COFFEE}33` }}>
        <Container className="grid gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-20">
          <div className="md:col-span-7">
            <p
              className="inline-block rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ backgroundColor: `${MUSTARD}40`, color: RUST_DEEP }}
            >
              ✦ Volume I &middot; Spring &middot; A note from James ✦
            </p>
            <h1
              className="mt-5 font-display text-5xl leading-[1.04] tracking-tight md:text-7xl"
              style={{ color: COFFEE }}
            >
              When you&rsquo;re ready to sell, we&rsquo;ll{" "}
              <span style={{ color: RUST }} className="italic">
                pull up a chair
              </span>{" "}
              and listen.
            </h1>
            <p
              className="mt-6 max-w-xl font-display text-xl leading-relaxed"
              style={{ color: `${COFFEE}CC` }}
            >
              I&rsquo;m James &mdash; co-owner of PorchLight Home Offers, a
              small family-owned operation in Rhode Island. We buy houses cash
              from neighbors who need a steady, neighborly hand: folks
              navigating a probate, a foreclosure, an inherited house full of
              forty years of belongings, or just life moving faster than the
              listing market allows. No sales pitch. Just a conversation,
              over coffee if you have it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-offer"
                className="inline-flex items-center gap-2 rounded-sm border-2 px-6 py-3 font-display text-base font-bold uppercase tracking-widest transition-colors"
                style={{ backgroundColor: RUST, color: PARCHMENT, borderColor: RUST_DEEP }}
              >
                Get a fair offer
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center gap-2 font-display text-2xl italic"
                style={{ color: COFFEE }}
              >
                <Phone className="h-5 w-5" aria-hidden style={{ color: RUST }} />
                {site.phone.web}
              </a>
            </div>
            <p className="mt-3 font-display text-sm italic" style={{ color: `${COFFEE}99` }}>
              James answers Mon&ndash;Fri {site.hours.monFri}. Saturdays {site.hours.sat}.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative p-3" style={{ background: WOODGRAIN_BG, border: `4px double ${COFFEE}55` }}>
              <PhotoSlot
                alt="James in a kitchen with a homeowner and warm light"
                caption="Hero photo: James at someone's kitchen table or porch — warm afternoon light, conversation in progress, mug visible. Cozy, NOT corporate."
                aspect="aspect-[4/5]"
                className="rounded-none"
              />
              <p className="mt-3 px-2 text-center font-display text-sm italic" style={{ color: `${COFFEE}99` }}>
                Plate I &mdash; James, mid-conversation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO — sectioned table-of-contents */}
      <section className="border-b-2 py-16 md:py-20" style={{ borderColor: `${COFFEE}33`, backgroundColor: PARCHMENT_DEEP }}>
        <Container>
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: RUST_DEEP }}>
              ✦ &nbsp; Inside this issue &nbsp; ✦
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl" style={{ color: COFFEE }}>
              Houses we buy. Situations we know.
            </h2>
          </div>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sellReasons.map((r) => (
              <li
                key={r.title}
                className="rounded-sm p-5"
                style={{ backgroundColor: PARCHMENT, border: `1px solid ${COFFEE}33` }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: MUSTARD }}>
                  &mdash; chapter
                </p>
                <h3 className="mt-1 font-display text-xl italic" style={{ color: RUST }}>
                  {r.title}
                </h3>
                <p className="mt-2 font-display text-base leading-relaxed" style={{ color: `${COFFEE}AA` }}>
                  {r.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* THE FORECLOSURE NOTE — letter format */}
      <section className="border-b-2 py-16 md:py-24" style={{ borderColor: `${COFFEE}33` }}>
        <Container className="max-w-3xl">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: RUST_DEEP }}>
              ✦ &nbsp; A note about foreclosure &nbsp; ✦
            </p>
            <h2 className="mt-3 font-display text-4xl italic leading-tight md:text-5xl" style={{ color: COFFEE }}>
              We&rsquo;re the warm light at the end of the hallway.
            </h2>
          </div>
          <div
            className="mt-10 rounded-sm p-8 md:p-10"
            style={{
              backgroundColor: PARCHMENT_DEEP,
              border: `2px double ${COFFEE}55`,
            }}
          >
            <p className="font-display text-base italic" style={{ color: `${COFFEE}AA` }}>
              From the desk of James &mdash;
            </p>
            <div className="mt-4 space-y-4 font-display text-lg leading-[1.6]" style={{ color: COFFEE }}>
              <p>
                We&rsquo;ve helped countless homeowners avoid losing their house
                to a foreclosure auction &mdash; including more than a few
                where attorneys had given up on returning calls and the bank
                had stopped picking up.
              </p>
              <p>
                Most lenders are difficult to communicate with. They leave you
                in the dark. They don&rsquo;t go the extra mile. That&rsquo;s
                where we come in. We know how to talk to loss-mitigation
                departments, verify your payoff, and quietly close before a
                sale date if that&rsquo;s the right call.
              </p>
              <p>
                Whether you sell to us or not, we&rsquo;ll help you get clear
                answers so you can make the call from a place of peace, not
                panic. You should have someone in your corner. That&rsquo;s
                what we&rsquo;re for.
              </p>
            </div>
            <p className="mt-6 font-display text-2xl italic" style={{ color: RUST }}>
              &mdash; James
            </p>
          </div>
        </Container>
      </section>

      {/* PROCESS — illustrated three-step */}
      <section className="border-b-2 py-16 md:py-24" style={{ borderColor: `${COFFEE}33`, backgroundColor: PARCHMENT_DEEP }}>
        <Container>
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: RUST_DEEP }}>
              ✦ &nbsp; The whole proceeding &nbsp; ✦
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl" style={{ color: COFFEE }}>
              Three steps. Then a closing.
            </h2>
          </div>
          <ol className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full font-display text-3xl italic"
                  style={{
                    backgroundColor: MUSTARD,
                    color: COFFEE,
                    border: `2px solid ${COFFEE}`,
                    boxShadow: `4px 4px 0 0 ${COFFEE}`,
                  }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-6 font-display text-2xl italic" style={{ color: RUST }}>
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs font-display text-base leading-relaxed" style={{ color: `${COFFEE}AA` }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* TESTIMONIALS — letters to the editor */}
      <section className="border-b-2 py-16 md:py-24" style={{ borderColor: `${COFFEE}33` }}>
        <Container>
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: RUST_DEEP }}>
              ✦ &nbsp; Letters from neighbors &nbsp; ✦
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl" style={{ color: COFFEE }}>
              Notes pinned to the office wall.
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="rounded-sm p-6"
                style={{
                  backgroundColor: PARCHMENT,
                  border: `1px solid ${COFFEE}33`,
                  boxShadow: `4px 4px 0 0 ${COFFEE}22`,
                }}
              >
                <p className="font-display text-7xl leading-none" style={{ color: MUSTARD }}>
                  &ldquo;
                </p>
                <p className="-mt-4 font-display text-lg italic leading-snug" style={{ color: COFFEE }}>
                  {t.quote}
                </p>
                <p className="mt-5 border-t pt-3 font-display text-sm" style={{ color: RUST, borderColor: `${COFFEE}33` }}>
                  &mdash; {t.name}, {t.location}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ — fireside Q&A */}
      <section className="border-b-2 py-16 md:py-24" style={{ borderColor: `${COFFEE}33`, backgroundColor: PARCHMENT_DEEP }}>
        <Container className="max-w-3xl">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: RUST_DEEP }}>
              ✦ &nbsp; Fireside questions &nbsp; ✦
            </p>
            <h2 className="mt-3 font-display text-4xl italic leading-tight md:text-5xl" style={{ color: COFFEE }}>
              Things sellers ask James first.
            </h2>
          </div>
          <ol className="mt-10 space-y-7">
            {faqs.slice(0, 6).map((f, i) => (
              <li
                key={f.q}
                className="border-b pb-7 last:border-0"
                style={{ borderColor: `${COFFEE}33` }}
              >
                <p className="font-display text-2xl" style={{ color: RUST }}>
                  <span className="italic">{i + 1}.</span> {f.q}
                </p>
                <p className="mt-3 font-display text-lg leading-relaxed" style={{ color: `${COFFEE}CC` }}>
                  {f.a}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FORM — letterhead-style */}
      <section className="py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: RUST_DEEP }}>
              ✦ &nbsp; Drop us a line &nbsp; ✦
            </p>
            <h2 className="mt-3 font-display text-4xl italic leading-tight md:text-5xl" style={{ color: COFFEE }}>
              We&rsquo;ll have the kettle on.
            </h2>
            <p className="mt-5 font-display text-lg leading-relaxed" style={{ color: `${COFFEE}AA` }}>
              Fill the form opposite or telephone James directly. No sales
              calls, no pushy follow-ups, no script.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-7 inline-flex items-center gap-2 font-display text-3xl italic"
              style={{ color: COFFEE }}
            >
              <Phone className="h-6 w-6" aria-hidden style={{ color: RUST }} />
              {site.phone.web}
            </a>
            <p className="mt-3 font-display text-sm italic" style={{ color: OLIVE }}>
              Mon&ndash;Fri {site.hours.monFri} · Sat {site.hours.sat}
            </p>
          </div>
          <div className="md:col-span-7">
            <div
              className="relative p-6 md:p-8"
              style={{
                backgroundColor: PARCHMENT_DEEP,
                border: `4px double ${COFFEE}55`,
              }}
            >
              <div className="mb-5 border-b pb-3 text-center" style={{ borderColor: `${COFFEE}33` }}>
                <p className="font-display text-xl italic" style={{ color: RUST }}>
                  PorchLight Home Offers
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: `${COFFEE}99` }}>
                  Property intake &middot; Form PL.{new Date().getFullYear()}
                </p>
              </div>
              <LeadForm source="home-hearth" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
