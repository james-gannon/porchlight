import { Container } from "@/components/ui/Container";
import { trustSignals } from "@/content/site";

export function TrustBar() {
  return (
    <section
      aria-label="Why sellers trust PorchLight"
      className="border-b border-rule/10 bg-paper-2/60 py-4"
    >
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center font-sans text-xs uppercase tracking-[0.14em] text-ink-muted">
          {trustSignals.map((s) => (
            <li key={s} className="flex items-center gap-2">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
              {s}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
