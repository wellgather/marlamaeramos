export interface ThriveCourse {
  id: string;
  title: string;
  tagline: string;
  description: string;
  price: string;        // display only, e.g. "$49"
  duration: string;     // e.g. "6 modules · 4 hrs"
  level: string;        // e.g. "Beginner"
  checkoutUrl: string;  // ThriveCart checkout URL
  image?: string;       // optional cover
}

// Replace these with your real ThriveCart products.
// Each `checkoutUrl` should be the direct ThriveCart checkout link for that product.
export const COURSES: ThriveCourse[] = [
  {
    id: "breath-foundations",
    title: "Breath Foundations",
    tagline: "A 21-day return to your nervous system",
    description:
      "A self-paced journey through breathwork, somatic awareness, and ritual. Build a daily practice that reaches into every corner of your life.",
    price: "$49",
    duration: "6 modules · 4 hrs",
    level: "Beginner",
    checkoutUrl: "https://faststart.thrivecart.com/your-product-1/",
  },
  {
    id: "sound-as-medicine",
    title: "Sound as Medicine",
    tagline: "Crystal bowls, voice & frequency",
    description:
      "Learn the foundations of sound healing — how to receive it, hold space for it, and weave it into your own practice with simple tools.",
    price: "$89",
    duration: "8 modules · 6 hrs",
    level: "All levels",
    checkoutUrl: "https://faststart.thrivecart.com/your-product-2/",
  },
  {
    id: "ritual-living",
    title: "The Art of Ritual Living",
    tagline: "Daily, weekly & seasonal practice design",
    description:
      "A masterclass in designing rituals that fit your life — sustainable, beautiful, embodied. Includes printable templates and audio guides.",
    price: "$129",
    duration: "10 modules · 8 hrs",
    level: "Intermediate",
    checkoutUrl: "https://faststart.thrivecart.com/your-product-3/",
  },
  {
    id: "becoming-her",
    title: "Becoming Her",
    tagline: "A 6-week embodiment program",
    description:
      "Six weeks of guided audio practices, written prompts, and ceremony — to shed the layers and meet the woman underneath.",
    price: "$199",
    duration: "6 weeks · live + replays",
    level: "All levels",
    checkoutUrl: "https://faststart.thrivecart.com/your-product-4/",
  },
];
