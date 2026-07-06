import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyGrid } from "@/components/sections/WhyGrid";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { RevenueShare } from "@/components/sections/RevenueShare";
import { Testimonial } from "@/components/sections/Testimonial";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Faq } from "@/components/sections/Faq";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "CauseFusion | Merchandise Programs for Nonprofits",
  description:
    "CauseFusion helps nonprofits launch and operate branded merchandise programs with custom products, storefronts, payments, fulfillment, and shared-revenue partnership — with no upfront cost to start.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <HowItWorks />
      <ServicesOverview />
      <WhyGrid />
      <ProductShowcase />
      <RevenueShare />
      <Testimonial />

      <Section tone="white" ariaLabel="Frequently asked questions">
        <SectionHeading
          align="center"
          eyebrow="Questions"
          title="The essentials, answered."
          className="mx-auto"
        />
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
