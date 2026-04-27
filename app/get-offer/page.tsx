import type { Metadata } from "next";
import { ShieldCheck, Phone, Clock, Banknote } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get your cash offer — PorchLight Home Offers",
  description:
    "Tell us about your house. We'll send a fair, no-obligation cash offer within 24 hours. RI, Bristol, Plymouth & Norfolk County MA.",
  alternates: { canonical: "/get-offer" },
  robots: { index: true, follow: true },
};

export default function GetOfferPage() {
  return (
    <section className="bg-paper-2/40 py-12 md:py-20">
      <Container className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Eyebrow>Get my cash offer</Eyebrow>
          <h1 className="mt-3">Tell us about the house. We&rsquo;ll do the rest.</h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-ink-muted">
            This takes about two minutes. We&rsquo;ll review the details, sometimes do a quick
            walk-through, and have a written offer to you within 24 hours.
          </p>

          <ul className="mt-8 space-y-4 font-sans text-sm">
            <Bullet
              icon={<Banknote className="h-5 w-5" />}
              title="No fees, no commissions"
              body="What we offer is what you walk away with."
            />
            <Bullet
              icon={<Clock className="h-5 w-5" />}
              title="Close in 7 to 90 days"
              body="Pick the date. We close at a real attorney's office."
            />
            <Bullet
              icon={<ShieldCheck className="h-5 w-5" />}
              title="No obligation"
              body="Walk away any time. The offer is yours to keep."
            />
          </ul>

          <div className="mt-8 rounded-lg border border-rule/10 bg-paper p-5">
            <p className="font-display text-base font-semibold text-ink">
              Prefer a phone call?
            </p>
            <p className="mt-1 font-sans text-sm text-ink-muted">
              We answer our own phones. Mon–Fri {site.hours.monFri}.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-3 inline-flex items-center gap-2 font-sans text-base font-semibold text-ink hover:text-amber-deep"
            >
              <Phone className="h-4 w-4 text-amber-deep" aria-hidden />
              {site.phone.web}
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-xl border border-rule/10 bg-paper p-6 shadow-lantern md:p-8">
            <LeadForm source="get-offer-page" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Bullet({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-deep">
        {icon}
      </span>
      <span>
        <span className="block font-display text-base font-semibold text-ink">{title}</span>
        <span className="block text-sm text-ink-muted">{body}</span>
      </span>
    </li>
  );
}
