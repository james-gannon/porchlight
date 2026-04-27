import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

type Props = {
  heading?: string;
  body?: string;
};

export function CtaBand({
  heading = "Ready to see your number?",
  body = "Two minutes online, or call us — whatever's easier. Either way, no pressure.",
}: Props) {
  return (
    <section aria-label="Get a cash offer" className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-amber-deep/15 via-transparent to-amber/10"
      />
      <Container className="relative grid items-center gap-6 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-7">
          <h2 className="text-paper">{heading}</h2>
          <p className="mt-3 max-w-xl font-sans text-base text-paper/80">{body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
          <Link href="/get-offer" className="btn-primary">
            Get my cash offer
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
          <a
            href={`tel:${site.phone.web}`}
            className="inline-flex items-center justify-center rounded-md border border-paper/20 px-5 py-3 font-sans font-medium text-paper transition-colors hover:bg-paper/10"
          >
            <Phone className="mr-2 h-4 w-4 text-amber" aria-hidden />
            Call {site.phone.web}
          </a>
        </div>
      </Container>
    </section>
  );
}
