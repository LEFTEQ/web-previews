import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="pf">
      {/* ——— HERO: mapové pole ——— */}
      <header className="pf-hero">
        <div className="pf-hero__grid" aria-hidden="true" />
        <nav className="pf-nav" aria-label="Hlavní">
          <a className="pf-wordmark" href="#" aria-label="P.F. art, kartografické nakladatelství">
            <span className="pf-wordmark__pf">P.F.</span>
            <span className="pf-wordmark__art">art</span>
          </a>
          <ul className="pf-nav__links">
            <li><a href="#mapy">Mapy a projekty</a></li>
            <li><a href="#studio">O studiu</a></li>
            <li><a className="pf-nav__cta" href="tel:+420542211764">Zavolat do studia</a></li>
          </ul>
        </nav>

        <div className="pf-hero__inner">
          <div className="pf-hero__text">
            <p className="pf-eyebrow">
              <span className="pf-eyebrow__coord">49°12′ s. š. · 16°36′ v. d.</span>
              <span>Kartografické nakladatelství a grafické studio · Brno · od roku 1992</span>
            </p>
            <h1 className="pf-title">
              Kreslíme mapy,<br />
              podle kterých se<br />
              <em>Česko učí</em> i orientuje.
            </h1>
            <p className="pf-lead">
              Nástěnné mapy krajů, školní atlasy a firemní dárky s krajinou v pozadí. Každý
              vrstevnice, popisek i barevný stupeň připravujeme ve vlastním studiu na Veveří —
              od podkladu po tisk.
            </p>
            <div className="pf-hero__actions">
              <a className="pf-btn pf-btn--solid" href="#mapy">Prohlédnout mapové projekty</a>
              <a className="pf-btn pf-btn--ghost" href="#studio">Jak vzniká mapa</a>
            </div>
          </div>

          <figure className="pf-hero__figure">
            <img
              src="/hero.webp"
              alt="Detail nástěnné mapy z produkce P.F. art — vrstevnice, sídla a barevná výšková stupnice krajiny"
              width={900}
              height={1100}
              loading="eager"
            />
            <figcaption className="pf-hero__legend">
              <span className="pf-swatch pf-swatch--low" /> nížina
              <span className="pf-swatch pf-swatch--mid" /> pahorkatina
              <span className="pf-swatch pf-swatch--high" /> hory
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ——— SEKCE 1: co ve studiu vzniká ——— */}
      <section className="pf-section" id="mapy" aria-labelledby="mapy-h">
        <div className="pf-section__head">
          <p className="pf-kicker">Legenda studia</p>
          <h2 id="mapy-h" className="pf-h2">Čtyři měřítka, ve kterých pracujeme</h2>
          <p className="pf-section__intro">
            Od velké nástěnné mapy do třídy až po dárek, který se vejde do dlaně. Vše na
            průběžně aktualizovaných podkladech — a vše z jednoho brněnského studia.
          </p>
        </div>

        <ol className="pf-cards">
          <li className="pf-card" style={{ "--scale": "'1 : 200 000'" } as CSSProperties}>
            <span className="pf-card__no">01</span>
            <h3 className="pf-card__title">Nástěnné mapy krajů</h3>
            <p className="pf-card__desc">
              Velkoformátové mapy ČR i jednotlivých krajů na plátně či lištách. Objednáte
              přes regionální zástupce nebo v e-shopu.
            </p>
            <span className="pf-card__meta">měřítko 1 : 200 000</span>
          </li>
          <li className="pf-card">
            <span className="pf-card__no">02</span>
            <h3 className="pf-card__title">Projekty a atlasy do škol</h3>
            <p className="pf-card__desc">
              Učební mapy a atlasy pro základní i střední školy, včetně portálu
              atlasskolstvi.cz. Obsah děláme srozumitelný žákům, ne kartografům.
            </p>
            <span className="pf-card__meta">pro ZŠ a SŠ</span>
          </li>
          <li className="pf-card">
            <span className="pf-card__no">03</span>
            <h3 className="pf-card__title">Firemní dárkové předměty</h3>
            <p className="pf-card__desc">
              Praktické dárky s mapovým motivem — kalendáře, plánovací mapy, potisky.
              Kompletní grafiku i tisk řešíme u nás.
            </p>
            <span className="pf-card__meta">na míru značce</span>
          </li>
          <li className="pf-card">
            <span className="pf-card__no">04</span>
            <h3 className="pf-card__title">E-shop a Moje země</h3>
            <p className="pf-card__desc">
              Hotové mapy, atlasy a projekt Renaissance i Moje země — vše skladem
              k okamžité objednávce online.
            </p>
            <span className="pf-card__meta">skladem online</span>
          </li>
        </ol>
      </section>

      {/* ——— SEKCE 2: o studiu / důvěra ——— */}
      <section className="pf-section pf-section--about" id="studio" aria-labelledby="studio-h">
        <div className="pf-about">
          <div className="pf-about__media">
            <img
              src="/section-1.webp"
              alt="Práce ve studiu P.F. art — příprava mapového podkladu před tiskem"
              width={800}
              height={600}
              loading="lazy"
            />
            <img
              src="/section-2.webp"
              alt="Ukázka dárkových předmětů a tiskovin s mapovým motivem od P.F. art"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>

          <div className="pf-about__text">
            <p className="pf-kicker">O studiu</p>
            <h2 id="studio-h" className="pf-h2">
              Vlastní grafické studio, ne subdodavatel
            </h2>
            <p className="pf-about__lead">
              Na českém trhu jsme od roku 1992. Mapové projekty, projekty do škol i firemní
              dárky připravujeme celé u sebe — od kartografického podkladu přes grafiku až po
              tisk. Díky tomu drží každá mapa jednotný styl a vy máte jednoho partnera na
              celý projekt.
            </p>

            <dl className="pf-facts">
              <div className="pf-fact">
                <dt>Na trhu od</dt>
                <dd>1992</dd>
              </div>
              <div className="pf-fact">
                <dt>Kde tvoříme</dt>
                <dd>Brno</dd>
              </div>
              <div className="pf-fact">
                <dt>Podklady</dt>
                <dd>průběžně aktualizované</dd>
              </div>
            </dl>

            <ul className="pf-checks">
              <li>Zástupci v jednotlivých regionech — mapu objednáte i osobně.</li>
              <li>Kompletní grafika a tisk pod jednou střechou.</li>
              <li>Zkušenost s projekty pro školy i státní zakázky.</li>
            </ul>

            <a className="pf-btn pf-btn--solid" href="mailto:info@pfart.cz">
              Napsat do studia
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
