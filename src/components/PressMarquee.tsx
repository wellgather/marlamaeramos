import { PRESS_LOGOS } from "@/data/press";

export const PressMarquee = () => {
  const items = [...PRESS_LOGOS, ...PRESS_LOGOS];
  return (
    <section className="py-12 border-y border-border/40 bg-white/40">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
        Affiliations and As seen on
      </p>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((logo, i) => (
            <img
              key={`a-${i}`}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-12 md:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity mx-10"
            />
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {items.map((logo, i) => (
            <img
              key={`b-${i}`}
              src={logo.src}
              alt=""
              loading="lazy"
              className="h-12 md:h-14 w-auto object-contain opacity-70 mx-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
