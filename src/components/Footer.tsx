import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="mt-24 border-t border-border/40 bg-gradient-soft">
    <div className="container py-12 grid md:grid-cols-3 gap-8">
      <div>
        <div className="font-display text-2xl mb-2">Aria · Wellness</div>
        <p className="text-sm text-muted-foreground max-w-xs">
          A path back to your body. A practice toward your truest self.
        </p>
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
        <p className="text-sm text-muted-foreground">hello@aria-wellness.com</p>
        <p className="text-sm text-muted-foreground mt-1">By appointment, worldwide</p>
      </div>
    </div>
    <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Aria Wellness. Crafted with intention.
    </div>
  </footer>
);
