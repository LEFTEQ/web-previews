export default function Page() {
  return (
    <main className="dc">
      {/* ===== HERO ===== */}
      <header className="dc-hero">
        <nav className="dc-nav" aria-label="Hlavní navigace">
          <a className="dc-logo" href="#" aria-label="Decadenti — výroba reklam">
            <span className="dc-logo__mark" aria-hidden="true">D</span>
            <span className="dc-logo__word">DECADENTI</span>
          </a>
          <a className="dc-nav__tel" href="tel:+420603251430">603 251 430</a>
        </nav>

        <div className="dc-hero__inner">
          <p className="dc-hero__eyebrow">Výroba reklam · Hradec Králové</p>

          <h1 className="dc-hero__title">
            <span className="dc-hero__line dc-hero__line--1">Polepíme</span>
            <span className="dc-hero__line dc-hero__line--2">
              cokoliv<span className="dc-hero__dot" aria-hidden="true">.</span>
            </span>
            <span className="dc-hero__line dc-hero__line--3">
              Od dodávky <em>po&nbsp;letadlo</em>
            </span>
          </h1>

          <p className="dc-hero__lead">
            Řežeme fólie, tiskneme velké formáty a oblékáme firmy do vlastního
            textilu. Dvacet let signmakingu z provozovny na Pardubické — pro
            firmy z Hradce, Pardubic a celých východních Čech.
          </p>

          <div className="dc-hero__cta">
            <a className="dc-btn dc-btn--solid" href="tel:+420603251430">
              Zavolat 603 251 430
            </a>
            <a className="dc-btn dc-btn--ghost" href="mailto:decadenti@decadenti.cz">
              Napsat poptávku
            </a>
          </div>
        </div>

        {/* Signature: řezací plotr — vodicí dráha nože přes celé hero */}
        <svg
          className="dc-plotter"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="dc-plotter__cut"
            d="M-10 170 L180 170 L230 60 L340 60 L390 170 L560 170 L600 110 L760 110 L800 170 L1000 170 L1050 90 L1210 90"
          />
          <path
            className="dc-plotter__peel"
            d="M-10 178 L180 178 L230 68 L340 68 L390 178 L560 178 L600 118 L760 118 L800 178 L1000 178 L1050 98 L1210 98"
          />
        </svg>

        <div className="dc-hero__ticks" aria-hidden="true">
          <span>0 cm</span><span>50</span><span>100</span><span>150</span><span>200</span>
        </div>
      </header>

      {/* ===== SEKCE 1: CO VYROBÍME ===== */}
      <section className="dc-section dc-services" aria-labelledby="sluzby-h">
        <div className="dc-section__head">
          <h2 id="sluzby-h" className="dc-section__title">Co pro vás vyrobíme</h2>
          <p className="dc-section__sub">
            Návrh, výrobu i montáž děláme sami. Vy řeknete co, my řekneme kdy a za kolik.
          </p>
        </div>

        <div className="dc-services__grid">
          <article className="dc-card">
            <p className="dc-card__tag">Fólie · polepy</p>
            <h3 className="dc-card__title">Polepy aut a výloh</h3>
            <p className="dc-card__text">
              Dodávka, autobus, výloha na pěší zóně — i celý letoun. Řezaná grafika
              nebo celoplošný tisk, lepíme u nás na provozovně nebo u vás na místě.
            </p>
            <p className="dc-card__note">Naposledy: polep autobusu a dvou letadel</p>
          </article>

          <article className="dc-card">
            <p className="dc-card__tag">Textil</p>
            <h3 className="dc-card__title">Firemní textil a vlajky</h3>
            <p className="dc-card__text">
              Trika, mikiny a pracovní oděvy s vaším logem — výšivka i potisk.
              K tomu prapory, vlajky a bannery, které vydrží východočeské počasí.
            </p>
            <p className="dc-card__note">Už od malých sérií pro tým</p>
          </article>

          <article className="dc-card">
            <p className="dc-card__tag">Cedule · panely</p>
            <h3 className="dc-card__title">Statická reklama</h3>
            <p className="dc-card__text">
              Cedule na fasádu, směrovky, poutače k silnici i světelná reklama.
              Deska, hliník, plexi — poradíme materiál podle místa a rozpočtu.
            </p>
            <p className="dc-card__note">Včetně montáže a povolení</p>
          </article>

          <article className="dc-card">
            <p className="dc-card__tag">Tisk · předměty</p>
            <h3 className="dc-card__title">Tiskoviny a reklamní předměty</h3>
            <p className="dc-card__text">
              Vizitky, letáky, katalogy — tiskneme s prověřenými východočeskými
              tiskárnami. A k tomu propisky, hrnky nebo dárky, které si klient nechá.
            </p>
            <p className="dc-card__note">Cenovou nabídku pošleme do 2 dnů</p>
          </article>
        </div>
      </section>

      {/* ===== SEKCE 2: PROČ DECADENTI ===== */}
      <section className="dc-section dc-trust" aria-labelledby="duvera-h">
        <div className="dc-trust__inner">
          <div className="dc-trust__lead">
            <h2 id="duvera-h" className="dc-section__title dc-section__title--light">
              Rodinná dílna,<br />ne agentura s ceníkem
            </h2>
            <p className="dc-trust__text">
              Decadenti vedou Roman a Lenka Zindulkovi. Když zavoláte, mluvíte
              rovnou s člověkem, který vaši zakázku sám řeže, tiskne nebo lepí.
              Žádný obchodník mezi vámi a výrobou.
            </p>
            <ul className="dc-trust__contacts">
              <li>
                <span className="dc-trust__who">Roman Zindulka — výroba</span>
                <a href="tel:+420608658090">608 658 090</a>
              </li>
              <li>
                <span className="dc-trust__who">Lenka Zindulková — zakázky</span>
                <a href="tel:+420603251430">603 251 430</a>
              </li>
              <li>
                <span className="dc-trust__who">E-mail</span>
                <a href="mailto:decadenti@decadenti.cz">decadenti@decadenti.cz</a>
              </li>
            </ul>
          </div>

          <div className="dc-trust__facts">
            <div className="dc-fact">
              <p className="dc-fact__big">Letadlo</p>
              <p className="dc-fact__small">
                Největší věc, kterou jsme kdy polepili. Když zvládneme trup letounu,
                zvládneme i vaši výlohu.
              </p>
            </div>
            <div className="dc-fact">
              <p className="dc-fact__big">Pardubická 861/75A</p>
              <p className="dc-fact__small">
                Provozovna v Hradci Králové 4. Zastavte se, ukážeme vám vzorky
                fólií a materiálů naživo.
              </p>
            </div>
            <div className="dc-fact">
              <p className="dc-fact__big">Od návrhu po montáž</p>
              <p className="dc-fact__small">
                Grafiku, výrobu i instalaci držíme pod jednou střechou — termín
                slíbíme jen tehdy, když ho sami udržíme.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
