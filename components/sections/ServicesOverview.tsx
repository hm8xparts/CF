import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ArrowRight } from "@/components/ui/Button";
import { services } from "@/lib/content";

const icons: IconName[] = ["sparkles", "store", "target", "truck"];

export function ServicesOverview() {
  return (
    <Section tone="white" id="services" ariaLabel="Services overview">
      <SectionHeading
        eyebrow="Services"
        title="The full operating capability, under one roof."
        intro="From the first product sketch to the package on a supporter's doorstep, CauseFusion runs every layer of the merchandise program."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service, i) => (
          <Link
            key={service.id}
            href={`/services#${service.id}`}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-paper-soft/70 p-7 ring-1 ring-ink/8 transition-all hover:-translate-y-1 hover:shadow-card sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-glow">
                <Icon name={icons[i]} />
              </span>
              <span className="text-sm font-semibold text-ink/30">
                {service.index}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-ink">
              {service.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
              {service.summary}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
              Learn more
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
