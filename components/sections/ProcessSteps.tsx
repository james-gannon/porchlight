import { Container, Eyebrow } from "@/components/ui/Container";
import { processSteps } from "@/content/site";

export function ProcessSteps() {
  return (
    <section aria-labelledby="process-heading" className="bg-paper py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 id="process-heading" className="mt-3">
            Three steps. No surprises.
          </h2>
          <p className="mt-4 font-sans text-lg text-ink-muted">
            We&rsquo;ve kept the process boring on purpose. The fewer surprises along the way,
            the more sellers trust the number we hand them.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {processSteps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-lg border border-rule/10 bg-paper-2/40 p-6 transition-colors hover:bg-paper-2/70"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber font-display text-lg font-semibold text-ink shadow-lantern">
                {i + 1}
              </div>
              <h3 className="mt-4">{s.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
