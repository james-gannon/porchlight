import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description: `Our commitment to making ${site.url} usable by everyone.`,
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <section className="bg-paper py-12 md:py-20">
      <Container className="max-w-3xl prose-content">
        <Eyebrow>Accessibility</Eyebrow>
        <h1 className="mt-3">Accessibility statement</h1>

        <div className="mt-6 space-y-6 font-sans text-base leading-relaxed text-ink-muted">
          <p>
            We want this website to be usable by everyone, including people who use screen
            readers, keyboard-only navigation, or assistive technologies. We aim to meet WCAG
            2.2 Level AA across the site.
          </p>

          <h2 className="font-display text-2xl text-ink">What we&rsquo;ve done</h2>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Visible focus rings on every interactive element</li>
            <li>Skip-to-content link at the top of every page</li>
            <li>Semantic HTML, ARIA labels, and alt text on images</li>
            <li>Color contrast that meets WCAG 2.2 AA against our brand palette</li>
            <li>Forms with explicit labels, hints, and inline error messages</li>
            <li>
              Reduced-motion preference is respected; nothing flashes or auto-plays
            </li>
          </ul>

          <h2 className="font-display text-2xl text-ink">Trouble using the site?</h2>
          <p>
            If you run into something that isn&rsquo;t accessible, please tell us — we&rsquo;ll
            fix it. Email{" "}
            <a href={`mailto:${site.email}`} className="text-amber-deep underline">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${site.phone.web}`} className="text-amber-deep underline">
              {site.phone.web}
            </a>
            . If you&rsquo;d like to request information by phone, we&rsquo;re happy to read it
            to you.
          </p>
        </div>
      </Container>
    </section>
  );
}
