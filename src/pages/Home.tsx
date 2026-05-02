import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { PressMarquee } from "@/components/PressMarquee";
import { ArticlesGrid } from "@/components/ArticlesGrid";
import { CallbackForm } from "@/components/CallbackForm";
import heroSunset from "@/assets/hero-sunset.jpg";

const ctas = [
  {
    to: "/wellness-experience",
    eyebrow: "Most popular",
    title: "Design Your Wellness Experience",
    desc: "1:1 consultancy for brands & private clients.",
    style: "bg-gradient-coral text-primary-foreground shadow-coral",
    arrowClass: "text-primary-foreground",
  },
  {
    to: "/hospitality",
    eyebrow: "For hotels & resorts",
    title: "Get Wellness Certified",
    desc: "WITT-aligned audits & certification path.",
    style: "bg-white border border-border/40 shadow-card",
    arrowClass: "text-primary",
  },
  {
    to: "/courses",
    eyebrow: "Self-paced",
    title: "Courses",
    desc: "Digital practices you return to forever.",
    style: "bg-secondary border border-border/40 shadow-card",
    arrowClass: "text-primary",
  },
];

const Home = () => (
  <>
    {/* HERO — full-bleed featured image with overlay form */}
    <section className="relative">
      <div className="relative w-full h-[78vh] min-h-[560px] md:h-[88vh] overflow-hidden">
        <img
          src={heroSunset}
          alt="Editorial sunset wellness scene with a woman in linen practicing breathwork"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        {/* Soft warm wash to keep brand cohesion */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />

        <div className="container relative h-full flex items-end md:items-center pt-24 pb-32 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 w-full items-center">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl space-y-5"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-white/70 backdrop-blur">
                <Sparkles className="w-3 h-3" /> Wellness, reimagined
              </span>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-foreground drop-shadow-sm">
                A return to <em className="text-primary not-italic">stillness.</em>
                <br /> A path to your <em className="text-primary not-italic">whole self.</em>
              </h1>
              <p className="text-base md:text-lg text-foreground/80 max-w-md leading-relaxed">
                Personalized consultancy, transformative courses, and intimate experiences —
                crafted to bring you home to your body, breath, and becoming.
              </p>
            </motion.div>

            {/* Callback form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:justify-self-end w-full flex md:block justify-center"
            >
              <CallbackForm
                title="Begin Your Transformation"
                subtitle="Tell me a little about you — I'll personally reach out."
                cta="Request a Callback"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overlapping CTA cards — small, tight shadows */}
      <div className="container -mt-20 md:-mt-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {ctas.map(c => (
            <Link
              key={c.to}
              to={c.to}
              className={`group relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500 ${c.style}`}
            >
              <div className="text-[10px] uppercase tracking-widest opacity-80 mb-2">{c.eyebrow}</div>
              <h3 className="font-display text-xl mb-1.5 leading-tight">{c.title}</h3>
              <p className="text-xs opacity-80 mb-4">{c.desc}</p>
              <div className={`inline-flex items-center gap-1.5 text-xs font-medium ${c.arrowClass}`}>
                Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
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
