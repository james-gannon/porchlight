/**
 * County / regional hubs. Each is the parent of a set of city pages.
 *
 * RI is treated as a single hub because (a) the state is small enough that
 * sellers search "we buy houses Rhode Island" more than they search by county,
 * and (b) it matches the Service-Area model in Google Business Profile.
 */

export type County = {
  slug: string;
  name: string;
  state: "RI" | "MA";
  /** Marketing display name, e.g. "Rhode Island" or "Bristol County, MA". */
  displayName: string;
  /** 1-paragraph intro shown on the hub. */
  intro: string;
  /** Cities (by slug) that belong to this hub, in display order. */
  citySlugs: ReadonlyArray<string>;
  /** Optional supplementary copy below the city grid. */
  body?: string;
};

export const counties: ReadonlyArray<County> = [
  {
    slug: "rhode-island",
    name: "Rhode Island",
    displayName: "Rhode Island",
    state: "RI",
    intro:
      "We buy houses across every corner of Rhode Island — from triple-deckers in the Providence neighborhoods to clapboard colonials in the East Bay. Local knowledge means tighter offers and fewer surprises at closing.",
    citySlugs: [
      "providence",
      "cranston",
      "warwick",
      "pawtucket",
      "east-providence",
      "woonsocket",
      "newport",
      "bristol",
      "westerly",
      "north-kingstown",
    ],
    body: "Rhode Island's housing stock is unusually mixed for such a small state — early-1900s mill housing, mid-century ranches, working waterfronts, and weekend cottages can all sit on the same block. We've seen and bought all of it.",
  },
  {
    slug: "bristol-county-ma",
    name: "Bristol County",
    displayName: "Bristol County, MA",
    state: "MA",
    intro:
      "We buy houses across Bristol County's South Coast — Fall River, New Bedford, Taunton, and the smaller mill towns in between. We close at attorneys' offices on the Massachusetts side and we know the local probate and tenancy quirks.",
    citySlugs: ["fall-river", "new-bedford", "taunton"],
    body: "South Coast housing is its own thing — three-deckers, mill cottages, tight lots, and a lot of estate sales. We're comfortable with all of it, including properties with deferred maintenance or tenants in place.",
  },
  {
    slug: "plymouth-county-ma",
    name: "Plymouth County",
    displayName: "Plymouth County, MA",
    state: "MA",
    intro:
      "Plymouth County stretches from the historic waterfront in Plymouth itself out to the working neighborhoods of Brockton and the woods of Middleborough and Wareham. We buy across all of it.",
    citySlugs: ["plymouth", "brockton", "bridgewater", "middleborough", "wareham"],
  },
  {
    slug: "norfolk-county-ma",
    name: "Norfolk County",
    displayName: "Norfolk County, MA",
    state: "MA",
    intro:
      "Norfolk County is the dense ring of suburbs south of Boston — Quincy, Weymouth, Braintree on the coast, and the older towns inland. Tight lots, varied housing stock, and seller situations that often involve relocation or downsizing.",
    citySlugs: ["quincy", "weymouth", "braintree", "franklin", "stoughton"],
  },
] as const;

export function findCounty(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
