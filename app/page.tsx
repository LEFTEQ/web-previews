import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      {/* ——— HERO ——— */}
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="Kamenosochařství Sedlák, úvod">
          <span className="wordmark__mark" aria-hidden="true">S</span>
          <span className="wordmark__text">
            <span className="wordmark__name">Sedlák</span>
            <span className="wordmark__sub">kamenosochařství · Brno</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#prace">Práce</a>
          <a href="#pomniky">Pomníky</a>
          <a href="#o-nas">O nás</a>
          <a className="topnav__cta" href="tel:+420603515098">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Leštěný žulový pomník s ručně sekaným zlaceným písmem, práce brněnského kamenosochařství Sedlák"
            width={1600}
            height={2000}
          />
          <span className="hero__grain" aria-hidden="true" />
        </div>

        <div className="hero__text">
          <p className="hero__eyebrow">Na Ústředním hřbitově v Brně od roku 1992</p>
          <h1 className="hero__title">
            <span className="hero__line">Žula, která</span>
            <span className="hero__line hero__line--em">unese jméno</span>
            <span className="hero__line">na desítky let.</span>
          </h1>
          <p className="hero__lead">
            Vyrábíme a renovujeme pomníky, jednohroby a dvojhroby z leštěné žuly.
            Písmo sekáme, zlatíme i stříbříme ručně — přímo v dílně u brány hřbitova,
            kde si můžete kámen prohlédnout a osahat.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420603515098">Zavolat 603 515 098</a>
            <a className="btn btn--ghost" href="#prace">Prohlédnout práce</a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Dílna</dt>
              <dd>Vídeňská 96, areál Ústředního hřbitova</dd>
            </div>
            <div>
              <dt>Materiál</dt>
              <dd>leštěná žula z celého světa</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ——— SEKCE 1: PRÁCE / SLUŽBY ——— */}
      <section className="work" id="prace" aria-labelledby="work-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Co pro Vás uděláme</p>
          <h2 id="work-title" className="section-head__title">Od nového hrobu po opravu starého písma</h2>
          <p className="section-head__note">
            Tvary desek i rozměry pomníků kreslíme na míru podle Vašeho přání.
            Níže to nejčastější — na cokoliv dalšího se stačí zeptat.
          </p>
        </div>

        <div className="work__grid" id="pomniky">
          <article className="card card--wide">
            <img
              className="card__img"
              src="/section-1.webp"
              alt="Detail leštěné černé žuly se sekaným zlaceným nápisem na pomníku"
              width={1200}
              height={800}
            />
            <div className="card__body">
              <p className="card__index">Pomníky</p>
              <h3 className="card__title">Nové pomníky z kvalitní žuly</h3>
              <p className="card__text">
                Rozměry a tvary nápisových desek vyrábíme na přání. Pomůžeme vybrat
                kámen, tvar i písmo tak, aby k sobě seděly. K pomníku dodáme vázy a
                svítilny — zlacené, nerezové nebo z leštěné žuly v barvě hrobu.
              </p>
            </div>
          </article>

          <ul className="servlist">
            <li><span className="servlist__k">01</span>Jednohroby z leštěné žuly, desky řezané a leštěné do tvaru</li>
            <li><span className="servlist__k">02</span>Dvojhroby — široká paleta tvarů a materiálů</li>
            <li><span className="servlist__k">03</span>Urnové pomníky a zákrytové (krycí) desky</li>
            <li><span className="servlist__k">04</span>Písmo sekané, zlacené i stříbřené, bílé nebo černé</li>
            <li><span className="servlist__k">05</span>Fotokeramika černobílá i barevná, ruční gravírované portréty</li>
            <li><span className="servlist__k">06</span>Renovace a čištění starých hrobů — mechanicky i chemicky</li>
          </ul>
        </div>

        <details className="more">
          <summary>A také mimo hřbitov — kámen do interiéru</summary>
          <p>
            Vyrábíme žulové a mramorové parapety, dlažby a obklady, kuchyňské a
            barové desky, kamenné schody a jejich opravy i firemní kamenné cedule.
            Řekněte nám, co potřebujete, a připravíme nezávaznou nabídku.
          </p>
        </details>
      </section>

      {/* ——— SEKCE 2: O NÁS / DŮVĚRA ——— */}
      <section className="about" id="o-nas" aria-labelledby="about-title">
        <div className="about__media">
          <img
            className="about__img"
            src="/section-2.webp"
            alt="Ručně gravírovaný motiv v žule — práce kamenosochařství Sedlák v Brně"
            width={1200}
            height={1400}
          />
        </div>
        <div className="about__text">
          <p className="section-head__eyebrow">O nás</p>
          <h2 id="about-title" className="about__title">
            Zavedené kamenictví přímo u brány Ústředního hřbitova
          </h2>
          <p className="about__lead">
            Kamenosochařství Sedlák je na trhu od roku 1992. Zákazníkům z Brna a okolí
            děláme převážně hřbitovní architekturu a všechno, co k ní patří. Sídlíme
            přímo na hřbitově — přijďte, ukážeme Vám vzorky a vše na místě probereme.
          </p>

          <ul className="pillars">
            <li>
              <span className="pillars__year">1992</span>
              <span className="pillars__label">rok, od kterého sekáme kámen v Brně</span>
            </li>
            <li>
              <span className="pillars__year">na místě</span>
              <span className="pillars__label">dílna i prodejna v areálu hřbitova</span>
            </li>
            <li>
              <span className="pillars__year">nezávazně</span>
              <span className="pillars__label">nabídku připravíme bez závazku</span>
            </li>
          </ul>

          <address className="contact">
            <div className="contact__row">
              <span className="contact__k">Kde nás najdete</span>
              <span>Brno, Vídeňská 96 — areál Ústředního hřbitova</span>
            </div>
            <div className="contact__row">
              <span className="contact__k">Telefon</span>
              <a href="tel:+420603515098">603 515 098</a>
            </div>
            <div className="contact__row">
              <span className="contact__k">E‑mail</span>
              <a href="mailto:seha@centrum.cz">seha@centrum.cz</a>
            </div>
          </address>
        </div>
      </section>
    </main>
  );
}
