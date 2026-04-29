import Link from "next/link";
import { Phone, ArrowRight, Mail, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { LeadForm } from "@/components/forms/LeadForm";
import { ChatThread } from "@/components/sections/ChatThread";
import { Postcard } from "@/components/sections/Postcard";
import { VoicemailCard } from "@/components/sections/VoicemailCard";
import { faqs, processSteps, site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Backporch — the explicit backyardhomeoffers.com spinoff. Sage / olive +
 * warm cream + chocolate brown. James-led voice throughout. Foreclosure help
 * is a hero-level feature, not buried in a property-type page.
 *
 * "James" is hardcoded here intentionally; content/site.ts is left untouched
 * so the original 9 themes keep their TO_FILL_OWNER_NAME placeholders.
 */

const CREAM = "#F1E9D6";
const SAGE = "#7A8C68";
const SAGE_DEEP = "#566546";
const COCOA = "#3B2B1F";
const TERRACOTTA = "#B66A45";

export function BackporchHome() {
  return (
    <div style={{ backgroundColor: CREAM, color: COCOA }}>
      {/* HERO — James photo + warm intro + postcard */}
      <section className="border-b" style={{ borderColor: `${COCOA}1F` }}>
        <Container className="grid items-center gap-10 py-14 md:grid-cols-12 md:gap-16 md:py-20">
          <div className="md:col-span-7">
            <p
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${SAGE}25`, color: SAGE_DEEP }}
            >
              Family-owned · RI &amp; the South Coast
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.04] md:text-7xl" style={{ color: COCOA }}>
              Hi, I&rsquo;m{" "}
              <span style={{ color: SAGE_DEEP }} className="italic">
                James
              </span>
              .
              <br />
              I&rsquo;ll pick up the phone.
            </h1>
            <p
              className="mt-6 max-w-xl font-display text-xl leading-relaxed"
              style={{ color: `${COCOA}CC` }}
            >
              I&rsquo;m the co-owner of PorchLight Home Offers. We&rsquo;re a
              small, family-owned team that buys houses cash across Rhode
              Island and the South Coast of Massachusetts. When you call, you
              get me &mdash; not a call center, not a robot, not a lead form
              shipped to a stranger in Texas. I&rsquo;ll meet you at the
              house, listen to what&rsquo;s going on, and have a written offer
              to you the next day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-offer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-semibold transition-colors"
                style={{ backgroundColor: SAGE_DEEP, color: CREAM }}
              >
                Talk to James
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center gap-2 font-display text-2xl"
                style={{ color: COCOA }}
              >
                <Phone className="h-5 w-5" aria-hidden style={{ color: SAGE_DEEP }} />
                {site.phone.web}
              </a>
            </div>
            <p className="mt-3 font-display text-sm italic" style={{ color: `${COCOA}99` }}>
              Mon&ndash;Fri {site.hours.monFri}. Outside those hours, leave a
              voicemail &mdash; James returns them.
            </p>
          </div>

          <div className="md:col-span-5">
            <PhotoSlot
              alt="James, co-owner, on the porch of a recent purchase"
              caption="Hero photo: James on the porch of a recently-bought house. Warm light, candid (mid-conversation, mid-stride, mid-coffee — NOT corporate headshot). Square or 4/5."
              aspect="aspect-[4/5]"
              className="rounded-md ring-1"
              rotate="left"
            />
          </div>
        </Container>
      </section>

      {/* FORECLOSURE BANNER — moved up high; this is the differentiator */}
      <section style={{ backgroundColor: SAGE_DEEP, color: CREAM }}>
        <Container className="grid items-start gap-10 py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-7">
            <p
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${CREAM}26`, color: CREAM }}
            >
              <AlertCircle className="h-3 w-3" aria-hidden /> Foreclosure on the calendar?
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl" style={{ color: CREAM }}>
              We bring light to the uncertainty.
            </h2>
            <p className="mt-5 max-w-2xl font-display text-lg leading-relaxed" style={{ color: `${CREAM}E0` }}>
              We&rsquo;ve helped countless homeowners avoid losing their house
              to a foreclosure auction &mdash; including many where attorneys
              had given up or lenders had stopped returning calls. We know how
              to talk to loss-mitigation departments, verify payoffs, and
              quietly close before a sale date. Whether you decide to sell to
              us or not, we&rsquo;ll help you get clear answers so you can
              make the call from a place of peace, not panic.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/sell/pre-foreclosure"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-sans text-sm font-semibold transition-colors"
                style={{ backgroundColor: TERRACOTTA, color: CREAM }}
              >
                Read about how we help
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${site.phone.web}`}
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
                style={{ color: CREAM }}
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call James now &mdash; {site.phone.web}
              </a>
            </div>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-lg p-6" style={{ backgroundColor: `${CREAM}10`, border: `1px solid ${CREAM}30` }}>
              <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: `${CREAM}99` }}>
                Conversations stay confidential
              </p>
              <ul className="mt-4 space-y-3 font-display text-base">
                {[
                  "We work directly with your lender's loss-mit team (with your written authorization).",
                  "If a short sale is the right call, we know which lenders cooperate.",
                  "If listing makes more sense, we'll tell you — and tell you who to call.",
                  "Nothing publicly listed, no signs in the yard, no neighbors guessing.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span aria-hidden style={{ color: TERRACOTTA }} className="mt-1">
                      ◆
                    </span>
                    <span style={{ color: `${CREAM}E0` }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {/* THE TEXT THREAD — centerpiece, like Backyard */}
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <p
            className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ backgroundColor: `${TERRACOTTA}20`, color: TERRACOTTA }}
          >
            How most of our calls start
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl" style={{ color: COCOA }}>
            Folks down the block, texting back.
          </h2>
          <p className="mt-4 font-display text-lg" style={{ color: `${COCOA}99` }}>
            About half our sellers call on a whim &mdash; they don&rsquo;t
            even expect an answer. Here&rsquo;s the kind of exchange we have a
            hundred times a year.
          </p>
          <div
            className="mt-10 rounded-2xl p-5 md:p-7"
            style={{ backgroundColor: `${SAGE}15`, border: `1px solid ${SAGE}30` }}
          >
            <ChatThread
              outgoingSide="left"
              palette="paper"
              messages={[
                {
                  side: "incoming",
                  initial: "M",
                  speaker: "Margaret · East Providence",
                  body: "Hi — I'm 60 days from the auction. My attorney stopped calling back. Is it really possible to stop this?",
                },
                {
                  side: "outgoing",
                  initial: "J",
                  speaker: "James · PorchLight",
                  body: "Margaret, breathe. Yes — most of the time, yes. Can I have your address and the lender's name? I'll call them this afternoon and we'll know what we're working with by tonight.",
                },
                {
                  side: "incoming",
                  initial: "M",
                  body: "Are you a lawyer?",
                },
                {
                  side: "outgoing",
                  initial: "J",
                  body: "No, I'm a buyer. But I've been through dozens of these and I know how to talk to loss mitigation. If we need a lawyer too I'll tell you who to call. No charge for any of this.",
                },
                {
                  side: "incoming",
                  initial: "M",
                  body: "Why would you do that for free.",
                },
                {
                  side: "outgoing",
                  initial: "J",
                  body: "Because if we can stop the auction, you might decide to sell to me. And if you don't, you'll tell a neighbor. Either way I sleep fine.",
                  caption: "Auction stopped 9 days later. Margaret kept the house.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS — three steps in James's voice */}
      <section style={{ backgroundColor: `${SAGE}15` }} className="py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${SAGE_DEEP}20`, color: SAGE_DEEP }}
            >
              The whole thing
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl" style={{ color: COCOA }}>
              Three conversations, then a closing.
            </h2>
            <p className="mt-5 font-display text-lg leading-relaxed" style={{ color: `${COCOA}99` }}>
              That&rsquo;s the entire process. James handles every step
              personally. No handoffs, no &ldquo;a colleague will be in touch.&rdquo;
            </p>
          </div>
          <ol className="md:col-span-8 space-y-5">
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className="flex items-start gap-5 rounded-2xl p-6"
                style={{ backgroundColor: CREAM, border: `1px solid ${COCOA}1A` }}
              >
                <span
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-semibold"
                  style={{ backgroundColor: SAGE_DEEP, color: CREAM }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl" style={{ color: COCOA }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 font-display text-base leading-relaxed" style={{ color: `${COCOA}AA` }}>
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* SITUATIONS — "any of this sound familiar?" */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${TERRACOTTA}20`, color: TERRACOTTA }}
            >
              Any of this sound familiar
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl" style={{ color: COCOA }}>
              No problem.
            </h2>
            <p className="mt-4 font-display text-lg leading-relaxed" style={{ color: `${COCOA}AA` }}>
              These are the situations we hear all the time &mdash; and
              they&rsquo;re the ones where we&rsquo;re actually useful. None of
              them are deal-breakers for us.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Moving out of state, fast.", b: "Your closing date works around your move date. We've closed remotely in 9 days." },
              { t: "Inherited the house, in another state.", b: "We work with your probate attorney. You don't have to fly in." },
              { t: "House needs major repairs.", b: "Roof, foundation, water damage — we expect it. Don't fix anything." },
              { t: "Probate is dragging on.", b: "We can sign now and time the closing to authority. No lost months." },
              { t: "Behind on payments or taxes.", b: "Quietly. Confidentially. We know how to talk to lenders." },
              { t: "No clue what to do with this house.", b: "We'll meet you there, walk through it, explain your options. Free." },
            ].map((s) => (
              <li
                key={s.t}
                className="rounded-2xl p-6"
                style={{ backgroundColor: `${SAGE}10`, border: `1px solid ${SAGE}30` }}
              >
                <h3 className="font-display text-xl" style={{ color: SAGE_DEEP }}>
                  {s.t}
                </h3>
                <p className="mt-2 font-display text-base leading-relaxed" style={{ color: `${COCOA}AA` }}>
                  {s.b}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* POSTCARD + VOICEMAIL ROW */}
      <section className="py-16 md:py-24" style={{ backgroundColor: `${SAGE}15` }}>
        <Container className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${SAGE_DEEP}20`, color: SAGE_DEEP }}
            >
              The kind of postcard James sends
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl" style={{ color: COCOA }}>
              Hand-printed. Real return address.
            </h2>
            <p className="mt-4 font-display text-base leading-relaxed" style={{ color: `${COCOA}AA` }}>
              No yield-sign yellow, no fake urgency, no &ldquo;CASH OFFER!!!&rdquo;
              in all caps. Just a note from a neighbor.
            </p>
            <Postcard
              className="mt-8"
              to={["[Homeowner]", "[Address]", "[City], [State] [ZIP]"]}
              postmark="Providence · 2026"
              message="Hi — drove past your place this morning. If selling has crossed your mind and you'd like an honest, no-pressure number, text or call me anytime. — James"
              signoff="— James, PorchLight"
            />
          </div>
          <div className="md:col-span-7">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${TERRACOTTA}20`, color: TERRACOTTA }}
            >
              On the office wall
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl" style={{ color: COCOA }}>
              Voicemails we don&rsquo;t delete.
            </h2>
            <ul className="mt-8 space-y-5">
              <li>
                <VoicemailCard
                  caller="[TO FILL]"
                  location="Cranston, RI"
                  duration="0:48"
                  receivedAt="Tuesday · 7:18pm"
                  transcript="Hi James, my dad's place has been empty for almost two years and we just got another tax bill. We're not even sure where to start. If you're a real person, please call me back."
                />
              </li>
              <li>
                <VoicemailCard
                  caller="[TO FILL]"
                  location="Plymouth, MA"
                  duration="2:03"
                  receivedAt="Thursday · 1:15pm"
                  transcript="James, the bank just sent a letter and I'm scared to open it. Can you help me figure out what's actually going on?"
                />
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ — Q/A format */}
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <p
            className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ backgroundColor: `${SAGE_DEEP}20`, color: SAGE_DEEP }}
          >
            Things people ask James first
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl" style={{ color: COCOA }}>
            Honest answers, even the awkward ones.
          </h2>
          <ol className="mt-10 space-y-7">
            {faqs.slice(0, 6).map((f, i) => (
              <li
                key={f.q}
                className={cn(
                  "border-b pb-7 last:border-0",
                )}
                style={{ borderColor: `${COCOA}1F` }}
              >
                <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: TERRACOTTA }}>
                  Q.{String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-display text-xl leading-snug" style={{ color: COCOA }}>
                  {f.q}
                </p>
                <p className="mt-3 font-display text-base leading-relaxed" style={{ color: `${COCOA}AA` }}>
                  <span style={{ color: SAGE_DEEP }} className="font-semibold">A. </span>
                  {f.a}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FORM — sage band */}
      <section style={{ backgroundColor: SAGE_DEEP, color: CREAM }} className="py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p
              className="inline-block rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${CREAM}20`, color: CREAM }}
            >
              When you&rsquo;re ready
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl" style={{ color: CREAM }}>
              Drop us a line. James will call you back.
            </h2>
            <p className="mt-5 font-display text-lg leading-relaxed" style={{ color: `${CREAM}E0` }}>
              Two minutes is enough to start. No script, no salespitch. James
              will respond within an hour during business hours, usually faster.
            </p>
            <div className="mt-8 space-y-3 font-display text-lg" style={{ color: CREAM }}>
              <a href={`tel:${site.phone.web}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" aria-hidden style={{ color: TERRACOTTA }} />
                {site.phone.web}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2">
                <Mail className="h-5 w-5" aria-hidden style={{ color: TERRACOTTA }} />
                {site.email}
              </a>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: CREAM, color: COCOA }}>
              <LeadForm source="home-backporch" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
