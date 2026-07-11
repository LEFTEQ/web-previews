import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Diagnostika do 24 hodin",
      popis:
        "Přineste počítač nebo notebook k nám do Špalíčku. Většinu závad najdeme a opravu předáme do jednoho dne \u2014 čištění od virů, výměna disku, oživení po pádu systému.",
      stitek: "Nejčastější",
    },
    {
      cislo: "02",
      nazev: "Technik k vám domů",
      popis:
        "Nefunguje připojení nebo se počítač nezapne? Domluvíme se, přijedeme po Ostravě a spravíme to na místě. Když je potřeba, techniku odvezeme na servis a přivezeme zpátky.",
      stitek: "Ostrava a okolí",
    },
    {
      cislo: "03",
      nazev: "Sestava na míru a upgrade",
      popis:
        "Navrhneme počítač podle toho, k čemu ho potřebujete \u2014 od levného na internet po herní. Složíme, spustíme, otestujeme. Zrychlíme i stávající stroj výměnou disku nebo paměti.",
      stitek: "Na míru",
    },
    {
      cislo: "04",
      nazev: "Kopycentrum a razítka",
      popis:
        "Tiskneme a kopírujeme A4\u2013A3 barevně i černobíle, laminujeme, vážeme do kroužku, skenujeme. Razítka COLOP a TRODAT vyrobíme na počkání \u2014 zhruba za 15 minut, s otiskem 1200 DPI.",
      stitek: "Na počkání",
    },
  ];

  const duvera = [
    { cislo: "13+", popis: "let opravujeme počítače ve Špalíčku" },
    { cislo: "24 h", popis: "většinu oprav předáváme do druhého dne" },
    { cislo: "3 roky", popis: "záruka na repasovanou techniku z programu Refurbished" },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="brand" href="#" aria-label="TOP PC4EVER, servis počítačů Ostrava">
          <span className="brand-top">TOP</span>
          <span className="brand-pc">PC</span>
          <span className="brand-4">4</span>
          <span className="brand-ever">EVER</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Servis</a>
          <a href="#kopycentrum">Kopycentrum</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="nav-cta" href="tel:">Zavolat do servisu</a>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Servis počítačů &middot; OC Špalíček, Ostrava</p>
            <h1 className="hero-title">
              Počítač zlobí?
              <span className="hero-title-em">Do 24 hodin ho oživíme.</span>
            </h1>
            <p className="hero-lead">
              Přijďte k pultu ve Špalíčku, nebo si objednejte technika až domů. Vyčistíme
              počítač od virů, vyměníme disk, zrychlíme notebook \u2014 rychle, spolehlivě a bez
              řečí okolo.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#sluzby">Co opravíme</a>
              <a className="btn btn-ghost" href="#onas">Kde nás najdete</a>
            </div>
            <dl className="hero-hours">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po\u2013Pá 10:00\u201317:00</dd>
              </div>
              <div>
                <dt>Napište nám</dt>
                <dd>pc.spalicek@gmail.com</dd>
              </div>
            </dl>
          </div>
          <figure className="hero-media">
            <img
              src="/hero.webp"
              alt="Servisní pracoviště TOP PC4EVER s rozebraným počítačem"
              className="hero-img"
              width={880}
              height={1000}
            />
            <figcaption className="hero-tag">
              <span className="blink" aria-hidden="true" />
              Právě na dílně
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Ceník na míru zakázce</p>
          <h2 id="sluzby-h" className="sec-title">
            Co pro vás na dílně uděláme
          </h2>
        </div>
        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <div className="card-top">
                <span className="card-num">{s.cislo}</span>
                <span className="card-stitek">{s.stitek}</span>
              </div>
              <h3 className="card-h">{s.nazev}</h3>
              <p className="card-p">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="onas" id="onas" aria-labelledby="onas-h">
        <div className="onas-grid">
          <div className="onas-copy">
            <p className="eyebrow">O nás</p>
            <h2 id="onas-h" className="sec-title">
              Třináct let u jednoho pultu ve Špalíčku
            </h2>
            <p className="onas-lead">
              Jsme malý servis v obchodním centru Špalíček v centru Ostravy. Prodáváme a
              opravujeme počítače, notebooky i příslušenství, naplníme cartridge tiskáren HP a
              Canon a jsme partnerem programu Refurbished \u2014 repasovaná technika u nás dostane
              záruku až tři roky.
            </p>
            <dl className="stats">
              {duvera.map((d) => (
                <div className="stat" key={d.cislo}>
                  <dt className="stat-num">{d.cislo}</dt>
                  <dd className="stat-p">{d.popis}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="onas-media" id="kopycentrum">
            <img
              src="/section-1.webp"
              alt="Nové tiskárny pro tisk a kopírování formátu až A3"
              className="onas-img"
              width={720}
              height={520}
            />
            <img
              src="/section-2.webp"
              alt="Výroba razítek COLOP a TRODAT na počkání"
              className="onas-img onas-img--2"
              width={720}
              height={520}
            />
            <figcaption className="onas-cap">
              Kopycentrum &middot; tisk a kopie A4\u2013A3, laminování, vazba, razítka na počkání
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
