import React from "react";

const produkty = [
  {
    kod: "80",
    jednotka: "g/m²",
    nazev: "Barevné papíry",
    popis: "Sytá barva skrz naskrz. Bez dřevoviny, drží tvar i po přehnutí — na výkresy, koláže a jmenovky.",
  },
  {
    kod: "180",
    jednotka: "g/m²",
    nazev: "Barevné kartony",
    popis: "Pevný karton pro nástěnky a modely, který se nezvlní ani po nalepení. Barva zůstává na světle.",
  },
  {
    kod: "100",
    jednotka: "% bělost",
    nazev: "Kreslicí kartony",
    popis: "Bezdřevý povrch se stoprocentní bělostí. Tužka, akvarel i pastel na něm sedí přesně tak, jak mají.",
  },
  {
    kod: "70",
    jednotka: "g/m²",
    nazev: "Skládané dvojlisty",
    popis: "Připravené dvojlisty pro testy i pozvánky. Přehyb drží ostře a rovně, list po listu.",
  },
  {
    kod: "80",
    jednotka: "g/m²",
    nazev: "Náčrtníky · chamois",
    popis: "Teplý odstín chamois, který nedráždí oči při dlouhém kreslení. Papír bez dřeviny, příjemný na dotek.",
  },
  {
    kod: "70",
    jednotka: "g/m²",
    nazev: "Flipchart bloky",
    popis: "Bloky do stojanu, které fixa nepropíjí na druhou stranu. Perforace se trhá čistě, bez cárů.",
  },
];

export default function Page() {
  return (
    <main className="pm">
      <header className="pm-top">
        <a className="pm-mark" href="#" aria-label="Papírna Martiník — domů">
          <span className="pm-mark-line1">Papírna</span>
          <span className="pm-mark-line2">
            Martiník
            <span className="pm-mark-reg" aria-hidden="true">Ostrava</span>
          </span>
        </a>
        <nav className="pm-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#vyroba">Naše výroba</a>
        </nav>
      </header>

      <section className="pm-hero" aria-labelledby="pm-hero-title">
        <div className="pm-hero-copy">
          <p className="pm-eyebrow">Papír z vlastní výroby · Ostrava</p>
          <h1 id="pm-hero-title">
            Papír, který <em>drží</em> přehyb<br />
            i sytou barvu.
          </h1>
          <p className="pm-lead">
            Sešity, kartony a barevné papíry řežeme a skládáme sami v Česku.
            Bezdřevý materiál, který nezežloutne a nezvlní se — pro školy,
            ateliéry i kanceláře po celém kraji.
          </p>
          <div className="pm-hero-actions">
            <a className="pm-btn" href="#sortiment">Prohlédnout sortiment</a>
            <a className="pm-btn-ghost" href="#vyroba">Jak vyrábíme</a>
          </div>
          <dl className="pm-facts">
            <div>
              <dt>Bělost papíru</dt>
              <dd>100 %</dd>
            </div>
            <div>
              <dt>Dřevovina</dt>
              <dd>žádná</dd>
            </div>
            <div>
              <dt>Kde se vyrábí</dt>
              <dd>Česko</dd>
            </div>
          </dl>
        </div>
        <figure className="pm-hero-media">
          <img
            src="/hero.webp"
            alt="Stohy barevných papírů a kartonů z výroby Papírny Martiník"
            width={1200}
            height={1400}
          />
          <figcaption>Řezané archy připravené k expedici</figcaption>
        </figure>
      </section>

      <section className="pm-section pm-sortiment" id="sortiment" aria-labelledby="pm-sortiment-title">
        <div className="pm-section-head">
          <p className="pm-eyebrow">Sortiment</p>
          <h2 id="pm-sortiment-title">Každý papír má svou gramáž</h2>
          <p className="pm-section-lead">
            Číslo u každé položky je gramáž nebo bělost — to podle čeho papír
            skutečně poznáte a vyberete. Vše vyrobené z bezdřevého papíru.
          </p>
        </div>
        <ul className="pm-grid">
          {produkty.map((p) => (
            <li className="pm-card" key={p.nazev}>
              <div className="pm-card-spec">
                <span className="pm-card-kod">{p.kod}</span>
                <span className="pm-card-jed">{p.jednotka}</span>
              </div>
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
            </li>
          ))}
        </ul>
        <figure className="pm-band">
          <img
            src="/section-1.webp"
            alt="Detail školních sešitů z bezdřevého papíru s křídovou obálkou"
            width={1400}
            height={800}
          />
          <figcaption>
            <span>Školní sešity</span>
            Vnitřek z čistě bezdřevého papíru, obálka z natíraného křídového —
            proto obstojí celý školní rok.
          </figcaption>
        </figure>
      </section>

      <section className="pm-section pm-vyroba" id="vyroba" aria-labelledby="pm-vyroba-title">
        <figure className="pm-vyroba-media">
          <img
            src="/section-2.webp"
            alt="Pohled do vlastní výroby Papírny Martiník v Ostravě"
            width={1100}
            height={1300}
          />
        </figure>
        <div className="pm-vyroba-copy">
          <p className="pm-eyebrow">Naše výroba · Ostrava</p>
          <h2 id="pm-vyroba-title">Vyrábíme sami, ne přes dovoz</h2>
          <p>
            Celý sortiment vzniká ve vlastní výrobě v Česku. Nespoléháme na
            dovoz z nízkonákladových trhů — kvalita, stabilita dodávek a
            odpovědnost za každý arch jsou pro nás to hlavní.
          </p>
          <ol className="pm-steps">
            <li>
              <span className="pm-step-num">01</span>
              <div>
                <h3>Vybíráme papír</h3>
                <p>Jen bezdřevý materiál s ověřenou bělostí a gramáží.</p>
              </div>
            </li>
            <li>
              <span className="pm-step-num">02</span>
              <div>
                <h3>Řežeme a skládáme</h3>
                <p>Archy, sešity i dvojlisty připravujeme na přesný formát.</p>
              </div>
            </li>
            <li>
              <span className="pm-step-num">03</span>
              <div>
                <h3>Kontrolujeme a domluvíme</h3>
                <p>S každým klientem řešíme dodávku osobně a otevřeně.</p>
              </div>
            </li>
          </ol>
          <blockquote className="pm-quote">
            „Budujeme dlouhodobá partnerství založená na vzájemné důvěře
            a oboustranném prospěchu."
          </blockquote>
        </div>
      </section>
    </main>
  );
}
