import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "I",
      nazev: "Kremace s obřadem",
      popis:
        "Rozloučení v obřadní síni s hudbou, řečí a květinami. Provedeme vás výběrem síně, termínu i podoby obřadu podle přání zesnulého i rodiny.",
    },
    {
      cislo: "II",
      nazev: "Kremace bez obřadu",
      popis:
        "Tichá varianta bez ceremonie. Vyřídíme vše potřebné a urnu předáme rodině nebo uložíme podle vašeho rozhodnutí — s plnou péčí a beze spěchu.",
    },
    {
      cislo: "III",
      nazev: "Pohřeb do země",
      popis:
        "Klasické uložení do hrobu na brněnských i okolních hřbitovech. Zajistíme rakev, výkop, obřad u hrobu i veškerou administrativu.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Pohřebnictví Nostalgie, úvodní stránka">
          <span className="wordmark__mark">Nostalgie</span>
          <span className="wordmark__sub">pohřební služba · Brno</span>
        </a>
        <a className="topbar__tel" href="tel:+420602891347">
          <span className="topbar__tel-label">Nonstop dispečink</span>
          <span className="topbar__tel-num">602 891 347</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Ztišený les za soumraku — atmosféra rozloučení a vzpomínky"
        />
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Od roku 1996 v Brně</p>
          <h1 id="hero-nadpis" className="hero__title">
            Doprovodíme vás<br />
            <em>krokem, který</em><br />
            nejde odkládat.
          </h1>
          <p className="hero__lead">
            Když odejde někdo blízký, není čas na hledání. Zvedneme telefon
            kdykoli — ve dne i v noci — a od první chvíle převezmeme starosti,
            abyste měli prostor na to podstatné: být spolu a vzpomínat.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420602891347">
              Zavolat dispečink
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Jak vám pomůžeme
            </a>
          </div>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Tři cesty rozloučení</p>
          <h2 id="sluzby-nadpis" className="section-head__title">
            Vyberete podle svého — my zařídíme zbytek.
          </h2>
          <p className="section-head__note">
            Ať zvolíte kteroukoli, jednáme s úřady, matrikou i hřbitovní správou
            za vás. Ceny řekneme dopředu a bez příplatků, které byste čekali až na konci.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
            </li>
          ))}
        </ol>

        <div className="sluzby__foot">
          <img
            className="sluzby__img"
            src="/section-1.webp"
            alt="Obřadní síň připravená k rozloučení — svíce a květinová výzdoba"
          />
          <div className="sluzby__foot-text">
            <p className="kicker">Nové obřadní síně</p>
            <p>
              Rozloučit se můžete v naší nové síni v Modřicích (Chrlická 661)
              nebo v moderním krematoriu v Hustopečích. Provedeme vás oběma
              a pomůžeme vybrat prostor, který sedne vaší rodině.
            </p>
            <a className="link-underline" href="tel:+420602891347">
              Domluvit prohlídku síně
            </a>
          </div>
        </div>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__grid">
          <div className="onas__media">
            <img
              className="onas__img"
              src="/section-2.webp"
              alt="Klidné zákoutí s květinami — pieta a vzpomínka"
            />
          </div>
          <div className="onas__body">
            <p className="section-head__eyebrow">Proč Nostalgie</p>
            <h2 id="onas-nadpis" className="onas__title">
              Nehledejme jen slzy —<br />vzpomínejme na to dobré.
            </h2>
            <p className="onas__lead">
              Konec života blízkého člověka zasáhne každého z nás. Bolest
              rozloučení nelze zmírnit slovy. Můžeme ale sejmout z vašich ramen
              vše, co obnáší poslední cesta — s citem, tichem a bez zbytečného
              spěchu.
            </p>

            <dl className="facts">
              <div className="fact">
                <dt className="fact__label">K dispozici</dt>
                <dd className="fact__value">Nonstop, i o svátcích</dd>
              </div>
              <div className="fact">
                <dt className="fact__label">Odvoz zesnulých</dt>
                <dd className="fact__value">Brno a celé okolí</dd>
              </div>
              <div className="fact">
                <dt className="fact__label">Vlastní krematorium</dt>
                <dd className="fact__value">Hustopeče</dd>
              </div>
            </dl>

            <address className="kontakt">
              <p className="kontakt__line">
                Pohřebnictví NOSTALGIE s.r.o.
              </p>
              <p className="kontakt__line kontakt__line--muted">
                náměstí 28. dubna 238/25, 635 00 Brno
              </p>
              <p className="kontakt__row">
                <a href="tel:+420602891347">602 891 347</a>
                <span aria-hidden="true">·</span>
                <a href="mailto:dispecink@nostalgie.cz">dispecink@nostalgie.cz</a>
              </p>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
