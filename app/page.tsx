import React from "react";

export default function Page() {
  const sluzby = [
    {
      pozice: "01",
      nazev: "Přezutí a uskladnění",
      popis:
        "Sezónní výměna kompletních kol i přezutí na ráfku. Vaše zimní nebo letní sadu pak necháte u nás v hlídaném skladu — na jaře přijedete jen s klíčky.",
      detail: "Osobní · dodávky · SUV",
    },
    {
      pozice: "02",
      nazev: "3D geometrie s laserem",
      popis:
        "Laserové 3D měření nápravy odhalí i milimetrové odchylky, které ničí gumy a táhnou volant do strany. Seřídíme sbíhavost i odklon podle hodnot výrobce.",
      detail: "Protokol o měření k autu",
    },
    {
      pozice: "03",
      nazev: "Vyvážení a opravy defektů",
      popis:
        "Dynamické vyvážení kol, oprava průpichu knotem i záplatou zevnitř, kontrola ventilků. Rozechvělý volant nad stovkou vyřešíme na počkání.",
      detail: "Bez objednání, na počkání",
    },
    {
      pozice: "04",
      nazev: "Servis klimatizace",
      popis:
        "Plnění a kontrola těsnosti klimatizace, výměna chladiva i dezinfekce výparníku. Ať v létě fouká chlad a nezapáchá.",
      detail: "Chladivo R134a i R1234yf",
    },
  ];

  return (
    <main className="ph">
      <header className="ph-top">
        <a className="ph-brand" href="#" aria-label="Pneuservis Hanzal, České Budějovice">
          <span className="ph-brand-mark" aria-hidden="true">
            <span className="ph-tread" />
          </span>
          <span className="ph-brand-text">
            <span className="ph-brand-name">HANZAL</span>
            <span className="ph-brand-sub">pneuservis · České Budějovice</span>
          </span>
        </a>
        <a className="ph-call" href="tel:+420387000000">
          <span className="ph-call-dot" aria-hidden="true" />
          Zavolat
        </a>
      </header>

      <section className="ph-hero">
        <div className="ph-hero-media">
          <img
            src="/hero.webp"
            alt="Přezouvání pneumatiky na montážním stroji v pneuservisu Hanzal"
            className="ph-hero-img"
          />
          <div className="ph-hero-veil" aria-hidden="true" />
        </div>

        <div className="ph-hero-inner">
          <p className="ph-eyebrow">Bez objednání · Nemanice, České Budějovice</p>
          <h1 className="ph-title">
            Přijeďte na gumy,
            <br />
            <span className="ph-title-accent">odjeďte bez řešení.</span>
          </h1>
          <p className="ph-lede">
            Přezutí, vyvážení, laserová 3D geometrie i klimatizace — všechno
            zvládneme na jedné jámě, obvykle hned, jak dorazíte. Žádné
            objednávky týden dopředu.
          </p>
          <div className="ph-hero-actions">
            <a className="ph-btn ph-btn-primary" href="tel:+420387000000">
              Zavolat a přijet
            </a>
            <a className="ph-btn ph-btn-ghost" href="#sluzby">
              Co u nás uděláme
            </a>
          </div>

          <ul className="ph-facts" aria-label="Rychlé informace">
            <li>
              <span className="ph-fact-k">Po–Pá</span>
              <span className="ph-fact-v">7:30–17:00</span>
            </li>
            <li>
              <span className="ph-fact-k">Objednání</span>
              <span className="ph-fact-v">Netřeba</span>
            </li>
            <li>
              <span className="ph-fact-k">Uskladnění</span>
              <span className="ph-fact-v">V hale u nás</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="ph-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ph-sec-head">
          <p className="ph-eyebrow ph-eyebrow-dark">Čtyři jámy, jedno zastavení</p>
          <h2 className="ph-h2" id="sluzby-nadpis">
            Co pro vaše auto uděláme
          </h2>
        </div>

        <div className="ph-grid">
          <div className="ph-grid-media">
            <img
              src="/section-1.webp"
              alt="Regály s uskladněnými pneumatikami a koly zákazníků"
              className="ph-grid-img"
            />
          </div>

          <ol className="ph-list">
            {sluzby.map((s) => (
              <li className="ph-item" key={s.pozice}>
                <span className="ph-item-num" aria-hidden="true">
                  {s.pozice}
                </span>
                <div className="ph-item-body">
                  <h3 className="ph-item-name">{s.nazev}</h3>
                  <p className="ph-item-desc">{s.popis}</p>
                  <span className="ph-item-tag">{s.detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ph-trust" aria-labelledby="onas-nadpis">
        <div className="ph-trust-media">
          <img
            src="/section-2.webp"
            alt="Mechanik v hale pneuservisu Hanzal v Českých Budějovicích"
            className="ph-trust-img"
          />
        </div>

        <div className="ph-trust-body">
          <p className="ph-eyebrow ph-eyebrow-dark">O nás</p>
          <h2 className="ph-h2" id="onas-nadpis">
            Rodinný pneuservis, který znáte podle jména
          </h2>
          <p className="ph-trust-lede">
            Josef Hanzal točí koly Budějovičákům přes dvacet let. Nejsme
            řetězec — u přepážky vás obslouží ten, kdo pak stojí u vašeho auta.
            Řekneme rovnou, jestli gumy vydrží ještě sezónu, nebo je čas je
            měnit.
          </p>

          <dl className="ph-stats">
            <div>
              <dt>20+ let</dt>
              <dd>točíme koly v Budějovicích</dd>
            </div>
            <div>
              <dt>0 min</dt>
              <dd>čekání na termín — jezdíme bez objednání</dd>
            </div>
            <div>
              <dt>4 sady</dt>
              <dd>vejde do našeho skladu za vás</dd>
            </div>
          </dl>

          <blockquote className="ph-quote">
            „Přijel jsem s rozklepaným volantem, odjel jsem za tři čtvrtě
            hodiny s vyváženými koly a měl to za rozumný peníz. Přesně tak si
            představuju pneuservis.“
            <cite>— Petr M., zákazník ze Čtyř Dvorů</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
