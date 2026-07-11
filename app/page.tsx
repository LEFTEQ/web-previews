import React from "react";

export default function Page() {
  const kategorie = [
    { kod: "B", popis: "Osobní auto do 3 500 kg. Náš nejžádanější kurz — začínáme každý měsíc.", detail: "Osobní automobil" },
    { kod: "BL17", popis: "Řídit smíš už v 17 s doprovodem. Ideální, když nechceš čekat na osmnáctiny.", detail: "Auto už v 17 letech" },
    { kod: "A / A1 / A2 / AM", popis: "Od mopedu po velkou motorku. Vybereme kategorii přesně podle tvého věku a plánu.", detail: "Motocykly" },
    { kod: "C / CE", popis: "Náklaďák i souprava. Pro profesionály za volantem i pro rekvalifikaci.", detail: "Nákladní vozidla" },
    { kod: "D / DE", popis: "Autobus a autobusová souprava. Připravíme tě na přepravu osob.", detail: "Autobusy" },
    { kod: "VR", popis: "Nácvik v simulátoru virtuální reality — natrénuješ krizové situace bez rizika.", detail: "Výuka ve VR" }
  ];

  const kroky = [
    { c: "01", h: "Přihlásíš se online", t: "Vyplníš formulář za pár minut, nebo zavoláš. Ozveme se ještě týž den." },
    { c: "02", h: "Teorie i eTesty nanečisto", t: "Výuka pravidel a předpisů, k tomu neomezené procvičování testů v aplikaci." },
    { c: "03", h: "Jízdy s trpělivým instruktorem", t: "Za volantem v plzeňském provozu. Termíny domlouváme podle tebe, i odpoledne." },
    { c: "04", h: "Zkouška a řidičák", t: "Provedeme tě zkouškou z předpisů i jízdy. Neuspěješ? Připravíme tě na opravný termín." }
  ];

  return (
    <main className="as-main">
      <header className="as-nav">
        <a className="as-mark" href="#uvod" aria-label="Autoškola Sládek – úvod">
          <span className="as-mark-plate">
            <span className="as-mark-eu">CZ</span>
            <span className="as-mark-reg">SLÁDEK</span>
          </span>
          <span className="as-mark-sub">autoškola&nbsp;Plzeň</span>
        </a>
        <nav className="as-navlinks" aria-label="Hlavní">
          <a href="#kategorie">Kategorie</a>
          <a href="#jak">Jak to probíhá</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="as-navcall" href="tel:+420720443344">720&nbsp;44&nbsp;33&nbsp;44</a>
      </header>

      <section className="as-hero" id="uvod">
        <img className="as-hero-img" src="/hero.webp" alt="Instruktor autoškoly Sládek s žákem za volantem v ulicích Plzně" />
        <div className="as-hero-scrim" aria-hidden="true" />
        <div className="as-hero-inner">
          <p className="as-eyebrow">Autoškola v Plzni od roku 1994</p>
          <h1 className="as-hero-h1">
            Naučíme tě řídit<br />
            <span className="as-hero-accent">v klidu a s jistotou.</span>
          </h1>
          <p className="as-hero-lead">
            Řidičák skupiny B, motorky, náklaďáky i autobusy. Trpěliví instruktoři,
            jasné termíny a férová cena — v Plzni a okolí.
          </p>
          <div className="as-hero-cta">
            <a className="as-btn as-btn-primary" href="#kategorie">Vybrat kurz</a>
            <a className="as-btn as-btn-ghost" href="tel:+420720443344">Zavolat</a>
          </div>
        </div>
        <div className="as-hero-strip" aria-hidden="true">
          <span>Nové kurzy každý měsíc</span>
          <span className="as-dot" />
          <span>eTesty nanečisto zdarma</span>
          <span className="as-dot" />
          <span>Rekvalifikace přes úřad práce</span>
          <span className="as-dot" />
          <span>Dárkový poukaz</span>
        </div>
      </section>

      <section className="as-cats" id="kategorie">
        <div className="as-sec-head">
          <p className="as-eyebrow as-eyebrow-dark">Nabídka kurzů</p>
          <h2 className="as-h2">Vyber si svoji kategorii</h2>
          <p className="as-sec-lead">
            Od skútru po autobus. U každé kategorie ti řekneme přesně, co obnáší a kdy začínáme.
          </p>
        </div>
        <ul className="as-catgrid">
          {kategorie.map((k) => (
            <li className="as-cat" key={k.kod}>
              <span className="as-cat-kod">{k.kod}</span>
              <span className="as-cat-tag">{k.detail}</span>
              <p className="as-cat-popis">{k.popis}</p>
            </li>
          ))}
        </ul>
        <div className="as-cat-note">
          <img className="as-cat-img" src="/section-1.webp" alt="Výcvikové vozidlo autoškoly Sládek připravené na jízdu" />
          <div className="as-cat-note-txt">
            <h3 className="as-h3">Nevíš, co si vybrat?</h3>
            <p>
              Zavolej a společně najdeme kurz, který sedne tvému věku, plánu i rozpočtu.
              Poradíme i s rekvalifikací financovanou úřadem práce.
            </p>
            <a className="as-btn as-btn-dark" href="tel:+420720443344">Poradit s výběrem</a>
          </div>
        </div>
      </section>

      <section className="as-trust" id="jak">
        <div className="as-trust-media">
          <img className="as-trust-img" src="/section-2.webp" alt="Žák autoškoly Sládek u zkoušky za volantem" />
        </div>
        <div className="as-trust-body" id="duvera">
          <p className="as-eyebrow as-eyebrow-dark">Jak to u nás probíhá</p>
          <h2 className="as-h2">Od přihlášky k řidičáku ve čtyřech krocích</h2>
          <ol className="as-steps">
            {kroky.map((s) => (
              <li className="as-step" key={s.c}>
                <span className="as-step-c">{s.c}</span>
                <div>
                  <h3 className="as-step-h">{s.h}</h3>
                  <p className="as-step-t">{s.t}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="as-facts">
            <div className="as-fact">
              <strong>Plzeň a kraj</strong>
              <span>Jezdíme v provozu, který u zkoušky opravdu potkáš</span>
            </div>
            <div className="as-fact">
              <strong>Neuspěješ?</strong>
              <span>Doučíme a připravíme na opravný termín</span>
            </div>
            <div className="as-fact">
              <strong>info@autoskolasladek.cz</strong>
              <span>Napiš kdykoliv, odpovíme rychle</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
