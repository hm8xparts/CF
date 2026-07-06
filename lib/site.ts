/**
 * Central site configuration.
 * Edit these values to update navigation, CTAs, and placeholder contact details
 * across the whole site in one place.
 */

export const site = {
  name: "CauseFusion",
  domain: "causefusion.com",
  url: "https://causefusion.com",
  tagline: "The merchandise partner built for nonprofits.",
  description:
    "CauseFusion helps nonprofits launch and operate branded merchandise programs with custom products, storefronts, payments, fulfillment, and shared-revenue partnership — with no upfront cost to start.",

  // ── Placeholders — replace with verified details before launch ─────────────
  // Marked as placeholders per brief; do not treat as confirmed contact info.
  contact: {
    emailPlaceholder: "hello@causefusion.com", // PLACEHOLDER
    phonePlaceholder: "(000) 000-0000", // PLACEHOLDER
    // Where the contact form should POST once wired up (e.g. a form service).
    formEndpointPlaceholder: "/api/contact", // PLACEHOLDER
    // Scheduling tool embed (e.g. Calendly/SavvyCal) goes here.
    schedulingUrlPlaceholder: "#schedule", // PLACEHOLDER
  },

  // Analytics tag placeholder — drop the real script/ID in app/layout.tsx.
  analyticsIdPlaceholder: "CF-ANALYTICS-ID", // PLACEHOLDER
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const cta = {
  primary: { label: "Schedule a Call", href: "/contact" },
  secondary: { label: "See How It Works", href: "/how-it-works" },
  partnership: { label: "Start a Partnership", href: "/contact" },
} as const;
