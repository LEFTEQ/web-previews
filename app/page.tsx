import type { ReactNode } from "react";

/* Granátová růžice — the recurring garnet-cluster device: a ring of small
   faceted dots around a centre stone. Redrawn as a precise vector. */
function Rosette({ className }: { className?: string }): ReactNode {
  const dots = Array.from({ length: 8 }).map((_, i) => {
    const a = (i * 45 * Math.PI) / 180;
    const x = 24 + 20 * Math.cos(a);
    const y = 24 + 20 * Math.sin(a);
    return <circle key={i} cx={x.toFixed(2)} cy={y.toFixed(2)} r="2.9" />;
  });
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle className="ros-ring" cx="24" cy="24" r="20" />
      <g className="ros-dots">{dots}</g>
      <circle className="ros-core" cx="24" cy="24" r="6.6" />
      <path className="ros-facet" d="M24 17.4 L29.5 24 L24 30.6 L18.5 24 Z" />
    </svg>
  );
}

const kolekce = [
  {
    name: "Granát, lásko!",
    tag: "Český granát · pyrop",
    desc: "Sytě rudé české pyropy poskládané do klasické růžice. Broušené, osazované a leštěné ručně u nás v dílně.",
  },
  {
    name: "Zlaté jemnosti",
    tag: "18k žluté zlato",
    desc: "Drobné každodenní kousky — řetízky, přívěsky a náušnice, které se nosí od rána do večera a vydrží generace.",
  },
  {
    name: "Přírodní kameny",
    tag: "Diamanty · safíry · opály · smaragdy",
    desc: "Šperky s duší přírody. Pomůžeme vám vybrat pravý kámen podle stylu, osobnosti i výjimečné příležitosti.",
  },
  {
    name: "Snubní a zásnubní prsteny",
    tag: "Na míru, ručně",
    desc: "Prsteny navržené podle vás a vyrobené ručně v Olomouci — od prvního náčrtu po puncovní značku.",
  },
];

const hodnoty = [
  {
    t: "Ručně, od náčrtu po punc",
    d: "Každý šperk vzniká na jednom ponku — kreslíme, brousíme kameny, osazujeme a leštíme sami. Žádná sériová montáž.",
  },
  {
    t: "Český granát, broušený doma",
    d: "Pracujeme s pravými českými pyropy. Poznáte je podle hloubky barvy i podle toho, že za nimi stojíme jménem.",
  },
  {
    t: "V srdci Olomouce",
    d: "Přijďte se poradit do kamenné dílny v centru. U kávy vybereme kov, kámen i tvar, který vydrží celý život.",
  },
];

export default function Page(): ReactNode {
  return (
    <main className="page">
      {/* ——— HERO: dark atelier, one gold glint on load ——— */}
      <header className="hero">
        <Rosette className="hero-watermark" />
        <div className="wrap hero-inner">
          <p className="eyebrow reveal d1">
            <Rosette className="eyebrow-mark" />
            Zlatnická dílna · Olomouc
          </p>

          <h1 className="hero-title">
            <span className="reveal d2 hero-line">Zlatnictví</span>
            <span className="wordmark reveal d3">Koneční</span>
          </h1>

          <p className="hero-lede reveal d4">
            Generace řemeslné vášně v každém šperku. Šperkařská dílna v srdci
            Olomouce, kde ručně vyrábíme kousky s českými granáty, diamanty,
            safíry i opály.
          </p>

          <dl className="hero-facts reveal d5">
            <div>
              <dt>Materiál</dt>
              <dd>Český granát &amp; 18k zlato</dd>
            </div>
            <div>
              <dt>Výroba</dt>
              <dd>Ručně, kus po kuse</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Kamenná dílna, centrum</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ——— SEKCE 1: Kolekce ——— */}
      <section className="sec sec-collections sec-mark" aria-labelledby="kolekce-nadpis">
        <Rosette className="emboss" />
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">
              <Rosette className="eyebrow-mark" />
              Co u nás vzniká
            </p>
            <h2 id="kolekce-nadpis" className="sec-title">
              Autorské kolekce &amp; šperky na míru
            </h2>
          </div>

          <ul className="cards">
            {kolekce.map((k) => (
              <li key={k.name} className="card">
                <Rosette className="card-mark" />
                <p className="card-tag">{k.tag}</p>
                <h3 className="card-title">{k.name}</h3>
                <p className="card-desc">{k.desc}</p>
                <span className="card-link">Prohlédnout kolekci</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— SEKCE 2: O dílně / důvěra ——— */}
      <section className="sec sec-about sec-mark" aria-labelledby="o-nadpis">
        <div className="wrap about-grid">
          <div className="about-intro">
            <p className="eyebrow">
              <Rosette className="eyebrow-mark" />
              O dílně
            </p>
            <h2 id="o-nadpis" className="sec-title">
              Šperkařská dílna v&nbsp;srdci Olomouce
            </h2>
            <p className="about-body">
              Navazujeme na dlouholetou tradici a lásku k preciznímu řemeslu.
              Na jednom ponku vznikají prsteny, náušnice i přívěsky — bez
              spěchu, s ohledem na každý kámen i každou linku. Rádi vám
              poradíme, ať už hledáte zásnubní prsten, nebo dárek, který se
              bude dědit.
            </p>
            <blockquote className="pull">
              „Šperk má mít duši přírody i ruku člověka, který ho vyrobil.“
            </blockquote>
          </div>

          <ul className="values">
            {hodnoty.map((h) => (
              <li key={h.t} className="value">
                <Rosette className="value-mark" />
                <div>
                  <h3 className="value-title">{h.t}</h3>
                  <p className="value-desc">{h.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
