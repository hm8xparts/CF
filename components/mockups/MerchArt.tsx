import { cn } from "@/lib/cn";

/**
 * Clean SVG line-art merchandise, used inside product cards and grids.
 * Placeholder product artwork — swap for real product photography at launch.
 */

type MerchKind = "tee" | "hoodie" | "tote" | "cap" | "bottle" | "mug";

function Tee() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <path
        d="M42 30 32 38l-14 10 8 14 8-5v40h52V57l8 5 8-14-14-10-10-8c-4 5-8 7-14 7s-10-2-14-7Z"
        className="fill-white stroke-ink/25"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="62" r="10" className="fill-brand-100" />
      <circle cx="60" cy="62" r="4.5" className="fill-brand-500" />
    </svg>
  );
}

function Hoodie() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <path
        d="M44 28 30 40 16 52l9 14 9-6v42h52V60l9 6 9-14-14-12-14-12c-3 7-8 10-16 10s-13-3-16-10Z"
        className="fill-white stroke-ink/25"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M46 30c2 8 6 12 14 12s12-4 14-12"
        className="fill-none stroke-ink/25"
        strokeWidth="2.2"
      />
      <line x1="56" y1="52" x2="56" y2="86" className="stroke-ink/15" strokeWidth="2" />
      <line x1="64" y1="52" x2="64" y2="86" className="stroke-ink/15" strokeWidth="2" />
      <rect x="46" y="72" width="28" height="12" rx="4" className="fill-brand-100" />
    </svg>
  );
}

function Tote() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <path
        d="M36 44h48v54a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V44Z"
        className="fill-white stroke-ink/25"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M48 44V34a12 12 0 0 1 24 0v10"
        className="fill-none stroke-ink/30"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="60" cy="72" r="12" className="fill-accent-100" />
      <path
        d="M54 72h12M60 66v12"
        className="stroke-accent-500"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Cap() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <path
        d="M24 74c0-24 16-38 36-38s36 14 36 30c0 4-2 6-6 6H60"
        className="fill-white stroke-ink/25"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M24 74c0 6 20 8 36 8"
        className="fill-white stroke-ink/25"
        strokeWidth="2.2"
      />
      <path
        d="M60 82c-20 0-36-2-36-8l-8 2c-4 1-4 8 2 9 12 2 28 3 42 3"
        className="fill-brand-100 stroke-ink/20"
        strokeWidth="2"
      />
      <circle cx="66" cy="52" r="7" className="fill-brand-500" />
    </svg>
  );
}

function Bottle() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <rect x="52" y="20" width="16" height="10" rx="2" className="fill-ink/70" />
      <path
        d="M50 30h20v8c6 4 8 10 8 18v40a6 6 0 0 1-6 6H48a6 6 0 0 1-6-6V56c0-8 2-14 8-18v-8Z"
        className="fill-white stroke-ink/25"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <rect x="42" y="60" width="36" height="22" className="fill-brand-500/90" />
      <circle cx="60" cy="71" r="6" className="fill-white" />
    </svg>
  );
}

function Mug() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <rect
        x="34"
        y="40"
        width="44"
        height="46"
        rx="6"
        className="fill-white stroke-ink/25"
        strokeWidth="2.2"
      />
      <path
        d="M78 50h8a12 12 0 0 1 0 24h-8"
        className="fill-none stroke-ink/25"
        strokeWidth="2.4"
      />
      <circle cx="56" cy="63" r="11" className="fill-accent-100" />
      <path
        d="M56 55v16M48 63h16"
        className="stroke-accent-500"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const registry: Record<MerchKind, () => React.JSX.Element> = {
  tee: Tee,
  hoodie: Hoodie,
  tote: Tote,
  cap: Cap,
  bottle: Bottle,
  mug: Mug,
};

export function MerchArt({
  kind,
  className,
}: {
  kind: MerchKind;
  className?: string;
}) {
  const Art = registry[kind];
  return (
    <div className={cn("flex items-center justify-center p-4", className)}>
      <Art />
    </div>
  );
}

export type { MerchKind };
