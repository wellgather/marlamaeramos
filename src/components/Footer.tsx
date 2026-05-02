import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

// TikTok isn't in lucide — small inline SVG
const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.17 8.17 0 0 0 4.79 1.52V7a4.83 4.83 0 0 1-1.86-.31z"/>
  </svg>
);

const socials = [
  { href: "https://www.linkedin.com/in/marlaramos/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/wellgather", label: "Instagram", Icon: Instagram },
  { href: "mailto:marlamae_ramos@yahoo.com", label: "Email", Icon: Mail },
];

export const Footer = () => (
  <footer className="mt-24 border-t border-border/40 bg-gradient-soft">
    {/* Community banner — slim, theme-colored */}
    <div className="bg-gradient-coral text-primary-foreground">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
        <p className="text-sm sm:text-base font-medium tracking-wide">
          Join the social wellness community
        </p>
        <Button
          variant="cream"
          size="sm"
          asChild
          className="rounded-full"
        >
          <a
            href="https://www.instagram.com/wellgather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow
          </a>
        </Button>
      </div>
    </div>
    <div className="container py-12 grid md:grid-cols-3 gap-8">
      <div>
        <div className="font-display text-2xl mb-2">Marla Ramos</div>
        <p className="text-sm text-muted-foreground max-w-xs">
          A path back to your body. A practice toward your truest self.
        </p>
        <div className="flex items-center gap-3 mt-5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white border border-border/40 shadow-card flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-soft transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Explore</div>
        <ul className="space-y-2 text-sm">
          <li><Link to="/wellness-experience" className="hover:text-primary transition-colors">Design Your Wellness Experience</Link></li>
          <li><Link to="/hospitality" className="hover:text-primary transition-colors">Get Wellness Certified</Link></li>
          <li><Link to="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
          <li><Link to="/experiences" className="hover:text-primary transition-colors">Experiences</Link></li>
        </ul>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Contact</div>
        <a href="mailto:marlamae_ramos@yahoo.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          marlamae_ramos@yahoo.com
        </a>
        <p className="text-sm text-muted-foreground mt-1">By appointment, worldwide</p>
      </div>
    </div>
    <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Marla Ramos. Crafted with intention.
    </div>
  </footer>
);
