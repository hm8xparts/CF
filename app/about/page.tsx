import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RevenueShare } from "@/components/sections/RevenueShare";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "About CauseFusion | End-to-End Nonprofit Merchandise Partner",
  description:
    "CauseFusion exists to help nonprofits turn their mission and audience into a professionally run merchandise program — without upfront cost, operational burden, or added staff.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "shield" as const,
    title: "Brand before product",
    body: "Every product and storefront is built to protect and reflect the organization's reputation — never to dilute it.",
  },
  {
    icon: "team" as const,
    title: "Respect for capacity",
    body: "We assume small teams and full plates. The program should add revenue, not another job to manage.",
  },
  {
    icon: "handshake" as const,
    title: "Aligned incentives",
    body: "We only do well when the program does well. Shared revenue keeps us pulling in the same direction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CauseFusion"
        title="Merchandise, run like an operating partner — for the causes that need it."
        intro="CauseFusion helps nonprofits turn their mission, audience, and brand into a professionally run merchandise program. We run the whole thing — design, storefront, payments, fulfillment, and support — so your team can stay focused on the work only you can do."
      />

      {/* Mission */}
      <Section tone="white" ariaLabel="Our mission">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Mission"
            title="Turn good causes into great merchandise programs."
          />
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Nonprofits sit on something most brands would pay dearly for: a
              real mission and an audience that genuinely cares. Merchandise is
              one of the most natural ways to turn that connection into funding,
              visibility, and deeper engagement.
            </p>
            <p>
              But doing it well takes product design, a storefront, payment
              processing, warehousing, fulfillment, customer support, and
              returns — an entire operation most mission-driven teams have
              neither the time nor the headcount to run.
            </p>
            <p className="font-medium text-ink">
              CauseFusion exists to be that operation. You focus on the mission.
              We run the merchandise program behind it.
            </p>
          </div>
        </div>
      </Section>

      {/* Why we exist */}
      <Section tone="soft" ariaLabel="Why CauseFusion exists">
        <SectionHeading
          eyebrow="Why we exist"
          title="Great causes shouldn't need a merchandise department."
          intro="Too often, a merchandise program means upfront costs, vendor juggling, inventory risk, and a supporter experience the nonprofit can't fully control. We built CauseFusion to remove every one of those barriers."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl bg-white p-7 ring-1 ring-ink/8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon name={v.icon} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Shared-revenue philosophy */}
      <RevenueShare tone="ink" />

      {/* Team placeholder */}
      <Section tone="white" ariaLabel="Our team">
        <SectionHeading
          align="center"
          eyebrow="The team"
          title="Operators, designers, and logistics people."
          intro="CauseFusion brings together product design, e-commerce, and fulfillment experience — the people who quietly run the merchandise engine behind your cause."
          className="mx-auto"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl bg-paper-soft p-5 ring-1 ring-ink/8"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-100 to-paper-deep" />
              <div className="mt-4 h-4 w-24 rounded bg-ink/10" />
              <div className="mt-2 h-3 w-32 rounded bg-ink/8" />
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm italic text-ink-muted">
          Team bios and photos are placeholders &mdash; to be added.
        </p>
      </Section>

      <CtaBlock
        eyebrow="Start a partnership"
        title="Let's talk about what merchandise could do for your cause."
      />
    </>
  );
}
