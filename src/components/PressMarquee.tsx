import { PRESS_LOGOS } from "@/data/press";

export const PressMarquee = () => {
  const items = [...PRESS_LOGOS, ...PRESS_LOGOS];
  return (
    <section className="py-12 border-y border-border/40 bg-white/40">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
        As featured in
      </p>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((logo, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl text-foreground/40 whitespace-nowrap tracking-widest"
            >
              {logo}
            </span>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {items.map((logo, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl text-foreground/40 whitespace-nowrap tracking-widest"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
