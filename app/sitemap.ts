import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { cities } from "@/content/cities";
import { counties } from "@/content/counties";
import { propertyTypes } from "@/content/propertyTypes";
import { cityUrl, countyUrl, propertyTypeUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${site.url}${path}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: url("/how-it-works"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/get-offer"), lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: url("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: url("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: url("/accessibility"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: url(cityUrl(c.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const countyRoutes: MetadataRoute.Sitemap = counties.map((c) => ({
    url: url(countyUrl(c.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const propertyTypeRoutes: MetadataRoute.Sitemap = propertyTypes.map((p) => ({
    url: url(propertyTypeUrl(p.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...countyRoutes, ...cityRoutes, ...propertyTypeRoutes];
}
