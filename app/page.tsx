import React from "react";

export default function Page() {
  return (
    <main className="hp">
      {/* HERO */}
      <header className="hp-hero">
        <div className="hp-hero-media">
          <img
            src="/hero.webp"
            alt="Instalace vzduchotechnického a klimatizačního zařízení firmou Hepro v Brně"
            className="hp-hero-img"
          />
          <div className="hp-hero-scrim" aria-hidden="true" />
        </div>

        <nav className="hp-nav" aria-label="Hlavní navigace">
          <a href="#uvod" className="hp-wordmark" aria-label="Hepro — vzduchotechnika a klimatizace Brno">
            <span className="hp-wordmark-mark" aria-hidden="true">
              <span className="hp-flow" />
            </span>
            <span className="hp-wordmark-text">HEPRO</span>
          </a>
          <ul className="hp-nav-links">
            <li><a href="#nabidka">Nabídka</a></li>
            <li><a href="#reference">Reference</a></li>
            <li><a href="#kontakt" className="hp-nav-cta">603&nbsp;838&nbsp;822</a></li>
          </ul>
        </nav>

        <div className="hp-hero-inner" id="uvod">
          <p className="hp-eyebrow">Projekce · dodávka · montáž · servis — Brno a celá ČR</p>
          <h1 className="hp-title">
            Vzduch, který<br />
            <span className="hp-title-accent">chladí, hřeje a dýchá</span><br />
            přesně jak potřebujete.
          </h1>
          <p className="hp-lede">
            Klimatizace, vzduchotechnika a tepelná čerpadla od projektu po servis.
            Od bytu v Žabovřeskách po prodejnu v OC Avion — ozveme se do 24&nbsp;hodin
            v pracovní dny.
          </p>
          <div className="hp-hero-actions">
            <a href="tel:+420603838822" className="hp-btn hp-btn-primary">Zavolat 603&nbsp;838&nbsp;822</a>
            <a href="#nabidka" className="hp-btn hp-btn-ghost">Co montujeme</a>
          </div>
        </div>

        {/* Signature: air-flow gauge strip */}
        <div className="hp-gauge" aria-label="Přehled služeb v číslech">
          <div className="hp-gauge-item">
            <span className="hp-gauge-num">24&nbsp;h</span>
            <span className="hp-gauge-lbl">reakce na poptávku</span>
          </div>
          <div className="hp-gauge-item">
            <span className="hp-gauge-num">1993</span>
            <span className="hp-gauge-lbl">na trhu od roku</span>
          </div>
          <div className="hp-gauge-item">
            <span className="hp-gauge-num">Toshiba · Sinclair</span>
            <span className="hp-gauge-lbl">autorizovaně montujeme</span>
          </div>
        </div>
      </header>

      {/* SEKCE 1 — NABÍDKA */}
      <section className="hp-section hp-offer" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="hp-section-head">
          <p className="hp-section-kicker">Co pro vás uděláme</p>
          <h2 id="nabidka-nadpis" className="hp-h2">Čtyři obory, jeden dodavatel od projektu po servis</h2>
        </div>

        <ol className="hp-cards">
          <li className="hp-card">
            <span className="hp-card-idx">01</span>
            <h3 className="hp-card-title">Klimatizace do bytů a domů</h3>
            <p className="hp-card-body">
              Split i multisplit Toshiba a Sinclair. Navrhneme výkon podle místnosti,
              vyvrtáme, natlakujeme a spustíme — chladí v létě, přitopí na jaře.
            </p>
            <p className="hp-card-tag">Cena včetně montáže i dovozu k vám</p>
          </li>
          <li className="hp-card">
            <span className="hp-card-idx">02</span>
            <h3 className="hp-card-title">Vzduchotechnika pro provozy</h3>
            <p className="hp-card-body">
              Odvětrání prodejen, kuchyní a výroby — od výpočtu a projektu přes
              rozvody potrubí a jednotky až po vyregulování a předání.
            </p>
            <p className="hp-card-tag">Malé stavby i velké projekty</p>
          </li>
          <li className="hp-card">
            <span className="hp-card-idx">03</span>
            <h3 className="hp-card-title">Tepelná čerpadla vzduch–voda</h3>
            <p className="hp-card-body">
              Do rodinných domů, i k vašemu stávajícímu kotli. Optimalizujeme
              provoz tak, aby topení stálo co nejméně.
            </p>
            <p className="hp-card-tag">Napojení na stávající i nové systémy</p>
          </li>
          <li className="hp-card">
            <span className="hp-card-idx">04</span>
            <h3 className="hp-card-title">Servis a údržba</h3>
            <p className="hp-card-body">
              Pravidelné čištění, doplnění chladiva a kontrola těsnosti. Zařízení,
              které se udržuje, vydrží roky a nežere elektřinu navíc.
            </p>
            <p className="hp-card-tag">I pro jednotky, které jsme nemontovali</p>
          </li>
        </ol>

        <div className="hp-offer-media">
          <img
            src="/section-1.webp"
            alt="Montáž rozvodů vzduchotechniky a klimatizační jednotky"
            className="hp-offer-img"
          />
        </div>
      </section>

      {/* SEKCE 2 — DŮVĚRA / REFERENCE */}
      <section className="hp-section hp-trust" id="reference" aria-labelledby="trust-nadpis">
        <div className="hp-trust-media">
          <img
            src="/section-2.webp"
            alt="Realizace vzduchotechniky Hepro v komerčním prostoru v Brně"
            className="hp-trust-img"
          />
        </div>

        <div className="hp-trust-body" id="kontakt">
          <p className="hp-section-kicker">Proč zrovna Hepro</p>
          <h2 id="trust-nadpis" className="hp-h2">Řemeslo, které stojí za vaše peníze — od roku 1993 v Brně</h2>
          <p className="hp-trust-lede">
            Jsme brněnská firma, která dělá klimatizaci a vzduchotechniku od projektu
            po servis. Bez subdodavatelů na to nejdůležitější, s ochotou a pružností,
            na kterou se lidé vracejí.
          </p>

          <figure className="hp-quote">
            <blockquote>
              „Rekonstrukce prodejny Baťa v OC Avion — dodali a namontovali jsme
              kompletní vzduchotechniku včetně projektu.“
            </blockquote>
            <figcaption>AVION Shopping Park, Brno — Baťa</figcaption>
          </figure>

          <dl className="hp-facts">
            <div className="hp-fact">
              <dt>Telefon</dt>
              <dd><a href="tel:+420603838822">603 838 822</a></dd>
            </div>
            <div className="hp-fact">
              <dt>E-mail</dt>
              <dd><a href="mailto:hepro@hepro.info">hepro@hepro.info</a></dd>
            </div>
            <div className="hp-fact">
              <dt>Kde nás najdete</dt>
              <dd>Vymazalova 1, 615 00 Brno</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
