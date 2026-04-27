import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { counties } from "@/content/counties";
import { citiesByCounty } from "@/content/cities";
import { cityUrl, countyUrl } from "@/lib/content";

export function ServiceArea() {
  return (
    <section
      aria-labelledby="service-area-heading"
      className="border-y border-rule/10 bg-paper-2/40 py-16 md:py-24"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Where we buy</Eyebrow>
          <h2 id="service-area-heading" className="mt-3">
            All of Rhode Island and the South Coast
          </h2>
          <p className="mt-4 font-sans text-lg text-ink-muted">
            We focus exclusively on Rhode Island plus Bristol, Plymouth, and Norfolk counties in
            Massachusetts. Local knowledge means tighter offers and fewer surprises at closing.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {counties.map((county) => {
            const cities = citiesByCounty(county.slug);
            return (
              <div key={county.slug}>
                <Link
                  href={countyUrl(county.slug)}
                  className="group inline-flex items-center gap-1 font-display text-base font-semibold text-ink hover:text-amber-deep"
                >
                  {county.displayName}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
                <ul className="mt-3 space-y-1.5 font-sans text-sm">
                  {cities.map((c) => (
                    <li key={c.slug}>
                      <Link href={cityUrl(c.slug)} className="text-ink-muted hover:text-amber-deep">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-8 font-sans text-sm text-ink-muted">
          Don&rsquo;t see your town?{" "}
          <Link href="/contact" className="underline hover:text-amber-deep">
            Call us
          </Link>{" "}
          — we cover most of the area and can usually still help.
        </p>
      </Container>
    </section>
  );
}
