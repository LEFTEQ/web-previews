export default function Page() {
  const services = [
    {
      title: "Kuchyně a vestavby",
      text: "Kuchyně, šatny a vestavné skříně navrhneme na konkrétní prostor, způsob používání i rozpočet.",
    },
    {
      title: "Nábytek pro celý domov",
      text: "Stoly, obývací sestavy, ložnice i dětské pokoje sladíme do jednoho funkčního interiéru.",
    },
    {
      title: "Textilie a povrchy",
      text: "Tapety, koberce, závěsy a doplňky vybíráme jako součást návrhu, ne až jako dodatečnou dekoraci.",
    },
    {
      title: "Dveře a sedací nábytek",
      text: "Doplníme interiérové dveře, židle a sedací soupravy prověřených evropských značek.",
    },
  ];

  return (
    <main className="pelzer-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Pelzer Interiéry – úvod">
            <span>PELZER</span>
            <small>INTERIÉRY · ČB</small>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co zařídíme</a>
            <a href="#studio">Jak pracujeme</a>
          </nav>

          <a className="header-call" href="tel:+420602461596">
            <span>Zavolat do studia</span>
            602 461 596
          </a>
        </header>

        <div className="hero-layout" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Interiérové studio · České Budějovice</p>
            <h1 id="hero-title">
              Interiér se
              <span>nezařizuje po kusech.</span>
            </h1>
            <p className="hero-lead">
              Nábytek, světlo, textilie i dveře spojíme do prostoru, který funguje jako celek. Od prvního návrhu po odbornou montáž.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420602461596">Domluvit návštěvu studia</a>
              <a className="text-link" href="#nabidka">Prohlédnout možnosti <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-address">F. A. Gerstnera 2156/6 · České Budějovice</p>
          </div>

          <div className="hero-visual">
            <div className="dimension dimension-top" aria-hidden="true"><span>návrh</span><i /></div>
            <div className="dimension dimension-side" aria-hidden="true"><span>realizace</span><i /></div>
            <div className="hero-image-wrap">
              <img
                src="/hero.webp"
                alt="Zakázkově zařízený obytný interiér od Pelzer Interiéry"
              />
            </div>
            <div className="material-tabs" aria-label="Materiály interiéru">
              <span>01 / dřevo</span>
              <span>02 / kámen</span>
              <span>03 / textil</span>
            </div>
          </div>
        </div>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="section-intro">
          <p className="eyebrow">Vybavení bez slepých míst</p>
          <h2 id="offer-title">Od kuchyně až po poslední závěs.</h2>
          <p>
            Nemusíte obcházet několik dodavatelů a hlídat, zda na sebe jejich řešení navazují. V Pelzer Interiéry získáte jedno místo pro návrh, výběr i realizaci.
          </p>
        </div>

        <div className="offer-grid">
          <div className="offer-image">
            <img
              src="/section-1.webp"
              alt="Detail kuchyně a nábytku navrženého na míru"
              loading="lazy"
            />
            <p><span>Na míru prostoru</span>Vlastní výrobní zázemí</p>
          </div>

          <div className="service-list">
            {services.map((service, index) => (
              <article className="service" key={service.title}>
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="studio" id="studio" aria-labelledby="studio-title">
        <div className="studio-image">
          <img
            src="/section-2.webp"
            alt="Materiály a vzorky v českobudějovickém interiérovém studiu"
            loading="lazy"
          />
          <div className="experience-mark" aria-label="Více než 30 let zkušeností">
            <strong>30+</strong>
            <span>let oblékáme<br />české interiéry</span>
          </div>
        </div>

        <div className="studio-copy">
          <p className="eyebrow">Jeden tým, jeden výsledek</p>
          <h2 id="studio-title">Nápad musí obstát i při montáži.</h2>
          <p className="studio-lead">
            Krásný návrh je začátek. Důležité je, aby se nábytek dobře používal, materiály vydržely a každý detail na místě seděl.
          </p>

          <ol className="process-list">
            <li>
              <span>01</span>
              <div><strong>Probereme váš prostor</strong><p>Ve studiu nebo nad podklady zjistíme, co potřebujete vyřešit a jak doma skutečně žijete.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><strong>Navrhneme celek</strong><p>Promyslíme dispozici, nábytek, materiály i osvětlení a ukážeme jejich vzájemné vazby.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><strong>Vyrobíme a namontujeme</strong><p>Zajistíme dopravu, odbornou montáž a následný záruční i pozáruční servis po celé ČR.</p></div>
            </li>
          </ol>

          <a className="studio-contact" href="mailto:pelzer-interiery@pelzer-interiery.cz">
            <span>Napsat do studia</span>
            pelzer-interiery@pelzer-interiery.cz
          </a>
        </div>
      </section>
    </main>
  );
}
