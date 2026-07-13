export default function Page() {
  const concerns = [
    {
      title: "Záda, páteř a klouby",
      text: "Bolest zad, výhřez ploténky, skolióza, plochonoží i dlouhodobé přetížení z práce nebo sportu."
    },
    {
      title: "Po úrazu nebo operaci",
      text: "Pomůžeme vám bezpečně obnovit rozsah pohybu, sílu a jistotu při běžných denních činnostech."
    },
    {
      title: "Neurologie a bolesti hlavy",
      text: "Řešíme funkční obtíže pohybového aparátu, motání hlavy, migrény a následky postižení periferních nervů."
    },
    {
      title: "Ženská fyzioterapie",
      text: "Citlivá péče při inkontinenci, funkční sterilitě a dalších obtížích spojených s pánevním dnem."
    }
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Fyzio Gold – úvod">
            <span>fyzio</span><strong>gold</strong>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#pomoc">S čím pomáháme</a>
            <a href="#pece">Jak probíhá péče</a>
            <a className="nav-phone" href="tel:+420722096773">722 096 773</a>
          </nav>
        </header>

        <div className="hero-layout" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Rehabilitace · České Budějovice</p>
            <h1 id="hero-title">
              Zpátky
              <span>do pohybu.</span>
            </h1>
            <p className="hero-lead">
              Najdeme příčinu vašich obtíží a sestavíme léčbu na míru — od první úlevy až po pohyb, kterému znovu věříte.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420722096773">Zavolat a objednat se</a>
              <span className="hours">Po–pá · 7:00–15:30</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="movement-arc" aria-hidden="true">
              <span>uvolnit</span>
              <span>obnovit</span>
              <span>posílit</span>
            </div>
            <img
              src="/hero.webp"
              alt="Fyzioterapeutické vyšetření pohybu v centru Fyzio Gold"
              width="960"
              height="1120"
              fetchPriority="high"
            />
            <div className="address-card">
              <span>Najdete nás</span>
              <strong>Kněžskodvorská 2277/26</strong>
              <small>České Budějovice</small>
            </div>
          </div>
        </div>
      </section>

      <section className="help-section" id="pomoc" aria-labelledby="help-title">
        <div className="section-intro">
          <p className="eyebrow">Když pohyb bolí nebo nejde jako dřív</p>
          <h2 id="help-title">S čím vám pomůžeme</h2>
          <p>
            Akutní i chronické potíže posuzujeme v souvislostech. Nepracujeme podle jednoho univerzálního postupu — terapii vybíráme podle vašeho těla, diagnózy a cíle.
          </p>
        </div>

        <div className="help-layout">
          <figure className="treatment-photo">
            <img
              src="/section-1.webp"
              alt="Individuální fyzioterapie v moderním pracovišti Fyzio Gold"
              width="900"
              height="1080"
              loading="lazy"
            />
            <figcaption>Individuální terapie podle aktuálního stavu</figcaption>
          </figure>

          <div className="concern-list">
            {concerns.map((concern) => (
              <article className="concern" key={concern.title}>
                <span className="joint-mark" aria-hidden="true" />
                <div>
                  <h3>{concern.title}</h3>
                  <p>{concern.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="care-section" id="pece" aria-labelledby="care-title">
        <div className="care-media">
          <img
            src="/section-2.webp"
            alt="Světlá a moderně vybavená ordinace rehabilitačního centra Fyzio Gold"
            width="1100"
            height="850"
            loading="lazy"
          />
          <p className="media-note">Nadstandardně vybavené pracoviště v Českých Budějovicích</p>
        </div>

        <div className="care-copy">
          <p className="eyebrow">Od vyšetření k jistějšímu pohybu</p>
          <h2 id="care-title">Péče, která má plán</h2>
          <p className="care-lead">
            Nejprve si poslechneme, co vás omezuje. Vyšetříme způsob pohybu, zvolíme vhodnou metodu a ukážeme vám konkrétní cviky pro domácí pokračování.
          </p>

          <div className="method-grid">
            <article>
              <h3>Fyzioterapie</h3>
              <p>Obnovení přirozeného pohybu a snížení přetížení pohybového systému.</p>
              <strong>550 Kč / 30 min.</strong>
            </article>
            <article>
              <h3>Lymfatická masáž</h3>
              <p>Jemná manuální péče podporující tok lymfy a léčbu mízních otoků.</p>
              <strong>990 Kč / 55 min.</strong>
            </article>
          </div>

          <aside className="insurance" aria-label="Úhrada péče">
            <div>
              <span>Na poukaz FT</span>
              <p>VZP · ZPMV · VoZP · RBP · OZP</p>
            </div>
            <div>
              <span>Rehabilitační lékař</span>
              <p>Poukaz typu K u VZP</p>
            </div>
          </aside>

          <p className="benefits">
            Přijímáme také UNIŠEK, Sodexo, Benefit Plus, Gallery Beta a příspěvky z fondu FKSP.
          </p>
        </div>
      </section>
    </main>
  );
}
