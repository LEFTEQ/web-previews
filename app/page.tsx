import type { CSSProperties } from "react";

function Drop({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`bc-drop ${className}`} />;
}

export default function Page() {
  const heroDelay = (d: number): CSSProperties => ({ animationDelay: `${d}ms` });

  return (
    <div className="bc">
      <header className="bc-nav">
        <a href="#top" className="bc-wordmark" aria-label="Bistro Cobliha, domovská stránka">
          <span className="bc-wordmark-kicker">Bistro · Catering · Dorty</span>
          <span className="bc-wordmark-name">Cobliha</span>
        </a>
        <nav className="bc-nav-links" aria-label="Hlavní navigace">
          <a href="#bistro">Bistro</a>
          <a href="#catering">Catering</a>
          <a href="#dorty">Dorty</a>
          <a href="#rodina">O nás</a>
        </nav>
        <a className="bc-call" href="tel:+420605266406">
          <span className="bc-call-label">Rezervovat</span>
          <span className="bc-call-num">605 266 406</span>
        </a>
      </header>

      <main id="top">
        <section className="bc-hero" aria-labelledby="bc-hero-title">
          <img
            className="bc-hero-img"
            src="/hero.webp"
            alt="Čerstvě připravené jídlo z Bistra Cobliha"
          />
          <div className="bc-hero-scrim" aria-hidden="true" />
          <div className="bc-hero-inner">
            <p className="bc-eyebrow bc-hero-in" style={heroDelay(0)}>
              <Drop /> Panská 2 · České Budějovice
            </p>
            <h1 id="bc-hero-title" className="bc-hero-title">
              <span className="bc-hero-in" style={heroDelay(90)}>Nic, co</span>{" "}
              <span className="bc-hero-in bc-italic" style={heroDelay(180)}>nechutná</span>{" "}
              <span className="bc-hero-in" style={heroDelay(270)}>nám,</span>{" "}
              <span className="bc-hero-in" style={heroDelay(360)}>vám</span>{" "}
              <span className="bc-hero-in" style={heroDelay(450)}>nenabídneme.</span>
            </h1>
            <p className="bc-hero-lede bc-hero-in" style={heroDelay(560)}>
              Rodinné bistro, catering a zakázkové dorty. Každý všední den vaříme
              čerstvé obědy, v pátek grilujeme steaky, o víkendech chystáme
              svatby a dorty na míru.
            </p>
            <div className="bc-hero-cta bc-hero-in" style={heroDelay(660)}>
              <a className="bc-btn bc-btn-jam" href="tel:+420605266406">
                Zavolat a rezervovat
              </a>
              <a className="bc-btn bc-btn-ghost" href="#bistro">
                Co dnes vaříme
              </a>
            </div>
          </div>
        </section>

        <section className="bc-week" id="tyden" aria-labelledby="bc-week-title">
          <div className="bc-wrap">
            <div className="bc-section-head bc-section-head--light">
              <p className="bc-eyebrow bc-eyebrow--light"><Drop /> Náš týden</p>
              <h2 id="bc-week-title" className="bc-h2">
                Jeden podnik, tři různé týdny
              </h2>
            </div>

            <ol className="bc-ribbon">
              <li className="bc-ribbon-row">
                <span className="bc-ribbon-day">Po — Čt</span>
                <span className="bc-ribbon-act">Polední menu</span>
                <span className="bc-ribbon-time">11.00 – 14.00</span>
              </li>
              <li className="bc-ribbon-row bc-ribbon-row--star">
                <span className="bc-ribbon-day">Pátek</span>
                <span className="bc-ribbon-act">
                  Obědy <em>a večer steaky z grilu</em>
                </span>
                <span className="bc-ribbon-time">11–14 · 17–22</span>
              </li>
              <li className="bc-ribbon-row">
                <span className="bc-ribbon-day">So — Ne</span>
                <span className="bc-ribbon-act">Svatby, catering a dorty</span>
                <span className="bc-ribbon-time">na objednávku</span>
              </li>
            </ol>

            <div className="bc-cards">
              <article className="bc-card" id="bistro">
                <p className="bc-card-tag">Ve všední dny</p>
                <h3 className="bc-card-title">Bistro</h3>
                <p className="bc-card-text">
                  Jednoduchá nabídka, maximální čerstvost surovin a rychlá
                  příprava. Obědy každý všední den, v pátek navíc steakové
                  večeře. Pro skupiny od 15 osob otevřeme i o víkendu.
                </p>
                <a className="bc-card-phone" href="tel:+420605266406">
                  Rezervace <strong>605 266 406</strong>
                </a>
              </article>

              <article className="bc-card" id="catering">
                <p className="bc-card-tag">O víkendech</p>
                <h3 className="bc-card-title">Catering</h3>
                <p className="bc-card-text">
                  Svatby, večírky, oslavy, konference i firemní akce. Na prvním
                  místě je pro nás špičková kvalita a čerstvost všech surovin —
                  domluvíme se na míru vaší akci.
                </p>
                <a className="bc-card-phone" href="tel:+420605266406">
                  Radek <strong>605 266 406</strong>
                </a>
              </article>

              <article className="bc-card" id="dorty">
                <p className="bc-card-tag">Na objednávku</p>
                <h3 className="bc-card-title">Dorty</h3>
                <p className="bc-card-text">
                  Zakázková cukrářská výroba — narozeninové, dětské a svatební
                  dorty i sladké bary. Řekněte nám, co slavíte, a zbytek
                  vymyslíme společně.
                </p>
                <a className="bc-card-phone" href="tel:+420731664787">
                  Gábina <strong>731 664 787</strong>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="bc-about" id="rodina" aria-labelledby="bc-about-title">
          <div className="bc-wrap bc-about-grid">
            <div className="bc-about-media">
              <img
                src="/section-1.webp"
                alt="Prostředí a jídlo v Bistru Cobliha"
                className="bc-about-img bc-about-img--a"
              />
              <img
                src="/section-2.webp"
                alt="Zakázkový dort z cukrářské výroby Bistra Cobliha"
                className="bc-about-img bc-about-img--b"
              />
            </div>

            <div className="bc-about-text">
              <p className="bc-eyebrow"><Drop /> Jsme rodinný podnik</p>
              <h2 id="bc-about-title" className="bc-h2">
                Radek, Gábina, Kačka a David
              </h2>
              <p className="bc-lead">
                Vaříme spolu jako rodina — Radek s manželkou Gábinou, dcerou
                Kačkou a švagrem Davidem. Ve všední dny točíme obědy, o víkendech
                se věnujeme svatbám, cateringu a cukrářské výrobě. Máme rádi
                dobré jídlo a poznáte to na každém talíři.
              </p>

              <div className="bc-hours" id="kontakt">
                <h3 className="bc-hours-title">Otevírací doba</h3>
                <dl className="bc-hours-list">
                  <div className="bc-hours-row">
                    <dt>Pondělí</dt>
                    <dd>11.00 – 14.00</dd>
                  </div>
                  <div className="bc-hours-row">
                    <dt>Úterý</dt>
                    <dd>11.00 – 14.00</dd>
                  </div>
                  <div className="bc-hours-row">
                    <dt>Středa</dt>
                    <dd>11.00 – 14.00</dd>
                  </div>
                  <div className="bc-hours-row">
                    <dt>Čtvrtek</dt>
                    <dd>11.00 – 14.00</dd>
                  </div>
                  <div className="bc-hours-row bc-hours-row--star">
                    <dt>Pátek</dt>
                    <dd>11.00 – 14.00 · 17.00 – 22.00</dd>
                  </div>
                  <div className="bc-hours-row bc-hours-row--muted">
                    <dt>So — Ne</dt>
                    <dd>svatby a akce na objednávku</dd>
                  </div>
                </dl>

                <p className="bc-notice">
                  <Drop /> V hlavní svatební sezóně (červen–srpen) se otevírací
                  doba občas mění. Než k nám vyrazíte, radši nám prosím zavolejte.
                </p>

                <div className="bc-address">
                  <p>
                    <strong>Bistro Cobliha</strong>
                    <br />
                    Panská 2, 370 01 České Budějovice
                  </p>
                  <a className="bc-btn bc-btn-jam bc-btn-sm" href="tel:+420605266406">
                    Skupinová rezervace: 605 266 406
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
