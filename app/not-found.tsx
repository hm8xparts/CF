import { Button } from "@/components/ui/Button";
import { cta } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
          404
        </span>
        <h1 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">
          We couldn&rsquo;t find that page.
        </h1>
        <p className="mt-4 max-w-md text-ink-muted">
          The page may have moved. Head back home, or talk to us about a
          merchandise program for your cause.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="secondary" size="lg">
            Back to home
          </Button>
          <Button href={cta.primary.href} variant="primary" size="lg">
            {cta.primary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
