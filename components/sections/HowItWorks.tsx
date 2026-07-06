import { SectionHeading } from "@/components/ui/Section";
import { Button, ArrowRight } from "@/components/ui/Button";
import { StorefrontPreview } from "@/components/mockups/StorefrontPreview";
import {
  CheckoutCard,
  TrackingCard,
  RevenueShareVisual,
} from "@/components/mockups/OpsCards";
import { MerchArt } from "@/components/mockups/MerchArt";
import { howItWorksSteps } from "@/lib/content";
import { cta } from "@/lib/site";

/** Visual paired with each step. */
const stepVisuals = [
  // 01 — We design it.
  <div
    key="design"
    className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-ink/8"
  >
    {(["tee", "tote", "cap", "bottle"] as const).map((k, i) => (
      <div
        key={k}
        className={[
          "aspect-square overflow-hidden rounded-xl ring-1 ring-ink/8",
          ["bg-brand-50", "bg-accent-50", "bg-paper-soft", "bg-paper-deep"][i],
        ].join(" ")}
      >
        <MerchArt kind={k} className="h-full w-full" />
      </div>
    ))}
  </div>,
  // 02 — We build your store.
  <StorefrontPreview key="store" />,
  // 03 — We handle the payments.
  <CheckoutCard key="pay" />,
  // 04 — We pack and ship.
  <TrackingCard key="ship" />,
  // 05 — You earn.
  <RevenueShareVisual key="earn" />,
];

export function HowItWorks({
  showCta = true,
  tone = "white",
}: {
  showCta?: boolean;
  tone?: "white" | "paper";
}) {
  return (
    <section
      className={tone === "white" ? "bg-white py-20 sm:py-28" : "bg-paper py-20 sm:py-28"}
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title="One partner. The whole program."
          intro="You have a mission and an audience. CauseFusion provides everything else it takes to turn that into merchandise that sells — and revenue that flows back to your cause."
        />

        <div className="mt-14 space-y-6">
          {howItWorksSteps.map((step, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={step.n}
                className="grid items-center gap-6 rounded-4xl bg-paper-soft/60 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12"
              >
                {/* Copy */}
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                      {step.n}
                    </span>
                    <span className="h-px flex-1 bg-ink/10" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-ink-muted">{step.body}</p>
                </div>

                {/* Visual */}
                <div className={flip ? "lg:order-1" : ""}>{stepVisuals[i]}</div>
              </div>
            );
          })}
        </div>

        {showCta ? (
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={cta.primary.href} variant="primary" size="lg">
              {cta.primary.label}
              <ArrowRight />
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg">
              See the full pipeline
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
