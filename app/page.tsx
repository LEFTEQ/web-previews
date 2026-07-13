export default function HomePage() {
  const services = [
    {
      name: "Kytice pro každý den",
      text: "Čerstvé květiny uvážeme podle příležitosti, barev i částky, kterou chcete věnovat.",
      note: "na počkání i na objednávku",
    },
    {
      name: "Svatební květiny",
      text: "Kytice pro nevěstu, korsáže, vývazky i květinová výzdoba sladěná s místem a roční dobou.",
      note: "osobní konzultace",
    },
    {
      name: "Smuteční vazba",
      text: "Věnce, kytice k pomníku a důstojná vazba připravená citlivě a ve sjednaném čase.",
      note: "vyzvednutí v Brně",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Kytice Brno, úvod">
            <span>Kytice</span>
            <small>Brno · vazárna</small>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co vážeme</a>
            <a href="#prodejny">Kde nás najdete</a>
          </nav>

          <a className="header-phone" href="tel:+420721220240">
            <span>Zavolat</span>
            721 220 240
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="hero-kicker">Květinářství a vazárna v Brně</p>
            <h1 id="hero-title">
              Květiny
              <span>mluví.</span>
              <em>My je vážeme.</em>
            </h1>
            <p className="hero-intro">
              Pro radost cestou domů, svatbu i tiché rozloučení. Každou
              kytici skládáme v Brně podle člověka, kterému patří.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420721220240">
                Objednat po telefonu
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href="#prodejny">
                Vybrat prodejnu
              </a>
            </div>
          </div>

          <figure className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src="/hero.webp"
                alt="Čerstvě uvázaná pestrá kytice z brněnské vazárny Kytice"
              />
            </div>
            <figcaption>
              <span>Právě ve vazárně</span>
              Sezónní květiny, pokaždé trochu jinak
            </figcaption>
            <div className="stem-label" aria-hidden="true">
              <span>řez</span>
              <span>barva</span>
              <span>vazba</span>
            </div>
          </figure>
        </div>
      </section>

      <section className="services" id="nabidka" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-label">Z naší vazárny</p>
          <h2 id="services-title">Pro chvíle, které si zaslouží květiny.</h2>
          <p>
            Řekněte nám příležitost, oblíbené barvy a rozpočet. O výběr
            čerstvých květin i výslednou vazbu se postaráme my.
          </p>
        </div>

        <div className="services-layout">
          <div className="services-image">
            <img
              src="/section-1.webp"
              alt="Floristka váže kytici z čerstvých květin v brněnské vazárně"
            />
            <span className="image-note">Vázáno ručně v Brně</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.name}>
                <div className="flower-mark" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                  <span>{service.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="locations" id="prodejny" aria-labelledby="locations-title">
        <div className="location-photo">
          <img
            src="/section-2.webp"
            alt="Detail květin a pracovního stolu v květinářství Kytice v Brně"
          />
          <div className="photo-stamp" aria-hidden="true">
            od roku
            <strong>2000</strong>
            v Brně
          </div>
        </div>

        <div className="locations-content">
          <p className="section-label">Dvě brněnská místa</p>
          <h2 id="locations-title">Květiny cestou městem.</h2>
          <p className="locations-lead">
            Na Květinářské si vyberete z aktuální nabídky. Na Křídlovické
            pro vás připravíme objednávku ve vazárně.
          </p>

          <div className="shop-list">
            <article className="shop">
              <div className="shop-type">Květinářství</div>
              <h3>Květinářská 2</h3>
              <p>Po–Pá 8:00–18:00</p>
              <p>So 8:00–12:00</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Květinářská+2+Brno"
                target="_blank"
                rel="noreferrer"
              >
                Ukázat na mapě <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="shop">
              <div className="shop-type">Objednávková kancelář</div>
              <h3>Křídlovická 31</h3>
              <p>Po–Pá 8:00–16:00</p>
              <p>Objednávky a vyzvednutí vazeb</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Křídlovická+31+Brno"
                target="_blank"
                rel="noreferrer"
              >
                Ukázat na mapě <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>

          <aside className="loyalty-note" aria-label="Zákaznická karta">
            <span>Pro stálé zákazníky</span>
            <p>
              Po dvou nákupech nad 500 Kč získáte na třetí nákup slevu
              10 %. Sleva neplatí pro smuteční vazbu.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
