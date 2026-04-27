import Link from "next/link";
import { Phone, ShieldCheck, Clock, Banknote } from "lucide-react";
import { site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { QuickOfferForm } from "@/components/forms/QuickOfferForm";

type HeroProps = {
  eyebrow?: string;
  headline?: React.ReactNode;
  subhead?: React.ReactNode;
};

const defaultEyebrow = "Rhode Island · Bristol, Plymouth & Norfolk County, MA";

export function Hero({ eyebrow = defaultEyebrow, headline, subhead }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-rule/10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-paper via-paper to-paper-2/60" />
      <Container className="grid items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-2xl">
            {headline ?? (
              <>
                Sell your house the simple way —{" "}
                <span className="text-amber-deep">cash, as-is, on your timeline.</span>
              </>
            )}
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-muted">
            {subhead ?? (
              <>
                No agents. No repairs. No showings. We&rsquo;re local neighbors who buy houses
                across Rhode Island and southeastern Massachusetts — and we&rsquo;ll have a fair
                cash offer to you in days, not months.
              </>
            )}
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-3">
            <HeroFeature
              icon={<Banknote className="h-5 w-5" />}
              title="Zero fees"
              body="No commissions, no closing costs."
            />
            <HeroFeature
              icon={<Clock className="h-5 w-5" />}
              title="Close in 7 days"
              body="Or pick a date 90 days out."
            />
            <HeroFeature
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Local & honest"
              body="Real RI buyer, real attorney closing."
            />
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/get-offer" className="btn-primary">
              Get my cash offer
            </Link>
            <a href={`tel:${site.phone.web}`} className="btn-ghost">
              <Phone className="mr-2 h-4 w-4 text-amber-deep" aria-hidden />
              Call {site.phone.web}
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-xl border border-rule/10 bg-paper p-5 shadow-lantern md:p-7">
            <p className="font-display text-xl text-ink">Get your cash offer</p>
            <p className="mt-1 font-sans text-sm text-ink-muted">
              Enter your address and number — we&rsquo;ll call you within an hour during business
              hours.
            </p>
            <div className="mt-4">
              <QuickOfferForm source="home-hero" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroFeature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-deep">
        {icon}
      </span>
      <span>
        <span className="block font-sans text-sm font-semibold text-ink">{title}</span>
        <span className="block font-sans text-xs text-ink-muted">{body}</span>
      </span>
    </li>
  );
}
