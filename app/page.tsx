export default function Home() {
  return (
    <main className="sz-main">
      <section className="sz-hero">
        <div className="sz-hero-media">
          <img
            src="/hero.webp"
            alt="Čerstvé pečivo a dorty z pekařství a cukrářství Sázava v Hradci Králové"
            className="sz-hero-img"
          />
          <div className="sz-hero-shade" aria-hidden="true"></div>
        </div>

        <div className="sz-hero-content">
          <div className="sz-wordmark" aria-hidden="true">
            <span className="sz-wordmark-top">Pekařství &amp; cukrářství</span>
            <span className="sz-wordmark-main">Sázava</span>
            <span className="sz-wordmark-sub">Hradec Králové · od 198x</span>
          </div>

          <p className="sz-eyebrow">
            <span className="sz-eyebrow-dot">●</span> Otevřeno denně od 6:00 · první tácy ven z pece
          </p>

          <h1 className="sz-h1">
            Než se probudí Hradec,
            <br />u nás už voní <em>čerstvý chleba</em>.
          </h1>

          <p className="sz-lead">
            Pečeme a zdobíme každý den od svítání — chleba, koláče, dorty na míru
            i kávu k tomu. Vlastníma rukama, v jedné pekárně, kterou znáte
            z rohu ulice.
          </p>

          <div className="sz-hero-actions">
            <a className="sz-btn-call" href="tel:+420495000000">
              <span className="sz-btn-icon" aria-hidden="true">☎</span>
              Zavolat do pekárny
            </a>
            <a className="sz-btn-mail" href="mailto:info@pekarstvi-sazava.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="sz-section sz-section-cakes">
        <div className="sz-section-grid">
          <div className="sz-section-media">
            <img
              src="/section-1.webp"
              alt="Ručně zdobený dort z cukrářství Sázava připravený na oslavu"
              className="sz-section-img"
            />
          </div>
          <div className="sz-section-text">
            <p className="sz-label">Zákaznická objednávka · na míru</p>
            <h2 className="sz-h2">Dort, který si zamluvíte dopředu</h2>
            <p className="sz-p">
              Od korpusu po poslední růžičku z máslového krému — každý dort
              tvoří naše cukrářky ručně, podle toho, na co máte chuť a jakou
              oslavu chystáte. Narozeniny, svatbu, křtiny nebo firemní večírek.
            </p>
            <ul className="sz-list">
              <li>
                <span className="sz-list-mark">01</span>
                Domluvíme příchuť, velikost i vzhled telefonicky nebo v prodejně
              </li>
              <li>
                <span className="sz-list-mark">02</span>
                Necháme si na přípravu 2–3 dny předem, u svatebních dortů týden
              </li>
              <li>
                <span className="sz-list-mark">03</span>
                Dort si vyzvednete čerstvý ráno v den oslavy
              </li>
            </ul>
            <a className="sz-inline-link" href="tel:+420495000000">
              Domluvit dort telefonicky <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="sz-section sz-section-trust">
        <div className="sz-section-grid sz-section-grid-rev">
          <div className="sz-section-text">
            <p className="sz-label">Kde nás najdete</p>
            <h2 className="sz-h2">Pekaři a cukráři z Hradce, ne z fabriky</h2>
            <p className="sz-p">
              Těsto hnětou a dorty zdobí ti samí lidé, které potkáte za pultem.
              Žádná centrální velkovýroba — pečeme přímo v Hradci Králové a
              rozvážíme čerstvé jen do vlastních prodejen ve městě.
            </p>

            <div className="sz-facts">
              <div className="sz-fact">
                <span className="sz-fact-num">04:30</span>
                <span className="sz-fact-label">začíná směna pekařů</span>
              </div>
              <div className="sz-fact">
                <span className="sz-fact-num">6</span>
                <span className="sz-fact-label">prodejen v Hradci Králové</span>
              </div>
              <div className="sz-fact">
                <span className="sz-fact-num">30+</span>
                <span className="sz-fact-label">let stejné receptury</span>
              </div>
            </div>

            <div className="sz-contact-row">
              <a className="sz-btn-call sz-btn-call-alt" href="tel:+420495000000">
                <span className="sz-btn-icon" aria-hidden="true">☎</span>
                +420 495 000 000
              </a>
              <a className="sz-inline-link" href="mailto:info@pekarstvi-sazava.cz">
                info@pekarstvi-sazava.cz
              </a>
            </div>
          </div>
          <div className="sz-section-media">
            <img
              src="/section-2.webp"
              alt="Prodejna pekařství a cukrářství Sázava v Hradci Králové s čerstvým pečivem"
              className="sz-section-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
