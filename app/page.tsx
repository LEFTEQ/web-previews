export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Auto Kratochvíl – úvod">
            <span className="wordmark-main">KRATOCHVÍL</span>
            <span className="wordmark-sub">autoklempířství · Hradec Králové</span>
          </a>

          <div className="topbar-contact">
            <span className="opening-hours">Po–Pá · 8–17 hod.</span>
            <a className="call-button" href="tel:+420724242904">
              <span aria-hidden="true">↗</span> Zavolat 724 242 904
            </a>
          </div>
        </header>

        <div className="hero-layout" id="top">
          <div className="hero-copy hero-enter">
            <p className="eyebrow">Karosárna a vlastní lakovna · Dřevařská 470</p>
            <h1 id="hero-title">
              Vrátíme autu
              <span>pevný tvar.</span>
            </h1>
            <p className="hero-lead">
              Opravíme karoserii po nehodě, vyřešíme lakování a pomůžeme s pojistnou událostí. Vůz zůstává po celou dobu u nás v Hradci Králové.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420724242904">
                Zavolat kvůli opravě
              </a>
              <a className="text-action" href="#opravy">
                Co opravujeme <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="mobile-reassurance">Smluvní servis pojišťoven · opravy všech značek</p>
          </div>

          <div className="hero-visual hero-enter" aria-label="Oprava karoserie v dílně Auto Kratochvíl">
            <div className="measure-strip" aria-hidden="true">
              <span>0</span><i></i><i></i><i></i><span>40</span><i></i><i></i><i></i><span>80</span>
            </div>
            <div className="hero-image-frame">
              <img
                src="/hero.webp"
                alt="Autoklempíř pracuje na poškozené karoserii vozu v dílně Auto Kratochvíl"
                width="1400"
                height="1050"
                fetchPriority="high"
              />
              <div className="panel-line" aria-hidden="true"></div>
              <p className="image-note"><span>Kontrola geometrie</span> před předáním vozu</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="opravy" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Od promáčkliny po havárii</p>
          <h2 id="services-title">Jedna dílna.<br />Celá oprava.</h2>
          <p>
            Karosářské práce nepřeposíláme jinam. Díky vlastní lakovně máme pod kontrolou odstín, návaznost dílů i termín dokončení.
          </p>
        </div>

        <div className="services-image">
          <img
            src="/section-1.webp"
            alt="Detail přesné opravy a lícování automobilového karosářského dílu"
            width="1200"
            height="900"
            loading="lazy"
          />
          <span className="material-label">plech · tmel · lak</span>
        </div>

        <div className="service-list" aria-label="Nabídka oprav">
          <article>
            <span className="service-tool" aria-hidden="true">⌁</span>
            <div>
              <h3>Karoserie po nehodě</h3>
              <p>Rovnání, výměna poškozených dílů, přesné slícování a kontrola nosných částí vozu.</p>
            </div>
          </article>
          <article>
            <span className="service-tool" aria-hidden="true">◒</span>
            <div>
              <h3>Lakování ve vlastní lakovně</h3>
              <p>Příprava povrchu, míchání odstínu a lakování jednotlivých dílů i větších celků.</p>
            </div>
          </article>
          <article>
            <span className="service-tool" aria-hidden="true">◇</span>
            <div>
              <h3>Oprava přes pojišťovnu</h3>
              <p>Zdokumentujeme poškození, připravíme kalkulaci a provedeme sjednanou opravu.</p>
            </div>
          </article>
          <article>
            <span className="service-tool" aria-hidden="true">＋</span>
            <div>
              <h3>Mechanika a diagnostika</h3>
              <p>Podvozek, brzdy, geometrie a diagnostika BOSCH, VAG a DELPHI na jednom místě.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Zkušený mechanik kontroluje opravený vůz v servisu v Hradci Králové"
            width="1200"
            height="1000"
            loading="lazy"
          />
          <div className="inspection-stamp" aria-hidden="true">
            <span>kontrola</span>
            <strong>OK</strong>
            <span>Hradec Králové</span>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Proč vůz svěřit nám</p>
          <h2 id="trust-title">Auto nikam neodvážíme. Za výsledek ručí náš tým.</h2>
          <p className="trust-intro">
            Každou opravu evidujeme a práce na vašem voze jsou kryté pojištěním. Stavíme na zkušených mechanikech, profesionálně vybavené dílně a opravách, které dávají technický i finanční smysl.
          </p>

          <dl className="proof-grid">
            <div>
              <dt>Smluvní servis</dt>
              <dd>Spolupracujeme s pojišťovnami a známe postup likvidace škody.</dd>
            </div>
            <div>
              <dt>Náhradní vůz</dt>
              <dd>Po dobu opravy se domluvíme na zapůjčení náhradního automobilu.</dd>
            </div>
            <div>
              <dt>Správné díly</dt>
              <dd>Druhovýrobu používáme jen po dohodě, když neohrozí přesnost ani bezpečnost.</dd>
            </div>
            <div>
              <dt>Stálý tým</dt>
              <dd>O vůz se starají naši vyškolení mechanici, ne anonymní subdodavatel.</dd>
            </div>
          </dl>

          <div className="location-line">
            <span aria-hidden="true">●</span>
            <p><strong>Auto Kratochvíl s.r.o.</strong><br />Dřevařská 470, 500 03 Hradec Králové</p>
          </div>
        </div>
      </section>
    </main>
  );
}
