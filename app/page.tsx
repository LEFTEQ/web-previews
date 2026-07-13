const vehicles = [
  {
    model: "Peugeot 208",
    type: "Městský hatchback",
    price: "479 000 Kč",
    note: "včetně DPH",
  },
  {
    model: "Peugeot Partner",
    type: "Praktický užitkový vůz",
    price: "542 080 Kč",
    note: "včetně DPH",
  },
  {
    model: "Peugeot Boxer",
    type: "Dodávka pro podnikání",
    price: "741 730 Kč",
    note: "včetně DPH",
  },
];

const reviews = [
  {
    text: "Příjemná obsluha, náhradní auto mi bylo poskytnuto a vůz byl rychle opravený. Všem doporučuji.",
    author: "Linda B.",
  },
  {
    text: "Navštívili jsme i konkurenční značky, ale díky celkovému dojmu jsme se rozhodli právě pro Peugeot 208.",
    author: "Dana T.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="IC West – úvodní stránka">
            <span className="wordmark-ic">IC</span>
            <span className="wordmark-west">WEST</span>
            <small>autocentrum · Plzeň</small>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#vozy">Vozy skladem</a>
            <a href="#zkusenost">Proč IC West</a>
            <a className="nav-phone" href="tel:+420377244717">377 244 717</a>
          </nav>
        </header>

        <div className="hero-layout" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Autobazar a servis · Slovanská alej 24</p>
            <h1 id="hero-title">VŮZ, KTERÝ<br />SEDÍ VAŠEMU<br /><em>ŽIVOTU.</em></h1>
            <p className="hero-lead">
              Skladové vozy Peugeot si v Plzni prohlédnete bez čekání. Pomůžeme s výběrem, testovací jízdou i následným servisem.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#vozy">Prohlédnout vozy</a>
              <a className="button button-quiet" href="tel:+420377244717">Zavolat prodejci</a>
            </div>
          </div>

          <div className="windshield-stage">
            <div className="windshield-frame">
              <img
                src="/hero.webp"
                alt="Vůz Peugeot připravený k prohlídce v autocentru IC West v Plzni"
                width="1600"
                height="1067"
                loading="eager"
                fetchPriority="high"
              />
              <div className="road-line" aria-hidden="true" />
            </div>
            <div className="stock-ticket" aria-label="Informace o dostupnosti">
              <span>PLZEŇ</span>
              <strong>SKLADEM</strong>
              <small>prohlídka · jízda · odjezd</small>
            </div>
          </div>
        </div>

        <div className="hero-service-strip" aria-label="Dnešní informace">
          <div>
            <span>Prodej vozů</span>
            <strong>po–pá od 8:00</strong>
          </div>
          <div>
            <span>Servis</span>
            <strong>po–pá od 7:00</strong>
          </div>
          <div>
            <span>Adresa</span>
            <strong>Slovanská alej 24, Plzeň</strong>
          </div>
        </div>
      </section>

      <section className="inventory section-shell" id="vozy" aria-labelledby="inventory-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Aktuální výběr v Plzni</p>
            <h2 id="inventory-title">Nejdřív si vůz prohlédnout.<br />Pak se rozhodnout.</h2>
          </div>
          <p>
            Žádný anonymní konfigurátor. U skladového vozu znáte konkrétní cenu a můžete si rovnou domluvit testovací jízdu.
          </p>
        </div>

        <div className="inventory-layout">
          <figure className="inventory-photo">
            <img
              src="/section-1.webp"
              alt="Řada skladových vozů v areálu IC West Plzeň"
              width="1400"
              height="1050"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Vozy připravené k osobní prohlídce na Slovanské aleji.</figcaption>
          </figure>

          <div className="vehicle-list">
            {vehicles.map((vehicle) => (
              <article className="vehicle-card" key={vehicle.model}>
                <div>
                  <p>{vehicle.type}</p>
                  <h3>{vehicle.model}</h3>
                </div>
                <div className="vehicle-price">
                  <span>od</span>
                  <strong>{vehicle.price}</strong>
                  <small>{vehicle.note}</small>
                </div>
                <a href="tel:+420377244717" aria-label={`Zeptat se na vůz ${vehicle.model}`}>
                  Zeptat se na vůz <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="zkusenost" aria-labelledby="trust-title">
        <div className="section-shell trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Prodej i péče pod jednou střechou</p>
            <h2 id="trust-title">Auto nekončí předáním klíčů.</h2>
            <p className="trust-intro">
              V IC West řešíte výběr vozu, financování, originální díly i pravidelný servis na jednom místě. Když je vůz v dílně, podle dostupnosti zajistíme náhradní auto.
            </p>

            <dl className="service-facts">
              <div>
                <dt>Servisní linka</dt>
                <dd><a href="tel:+420377244717">+420 377 244 717</a></dd>
              </div>
              <div>
                <dt>Servis ve všední dny</dt>
                <dd>7:00–11:30 · 12:00–17:00</dd>
              </div>
              <div>
                <dt>Sobota</dt>
                <dd>8:00–12:00</dd>
              </div>
            </dl>
          </div>

          <div className="trust-visual">
            <img
              src="/section-2.webp"
              alt="Technik IC West při péči o vůz v plzeňském servisu"
              width="1400"
              height="1050"
              loading="lazy"
              decoding="async"
            />
            <div className="service-tag">
              <span>OBJEDNÁNÍ SERVISU</span>
              <a href="tel:+420377244717">Zavolat 377 244 717</a>
            </div>
          </div>

          <div className="review-row" aria-label="Zkušenosti zákazníků">
            {reviews.map((review) => (
              <blockquote key={review.author}>
                <p>„{review.text}“</p>
                <cite>{review.author} · zákaznice IC West</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
