import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Sparkles, Calendar, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";

const PAYPAL_URL = "https://paypal.me/yourname"; // user will swap

const Consultancy = () => (
  <>
    {/* HERO */}
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container pt-20 pb-16 md:pt-28 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-primary-soft/60">
            <Sparkles className="w-3 h-3" /> 1:1 Consultancy
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
            The work that <em className="text-primary not-italic">changes everything.</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A guided journey, designed for you alone — to soften the patterns, deepen the breath,
            and finally meet the version of you that's been waiting underneath.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button variant="coral" size="xl" asChild>
              <a href={PAYPAL_URL} target="_blank" rel="noreferrer">Book a Discovery Call</a>
            </Button>
            <Button variant="cream" size="xl" asChild>
              <a href="#offer">See what's included</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* WHAT YOU GET */}
    <section id="offer" className="container py-24">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">What you receive</p>
        <h2 className="font-display text-4xl md:text-5xl">A complete container for your becoming</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { icon: Calendar, title: "12 Weekly Sessions", desc: "Hour-long 1:1 calls, held in deep presence." },
          { icon: MessageCircle, title: "Voice Note Support", desc: "Daily access to me between our sessions." },
          { icon: Heart, title: "Personalized Practices", desc: "Custom rituals made for your body, your life." },
        ].map(item => (
          <div key={item.title} className="p-8 rounded-3xl bg-white border border-border/40 shadow-card">
            <div className="w-12 h-12 rounded-2xl bg-primary-soft flex items-center justify-center mb-5">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-2xl mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* WHAT'S INCLUDED — DROPDOWN */}
    <section className="container py-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 text-center">The offering</p>
        <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">Explore what's inside</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Foundations of Embodiment", a: "Six weeks of breathwork, somatic practice, and nervous system regulation. We build the floor on which everything else stands." },
            { q: "Shadow & Story", a: "We meet the patterns gently — uncovering inherited stories, reframing old scripts, and reclaiming the parts of you that were exiled." },
            { q: "Ritual Design", a: "Together we craft daily and seasonal rituals that fit your life — sustainable practices you'll carry far beyond our work." },
            { q: "Integration & Guidance", a: "Voice memos, written reflections, custom audio meditations — between-session support so you're never doing the work alone." },
            { q: "A Closing Ceremony", a: "A final session held as ceremony — to honor what's been transformed and seal the next chapter." },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border/40 bg-white px-6 shadow-card"
            >
              <AccordionTrigger className="font-display text-xl py-5 hover:no-underline hover:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* TESTIMONIALS — empty placeholder structure (no fake reviews) */}
    <section className="container py-24">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl">Words from the work</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Real reflections from real clients. (Add your testimonials here.)
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3].map(i => (
          <div key={i} className="p-8 rounded-3xl bg-gradient-soft border border-dashed border-border/60 min-h-[240px] flex items-center justify-center">
            <p className="text-sm text-muted-foreground italic text-center">Testimonial coming soon</p>
          </div>
        ))}
      </div>
    </section>

    {/* INVESTMENT / FINAL CTA */}
    <section className="container pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-coral p-12 md:p-20 text-primary-foreground text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] mb-4 opacity-80">The investment</span>
        <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
          Your one life is asking.
        </h2>
        <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
          Spaces are intentionally limited. Begin with a complimentary discovery call —
          no pressure, just presence.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto mb-10 text-left text-sm">
          {["12 private sessions", "Daily voice support", "Custom practice library", "Closing ceremony"].map(f => (
            <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4" /> {f}</li>
          ))}
        </ul>
        <Button variant="cream" size="xl" asChild>
          <a href={PAYPAL_URL} target="_blank" rel="noreferrer">Book Discovery Call →</a>
        </Button>
      </div>
    </section>
  </>
);

export default Consultancy;
