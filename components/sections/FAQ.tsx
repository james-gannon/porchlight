"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { faqs } from "@/content/site";
import { cn } from "@/lib/cn";

type Props = {
  /** When set, only render the first N items (e.g. on the home page). */
  limit?: number;
  /** Optional intro override. */
  heading?: string;
  eyebrow?: string;
};

export function FAQ({ limit, heading = "Questions sellers actually ask", eyebrow = "FAQ" }: Props) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading" className="bg-paper py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id="faq-heading" className="mt-3">
            {heading}
          </h2>
        </div>

        <ul className="mx-auto mt-10 max-w-3xl divide-y divide-rule/10 rounded-lg border border-rule/10 bg-paper-2/40">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-paper-2/80"
                >
                  <span className="font-display text-base font-semibold text-ink">{item.q}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rule/20 text-amber-deep transition-colors",
                      open && "bg-amber/20 border-amber/40",
                    )}
                  >
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!open}
                  className="px-5 pb-5"
                >
                  <p className="font-sans text-base leading-relaxed text-ink-muted">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
