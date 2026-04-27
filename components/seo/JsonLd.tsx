import type { JsonLdObject } from "@/lib/schema";

/**
 * Renders a JSON-LD payload inside a <script> tag. Usage:
 *
 *   <JsonLd data={composeGraph(buildOrganization(), buildWebsite())} />
 *
 * The payload is injected via dangerouslySetInnerHTML because Next strips
 * children from <script> elements; this is the standard, safe pattern for
 * structured data and is recommended by Google's Rich Results docs.
 */
export function JsonLd({ data }: { data: JsonLdObject }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
