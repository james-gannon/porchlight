import { notFound } from "next/navigation";
import { findCity, cities } from "@/content/cities";
import { findCounty } from "@/content/counties";
import { brandOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Sell your house fast — PorchLight Home Offers";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateImageMetadata() {
  return cities.map((c) => ({
    id: c.slug,
    alt: `Sell your house fast in ${c.name}, ${c.state}`,
  }));
}

export default function Image({ params }: { params: { city: string } }) {
  const city = findCity(params.city);
  if (!city) notFound();
  const county = findCounty(city.countySlug);
  return brandOgImage({
    eyebrow: `${city.name}, ${city.state}${county ? ` · ${county.displayName}` : ""}`,
    headline: `Sell your ${city.name} house for cash, as-is.`,
    footnote: "Written offer in 24 hours · close in 7 days · zero fees",
  });
}
