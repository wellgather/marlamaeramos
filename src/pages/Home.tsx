import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf, HeartHandshake, Compass, Calendar, MapPin } from "lucide-react";
import { PressMarquee } from "@/components/PressMarquee";
import { ArticlesGrid } from "@/components/ArticlesGrid";
import { CallbackForm } from "@/components/CallbackForm";
import { UPCOMING_EXPERIENCES } from "@/data/experiences";
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
    title: "Get Wellness Certified ",
    desc: "Get WITT® audit ready & be guided for the certification path.",
    style: "bg-white border border-border/40 shadow-card",
    arrowClass: "text-primary",
  },
  {
    to: "/courses",
    eyebrow: "Self-paced",
    title: "Courses",
    desc: "Learn how to design transformative wellness retreats.",
    style: "bg-secondary border border-border/40 shadow-card",
    arrowClass: "text-primary",
  },
];

const pillars = [
  {
    icon: Leaf,
    title: "Rooted in Experience",
    desc: "Backed by years of in tourism and wellness experience design.",
  },
  {
    icon: HeartHandshake,
    title: "Intuitive & Energy Led",
    desc: "Blending strategy with intention for meaningful experiences.",
  },
  {
    icon: Compass,
    title: "Certified Professional",
    desc: "Aligned with global standards in wellness tourism.",
  },
];

const Home = () => (
  <>
    {/* HERO — full-bleed featured image with overlay form */}
    <section className="relative pb-8 md:pb-12">
      <div className="relative w-full h-[78vh] min-h-[560px] md:h-[88vh] overflow-hidden">
        <img
          src={heroSunset}
          alt="Editorial sunset wellness scene with a woman in linen practicing breathwork"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />

        <div className="container relative h-full flex items-end md:items-center pt-24 pb-16 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 w-full items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl space-y-5"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-white/70 backdrop-blur">
                <Sparkles className="w-3 h-3" /> Wellness, reimagined
              </span>
              <h1 className="font-display text-5xl leading-[1.02] tracking-tight drop-shadow-sm md:text-5xl text-primary-foreground shadow-lg">
                Let's build wellness brands that transforms.
              </h1>
              <p className="text-base md:text-lg text-foreground/80 max-w-md leading-relaxed">
                Let’s co-create transformative social wellness experiences tailored for you and your tribe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:justify-self-end w-full flex md:block justify-center"
            >
              <CallbackForm
                title="Book a Discovery Call"
                subtitle="Tell me a little about you, I'll personally reach out."
                cta="Request a Callback"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overlapping CTA cards — sit BELOW the hero, slightly overlapping the bottom edge */}
      <div className="container mt-12 md:mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
                IMMERSE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>

    {/* PHILOSOPHY — short description + 3 icon pillars (vector-style trio) */}
    <section className="container py-12 md:py-16">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">MY PHILOSOPHY</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5">
          True wellness is found in the <em className="text-primary not-italic">experience.</em>
        </h2>
        <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
          Discover how thoughtfully designed, expert-led wellness experience can transform your brand, deepen connection, and grow your community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mx-auto w-20 h-20 rounded-full bg-primary-soft flex items-center justify-center mb-5 shadow-soft">
              <p.icon className="w-9 h-9 text-primary" strokeWidth={1.4} />
            </div>
            <h3 className="font-display text-xl mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <PressMarquee />

    {/* UPCOMING EXPERIENCES — modeled after pilates "Our Sessions" banner */}
    <section className="bg-gradient-soft border-y border-border/40 py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Join us in person</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Upcoming Experiences</h2>
          <p className="text-foreground/70 mt-4">
            Intimate retreats, summits, and sound journeys — crafted for the soul.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {UPCOMING_EXPERIENCES.map((e, i) => (
            <motion.a
              key={e.title}
              href={e.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-coral transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest bg-white/90 text-primary px-3 py-1.5 rounded-full">
                    {e.type}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl leading-tight mb-2">{e.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs opacity-95">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {e.date}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {e.location}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View all experiences <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    <ArticlesGrid />
  </>
);

export default Home;
