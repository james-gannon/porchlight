/**
 * Single source of truth for NAP (Name/Address/Phone), hours, social, owner bio.
 * Anything marked TO_FILL is an open content item from the build plan.
 */

export const site = {
  name: "PorchLight Home Offers",
  legalName: "TO_FILL_LEGAL_ENTITY",
  tagline: "We buy houses across Rhode Island and southeastern Massachusetts — cash, as-is, on your timeline.",

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
      "Providence", "Cranston", "Warwick", "Pawtucket", "East Providence",
      "Woonsocket", "Newport", "Bristol", "Westerly", "North Kingstown",
    ],
    bristolMa: ["Fall River", "New Bedford", "Taunton"],
    plymouthMa: ["Plymouth"],
  },
} as const;

export type Site = typeof site;
