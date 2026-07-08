import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Demolice budov",
      body: "Kompletní zbourání rodinných domů, hal, garáží i větších objektů. Postup naplánujeme podle statiky a okolní zástavby.",
    },
    {
      no: "02",
      title: "Bourání jader a příček",
      body: "Vybourání bytových jader, koupelen, WC a nenosných příček při rekonstrukcích bytů a domů v Plzni a okolí.",
    },
    {
      no: "03",
      title: "Trhání betonu a základů",
      body: "Bourací kladiva na základové desky, betonové plochy, opěrné zdi a staré základy připravené k nové stavbě.",
    },
    {
      no: "04",
      title: "Odvoz a recyklace suti",
      body: "Přistavíme kontejner, odvezeme stavební suť a předáme ji na recyklaci. Staveniště předáváme uklizené.",
    },
  ];

  const refs = [
    {
      quote:
        "Vybourání bazénové jámy proběhlo přesně podle plánu. Poradili nám lepší postup, než jsme původně chtěli. Vřele doporučuji.",
      name: "Viktor Vinický",
      job: "Výkop bazénové jámy",
    },
    {
      quote:
        "Vybourali nám bytové jádro — koupelnu i WC. Bylo znát, že to nedělají poprvé, staveniště po sobě uklidili do čista.",
      name: "Renata Jánská",
      job: "Bourání bytového jádra",
    },
    {
      quote:
        "Domluva rychlá a bez problémů, realizace měla hlavu a patu. Oceňuji věcný a lidský přístup. Byl jsem velmi spokojen.",
      name: "Zdeněk Zápolný",
      job: "Demolice objektu",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="AVOS Plzeň – bourací práce">
          <span className="brand__mark" aria-hidden="true">▟</span>
          <span className="brand__word">
            AVOS<span className="brand__loc">PLZEŇ</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Co bouráme</a>
          <a href="#o-nas">O nás</a>
          <a className="topnav__call" href="tel:+420777002529">
            777 002 529
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Bourací práce firmy AVOS Plzeň – demolice objektu"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">Bourací práce · Plzeň a okolí</p>
          <h1 className="hero__title">
            Zbouráme,
            <br />
            <span className="hero__title-strong">odvezeme,</span>
            <br />
            předáme čisté.
          </h1>
          <p className="hero__lede">
            Od bytového jádra po celý dům. Naplánujeme postup podle statiky
            a okolní zástavby, přistavíme kontejner a suť odvezeme na
            recyklaci. Staveniště vracíme připravené k nové stavbě.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420777002529">
              Zavolat 777 002 529
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co bouráme
            </a>
          </div>
        </div>

        <dl className="hero__facts">
          <div>
            <dt>Na trhu od</dt>
            <dd>1993</dd>
          </div>
          <div>
            <dt>Řemeslníků</dt>
            <dd>25</dd>
          </div>
          <div>
            <dt>Vlastní technika</dt>
            <dd>Bagry · kladiva</dd>
          </div>
        </dl>
      </section>

      <section className="services" id="sluzby">
        <div className="services__head">
          <p className="section-eyebrow">Co pro vás vybouráme</p>
          <h2 className="section-title">
            Bez emocí to nedáme dolů. Bez plánu ani nezačneme.
          </h2>
          <p className="section-sub">
            Menší i větší demolice v Plzni a okolí. Řekněte nám, co má zmizet
            — my vyřešíme techniku, suť i termín.
          </p>
        </div>

        <ol className="services__grid">
          {services.map((s) => (
            <li className="service" key={s.no}>
              <span className="service__no" aria-hidden="true">
                {s.no}
              </span>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__body">{s.body}</p>
            </li>
          ))}
        </ol>

        <figure className="services__strip">
          <img
            src="/section-1.webp"
            alt="Technika AVOS Plzeň při bourání betonové konstrukce"
            className="services__strip-img"
          />
          <figcaption className="services__strip-cap">
            Vlastní bagry, bourací kladiva a nákladní auta — nečekáte na
            půjčovnu.
          </figcaption>
        </figure>
      </section>

      <section className="about" id="o-nas">
        <div className="about__media">
          <img
            src="/section-2.webp"
            alt="Uklizené staveniště po demolici od firmy AVOS Plzeň"
            className="about__img"
          />
        </div>
        <div className="about__body">
          <p className="section-eyebrow">O nás</p>
          <h2 className="section-title section-title--light">
            V oboru přes 30 let. Víme, kam sáhnout a co podepřít.
          </h2>
          <p className="about__text">
            AVOS Plzeň působí na trhu od roku 1993. Dnes u nás pracuje v
            průměru 25 kvalifikovaných řemeslníků. Máme vlastní skladové
            prostory, zámečnickou dílnu a mechanizaci — bagry, nákladní i
            dodávková auta, bourací a sbíjecí kladiva, vibrační desky.
          </p>

          <ul className="about__values" aria-label="Na čem si zakládáme">
            <li>
              <strong>Bezpečně</strong>
              <span>Postup podle statiky a okolí, ne od oka.</span>
            </li>
            <li>
              <strong>Rychle</strong>
              <span>Čas jsou peníze — držíme domluvené termíny.</span>
            </li>
            <li>
              <strong>Do čista</strong>
              <span>Suť odvezeme, staveniště předáme uklizené.</span>
            </li>
          </ul>

          <div className="refs" aria-label="Reference od zákazníků">
            {refs.map((r) => (
              <blockquote className="ref" key={r.name}>
                <p className="ref__quote">{r.quote}</p>
                <footer className="ref__by">
                  <span className="ref__name">{r.name}</span>
                  <span className="ref__job">{r.job}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <p className="about__addr">
            Božkovská 609/14, 326 00 Plzeň — Východní Předměstí
          </p>
        </div>
      </section>
    </main>
  );
}
