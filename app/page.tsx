import React from "react";

const gases = [
  {
    znak: "O₂",
    nazev: "Kyslík",
    obor: "Medicinální i technický",
    popis:
      "Pro nemocnice v Královéhradeckém kraji, svařování i řezání. Dodáváme v tlakových lahvích, svazcích i kryogenně kapalný do zásobníků.",
  },
  {
    znak: "Ar",
    nazev: "Argon",
    obor: "Ochranná atmosféra",
    popis:
      "Inertní plyn pro TIG a MIG svařování nerezu a hliníku. Směsi Corgon a Cronigon míchané přesně na váš materiál.",
  },
  {
    znak: "N₂",
    nazev: "Dusík",
    obor: "Inertizace, mražení",
    popis:
      "Kapalný dusík pro potravinářství i laboratoře, plynný pro proplach potrubí a ochranu proti výbuchu.",
  },
  {
    znak: "CO₂",
    nazev: "Oxid uhličitý",
    obor: "Nápoje, svařování",
    popis:
      "Pro výčepy, sycení nápojů i svařovací směsi. Potravinářská kvalita E290 s dokladem o čistotě.",
  },
  {
    znak: "He",
    nazev: "Helium",
    obor: "Detekce netěsností",
    popis:
      "Vysoce čisté helium pro heliové zkoušky těsnosti, chlazení a plnění balonů. Vzácná surovina, spolehlivá dodávka.",
  },
  {
    znak: "H₂",
    nazev: "Vodík",
    obor: "Energetika, chemie",
    popis:
      "Technický i speciální vodík pro laboratoře, hydrogenaci a rozvíjející se vodíkovou mobilitu.",
  },
];

const duvera = [
  {
    cislo: "24/7",
    nadpis: "Nonstop dispečink dodávek",
    text:
      "Když dojde plyn uprostřed výroby, nečekáte do rána. Náš rozvoz z hradeckého skladu jezdí i o víkendech.",
  },
  {
    cislo: "1 den",
    nadpis: "Standardní dodací lhůta",
    text:
      "Naplněné lahve i kryogenní zásobníky přivezeme do provozu v Hradci Králové a okolí zpravidla do 24 hodin.",
  },
  {
    cislo: "100+",
    nadpis: "Druhů plynů a směsí",
    text:
      "Od čistého kyslíku po přesně namíchané svařovací směsi. Namícháme přesně to, co váš proces potřebuje.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="Linde Gas Hradec Králové – domů">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="wordmark__valve" />
          </span>
          <span className="wordmark__text">
            <strong>LINDE</strong>
            <em>Gas · Hradec Králové</em>
          </span>
        </a>
        <nav className="nav__links" aria-label="Hlavní">
          <a href="#plyny">Plyny</a>
          <a href="#duvera">Proč my</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-titulek">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Řady modrých tlakových lahví s technickými plyny připravené k rozvozu ze skladu Linde v Hradci Králové"
            className="hero__img"
            width={1600}
            height={1200}
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="hero__eyebrow">Technické · medicinální · speciální plyny</p>
          <h1 id="hero-titulek" className="hero__title">
            Plyn pod tlakem <span className="hero__accent">200&nbsp;barů</span>,
            dodaný přesně na čas.
          </h1>
          <p className="hero__lede">
            Plníme a rozvážíme tlakové lahve, svazky a kryogenní zásobníky pro
            výrobu, nemocnice, laboratoře i řemeslo v Hradci Králové a celém
            Královéhradeckém kraji.
          </p>
          <div className="hero__gauge" role="img" aria-label="Manometr ukazuje plný tlak v lahvi">
            <div className="gauge">
              <span className="gauge__zero">0</span>
              <span className="gauge__needle" aria-hidden="true" />
              <span className="gauge__max">300</span>
              <span className="gauge__unit">bar</span>
            </div>
            <p className="hero__gaugecap">
              Lahev opouští náš sklad plná. Kontrolní tlak měříme u každého plnění.
            </p>
          </div>
        </div>
      </section>

      <section className="plyny" id="plyny" aria-labelledby="plyny-titulek">
        <div className="section-head">
          <p className="section-head__eyebrow">Nabídka</p>
          <h2 id="plyny-titulek" className="section-head__title">
            Šest plynů, které nejčastěji vozíme do provozů
          </h2>
          <p className="section-head__lede">
            Každý s vlastní čistotou, tlakem a barevným značením ventilu podle
            normy. Vyberte podle své technologie — o zbytek se postaráme my.
          </p>
        </div>

        <ul className="gases">
          {gases.map((g) => (
            <li className="gas" key={g.nazev}>
              <span className="gas__symbol" aria-hidden="true">
                {g.znak}
              </span>
              <div className="gas__meta">
                <span className="gas__tag">{g.obor}</span>
                <h3 className="gas__name">{g.nazev}</h3>
                <p className="gas__desc">{g.popis}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="plyny__figure">
          <img
            src="/section-1.webp"
            alt="Detail plnicího ventilu a manometru tlakové lahve v provozu Linde"
            className="plyny__img"
            width={1400}
            height={900}
          />
          <figcaption>
            Barevné značení ventilu odpovídá ČSN EN 1089-3 — plyn poznáte na první
            pohled, ještě než sáhnete po redukčním ventilu.
          </figcaption>
        </figure>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-titulek">
        <div className="duvera__grid">
          <div className="duvera__intro">
            <p className="section-head__eyebrow">Proč Linde v Hradci</p>
            <h2 id="duvera-titulek" className="section-head__title">
              Plyn je jen půlka práce. Zbytek je spolehlivost.
            </h2>
            <p className="duvera__text">
              Provozujeme plnicí a distribuční zázemí v Královéhradeckém kraji,
              staráme se o revize lahví, výměnu i pronájem tlakových nádob a
              hlídáme, aby vám plyn nikdy nedošel ve špatnou chvíli. Řídíme se
              přísnými pravidly pro nakládání s tlakovými a hořlavými plyny —
              bezpečnost není u nás příplatek, ale základ.
            </p>
            <img
              src="/section-2.webp"
              alt="Rozvozový vůz Linde s tlakovými lahvemi před provozem zákazníka v Hradci Králové"
              className="duvera__img"
              width={1400}
              height={900}
            />
          </div>

          <ol className="stats">
            {duvera.map((d) => (
              <li className="stat" key={d.nadpis}>
                <span className="stat__num">{d.cislo}</span>
                <div>
                  <h3 className="stat__title">{d.nadpis}</h3>
                  <p className="stat__text">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
