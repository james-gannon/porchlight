import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { SellReasons } from "@/components/sections/SellReasons";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { OwnerStory } from "@/components/sections/OwnerStory";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} — Sell your house fast for cash in RI & southeastern MA`,
  description:
    "Local Rhode Island cash home buyer. We buy houses as-is across RI, Bristol, Plymouth & Norfolk County MA — no fees, no repairs, close in as little as 7 days.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProcessSteps />
      <ComparisonTable />
      <SellReasons />
      <Testimonials />
      <ServiceArea />
      <OwnerStory />
      <FAQ limit={6} />
      <CtaBand />
    </>
  );
}
