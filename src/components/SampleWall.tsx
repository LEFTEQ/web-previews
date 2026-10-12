import { useEffect, useRef, type CSSProperties } from "react";
import { LearnChevron } from "./Icons";

const TILES = [
  {
    code: "PD-01 / bezesparé / stěrka",
    title: "panDOMO podlahy a stěny",
    text: "Dekorativní stěrka bez spár, každá plocha je originál.",
    href: "#pandomo",
    mat: "mat-cement",
  },
  {
    code: "DP-02 / dřevo / podlaha",
    title: "Dřevěné podlahy",
    text: "Podlaha vybraná podle místnosti a podkladu.",
    href: "#drevene-podlahy",
    mat: "mat-oak",
  },
  {
    code: "DV-03 / dveře / interiér",
    title: "Dveře",
    text: "Dveře, které ladí s podlahou i interiérem.",
    href: "#dvere-a-vyroba",
    mat: "mat-veneer",
  },
  {
    code: "TV-04 / na míru / truhlářství",
    title: "Truhlářská výroba",
    text: "Truhlářské prvky na míru vašemu prostoru.",
    href: "#dvere-a-vyroba",
    mat: "mat-joinery",
  },
];

export function SampleWall() {
  const list = useRef<HTMLUListElement>(null);

  // „Trowel sweep“: světelný pruh přejede přes vzorek jednou, po vstupu do viewportu.
  useEffect(() => {
    const el = list.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const tiles = Array.from(el.querySelectorAll<HTMLElement>(".sweep"));
    let remaining = tiles.length;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-swept");
          io.unobserve(entry.target);
          remaining -= 1;
          if (remaining <= 0) io.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    tiles.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section id="nabidka" aria-labelledby="nabidka-title" className="py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <p className="label">Vzorkovnice</p>
        <h2 id="nabidka-title" className="mt-2 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Čtyři řemesla, jeden interiér.
        </h2>
        <p className="mt-4 max-w-xl text-beton">
          Projděte si nabídku jako stěnu vzorků. Každý vzorek vás zavede k podrobnějšímu popisu.
        </p>
      </div>

      <ul
        ref={list}
        aria-label="Nabídka služeb"
        className="sample-row mx-auto mt-10 flex max-w-[1440px] snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-10"
      >
        {TILES.map((t, i) => (
          <li key={t.code} className="w-[72%] shrink-0 snap-start sm:w-[42%] lg:w-auto">
            <a href={t.href} className="t-learn sample-tile group block h-full">
              <div className={`swatch sweep ${t.mat} aspect-[3/4] lg:aspect-[3/5]`} style={{ "--i": i } as CSSProperties}>
                {t.mat === "mat-veneer" && <span className="door-panel" aria-hidden="true" />}
                <span className="swatch-code">{t.code}</span>
              </div>
              <div className="px-1.5 pb-2 pt-4">
                <h3 className="text-2xl leading-tight">{t.title}</h3>
                <p className="mt-1.5 text-[0.95rem] text-beton">{t.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-medium text-orech">
                  Více <LearnChevron />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
