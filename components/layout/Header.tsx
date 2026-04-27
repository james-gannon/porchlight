"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule/10 bg-paper/85 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-amber focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to main content
      </a>
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
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

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
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
          <Link href="/get-offer" className="btn-primary hidden text-sm md:inline-flex">
            Get cash offer
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-rule/15 text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-rule/10 bg-paper md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label="Mobile" className="container flex flex-col gap-1 py-3">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 font-sans text-base text-ink hover:bg-paper-2/60"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/get-offer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Get cash offer
          </Link>
        </nav>
      </div>
    </header>
  );
}
