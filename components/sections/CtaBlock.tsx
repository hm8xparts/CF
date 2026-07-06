import { Button, ArrowRight } from "@/components/ui/Button";
import { cta as ctaConfig } from "@/lib/site";

/**
 * Reusable closing CTA section. Used at the bottom of most pages.
 */
export function CtaBlock({
  eyebrow = "Start a partnership",
  title = "You focus on the mission. We run the merchandise program behind it.",
  body = "Book a short intro call and we'll walk you through how a CauseFusion program could work for your organization — the products, the storefront, and the shared-revenue model.",
  primary = ctaConfig.primary,
  secondary = ctaConfig.secondary,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-4xl bg-brand-700 px-6 py-16 text-center shadow-lift sm:px-16 sm:py-20">
          {/* Decorative background */}
          <div
            className="pointer-events-none absolute inset-0 bg-grid-light opacity-40"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-400/25 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow text-brand-200">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent-400"
                aria-hidden="true"
              />
              {eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">{body}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primary.href} variant="primary" size="lg">
                {primary.label}
                <ArrowRight />
              </Button>
              {secondary ? (
                <Button href={secondary.href} variant="light" size="lg">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
            <p className="mt-6 text-sm text-white/50">
              No upfront cost to start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
