"use client";

/**
 * THEME_DEV_TOOL — top-right floating switcher to compare home-page themes.
 *
 * Sets the `pl-home-theme` cookie and triggers a server refresh so the SSR
 * HTML actually swaps. Includes a dismiss button — once dismissed, the
 * preference is remembered in localStorage for that session.
 *
 * Remove this component (and its mount in app/layout.tsx) before launch.
 */

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import {
  DEFAULT_THEME,
  THEME_COOKIE,
  THEME_DESCRIPTIONS,
  THEME_LABELS,
  THEMES,
  type Theme,
  isTheme,
} from "@/lib/theme";
import { cn } from "@/lib/cn";

const DISMISS_KEY = "pl-theme-switcher-dismissed";
const ONE_YEAR = 60 * 60 * 24 * 365;

function readCookie(): Theme {
  if (typeof document === "undefined") return DEFAULT_THEME;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${THEME_COOKIE}=`));
  const raw = match?.split("=")[1];
  return isTheme(raw) ? raw : DEFAULT_THEME;
}

function writeCookie(theme: Theme) {
  document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
}

export function ThemeSwitcher() {
  const router = useRouter();
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(true); // start hidden until hydrated

  useEffect(() => {
    setTheme(readCookie());
    setDismissed(window.localStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  const apply = useCallback(
    (next: Theme) => {
      writeCookie(next);
      setTheme(next);
      setOpen(false);
      router.refresh();
    },
    [router],
  );

  const restore = useCallback(() => {
    window.localStorage.removeItem(DISMISS_KEY);
    setDismissed(false);
  }, []);

  const dismiss = useCallback(() => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  }, []);

  if (dismissed) {
    return (
      <button
        type="button"
        onClick={restore}
        className="fixed right-3 top-20 z-50 rounded-full bg-ink/80 px-3 py-1.5 font-sans text-[11px] font-medium uppercase tracking-wider text-paper shadow-lg backdrop-blur transition-colors hover:bg-ink"
        aria-label="Show theme switcher"
      >
        Themes
      </button>
    );
  }

  return (
    <div className="fixed right-3 top-20 z-50 w-[260px] rounded-lg border border-rule/15 bg-paper/95 shadow-2xl backdrop-blur md:right-5 md:top-24">
      <div className="flex items-center justify-between gap-2 border-b border-rule/10 px-3 py-2">
        <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-deep">
          Compare themes
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="rounded p-1 text-ink-muted hover:bg-paper-2/70 hover:text-ink"
          aria-label="Hide theme switcher"
        >
          <X className="h-3.5 w-3.5" aria-hidden />
        </button>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left"
      >
        <span>
          <span className="block font-display text-base font-semibold text-ink">
            {THEME_LABELS[theme]}
          </span>
          <span className="mt-0.5 block font-sans text-[11px] leading-snug text-ink-muted">
            {THEME_DESCRIPTIONS[theme]}
          </span>
        </span>
        <ChevronDown
          className={cn("h-4 w-4 shrink-0 text-ink-muted transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open ? (
        <ul className="max-h-[60vh] overflow-y-auto overscroll-contain border-t border-rule/10 py-1">
          {THEMES.map((t) => (
            <li key={t}>
              <button
                type="button"
                onClick={() => apply(t)}
                className={cn(
                  "flex w-full items-center justify-between gap-2 px-3 py-2 text-left transition-colors hover:bg-paper-2/70",
                  t === theme && "bg-amber/10",
                )}
              >
                <span>
                  <span className="block font-display text-sm font-semibold text-ink">
                    {THEME_LABELS[t]}
                  </span>
                  <span className="mt-0.5 block font-sans text-[11px] leading-snug text-ink-muted">
                    {THEME_DESCRIPTIONS[t]}
                  </span>
                </span>
                {t === theme ? (
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-deep"
                  />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="border-t border-rule/10 px-3 py-2 font-sans text-[10px] leading-snug text-ink-muted">
        Dev-only comparison tool. Remove before launch.
      </p>
    </div>
  );
}
