import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "paper" | "soft" | "white" | "ink" | "brand";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  soft: "bg-paper-soft text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-white",
  brand: "bg-brand-700 text-white",
};

export function Section({
  children,
  tone = "paper",
  className,
  id,
  ariaLabel,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("py-20 sm:py-28", tones[tone], className)}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "eyebrow",
            tone === "light" && "text-brand-200"
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              tone === "light" ? "bg-brand-200" : "bg-accent-400"
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.08]",
          tone === "light" && "text-white"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "text-lg leading-relaxed",
            tone === "light" ? "text-white/70" : "text-ink-muted"
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
