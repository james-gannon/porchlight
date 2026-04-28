/**
 * Home-page theme variants. Each is a distinct visual treatment of the same
 * underlying content (data lives in `content/site.ts`); the theme controls
 * layout, typography, density, and section order.
 *
 * Selection persists via the `pl-home-theme` cookie so the server-rendered
 * HTML always matches the active theme — no flash of wrong content.
 *
 * Remove the ThemeSwitcher and pin a single theme before launch. Search the
 * repo for `THEME_DEV_TOOL` to find the entry points.
 *
 * NOTE: This module is client-safe. The server-only `getActiveTheme()` helper
 * lives in `lib/theme.server.ts` to keep `next/headers` out of the client
 * bundle.
 */

export const THEMES = [
  "lantern",
  "letter",
  "direct",
  "field-notes",
  "backyard",
  "documentary",
  "receipts",
  "almanac",
  "gazette",
] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_LABELS: Record<Theme, string> = {
  lantern: "Lantern",
  letter: "Letter",
  direct: "Direct",
  "field-notes": "Field Notes",
  backyard: "Backyard",
  documentary: "Documentary",
  receipts: "Receipts",
  almanac: "Almanac",
  gazette: "Gazette",
};

export const THEME_DESCRIPTIONS: Record<Theme, string> = {
  lantern: "Warm, structured. Balanced sections. The original.",
  letter: "Editorial / longform. Owner-led. Magazine feel.",
  direct: "Bold direct-response. Conversion-first. High contrast.",
  "field-notes": "Polaroid / scrapbook. Maximum personality.",
  backyard: "Text thread first. Voicemails, postcards, real conversation.",
  documentary: "Dark cinematic. B&W photography. Like an Atlantic feature.",
  receipts: "Radical transparency. Letterpress + monospace. Real numbers.",
  almanac: "Field-guide aesthetic. Encyclopedic. Old Farmers' Almanac feel.",
  gazette: "Local newspaper. Masthead, columns, classifieds.",
};

export const THEME_COOKIE = "pl-home-theme";
export const DEFAULT_THEME: Theme = "lantern";

export function isTheme(v: unknown): v is Theme {
  return typeof v === "string" && (THEMES as ReadonlyArray<string>).includes(v);
}
