import { useEffect, useState, type CSSProperties } from "react";
import { PHONES } from "../data";
import { LearnChevron, PhoneIcon } from "./Icons";

/* Geometrie řezu: bod na sklonu střechy. t = poloha podél sklonu (0 = okap, 1 = hřeben),
   o = odsazení kolmo nad spodní hranou krokve. */
const P = (t: number, o: number): [number, number] => [
  Math.round((60 + 360 * t - 0.6 * o) * 10) / 10,
  Math.round((360 - 270 * t - 0.8 * o) * 10) / 10,
];
const pt = (t: number, o: number) => P(t, o).join(" ");
const WIN0 = 0.56;
const WIN1 = 0.7;
const inWindow = (a: number, b: number) => b > WIN0 - 0.01 && a < WIN1 + 0.01;

const RAFTER = `M${pt(0, 0)} L${pt(1, 0)} M${pt(0, 22)} L${pt(1, 22)} M${pt(0, 0)} L${pt(0, 22)} M${pt(1, 0)} L${pt(1, 22)}`;
const WALL = "M100 440 V330 M130 440 V307.5 M20 440 H440";
const MEMBRANE = `M${pt(-0.03, 26)} L${pt(1, 26)}`;
const BATTENS = (() => {
  let d = "";
  for (let t = 0.03; t < 0.97; t += 0.07) {
    if (inWindow(t, t + 0.02)) continue;
    d += `M${pt(t, 28)} L${pt(t + 0.02, 28)} L${pt(t + 0.02, 35)} L${pt(t, 35)} Z `;
  }
  return d.trim();
})();
const TILES = (() => {
  let d = "";
  for (let s = -0.04; s < 0.995; s += 0.062) {
    if (inWindow(s, s + 0.062)) continue;
    d += `M${pt(s, 40)} L${pt(s, 48)} L${pt(s + 0.062, 40)} `;
  }
  return d.trim();
})();
const WINDOW =
  `M${pt(WIN0, 14)} L${pt(WIN1, 14)} L${pt(WIN1, 56)} L${pt(WIN0, 56)} Z ` +
  `M${pt(WIN0 + 0.012, 50)} L${pt(WIN1 - 0.012, 50)} M${pt(WIN0 + 0.012, 45)} L${pt(WIN1 - 0.012, 45)} ` +
  `M${pt(WIN0, 14)} L${pt(WIN0, -16)} M${pt(WIN1, 14)} L${pt(WIN1, -16)}`;
const GUTTER = "M6 344 A14 14 0 0 0 34 344 M3 344 H9 M31 344 H37 M17 358 V440 M23 358 V440";

type LayerId = "krytiny" | "okna" | "prislusenstvi" | "krovy" | "okapy";

const LAYERS: { id: LayerId; label: string; note: string; y: number; anchor: [number, number]; num: string }[] = [
  { id: "krytiny", label: "Střešní krytiny", note: "krytina a montáž", y: 70, anchor: P(0.86, 44), num: "01" },
  { id: "okna", label: "Střešní okna", note: "světlo do podkroví", y: 150, anchor: P(0.63, 35), num: "02" },
  { id: "prislusenstvi", label: "Doplňky", note: "příslušenství střechy", y: 230, anchor: P(0.32, 31), num: "03" },
  { id: "krovy", label: "Krovy", note: "nosná konstrukce", y: 300, anchor: P(0.2, 11), num: "04" },
  { id: "okapy", label: "Okapové systémy", note: "odvod vody", y: 380, anchor: [20, 352], num: "05" },
];

const v = (i: number) => ({ ["--i" as string]: i }) as CSSProperties;

