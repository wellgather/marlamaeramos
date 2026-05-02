import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const navItems = [
  { to: "/courses", label: "Courses" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/experiences", label: "Experiences" },
];

export const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="absolute inset-0 backdrop-blur-xl bg-background/70 border-b border-border/40" />
      <div className="container relative flex items-center justify-between h-20">
        <Link to="/" className="font-display text-xl tracking-tight">
          Aria <span className="text-primary">·</span> Wellness
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary-soft rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Sheet open={aboutOpen} onOpenChange={setAboutOpen}>
            <SheetTrigger asChild>
              <button className="rounded-full ring-2 ring-primary/20 hover:ring-primary/60 transition-all overflow-hidden">
                <Avatar className="h-11 w-11">
                  <AvatarImage src={portrait} alt="About Aria" />
                  <AvatarFallback className="bg-primary-soft text-primary">A</AvatarFallback>
                </Avatar>
              </button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md bg-background overflow-y-auto">
              <div className="space-y-6 pt-6">
                <img src={portrait} alt="Aria" className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-primary-soft" />
                <div className="text-center space-y-2">
                  <h2 className="font-display text-3xl">About Aria</h2>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest">Wellness Expert · Coach · Guide</p>
                </div>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    For over a decade, I've guided people back to themselves — through breath, movement,
                    sound, and ceremony.
                  </p>
                  <p>
                    My work blends ancient practice with modern coaching, offering a path that meets you
                    where you are and walks with you toward clarity, vitality, and ease.
                  </p>
                  <p>
                    Whether you're seeking 1:1 consultation, deepening through a course, or joining a retreat,
                    every offering is built on one belief: <em className="text-primary not-italic">your body already knows the way home.</em>
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="font-display text-2xl text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl text-primary">2K+</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl text-primary">40+</div>
                    <div className="text-xs text-muted-foreground">Retreats</div>
                  </div>
                </div>
                <Button
                  variant="coral"
                  className="w-full"
                  onClick={() => setAboutOpen(false)}
                  asChild
                >
                  <Link to="/consultancy">Work With Me</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background">
              <nav className="flex flex-col gap-2 pt-12">
                {navItems.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="font-display text-3xl py-2 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
