import { cn } from "@/lib/cn";

/**
 * A text-thread / SMS-style conversation block. Inspired by the Backyard Home
 * Offers homepage. Designed to read like a real exchange — the design IS the
 * trust signal. Use real (with-permission) snippets where possible; otherwise
 * the founder can paraphrase past calls.
 *
 * Color treatment supports two palettes:
 *   `paper`  — cream bubble (incoming) + olive/moss bubble (outgoing)
 *   `phone`  — blue iMessage-style outgoing + grey incoming (more literal SMS)
 */

export type ChatMessage = {
  /**
   * `incoming` is the seller (right-side or left depending on layout); `outgoing`
   * is the founder. Pick the visual side via the `outgoingSide` prop.
   */
  side: "incoming" | "outgoing";
  /** Initial used in the avatar disc (e.g., "J", "K"). */
  initial: string;
  /** Speaker label above the bubble (e.g., "Janine · Pawtucket"). */
  speaker?: string;
  /** Bubble body — string or rich React node. */
  body: React.ReactNode;
  /** Optional caption beneath (e.g., "Tuesday, 9:42pm"). */
  caption?: string;
};

type ChatThreadProps = {
  messages: ReadonlyArray<ChatMessage>;
  /** Visual side the outgoing bubble should land on. Default: right. */
  outgoingSide?: "left" | "right";
  /** Color palette. Default `paper`. */
  palette?: "paper" | "phone";
  className?: string;
};

export function ChatThread({
  messages,
  outgoingSide = "right",
  palette = "paper",
  className,
}: ChatThreadProps) {
  return (
    <ol className={cn("space-y-5", className)}>
      {messages.map((m, i) => {
        const onRight =
          outgoingSide === "right" ? m.side === "outgoing" : m.side === "incoming";
        return (
          <li
            key={i}
            className={cn(
              "flex w-full items-start gap-3",
              onRight ? "flex-row-reverse" : "flex-row",
            )}
          >
            <Avatar initial={m.initial} variant={m.side} palette={palette} />
            <div
              className={cn("flex max-w-[78%] flex-col", onRight ? "items-end" : "items-start")}
            >
              {m.speaker ? (
                <span
                  className={cn(
                    "mb-1 px-2 font-sans text-[11px] font-semibold uppercase tracking-[0.12em]",
                    "text-ink-muted",
                  )}
                >
                  {m.speaker}
                </span>
              ) : null}
              <Bubble side={m.side} palette={palette}>
                {m.body}
              </Bubble>
              {m.caption ? (
                <span className="mt-1 px-2 font-sans text-[11px] text-ink-muted">
                  {m.caption}
                </span>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function Avatar({
  initial,
  variant,
  palette,
}: {
  initial: string;
  variant: ChatMessage["side"];
  palette: "paper" | "phone";
}) {
  const isOutgoing = variant === "outgoing";
  const styles =
    palette === "phone"
      ? isOutgoing
        ? "bg-[#2C7BFF] text-white"
        : "bg-[#E5E5EA] text-ink"
      : isOutgoing
        ? "bg-moss text-paper"
        : "bg-paper-2 text-ink ring-1 ring-rule/15";
  return (
    <span
      aria-hidden
      className={cn(
        "mt-1 inline-flex h-9 w-9 shrink-0 select-none items-center justify-center rounded-full font-display text-sm font-semibold",
        styles,
      )}
    >
      {initial}
    </span>
  );
}

function Bubble({
  side,
  palette,
  children,
}: {
  side: ChatMessage["side"];
  palette: "paper" | "phone";
  children: React.ReactNode;
}) {
  const isOutgoing = side === "outgoing";
  const styles =
    palette === "phone"
      ? isOutgoing
        ? "bg-[#2C7BFF] text-white"
        : "bg-[#E9E9EB] text-ink"
      : isOutgoing
        ? "bg-moss text-paper"
        : "bg-[#F1E9D6] text-ink ring-1 ring-amber/20";
  return (
    <div
      className={cn(
        "rounded-2xl px-4 py-3 font-sans text-[15px] leading-snug shadow-sm",
        styles,
      )}
    >
      {children}
    </div>
  );
}
