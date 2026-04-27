import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { QuickOfferForm } from "@/components/forms/QuickOfferForm";
import type { City, County } from "@/lib/content";
import { site } from "@/content/site";

type Props = {
  city: City;
  county: County;
};

export function CityHero({ city, county }: Props) {
  const eyebrow = city.nickname
    ? `${city.name}, ${city.state} · ${city.nickname}`
    : `${city.name}, ${city.state} · ${county.displayName}`;

  return (
    <section className="relative overflow-hidden border-b border-rule/10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-paper via-paper to-paper-2/60" />
      <Container className="grid items-center gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-2xl">
            Sell your {city.name} house{" "}
            <span className="text-amber-deep">for cash, as-is, on your timeline.</span>
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-muted">
            We buy houses across {city.name} and the rest of {county.displayName} — no agents,
            no repairs, no showings. Local buyer, real attorney closing, written cash offer
            within 24 hours.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/get-offer" className="btn-primary">
              Get my {city.name} cash offer
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
            <p className="font-display text-xl text-ink">Get your {city.name} cash offer</p>
            <p className="mt-1 font-sans text-sm text-ink-muted">
              Address and phone — we&rsquo;ll call within an hour during business hours.
            </p>
            <div className="mt-4">
              <QuickOfferForm source={`city-${city.slug}`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
