import { Quote } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-paper py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>From neighbors</Eyebrow>
          <h2 id="testimonials-heading" className="mt-3">
            What sellers say after closing
          </h2>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={`${t.name}-${t.location}`}
              className="flex flex-col rounded-lg border border-rule/10 bg-paper-2/40 p-6"
            >
              <Quote className="h-6 w-6 text-amber-deep" aria-hidden />
              <p className="mt-4 font-display text-lg leading-snug text-ink">{t.quote}</p>
              <div className="mt-auto pt-5 font-sans text-sm">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-ink-muted">
                  {t.situation} · {t.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
