/**
 * Property-type / situation pages. Each is a Service-style page targeted at a
 * specific seller pain point. Content is reusable across the home page, city
 * pages (cross-links from `commonSituations`), and the dedicated /sell/[type]
 * route.
 */

export type PropertyTypePage = {
  slug: string;
  /** SEO + breadcrumb name. */
  name: string;
  /** Eyebrow above the hero. */
  eyebrow: string;
  /** H1 — pain-point led, sentence case. */
  headline: string;
  /** Hero subhead — 1–2 sentences. */
  subhead: string;
  /** SEO meta description. */
  metaDescription: string;
  /** Body sections — each is a heading + 1–2 paragraph block. */
  body: ReadonlyArray<{ heading: string; paragraphs: ReadonlyArray<string> }>;
  /** Page-specific FAQ — used by FAQPage JSON-LD. */
  faq: ReadonlyArray<{ q: string; a: string }>;
  /** Link to the closest sellReasons key in `content/site.ts` for cross-linking. */
  reasonKey?: string;
};

export const propertyTypes: ReadonlyArray<PropertyTypePage> = [
  {
    slug: "inherited-house",
    name: "Inherited house",
    eyebrow: "Inherited a house?",
    headline: "Settling an estate doesn't have to mean a year of repairs and showings.",
    subhead:
      "We buy inherited houses across Rhode Island and southeastern Massachusetts in any condition — including with belongings still inside, old leases in place, or a probate that isn't quite finished.",
    metaDescription:
      "Inherited a house in RI or MA? PorchLight buys inherited properties as-is, handles the cleanout, and works with attorneys and executors. Cash offer in 24 hours.",
    body: [
      {
        heading: "What we handle",
        paragraphs: [
          "Cleanout — leave anything you don't want. Furniture, paperwork, decades of stuff in the attic. We handle it. Take only what's meaningful to you.",
          "Coordination with the estate's attorney. We've worked with most of the probate-experienced firms in RI and southeastern MA, and we're comfortable closing once the personal representative has authority to convey.",
          "Out-of-state heirs. We can do the entire transaction by mail, e-sign, and wire transfer. You don't need to fly in.",
        ],
      },
      {
        heading: "Probate timing",
        paragraphs: [
          "In Rhode Island, the personal representative typically receives authority to sell within 30–60 days of opening probate, depending on the city's probate calendar. In Massachusetts, formal probate timelines vary by county. We can write our purchase agreement contingent on the personal representative's authority and close on the date that authority becomes effective — so the sale doesn't bottleneck the estate.",
        ],
      },
      {
        heading: "Multiple heirs",
        paragraphs: [
          "When several siblings inherit a house together, our written offer becomes a single number everyone can react to. That tends to be easier than a months-long listing where the situation drifts. We're patient with the family conversation; there's no pressure.",
        ],
      },
    ],
    faq: [
      {
        q: "Do we need to finish probate before selling to you?",
        a: "Not entirely. We'll sign a purchase agreement and close once the personal representative has authority to convey — usually a few weeks into probate. We work with your attorney to time everything cleanly.",
      },
      {
        q: "What if the house is full of belongings?",
        a: "Take what you want. Leave the rest. We handle the cleanout after closing — that's part of our offer, not an extra cost.",
      },
      {
        q: "Can you buy if some heirs are out of state?",
        a: "Yes. We close at an attorney's office and any signing party can sign by mail or remote notary. The funds wire to whichever account the estate directs.",
      },
      {
        q: "Will you work directly with our probate attorney?",
        a: "Yes — and we prefer to. Most of the timing questions get cleaner when the conversation is buyer-to-attorney rather than running through the family.",
      },
    ],
    reasonKey: "Inherited a property",
  },
  {
    slug: "house-with-tenants",
    name: "House with tenants",
    eyebrow: "Tenants in place?",
    headline: "We buy occupied houses — including the difficult ones.",
    subhead:
      "Long-term tenants, month-to-month, Section 8, or a tenant who's stopped paying. We can buy with the tenancy in place and you don't have to be the bad guy.",
    metaDescription:
      "Sell your tenant-occupied house in RI or southeastern MA without notices, evictions, or vacancy. PorchLight buys with tenants in place — long-term, month-to-month, Section 8, or non-paying.",
    body: [
      {
        heading: "Tired of being a landlord",
        paragraphs: [
          "After years of leaky roofs, late payments, and middle-of-the-night calls, plenty of landlords are just done. You shouldn't have to do an eviction or a tenant-buyout to exit.",
          "We buy tenant-occupied — you assign the leases at closing, hand us the keys, and we take it from there. Your relationship with the tenant ends the day we close.",
        ],
      },
      {
        heading: "How it affects the offer",
        paragraphs: [
          "An occupied property is worth less to a retail buyer (most can't get a primary-residence mortgage on an occupied unit), which is why landlord exits are usually faster as a cash sale. We'll show you the math: market rent vs. actual rent, lease term, condition reflected in last move-out.",
        ],
      },
      {
        heading: "Section 8 and rent-controlled situations",
        paragraphs: [
          "We're comfortable with Section 8 leases and the housing-authority transfer paperwork. The transition typically takes a few weeks after closing — we manage that, you don't.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need to evict the tenant before selling?",
        a: "No — and we'd usually rather you didn't. Eviction takes months and reduces what we can pay. Selling occupied is almost always faster and cleaner.",
      },
      {
        q: "What if the tenant stopped paying?",
        a: "We can still buy. We factor the actual rent receipt into the offer and we take over the situation at closing. You don't have to chase them.",
      },
      {
        q: "Will the tenant find out before closing?",
        a: "Massachusetts and Rhode Island both require tenant notice when ownership changes. We handle that notice on the schedule the law requires — you're not the messenger.",
      },
    ],
    reasonKey: "Tired of being a landlord",
  },
  {
    slug: "house-needing-repairs",
    name: "House needing repairs",
    eyebrow: "Big repair list?",
    headline: "We buy houses in any condition. Truly.",
    subhead:
      "Foundation issues, fire damage, roof at end of life, code violations, hoarder situations, vacant and run-down. We've seen it and we don't flinch.",
    metaDescription:
      "Sell a house that needs major work as-is for cash in RI or southeastern MA. PorchLight buys houses with foundation, roof, electrical, code, or condition issues.",
    body: [
      {
        heading: "Why retail listings fall apart on condition",
        paragraphs: [
          "When a buyer's lender orders an appraisal and the appraiser flags peeling paint, an active leak, or unsafe electrical, the loan freezes. The seller is then asked to make repairs they can't afford, the deal falls through, and three months are gone.",
          "We don't use a lender — we buy with our own funds. There's no appraisal contingency, no inspection contingency, and no last-minute repair list. The number on our purchase agreement is the number you receive.",
        ],
      },
      {
        heading: "What we actually look at",
        paragraphs: [
          "Roof, structure, mechanicals, lot. We're not nitpicking cosmetics. If the place needs paint, flooring, kitchen, bath — that's just normal in our world.",
          "If there are real structural issues — foundation, large additions without permits, environmental — we'll factor them into the offer transparently and walk you through how.",
        ],
      },
    ],
    faq: [
      {
        q: "How bad can it really be?",
        a: "Hoarder house, fire-damaged, mold, vacant for years, animal-damaged — we've bought all of it. If you're embarrassed to show it, that's exactly when to call us.",
      },
      {
        q: "Will you ask me to clean up first?",
        a: "No. Take what's meaningful. Leave the rest. We handle the cleanout.",
      },
      {
        q: "How does condition affect the offer?",
        a: "We start from comparable post-renovation sales nearby, subtract what the work will cost us, then subtract a modest margin. We'll show you the math, line by line.",
      },
    ],
    reasonKey: "House needs major work",
  },
  {
    slug: "pre-foreclosure",
    name: "Pre-foreclosure",
    eyebrow: "Behind on the mortgage?",
    headline: "Quiet, fast, and confidential — even if foreclosure is already on the calendar.",
    subhead:
      "We can verify your payoff, write an offer that accounts for arrears, and close before a sale date. Conversations stay confidential whether or not we end up buying.",
    metaDescription:
      "Behind on your mortgage in RI or MA? PorchLight buys pre-foreclosure houses quickly and confidentially. Free, no-obligation cash offer, no judgment.",
    body: [
      {
        heading: "We move fast when it matters",
        paragraphs: [
          "If a sale date is on the calendar, every week counts. We can have a written offer to you within 24 hours and close in as little as 7–10 days once title comes back clean. That's often enough to stop the process.",
          "We work directly with your lender's loss-mitigation department to verify the payoff (with your written authorization). You don't have to chase numbers.",
        ],
      },
      {
        heading: "If you're underwater",
        paragraphs: [
          "If the payoff is more than the property's value, we may be able to negotiate a short sale with your lender. We've done short sales in RI and MA before and we know which lenders are reasonable. The conversation is private and there's no obligation.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "We don't post photos online, list the property publicly, or talk about the situation with anyone outside the closing. Many of the sellers we've helped specifically came to us because they didn't want a sign in the yard.",
        ],
      },
    ],
    faq: [
      {
        q: "Can you stop a foreclosure sale?",
        a: "Often, yes — if there's enough lead time. The closer the sale date, the more aggressive our timeline has to be. Call us today; tomorrow narrows the options.",
      },
      {
        q: "Will you handle the conversation with the bank?",
        a: "Yes, with your written authorization. We talk to loss mitigation directly so you don't have to.",
      },
      {
        q: "Will my neighbors find out?",
        a: "Not from us. We don't market the property, list it, or use signage. The sale appears in public records after closing — the same as any other sale.",
      },
    ],
    reasonKey: "Behind on payments or taxes",
  },
  {
    slug: "divorce",
    name: "Divorce",
    eyebrow: "Going through a divorce?",
    headline: "A clean, fast house sale that lets both parties move on.",
    subhead:
      "When the house is part of a divorce settlement, a months-long listing is often the last thing anyone wants. We can close quickly, with a single written offer, and proceeds split per your settlement.",
    metaDescription:
      "Selling the house in a divorce in RI or MA? PorchLight gives a fair, written cash offer fast — no showings, no extended timelines, proceeds split per the settlement.",
    body: [
      {
        heading: "We work with attorneys",
        paragraphs: [
          "Divorce sales tend to be cleanest when both parties have a single number to react to. Our written offer becomes that number. We can structure the agreement to fund into a trust account or per the divorce decree's instructions.",
          "We're comfortable closing while a divorce is still in process when both parties consent and the attorneys are aligned.",
        ],
      },
      {
        heading: "Speed and privacy",
        paragraphs: [
          "Most of our divorce sales close in 14–30 days. There's no showing schedule, no open houses, no neighbors guessing what's going on. The sale records publicly the same as any other.",
        ],
      },
    ],
    faq: [
      {
        q: "Can you close before our divorce is finalized?",
        a: "Sometimes — if both parties consent in writing and the attorneys agree. Otherwise we sign a purchase agreement now and time the closing to the decree.",
      },
      {
        q: "How are proceeds split?",
        a: "However the settlement directs. The closing attorney disburses to each party (or to a trust) per written instructions. We don't get involved in the split itself.",
      },
      {
        q: "What if one spouse won't cooperate?",
        a: "If both parties are on title, both have to sign. We can't help if one party refuses — but we can be ready to move the moment that changes.",
      },
    ],
    reasonKey: "Divorce or life change",
  },
  {
    slug: "vacant-house",
    name: "Vacant house",
    eyebrow: "House sitting empty?",
    headline: "A vacant house is bleeding money. Let's stop that this month.",
    subhead:
      "Insurance, taxes, heat, security — every month a vacant property sits costs you. We buy vacant houses across RI and southeastern MA quickly, in any condition.",
    metaDescription:
      "Selling a vacant house in RI or southeastern MA? PorchLight buys vacant properties as-is for cash — no showings, no holding costs, close in as little as 7 days.",
    body: [
      {
        heading: "The hidden cost of a vacant property",
        paragraphs: [
          "Vacant-home insurance is two to four times normal homeowner's. Property taxes don't pause. Utilities have to stay on (at least in winter) so pipes don't freeze. And the longer a house sits empty, the more it deteriorates — not less.",
          "Most sellers we work with on vacant properties are surprised at how much they're spending each month to keep the house empty. Our offer typically beats six more months of holding costs.",
        ],
      },
      {
        heading: "Out-of-state owners",
        paragraphs: [
          "We can do everything remotely — walk-through by video, agreement by e-sign, closing by mail and wire. You don't need to fly in.",
        ],
      },
    ],
    faq: [
      {
        q: "How fast can you close on a vacant house?",
        a: "Once title's clear, as quickly as 7 days. Vacant transactions are typically the fastest we do because there's no occupancy to coordinate.",
      },
      {
        q: "What if the house has been vandalized or has copper-pipe theft?",
        a: "We've seen it. The condition affects the offer, not whether we'll buy.",
      },
      {
        q: "Can you turn off the utilities for me after closing?",
        a: "Yes — we coordinate the utility transfers as part of post-closing.",
      },
    ],
    reasonKey: "Vacant property",
  },
] as const;

export function findPropertyType(slug: string): PropertyTypePage | undefined {
  return propertyTypes.find((p) => p.slug === slug);
}
