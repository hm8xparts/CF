import { Section, SectionHeading } from "@/components/ui/Section";
import { ProductGrid } from "@/components/mockups/ProductGrid";

export function ProductShowcase() {
  return (
    <Section tone="soft" ariaLabel="Example merchandise and storefront visuals">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Example collection"
          title="Merchandise supporters actually want to carry."
          intro="A sample of the kind of branded collection CauseFusion builds — designed around a cause, not stamped onto a blank."
        />
        <p className="text-sm italic text-ink-muted lg:pb-2">
          Sample product mockups &mdash; not real products.
        </p>
      </div>

      <div className="mt-12">
        <ProductGrid columns="sm:grid-cols-3 lg:grid-cols-6" />
      </div>
    </Section>
  );
}
