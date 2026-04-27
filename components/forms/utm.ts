/**
 * Read UTM params + referrer from the current URL/document.
 * Used by both LeadForm and QuickOfferForm for marketing attribution.
 */
export function getMarketingContext(): {
  source: string | undefined;
  pagePath: string | undefined;
  utm: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
} {
  if (typeof window === "undefined") {
    return { source: undefined, pagePath: undefined, utm: {} };
  }
  const params = new URLSearchParams(window.location.search);
  const utm = {
    source: params.get("utm_source") ?? undefined,
    medium: params.get("utm_medium") ?? undefined,
    campaign: params.get("utm_campaign") ?? undefined,
    term: params.get("utm_term") ?? undefined,
    content: params.get("utm_content") ?? undefined,
  };
  const source = utm.source ?? (document.referrer ? new URL(document.referrer).hostname : "direct");
  return {
    source,
    pagePath: window.location.pathname,
    utm,
  };
}
