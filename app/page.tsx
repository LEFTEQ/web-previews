import React from "react";

export default function Page() {
  return (
    <main className="pg">
      {/* HERO */}
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#top" aria-label="Milan Přikryl elektro — domů">
          <span className="wm-bolt" aria-hidden="true">/</span>
          <span className="wm-name">PŘIKRYL</span>
          <span className="wm-sub">elektro&nbsp;·&nbsp;Brno</span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="nav-call" href="tel:+420703467661">+420 703 467 661</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img src="/hero.webp" alt="Rozvaděč s pojistkami a zapojenými vodiči při elektroinstalaci" className="hero-img" />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">Provozní doba · Po–Pá 7:00–17:00 · Brno a okolí</p>
          <h1 className="hero-title">
            <span className="line">Elektřina, na kterou</span>
            <span className="line accent">se spolehnete</span>
            <span className="line">bez jiskření.</span>
          </h1>
          <p className="hero-lead">
            Milan Přikryl zapojuje domy, byty i provozy v Brně už desítky let.
            Od přípojky NN po revizi — čistá práce, papíry v pořádku, žádné
            improvizace za zdí.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="tel:+420703467661">Zavolat elektrikáře</a>
            <a className="btn-ghost" href="#sluzby">Co zapojíme</a>
          </div>
        </div>

        {/* Signature: měřák napětí / živá lišta */}
        <div className="phase-bar" role="presentation" aria-hidden="true">
          <div className="phase-item"><b>L1</b><span>230 V</span></div>
          <div className="phase-item"><b>L2</b><span>230 V</span></div>
          <div className="phase-item"><b>L3</b><span>230 V</span></div>
          <div className="phase-item ok"><b>PE</b><span>0 Ω</span></div>
          <div className="phase-item ok"><b>Revize</b><span>OK</span></div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="sec-eyebrow">Co u vás zapojíme</p>
          <h2 id="sluzby-nadpis" className="sec-title">Od poradenství po revizi<br/>pod jednou rukou.</h2>
        </div>

        <div className="sluzby-grid">
          <article className="karta">
            <span className="karta-kod">NN</span>
            <h3>Montáž a přípojky</h3>
            <p>Elektroinstalace rodinných a bytových domů, obchodních prostor a průmyslu. Přípojky nízkého napětí i celé rozvody na klíč.</p>
            <ul>
              <li>Rodinné a bytové domy</li>
              <li>Průmysl a obchodní prostory</li>
              <li>Přípojky NN</li>
            </ul>
          </article>

          <article className="karta">
            <span className="karta-kod">⚡</span>
            <h3>Servis a hromosvody</h3>
            <p>Když něco vypadne nebo hučí, přijedeme a opravíme. Instalace a kontrola hromosvodů, aby vás bouřka nezastihla nechráněné.</p>
            <ul>
              <li>Opravy elektrických zařízení</li>
              <li>Hromosvody</li>
              <li>Odstranění závad</li>
            </ul>
          </article>

          <article className="karta">
            <span className="karta-kod">✓</span>
            <h3>Revize a projekce</h3>
            <p>Výchozí i periodické revize s razítkem, projekční činnost a cenové nabídky. Poradíme i alternativní řešení, když to jde levněji.</p>
            <ul>
              <li>Revize výchozí i periodické</li>
              <li>Projekční činnost</li>
              <li>Zpracování cenových nabídek</li>
            </ul>
          </article>
        </div>

        <figure className="sluzby-foto">
          <img src="/section-1.webp" alt="Zapojený rozvaděč s jističi a přehledně vedenými vodiči" />
          <figcaption>Rozvaděč zapojený tak, aby se v něm vyznal i další elektrikář po vás.</figcaption>
        </figure>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="o-nas" id="o-nas" aria-labelledby="o-nas-nadpis">
        <figure className="o-nas-foto">
          <img src="/section-2.webp" alt="Elektrikář při práci na instalaci v objektu" />
        </figure>

        <div className="o-nas-text">
          <p className="sec-eyebrow">Firma s dlouhou tradicí</p>
          <h2 id="o-nas-nadpis" className="sec-title">Jeden elektrikář,<br/>za kterým si stojí.</h2>
          <p className="o-nas-lead">
            Milan Přikryl dělá elektroinstalace v Brně poctivě a bez zbytečných
            řečí. Domluvíte se s tím, kdo pak přijde a práci odvede — žádné
            přehazování mezi subdodavateli.
          </p>

          <dl className="fakta">
            <div>
              <dt>Sídlo</dt>
              <dd>Vlčnovská 4180/16<br/>628 00 Brno</dd>
            </div>
            <div>
              <dt>IČO</dt>
              <dd>48917362</dd>
            </div>
            <div>
              <dt>Kdy zastihnete</dt>
              <dd>Po–Pá 7:00–17:00</dd>
            </div>
            <div>
              <dt>Kam voláte</dt>
              <dd><a href="tel:+420703467661">+420 703 467 661</a></dd>
            </div>
          </dl>

          <div className="o-nas-mail">
            <a href="mailto:mp-elektro@seznam.cz">mp-elektro@seznam.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
