import React from "react";

const sortiment = [
  {
    code: "MONT",
    title: "Montérkové oděvy",
    desc: "Blůzy, kalhoty, kombinézy a soupravy do dílny i na stavbu. Zesílená kolena, dost kapes na nářadí.",
  },
  {
    code: "GAST",
    title: "Gastro oděvy",
    desc: "Kuchařské rondony, zástěry a číšnické vesty. Odolné vysokým teplotám i každodennímu praní.",
  },
  {
    code: "MED",
    title: "Zdravotnické oděvy",
    desc: "Haleny, kalhoty, pláště i tuniky pro ordinace, laboratoře a lékárny. Příjemné na celou směnu.",
  },
  {
    code: "HI-VIS",
    title: "Reflexní pracovní oděvy",
    desc: "Bundy a vesty s reflexními pruhy podle normy EN ISO 20471. Vidět a být viděn i v šeru.",
  },
  {
    code: "OBUV",
    title: "Pracovní obuv",
    desc: "Kotníková, zdravotní, zimní i sandály. S ocelovou špicí proti nášlapu i bez ní.",
  },
  {
    code: "OOPP",
    title: "Ochranné pomůcky",
    desc: "Rukavice, brýle, přilby a chrániče sluchu. Osobní ochranné prostředky pro celou dílnu.",
  },
];

const fakta = [
  { k: "5000+", v: "kusů skladem", n: "okamžitě k odběru" },
  { k: "1500 Kč", v: "doprava zdarma", n: "při nákupu nad tuto částku" },
  { k: "7–15 h", v: "poradna na telefonu", n: "poradíme s velikostí i normou" },
];

export default function Page() {
  return (
    <main className="rl-main">
      <header className="rl-nav">
        <a className="rl-brand" href="#top" aria-label="Řempo Lyra – úvod">
          <span className="rl-brand-mark" aria-hidden="true" />
          <span className="rl-brand-word">
            ŘEMPO <span className="rl-brand-lyra">LYRA</span>
          </span>
          <span className="rl-brand-sub">s.r.o. · Olomouc</span>
        </a>
        <nav className="rl-links" aria-label="Hlavní navigace">
          <a href="#sortiment">Sortiment</a>
          <a href="#potisk">Potisk &amp; výšivka</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
        <a className="rl-call" href="tel:+420585312582">Zavolat 585 312 582</a>
      </header>

      <section className="rl-hero" id="top">
        <div className="rl-hero-copy">
          <p className="rl-eyebrow">Pracovní oděvy · Potisk · Výšivka · Olomouc</p>
          <h1 className="rl-h1">
            <span className="rl-h1-line">Od montérek</span>
            <span className="rl-h1-line">po rondon —</span>
            <span className="rl-h1-line rl-h1-accent">oblékneme celou firmu.</span>
          </h1>
          <p className="rl-lead">
            Přes pět tisíc kusů pracovního oblečení, obuvi a ochranných pomůcek
            skladem. Přijďte si obléknout tým do kamenné prodejny v Olomouci —
            nebo si nechte doplnit firemní logo v našem studiu potisku a výšivky.
          </p>
          <div className="rl-hero-cta">
            <a className="rl-btn rl-btn-primary" href="#sortiment">
              Prohlédnout sortiment
            </a>
            <a className="rl-btn rl-btn-ghost" href="#prodejna">
              Kde nás najdete
            </a>
          </div>
        </div>

        <div className="rl-hero-media">
          <img
            className="rl-hero-img"
            src="/hero.webp"
            alt="Pracovní oblečení Řempo Lyra – bunda, montérky a doplňky připravené na směnu"
          />
          <div className="rl-tag" aria-hidden="true">
            <div className="rl-tag-hole" />
            <p className="rl-tag-flag">Novinka</p>
            <dl className="rl-tag-body">
              <div>
                <dt>Model</dt>
                <dd>Bunda pilot WX2 Eco</dd>
              </div>
              <div>
                <dt>Barva</dt>
                <dd>černá</dd>
              </div>
              <div>
                <dt>Materiál</dt>
                <dd>recyklovaný polyester</dd>
              </div>
              <div>
                <dt>Velikosti</dt>
                <dd>S – 3XL</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="rl-tape" aria-hidden="true" />

      <section className="rl-section" id="sortiment">
        <div className="rl-section-head">
          <p className="rl-eyebrow">01 — Co u nás oblečete</p>
          <h2 className="rl-h2">Sortiment podle profese</h2>
          <p className="rl-section-note">
            Vybíráme oděvy, které vydrží praní, směny i počasí. U každé kategorie
            poradíme s velikostí, střihem i normou — ať už strojíte kuchyň,
            ordinaci, nebo partu na stavbě.
          </p>
        </div>

        <ul className="rl-grid">
          {sortiment.map((it) => (
            <li className="rl-card" key={it.code}>
              <span className="rl-card-code">{it.code}</span>
              <h3 className="rl-card-title">{it.title}</h3>
              <p className="rl-card-desc">{it.desc}</p>
              <span className="rl-card-link">Prohlédnout →</span>
            </li>
          ))}
        </ul>

        <div className="rl-feature" id="potisk">
          <div className="rl-feature-media">
            <img
              src="/section-1.webp"
              alt="Detail pracovního oděvu s firemním potiskem a výšivkou"
            />
          </div>
          <div className="rl-feature-copy">
            <span className="rl-card-code rl-card-code--hi">LOGO</span>
            <h3 className="rl-feature-title">
              Potisk a výšivka ve vlastním studiu
            </h3>
            <p>
              Vaše logo dostaneme na trika, mikiny i montérky přímo v Olomouci —
              sítotiskem nebo strojovou výšivkou. Uděláme jeden kus na zkoušku
              i sto stejných pro celý provoz.
            </p>
            <a className="rl-btn rl-btn-primary" href="tel:+420585312582">
              Poptat potisk telefonem
            </a>
          </div>
        </div>
      </section>

      <section className="rl-section rl-section--dark" id="prodejna">
        <div className="rl-trust">
          <div className="rl-trust-copy">
            <p className="rl-eyebrow rl-eyebrow--light">02 — Proč k nám</p>
            <h2 className="rl-h2 rl-h2--light">
              Kamenná prodejna v Olomouci, kde si oblečení osaháte
            </h2>
            <p className="rl-trust-lead">
              Nejsme jen e-shop. Přijďte si střihy vyzkoušet na prodejnu, poradit
              se o velikosti a odnést si zboží hned. Co nemáme na místě,
              doskladníme z pěti tisíc kusů, které držíme skladem.
            </p>

            <dl className="rl-facts">
              {fakta.map((f) => (
                <div className="rl-fact" key={f.v}>
                  <dt className="rl-fact-k">{f.k}</dt>
                  <dd className="rl-fact-v">
                    <strong>{f.v}</strong>
                    <span>{f.n}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="rl-contact">
              <a className="rl-contact-item" href="tel:+420585312582">
                <span>Telefon</span>
                +420 585 312 582 <em>(7–15 h)</em>
              </a>
              <a className="rl-contact-item" href="mailto:prodej@rempolyra.cz">
                <span>E-mail</span>
                prodej@rempolyra.cz
              </a>
            </div>
          </div>

          <div className="rl-trust-media">
            <img
              src="/section-2.webp"
              alt="Regály s pracovními oděvy a obuví na prodejně Řempo Lyra"
            />
            <p className="rl-trust-caption">
              Prodejna Olomouc — poradíme s velikostí i normou.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
