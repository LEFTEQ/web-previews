export default function Page() {
  const services = [
    {
      title: "Měření zraku",
      text: "Optometrista změří váš zrak na přístroji Visionix VX 120 a vysvětlí, co se od poslední kontroly změnilo.",
      meta: "Pro dospělé · po objednání",
    },
    {
      title: "Dioptrické brýle",
      text: "Vybereme obrubu podle tvaru obličeje, způsobu nošení i rozpočtu. Čočky zaměříme přímo pro konkrétní obrubu.",
      meta: "Obruby · čočky · přesné centrování",
    },
    {
      title: "Kontaktní čočky",
      text: "Pomůžeme s první aplikací, správnou manipulací i výběrem čoček pro běžný den, sport nebo střídání s brýlemi.",
      meta: "Aplikace · kontrola · péče",
    },
    {
      title: "Servis brýlí",
      text: "Dotáhneme stranice, upravíme sedýlka a zkontrolujeme usazení brýlí, aby netlačily ani nesjížděly.",
      meta: "Seřízení · drobné opravy · čištění",
    },
  ];

  return (
    <main className="lunettes-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Lunettes optika — úvod">
            <span className="wordmark-mark" aria-hidden="true">
              <i />
              <i />
            </span>
            <span>
              Lunettes
              <small>optika · Pardubice</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co pro vás uděláme</a>
            <a href="#pece">Jak pracujeme</a>
          </nav>

          <a className="header-phone" href="tel:+420777914235">
            Zavolat do optiky
          </a>
        </header>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" /> Dvě pobočky v Pardubicích
            </p>
            <h1 id="hero-title">
              Brýle mají sedět
              <span>vašemu zraku.</span>
              A také vám.
            </h1>
            <p className="hero-intro">
              Změříme vám zrak, vybereme vhodné čočky a najdeme obrubu, ve které se poznáte. Bez spěchu a s vysvětlením každého kroku.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420777914235">
                Objednat měření telefonicky
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                <strong>+420 777 914 235</strong>
                <span>Kancelář je na telefonu 9–15 hod.</span>
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Interiér optiky Lunettes">
            <img
              src="/hero.webp"
              alt="Moderní interiér optiky Lunettes s vystavenými brýlovými obrubami"
              width={1200}
              height={900}
              fetchPriority="high"
            />
            <div className="frame-outline" aria-hidden="true">
              <span className="lens lens-left" />
              <span className="lens lens-right" />
              <span className="bridge" />
            </div>
            <p className="visual-note">
              <span>Od roku 1991</span>
              česká oční optika
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-kicker">Od změření po seřízení</p>
          <h2 id="services-title">Vše pro ostré a pohodlné vidění.</h2>
          <p>
            Neodcházíte jen s brýlemi. Odcházíte s řešením, které odpovídá tomu, jak pracujete, řídíte, sportujete nebo čtete.
          </p>
        </div>

        <div className="services-layout">
          <figure className="services-photo">
            <img
              src="/section-1.webp"
              alt="Detail odborného měření zraku v optice Lunettes"
              width={900}
              height={1100}
              loading="lazy"
            />
            <figcaption>
              <span>Visionix VX 120</span>
              Přesné měření, srozumitelný výsledek
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <div className="service-lens" aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <small>{service.meta}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="care" id="pece" aria-labelledby="care-title">
        <div className="care-image">
          <img
            src="/section-2.webp"
            alt="Optik upravuje brýlovou obrubu pro pohodlné nošení"
            width={1200}
            height={900}
            loading="lazy"
          />
          <div className="image-label">
            <span>48 zkušených kolegů</span>
            napříč sítí Lunettes
          </div>
        </div>

        <div className="care-copy">
          <p className="section-kicker">Péče, která nekončí nákupem</p>
          <h2 id="care-title">Nejdřív posloucháme. Potom vybíráme.</h2>
          <p className="care-lead">
            Jinou korekci potřebujete za volantem a jinou u monitoru. Proto se ptáme na váš běžný den, než doporučíme obrubu nebo typ čoček.
          </p>

          <div className="trust-points">
            <article>
              <strong>Odbornost bez složitých slov</strong>
              <p>Výsledek měření i možnosti čoček vám vysvětlíme tak, abyste se mohli rozhodnout s jistotou.</p>
            </article>
            <article>
              <strong>Výběr pro různé tváře i rozpočty</strong>
              <p>V pardubických pobočkách najdete značkové i dostupnější obruby. Doporučení přizpůsobíme vám, ne cenovce.</p>
            </article>
            <article>
              <strong>Zázemí české optiky od roku 1991</strong>
              <p>Více než tři desetiletí zkušeností spojujeme s moderním měřením a osobním servisem přímo na pobočce.</p>
            </article>
          </div>

          <a className="text-link" href="mailto:lunettes@lunettes.cz">
            Napsat na lunettes@lunettes.cz <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
