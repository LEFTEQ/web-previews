import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Renovace rodinných domů",
      popis:
        "Od základů po střechu — zednické, elektrikářské, instalatérské i malířské práce. Vezmeme starý dům a předáme ho hotový k nastěhování.",
    },
    {
      cislo: "02",
      nazev: "Rekonstrukce bytů a jader",
      popis:
        "Sádrokartonové příčky, nová bytová jádra a kompletní řemeslo v panelácích i cihlových bytech. Uklidíme po sobě, než odejdeme.",
    },
    {
      cislo: "03",
      nazev: "Fasády",
      popis:
        "Nové fasády v desítkách odstínů i oprava té stávající. Dům dostane novou tvář, která vydrží ústecké počasí.",
    },
    {
      cislo: "04",
      nazev: "Zateplování",
      popis:
        "Kompletní zateplení stěn, stropů, podlah, střech i půdy. Nižší účty za topení a teplo, které v domě zůstane.",
    },
  ];

  return (
    <main className="zb">
      <header className="zb-nav">
        <a className="zb-mark" href="#uvod" aria-label="Zednictví Petr Bauer — úvod">
          <span className="zb-mark-line">Zednictví</span>
          <span className="zb-mark-name">Petr Bauer</span>
        </a>
        <nav className="zb-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Co stavíme</a>
          <a href="#o-nas">Od roku 1993</a>
          <a className="zb-nav-tel" href="tel:+420724331702">724&nbsp;331&nbsp;702</a>
        </nav>
      </header>

      <section className="zb-hero" id="uvod">
        <div className="zb-hero-media">
          <img
            src="/hero.webp"
            alt="Dokončená zednická realizace zednictví Petr Bauer v okolí Ústí nad Labem"
            className="zb-hero-img"
          />
        </div>
        <div className="zb-hero-text">
          <p className="zb-eyebrow">Zednictví · Ústí nad Labem &amp; Trmice</p>
          <h1 className="zb-h1">
            Postavíme to <span className="zb-underline">rovně</span>,
            <br />a zůstane to stát.
          </h1>
          <p className="zb-lead">
            Renovace domů, rekonstrukce bytů, fasády a zateplení. Jeden parťák
            přes celou stavbu — od bourání příčky po poslední tah štětkou.
          </p>
          <div className="zb-hero-cta">
            <a className="zb-btn" href="tel:+420724331702">Zavolat Petrovi</a>
            <a className="zb-btn zb-btn-ghost" href="#sluzby">Co pro vás uděláme</a>
          </div>
          <dl className="zb-facts">
            <div>
              <dt>Na trhu od</dt>
              <dd>1993</dd>
            </div>
            <div>
              <dt>Řemesla pod jednou střechou</dt>
              <dd>zedník · elektro · voda · malíř</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Koštov 29, Trmice</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="zb-sluzby" id="sluzby">
        <div className="zb-sec-head">
          <p className="zb-eyebrow">Řemeslo</p>
          <h2 className="zb-h2">Čtyři věci, které umíme do detailu</h2>
          <p className="zb-sec-note">
            Nepřebíráme deset zakázek najednou. Bereme tolik, kolik zvládneme
            odvést pořádně — a to je pořád stejné od roku 1993.
          </p>
        </div>
        <ol className="zb-list">
          {sluzby.map((s) => (
            <li className="zb-item" key={s.cislo}>
              <span className="zb-item-num" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="zb-item-body">
                <h3 className="zb-item-title">{s.nazev}</h3>
                <p className="zb-item-desc">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="zb-sluzby-img">
          <img
            src="/section-1.webp"
            alt="Detail zednické práce — omítka a zdivo připravené k dokončení"
          />
        </div>
      </section>

      <section className="zb-onas" id="o-nas">
        <div className="zb-onas-img">
          <img
            src="/section-2.webp"
            alt="Realizace fasády a zateplení rodinného domu od zednictví Petr Bauer"
          />
        </div>
        <div className="zb-onas-text">
          <p className="zb-eyebrow">Kdo to staví</p>
          <h2 className="zb-h2">
            Petr Bauer.
            <br />
            <span className="zb-since">Zdí v Ústeckém kraji od roku 1993.</span>
          </h2>
          <p className="zb-onas-lead">
            Za víc než třicet let v oboru jsem si na stavbě vyzkoušel skoro
            všechno. Vím, kde bytová jádra praskají, proč fasáda po pár letech
            odchází a jak zateplit dům tak, aby to bylo znát na účtu za plyn.
          </p>
          <ul className="zb-values">
            <li>
              <strong>Jeden člověk za celou zakázku.</strong> Nehoníte partu
              subdodavatelů — domlouváte se se mnou.
            </li>
            <li>
              <strong>Termín platí.</strong> Řeknu vám dopředu, kdy bude
              hotovo, a pak to hotovo je.
            </li>
            <li>
              <strong>Uklidíme po sobě.</strong> Předáváme práci, ne staveniště.
            </li>
          </ul>
          <div className="zb-contact">
            <a className="zb-btn" href="tel:+420724331702">
              Zavolat 724&nbsp;331&nbsp;702
            </a>
            <address className="zb-adr">
              Zednictví Petr Bauer · Koštov 29, 400&nbsp;02 Trmice
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
