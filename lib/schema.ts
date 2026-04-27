/**
 * JSON-LD generators. Every page that wants schema markup imports a helper
 * here and renders it via <JsonLd /> in `components/seo/JsonLd.tsx`.
 *
 * Source: https://schema.org/. Validated against Google's Rich Results Test
 * before launch.
 *
 * Naming convention:
 *   build*Schema()  — returns a single JSON-LD object (Thing)
 *   compose*()      — composes multiple Things into a @graph
 */

import { site } from "@/content/site";
import type { City } from "@/content/cities";
import type { County } from "@/content/counties";
import type { PropertyTypePage } from "@/content/propertyTypes";
import { cityUrl, countyUrl, propertyTypeUrl } from "@/lib/content";

const ABS = (path: string): string =>
  path.startsWith("http") ? path : `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

type JsonLdValue =
  | string
  | number
  | boolean
  | undefined
  | JsonLdObject
  | JsonLdValue[]
  | null;
export type JsonLdObject = { [key: string]: JsonLdValue };

export function buildOrganization(): JsonLdObject {
  return {
    "@type": "Organization",
    "@id": ABS("/#organization"),
    name: site.name,
    url: site.url,
    logo: ABS("/logo-mark.png"),
    sameAs: Object.values(site.social).filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone.web,
      contactType: "customer service",
      areaServed: ["RI", "MA"],
      availableLanguage: ["English"],
    },
  };
}

export function buildWebsite(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": ABS("/#website"),
    url: site.url,
    name: site.name,
    publisher: { "@id": ABS("/#organization") },
    inLanguage: "en-US",
  };
}

/**
 * Root LocalBusiness — used on the home page and as the parent `@id` for
 * per-city LocalBusiness nodes.
 */
export function buildRootLocalBusiness(): JsonLdObject {
  return {
    "@type": "RealEstateAgent",
    "@id": ABS("/#business"),
    name: site.name,
    url: site.url,
    image: ABS("/logo-full.png"),
    logo: ABS("/logo-mark.png"),
    description: site.tagline,
    telephone: site.phone.web,
    email: site.email.startsWith("TO_FILL") ? undefined : site.email,
    priceRange: "$$",
    parentOrganization: { "@id": ABS("/#organization") },
    areaServed: [
      { "@type": "State", name: "Rhode Island" },
      { "@type": "AdministrativeArea", name: "Bristol County, Massachusetts" },
      { "@type": "AdministrativeArea", name: "Plymouth County, Massachusetts" },
      { "@type": "AdministrativeArea", name: "Norfolk County, Massachusetts" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

/**
 * Per-city LocalBusiness — scoped `areaServed` to that city, with geo. Sits
 * below the root business and points back to it via `parentOrganization`.
 */
export function buildCityLocalBusiness(city: City, county: County): JsonLdObject {
  return {
    "@type": "RealEstateAgent",
    "@id": ABS(`${cityUrl(city.slug)}#business`),
    name: `${site.name} — ${city.name}, ${city.state}`,
    url: ABS(cityUrl(city.slug)),
    image: ABS("/logo-full.png"),
    description: `Cash home buyer serving ${city.name}, ${city.state} and surrounding ${county.displayName} neighborhoods.`,
    telephone: site.phone.web,
    priceRange: "$$",
    parentOrganization: { "@id": ABS("/#business") },
    areaServed: {
      "@type": "City",
      name: `${city.name}, ${city.state}`,
      containedInPlace: { "@type": "AdministrativeArea", name: county.displayName },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
  };
}

export function buildBreadcrumb(
  items: ReadonlyArray<{ name: string; url: string }>,
): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: ABS(item.url),
    })),
  };
}

export function buildFaqPage(faqs: ReadonlyArray<{ q: string; a: string }>): JsonLdObject {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildService(pt: PropertyTypePage): JsonLdObject {
  return {
    "@type": "Service",
    "@id": ABS(`${propertyTypeUrl(pt.slug)}#service`),
    name: pt.name,
    description: pt.metaDescription,
    serviceType: "Direct cash home purchase",
    provider: { "@id": ABS("/#business") },
    areaServed: [
      { "@type": "State", name: "Rhode Island" },
      { "@type": "AdministrativeArea", name: "Bristol County, Massachusetts" },
      { "@type": "AdministrativeArea", name: "Plymouth County, Massachusetts" },
      { "@type": "AdministrativeArea", name: "Norfolk County, Massachusetts" },
    ],
    url: ABS(propertyTypeUrl(pt.slug)),
  };
}

/**
 * Wraps an array of Things in a @graph so a single <script> tag can carry
 * multiple nodes. Strips undefined fields to keep the JSON tidy.
 */
export function composeGraph(...nodes: JsonLdObject[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map(stripUndefined),
  };
}

function stripUndefined(obj: JsonLdValue): JsonLdValue {
  if (Array.isArray(obj)) return obj.map(stripUndefined);
  if (obj && typeof obj === "object") {
    const out: JsonLdObject = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v === undefined) continue;
      out[k] = stripUndefined(v as JsonLdValue);
    }
    return out;
  }
  return obj;
}

// Re-export for convenience.
export { ABS };

export const breadcrumbHome = { name: site.name, url: "/" };
export function breadcrumbCounty(c: County) {
  return { name: c.displayName, url: countyUrl(c.slug) };
}
export function breadcrumbCity(c: City) {
  return { name: c.name, url: cityUrl(c.slug) };
}
export function breadcrumbPropertyType(p: PropertyTypePage) {
  return { name: p.name, url: propertyTypeUrl(p.slug) };
}
