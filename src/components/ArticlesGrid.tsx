import { ARTICLES } from "@/data/press";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

    <Carousel opts={{ align: "start", loop: true }} className="px-2">
      <CarouselContent className="-ml-4">
        {ARTICLES.map((a, i) => (
          <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <a
              href={a.url}
              className="group block h-full rounded-3xl overflow-hidden bg-gradient-soft border border-border/40 shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative p-6">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="uppercase tracking-widest">{a.source}</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="font-display text-xl leading-snug pr-8 group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <ArrowUpRight className="absolute bottom-6 right-6 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4" />
      <CarouselNext className="hidden md:flex -right-4" />
    </Carousel>
  </section>
);
