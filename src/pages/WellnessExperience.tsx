import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Sparkles, Calendar, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { CALENDAR_URL } from "@/data/hospitality";

const WellnessExperience = () => (
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
            Let's design your <em className="text-primary not-italic">wellness experience.</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            When your wellness vision needs direction, you need expert guidance to bring your wellness offering to life. I will help you design intentional, transformative experiences tailored to your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button variant="coral" size="xl" asChild>
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer">Book a Discovery Call</a>
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
        <h2 className="font-display text-4xl md:text-5xl">Define your signature wellness experience that defines your brand.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { icon: Calendar, title: "12 Weekly Sessions", desc: "Hour-long 1:1 calls, held in deep presence." },
          { icon: MessageCircle, title: "Voice Note Support", desc: "Daily access to me between our sessions." },
          { icon: Heart, title: "4 Weekly Sessions", desc: "Hour-long workshop held in deep presence." },
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
        <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">The Formula to Your Irresistible & Transformative Wellness Offering </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Building a Repeat Wellness Community", a: "If you feel unsure what actually works in wellness and worry your offering may come across as generic or inauthentic, I guide you with real industry insight so you can create experiences that truly resonate, convert, and avoid wellness washing that today’s consumers can easily recognise." },
            { q: "SOP Framework & Compounding Knowledge", a: "If your wellness offering feels scattered or lacks depth, I help you shape it into a clear, intentional experience that flows seamlessly, avoids activities that don’t truly fit your brand, stands out in your market, and creates real impact for your guests." },
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

    {/* TESTIMONIALS */}
    <section className="container py-24">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl">Words from the work</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3].map(i => (
          <div key={i} className="p-8 rounded-3xl bg-gradient-soft border border-dashed border-border/60 min-h-[240px] flex items-center justify-center">
            <p className="text-sm text-muted-foreground italic text-center">Testimonial coming soon</p>
          </div>
        ))}
      </div>
    </section>

    {/* HERO PRICE FOOTER */}
    <section className="container pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-coral p-12 md:p-20 text-primary-foreground text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] mb-4 opacity-80 font-extrabold">THE INVESTMENT</span>
        <h2 className="font-display text-4xl md:text-6xl mb-3 leading-tight">
          A complete 1-month container
        </h2>
        <div className="flex items-end justify-center gap-2 mb-2">
          <span className="font-display text-6xl md:text-7xl">$399</span>
          <span className="text-sm opacity-70 mb-3">USD</span>
        </div>
        <p className="text-sm opacity-80 mb-8">or 3 monthly payments of $133</p>

        <ul className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto mb-10 text-left text-sm">
          {["coaching calls", "Daily voice support", "Custom practice library", "Closing ceremony"].map(f => (
            <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4" /> {f}</li>
          ))}
        </ul>
        <Button variant="cream" size="xl" asChild>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer">Book Discovery Call →</a>
        </Button>
        <p className="text-xs opacity-70 mt-4">Spaces are intentionally limited.</p>
      </div>
    </section>
  </>
);

export default WellnessExperience;
