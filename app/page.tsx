import React from "react";

const realizace = [
  {
    n: "01",
    misto: "Poliklinika Praha-Vysočany",
    prvek: "Zábradlí hlavního schodiště",
    popis:
      "Celoskleněné zábradlí kotvené do podlahové konstrukce, kalené sklo s broušenou hranou. Průhledná linie, která schodiště opticky nadlehčí.",
  },
  {
    n: "02",
    misto: "Petřínská rozhledna",
    prvek: "Rekonstrukce zasklení",
    popis:
      "Výměna původního zasklení v netypických tvarech a rozměrech. Práce ve výšce, přesné zaměření, žádná dvě skla stejná.",
  },
  {
    n: "03",
    misto: "Fara Smíchov, kostel sv. Václava",
    prvek: "Markýzy a skleněná zábradlí",
    popis:
      "Prosklená přístavba — markýzy z pochozího skla i subtilní zábradlí. Sklo, které nekonkuruje historické fasádě, jen ji doplňuje.",
  },
  {
    n: "04",
    misto: "ZOO Plzeň",
    prvek: "Terárium pro jedovaté hady",
    popis:
      "Neprůstřelné a bezpečnostní sklo tam, kde na pevnosti spoje opravdu záleží. Kuriozita, na kterou v dílně vzpomínáme dodnes.",
  },
];

const sluzby = [
  {
    nadpis: "Skleněné dveře a stěny",
    detail:
      "Posuvné i kyvné dveře, celoskleněné příčky, designové kování. Menší prostor se prosklením opticky zvětší a prosvětlí.",
    polozky: ["Bezpečnostní sklo kalené a lepené", "Designové kování", "Zaměření na místě"],
  },
  {
    nadpis: "Sprchové kouty a zrcadla",
    detail:
      "Sprchové kouty na míru koupelny, celoplošná zrcadla i zrcadlové stěny do sálů a posiloven — vždy s bezpečnostní úpravou.",
    polozky: ["Kouty na míru", "Zrcadlové stěny", "Bezpečnostní úprava"],
  },
  {
    nadpis: "Schody, zábradlí, pochozí sklo",
    detail:
      "Skleněná schodiště a galerie, zábradlí kotvené do podlahy, na sloupky nebo nerezové trny. Zajistíme i nosnou konstrukci a vyjádření statika.",
    polozky: ["Pochozí sklo", "Nerezové trny a terče", "Statické posouzení"],
  },
  {
    nadpis: "Výlohy a bezpečnostní sklo",
    detail:
      "Expresní výroba dvojskel i zasklívací služby pro obchody. Odstraníme rýhy a vyryté nápisy, zasklíme i špatně přístupná místa savkovým rámem.",
    polozky: ["Expresní dvojskla", "Odstranění rýh", "Nadrozměrná skla"],
  },
  {
    nadpis: "Markýzy, přístřešky, světlíky",
    detail:
      "Skleněná zádveří, prosvětlení teras pochozím sklem, střešní světlíky netypických tvarů a strukturální zasklení fasád.",
    polozky: ["Střešní světlíky", "Prosklené terasy", "Strukturální fasády"],
  },
  {
    nadpis: "Obklady, nábytek, akvária",
    detail:
      "Obklady smaltovaným barevným sklem do kuchyní a koupelen, lepený skleněný nábytek, vitríny a zakázková akvária i terária.",
    polozky: ["Barevné smaltované sklo", "Lepený nábytek", "Akvária na míru"],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="ACERA SKLO, sklenářství Praha 6">
          <span className="wordmark__a">ACERA</span>
          <span className="wordmark__s">SKLO</span>
          <span className="wordmark__tag">sklenářství · Praha&nbsp;6</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a href="#onas">O nás</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__img-wrap">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Realizace skleněného zábradlí a prosklené konstrukce od ACERA SKLO"
          />
          <div className="hero__glaze" aria-hidden="true" />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Sklenářství od roku 1994 · Makovského 1179, Praha 6-Řepy</p>
          <h1 className="hero__title">
            Zasklít umíme
            <br />
            <span className="hero__accent">prakticky cokoliv.</span>
          </h1>
          <p className="hero__lead">
            Od sprchového koutu v panelákové koupelně po zábradlí Petřínské rozhledny.
            Ploché sklo, skleněné konstrukce i designové speciality — s vlastní dílnou
            a partou sklenářů, které baví netradiční zakázky.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#sluzby">Co pro vás uděláme</a>
            <a className="btn btn--ghost" href="#reference">Prohlédnout realizace</a>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Čím se zabýváme">
        <span>Kalené sklo</span>
        <span aria-hidden="true">·</span>
        <span>Lepené sklo Connex</span>
        <span aria-hidden="true">·</span>
        <span>Neprůstřelné sklo</span>
        <span aria-hidden="true">·</span>
        <span>Protipožární sklo</span>
        <span aria-hidden="true">·</span>
        <span>Ohýbané sklo</span>
        <span aria-hidden="true">·</span>
        <span>Pochozí sklo</span>
      </section>

      <section className="services" id="sluzby">
        <div className="section-head">
          <p className="eyebrow">Nabídka</p>
          <h2 className="section-title">Sklenářský servis všeho druhu</h2>
          <p className="section-lead">
            Komplexní dodávky plochého skla a skleněných prvků včetně ocelových,
            nerezových i dřevěných konstrukcí. Vyberte, o čem si chcete povídat.
          </p>
        </div>
        <div className="cards">
          {sluzby.map((s) => (
            <article className="card" key={s.nadpis}>
              <h3 className="card__title">{s.nadpis}</h3>
              <p className="card__detail">{s.detail}</p>
              <ul className="card__list">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <figure className="figband">
          <img
            src="/section-1.webp"
            alt="Detail skleněné konstrukce s designovým kováním z realizace ACERA SKLO"
            className="figband__img"
          />
          <figcaption className="figband__cap">
            Každou zakázku zaměřujeme na místě — sklo dorazí přesně na milimetr.
          </figcaption>
        </figure>
      </section>

      <section className="trust" id="reference">
        <div className="trust__grid">
          <div className="trust__intro" id="onas">
            <p className="eyebrow">Reference</p>
            <h2 className="section-title">
              Sklo, které stojí za zmínku
            </h2>
            <p className="section-lead">
              Do zajímavých a netradičních projektů se pouštíme rádi — právě tam se
              dá uplatnit kreativita i dlouholeté zkušenosti z oboru. Pár realizací,
              na které jsme hrdí.
            </p>
            <img
              src="/section-2.webp"
              alt="Prosklená přístavba se skleněnou markýzou a zábradlím od ACERA SKLO"
              className="trust__img"
            />
          </div>
          <ol className="reflist">
            {realizace.map((r) => (
              <li className="refitem" key={r.n}>
                <span className="refitem__n" aria-hidden="true">{r.n}</span>
                <div className="refitem__body">
                  <p className="refitem__misto">{r.misto}</p>
                  <h3 className="refitem__prvek">{r.prvek}</h3>
                  <p className="refitem__popis">{r.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
