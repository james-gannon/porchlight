import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Thanks — we'll be in touch shortly",
  description: "Your information has been received. We'll review the details and call you within one business hour.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <Container className="max-w-2xl text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-amber-deep" aria-hidden />
        <h1 className="mt-6">Got it &mdash; thank you.</h1>
        <p className="mt-5 font-sans text-lg text-ink-muted">
          We received your information and we&rsquo;re already looking it over. Here&rsquo;s
          what happens next.
        </p>

        <ol className="mx-auto mt-10 max-w-md space-y-4 text-left font-sans">
          <Step number={1} title="We'll call you within one business hour">
            During business hours, usually much faster. After hours, first thing the next morning.
          </Step>
          <Step number={2} title="Quick walk-through, in person or by video">
            20&ndash;30 minutes. We&rsquo;re checking the major systems &mdash; not nitpicking.
          </Step>
          <Step number={3} title="Written cash offer within 24 hours">
            Clear math, no pressure, no obligation. You decide if it works for you.
          </Step>
        </ol>

        <div className="mt-10 rounded-lg border border-rule/10 bg-paper-2/40 p-6">
          <p className="font-display text-lg text-ink">Want to speed things up?</p>
          <p className="mt-1 font-sans text-sm text-ink-muted">
            <Clock className="mr-1 inline h-4 w-4 text-amber-deep" aria-hidden />
            We answer our own phones, Mon&ndash;Fri {site.hours.monFri}.
          </p>
          <a
            href={`tel:${site.phone.web}`}
            className="mt-4 inline-flex items-center gap-2 font-display text-2xl font-semibold text-ink hover:text-amber-deep"
          >
            <Phone className="h-5 w-5 text-amber-deep" aria-hidden />
            {site.phone.web}
          </a>
        </div>

        <p className="mt-8 font-sans text-sm text-ink-muted">
          <Link href="/" className="underline hover:text-amber-deep">
            Back to {site.name}
          </Link>
        </p>
      </Container>
    </section>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-lg border border-rule/10 bg-paper-2/40 p-4">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber font-display text-base font-semibold text-ink shadow-lantern">
        {number}
      </span>
      <span>
        <span className="block font-display text-base font-semibold text-ink">{title}</span>
        <span className="mt-1 block text-sm text-ink-muted">{children}</span>
      </span>
    </li>
  );
}