export function Hero() {
  const [active, setActive] = useState<LayerId | null>(null);
  const [drawn, setDrawn] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setDrawn(true));
    });
    const t = window.setTimeout(() => setShown(true), 560);
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
      window.clearTimeout(t);
    };
  }, []);

  const isA = (id: LayerId) => (active === id ? "true" : "false");

  return (
    <section aria-labelledby="hero-title" className="bg-titan">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className={`t-stagger lg:col-span-5 lg:pt-6${shown ? " is-shown" : ""}`}>
          <p className="t-stagger-line font-mono text-xs uppercase tracking-[0.14em] text-ocel">
            Klempířství · Ostrava-Třebovice
          </p>
          <h1 id="hero-title" className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.06] tracking-tight sm:text-5xl xl:text-[3.5rem]">
            <span className="t-stagger-line t-stagger-line--2">Klempířství Šichnárek, Ostrava</span>
            <span className="t-stagger-line t-stagger-line--3 text-cihla">– střechy od krovu po okap</span>
          </h1>
          <p className="t-stagger-line t-stagger-line--4 mt-6 max-w-xl text-lg leading-relaxed text-antracit/85">
            Střešní krytiny a jejich montáž, krovy, střešní okna, okapové systémy a příslušenství. K tomu konzultace
            a nacenění — zavolejte, nebo pošlete poptávku e-mailem.
          </p>
          <div className="t-stagger-line t-stagger-line--5 mt-8">
            <div className="flex flex-wrap gap-3">
              <a href="#poptavka" className="btn btn-primary t-learn">
                Nezávazná poptávka <LearnChevron />
              </a>
              <a href={PHONES[0].href} className="btn btn-secondary">
                <PhoneIcon /> <span className="whitespace-nowrap">{PHONES[0].label}</span>
              </a>
            </div>
            <p className="mt-3 text-sm text-ocel">
              Druhá linka:{" "}
              <a href={PHONES[1].href} className="u-link whitespace-nowrap font-medium text-antracit">
                {PHONES[1].label}
              </a>
            </p>
          </div>
        </div>

        <figure className={`roof lg:col-span-7${drawn ? " is-drawn" : ""}`}>
          <div className="relative">
            <svg viewBox="0 0 640 460" className="roof-svg block h-auto w-full" role="img" aria-labelledby="roof-title">
              <title id="roof-title">Schematický řez šikmou střechou od krovu přes doplňky, krytinu a střešní okno až po okap</title>
              <g className="roof-layer" data-active={isA("krovy")} style={v(0)}>
                <path className="stroke draw" pathLength={1} d={RAFTER} />
                <path className="stroke draw" pathLength={1} d={WALL} />
              </g>
              <g className="roof-layer" data-active={isA("prislusenstvi")}>
                <path className="stroke draw" pathLength={1} d={MEMBRANE} style={v(1)} />
                <path className="stroke draw" pathLength={1} d={BATTENS} style={v(2)} />
              </g>
              <g className="roof-layer" data-active={isA("okna")} style={v(3)}>
                <path className="stroke draw" pathLength={1} d={WINDOW} />
              </g>
              <g className="roof-layer" data-active={isA("krytiny")} style={v(4)}>
                <path className="stroke draw" pathLength={1} d={TILES} />
              </g>
              <g className="roof-layer" data-active={isA("okapy")} style={v(5)}>
                <path className="stroke draw" pathLength={1} d={GUTTER} />
              </g>

              <g className="leaders">
                {LAYERS.map((l) => {
                  const d = `M${l.anchor[0]} ${l.anchor[1]} L450 ${l.y}`;
                  return (
                    <g key={l.id} className="roof-leader" data-active={isA(l.id)} style={v(5)}>
                      <path className="leader-base draw" pathLength={1} d={d} />
                      <path className="leader-hot" pathLength={1} d={d} />
                      <circle className="anchor" cx={l.anchor[0]} cy={l.anchor[1]} r="3.5" />
                    </g>
                  );
                })}
              </g>
            </svg>

            <nav aria-label="Vrstvy střechy – nabídka">
              <ol className="layer-nav">
                {LAYERS.map((l) => (
                  <li key={l.id} style={{ ["--y" as string]: (l.y / 460) * 100 } as CSSProperties}>
                    <a
                      href={`#${l.id}`}
                      className="layer-link t-learn"
                      data-active={isA(l.id)}
                      onMouseEnter={() => setActive(l.id)}
                      onMouseLeave={() => setActive((a) => (a === l.id ? null : a))}
                      onFocus={() => setActive(l.id)}
                      onBlur={() => setActive((a) => (a === l.id ? null : a))}
                    >
                      <span className="font-mono text-[11px] text-ocel">{l.num}</span>
                      <span className="min-w-0">
                        <span className="layer-title">{l.label}</span>
                        <span className="block font-sans text-xs font-normal normal-case tracking-normal text-ocel">{l.note}</span>
                      </span>
                      <LearnChevron />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <figcaption className="mt-3 font-mono text-xs text-ocel">
            Schematický řez střechou. Vyberte vrstvu a přejděte na příslušnou část nabídky.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
