import React from 'react';

const divize = [
  {
    kod: 'D.01',
    nazev: 'Pozemní stavby',
    popis: 'Generální dodávky staveb, novostavby i rekonstrukce od základů po kolaudaci.',
    body: ['Generální dodávky staveb', 'Novostavby a rekonstrukce'],
  },
  {
    kod: 'D.02',
    nazev: 'Průmyslové stavby',
    popis: 'Výrobní haly, sklady a zázemí — nové objekty i sanace stávajících provozů.',
    body: ['Novostavby a rekonstrukce', 'Sanace zdiva a konstrukcí'],
  },
  {
    kod: 'D.03',
    nazev: 'Historické stavby',
    popis: 'Citlivé opravy památek ve Východních Čechách — s respektem k původnímu řemeslu.',
    body: ['Generální dodávky staveb', 'Sanace a obnova fasád'],
  },
  {
    kod: 'D.04',
    nazev: 'Střechy',
    popis: 'Ploché střechy a průmyslové světlíky — návrh skladby, realizace i údržba.',
    body: ['Ploché střechy', 'Průmyslové světlíky'],
  },
];

const cisla = [
  { hodnota: '30', jednotka: 'let', popis: 'stavíme ve Východních Čechách' },
  { hodnota: 'ISO', jednotka: '9001', popis: 'certifikované řízení kvality' },
  { hodnota: '4', jednotka: 'divize', popis: 'od základů po střechu pod jednou firmou' },
];

export default function Page() {
  return (
    <main className="mg">
      <header className="mg-top">
        <a className="mg-brand" href="#" aria-label="Megas, stavební firma Hradec Králové">
          <span className="mg-brand-mark" aria-hidden="true">M</span>
          <span className="mg-brand-word">MEGAS<span className="mg-brand-sub">s.r.o. — stavíme Hradec Králové</span></span>
        </a>
        <nav className="mg-nav" aria-label="Hlavní">
          <a href="#divize">Divize</a>
          <a href="#firma">O firmě</a>
          <a href="tel:+420495000000" className="mg-nav-call">Zavolat</a>
        </nav>
      </header>

      <section className="mg-hero" aria-labelledby="hero-h">
        <div className="mg-hero-media">
          <img src="/hero.webp" alt="Rozestavěná stavba realizovaná firmou Megas v Hradci Králové" />
          <span className="mg-hero-scrim" aria-hidden="true" />
        </div>
        <div className="mg-hero-body">
          <p className="mg-eyebrow">Stavební firma — Hradec Králové, od roku 1994</p>
          <h1 id="hero-h">
            Postavíme to<br />
            <span className="mg-hero-accent">na pevných základech.</span>
          </h1>
          <p className="mg-hero-lead">
            Generální dodávky staveb od výkopu po předání klíčů. Pozemní, průmyslové
            i historické objekty a střechy — jeden zodpovědný partner, jeden termín, jedna cena.
          </p>
          <div className="mg-hero-cta">
            <a className="mg-btn mg-btn-primary" href="tel:+420495000000">Zavolat na stavbu</a>
            <a className="mg-btn mg-btn-ghost" href="#divize">Prohlédnout divize</a>
          </div>
        </div>
        <ul className="mg-hero-facts">
          {cisla.map((c) => (
            <li key={c.hodnota}>
              <span className="mg-fact-num">{c.hodnota}<em>{c.jednotka}</em></span>
              <span className="mg-fact-txt">{c.popis}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mg-section" id="divize" aria-labelledby="divize-h">
        <div className="mg-section-head">
          <p className="mg-eyebrow">Co stavíme</p>
          <h2 id="divize-h">Čtyři divize, jedna firma</h2>
          <p className="mg-section-lead">
            Nemusíte skládat tým z pěti řemesel. Každou zakázku vede jedna z našich divizí
            a drží ji od projektu po kolaudaci.
          </p>
        </div>
        <ol className="mg-divize">
          {divize.map((d) => (
            <li key={d.kod} className="mg-card">
              <span className="mg-card-kod">{d.kod}</span>
              <h3>{d.nazev}</h3>
              <p className="mg-card-popis">{d.popis}</p>
              <ul className="mg-card-body">
                {d.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mg-section mg-trust" id="firma" aria-labelledby="firma-h">
        <div className="mg-trust-grid">
          <div className="mg-trust-media">
            <img src="/section-1.webp" alt="Hrubá stavba a lešení na realizaci Megas" />
          </div>
          <div className="mg-trust-text">
            <p className="mg-eyebrow">O firmě</p>
            <h2 id="firma-h">Královéhradecké řemeslo bez výmluv</h2>
            <p>
              Megas s.r.o. staví v Hradci Králové a okolí přes tři desetiletí. Děláme
              generální dodávky, takže za stavbu ručí jeden partner — od zemních prací
              a hrubé stavby přes průmyslové haly až po ploché střechy a světlíky.
            </p>
            <p>
              Historické objekty bereme jako závazek: sanujeme zdivo a obnovujeme fasády
              tak, aby dům vydržel další století, ne jen do konce záruky.
            </p>
            <dl className="mg-trust-list">
              <div>
                <dt>Kvalita</dt>
                <dd>Řízení podle ISO 9001 — na papíře i na lešení.</dd>
              </div>
              <div>
                <dt>Termín</dt>
                <dd>Harmonogram, který platí. Předání klíčů, ne odkladů.</dd>
              </div>
              <div>
                <dt>Lokalita</dt>
                <dd>Hradec Králové a Východní Čechy — jsme kousek od vaší stavby.</dd>
              </div>
            </dl>
            <a className="mg-btn mg-btn-primary" href="tel:+420495000000">Domluvit prohlídku stavby</a>
          </div>
        </div>
        <figure className="mg-trust-wide">
          <img src="/section-2.webp" alt="Dokončená realizace firmy Megas ve Východních Čechách" />
          <figcaption>Realizace Megas — Hradec Králové a okolí.</figcaption>
        </figure>
      </section>
    </main>
  );
}
