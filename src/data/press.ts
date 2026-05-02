import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.png";
import article3 from "@/assets/article-3.webp";
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
  { src: logoGoop, alt: "WHEN IN MANILA" },
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
  // To make a card clickable, set `url` to the destination link (e.g. "https://...").
  { title: "Wellness Reimagined: 5 Things to Reform the Wellness Industry", source: "MEDIUM", date: "Mar 2026", url: "https://medium.com/authority-magazine/wellness-reimagined-marla-ramos-of-wellgather-on-5-things-that-should-be-done-to-improve-and-08a3c8e7a116", image: article1 },
  { title: "Special Episode: wmnsWORK Demo Day", source: "SOUL OF TRAVEL PODCAST", date: "Sep 2025", url: "https://www.souloftravelpodcast.com/season-6/episode243-wmns-work-demo-day", image: article2 },
  { title: "Philippines Celebrates First-Ever World Wellness Weekend", source: "WHEN IN MANILA", date: "Oct 2025", url: "https://www.wheninmanila.com/philippines-celebrates-first-ever-world-wellness-weekend-at-coron/#gsc.tab=0", image: article3 },
];