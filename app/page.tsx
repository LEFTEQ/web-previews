import React from "react";

export default function Page() {
  const stores = [
    { name: "Obuv V+J", note: "Boty pro celou rodinu — pohodlné modely na každý den i do práce.", floor: "Přízemí" },
    { name: "Krásné vůně", note: "Světové vůně za zlomek ceny. Nová jednotka v prvním patře.", floor: "1. patro" },
    { name: "Fastcut Barbershop", note: "Profesionální pánský střih a úprava vousů bez objednání.", floor: "1. patro" },
    { name: "Optik Fokus", note: "Oční optika, měření zraku a výběr obrub na místě.", floor: "Přízemí" },
    { name: "dm drogerie", note: "Drogerie, kosmetika a péče o tělo pod jednou střechou.", floor: "Přízemí" },
    { name: "Billa", note: "Supermarket s čerstvými potravinami každý den do 23 hodin.", floor: "Přízemí" },
  ];

  const boxes = ["Alzabox", "DHL box", "GLS box", "Zásilkovna"];

  return (
    <main className="gs">
      <header className="gs-nav">
        <a className="gs-mark" href="#" aria-label="Galerie Slovany, úvod">
          <span className="gs-mark-g">Galerie</span>
          <span className="gs-mark-s">Slovany</span>
        </a>
        <nav className="gs-links" aria-label="Hlavní">
          <a href="#obchody">Obchody</a>
          <a href="#navsteva">Návštěva</a>
          <a className="gs-call" href="tel:+420377000000">Zavolat na centrum</a>
        </nav>
      </header>

      <section className="gs-hero" aria-labelledby="hero-h">
        <div className="gs-hero-media">
          <img src="/hero.webp" alt="Obchodní centrum Galerie Slovany v Plzni u kruhového objezdu" />
        </div>
        <div className="gs-hero-copy">
          <p className="gs-eyebrow">Plzeň · Slovany · u radnice</p>
          <h1 id="hero-h">
            Nové boty<span className="gs-amp"> &amp; </span>celý nákup<br />pod jednou střechou.
          </h1>
          <p className="gs-lede">
            Od obuvi V+J přes optiku, drogerii a barbershop až po večerní nákup v Bille.
            Otevřeno každý den do 23 hodin, kousek od kruhového objezdu Koterovská × Francouzská.
          </p>
          <div className="gs-hero-cta">
            <a className="gs-btn" href="#obchody">Prohlédnout obchody</a>
            <a className="gs-btn gs-btn-ghost" href="https://mapy.cz/?q=49.732343,13.400984">Trasa do centra</a>
          </div>
          <ul className="gs-hours">
            <li><span>Po–Pá</span> 6–23 h</li>
            <li><span>So–Ne</span> 8–23 h</li>
          </ul>
        </div>
      </section>

      <section className="gs-section" id="obchody" aria-labelledby="obchody-h">
        <div className="gs-section-head">
          <p className="gs-eyebrow">Vybrané jednotky</p>
          <h2 id="obchody-h">Co u nás najdete</h2>
          <p className="gs-section-lede">
            Přes padesát obchodů a služeb — od každodenní spotřeby po specializovaný sortiment.
            Tady je pár, kvůli kterým se lidé vracejí.
          </p>
        </div>

        <div className="gs-shop-media">
          <img src="/section-1.webp" alt="Interiér obchodní pasáže Galerie Slovany s obchody" />
        </div>

        <ul className="gs-grid">
          {stores.map((s) => (
            <li className="gs-card" key={s.name}>
              <span className="gs-floor">{s.floor}</span>
              <h3>{s.name}</h3>
              <p>{s.note}</p>
            </li>
          ))}
        </ul>

        <div className="gs-boxes">
          <p className="gs-boxes-label">Výdejní boxy u vchodu:</p>
          <ul>
            {boxes.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gs-visit" id="navsteva" aria-labelledby="visit-h">
        <div className="gs-visit-media">
          <img src="/section-2.webp" alt="Vstup a okolí Galerie Slovany s parkováním" />
        </div>
        <div className="gs-visit-copy">
          <p className="gs-eyebrow">Jak k nám</p>
          <h2 id="visit-h">Zaparkujete a jste uvnitř</h2>
          <dl className="gs-facts">
            <div>
              <dt>Adresa</dt>
              <dd>Nám. Generála Píky 2703/27, 326 00 Plzeň-Slovany</dd>
            </div>
            <div>
              <dt>Parkování</dt>
              <dd>Podzemní garáže i stání v okolí centra</dd>
            </div>
            <div>
              <dt>MHD</dt>
              <dd>Tramvaj 2, autobusy 29 a 30 — zastávka u centra</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 6–23 h · So–Ne 8–23 h</dd>
            </div>
          </dl>
          <div className="gs-visit-cta">
            <a className="gs-btn" href="tel:+420377000000">Zavolat na recepci</a>
            <a className="gs-btn gs-btn-ghost" href="mailto:info@galerieslovany.cz">Napsat e-mail</a>
          </div>
        </div>
      </section>
    </main>
  );
}
