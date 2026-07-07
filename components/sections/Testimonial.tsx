import { Section } from "@/components/ui/Section";

/**
 * Testimonial placeholder. The brief says not to invent testimonials, so this
 * is a clearly-labeled placeholder quote.
 */
export function Testimonial() {
  return (
    <Section tone="soft" ariaLabel="What partners say">
      <figure className="mx-auto max-w-3xl text-center">
        <div
          className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10 text-brand-500"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M7 7h4v6a4 4 0 0 1-4 4H6v-2h1a2 2 0 0 0 2-2H7V7Zm8 0h4v6a4 4 0 0 1-4 4h-1v-2h1a2 2 0 0 0 2-2h-2V7Z" />
          </svg>
        </div>
        <blockquote className="text-2xl font-display leading-relaxed text-ink sm:text-[1.75rem]">
          &ldquo;A partner quote about launching a merchandise program with no
          upfront cost and no added workload will live here.&rdquo;
        </blockquote>
        <figcaption className="mt-6 text-sm text-ink-muted">
          <span className="font-semibold text-ink">Name, Title</span>
          <span className="mx-2 text-ink/30">&middot;</span>
          Partner Organization
          <span className="mt-2 block text-[11px] italic text-ink-muted/70">
            Placeholder testimonial &mdash; real partner story to be added.
          </span>
        </figcaption>
      </figure>
    </Section>
  );
}
