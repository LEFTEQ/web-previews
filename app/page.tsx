import type { CSSProperties } from "react";

type RuleProps = { delay: number; label?: string };

function SnapRule({ delay, label }: RuleProps) {
  return (
    <div className="rule" style={{ "--d": `${delay}ms` } as CSSProperties}>
      <span className="rule-line" />
      <span className="mark mark-l" />
      <span className="mark mark-r" />
      {label ? <span className="rule-tag">{label}</span> : null}
    </div>
  );
}

const categories = [
  { code: "01", name: "Základní stavba", detail: "Cihly, tvárnice, překlady, malty" },
  { code: "02", name: "Betonové výrobky", detail: "Dlažba, obrubníky, ztracené bednění" },
  { code: "03", name: "Tepelná izolace", detail: "Minerální vlna, fasádní polystyren" },
  { code: "04", name: "Střecha", detail: "Krytiny, latě, pojistné fólie" },
  { code: "05", name: "Nářadí", detail: "Ruční i elektrické, spojovací materiál" },
  { code: "06", name: "Suchá výstavba", detail: "Sádrokarton, profily, tmely" },
  { code: "07", name: "Suché směsi a pojiva", detail: "Cement, vápno, omítky, lepidla" },
  { code: "08", name: "Hydroizolace", detail: "Asfaltové pásy, stěrky, nátěry" },
];

const services = [
  {
    name: "Doprava a skládání",
    detail: "Přivezeme materiál na stavbu po celé ČR a složíme hydraulickou rukou přímo tam, kde ho potřebujete.",
  },
  {
    name: "Poradenství na prodejně",
    detail: "Na všech 39 prodejnách vám poradí lidé, kteří stavbu znají z praxe — od základů po klempířský detail.",
  },
  {
    name: "Půjčovna techniky",
    detail: "Míchačky, lešení, bourací kladiva i stavební stroje. Půjčíte si na den i na celou etapu.",
  },
  {
    name: "Věrnostní program IZOPROFIT",
    detail: "Za každý nákup sbíráte body a lepší ceny. Pro řemeslníky i lidi, kteří staví jednou za život.",
  },
  {
    name: "Míchací centra",
    detail: "Namícháme omítku i fasádu do přesného odstínu na počkání — na vybraných prodejnách.",
  },
  {
    name: "Klempířská dílna",
    detail: "Ohneme oplechování, parapety a lemování na míru vaší střechy — na vybraných prodejnách.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <div className="frame">
        <header className="masthead">
          <a className="wordmark" href="#" aria-label="IZOMAT stavebniny, úvod">
            <span className="wm-izo">IZO</span><span className="wm-mat">MAT</span>
            <span className="wm-sub">stavebniny</span>
          </a>
          <dl className="masthead-meta">
            <div>
              <dt>Infolinka</dt>
              <dd><a href="tel:+420272690388">272 690 388</a></dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7–17 · So 7–11</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Ústí nad Labem</dd>
            </div>
          </dl>
        </header>

        <SnapRule delay={0} label="BRNKAČKA · 000" />

        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Stavebniny · Ústí nad Labem · nad Labem</p>
          <h1 id="hero-title" className="hero-title">
            <span className="line line-a">Všechno</span>
            <span className="line line-b">na stavbu</span>
            <span className="line line-c">i rekonstrukci.</span>
          </h1>
          <div className="hero-grid">
            <p className="hero-lede">
              Od výkopu po hřeben střechy. Naměříme, naložíme a přivezeme —
              a poradíme, co na tu vaši stavbu opravdu patří. Bez zbytečného
              hledání, s materiálem, který máme skladem.
            </p>
            <div className="hero-stat" aria-label="39 prodejen po celé České republice">
              <span className="stat-num">39</span>
              <span className="stat-label">prodejen<br />po celé ČR</span>
            </div>
          </div>
        </section>

        <SnapRule delay={90} label="OBLÍBENÉ KATEGORIE" />

        <section className="cats" aria-labelledby="cats-title">
          <h2 id="cats-title" className="section-title">Oblíbené kategorie</h2>
          <p className="section-note">Vyměřená zeď připravená k postavení — osm oddílů, kde stavba obvykle začíná.</p>
          <div className="wall">
            {categories.map((c, i) => (
              <a
                className="tile"
                href="#"
                key={c.code}
                style={{ "--i": i } as CSSProperties}
              >
                <span className="tile-code">{c.code}</span>
                <span className="tile-name">{c.name}</span>
                <span className="tile-detail">{c.detail}</span>
                <span className="tile-go" aria-hidden="true">Do oddílu →</span>
              </a>
            ))}
          </div>
        </section>

        <SnapRule delay={180} label="NAŠE SLUŽBY" />

        <section className="services" aria-labelledby="svc-title">
          <div className="svc-head">
            <h2 id="svc-title" className="section-title">Nejsme jen sklad materiálu</h2>
            <p className="section-note">
              Šest věcí, které od nás dostanete k pytlům a paletám. Berte to jako
              dodací list — každá položka odškrtnutá.
            </p>
          </div>
          <ul className="docket">
            {services.map((s, i) => (
              <li className="docket-row" key={s.name}>
                <span className="docket-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="docket-body">
                  <span className="docket-name">{s.name}</span>
                  <span className="docket-detail">{s.detail}</span>
                </span>
                <span className="docket-check" aria-hidden="true">✓</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
