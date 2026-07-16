import type { ReactElement } from "react";

function ScalerCurve({ glint = false }: { glint?: boolean }): ReactElement {
  return (
    <svg
      className={glint ? "curve curve--hero" : "curve"}
      viewBox="0 0 1200 56"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path className="curve__base" d="M0 42 C 340 4, 780 4, 1200 24" pathLength={100} />
      {glint ? (
        <path className="curve__glint" d="M0 42 C 340 4, 780 4, 1200 24" pathLength={100} />
      ) : null}
    </svg>
  );
}

const steps: { n: string; t: string; d: string }[] = [
  {
    n: "01",
    t: "Vyšetření",
    d: "Projdeme stav dásní i zubů a řekneme si, co je potřeba řešit — bez zbytečného strašení.",
  },
  {
    n: "02",
    t: "Výběr pomůcek",
    d: "Vybereme kartáček, mezizubní pomůcky a pastu přesně na vaše zuby, ne univerzální sadu.",
  },
  {
    n: "03",
    t: "Nácvik",
    d: "Naučíme vás pomůcky doopravdy používat, dokud vám to nepůjde od ruky.",
  },
  {
    n: "04",
    t: "Odstranění kamene",
    d: "Zubní kámen sundáme ručně a důkladně. Ne narychlo — spěch se pozná na hojení a citlivosti.",
  },
];

const symptoms: string[] = [
  "krvácení dásní",
  "zubní kámen",
  "pigmentace zubů",
  "zubní kazy",
  "citlivé odhalené krčky",
];

const instruments: { tag: string; name: string; d: string }[] = [
  {
    tag: "Nástroj 01",
    name: "Scaler",
    d: "Ruční sundání zubního kamene a pigmentací nad dásní. Švýcarská ocel, ostrá jako první den.",
  },
  {
    tag: "Nástroj 02",
    name: "Kyreta",
    d: "Vyhlazení kořene a čištění pod okrajem dásně tam, kam se kartáček nedostane.",
  },
];

export default function Page(): ReactElement {
  return (
    <main className="page">
      <header className="topbar">
        <div className="wordmark">
          <span className="wordmark__dh">DH</span>
          <span className="wordmark__full">
            Dentální&nbsp;hygiena
            <span className="wordmark__sub">Liberec · od&nbsp;2010</span>
          </span>
        </div>
        <a className="topbar__tel" href="tel:+420777310532">
          (+420) 777&nbsp;310&nbsp;532
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Ordinace dentální hygieny · Liberec</p>
        <h1 id="hero-title" className="hero__title">
          Dásně
          <br />
          nesnesou spěch.
        </h1>
        <div className="hero__curve">
          <ScalerCurve glint />
        </div>
        <p className="hero__lead">
          Pracujeme rukama, švýcarskými scalery a kyretami. Zubní kámen
          odstraníme pořádně — ne všechno narychlo v jedné návštěvě. Přesně to
          totiž vaše dásně potřebují, aby se v klidu zahojily.
        </p>
        <p className="hero__meta">
          <span>P. Pavlík, DiS.</span>
          <span aria-hidden="true">·</span>
          <span>V. Pavlíková, DiS.</span>
          <span aria-hidden="true">·</span>
          <span>Lipová 664/4, Liberec 1</span>
        </p>
      </section>

      <div className="divider" aria-hidden="true">
        <ScalerCurve />
      </div>

      <section className="section" aria-labelledby="osetreni-title">
        <p className="eyebrow eyebrow--brass">Ošetření</p>
        <h2 id="osetreni-title" className="section__title">
          Prevence především
        </h2>
        <p className="section__lead">
          Dentální hygiena doplňuje práci zubaře. Staráme se o to, aby k
          zánětům dásní, zubnímu kameni a paradentóze vůbec nedošlo — u
          dospělých i u dětí.
        </p>

        <h3 className="minihead">Přijďte, když vás trápí</h3>
        <ul className="chips">
          {symptoms.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>

        <h3 className="minihead minihead--spaced">První návštěva krok za krokem</h3>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n} className="step">
              <span className="step__n">{s.n}</span>
              <div className="step__body">
                <h4 className="step__t">{s.t}</h4>
                <p className="step__d">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="divider" aria-hidden="true">
        <ScalerCurve />
      </div>

      <section className="section" aria-labelledby="onas-title">
        <p className="eyebrow eyebrow--brass">O nás</p>
        <h2 id="onas-title" className="section__title">
          Skoro 15 let, všechno rukama
        </h2>
        <p className="section__lead">
          Pracujeme ručně, ne narychlo. Používáme špičkové švýcarské nástroje —
          kyrety a scalery — a naše postupy jsme si osobně ověřili v Itálii u
          dentální hygienistky Antonely Tani Botticelli.
        </p>

        <div className="instruments">
          {instruments.map((it) => (
            <article key={it.name} className="instrument">
              <div className="instrument__frame" aria-hidden="true">
                <ScalerCurve />
              </div>
              <p className="instrument__tag">{it.tag}</p>
              <h3 className="instrument__name">{it.name}</h3>
              <p className="instrument__d">{it.d}</p>
            </article>
          ))}
        </div>

        <div className="noticebox">
          <p className="noticebox__t">Momentálně nepřibíráme nové pacienty.</p>
          <p className="noticebox__d">
            Děkujeme za pochopení. Kdo už k nám chodí, se objednává na čísle{" "}
            <a href="tel:+420777310532">(+420) 777&nbsp;310&nbsp;532</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
