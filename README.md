# CauseFusion

The marketing website for **CauseFusion** — the merchandise partner built for
nonprofits. CauseFusion runs the entire merchandise program on behalf of
mission-driven organizations: product design, branded storefront, payments,
fulfillment, and shared revenue — with no upfront cost to start.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Pages

| Route            | Purpose                                                        |
| ---------------- | -------------------------------------------------------------- |
| `/`              | Home — value prop, how it works, services, why, FAQ, CTAs      |
| `/about`         | Mission, why we exist, shared-revenue philosophy, team         |
| `/services`      | The four operating capabilities, in detail                     |
| `/how-it-works`  | Full pipeline, step-by-step, revenue share, who-does-what      |
| `/contact`       | Contact form, scheduling embed, contact details                |

## Project structure

```
app/                     # Routes, layout, metadata, sitemap, robots
components/
  site/                  # Header, Footer, Logo, mobile sticky CTA
  ui/                    # Button, Section, Icon primitives
  sections/              # Composable page sections (Hero, HowItWorks, …)
  mockups/               # E-commerce UI mockups (storefront, checkout, …)
  forms/                 # Contact form
lib/
  site.ts                # Site config, nav, CTAs, placeholder contact details
  content.ts             # Editable copy: steps, services, why-cards, FAQ
```

## Editing content

Most copy lives in **`lib/content.ts`** and **`lib/site.ts`** so it can be
updated without touching layout code. Navigation, CTAs, and placeholder contact
details are all centralized in `lib/site.ts`.

## Placeholders to replace before launch

Per the brief, no client names, testimonials, stats, or contact details were
invented. The following are clearly-labeled placeholders:

- **Logo mark** — `components/site/Logo.tsx` uses a placeholder SVG mark.
- **Trust / logo bar** — placeholder partner names (`components/sections/LogoBar.tsx`).
- **Testimonial** — placeholder quote (`components/sections/Testimonial.tsx`).
- **Team** — placeholder cards & bios (`app/about/page.tsx`).
- **Contact details** — email/phone placeholders in `lib/site.ts`.
- **Scheduling embed** — placeholder on the contact page; drop in a
  Calendly/Cal.com/SavvyCal embed.
- **Contact form endpoint** — `components/forms/ContactForm.tsx` currently shows a
  demo success state. Wire `site.contact.formEndpointPlaceholder` to your form
  service or an API route.
- **Analytics tag** — placeholder note in `app/layout.tsx`; add your snippet
  (Plausible, GA4, Fathom, …).
- **Product imagery** — SVG line-art placeholders in `components/mockups/`;
  swap for real product photography.
- **Revenue-share percentages** — intentionally omitted; discussed during the
  partnership process.

## Technical notes

- Responsive / mobile-first, with a persistent CTA (sticky header on desktop,
  fixed bottom bar on mobile).
- Accessible: semantic HTML, clean heading hierarchy, skip link, visible focus
  states, `aria` labels, and reduced-motion support.
- SEO: per-page titles/descriptions, Open Graph & Twitter tags, `sitemap.xml`,
  and `robots.txt`.
- Smooth scroll for in-page anchor links with sticky-header offset.
