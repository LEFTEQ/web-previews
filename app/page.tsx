import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Klimatizace",
      znacky: "Haier · Toshiba · Samsung",
      popis:
        "Vybereme jednotku na míru vašemu bytu i paneláku. Návrh instalace a kalkulaci dostanete zdarma, ještě než cokoliv podepíšete.",
    },
    {
      cislo: "02",
      nazev: "Tepelná čerpadla",
      znacky: "Hokkaido · Toshiba · Mitsubishi",
      popis:
        "Dnes jeden z nejlevnějších způsobů vytápění. Spočítáme návratnost i to, kolik ušetříte proti plynu nebo elektřině.",
    },
    {
      cislo: "03",
      nazev: "Rekuperace",
      znacky: "Řízené větrání",
      popis:
        "Čerstvý vzduch bez otevírání oken a bez tepelných ztrát. V součtu ušetří až 30 % nákladů na vytápění.",
    },
    {
      cislo: "04",
      nazev: "Servis a opravy",
      znacky: "Záruční i pozáruční",
      popis:
        "Pravidelné čištění, kontrola a údržba. Když se něco pokazí, přijedeme — a když nepokazí, přijedeme taky, aby nepokazilo.",
    },
  ];

  const fakta = [
    { k: "2014", v: "Na trhu od tohoto roku, po celé ČR." },
    { k: "TOP 100", v: "Naše montáž 2023 mezi nejlepšími projekty Haier na světě." },
    { k: "A+++", v: "Instalujeme jen tichá a úsporná zařízení nejvyšší třídy." },
  ];

  return (
    <main className="ct">
      <header className="ct-nav" aria-label="Hlavní">
        <a className="ct-mark" href="#uvod" aria-label="Cooltop, domů">
          <span className="ct-mark-cool">cool</span>
          <span className="ct-mark-top">top</span>
          <span className="ct-mark-dot" aria-hidden="true"></span>
        </a>
        <nav className="ct-links">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a href="#showroom">Showroom</a>
        </nav>
        <a className="ct-cta-small" href="tel:+420606587075">
          Zavolat
        </a>
      </header>

      <section className="ct-hero" id="uvod" aria-labelledby="hero-title">
        <div className="ct-flow" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="ct-flow-line"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>

        <div className="ct-hero-inner">
          <p className="ct-eyebrow">Vzduchotechnika · Praha 6, Dejvice · od 2014</p>
          <h1 id="hero-title" className="ct-hero-title">
            <span className="ct-hero-l1">Čistý</span>
            <span className="ct-hero-l2">vzduch,</span>
            <span className="ct-hero-l3">nižší účet.</span>
          </h1>
          <p className="ct-hero-sub">
            Klimatizace, tepelná čerpadla a rekuperace pro byty, paneláky
            i domy. Návrh a kalkulaci dostanete zdarma — ozveme se cobydup.
          </p>
          <div className="ct-hero-actions">
            <a className="ct-cta" href="#showroom">
              Chci návrh zdarma
            </a>
            <a className="ct-cta-ghost" href="tel:+420777082992">
              777 082 992
            </a>
          </div>
        </div>

        <p className="ct-hero-temp" aria-hidden="true">
          <span className="ct-temp-num">23</span>
          <span className="ct-temp-unit">°C</span>
          <span className="ct-temp-label">nastaveno &amp; ticho</span>
        </p>
      </section>

      <section className="ct-sec" id="sluzby" aria-labelledby="sluzby-title">
        <div className="ct-sec-head">
          <p className="ct-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-title">Vytápění a klimatizace pod jednou střechou</h2>
        </div>
        <ul className="ct-grid">
          {sluzby.map((s) => (
            <li key={s.cislo} className="ct-card">
              <span className="ct-card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="ct-card-title">{s.nazev}</h3>
              <p className="ct-card-brands">{s.znacky}</p>
              <p className="ct-card-text">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ct-sec ct-sec-dark" id="duvera" aria-labelledby="duvera-title">
        <div className="ct-sec-head">
          <p className="ct-eyebrow ct-eyebrow-light">Proč zrovna my</p>
          <h2 id="duvera-title">
            Klimatizace nás baví. Proto pořád jezdíme na školení.
          </h2>
          <p className="ct-lede">
            Stali jsme se jednou z nejvytíženějších montážních firem pro
            Haier a Toshiba. U Haieru nás vyhlásili mezi 100 nejlepších
            projektů světa. Na odvedené práci — i na vás — nám záleží.
          </p>
        </div>

        <dl className="ct-facts">
          {fakta.map((f) => (
            <div key={f.k} className="ct-fact">
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>

        <div className="ct-showroom" id="showroom">
          <div className="ct-showroom-text">
            <p className="ct-eyebrow ct-eyebrow-light">Navštivte nás</p>
            <h3 className="ct-showroom-title">
              Showroom v Dejvicích, 150 m od metra
            </h3>
            <p>
              Rádi vám všechno ukážeme a vysvětlíme naživo. Na návštěvu
              se předem domluvíme — stačí zavolat nebo napsat.
            </p>
          </div>
          <ul className="ct-contact">
            <li>
              <span className="ct-contact-k">Adresa</span>
              <span>Verdunská 818/39, Praha 6</span>
            </li>
            <li>
              <span className="ct-contact-k">Telefon</span>
              <a href="tel:+420606587075">+420 606 587 075</a>
            </li>
            <li>
              <span className="ct-contact-k">E-mail</span>
              <a href="mailto:honza@cooltop.cz">honza@cooltop.cz</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
