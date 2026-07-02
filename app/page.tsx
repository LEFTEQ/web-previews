export default function Page() {
  const stroje = [
    {
      nazev: "Kaiser S1 — kráčivý bagr",
      popis: "Pracuje ve svahu, ve vodě i v bahně, kam se kolový stroj nedostane. Jezdíme s ním na místa, která ostatní firmy odmítnou.",
      cena: "1 150 Kč / hod",
      tag: "extrémní terén",
    },
    {
      nazev: "Neuson 2203 a 3203",
      popis: "Kompaktní pásová rypadla na výkopy pro základy, ploty, přípojky a kanalizaci. Projedou i úzkou branou na zahradu.",
      cena: "od 500 Kč / hod",
      tag: "běžné výkopy",
    },
    {
      nazev: "Protlaky pod komunikací",
      popis: "Protlačíme vedení do průměru 250 mm pod silnicí nebo chodníkem — bez rozkopání a bez uzavírky.",
      cena: "700–1 200 Kč / bm",
      tag: "bez výkopu",
    },
    {
      nazev: "Mercedes 5 t s hydraulickou rukou",
      popis: "Odvoz výkopku, dovoz materiálu a složení rukou přímo tam, kde ho potřebujete.",
      cena: "450 Kč / hod + 19 Kč / km",
      tag: "doprava",
    },
  ];

  const sluzby = [
    "Kompletní výstavba inženýrských sítí — kabelové rozvody, vodovody, kanalizace",
    "Výkopové práce pro základy domů, plotů a přípojek",
    "Čištění rybníků a práce ve vodě s ekologicky odbouratelnými mazivy",
    "Srovnání a úprava těžko dostupných svahů",
    "Protlaky pod komunikací do průměru 250 mm",
    "Terénní úpravy, dláždění a úprava povrchů",
    "Demolice objektů včetně odvozu suti",
  ];

  return (
    <main className="vs">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-img"
          />
          <div className="hero-shade" />
        </div>

        <div className="hero-top">
          <span className="wordmark">
            V<span className="wordmark-dash">—</span>STAV
            <span className="wordmark-sub">group · Olomouc</span>
          </span>
          <a className="hero-tel" href="tel:+420608613027">608 613 027</a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Zemní práce a inženýrské sítě · od roku 1998</p>
          <h1 className="hero-title">
            <span className="line line-1">Tam, kde jiní končí,</span>
            <span className="line line-2">my teprve <em>začínáme.</em></span>
          </h1>
          <p className="hero-lead">
            Kráčivý bagr Kaiser S1 nás dostane do svahu, do vody i do bahna.
            Vyčistíme rybník, srovnáme stráň, položíme sítě — i tam, kam se
            běžná technika nedostane.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420585751810">Zavolat: 585 751 810</a>
            <a className="btn btn-line" href="mailto:vanha@vstavolomouc.cz">Poslat poptávku e-mailem</a>
          </div>
        </div>

        {/* svahová linka — signature */}
        <svg className="hero-slope" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,90 L0,72 L340,72 L560,26 L900,26 L1140,64 L1440,64 L1440,90 Z" />
        </svg>
      </header>

      {/* ===== SEKCE 1: STROJE A CENÍK ===== */}
      <section className="sec sec-stroje" aria-labelledby="stroje-h">
        <div className="sec-inner">
          <p className="sec-eyebrow"><span className="tick" aria-hidden="true" />Stroje a ceník</p>
          <h2 id="stroje-h" className="sec-title">Ceny říkáme rovnou.<br />Stejně jako v roce 1998.</h2>
          <p className="sec-lead">
            Půjčíme stroj i s obsluhou, nebo přijedeme a uděláme celou zakázku.
            Ceník je orientační — na míru vám nabídku spočítáme po obhlídce terénu.
          </p>

          <ul className="stroj-list">
            {stroje.map((s) => (
              <li key={s.nazev} className="stroj">
                <div className="stroj-head">
                  <span className="stroj-tag">{s.tag}</span>
                  <h3 className="stroj-nazev">{s.nazev}</h3>
                </div>
                <p className="stroj-popis">{s.popis}</p>
                <p className="stroj-cena">{s.cena}</p>
              </li>
            ))}
          </ul>

          <figure className="sec-figure">
            <img
              src="/section-1.webp"
              alt="Kráčivý bagr Kaiser S1 při práci ve strmém svahu"
              className="sec-img"
            />
            <figcaption className="sec-caption">
              Kaiser S1 ve svahu u Olomouce — čtyři nezávislé nohy, práce až do sklonu, kde kolový stroj sjede.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== SEKCE 2: CO UMÍME + DŮVĚRA ===== */}
      <section className="sec sec-prace" aria-labelledby="prace-h">
        <div className="sec-inner sec-split">
          <div className="split-text">
            <p className="sec-eyebrow sec-eyebrow-light"><span className="tick tick-light" aria-hidden="true" />Co pro vás uděláme</p>
            <h2 id="prace-h" className="sec-title sec-title-light">Od výkopu po zásyp.<br />Jedna firma, jedna odpovědnost.</h2>
            <p className="sec-lead sec-lead-light">
              Nejsme zprostředkovatel — stroje řídí lidé, kteří ve firmě pracují
              přes dvacet let. Ve vodě používáme jen ekologicky odbouratelná
              maziva, takže po nás v rybníce nezůstane olejová skvrna.
            </p>

            <ul className="prace-list">
              {sluzby.map((s) => (
                <li key={s} className="prace-item">{s}</li>
              ))}
            </ul>

            <div className="duvera">
              <div className="duvera-blok">
                <span className="duvera-cislo">1998</span>
                <span className="duvera-pop">rok založení firmy</span>
              </div>
              <div className="duvera-blok">
                <span className="duvera-cislo">250 mm</span>
                <span className="duvera-pop">max. průměr protlaku pod silnicí</span>
              </div>
              <div className="duvera-blok">
                <span className="duvera-cislo">Olomouc</span>
                <span className="duvera-pop">Dolní novosadská 41/26 — vyjíždíme po celé Hané</span>
              </div>
            </div>
          </div>

          <figure className="split-figure">
            <img
              src="/section-2.webp"
              alt="Pokládka inženýrských sítí do otevřeného výkopu"
              className="sec-img"
            />
            <figcaption className="sec-caption sec-caption-light">
              Pokládka vodovodu a kanalizace — výkop, uložení, zásyp a úprava povrchu děláme sami.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
