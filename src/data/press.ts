import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.png";
import article3 from "@/assets/article-3.png";
import article4 from "@/assets/article-4.png";
import article5 from "@/assets/article-5.png";
import logoVogue from "@/assets/logo-vogue.png";
import logoElle from "@/assets/logo-elle.png";
import logoWellGood from "@/assets/logo-wellgood.png";
import logoGoop from "@/assets/logo-goop.png";
import logoMindBodyGreen from "@/assets/logo-mindbodygreen.png";
import logoForbes from "@/assets/logo-forbes.png";
import logoHarpersBazaar from "@/assets/logo-harpersbazaar.png";
import logoPopSugar from "@/assets/logo-popsugar.png";

// Logos for "Affiliations and As seen on" carousel.
// Replace `src` with the path to your uploaded logo image (e.g. "/logos/vogue.png"
// or an imported asset). `alt` is the accessible name shown to screen readers.
export const PRESS_LOGOS: { src: string; alt: string }[] = [
  { src: logoVogue, alt: "MEDIUM" },
  { src: logoElle, alt: "Elle" },
  { src: logoWellGood, alt: "Well+Good" },
  { src: logoGoop, alt: "Goop" },
  { src: logoMindBodyGreen, alt: "MindBodyGreen" },
  { src: logoForbes, alt: "Forbes" },
  { src: logoHarpersBazaar, alt: "Harper's Bazaar" },
  { src: logoPopSugar, alt: "PopSugar" },
];

// Articles slideshow — add `image` (path to uploaded image) and `url` (link) per item.
export const ARTICLES: {
  title: string;
  source: string;
  date: string;
  url: string;
  image: string;
}[] = [
  { title: "Wellness Reimagined: 5 Things to Reform the Wellness Industry", source: "MEDIUM", date: "Mar 2026", url: "#", image: article1 },
  { title: "Special Episode: wmnsWORK Demo Day", source: "SOUL OF TRAVEL PODCAST", date: "Sep 2025", url: "#", image: article2 },
  { title: "A New Definition of Self-Care", source: "Goop", date: "Nov 2024", url: "#", image: article3 },
  { title: "Inside The Coastal Retreat Changing Lives", source: "Harper's Bazaar", date: "Sep 2024", url: "#", image: article4 },
  { title: "Why Breathwork Is the Next Therapy", source: "Forbes", date: "Jun 2024", url: "#", image: article5 },
];