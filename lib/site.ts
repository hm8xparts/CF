/**
 * Central site configuration.
 * Edit these values to update navigation, CTAs, and contact details across the
 * whole site in one place.
 */

export const site = {
  name: "CauseFusion",
  domain: "causefusion.com",
  url: "https://causefusion.com",
  tagline: "The merchandise partner built for nonprofits.",
  description:
    "CauseFusion helps nonprofits launch and operate branded merchandise programs with custom products, storefronts, payments, fulfillment, and shared-revenue partnership — with no upfront cost to start.",

  contact: {
    // Public contact address; also the inbox the contact form emails.
    email: "hello@causefusion.com",
    // Scheduling tool (Calendly). Update the URL to change it site-wide.
    schedulingUrl: "https://calendly.com/causefusion",
    // Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in the
    // environment (Vercel → Project → Settings → Environment Variables).
    // Get a free key at https://web3forms.com by registering hello@causefusion.com.
    web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const cta = {
  primary: { label: "Schedule a Call", href: "/contact#schedule" },
  secondary: { label: "See How It Works", href: "/how-it-works" },
  partnership: { label: "Start a Partnership", href: "/contact" },
} as const;
