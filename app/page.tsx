export default function Page() {
  const lessons = [
    {
      label: "Škola bez záseků",
      title: "Doučování předmětů",
      text: "Matematika, čeština, fyzika i další školní předměty. Lektor naváže přesně tam, kde se učivo přestalo skládat dohromady.",
      note: "ZŠ · SŠ · domácí příprava",
    },
    {
      label: "Zkouška s plánem",
      title: "Přijímačky a maturita",
      text: "Systematická příprava na CERMAT, SCIO i maturitní zkoušky. Procvičíte zadání, časovou strategii i témata, která vám berou jistotu.",
      note: "CERMAT · SCIO · maturita",
    },
    {
      label: "Jazyk pro život",
      title: "Cizí jazyky",
      text: "Konverzace, školní angličtina, jazyk do práce i příprava na certifikát. Tempo a obsah lekcí se přizpůsobí tomu, kde jazyk skutečně používáte.",
      note: "škola · práce · certifikáty",
    },
  ];

  const promises = [
    ["1 : 1", "Na lekci jste jen vy a váš lektor."],
    ["0 Kč", "Za zrušení více než 24 hodin předem."],
    ["Bez balíčků", "Zaplatíte jen lekce, které proběhly."],
    ["Podle vás", "Učebna, domov, město nebo online."],
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Doučování Doma – úvod">
            <span>doučování</span>
            <strong>doma</strong>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#vyuka">Co učíme</a>
            <a href="#proc-my">Proč k nám</a>
            <a className="nav-phone" href="tel:+420602506464">Zavolat</a>
          </nav>
        </header>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Soukromá výuka · Hradec Králové</p>
            <h1 id="hero-title">
              Když učivo
              <span>konečně cvakne.</span>
            </h1>
            <p className="hero-lead">
              Jeden student, jeden pečlivě vybraný lektor a lekce sestavená podle toho, co právě potřebujete zvládnout.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420602506464">Domluvit první lekci</a>
              <a className="button button-secondary" href="#vyuka">Vybrat výuku</a>
            </div>
            <p className="contact-line">
              Raději se nejdřív zeptáte? <a href="tel:+420602506464">+420 602 506 464</a>
            </p>
          </div>

          <div className="hero-visual">
            <div className="image-frame hero-image-frame">
              <img
                src="/hero.webp"
                alt="Individuální doučování studenta s lektorem"
                width="1200"
                height="980"
              />
            </div>
            <div className="aha-mark" aria-hidden="true">
              <span>Aha!</span>
              <svg viewBox="0 0 180 112" role="presentation">
                <path d="M12 62C31 13 144 4 168 48C190 90 89 112 30 91C-3 79 1 48 32 27" />
              </svg>
            </div>
            <p className="visual-note"><span>✓</span> Učivo vysvětlené vaším tempem</p>
          </div>
        </div>
      </section>

      <section className="lessons" id="vyuka" aria-labelledby="lessons-title">
        <div className="section-heading">
          <p className="eyebrow">S čím vám pomůžeme</p>
          <h2 id="lessons-title">Nejdřív najdeme zásek. Pak cestu dál.</h2>
          <p>Výuku neskládáme z hotového balíčku. Začínáme tím, co chcete umět vy nebo vaše dítě.</p>
        </div>

        <div className="lessons-layout">
          <div className="lesson-image image-frame">
            <img
              src="/section-1.webp"
              alt="Lektor vysvětluje studentovi školní látku u stolu"
              width="1000"
              height="1250"
              loading="lazy"
            />
            <p>Hradec Králové<br /><strong>osobně i online</strong></p>
          </div>

          <div className="lesson-list">
            {lessons.map((lesson) => (
              <article className="lesson-card" key={lesson.title}>
                <p className="card-label">{lesson.label}</p>
                <h3>{lesson.title}</h3>
                <p>{lesson.text}</p>
                <span>{lesson.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="proc-my" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Proč Doučování Doma</p>
            <h2 id="trust-title">Soustředění na výuku. Žádné drobné písmo kolem.</h2>
            <p className="trust-intro">
              Lekce se přizpůsobí vašemu týdnu, aktuálnímu učivu i místu. Když se potřeby změní, změníme plán s vámi.
            </p>

            <div className="promise-grid">
              {promises.map(([value, text]) => (
                <article className="promise" key={value}>
                  <strong>{value}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="trust-visual">
            <div className="image-frame trust-image-frame">
              <img
                src="/section-2.webp"
                alt="Přátelská individuální lekce v pohodlné učebně"
                width="1100"
                height="900"
                loading="lazy"
              />
            </div>
            <blockquote>
              <p>„Nejsme seznam neznámých učitelů. Lektory vybíráme podle znalostí i podle toho, zda je umějí srozumitelně předat.“</p>
              <cite>Tým Doučování Doma</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
