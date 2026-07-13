export default function Page() {
  const services = [
    {
      code: "CZ / EU",
      title: "Silniční transport",
      text: "Vnitrostátní i mezinárodní přeprava zboží vlastní flotilou. Kapacitu a termín řešíte s jedním obchodním týmem."
    },
    {
      code: "3 CENTRA",
      title: "Skladování",
      text: "Bezpečné uskladnění v Ústí nad Labem, Praze a Olomouci s celkovou kapacitou 20 000 m²."
    },
    {
      code: "PICK & PACK",
      title: "Logistika pro e-shopy",
      text: "Příjem zboží, evidence, kompletace objednávek, balení a expedice k vašim zákazníkům."
    },
    {
      code: "365 DNÍ",
      title: "Balení a celní služby",
      text: "Balení v několika variantách, celní agenda i odborné poradenství pro běžné a nestandardní zásilky."
    }
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Nákladní vozidlo logistické společnosti RTR při přepravě zásilky"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="RTR – úvodní stránka">
            <span className="wordmark__name">rtr<span>/</span></span>
            <span className="wordmark__descriptor">transport &amp; logistika</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co přepravíme</a>
            <a href="#zazemi">Naše zázemí</a>
          </nav>

          <a className="header-call" href="tel:+420724327153">
            <span>Obchodní oddělení</span>
            +420 724 327 153
          </a>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Ústí nad Labem · doprava po Česku a Evropě</p>
          <h1 id="hero-title">
            Od skladu až na rampu zákazníka.
            <span>Bez překládání odpovědnosti.</span>
          </h1>
          <p className="hero__lead">
            Přepravu, skladování i expedici držíme pod jednou střechou. Vy víte,
            kde zboží je, kdo ho veze a kdy dorazí.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="mailto:obchod@rtr.cz?subject=Poptávka%20dopravy%20a%20logistiky">
              Poptat přepravu
              <span aria-hidden="true">→</span>
            </a>
            <a className="button button--quiet" href="tel:+420724327153">Zavolat dispečink</a>
          </div>
        </div>

        <aside className="waybill" aria-label="Rozsah logistické trasy">
          <div className="waybill__label">Přepravní trasa</div>
          <div className="waybill__route">
            <span className="waybill__stop">
              <i aria-hidden="true" />
              <b>Ústí nad Labem</b>
              <small>sklad / nakládka</small>
            </span>
            <span className="waybill__line" aria-hidden="true"><i /></span>
            <span className="waybill__stop waybill__stop--end">
              <i aria-hidden="true" />
              <b>Česká republika &amp; Evropa</b>
              <small>doručení / vykládka</small>
            </span>
          </div>
          <div className="waybill__status">
            <span aria-hidden="true" /> Vlastní flotila v pohybu
          </div>
        </aside>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="section-kicker">Jedna logistická návaznost</p>
          <h2 id="services-title">Zboží převezmeme, uložíme a dostaneme dál.</h2>
          <p>
            Jednotlivé služby můžete využít samostatně, nebo je spojit do řešení,
            ve kterém se neztrácí zásilka ani informace.
          </p>
        </div>

        <div className="services__layout">
          <figure className="services__visual">
            <img
              src="/section-1.webp"
              alt="Nakládka zboží a logistická manipulace v areálu RTR"
            />
            <figcaption>
              <span>Výchozí bod</span>
              Areál RTR · Krásné Březno
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <p className="service__code">{service.code}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="zazemi" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Skladové zázemí a nákladní technika společnosti RTR"
          />
          <div className="trust__stamp" aria-label="Logistické služby od roku 1991">
            <span>v provozu od</span>
            <strong>1991</strong>
          </div>
        </div>

        <div className="trust__content">
          <p className="section-kicker">Zázemí, které je vidět</p>
          <h2 id="trust-title">Nejsme prostředník. Jsme lidé, sklady a auta na trase.</h2>
          <p className="trust__lead">
            Více než tři desetiletí zajišťujeme přepravu a logistiku pro firmy,
            které potřebují spolehlivou kapacitu i rychlou domluvu při změně plánu.
          </p>

          <dl className="proof-list">
            <div>
              <dt>20 000 m²</dt>
              <dd>skladové kapacity ve třech logistických centrech</dd>
            </div>
            <div>
              <dt>100+ lidí</dt>
              <dd>v dopravě, skladech, expedici a zákaznické péči</dd>
            </div>
            <div>
              <dt>Vlastní flotila</dt>
              <dd>kontrola nad dostupností vozidel i průběhem přepravy</dd>
            </div>
          </dl>

          <div className="location-note">
            <span className="location-note__pin" aria-hidden="true" />
            <p>
              <strong>Centrála Ústí nad Labem</strong>
              U Cukrovaru 6, areál RTR, Krásné Březno
            </p>
            <a href="mailto:obchod@rtr.cz">obchod@rtr.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
