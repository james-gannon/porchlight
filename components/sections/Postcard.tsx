import { cn } from "@/lib/cn";

/**
 * A faux mailed postcard — the kind a wholesaler sends out. Renders the
 * recipient address, a stamp + cancellation mark, and a handwritten message
 * on the verso. Used in the Backyard theme as a "this is how the conversation
 * usually starts" device.
 */

type Props = {
  /** Recipient address — 3 lines max. */
  to: ReadonlyArray<string>;
  /** Handwritten note — keep short, as if actually hand-printed. */
  message: string;
  /** Bottom-right signoff, e.g. "— Keara, PorchLight". */
  signoff?: string;
  /** Optional postmark city, e.g. "PROVIDENCE, RI · MAR 4". */
  postmark?: string;
  className?: string;
};

export function Postcard({ to, message, signoff, postmark, className }: Props) {
  return (
    <div
      className={cn(
        "relative grid w-full max-w-xl gap-0 rounded-md bg-[#F8F2E2] shadow-2xl ring-1 ring-rule/20 md:grid-cols-2",
        className,
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(31,31,31,0.025) 0 1px, transparent 1px 6px)",
      }}
    >
      {/* Left: handwritten message */}
      <div className="relative border-rule/15 p-6 md:border-r">
        <p className="font-display text-lg italic leading-snug text-ink">{message}</p>
        {signoff ? (
          <p className="mt-6 text-right font-display text-sm italic text-ink-muted">
            {signoff}
          </p>
        ) : null}
      </div>

      {/* Right: address + stamp */}
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex flex-col items-center text-[10px] uppercase tracking-wider text-ink-muted">
            <span className="mb-1">Place</span>
            <span className="mb-1">Stamp</span>
            <span>Here</span>
          </div>
          <div
            aria-hidden
            className="flex h-16 w-20 items-center justify-center border-2 border-dashed border-rule/30 text-ink-muted"
          >
            <span className="font-display text-xs">¢</span>
          </div>
        </div>

        {/* Cancellation circle */}
        {postmark ? (
          <div
            aria-hidden
            className="absolute right-12 top-8 -rotate-12 rounded-full border-2 border-amber-deep/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-deep/80"
          >
            {postmark}
          </div>
        ) : null}

        {/* Address */}
        <div className="mt-4 border-l-2 border-rule/40 pl-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            To:
          </p>
          <ul className="mt-1 space-y-0.5 font-display text-base text-ink">
            {to.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
