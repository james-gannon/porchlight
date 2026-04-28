import Link from "next/link";
import { Phone, ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { ChatThread } from "@/components/sections/ChatThread";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { faqs, processSteps, site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Receipts — radical transparency / brutalist letterpress. The page literally
 * looks like a property report or an old offer letter. Heavy use of monospace,
 * hairline rules, line-numbers, stamp accents. Trust through showing the math.
 *
 * Color: stark cream + ink + a single rubber-stamp red. Typography: monospace
 * dominant; condensed serif for big numbers and headlines.
 */

const STAMP_RED = "#B6312B";

export function ReceiptsHome() {
  return (
    <div className="bg-[#F4EFE4] text-ink">
      {/* DOCUMENT MASTHEAD */}
      <section className="border-b-2 border-ink">
        <Container className="py-8">
          <div className="flex flex-col items-start justify-between gap-3 border-b border-ink/30 pb-4 font-mono text-[11px] uppercase tracking-widest text-ink/70 md:flex-row">
            <span>Document &mdash; PorchLight Home Offers · 2026</span>
            <span>Form 1A &middot; Public Operator Disclosure &middot; Rev. 04</span>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
                File: cover page
              </p>
              <h1 className="mt-4 font-display text-5xl uppercase leading-[1] tracking-tight md:text-7xl">
                Honest math.
                <br />
                Real numbers.
                <br />
                <span className="border-b-4 border-ink">No black box.</span>
              </h1>
              <p className="mt-6 max-w-xl font-mono text-base leading-relaxed text-ink/80">
                Most cash buyers say &ldquo;we&rsquo;ll give you a fair offer.&rdquo;
                We&rsquo;d rather show you exactly how we arrive at one. This page
                is laid out like a property report on purpose.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/get-offer"
                  className="inline-flex items-center justify-center border-2 border-ink bg-ink px-5 py-3 font-mono text-sm font-bold uppercase tracking-widest text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Request file
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
                <a
                  href={`tel:${site.phone.web}`}
                  className="inline-flex items-center gap-2 border-2 border-ink px-5 py-3 font-mono text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {site.phone.web}
                </a>
              </div>
            </div>
            <aside className="relative md:col-span-4">
              <div className="border-2 border-ink p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                  Operator at a glance
                </p>
                <dl className="mt-4 space-y-2 font-mono text-sm">
                  <Row label="Operator" value={site.name} />
                  <Row label="Founded" value="[TO FILL]" />
                  <Row label="Houses purchased" value="[TO FILL]" />
                  <Row label="Avg. close" value="14 days" />
                  <Row label="Service area" value="RI · SE Mass" />
                  <Row label="Closings at" value="Local attorney" />
                  <Row label="Funding" value="Cash on hand" />
                </dl>
              </div>
              <Stamp className="absolute -right-3 top-3 -rotate-12">As-Is OK</Stamp>
            </aside>
          </div>
        </Container>
      </section>

      {/* THE OFFER LEDGER — actual sample math */}
      <section className="border-b-2 border-ink py-16 md:py-20">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            Section 1 &middot; The math
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight md:text-5xl">
            How we arrive at a number.
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-ink/80">
            Every offer is the same equation. We&rsquo;ll walk you through
            yours, line by line. Below: a sample for a 3-bed, 1.5-bath single-
            family in Pawtucket, condition: needs major work.
          </p>

          <div className="mt-10 overflow-hidden border-2 border-ink bg-paper">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b-2 border-ink bg-ink text-paper">
                  <th className="px-4 py-2 text-left">Line</th>
                  <th className="px-4 py-2 text-left">Item</th>
                  <th className="px-4 py-2 text-right">Amount</th>
                  <th className="px-4 py-2 text-left">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/15">
                <LedgerRow
                  no="01"
                  item="ARV (after-repair value)"
                  amount="$385,000"
                  note="Three closed comps within 0.4 mi; 90 days"
                />
                <LedgerRow no="02" item="Renovation budget" amount="−$72,500" note="Roof, electrical, kitchen, bath, paint" />
                <LedgerRow no="03" item="Holding costs (5 mo)" amount="−$11,200" note="Taxes, insurance, utilities, capital cost" />
                <LedgerRow no="04" item="Selling costs (resale)" amount="−$23,100" note="Agent commission + closing on resale" />
                <LedgerRow no="05" item="Operator margin" amount="−$28,200" note="Our fee for the work + risk" />
                <tr className="bg-amber/15 font-bold">
                  <td className="px-4 py-3">06</td>
                  <td className="px-4 py-3">Cash offer to seller</td>
                  <td className="px-4 py-3 text-right text-lg">$250,000</td>
                  <td className="px-4 py-3">Net to seller, no commissions / fees</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-mono text-xs italic text-ink/60">
            This is a sample, not a quote. Your number depends on the specific
            property and comps. We share the actual breakdown for every offer.
          </p>
        </Container>
      </section>

      {/* RECENT FILES — last few closings, paginated like a binder */}
      <section className="border-b-2 border-ink py-16 md:py-20">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            Section 2 &middot; Recent files
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight md:text-5xl">
            Last six closings.
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-ink/80">
            Anonymized to protect sellers. We&rsquo;ll show you the full file
            of any of these on request, including the closing statement.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {SAMPLE_FILES.map((f, i) => (
              <li key={i} className="border-2 border-ink bg-paper p-5">
                <div className="flex items-center justify-between border-b border-ink/20 pb-3">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                    File &middot; {String(i + 1).padStart(3, "0")}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                    {f.closedIn}
                  </p>
                </div>
                <p className="mt-3 font-display text-lg uppercase">{f.headline}</p>
                <dl className="mt-3 grid grid-cols-2 gap-y-1.5 font-mono text-sm">
                  <Pair label="Type" value={f.type} />
                  <Pair label="Condition" value={f.condition} />
                  <Pair label="Situation" value={f.situation} />
                  <Pair label="Offer" value={f.offer} />
                </dl>
                <p className="mt-4 border-t border-ink/15 pt-3 font-mono text-xs italic leading-relaxed text-ink/70">
                  {f.note}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* PROCESS LOG */}
      <section className="border-b-2 border-ink py-16 md:py-20">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            Section 3 &middot; Process log
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight md:text-5xl">
            From first call to wire transfer.
          </h2>
          <ol className="mt-10 grid gap-0 border-y-2 border-ink">
            {processSteps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-12 border-b-2 border-ink/15 last:border-0">
                <div className="col-span-2 border-r-2 border-ink/15 p-5 font-mono text-2xl text-ink/70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 p-5">
                  <p className="font-display text-2xl uppercase">{s.title}</p>
                  <p className="mt-2 font-mono text-sm leading-relaxed text-ink/80">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* PRINCIPLES — the rules we operate by */}
      <section className="border-b-2 border-ink py-16 md:py-20">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            Section 4 &middot; Operator principles
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight md:text-5xl">
            The rules we operate by.
          </h2>
          <ol className="mt-10 grid gap-0 md:grid-cols-2">
            {[
              "We never renegotiate at the closing table. The offer on day one is the offer at signing.",
              "We don't assign contracts. If we sign to buy, we close. No bait-and-switch wholesalers.",
              "We tell sellers when listing is the better call. We've talked plenty out of selling to us.",
              "We don't post addresses on social media or talk about your situation outside the team.",
              "We close at a real attorney's office. The funds wire from a real bank account.",
              "We answer our own phones. No call center, no IVR, no scripts.",
            ].map((p, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-4 border-r-2 border-b-2 border-ink/15 p-5 font-mono text-sm leading-relaxed last:border-r-0 even:border-r-0 md:even:border-r-2 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <span className="text-ink/60">§{String(i + 1).padStart(2, "0")}</span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* DEPOSITION — Q&A */}
      <section className="border-b-2 border-ink py-16 md:py-20">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            Section 5 &middot; Common questions
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight md:text-5xl">
            Q. Things sellers ask.
          </h2>
          <ol className="mt-10 max-w-3xl space-y-7">
            {faqs.slice(0, 6).map((f, i) => (
              <li key={f.q} className="border-l-4 border-ink pl-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                  Q{String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-display text-xl uppercase">{f.q}</p>
                <p className="mt-3 font-mono text-sm leading-relaxed text-ink/80">
                  <span className="font-bold uppercase">A.</span> {f.a}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* SAMPLE EXCHANGE — first contact transcript */}
      <section className="border-b-2 border-ink py-16 md:py-20">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            Section 6 &middot; Transcript &middot; First contact
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight md:text-5xl">
            Verbatim.
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-ink/80">
            A typical first text exchange, with permission. Names anonymized.
          </p>
          <div className="mt-10 max-w-2xl border-2 border-ink bg-paper p-5">
            <ChatThread
              outgoingSide="right"
              palette="paper"
              messages={[
                {
                  side: "incoming",
                  initial: "S",
                  body: "Saw your postcard. House has been vacant 3 yrs. We're behind on taxes. What kind of number we lookin at",
                },
                {
                  side: "outgoing",
                  initial: "K",
                  body: "Thank you for reaching out — really. Quick questions and I'll have a written number for you tomorrow: address, square footage, and how bad is the condition (1-10)?",
                },
                {
                  side: "incoming",
                  initial: "S",
                  body: "Brockton, ~1100sf, condition 3. Roof is shot, basement leaks.",
                },
                {
                  side: "outgoing",
                  initial: "K",
                  body: "Got it. I'll text the offer + the math by 5pm tomorrow. No obligation, no calls in the meantime unless you want one.",
                  caption: "Closed 21 days later, taxes paid at closing.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <ServiceArea />

      {/* FORM — looks like a request slip */}
      <section className="py-16 md:py-20">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
              Section 7 &middot; Request form
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-tight md:text-5xl">
              File a request.
            </h2>
            <p className="mt-4 font-mono text-sm leading-relaxed text-ink/80">
              Two minutes. We&rsquo;ll prepare your written offer with the
              math, just like the sample above, within 24 hours.
            </p>
            <a
              href={`tel:${site.phone.web}`}
              className="mt-8 inline-flex items-center gap-2 font-display text-3xl uppercase"
            >
              <Phone className="h-6 w-6" aria-hidden />
              {site.phone.web}
            </a>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink/60">
              Mon&ndash;Fri {site.hours.monFri}
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="border-2 border-ink bg-paper p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between border-b-2 border-ink/30 pb-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">
                  Form &middot; 02
                </p>
                <p className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-ink/60">
                  <FileText className="h-3 w-3" aria-hidden /> Property intake
                </p>
              </div>
              <LeadForm source="home-receipts" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// --- Helpers ---

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-ink/10 pb-1.5">
      <dt className="text-ink/60">{label}</dt>
      <dd className="font-bold text-ink">{value}</dd>
    </div>
  );
}

function LedgerRow({
  no,
  item,
  amount,
  note,
}: {
  no: string;
  item: string;
  amount: string;
  note: string;
}) {
  return (
    <tr>
      <td className="px-4 py-3 text-ink/60">{no}</td>
      <td className="px-4 py-3 font-bold">{item}</td>
      <td className="px-4 py-3 text-right tabular-nums">{amount}</td>
      <td className="px-4 py-3 text-ink/70">{note}</td>
    </tr>
  );
}

function Pair({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-ink/60">{label}</dt>
      <dd className="text-right font-bold">{value}</dd>
    </>
  );
}

function Stamp({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-sm border-[3px] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.18em]",
        className,
      )}
      style={{ borderColor: STAMP_RED, color: STAMP_RED }}
    >
      {children}
    </div>
  );
}

const SAMPLE_FILES = [
  {
    headline: "Pawtucket triple-decker, vacant 18 mo",
    type: "Multi-family (3-unit)",
    condition: "Major work",
    situation: "Tired landlord",
    offer: "$272,000",
    closedIn: "Closed in 11 d",
    note: "Tenants moved out, owner lived in MA. Closed remotely via mail-in notarization.",
  },
  {
    headline: "Cape Cod ranch, Cranston",
    type: "Single-family",
    condition: "Light updates",
    situation: "Inherited",
    offer: "$315,000",
    closedIn: "Closed in 14 d",
    note: "Estate had three siblings; we worked through the probate attorney for sign-off.",
  },
  {
    headline: "Three-decker, Fall River",
    type: "Multi-family (3-unit)",
    condition: "As-is",
    situation: "Pre-foreclosure",
    offer: "$198,000",
    closedIn: "Closed in 9 d",
    note: "Auction was 19 days out. Verified payoff with bank, closed before sale date.",
  },
  {
    headline: "Cottage, Wareham",
    type: "Single-family seasonal",
    condition: "Cleanout needed",
    situation: "Inherited / vacant",
    offer: "$148,000",
    closedIn: "Closed in 21 d",
    note: "Heir lived in Tucson. Cleanout post-close. Heir flew in only for the closing.",
  },
  {
    headline: "Brockton split-level",
    type: "Single-family",
    condition: "Major work",
    situation: "Divorce",
    offer: "$245,000",
    closedIn: "Closed in 30 d",
    note: "Closing timed to the divorce decree; proceeds split per settlement.",
  },
  {
    headline: "North Kingstown colonial",
    type: "Single-family",
    condition: "Move-in ready",
    situation: "Relocating",
    offer: "$420,000",
    closedIn: "Closed in 18 d",
    note: "We told this seller listing would likely net more — they came back two weeks later wanting speed.",
  },
] as const;
