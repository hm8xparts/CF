import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * CauseFusion brand wordmark + mark.
 * The mark is a hand-built SVG recreation of the official logo: a navy "C"
 * fused with a coral "F", with a heart in the joint. Swap for the official
 * vector file if an exact SVG is provided.
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  // The "C" must stay visible on both light and navy backgrounds.
  const cStroke = tone === "light" ? "stroke-white" : "stroke-ink";

  return (
    <Link
      href="/"
      aria-label="CauseFusion home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
          {/* Navy C — open to the right */}
          <path
            d="M31 13.2 A13.6 13.6 0 1 0 31 34.8"
            fill="none"
            className={cStroke}
            strokeWidth="8.4"
            strokeLinecap="round"
          />
          {/* Coral F — stem + two arms, fused into the C's opening */}
          <g
            className="stroke-brand-500"
            strokeWidth="7.2"
            strokeLinecap="round"
            fill="none"
          >
            <line x1="27.6" y1="13.4" x2="27.6" y2="35" />
            <line x1="27.2" y1="13.4" x2="40" y2="13.4" />
            <line x1="27.4" y1="24" x2="36.6" y2="24" />
          </g>
          {/* Heart in the joint */}
          <path
            d="M24.4 27.9c-.1-1.9-3.6-3.1-3.6-5.8 0-1.3 1-2.3 2.1-2.3.9 0 1.5.7 1.5.7s.6-.7 1.5-.7c1.1 0 2.1 1 2.1 2.3 0 2.7-3.5 3.9-3.6 5.8Z"
            className="fill-white"
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
