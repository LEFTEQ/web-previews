import React from 'react';

export default function Page() {
  const services = [
    {
      no: '01',
      title: 'Zámky, vložky a klíče',
      lead: 'Otevření a výměna zámků, dostavba klíčů',
      body: 'Přijedeme, když zabouchnete dveře nebo se zlomí klíč v zámku. Vyměníme bezpečnostní vložky, překlíčujeme byt i firmu na jeden klíč a vyrobíme kopie klíčů na počkání.',
      tags: ['bezpečnostní vložky', 'nouzové otevření', 'kování'],
    },
    {
      no: '02',
      title: 'Mříže, brány a zábradlí',
      lead: 'Kovářská a zámečnická výroba na míru',
      body: 'Svařujeme mříže na okna, vjezdové brány, ploty a schodišťová zábradlí. Zaměříme na místě, nakreslíme, vyrobíme v dílně U Pily a osadíme u vás. Ocel, nerez i žárový zinek.',
      tags: ['okenní mříže', 'vjezdové brány', 'zábradlí'],
    },
    {
      no: '03',
      title: 'Zabezpečení dveří',
      lead: 'Bezpečnostní dveře a celoplošné kování',
      body: 'Poradíme s bezpečnostní třídou, dodáme a osadíme bezpečnostní dveře, přídavné zámky a celoplošné kování proti vyhnutí. Aby se k vám nikdo cizí nedostal.',
      tags: ['bezpečnostní dveře', 'přídavné zámky', 'třída RC'],
    },
  ];

  const proof = [
    { k: 'Od roku', v: '1995', note: 'dílna U Pily v Českých Budějovicích' },
    { k: 'Výjezd', v: 'do 60 min', note: 'po Budějovicích a okolí' },
    { k: 'Záruka', v: '5 let', note: 'na zámečnickou výrobu' },
  ];

  return (
    <main className="dx">
      <header className="dx-nav" aria-label="Hlavní">
        <a className="dx-brand" href="#" aria-label="DEXET zámečnictví, domů">
          <span className="dx-brand__mark" aria-hidden="true">
            <span className="dx-brand__cut" />
          </span>
          <span className="dx-brand__word">DEXET</span>
          <span className="dx-brand__sub">zámečnictví · Č.&nbsp;Budějovice</span>
        </a>
        <a className="dx-nav__call" href="tel:+420387311344">Zavolat 387&nbsp;311&nbsp;344</a>
      </header>

      <section className="dx-hero">
        <div className="dx-hero__media">
          <img src="/hero.webp" alt="Zámečnická dílna DEXET — svařování ocelové konstrukce" />
          <span className="dx-hero__grain" aria-hidden="true" />
        </div>
        <div className="dx-hero__body">
          <p className="dx-hero__eyebrow">Zámečnictví · U Pily 636 · České Budějovice</p>
          <h1 className="dx-hero__title">
            <span className="dx-hero__l1">Když jde o</span>
            <span className="dx-hero__l2">zámek,</span>
            <span className="dx-hero__l3">mříž&nbsp;i&nbsp;bránu.</span>
          </h1>
          <p className="dx-hero__text">
            Otevřeme zabouchnuté dveře, vyměníme bezpečnostní vložku a svaříme
            mříž nebo bránu přesně na míru. Řemeslo z jihočeské dílny, které drží.
          </p>
          <div className="dx-hero__cta">
            <a className="dx-btn dx-btn--solid" href="tel:+420602238829">Zavolat zámečníka</a>
            <a className="dx-btn dx-btn--ghost" href="#sluzby">Co umíme</a>
          </div>
          <dl className="dx-hero__facts">
            {proof.map((p) => (
              <div className="dx-fact" key={p.k}>
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
                <span>{p.note}</span>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="dx-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="dx-sec-head">
          <p className="dx-sec-head__eyebrow">Nabídka</p>
          <h2 id="sluzby-h" className="dx-sec-head__h">Tři věci, které řešíme nejčastěji</h2>
        </div>
        <ol className="dx-list">
          {services.map((s) => (
            <li className="dx-card" key={s.no}>
              <span className="dx-card__no" aria-hidden="true">{s.no}</span>
              <div className="dx-card__main">
                <h3 className="dx-card__title">{s.title}</h3>
                <p className="dx-card__lead">{s.lead}</p>
                <p className="dx-card__body">{s.body}</p>
                <ul className="dx-tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="dx-services__img">
          <img src="/section-1.webp" alt="Vyrobená ocelová mříž a vjezdová brána z dílny DEXET" />
        </div>
      </section>

      <section className="dx-trust" id="o-nas" aria-labelledby="trust-h">
        <div className="dx-trust__media">
          <img src="/section-2.webp" alt="Zámečník DEXET při práci na zakázce v dílně" />
        </div>
        <div className="dx-trust__body">
          <p className="dx-sec-head__eyebrow">O nás</p>
          <h2 id="trust-h" className="dx-trust__h">
            Malá dílna, kde zakázku dělá ten, kdo ji přijede osadit
          </h2>
          <p className="dx-trust__p">
            DEXET je zámečnictví z Českých Budějovic. Neděláme přes prostředníky —
            přijmeme telefon, zaměříme u vás doma nebo ve firmě, vyrobíme v dílně
            U&nbsp;Pily a osadíme sami. Proto víme, co jsme svařili, a stojíme si za tím.
          </p>
          <ul className="dx-trust__points">
            <li>
              <strong>Přijedeme za vámi.</strong> Zaměření po Budějovicích
              a okolí zdarma, hned domluvíme termín.
            </li>
            <li>
              <strong>Cena předem.</strong> Než začneme, víte, kolik zaplatíte —
              žádné dopočítávání po práci.
            </li>
            <li>
              <strong>Nouzové výjezdy.</strong> Zabouchnuté dveře řešíme
              i mimo běžnou pracovní dobu.
            </li>
          </ul>
          <div className="dx-trust__contact">
            <a className="dx-btn dx-btn--solid" href="tel:+420387311344">Zavolat 387&nbsp;311&nbsp;344</a>
            <a className="dx-btn dx-btn--line" href="mailto:info@dexet.cz">info@dexet.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
