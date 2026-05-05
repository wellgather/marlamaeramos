import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, MapPin, Check, Sunrise, Coffee, Users, Music, Moon, Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import retreatImg from "@/assets/exp-retreat.jpg";
import portrait from "@/assets/portrait.jpg";

const FORM_URL = "#"; // replace with form link
const PAYPAL_URL = "#"; // replace with payment link

const painBullets = [
  "You don't yet know how to structure a truly transformational experience",
  "You're unsure how to confidently lead and hold a group",
  "You struggle to communicate your value with clarity and soul",
  "You don't know how to price, package, or sell your retreat",
];

const steps = [
  {
    n: "01",
    title: "Master Yourself",
    body: "Build presence, emotional intelligence, and embodiment — learn to master the frequency people resonate with.",
  },
  {
    n: "02",
    title: "Learn to Facilitate",
    body: "Lead groups, hold sacred space, and communicate with grounded authority.",
  },
  {
    n: "03",
    title: "Design Transformational Retreats",
    body: "Create soul-led wellness retreats people will never forget.",
  },
  {
    n: "04",
    title: "Launch & Monetise",
    body: "Turn your retreat into a sustainable, profitable offering.",
  },
];

const modules = [
  "Foundations of Wellness Retreat Design",
  "Energetics, Frequency & Embodiment",
  "Group Facilitation & Space Holding",
  "Programming & Itinerary Architecture",
  "Sourcing Locations & Building Partnerships",
  "Pricing, Packaging & Soulful Sales",
  "Marketing, Storytelling & Launch Strategy",
  "Aftercare & Building Community",
];

const itinerary = [
  { time: "Morning", item: "Yoga & Breathwork", icon: Sunrise },
  { time: "Late Morning", item: "Workshop", icon: Users },
  { time: "Midday", item: "Nourishing Lunch", icon: Coffee },
  { time: "Afternoon", item: "Workshop", icon: Users },
  { time: "Late Afternoon", item: "Wellness Activities", icon: Heart },
  { time: "Evening", item: "Sound Bath", icon: Music },
  { time: "Dinner", item: "Communal Dinner", icon: Coffee },
  { time: "Night", item: "Gathering & Reflection", icon: Moon },
];

const spaceHolders = [
  { name: "Marla Ramos", role: "Lead Facilitator" },
  { name: "Guest Teacher", role: "Energy & Embodiment" },
  { name: "Guest Teacher", role: "Sound Healing" },
  { name: "Guest Teacher", role: "Movement" },
];

const faqs = [
  { q: "Who is this program for?", a: "Soul-led wellness practitioners, yoga teachers, coaches, and healers ready to design and lead their own retreats." },
  { q: "Do I need prior experience?", a: "No formal experience required — only a clear desire to serve and grow." },
  { q: "What's included?", a: "Full training, accommodations, meals, workshops, integration sessions, and certification upon completion." },
  { q: "Is there a payment plan?", a: "Yes — we offer flexible payment options. Reach out for details." },
];

