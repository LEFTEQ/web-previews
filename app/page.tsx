import React from "react";

export default function Page() {
  const kroky = [
    {
      cislo: "01",
      nazev: "Změříme a připravíme",
      text: "Přesně zaměříme každé sklo vašeho vozu a fólii nařežeme na míru — bez švů uprostřed skla, bez ořezů viditelných z ulice.",
    },
    {
      cislo: "02",
      nazev: "Aplikujeme za mokra",
      text: "Fólii nanášíme v čisté kabině bezprašnou metodou. Keramické Nanofilms drží barvu i po letech na slunci a neruší signál GPS ani mobilu.",
    },
    {
      cislo: "03",
      nazev: "Odvezete si hotové auto",
      text: "Celý vůz máte hotový do 120 minut. Na instalaci dáváme doživotní záruku — fólie se neloupe, nepraská a nemění barvu do fialova.",
    },
  ];

  const propustnosti = [
    { pct: "70 %", popis: "Přední boční skla — lehký odstín podle vyhlášky", tmavost: 30 },
    { pct: "35 %", popis: "Zadní dveře — komfort a soukromí", tmavost: 65 },
    { pct: "20 %", popis: "Kufr a zadní sklo — výrazné ztmavení", tmavost: 80 },
    { pct: "5 %", popis: "Limuzínová čerň — maximální soukromí", tmavost: 95 },
  ];

  return (
    <main className="cc">
      <header className="cc-nav" aria-label="Hlavní navigace">
        <a className="cc-brand" href="#uvod" aria-label="CentroCar — tónování autoskel Brno">
          <span className="cc-brand-mark" aria-hidden="true">
            <span className="cc-brand-cut" />
          </span>
          <span className="cc-brand-word">
            Centro<strong>Car</strong>
          </span>
        </a>
        <nav className="cc-links">
          <a href="#tonovani">Tónování skel</a>
          <a href="#duvera">Proč my</a>
          <a className="cc-nav-cta" href="#objednat">Objednat termín</a>
        </nav>
      </header>

      <section className="cc-hero" id="uvod">
        <div className="cc-hero-media">
          <img
            src="/hero.webp"
            alt="Vůz s čerstvě tónovanými autoskly v kabině CentroCar v Brně"
            className="cc-hero-img"
            width={1600}
            height={1000}
          />
          <div className="cc-hero-scrim" aria-hidden="true" />
        </div>

        <div className="cc-hero-inner">
          <p className="cc-eyebrow">Autofólie &amp; tónování autoskel · Brno</p>
          <h1 className="cc-hero-title">
            Vaše okna,
            <br />
            <span className="cc-hero-accent">o pár tónů tišší.</span>
          </h1>
          <p className="cc-hero-lede">
            Keramické fólie Nanofilms na míru vašemu autu. Méně žáru z
            přední palubovky, klid pro posádku vzadu a čistý ořez, který
            nepoznáte od originálního skla. Hotovo do dvou hodin.
          </p>
          <div className="cc-hero-actions">
            <a className="cc-btn cc-btn-solid" href="#objednat">
              Vybrat termín online
            </a>
            <a className="cc-btn cc-btn-ghost" href="#tonovani">
              Jak funguje tónování
            </a>
          </div>

          <dl className="cc-hero-stats">
            <div>
              <dt>do 120 min</dt>
              <dd>máte celý vůz hotový</dd>
            </div>
            <div>
              <dt>doživotní</dt>
              <dd>záruka na instalaci</dd>
            </div>
            <div>
              <dt>Nanofilms</dt>
              <dd>keramika, co neruší signál</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="cc-tint" id="tonovani">
        <div className="cc-section-head">
          <p className="cc-eyebrow cc-eyebrow-dark">Odstíny propustnosti</p>
          <h2 className="cc-section-title">
            Kolik světla pustíte dovnitř, si vybíráte vy.
          </h2>
          <p className="cc-section-lede">
            Propustnost světla (VLT) říká, jak tmavé sklo bude. Přední
            boční skla mají zákonem daný limit, zadní část vozu je jen na
            vás. Poradíme, aby výsledek prošel technickou i vypadal.
          </p>
        </div>

        <ul className="cc-tint-scale" aria-label="Odstíny fólií podle propustnosti světla">
          {propustnosti.map((p) => (
            <li className="cc-tint-card" key={p.pct}>
              <div
                className="cc-tint-swatch"
                style={{ ["--tmavost" as any]: p.tmavost / 100 }}
                aria-hidden="true"
              >
                <span className="cc-tint-pct">{p.pct}</span>
              </div>
              <p className="cc-tint-desc">{p.popis}</p>
            </li>
          ))}
        </ul>

        <div className="cc-tint-media">
          <img
            src="/section-1.webp"
            alt="Detail nařezané keramické autofólie připravené k aplikaci na sklo"
            width={1200}
            height={800}
          />
          <div className="cc-tint-note">
            <p className="cc-eyebrow cc-eyebrow-dark">Materiál</p>
            <p>
              Pracujeme s keramickými fóliemi Nanofilms. Neobsahují kov,
              takže vám nepadá signál GPS, mobilu ani parkovacích čidel —
              a barva zůstává neutrálně tmavá, ne dofialova vybledlá.
            </p>
          </div>
        </div>
      </section>

      <section className="cc-trust" id="duvera">
        <div className="cc-trust-media">
          <img
            src="/section-2.webp"
            alt="Práce technika CentroCar při aplikaci fólie na zadní sklo vozu"
            width={1200}
            height={900}
          />
        </div>

        <div className="cc-trust-body">
          <p className="cc-eyebrow">Jak to u nás probíhá</p>
          <h2 className="cc-section-title cc-section-title-light">
            Tři kroky, jedno odpoledne, hotová práce.
          </h2>

          <ol className="cc-steps">
            {kroky.map((k) => (
              <li className="cc-step" key={k.cislo}>
                <span className="cc-step-num" aria-hidden="true">
                  {k.cislo}
                </span>
                <div>
                  <h3 className="cc-step-name">{k.nazev}</h3>
                  <p className="cc-step-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="cc-trust-facts" id="objednat">
            <p className="cc-trust-facts-lede">
              Léta zkušeností, tisíce ojetých i nových aut v Brně a
              doživotní záruka na každou instalaci. Nemusíte věřit slibům —
              přijeďte se podívat do naší kabiny.
            </p>
            <a className="cc-btn cc-btn-solid" href="#objednat">
              Domluvit si tónování v Brně
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
