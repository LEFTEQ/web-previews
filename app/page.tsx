import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Rovnání karoserie",
      popis:
        "Prohnuté blatníky, promáčklé dveře, pokřivený práh po parkovišti. Vyklepáváme a rovnáme plech tak, aby lak držel a spáry seděly na milimetr — bez tmelu tam, kam nepatří.",
    },
    {
      cislo: "02",
      nazev: "Oprava po nehodě",
      popis:
        "Od výměny nárazníku po srovnání deformovaného rámu na rovnací stolici. Vůz předáváme s geometrií v toleranci výrobce, ne jen \u201eaby to vypadalo\u201c.",
    },
    {
      cislo: "03",
      nazev: "Boj proti korozi",
      popis:
        "Prorezlé prahy a podběhy vaříme nový plech, ne zalepujeme. Ošetříme dutiny a spodek vozu — v Hradci se solí každou zimu a rez čeká na první teplý den.",
    },
    {
      cislo: "04",
      nazev: "Renovace kol a lakování",
      popis:
        "Odřené disky, oprýskaný lak, kamínky od dálnice. Přebroušení, přestříkání a lokální dolakování tak, aby přechod nebylo poznat ani proti světlu.",
    },
  ];

  const duvody = [
    {
      k: "Vibrační diagnostika podvozku",
      v: "Jako jediní v ČR simulujeme reálné jízdní podmínky a ultrazvukem najdeme zdroj klepání a bouchání dřív, než se z něj stane porucha.",
    },
    {
      k: "Přístroje Texa a Bosch",
      v: "Měříme, ne hádáme. Přesná data znamenají opravu na první pokus a férovou kalkulaci předem.",
    },
    {
      k: "Tým, který se pořád učí",
      v: "Klempíři a technici s certifikáty, kteří sledují nové materiály karoserií — od hliníku po vysokopevnostní ocel.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="Autoservis Vesmír, úvod">
          <span className="wordmark__mark" aria-hidden="true">◉</span>
          <span className="wordmark__text">
            Autoservis <em>Vesmír</em>
          </span>
        </a>
        <nav className="nav__links" aria-label="Hlavní navigace">
          <a href="#klempirstvi">Klempířství</a>
          <a href="#proc">Proč my</a>
          <a className="nav__tel" href="tel:+420774219169">
            +420 774 219 169
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Dílna autoklempířství Vesmír v Hradci Králové — vůz připravený k rovnání karoserie"
            className="hero__img"
          />
          <div className="hero__grain" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="eyebrow">Autoklempířství · Hradec Králové</p>
          <h1 id="hero-nadpis" className="hero__title">
            Vrátíme plechu
            <br />
            původní tvar.
          </h1>
          <p className="hero__lede">
            Vyklepáváme důlky, rovnáme karoserie po nehodách a vaříme prorezlé
            prahy. Každý díl měříme — geometrii vracíme do tolerance výrobce, ne
            jen \u201edo oka\u201c.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420774219169">
              Zavolat na servis
            </a>
            <a className="btn btn--ghost" href="#klempirstvi">
              Co spravíme
            </a>
          </div>
          <p className="hero__addr">
            Pražská tř. 559/9 · 500&nbsp;04 Hradec Králové
          </p>
        </div>
      </section>

      <section id="klempirstvi" className="work" aria-labelledby="work-nadpis">
        <div className="work__head">
          <p className="eyebrow eyebrow--dark">Co spravíme</p>
          <h2 id="work-nadpis" className="sec-title">
            Od promáčklého blatníku po celý rám
          </h2>
          <p className="sec-lede">
            Karosářská práce je řemeslo o milimetrech. Tady je čtveřice věcí,
            se kterými za námi do Hradce jezdíte nejčastěji.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="work__figure">
          <img
            src="/section-1.webp"
            alt="Detail opravy karoserie v dílně Autoservisu Vesmír"
            className="work__img"
          />
          <figcaption className="work__cap">
            Rovnání a příprava plechu před lakem — dílna Pražská tř., Hradec
            Králové.
          </figcaption>
        </figure>
      </section>

      <section id="proc" className="trust" aria-labelledby="trust-nadpis">
        <figure className="trust__figure">
          <img
            src="/section-2.webp"
            alt="Technik Autoservisu Vesmír u diagnostického přístroje"
            className="trust__img"
          />
        </figure>

        <div className="trust__body">
          <p className="eyebrow eyebrow--dark">Proč právě Vesmír</p>
          <h2 id="trust-nadpis" className="sec-title">
            Poznáme závadu dřív,
            <br />
            než ji uslyšíte
          </h2>
          <p className="sec-lede">
            Klepání zpod podvozku umí být záhada. My ho neodhadujeme — necháme
            vůz \u201erozvibrovat\u201c a zdroj hluku najdeme ultrazvukem.
          </p>

          <dl className="facts">
            {duvody.map((d) => (
              <div className="fact" key={d.k}>
                <dt className="fact__k">{d.k}</dt>
                <dd className="fact__v">{d.v}</dd>
              </div>
            ))}
          </dl>

          <a className="btn btn--primary" href="tel:+420774219169">
            Domluvit prohlídku
          </a>
        </div>
      </section>
    </main>
  );
}
