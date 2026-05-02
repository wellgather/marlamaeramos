import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Clock, Layers } from "lucide-react";
import { COURSES } from "@/data/courses";

const Courses = () => (
  <>
    <section className="bg-gradient-hero">
      <div className="container py-20 md:py-28 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-primary-soft/60 mb-6">
            <Sparkles className="w-3 h-3" /> Digital Library
          </span>
          <h1 className="font-display text-5xl md:text-7xl mb-5">
            Courses & <em className="text-primary not-italic">practices</em>
          </h1>
          <p className="text-lg text-foreground/70 max-w-xl mx-auto">
            Self-paced journeys to return to, again and again. Secure checkout via ThriveCart —
            discount codes can be applied at checkout.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES.map((course, i) => (
          <motion.article
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-border/40 shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
          >
            <div className="aspect-[4/5] bg-gradient-soft relative overflow-hidden">
              {course.image ? (
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-primary/30 font-display text-7xl">
                  ✦
                </div>
              )}
              <span className="absolute top-4 left-4 text-xs uppercase tracking-widest bg-white/80 backdrop-blur px-3 py-1 rounded-full text-foreground/70">
                {course.level}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1 space-y-3">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
              </div>
              <h2 className="font-display text-2xl leading-snug">{course.title}</h2>
              <p className="text-sm text-primary/80 italic">{course.tagline}</p>
              <p className="text-sm text-muted-foreground line-clamp-3 flex-1">{course.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <span className="font-display text-2xl text-primary">{course.price}</span>
                <Button variant="coral" size="sm" asChild>
                  <a href={course.checkoutUrl} target="_blank" rel="noreferrer">
                    Enroll <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-20 text-center max-w-xl mx-auto">
        <Layers className="w-8 h-8 text-primary mx-auto mb-4" />
        <h3 className="font-display text-3xl mb-3">Want a path tailored to you?</h3>
        <p className="text-muted-foreground mb-6">
          The library is a beautiful start. For deeper, personalized work, explore 1:1 consultancy.
        </p>
        <Button variant="cream" size="lg" asChild>
          <Link to="/consultancy">Explore Consultancy →</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Courses;
