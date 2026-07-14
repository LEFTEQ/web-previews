export default function Page() {
  return (
    <>
      <a href="#obsah" className="skip-link">Přejít k obsahu</a>

      <header className="site-head">
        <div className="wordmark" aria-label="Makléřský servis">
          <span className="wm-line1">MAKLÉŘSKÝ</span>
          <span className="wm-line2">servis<span className="wm-dot">.</span></span>
        </div>
        <div className="site-head-meta">
          <span>Plzeň</span>
          <span aria-hidden="true">·</span>
          <span>reality, pojištění, finance</span>
        </div>
      </header>

      <main id="obsah">
        <section className="hero" aria-label="Úvod">
          <div className="hero-media">
            <img
              src="/hero.webp"
              alt="Bytový dům ve správě realitní kanceláře Makléřský servis v Plzni"
              className="hero-img"
            />
            <div className="hero-scrim" aria-hidden="true"></div>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">Plzeň · od roku 1996</p>
              <h1 className="hero-title">
                Váš dům<br />
                má svůj <em>spis.</em><br />
                My ho vedeme.
              </h1>
              <p className="hero-lede">
                Prodej, pronájem, ocenění i financování nemovitostí
                v Plzni a okolí — pod jednou střechou, s jedním
                odpovědným člověkem po celou dobu.
              </p>
            </div>

            <dl className="hero-facts">
              <div className="fact">
                <dt>Na trhu</dt>
                <dd>od 1996</dd>
              </div>
              <div className="fact">
                <dt>Založeno</dt>
                <dd>1999 · s.r.o.</dd>
              </div>
              <div className="fact">
                <dt>Reality od</dt>
                <dd>2013</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="services" aria-labelledby="sluzby-h">
          <div className="section-head">
            <p className="section-eyebrow">Nabídka · 01</p>
            <h2 id="sluzby-h" className="section-title">Co pro vás vyřídíme</h2>
            <p className="section-lede">
              Čtyři agendy, jeden spis. Nemusíte si vozit papíry mezi
              realitkou, bankou, právníkem a pojišťovnou.
            </p>
          </div>

          <div className="services-body">
            <figure className="services-figure">
              <img
                src="/section-1.webp"
                alt="Prohlídka bytu s makléřem Makléřského servisu v Plzni"
              />
              <figcaption>Prohlídka a předání klíčů — vždy osobně, na místě.</figcaption>
            </figure>

            <ol className="services-list">
              <li className="service-item">
                <span className="service-num">01</span>
                <div>
                  <h3>Prodej nemovitostí</h3>
                  <p>
                    Byty, rodinné domy i komerční prostory. Připravíme
                    fotodokumentaci, video prohlídku i záběry z dronu
                    a inzerujeme na desítkách realitních serverů.
                  </p>
                </div>
              </li>
              <li className="service-item">
                <span className="service-num">02</span>
                <div>
                  <h3>Pronájem nemovitostí</h3>
                  <p>
                    Najdeme spolehlivého nájemce, prověříme ho a
                    postaráme se o smlouvu i předání bytu — bez starostí
                    na vaší straně.
                  </p>
                </div>
              </li>
              <li className="service-item">
                <span className="service-num">03</span>
                <div>
                  <h3>Oceňování nemovitostí</h3>
                  <p>
                    Stanovíme reálnou tržní cenu podle lokality, stavu
                    a aktuálních trendů v Plzni a okolí — ne podle
                    přání, ale podle dat.
                  </p>
                </div>
              </li>
              <li className="service-item">
                <span className="service-num">04</span>
                <div>
                  <h3>Finanční poradenství</h3>
                  <p>
                    Poradíme s financováním, právní stránkou obchodu
                    i pojištěním nemovitosti — od hypotéky po advokátní
                    úschovu.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="trust" aria-labelledby="duvera-h">
          <div className="section-head">
            <p className="section-eyebrow">Kdo jsme · 02</p>
            <h2 id="duvera-h" className="section-title">28 let v jednom spisu</h2>
            <p className="section-lede">
              Začínali jsme v pojišťovnictví v roce 1996. V roce 2013
              přibyly reality. Dnes vedeme obchod od prvního telefonátu
              až po zápis na katastru.
            </p>
          </div>

          <div className="trust-body">
            <div className="trust-cards">
              <div className="trust-card">
                <h3>Zkušenosti</h3>
                <p>
                  Na trhu působíme více než 28 let a máme za sebou stovky
                  úspěšných transakcí. Makléři jsou pravidelně školení
                  v realitách, právu, financích i pojištění.
                </p>
              </div>
              <div className="trust-card">
                <h3>Bezpečný převod peněz</h3>
                <p>
                  Smluvní dokumentaci připravují prověřené advokátní
                  kanceláře v souladu s GDPR, AML i PENB. Peníze jdou
                  přes advokátní, notářskou nebo bankovní úschovu.
                </p>
              </div>
              <div className="trust-card">
                <h3>Moderní marketing</h3>
                <p>
                  Home staging, virtual staging, profesionální foto,
                  video prohlídka i dron. Inzerujeme napříč sociálními
                  sítěmi a realitními servery — ne jen jednou fotkou z mobilu.
                </p>
              </div>
            </div>

            <figure className="trust-figure">
              <img
                src="/section-2.webp"
                alt="Konzultace klienta s realitním makléřem v kanceláři Makléřský servis"
              />
              <figcaption>Osobní schůzka — probereme vaši situaci bez závazků.</figcaption>
            </figure>
          </div>

          <div className="timeline" aria-label="Jak probíhá spolupráce">
            <p className="timeline-eyebrow">Jak spolupráce probíhá</p>
            <ol className="timeline-list">
              <li>
                <span className="tl-num">1</span>
                <p>První kontakt — probereme, co potřebujete, a najdeme
                  nemovitost nebo připravíme vaši k prodeji.</p>
              </li>
              <li>
                <span className="tl-num">2</span>
                <p>Individuální přístup a pravidelná komunikace po celou
                  dobu prodeje či koupě.</p>
              </li>
              <li>
                <span className="tl-num">3</span>
                <p>Průběžně vás informujeme o pokroku, ať víte, na čem
                  jste a co bude dál.</p>
              </li>
              <li>
                <span className="tl-num">4</span>
                <p>Osobní schůzka, kde doladíme detaily — a pojďme na to
                  spolu.</p>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}
