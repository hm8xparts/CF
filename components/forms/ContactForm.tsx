"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const programOptions = [
  "Not sure yet — help us think it through",
  "Apparel & everyday merchandise",
  "Campaign or event-specific drop",
  "Ongoing branded storefront",
  "Seasonal / fundraising collection",
  "Something else",
];

const fieldBase =
  "w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 flex items-center gap-2 text-sm font-medium text-ink"
    >
      {children}
      {optional ? (
        <span className="text-xs font-normal text-ink-muted">(optional)</span>
      ) : null}
    </label>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // PLACEHOLDER: wire this up to your form service / API route.
    // Endpoint placeholder: site.contact.formEndpointPlaceholder
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-card ring-1 ring-ink/8 sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
            <path
              d="m6 12 4 4 8-9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-ink">
          Thanks — we&rsquo;ll be in touch.
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-muted">
          This is a demo submission. Connect the form to your inbox or CRM to
          start receiving real partnership inquiries.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      // action={site.contact.formEndpointPlaceholder}
      className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink/8 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="org">Organization name</Label>
          <input
            id="org"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            className={fieldBase}
            placeholder="Your nonprofit or foundation"
          />
        </div>

        <div>
          <Label htmlFor="name">Your name</Label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldBase}
            placeholder="Full name"
          />
        </div>

        <div>
          <Label htmlFor="role">Role / title</Label>
          <input
            id="role"
            name="role"
            type="text"
            required
            autoComplete="organization-title"
            className={fieldBase}
            placeholder="e.g. Development Director"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldBase}
            placeholder="you@organization.org"
          />
        </div>

        <div>
          <Label htmlFor="phone" optional>
            Phone
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldBase}
            placeholder="(000) 000-0000"
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="website" optional>
            Website
          </Label>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            className={fieldBase}
            placeholder="https://"
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="program">
            What kind of merchandise program are you interested in?
          </Label>
          <select id="program" name="program" className={cn(fieldBase, "pr-10")} defaultValue="">
            <option value="" disabled>
              Choose the closest fit
            </option>
            {programOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={cn(fieldBase, "resize-y")}
            placeholder="Tell us about your organization, your audience, and what you want merchandise to do for your cause."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        Start the Conversation
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M4 10h12m0 0-5-5m5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p className="mt-4 text-center text-xs text-ink-muted">
        We&rsquo;ll only use your details to talk about a possible merchandise
        program. No upfront cost to start.
      </p>
    </form>
  );
}
