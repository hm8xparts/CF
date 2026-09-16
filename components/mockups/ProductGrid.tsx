import { MerchArt, type MerchKind } from "./MerchArt";
import { cn } from "@/lib/cn";

export type Product = {
  name: string;
  price: string;
  tag?: string;
  kind: MerchKind;
  bg?: string;
};

export const sampleProducts: Product[] = [
  { name: "Signature Campaign Tee", price: "$28", tag: "Bestseller", kind: "tee", bg: "bg-brand-50" },
  { name: "Everyday Canvas Tote", price: "$22", kind: "tote", bg: "bg-accent-50" },
  { name: "Supporter Hoodie", price: "$52", tag: "New", kind: "hoodie", bg: "bg-paper-soft" },
  { name: "Insulated Bottle", price: "$26", kind: "bottle", bg: "bg-brand-50" },
  { name: "Embroidered Cap", price: "$24", kind: "cap", bg: "bg-paper-deep" },
  { name: "Ceramic Mug", price: "$18", kind: "mug", bg: "bg-accent-50" },
];

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8 transition-shadow hover:shadow-card">
      <div
        className={cn(
          "relative aspect-square",
          product.bg ?? "bg-paper-soft"
        )}
      >
        {product.tag ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-2.5 py-1 text-[11px] font-semibold text-white">
            {product.tag}
          </span>
        ) : null}
        <MerchArt kind={product.kind} className="h-full w-full" />
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">{product.name}</p>
          <p className="text-xs text-ink-muted">Your Cause Collection</p>
        </div>
        <span className="flex-shrink-0 text-sm font-semibold text-ink">
          {product.price}
        </span>
      </div>
    </div>
  );
}

export function ProductGrid({
  products = sampleProducts,
  className,
  columns = "sm:grid-cols-3",
}: {
  products?: Product[];
  className?: string;
  columns?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", columns, className)}>
      {products.map((p) => (
        <ProductCard key={p.name} product={p} />
      ))}
    </div>
  );
}
