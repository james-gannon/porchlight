/**
 * Lead intake schema — single source of truth.
 *
 * Used by:
 *   - components/forms/LeadForm.tsx          (client-side validation)
 *   - app/api/lead/route.ts                  (Edge proxy re-validation)
 *   - workers/lead-intake/src/index.ts       (Cloudflare Worker server-side)
 *
 * The Worker imports this file directly via a path alias in its tsconfig so
 * the schema cannot drift. Keep it dependency-free.
 */

import { z } from "zod";

// E.164-ish North American: 10 digits, optionally a leading +1.
const phoneRegex = /^(?:\+?1[-.\s]?)?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

// Strip everything that isn't a digit; keep last 10.
export const normalizePhone = (raw: string): string => {
  const digits = raw.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
};

export const TIMELINES = ["asap", "30-days", "60-90-days", "just-curious"] as const;
export type Timeline = (typeof TIMELINES)[number];

export const CONDITIONS = [
  "move-in-ready",
  "needs-light-work",
  "needs-major-work",
  "tear-down",
  "not-sure",
] as const;
export type Condition = (typeof CONDITIONS)[number];

export const SITUATIONS = [
  "inherited",
  "tired-landlord",
  "relocating",
  "downsizing",
  "behind-on-payments",
  "divorce",
  "code-violations",
  "vacant",
  "other",
] as const;
export type Situation = (typeof SITUATIONS)[number];

export const PROPERTY_TYPES = [
  "single-family",
  "multi-family",
  "condo",
  "mobile",
  "land",
  "other",
] as const;
export type PropertyType = (typeof PROPERTY_TYPES)[number];

export const leadSchema = z.object({
  // Contact
  firstName: z.string().min(1, "Please enter your first name").max(60),
  lastName: z.string().min(1, "Please enter your last name").max(60),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(1, "Please enter a phone number")
    .refine((v) => phoneRegex.test(v), "Please enter a valid US phone number"),

  // Property
  propertyAddress: z.string().min(3, "Please enter the property address").max(160),
  city: z.string().min(2, "City is required").max(80),
  state: z.enum(["RI", "MA"], { message: "We currently buy in RI and MA" }),
  postalCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP"),

  // About the house
  propertyType: z.enum(PROPERTY_TYPES).default("single-family"),
  condition: z.enum(CONDITIONS).default("not-sure"),
  bedrooms: z.coerce.number().int().min(0).max(20).optional(),
  bathrooms: z.coerce.number().min(0).max(20).optional(),

  // Situation & timeline
  situation: z.enum(SITUATIONS).default("other"),
  timeline: z.enum(TIMELINES).default("just-curious"),
  notes: z.string().max(2000).optional(),

  // Marketing attribution (set by the form, not the user)
  source: z.string().max(80).optional(),
  pagePath: z.string().max(200).optional(),
  utm: z
    .object({
      source: z.string().max(80).optional(),
      medium: z.string().max(80).optional(),
      campaign: z.string().max(120).optional(),
      term: z.string().max(120).optional(),
      content: z.string().max(120).optional(),
    })
    .optional(),

  // Honeypot — must be empty. Real users never see the field.
  website: z.string().max(0).optional().or(z.literal("")),

  // Cloudflare Turnstile token (verified server-side by the Worker)
  turnstileToken: z.string().max(2048).optional(),

  // Consent
  consent: z.literal(true, {
    message: "Please confirm you'd like us to contact you about your property",
  }),
});

export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;

/**
 * The shorter "quick offer" form used in the hero / mobile sticky.
 * Captures just enough to start a conversation; the Worker creates a
 * minimal Close lead and the team follows up to gather the rest.
 */
export const quickOfferSchema = z.object({
  propertyAddress: z.string().min(3, "Please enter the property address").max(160),
  phone: z
    .string()
    .min(1, "Please enter a phone number")
    .refine((v) => phoneRegex.test(v), "Please enter a valid US phone number"),
  firstName: z.string().min(1, "First name").max(60).optional(),
  source: z.string().max(80).optional(),
  pagePath: z.string().max(200).optional(),
  website: z.string().max(0).optional().or(z.literal("")),
  turnstileToken: z.string().max(2048).optional(),
});

export type QuickOfferInput = z.input<typeof quickOfferSchema>;
export type QuickOffer = z.output<typeof quickOfferSchema>;

export const TIMELINE_LABELS: Record<Timeline, string> = {
  asap: "As soon as possible",
  "30-days": "Within 30 days",
  "60-90-days": "60–90 days",
  "just-curious": "Just exploring options",
};

export const CONDITION_LABELS: Record<Condition, string> = {
  "move-in-ready": "Move-in ready",
  "needs-light-work": "Needs light updates",
  "needs-major-work": "Needs major work",
  "tear-down": "Tear-down / land value",
  "not-sure": "Not sure",
};

export const SITUATION_LABELS: Record<Situation, string> = {
  inherited: "Inherited the property",
  "tired-landlord": "Tired landlord",
  relocating: "Relocating",
  downsizing: "Downsizing",
  "behind-on-payments": "Behind on payments",
  divorce: "Divorce",
  "code-violations": "Code violations / liens",
  vacant: "Vacant property",
  other: "Something else",
};

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  "single-family": "Single-family home",
  "multi-family": "Multi-family (2–4 units)",
  condo: "Condo / townhouse",
  mobile: "Mobile / manufactured",
  land: "Land",
  other: "Other",
};
