/**
 * Content lookup + link-graph helpers. Centralises slug-to-URL rules so the
 * dynamic routes, sitemap, breadcrumbs, and cross-links never drift.
 */

import { cities, type City } from "@/content/cities";
import { counties, type County, findCounty } from "@/content/counties";
import { propertyTypes, type PropertyTypePage } from "@/content/propertyTypes";

export const CITY_BASE = "/sell-my-house-fast";
export const COUNTY_BASE = "/we-buy-houses";
export const PROPERTY_TYPE_BASE = "/sell";

export const cityUrl = (slug: string): string => `${CITY_BASE}/${slug}`;
export const countyUrl = (slug: string): string => `${COUNTY_BASE}/${slug}`;
export const propertyTypeUrl = (slug: string): string => `${PROPERTY_TYPE_BASE}/${slug}`;

export function cityWithCounty(city: City): { city: City; county: County } {
  const county = findCounty(city.countySlug);
  if (!county) {
    throw new Error(
      `City "${city.slug}" references unknown county "${city.countySlug}" — fix content/cities.ts or content/counties.ts`,
    );
  }
  return { city, county };
}

/**
 * Validates the city / county / property-type link graph at module load. Any
 * dangling reference fails fast in dev and at build time so a broken cross-link
 * never ships to production.
 */
export function validateContentGraph(): void {
  const citySlugs = new Set(cities.map((c) => c.slug));
  const countySlugs = new Set(counties.map((c) => c.slug));

  for (const city of cities) {
    if (!countySlugs.has(city.countySlug)) {
      throw new Error(`city ${city.slug} → unknown county ${city.countySlug}`);
    }
    for (const n of city.nearby) {
      if (!citySlugs.has(n)) {
        throw new Error(`city ${city.slug} → unknown nearby city ${n}`);
      }
    }
  }
  for (const county of counties) {
    for (const c of county.citySlugs) {
      if (!citySlugs.has(c)) {
        throw new Error(`county ${county.slug} → unknown city ${c}`);
      }
    }
  }
  for (const pt of propertyTypes) {
    if (!pt.slug || !pt.name) {
      throw new Error(`property type missing slug or name`);
    }
  }
}

// Run at module load — any dynamic route that imports this file will surface
// graph errors immediately at build time.
validateContentGraph();

export type { City, County, PropertyTypePage };
