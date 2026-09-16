import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RevenueShare } from "@/components/sections/RevenueShare";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { Icon, type IconName } from "@/components/ui/Icon";
import { responsibilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "How CauseFusion Works | No-Upfront-Cost Merchandise Programs",
  description:
    "See the full pipeline: we design the merchandise, build the storefront, process payments, pack and ship every order, and share revenue back to your mission — with no upfront cost to start.",
  alternates: { canonical: "/how-it-works" },
};

const pipeline: { icon: IconName; label: string }[] = [
  { icon: "sparkles", label: "Design" },
  { icon: "store", label: "Storefront" },
  { icon: "card", label: "Payments" },
  { icon: "truck", label: "Fulfillment" },
  { icon: "chart", label: "Revenue share" },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="One partner. The whole program."
        intro="You have a mission and an audience. CauseFusion provides everything else it takes to turn that into merchandise that sells — and revenue that flows back to your cause."
      >
        {/* Pipeline overview strip */}
        <div className="mt-14 rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink/8 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            The full pipeline
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            {pipeline.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-4 sm:flex-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Icon name={stage.icon} />
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {stage.label}
                  </span>
                </div>
                {i < pipeline.length - 1 ? (
                  <span
                    className="hidden h-px flex-1 bg-ink/10 sm:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      {/* Step-by-step process (reused rich section, no duplicate heading CTA) */}
      <HowItWorks showCta={false} tone="white" />

      {/* Revenue-share explanation */}
      <RevenueShare tone="ink" />

      {/* Who handles what */}
      <Section tone="soft" ariaLabel="What each partner handles">
        <SectionHeading
          eyebrow="Clear division of labor"
          title="What you handle vs. what CauseFusion handles."
          intro="The split is simple: you bring the mission and the audience. We bring the merchandise operation."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Nonprofit */}
          <div className="rounded-3xl bg-white p-7 ring-1 ring-ink/8 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                <Icon name="target" className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-ink">Your team</h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {responsibilities.nonprofit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CauseFusion */}
          <div className="rounded-3xl bg-ink p-7 text-white sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">
                <Icon name="loop" className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">CauseFusion</h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {responsibilities.causefusion.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBlock
        eyebrow="See it for your cause"
        title="Curious how this maps to your organization?"
        body="Book a short intro call. We'll walk through what a CauseFusion program could look like for your audience, your brand, and your goals."
      />
    </>
  );
}
