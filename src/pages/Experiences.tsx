import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import soundHealing from "@/assets/exp-soundhealing.jpg";
import retreat from "@/assets/exp-retreat.jpg";
import yoga from "@/assets/exp-yoga.jpg";

const PAYPAL_URL = "https://paypal.me/yourname"; // user will swap

const slides = [
  { src: retreat, title: "Coastal Retreats", desc: "Five-day immersions on the edge of the sea." },
  { src: soundHealing, title: "Sound Healing", desc: "Crystal bowls, voice, and frequency journeys." },
  { src: yoga, title: "Movement & Breath", desc: "Sunrise sessions to wake the body gently." },
];

const Experiences = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-hero">
        <div className="container py-20 md:py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-primary-soft/60">
              <Sparkles className="w-3 h-3" /> In-person gatherings
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
              Come home to <em className="text-primary not-italic">yourself.</em>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Step away from the noise. Join intimate retreats, sound ceremonies, and movement
              practices designed to return you to your center — together, in real life.
            </p>
            <div className="pt-4">
              <Button variant="coral" size="xl" asChild>
                <a href={PAYPAL_URL} target="_blank" rel="noreferrer">Book Your Spot →</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Limited spaces · Worldwide locations</p>
          </motion.div>
        </div>
      </section>

      {/* SLIDESHOW */}
      <section className="container py-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">A glimpse</p>
          <h2 className="font-display text-4xl md:text-5xl">Inside the experiences</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-coral bg-secondary">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img src={slides[i].src} alt={slides[i].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-primary-foreground">
                  <h3 className="font-display text-3xl md:text-5xl mb-2">{slides[i].title}</h3>
                  <p className="text-base md:text-lg opacity-90 max-w-md">{slides[i].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={() => setI(p => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-soft hover:bg-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => setI(p => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-soft hover:bg-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-primary" : "w-2 bg-border"}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-coral p-12 md:p-20 text-primary-foreground text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-5 leading-tight">
            Your seat is waiting.
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
            Tell me which experience calls you, and I'll send the next available dates.
          </p>
          <Button variant="cream" size="xl" asChild>
            <a href={PAYPAL_URL} target="_blank" rel="noreferrer">Reserve Your Spot</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Experiences;
