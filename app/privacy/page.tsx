import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-12 md:py-20">
      <Container className="max-w-3xl prose-content">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-3">Privacy policy</h1>
        <p className="mt-3 font-sans text-sm text-ink-muted">
          Last updated: [TO FILL — date]
        </p>

        <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-ink-muted">
          <p>
            <strong className="text-ink">Plain-language summary.</strong> When you contact us, we
            collect what you tell us (your name, contact info, and information about your
            property) so we can respond. We don&rsquo;t sell your information. We don&rsquo;t
            share it with anyone except the service providers we need to do our work (CRM,
            email, phone, analytics). You can ask us to delete your information at any time.
          </p>

          <h2 className="font-display text-2xl text-ink">Information we collect</h2>
          <p>
            Information you provide directly: name, email, phone number, property address,
            details about the property, and any notes you choose to include. We also
            automatically collect basic technical information when you visit the site (browser
            type, IP address, pages viewed) and marketing attribution (referrer, UTM parameters)
            to understand how people find us.
          </p>

          <h2 className="font-display text-2xl text-ink">How we use it</h2>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Respond to your request and prepare a cash offer</li>
            <li>Communicate with you by phone, text, or email</li>
            <li>Improve the site and our service</li>
            <li>Comply with applicable law</li>
          </ul>

          <h2 className="font-display text-2xl text-ink">Who we share with</h2>
          <p>
            Only service providers acting on our behalf: our CRM (Close), email and SMS
            providers, our closing attorney, and analytics tools. They&rsquo;re bound by
            agreements limiting how they can use your information. We don&rsquo;t sell or rent
            your information to anyone.
          </p>

          <h2 className="font-display text-2xl text-ink">SMS / call consent</h2>
          <p>
            By submitting a form, you agree we can contact you about your property by phone, SMS,
            or email at the number and email you provide, even if those are on a Do Not Call
            list. Reply STOP to any text to opt out at any time. Standard message and data rates
            may apply.
          </p>

          <h2 className="font-display text-2xl text-ink">Your rights</h2>
          <p>
            You can ask to access, correct, or delete the information we have about you. Email{" "}
            <a href={`mailto:${site.email}`} className="text-amber-deep underline">
              {site.email}
            </a>{" "}
            and we&rsquo;ll respond within 30 days.
          </p>

          <h2 className="font-display text-2xl text-ink">Cookies</h2>
          <p>
            We use a small number of cookies for analytics and to improve your experience. You
            can disable cookies in your browser without affecting the site&rsquo;s core
            functionality.
          </p>

          <h2 className="font-display text-2xl text-ink">Contact</h2>
          <p>
            Questions about this policy?{" "}
            <a href={`mailto:${site.email}`} className="text-amber-deep underline">
              {site.email}
            </a>{" "}
            ·{" "}
            <a href={`tel:${site.phone.web}`} className="text-amber-deep underline">
              {site.phone.web}
            </a>
          </p>

          <p className="rounded-md border border-amber/30 bg-amber/10 p-4 text-sm">
            <strong className="text-ink">[TO FILL]</strong> This policy is a starting template.
            Have your attorney review and customize it before launch — especially the SMS
            consent language for your jurisdiction.
          </p>
        </div>
      </Container>
    </section>
  );
}
