import React from "react";

export default function Page() {
  return (
    <main className="kr">
      {/* HERO — postaveno na dispozici: dispečink, ne slogan */}
      <section className="kr-hero" aria-labelledby="kr-hero-title">
        <img
          className="kr-hero__img"
          src="/hero.webp"
          alt="Návěsová souprava Kareka na mezinárodní trase"
          width={1600}
          height={1000}
          decoding="async"
        />
        <div className="kr-hero__scrim" aria-hidden="true" />

        <header className="kr-topbar">
          <a className="kr-mark" href="#" aria-label="Kareka — domů">
            <span className="kr-mark__k">KA</span>
            <span className="kr-mark__r">REKA</span>
            <span className="kr-mark__dot" aria-hidden="true" />
          </a>
          <nav className="kr-nav" aria-label="Hlavní">
            <a href="#reseni">Přepravní řešení</a>
            <a href="#zazemi">Zázemí</a>
            <a href="#kontakt" className="kr-nav__cta">Poptat přepravu</a>
          </nav>
        </header>

        <div className="kr-hero__inner">
          <p className="kr-eyebrow">
            <span className="kr-eyebrow__pin" aria-hidden="true" />
            Ústí nad Labem · dispečink CZ / EU
          </p>
          <h1 id="kr-hero-title" className="kr-hero__title">
            Náklad, který
            <br />
            <span className="kr-hero__accent">dorazí načas.</span>
          </h1>
          <p className="kr-hero__lede">
            Kamionová a kurýrní doprava z Ústí nad Labem do celé Evropy.
            Jumbo‑přepravy, výměnné nástavby i dovoz zpět — s vytěžováním,
            aby vozidlo nejelo prázdné.
          </p>

          <div className="kr-hero__actions">
            <a className="kr-btn kr-btn--solid" href="tel:+420602118385">
              Zavolat dispečinku
            </a>
            <a className="kr-btn kr-btn--ghost" href="#reseni">
              Co vozíme
            </a>
          </div>

          {/* Živý pruh — čte se jako informační tabule dispečinku */}
          <dl className="kr-board" aria-label="Provozní údaje">
            <div className="kr-board__cell">
              <dt>Nájezd flotily</dt>
              <dd>6 000 000 km</dd>
            </div>
            <div className="kr-board__cell">
              <dt>Dispečink</dt>
              <dd>+420 475 258 549</dd>
            </div>
            <div className="kr-board__cell">
              <dt>Sklady</dt>
              <dd>Ústí n. L. · Pardubice</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SEKCE 1 — PŘEPRAVNÍ ŘEŠENÍ (seznam nákladních listů) */}
      <section id="reseni" className="kr-sec kr-reseni" aria-labelledby="kr-reseni-title">
        <div className="kr-sec__head">
          <p className="kr-kicker">Nakládací list</p>
          <h2 id="kr-reseni-title">Co pro vás přepravíme</h2>
          <p className="kr-sec__sub">
            Od plné kamionové zásilky po dokládky, které samy nezaplní ložnou
            plochu. Napíšeme trasu, vy hlídáte zboží.
          </p>
        </div>

        <ol className="kr-list">
          <li className="kr-item">
            <span className="kr-item__code">CMR‑01</span>
            <div className="kr-item__body">
              <h3>Jumbo‑přepravy</h3>
              <p>
                Objemné zásilky do velkoprostorových souprav. Vysoký vnitřní
                prostor pro lehčí, ale rozměrné zboží po celé Evropě.
              </p>
            </div>
          </li>
          <li className="kr-item">
            <span className="kr-item__code">CMR‑02</span>
            <div className="kr-item__body">
              <h3>Výměnné nástavby</h3>
              <p>
                Nakládka nezávisle na tahači. Nástavbu naložíte u sebe, my ji
                jen vyzvedneme — méně čekání v rampě, rychlejší obrátka.
              </p>
            </div>
          </li>
          <li className="kr-item">
            <span className="kr-item__code">CMR‑03</span>
            <div className="kr-item__body">
              <h3>Dokládky a částečné zásilky</h3>
              <p>
                Když náklad nezaplní celé auto, sdružíme ho s dalším. Platíte
                za místo, které opravdu zaberete.
              </p>
            </div>
          </li>
          <li className="kr-item">
            <span className="kr-item__code">CMR‑04</span>
            <div className="kr-item__body">
              <h3>Vytěžování zpětných tras</h3>
              <p>
                Pronájem nákladních vozidel včetně vytěžování. Auto se nevrací
                prázdné — nižší náklady i emise na kilometr.
              </p>
            </div>
          </li>
        </ol>

        <figure className="kr-figure">
          <img
            src="/section-1.webp"
            alt="Nakládka výměnné nástavby v areálu Kareka"
            width={1400}
            height={900}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Dispozice a plné využití souprav jsou naší hlavní kompetencí —
            proto míříme do řady destinací v Evropě.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — ZÁZEMÍ / DŮVĚRA */}
      <section id="zazemi" className="kr-sec kr-zazemi" aria-labelledby="kr-zazemi-title">
        <div className="kr-zazemi__grid">
          <div className="kr-zazemi__text">
            <p className="kr-kicker">Zázemí od roku, kdy začaly první trasy</p>
            <h2 id="kr-zazemi-title">Vlastní flotila, sklady a dispečink</h2>
            <p className="kr-sec__sub">
              Nejsme zprostředkovatel. Vozidla, řidiči i skladové prostory jsou
              naše — díky tomu za váš náklad ručíme od nakládky až po vykládku.
            </p>

            <div className="kr-facts">
              <div className="kr-fact">
                <span className="kr-fact__n">2</span>
                <span className="kr-fact__l">skladové areály — Ústí nad Labem a Pardubice</span>
              </div>
              <div className="kr-fact">
                <span className="kr-fact__n">SAP</span>
                <span className="kr-fact__l">řízení toku zboží a sledování zásilek</span>
              </div>
              <div className="kr-fact">
                <span className="kr-fact__n">EU</span>
                <span className="kr-fact__l">mezinárodní přepravní logistika napříč Evropou</span>
              </div>
            </div>

            <div id="kontakt" className="kr-contact">
              <p className="kr-contact__lead">Máte náklad k odvozu?</p>
              <p className="kr-contact__line">
                Pronájmy vozidel a vytěžování řeší pan Kovářík —{" "}
                <a href="tel:+420602118385">+420 602 118 385</a>.
              </p>
              <p className="kr-contact__line">
                Dispečink: <a href="tel:+420475258549">+420 475 258 549</a> ·{" "}
                <a href="mailto:info@kareka.cz">info@kareka.cz</a>
              </p>
              <p className="kr-contact__addr">
                Kareka, spol. s r.o., Na Luhách 1254/5, 400 01 Ústí nad Labem
              </p>
            </div>
          </div>

          <figure className="kr-zazemi__fig">
            <img
              src="/section-2.webp"
              alt="Skladové a odbavovací zázemí Kareka v Ústí nad Labem"
              width={1200}
              height={1400}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
