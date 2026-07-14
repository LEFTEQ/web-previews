export default function Page() {
  return (
    <main className="pk">
      <section className="hero" aria-label="Úvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detailní záběr na svazek klíčů a bezpečnostní vložky v dílně Proma uni"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true"></div>
        </div>

        <div className="hero-content">
          <div className="wordmark">
            <span className="wm-main">PROMA<span className="wm-dot">UNI</span></span>
            <span className="wm-sub">KLÍČOVÉ CENTRUM · PRAHA 4</span>
          </div>

          <p className="eyebrow">Od roku 1996 · Sezimova 402/11, Praha 4 – Nusle</p>

          <h1 className="hero-title">
            Když nejde<br />
            zámek,<br />
            <span className="hero-title-accent">jde se za námi.</span>
          </h1>

          <p className="hero-lede">
            Výroba klíčů, trezorových klíčů a prodej bezpečnostních vložek EVVA.
            Partner EVVA, servisní středisko FAB — na jednom pultu v Nuslích.
          </p>

          <div className="hero-facts" role="list">
            <div className="fact" role="listitem">
              <span className="fact-num">28</span>
              <span className="fact-label">let v oboru</span>
            </div>
            <div className="fact" role="listitem">
              <span className="fact-num">EVVA</span>
              <span className="fact-label">autorizovaný partner</span>
            </div>
            <div className="fact" role="listitem">
              <span className="fact-num">FAB</span>
              <span className="fact-label">servisní středisko</span>
            </div>
          </div>

          <div className="hero-hours">
            <span className="hours-label">Otevřeno dnes</span>
            <span className="hours-value">Po–Čt 8:00–18:00 · Pá 8:00–16:00</span>
          </div>
        </div>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="section-inner">
          <div className="section-head">
            <span className="tag">CO VYROBÍME A NAŘEŽEME</span>
            <h2 id="services-title" className="section-title">Sortiment a služby</h2>
          </div>

          <div className="services-grid">
            <figure className="services-media">
              <img
                src="/section-1.webp"
                alt="Stroj na kopírování klíčů a police se vzorky klíčových profilů v prodejně"
                className="services-img"
              />
            </figure>

            <div className="services-list">
              <article className="service-row">
                <span className="service-mark" aria-hidden="true">§01</span>
                <div className="service-body">
                  <h3>Výroba a kopírování klíčů</h3>
                  <p>Běžné domovní klíče i atypické profily nakopírujeme na počkání — na elektronických strojích, přesně podle karty nebo kódu.</p>
                </div>
              </article>

              <article className="service-row">
                <span className="service-mark" aria-hidden="true">§02</span>
                <div className="service-body">
                  <h3>Trezorové a bezpečnostní klíče</h3>
                  <p>Klíče k trezorům, bankovním schránkám a bezpečnostním systémům — pro byty, firmy i instituce s vyššími nároky na zabezpečení.</p>
                </div>
              </article>

              <article className="service-row">
                <span className="service-mark" aria-hidden="true">§03</span>
                <div className="service-body">
                  <h3>Vložky a systémy EVVA</h3>
                  <p>Prodej soukromých bezpečnostních vložek EVVA — mechanické i elektronické zamykací systémy s ověřenou kartou majitele.</p>
                </div>
              </article>

              <article className="service-row">
                <span className="service-mark" aria-hidden="true">§04</span>
                <div className="service-body">
                  <h3>Vyhledání profilu klíče</h3>
                  <p>Nevíte, jaký klíč potřebujete? Profil vám u nás vyhledáme v databázi podle značky zámku nebo vzorku, který přinesete.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="section-inner trust-inner">
          <div className="trust-text">
            <span className="tag">KOMU DŮVĚŘUJEME MY</span>
            <h2 id="trust-title" className="section-title">Od rodinného domu po elektrárnu</h2>
            <p className="trust-lede">
              Za 28 let jsme dodávali klíče a vložky lidem i institucím s velmi
              rozdílnými nároky na zabezpečení. Spolupracujeme s předními výrobci
              zámkových systémů a jsme oficiálním partnerem EVVA a servisním
              střediskem FAB.
            </p>

            <ul className="partners" aria-label="Naši obchodní partneři">
              <li>EVVA</li>
              <li>FAB</li>
              <li>SILCA</li>
              <li>GUARD</li>
              <li>MUL-T-LOCK</li>
            </ul>

            <div className="clients">
              <div className="client-item">
                <span className="client-icon" aria-hidden="true">◆</span>
                <span>Rodinné domy a byty</span>
              </div>
              <div className="client-item">
                <span className="client-icon" aria-hidden="true">◆</span>
                <span>Banky a instituce</span>
              </div>
              <div className="client-item">
                <span className="client-icon" aria-hidden="true">◆</span>
                <span>Nemocnice a hotely</span>
              </div>
              <div className="client-item">
                <span className="client-icon" aria-hidden="true">◆</span>
                <span>Kanceláře a provozy</span>
              </div>
              <div className="client-item">
                <span className="client-icon" aria-hidden="true">◆</span>
                <span>Výrobní podniky, elektrárny</span>
              </div>
            </div>
          </div>

          <figure className="trust-media">
            <img
              src="/section-2.webp"
              alt="Vitrína prodejny Proma uni s bezpečnostními vložkami a klíči EVVA"
              className="trust-img"
            />
            <figcaption className="trust-caption">
              Prodejna Sezimova 402/11, Praha 4 – Nusle
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
