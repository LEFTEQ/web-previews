import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="site">
      {/* HERO — postaveno na řemesle: obnova památek v historických jádrech */}
      <header className="hero">
        <img className="hero__img" src="/hero.webp" alt="Rekonstruovaný historický objekt realizovaný firmou Loučka Pardubice" />
        <div className="hero__scrim" aria-hidden="true" />

        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#top">
            <span className="wordmark__name">Loučka</span>
            <span className="wordmark__place">Pardubice</span>
          </a>
          <ul className="nav__links">
            <li><a href="#zamereni">Zaměření</a></li>
            <li><a href="#realizace">Realizace</a></li>
            <li><a href="#firma">O firmě</a></li>
          </ul>
        </nav>

        <div className="hero__body">
          <p className="hero__eyebrow">Stavební firma · Pardubice · od roku 1991</p>
          <h1 className="hero__title">
            Stavíme tak, aby to<br />
            <span className="hero__title--em">přečkalo staletí.</span>
          </h1>
          <p className="hero__lede">
            Opravy a rekonstrukce památkových objektů v historických jádrech měst
            východních Čech. Vlastní truhlářská, zámečnická i klempířská dílna,
            řemeslníci s dlouholetou praxí a přísné dodržování technologických postupů.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#zamereni">Co pro vás postavíme</a>
            <a className="btn btn--ghost" href="#realizace">Prohlédnout realizace</a>
          </div>
        </div>

        <dl className="hero__facts">
          <div>
            <dt>Založeno</dt>
            <dd>1991</dd>
          </div>
          <div>
            <dt>Region</dt>
            <dd>východní Čechy</dd>
          </div>
          <div>
            <dt>Vlastní dílny</dt>
            <dd>4 řemesla</dd>
          </div>
        </dl>
      </header>

      {/* SEKCE 1 — Zaměření: dvě specializace + vlastní dílny */}
      <section id="zamereni" className="focus" aria-labelledby="focus-title">
        <div className="focus__head">
          <p className="eyebrow">Zaměření firmy</p>
          <h2 id="focus-title" className="section-title">
            Dvě věci, které umíme líp než objem
          </h2>
          <p className="section-lede">
            Vědomě dáváme přednost kvalitě práce před kvantitou. Naší doménou je
            historie — a stavby, které se v regionu stanou dominantou.
          </p>
        </div>

        <ol className="specialties">
          <li className="spec">
            <span className="spec__no">01</span>
            <h3 className="spec__title">Památky &amp; rekonstrukce</h3>
            <p className="spec__text">
              Obnova a rekonstrukce kulturních památek. Máme bohaté zkušenosti se
              stavbami v historických jádrech měst, kde se počítá každý detail
              a každý původní materiál.
            </p>
          </li>
          <li className="spec">
            <span className="spec__no">02</span>
            <h3 className="spec__title">Nové dominanty</h3>
            <p className="spec__text">
              Realizace objektů, které se svým významem a architektonickým
              ztvárněním řadí mezi dominanty východočeského regionu.
            </p>
          </li>
        </ol>

        <figure className="focus__figure">
          <img src="/section-1.webp" alt="Řemeslná práce na obnově historického objektu" />
          <figcaption>
            <span className="focus__figlabel">Vlastní dílny pod jednou střechou</span>
            <ul className="workshops">
              <li>Truhlářská</li>
              <li>Zámečnická</li>
              <li>Klempířská</li>
              <li>ÚT &amp; vodoinstalace</li>
            </ul>
            <p>
              Kompletně vybavené tak, abychom zvládli i náročné dodávky pro
              památkové objekty. V restaurátorství trvale spolupracujeme
              s dodavateli uznávanými u nás i v zahraničí.
            </p>
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — Důvěra: lidé, přístup, identifikace */}
      <section id="firma" className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__col">
            <p className="eyebrow eyebrow--light">Proč nám lidé svěří stavbu</p>
            <h2 id="trust-title" className="section-title section-title--light">
              Silná střední firma s řemeslem v základech
            </h2>
            <p className="trust__lede">
              LOUČKA Pardubice s.r.o. vznikla v roce 1991 s jasným cílem — pružná
              organizace práce, efektivní řízení a stavby předané bez závad a
              reklamací. Termíny a smlouvy držíme, protože na tom stojí naše
              pozice na trhu.
            </p>

            <div id="realizace" className="trust__quotes">
              <blockquote className="tq">
                <p>„Zaměstnáváme velkou skupinu osvědčených řemeslníků s dlouholetými zkušenostmi a doplňujeme je o mladé pracovníky.“</p>
                <cite>Struktura pracovních sil</cite>
              </blockquote>
              <blockquote className="tq">
                <p>„Důkladná znalost materiálů a osvědčené postupy — s prostorem pro nové technologie ve stavební praxi.“</p>
                <cite>Náš přístup k práci</cite>
              </blockquote>
            </div>
          </div>

          <aside className="idcard" aria-label="Identifikace společnosti">
            <img src="/section-2.webp" alt="Dokončená realizace stavební firmy Loučka Pardubice" className="idcard__img" />
            <div className="idcard__body">
              <p className="idcard__label">Identifikace společnosti</p>
              <p className="idcard__name">LOUČKA Pardubice s.&nbsp;r.&nbsp;o.</p>
              <dl className="idcard__rows">
                <div><dt>IČ</dt><dd>45537453</dd></div>
                <div><dt>Sídlo</dt><dd>Legionářská 573<br />533 51 Pardubice&nbsp;–&nbsp;Rosice</dd></div>
                <div><dt>Region</dt><dd>východní Čechy</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
