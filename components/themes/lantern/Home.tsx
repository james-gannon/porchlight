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

export function LanternHome() {
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
