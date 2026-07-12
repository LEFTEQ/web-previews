import React from "react";

export default function Page() {
  return (
    <main className="po">
      {/* HERO */}
      <header className="po-hero">
        <img
          className="po-hero__img"
          src="/hero.webp"
          alt="Loď Plaveb Olomouc na klidné hladině řeky Moravy v historickém centru"
        />
        <div className="po-hero__scrim" aria-hidden="true" />

        <nav className="po-nav" aria-label="Hlavní">
          <a className="po-wordmark" href="#">
            <span className="po-wordmark__wave" aria-hidden="true">≈</span>
            <span className="po-wordmark__text">Plavby<br />Olomouc</span>
          </a>
          <a className="po-nav__phone" href="tel:+420776857870">
            <span className="po-nav__phone-label">Volejte 9–18 h</span>
            <span className="po-nav__phone-num">776 857 870</span>
          </a>
        </nav>

        <div className="po-hero__body">
          <p className="po-hero__eyebrow">Řeka Morava · historickým centrem · 50 minut</p>
          <h1 className="po-hero__title">
            Podívejte se na&nbsp;Olomouc<br />
            <em>z&nbsp;vody.</em>
          </h1>
          <p className="po-hero__lede">
            Poznávací plavby po Moravě mezi mosty v&nbsp;srdci města — s&nbsp;výkladem
            o&nbsp;tom, jak řeka Olomouc utvářela. Přes den i&nbsp;za&nbsp;večerního světla.
          </p>
          <div className="po-hero__cta">
            <a className="po-btn po-btn--primary" href="#plavby">Chci se plavit Olomoucí</a>
            <a className="po-btn po-btn--ghost" href="#cenik">Ceník a časy</a>
          </div>
        </div>

        <p className="po-hero__mark" aria-hidden="true">Náplavka mezi mosty · 49.5938° N</p>
      </header>

      {/* SEKCE 1 — DRUHY PLAVEB */}
      <section id="plavby" className="po-trips" aria-labelledby="trips-title">
        <div className="po-trips__head">
          <p className="po-eyebrow">Co u nás poplujete</p>
          <h2 id="trips-title" className="po-h2">Jedna řeka, pět důvodů vyplout</h2>
        </div>

        <ol className="po-trips__list">
          <li className="po-trip">
            <span className="po-trip__no">01</span>
            <div className="po-trip__text">
              <h3 className="po-trip__name">Poznávací plavba</h3>
              <p className="po-trip__desc">
                Padesát minut historickým centrem s&nbsp;živým výkladem průvodce.
                Katedrála, mosty a&nbsp;náplavka z&nbsp;úhlu, který z&nbsp;chodníku neuvidíte.
              </p>
              <p className="po-trip__meta">240 Kč dospělí · 190 Kč děti, studenti, senioři</p>
            </div>
          </li>
          <li className="po-trip">
            <span className="po-trip__no">02</span>
            <div className="po-trip__text">
              <h3 className="po-trip__name">Soukromá oslava na lodi</h3>
              <p className="po-trip__desc">
                Narozeniny, výročí nebo jen večer s&nbsp;přáteli — loď jen pro vaši partu,
                termín podle vás mimo běžné časy plaveb.
              </p>
              <p className="po-trip__meta">Na objednávku · dohodneme čas i trasu</p>
            </div>
          </li>
          <li className="po-trip">
            <span className="po-trip__no">03</span>
            <div className="po-trip__text">
              <h3 className="po-trip__name">Rozlučka se svobodou</h3>
              <p className="po-trip__desc">
                Zážitek, na který se vzpomíná — ověřeno nevěstami. Loď, hudba a&nbsp;řeka
                jen pro vás a&nbsp;vaše lidi.
              </p>
              <p className="po-trip__meta">Soukromě · na míru</p>
            </div>
          </li>
          <li className="po-trip">
            <span className="po-trip__no">04</span>
            <div className="po-trip__text">
              <h3 className="po-trip__name">Školní výlet & příměstský tábor</h3>
              <p className="po-trip__desc">
                Dějepis, který děti baví — Olomouc a&nbsp;řeka Morava vyprávěné z&nbsp;paluby.
                Vhodné i&nbsp;pro příměstské tábory.
              </p>
              <p className="po-trip__meta">Skupinové ceny · min. 6 osob k vyplutí</p>
            </div>
          </li>
          <li className="po-trip">
            <span className="po-trip__no">05</span>
            <div className="po-trip__text">
              <h3 className="po-trip__name">Firemní akce & OLOŠLAP</h3>
              <p className="po-trip__desc">
                Teambuilding u&nbsp;vody, nebo se sami proplavte na šlapadlech OLOŠLAP.
                Pomalé tempo, žádný spěch.
              </p>
              <p className="po-trip__meta">Firemní i&nbsp;individuální</p>
            </div>
          </li>
        </ol>

        <figure className="po-trips__figure">
          <img
            src="/section-1.webp"
            alt="Cestující na palubě lodi během poznávací plavby Olomoucí"
          />
          <figcaption>Trasa vede historickým centrem — mezi mostem Masarykovy třídy a Komenského u Bristolu.</figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — DŮVĚRA / PRAKTICKÉ */}
      <section id="cenik" className="po-trust" aria-labelledby="trust-title">
        <div className="po-trust__grid">
          <div className="po-trust__intro">
            <p className="po-eyebrow po-eyebrow--light">Než nasednete</p>
            <h2 id="trust-title" className="po-h2 po-h2--light">
              Praktické věci, ať víte, do čeho jdete
            </h2>
            <img
              className="po-trust__img"
              src="/section-2.webp"
              alt="Večerní plavba po řece Moravě v Olomouci"
            />
          </div>

          <dl className="po-facts">
            <div className="po-fact">
              <dt>Kdy plujeme</dt>
              <dd>Út–Ne 10–18 h. Mimo tyto časy plánujeme soukromé plavby na objednávku.</dd>
            </div>
            <div className="po-fact">
              <dt>Jak dlouho</dt>
              <dd>Poznávací plavba trvá 50 minut včetně průvodcovského výkladu.</dd>
            </div>
            <div className="po-fact">
              <dt>Kolik nás musí být</dt>
              <dd>K&nbsp;vyplutí stačí 6 cestujících. Menší partu rádi spojíme s&nbsp;dalšími.</dd>
            </div>
            <div className="po-fact">
              <dt>Kde nás najdete</dt>
              <dd>Olomoucká náplavka — mezi mostem Masarykovy třídy a&nbsp;u&nbsp;Bristolu (Komenského).</dd>
            </div>
          </dl>
        </div>

        <div className="po-quotes">
          <blockquote className="po-quote">
            <p>„Absolutně nejlepší část rozlučky, moc jsme si to užily a&nbsp;budu to všude doporučovat.“</p>
            <footer>Adéla Šírová · svědkyně během rozlučky se svobodou</footer>
          </blockquote>
          <blockquote className="po-quote">
            <p>„Zajímavý výklad a&nbsp;poprvé v&nbsp;životě jsem plula po Moravě v&nbsp;Olomouci. Moc jsme si to užili.“</p>
            <footer>Petra Spáčilová · Senior klub Olomouc</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
