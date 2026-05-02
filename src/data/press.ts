import article1 from "@/assets/article-1.png";

// Logos for "Affiliations and As seen on" carousel.
// Replace `src` with the path to your uploaded logo image (e.g. "/logos/vogue.png"
// or an imported asset). `alt` is the accessible name shown to screen readers.
export const PRESS_LOGOS: { src: string; alt: string }[] = [
  { src: "/placeholder.svg", alt: "Vogue" },
  { src: "/placeholder.svg", alt: "Elle" },
  { src: "/placeholder.svg", alt: "Well+Good" },
  { src: "/placeholder.svg", alt: "Goop" },
  { src: "/placeholder.svg", alt: "MindBodyGreen" },
  { src: "/placeholder.svg", alt: "Forbes" },
  { src: "/placeholder.svg", alt: "Harper's Bazaar" },
  { src: "/placeholder.svg", alt: "PopSugar" },
];

// Articles slideshow — add `image` (path to uploaded image) and `url` (link) per item.
export const ARTICLES: {
  title: string;
  source: string;
  date: string;
  url: string;
  image: string;
}[] = [
  { title: "The Quiet Revolution of Slow Wellness", source: "Vogue", date: "Mar 2025", url: "#", image: article1 },
  { title: "How Sound Healing Reaches Where Words Can't", source: "Well+Good", date: "Jan 2025", url: "#", image: "/placeholder.svg" },
  { title: "A New Definition of Self-Care", source: "Goop", date: "Nov 2024", url: "#", image: "/placeholder.svg" },
  { title: "Inside The Coastal Retreat Changing Lives", source: "Harper's Bazaar", date: "Sep 2024", url: "#", image: "/placeholder.svg" },
  { title: "Why Breathwork Is the Next Therapy", source: "Forbes", date: "Jun 2024", url: "#", image: "/placeholder.svg" },
];
