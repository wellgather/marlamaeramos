import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, MapPin, Check } from "lucide-react";
import yogaImg from "@/assets/exp-yoga.jpg";
import portrait from "@/assets/portrait.jpg";

const APPLY_URL = "#"; // replace with form link

const becoming = [
  {
    title: "Energy-Led",
    body: "Become masterful in energy. We build ourselves before anything else.",
  },
  {
    title: "Psychology & Cleanse",
    body: "Releasing through somatic practice and inner work.",
  },
  {
    title: "Anatomy: Preparing the Body",
    body: "You are the brand. Movement, nutrition, and embodiment to prepare the vessel.",
  },
  {
    title: "Communications & Voice Activation",
    body: "Vagus nerve clearing to unleash the power that elevates your networking and presence.",
  },
];

const business = [
  "Business Framework",
  "Yoga & Movement",
  "Scale & Freedom",
  "AI & Modern Systems",
  "Systems & Container",
];

const musicHealing = ["Arts", "Sound Healing", "Movement & Ceremony"];

const takeaways = [
  "A Business Framework",
  "Communication Tool Set",
  "Personal Roadmap",
  "Energy Toolkit & Resources",
];

const masters = [
  { name: "Energy Healer", role: "Energy Mastery" },
  { name: "Psychologist", role: "Inner Work" },
  { name: "Business Guru", role: "Strategy & Scale" },
  { name: "Movement Teacher", role: "Embodiment" },
  { name: "Sound Bath Facilitator", role: "Healing" },
  { name: "Marla Ramos", role: "Moderator" },
];

const RetreatFounders = () => (
  <>
    {/* HERO */}
    <section className="relative">
      <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
        <img src={yogaImg} alt="Founders Wellness Retreat" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background/95" />
        <div className="container relative h-full flex items-end pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl space-y-5 text-primary-foreground">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full bg-white/90 text-primary">
              <Sparkles className="w-3 h-3" /> Founders Retreat
            </span>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] drop-shadow-md">
              Founders Wellness <em className="not-italic">Retreat</em>
            </h1>
            <p className="text-base md:text-lg opacity-90 max-w-2xl">
              A wellness retreat for soul-led entrepreneurs serious about co-creating their business
              calibrated in high frequency — rooted in tradition, backed by science.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* DATE */}
    <section className="container -mt-10 relative z-10">
      <div className="max-w-3xl mx-auto rounded-3xl bg-white shadow-coral p-6 md:p-8 grid sm:grid-cols-3 gap-6 items-center text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Next Retreat</p>
          <p className="font-display text-3xl">November 2026</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-foreground/80">
          <MapPin className="w-4 h-4 text-primary" /> Location TBA
        </div>
        <div className="flex items-center justify-center gap-2 text-foreground/80">
          <Calendar className="w-4 h-4 text-primary" /> Immersive Week
        </div>
      </div>
    </section>

    {/* INTRO */}
    <section className="container py-20 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Who this is for</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight">
          For energy-led entrepreneurs of <em className="text-primary not-italic">any industry.</em>
        </h2>
        <p className="mt-5 text-foreground/75 leading-relaxed">
          If you are soul-led and would like to bring your A+ game to the next level — or you're just starting out
          and want to build from a place of clarity, energy, and frequency — this retreat is your space.
        </p>
      </div>
    </section>

    {/* THE BECOMING */}
    <section className="container pb-20">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Part 1</p>
        <h2 className="font-display text-4xl md:text-5xl">The Becoming</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {becoming.map(b => (
          <div key={b.title} className="bg-white rounded-3xl p-7 shadow-card border border-border/40">
            <h3 className="font-display text-xl mb-2">{b.title}</h3>
            <p className="text-foreground/75 leading-relaxed">{b.body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* BUSINESS FRAMEWORK */}
    <section className="container pb-20">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-soft p-10 md:p-14 border border-border/40">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 text-center">Part 2</p>
        <h3 className="font-display text-3xl md:text-4xl mb-6 text-center">Business Framework</h3>
        <p className="text-center text-foreground/70 mb-8">Scale & Freedom — the architecture for soul-aligned growth.</p>
        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {business.map(m => (
            <div key={m} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/85">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MUSIC & HEALING */}
    <section className="container pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Part 3</p>
        <h3 className="font-display text-3xl md:text-4xl mb-8">Music & Healing</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {musicHealing.map(m => (
            <span key={m} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-soft text-primary font-medium">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* TAKEAWAYS */}
    <section className="container pb-20">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-display text-3xl md:text-4xl text-center mb-8">Participants will leave with</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {takeaways.map(t => (
            <div key={t} className="bg-white rounded-2xl p-5 border border-border/40 shadow-card flex items-center gap-3">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span className="font-display text-lg">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MASTERS */}
    <section className="container pb-20">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">The Masters</p>
        <h3 className="font-display text-3xl md:text-4xl">Your guides on this journey</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {masters.map((m, i) => (
          <div key={i} className="text-center">
            <div className="aspect-square rounded-3xl overflow-hidden mb-3 ring-4 ring-primary-soft">
              <img src={portrait} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <p className="font-display text-lg">{m.name}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{m.role}</p>
          </div>
        ))}
      </div>
    </section>

    {/* APPLY CTA */}
    <section className="container pb-24">
      <div className="max-w-2xl mx-auto rounded-3xl bg-gradient-coral text-primary-foreground p-10 md:p-14 text-center shadow-coral">
        <h3 className="font-display text-3xl md:text-4xl mb-3">Ready to elevate your frequency?</h3>
        <p className="opacity-90 mb-6">Spaces are intentionally limited to keep the container intimate.</p>
        <Button variant="cream" size="xl" asChild>
          <a href={APPLY_URL} target="_blank" rel="noreferrer">Apply to Join →</a>
        </Button>
      </div>
    </section>
  </>
);

export default RetreatFounders;
