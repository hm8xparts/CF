import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { CalendlyInline } from "@/components/embeds/CalendlyInline";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact CauseFusion | Start a Nonprofit Merchandise Partnership",
  description:
    "Tell us about your organization, your audience, and what you want merchandise to do for your cause. Schedule a call or send a note to start the conversation — no upfront cost to start.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-200/35 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        {/* Intro */}
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent-400"
              aria-hidden="true"
            />
            Talk to CauseFusion
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Start the conversation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Tell us about your organization, your audience, and what you want
            merchandise to do for your cause. We&rsquo;ll help you think through
            the right program. Book an intro call, or send a note — whatever&rsquo;s
            easier.
          </p>
        </div>

        {/* Two conversion paths: book a call | send a message */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Book a call */}
          <div
            id="schedule"
            className="scroll-mt-28 rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink/8 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7Zm12 7v10H5V9h14Z" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Book an intro call
                </h2>
                <p className="text-xs text-ink-muted">
                  Pick a time that works — no prep needed.
                </p>
              </div>
            </div>
            <CalendlyInline />
          </div>

          {/* Send a message */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4 6h16a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Zm8 7 8-5H4l8 5Z" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Send a message
                </h2>
                <p className="text-xs text-ink-muted">
                  Prefer to write? Tell us about your cause.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>

        {/* Verified contact details placeholder */}
        <div className="mt-12 rounded-3xl bg-paper-soft p-6 sm:p-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-600 ring-1 ring-ink/8">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M4 6h16a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Zm8 7 8-5H4l8 5Z" />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                    Email
                  </dt>
                  <dd className="text-sm font-medium text-ink">
                    {site.contact.emailPlaceholder}{" "}
                    <span className="text-xs italic text-ink-muted">
                      (placeholder)
                    </span>
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-600 ring-1 ring-ink/8">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.4.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.4 1 1 0 0 1-.25 1l-2.2 2.4Z" />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                    Phone
                  </dt>
                  <dd className="text-sm font-medium text-ink">
                    {site.contact.phonePlaceholder}{" "}
                    <span className="text-xs italic text-ink-muted">
                      (placeholder)
                    </span>
                  </dd>
                </div>
              </div>
            </dl>

            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {["No upfront cost to start", "Built for nonprofit teams"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-ink-soft"
                  >
                    <Icon name="check" className="h-4 w-4 text-brand-500" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <p className="mt-6 text-xs italic text-ink-muted/70">
            Verified contact details to be confirmed before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
