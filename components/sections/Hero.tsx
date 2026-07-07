import { Button, ArrowRight } from "@/components/ui/Button";
import { StorefrontPreview } from "@/components/mockups/StorefrontPreview";
import { OrderConfirmation, TrackingCard } from "@/components/mockups/OpsCards";
import { cta } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              No upfront cost to start
            </span>

            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              The merchandise partner built for nonprofits.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Custom products, branded storefronts, seamless checkout, and
              dependable fulfillment — handled end to end, with no upfront cost to
              start.
            </p>
            <p className="mt-4 text-lg font-medium text-ink">
              You champion the cause. We make the merch work.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={cta.primary.href} variant="primary" size="lg">
                {cta.primary.label}
                <ArrowRight />
              </Button>
              <Button href={cta.secondary.href} variant="secondary" size="lg">
                {cta.secondary.label}
              </Button>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {[
                { k: "End to end", v: "One partner, whole program" },
                { k: "$0", v: "Upfront to start" },
                { k: "Shared", v: "Revenue back to your cause" },
              ].map((stat) => (
                <div key={stat.k}>
                  <dt className="text-xl font-bold text-ink">{stat.k}</dt>
                  <dd className="mt-1 text-xs leading-snug text-ink-muted">
                    {stat.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual cluster */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <StorefrontPreview className="relative z-10" />

              {/* Floating order confirmation */}
              <div className="absolute -left-6 -top-6 z-20 w-56 rotate-[-4deg] sm:-left-10 lg:-left-14">
                <div className="animate-float">
                  <OrderConfirmation className="p-4 shadow-lift" />
                </div>
              </div>

              {/* Floating tracking card */}
              <div className="absolute -bottom-8 -right-4 z-20 w-64 rotate-[3deg] sm:-right-8 lg:-right-12">
                <div
                  className="animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <TrackingCard className="p-4 shadow-lift" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
