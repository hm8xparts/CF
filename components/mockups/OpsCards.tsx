import { cn } from "@/lib/cn";

/* ── Small shared bits ──────────────────────────────────────────────────── */

function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={cn("h-4 w-4", className)} aria-hidden="true">
      <path
        d="m5 10.5 3.2 3.2L15 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardShell({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink/8",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ── Checkout snippet ───────────────────────────────────────────────────── */

export function CheckoutCard({ className }: { className?: string }) {
  return (
    <CardShell
      className={className}
      label="Secure checkout with itemized order summary and total"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-ink">Checkout</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
          <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden="true">
            <path
              d="M11 7V5a3 3 0 1 0-6 0v2M4 7h8v6H4z"
              className="stroke-current"
              strokeWidth="1.3"
              fill="none"
            />
          </svg>
          Secure
        </span>
      </div>

      <div className="mt-4 space-y-2.5 text-sm">
        <div className="flex items-center justify-between text-ink-soft">
          <span>Signature Campaign Tee &times;2</span>
          <span className="font-medium text-ink">$56.00</span>
        </div>
        <div className="flex items-center justify-between text-ink-soft">
          <span>Everyday Canvas Tote</span>
          <span className="font-medium text-ink">$22.00</span>
        </div>
        <div className="flex items-center justify-between text-ink-soft">
          <span>Shipping</span>
          <span className="font-medium text-brand-600">Free</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-ink/8 pt-4">
        <span className="text-sm font-semibold text-ink">Total</span>
        <span className="text-lg font-bold text-ink">$78.00</span>
      </div>

      {/* Fake pay field */}
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-paper-soft px-3 py-2.5 ring-1 ring-ink/8">
        <span className="inline-flex h-5 w-8 items-center justify-center rounded bg-ink text-[9px] font-bold text-white">
          CARD
        </span>
        <span className="text-sm text-ink-muted">&bull;&bull;&bull;&bull; 4242</span>
        <span className="ml-auto text-xs text-ink-muted">12 / 28</span>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand-500 py-2.5 text-sm font-semibold text-white">
        Pay $78.00
      </div>
    </CardShell>
  );
}

/* ── Order confirmation module ──────────────────────────────────────────── */

export function OrderConfirmation({ className }: { className?: string }) {
  return (
    <CardShell className={className} label="Order confirmed notification">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
          <Check />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">Order confirmed</p>
          <p className="text-xs text-ink-muted">
            Order #CF-20841 &middot; A receipt is on its way
          </p>
        </div>
        <span className="ml-auto text-sm font-bold text-ink">$78.00</span>
      </div>

      <div className="mt-4 rounded-xl bg-paper-soft p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-ink-muted">Estimated delivery</span>
          <span className="font-semibold text-ink">Jul 12 &ndash; 15</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-ink-muted">Supporter</span>
          <span className="font-medium text-ink">A. Rivera</span>
        </div>
      </div>
    </CardShell>
  );
}

/* ── Shipment tracking card ─────────────────────────────────────────────── */

export function TrackingCard({ className }: { className?: string }) {
  const steps = [
    { label: "Ordered", done: true },
    { label: "Packed", done: true },
    { label: "Shipped", done: true },
    { label: "Delivered", done: false },
  ];
  return (
    <CardShell className={className} label="Shipment tracking status card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">In transit</p>
          <p className="text-xs text-ink-muted">Tracking &middot; 1Z-CF-88213</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-1 text-[11px] font-medium text-accent-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" />
          On the way
        </span>
      </div>

      {/* Progress rail */}
      <div className="mt-6">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-0 right-0 top-1.5 h-0.5 bg-ink/10" />
          <div className="absolute left-0 top-1.5 h-0.5 w-2/3 bg-brand-500" />
          {steps.map((s) => (
            <div key={s.label} className="relative flex flex-col items-center gap-2">
              <span
                className={cn(
                  "h-3.5 w-3.5 rounded-full ring-2 ring-white",
                  s.done ? "bg-brand-500" : "bg-ink/20"
                )}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between">
          {steps.map((s) => (
            <span
              key={s.label}
              className={cn(
                "text-[11px]",
                s.done ? "font-medium text-ink" : "text-ink-muted"
              )}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

/* ── Fulfillment timeline ───────────────────────────────────────────────── */

export function FulfillmentTimeline({ className }: { className?: string }) {
  const events = [
    { time: "9:02a", label: "Order received", detail: "Payment captured", done: true },
    { time: "11:40a", label: "Picked & packed", detail: "Warehouse — Bay 4", done: true },
    { time: "2:15p", label: "Label created", detail: "Carrier handoff", done: true },
    { time: "Est.", label: "Out for delivery", detail: "Supporter notified", done: false },
  ];
  return (
    <CardShell className={className} label="Fulfillment timeline of an order">
      <p className="text-sm font-semibold text-ink">Fulfillment timeline</p>
      <ol className="mt-4 space-y-4">
        {events.map((e, i) => (
          <li key={e.label} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full text-white",
                  e.done ? "bg-brand-500" : "bg-ink/15"
                )}
              >
                {e.done ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
              {i < events.length - 1 ? (
                <span
                  className={cn(
                    "mt-1 w-0.5 flex-1",
                    e.done ? "bg-brand-200" : "bg-ink/10"
                  )}
                />
              ) : null}
            </div>
            <div className="pb-1">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-ink">{e.label}</span>
                <span className="text-[11px] text-ink-muted">{e.time}</span>
              </div>
              <p className="text-xs text-ink-muted">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </CardShell>
  );
}

/* ── Revenue-share visual ───────────────────────────────────────────────── */

export function RevenueShareVisual({ className }: { className?: string }) {
  const bars = [40, 55, 48, 72, 66, 88];
  return (
    <CardShell
      className={className}
      label="Revenue share dashboard showing funds flowing back to the cause"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Revenue to your mission</p>
          <p className="text-xs text-ink-muted">Last 6 campaigns</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
          <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden="true">
            <path d="M3 11l4-4 3 3 4-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Trending up
        </span>
      </div>

      {/* Chart */}
      <div className="mt-5 flex h-24 items-end gap-2" aria-hidden="true">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col justify-end">
            <div
              className={cn(
                "rounded-t-md",
                i === bars.length - 1 ? "bg-brand-500" : "bg-brand-200"
              )}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-paper-soft p-3">
          <p className="text-[11px] text-ink-muted">Your share this period</p>
          <p className="mt-0.5 text-lg font-bold text-ink">
            $
            <span className="tabular-nums">—</span>
            <span className="ml-1 align-middle text-[10px] font-medium text-ink-muted">
              placeholder
            </span>
          </p>
        </div>
        <div className="rounded-xl bg-paper-soft p-3">
          <p className="text-[11px] text-ink-muted">Orders fulfilled</p>
          <p className="mt-0.5 text-lg font-bold text-ink tabular-nums">1,204</p>
        </div>
      </div>
    </CardShell>
  );
}
