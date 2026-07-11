import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Kompletní organizace",
      text: "Převezmeme celou přípravu — od prvního nápadu po úklid po půlnoci. Vy řešíte jen to, co vás baví, o zbytek se postaráme my.",
    },
    {
      cislo: "02",
      nazev: "Formality a úřady",
      text: "Ohlášky, matrika, oddávající, doklady. Provedeme vás papírováním v Brně i okolí, ať se v den D nic nezadrhne.",
    },
    {
      cislo: "03",
      nazev: "Prověření dodavatelé",
      text: "Fotograf, catering, kapela, květiny — jen lidé, se kterými reálně spolupracujeme a za jejichž práci ručíme.",
    },
    {
      cislo: "04",
      nazev: "Dekorace k zapůjčení",
      text: "Návrh výzdoby na míru vašemu místu. Dekorace nemusíte kupovat — půjčíme je za symbolický poplatek.",
    },
  ];

  const kroky = [
    {
      krok: "Krok 1",
      nazev: "Řekněte nám svůj sen",
      text: "Sejdeme se na kávě v Brně, poslechneme si vaše přání, styl i rozpočet. Nezávazně a bez nátlaku.",
    },
    {
      krok: "Krok 2",
      nazev: "Naplánujeme každý detail",
      text: "Vybereme místo, čas i dodavatele, sestavíme harmonogram a rozpočet, který sedí.",
    },
    {
      krok: "Krok 3",
      nazev: "Užijte si svůj den",
      text: "V den svatby jsme na místě a hlídáme, aby vše klaplo. Vy si užíváte, my režírujeme.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Svatby podle Katy — úvod">
          <span className="wordmark__line1">Svatby</span>
          <span className="wordmark__line2">podle&nbsp;<em>Katy</em></span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#jak">Jak to chodí</a>
          <a href="#duvera">O nás</a>
        </nav>
        <span className="topbar__place">Brno &amp; okolí</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Nevěsta a ženich během svatebního obřadu připraveného agenturou Svatby podle Katy"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">Svatební agentura · Brno · od roku 2013</p>
          <h1 id="hero-title" className="hero__title">
            Váš den s velkým&nbsp;<span className="hero__accent">D</span>
            <br />
            zrežírujeme do posledního detailu
          </h1>
          <p className="hero__lead">
            Přenechte nám starosti se svatbou v Brně i na jižní Moravě. Postaráme se
            o místo, dodavatele, výzdobu i papírování — vy si den jen užijete.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420604163577">Zavolat Katy</a>
            <a className="btn btn--ghost" href="#sluzby">Co všechno zařídíme</a>
          </div>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">Co zařídíme</p>
          <h2 id="sluzby-title">Čtyři věci, kvůli kterým si oddechnete</h2>
          <p className="section-head__note">
            Vyberte si celý balík, nebo jen to, s čím si nevíte rady. Přizpůsobíme se.
          </p>
        </div>
        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__num" aria-hidden="true">{s.cislo}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-title">
        <div className="duvera__media">
          <img
            src="/section-1.webp"
            alt="Slavnostně prostřená svatební tabule s originální dekorací od Svatby podle Katy"
            className="duvera__img"
          />
        </div>
        <div className="duvera__body">
          <p className="eyebrow">Jak to u nás chodí</p>
          <h2 id="duvera-title">Dokonalá svatba ve třech krocích</h2>
          <ul className="steps">
            {kroky.map((k, i) => (
              <li className="step" key={k.krok}>
                <span className="step__index" aria-hidden="true">{i + 1}</span>
                <div>
                  <p className="step__kicker">{k.krok}</p>
                  <h3 className="step__title">{k.nazev}</h3>
                  <p className="step__text">{k.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <blockquote className="quote">
            <p>
              „S Katy jsme se poprvé za celé plánování konečně uklidnili. V den
              svatby jsme nemuseli řešit vůbec nic — a bylo to znát.“
            </p>
            <footer className="quote__by">— Darina &amp; Tomáš, svatba na Špilberku</footer>
          </blockquote>

          <img
            src="/section-2.webp"
            alt="Detail svatební květinové výzdoby připravené agenturou"
            className="duvera__strip"
          />
        </div>
      </section>
    </main>
  );
}
