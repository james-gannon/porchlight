import Link from "next/link";
import { Phone, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { ChatThread, type ChatMessage } from "@/components/sections/ChatThread";
import { VoicemailCard } from "@/components/sections/VoicemailCard";
import { Postcard } from "@/components/sections/Postcard";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { faqs, processSteps, site } from "@/content/site";

/**
 * Backyard — text-thread first, conversational. The whole homepage reads like
 * a real exchange between sellers and the founder. Voicemails and postcards
 * complement the thread. Most of the "design" is actually content.
 *
 * Color: cream + deep moss green (the backyardhomeoffers.com palette echo).
 * Typography: humanist sans body, serif italic for handwritten asides.
 *
 * Inspiration: backyardhomeoffers.com (per user). All quoted text is
 * placeholder; fill `[TO FILL]` with permissioned, real exchanges.
 */
export function BackyardHome() {
  return (
    <>
      {/* HERO — short headline + deep-moss banner with conversation hook */}
      <section className="relative overflow-hidden bg-[#F8F2E2]">
        <Container className="grid items-center gap-10 py-12 md:grid-cols-12 md:gap-16 md:py-20">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/5 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-moss">
              <MessageCircle className="h-3 w-3" aria-hidden /> The way we talk to neighbors
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.04] tracking-tight md:text-7xl">
              We&rsquo;d rather have a real conversation than a perfect pitch.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-muted">
              PorchLight is a small Rhode Island team that buys houses cash, as-is.
              Most sellers find us by getting one of our handwritten postcards in
              the mail and texting back when they&rsquo;re ready. Here&rsquo;s
              what those conversations actually look like.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/get-offer"
                className="inline-flex items-center justify-center rounded-full bg-moss px-6 py-3.5 font-sans text-sm font-semibold text-paper transition-colors hover:bg-moss/90"
              >
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center gap-2 font-display text-2xl text-ink hover:text-moss"
              >
                <Phone className="h-5 w-5 text-moss" aria-hidden />
                {site.phone.web}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <Postcard
              to={["[TO FILL]", "127 Smith Street", "Pawtucket, RI 02860"]}
              postmark="Providence, RI · Mar 4"
              message="Janine — I drove past your mom's house this morning. If selling has crossed your mind and you'd like an honest, no-pressure number, text or call me anytime. — Keara"
              signoff="— Keara, PorchLight"
            />
          </div>
        </Container>
      </section>

      {/* THE TEXT THREAD — the centerpiece */}
      <section className="bg-paper py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="inline-block rounded-full bg-amber/15 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-deep">
            Over the fence
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            How it <em className="font-display italic text-amber-deep">usually</em>{" "}
            starts.
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-ink-muted">
            Half our sellers tell us they called on a whim &mdash; they
            didn&rsquo;t expect an answer. Here&rsquo;s the kind of conversation
            we have about a hundred times a year.
          </p>

          <div className="mt-10">
            <ChatThread
              outgoingSide="left"
              palette="paper"
              messages={SAMPLE_THREAD}
            />
          </div>

          <p className="mt-8 rounded-md border border-rule/15 bg-paper-2/40 p-4 font-sans text-xs leading-relaxed text-ink-muted">
            <strong className="text-ink">[TO FILL]</strong> Replace this thread
            with a real (permissioned) exchange. Even one verbatim conversation
            is worth more than ten polished testimonials.
          </p>
        </Container>
      </section>

      {/* VOICEMAILS — the "voicemail wall" */}
      <section className="border-y border-rule/15 bg-[#F8F2E2] py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="inline-block rounded-full bg-moss/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-moss">
              Voicemail wall
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              The voicemails we don&rsquo;t delete.
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-muted">
              We keep these on the office wall. Real voices, real situations,
              shared with permission. (Audio playback coming soon &mdash; the
              transcripts are below.)
            </p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {SAMPLE_VOICEMAILS.map((v) => (
              <li key={v.caller}>
                <VoicemailCard {...v} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* HOW IT WORKS — written like a series of texts */}
      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="inline-block rounded-full bg-amber/15 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-deep">
              The whole thing
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Three conversations, then a closing.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-ink-muted">
              That&rsquo;s the entire process. It&rsquo;s a lot less mysterious
              than the pile of paperwork makes it look.
            </p>
          </div>
          <ol className="md:col-span-8 space-y-6">
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className="flex items-start gap-5 rounded-2xl border border-rule/15 bg-[#F8F2E2] p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-moss font-display text-lg font-semibold text-paper">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 font-sans text-base leading-relaxed text-ink-muted">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* THE OFFICE — quiet authenticity */}
      <section className="bg-[#F8F2E2] py-16 md:py-24">
        <Container className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <PhotoSlot
              alt="Founder at the kitchen table reviewing a closing folder"
              caption="Founder at home office or kitchen table — laptop open, coffee, closing folder visible. NOT a corporate desk. Natural light."
              aspect="aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-6">
            <p className="inline-block rounded-full bg-moss/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-moss">
              About us
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              We answer our own phones.
            </h2>
            <div className="mt-6 space-y-4 font-sans text-lg leading-relaxed text-ink-muted">
              <p>
                <strong className="text-ink">[TO FILL]</strong> 3-4 sentences on
                who you are, where you grew up, why you started PorchLight. Make
                it sound the way you&rsquo;d tell it to a neighbor over coffee.
              </p>
              <p>
                <strong className="text-ink">[TO FILL]</strong> 2-3 sentences on
                what you won&rsquo;t do &mdash; high-pressure tactics, surprise
                closing-day renegotiation, lowballing distressed sellers, etc.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* QUICK CHAT FAQ */}
      <section className="bg-paper py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="inline-block rounded-full bg-amber/15 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-deep">
            Things sellers ask before texting back
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Your hesitations, addressed.
          </h2>
          <ul className="mt-10 space-y-3">
            {faqs.slice(0, 5).map((f, i) => (
              <li key={f.q}>
                <ChatThread
                  outgoingSide="right"
                  palette="paper"
                  messages={[
                    {
                      side: "incoming",
                      initial: "?",
                      speaker: i === 0 ? "A neighbor" : undefined,
                      body: f.q,
                    },
                    {
                      side: "outgoing",
                      initial: "K",
                      speaker: i === 0 ? "Keara · PorchLight" : undefined,
                      body: f.a,
                    },
                  ]}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ServiceArea />

      {/* FORM — framed as "send us a text" */}
      <section className="bg-moss py-16 text-paper md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="inline-block rounded-full bg-paper/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-amber">
              Your turn
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-paper md:text-5xl">
              Drop us a line. We&rsquo;ll text or call &mdash; your pick.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-paper/80">
              Two minutes is enough to get started. No salespitch. We respond
              within an hour during business hours, usually faster.
            </p>
            <div className="mt-8 space-y-2 font-sans text-sm text-paper/85">
              <a
                href={`tel:${site.phone.web}`}
                className="flex items-center gap-2 hover:text-amber"
              >
                <Phone className="h-4 w-4 text-amber" aria-hidden />
                {site.phone.web}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 hover:text-amber"
              >
                <Mail className="h-4 w-4 text-amber" aria-hidden />
                {site.email}
              </a>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl bg-[#F8F2E2] p-6 text-ink md:p-8">
              <LeadForm source="home-backyard" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// --- Sample content. Replace with real, permissioned exchanges. ---

const SAMPLE_THREAD: ReadonlyArray<ChatMessage> = [
  {
    side: "incoming",
    initial: "J",
    speaker: "Janine · Pawtucket",
    body: "Hi — I got your postcard. My mom passed in February and her house has been sitting. I don't even know where to start. Do you really buy houses as-is?",
  },
  {
    side: "outgoing",
    initial: "K",
    speaker: "Keara · PorchLight",
    body: (
      <>
        Hey Janine, thank you for reaching out. Yes, we really do. You don&rsquo;t
        have to clean it out, you don&rsquo;t have to fix anything. First &mdash;
        how are you holding up?
      </>
    ),
  },
  {
    side: "incoming",
    initial: "J",
    body: "Honestly? Tired. My brother lives in Arizona and everyone keeps telling me to list it, but the thought of strangers walking through her kitchen…",
  },
  {
    side: "outgoing",
    initial: "K",
    body: (
      <>
        I get it. So here&rsquo;s what I can do: I come by whenever works for
        you, we chat for 20 minutes, and you have a written offer tomorrow.{" "}
        <strong>Zero pressure.</strong> If the number&rsquo;s not right,
        I&rsquo;ll tell you to list it &mdash; and I&rsquo;ll tell you who to
        call.
      </>
    ),
  },
  {
    side: "incoming",
    initial: "J",
    body: "That actually sounds reasonable. Thursday morning?",
  },
  {
    side: "outgoing",
    initial: "K",
    body: "Thursday at 10 works great. I&rsquo;ll bring coffee. ☕",
    caption: "Closed 13 days later, brother flew in for the closing.",
  },
];

const SAMPLE_VOICEMAILS = [
  {
    caller: "[TO FILL]",
    location: "Cranston, RI",
    duration: "0:48",
    receivedAt: "Tuesday · 7:18pm",
    transcript:
      "[TO FILL] Hi, my dad's place has been empty for almost two years now and we just got another tax bill. We're not even sure where to start. If you're a real person, please call me back. Thanks.",
  },
  {
    caller: "[TO FILL]",
    location: "Fall River, MA",
    duration: "1:12",
    receivedAt: "Saturday · 10:42am",
    transcript:
      "[TO FILL] My tenants moved out last weekend and I'm just done. Done. I don't want to fix it, I don't want to show it. Tell me what you can pay and I'll tell you yes or no.",
  },
  {
    caller: "[TO FILL]",
    location: "Plymouth, MA",
    duration: "2:03",
    receivedAt: "Thursday · 1:15pm",
    transcript:
      "[TO FILL] We're moving in with my sister in Florida and the house has been a project for ten years. Ten years. I'd like an honest number, that's all. No tricks, no pressure.",
  },
] as const;
