import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { whyCauseFusion } from "@/lib/content";

export function WhyGrid() {
  return (
    <Section tone="paper" id="why" ariaLabel="Why CauseFusion">
      <SectionHeading
        eyebrow="Why CauseFusion"
        title="A merchandise program without the risk or the workload."
        intro="We built CauseFusion around the real concerns nonprofit teams raise — budget, capacity, brand safety, and operational complexity."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyCauseFusion.map((card, i) => (
          <div
            key={card.title}
            className={[
              "group flex flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/8 transition-shadow hover:shadow-card",
              // Make the first card span wider on large screens for rhythm
              i === 0 ? "lg:row-span-1" : "",
            ].join(" ")}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Icon name={card.icon} />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {card.body}
            </p>
          </div>
        ))}

        {/* Emphasis card */}
        <div className="flex flex-col justify-center rounded-3xl bg-ink p-7 text-white ring-1 ring-ink">
          <p className="text-sm font-medium text-brand-200">The bottom line</p>
          <p className="mt-2 text-lg font-semibold leading-snug">
            You focus on the mission. CauseFusion runs the merchandise program
            behind it.
          </p>
        </div>
      </div>
    </Section>
  );
}
