import { MerchArt, type MerchKind } from "./MerchArt";
import { cn } from "@/lib/cn";

/**
 * Browser-chrome storefront preview — a branded shop for "your cause".
 */

const shopItems: { name: string; price: string; kind: MerchKind; bg: string }[] = [
  { name: "Campaign Tee", price: "$28", kind: "tee", bg: "bg-brand-50" },
  { name: "Canvas Tote", price: "$22", kind: "tote", bg: "bg-accent-50" },
  { name: "Supporter Cap", price: "$24", kind: "cap", bg: "bg-paper-soft" },
  { name: "Steel Bottle", price: "$26", kind: "bottle", bg: "bg-brand-50" },
];

export function StorefrontPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-ink/8",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-ink/8 bg-paper-soft px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-ink/15" />
        <span className="h-3 w-3 rounded-full bg-ink/15" />
        <span className="h-3 w-3 rounded-full bg-ink/15" />
        <div className="ml-3 flex flex-1 items-center gap-2 truncate rounded-md bg-white px-3 py-1.5 text-xs text-ink-muted ring-1 ring-ink/8">
          <svg viewBox="0 0 16 16" className="h-3 w-3 flex-shrink-0" aria-hidden="true">
            <path
              d="M11 7V5a3 3 0 1 0-6 0v2M4 7h8v6H4z"
              className="stroke-brand-500"
              strokeWidth="1.3"
              fill="none"
            />
          </svg>
          <span className="truncate">shop.yourcause.org</span>
        </div>
      </div>

      {/* Store header */}
      <div className="flex items-center justify-between border-b border-ink/8 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-500 text-[10px] font-bold text-white">
            YC
          </span>
          <span className="text-sm font-semibold text-ink">Your Cause Shop</span>
        </div>
        <div className="flex items-center gap-3 text-ink-muted">
          <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
            <circle cx="9" cy="9" r="6" className="stroke-current" strokeWidth="1.5" fill="none" />
            <path d="m14 14 3 3" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="relative">
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path
                d="M4 6h12l-1.2 8.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 6Zm3 0a3 3 0 0 1 6 0"
                className="stroke-current"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent-500 text-[8px] font-bold text-white">
              3
            </span>
          </span>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-3 p-4">
        {shopItems.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-xl ring-1 ring-ink/8"
          >
            <div className={cn("aspect-[4/3]", item.bg)}>
              <MerchArt kind={item.kind} className="h-full w-full" />
            </div>
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs font-medium text-ink">{item.name}</span>
              <span className="text-xs font-semibold text-brand-600">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
