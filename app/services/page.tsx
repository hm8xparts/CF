import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ProductGrid } from "@/components/mockups/ProductGrid";
import { StorefrontPreview } from "@/components/mockups/StorefrontPreview";
import {
  CheckoutCard,
  FulfillmentTimeline,
  TrackingCard,
  RevenueShareVisual,
} from "@/components/mockups/OpsCards";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "CauseFusion Services | Merchandise, Storefronts, Payments & Fulfillment",
  description:
    "The full operating capability: bespoke merchandise creation, branded storefronts and payment processing, strategic market expansion, and precision logistics — handled end to end.",
  alternates: { canonical: "/services" },
};

const icons: IconName[] = ["sparkles", "store", "target", "truck"];

// Visual paired with each service.
const visuals = [
  <ProductGrid key="v0" columns="grid-cols-2" />,
  <div key="v1" className="space-y-4">
    <StorefrontPreview />
    <CheckoutCard />
  </div>,
  <div key="v2" className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink/8">
    <p className="text-sm font-semibold text-ink">Campaign launch plan</p>
    <div className="mt-4 space-y-3">
      {[
        { label: "Spring supporter drop", meta: "Product + email + social" },
        { label: "Event-day collection", meta: "Limited run" },
        { label: "Segment: recurring donors", meta: "Targeted outreach" },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between rounded-xl bg-paper-soft px-4 py-3"
        >
          <div>
            <p className="text-sm font-medium text-ink">{row.label}</p>
            <p className="text-xs text-ink-muted">{row.meta}</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
            Planned
          </span>
        </div>
      ))}
    </div>
    <div className="mt-5 grid grid-cols-3 gap-3">
      <RevenueShareVisual className="col-span-3 p-4" />
    </div>
  </div>,
  <div key="v3" className="space-y-4">
    <FulfillmentTimeline />
    <TrackingCard />
  </div>,
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The full operating capability, under one roof."
        intro="CauseFusion isn't a product vendor. We run every layer of the merchandise program — from the first design to the package on a supporter's doorstep — so nothing lands back on your team's plate."
      />

      {services.map((service, i) => {
        const flip = i % 2 === 1;
        return (
          <Section
            key={service.id}
            id={service.id}
            tone={i % 2 === 0 ? "white" : "soft"}
            ariaLabel={service.title}
          >
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Copy */}
              <div className={flip ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-glow">
                    <Icon name={icons[i]} />
                  </span>
                  <span className="text-sm font-semibold text-ink/30">
                    {service.index}
                  </span>
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg font-medium text-ink-soft">
                  {service.summary}
                </p>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  {service.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-ink-soft">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={flip ? "lg:order-1" : ""}>{visuals[i]}</div>
            </div>
          </Section>
        );
      })}

      <CtaBlock
        eyebrow="Start a partnership"
        title="Want the whole program handled? Let's talk."
      />
    </>
  );
}
