/**
 * Per-city structured data. Each entry powers a page at
 *   /sell-my-house-fast/{slug}
 * and contributes to the LocalBusiness JSON-LD scoped to that city.
 *
 * Keep `localContext` factually safe — common housing stock, neighborhood
 * names, and qualitative description only. Avoid dated facts (median price,
 * population). The `[TO FILL]` markers indicate places where the owner can
 * add specific local credibility (a story, a recent sale).
 */

export type City = {
  slug: string;
  name: string;
  /** ISO 3166-2 region. */
  state: "RI" | "MA";
  /** County hub slug — see content/counties.ts. */
  countySlug: string;
  /** Optional nickname; injected into the hero eyebrow if present. */
  nickname?: string;
  /** 3–5 well-known neighborhoods or village names. */
  neighborhoods: ReadonlyArray<string>;
  /** One-sentence summary of common housing stock. */
  typicalHousing: string;
  /** 1–2 short paragraphs of local context for the body. */
  localContext: string;
  /** Reasons local sellers most commonly reach out (filtered keys from sellReasons). */
  commonSituations: ReadonlyArray<string>;
  /** Optional [TO FILL] hook for a city-specific credibility line. */
  localProofPoint?: string;
  /** City slugs to surface in the "nearby" cross-link block. */
  nearby: ReadonlyArray<string>;
  /**
   * Geo coordinates for the LocalBusiness JSON-LD areaServed/geo. Use the
   * city's commonly-cited civic center; precision to 4 decimals is plenty.
   */
  geo: { lat: number; lng: number };
};

