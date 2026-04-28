import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { ServiceArea } from "@/components/sections/ServiceArea";
import {
  comparison,
  faqs,
  ownerStory,
  processSteps,
  sellReasons,
  site,
  testimonials,
} from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Field Notes — polaroid / scrapbook. Maximum personality. Photos are framed
 * like instant prints, slightly rotated; sticky-note callouts; hand-drawn SVG
 * arrows; serif italics for "handwritten" notes; casual asymmetric layout.
 *
 * Inspiration: small-business sites that lean into raw photography (a-frame,
 * indie cafés, local-trade Instagram pages). The opposite of a corporate
 * homebuying site — that's the point.
 */
export function FieldNotesHome() {
  return (
    <>
      {/* HERO — polaroid stack with handwritten intro */}
      <section className="relative overflow-hidden bg-paper">
        <Container className="grid gap-10 py-12 md:grid-cols-12 md:gap-16 md:py-20">
          <div className="relative md:col-span-7">
            <p className="font-display text-base italic text-ink-muted">
              Hi. We&rsquo;re PorchLight.
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              We buy houses around{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Rhode Island</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 -rotate-1 bg-amber/50"
                />
              </span>{" "}
              the way a neighbor would.
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl leading-relaxed text-ink-muted">
              Cash. As-is. On your timeline. We answer our own phones, we close
              at a real attorney&rsquo;s office, and we treat the whole thing
              like the conversation it actually is.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/get-offer" className="btn-primary">
                See your number
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center gap-2 font-display text-xl text-ink hover:text-amber-deep"
              >
                <Phone className="h-5 w-5 text-amber-deep" aria-hidden />
                {site.phone.web}
              </a>
            </div>

            <div
              aria-hidden
              className="absolute -right-8 top-32 hidden md:block"
              style={{ transform: "rotate(-6deg)" }}
            >
              <ScribbleArrow />
            </div>
          </div>

          <div className="relative h-[420px] md:col-span-5 md:h-auto md:min-h-[480px]">
            <Polaroid
              caption="127 Smith St, Smith Hill — closed in 11 days, tenants stayed in place."
              alt="Polaroid of a Smith Hill triple-decker"
              className="absolute left-0 top-0 w-[78%] -rotate-3 md:w-[72%]"
            />
            <Polaroid
              caption="The truck. The whole team fits in it (we are not a big team)."
              alt="The PorchLight pickup truck"
              className="absolute right-0 top-24 w-[60%] rotate-2 md:w-[52%]"
            />
            <Polaroid
              caption="Cleanout day at a Cranston cape — what we leave behind, the seller chose to leave."
              alt="Cleanout day"
              className="absolute bottom-0 left-12 w-[60%] -rotate-2 md:w-[58%]"
            />
            <StickyNote className="absolute -right-2 -top-3 hidden rotate-6 md:block">
              No agents.
              <br />
              No showings.
              <br />
              No drama.
            </StickyNote>
          </div>
        </Container>
      </section>

      {/* HANDWRITTEN VOICE — owner intro */}
      <section className="border-y border-rule/15 bg-paper-2/50 py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <PhotoSlot
              alt="Owner portrait — natural light, candid"
              caption="Owner portrait. Casual, slightly off-center, NOT a stock headshot."
              aspect="aspect-[4/5]"
              rotate="left"
            />
          </div>
          <div className="md:col-span-8 relative">
            <p className="font-display text-base italic text-amber-deep">
              From {site.owner.name}
            </p>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
              {ownerStory.headline}
            </h2>
            <div className="mt-6 space-y-5 font-display text-xl leading-relaxed text-ink-muted">
              {ownerStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 font-display text-2xl italic text-ink">— {site.owner.name}</p>

            <StickyNote className="absolute -right-3 -top-3 hidden -rotate-3 md:block">
              We answer
              <br />
              our own
              <br />
              phones.
            </StickyNote>
          </div>
        </Container>
      </section>

      {/* PROCESS — drawn timeline with handwritten labels */}
      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-base italic text-amber-deep">
              How it tends to go
            </p>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
              Three steps. We&rsquo;ve done this a few hundred times.
            </h2>
          </div>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            <span
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden h-px bg-rule/20 md:block"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, currentColor 0 6px, transparent 6px 12px)",
                color: "rgb(var(--amber-deep) / 0.5)",
                background: "transparent",
                borderTop: "2px dashed rgb(var(--amber-deep) / 0.4)",
                height: 0,
              }}
            />
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className={cn(
                  "relative flex flex-col items-start",
                  i === 1 && "md:translate-y-3",
                )}
              >
                <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-amber font-display text-2xl font-bold text-ink shadow-lantern">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 font-display text-lg leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* WHEN WE FIT — index cards */}
      <section className="bg-paper-2/50 py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-base italic text-amber-deep">
              When we tend to be the right call
            </p>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
              Real reasons real neighbors call us.
            </h2>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sellReasons.map((r, i) => (
              <li
                key={r.title}
                className={cn(
                  "rounded-sm border border-rule/15 bg-paper p-5 shadow-sm",
                  i % 3 === 0 && "rotate-[0.6deg]",
                  i % 3 === 1 && "-rotate-[0.5deg]",
                  i % 3 === 2 && "rotate-[0.3deg]",
                )}
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent 0 30px, rgb(var(--rule) / 0.05) 30px 31px)",
                }}
              >
                <h3 className="font-display text-lg italic">{r.title}</h3>
                <p className="mt-2 font-display text-base leading-relaxed text-ink-muted">
                  {r.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* COMPARISON — side-by-side index cards */}
      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-base italic text-amber-deep">Apples to apples</p>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
              How a sale to us stacks up.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <IndexCard title="PorchLight" highlight>
              {comparison.map((c) => (
                <Row key={c.dimension} dim={c.dimension} val={c.porchlight} />
              ))}
            </IndexCard>
            <IndexCard title="Real estate agent">
              {comparison.map((c) => (
                <Row key={c.dimension} dim={c.dimension} val={c.agent} muted />
              ))}
            </IndexCard>
            <IndexCard title="FSBO">
              {comparison.map((c) => (
                <Row key={c.dimension} dim={c.dimension} val={c.fsbo} muted />
              ))}
            </IndexCard>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS — scattered polaroids */}
      <section className="border-y border-rule/15 bg-paper-2/40 py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-base italic text-amber-deep">
              From neighbors who actually sold to us
            </p>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
              The reviews we keep on the fridge.
            </h2>
          </div>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className={cn(
                  "rounded-sm bg-paper p-3 pb-6 shadow-md",
                  i === 0 && "-rotate-2",
                  i === 1 && "rotate-1 md:translate-y-6",
                  i === 2 && "-rotate-1",
                )}
              >
                <PhotoSlot
                  alt={`${t.name} smiling at the property`}
                  caption={`Photo of ${t.name} at the closing or in front of their old place — natural, smiling.`}
                  aspect="aspect-[4/3]"
                  className="rounded-sm"
                />
                <p className="mt-4 px-2 font-display text-base italic leading-snug text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-3 px-2 font-display text-sm font-semibold text-ink">
                  — {t.name}
                </p>
                <p className="px-2 font-display text-xs text-ink-muted">
                  {t.situation} · {t.location}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ServiceArea />

      {/* FAQ — handwritten Q&A */}
      <section className="bg-paper py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="font-display text-base italic text-amber-deep">Things people ask</p>
          <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
            Honest answers, even the awkward ones.
          </h2>
          <ul className="mt-10 space-y-8">
            {faqs.slice(0, 6).map((f) => (
              <li
                key={f.q}
                className="border-b border-dashed border-rule/30 pb-7 last:border-0"
              >
                <p className="font-display text-xl italic text-ink">
                  <span className="text-amber-deep">Q.</span> {f.q}
                </p>
                <p className="mt-3 font-display text-lg leading-relaxed text-ink-muted">
                  <span className="font-semibold text-ink">A.</span> {f.a}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FORM — sticky-note framed */}
      <section className="bg-paper-2/40 py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-base italic text-amber-deep">When you&rsquo;re ready</p>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
              Drop us a line. We&rsquo;ll call you back.
            </h2>
            <p className="mt-5 font-display text-lg leading-relaxed text-ink-muted">
              Two minutes online below, or call &mdash; whatever&rsquo;s easier.
              We&rsquo;ll pick up the phone if it&rsquo;s a Tuesday at 2pm. We
              probably won&rsquo;t at 11:30 on Saturday night.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-8 inline-flex items-center gap-2 font-display text-3xl text-ink hover:text-amber-deep"
            >
              <Phone className="h-7 w-7 text-amber-deep" aria-hidden />
              {site.phone.web}
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="relative rounded-sm bg-paper p-6 shadow-xl md:p-8" style={{ transform: "rotate(-0.4deg)" }}>
              <StickyNote className="absolute -right-4 -top-4 rotate-6">
                Real cash.
                <br />
                Real attorney.
                <br />
                Real us.
              </StickyNote>
              <LeadForm source="home-fieldnotes" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// --- Local components used only by this theme ---

function Polaroid({
  caption,
  alt,
  className,
  src,
}: {
  caption: string;
  alt: string;
  className?: string;
  src?: string;
}) {
  return (
    <figure
      className={cn(
        "rounded-sm bg-paper p-3 pb-6 shadow-xl ring-1 ring-rule/10",
        className,
      )}
    >
      <PhotoSlot src={src} alt={alt} aspect="aspect-square" className="rounded-sm" />
      <figcaption className="mt-3 px-1 font-display text-xs italic leading-snug text-ink">
        {caption}
      </figcaption>
    </figure>
  );
}

function StickyNote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-block bg-amber px-4 py-3 font-display text-sm leading-snug text-ink shadow-lg",
        className,
      )}
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
      }}
    >
      {children}
    </div>
  );
}

function ScribbleArrow() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden>
      <path
        d="M5 70 C 30 60, 50 50, 80 30 M 80 30 L 70 35 M 80 30 L 78 18"
        stroke="rgb(200 130 30)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function IndexCard({
  title,
  children,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-sm border bg-paper p-5 shadow-sm",
        highlight ? "border-amber-deep ring-2 ring-amber/40" : "border-rule/15",
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent 0 28px, rgb(var(--rule) / 0.05) 28px 29px)",
      }}
    >
      <p
        className={cn(
          "border-b border-rule/20 pb-3 font-display text-lg italic",
          highlight ? "text-amber-deep" : "text-ink",
        )}
      >
        {title}
      </p>
      <ul className="mt-3 space-y-2.5">{children}</ul>
    </div>
  );
}

function Row({
  dim,
  val,
  muted = false,
}: {
  dim: string;
  val: string;
  muted?: boolean;
}) {
  return (
    <li className="flex items-start justify-between gap-3 text-sm">
      <span className="font-display text-ink-muted">{dim}</span>
      <span
        className={cn(
          "font-display font-semibold",
          muted ? "text-ink-muted" : "text-ink",
        )}
      >
        {val}
      </span>
    </li>
  );
}
