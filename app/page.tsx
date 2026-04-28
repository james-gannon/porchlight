import type { Metadata } from "next";
import { LanternHome } from "@/components/themes/lantern/Home";
import { LetterHome } from "@/components/themes/letter/Home";
import { DirectHome } from "@/components/themes/direct/Home";
import { FieldNotesHome } from "@/components/themes/fieldnotes/Home";
import { BackyardHome } from "@/components/themes/backyard/Home";
import { DocumentaryHome } from "@/components/themes/documentary/Home";
import { ReceiptsHome } from "@/components/themes/receipts/Home";
import { AlmanacHome } from "@/components/themes/almanac/Home";
import { GazetteHome } from "@/components/themes/gazette/Home";
import { getActiveTheme } from "@/lib/theme.server";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} — Sell your house fast for cash in RI & southeastern MA`,
  description:
    "Local Rhode Island cash home buyer. We buy houses as-is across RI, Bristol, Plymouth & Norfolk County MA — no fees, no repairs, close in as little as 7 days.",
  alternates: { canonical: "/" },
};

// THEME_DEV_TOOL — the cookie read makes this route dynamic. Before launch,
// pin a single theme and re-enable static rendering by removing the cookie
// read and the ThemeSwitcher in app/layout.tsx.
export const dynamic = "force-dynamic";

export default function HomePage() {
  const theme = getActiveTheme();
  switch (theme) {
    case "letter":
      return <LetterHome />;
    case "direct":
      return <DirectHome />;
    case "field-notes":
      return <FieldNotesHome />;
    case "backyard":
      return <BackyardHome />;
    case "documentary":
      return <DocumentaryHome />;
    case "receipts":
      return <ReceiptsHome />;
    case "almanac":
      return <AlmanacHome />;
    case "gazette":
      return <GazetteHome />;
    case "lantern":
    default:
      return <LanternHome />;
  }
}
