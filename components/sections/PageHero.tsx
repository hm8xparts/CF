import type { ReactNode } from "react";
import { Button, ArrowRight } from "@/components/ui/Button";
import { cta as ctaConfig } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  showCtas = true,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  showCtas?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-52 h-[30rem] w-[30rem] rounded-full bg-brand-200/35 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent-400"
              aria-hidden="true"
            />
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{intro}</p>

          {showCtas ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={ctaConfig.primary.href} variant="primary" size="lg">
                {ctaConfig.primary.label}
                <ArrowRight />
              </Button>
              <Button
                href={ctaConfig.secondary.href}
                variant="secondary"
                size="lg"
              >
                {ctaConfig.secondary.label}
              </Button>
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
