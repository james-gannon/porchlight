import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function Container({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container", className)} {...rest} />;
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-sans text-xs font-semibold uppercase tracking-[0.18em] text-amber-deep",
        className,
      )}
    >
      {children}
    </p>
  );
}
