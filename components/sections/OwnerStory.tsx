import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/Container";
import { site, ownerStory } from "@/content/site";

export function OwnerStory() {
  return (
    <section
      aria-labelledby="owner-heading"
      className="border-y border-rule/10 bg-paper-2/40 py-16 md:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-rule/10 bg-paper">
              {/* Placeholder background; replace headshot when ready. */}
              <Image
                src={site.owner.headshot}
                alt={`Portrait of ${site.owner.name}, founder of ${site.name}`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <Eyebrow>Why we&rsquo;re here</Eyebrow>
            <h2 id="owner-heading" className="mt-3">
              {ownerStory.headline}
            </h2>
            <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-ink-muted">
              {ownerStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-display text-base font-semibold text-ink">
              — {site.owner.name}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
