import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { flushSync } from "react-dom";
import { TilePreview } from "./TilePreview";

const SHADES = [
  { name: "Cihlová", hex: "#8B3A2B" },
  { name: "Tašková červeň", hex: "#6E2B23" },
  { name: "Tmavě hnědá", hex: "#4B352B" },
  { name: "Grafitová", hex: "#3B4046" },
  { name: "Černá", hex: "#1F2022" },
  { name: "Zelená", hex: "#2E4B3B" },
  { name: "Modrá", hex: "#2B4159" },
  { name: "Světle šedá", hex: "#8C9196" },
];

export function ColorBoard() {
  const [idx, setIdx] = useState(0);
  const [shownName, setShownName] = useState(SHADES[0].name);
  const nameRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  /* transitions.dev – Text states swap (třífázová výměna názvu) */
  function select(i: number) {
    if (i === idx) return;
    setIdx(i);
    const next = SHADES[i].name;
    const el = nameRef.current;
    window.clearTimeout(timer.current);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce) {
      setShownName(next);
      return;
    }
    const dur =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--text-swap-dur")) || 150;
    el.classList.remove("is-enter-start");
    el.classList.add("is-exit");
    timer.current = window.setTimeout(() => {
      el.classList.remove("is-exit");
      el.classList.add("is-enter-start");
      flushSync(() => setShownName(next));
      void el.offsetHeight;
      el.classList.remove("is-enter-start");
    }, dur);
  }

  function onKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const L = SHADES.length;
    let n = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % L;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + L) % L;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = L - 1;
    if (n < 0) return;
    e.preventDefault();
    select(n);
    btns.current[n]?.focus();
  }

  const current = SHADES[idx];

  return (
    <section id="nahled" aria-labelledby="nahled-title" className="bg-titan">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ocel">Schematická ilustrace</p>
          <h2 id="nahled-title" className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Náhled barvy střechy
          </h2>
          <p className="mt-4 max-w-2xl text-antracit/85">
            Vyzkoušejte, jak působí různé odstíny na střeše. Jde jen o orientační ilustraci — neodpovídá
            konkrétnímu sortimentu. Dostupné krytiny a odstíny je potřeba ověřit při konzultaci.
          </p>

          <div role="radiogroup" aria-label="Odstín krytiny v náhledu" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SHADES.map((s, i) => (
              <button
                key={s.name}
                ref={(el) => {
                  btns.current[i] = el;
                }}
                type="button"
                role="radio"
                aria-checked={i === idx}
                tabIndex={i === idx ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKey(e, i)}
                className="swatch-btn"
              >
                <span className="swatch" style={{ ["--sw" as string]: s.hex } as CSSProperties} aria-hidden="true" />
                <span className="mt-2 block text-left text-sm font-medium">{s.name}</span>
                <span className="block text-left font-mono text-[11px] text-ocel">Odstín {String(i + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <TilePreview hex={current.hex} name={current.name} />
          <p className="mt-4 font-display text-lg font-bold" aria-live="polite">
            Zvolený odstín:{" "}
            <span ref={nameRef} className="t-text-swap text-cihla">
              {shownName}
            </span>
          </p>
          <p className="mt-1 text-sm text-ocel">
            Barvy na obrazovce se liší od skutečného materiálu. Náhled slouží jen pro představu.
          </p>
        </div>
      </div>
    </section>
  );
}
