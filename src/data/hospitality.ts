export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  valueLabel: string;
  idealFor: string;
  features: string[];
  highlight?: boolean;
}

export const TIERS: PricingTier[] = [
  {
    id: "audit-lite",
    name: "Wellness Audit Lite",
    tagline: "Tier 1",
    price: "$1,999",
    valueLabel: "$5,000 USD in value",
    idealFor: "Small hotels · early-stage · quick assessment",
    features: [
      "Wellness Certified Scorecard",
      "Pillar scoring (WITT-aligned)",
      "Gap analysis (top 10–20 issues)",
      "Audit Evaluation for audit readiness",
      "Audit Analysis",
      "Audit Playbook",
      "Action plan to be audit-ready",
      "Executive summary report",
      "Audit Application & Coordination",
      "Audit Review",
      "3 deep-dive calls",
      "1 month intensive",
    ],
  },
  {
    id: "audit-immersion",
    name: "Audit Immersion",
    tagline: "Tier 2",
    price: "$4,999",
    valueLabel: "$12,000 USD in value",
    idealFor: "Resorts ready to be officially certified",
    highlight: true,
    features: [
      "Guidance from pre- to official certification",
      "Audit Analysis",
      "Audit Playbook",
      "Audit Evaluation for audit readiness",
      "Immersion & Audit of Guest Experience Process",
      "Guest Experience Design",
      "Operational SOPs",
      "Marketing plan to promote your certification",
      "Revenue Goals & KPI guidance after certification",
      "Weekly calls",
      "Deep-dive guidance call",
      "Audit Application & Coordination",
      "Audit Review",
      "3 months of guidance",
    ],
  },
];

export const PAIN_POINTS = [
  "You're delivering beautiful wellness experiences but have nothing official to back it up.",
  "Guests ask 'are you certified?' — and you don't yet have an answer.",
  "You can't confidently raise rates or attract premium wellness travelers without third-party credibility.",
  "Audits and accreditations feel opaque, slow, and expensive to navigate alone.",
  "Your team is brilliant in delivery, but you lack the SOPs and documentation an auditor expects.",
];

export const CREDENTIALS = [
  "WITT Accredited Professional",
  "Wellness Travel Specialist — WTA",
];

export const TESTIMONIALS = [
  { quote: "Add testimonial here", author: "Client name", role: "Property / Brand" },
  { quote: "Add testimonial here", author: "Client name", role: "Property / Brand" },
  { quote: "Add testimonial here", author: "Client name", role: "Property / Brand" },
];

export const CALENDAR_URL = "https://calendar.notion.so/meet/marlaramos/wellgather";
