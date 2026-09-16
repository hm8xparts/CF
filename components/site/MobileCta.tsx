"use client";

import { usePathname } from "next/navigation";
import { Button, ArrowRight } from "@/components/ui/Button";
import { cta } from "@/lib/site";

/**
 * Persistent bottom CTA bar, shown on mobile only.
 * Hidden on the contact page (the form is already the goal there).
 */
export function MobileCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/90 p-3 backdrop-blur-xl md:hidden">
      <div className="flex items-center gap-3">
        <Button
          href={cta.secondary.href}
          variant="secondary"
          size="md"
          className="flex-1"
        >
          {cta.secondary.label}
        </Button>
        <Button
          href={cta.primary.href}
          variant="primary"
          size="md"
          className="flex-1"
        >
          {cta.primary.label}
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