const RetreatFacilitator = () => (
  <>
    {/* HERO */}
    <section className="relative">
      <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
        <img src={retreatImg} alt="Wellness retreat" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background/95" />
        <div className="container relative h-full flex items-end pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl space-y-5 text-primary-foreground">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full bg-white/90 text-primary">
              <Sparkles className="w-3 h-3" /> Experience Design Training
            </span>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] drop-shadow-md">
              Become a Certified Wellness Retreat Facilitator <em className="not-italic">— who creates transformational experiences.</em>
            </h1>
            <p className="text-base md:text-lg opacity-90 max-w-2xl">
              A Wellness Retreat Teacher Training Program calibrated in high frequency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* DATE FEATURE */}
    <section className="container -mt-10 relative z-10">
      <div className="max-w-3xl mx-auto rounded-3xl bg-white shadow-coral p-6 md:p-8 grid sm:grid-cols-3 gap-6 items-center text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Next Retreat</p>
          <p className="font-display text-3xl">January 2027</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-foreground/80">
          <MapPin className="w-4 h-4 text-primary" /> Bali, Indonesia
        </div>
        <div className="flex items-center justify-center gap-2 text-foreground/80">
          <Calendar className="w-4 h-4 text-primary" /> 7 Days · Immersive
        </div>
      </div>
    </section>

    {/* PAIN POINT */}
    <section className="container py-20 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Sound familiar?</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight">
          You're passionate about wellness — but don't know how to turn it into a <em className="text-primary not-italic">retreat.</em>
        </h2>
        <p className="mt-5 text-foreground/75 leading-relaxed">
          You may have the skills, the vision, and even the lived experience… but without the right structure,
          confidence, and soul-led training, creating a meaningful retreat can feel overwhelming.
          The best way to learn something is to live it.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="font-display text-2xl md:text-3xl text-center mb-6">Most retreats fail before they even begin.</h3>
        <ul className="space-y-3">
          {painBullets.map((p, i) => (
            <li key={i} className="flex gap-3 p-5 rounded-2xl bg-white border border-border/40 shadow-card">
              <div className="w-7 h-7 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <span className="text-primary font-display text-sm">{i + 1}</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* WHAT YOU RECEIVE */}
    <section className="container pb-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">What you'll receive</p>
        <h2 className="font-display text-4xl md:text-5xl">A step-by-step system from passion to profession.</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {steps.map(s => (
          <div key={s.n} className="bg-white rounded-3xl p-7 shadow-card border border-border/40">
            <span className="font-display text-3xl text-primary">{s.n}</span>
            <h3 className="font-display text-xl mt-3 mb-2">{s.title}</h3>
            <p className="text-sm text-foreground/75 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* MODULES */}
    <section className="container pb-20">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-soft p-10 md:p-14 border border-border/40">
        <h3 className="font-display text-3xl md:text-4xl mb-6 text-center">Modules you'll learn</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {modules.map(m => (
            <div key={m} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/85">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SAMPLE ITINERARY */}
    <section className="container pb-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 text-center">A day in the life</p>
        <h3 className="font-display text-3xl md:text-4xl mb-8 text-center">Sample Itinerary</h3>
        <div className="space-y-3">
          {itinerary.map(({ time, item, icon: Icon }) => (
            <div key={time + item} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-border/40 shadow-card">
              <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{time}</p>
                <p className="font-display text-lg">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* DESTINATION */}
    <section className="container pb-20">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative">
        <img src={retreatImg} alt="The destination" className="w-full h-[420px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
          <div className="text-primary-foreground">
            <p className="text-xs uppercase tracking-[0.3em] mb-2 opacity-90">The Destination</p>
            <h3 className="font-display text-4xl">Bali, Indonesia</h3>
          </div>
        </div>
      </div>
    </section>

    {/* SPACE HOLDERS */}
    <section className="container pb-20">
      <h3 className="font-display text-3xl md:text-4xl text-center mb-10">Your Space Holders</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {spaceHolders.map((p, i) => (
          <div key={i} className="text-center">
            <div className="aspect-square rounded-3xl overflow-hidden mb-3 ring-4 ring-primary-soft">
              <img src={portrait} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <p className="font-display text-lg">{p.name}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{p.role}</p>
          </div>
        ))}
      </div>
    </section>

    {/* TESTIMONIAL */}
    <section className="container pb-20">
      <div className="max-w-3xl mx-auto bg-gradient-coral text-primary-foreground rounded-3xl p-10 md:p-14 text-center shadow-coral">
        <p className="font-display text-2xl md:text-3xl leading-snug mb-5">
          "This program transformed how I hold space. I now lead retreats with confidence, soul, and structure."
        </p>
        <p className="text-sm opacity-90">— Past participant</p>
      </div>
    </section>

    {/* FAQ */}
    <section className="container pb-20">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-display text-3xl md:text-4xl text-center mb-8">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-2xl border border-border/40 px-5 shadow-card">
              <AccordionTrigger className="font-display text-lg text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/75">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* NEXT DATE */}
    <section className="container pb-20">
      <div className="max-w-3xl mx-auto rounded-3xl bg-secondary p-10 md:p-14 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Next Date</p>
        <h3 className="font-display text-3xl md:text-4xl mb-5 text-secondary-foreground">January 2027 · Bali, Indonesia</h3>
        <Button variant="coral" size="xl" asChild>
          <a href={FORM_URL} target="_blank" rel="noreferrer">Get More Information →</a>
        </Button>
      </div>
    </section>

    {/* PRICE / FINAL CTA */}
    <section className="container pb-24">
      <div className="max-w-2xl mx-auto rounded-3xl bg-gradient-coral text-primary-foreground p-10 md:p-14 text-center shadow-coral">
        <h3 className="font-display text-3xl md:text-4xl mb-3">Ready to Lead Transformational Retreats?</h3>
        <p className="opacity-90 mb-6">I am ready to step into my role as a wellness retreat facilitator.</p>
        <Button variant="cream" size="xl" asChild>
          <a href={PAYPAL_URL} target="_blank" rel="noreferrer">Reserve My Spot →</a>
        </Button>
      </div>
    </section>
  </>
);

export default RetreatFacilitator;
