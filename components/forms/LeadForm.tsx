"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import {
  CONDITION_LABELS,
  CONDITIONS,
  PROPERTY_TYPE_LABELS,
  PROPERTY_TYPES,
  SITUATION_LABELS,
  SITUATIONS,
  TIMELINE_LABELS,
  TIMELINES,
  leadSchema,
  type LeadInput,
} from "@/lib/leadSchema";
import { Field, FieldGroup } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Turnstile } from "./Turnstile";
import { getMarketingContext } from "./utm";

type Props = {
  /** Where this form was rendered, e.g. "home-hero", "get-offer-page". */
  source?: string;
  /** Pre-fill ZIP / city when the form lives on a city or county landing page. */
  defaults?: Partial<LeadInput>;
  /** Compact layout (single column). */
  compact?: boolean;
};

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function LeadForm({ source = "lead-form", defaults, compact = false }: Props) {
  const [state, setState] = useState<SubmitState>({ kind: "idle" });
  const [turnstileToken, setTurnstileToken] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      propertyAddress: "",
      city: "",
      state: "RI",
      postalCode: "",
      propertyType: "single-family",
      condition: "not-sure",
      situation: "other",
      timeline: "just-curious",
      notes: "",
      website: "",
      consent: undefined as unknown as true,
      ...defaults,
    },
  });

  useEffect(() => {
    const ctx = getMarketingContext();
    setValue("source", source);
    if (ctx.pagePath) setValue("pagePath", ctx.pagePath);
    if (ctx.utm) setValue("utm", ctx.utm);
  }, [setValue, source]);

  const onSubmit = async (data: LeadInput) => {
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Something went wrong on our end.");
      }
      setState({ kind: "success" });
    } catch (err) {
      setState({
        kind: "error",
        message:
          err instanceof Error
            ? err.message
            : "We couldn't submit your information. Please try again or call us.",
      });
    }
  };

  if (state.kind === "success") {
    return (
      <div className="rounded-lg border border-amber/30 bg-paper p-6 text-center md:p-8">
        <CheckCircle2 className="mx-auto h-10 w-10 text-amber-deep" aria-hidden />
        <h3 className="mt-3 font-display text-2xl text-ink">Got it — thank you.</h3>
        <p className="mt-2 font-sans text-sm text-ink-muted">
          We&rsquo;ll review the details and call you within one business day, usually faster.
          If you&rsquo;d rather not wait, you can call us directly any time.
        </p>
      </div>
    );
  }

  const disabled = isSubmitting || state.kind === "submitting";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label="Request a cash offer"
    >
      {/* Honeypot — hidden from real users. */}
      <div aria-hidden className="sr-only">
        <label htmlFor="website-field">Website (leave blank)</label>
        <input
          id="website-field"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className={compact ? "space-y-4" : "grid gap-4 md:grid-cols-2"}>
        <Field label="First name" required error={errors.firstName?.message}>
          <Input autoComplete="given-name" {...register("firstName")} />
        </Field>
        <Field label="Last name" required error={errors.lastName?.message}>
          <Input autoComplete="family-name" {...register("lastName")} />
        </Field>
        <Field label="Email" required error={errors.email?.message}>
          <Input type="email" inputMode="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Phone" required error={errors.phone?.message}>
          <Input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(401) 555-0123"
            {...register("phone")}
          />
        </Field>
      </div>

      <div className="border-t border-rule/10 pt-5">
        <p className="font-display text-lg text-ink">About the property</p>
      </div>

      <Field label="Property address" required error={errors.propertyAddress?.message}>
        <Input autoComplete="street-address" {...register("propertyAddress")} />
      </Field>

      <div className="grid gap-4 md:grid-cols-3">
        <Field label="City" required error={errors.city?.message}>
          <Input autoComplete="address-level2" {...register("city")} />
        </Field>
        <Field label="State" required error={errors.state?.message}>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <Select {...field}>
                <option value="RI">Rhode Island</option>
                <option value="MA">Massachusetts</option>
              </Select>
            )}
          />
        </Field>
        <Field label="ZIP" required error={errors.postalCode?.message}>
          <Input
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={10}
            {...register("postalCode")}
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Property type" error={errors.propertyType?.message}>
          <Controller
            control={control}
            name="propertyType"
            render={({ field }) => (
              <Select {...field}>
                {PROPERTY_TYPES.map((p) => (
                  <option key={p} value={p}>
                    {PROPERTY_TYPE_LABELS[p]}
                  </option>
                ))}
              </Select>
            )}
          />
        </Field>
        <Field label="Condition" error={errors.condition?.message}>
          <Controller
            control={control}
            name="condition"
            render={({ field }) => (
              <Select {...field}>
                {CONDITIONS.map((c) => (
                  <option key={c} value={c}>
                    {CONDITION_LABELS[c]}
                  </option>
                ))}
              </Select>
            )}
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Bedrooms" error={errors.bedrooms?.message} hint="Optional">
          <Input type="number" inputMode="numeric" min={0} max={20} {...register("bedrooms")} />
        </Field>
        <Field label="Bathrooms" error={errors.bathrooms?.message} hint="Optional">
          <Input
            type="number"
            inputMode="decimal"
            min={0}
            max={20}
            step={0.5}
            {...register("bathrooms")}
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="What's going on?" error={errors.situation?.message}>
          <Controller
            control={control}
            name="situation"
            render={({ field }) => (
              <Select {...field}>
                {SITUATIONS.map((s) => (
                  <option key={s} value={s}>
                    {SITUATION_LABELS[s]}
                  </option>
                ))}
              </Select>
            )}
          />
        </Field>
        <Field label="When would you like to close?" error={errors.timeline?.message}>
          <Controller
            control={control}
            name="timeline"
            render={({ field }) => (
              <Select {...field}>
                {TIMELINES.map((t) => (
                  <option key={t} value={t}>
                    {TIMELINE_LABELS[t]}
                  </option>
                ))}
              </Select>
            )}
          />
        </Field>
      </div>

      <Field
        label="Anything else we should know?"
        hint="Tenants, repairs, liens, code issues — whatever you'd want a buyer to know."
        error={errors.notes?.message}
      >
        <Textarea rows={4} {...register("notes")} />
      </Field>

      <Turnstile onToken={setTurnstileToken} onExpire={() => setTurnstileToken(undefined)} />

      <Checkbox
        id="consent"
        label={
          <>
            I&rsquo;d like PorchLight to contact me about my property by phone, text, or email.
            We&rsquo;ll never share your information.
          </>
        }
        error={errors.consent?.message}
        {...register("consent")}
      />

      {state.kind === "error" ? (
        <p
          role="alert"
          className="rounded-md border border-red-500/30 bg-red-50 p-3 font-sans text-sm text-red-800"
        >
          {state.message}
        </p>
      ) : null}

      <button type="submit" className="btn-primary w-full md:w-auto" disabled={disabled}>
        {disabled ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
            Sending&hellip;
          </>
        ) : (
          <>
            Get my cash offer
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </>
        )}
      </button>

      <p className="font-sans text-xs text-ink-muted">
        Your information stays with us. By submitting you agree to our{" "}
        <a href="/privacy" className="underline hover:text-amber-deep">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

// Re-export FieldGroup for tree-shaking; not used in this form but downstream
// composition (city pages, etc.) may want it alongside.
export { FieldGroup };
