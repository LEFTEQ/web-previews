import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      el.classList.remove("is-hiding");
      void el.offsetHeight;
      el.classList.add("is-shown");
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="top" aria-labelledby="hero-h" className="bg-loess">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 md:px-10 md:pt-14">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/80">
          <span>Řez A–A · povrch · km 0,000</span>
          <span className="border border-ink px-2 py-1 text-ink">Neoficiální koncept</span>
        </div>

        <div ref={ref} className="t-stagger mt-6 md:mt-10">
          <h1 id="hero-h" className="font-display font-extrabold uppercase leading-[0.95] tracking-[-0.01em]">
            <span className="t-stagger-line t-stagger-line--1 text-[clamp(1.55rem,6.4vw,6.25rem)]">
              Zemní a vodohospodářská činnost
            </span>
            <span className="t-stagger-line t-stagger-line--2 mt-2 text-[clamp(1.35rem,5vw,4.5rem)] text-clay">
              demolice · autodoprava
            </span>
          </h1>
          <p className="t-stagger-line t-stagger-line--3 mt-6 max-w-[60ch] text-lg leading-relaxed md:text-xl">
            ZVČ, s.r.o. se sídlem v Hradci Králové: zemní práce, vodní stavby, demolice a doprava
            stavebního materiálu. Poptávku vyřídíte nejrychleji telefonem, případně e-mailem.
          </p>
        </div>
      </div>

      <figure className="relative mx-auto mt-8 max-w-[1440px] md:mt-12 md:px-10">
        <img
          src="/hero.webp"
          alt="Ilustrační obrázek vytvořený umělou inteligencí: stavební stroj v krajině"
          className="h-[240px] w-full object-cover sm:h-[360px] md:h-[520px]"
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-loess md:left-10">
          AI ilustrace · nejde o techniku ani zakázku firmy
        </figcaption>
      </figure>
    </section>
  );
}
