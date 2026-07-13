export default function Page() {
  const projects = [
    { name: "BD Doudlevecká", place: "Praha", date: "01/2026", state: "Ve výstavbě" },
    { name: "Hoyt Zenklova", place: "Praha 8", date: "09/2025", state: "Ve výstavbě" },
    { name: "Michelské údolí", place: "Praha 4", date: "08/2024", state: "Realizováno" },
    { name: "Na terase", place: "Beroun", date: "10/2022", state: "Realizováno" }
  ];

  return (
    <main>
      <title>Čech & syn | Stavby s pevným základem</title>
      <meta
        name="description"
        content="Česká stavební společnost z Prahy. Generální dodávky staveb, monolitické konstrukce a developerské projekty s rodinným přístupem."
      />
      <meta property="og:title" content="Čech & syn | Stavby s pevným základem" />
      <meta
        property="og:description"
        content="Od monolitu po hotový dům. Stavíme profesionálně, férově a s osobní odpovědností."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero.webp" />

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Stavební pracovník společnosti Čech & syn při práci na pražské stavbě"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Čech & syn – úvod">
            <span className="wordmark__main">ČECH</span>
            <span className="wordmark__joint" aria-hidden="true">&</span>
            <span className="wordmark__sub">SYN / STAVBY</span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co stavíme</a>
            <a href="#projekty">Naše práce</a>
            <a className="site-nav__contact" href="mailto:info@cechasyn.cz">Popsat projekt</a>
          </nav>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Praha · česká rodinná stavební společnost</p>
          <h1 id="hero-title">
            Stavíme od základů.
            <span>A stojíme si za výsledkem.</span>
          </h1>
          <p className="hero__intro">
            Generální dodávka, železobetonové konstrukce i vlastní developerské projekty.
            Jeden tým drží rozpočet, termín a kvalitu v každé fázi stavby.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="mailto:info@cechasyn.cz?subject=Poptávka%20stavby">
              Probrat stavbu
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href="#projekty">Prohlédnout realizace</a>
          </div>
        </div>

        <div className="hero__stamp" aria-label="Tradice, přesnost a osobní odpovědnost">
          <span>TRADICE</span>
          <strong>Č&amp;S</strong>
          <span>ODPOVĚDNOST</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Od konstrukce po předání klíčů</p>
          <h2 id="services-title">Zvládneme celek.<br />Hlídáme detail.</h2>
          <p>
            Na stavbě nechcete skládat deset dodavatelů dohromady. Přijímáme odpovědnost
            za průběh prací a mluvíme s vámi přímo, srozumitelně a včas.
          </p>
        </div>

        <div className="services__visual">
          <img
            src="/section-1.webp"
            alt="Detail železobetonové konstrukce realizované stavební firmou Čech & syn"
            loading="lazy"
          />
          <div className="material-tag" aria-hidden="true">
            <span>BETON</span>
            <span>OCEL</span>
            <span>PŘESNOST</span>
          </div>
        </div>

        <div className="service-list">
          <article className="service-card">
            <p className="service-card__type">Stavba jako celek</p>
            <h3>Generální dodávka</h3>
            <p>Řízení subdodavatelů, harmonogramu, nákladů i kvality od převzetí staveniště po kolaudaci.</p>
          </article>
          <article className="service-card">
            <p className="service-card__type">Nosná část stavby</p>
            <h3>Monolitické konstrukce</h3>
            <p>Bednění, výztuž a betonáž s vlastním odborným zázemím pro přesný a bezpečný výsledek.</p>
          </article>
          <article className="service-card">
            <p className="service-card__type">Od pozemku k bydlení</p>
            <h3>Developerské projekty</h3>
            <p>Bytové domy a rezidenční soubory, u nichž propojujeme zkušenost investora a stavitele.</p>
          </article>
        </div>
      </section>

      <section className="projects" id="projekty" aria-labelledby="projects-title">
        <div className="projects__lead">
          <div>
            <p className="eyebrow">Práce, za kterou je vidět odpovědnost</p>
            <h2 id="projects-title">Praha i za její hranicí.<br />Stejný metr na každé stavbě.</h2>
          </div>
          <p className="projects__statement">
            Rodinný přístup pro nás neznamená malé ambice. Znamená, že za rozhodnutím stojí
            konkrétní člověk a klient vždy ví, s kým svou stavbu řeší.
          </p>
        </div>

        <div className="projects__grid">
          <figure className="projects__image">
            <img
              src="/section-2.webp"
              alt="Dokončený rezidenční projekt společnosti Čech & syn"
              loading="lazy"
            />
            <figcaption>Realizace Čech &amp; syn · Praha a okolí</figcaption>
          </figure>

          <div className="project-list" aria-label="Výběr projektů">
            {projects.map((project) => (
              <article className="project-row" key={project.name}>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.place}</p>
                </div>
                <div className="project-row__meta">
                  <span>{project.state}</span>
                  <time>{project.date}</time>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="trust-strip" aria-label="Kontaktní a firemní údaje">
          <div>
            <span>Sídlo</span>
            <strong>Atrium Flora, Praha 3</strong>
          </div>
          <div>
            <span>Telefon</span>
            <a href="tel:+420237839110">+420 237 839 110</a>
          </div>
          <div>
            <span>E-mail</span>
            <a href="mailto:info@cechasyn.cz">info@cechasyn.cz</a>
          </div>
          <p>Člen skupiny C&amp;S Investia</p>
        </div>
      </section>
    </main>
  );
}
