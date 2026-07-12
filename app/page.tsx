import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — postaveno na řezu skříně: milimetrový nákres dílny */}
      <header className="hero">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="brand" href="#" aria-label="Intery — nábytek na míru, domovská stránka">
            <span className="brand-mark" aria-hidden="true">▮▮</span>
            <span className="brand-word">intery<span className="brand-thin">&nbsp;/&nbsp;kuchyně na míru</span></span>
          </a>
          <ul className="nav-links">
            <li><a href="#kuchyne">Kuchyně</a></li>
            <li><a href="#dilna">Dílna v Praze</a></li>
            <li><a href="#postup">Jak to probíhá</a></li>
          </ul>
          <a className="nav-cta" href="tel:+420727866443">Zavolat 727 866 443</a>
        </nav>

        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow"><span className="eyebrow-tick">↳</span> Vlastní dílna &middot; Štětkova, Praha 4</p>
            <h1 className="hero-title">
              Kuchyň, kterou&nbsp;dřevo
              <span className="hero-title-accent">obkreslí přesně kolem&nbsp;vás.</span>
            </h1>
            <p className="hero-lead">
              Navrhneme, vyrobíme a smontujeme kuchyň na milimetr podle vašeho bytu —
              vše pod jednou střechou v naší pražské dílně, bez subdodavatelů a bez zbytečných průtahů.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420727866443">Nezávazně poptat kuchyň</a>
              <a className="btn btn-ghost" href="#kuchyne">Prohlédnout dvířka</a>
            </div>

            {/* Struktura = pravda o firmě: tři měřitelné jistoty, ne prázdná čísla */}
            <dl className="hero-facts">
              <div className="fact">
                <dt>3D vizualizace</dt>
                <dd>ke každé poptávce zdarma</dd>
              </div>
              <div className="fact">
                <dt>300+ dekorů</dt>
                <dd>lamino, dýha, fóliovaná dvířka</dd>
              </div>
              <div className="fact">
                <dt>Kování Blum</dt>
                <dd>a 5 let záruka na nábytek</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-figure">
            <img src="/hero.webp" alt="Kuchyň na míru z pražské dílny Intery — čelní pohled na sestavu skříněk s bezúchytkovými dvířky" className="hero-img" />
            <figcaption className="hero-tag">
              <span className="hero-tag-dim">2400 mm</span>
              <span className="hero-tag-label">měřeno na míru vašeho prostoru</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — nabídka podle typu dvířek, jazykem řemesla */}
      <section id="kuchyne" className="section section-menu" aria-labelledby="menu-title">
        <div className="section-head">
          <p className="section-eyebrow">Co pro vás vyrobíme</p>
          <h2 id="menu-title" className="section-title">Tři cesty k jedné kuchyni</h2>
          <p className="section-sub">
            Vybíráte podle toho, jak chcete kuchyň otevírat a jak má být cítit pod rukou. Ceny jsou orientační,
            přesnou kalkulaci a 3D návrh dostanete po zaměření.
          </p>
        </div>

        <ol className="cards">
          <li className="card">
            <span className="card-index">01</span>
            <h3 className="card-title">Bezúchytková dvířka</h3>
            <p className="card-desc">
              Čistá čelní plocha bez úchytek — otevíráte tlakem nebo frézovanou drážkou.
              Sedne minimalistickému bytu a snadno se stírá.
            </p>
            <p className="card-price"><span className="card-price-num">od 15 990 Kč</span> <span className="card-price-note">vč. 12&nbsp;% DPH</span></p>
          </li>
          <li className="card">
            <span className="card-index">02</span>
            <h3 className="card-title">Frézovaná dřevěná čela</h3>
            <p className="card-desc">
              Dýha nebo strukturovaná fólie s viditelnou kresbou dřeva. Teplý, poctivý vzhled,
              který si po letech provozu drží tvář.
            </p>
            <p className="card-price"><span className="card-price-num">od 19 990 Kč</span> <span className="card-price-note">vč. 12&nbsp;% DPH</span></p>
          </li>
          <li className="card">
            <span className="card-index">03</span>
            <h3 className="card-title">Rohové sestavy</h3>
            <p className="card-desc">
              Vnitřní kování Blum, výsuvné koše a police, které dostanou funkci i do posledního koutu.
              Nic nezůstane hluchým místem.
            </p>
            <p className="card-price"><span className="card-price-num">od 29 990 Kč</span> <span className="card-price-note">vč. 12&nbsp;% DPH</span></p>
          </li>
        </ol>

        <figure className="menu-figure">
          <img src="/section-1.webp" alt="Detail dvířek a kování kuchyně vyrobené na míru v dílně Intery" className="menu-img" />
          <figcaption className="menu-cap">Ke každé sestavě dodáme rozpis dekorů, kování a přesné rozměry — abyste věděli, co si objednáváte.</figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — dílna / důvěra + postup */}
      <section id="dilna" className="section section-trust" aria-labelledby="trust-title">
        <div className="trust-grid">
          <figure className="trust-figure">
            <img src="/section-2.webp" alt="Pražská dílna Intery, kde vznikají kuchyně a vestavěné skříně na míru" className="trust-img" />
          </figure>

          <div className="trust-text">
            <p className="section-eyebrow">Vlastní dílna, žádní subdodavatelé</p>
            <h2 id="trust-title" className="section-title">Od návrhu po montáž vás držíme v jedněch rukou</h2>
            <p className="trust-lead">
              Kuchyně řešíme kompletně interně v naší dílně na Štětkově v Praze 4. Díky tomu
              garantujeme předem domluvené termíny montáže, krátké dodací lhůty a hlídáme kvalitu
              v každém kroku — od řezu desky až po dorovnání dvířek na místě.
            </p>

            <ol id="postup" className="steps">
              <li className="step">
                <span className="step-num">1</span>
                <div>
                  <h3 className="step-title">Schůzka a návrh</h3>
                  <p>Projdeme vaše potřeby, připravíme 3D vizualizaci a cenovou kalkulaci zdarma.</p>
                </div>
              </li>
              <li className="step">
                <span className="step-num">2</span>
                <div>
                  <h3 className="step-title">Zaměření prostor</h3>
                  <p>Po odsouhlasení návrhu k vám dorazí technik a zaměří kuchyň na milimetr.</p>
                </div>
              </li>
              <li className="step">
                <span className="step-num">3</span>
                <div>
                  <h3 className="step-title">Smlouva, výroba a montáž</h3>
                  <p>Dostanete smlouvu s pevným datem montáže. Vyrobíme a přijedeme přesně, jak jsme slíbili.</p>
                </div>
              </li>
            </ol>

            <a className="btn btn-primary" href="mailto:info@intery-kuchyne.cz">Napsat na info@intery-kuchyne.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
