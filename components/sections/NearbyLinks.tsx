import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { findCity } from "@/content/cities";
import { findCounty } from "@/content/counties";
import { cityUrl, countyUrl } from "@/lib/content";
import type { City } from "@/lib/content";

export function NearbyLinks({ city }: { city: City }) {
  const nearby = city.nearby
    .map((slug) => findCity(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const county = findCounty(city.countySlug);

  return (
    <section className="border-t border-rule/10 bg-paper-2/40 py-14 md:py-16">
      <Container>
        <Eyebrow>Also serving</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-2xl md:text-3xl">
          Nearby cities &amp; the {county?.displayName ?? "regional"} hub
        </h2>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {nearby.map((n) => (
            <li key={n.slug}>
              <Link
                href={cityUrl(n.slug)}
                className="group flex items-center justify-between rounded-md border border-rule/10 bg-paper p-4 font-sans text-sm transition-colors hover:border-amber/40 hover:bg-paper-2/40"
              >
                <span>
                  <span className="block font-display text-base font-semibold text-ink">
                    {n.name}, {n.state}
                  </span>
                  <span className="text-xs text-ink-muted">{n.typicalHousing}</span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ink-muted transition-colors group-hover:text-amber-deep"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
          {county ? (
            <li>
              <Link
                href={countyUrl(county.slug)}
                className="group flex items-center justify-between rounded-md border border-amber/30 bg-amber/10 p-4 font-sans text-sm transition-colors hover:bg-amber/20"
              >
                <span>
                  <span className="block font-display text-base font-semibold text-ink">
                    All of {county.displayName}
                  </span>
                  <span className="text-xs text-ink-muted">View the regional hub</span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-amber-deep"
                  aria-hidden
                />
              </Link>
            </li>
          ) : null}
        </ul>
      </Container>
    </section>
  );
}
