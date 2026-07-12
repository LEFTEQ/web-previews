import React from "react";

export default function Page() {
  return (
    <main className="thhk">
      {/* HERO ------------------------------------------------------------ */}
      <header className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Rozvody dálkového tepla Tepelného hospodářství v Hradci Králové"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <nav className="topbar" aria-label="Hlavní">
          <a className="wordmark" href="#uvod" aria-label="THHK — Tepelné hospodářství Hradec Králové">
            <span className="wordmark__mark">T<span className="wordmark__dot">·</span>H<span className="wordmark__dot">·</span>H<span className="wordmark__dot">·</span>K</span>
            <span className="wordmark__sub">Tepelné hospodářství Hradec Králové</span>
          </a>
          <div className="topbar__links">
            <a href="#sluzby">Připojení a služby</a>
            <a href="#spolecnost">O společnosti</a>
          </div>
        </nav>

        <div className="hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__temp">98&nbsp;°C</span>
            <span className="eyebrow__sep" aria-hidden="true" />
            Horká voda ve výměníku · Hradec&nbsp;Králové
          </p>

          <h1 className="hero__title">
            Teplo, které městem
            <br />
            teče už&nbsp;<span className="hero__accent">27&nbsp;let</span>.
          </h1>

          <p className="hero__lead">
            Rozvádíme teplo a teplou vodu do bytů, škol i&nbsp;úřadů po celém Hradci —
            jednou z&nbsp;nejnižších cen v&nbsp;republice. Sto procent akcií drží město,
            takže teplo z&nbsp;kohoutku zůstává hradecké.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#sluzby">Chci se připojit k&nbsp;teplu</a>
            <a className="btn btn--ghost" href="tel:+420495262663">
              <span className="btn__label">Dispečink 24/7</span>
              <span className="btn__num">495&nbsp;262&nbsp;663</span>
            </a>
          </div>

          <dl className="hero__gauge">
            <div className="gauge">
              <dt>Cena tepla v&nbsp;ČR</dt>
              <dd>2.&nbsp;nejnižší</dd>
            </div>
            <div className="gauge">
              <dt>Topná sezona 2026</dt>
              <dd>ukončena 29.&nbsp;5.</dd>
            </div>
            <div className="gauge">
              <dt>Vlastník sítě</dt>
              <dd>město HK, 100&nbsp;%</dd>
            </div>
          </dl>
        </div>

        <a className="hero__strip" href="tel:+420495279246">
          <span className="hero__stripLabel">Smlouvy &amp; fakturace</span>
          <span className="hero__stripNum">495&nbsp;279&nbsp;246</span>
        </a>
      </header>

      {/* SLUŽBY ---------------------------------------------------------- */}
      <section className="services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="services__head">
          <p className="section-kicker">Co pro vás zajistíme</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Od přípojky až po fakturu — jeden dodavatel na celou trasu tepla.
          </h2>
        </div>

        <ol className="cards">
          <li className="card">
            <span className="card__no">01</span>
            <h3 className="card__title">Připojení k&nbsp;horkovodu</h3>
            <p className="card__text">
              Napojíme nový dům nebo objekt na městskou horkovodní síť.
              Navrhneme trasu, výměníkovou stanici i&nbsp;fakturační měření
              a&nbsp;provedeme vás celým řízením.
            </p>
            <span className="card__tag">Do 30 dní od projektu</span>
          </li>
          <li className="card">
            <span className="card__no">02</span>
            <h3 className="card__title">Odpojení a&nbsp;odstávky</h3>
            <p className="card__text">
              Řešíte rekonstrukci? Domluvíme dočasnou odstávku i&nbsp;trvalé
              odpojení podle platných pravidel. Termíny plánovaných
              odstávek hlásíme předem po jednotlivých ulicích.
            </p>
            <span className="card__tag">S předstihem &amp; písemně</span>
          </li>
          <li className="card">
            <span className="card__no">03</span>
            <h3 className="card__title">Havárie non-stop</h3>
            <p className="card__text">
              Studený radiátor nebo unikající voda? Dispečink bere
              telefon ve dne v&nbsp;noci, o&nbsp;víkendu i&nbsp;o&nbsp;svátcích.
              Poruchu na síti řešíme okamžitě.
            </p>
            <a className="card__call" href="tel:+420495262663">Zavolat na dispečink →</a>
          </li>
        </ol>

        <figure className="services__figure">
          <img
            src="/section-1.webp"
            alt="Technik u výměníkové stanice dálkového vytápění"
            className="services__img"
          />
          <figcaption className="services__cap">
            Naši technici udržují síť předizolovaných horkovodů, kterými proudí
            přehřátá voda z&nbsp;centrálních zdrojů až do vašeho domu.
          </figcaption>
        </figure>
      </section>

      {/* O SPOLEČNOSTI --------------------------------------------------- */}
      <section className="about" id="spolecnost" aria-labelledby="spolecnost-nadpis">
        <div className="about__grid">
          <div className="about__media">
            <img
              src="/section-2.webp"
              alt="Teplárenský zdroj a rozvody tepla v Hradci Králové"
              className="about__img"
            />
          </div>

          <div className="about__body">
            <p className="section-kicker section-kicker--light">Městská firma, ne anonymní dodavatel</p>
            <h2 id="spolecnost-nadpis" className="section-title section-title--light">
              Nejvýznamnější dodavatel tepla ve&nbsp;spádovém území Hradce.
            </h2>
            <p className="about__lead">
              Chceme být firmou s&nbsp;důrazem na cenu, komfort a&nbsp;spolehlivost
              dodávek — a&nbsp;zároveň organizací, která městu vrací hodnotu
              a&nbsp;podporuje veřejný život. Sto procent akcií drží
              Statutární město Hradec Králové.
            </p>

            <ul className="facts">
              <li className="fact">
                <span className="fact__k">Sídlo</span>
                <span className="fact__v">Na Brně 362, 500 06 Hradec Králové</span>
              </li>
              <li className="fact">
                <span className="fact__k">Vlastník</span>
                <span className="fact__v">Statutární město Hradec Králové, 100 %</span>
              </li>
              <li className="fact">
                <span className="fact__k">V rejstříku od</span>
                <span className="fact__v">16. 1. 1998 · KS Hradec Králové, B 1765</span>
              </li>
              <li className="fact">
                <span className="fact__k">IČO</span>
                <span className="fact__v">25282174</span>
              </li>
            </ul>

            <div className="news">
              <p className="news__label">Z aktualit</p>
              <a className="news__item" href="#spolecnost">
                <time className="news__date" dateTime="2026-02-19">19. 2. 2026</time>
                <span className="news__text">
                  I&nbsp;letos naše teplo patří k&nbsp;nejnižším v&nbsp;republice — a&nbsp;to i&nbsp;díky vám.
                </span>
              </a>
              <a className="news__item" href="#spolecnost">
                <time className="news__date" dateTime="2025-11-29">29. 11. 2025</time>
                <span className="news__text">
                  Cena za teplo v&nbsp;Hradci vzroste o&nbsp;4,5&nbsp;% a&nbsp;dál patří k&nbsp;nejlevnějším v&nbsp;ČR.
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
