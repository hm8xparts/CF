import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Brand wordmark + mark.
 * NOTE: This is a placeholder logo mark. Replace the SVG with CauseFusion's
 * official logo asset when available.
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="CauseFusion home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          {/* "Fusion" mark — two forms merging: cause + commerce */}
          <rect width="40" height="40" rx="11" className="fill-brand-500" />
          <circle
            cx="16"
            cy="20"
            r="8.5"
            className="fill-white"
            fillOpacity="0.95"
          />
          <circle cx="25" cy="20" r="8.5" className="fill-accent-400" />
          <path
            d="M20.5 13.2a8.5 8.5 0 0 1 0 13.6 8.5 8.5 0 0 1 0-13.6Z"
            className="fill-brand-500"
          />
        </svg>
      </span>
      <span
        className={cn(
          "text-lg font-semibold tracking-tight",
          tone === "light" ? "text-white" : "text-ink"
        )}
      >
        Cause<span className="text-brand-500">Fusion</span>
      </span>
    </Link>
  );
}
