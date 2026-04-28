import { Phone, Play } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * A static visual representation of a voicemail. This is intentionally NOT a
 * real audio player — the trust signal is the transcript and the metadata,
 * not playback. If you want real audio later, wrap an <audio> element inside
 * the play-button slot.
 */

type Props = {
  caller: string;
  /** e.g., "Cranston, RI" */
  location?: string;
  /** "1:42" */
  duration: string;
  /** "Tuesday, March 4 · 7:18pm" */
  receivedAt?: string;
  /** Verbatim or paraphrased — make it clear which in the surrounding copy. */
  transcript: string;
  className?: string;
};

export function VoicemailCard({
  caller,
  location,
  duration,
  receivedAt,
  transcript,
  className,
}: Props) {
  return (
    <article
      className={cn(
        "rounded-lg border border-rule/15 bg-paper p-5 shadow-sm",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-moss/10 text-moss">
            <Phone className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="font-display text-base font-semibold text-ink">{caller}</p>
            {location ? (
              <p className="font-sans text-xs text-ink-muted">{location}</p>
            ) : null}
          </div>
        </div>
        <div className="flex items-center gap-2 text-ink-muted">
          <button
            type="button"
            aria-label="Play voicemail (placeholder)"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-rule/20 bg-paper-2/60 text-ink hover:bg-paper-2"
          >
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
          </button>
          <span className="font-mono text-xs tabular-nums">{duration}</span>
        </div>
      </div>
      <p className="mt-4 font-sans text-[15px] italic leading-relaxed text-ink">
        &ldquo;{transcript}&rdquo;
      </p>
      {receivedAt ? (
        <p className="mt-3 font-sans text-[11px] uppercase tracking-wider text-ink-muted">
          {receivedAt}
        </p>
      ) : null}
    </article>
  );
}
