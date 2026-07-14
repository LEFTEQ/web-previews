export default function Page() {
  const menuItems = [
    {
      category: "Z naší udírny",
      name: "Krůtí pastrami burger",
      description:
        "Krůtí pastrami, gouda, naše majonéza, nakládaná okurka, sezamová houska a domácí hranolky.",
      detail: "150 g",
      price: "298 Kč",
    },
    {
      category: "Z vyzrálého masa",
      name: "Tenderloin steak",
      description:
        "Pravá česká svíčková s bylinkovo-česnekovým máslem. Propečení připravíme podle vás.",
      detail: "200 g",
      price: "682 Kč",
    },
    {
      category: "Stračena klasik",
      name: "Čerstvě pomletý tatarák",
      description:
        "Hovězí vrchní šál, lanýžová pasta, kapary, červená cibule a topinky na oleji nebo nasucho.",
      detail: "150 g",
      price: "365 Kč",
    },
  ];

  return (
    <>
      <title>Stračena Pub | Restaurace Ostrava–Výškovice</title>
      <meta
        name="description"
        content="Vyzrálé steaky, známé ostravské burgery, vlastní pečivo a osm píp v restauraci Stračena Pub v Ostravě–Výškovicích."
      />
      <meta property="og:title" content="Stračena Pub Ostrava–Výškovice" />
      <meta
        property="og:description"
        content="Poctivá kuchyně, výběrové maso a osm píp v klidném prostředí Výškovic."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:image" content="/hero.webp" />

      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <main className="sp-page" id="obsah">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__tile" aria-hidden="true" />

          <header className="masthead">
            <a className="wordmark" href="#zacatek" aria-label="Stračena Pub – začátek stránky">
              <span className="wordmark__name">Stračena</span>
              <span className="wordmark__place">Pub · Ostrava–Výškovice</span>
            </a>

            <nav className="nav" aria-label="Hlavní navigace">
              <a href="#nabidka">Co vaříme</a>
              <a href="#o-stracene">O Stračeně</a>
            </nav>

            <a className="masthead__phone" href="tel:+420778000846">
              Rezervovat stůl
            </a>
          </header>

          <div className="hero__layout" id="zacatek">
            <div className="hero__copy">
              <p className="eyebrow">
                <span>Restaurace a penzion</span>
                <span>Ostrava–Výškovice</span>
              </p>

              <h1 id="hero-title">
                Maso má
                <span>svůj čas.</span>
              </h1>

              <p className="hero__lead">
                Steak necháme vyzrát. Housku upečeme. Pastrami vyudíme. Vy si jen vyberete,
                co vám dnes udělá radost.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="tel:+420778000846">
                  Zavolat a rezervovat
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="button button--quiet" href="#nabidka">
                  Prohlédnout výběr
                </a>
              </div>

              <p className="hero__note">
                Osm píp · výběrová vína · nekuřácký podnik · venkovní terasa
              </p>
            </div>

            <figure className="hero__visual">
              <img
                src="/hero.webp"
                alt="Jídlo připravené v kuchyni restaurace Stračena Pub"
                width="1200"
                height="1500"
                fetchPriority="high"
                decoding="async"
              />
              <figcaption>Výběrové maso připravujeme s respektem k řezu i času.</figcaption>

              <div className="age-scale" aria-label="Steakové maso zraje 21 až 30 dní">
                <span className="age-scale__label">Zrání steaků</span>
                <span className="age-scale__number">21</span>
                <span className="age-scale__ticks" aria-hidden="true" />
                <span className="age-scale__number">30</span>
                <span className="age-scale__unit">dní</span>
              </div>
            </figure>
          </div>
        </section>

        <section className="menu-section" id="nabidka" aria-labelledby="menu-title">
          <div className="section-heading">
            <p className="section-kicker">Z kuchyně a udírny</p>
            <h2 id="menu-title">Když přijdete na maso.</h2>
            <p>
              Burgery, o kterých se mluví po celé Ostravě, české vyzrálé steaky a vlastní
              uzeniny. K předkrmům pečeme domácí chléb, k burgerům sezamové housky.
            </p>
          </div>

          <div className="menu-showcase">
            <figure className="menu-showcase__image">
              <img
                src="/section-1.webp"
                alt="Detail jídla z nabídky Stračena Pub"
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Poctivě od základu, bez zkratek.</figcaption>
            </figure>

            <div className="menu-list" aria-label="Výběr z jídelního lístku">
              {menuItems.map((item) => (
                <article className="menu-item" key={item.name}>
                  <p className="menu-item__category">{item.category}</p>
                  <div className="menu-item__title">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                  <p className="menu-item__description">{item.description}</p>
                  <p className="menu-item__detail">{item.detail}</p>
                </article>
              ))}
              <p className="menu-list__note">
                Alergeny uvádíme u každého jídla; kompletní seznam vám ukáže obsluha.
              </p>
            </div>
          </div>
        </section>

        <section className="story-section" id="o-stracene" aria-labelledby="story-title">
          <div className="story-section__image">
            <img
              src="/section-2.webp"
              alt="Prostředí restaurace Stračena Pub v Ostravě–Výškovicích"
              width="1200"
              height="1050"
              loading="lazy"
              decoding="async"
            />
            <p>Výškovice · Ostrava</p>
          </div>

          <div className="story-section__content">
            <p className="section-kicker">Proč právě Stračena</p>
            <h2 id="story-title">Klidné místo. Kuchyně, která si dá práci.</h2>
            <p className="story-section__intro">
              Stračena je restaurace i penzion v klidné části Výškovic. Maso vybíráme i z
              Farmy Klokočov a steakové řezy necháváme zrát ve speciálních boxech 21 až 30 dní.
            </p>

            <dl className="facts">
              <div>
                <dt>Na místě</dt>
                <dd>Velká venkovní terasa a dětské hřiště pro pohodový oběd s rodinou.</dd>
              </div>
              <div>
                <dt>Pro společnost</dt>
                <dd>Nekuřácké prostory pro oslavy, svatby, firemní večírky i společné večeře.</dd>
              </div>
              <div>
                <dt>Ve sklenici</dt>
                <dd>Osm píp s pivními speciály a pečlivě vybraná vína k masu i dezertu.</dd>
              </div>
            </dl>

            <address className="contact-strip">
              <span>Ostrava–Výškovice</span>
              <a href="tel:+420778000846">+420 778 000 846</a>
              <a href="mailto:info@stracenapub.cz">info@stracenapub.cz</a>
            </address>
          </div>
        </section>
      </main>
    </>
  );
}
