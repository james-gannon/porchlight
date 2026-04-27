import { Container, Eyebrow } from "@/components/ui/Container";
import { sellReasons } from "@/content/site";

export function SellReasons() {
  return (
    <section aria-labelledby="reasons-heading" className="bg-paper py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Who we help</Eyebrow>
          <h2 id="reasons-heading" className="mt-3">
            Real reasons real neighbors call us
          </h2>
          <p className="mt-4 font-sans text-lg text-ink-muted">
            There&rsquo;s no &ldquo;wrong&rdquo; reason to call. Here&rsquo;s why most of the
            sellers we work with reached out.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sellReasons.map((r) => (
            <li
              key={r.title}
              className="rounded-lg border border-rule/10 bg-paper-2/40 p-6"
            >
              <h3 className="font-display text-lg text-ink">{r.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">{r.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
