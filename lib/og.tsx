import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const PAPER = "#F4EFE4";
const PAPER_2 = "#EAE3D2";
const INK = "#0F0F0F";
const INK_MUTED = "#3A3A3A";
const AMBER = "#E8A33A";
const AMBER_DEEP = "#C8821E";

type Props = {
  eyebrow: string;
  headline: string;
  /** Optional sub-line beneath the headline. */
  footnote?: string;
};

/**
 * Brand-consistent OG card. 1200×630 PNG. Uses Edge ImageResponse — falls
 * back to the bundled font (no Google Font fetch) so the build stays fast and
 * the route works even when Google Fonts is rate-limited.
 */
export function brandOgImage({ eyebrow, headline, footnote }: Props): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(160deg, ${PAPER} 0%, ${PAPER} 55%, ${PAPER_2} 100%)`,
          padding: "84px 96px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Lantern accent — concentric amber arcs in the top-right. */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 540,
            height: 540,
            borderRadius: "50%",
            background: `radial-gradient(circle at 50% 50%, ${AMBER}40 0%, ${AMBER}00 60%)`,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: AMBER_DEEP,
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              background: AMBER,
              borderRadius: 999,
              display: "flex",
            }}
          />
          {eyebrow}
        </div>
        <div
          style={{
            color: INK,
            fontSize: 80,
            lineHeight: 1.04,
            marginTop: 28,
            maxWidth: 950,
            letterSpacing: -1,
            fontWeight: 700,
            display: "flex",
          }}
        >
          {headline}
        </div>
        {footnote ? (
          <div
            style={{
              color: INK_MUTED,
              fontSize: 28,
              marginTop: 24,
              maxWidth: 900,
              display: "flex",
            }}
          >
            {footnote}
          </div>
        ) : null}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: INK,
            fontSize: 28,
            fontWeight: 600,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span style={{ display: "flex" }}>{site.name}</span>
          <span style={{ color: INK_MUTED, display: "flex", fontWeight: 400 }}>
            porchlighthomeoffers.com
          </span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
