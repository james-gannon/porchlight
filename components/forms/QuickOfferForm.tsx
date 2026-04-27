"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { quickOfferSchema, type QuickOfferInput } from "@/lib/leadSchema";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Turnstile } from "./Turnstile";
import { getMarketingContext } from "./utm";

type Props = {
  source?: string;
  /** Visual variant — `card` for hero, `inline` for sticky bar/CTA bands. */
  variant?: "card" | "inline";
};

export function QuickOfferForm({ source = "quick-offer", variant = "card" }: Props) {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>();
  const [turnstileToken, setTurnstileToken] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuickOfferInput>({
    resolver: zodResolver(quickOfferSchema),
    mode: "onBlur",
    defaultValues: {
      propertyAddress: "",
      phone: "",
      firstName: "",
      website: "",
    },
  });

  useEffect(() => {
    const ctx = getMarketingContext();
    setValue("source", source);
    if (ctx.pagePath) setValue("pagePath", ctx.pagePath);
  }, [setValue, source]);

  const onSubmit = async (data: QuickOfferInput) => {
    setError(undefined);
    try {
      const res = await fetch("/api/lead?type=quick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Something went wrong on our end.");
      }
      router.push("/thank-you");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "We couldn't submit your information. Please try again or call us.",
      );
    }
  };

  const inline = variant === "inline";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Get a quick cash offer"
      className={inline ? "flex w-full flex-col gap-2 sm:flex-row" : "space-y-3"}
    >
      <div aria-hidden className="sr-only">
        <label htmlFor="qo-website-field">Website (leave blank)</label>
        <input id="qo-website-field" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {!inline ? (
        <Field label="Property address" required error={errors.propertyAddress?.message}>
          <Input
            autoComplete="street-address"
            placeholder="123 Main St, Providence, RI"
            {...register("propertyAddress")}
          />
        </Field>
      ) : (
        <Input
          aria-label="Property address"
          autoComplete="street-address"
          placeholder="Property address"
          invalid={Boolean(errors.propertyAddress)}
          className="flex-1"
          {...register("propertyAddress")}
        />
      )}

      {!inline ? (
        <Field label="Phone" required error={errors.phone?.message}>
          <Input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(401) 555-0123"
            {...register("phone")}
          />
        </Field>
      ) : (
        <Input
          aria-label="Phone number"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Phone"
          invalid={Boolean(errors.phone)}
          className="sm:max-w-[180px]"
          {...register("phone")}
        />
      )}

      {!inline ? <Turnstile onToken={setTurnstileToken} /> : null}

      <button
        type="submit"
        className={`btn-primary ${inline ? "shrink-0" : "w-full"}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
            Sending&hellip;
          </>
        ) : (
          <>
            Get my offer
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </>
        )}
      </button>

      {error ? (
        <p
          role="alert"
          className={
            inline
              ? "w-full font-sans text-xs font-medium text-red-700"
              : "rounded-md border border-red-500/30 bg-red-50 p-3 font-sans text-sm text-red-800"
          }
        >
          {error}
        </p>
      ) : null}

      {!inline ? (
        <p className="font-sans text-xs text-ink-muted">
          No obligation, no spam. We&rsquo;ll call you to learn more before sending an offer.
        </p>
      ) : null}
    </form>
  );
}
