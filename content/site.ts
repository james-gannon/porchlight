/**
 * Single source of truth for NAP (Name/Address/Phone), hours, social, owner bio,
 * service-area copy, FAQ, testimonials, and the apples-to-apples comparison table.
 *
 * Anything marked `TO_FILL_*` (TS strings) or `[TO FILL]` (visible copy) is an
 * open content item from the build plan — search the repo for those before launch.
 */

export const site = {
  name: "PorchLight Home Offers",
  legalName: "TO_FILL_LEGAL_ENTITY",
  tagline:
    "We buy houses across Rhode Island and southeastern Massachusetts — cash, as-is, on your timeline.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://porchlighthomeoffers.com",

  // Phone numbers (CallRail tracked, per-channel).
  phone: {
    web: "TO_FILL_CALLRAIL_WEB",
    gbp: "TO_FILL_CALLRAIL_GBP",
    fallback: "TO_FILL_REAL_LINE",
  },

  email: "TO_FILL_EMAIL",

  // Service-Area Business — no public street address. Mailing address only.
  mailingAddress: {
    line1: "TO_FILL_MAILING_LINE_1",
    city: "TO_FILL_CITY",
    state: "RI",
    postalCode: "TO_FILL_ZIP",
    country: "US",
  },

  hours: {
    monFri: "8:00 AM – 8:00 PM",
    sat: "9:00 AM – 5:00 PM",
    sun: "By appointment",
  },

  owner: {
    name: "TO_FILL_OWNER_NAME",
    bio: "TO_FILL_OWNER_BIO",
    headshot: "/owner-headshot.jpg",
  },

  founded: "TO_FILL_YEAR_FOUNDED",
  homesPurchased: "TO_FILL_COUNT",

  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
  },

  serviceAreas: {
    ri: [
      "Providence",
      "Cranston",
      "Warwick",
      "Pawtucket",
      "East Providence",
      "Woonsocket",
      "Newport",
      "Bristol",
      "Westerly",
      "North Kingstown",
    ],
    bristolMa: ["Fall River", "New Bedford", "Taunton"],
    plymouthMa: ["Plymouth", "Brockton", "Bridgewater", "Middleborough", "Wareham"],
    norfolkMa: ["Quincy", "Weymouth", "Braintree", "Franklin", "Stoughton"],
  },
} as const;

export type Site = typeof site;

/** Reasons people sell to us — used on the home page and the property-type pages. */
export const sellReasons: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Inherited a property",
    body: "We help families settle estates without the cleanout, repairs, or back-and-forth with multiple agents.",
  },
  {
    title: "Tired of being a landlord",
    body: "Difficult tenants, deferred maintenance, or just done with it — we buy occupied or vacant.",
  },
  {
    title: "Relocating or downsizing",
    body: "Pick a closing date that lines up with your move. We work around you, not the other way around.",
  },
  {
    title: "Behind on payments or taxes",
    body: "We move quickly and discreetly. Conversations stay confidential whether or not we end up buying.",
  },
  {
    title: "House needs major work",
    body: "Roof, foundation, code violations, hoarder situations — sell as-is and walk away with cash.",
  },
  {
    title: "Divorce or life change",
    body: "A clean, fast sale that lets both parties move on. No showings, no months of uncertainty.",
  },
];

/** Trust signals stripped across the top of the page. */
export const trustSignals: ReadonlyArray<string> = [
  "Locally owned in Rhode Island",
  "Cash offers within 24 hours",
  "Close in as little as 7 days",
  "Zero fees, zero commissions",
  "We handle the cleanout",
];

/**
 * 3-step process. Keep copy human and concrete — no jargon, no exclamation marks.
 */
export const processSteps: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Tell us about the house",
    body: "Two minutes online or a quick phone call. Address, condition, and what's going on. No pressure, no obligation.",
  },
  {
    title: "Get a fair cash offer",
    body: "We'll look at recent sales nearby and the work the house needs, then send a clear, written offer — usually within 24 hours.",
  },
  {
    title: "Pick your closing date",
    body: "Seven days or ninety, whatever works. We cover closing costs and handle the cleanout. You walk away with a check.",
  },
];

/**
 * Apples-to-apples comparison table. Three columns: PorchLight, traditional agent, FSBO.
 * Each row is a dimension; values are short phrases.
 */
