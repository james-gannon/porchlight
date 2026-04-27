"use client";

import { useId, type ReactElement, type ReactNode, cloneElement, isValidElement } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/cn";

type FieldChild = ReactElement<{
  id?: string;
  "aria-describedby"?: string;
  invalid?: boolean;
}>;

type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: FieldChild;
};

/**
 * Wraps a single form control with a label, optional hint, and inline error.
 * The control's id, aria-describedby and aria-invalid are wired automatically.
 */
export function Field({ label, hint, error, required, className, children }: FieldProps) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy =
    [error ? errorId : undefined, hint ? hintId : undefined].filter(Boolean).join(" ") ||
    undefined;

  const control = isValidElement(children)
    ? cloneElement(children, {
        id,
        "aria-describedby": describedBy,
        invalid: Boolean(error),
      })
    : children;

  return (
    <div className={cn("space-y-1.5", className)}>
      <LabelPrimitive.Root
        htmlFor={id}
        className="block font-sans text-sm font-medium text-ink"
      >
        {label}
        {required ? <span className="ml-1 text-amber-deep">*</span> : null}
      </LabelPrimitive.Root>
      {control}
      {hint && !error ? (
        <p id={hintId} className="font-sans text-xs text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="font-sans text-xs font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Plain label primitive for grouped controls (e.g. radio groups) where Field
 * isn't the right wrapper.
 */
export function FieldGroup({
  legend,
  children,
  required,
  error,
}: {
  legend: string;
  children: ReactNode;
  required?: boolean;
  error?: string;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="font-sans text-sm font-medium text-ink">
        {legend}
        {required ? <span className="ml-1 text-amber-deep">*</span> : null}
      </legend>
      {children}
      {error ? (
        <p role="alert" className="font-sans text-xs font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
