import { RevenueShareVisual } from "@/components/mockups/OpsCards";
import { Icon } from "@/components/ui/Icon";

export function RevenueShare({ tone = "ink" }: { tone?: "ink" | "brand" }) {
  const bg = tone === "ink" ? "bg-ink" : "bg-brand-800";
  return (
    <section className={`${bg} py-20 text-white sm:py-28`}>
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-brand-200">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent-400"
                aria-hidden="true"
              />
              The model
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              A shared-revenue partnership, not another vendor invoice.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              CauseFusion works on a shared-revenue model. That means we help
              create, launch, operate, and fulfill the merchandise program
              without requiring upfront payment to start. As merchandise sells,
              revenue is shared between CauseFusion and the nonprofit.
            </p>
            <p className="mt-4 text-white/70">
              The nonprofit gets a professionally run merchandise program without
              taking on inventory risk, operational complexity, or additional
              staff burden.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "No upfront cost to start",
                "No inventory risk carried by your team",
                "Revenue that flows back to your mission",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-white/85">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-white/45">
              Exact revenue-share terms are discussed during the partnership
              process. We don&rsquo;t publish specific percentages here.
            </p>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-6 rounded-4xl bg-brand-500/20 blur-3xl"
              aria-hidden="true"
            />
            <RevenueShareVisual className="relative" />
          </div>
        </div>
      </div>
    </section>
  );
}
