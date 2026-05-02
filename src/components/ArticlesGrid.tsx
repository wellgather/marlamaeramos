import { ARTICLES } from "@/data/press";
import { ArrowUpRight } from "lucide-react";

export const ArticlesGrid = () => (
  <section className="container py-20">
    <div className="flex items-end justify-between mb-10">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Press & Stories</p>
        <h2 className="font-display text-4xl md:text-5xl max-w-xl">
          Words written about the work
        </h2>
      </div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ARTICLES.map((a, i) => (
        <a
          key={i}
          href={a.url}
          className="group relative p-8 rounded-3xl bg-gradient-soft border border-border/40 shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
            <span className="uppercase tracking-widest">{a.source}</span>
            <span>{a.date}</span>
          </div>
          <h3 className="font-display text-2xl leading-snug group-hover:text-primary transition-colors">
            {a.title}
          </h3>
          <ArrowUpRight className="absolute bottom-6 right-6 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      ))}
    </div>
  </section>
);
