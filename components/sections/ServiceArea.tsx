import { Container, Eyebrow } from "@/components/ui/Container";
import { site } from "@/content/site";

const groups: ReadonlyArray<{ heading: string; cities: ReadonlyArray<string> }> = [
  { heading: "Rhode Island", cities: site.serviceAreas.ri },
  { heading: "Bristol County, MA", cities: site.serviceAreas.bristolMa },
  { heading: "Plymouth County, MA", cities: site.serviceAreas.plymouthMa },
  { heading: "Norfolk County, MA", cities: site.serviceAreas.norfolkMa },
];

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
          {groups.map((g) => (
            <div key={g.heading}>
              <p className="font-display text-base font-semibold text-ink">{g.heading}</p>
              <ul className="mt-3 space-y-1.5 font-sans text-sm text-ink-muted">
                {g.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 font-sans text-sm text-ink-muted">
          Don&rsquo;t see your town? Call us — we cover most of the area and can usually still
          help.
        </p>
      </Container>
    </section>
  );
}
