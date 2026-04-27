import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const allCities = [
    ...site.serviceAreas.ri,
    ...site.serviceAreas.bristolMa,
    ...site.serviceAreas.plymouthMa,
  ];

  return (
    <footer className="border-t border-rule/10 bg-paper-2/60">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-semibold">{site.name}</p>
            <p className="mt-2 max-w-md text-sm text-ink-muted">{site.tagline}</p>
            <p className="mt-6 text-sm text-ink-muted">
              <a href={`tel:${site.phone.web}`} className="font-medium text-ink hover:text-amber-deep">
                {site.phone.web}
              </a>
              {" · "}
              <a href={`mailto:${site.email}`} className="hover:text-amber-deep">
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted">
              Company
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-amber-deep">About</Link></li>
              <li><Link href="/how-it-works" className="hover:text-amber-deep">How it works</Link></li>
              <li><Link href="/faq" className="hover:text-amber-deep">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-amber-deep">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-amber-deep">Blog</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted">
              Service area
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm">
              {allCities.map((city) => (
                <li key={city}>
                  <Link
                    href={`/sell-my-house-fast/${city.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-amber-deep"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-rule/10 pt-6 text-xs text-ink-muted md:flex-row md:items-center">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-amber-deep">Privacy</Link>
            <Link href="/terms" className="hover:text-amber-deep">Terms</Link>
            <Link href="/accessibility" className="hover:text-amber-deep">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
