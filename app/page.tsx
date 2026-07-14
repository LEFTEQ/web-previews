export default function Page() {
  return (
    <>
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <div className="wordmark" aria-label="Kurštejn stavební a obchodní firma">
            <span className="wordmark__mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="34" height="34">
                <polygon points="24,3 45,15 45,39 3,39 3,15" fill="none" stroke="currentColor" strokeWidth="3" />
                <line x1="24" y1="3" x2="24" y2="39" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
            <span className="wordmark__text">
              KURŠTEJN
              <span className="wordmark__sub">stavební a obchodní firma</span>
            </span>
          </div>
          <div className="header-cta-row">
            <span className="header-loc">Pardubice a okolí</span>
            <a className="header-call" href="tel:+420466000000" aria-label="Zavolat firmě Kurštejn">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z"
                />
              </svg>
              Zavolat
            </a>
          </div>
        </div>
      </header>

      <main id="obsah">
        <section className="hero" aria-label="Úvod">
          <div className="hero__media">
            <img
              src="/hero.webp"
              alt="Stavební technika a rozestavěná stavba firmy Kurštejn v Pardubicích"
              className="hero__img"
            />
            <div className="hero__scrim" aria-hidden="true"></div>
          </div>

          <div className="hero__content">
            <p className="hero__eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              Rodinná stavební firma · Pardubice · od roku 1994
            </p>
            <h1 className="hero__title">
              Stavíme na<br />
              <span className="hero__title-accent">rovných základech.</span>
            </h1>
            <p className="hero__lead">
              Novostavby, rekonstrukce a zemní práce v Pardubicích a okolí.
              Vlastní technika, vlastní lidé, žádní zprostředkovatelé —
              a stavbyvedoucí, který to s vámi projde od výkopu po kolaudaci.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420466000000">
                Zavolat: 466 000 000
              </a>
              <a className="btn btn--ghost" href="#nabidka">
                Co stavíme
              </a>
            </div>
            <dl className="hero__facts">
              <div className="hero__fact">
                <dt>30 let</dt>
                <dd>na stavebním trhu</dd>
              </div>
              <div className="hero__fact">
                <dt>JCB 3CX</dt>
                <dd>vlastní těžká technika</dd>
              </div>
              <div className="hero__fact">
                <dt>Pardubice</dt>
                <dd>a spádové okolí</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="nabidka" id="nabidka" aria-labelledby="nabidka-h">
          <div className="section-inner">
            <header className="section-head">
              <p className="section-eyebrow">Nabídka 01 / 02 — Co u nás objednáte</p>
              <h2 id="nabidka-h" className="section-title">
                Od výkopu po klíč
              </h2>
              <p className="section-lead">
                Nejsme showroom s katalogem. Jsme parta, která umí zemní práce, hrubou
                stavbu i dokončovací řemesla — a na velkých zakázkách i kontejnerovou
                dopravu materiálu vlastním nákladním autem.
              </p>
            </header>

            <div className="nabidka__grid">
              <figure className="nabidka__media">
                <img
                  src="/section-1.webp"
                  alt="Zemní práce minibagrem Takeuchi na stavbě firmy Kurštejn"
                  className="nabidka__img"
                />
              </figure>

              <ol className="service-list">
                <li className="service-item">
                  <span className="service-num">01</span>
                  <div className="service-body">
                    <h3>Novostavby na klíč</h3>
                    <p>
                      Rodinné domy i menší bytové stavby — od základové desky přes hrubou
                      stavbu až po předání s kompletní dokumentací.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <span className="service-num">02</span>
                  <div className="service-body">
                    <h3>Rekonstrukce a přístavby</h3>
                    <p>
                      Statika, rozvody, střechy i interiéry starších domů v Pardubicích
                      a okolních obcích. Řešíme i stavby, kde už firma před námi skončila.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <span className="service-num">03</span>
                  <div className="service-body">
                    <h3>Zemní práce a kontejnerová doprava</h3>
                    <p>
                      Výkopy, terénní úpravy a přípojky se strojem JCB 3CX Sitemaster
                      a minibagrem Takeuchi. Odvoz suti a materiálu nákladním autem MAN.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <span className="service-num">04</span>
                  <div className="service-body">
                    <h3>Drobné stavební práce</h3>
                    <p>
                      Zpevněné plochy, oplocení, opravy a údržba objektů — i menší
                      zakázky bereme se stejnou pečlivostí jako velké stavby.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="reference" aria-labelledby="reference-h">
          <div className="section-inner section-inner--split">
            <header className="section-head">
              <p className="section-eyebrow">Nabídka 02 / 02 — Proč zrovna my</p>
              <h2 id="reference-h" className="section-title">
                Práce, za kterou dáme jméno
              </h2>
              <p className="section-lead">
                Jsme rodinná firma s víc než třicetiletou historií v Pardubicích. Nejsme
                velké stavební impérium — jsme parta, kterou poznáte podle jména na
                helmě, ne podle call centra.
              </p>

              <ul className="trust-list">
                <li>
                  <strong>Certifikovaná řemesla.</strong> Kvalifikace našich pracovníků
                  pravidelně obnovujeme a dokládáme platnými certifikáty a osvědčeními.
                </li>
                <li>
                  <strong>Osobní zodpovědnost.</strong> Každou zakázku má na starosti
                  konkrétní stavbyvedoucí — víte, s kým mluvíte, od poptávky po předání.
                </li>
                <li>
                  <strong>Malé i velké stavby.</strong> Od opravy plotu po novostavbu domu
                  — bereme zakázky bez ohledu na to, jak jsou &bdquo;velké&ldquo;.
                </li>
              </ul>
            </header>

            <figure className="reference__media">
              <img
                src="/section-2.webp"
                alt="Dokončená rekonstrukce rodinného domu realizovaná firmou Kurštejn"
                className="reference__img"
              />
              <figcaption>Rekonstrukce rodinného domu, Pardubice</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
