import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      cislo: "01",
      nazev: "Do školy",
      popis:
        "Aktovky Herlitz i batohy OXY, sešity Oxford, kufříky do výtvarky, penály a všechno ostatní ze seznamu. Přijďte v srpnu — máme nachystáno.",
    },
    {
      cislo: "02",
      nazev: "Psací potřeby",
      popis:
        "Plnicí pera a bombičky ve spoustě barev, náplně Pilot, propisky a fixy. Poradíme, co dobře píše a vydrží.",
    },
    {
      cislo: "03",
      nazev: "Kancelář",
      popis:
        "Papír, obaly, lepidla a pásky, tiskopisy, pořadače i drobnosti k počítači. Zásobíme malou firmu i domácí stůl.",
    },
    {
      cislo: "04",
      nazev: "Kalendáře a diáře",
      popis:
        "Nástěnné, stolní i kapesní. Každý podzim široký výběr na nový rok — přijďte si vybrat včas, než se rozeberou.",
    },
    {
      cislo: "05",
      nazev: "Papírnické zboží",
      popis:
        "Poznámkové lístky, bloky, sešity, výtvarné potřeby a papíry. I samolepicí bločky s mandalou k vybarvení.",
    },
    {
      cislo: "06",
      nazev: "Výroba razítek",
      popis:
        "Razítka na míru pro firmy i děti — datumovky, adresní i dětská razítka AladinE. Vyrobíme přesně podle vás.",
    },
  ];

  return (
    <main className="resp">
      <header className="resp-nav" aria-label="Hlavní navigace">
        <a className="resp-mark" href="#">
          <span className="resp-mark-word">RESPE</span>
          <span className="resp-mark-tag">papírnictví · Brno</span>
        </a>
        <nav className="resp-links" aria-label="Sekce">
          <a href="#sortiment">Sortiment</a>
          <a href="#kram">Krám</a>
          <a className="resp-nav-cta" href="tel:+420542211111">Zavolat</a>
        </nav>
      </header>

      <section className="resp-hero" aria-labelledby="hero-title">
        <div className="resp-hero-rule" aria-hidden="true">
          <span>Pekařská 28</span>
          <span>Po–Pá 8.30–17.00</span>
          <span>od roku papíru</span>
        </div>

        <p className="resp-eyebrow">Papírnictví na Pekařské</p>

        <h1 id="hero-title" className="resp-h1">
          <span className="resp-h1-line">Tužka,</span>
          <span className="resp-h1-line resp-ink">pero,</span>
          <span className="resp-h1-line">sešit —</span>
          <span className="resp-h1-line resp-thin">a člověk, který poradí.</span>
        </h1>

        <div className="resp-hero-foot">
          <p className="resp-lede">
            Kamenný krám v centru Brna, kde si aktovku osaháte, pero
            vyzkoušíte a razítko dostanete na míru. Bez čekání na balík.
          </p>
          <a className="resp-hero-cta" href="#sortiment">
            Co u nás najdete
            <span aria-hidden="true" className="resp-arrow">→</span>
          </a>
        </div>

        <div className="resp-ruled-paper" aria-hidden="true">
          <span className="resp-margin" />
        </div>
      </section>

      <section id="sortiment" className="resp-section" aria-labelledby="sortiment-title">
        <div className="resp-section-head">
          <p className="resp-eyebrow">Regály zleva doprava</p>
          <h2 id="sortiment-title" className="resp-h2">
            Co si u nás naskládáte do tašky
          </h2>
        </div>

        <ol className="resp-grid">
          {sortiment.map((polozka) => (
            <li key={polozka.cislo} className="resp-card">
              <span className="resp-card-num" aria-hidden="true">
                {polozka.cislo}
              </span>
              <h3 className="resp-card-title">{polozka.nazev}</h3>
              <p className="resp-card-text">{polozka.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="resp-figure">
          <img
            src="/section-1.webp"
            alt="Regály papírnictví RESPE plné sešitů, per a školních potřeb"
            className="resp-figure-img"
            loading="lazy"
          />
          <figcaption className="resp-figcap">
            Všechno vidíte a osaháte na místě — na Pekařské 28.
          </figcaption>
        </figure>
      </section>

      <section id="kram" className="resp-store" aria-labelledby="kram-title">
        <div className="resp-store-grid">
          <div className="resp-store-text">
            <p className="resp-eyebrow resp-eyebrow-light">O krámu</p>
            <h2 id="kram-title" className="resp-h2 resp-h2-light">
              Malý krám, kde vám poradí naživo
            </h2>
            <p className="resp-store-lede">
              RESPE stojí na Pekařské v Brně už léta. Nejsme e‑shop se skladem
              kdesi za městem — jsme obchod, kam zajdete, řeknete si o radu
              a odejdete s tím, co opravdu potřebujete.
            </p>

            <dl className="resp-facts">
              <div className="resp-fact">
                <dt>Kde</dt>
                <dd>Pekařská 28, 602 00 Brno</dd>
              </div>
              <div className="resp-fact">
                <dt>Otevřeno</dt>
                <dd>Po–Pá 8.30–17.00</dd>
              </div>
              <div className="resp-fact">
                <dt>Před školou</dt>
                <dd>V srpnu delší otevírací doba</dd>
              </div>
              <div className="resp-fact">
                <dt>Razítka</dt>
                <dd>Vyrobíme na míru přímo tady</dd>
              </div>
            </dl>

            <div className="resp-store-actions">
              <a className="resp-btn" href="tel:+420542211111">Zavolat do krámu</a>
              <a
                className="resp-btn resp-btn-ghost"
                href="https://mapy.cz/?q=Pekařská+28+Brno"
              >
                Navigovat na Pekařskou
              </a>
            </div>
          </div>

          <figure className="resp-store-figure">
            <img
              src="/section-2.webp"
              alt="Výloha a interiér papírnictví RESPE na Pekařské v Brně"
              className="resp-store-img"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
