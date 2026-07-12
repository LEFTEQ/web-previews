import React from "react";

export default function Page() {
  return (
    <main className="gm">
      {/* ===== HERO ===== */}
      <header className="gm-hero">
        <div className="gm-hero__frame">
          <img
            className="gm-hero__img"
            src="/hero.webp"
            alt="Motocykl BMW na dílenském stojanu v servisu Gruber Motorrad v Brně"
          />
          <div className="gm-hero__scrim" aria-hidden="true" />
        </div>

        <nav className="gm-nav" aria-label="Hlavní">
          <a className="gm-wordmark" href="#top" aria-label="Gruber Motorrad, domů">
            <span className="gm-wordmark__g">G</span>
            <span className="gm-wordmark__txt">GRUBER<span className="gm-wordmark__sub">MOTORRAD</span></span>
          </a>
          <ul className="gm-nav__links">
            <li><a href="#servis">Co uděláme</a></li>
            <li><a href="#dilna">Dílna</a></li>
            <li><a className="gm-nav__cta" href="tel:+420605520432">Zavolat</a></li>
          </ul>
        </nav>

        <div className="gm-hero__body" id="top">
          <p className="gm-eyebrow">Certifikovaný BMW motoservis · Nebovidy u Brna</p>
          <h1 className="gm-hero__title">
            Vaše mašina<br />
            <span className="gm-hero__accent">pošlape jako nová.</span>
          </h1>
          <p className="gm-hero__lead">
            Originální diagnostika BMW, zápis do elektronické servisní knížky
            a záruka, o kterou nepřijdete. Malá dílna, kde na vaši motorku
            skutečně zbyde čas.
          </p>
          <div className="gm-hero__actions">
            <a className="gm-btn gm-btn--primary" href="tel:+420605520432">Objednat na servis</a>
            <a className="gm-btn gm-btn--ghost" href="#servis">Co uděláme s motorkou</a>
          </div>
        </div>

        {/* Přístrojová deska — signature prvek */}
        <div className="gm-cluster" role="group" aria-label="Údaje o dílně">
          <div className="gm-gauge">
            <span className="gm-gauge__num">24</span>
            <span className="gm-gauge__unit">hod</span>
            <span className="gm-gauge__label">ozveme se do</span>
          </div>
          <div className="gm-gauge">
            <span className="gm-gauge__num">155</span>
            <span className="gm-gauge__unit">Kč</span>
            <span className="gm-gauge__label">práce / 5 min · bez DPH</span>
          </div>
          <div className="gm-gauge gm-gauge--wide">
            <span className="gm-gauge__num">100%</span>
            <span className="gm-gauge__label">originální díly a značkové nářadí</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1 — CO UDĚLÁME ===== */}
      <section className="gm-sec gm-sec--work" id="servis">
        <div className="gm-sec__head">
          <span className="gm-tag">Co uděláme</span>
          <h2 className="gm-sec__title">Servis, který vám dokážeme na fotkách.</h2>
          <p className="gm-sec__intro">
            Každý díl, který jde k výměně, vyfotíme — abyste viděli, že bylo
            opravdu třeba ho nahradit. Co řekneme, to platí: termín i cena.
          </p>
        </div>

        <div className="gm-worklist">
          <article className="gm-work">
            <span className="gm-work__code">AW</span>
            <div className="gm-work__body">
              <h3>Servis se zápisem do knížky BMW</h3>
              <p>Originální diagnostika BMW, oficiální zápis do elektronické servisní knihy. Záruku si necháte.</p>
            </div>
            <span className="gm-work__price">1 860 Kč<span>/ hod bez DPH</span></span>
          </article>

          <article className="gm-work">
            <span className="gm-work__code">7+</span>
            <div className="gm-work__body">
              <h3>Servis bez zápisu · motorky nad 7 let</h3>
              <p>Neoriginální diagnostika za výhodnější sazbu pro starší stroje, které už BMW knížku neřeší.</p>
            </div>
            <span className="gm-work__price">1 620 Kč<span>/ hod bez DPH</span></span>
          </article>

          <article className="gm-work">
            <span className="gm-work__code">SOS</span>
            <div className="gm-work__body">
              <h3>Náprava po jiném servisu</h3>
              <p>Zůstala motorka nepojízdná po zásahu jinde? Rozebereme, najdeme příčinu, uvedeme do provozu.</p>
            </div>
            <span className="gm-work__price">155 Kč<span>/ AW bez DPH</span></span>
          </article>

          <article className="gm-work">
            <span className="gm-work__code">↺</span>
            <div className="gm-work__body">
              <h3>Přezutí pneumatik</h3>
              <p>Přezujeme na sezónu. Levněji, když gumy dodáme my — máme je hned na dílně.</p>
            </div>
            <span className="gm-work__price">840 Kč<span>/ pár, naše gumy</span></span>
          </article>

          <article className="gm-work gm-work--wide">
            <span className="gm-work__code">🚚</span>
            <div className="gm-work__body">
              <h3>Svezeme motorku k nám i zpět</h3>
              <p>Mimo sezónu (říjen–březen) do 30 km zdarma, dál 12 Kč/km. V sezóně 15 Kč/km bez DPH.</p>
            </div>
            <span className="gm-work__price">0 Kč<span>do 30 km, mimo sezónu</span></span>
          </article>
        </div>

        <figure className="gm-shot">
          <img
            src="/section-1.webp"
            alt="Detail práce na motoru BMW se značkovým nářadím v dílně Gruber Motorrad"
            loading="lazy"
          />
          <figcaption>Značkové nářadí a čistá dílna — pro nás to není detail.</figcaption>
        </figure>
      </section>

      {/* ===== SEKCE 2 — DÍLNA / DŮVĚRA ===== */}
      <section className="gm-sec gm-sec--about" id="dilna">
        <div className="gm-about">
          <figure className="gm-about__photo">
            <img
              src="/section-2.webp"
              alt="David Gruber ve své dílně Gruber Motorrad v Brně"
              loading="lazy"
            />
          </figure>

          <div className="gm-about__text">
            <span className="gm-tag gm-tag--light">Kdo na tom dělá</span>
            <h2 className="gm-sec__title gm-sec__title--light">
              David Gruber. Motorky od třinácti, profesně od maturity.
            </h2>
            <p>
              Prošel jsem velké autorizované servisy a pořád hledal způsob, jak
              dělat práci trochu jinak — blíž zákazníkovi. Tak vznikla malá
              dílna v Nebovidech u Brna, kde na vaši motorku obklopuji kolegy,
              kteří to cítí stejně.
            </p>
            <ul className="gm-promise">
              <li>Platíme oficiální BMW podporu — o záruku nepřijdete.</li>
              <li>Zvládneme i náročnou opravu, ne jen výměnu oleje.</li>
              <li>Individuální přístup a férová cena, žádná anonymní přepážka.</li>
            </ul>
            <a className="gm-btn gm-btn--primary" href="mailto:david.gruber@gruber-moto.cz">Napsat Davidovi</a>
            <p className="gm-hours">
              Provozní doba individuální, po telefonické dohodě ·
              <a href="tel:+420605520432"> +420 605 520 432</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
