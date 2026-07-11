import React from "react";

export default function Page() {
  const lekce = [
    {
      cislo: "01",
      nazev: "Síla",
      cena: "260 Kč",
      delka: "60 min",
      popis:
        "Síla je matka všech kvalit. Zamakáš na problémových partiích, zesílíš a zároveň shodíš přebytečný tuk. Nadupaná hodina, která tě musí bavit.",
    },
    {
      cislo: "02",
      nazev: "Kondice",
      cena: "210 Kč",
      delka: "35 min",
      popis:
        "Pětatřicet minut aerobní jízdy od začátku do konce. Zlepšíš kardiovaskulární zdraví, zapracuješ na fyzičce a hlavně se budeš cítit dobře.",
    },
    {
      cislo: "03",
      nazev: "Osobní trénink",
      cena: "dle domluvy",
      delka: "individuálně",
      popis:
        "Dlouhodobá spolupráce s trenérem, který stojí po tvém boku a vede tě za lepším zdravím a výkonem. Vyber si svého mentora z našeho týmu.",
    },
  ];

  return (
    <main className="ot">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Overtime gym, domů">
          <span className="wm-over">OVER</span>
          <span className="wm-time">TIME</span>
          <span className="wm-tick" aria-hidden="true">·</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní menu">
          <a href="#lekce">Lekce</a>
          <a href="#o-nas">O nás</a>
          <a href="#kde">Kde nás najdeš</a>
        </nav>
        <a className="nav-cta" href="#lekce">Stát se členem</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Tréninkové centrum Overtime gym v Hradci Králové — činky a prostor pro silový trénink"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-body">
          <p className="eyebrow">Silově kondiční tréninkové centrum · Hradec Králové</p>
          <h1 className="hero-title">
            Přetáhni<br />
            <span className="accent">svůj limit.</span>
          </h1>
          <p className="hero-lead">
            Posilovna, která se stará o zdraví i výkon. Lidský přístup, přátelské
            prostředí a tým kvalifikovaných trenérů, co tě dotáhnou dál, než sis
            myslel.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#lekce">Rezervovat lekci</a>
            <a className="btn btn-ghost" href="#kde">Kde nás najdeš</a>
          </div>
          <dl className="hero-hours">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Ne · 6–22</dd>
            </div>
            <div>
              <dt>Sídlíme v</dt>
              <dd>tenisovém centru, Malšovice</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="lekce" id="lekce">
        <div className="sec-head">
          <p className="eyebrow">Rozvrh · skupinové lekce</p>
          <h2 className="sec-title">Vyber si hodinu a přijď</h2>
          <p className="sec-lead">
            Skupinové lekce jsou populární hlavně díky skvělé partě kolem tebe. V
            rezervačním systému si po přihlášení jednoduše zamluvíš místo dopředu.
          </p>
        </div>

        <ol className="cards">
          {lekce.map((l) => (
            <li className="card" key={l.cislo}>
              <div className="card-top">
                <span className="card-num">{l.cislo}</span>
                <span className="card-meta">{l.delka}</span>
              </div>
              <h3 className="card-name">{l.nazev}</h3>
              <p className="card-desc">{l.popis}</p>
              <p className="card-price">{l.cena}</p>
            </li>
          ))}
        </ol>

        <div className="lekce-img-wrap">
          <img
            src="/section-1.webp"
            alt="Skupinová lekce v Overtime gym — cvičení ve skupině pod vedením trenéra"
            className="lekce-img"
          />
          <p className="img-caption">
            Cvičení ve skupině · lekce síly, kondice, jen pro ženy i s dětmi
          </p>
        </div>
      </section>

      <section className="o-nas" id="o-nas">
        <div className="about-grid">
          <div className="about-text">
            <p className="eyebrow">O nás · Overtime gym s.r.o.</p>
            <h2 className="sec-title">
              Nejsme jen fitko.
            </h2>
            <p className="about-p">
              Staráme se o lidské zdraví a jeho výkonnost. Zakládáme si na
              přátelském prostředí a týmu kvalifikovaných trenérů. Naše zkušenosti
              sdílíme dál — pořádáme edukační stáže pro trenéry i celodenní
              semináře pro širší veřejnost.
            </p>
            <p className="about-p">
              V přízemí areálu navíc najdeš Massage room pod záštitou Overtime
              gymu. Šikovní maséři se postarají o zasloužený relax — ideální volba
              po náročném dni nebo tréninku.
            </p>

            <ul className="facts" aria-label="Kde nás najdeš" id="kde">
              <li>
                <span className="fact-k">Adresa</span>
                <span className="fact-v">Hradečnice 369/2, 500 09 Hradec Králové</span>
              </li>
              <li>
                <span className="fact-k">Telefon</span>
                <span className="fact-v">
                  <a href="tel:+420776311407">776 311 407</a> ·{" "}
                  <a href="tel:+420778021195">778 021 195</a>
                </span>
              </li>
              <li>
                <span className="fact-k">E-mail</span>
                <span className="fact-v">
                  <a href="mailto:gymovertime@gmail.com">gymovertime@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>

          <figure className="about-fig">
            <img
              src="/section-2.webp"
              alt="Massage room v Overtime gym — prostor pro masáž a relax"
              className="about-img"
            />
            <figcaption>Massage room · take a rest</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
