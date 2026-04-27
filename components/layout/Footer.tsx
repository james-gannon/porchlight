import Link from "next/link";
import { site } from "@/content/site";
import { counties } from "@/content/counties";
import { citiesByCounty } from "@/content/cities";
import { propertyTypes } from "@/content/propertyTypes";
import { cityUrl, countyUrl, propertyTypeUrl } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule/10 bg-paper-2/60">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-2xl font-semibold">{site.name}</p>
            <p className="mt-2 max-w-md text-sm text-ink-muted">{site.tagline}</p>
            <p className="mt-6 text-sm text-ink-muted">
              <a
                href={`tel:${site.phone.web}`}
                className="font-medium text-ink hover:text-amber-deep"
              >
                {site.phone.web}
              </a>
              {" · "}
              <a href={`mailto:${site.email}`} className="hover:text-amber-deep">
                {site.email}
              </a>
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted">
              Company
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="hover:text-amber-deep">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-deep">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-deep">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-deep">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/get-offer" className="hover:text-amber-deep">
                  Get cash offer
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted">
              Situations
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {propertyTypes.map((p) => (
                <li key={p.slug}>
                  <Link href={propertyTypeUrl(p.slug)} className="hover:text-amber-deep">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted">
              Service area
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              {counties.map((c) => {
                const cs = citiesByCounty(c.slug);
                return (
                  <li key={c.slug}>
                    <Link
                      href={countyUrl(c.slug)}
                      className="font-medium text-ink hover:text-amber-deep"
                    >
                      {c.displayName}
                    </Link>
                    <ul className="mt-1 flex flex-wrap gap-x-2 gap-y-0.5 text-xs text-ink-muted">
                      {cs.map((city) => (
                        <li key={city.slug}>
                          <Link href={cityUrl(city.slug)} className="hover:text-amber-deep">
                            {city.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-rule/10 pt-6 text-xs text-ink-muted md:flex-row md:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-amber-deep">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-amber-deep">
              Terms
            </Link>
            <Link href="/accessibility" className="hover:text-amber-deep">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
