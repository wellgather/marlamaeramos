import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles, Calendar, MapPin } from "lucide-react";
import collage1 from "@/assets/collage-1.jpg";
import collage2 from "@/assets/collage-2.jpg";
import collage3 from "@/assets/collage-3.jpg";
import collage4 from "@/assets/collage-4.jpg";
import collage5 from "@/assets/collage-5.jpg";
import collage6 from "@/assets/collage-6.jpg";
import { UPCOMING_EXPERIENCES } from "@/data/experiences";

const PAYPAL_URL = "https://www.wellgather.com?utm_source=website&utm_medium=web&utm_campaign=marlaramoswebsite&utm_id=mramos&utm_term=mmwebsite";
const CALENDAR_URL = "https://calendar.notion.so/meet/marlaramos/wellgather";

const slides = UPCOMING_EXPERIENCES;

const Experiences = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);


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
              Let me introduce you to Wellgather. A platform we've built with love to help promote the transformative wellness experience happening around the world. Our mission is to make wellness experiences accessible and part of the daily lives of every person. Step away from the noise. Join intimate retreats, sound ceremonies, and movement
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

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {slides.map((e, idx) => (
            <motion.a
              key={e.title}
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group block rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-coral transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
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
      </section>

      {/* COLLABORATE BANNER */}
      <section className="container py-6">
        <div className="rounded-2xl bg-secondary px-6 py-6 md:px-10 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-2xl md:text-3xl text-secondary-foreground text-center md:text-left">
            Interested in Collaborating with Marla for a Wellness Gathering?
          </p>
          <Button variant="coral" size="lg" asChild>
            <a href={CALENDAR_URL} target="_blank" rel="noreferrer">Collaborate</a>
          </Button>
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
