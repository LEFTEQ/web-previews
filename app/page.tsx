import React from "react";

export default function Page() {
  return (
    <main className="sv">
      {/* HERO — the level line */}
      <header className="sv-hero">
        <div className="sv-hero-media">
          <img
            src="/hero.webp"
            alt="Stavba realizovaná firmou Stavona v Olomouci"
            className="sv-hero-img"
          />
          <div className="sv-hero-scrim" aria-hidden="true" />
        </div>

        <nav className="sv-nav" aria-label="Hlavní">
          <a className="sv-mark" href="#uvod" aria-label="Stavona Olomouc, úvod">
            <span className="sv-mark-word">STAVONA</span>
            <span className="sv-mark-loc">Olomouc · od&nbsp;1997</span>
          </a>
          <ul className="sv-nav-links">
            <li><a href="#cinnost">Co stavíme</a></li>
            <li><a href="#reference">Reference</a></li>
            <li><a className="sv-nav-cta" href="tel:+420585312238">585&nbsp;312&nbsp;238</a></li>
          </ul>
        </nav>

        <div className="sv-hero-body">
          <p className="sv-eyebrow">
            <span className="sv-bubble" aria-hidden="true" />
            Stavební firma · Chválkovická, Olomouc
          </p>
          <h1 className="sv-hero-h1">
            Stavíme
            <span className="sv-hero-line">
              <span className="sv-hero-em">od&nbsp;podlahy</span>
            </span>
            po&nbsp;střechu.
          </h1>
          <p className="sv-hero-lede">
            Rodinná stavební firma z Olomouce. Kompletní realizace na klíč —
            od základů a hrubé stavby přes rekonstrukce až po betonové
            podlahy. Řemeslo, které drží od roku 1997.
          </p>
          <div className="sv-hero-actions">
            <a className="sv-btn sv-btn-solid" href="tel:+420585312238">Zavolat na stavbu</a>
            <a className="sv-btn sv-btn-ghost" href="#reference">Prohlédnout realizace</a>
          </div>
        </div>

        <dl className="sv-hero-strip">
          <div className="sv-strip-item">
            <dt>Zakládáme na</dt>
            <dd>rodinné tradici z&nbsp;první republiky</dd>
          </div>
          <div className="sv-strip-item">
            <dt>Působíme</dt>
            <dd>Olomoucko a&nbsp;okolní kraj</dd>
          </div>
          <div className="sv-strip-item">
            <dt>Děláme</dt>
            <dd>od&nbsp;statiky po&nbsp;oplocení</dd>
          </div>
        </dl>
      </header>

      {/* SECTION 1 — what we build */}
      <section id="cinnost" className="sv-sec sv-sec-services" aria-labelledby="cinnost-nadpis">
        <div className="sv-sec-head">
          <p className="sv-kicker">Co umíme a nabízíme</p>
          <h2 id="cinnost-nadpis" className="sv-h2">
            Celá stavba u&nbsp;jedné party — vrstvu po&nbsp;vrstvě.
          </h2>
          <p className="sv-sec-lede">
            Neposíláme vás od subdodavatele k&nbsp;subdodavateli. Postavíme,
            zrekonstruujeme, zabetonujeme a&nbsp;předáme hotové. Tady je, co
            u&nbsp;nás postavíte.
          </p>
        </div>

        <ol className="sv-services">
          <li className="sv-service">
            <span className="sv-service-layer" aria-hidden="true">±0,00</span>
            <h3>Stavební činnost na&nbsp;klíč</h3>
            <p>
              Kompletní realizace všech stavebních prací — od základů
              a&nbsp;hrubé stavby po dokončení. Jeden odpovědný tým
              od&nbsp;výkopu po předání.
            </p>
          </li>
          <li className="sv-service">
            <span className="sv-service-layer" aria-hidden="true">−0,15</span>
            <h3>Podlahy a&nbsp;betonáž</h3>
            <p>
              Betonové podlahy, potěry a&nbsp;podklady, na&nbsp;kterých stojí
              zbytek stavby. Rovina, únosnost, čistý povrch — přesně tam,
              kde firma vlastně začíná.
            </p>
          </li>
          <li className="sv-service">
            <span className="sv-service-layer" aria-hidden="true">▲</span>
            <h3>Rekonstrukce a&nbsp;modernizace</h3>
            <p>
              Rekonstrukce budov i&nbsp;historických objektů v&nbsp;Olomouci
              a&nbsp;okolí. Citlivé zásahy do starších staveb, kde se hodí
              zkušenost víc než rychlost.
            </p>
          </li>
          <li className="sv-service">
            <span className="sv-service-layer" aria-hidden="true">□</span>
            <h3>Statické zajištění</h3>
            <p>
              Statické zajištění konstrukcí — třeba mycího můstku
              v&nbsp;Lipníku nad Bečvou. Tam, kde jde o&nbsp;bezpečnost, se
              nespěchá.
            </p>
          </li>
          <li className="sv-service">
            <span className="sv-service-layer" aria-hidden="true">╱╱</span>
            <h3>Oplocení z&nbsp;tahokovu</h3>
            <p>
              Moderní a&nbsp;funkční ploty z&nbsp;tahokovu i&nbsp;betonová
              oplocení. Řešení, které vydrží počasí i&nbsp;provoz —
              realizováno v&nbsp;ulici Dobrovského v&nbsp;Olomouci.
            </p>
          </li>
        </ol>

        <figure className="sv-sec-figure">
          <img
            src="/section-1.webp"
            alt="Detail stavební realizace Stavona — konstrukce a povrch"
            className="sv-figure-img"
          />
          <figcaption>Realizace na&nbsp;klíč — Olomouc a&nbsp;okolí.</figcaption>
        </figure>
      </section>

      {/* SECTION 2 — trust / references */}
      <section id="reference" className="sv-sec sv-sec-trust" aria-labelledby="reference-nadpis">
        <div className="sv-trust-grid">
          <div className="sv-trust-copy">
            <p className="sv-kicker sv-kicker-light">Tradiční firma Stavona</p>
            <h2 id="reference-nadpis" className="sv-h2 sv-h2-light">
              Založeno 1997. Tradice sahá až&nbsp;k&nbsp;první republice.
            </h2>
            <p className="sv-sec-lede sv-lede-light">
              Jsme rodinná firma. Kvalita naší práce je pro nás základ —
              bez ní by nás v&nbsp;regionu nikdo nedoporučil. Za&nbsp;léta
              působení máme za&nbsp;sebou řadu významných zakázek a&nbsp;fandíme
              domácímu sportu: podporujeme fotbalovou Sigmu Olomouc
              i&nbsp;mladé talenty.
            </p>
            <address className="sv-contact">
              <span className="sv-contact-name">Stavona Olomouc s.r.o.</span>
              <span>Chválkovická 218/52, 773&nbsp;00 Olomouc</span>
              <a href="tel:+420585312238">Tel. 585&nbsp;312&nbsp;238</a>
              <a href="mailto:stavonaolomouc@stavonaolomouc.cz">stavonaolomouc@stavonaolomouc.cz</a>
            </address>
          </div>

          <figure className="sv-trust-figure">
            <img
              src="/section-2.webp"
              alt="Dokončená rekonstrukce budovy od firmy Stavona v Olomouci"
              className="sv-figure-img"
            />
          </figure>
        </div>

        <ul className="sv-refs">
          <li className="sv-ref">
            <span className="sv-ref-type">Statika</span>
            <p className="sv-ref-title">Statické zajištění mycího můstku</p>
            <p className="sv-ref-loc">Lipník nad&nbsp;Bečvou</p>
          </li>
          <li className="sv-ref">
            <span className="sv-ref-type">Rekonstrukce</span>
            <p className="sv-ref-title">Rekonstrukce historického objektu</p>
            <p className="sv-ref-loc">Olomouc</p>
          </li>
          <li className="sv-ref">
            <span className="sv-ref-type">Modernizace</span>
            <p className="sv-ref-title">Modernizace budovy Nová Wolkerova</p>
            <p className="sv-ref-loc">ul. 9.&nbsp;května, Olomouc</p>
          </li>
          <li className="sv-ref">
            <span className="sv-ref-type">Oplocení</span>
            <p className="sv-ref-title">Plot z&nbsp;tahokovu</p>
            <p className="sv-ref-loc">ul. Dobrovského, Olomouc</p>
          </li>
          <li className="sv-ref">
            <span className="sv-ref-type">Stavební úpravy</span>
            <p className="sv-ref-title">Stavební úpravy budovy</p>
            <p className="sv-ref-loc">Bučovice u&nbsp;Brna</p>
          </li>
          <li className="sv-ref">
            <span className="sv-ref-type">Oplocení</span>
            <p className="sv-ref-title">Oprava betonového oplocení</p>
            <p className="sv-ref-loc">Olomouc</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
