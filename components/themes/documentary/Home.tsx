import Link from "next/link";
import { Phone, ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { faqs, ownerStory, processSteps, site, testimonials } from "@/content/site";

/**
 * Documentary — dark cinematic. Full-bleed B&W photography, white serif on
 * near-black, like a New Yorker feature or a Netflix doc landing page. The
 * trust signal is restraint and storytelling, not iconography.
 *
 * Color: near-black ink + warm cream + single rust accent. Typography: serif
 * dominant, mono captions. Plenty of negative space; very few CTAs above the
 * fold.
 */
export function DocumentaryHome() {
  // Match an accent rust that reads on dark. Use inline styles so we don't
  // have to extend Tailwind for a one-off accent.
  const RUST = "#C8821E";
  const PAPER_WARM = "#F4EFE4";
  const NEAR_BLACK = "#0B0B0B";

  return (
    <div style={{ backgroundColor: NEAR_BLACK, color: PAPER_WARM }}>
      {/* HERO — full-bleed photo with restrained title block */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <PhotoSlot
            alt="A Rhode Island porch at dawn, black and white"
            caption="Hero photo: a wide, atmospheric exterior. B&W or desaturated. Predawn / blue hour. Vacant porch, weathered. NOT promotional."
            aspect="aspect-auto h-full"
            className="h-full rounded-none"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${NEAR_BLACK}E6 0%, ${NEAR_BLACK}80 30%, ${NEAR_BLACK}CC 75%, ${NEAR_BLACK} 100%)`,
            }}
          />
        </div>
        <Container className="relative z-10 flex min-h-[88vh] flex-col justify-end pb-16 pt-24 md:pb-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: RUST }}>
            A short documentary &mdash; PorchLight Home Offers · 2026
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Behind every house we buy, there&rsquo;s a story we get to listen to first.
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl leading-relaxed md:text-2xl"
             style={{ color: `${PAPER_WARM}CC` }}>
            Some sellers are settling an estate. Some are 90 days from
            foreclosure. Some have just had enough. We&rsquo;re a small Rhode
            Island team, and our job is to be the steadiest part of someone
            else&rsquo;s hardest week.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/get-offer"
              className="inline-flex items-center gap-2 border-b-2 pb-1 font-display text-lg"
              style={{ color: PAPER_WARM, borderColor: RUST }}
            >
              Tell us your story
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={`tel:${site.phone.web}`}
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider"
              style={{ color: `${PAPER_WARM}CC` }}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden style={{ color: RUST }} />
              {site.phone.web}
            </a>
          </div>
        </Container>
      </section>

      {/* TRAILER / VIDEO HERO — large video card with chapter list */}
      <section className="py-20 md:py-28" style={{ backgroundColor: NEAR_BLACK }}>
        <Container className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            <div className="relative">
              <PhotoSlot
                alt="Founder talking, candid documentary footage"
                caption="Video still: founder mid-sentence, talking directly to camera. Documentary lighting (one window-key, soft fill). Embed actual video later."
                aspect="aspect-[16/9]"
                className="rounded-none"
              />
              <button
                aria-label="Play trailer (placeholder)"
                className="absolute inset-0 m-auto inline-flex h-20 w-20 items-center justify-center rounded-full"
                style={{ backgroundColor: `${RUST}E6` }}
              >
                <Play className="h-7 w-7 fill-current text-white" aria-hidden />
              </button>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: `${PAPER_WARM}99` }}>
              02:47 · Trailer · {site.owner.name} on starting PorchLight
            </p>
          </div>
          <aside className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: RUST }}>
              Chapters
            </p>
            <ul className="mt-4 space-y-3 font-display text-lg">
              {[
                { ch: "01", title: "Why we started" },
                { ch: "02", title: "How we value a house" },
                { ch: "03", title: "What we won't do" },
                { ch: "04", title: "A closing, end to end" },
              ].map((c) => (
                <li key={c.ch} className="flex gap-4 border-t border-white/10 pt-3">
                  <span className="font-mono text-sm" style={{ color: RUST }}>
                    {c.ch}
                  </span>
                  <span>{c.title}</span>
                </li>
              ))}
            </ul>
            <p
              className="mt-6 font-sans text-xs italic leading-relaxed"
              style={{ color: `${PAPER_WARM}99` }}
            >
              [TO FILL] Replace placeholders with the founder&rsquo;s actual
              chapter videos. Even raw, phone-shot clips are more powerful here
              than polished stock.
            </p>
          </aside>
        </Container>
      </section>

      {/* PULL QUOTE — scene break */}
      <section className="border-y py-16 md:py-24" style={{ borderColor: `${PAPER_WARM}1A`, backgroundColor: NEAR_BLACK }}>
        <Container className="max-w-4xl">
          <p className="font-display text-3xl leading-tight md:text-5xl">
            &ldquo;{testimonials[0]?.quote ?? "[TO FILL]"}&rdquo;
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: RUST }}>
            {testimonials[0]?.name ?? "[TO FILL]"} · {testimonials[0]?.location ?? "[TO FILL]"}
          </p>
        </Container>
      </section>

      {/* THE PROCESS — three-act structure */}
      <section className="py-20 md:py-28" style={{ backgroundColor: PAPER_WARM, color: NEAR_BLACK }}>
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: RUST }}>
              The arc
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              How a sale to us actually unfolds.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-ink-muted">
              Three acts. We&rsquo;ve done this hundreds of times and it almost
              always plays out the same way.
            </p>
          </div>
          <ol className="md:col-span-8 space-y-12">
            {processSteps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[auto_1fr] gap-8 border-b border-rule/15 pb-12 last:border-0">
                <span className="font-mono text-sm tracking-widest" style={{ color: RUST }}>
                  ACT {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-3xl">{s.title}</h3>
                  <p className="mt-3 font-sans text-lg leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* PHOTO ESSAY GRID */}
      <section className="py-20 md:py-28" style={{ backgroundColor: NEAR_BLACK }}>
        <Container>
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: RUST }}>
              Photo essay
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Six houses. Six stories.
            </h2>
            <p className="mt-4 font-display text-lg leading-relaxed" style={{ color: `${PAPER_WARM}99` }}>
              [TO FILL] Replace with real photographs &mdash; black-and-white,
              candid. The exteriors at sunrise, the interiors before cleanout.
              Each caption is one sentence about the seller.
            </p>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { c: "Smith Hill triple-decker. Closed 13 days after Janine first texted." },
              { c: "Cape in Cranston. The seller hadn't been inside in two years." },
              { c: "Three-decker, Fall River. Tenant stayed; new landlord that day." },
              { c: "Cottage in Wareham. Probate took 11 weeks; closing took 90 minutes." },
              { c: "Vacant ranch, Brockton. Sister flew in from Tucson for closing." },
              { c: "Old colonial, Bristol. Historic-district restrictions, no surprises." },
            ].map((p, i) => (
              <li key={i} className="space-y-3">
                <PhotoSlot
                  alt="A house we bought"
                  caption={p.c}
                  aspect="aspect-[4/5]"
                  className="rounded-none"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* OWNER STORY — long-form on cream */}
      <section className="py-20 md:py-28" style={{ backgroundColor: PAPER_WARM, color: NEAR_BLACK }}>
        <Container className="grid gap-10 md:grid-cols-12">
          <aside className="md:col-span-4 md:col-start-2">
            <PhotoSlot
              alt="Founder portrait, B&W, candid"
              caption="Founder portrait. B&W, slightly off-center, looking past the camera, one window-key. Not smiling at the camera."
              aspect="aspect-[4/5]"
              className="rounded-none"
            />
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              {site.owner.name} · Founder
            </p>
          </aside>
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: RUST }}>
              Profile
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              {ownerStory.headline}
            </h2>
            <div className="mt-7 space-y-5 font-display text-xl leading-relaxed text-ink">
              {ownerStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ — newsroom-style with editor's notes */}
      <section className="py-20 md:py-28" style={{ backgroundColor: NEAR_BLACK }}>
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: RUST }}>
              Editor&rsquo;s notes
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              The questions we hear most.
            </h2>
          </div>
          <ol className="md:col-span-8 space-y-8">
            {faqs.slice(0, 5).map((f, i) => (
              <li key={f.q} className="border-t pt-6" style={{ borderColor: `${PAPER_WARM}1F` }}>
                <p className="font-mono text-sm" style={{ color: RUST }}>
                  Q.{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl">{f.q}</h3>
                <p className="mt-3 font-display text-lg leading-relaxed" style={{ color: `${PAPER_WARM}CC` }}>
                  {f.a}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <div style={{ backgroundColor: PAPER_WARM, color: NEAR_BLACK }}>
        <ServiceArea />
      </div>

      {/* FORM — restrained closing card */}
      <section className="py-20 md:py-28" style={{ backgroundColor: NEAR_BLACK }}>
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: RUST }}>
              Closing credits
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              When you&rsquo;re ready, here&rsquo;s where to find us.
            </h2>
            <p className="mt-5 font-display text-lg leading-relaxed" style={{ color: `${PAPER_WARM}99` }}>
              Two minutes online below, or call &mdash; we answer our own
              phones, Mon&ndash;Fri {site.hours.monFri}.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-8 inline-flex items-center gap-2 font-display text-3xl"
              style={{ color: PAPER_WARM }}
            >
              <Phone className="h-6 w-6" aria-hidden style={{ color: RUST }} />
              {site.phone.web}
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="p-6 md:p-8" style={{ backgroundColor: PAPER_WARM, color: NEAR_BLACK }}>
              <LeadForm source="home-documentary" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
