import "server-only";
import { cookies } from "next/headers";
import { DEFAULT_THEME, THEME_COOKIE, isTheme, type Theme } from "@/lib/theme";

/** Server-side: read the active theme from cookies. */
export function getActiveTheme(): Theme {
  const value = cookies().get(THEME_COOKIE)?.value;
  return isTheme(value) ? value : DEFAULT_THEME;
}
