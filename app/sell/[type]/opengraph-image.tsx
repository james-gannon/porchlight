import { notFound } from "next/navigation";
import { propertyTypes, findPropertyType } from "@/content/propertyTypes";
import { brandOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Sell as-is for cash — PorchLight Home Offers";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateImageMetadata() {
  return propertyTypes.map((p) => ({
    id: p.slug,
    alt: `${p.name} — sell as-is for cash`,
  }));
}

export default function Image({ params }: { params: { type: string } }) {
  const pt = findPropertyType(params.type);
  if (!pt) notFound();
  return brandOgImage({
    eyebrow: pt.eyebrow,
    headline: pt.headline,
    footnote: "Local RI cash buyer · written offer in 24 hours",
  });
}
