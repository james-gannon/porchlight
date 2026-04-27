import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact PorchLight Home Offers — call, email, or send a message",
  description: `Get in touch with ${site.name}. Local Rhode Island home buyer serving RI and southeastern Massachusetts.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-paper py-12 md:py-20">
      <Container className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-3">We&rsquo;d love to hear from you.</h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-ink-muted">
            Whether you&rsquo;re ready for a cash offer or just have a question, we&rsquo;re
            happy to talk. No script, no pitch.
          </p>

          <ul className="mt-8 space-y-5 font-sans text-sm">
            <Item
              icon={<Phone className="h-5 w-5" />}
              title="Phone"
              value={
                <a href={`tel:${site.phone.web}`} className="hover:text-amber-deep">
                  {site.phone.web}
                </a>
              }
            />
            <Item
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              value={
                <a href={`mailto:${site.email}`} className="hover:text-amber-deep">
                  {site.email}
                </a>
              }
            />
            <Item
              icon={<Clock className="h-5 w-5" />}
              title="Hours"
              value={
                <ul className="space-y-0.5 text-ink-muted">
                  <li>Mon–Fri · {site.hours.monFri}</li>
                  <li>Saturday · {site.hours.sat}</li>
                  <li>Sunday · {site.hours.sun}</li>
                </ul>
              }
            />
            <Item
              icon={<MapPin className="h-5 w-5" />}
              title="Mailing"
              value={
                <span className="text-ink-muted">
                  {site.mailingAddress.line1}
                  <br />
                  {site.mailingAddress.city}, {site.mailingAddress.state}{" "}
                  {site.mailingAddress.postalCode}
                </span>
              }
            />
          </ul>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-xl border border-rule/10 bg-paper-2/40 p-6 md:p-8">
            <p className="font-display text-xl text-ink">Send us a message</p>
            <p className="mt-1 font-sans text-sm text-ink-muted">
              Same form as the offer page — fill in as much or as little as you&rsquo;d like.
            </p>
            <div className="mt-5">
              <LeadForm source="contact-page" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Item({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-deep">
        {icon}
      </span>
      <span>
        <span className="block font-display text-sm font-semibold uppercase tracking-wider text-ink-muted">
          {title}
        </span>
        <span className="mt-1 block font-sans text-base text-ink">{value}</span>
      </span>
    </li>
  );
}
