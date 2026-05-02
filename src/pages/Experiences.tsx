import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import soundHealing from "@/assets/exp-soundhealing.jpg";
import retreat from "@/assets/exp-retreat.jpg";
import yoga from "@/assets/exp-yoga.jpg";
import collage1 from "@/assets/collage-1.jpg";
import collage2 from "@/assets/collage-2.jpg";
import collage3 from "@/assets/collage-3.jpg";
import collage4 from "@/assets/collage-4.jpg";
import collage5 from "@/assets/collage-5.jpg";
import collage6 from "@/assets/collage-6.jpg";

const PAYPAL_URL = "https://www.wellgather.com?utm_source=website&utm_medium=web&utm_campaign=marlaramoswebsite&utm_id=mramos&utm_term=mmwebsite"; // user will swap

const slides = [
  { src: retreat, title: "Coastal Retreats", desc: "Five-day immersions on the edge of the sea.", url: "https://www.wellgather.com" },
  { src: soundHealing, title: "Sound Healing", desc: "Crystal bowls, voice, and frequency journeys.", url: "https://www.wellgather.com" },
  { src: yoga, title: "Movement & Breath", desc: "Sunrise sessions to wake the body gently.", url: "https://www.wellgather.com" },
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
              <Sparkles className="w-3 h-3" /> IN-PERSON GATHERINGS
            </span>
            <h1 className="font-display text-5xl leading-[1.05] text-secondary-foreground md:text-7xl">
              Don't miss the wellness experiences <em className="text-primary not-italic">near you.</em>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Let me introduce you to Wellgather. A platform built by wonderful souls to help promote the transformative wellness experience happening around the world. Our mission to make wellness experiences accessible and part of the daily lives of every person. Step away from the noise. Join intimate retreats, sound ceremonies, and movement
              practices designed to return you to your center — together, in real life. See the experiences in Wellgather - our social wellness platform where you can find, book, share and organize your own wellness activities.
            </p>
            <div className="pt-4">
              <Button variant="coral" size="xl" asChild>
                <a href={PAYPAL_URL} target="_blank" rel="noreferrer">Find Wellness Activities Near You →</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Limited spaces · Worldwide locations</p>
          </motion.div>
        </div>
      </section>

      {/* SLIDESHOW */}
      <section className="container py-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">THE MOVEMENT</p>
          <h2 className="font-display text-4xl md:text-5xl">Join my upcoming wellness activities.</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-coral bg-secondary">
            <AnimatePresence mode="wait">
              <motion.a
                key={i}
                href={slides[i].url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 block cursor-pointer"
                aria-label={`Learn more about ${slides[i].title}`}
              >
                <img src={slides[i].src} alt={slides[i].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-primary-foreground">
                  <h3 className="font-display text-3xl md:text-5xl mb-2">{slides[i].title}</h3>
                  <p className="text-base md:text-lg opacity-90 max-w-md">{slides[i].desc}</p>
                </div>
              </motion.a>
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
      <section className="container pt-8 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-coral p-12 md:p-20 text-primary-foreground text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-5 leading-tight">
            Start and share your wellness journey.
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
            Be the reason wellness happens where you are. Experience, share, and co-create wellness moments that inspire others to live well. 
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="cream" size="xl" asChild>
              <a href={PAYPAL_URL} target="_blank" rel="noreferrer">Join Now!</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="https://wellgather.com/mission/" target="_blank" rel="noreferrer">Support Our Mission</a>
            </Button>
          </div>
        </div>
      </section>

      {/* INSTAGRAM COLLAGE — minimalist 6-image strip */}
      <section className="container pt-4 pb-8">
        <a
          href="https://www.instagram.com/wellgather"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
          aria-label="View @wellgather on Instagram"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2">
            {[collage1, collage2, collage3, collage4, collage5, collage6].map((src, idx) => (
              <div key={idx} className="aspect-square overflow-hidden">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </a>
      </section>
    </>
  );
};

export default Experiences;
