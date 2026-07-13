export default function Page() {
  const services = [
    {
      label: "ZNAČKA",
      title: "Firemní identita",
      text: "Logo, barvy, typografie a pravidla, díky kterým vás lidé poznají na první pohled.",
      output: "strategie · logo · manuál",
    },
    {
      label: "PLOCHA",
      title: "Grafika a výroba",
      text: "Katalogy, obaly, tiskoviny, polepy aut i billboardy. Návrh připravíme rovnou pro skutečnou výrobu.",
      output: "tisk · polepy · předměty",
    },
    {
      label: "OBRAZOVKA",
      title: "Webové stránky",
      text: "Rychlé responzivní weby a e-shopy, které značku představí srozumitelně a promění zájem v poptávku.",
      output: "UX · design · vývoj",
    },
    {
      label: "DOSAH",
      title: "Online marketing",
      text: "PPC, SEO, sociální sítě a obsah propojujeme tak, aby značka nezůstala jen hezkým návrhem.",
      output: "kampaně · obsah · data",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#zacatek" aria-label="MARF — začátek stránky">
            <span>MARF</span>
            <small>grafické studio / Ostrava</small>
          </a>

          <div className="nav-links">
            <a href="#sluzby">Co tvoříme</a>
            <a href="#spoluprace">Jak pracujeme</a>
          </div>

          <a className="nav-contact" href="mailto:info@marf.cz?subject=Poptávka%20projektu">
            Popsat projekt
          </a>
        </nav>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow"><span>Ostrava</span> / studio pro značky v pohybu</p>
            <h1 id="hero-title">
              Od skici až na
              <span className="headline-mark"> ostravský billboard.</span>
            </h1>
            <p className="hero-intro">
              Navrhneme vaši značku a dostaneme ji mezi lidi — na web, obal, auto i do kampaně. Jeden tým hlídá, aby všechno mluvilo stejným jazykem.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:info@marf.cz?subject=Chci%20probrat%20projekt">
                Probrat projekt
                <span aria-hidden="true">↗</span>
              </a>
              <a className="phone-link" href="tel:+420595533136">
                +420 595 533 136
              </a>
            </div>
          </div>

          <figure className="proof" aria-label="Ukázka kreativní práce studia MARF">
            <div className="proof-image">
              <img src="/hero.webp" alt="Barevný návrh vizuální identity připravený grafickým studiem MARF" />
              <span className="crop crop-tl" aria-hidden="true" />
              <span className="crop crop-tr" aria-hidden="true" />
              <span className="crop crop-bl" aria-hidden="true" />
              <span className="crop crop-br" aria-hidden="true" />
              <span className="approval" aria-hidden="true">OSTRAVA<br />SCHVÁLENO</span>
            </div>
            <figcaption>
              <span>NÁHLED / 01</span>
              <span>CMYK · 300 DPI</span>
              <span>MARF 2026</span>
            </figcaption>
          </figure>
        </div>

        <div className="hero-note" aria-label="Rozsah služeb">
          <span>IDENTITA</span>
          <span>WEB</span>
          <span>KAMPAŇ</span>
          <span>VÝROBA</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow"><span>Co tvoříme</span> / od značky po realizaci</p>
          <h2 id="services-title">Jedna myšlenka.<br />Všechny formáty.</h2>
          <p>
            Nemusíte skládat tým z pěti dodavatelů. V MARFu propojujeme analýzu, grafiku, web, marketing i výrobu do jednoho funkčního celku.
          </p>
        </div>

        <div className="services-layout">
          <figure className="studio-image">
            <img src="/section-1.webp" alt="Grafik ve studiu MARF při přípravě návrhů pro tisk a digitální použití" />
            <figcaption>Rozpracováno v Ostravě</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.label}>
                <p className="service-label">{service.label}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <p className="service-output">{service.output}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="spoluprace" aria-labelledby="trust-title">
        <div className="trust-visual">
          <img src="/section-2.webp" alt="Hotové tiskoviny a prezentační materiály realizované studiem MARF" />
          <div className="image-ticket" aria-hidden="true">
            <span>MARF / VÝSTUPNÍ KONTROLA</span>
            <strong>SEDÍ.</strong>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow"><span>Spolupráce</span> / bez přehazování odpovědnosti</p>
          <h2 id="trust-title">Návrhem to u nás nekončí.</h2>
          <p className="trust-lead">
            Pohlídáme data pro tisk, nasazení webu, výrobu polepu i výkon kampaně. Víte, kdo projekt vede, co se právě děje a proč.
          </p>

          <dl className="facts">
            <div>
              <dt>Jedno místo</dt>
              <dd>Strategie, kreativita, produkce i online pod jednou oranžovou střechou.</dd>
            </div>
            <div>
              <dt>Skutečná výroba</dt>
              <dd>Návrhy připravujeme s ohledem na materiál, technologii a místo použití.</dd>
            </div>
            <div>
              <dt>Ostravský tým</dt>
              <dd>Grafici, produkční a vývojáři na adrese Školská 660/3.</dd>
            </div>
          </dl>

          <blockquote>
            <p>
              „Proaktivní přístup, organizace, kreativita a pozitivní odezva na naše změny v harmonogramu je to, co MARF charakterizuje.“
            </p>
            <footer>
              <strong>Ing. Pavla Šústalová</strong>
              <span>marketing, PHARMOS, a.s.</span>
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
