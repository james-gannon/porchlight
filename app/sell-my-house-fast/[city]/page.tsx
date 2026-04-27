import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/content/cities";
import { findCounty } from "@/content/counties";
import { faqs } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { CityHero } from "@/components/sections/CityHero";
import { CityLocalContext } from "@/components/sections/CityLocalContext";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLinks } from "@/components/sections/NearbyLinks";
import { CtaBand } from "@/components/sections/CtaBand";
import { TrustBar } from "@/components/sections/TrustBar";
import { findCity } from "@/content/cities";
import {
  breadcrumbCity,
  breadcrumbCounty,
  breadcrumbHome,
  buildBreadcrumb,
  buildCityLocalBusiness,
  buildFaqPage,
  composeGraph,
} from "@/lib/schema";
import { cityUrl } from "@/lib/content";

type Params = { city: string };

export async function generateStaticParams(): Promise<Params[]> {
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const city = findCity(params.city);
  if (!city) return {};
  const county = findCounty(city.countySlug);
  const title = `Sell my house fast in ${city.name}, ${city.state} — cash, as-is`;
  const description = `Local cash home buyer in ${city.name}, ${city.state}. We buy houses in any condition across ${county?.displayName ?? "the area"} — no fees, no repairs, close in 7 days.`;
  return {
    title,
    description,
    alternates: { canonical: cityUrl(city.slug) },
    openGraph: { title, description, url: cityUrl(city.slug) },
  };
}

export default function CityPage({ params }: { params: Params }) {
  const city = findCity(params.city);
  if (!city) notFound();

  const county = findCounty(city.countySlug);
  if (!county) notFound();

  const graph = composeGraph(
    buildCityLocalBusiness(city, county),
    buildFaqPage(faqs.slice(0, 6)),
    buildBreadcrumb([breadcrumbHome, breadcrumbCounty(county), breadcrumbCity(city)]),
  );

  return (
    <>
      <JsonLd data={graph} />
      <CityHero city={city} county={county} />
      <TrustBar />
      <CityLocalContext city={city} />
      <ProcessSteps />
      <ComparisonTable />
      <Testimonials />
      <FAQ limit={6} heading={`Common questions in ${city.name}`} />
      <NearbyLinks city={city} />
      <CtaBand
        heading={`Ready to see your ${city.name} number?`}
        body="Two minutes online, or call us — whatever's easier. Either way, no pressure."
      />
    </>
  );
}
