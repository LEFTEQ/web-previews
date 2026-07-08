import React from "react";

export default function Page() {
  const kategorie = [
    {
      cislo: "01",
      nazev: "Motory a pohony",
      popis: "Střídavé elmotory Dualsky, regulátory, vrtule APC — od halovek po velké modely. Pohon si předem spočítáte v e‑Calcu, poradíme s výběrem.",
    },
    {
      cislo: "02",
      nazev: "RC souprava a příjem",
      popis: "Vysílače RadioMaster TX16S, přijímače ELRS pro spoj na velkou vzdálenost. Systém s piny pro každé servo zvlášť — přesně pro letadla, ne pro drony.",
    },
    {
      cislo: "03",
      nazev: "Serva",
      popis: "Digitální serva CHASERVO a KST pro nejvyšší nároky. Tenká serva do křídel větroňů (HV75H má šířku jen 7,5 mm, moment 6,5 kg·cm).",
    },
    {
      cislo: "04",
      nazev: "Nabíjení a měření",
      popis: "Nabíječky ToolkitRC řady M6 a M8 — napájení z baterie i ze sítě, výkon až 1600 W ve spojení. Ke každé ručně přeložený český návod.",
    },
    {
      cislo: "05",
      nazev: "Stavba a materiály",
      popis: "Potahové materiály, kompozity, lepidla, stavební materiál a nářadí. Vše, co potřebujete od prvního žebra po hotový model.",
    },
  ];

  const novinky = [
    {
      datum: "4. 12.",
      nadpis: "Vrtule APC SF a SFR pro 4D",
      text: "Lehké značkové vrtule 5–11 palců pro slowflyery a halovky. Provedení SFR se točí v obou směrech — dovolí atraktivní couvání ve vzduchu.",
    },
    {
      datum: "4. 12.",
      nadpis: "Nabíječky ToolkitRC M6DAC V2 a PRO",
      text: "Dvojčata s napájením z baterie do 28 V i ze sítě. V2 dá až 2×400 W, PRO stejně z baterie a 2×150 W ze sítě. Y‑propojkou nabijete jednu baterii dvojnásobně.",
    },
    {
      datum: "5. 1.",
      nadpis: "CHASERVO HV75H",
      text: "Servo široké pouhých 7,5 mm dá moment až 6,5 kg·cm a rychlost 0,09 s / 60°. Hmotnost jen 12 g — přesně do tenkých křídel.",
    },
  ];

  return (
    <main className="hm">
      <header className="hm-top">
        <a className="hm-brand" href="#" aria-label="Hořejší model, hlavní stránka">
          <span className="hm-brand-mark" aria-hidden="true">HM</span>
          <span className="hm-brand-words">
            <span className="hm-brand-name">Hořejší model</span>
            <span className="hm-brand-sub">modely letadel · Plzeň</span>
          </span>
        </a>
        <nav className="hm-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#novinky">Právě došlo</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
      </header>

      <section className="hm-hero">
        <div className="hm-hero-media">
          <img
            src="/hero.webp"
            alt="RC model letadla z prodejny Hořejší model v Plzni"
            className="hm-hero-img"
          />
          <div className="hm-hero-scrim" aria-hidden="true" />
        </div>
        <div className="hm-hero-body">
          <p className="hm-eyebrow">Prodejna · e‑shop · velkoobchod od roku 1994</p>
          <h1 className="hm-title">
            Všechno, co<br />
            <span className="hm-title-accent">udrží model ve vzduchu.</span>
          </h1>
          <p className="hm-lede">
            Motory, serva, přijímače ELRS i vrtule, které se točí oběma směry.
            V kamenné prodejně u plzeňského nádraží poradíme s celým pohonem —
            a co je označené „skladem“, máme opravdu na skladě k okamžitému dodání.
          </p>
          <div className="hm-hero-cta">
            <a className="hm-btn" href="#sortiment">Prohlédnout sortiment</a>
            <a className="hm-btn hm-btn--ghost" href="tel:+420377429869">
              Zavolat 377 429 869
            </a>
          </div>
          <dl className="hm-facts">
            <div>
              <dt>Poštovné zdarma</dt>
              <dd>při nákupu nad 3 000 Kč po ČR</dd>
            </div>
            <div>
              <dt>8:00–16:00</dt>
              <dd>telefonické objednávky každý všední den</dd>
            </div>
            <div>
              <dt>e‑Calc zdarma</dt>
              <dd>pro motory Dualsky spočítáme pohon</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sortiment" className="hm-section" aria-labelledby="sortiment-h">
        <div className="hm-section-head">
          <p className="hm-eyebrow">Sortiment</p>
          <h2 id="sortiment-h" className="hm-h2">
            Postavené kolem pohonu
          </h2>
          <p className="hm-section-lede">
            Neprodáváme „kdeco pro modeláře“. Držíme značky, které stojí za
            doporučení — a ke každé umíme poradit, co s čím ladí.
          </p>
        </div>
        <ol className="hm-cards">
          {kategorie.map((k) => (
            <li key={k.cislo} className="hm-card">
              <span className="hm-card-num" aria-hidden="true">
                {k.cislo}
              </span>
              <h3 className="hm-card-title">{k.nazev}</h3>
              <p className="hm-card-text">{k.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="novinky" className="hm-trust" aria-labelledby="novinky-h">
        <div className="hm-trust-grid">
          <div className="hm-trust-media">
            <img
              src="/section-1.webp"
              alt="Detail RC komponent a příslušenství ze skladu Hořejší model"
              className="hm-trust-img"
            />
          </div>
          <div className="hm-trust-body" id="prodejna">
            <p className="hm-eyebrow">Právě došlo · Slovanská 8, Plzeň</p>
            <h2 id="novinky-h" className="hm-h2">
              Sklad, který se hýbe
            </h2>
            <p className="hm-section-lede">
              Objednávky vyřizujeme okamžitě. Najdete nás poblíž hlavního nádraží
              ČD — parkování v okolí firmy (prosíme, ne v průjezdu a na dvoře, je
              to soukromý pozemek, který nepatří nám).
            </p>
            <ul className="hm-news">
              {novinky.map((n, i) => (
                <li key={i} className="hm-news-item">
                  <span className="hm-news-date">{n.datum}</span>
                  <div>
                    <h3 className="hm-news-title">{n.nadpis}</h3>
                    <p className="hm-news-text">{n.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
