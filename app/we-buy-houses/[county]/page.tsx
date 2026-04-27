import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Phone } from "lucide-react";
import { counties, findCounty } from "@/content/counties";
import { citiesByCounty } from "@/content/cities";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Eyebrow } from "@/components/ui/Container";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { TrustBar } from "@/components/sections/TrustBar";
import { LeadForm } from "@/components/forms/LeadForm";
import { breadcrumbCounty, breadcrumbHome, buildBreadcrumb, composeGraph } from "@/lib/schema";
import { cityUrl, countyUrl } from "@/lib/content";
import { site } from "@/content/site";

type Params = { county: string };

export async function generateStaticParams(): Promise<Params[]> {
  return counties.map((c) => ({ county: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const county = findCounty(params.county);
  if (!county) return {};
  const title = `We buy houses in ${county.displayName} — cash, as-is`;
  const description = `Local cash home buyer covering all of ${county.displayName}. ${county.intro}`;
  return {
    title,
    description,
    alternates: { canonical: countyUrl(county.slug) },
    openGraph: { title, description, url: countyUrl(county.slug) },
  };
}

export default function CountyPage({ params }: { params: Params }) {
  const county = findCounty(params.county);
  if (!county) notFound();
  const cities = citiesByCounty(county.slug);

  const graph = composeGraph(
    buildBreadcrumb([breadcrumbHome, breadcrumbCounty(county)]),
  );

  return (
    <>
      <JsonLd data={graph} />

      <section className="border-b border-rule/10 bg-paper-2/40">
        <Container className="grid gap-10 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <Eyebrow>{county.displayName}</Eyebrow>
            <h1 className="mt-3 max-w-2xl">
              We buy houses across {county.displayName}.
            </h1>
            <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-ink-muted">
              {county.intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/get-offer" className="btn-primary">
                Get my cash offer
              </Link>
              <a href={`tel:${site.phone.web}`} className="btn-ghost">
                <Phone className="mr-2 h-4 w-4 text-amber-deep" aria-hidden />
                Call {site.phone.web}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-xl border border-rule/10 bg-paper p-5 shadow-lantern md:p-7">
              <p className="font-display text-xl text-ink">Get a cash offer in {county.name}</p>
              <p className="mt-1 font-sans text-sm text-ink-muted">
                Tell us about the property — we&rsquo;ll respond within an hour during business
                hours.
              </p>
              <div className="mt-4">
                <LeadForm source={`county-${county.slug}`} compact />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Cities we buy in</Eyebrow>
            <h2 className="mt-3">Every town in {county.displayName}</h2>
            {county.body ? (
              <p className="mt-4 font-sans text-lg text-ink-muted">{county.body}</p>
            ) : null}
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={cityUrl(c.slug)}
                  className="group flex h-full items-start justify-between gap-3 rounded-lg border border-rule/10 bg-paper-2/40 p-5 transition-colors hover:border-amber/40 hover:bg-paper-2/70"
                >
                  <span>
                    <span className="block font-display text-lg font-semibold text-ink">
                      {c.name}, {c.state}
                    </span>
                    <span className="mt-1 block font-sans text-sm text-ink-muted">
                      {c.neighborhoods.slice(0, 3).join(" · ")}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-colors group-hover:text-amber-deep"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProcessSteps />
      <ComparisonTable />
      <Testimonials />
      <FAQ heading={`Questions sellers ask in ${county.displayName}`} />
      <CtaBand />
    </>
  );
}
