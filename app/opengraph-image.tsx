import { brandOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "PorchLight Home Offers — sell your house fast in RI & MA";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return brandOgImage({
    eyebrow: "Rhode Island · South Coast MA",
    headline: "Sell your house the simple way — cash, as-is, on your timeline.",
    footnote: "Local cash buyer · close in 7 days · zero fees",
  });
}
