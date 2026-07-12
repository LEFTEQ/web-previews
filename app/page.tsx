import React from "react";

const sluzby = [
  {
    krok: "01",
    faze: "Projekce",
    text: "Vaši představu převedeme do hydraulického schématu, výkresu strojovny a rozpočtu. Počítáme spotřebu vody, energie i chemie, aby vás provoz nepřekvapil.",
    detail: "od skici po prováděcí dokumentaci",
  },
  {
    krok: "02",
    faze: "Realizace",
    text: "Nerezová vana, PVC fólie, filtrace, tepelná čerpadla, atrakce i wellness. Stavíme po celé ČR ve spolupráci s ateliéry a specializovanými firmami.",
    detail: "privátní i veřejné bazény",
  },
  {
    krok: "03",
    faze: "Servis",
    text: "Hlídáme úpravnu vody, dávkování a bezchlorové technologie. Odečteme hodnoty, vyměníme filtrační náplně a bazén udržíme v kondici i po letech.",
    detail: "záruční i pozáruční péče",
  },
];

const reference = [
  {
    misto: "Praha",
    typ: "privátní bazén s wellness",
    text: "Úpravu vody zajišťuje bezchlorová technologie na bázi peroxidu vodíku a stříbra. Realizováno podle návrhu interiérového architekta.",
  },
  {
    misto: "Praha 17",
    typ: "sportovní centrum a wellness",
    text: "Bazénová technologie pro čtyři okruhy. Dezinfekci vyrábí elektrolýza slaného roztoku přímo na místě dávkování.",
  },
  {
    misto: "Mariánské Lázně",
    typ: "lázeňský hotel",
    text: "Přístavba bazénu a wellness: vodní i vzduchové atrakce, whirlpool pro 11 osob, parní kabina a finská sauna.",
  },
  {
    misto: "Františkovy Lázně",
    typ: "hotelový bazén",
    text: "Rekonstrukce bazénu včetně úpravny vody. Kompletně od návrhu přes realizaci až po následný servis, v technologii slané vody.",
  },
];

export default function Page() {
  return (
    <main className="pa">
      <header className="pa-top">
        <a className="pa-mark" href="#uvod" aria-label="POOLAKCENT — úvod">
          <span className="pa-mark-pool">POOL</span>
          <span className="pa-mark-akcent">AKCENT</span>
        </a>
        <nav className="pa-nav" aria-label="Hlavní navigace">
          <a href="#co-delame">Co děláme</a>
          <a href="#reference">Reference</a>
          <a className="pa-nav-tel" href="tel:+420602300033">+420 602 300 033</a>
        </nav>
      </header>

      <section className="pa-hero" id="uvod">
        <div className="pa-hero-media">
          <img
            src="/hero.webp"
            alt="Osvětlený vnitřní bazén s tyrkysovou hladinou a wellness zónou"
            className="pa-hero-img"
          />
          <div className="pa-hero-scrim" aria-hidden="true" />
          <div className="pa-waterline" aria-hidden="true" />
        </div>

        <div className="pa-hero-inner">
          <p className="pa-eyebrow">Bazénový program na míru · Praha-Hloubětín</p>
          <h1 className="pa-h1">
            Držíme<br />
            <span className="pa-h1-line">hladinu</span><br />
            v rovnováze.
          </h1>
          <p className="pa-lead">
            Projektujeme, stavíme a servisujeme bazény a jejich technologie —
            od privátních vil po lázeňské a sportovní provozy. Vodu čistíme
            šetrně, s ohledem na provozní náklady i české a evropské normy.
          </p>
          <div className="pa-hero-cta">
            <a className="pa-btn" href="#co-delame">Jak stavíme bazén</a>
            <a className="pa-btn pa-btn-ghost" href="#reference">Naše realizace</a>
          </div>

          <dl className="pa-chem" aria-label="Parametry vyvážené bazénové vody">
            <div><dt>pH</dt><dd>7,2</dd></div>
            <div><dt>volný chlor</dt><dd>0,3 mg/l</dd></div>
            <div><dt>teplota</dt><dd>28 °C</dd></div>
            <div><dt>na trhu od</dt><dd>2017</dd></div>
          </dl>
        </div>
      </section>

      <section className="pa-services" id="co-delame">
        <div className="pa-sec-head">
          <p className="pa-eyebrow pa-eyebrow-dark">Co děláme</p>
          <h2 className="pa-h2">Tři fáze jedné hladiny</h2>
          <p className="pa-sec-sub">
            Bazén u nás nekončí předáním klíčů. Provedeme vás od první skici
            přes stavbu až k dlouhodobému servisu úpravny vody.
          </p>
        </div>

        <ol className="pa-steps">
          {sluzby.map((s) => (
            <li className="pa-step" key={s.krok}>
              <span className="pa-step-num" aria-hidden="true">{s.krok}</span>
              <h3 className="pa-step-title">{s.faze}</h3>
              <p className="pa-step-detail">{s.detail}</p>
              <p className="pa-step-text">{s.text}</p>
            </li>
          ))}
        </ol>

        <figure className="pa-figure">
          <img
            src="/section-1.webp"
            alt="Detail bazénové technologie a strojovny s filtrací a rozvody"
            className="pa-figure-img"
          />
          <figcaption>
            Strojovna je srdcem bazénu. Navrhujeme ji tak, aby spotřebovala
            co nejméně energie, vody i chemie.
          </figcaption>
        </figure>
      </section>

      <section className="pa-ref" id="reference">
        <div className="pa-ref-grid">
          <div className="pa-ref-intro">
            <p className="pa-eyebrow">Reference &amp; o nás</p>
            <h2 className="pa-h2 pa-h2-light">
              Nerez, fólie, slaná i bezchlorová voda.
            </h2>
            <p className="pa-ref-text">
              POOLAKCENT jsme založili v roce 2017, abychom navázali na letitou
              práci firmy Sportakcent v oboru bazénů. Klademe důraz na technickou
              i architektonickou úroveň a stavíme pro soukromé i veřejné investory
              po celé republice.
            </p>
            <img
              src="/section-2.webp"
              alt="Realizovaný wellness bazén s vodními atrakcemi"
              className="pa-ref-img"
            />
          </div>

          <ul className="pa-ref-list">
            {reference.map((r) => (
              <li className="pa-ref-item" key={r.misto + r.typ}>
                <div className="pa-ref-head">
                  <span className="pa-ref-misto">{r.misto}</span>
                  <span className="pa-ref-typ">{r.typ}</span>
                </div>
                <p className="pa-ref-desc">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
