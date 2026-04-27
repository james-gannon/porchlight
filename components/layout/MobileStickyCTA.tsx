"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { site } from "@/content/site";

const HIDE_ON: ReadonlyArray<string> = ["/get-offer"];

export function MobileStickyCTA() {
  const pathname = usePathname();
  if (HIDE_ON.includes(pathname)) return null;

  return (
    <div
      role="region"
      aria-label="Get a cash offer"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-rule/15 bg-paper/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-2 px-4 py-3">
        <a
          href={`tel:${site.phone.web}`}
          className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-md border border-rule/20 font-sans text-sm font-medium text-ink"
        >
          <Phone className="h-4 w-4 text-amber-deep" aria-hidden />
          Call now
        </a>
        <Link
          href="/get-offer"
          className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-amber px-4 font-sans text-sm font-semibold text-ink shadow-lantern transition-colors hover:bg-amber-deep hover:text-paper"
        >
          Get my offer
        </Link>
      </div>
    </div>
  );
}
