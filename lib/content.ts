/**
 * Editable site copy & structured content.
 * Update text here to change it across the site without touching layout code.
 */

export type Step = {
  n: string;
  title: string;
  body: string;
};

export const howItWorksSteps: Step[] = [
  {
    n: "01",
    title: "We design it.",
    body: "Custom merchandise built around your cause, campaign, and brand — not generic templates.",
  },
  {
    n: "02",
    title: "We build your store.",
    body: "A branded online storefront that makes it simple for supporters to browse, buy, and share.",
  },
  {
    n: "03",
    title: "We handle the payments.",
    body: "Secure checkout and payment processing are built in, so the money side runs smoothly without extra work from your team.",
  },
  {
    n: "04",
    title: "We pack and ship.",
    body: "Warehousing, fulfillment, tracking, customer support, and returns are handled behind the scenes.",
  },
  {
    n: "05",
    title: "You earn.",
    body: "Revenue flows back to your mission through a shared-revenue model, with no upfront cost to start.",
  },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  body: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "bespoke-merchandise",
    index: "01",
    title: "Bespoke Merchandise Creation",
    summary: "Custom products designed around your cause, audience, and brand.",
    body: "CauseFusion turns your mission into merchandise supporters actually want to wear, carry, gift, and share. Every product should feel connected to the organization it represents — not like a generic logo slapped onto a blank item.",
    points: [
      "Cause- and campaign-specific product design",
      "Apparel, accessories, and everyday carry",
      "Curated collections that reflect your brand",
    ],
  },
  {
    id: "storefront-payments",
    index: "02",
    title: "Branded Storefront & Payment Processing",
    summary: "A polished online storefront with secure, streamlined checkout.",
    body: "CauseFusion builds and manages the storefront experience, so supporters can buy in a few clicks while your team avoids the technical work of managing payments, checkout, and order flow.",
    points: [
      "Branded storefront built around your identity",
      "Secure, streamlined checkout",
      "Payments and order flow fully managed",
    ],
  },
  {
    id: "market-expansion",
    index: "03",
    title: "Strategic Market Expansion",
    summary:
      "Merchandise should reach beyond the people who already know where to find it.",
    body: "CauseFusion helps nonprofits expand merchandise sales through campaign planning, product drops, supporter outreach, audience targeting, and promotional strategy.",
    points: [
      "Product launch planning and campaign drops",
      "Email and social promotion support",
      "Supporter segmentation and seasonal collections",
    ],
  },
  {
    id: "precision-logistics",
    index: "04",
    title: "Precision Logistics",
    summary:
      "The operational backbone of the merchandise program, handled end to end.",
    body: "CauseFusion manages warehousing, fulfillment, shipping, tracking, customer support coordination, and returns so every supporter receives a professional experience and the nonprofit's brand reputation is protected.",
    points: [
      "Warehousing, fulfillment, and shipping",
      "Tracking and supporter notifications",
      "Customer support coordination and returns",
    ],
  },
];

export type WhyCard = {
  title: string;
  body: string;
  icon: "shield" | "wallet" | "team" | "handshake" | "loop";
};

export const whyCauseFusion: WhyCard[] = [
  {
    title: "No upfront cost to start",
    body: "Launch a merchandise program without committing budget before sales begin.",
    icon: "wallet",
  },
  {
    title: "Built for limited teams",
    body: "Your staff does not need to manage vendors, inventory, payments, shipping, or returns.",
    icon: "team",
  },
  {
    title: "Brand-safe execution",
    body: "Products, storefronts, and supporter experiences are built to reflect the organization's mission and reputation.",
    icon: "shield",
  },
  {
    title: "Shared upside",
    body: "CauseFusion succeeds when the merchandise program succeeds.",
    icon: "handshake",
  },
  {
    title: "End-to-end accountability",
    body: "One partner owns the full pipeline from product concept to supporter delivery.",
    icon: "loop",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do nonprofits need to pay upfront?",
    a: "No. CauseFusion is designed around a shared-revenue model with no upfront cost to start.",
  },
  {
    q: "Who designs the merchandise?",
    a: "CauseFusion leads the merchandise design process in collaboration with the nonprofit.",
  },
  {
    q: "Do we need to manage inventory or shipping?",
    a: "No. CauseFusion handles warehousing, fulfillment, shipping, tracking, and returns.",
  },
  {
    q: "Can the storefront match our brand?",
    a: "Yes. The storefront should be designed around the nonprofit's brand, campaign, and audience.",
  },
  {
    q: "What kinds of organizations is CauseFusion built for?",
    a: "CauseFusion is built for nonprofits, foundations, fundraising campaigns, advocacy organizations, and mission-driven groups with an engaged audience.",
  },
  {
    q: "How does the revenue-share model work?",
    a: "CauseFusion operates the program and shares revenue from merchandise sales. Exact terms can be discussed during the partnership process.",
  },
];

/** What each side owns in the partnership. */
export const responsibilities = {
  nonprofit: [
    "Share your mission, brand, and audience",
    "Approve product designs and storefront direction",
    "Point supporters toward the shop when it helps your campaigns",
    "Stay focused on the work only you can do",
  ],
  causefusion: [
    "Design custom merchandise for your cause",
    "Build and host the branded storefront",
    "Process payments and manage the order flow",
    "Warehouse, pack, ship, and track every order",
    "Handle customer support and returns",
    "Share revenue back to your mission",
  ],
};