export const cities: ReadonlyArray<City> = [
  // --- Rhode Island ---
  {
    slug: "providence",
    name: "Providence",
    state: "RI",
    countySlug: "rhode-island",
    nickname: "the Creative Capital",
    neighborhoods: ["Federal Hill", "Mount Pleasant", "Elmhurst", "Smith Hill", "Silver Lake"],
    typicalHousing:
      "Wood-frame triple-deckers, early-1900s two-families, and pockets of single-family Victorians.",
    localContext:
      "Providence neighborhoods each move on their own timeline — a triple-decker on Smith Hill sells for very different reasons than a single-family in Elmhurst. We pay close attention to the block-by-block specifics, and we're comfortable with the older housing stock and its quirks: knob-and-tube remnants, oil-to-gas conversions, slate roofs, and so on.",
    commonSituations: ["inherited", "tired-landlord", "needs-major-work"],
    localProofPoint: "[TO FILL — recent Providence purchase, e.g. neighborhood + situation]",
    nearby: ["cranston", "pawtucket", "east-providence", "warwick"],
    geo: { lat: 41.824, lng: -71.4128 },
  },
  {
    slug: "cranston",
    name: "Cranston",
    state: "RI",
    countySlug: "rhode-island",
    neighborhoods: ["Edgewood", "Garden City", "Eden Park", "Auburn", "Knightsville"],
    typicalHousing:
      "Mid-century capes, ranches, and split-levels with a denser pocket of older two-families in Edgewood and Knightsville.",
    localContext:
      "Cranston is a city of clearly distinct neighborhoods — Edgewood feels like Providence, Garden City reads suburban, Western Cranston has lots of land. We work in all of them and can tell you, honestly, when listing makes more sense than selling to us.",
    commonSituations: ["downsizing", "relocating", "inherited"],
    nearby: ["providence", "warwick", "east-providence"],
    geo: { lat: 41.7798, lng: -71.4373 },
  },
  {
    slug: "warwick",
    name: "Warwick",
    state: "RI",
    countySlug: "rhode-island",
    neighborhoods: ["Conimicut", "Apponaug", "Hillsgrove", "Pontiac", "Cowesett"],
    typicalHousing:
      "Capes and ranches inland, with a heavier mix of waterfront and postwar singles toward the bay villages.",
    localContext:
      "Warwick spreads across a dozen distinct villages, which means our offers vary block-to-block more than in any other RI city. We know the difference between a Conimicut waterfront and a Hillsgrove lot bordering airport noise — and we adjust accordingly.",
    commonSituations: ["downsizing", "inherited", "relocating"],
    nearby: ["cranston", "north-kingstown", "providence"],
    geo: { lat: 41.7001, lng: -71.4162 },
  },
  {
    slug: "pawtucket",
    name: "Pawtucket",
    state: "RI",
    countySlug: "rhode-island",
    neighborhoods: ["Oak Hill", "Woodlawn", "Darlington", "Quality Hill", "Fairlawn"],
    typicalHousing:
      "Dense triple-deckers and two-families layered around the old mill complexes, with single-family pockets toward the Lincoln line.",
    localContext:
      "Pawtucket's housing is mostly older than people expect — a lot of properties have ungrandfathered electrical, original windows, and the kind of repair list that scares retail buyers off. We're very comfortable with all of that and we don't ask sellers to fix anything.",
    commonSituations: ["tired-landlord", "needs-major-work", "code-violations"],
    nearby: ["providence", "east-providence", "woonsocket"],
    geo: { lat: 41.8787, lng: -71.3826 },
  },
  {
    slug: "east-providence",
    name: "East Providence",
    state: "RI",
    countySlug: "rhode-island",
    neighborhoods: ["Riverside", "Rumford", "Kent Heights", "Watchemoket"],
    typicalHousing:
      "Early-20th-century single-families and two-families inland; capes and ranches toward Riverside and the bay.",
    localContext:
      "East Providence sits on a peninsula and the housing stock changes meaningfully as you move from the Seekonk line out to Riverside. We buy across all of it and have closed in every village.",
    commonSituations: ["inherited", "downsizing", "relocating"],
    nearby: ["providence", "pawtucket", "bristol"],
    geo: { lat: 41.8137, lng: -71.3701 },
  },
  {
    slug: "woonsocket",
    name: "Woonsocket",
    state: "RI",
    countySlug: "rhode-island",
    neighborhoods: ["Constitution Hill", "Cato Hill", "Globe Village", "Fairmount"],
    typicalHousing:
      "Triple-deckers and worker-housing two-families in the urban core; smaller singles toward the outskirts.",
    localContext:
      "Woonsocket is a tight market with deep roots — a lot of the houses we look at have been in the same family for generations. We're respectful of that and we move quickly when a family is ready.",
    commonSituations: ["inherited", "tired-landlord", "behind-on-payments"],
    nearby: ["pawtucket", "providence"],
    geo: { lat: 42.0029, lng: -71.5147 },
  },
  {
    slug: "newport",
    name: "Newport",
    state: "RI",
    countySlug: "rhode-island",
    nickname: "the City by the Sea",
    neighborhoods: ["The Point", "Fifth Ward", "Top of the Hill", "Bellevue"],
    typicalHousing:
      "Federal- and Colonial-era homes in the historic core, denser two-families in the Fifth Ward, and condos farther out.",
    localContext:
      "Newport is its own market — historic-district restrictions, seasonal rental dynamics, and condo conversions all change what an offer looks like. We've worked through all of those situations and we'll be transparent about how any of them affect our number.",
    commonSituations: ["inherited", "tired-landlord", "relocating"],
    nearby: ["bristol", "north-kingstown"],
    geo: { lat: 41.4901, lng: -71.3128 },
  },
  {
    slug: "bristol",
    name: "Bristol",
    state: "RI",
    countySlug: "rhode-island",
    neighborhoods: ["Hope Street corridor", "Poppasquash", "Mount Hope"],
    typicalHousing:
      "Federal and Greek Revival in the historic district, with mid-century capes and ranches farther from the water.",
    localContext:
      "Bristol's historic core comes with HDC review for exterior changes — we're familiar with what that means for a sale and we'll factor it honestly into our offer. We close at a Bristol attorney's office when sellers prefer.",
    commonSituations: ["inherited", "downsizing", "relocating"],
    nearby: ["newport", "east-providence"],
    geo: { lat: 41.6776, lng: -71.2662 },
  },
  {
    slug: "westerly",
    name: "Westerly",
    state: "RI",
    countySlug: "rhode-island",
    neighborhoods: ["Watch Hill", "Misquamicut", "Bradford", "Downtown Westerly"],
    typicalHousing:
      "Cottages and vintage seasonal homes near the water; year-round single-families inland.",
    localContext:
      "Westerly's seasonal housing creates situations you don't see elsewhere in RI — out-of-state estates, tired second-home owners, deferred-maintenance cottages. We're set up to handle all of those, including coordinating remotely with executors who don't live nearby.",
    commonSituations: ["inherited", "tired-landlord", "vacant"],
    nearby: ["north-kingstown"],
    geo: { lat: 41.3776, lng: -71.8273 },
  },
  {
    slug: "north-kingstown",
    name: "North Kingstown",
    state: "RI",
    countySlug: "rhode-island",
    neighborhoods: ["Wickford", "Quonset", "Saunderstown", "Hamilton"],
    typicalHousing:
      "Colonial and federal in Wickford village, postwar singles inland, and waterfront cottages along the Narragansett Bay shore.",
    localContext:
      "North Kingstown is a wide town — Wickford village's historic homes are very different from the postwar ranches up by the Quonset corridor. We work with both.",
    commonSituations: ["downsizing", "relocating", "inherited"],
    nearby: ["warwick", "westerly"],
    geo: { lat: 41.5795, lng: -71.4598 },
  },

  // --- Bristol County, MA ---
  {
    slug: "fall-river",
    name: "Fall River",
    state: "MA",
    countySlug: "bristol-county-ma",
    neighborhoods: ["Highlands", "Flint", "Maplewood", "Niagara"],
    typicalHousing:
      "Three-deckers and mill-era two-families in the urban core; bungalows and capes in the Highlands.",
    localContext:
      "Fall River three-deckers are some of the most distinct housing stock in New England. We know how to evaluate them — including the common roof, electrical, and tenant situations — and we make offers that account for all of it up front.",
    commonSituations: ["tired-landlord", "inherited", "needs-major-work"],
    nearby: ["new-bedford", "taunton"],
    geo: { lat: 41.7015, lng: -71.155 },
  },
  {
    slug: "new-bedford",
    name: "New Bedford",
    state: "MA",
    countySlug: "bristol-county-ma",
    nickname: "the Whaling City",
    neighborhoods: ["West End", "South End", "North End", "Far North"],
    typicalHousing:
      "Three-deckers and worker housing across the city; restored Federals near the historic district; capes and ranches on the outskirts.",
    localContext:
      "New Bedford has deep generational housing — many families have held property here for fifty-plus years and the homes show it. We respect that history and we're patient with the conversation it deserves.",
    commonSituations: ["inherited", "tired-landlord", "vacant"],
    nearby: ["fall-river", "wareham"],
    geo: { lat: 41.6362, lng: -70.9342 },
  },
  {
    slug: "taunton",
    name: "Taunton",
    state: "MA",
    countySlug: "bristol-county-ma",
    nickname: "the Silver City",
    neighborhoods: ["Whittenton", "East Taunton", "Oakland", "Weir"],
    typicalHousing:
      "Mid-century single-families and ranches with pockets of older mill housing along the river.",
    localContext:
      "Taunton sits at the corner of three counties' worth of demand, which makes pricing uneven block-to-block. We track the comps tightly and we'll explain how we got to the number.",
    commonSituations: ["inherited", "downsizing", "relocating"],
    nearby: ["fall-river", "bridgewater", "stoughton"],
    geo: { lat: 41.9001, lng: -71.0898 },
  },

  // --- Plymouth County, MA ---
  {
    slug: "plymouth",
    name: "Plymouth",
    state: "MA",
    countySlug: "plymouth-county-ma",
    neighborhoods: ["Manomet", "Cedarville", "North Plymouth", "Downtown Plymouth"],
    typicalHousing:
      "Capes, ranches, and contemporaries spread across a wide town; cottages and seasonal homes near the harbor.",
    localContext:
      "Plymouth is geographically huge — Cedarville is essentially a different town from Manomet. We adjust our process accordingly: we'll do video walk-throughs for outlying properties to keep things moving for sellers who don't live nearby.",
    commonSituations: ["inherited", "downsizing", "vacant"],
    nearby: ["wareham", "middleborough", "bridgewater"],
    geo: { lat: 41.9584, lng: -70.6673 },
  },
  {
    slug: "brockton",
    name: "Brockton",
    state: "MA",
    countySlug: "plymouth-county-ma",
    nickname: "the City of Champions",
    neighborhoods: ["Campello", "Montello", "West Side", "East Side"],
    typicalHousing:
      "Two-families and three-deckers throughout the city, with denser singles in West Side neighborhoods.",
    localContext:
      "Brockton is one of the busiest markets in southeastern Mass and properties move quickly when listed — but for sellers who don't want the showings, repairs, and contingencies that retail brings, we're a real alternative. We close fast and we don't renegotiate at the table.",
    commonSituations: ["tired-landlord", "behind-on-payments", "inherited"],
    nearby: ["bridgewater", "stoughton", "taunton"],
    geo: { lat: 42.0834, lng: -71.0184 },
  },
  {
    slug: "bridgewater",
    name: "Bridgewater",
    state: "MA",
    countySlug: "plymouth-county-ma",
    neighborhoods: ["Bridgewater Center", "Lakeville Pond"],
    typicalHousing:
      "Capes, gambrels, and mid-century singles with a college-influenced rental pocket near campus.",
    localContext:
      "Bridgewater's mix of long-time owners and student-rental property gets us a lot of inherited and tired-landlord conversations. We can buy with tenants in place — we don't need vacant possession.",
    commonSituations: ["inherited", "tired-landlord", "downsizing"],
    nearby: ["brockton", "middleborough", "taunton"],
    geo: { lat: 41.9904, lng: -70.9747 },
  },
  {
    slug: "middleborough",
    name: "Middleborough",
    state: "MA",
    countySlug: "plymouth-county-ma",
    neighborhoods: ["Middleboro Center", "Rock Village"],
    typicalHousing:
      "Antique colonials, capes, and a scattering of mid-century ranches across a heavily wooded town.",
    localContext:
      "Middleboro's land-heavy parcels and older housing stock create complicated estate situations. We work patiently with executors and out-of-state heirs.",
    commonSituations: ["inherited", "vacant", "downsizing"],
    nearby: ["bridgewater", "plymouth", "wareham"],
    geo: { lat: 41.8958, lng: -70.911 },
  },
  {
    slug: "wareham",
    name: "Wareham",
    state: "MA",
    countySlug: "plymouth-county-ma",
    neighborhoods: ["Onset", "West Wareham", "East Wareham"],
    typicalHousing:
      "Coastal cottages and capes, with denser singles inland and seasonal-rental properties near Onset.",
    localContext:
      "Wareham's seasonal-rental properties and absentee-owner cottages mean we see a lot of tired-landlord and out-of-state-owner sales. We can close remotely if needed and we coordinate the cleanout.",
    commonSituations: ["tired-landlord", "vacant", "inherited"],
    nearby: ["plymouth", "middleborough", "new-bedford"],
    geo: { lat: 41.7615, lng: -70.7197 },
  },

  // --- Norfolk County, MA ---
  {
    slug: "quincy",
    name: "Quincy",
    state: "MA",
    countySlug: "norfolk-county-ma",
    nickname: "the City of Presidents",
    neighborhoods: ["Wollaston", "Squantum", "Marina Bay", "North Quincy", "Houghs Neck"],
    typicalHousing:
      "Older two-families and singles in Wollaston and North Quincy, with a heavy condo concentration toward the waterfront.",
    localContext:
      "Quincy's housing varies dramatically by neighborhood — a Squantum waterfront isn't the same conversation as a Houghs Neck single-family. We know the local zoning and condo-conversion patterns and we factor them into the offer.",
    commonSituations: ["downsizing", "relocating", "inherited"],
    nearby: ["weymouth", "braintree"],
    geo: { lat: 42.2529, lng: -71.0023 },
  },
  {
    slug: "weymouth",
    name: "Weymouth",
    state: "MA",
    countySlug: "norfolk-county-ma",
    neighborhoods: ["East Weymouth", "South Weymouth", "North Weymouth", "Weymouth Landing"],
    typicalHousing:
      "Postwar capes, ranches, and split-levels with an older two-family pocket near Weymouth Landing.",
    localContext:
      "Weymouth's four villages each move on their own market timeline. We work in all of them and our offer reflects whichever village the property actually sits in.",
    commonSituations: ["downsizing", "inherited", "relocating"],
    nearby: ["quincy", "braintree"],
    geo: { lat: 42.2204, lng: -70.9395 },
  },
  {
    slug: "braintree",
    name: "Braintree",
    state: "MA",
    countySlug: "norfolk-county-ma",
    neighborhoods: ["Braintree Highlands", "East Braintree", "South Braintree"],
    typicalHousing:
      "Capes and ranches across most of town, with older singles concentrated near the village center.",
    localContext:
      "Braintree owners typically come to us when they're moving — out of state, into a smaller place, or coordinating an estate. Our offers are written to be portable on the seller's timeline.",
    commonSituations: ["relocating", "downsizing", "inherited"],
    nearby: ["quincy", "weymouth"],
    geo: { lat: 42.2079, lng: -71.0023 },
  },
  {
    slug: "franklin",
    name: "Franklin",
    state: "MA",
    countySlug: "norfolk-county-ma",
    neighborhoods: ["Franklin Center", "Unionville"],
    typicalHousing:
      "Mid-century and newer single-families, plus a handful of antique homes near the historic center.",
    localContext:
      "Franklin's housing skews newer than the rest of our service area, which means the situations we see here are usually relocation or downsizing rather than deep-condition issues.",
    commonSituations: ["relocating", "downsizing", "inherited"],
    nearby: ["stoughton"],
    geo: { lat: 42.0834, lng: -71.3967 },
  },
  {
    slug: "stoughton",
    name: "Stoughton",
    state: "MA",
    countySlug: "norfolk-county-ma",
    neighborhoods: ["West Stoughton", "Stoughton Center"],
    typicalHousing:
      "Capes, ranches, and mid-century singles with pockets of older two-families near the train station.",
    localContext:
      "Stoughton's tighter inventory and commuter-rail access mean retail listings often go quickly — but for sellers who'd rather skip the process entirely, we're a clean alternative.",
    commonSituations: ["downsizing", "relocating", "tired-landlord"],
    nearby: ["brockton", "franklin", "taunton"],
    geo: { lat: 42.1251, lng: -71.1003 },
  },
] as const;

export function findCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function citiesByCounty(countySlug: string): ReadonlyArray<City> {
  return cities.filter((c) => c.countySlug === countySlug);
}
