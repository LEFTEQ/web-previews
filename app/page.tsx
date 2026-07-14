export default function HomePage() {
  const services = [
    {
      name: "Regenerační masáž",
      detail: "Uvolnění přetížených zad, šíje a svalů po sportu i dlouhém sezení.",
      meta: "30–90 min",
    },
    {
      name: "Lymfatická masáž",
      detail: "Jemná péče podporující tok lymfy, lehkost nohou a celkovou regeneraci.",
      meta: "60–90 min",
    },
    {
      name: "Relaxační masáž",
      detail: "Pomalé, plynulé hmaty pro chvíle, kdy potřebujete vypnout hlavu i tělo.",
      meta: "30–90 min",
    },
    {
      name: "Reflexní masáž",
      detail: "Cílená práce s chodidly a reflexními body pro hluboké uvolnění.",
      meta: "30–60 min",
    },
  ];

  return (
    <main className="balneo-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Balneo Lázně Flora – začátek stránky">
            <span className="wordmark-main">balneo</span>
            <span className="wordmark-sub">Lázně Flora · Olomouc</span>
          </a>

          <nav className="hero-nav" aria-label="Hlavní navigace">
            <a href="#masaze">Masáže</a>
            <a href="#prostredi">Prostředí</a>
            <a className="nav-phone" href="tel:+420702003963">702 003 963</a>
          </nav>
        </header>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Masáže v Lázeňské zóně Olomouce</p>
            <h1 id="hero-title">
              Tělo si pamatuje,
              <span>když konečně povolí.</span>
            </h1>
            <p className="hero-lead">
              Klidná masážní péče na Krapkově ulici. Vybereme tempo i intenzitu podle toho,
              co právě potřebují vaše záda, nohy nebo celé tělo.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420702003963">
                Rezervovat po telefonu
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#masaze">Prohlédnout masáže</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="water-portal">
              <img
                src="/hero.webp"
                alt="Klidná masážní péče v Balneu Lázně Flora v Olomouci"
              />
              <span className="portal-label" aria-hidden="true">nádech · výdech</span>
            </div>
            <div className="hero-note">
              <span>Balneo</span>
              <p>Komorní lázeňská péče bez ruchu velkého wellness centra.</p>
            </div>
          </div>
        </div>

        <div className="hero-facts" aria-label="Praktické informace">
          <p><span>Kde</span>Krapkova 439/34, Olomouc</p>
          <p><span>Pro koho</span>Pro jednotlivce i dvojice</p>
          <p><span>Objednání</span>Na konkrétní čas</p>
        </div>
      </section>

      <section className="services-section" id="masaze" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Masáž podle vašeho dne</p>
          <h2 id="services-title">Nejdřív posloucháme. Potom uvolňujeme.</h2>
          <p>
            Nemusíte znát název správné procedury. Řekněte nám, kde cítíte napětí a jak se
            chcete po masáži cítit. Doporučíme vhodnou péči i délku.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-image">
            <img
              src="/section-1.webp"
              alt="Masérka při pečlivé práci se zády klienta v Balneu Olomouc"
            />
            <figcaption>
              <span>Dotek má mít směr.</span>
              Každou masáž přizpůsobujeme citlivosti a aktuálnímu stavu těla.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.detail}</p>
                </div>
                <span className="service-meta">{service.meta}</span>
              </article>
            ))}
            <p className="service-extra">
              K masážím nabízíme také zábaly, přísadové koupele, kosmetiku, pedikúru a manikúru.
            </p>
          </div>
        </div>
      </section>

      <section className="trust-section" id="prostredi" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Čisté a komorní prostředí lázní Balneo Flora v Olomouci"
          />
          <div className="pool-stamp" aria-label="Bazén má teplotu 28 stupňů Celsia">
            <strong>28 °C</strong>
            <span>teplota malého bazénu</span>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow">Menší lázně, více klidu</p>
          <h2 id="trust-title">Váš čas není průchozí zóna.</h2>
          <p className="trust-intro">
            Balneo Lázně Flora je zařízení pro menší počet hostů. Sauna, vířivá vana,
            aromatická pára i bazén se objednávají samostatně, takže si odpočinek užijete
            bez přeplněného provozu.
          </p>

          <div className="trust-points">
            <article>
              <h3>Zkušené ruce</h3>
              <p>Masérky s dlouhodobou praxí a širokým záběrem masážních technik.</p>
            </article>
            <article>
              <h3>Čisté prostředí</h3>
              <p>Komorní provoz, pečlivá příprava a dostatek času mezi návštěvami.</p>
            </article>
            <article>
              <h3>Vše na jednom místě</h3>
              <p>Masáže můžete spojit s koupelí, zábalem, saunou nebo privátní vířivkou.</p>
            </article>
          </div>

          <div className="contact-strip">
            <div>
              <span>Recepce</span>
              <a href="tel:+420702003963">702 003 963</a>
            </div>
            <div>
              <span>E-mail</span>
              <a href="mailto:BalneoOlomouc@seznam.cz">BalneoOlomouc@seznam.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
