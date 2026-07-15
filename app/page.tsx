import React from "react";

const sluzby = [
  {
    kod: "CI",
    nazev: "Corporate identity",
    popis:
      "Kompletní značka od logotypu po pravidla použití. Dostanete manuál, který drží pohromadě i po letech a napříč celým týmem.",
  },
  {
    kod: "VS",
    nazev: "Vizuální styl",
    popis:
      "Barvy, písmo, mřížka a tón, podle kterých vás lidé poznají dřív, než přečtou název firmy.",
  },
  {
    kod: "GD",
    nazev: "Grafický design",
    popis:
      "Tiskoviny, inzeráty, prezentace i sociální sítě — čistě, čitelně a bez kompromisů v detailu.",
  },
  {
    kod: "OB",
    nazev: "Obalový design",
    popis:
      "Obal, který na regálu prodává i beze slov. Od první skici po hotová data pro tiskárnu.",
  },
  {
    kod: "RE",
    nazev: "Redesign identity",
    popis:
      "Máte značku, která zestárla? Zachováme, co funguje, a zbytek srovnáme do současné podoby.",
  },
  {
    kod: "KD",
    nazev: "Korporátní design",
    popis:
      "Jednotný systém pro celou firmu — od vizitky přes web a výroční zprávu až po showroom.",
  },
];

const hodnoty = [
  "Individuální přístup",
  "Kreativita",
  "Originalita",
  "Systematická práce",
  "Přátelská atmosféra",
];

export default function Page() {
  return (
    <main id="top" className="kb">
      {/* HERO */}
      <section className="kb-hero">
        <div className="kb-tick kb-tick--tl" aria-hidden="true" />
        <div className="kb-tick kb-tick--tr" aria-hidden="true" />

        <header className="kb-nav">
          <a className="kb-wordmark" href="#top" aria-label="Kobra Design, grafické studio Brno">
            <span className="kb-wordmark__name">KOBRA</span>
            <span className="kb-wordmark__sub">grafické studio</span>
          </a>
          <p className="kb-nav__meta">
            <span>Jílkova 38, Brno</span>
            <span className="kb-nav__dot" aria-hidden="true">/</span>
            <a href="tel:+420777790035">+420 777 790 035</a>
          </p>
        </header>

        <div className="kb-hero__inner">
          <div className="kb-hero__copy">
            <p className="kb-eyebrow kb-anim" style={{ animationDelay: "0.05s" }}>
              Grafické studio · Brno · od 2001
            </p>
            <h1 className="kb-hero__title">
              <span className="kb-anim" style={{ animationDelay: "0.12s" }}>
                Značka,
              </span>{" "}
              <span className="kb-anim" style={{ animationDelay: "0.2s" }}>
                kterou
              </span>{" "}
              <span className="kb-hero__accent kb-anim" style={{ animationDelay: "0.28s" }}>
                nikdo nezamění.
                <svg
                  className="kb-serpent"
                  viewBox="0 0 320 34"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 22 C 46 2, 78 30, 122 18 S 202 2, 246 20 S 300 30, 318 10" />
                </svg>
              </span>
            </h1>
            <p className="kb-lead kb-anim" style={{ animationDelay: "0.38s" }}>
              Přes dvacet let v Brně stavíme corporate identity, vizuální styly a
              obaly, které si zákazník zapamatuje — a firma s nimi vydrží roky, ne
              jednu kampaň.
            </p>
            <div className="kb-actions kb-anim" style={{ animationDelay: "0.46s" }}>
              <a className="kb-btn kb-btn--gold" href="#prace">
                Prohlédnout práce
              </a>
              <a className="kb-btn kb-btn--ghost" href="tel:+420777790035">
                Zavolat 777 790 035
              </a>
            </div>
          </div>

          <figure className="kb-hero__fig kb-frame kb-anim" style={{ animationDelay: "0.34s" }}>
            <img
              src="/hero.webp"
              alt="Ukázka corporate identity z portfolia studia Kobra Design"
              width={720}
              height={860}
              loading="eager"
            />
            <figcaption>
              <span>Corporate identity</span>
              <span>výběr z portfolia</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="kb-services" id="prace">
        <div className="kb-section-head">
          <p className="kb-eyebrow kb-eyebrow--dark">Služby / co pro vás uděláme</p>
          <h2 className="kb-h2">
            Šest disciplín, jeden systém, který drží pohromadě.
          </h2>
        </div>

        <div className="kb-services__grid">
          <figure className="kb-services__fig kb-frame">
            <img
              src="/section-1.webp"
              alt="Detail vizuálního stylu — barvy, písmo a mřížka od Kobra Design"
              width={640}
              height={780}
              loading="lazy"
            />
            <figcaption>
              <span>Vizuální styl</span>
              <span>barvy · písmo · mřížka</span>
            </figcaption>
          </figure>

          <ol className="kb-index">
            {sluzby.map((s, i) => (
              <li className="kb-index__row" key={s.kod}>
                <span className="kb-index__code">
                  {String(i + 1).padStart(2, "0")}
                  <span className="kb-index__kod">{s.kod}</span>
                </span>
                <div className="kb-index__body">
                  <h3 className="kb-index__title">{s.nazev}</h3>
                  <p className="kb-index__desc">{s.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* O NÁS */}
      <section className="kb-about">
        <div className="kb-tick kb-tick--tl kb-tick--gold" aria-hidden="true" />
        <div className="kb-tick kb-tick--br kb-tick--gold" aria-hidden="true" />

        <div className="kb-about__grid">
          <div className="kb-about__copy">
            <p className="kb-eyebrow">O studiu / od roku 2001</p>
            <blockquote className="kb-quote">
              <p>
                „Přes dvacet let zkušeností v oboru nás naučilo dbát na
                individuální přístup, kreativitu, originalitu a systematickou
                práci v přátelské atmosféře.
              </p>
              <p>
                Co nejvíc nasloucháme klientovi, společně pojmenujeme jeho
                potřeby a hledáme optimální řešení. To je to, co nás na téhle
                práci pořád baví.“
              </p>
            </blockquote>

            <ul className="kb-values">
              {hodnoty.map((h) => (
                <li key={h} className="kb-values__item">
                  {h}
                </li>
              ))}
            </ul>

            <dl className="kb-contact">
              <div>
                <dt>Studio</dt>
                <dd>Jílkova 38, 615 00 Brno</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420777790035">+420 777 790 035</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:kobylinsky@kobra.cz">kobylinsky@kobra.cz</a>
                </dd>
              </div>
            </dl>
          </div>

          <figure className="kb-about__fig kb-frame kb-frame--light">
            <img
              src="/section-2.webp"
              alt="Realizace obalového a korporátního designu od studia Kobra Design"
              width={640}
              height={800}
              loading="lazy"
            />
            <figcaption>
              <span>Realizace</span>
              <span>obal · korporátní design</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
