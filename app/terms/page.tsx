import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms governing your use of ${site.url}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-paper py-12 md:py-20">
      <Container className="max-w-3xl prose-content">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-3">Terms of use</h1>
        <p className="mt-3 font-sans text-sm text-ink-muted">Last updated: [TO FILL — date]</p>

        <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-ink-muted">
          <p>
            By using {site.url} (the &ldquo;site&rdquo;), you agree to these terms. If you
            don&rsquo;t agree, please don&rsquo;t use the site.
          </p>

          <h2 className="font-display text-2xl text-ink">No offer, no advice</h2>
          <p>
            Information on this site is for general informational purposes. Any cash offer we
            make is contained in a written purchase agreement, not in any web page, email, or
            text message. Nothing on this site is legal, tax, or real estate advice.
          </p>

          <h2 className="font-display text-2xl text-ink">No agency</h2>
          <p>
            {site.name} is a direct buyer of real estate. We are not your real estate agent and
            don&rsquo;t represent you in the transaction. You&rsquo;re welcome (and encouraged)
            to consult your own attorney before signing anything.
          </p>

          <h2 className="font-display text-2xl text-ink">Site content</h2>
          <p>
            Logos, copy, photos, and design are owned by {site.name}. You may not reproduce
            them without permission.
          </p>

          <h2 className="font-display text-2xl text-ink">Limitation of liability</h2>
          <p>
            We make reasonable efforts to keep the site accurate and available, but we
            don&rsquo;t guarantee it&rsquo;s error-free. To the fullest extent permitted by
            law, we&rsquo;re not liable for indirect or incidental damages arising from your
            use of the site.
          </p>

          <h2 className="font-display text-2xl text-ink">Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Rhode Island.
          </p>

          <p className="rounded-md border border-amber/30 bg-amber/10 p-4 text-sm">
            <strong className="text-ink">[TO FILL]</strong> Have your attorney review and
            customize these terms before launch.
          </p>
        </div>
      </Container>
    </section>
  );
}
