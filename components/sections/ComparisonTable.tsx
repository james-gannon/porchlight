import { Check, X } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { comparison } from "@/content/site";
import { cn } from "@/lib/cn";

const headers = ["", "PorchLight", "Traditional agent", "FSBO"] as const;

export function ComparisonTable() {
  return (
    <section aria-labelledby="compare-heading" className="border-y border-rule/10 bg-paper-2/40 py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Apples to apples</Eyebrow>
          <h2 id="compare-heading" className="mt-3">
            How a cash sale stacks up
          </h2>
          <p className="mt-4 font-sans text-lg text-ink-muted">
            Selling to us isn&rsquo;t the right call for every house — but when speed,
            certainty, or condition is the priority, the math is usually pretty clear.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-10 hidden overflow-hidden rounded-lg border border-rule/10 bg-paper md:block">
          <table className="w-full text-left font-sans">
            <thead className="bg-paper-2/70">
              <tr>
                {headers.map((h, i) => (
                  <th
                    key={h || i}
                    scope="col"
                    className={cn(
                      "px-5 py-4 font-display text-sm font-semibold text-ink",
                      i === 1 && "bg-amber/15 text-ink",
                    )}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-rule/10">
              {comparison.map((row) => (
                <tr key={row.dimension}>
                  <th
                    scope="row"
                    className="px-5 py-4 align-top text-sm font-medium text-ink-muted"
                  >
                    {row.dimension}
                  </th>
                  <td className="bg-amber/[0.06] px-5 py-4 align-top text-sm font-semibold text-ink">
                    <span className="inline-flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-deep" aria-hidden />
                      {row.porchlight}
                    </span>
                  </td>
                  <td className="px-5 py-4 align-top text-sm text-ink-muted">
                    <span className="inline-flex items-start gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/40" aria-hidden />
                      {row.agent}
                    </span>
                  </td>
                  <td className="px-5 py-4 align-top text-sm text-ink-muted">
                    <span className="inline-flex items-start gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/40" aria-hidden />
                      {row.fsbo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card list */}
        <ul className="mt-8 space-y-4 md:hidden">
          {comparison.map((row) => (
            <li
              key={row.dimension}
              className="rounded-lg border border-rule/10 bg-paper p-5"
            >
              <p className="font-display text-base font-semibold text-ink">{row.dimension}</p>
              <dl className="mt-3 space-y-2 font-sans text-sm">
                <div className="flex items-start justify-between gap-3 rounded-md bg-amber/[0.08] p-2.5">
                  <dt className="text-ink-muted">PorchLight</dt>
                  <dd className="text-right font-semibold text-ink">{row.porchlight}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-ink-muted">Agent</dt>
                  <dd className="text-right text-ink-muted">{row.agent}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-ink-muted">FSBO</dt>
                  <dd className="text-right text-ink-muted">{row.fsbo}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
