"use client";

import Script from "next/script";
import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Branded inline Calendly scheduler.
 * Loads Calendly's widget script client-side and renders the inline embed,
 * styled with CauseFusion's coral primary color. Falls back to a direct link
 * if the widget doesn't load.
 */
export function CalendlyInline() {
  const [failed, setFailed] = useState(false);

  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    background_color: "ffffff",
    text_color: "0f1d3d",
    primary_color: "ff6b7a",
  });
  const dataUrl = `${site.contact.schedulingUrl}?${params.toString()}`;

  return (
    <div>
      {failed ? (
        <div className="flex h-[560px] flex-col items-center justify-center gap-4 rounded-2xl bg-paper-soft p-8 text-center ring-1 ring-ink/8">
          <p className="text-sm text-ink-muted">
            Having trouble loading the calendar?
          </p>
          <a
            href={site.contact.schedulingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-ink shadow-glow transition hover:bg-brand-400"
          >
            Open the booking page
          </a>
        </div>
      ) : (
        <div
          className="calendly-inline-widget overflow-hidden rounded-2xl"
          data-url={dataUrl}
          style={{ minWidth: "300px", height: "640px" }}
          aria-label="Schedule a call with CauseFusion"
        />
      )}

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onError={() => setFailed(true)}
      />

      <noscript>
        <a
          href={site.contact.schedulingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-brand-600 underline"
        >
          Book an intro call on Calendly
        </a>
      </noscript>
    </div>
  );
}
