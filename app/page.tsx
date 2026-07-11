import React from "react";

export default function Page() {
  const sortiment = [
    {
      cislo: "01",
      nazev: "Zámky",
      popis:
        "Zadlabací, dozické, přídavné i visací. Od bytových dveří po vrata skladu. Skladem značky FAB, TOKOZ, GUARD.",
      detail: "přes 400 typů skladem",
    },
    {
      cislo: "02",
      nazev: "Vložky",
      popis:
        "Bezpečnostní vložky Richter Czech Euro Secure v novém balení — s rozlišovači klíčů rovnou v krabičce. Stavební i systémové.",
      detail: "proti odvrtání a vytržení",
    },
    {
      cislo: "03",
      nazev: "Kování",
      popis:
        "Klika–klika, klika–koule, rozety i štíty. Nerez, mosaz, hliník. Interiérové i bezpečnostní kování do vchodů.",
      detail: "nerez · mosaz · hliník",
    },
    {
      cislo: "04",
      nazev: "Nářadí",
      popis:
        "Extol, Fortum a Ceys — ruční i elektrické nářadí, lepidla a tmely. Pro dílnu, stavbu i domácí kutily.",
      detail: "novinky Extol a Fortum",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="VELA — velkoobchod železářským zbožím">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="wordmark__key">⚷</span>
          </span>
          <span className="wordmark__text">
            VELA
            <span className="wordmark__sub">velkoobchod železářstvím</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#firma">O firmě</a>
          <a className="topnav__cta" href="tel:+420286853052">286 853 052</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Regály plné zámků, vložek a kování ve velkoskladu VELA v pražských Satalicích"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Praha 9 — Satalice · od roku 1991</p>
          <h1 className="hero__title">
            Klíč, vložka,<br />
            <span className="hero__title--accent">kování.</span> Skladem.
          </h1>
          <p className="hero__lead">
            Rodinný velkoobchod železářským zbožím. Zásobujeme řemeslníky,
            maloobchod a stavební firmy tím, co doopravdy potřebují — a máme
            to na regálech, ne v katalogu na objednávku.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#sortiment">
              Prohlédnout sortiment
            </a>
            <a className="btn btn--ghost" href="tel:+420286853052">
              Zavolat na sklad
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8–17 · So 8–12</dd>
            </div>
            <div>
              <dt>Zákazníci</dt>
              <dd>řemeslo · stavby · obchod</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sortiment" id="sortiment">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Čtyři police, ze kterých žijeme</p>
          <h2 className="section-title">Sortiment</h2>
          <p className="section-note">
            Nejsme e-shop s vším na světě. Držíme to, co se ptá řemeslník
            u pultu každý den — a umíme poradit, který kus se hodí.
          </p>
        </div>
        <ul className="cards">
          {sortiment.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
              <span className="card__tag">{s.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="firma" id="firma">
        <div className="firma__media">
          <img
            src="/section-1.webp"
            alt="Detail bezpečnostní vložky a svazku klíčů na pultě prodejny"
            className="firma__img"
          />
          <img
            src="/section-2.webp"
            alt="Výdejní pult velkoskladu VELA se vzorky kování"
            className="firma__img firma__img--offset"
          />
        </div>
        <div className="firma__text">
          <p className="eyebrow eyebrow--dark">O firmě</p>
          <h2 className="section-title">
            Třicet let za pultem, ne za displejem.
          </h2>
          <p className="firma__lead">
            VELA vznikla v roce 1991 jako rodinná česká firma. Za tu dobu
            jsme se stali stálým dodavatelem maloobchodníků, řemeslníků
            a stavebních firem po celé Praze — a jméno v oboru železářství
            si držíme dodnes.
          </p>
          <ul className="trust">
            <li>
              <span className="trust__label">Adresa</span>
              <span className="trust__value">
                Budovatelská 426, 190 15 Praha 9 – Satalice
              </span>
            </li>
            <li>
              <span className="trust__label">Telefon</span>
              <span className="trust__value">
                286 853 052 · 602 649 310
              </span>
            </li>
            <li>
              <span className="trust__label">E-mail</span>
              <span className="trust__value">info@velapraha.cz</span>
            </li>
            <li>
              <span className="trust__label">Partneři</span>
              <span className="trust__value">
                Richter Czech · Extol · Fortum · Ceys
              </span>
            </li>
          </ul>
          <p className="firma__foot">
            Přijďte se podívat osobně — vzorky kování i vložky máme
            vyskládané na pultě, ať víte, co kupujete.
          </p>
        </div>
      </section>
    </main>
  );
}
