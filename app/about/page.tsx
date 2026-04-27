import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/Container";
import { OwnerStory } from "@/components/sections/OwnerStory";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CtaBand } from "@/components/sections/CtaBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About PorchLight Home Offers — local RI cash home buyer",
  description: `Locally owned in Rhode Island. ${site.name} buys houses as-is for cash across RI, Bristol, Plymouth and Norfolk County MA.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Honest math",
    body: "We show you our comps and our repair estimate. If our number doesn't work for you, that's fine — at least you know it's grounded in reality.",
  },
  {
    title: "No pressure",
    body: "We don't do same-day decisions, scarcity tactics, or chasing. Take your time. If selling to us is the right call, it'll still be the right call next week.",
  },
  {
    title: "Local accountability",
    body: "Our address, our names, our license, our reviews are all real and verifiable. You can stop by, call us, or ask any past seller about their experience.",
  },
  {
    title: "Quiet professionalism",
    body: "Some situations are private. We don't post photos of your house on social media or talk about your situation outside the team — even after closing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-rule/10 bg-paper-2/40">
        <Container className="max-w-3xl py-16 md:py-24">
          <Eyebrow>About PorchLight</Eyebrow>
          <h1 className="mt-3">Neighbors, not investors from out of state.</h1>
          <p className="mt-5 font-sans text-lg text-ink-muted">
            PorchLight Home Offers is a locally owned home-buying business based in Rhode Island.
            We buy directly from homeowners — no agents in the middle, no hedge funds, no
            wholesalers. Just us, our team, and a real attorney&rsquo;s closing.
          </p>
        </Container>
      </section>

      <OwnerStory />

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What we believe</Eyebrow>
            <h2 className="mt-3">How we treat sellers</h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <li key={v.title} className="rounded-lg border border-rule/10 bg-paper-2/40 p-6">
                <h3>{v.title}</h3>
                <p className="mt-2 font-sans text-base leading-relaxed text-ink-muted">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Testimonials />
      <ServiceArea />
      <CtaBand heading="Have a question before you fill out a form?" body="Call us. We answer our own phones." />
    </>
  );
}
