import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, ArrowUpRight } from "lucide-react";
import retreatImg from "@/assets/exp-retreat.jpg";
import yogaImg from "@/assets/exp-yoga.jpg";
import NewsletterForm from "@/components/NewsletterForm";

const CALENDAR_URL = "https://calendar.notion.so/meet/marlaramos/wellgather";

const offerings = [
  {
    to: "/retreats/facilitator-training",
    title: "Wellness Retreat Facilitator Training Program",
    sub: "Experience Design Training",
    body: "Are you a soul-led wellness practitioner ready to design and lead transformational retreats? Learn the art of holding space, structuring experiences, and turning your passion into a profession.",
    date: "January 2027",
    image: retreatImg,
  },
  {
    to: "/retreats/founders",
    title: "Founders Wellness Retreat",
    sub: "For soul-led entrepreneurs",
    body: "Are you a soul-led entrepreneur looking for a retreat where you can elevate your communication, energy, and well-being while calibrating your business in high frequency? This is designed for you.",
    date: "November 2026",
    image: yogaImg,
  },
];

const Retreats = () => (
  <>
    {/* HERO */}
    <section className="bg-gradient-hero">
      <div className="container py-20 md:py-28 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-primary-soft/60 mb-6">
            <Sparkles className="w-3 h-3" /> Signature Retreats
          </span>
          <h1 className="font-display text-5xl md:text-7xl mb-5 leading-[1.05]">
            My 2 Signature <em className="text-primary not-italic">Offerings</em>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Learn how to design wellness retreats or grow a business calibrated in high frequency
            within a wellness retreat setting.
          </p>
        </motion.div>
      </div>
    </section>

    {/* OFFERINGS */}
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {offerings.map((o, i) => (
          <motion.div
            key={o.to}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-coral transition-all hover:-translate-y-1 flex flex-col"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={o.image}
                alt={o.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-white/90 text-primary px-3 py-1.5 rounded-full">
                {o.sub}
              </span>
            </div>
            <div className="p-7 md:p-8 flex flex-col flex-1 space-y-4">
              <h2 className="font-display text-2xl md:text-3xl leading-tight">{o.title}</h2>
              <p className="text-foreground/75 leading-relaxed flex-1">{o.body}</p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Calendar className="w-4 h-4" /> Upcoming: {o.date}
              </div>
              <div>
                <Button variant="coral" size="lg" asChild>
                  <Link to={o.to}>Join <ArrowUpRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CALLOUT BODY */}
    <section className="container pb-16">
      <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-soft p-10 md:p-14 border border-border/40 text-center">
        <p className="font-display text-2xl md:text-3xl leading-snug text-secondary-foreground">
          In my own journey to wellness, I created the two retreats I wished existed when I needed them most —
          the experiences I had to recreate manually for myself, the ones that helped me heal.
          Choose your path to your soul-led wellness journey, and together let's calibrate in high frequency.
        </p>
      </div>
    </section>

    {/* COLLABORATE */}
    <section className="container pb-12">
      <div className="rounded-2xl bg-secondary px-6 py-6 md:px-10 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-2xl md:text-3xl text-secondary-foreground text-center md:text-left">
          Interested in Collaborating with Marla for a Wellness Gathering?
        </p>
        <Button variant="coral" size="lg" asChild>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer">Collaborate with Marla</a>
        </Button>
      </div>
    </section>

    {/* NEWSLETTER */}
    <section className="container pb-20">
      <NewsletterForm />
    </section>
  </>
);

export default Retreats;
