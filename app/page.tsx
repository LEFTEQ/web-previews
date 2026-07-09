import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Návrh a projekce VZT",
      popis:
        "Spočítáme výměnu vzduchu, tepelné zisky a tlakové ztráty. Dodáme projektovou dokumentaci pro stavební povolení i realizaci — od kanceláří po výrobní haly.",
      detail: "m³/h · Pa · dB(A)",
    },
    {
      cislo: "02",
      nazev: "Montáž potrubí a jednotek",
      popis:
        "Vzduchotechnické potrubí, rekuperační jednotky, klimatizace i požární klapky. Montujeme přesně podle projektu a s výkresovou dokumentací skutečného provedení.",
      detail: "SPIRO · čtyřhranné potrubí · rekuperace",
    },
    {
      cislo: "03",
      nazev: "Zaregulování a měření",
      popis:
        "Nastavíme průtoky na projektované hodnoty, změříme hlučnost a předáme protokol o zaregulování. Bez toho vzduchotechnika jen šumí a spotřebovává.",
      detail: "protokol · aeraulika · akustika",
    },
    {
      cislo: "04",
      nazev: "Servis a revize",
      popis:
        "Pravidelná údržba, výměna filtrů a revize klapek. Máme smluvní servis pro budovy, kde vzduchotechnika nesmí stát — nemocnice, čisté provozy, datová centra.",
      detail: "filtry F7–F9 · smluvní servis 24/7",
    },
  ];

  const reference = [
    {
      objekt: "Administrativní budova, Praha 4",
      parametr: "18 000 m³/h",
      typ: "Komfortní VZT s rekuperací pro 6 podlaží kanceláří.",
    },
    {
      objekt: "Výrobní hala, Kladno",
      parametr: "42 000 m³/h",
      typ: "Odsávání technologie a přívod čerstvého vzduchu.",
    },
    {
      objekt: "Zdravotnické zařízení, Praha 10",
      parametr: "třída ISO 7",
      typ: "Čisté prostory operačních sálů s HEPA filtrací.",
    },
  ];

  return (
    <main className="ts-page">
      <header className="ts-topbar">
        <a className="ts-wordmark" href="#uvod" aria-label="Techniserv — úvod">
          <span className="ts-wordmark-duct" aria-hidden="true" />
          <span className="ts-wordmark-text">
            TECHNI<span className="ts-wordmark-serv">SERV</span>
          </span>
        </a>
        <nav className="ts-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a className="ts-nav-call" href="tel:+420283023111">
            +420 283 023 111
          </a>
        </nav>
      </header>

      <section className="ts-hero" id="uvod">
        <div className="ts-hero-media">
          <img
            src="/hero.webp"
            alt="Vzduchotechnické potrubí a strojovna vzduchotechniky"
            className="ts-hero-img"
          />
        </div>
        <div className="ts-hero-inner">
          <p className="ts-eyebrow">Vzduchotechnika · Praha · od roku 1991</p>
          <h1 className="ts-hero-title">
            Vzduch, který<br />
            <span className="ts-hero-accent">v budově dýchá</span>
          </h1>
          <p className="ts-hero-lead">
            Navrhujeme, montujeme a zaregulujeme vzduchotechniku pro
            kanceláře, haly i čisté provozy. Od výkresu přes potrubí až po
            protokol o měření průtoků — Techniserv, spol. s r.o.
          </p>
          <div className="ts-hero-actions">
            <a className="ts-btn ts-btn-primary" href="tel:+420283023111">
              Zavolat technikovi
            </a>
            <a className="ts-btn ts-btn-ghost" href="#sluzby">
              Co umíme
            </a>
          </div>

          <dl className="ts-flow" aria-label="Klíčové parametry firmy">
            <div className="ts-flow-item">
              <dt>Praxe v oboru</dt>
              <dd>30+ let</dd>
            </div>
            <div className="ts-flow-item">
              <dt>Realizací ročně</dt>
              <dd>okolo 120</dd>
            </div>
            <div className="ts-flow-item">
              <dt>Servisní pohotovost</dt>
              <dd>24/7</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ts-services" id="sluzby">
        <div className="ts-section-head">
          <p className="ts-eyebrow">Cesta vzduchu</p>
          <h2 className="ts-section-title">
            Od návrhu k zaregulovanému systému
          </h2>
          <p className="ts-section-sub">
            Vzduchotechnika není jen potrubí. Provedeme vás celým řetězcem —
            každý krok má svůj protokol a svou zodpovědnou osobu.
          </p>
        </div>

        <div className="ts-services-layout">
          <ol className="ts-services-list">
            {sluzby.map((s) => (
              <li className="ts-service" key={s.cislo}>
                <span className="ts-service-num" aria-hidden="true">
                  {s.cislo}
                </span>
                <div className="ts-service-body">
                  <h3 className="ts-service-name">{s.nazev}</h3>
                  <p className="ts-service-desc">{s.popis}</p>
                  <p className="ts-service-detail">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="ts-services-figure">
            <img
              src="/section-1.webp"
              alt="Montáž vzduchotechnického potrubí ve strojovně"
              className="ts-figure-img"
            />
            <figcaption>
              Strojovna VZT s rekuperační jednotkou — realizace našeho týmu
              v Praze.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ts-trust" id="reference">
        <div className="ts-trust-media">
          <img
            src="/section-2.webp"
            alt="Detail rozvodů vzduchotechniky pod stropem budovy"
            className="ts-trust-img"
          />
        </div>
        <div className="ts-trust-inner">
          <p className="ts-eyebrow">O nás &amp; reference</p>
          <h2 className="ts-section-title">
            Partner, který u vzduchotechniky zůstane
          </h2>
          <p className="ts-trust-lead">
            Sídlíme na Moskevské v Praze 10 a děláme vzduchotechniku od
            devadesátých let. Neděláme jen montáž a nezmizíme — zaregulujeme,
            změříme, předáme dokumentaci a staráme se o servis. Pracujeme pro
            developery, správce budov i průmyslové provozy.
          </p>

          <ul className="ts-refs">
            {reference.map((r) => (
              <li className="ts-ref" key={r.objekt}>
                <span className="ts-ref-param">{r.parametr}</span>
                <span className="ts-ref-object">{r.objekt}</span>
                <span className="ts-ref-type">{r.typ}</span>
              </li>
            ))}
          </ul>

          <p className="ts-trust-note">
            TECHNISERV, spol. s r.o. · Moskevská 86, 101 00 Praha 10 · IČ
            44264020
          </p>
        </div>
      </section>
    </main>
  );
}
