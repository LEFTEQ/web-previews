export default function HomePage() {
  const services = [
    {
      title: "Plynové kotle",
      text: "Záruční i pozáruční opravy, pravidelné prohlídky a odborné uvedení zařízení do provozu.",
      mark: "PLYN",
    },
    {
      title: "Elektrokotle",
      text: "Diagnostika závad, servis, výměna a montáž elektrokotlů pro byty, domy i firemní objekty.",
      mark: "ELEKTRO",
    },
    {
      title: "Ohřívače TUV",
      text: "Servis zařízení pro ohřev vody v domácnostech, SVJ, bytových družstvech a provozovnách.",
      mark: "TUV",
    },
  ];

  return (
    <main>
      <title>Servis kotlů Plzeň | TOP IN – STAVO</title>
      <meta
        name="description"
        content="Autorizovaný servis plynových kotlů, elektrokotlů a ohřívačů TUV v Plzni. Opravy, pravidelné prohlídky, montáže a uvedení do provozu."
      />
      <meta property="og:title" content="TOP IN – STAVO | Servis kotlů v Plzni" />
      <meta
        property="og:description"
        content="Autorizovaný servis plynových kotlů a elektrokotlů pro Plzeň a okolí."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero.webp" />
      <meta name="date" content="2026-07" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__topbar">
          <a className="wordmark" href="#zacatek" aria-label="TOP IN – STAVO, úvodní stránka">
            <span className="wordmark__top">TOP IN</span>
            <span className="wordmark__bottom">STAVO</span>
          </a>

          <nav className="hero__nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co servisujeme</a>
            <a href="#o-nas">Proč my</a>
          </nav>

          <a className="phone-link phone-link--top" href="tel:+420731669698">
            <span>Servisní linka</span>
            +420 731 669 698
          </a>
        </div>

        <div className="hero__layout" id="zacatek">
          <div className="hero__copy">
            <p className="eyebrow">Autorizovaný servis · Plzeň a okolí</p>
            <h1 id="hero-title">
              Kotel má <span>topit.</span>
              <br />Ne překvapovat.
            </h1>
            <p className="hero__lead">
              Servisujeme plynové kotle, elektrokotle a ohřívače vody. Přijedeme na pravidelnou
              prohlídku, najdeme závadu nebo uvedeme nové zařízení do provozu.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="tel:+420731669698">
                Zavolat servis
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="mailto:info@serviskotluplzen.cz">
                Napsat e-mail
              </a>
            </div>
            <div className="availability" aria-label="Provozní doba">
              <span className="availability__light" aria-hidden="true" />
              <span>
                <strong>Po–Pá 8:00–15:00</strong>
                Objednávky přijímáme telefonicky i e-mailem
              </span>
            </div>
          </div>

          <div className="hero__visual">
            <img
              src="/hero.webp"
              alt="Servisní technik TOP IN – STAVO při kontrole kotle v Plzni"
              width="960"
              height="1120"
              fetchPriority="high"
            />
            <div className="gauge" aria-hidden="true">
              <span className="gauge__tick gauge__tick--one" />
              <span className="gauge__tick gauge__tick--two" />
              <span className="gauge__tick gauge__tick--three" />
              <span className="gauge__needle" />
              <span className="gauge__hub" />
            </div>
            <div className="service-tag">
              <span className="service-tag__label">SERVISNÍ OBLAST</span>
              <strong>PLZEŇ</strong>
              <span>+ okolí</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Co pro vás vyřešíme</p>
          <h2 id="services-title">Od pravidelné kontroly po nečekanou závadu.</h2>
          <p>
            Řekněte nám typ zařízení a co se děje. Doporučíme další postup a domluvíme konkrétní
            termín zásahu.
          </p>
        </div>

        <div className="services__body">
          <figure className="services__image">
            <img
              src="/section-1.webp"
              alt="Detail odborné diagnostiky plynového kotle servisním technikem"
              width="900"
              height="720"
              loading="lazy"
            />
            <figcaption>Diagnostika předchází výměně dílů — nejdřív hledáme příčinu.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-card__mark">{service.mark}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
            <div className="service-list__extra">
              <span>Také zajišťujeme</span>
              <p>Revize plynových zařízení · roční prohlídky · spolupráci pro SVJ a družstva</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Servisní vůz TOP IN – STAVO připravený k výjezdu v Plzni"
            width="960"
            height="840"
            loading="lazy"
          />
          <div className="trust__image-note">Výjezdy po Plzni a okolí</div>
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--light">Odbornost bez zbytečných řečí</p>
          <h2 id="trust-title">Víte, kdo přijede a co bude následovat.</h2>
          <p className="trust__intro">
            TOP IN – STAVO je autorizovaný servis pro domácnosti, firmy, SVJ i bytová družstva.
            Zakládáme si na odborném provedení, férovém doporučení a srozumitelné domluvě.
          </p>

          <dl className="trust__facts">
            <div>
              <dt>Servis</dt>
              <dd>Záruční i pozáruční</dd>
            </div>
            <div>
              <dt>Dostupnost</dt>
              <dd>Po–Pá, 8:00–15:00</dd>
            </div>
            <div>
              <dt>Pro koho</dt>
              <dd>Domácnosti, firmy a SVJ</dd>
            </div>
          </dl>

          <div className="trust__contact">
            <div>
              <span>Telefon</span>
              <a href="tel:+420731669698">+420 731 669 698</a>
            </div>
            <div>
              <span>E-mail</span>
              <a href="mailto:info@serviskotluplzen.cz">info@serviskotluplzen.cz</a>
            </div>
          </div>

          <p className="freshness">Informace o službách ověřeny v červenci 2026.</p>
        </div>
      </section>
    </main>
  );
}
