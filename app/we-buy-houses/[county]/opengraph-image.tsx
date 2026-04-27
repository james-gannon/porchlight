import { notFound } from "next/navigation";
import { counties, findCounty } from "@/content/counties";
import { brandOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "We buy houses — PorchLight Home Offers";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateImageMetadata() {
  return counties.map((c) => ({
    id: c.slug,
    alt: `We buy houses in ${c.displayName}`,
  }));
}

export default function Image({ params }: { params: { county: string } }) {
  const county = findCounty(params.county);
  if (!county) notFound();
  return brandOgImage({
    eyebrow: `${county.displayName}`,
    headline: `We buy houses across ${county.displayName}.`,
    footnote: "Cash · as-is · close on your timeline",
  });
}
