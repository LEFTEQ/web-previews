import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="hero">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="mark" href="#top" aria-label="PROF SERVIS, účetní kancelář Liberec">
            <span className="mark__tick" aria-hidden="true">✓</span>
            <span className="mark__name">PROF<em>SERVIS</em></span>
          </a>
          <ul className="nav__links">
            <li><a href="#sluzby">Služby</a></li>
            <li><a href="#duvera">O kanceláři</a></li>
            <li><a className="nav__phone" href="tel:+420603488058">603 488 058</a></li>
          </ul>
        </nav>

        <div className="hero__grid" id="top">
          <div className="hero__copy">
            <p className="eyebrow">Účetní kancelář • Liberec, náměstí Českých bratří</p>
            <h1 className="hero__title">
              Účetnictví, které <span className="u">sedí na haléř</span> — a vy o něm nemusíte přemýšlet.
            </h1>
            <p className="hero__lead">
              Vedeme účetnictví a mzdy pro liberecké živnostníky i firmy. Bezpapírově,
              v termínu, s jedním člověkem, který zvedá telefon a ví, jak na tom jste.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420603488058">Zavolat 603 488 058</a>
              <a className="btn btn--ghost" href="mailto:info@profservis.cz">Napsat e‑mail</a>
            </div>

            {/* Signature: účetní deník jako balanční tabulka */}
            <dl className="ledger" aria-label="Co dostáváte">
              <div className="ledger__row ledger__head">
                <dt>Položka</dt><dd>Vy platíte</dd><dd className="credit">Vy získáváte</dd>
              </div>
              <div className="ledger__row">
                <dt>Zpracování dokladů</dt><dd>0 hodin papírování</dd><dd className="credit">Klid a přehled</dd>
              </div>
              <div className="ledger__row">
                <dt>Komunikace s úřady</dt><dd>0 nervů</dd><dd className="credit">Vyřízeno za vás</dd>
              </div>
              <div className="ledger__row ledger__sum">
                <dt>Zůstatek</dt><dd aria-hidden="true">=</dd><dd className="credit">Čas na podnikání</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__figure">
            <img src="/hero.webp" alt="Pracovní stůl účetní kanceláře PROF SERVIS v Liberci s doklady a výpočty" className="hero__img" width={880} height={1040} />
            <figcaption className="hero__stamp">
              <span className="hero__stamp-line">ZAÚČTOVÁNO</span>
              <span className="hero__stamp-sub">Liberec · IČO 63145201</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow">Co pro vás vedeme</p>
          <h2 id="sluzby-nadpis" className="section-title">Dvě agendy, jeden klid</h2>
        </div>

        <div className="cards">
          <article className="card">
            <span className="card__no" aria-hidden="true">01</span>
            <h3 className="card__title">Vedení účetnictví</h3>
            <p className="card__text">
              Komplexní účetnictví pro podnikatele i firmy. Zpracujeme doklady, sestavíme
              účetní závěrku a vyřídíme komunikaci s finančním úřadem. Preferujeme
              bezpapírové, digitální vedení — doklady posíláte fotkou, my zbytek dořešíme.
            </p>
            <ul className="card__list">
              <li>Zpracování a zaúčtování dokladů</li>
              <li>Účetní závěrky a přiznání</li>
              <li>Zastupování na úřadech</li>
            </ul>
          </article>

          <article className="card">
            <span className="card__no" aria-hidden="true">02</span>
            <h3 className="card__title">Vedení mzdové agendy</h3>
            <p className="card__text">
              Mzdy nechte na nás. Spočítáme výplaty, připravíme přehledy, vyřídíme papírování
              i komunikaci s ČSSZ a zdravotními pojišťovnami. Vy se věnujete tomu, co vás
              baví — a co vydělává.
            </p>
            <ul className="card__list">
              <li>Výpočty mezd a odvodů</li>
              <li>Přehledy pro pojišťovny a ČSSZ</li>
              <li>Přihlášky, odhlášky, potvrzení</li>
            </ul>
          </article>
        </div>

        <figure className="sluzby__figure">
          <img src="/section-1.webp" alt="Digitální zpracování účetních dokladů bez papírování" width={1200} height={620} loading="lazy" />
        </figure>
      </section>

      {/* DŮVĚRA / O NÁS */}
      <section className="duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__grid">
          <figure className="duvera__figure">
            <img src="/section-2.webp" alt="Účetní kancelář PROF SERVIS na náměstí Českých bratří v Liberci" width={720} height={860} loading="lazy" />
          </figure>

          <div className="duvera__copy">
            <p className="eyebrow">Proč zrovna my</p>
            <h2 id="duvera-nadpis" className="section-title">Malá kancelář, se kterou se domluvíte</h2>
            <p className="duvera__lead">
              Sídlíme na náměstí Českých bratří v Liberci. Nejsme call centrum — vaše
              účetnictví vede konkrétní člověk, který zná vaši firmu a odpoví, i když
              nastane termín přiznání.
            </p>

            <ul className="facts">
              <li className="facts__item">
                <span className="facts__k">Bezpapírově</span>
                <span className="facts__v">Doklady digitálně, žádné šanony sem a tam</span>
              </li>
              <li className="facts__item">
                <span className="facts__k">V termínu</span>
                <span className="facts__v">Přiznání a přehledy hlídáme za vás</span>
              </li>
              <li className="facts__item">
                <span className="facts__k">Osobně v Liberci</span>
                <span className="facts__v">Náměstí Českých bratří 25/14</span>
              </li>
            </ul>

            <div className="contact-card">
              <p className="contact-card__name">PROF SERVIS s.r.o.</p>
              <p className="contact-card__addr">náměstí Českých bratří 25/14, Liberec</p>
              <p className="contact-card__row">
                <a href="tel:+420603488058">+420 603 488 058</a>
                <span aria-hidden="true">·</span>
                <a href="mailto:info@profservis.cz">info@profservis.cz</a>
              </p>
              <p className="contact-card__meta">IČO 63145201</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
