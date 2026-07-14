export default function Page() {
  const services = [
    {
      material: "PAPÍR",
      title: "Vizitky",
      text: "Od hotového návrhu po vlastní grafiku. Tiskneme také na strukturované a speciální papíry."
    },
    {
      material: "PAPÍR",
      title: "Letáky a plakáty",
      text: "Malé i větší série, přesné barvy a dokončení skladem, přehnutím nebo ořezem."
    },
    {
      material: "FÓLIE",
      title: "Polepy aut",
      text: "Návrh, výroba i instalace firemních a designových polepů osobních aut a dodávek."
    },
    {
      material: "FÓLIE",
      title: "Výlohy a okna",
      text: "Řezaná grafika, tištěné motivy i decentní matné fólie pro provozovny a kanceláře."
    },
    {
      material: "FÓLIE",
      title: "Průhledné polepy",
      text: "Certifikované perforované fólie na zadní okna vozidel s výhledem zevnitř."
    },
    {
      material: "OŘEZ",
      title: "Samolepky",
      text: "Odolný tisk s tvarovým ořezem — od jednoduchých štítků po složité kontury."
    }
  ];

  const milestones = [
    ["1998", "BONA MEDIA vzniká v Brně jako grafické a webové studio."],
    ["2007", "Spouštíme specializovaný katalog vizitek tisk-vizitek.cz."],
    ["2010", "Pořizujeme vlastní stroje a otevíráme výrobní provoz v Brně-Slatině."],
    ["DNES", "Grafiku, tisk, řezání i instalaci držíme pod jednou střechou."]
  ];

  return (
    <div className="bona-page">
      <a className="skip-link" href="#obsah">Přejít na obsah</a>

      <header className="site-head" aria-label="Hlavní navigace">
        <a className="wordmark" href="#top" aria-label="BONA MEDIA — úvod">
          <span>BONA</span>
          <span className="wordmark-dot" aria-hidden="true" />
          <small>MEDIA / BRNO</small>
        </a>

        <nav className="site-nav" aria-label="Navigace stránky">
          <a href="#sluzby">Co vyrábíme</a>
          <a href="#studio">Jak pracujeme</a>
        </nav>

        <a className="head-phone" href="tel:+420606101773">606 101 773</a>
      </header>

      <main id="obsah">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="status-line">
              <span className="status-dot" aria-hidden="true" />
              <span>Vyrábíme v Brně-Slatině</span>
              <span className="status-date">Aktualizováno 07 / 2026</span>
            </div>

            <p className="hero-kicker">Tiskárna × grafické studio × polepy</p>
            <h1 id="hero-title">
              <span>Od návrhu</span>
              <span>po poslední</span>
              <span className="ink-word">bublinu.</span>
            </h1>
            <p className="hero-lead">
              Navrhneme grafiku, vytiskneme ji a nalepíme tam, kde má být. Bez přeposílání mezi dodavateli — od roku 1998 pod jednou střechou.
            </p>

            <div className="hero-actions" aria-label="Kontaktní možnosti">
              <a className="button button-primary" href="tel:+420606101773">
                Zavolat do výroby
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="mailto:info@bonamedia.cz">
                Napsat zadání
              </a>
            </div>

            <dl className="hero-facts">
              <div>
                <dt>Ročně</dt>
                <dd>téměř 500 000 vizitek</dd>
              </div>
              <div>
                <dt>Adresa</dt>
                <dd>Langrova 1227/1d, Brno</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <figure className="hero-photo">
              <img
                src="/hero.webp"
                alt="Detail práce v tiskárně a grafickém studiu BONA MEDIA"
                width="1200"
                height="1500"
                fetchPriority="high"
              />
              <figcaption>Vlastní výroba / Brno-Slatina</figcaption>
            </figure>

            <div className="proof-sheet" aria-hidden="true">
              <i className="crop crop-tl" />
              <i className="crop crop-tr" />
              <i className="crop crop-bl" />
              <i className="crop crop-br" />
              <span className="proof-label">KONTROLNÍ NÁTISK</span>
              <strong>BARVA<br />DRŽÍ.</strong>
              <div className="proof-swatches">
                <span />
                <span />
                <span />
                <span />
              </div>
              <small>CMYK / OŘEZ / HOTOVO</small>
            </div>
          </div>
        </section>

        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-label">Co u nás vzniká</p>
            <h2 id="services-title">Papír i fólie.<br />Návrh i výroba.</h2>
            <p>
              Zakázku známe od prvního souboru až po hotový kus. Díky tomu pohlídáme barvu, materiál i provedení dřív, než se chyba dostane do výroby.
            </p>
          </div>

          <div className="services-image">
            <img
              src="/section-1.webp"
              alt="Tiskoviny a vzorníky materiálů ve studiu BONA MEDIA"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <span aria-hidden="true">PAPÍR<br />FÓLIE<br />BARVA</span>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span>{service.material}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio" id="studio" aria-labelledby="studio-title">
          <div className="studio-image">
            <img
              src="/section-2.webp"
              alt="Instalace reklamní fólie na vozidlo v dílně BONA MEDIA"
              width="1200"
              height="1100"
              loading="lazy"
              decoding="async"
            />
            <div className="image-note">
              <span>Žádná levná fólie za každou cenu.</span>
              <strong>Materiál vybíráme podle místa, životnosti a použití.</strong>
            </div>
          </div>

          <div className="studio-content">
            <p className="section-label">Důvěra se nevytiskne na počkání</p>
            <h2 id="studio-title">Výrobu jsme si vzali do vlastních rukou.</h2>
            <p className="studio-intro">
              Začínali jsme grafikou. Když jsme chtěli mít kontrolu i nad výsledkem, pořídili jsme vlastní tiskové a řezací stroje. Dnes v Brně navrhujeme, vyrábíme i instalujeme.
            </p>

            <ol className="timeline">
              {milestones.map(([year, text]) => (
                <li key={year}>
                  <time>{year}</time>
                  <p>{text}</p>
                </li>
              ))}
            </ol>

            <div className="trust-strip">
              <div>
                <strong>1 000–1 500</strong>
                <span>obsloužených klientů ročně</span>
              </div>
              <div>
                <strong>26+ let</strong>
                <span>zkušeností s grafikou a výrobou</span>
              </div>
              <div>
                <strong>1 tým</strong>
                <span>od návrhu po montáž</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