export const comparison: ReadonlyArray<{
  dimension: string;
  porchlight: string;
  agent: string;
  fsbo: string;
}> = [
  {
    dimension: "Commissions & fees",
    porchlight: "None",
    agent: "5–6% of sale price",
    fsbo: "1–3% buyer's agent",
  },
  {
    dimension: "Repairs & cleanout",
    porchlight: "We handle it",
    agent: "Required to list",
    fsbo: "Required to attract buyers",
  },
  {
    dimension: "Showings",
    porchlight: "None",
    agent: "Multiple, often weekly",
    fsbo: "You host them",
  },
  {
    dimension: "Days to close",
    porchlight: "7 to 30",
    agent: "60 to 90+",
    fsbo: "60 to 120+",
  },
  {
    dimension: "Financing falls through",
    porchlight: "Never (cash)",
    agent: "Common (~15%)",
    fsbo: "Common",
  },
  {
    dimension: "Appraisal contingency",
    porchlight: "None",
    agent: "Standard",
    fsbo: "Standard",
  },
  {
    dimension: "Closing costs",
    porchlight: "We pay them",
    agent: "1–3% to seller",
    fsbo: "1–3% to seller",
  },
];

/**
 * FAQ — keep questions in the seller's words. Used on the home page (top 6)
 * and the dedicated /faq page (full list). Generates FAQPage JSON-LD in Phase 2.
 */
export const faqs: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "How is your cash offer calculated?",
    a: "We start with comparable recent sales near the property, subtract the cost of the repairs and updates the house needs to be market-ready, then subtract a modest margin so we can afford to take on the project. We'll show you the math — no black box.",
  },
  {
    q: "Do I need to clean out the house or make repairs?",
    a: "No. Leave anything you don't want. We'll handle the cleanout and every repair after closing. Take what's meaningful, walk away from the rest.",
  },
  {
    q: "How fast can you actually close?",
    a: "As quickly as 7 days once title comes back clear. If you need more time — 30, 60, even 90 days — we'll close on the date that works for your move.",
  },
  {
    q: "Is there any obligation when I request an offer?",
    a: "Zero. You can walk away at any point, even after we've made an offer. Our goal is to be the best option if it makes sense — and an honest second opinion if it doesn't.",
  },
  {
    q: "Will you really buy a house in any condition?",
    a: "Yes. Foundation issues, fire damage, hoarder situations, code violations, vacant for years — we've seen it. We're not picky and we don't flinch.",
  },
  {
    q: "Do you buy houses with tenants in them?",
    a: "We do. We can buy with tenants in place, or work with you on a timeline that lets them transition. Either way, the conversation is straightforward.",
  },
  {
    q: "What if I'm behind on the mortgage or taxes?",
    a: "We'll quietly verify the payoff and any liens, then make an offer that accounts for them. Many of our sellers have come to us specifically because they were worried about foreclosure — we can usually help.",
  },
  {
    q: "How do I know you're the real deal and not a scam?",
    a: "We're a local Rhode Island business — you can call us, meet us, and ask for references from sellers we've bought from in your area. We close at a real attorney's office and the funds wire from a real bank account. Always verify any cash buyer the same way you'd verify any other professional.",
  },
  {
    q: "Do you buy multi-family homes, condos, or land?",
    a: "Yes — single-family, 2–4 unit multis, condos, mobile/manufactured, and land. If it's in our service area, we want to look at it.",
  },
  {
    q: "Why would I sell to you instead of listing with an agent?",
    a: "If your priority is the absolute highest dollar and the house is in good shape, an agent is often the right call — and we'll tell you that. We tend to be the better fit when speed, certainty, the condition of the house, or just not wanting to deal with showings matters more than squeezing out the last few percent.",
  },
];

/**
 * Testimonials. These are placeholders — replace with real, attributed quotes
 * before launch. Search this file for `[TO FILL]` to find them.
 */
export const testimonials: ReadonlyArray<{
  quote: string;
  name: string;
  location: string;
  situation: string;
}> = [
  {
    quote:
      "[TO FILL] After my mom passed, the house just sat there. PorchLight took everything off our shoulders — even the cleanout. We closed in two weeks and finally exhaled.",
    name: "[TO FILL]",
    location: "Cranston, RI",
    situation: "Inherited property",
  },
  {
    quote:
      "[TO FILL] I'd been a landlord for 22 years and was just done. They bought it tenant-occupied, on my timeline, and were straight with me the whole way.",
    name: "[TO FILL]",
    location: "Fall River, MA",
    situation: "Tired landlord",
  },
  {
    quote:
      "[TO FILL] The number was lower than what an agent had quoted, but I'd already been through one fall-through and didn't have it in me to keep going. PorchLight closed in nine days.",
    name: "[TO FILL]",
    location: "Pawtucket, RI",
    situation: "Relocating",
  },
];

/**
 * Owner story — long-form copy used on /about. Short version lives in `site.owner.bio`.
 */
export const ownerStory = {
  headline: "[TO FILL] Why we started PorchLight",
  paragraphs: [
    "[TO FILL — 3–4 sentences on why the owner started the business, where they grew up, the first house they bought, and why this work matters to them. Keep it warm and concrete.]",
    "[TO FILL — 2–3 sentences on values: how PorchLight treats sellers differently, what the team won't do, and what a typical interaction looks like.]",
    "[TO FILL — 1–2 sentences on community: charities supported, local connections, why RI specifically.]",
  ],
};
