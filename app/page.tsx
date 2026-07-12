const properties = [
  {
    type: "Prodej",
    title: "Rodinný dům 4+1",
    place: "Bohdíkov–Raškov",
    detail: "144 m²",
    price: "5 490 000 Kč",
  },
  {
    type: "Pronájem",
    title: "Byt 2+1",
    place: "Olomouc–Nová Ulice",
    detail: "50 m²",
    price: "14 500 Kč / měsíc",
  },
  {
    type: "Prodej",
    title: "Byt 2+1",
    place: "Olomouc–Neředín",
    detail: "45 m²",
    price: "4 180 000 Kč",
  },
];

const services = [
  "Prodej a pronájem",
  "Ocenění nemovitosti",
  "Správa nemovitostí",
  "Development a investice",
  "Výkup a oddlužení",
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#nahore" aria-label="Lemak reality – úvod">
            <span className="wordmark-mark" aria-hidden="true">L</span>
            <span>
              LEMAK
              <small>reality · Olomouc</small>
            </span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Nabídka</a>
            <a href="#spoluprace">Jak pracujeme</a>
            <a className="nav-phone" href="tel:+420721303255">Zavolat</a>
          </nav>
        </header>

        <div className="hero-grid" id="nahore">
          <div className="hero-copy">
            <p className="eyebrow">Reality na Olomoucku a celé Moravě</p>
            <h1 id="hero-title">
              Známe cenu domu.
              <span>Zajímá nás i jeho příběh.</span>
            </h1>
            <p className="hero-lead">
              Prodáme, pronajmeme nebo oceníme vaši nemovitost. Osobně,
              srozumitelně a bez přehazování mezi odděleními.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#nabidka">
                Prohlédnout nabídku
                <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="tel:+420721303255">
                +420 721 303 255
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="parcel-frame" aria-hidden="true">
              <span className="parcel-number">OL / 779</span>
              <span className="parcel-line parcel-line-one" />
              <span className="parcel-line parcel-line-two" />
            </div>
            <img
              src="/hero.webp"
              width="1200"
              height="1500"
              alt="Tým realitní kanceláře Lemak reality v Olomouci"
              fetchPriority="high"
            />
            <div className="hero-note">
              <span>Váš makléř</span>
              <strong>od prvního odhadu po předání klíčů</strong>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#nabidka">
          <span aria-hidden="true">↓</span> Aktuální nemovitosti
        </a>
      </section>

      <section className="offer-section" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Výběr z nabídky · aktualizováno 12. 7. 2026</p>
            <h2 id="offer-title">Místa, kde můžete začít další kapitolu.</h2>
          </div>
          <p>
            Byty v Olomouci, rodinné domy i chalupy napříč Moravou. U každé
            nabídky vám řekneme to podstatné dřív, než vyrazíte na prohlídku.
          </p>
        </div>

        <div className="offer-layout">
          <div className="offer-image">
            <img
              src="/section-1.webp"
              width="1200"
              height="900"
              loading="lazy"
              alt="Nemovitost z nabídky Lemak reality v Olomouckém kraji"
            />
            <span className="image-label">Vybráno na Moravě</span>
          </div>

          <div className="property-list">
            {properties.map((property) => (
              <article className="property" key={`${property.title}-${property.place}`}>
                <div className="property-meta">
                  <span>{property.type}</span>
                  <span>{property.detail}</span>
                </div>
                <h3>{property.title}</h3>
                <p>{property.place}</p>
                <strong>{property.price}</strong>
              </article>
            ))}
            <a className="button button-dark" href="mailto:jiricermak@lemak-reality.cz?subject=Aktuální nabídka nemovitostí">
              Vyžádat celou nabídku
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="trust-section" id="spoluprace" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-image">
            <img
              src="/section-2.webp"
              width="1100"
              height="1300"
              loading="lazy"
              alt="Makléři Lemak reality při osobní konzultaci s klientem"
            />
            <div className="trust-stamp" aria-hidden="true">
              <span>5 let</span>
              <small>v realitách</small>
            </div>
          </div>

          <div className="trust-copy">
            <p className="eyebrow">Makléři, kteří sami investují</p>
            <h2 id="trust-title">Jednáte s člověkem, který zná každý krok obchodu.</h2>
            <p className="trust-intro">
              Jsme kolegové a kamarádi z Olomouce. Reality jsou naše práce i
              vlastní investiční zkušenost, proto hlídáme cenu, smlouvy,
              financování i praktické detaily předání.
            </p>

            <ul className="service-list" aria-label="Služby Lemak reality">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>

            <figure className="testimonial">
              <blockquote>
                „Profesionální, vstřícný a naprosto soustředěný na naše potřeby.
                Bez ohledu na denní dobu byl vždy k dosažení.“
              </blockquote>
              <figcaption>Pavel Strnad · klient Lemak reality</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
