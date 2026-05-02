import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { PressMarquee } from "@/components/PressMarquee";
import { ArticlesGrid } from "@/components/ArticlesGrid";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => (
  <>
    {/* HERO */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
      />
      <div className="container relative pt-16 pb-24 md:pt-28 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-primary-soft/60">
            <Sparkles className="w-3 h-3" /> Wellness, Reimagined
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
            A return to <em className="text-primary not-italic">stillness.</em>
            <br /> A path to your <em className="text-primary not-italic">whole self.</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Personalized consultancy, transformative courses, and intimate experiences —
            crafted to bring you home to your body, your breath, your becoming.
          </p>
        </motion.div>

        {/* The two big CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-3 gap-5 mt-16 max-w-5xl mx-auto"
        >
          <Link
            to="/consultancy"
            className="group relative overflow-hidden rounded-3xl bg-gradient-coral p-10 text-primary-foreground shadow-coral hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="text-xs uppercase tracking-widest opacity-80 mb-3">Most popular</div>
            <h3 className="font-display text-3xl mb-3">Consultancy</h3>
            <p className="text-sm opacity-90 mb-6">1:1 sessions tailored to your nervous system.</p>
            <div className="inline-flex items-center gap-2 text-sm font-medium">
              Begin your journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link
            to="/courses"
            className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-500 border border-border/40"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Self-paced</div>
            <h3 className="font-display text-3xl mb-3">Courses</h3>
            <p className="text-sm text-muted-foreground mb-6">Digital practices you can return to forever.</p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Browse the library <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link
            to="/experiences"
            className="group relative overflow-hidden rounded-3xl bg-secondary p-10 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-500 border border-border/40"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">In-person</div>
            <h3 className="font-display text-3xl mb-3">Experiences</h3>
            <p className="text-sm text-muted-foreground mb-6">Retreats, sound baths & sacred gatherings.</p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              View upcoming <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>

    <PressMarquee />

    {/* PHILOSOPHY */}
    <section className="container py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The philosophy</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            Wellness isn't a destination. It's a <em className="text-primary not-italic">remembering.</em>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            For too long, healing has been sold as something you must chase. My approach is different.
            We slow down, we listen, and we let your body lead. The shifts that follow are quiet — but
            they are real, and they last.
          </p>
          <Button variant="coral" size="lg" asChild>
            <Link to="/consultancy">Start with a consultation</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { stat: "98%", label: "Clients report deeper rest" },
            { stat: "10+", label: "Years guiding" },
            { stat: "2K+", label: "Lives touched" },
            { stat: "40+", label: "Retreats led" },
          ].map(s => (
            <div key={s.label} className="aspect-square rounded-3xl bg-gradient-soft border border-border/40 p-6 flex flex-col justify-between shadow-card">
              <div className="font-display text-5xl text-primary">{s.stat}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ArticlesGrid />
  </>
);

export default Home;
