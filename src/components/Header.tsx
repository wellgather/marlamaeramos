import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import portrait from "@/assets/portrait.jpg";

const consultancyChildren = [
  {
    to: "/wellness-experience",
    label: "Design Your Wellness Experiences",
    sub: "For brands & private clients",
  },
  {
    to: "/hospitality",
    label: "Get Wellness Certified",
    sub: "For hotels & resorts",
  },
];

const linkClass = (active: boolean) =>
  `relative px-5 py-2 text-sm font-medium transition-colors rounded-full inline-flex items-center gap-1 ${
    active ? "text-primary" : "text-foreground/70 hover:text-foreground"
  }`;

export const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();
  const consultancyActive = consultancyChildren.some(c => location.pathname.startsWith(c.to));

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="absolute inset-0 backdrop-blur-xl bg-background/70 border-b border-border/40" />
      <div className="container relative flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-display text-xl tracking-tight">
            Aria <span className="text-primary">·</span> Wellness
          </Link>
          <Button
            variant="coral"
            size="sm"
            asChild
            className="hidden sm:inline-flex rounded-full shadow-soft"
          >
            <a
              href="https://calendar.notion.so/meet/marlaramos/wellgather"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </Button>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/courses" className={({ isActive }) => linkClass(isActive)}>
            {({ isActive }) => (
              <>
                Courses
                {isActive && (
                  <motion.div layoutId="nav-pill" className="absolute inset-0 bg-primary-soft rounded-full -z-10" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
              </>
            )}
          </NavLink>

          {/* Consultancy = non-clickable parent w/ dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className={linkClass(consultancyActive)}>
                Consultancy <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                {consultancyActive && (
                  <motion.div layoutId="nav-pill" className="absolute inset-0 bg-primary-soft rounded-full -z-10" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-80 p-2 rounded-2xl shadow-soft border-border/60">
              {consultancyChildren.map(c => (
                <DropdownMenuItem key={c.to} asChild className="rounded-xl p-3 cursor-pointer focus:bg-primary-soft/60">
                  <Link to={c.to}>
                    <div>
                      <div className="font-display text-base text-foreground">{c.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink to="/experiences" className={({ isActive }) => linkClass(isActive)}>
            {({ isActive }) => (
              <>
                Experiences
                {isActive && (
                  <motion.div layoutId="nav-pill" className="absolute inset-0 bg-primary-soft rounded-full -z-10" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
              </>
            )}
          </NavLink>
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
                  <p>For over a decade, I've guided people back to themselves — through breath, movement, sound, and ceremony.</p>
                  <p>My work blends ancient practice with modern coaching, offering a path that meets you where you are and walks with you toward clarity, vitality, and ease.</p>
                </div>
                <Button variant="coral" className="w-full" onClick={() => setAboutOpen(false)} asChild>
                  <Link to="/wellness-experience">Work With Me</Link>
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
              <nav className="flex flex-col gap-1 pt-12">
                <Link to="/courses" className="font-display text-3xl py-2 hover:text-primary transition-colors">Courses</Link>
                <div className="pt-2">
                  <div className="font-display text-3xl text-foreground/90">Consultancy</div>
                  <div className="pl-4 mt-2 space-y-2 border-l border-border">
                    {consultancyChildren.map(c => (
                      <Link key={c.to} to={c.to} className="block text-base hover:text-primary transition-colors">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link to="/experiences" className="font-display text-3xl py-2 hover:text-primary transition-colors mt-2">Experiences</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
