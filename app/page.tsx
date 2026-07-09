import React from "react";

export default function Page() {
  const materialy = [
    {
      kod: "3M / Avery",
      nazev: "Celopolep vozidla",
      popis:
        "Celý vůz zabalíme do fólie 3M nebo Avery Dennison. Změníme barvu, matnou na lesklou, karbon nebo saténovou strukturu — bez laku, kdykoli vratné.",
      detail: "Litá fólie, záruka 5–7 let",
    },
    {
      kod: "Cast",
      nazev: "Firemní polep a reklama",
      popis:
        "Logo, kontakt a grafika na dodávky i osobní auta. Návrh sedíme s vámi u počítače, tiskneme v našem studiu a lepíme přesně podle křivek karoserie.",
      detail: "Grafika + tisk + montáž",
    },
    {
      kod: "PPF",
      nazev: "Ochranná fólie laku",
      popis:
        "Průhledná vrstva, která schová odletující kamínky a drobné škrábance. Přední partie nebo celé auto — lak zůstane jako nový pod ní.",
      detail: "Samohojivá, neviditelná",
    },
    {
      kod: "Ceramic",
      nazev: "Ztmavení skel",
      popis:
        "Autofólie na okna s atestem pro STK. Méně tepla v kabině, soukromí vzadu a UV ochrana pro interiér i pro vás.",
      detail: "Homologace pro provoz",
    },
  ];

  return (
    <main className="bb">
      <header className="bb-nav">
        <a className="bb-logo" href="#top" aria-label="BLUE &amp; BLUE, polepy aut České Budějovice">
          <span className="bb-logo-mark" aria-hidden="true">
            <span className="bb-logo-swatch bb-logo-swatch--a" />
            <span className="bb-logo-swatch bb-logo-swatch--b" />
          </span>
          <span className="bb-logo-text">
            BLUE<span className="bb-amp">&amp;</span>BLUE
          </span>
        </a>
        <nav className="bb-nav-links" aria-label="Hlavní">
          <a href="#sluzby">Co lepíme</a>
          <a href="#studio">Studio</a>
        </nav>
      </header>

      <section className="bb-hero" id="top">
        <div className="bb-hero-media">
          <img
            src="/hero.webp"
            alt="Auto s čerstvě aplikovaným celopolepem ve studiu Blue &amp; Blue v Českých Budějovicích"
            className="bb-hero-img"
          />
          <span className="bb-hero-glare" aria-hidden="true" />
        </div>

        <div className="bb-hero-body">
          <p className="bb-eyebrow">
            <span className="bb-eyebrow-dot" aria-hidden="true" />
            Polepy aut · České Budějovice
          </p>
          <h1 className="bb-hero-title">
            Nová barva auta
            <span className="bb-hero-line">bez jediné kapky</span>
            <span className="bb-hero-accent">laku.</span>
          </h1>
          <p className="bb-hero-lede">
            Zabalíme vůz do fólie tak přesně, že to na první pohled vypadá jako
            lak z výroby. Přes 20 let stahujeme fólie kolem klik, prahů a
            zrcátek — v Budějovicích i pro klienty z celého kraje.
          </p>
          <div className="bb-hero-actions">
            <a className="bb-btn bb-btn--primary" href="#sluzby">
              Vybrat fólii
            </a>
            <a className="bb-btn bb-btn--ghost" href="tel:+420725973841">
              Zavolat do studia
            </a>
          </div>

          <dl className="bb-hero-facts">
            <div>
              <dt>Barevných odstínů fólie skladem</dt>
              <dd>190+</dd>
            </div>
            <div>
              <dt>Záruka výrobce na litou fólii</dt>
              <dd>až 7 let</dd>
            </div>
            <div>
              <dt>Kdykoli vratné bez poškození laku</dt>
              <dd>100 %</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bb-section bb-services" id="sluzby">
        <div className="bb-section-head">
          <p className="bb-eyebrow">
            <span className="bb-eyebrow-dot" aria-hidden="true" />
            Co pro vaše auto uděláme
          </p>
          <h2 className="bb-section-title">
            Čtyři vrstvy fólie, jedno řemeslo
          </h2>
          <p className="bb-section-lede">
            Od barevného celopolepu po neviditelnou ochranu laku. Vždy tiskneme
            a lepíme sami — nic neposíláme dál subdodavateli.
          </p>
        </div>

        <ol className="bb-swatches">
          {materialy.map((m, i) => (
            <li className="bb-swatch" key={m.nazev}>
              <div className="bb-swatch-tab" aria-hidden="true">
                <span className="bb-swatch-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="bb-swatch-kod">{m.kod}</span>
              </div>
              <div className="bb-swatch-body">
                <h3 className="bb-swatch-title">{m.nazev}</h3>
                <p className="bb-swatch-text">{m.popis}</p>
                <p className="bb-swatch-detail">{m.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="bb-services-figure">
          <img
            src="/section-1.webp"
            alt="Detail ruky lepící fólii na hranu karoserie, staženou horkovzdušnou pistolí"
            className="bb-figure-img"
          />
          <figcaption>
            Fólii stahujeme horkem přesně kolem každé hrany a prolisu — žádné
            bubliny, žádné odchlípené rohy.
          </figcaption>
        </figure>
      </section>

      <section className="bb-section bb-studio" id="studio">
        <div className="bb-studio-grid">
          <figure className="bb-studio-figure">
            <img
              src="/section-2.webp"
              alt="Grafické studio Blue &amp; Blue při přípravě návrhu polepu"
              className="bb-figure-img"
            />
          </figure>

          <div className="bb-studio-body">
            <p className="bb-eyebrow bb-eyebrow--light">
              <span className="bb-eyebrow-dot" aria-hidden="true" />
              Kdo vám auto polepí
            </p>
            <h2 className="bb-section-title bb-section-title--light">
              Dvě modré, dvacet let praxe
            </h2>
            <p className="bb-studio-text">
              Jsme malé studio z Novohradské v Českých Budějovicích. Návrh
              sedíme společně, ať víte, jak bude auto vypadat, ještě než se
              rozřeže první metr fólie. Pak tiskneme, laminujeme a lepíme — vše
              pod jednou střechou.
            </p>

            <ul className="bb-people">
              <li>
                <span className="bb-person-name">Miroslav Tetour</span>
                <a className="bb-person-link" href="tel:+420725973841">
                  +420 725 973 841
                </a>
                <a className="bb-person-link" href="mailto:miroslav@blueblue.cz">
                  miroslav@blueblue.cz
                </a>
              </li>
              <li>
                <span className="bb-person-name">Marek Jech</span>
                <a className="bb-person-link" href="tel:+420702031191">
                  +420 702 031 191
                </a>
                <a className="bb-person-link" href="mailto:marek@blueblue.cz">
                  marek@blueblue.cz
                </a>
              </li>
            </ul>

            <p className="bb-studio-address">
              BLUE &amp; BLUE s.r.o. · Novohradská 1452/1 · 370 01 České
              Budějovice
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
