import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/Container";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbHome,
  buildBreadcrumb,
  buildFaqPage,
  composeGraph,
} from "@/lib/schema";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ — selling your house for cash in RI & MA",
  description:
    "Straight answers to the questions sellers actually ask: how the offer's calculated, how fast we close, condition, tenants, foreclosure, multi-family, and more.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const graph = composeGraph(
    buildFaqPage(faqs),
    buildBreadcrumb([breadcrumbHome, { name: "FAQ", url: "/faq" }]),
  );

  return (
    <>
      <JsonLd data={graph} />
      <section className="border-b border-rule/10 bg-paper-2/40">
        <Container className="max-w-3xl py-16 md:py-24">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-3">Straight answers, in plain language.</h1>
          <p className="mt-5 font-sans text-lg text-ink-muted">
            If you don&rsquo;t see your question, call us. Honest answers are free, even if you
            end up not selling to us.
          </p>
        </Container>
      </section>
      <FAQ />
      <CtaBand />
    </>
  );
}
