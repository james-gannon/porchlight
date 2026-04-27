import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/content/site";

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/10 bg-paper/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-2">
          <Image
            src="/logo-mark.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            PorchLight <span className="text-ink-muted">Home Offers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-sans text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.web}`}
            className="hidden items-center gap-1.5 font-sans text-sm font-medium text-ink sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-amber-deep" aria-hidden />
            {site.phone.web}
          </a>
          <Link href="/get-offer" className="btn-primary text-sm">
            Get cash offer
          </Link>
        </div>
      </div>
    </header>
  );
}
