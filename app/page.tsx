const services = [
  {
    name: "Střih a styling",
    detail: "Tvar, který funguje i ráno doma — podle vašich vlasů, tempa a způsobu úpravy.",
    time: "od 60 min",
  },
  {
    name: "Barvení a zesvětlení",
    detail: "Od přirozeného tónování po balayage. Odstín navrhneme s ohledem na pleť i kondici vlasů.",
    time: "dle konzultace",
  },
  {
    name: "Regenerační péče",
    detail: "Cílená salonní péče pro namáhané, suché nebo barvené vlasy — bez univerzálních slibů.",
    time: "od 30 min",
  },
  {
    name: "Kosmetika a proměna",
    detail: "Pleťová péče a celkový vzhled pro běžný den, důležitou schůzku i slavnostní chvíli.",
    time: "na objednání",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="uvod" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#uvod" aria-label="Salon Witová — úvod">
            <span>WITOVÁ</span>
            <small>salon krásy · Ostrava</small>
          </a>

          <nav className="desktop-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#pristup">Náš přístup</a>
            <a className="nav-call" href="tel:+420733213273">Objednat se</a>
          </nav>

          <details className="mobile-menu">
            <summary aria-label="Otevřít nabídku">Menu</summary>
            <nav aria-label="Mobilní navigace">
              <a href="#sluzby">Služby</a>
              <a href="#pristup">Náš přístup</a>
              <a href="tel:+420733213273">Zavolat na recepci</a>
            </nav>
          </details>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Salon Witová · Moravská Ostrava</p>
            <h1 id="hero-title">
              Vlasy, které
              <span>poznáte po hmatu.</span>
            </h1>
            <p className="hero-lead">
              Střih, barva a péče navržené pro vás — ne pro fotografii v katalogu.
              V ostravském salonu spojujeme zkušenost, přesnou konzultaci a zdravý
              respekt k vašim vlasům.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420733213273">
                Zavolat a objednat se
              </a>
              <a className="text-link" href="#sluzby">Prohlédnout služby <span aria-hidden="true">↓</span></a>
            </div>
            <p className="availability">
              <span aria-hidden="true"></span>
              Po–Pá 8:00–20:00 · So 8:00–16:00
            </p>
          </div>

          <div className="hero-visual">
            <div className="mirror-frame">
              <img
                src="/hero.webp"
                alt="Precizní vlasový styling v Salonu Witová v Ostravě"
                className="hero-image"
              />
            </div>
            <div className="shade-tabs" aria-label="Naše hlavní disciplíny">
              <span><b>STŘIH</b><small>tvar</small></span>
              <span><b>BARVA</b><small>tón</small></span>
              <span><b>PÉČE</b><small>lesk</small></span>
            </div>
            <p className="image-note">Každá proměna začíná konzultací.</p>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Co pro vás uděláme</p>
            <h2 id="services-title">Od dobrého střihu<br />k vašemu odstínu.</h2>
          </div>
          <p>
            Nejdřív se ptáme, potom tvoříme. Doporučíme službu, která odpovídá
            vašim vlasům, času i tomu, jak se o ně chcete starat doma.
          </p>
        </div>

        <div className="services-layout">
          <div className="service-image-wrap">
            <img
              src="/section-1.webp"
              alt="Kadeřnická práce a detail péče o vlasy v Salonu Witová"
              className="section-image"
            />
            <span className="image-caption">barva · střih · péče</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.name}>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.detail}</p>
                </div>
                <span>{service.time}</span>
              </article>
            ))}
            <a className="button button-dark" href="tel:+420733213273">
              Probrat termín s recepcí
            </a>
          </div>
        </div>
      </section>

      <section className="trust" id="pristup" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Tým a prostředí Salonu Witová v Ostravě"
            className="section-image"
          />
          <div className="award-stamp" aria-label="Colorzoom National Gold Winner 2018">
            <span>COLORZOOM</span>
            <strong>NATIONAL<br />GOLD</strong>
            <small>WINNER 2018</small>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Zkušenost, která nezůstala stát</p>
          <h2 id="trust-title">Od roku 1995.<br /><em>Pořád zvědavé.</em></h2>
          <p className="trust-intro">
            Salon vede Natálie Witová a za každou návštěvou stojí tým profesionálek,
            které se pravidelně vzdělávají v nových technikách střihu, barvení a péče.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Oceněná práce</dt>
              <dd>Natálie Witová získala titul Colorzoom National Gold Winner 2018.</dd>
            </div>
            <div>
              <dt>V centru Ostravy</dt>
              <dd>28. října 3348/65, Moravská Ostrava — snadno tramvají i autem.</dd>
            </div>
            <div>
              <dt>Jasná domluva</dt>
              <dd>Předem probereme výsledek, rozsah služby i následnou domácí péči.</dd>
            </div>
          </dl>

          <div className="contact-line">
            <a href="tel:+420733213273">+420 733 213 273</a>
            <a href="mailto:info@witova.cz">info@witova.cz</a>
            <span>Informace aktualizovány 07/2026</span>
          </div>
        </div>
      </section>
    </main>
  );
}
