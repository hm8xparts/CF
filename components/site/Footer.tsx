import Link from "next/link";
import { Logo } from "./Logo";
import { Button, ArrowRight } from "@/components/ui/Button";
import { nav, cta, site } from "@/lib/site";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Program",
    links: [
      { label: "Merchandise creation", href: "/services#bespoke-merchandise" },
      { label: "Branded storefronts", href: "/services#storefront-payments" },
      { label: "Market expansion", href: "/services#market-expansion" },
      { label: "Precision logistics", href: "/services#precision-logistics" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Footer CTA banner */}
      <div className="border-b border-white/10">
        <div className="container-x py-14 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Ready to put your mission on the merch?
              </h2>
              <p className="mt-3 text-white/70">
                Tell us about your cause and audience. We&rsquo;ll help you think
                through the right program — no upfront cost to start.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={cta.primary.href} variant="primary" size="lg">
                {cta.primary.label}
                <ArrowRight />
              </Button>
              <Button href={cta.secondary.href} variant="light" size="lg">
                {cta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer main */}
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              CauseFusion runs the entire merchandise program for nonprofits —
              design, storefront, payments, fulfillment, and shared revenue — so
              your team can stay focused on the mission.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-white/40">
            {/* PLACEHOLDER: replace with verified contact details */}
            <span className="italic">Contact details coming soon</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
