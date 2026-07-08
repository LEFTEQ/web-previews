import type { CSSProperties } from 'react';

export default function Page() {
  const dnesHodiny = [
    { den: 'Pondělí', cas: '08:00\u201320:00' },
    { den: 'Úterý', cas: '08:00\u201320:00' },
    { den: 'Středa', cas: '08:00\u201320:00' },
    { den: 'Čtvrtek', cas: '08:00\u201320:00' },
    { den: 'Pátek', cas: '08:00\u201320:00' },
    { den: 'Sobota', cas: '08:00\u201320:00' },
    { den: 'Neděle', cas: '08:00\u201320:00' },
  ];

  const sluzby = [
    {
      klic: 'péče o pleť',
      nazev: 'Rozšířená péče o pleť',
      popis: 'Ziaja, Dermacol, Aknelot, Dr. Pawpaw, Geek & Gorgeous \u2014 poradíme, co sedne právě vaší pleti.',
    },
    {
      klic: 'dekorativní',
      nazev: 'Rozšířená dekorativní kosmetika',
      popis: 'Gabriella Salvete, Miss Sporty, Rimmel London, Max Factor. Vyzkoušejte odstín přímo na místě.',
    },
    {
      klic: 'nehty',
      nazev: 'Péče o nehty',
      popis: 'Sally Hansen a Essie \u2014 laky, zpevňovače i odlakovače na jednom regálu.',
    },
    {
      klic: 'výživa',
      nazev: 'Potraviny a zdravá výživa',
      popis: 'Rozšířený sortiment Alpro a bio potravin pro každodenní nákup.',
    },
  ];

  const vybaveni = [
    'Zákaznické WC',
    'Bezbariérový přístup',
    'Přebalovací pult',
    'Scan & Go',
    'Balicí pult',
    'Wi-Fi zdarma',
    'Dětský hrací koutek',
  ];

  const okoli = [
    { adresa: 'U Kostela 3491/2', mesto: '400 01 Ústí nad Labem', km: '2,72 km', do: '21 hod.' },
    { adresa: 'Krušnohorská 3371/2', mesto: '400 11 Ústí nad Labem', km: '3,8 km', do: '20 hod.' },
    { adresa: 'Srbická 464', mesto: '415 03 Teplice', km: '10,03 km', do: '20 hod.' },
    { adresa: 'nám. Svobody 3316', mesto: '415 01 Teplice', km: '12,86 km', do: '21 hod.' },
    { adresa: 'Želetická 2277', mesto: '412 01 Litoměřice', km: '16,59 km', do: '20 hod.' },
  ];

  return (
    <main className="dm">
      <header className="dm-top">
        <div className="dm-wrap dm-top__row">
          <a className="dm-logo" href="#" aria-label="dm drogerie markt \u2014 úvod">
            <span className="dm-logo__mark">dm</span>
            <span className="dm-logo__sub">drogerie&nbsp;markt</span>
          </a>
          <p className="dm-top__place">
            <span className="dm-dot" aria-hidden="true" /> Trmice \u00b7 Ústecko
          </p>
        </div>
      </header>

      <section className="dm-hero" aria-labelledby="hero-nadpis">
        <div className="dm-hero__media">
          <img
            src="/hero.webp"
            alt="Interiér prodejny dm drogerie markt v S1 Centru Trmice s regály kosmetiky a péče"
            className="dm-hero__img"
          />
        </div>
        <div className="dm-wrap dm-hero__grid">
          <div className="dm-hero__text">
            <p className="dm-eyebrow">Prodejna \u00b7 S1 Center Trmice</p>
            <h1 id="hero-nadpis" className="dm-hero__title">
              Otevřeno<br />
              <span className="dm-hero__title--em">do 20 hod.</span>
            </h1>
            <p className="dm-hero__lead">
              Tyršova 884, Trmice u Ústí nad Labem. Krása, péče o dítě,
              zdraví i domácnost \u2014 dnes i celý týden pod jednou střechou.
            </p>
            <div className="dm-hero__cta">
              <a className="dm-btn dm-btn--primary" href="https://mapy.cz/?q=Ty%C5%A1ova%20884%20Trmice">
                Navigovat na prodejnu
              </a>
              <a className="dm-btn dm-btn--ghost" href="tel:+420475208747">
                Zavolat: 475\u00a0208\u00a0747
              </a>
            </div>
          </div>

          <aside className="dm-card" aria-label="Detaily prodejny">
            <p className="dm-card__label">Adresa</p>
            <p className="dm-card__addr">
              Tyršova 884<br />
              S1 Center Trmice<br />
              400 04 Trmice
            </p>
            <hr className="dm-card__rule" />
            <p className="dm-card__label">Tento týden</p>
            <ul className="dm-hours">
              {dnesHodiny.map((h) => (
                <li key={h.den} className="dm-hours__row">
                  <span className="dm-hours__day">{h.den}</span>
                  <span className="dm-hours__bar" aria-hidden="true">
                    <span className="dm-hours__fill" style={{ '--from': '8', '--to': '20' } as CSSProperties} />
                  </span>
                  <span className="dm-hours__time">{h.cas}</span>
                </li>
              ))}
            </ul>
            <p className="dm-card__note">Časová osa 6\u201322 h \u00b7 zelený pruh = otevřeno</p>
          </aside>
        </div>
      </section>

      <section className="dm-services" aria-labelledby="sluzby-nadpis">
        <div className="dm-wrap">
          <div className="dm-sec-head">
            <p className="dm-eyebrow">Co u nás v Trmicích navíc najdete</p>
            <h2 id="sluzby-nadpis" className="dm-sec-head__title">
              Rozšířený sortiment, ne jen běžná drogerie
            </h2>
          </div>

          <div className="dm-services__body">
            <ul className="dm-slist">
              {sluzby.map((s, i) => (
                <li key={s.klic} className="dm-slist__item">
                  <span className="dm-slist__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="dm-slist__name">{s.nazev}</h3>
                    <p className="dm-slist__desc">{s.popis}</p>
                  </div>
                </li>
              ))}
            </ul>
            <figure className="dm-services__fig">
              <img
                src="/section-1.webp"
                alt="Regál s dekorativní kosmetikou a péčí o pleť v prodejně dm"
                className="dm-fig__img"
              />
              <figcaption className="dm-fig__cap">
                Vyzkoušet odstín i vůni můžete přímo v prodejně.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="dm-trust" aria-labelledby="duvera-nadpis">
        <div className="dm-wrap dm-trust__grid">
          <figure className="dm-trust__fig">
            <img
              src="/section-2.webp"
              alt="Vstup do prodejny dm v S1 Centru Trmice, bezbariérový přístup"
              className="dm-fig__img"
            />
          </figure>
          <div className="dm-trust__text">
            <p className="dm-eyebrow">Vybavení &amp; platba</p>
            <h2 id="duvera-nadpis" className="dm-sec-head__title">
              Nakoupíte pohodlně \u2014 s dětmi i bez hotovosti
            </h2>
            <ul className="dm-tags">
              {vybaveni.map((v) => (
                <li key={v} className="dm-tag">{v}</li>
              ))}
            </ul>
            <p className="dm-trust__pay">
              Platíte hotově, kartou, active beauty body i vybranými dárkovými
              poukázkami. Sbírejte výhody s kontem Moje&nbsp;dm.
            </p>

            <div className="dm-near">
              <p className="dm-near__title">Další prodejny dm v okolí</p>
              <ul className="dm-near__list">
                {okoli.map((o) => (
                  <li key={o.adresa} className="dm-near__item">
                    <span className="dm-near__addr">
                      <strong>{o.adresa}</strong>
                      <span>{o.mesto}</span>
                    </span>
                    <span className="dm-near__meta">
                      <span className="dm-near__km">{o.km}</span>
                      <span className="dm-near__do">dnes do {o.do}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
