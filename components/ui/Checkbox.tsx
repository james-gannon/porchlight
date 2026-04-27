import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: ReactNode;
  error?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, error, id, className, ...rest },
  ref,
) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="flex cursor-pointer items-start gap-2.5 font-sans text-sm text-ink"
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={cn(
            "mt-0.5 h-4 w-4 shrink-0 rounded border-rule/40 bg-paper text-amber-deep",
            "accent-amber-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
            className,
          )}
          aria-invalid={Boolean(error) || undefined}
          {...rest}
        />
        <span className="leading-snug text-ink-muted">{label}</span>
      </label>
      {error ? (
        <p role="alert" className="font-sans text-xs font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
});
