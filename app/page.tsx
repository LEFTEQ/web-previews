import React from "react";

const listings = [
  {
    kod: "BYT-2+1",
    typ: "Byt 2+1, Ostrava-Poruba",
    plocha: "58 m²",
    stav: "osobní vlastnictví",
    cena: "2 690 000",
    jednotka: "Kč",
    stav_prodej: "Na prodej",
  },
  {
    kod: "KOM-110",
    typ: "Obchodní prostor, centrum",
    plocha: "110 m²",
    stav: "pronájem",
    cena: "12 000",
    jednotka: "Kč/měs",
    stav_prodej: "K pronájmu",
  },
  {
    kod: "POZ-5340",
    typ: "Stavební pozemek, okraj obce",
    plocha: "5 340 m²",
    stav: "osobní vlastnictví",
    cena: "13 500 000",
    jednotka: "Kč",
    stav_prodej: "Na prodej",
  },
];

const kroky = [
  {
    c: "01",
    nazev: "Nacenění zdarma",
    text: "Přijedeme k vám, obhlédneme nemovitost a řekneme reálnou cenu podle prodejů ve vaší lokalitě. Bez závazku, bez poplatku.",
  },
  {
    c: "02",
    nazev: "Fotky, které prodávají",
    text: "Profesionální nafocení a půdorys. Kvalitní fotky obhájí cenu a přivedou víc vážných zájemců k prohlídce.",
  },
  {
    c: "03",
    nazev: "Prodej i financování",
    text: "Vyjednáme, ohlídáme smlouvy a katastr. Díky partnerství s Flex IN zafinancujeme téměř každou nemovitost.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="TB Reality Ostrava, úvod">
          <span className="wordmark__tb">TB</span>
          <span className="wordmark__word">REALITY</span>
          <span className="wordmark__loc">Ostrava</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#jak">Jak prodáváme</a>
          <a href="#o-nas">O nás</a>
          <a className="nav__cta" href="tel:+420776406306">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Panorama ostravských domů a bytů, ve kterých TB Reality zprostředkovává prodej a pronájem"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>
        <div className="hero__grid">
          <p className="hero__eyebrow">Realitní kancelář · Moravskoslezský kraj</p>
          <h1 className="hero__title">
            Prodáme váš byt
            <span className="hero__title-accent"> v&nbsp;Ostravě</span>
            <span className="hero__title-line">za férovou cenu.</span>
          </h1>
          <p className="hero__lead">
            Vracíme realitám důvěru. Řekneme vám reálnou cenu, nafotíme
            nemovitost tak, aby prodala, a provedeme vás celým prodejem —
            od prohlídky až po katastr.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#nabidka">Chci prodat nemovitost</a>
            <a className="btn btn--ghost" href="#nabidka">Prohlédnout nabídku</a>
          </div>
          <dl className="hero__facts">
            <div className="fact">
              <dt>Nacenění</dt>
              <dd>zdarma</dd>
            </div>
            <div className="fact">
              <dt>Odměna za TIP</dt>
              <dd>od 4 000 Kč</dd>
            </div>
            <div className="fact">
              <dt>Financování</dt>
              <dd>přes Flex IN</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="listings" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="section-head__eyebrow">Výběr z nabídky</p>
          <h2 id="nabidka-h" className="section-head__title">
            Byty, prostory a pozemky, které právě zprostředkováváme
          </h2>
          <p className="section-head__note">
            Vše prochází osobní prohlídkou makléře. Kompletní nabídku a
            rozšířené hledání vám pošleme na míru.
          </p>
        </div>

        <div className="cards">
          {listings.map((l) => (
            <article className="card" key={l.kod}>
              <div className="card__top">
                <span className="card__tag">{l.stav_prodej}</span>
                <span className="card__code">{l.kod}</span>
              </div>
              <h3 className="card__title">{l.typ}</h3>
              <dl className="card__meta">
                <div>
                  <dt>Plocha</dt>
                  <dd>{l.plocha}</dd>
                </div>
                <div>
                  <dt>Vlastnictví</dt>
                  <dd>{l.stav}</dd>
                </div>
              </dl>
              <p className="card__price">
                <span className="card__price-num">{l.cena}</span>
                <span className="card__price-unit">{l.jednotka}</span>
              </p>
              <a className="card__link" href="tel:+420776406306">
                Domluvit prohlídku
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>

        <figure className="listings__photo">
          <img
            src="/section-1.webp"
            alt="Nafocený interiér nabízené nemovitosti připravený k prezentaci zájemcům"
          />
          <figcaption>
            „Dodáme šťávu vaší nemovitosti.“ Profesionální fotky obhájí cenu
            a přivedou víc vážných zájemců.
          </figcaption>
        </figure>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="onas-h">
        <div className="trust__inner">
          <div className="trust__text">
            <p className="section-head__eyebrow">O nás</p>
            <h2 id="onas-h" className="trust__title">
              Realitám chceme vrátit důvěru a férovost.
            </h2>
            <p className="trust__lead">
              TB Reality vznikla z finančně poradenské společnosti Flex IN.
              Díky tomu dokážeme prodej propojit s financováním — a
              zafinancovat téměř každou nemovitost. Přízeň klientů jsme
              si získali hlavně profesionalitou našich makléřů.
            </p>

            <ol className="steps" id="jak">
              {kroky.map((k) => (
                <li className="step" key={k.c}>
                  <span className="step__num">{k.c}</span>
                  <div className="step__body">
                    <h3 className="step__title">{k.nazev}</h3>
                    <p className="step__text">{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="trust__contact">
              <a className="btn btn--solid" href="tel:+420776406306">
                Zavolat 776 406 306
              </a>
              <a className="btn btn--ghost" href="mailto:info@tbreality.cz">
                info@tbreality.cz
              </a>
            </div>
          </div>

          <figure className="trust__photo">
            <img
              src="/section-2.webp"
              alt="Makléř TB Reality při osobní prohlídce nemovitosti s klientem v Ostravě"
            />
            <figcaption>
              Osobní přístup makléře od prvního nacenění po podpis na katastru.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
