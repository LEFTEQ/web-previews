import React from "react";

export default function Page() {
  const services = [
    {
      code: "R134a / R1234yf",
      title: "Plnění chladiva",
      body: "Doplníme správné množství chladiva podle typu okruhu vašeho vozu. Starší auta na R134a, novější na R1234yf — nemícháme, každé má svůj systém.",
    },
    {
      code: "O₂ / UV",
      title: "Hledání netěsností",
      body: "Uniká vám chladivo? Najdeme kudy. Tlaková zkouška dusíkem a UV kontrastní barvivo odhalí i malou dírku na kondenzátoru nebo hadici.",
    },
    {
      code: "–",
      title: "Dezinfekce výparníku",
      body: "Fouká na vás plíseň? Ozonová dezinfekce a výměna kabinového filtru. Klimatizace zase voní čistě, ne jako mokrý hadr.",
    },
    {
      code: "°C",
      title: "Servis kompresoru",
      body: "Kontrola tlaků na obou větvích, stav kompresoru, expanzního ventilu a kondenzátoru. Diagnostika dřív, než se rozbije to drahé.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Autoservis Valenta, Ostrava">
          <span className="wordmark__row">
            <span className="wordmark__name">VALENTA</span>
            <span className="wordmark__gauge" aria-hidden="true">
              <span className="wordmark__needle" />
            </span>
          </span>
          <span className="wordmark__sub">autoservis · klimatizace · Ostrava</span>
        </a>
        <a className="topbar__call" href="tel:+420774242949">
          <span className="topbar__calllabel">Zavolat</span>
          <span className="topbar__callnum">774&nbsp;242&nbsp;949</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Technik plní klimatizaci vozu v Autoservisu Valenta v Ostravě"
            width={1600}
            height={1100}
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Klimatizace do vašeho auta · Novinářská 3088, Ostrava</p>
          <h1 className="hero__title">
            Ve voze <span className="hero__accent">7&nbsp;°C</span>,<br />
            venku pětatřicet.
          </h1>
          <p className="hero__lead">
            Plnění, čištění a diagnostika autoklimatizací pro všechny značky —
            u obchodního domu Futurum. Fouká vám vlažno nebo z ventilace táhne
            plíseň? Dejte nám vůz na dopoledne a odjíždíte v chladu.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420774242949">
              Objednat plnění klimatizace
            </a>
            <a className="btn btn--ghost" href="#sluzby">Co s klimatizací umíme</a>
          </div>
          <dl className="hero__facts">
            <div className="fact">
              <dt>Bez objednání</dt>
              <dd>plnění hotové ještě týž den</dd>
            </div>
            <div className="fact">
              <dt>Od roku 2000</dt>
              <dd>servisujeme auta v centru Ostravy</dd>
            </div>
            <div className="fact">
              <dt>Po–Pá 7–16</dt>
              <dd>zastavte se, jak jedete kolem</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-head__kicker">Servis klimatizace, krok za krokem</p>
          <h2 className="section-head__title" id="sluzby-nadpis">
            Než začne fučet studený vzduch
          </h2>
          <p className="section-head__note">
            Chladivo časem uniká i u zdravého okruhu — pár gramů ročně. Proto
            klimatizace „nemrazí“, aniž by cokoli prasklo. Podíváme se na váš
            konkrétní systém a řekneme rovnou, co potřebuje.
          </p>
        </div>

        <ol className="cards">
          {services.map((s) => (
            <li className="card" key={s.title}>
              <span className="card__code" aria-hidden="true">{s.code}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="sluzby__foot">
          <img
            className="sluzby__img"
            src="/section-1.webp"
            alt="Manometry a servisní stanice pro plnění autoklimatizace"
            width={1200}
            height={800}
          />
          <div className="sluzby__note">
            <p>
              Kromě klimatizace zvládneme i zbytek vozu — opravy všech značek,
              pneuservis, laserovou geometrii, přípravu na STK a měření emisí,
              karosářské práce i odtahovou službu vlastním vozem.
            </p>
            <a className="btn btn--ghost" href="tel:+420774242949">
              Zeptat se na termín
            </a>
          </div>
        </div>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__media">
          <img
            className="onas__img"
            src="/section-2.webp"
            alt="Provozovna Autoservisu Valenta u obchodního domu Futurum v Ostravě"
            width={1200}
            height={900}
          />
        </div>
        <div className="onas__body">
          <p className="section-head__kicker">O nás</p>
          <h2 className="section-head__title" id="onas-nadpis">
            Rodinný servis kousek od Futura
          </h2>
          <p className="onas__text">
            Auta opravujeme od roku 2000, vlastní dílnu na Novinářské provozujeme
            od roku 2008. Klimatizace u nás nikdy nebyla „přidružená služba“ —
            máme na ni stanici i zkušenost, kdy je problém v chladivu a kdy
            v elektronice. Řekneme vám to na rovinu a bez šroubování ceny.
          </p>

          <ul className="onas__points">
            <li>
              <span className="onas__lbl">Kde</span>
              Novinářská 3088, Moravská Ostrava — u OD Futurum
            </li>
            <li>
              <span className="onas__lbl">Kdy</span>
              Pondělí až pátek 7:00–16:00, o víkendu zavřeno
            </li>
            <li>
              <span className="onas__lbl">Sezona</span>
              Jarní kontrola klimatizace — plnění bez čekání a objednání
            </li>
          </ul>

          <div className="onas__contact">
            <a className="btn btn--primary" href="tel:+420774242949">
              Zavolat 774&nbsp;242&nbsp;949
            </a>
            <a className="btn btn--ghost" href="mailto:info@autoservisvalenta.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
