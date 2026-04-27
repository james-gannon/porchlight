import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSignature, Search, Calendar, KeyRound, Banknote } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "How it works — fair cash offer in 24 hours, close in 7 days",
  description:
    "PorchLight's three-step process for selling your house as-is for cash in Rhode Island and southeastern Massachusetts. Honest math, no surprises.",
  alternates: { canonical: "/how-it-works" },
};

const detailSteps = [
  {
    icon: <Search className="h-5 w-5" />,
    title: "We learn the house",
    body: "After you reach out, we'll do a quick walk-through (in person or via video — your call). It usually takes 20–30 minutes. We're checking the major systems and the obvious work, not nitpicking.",
  },
  {
    icon: <FileSignature className="h-5 w-5" />,
    title: "We send a written offer",
    body: "Within 24 hours we send a clear, written cash offer with the math. If anything looks off, ask. We'll show our comparable sales and our repair estimate so you can sanity-check it.",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "You pick the closing date",
    body: "If the number works, we sign a simple purchase agreement and pick a closing date — anywhere from 7 to 90 days. You're in control of the calendar, not the buyer.",
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: "You move on your terms",
    body: "Take what you want, leave the rest. We handle the cleanout. If you need extra time after closing to move, we can usually arrange a rent-back at no charge.",
  },
  {
    icon: <Banknote className="h-5 w-5" />,
    title: "You walk away with cash",
    body: "Closing happens at a real attorney's office (yours or ours, your preference). The funds wire to your account that day. No surprises, no last-minute renegotiation.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-rule/10 bg-paper-2/40">
        <Container className="max-w-3xl py-16 md:py-24">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="mt-3">A boring, predictable way to sell your house for cash.</h1>
          <p className="mt-5 font-sans text-lg text-ink-muted">
            We&rsquo;ve sold houses ourselves. We know what makes a sale stressful and what makes
            it smooth. Here&rsquo;s the entire process — every step, no fine print.
          </p>
          <div className="mt-7">
            <Link href="/get-offer" className="btn-primary">
              Start with the form
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <ProcessSteps />

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Step by step</Eyebrow>
            <h2 className="mt-3">What actually happens, in order</h2>
          </div>
          <ol className="mt-10 space-y-6">
            {detailSteps.map((s, i) => (
              <li
                key={s.title}
                className="grid gap-4 rounded-lg border border-rule/10 bg-paper-2/40 p-6 md:grid-cols-12 md:items-start"
              >
                <div className="flex items-center gap-3 md:col-span-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber font-display text-base font-semibold text-ink shadow-lantern">
                    {i + 1}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber/15 text-amber-deep">
                    {s.icon}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3>{s.title}</h3>
                  <p className="mt-2 font-sans text-base leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ComparisonTable />
      <FAQ limit={8} heading="Common questions about the process" />
      <CtaBand />
    </>
  );
}
