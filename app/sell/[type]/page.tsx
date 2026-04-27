import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { propertyTypes, findPropertyType } from "@/content/propertyTypes";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Eyebrow } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { TrustBar } from "@/components/sections/TrustBar";
import {
  breadcrumbHome,
  breadcrumbPropertyType,
  buildBreadcrumb,
  buildFaqPage,
  buildService,
  composeGraph,
} from "@/lib/schema";
import { propertyTypeUrl } from "@/lib/content";
import { site } from "@/content/site";

type Params = { type: string };

export async function generateStaticParams(): Promise<Params[]> {
  return propertyTypes.map((p) => ({ type: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const pt = findPropertyType(params.type);
  if (!pt) return {};
  return {
    title: `${pt.name} — sell as-is for cash`,
    description: pt.metaDescription,
    alternates: { canonical: propertyTypeUrl(pt.slug) },
    openGraph: {
      title: `${pt.name} — sell as-is for cash`,
      description: pt.metaDescription,
      url: propertyTypeUrl(pt.slug),
    },
  };
}

export default function PropertyTypePage({ params }: { params: Params }) {
  const pt = findPropertyType(params.type);
  if (!pt) notFound();

  const graph = composeGraph(
    buildService(pt),
    buildFaqPage(pt.faq),
    buildBreadcrumb([breadcrumbHome, breadcrumbPropertyType(pt)]),
  );

  return (
    <>
      <JsonLd data={graph} />

      <section className="border-b border-rule/10 bg-paper-2/40">
        <Container className="grid gap-10 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <Eyebrow>{pt.eyebrow}</Eyebrow>
            <h1 className="mt-3 max-w-2xl">{pt.headline}</h1>
            <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-ink-muted">
              {pt.subhead}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/get-offer" className="btn-primary">
                Get my cash offer
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
              <a href={`tel:${site.phone.web}`} className="btn-ghost">
                <Phone className="mr-2 h-4 w-4 text-amber-deep" aria-hidden />
                Call {site.phone.web}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-xl border border-rule/10 bg-paper p-5 shadow-lantern md:p-7">
              <p className="font-display text-xl text-ink">Tell us about the property</p>
              <p className="mt-1 font-sans text-sm text-ink-muted">
                Same form, every situation. We&rsquo;ll respond within an hour during business
                hours.
              </p>
              <div className="mt-4">
                <LeadForm source={`type-${pt.slug}`} compact />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>{pt.name}</Eyebrow>
            <h2 className="mt-3">What this looks like with us</h2>
          </div>
          <div className="md:col-span-8 space-y-8 font-sans text-base leading-relaxed text-ink-muted">
            {pt.body.map((block) => (
              <div key={block.heading}>
                <h3 className="font-display text-xl text-ink">{block.heading}</h3>
                <div className="mt-3 space-y-3">
                  {block.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSteps />
      <ComparisonTable />
      <Testimonials />

      <section aria-labelledby={`${pt.slug}-faq`} className="bg-paper py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>FAQ</Eyebrow>
            <h2 id={`${pt.slug}-faq`} className="mt-3">
              Common questions about {pt.name.toLowerCase()} sales
            </h2>
          </div>
          <ul className="mx-auto mt-10 max-w-3xl divide-y divide-rule/10 rounded-lg border border-rule/10 bg-paper-2/40">
            {pt.faq.map((item) => (
              <li key={item.q} className="px-5 py-4">
                <p className="font-display text-base font-semibold text-ink">{item.q}</p>
                <p className="mt-2 font-sans text-base leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
