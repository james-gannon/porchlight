import { Container, Eyebrow } from "@/components/ui/Container";
import type { City } from "@/lib/content";

export function CityLocalContext({ city }: { city: City }) {
  return (
    <section className="bg-paper py-16 md:py-24">
      <Container className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Eyebrow>About {city.name}</Eyebrow>
          <h2 className="mt-3">
            We know how houses sell in {city.name}.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5 font-sans text-base leading-relaxed text-ink-muted">
          <p>{city.localContext}</p>
          <p>
            <strong className="text-ink">Common housing in {city.name}:</strong>{" "}
            {city.typicalHousing}
          </p>
          <div>
            <p className="font-display text-base font-semibold text-ink">
              Neighborhoods we buy in
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="inline-flex items-center rounded-full border border-rule/15 bg-paper-2/50 px-3 py-1 text-sm text-ink"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
          {city.localProofPoint ? (
            <p className="rounded-md border border-amber/30 bg-amber/10 p-4 text-sm">
              <strong className="text-ink">Local credibility:</strong> {city.localProofPoint}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
