import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astra Trans — autodoprava a logistika Liberec",
  description:
    "Astra Trans s.r.o. z Liberce vozí náklad po Česku i Evropě od roku 1992. Silniční přeprava, ADR, přeprava živých zvířat, logistika a skladování. Řekněte nám, kam a kdy — postaráme se o zbytek.",
  openGraph: {
    title: "Astra Trans — autodoprava a logistika Liberec",
    description:
      "Od roku 1992 vozíme náklad po Česku i Evropě. Silniční přeprava, ADR, živá zvířata, skladování. Liberec, Vesec.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Silniční přeprava",
    popis:
      "Plné i částečné náklady po Česku a celé Evropě. Plachta, chladírna, nadrozměr — vůz vybíráme podle toho, co vezete, ne podle toho, co máme volné.",
    detail: "CZ · EU",
  },
  {
    kod: "02",
    nazev: "ADR — nebezpečné zboží",
    popis:
      "Řidiči se školením ADR, značené soupravy, papíry v pořádku. Barvy, chemie, baterie — převezeme to bezpečně a v souladu s předpisy.",
    detail: "ADR",
  },
  {
    kod: "03",
    nazev: "Přeprava živých zvířat",
    popis:
      "Certifikovaná přeprava zvířat s ohledem na jejich pohodu — správná teplota, přestávky, dohled. Vozíme živé náklady tam, kde jiní couvnou.",
    detail: "Živá zvířata",
  },
  {
    kod: "04",
    nazev: "Logistika a skladování",
    popis:
      "Od roku 2019 nejen vozíme, ale i řídíme — chytré plánování tras, sklad, překládka. Jeden partner na cestu i na místo, kde náklad počká.",
    detail: "Sklad · IT",
  },
];

const pobocky = ["Liberec", "Pardubice", "Ústí nad Labem", "Praha"];

export default function Page() {
  return (
    <main className="at-main">
      <header className="at-topbar">
        <a className="at-wordmark" href="#" aria-label="Astra Trans, domů">
          <span className="at-wordmark__astra">ASTRA</span>
          <span className="at-wordmark__trans">TRANS</span>
        </a>
        <nav className="at-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="at-nav__call" href="tel:+420724859829">
            Zavolat 724 859 829
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="at-hero" aria-labelledby="at-hero-title">
        <div className="at-hero__road" aria-hidden="true">
          <span className="at-hero__lane" />
        </div>

        <div className="at-hero__inner">
          <p className="at-eyebrow">
            <span className="at-eyebrow__km">Liberec · Vesec</span>
            <span className="at-eyebrow__dot" aria-hidden="true">/</span>
            <span>od roku 1992</span>
          </p>

          <h1 id="at-hero-title" className="at-hero__title">
            <span className="at-hero__line">Řekněte kam.</span>
            <span className="at-hero__line at-hero__line--accent">
              Zbytek je
            </span>
            <span className="at-hero__line">na kolech.</span>
          </h1>

          <p className="at-hero__lead">
            Astra Trans vozí náklad po Česku i celé Evropě už přes třicet let.
            Silniční přeprava, nebezpečné zboží, živá zvířata i celá logistika —
            jeden dispečink, který zvedne telefon a ví, o čem mluvíte.
          </p>

          <div className="at-hero__actions">
            <a className="at-btn at-btn--solid" href="tel:+420724859829">
              Domluvit přepravu
            </a>
            <a className="at-btn at-btn--ghost" href="#sluzby">
              Co vozíme
            </a>
          </div>
        </div>

        <ul className="at-hero__meta" aria-label="Klíčové údaje">
          <li>
            <span className="at-hero__metaNum">33</span>
            <span className="at-hero__metaLbl">let na silnici</span>
          </li>
          <li>
            <span className="at-hero__metaNum">4</span>
            <span className="at-hero__metaLbl">pobočky v ČR</span>
          </li>
          <li>
            <span className="at-hero__metaNum">CZ→EU</span>
            <span className="at-hero__metaLbl">dosah přepravy</span>
          </li>
        </ul>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="at-services" aria-labelledby="at-services-title">
        <div className="at-section-head">
          <p className="at-kicker">Náklad</p>
          <h2 id="at-services-title" className="at-h2">
            Čtyři věci, které umíme nejlíp
          </h2>
          <p className="at-section-lead">
            Ne každý vůz uveze všechno. Vyberte, co potřebujete převézt — my
            přistavíme správnou soupravu i řidiče se správnými papíry.
          </p>
        </div>

        <ol className="at-cards">
          {sluzby.map((s) => (
            <li key={s.kod} className="at-card">
              <div className="at-card__top">
                <span className="at-card__kod">{s.kod}</span>
                <span className="at-card__tag">{s.detail}</span>
              </div>
              <h3 className="at-card__nazev">{s.nazev}</h3>
              <p className="at-card__popis">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section id="o-nas" className="at-trust" aria-labelledby="at-trust-title">
        <div className="at-trust__grid">
          <div className="at-trust__lead">
            <p className="at-kicker at-kicker--light">Kdo jsme</p>
            <h2 id="at-trust-title" className="at-h2 at-h2--light">
              Dopravce s tradicí, hlavou v roce 2025
            </h2>
            <p className="at-trust__text">
              Začínali jsme v roce 1992 s klasickou dopravou. V roce 2019 jsme
              přidali chytrou logistiku a IT — dnes plánujeme trasy tak, aby vaše
              zásilka jela nejkratší cestou a vy věděli, kde přesně je. Férové
              zázemí pro řidiče znamená, že za volantem sedí lidé, kteří u nás
              zůstávají.
            </p>

            <dl className="at-facts">
              <div className="at-fact">
                <dt>Certifikát kvality</dt>
                <dd>CZ012123 CIA QMS · 2025</dd>
              </div>
              <div className="at-fact">
                <dt>Členství</dt>
                <dd>WCA — globální síť dopravců</dd>
              </div>
              <div className="at-fact">
                <dt>Sídlo</dt>
                <dd>Kamenická 914, Vesec, 463 12 Liberec</dd>
              </div>
            </dl>
          </div>

          <aside className="at-branches" aria-label="Naše pobočky">
            <p className="at-branches__title">Odkud jezdíme</p>
            <ul className="at-branches__list">
              {pobocky.map((p, i) => (
                <li key={p} className="at-branch">
                  <span className="at-branch__idx" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="at-branch__name">{p}</span>
                </li>
              ))}
            </ul>
            <a className="at-btn at-btn--solid at-branches__cta" href="tel:+420724859829">
              Zavolat dispečink
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
