import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Check, Sparkles, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { CallbackForm } from "@/components/CallbackForm";
import { CALENDAR_URL, CREDENTIALS, PAIN_POINTS, TESTIMONIALS, TIERS } from "@/data/hospitality";
import portrait from "@/assets/portrait.jpg";
import heroSunset from "@/assets/hero-sunset.jpg";

const Hospitality = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative w-full h-[78vh] min-h-[560px] md:h-[86vh] overflow-hidden">
          <img
            src={heroSunset}
            alt="Sunset wellness atmosphere"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />

          <div className="container relative h-full flex items-center pt-24 pb-32">
            <div className="grid md:grid-cols-2 gap-10 w-full items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
                className="max-w-xl space-y-5"
              >
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-white/80 backdrop-blur">
                  <Award className="w-3 h-3" /> For hotels & resorts
                </span>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                  Be wellness <em className="text-primary not-italic">certified</em><br />
                  & build credibility.
                </h1>
                <p className="text-base md:text-lg text-foreground/80 max-w-md leading-relaxed">
                  I help hospitality brands and hotels become globally wellness-certified — building the
                  systems that improve guest experience, increase revenue, and pass audits.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
                className="md:justify-self-end w-full flex md:block justify-center"
              >
                <CallbackForm
                  title="Book a Call"
                  subtitle="Tell me about your property — I'll be in touch within 24h."
                  cta="Book a Call"
                  showLocation
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Sound familiar?</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            You're delivering wellness — but the world hasn't <em className="text-primary not-italic">officially</em> recognized it yet.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {PAIN_POINTS.map((p, i) => (
            <div key={i} className="flex gap-3 p-5 rounded-2xl bg-white border border-border/40 shadow-card">
              <div className="w-7 h-7 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <span className="text-primary font-display text-sm">{i + 1}</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 p-8 md:p-10 rounded-3xl bg-gradient-soft border border-border/40 shadow-card">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
            Are you a resort or a brand doing a great job offering wellness experiences, but ready to
            officially be <em className="text-primary not-italic">certified</em>?
          </p>
          <p className="mt-5 text-base text-foreground/70 leading-relaxed">
            As a certified, official <strong className="text-foreground">Certified WITT® Accredited Professional</strong>, I'm
            equipped with the expert knowledge you'll need to bring your wellness resort from now to certification.
            I'll guide you through the entire process — from auditing to certification, and from operational
            design to marketing the recognition you've earned.
          </p>
          <div className="mt-6">
            <Button variant="coral" size="lg" asChild>
              <a href="#pricing">Get Wellness Certified </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CREDENTIALS BOX */}
      <section className="container pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-border/40 shadow-card p-6 md:p-10 grid md:grid-cols-[280px_1fr] gap-8 items-center">
          <div className="aspect-square w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden ring-4 ring-primary-soft">
            <img src={portrait} alt="Marla Ramos" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Credentials</p>
            <h3 className="font-display text-3xl md:text-4xl mb-5 leading-tight">
              You're working with an officially accredited expert.
            </h3>
            <ul className="space-y-3">
              {CREDENTIALS.map(c => (
                <li key={c} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-coral flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground/85">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="container pb-20">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by
        </p>
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="aspect-[3/2] rounded-2xl bg-white border border-dashed border-border/60 flex items-center justify-center text-xs uppercase tracking-widest text-muted-foreground"
            >
              Logo {i}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS BANNER SLIDESHOW */}
      <section className="container pb-24">
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-coral text-primary-foreground shadow-coral">
          <div className="px-8 md:px-16 py-12 md:py-16 min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <Quote className="w-8 h-8 opacity-60 mb-4" />
                <p className="font-display text-xl md:text-3xl leading-snug mb-5">{TESTIMONIALS[slide].quote}</p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm opacity-90">— {TESTIMONIALS[slide].author}, {TESTIMONIALS[slide].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button onClick={() => setSlide(p => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => setSlide(p => (p + 1) % TESTIMONIALS.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-white" : "w-2 bg-white/40"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section id="pricing" className="container pb-24">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Investment</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Choose your path to certification.</h2>
          <p className="text-foreground/70 mt-4">Two tiers, designed to meet you exactly where your property is today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TIERS.map(tier => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                tier.highlight
                  ? "bg-gradient-coral text-primary-foreground shadow-coral md:-translate-y-3"
                  : "bg-white border border-border/40 shadow-card"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  Most chosen
                </span>
              )}
              <div className={`text-xs uppercase tracking-[0.3em] mb-2 ${tier.highlight ? "opacity-80" : "text-primary"}`}>
                {tier.tagline}
              </div>
              <h3 className="font-display text-3xl mb-1">{tier.name}</h3>
              <p className={`text-sm mb-6 ${tier.highlight ? "opacity-90" : "text-muted-foreground"}`}>
                Ideal for: {tier.idealFor}
              </p>

              <div className="flex items-end gap-2 mb-1">
                <span className="font-display text-5xl">{tier.price}</span>
                <span className={`text-xs mb-2 ${tier.highlight ? "opacity-80" : "text-muted-foreground"}`}>USD</span>
              </div>
              <p className={`text-xs mb-7 ${tier.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                {tier.valueLabel}
              </p>

              <ul className="space-y-2.5 flex-1 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex gap-2.5 items-start text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={tier.highlight ? "" : "text-foreground/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={tier.highlight ? "cream" : "coral"} size="lg" className="w-full" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noreferrer">Book a Discovery Call</a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl text-background p-12 md:p-16 text-center bg-[#ffebcc]">
          <Sparkles className="w-6 h-6 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl mb-4 leading-tight text-primary">
            Ready to make it official?
          </h2>
          <p className="text-base opacity-80 max-w-xl mx-auto mb-8 text-secondary-foreground">
            Book a complimentary discovery call. We'll map your fastest path to certification.
          </p>
          <Button variant="coral" size="xl" asChild>
            <a href={CALENDAR_URL} target="_blank" rel="noreferrer">Book a Discovery Call →</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hospitality;
