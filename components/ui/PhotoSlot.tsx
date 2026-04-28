import Image from "next/image";
import { Camera } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  /** Where the actual file should live in /public when supplied. Optional. */
  src?: string;
  /** Alt text — should describe the photo's content. */
  alt: string;
  /**
   * Caption shown to the user if `src` is absent — this is the seller-facing
   * direction for what photo to take, e.g. "Owner at 127 Smith St closing —
   * golden hour, 50mm". Treat it as the photo brief, not just a label.
   */
  caption?: string;
  /** Optional aspect-ratio class (e.g., "aspect-[4/5]"). Defaults to 4/3. */
  aspect?: string;
  className?: string;
  rotate?: "left" | "right" | "none";
  /** Whether to render the placeholder card (default true if no src). */
  showPlaceholder?: boolean;
};

/**
 * Photo placeholder that doubles as a brief for what photo to take. When `src`
 * is provided, renders the actual image; otherwise, shows a styled placeholder
 * with the caption text so the design intent stays visible while the team
 * collects raw, organic photography.
 */
export function PhotoSlot({
  src,
  alt,
  caption,
  aspect = "aspect-[4/3]",
  className,
  rotate = "none",
}: Props) {
  const rotateClass =
    rotate === "left" ? "-rotate-1" : rotate === "right" ? "rotate-1" : "";

  if (src) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-md bg-paper-2",
          aspect,
          rotateClass,
          className,
        )}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
    );
  }

  return (
    <figure
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex w-full items-end justify-start overflow-hidden rounded-md border border-rule/15 bg-paper-2",
        aspect,
        rotateClass,
        className,
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(31,31,31,0.04) 0 1px, transparent 1px 8px)",
      }}
    >
      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-paper px-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
        <Camera className="h-3 w-3" aria-hidden />
        Photo brief
      </span>
      {caption ? (
        <figcaption className="m-3 max-w-full rounded bg-paper/95 p-2 font-sans text-xs leading-snug text-ink shadow-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
