export default function Page() {
  const services = [
    {
      label: "Betonárna",
      title: "Beton a lité směsi",
      text: "Vyrobíme betonovou, cementovou nebo samonivelační směs podle vašeho projektu. Provoz držíme i v zimě díky ohřevu vody.",
      detail: "Schwing Stetter H1RS",
    },
    {
      label: "Doprava a čerpání",
      title: "Směs dostaneme na místo",
      text: "Přivezeme ji autodomíchávačem nebo Multicarem. Pumpomix dosáhne do 28 metrů, staveništní čerpadlo s hadicemi až do 50 metrů.",
      detail: "0,7–9 m³ / dosah až 50 m",
    },
    {
      label: "Armovna",
      title: "Výztuž podle výkresu",
      text: "Stříháme a ohýbáme stavební ocel přesně podle projektové dokumentace. Hotovou výztuž po dohodě dopravíme na stavbu.",
      detail: "Průměry 6–32 mm",
    },
    {
      label: "Zemní práce",
      title: "Od výkopu po terén",
      text: "Zajistíme základy, inženýrské sítě, demolice, recyklaci stavebního odpadu i podvalníkovou přepravu techniky.",
      detail: "Přeprava do 30 tun",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__image" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
          />
        </div>

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="T-Transportbeton, začátek stránky">
            <span className="wordmark__t">T</span>
            <span className="wordmark__name">transportbeton</span>
            <span className="wordmark__place">Bělá pod Bezdězem</span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co zajistíme</a>
            <a href="#zazemi">Naše zázemí</a>
          </nav>
          <a className="header-phone" href="tel:+420602443531">
            <span>Objednávky</span>
            602 443 531
          </a>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Betonárna · armovna · zemní práce</p>
          <h1 id="hero-title">
            Beton
            <span>nečeká.</span>
          </h1>
          <p className="hero__lead">
            Namícháme, dovezeme a načerpáme beton tam, kde ho právě potřebujete — z betonárny v Bělé pod Bezdězem.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420602443531">
              Zavolat do betonárny
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href="mailto:tbeton@seznam.cz">
              Poslat poptávku
            </a>
          </div>
        </div>

        <div className="dispatch-note" aria-label="Provozní informace">
          <span className="dispatch-note__kicker">Výdej směsí</span>
          <strong>Po–Pá 6:00–16:00</strong>
          <span>So 7:00–12:00</span>
          <small>Po dohodě i mimo otevírací dobu</small>
        </div>

        <div className="hero__location">
          <span aria-hidden="true">●</span>
          Páterovská 1, Bělá pod Bezdězem
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Jedna zakázka, jedno zázemí</p>
          <h2 id="services-title">Od směsi až po připravený terén.</h2>
          <p>
            Nemusíte zvlášť shánět beton, pumpu, výztuž a techniku. Řeknete nám, co se staví a kam se potřebujeme dostat; navrhneme vhodnou dopravu i postup.
          </p>
        </div>

        <div className="services__visual">
          <img
            src="/section-1.webp"
            alt="Autodomíchávač T-Transportbeton při dopravě čerstvé betonové směsi"
          />
          <div className="mix-tag">
            <span>Čerstvá směs</span>
            <strong>z vlastní betonárny</strong>
          </div>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.label}>
              <div className="service__head">
                <span>{service.label}</span>
                <span aria-hidden="true">＋</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <strong>{service.detail}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="facility" id="zazemi" aria-labelledby="facility-title">
        <div className="facility__image">
          <img
            src="/section-2.webp"
            alt="Technologické zázemí betonárny v Bělé pod Bezdězem"
          />
          <span className="facility__since">Vyrábíme od roku 2008</span>
        </div>

        <div className="facility__content">
          <p className="eyebrow">Jistota za každou várkou</p>
          <h2 id="facility-title">Počítačem řízená výroba. Lidé, kterým se dovoláte.</h2>
          <p className="facility__intro">
            Betonárna Schwing Stetter H1RS hlídá přesné dávkování směsi. Zbytkový beton vracíme do procesu v recyklačním zařízení a díky ohřevu vody vyrábíme celoročně.
          </p>

          <dl className="facts">
            <div>
              <dt>Výroba</dt>
              <dd>Schwing Stetter H1RS</dd>
            </div>
            <div>
              <dt>Čerpání</dt>
              <dd>CIFA 28 m / Schwing až 50 m</dd>
            </div>
            <div>
              <dt>Doprava</dt>
              <dd>Autodomíchávače 6–9 m³</dd>
            </div>
            <div>
              <dt>Provozovna</dt>
              <dd>Páterovská 1, Bělá pod Bezdězem</dd>
            </div>
          </dl>

          <blockquote>
            <p>„Domíchávač přijel v domluvený čas a pumpa dosáhla přesně tam, kam bylo potřeba.“</p>
            <cite>Zkušenost zákazníka z místní stavby</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
