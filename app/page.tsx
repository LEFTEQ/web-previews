export default function Page() {
  const cuts = [
    ["Svíčková pravá", "840 Kč/kg"],
    ["Roštěná", "410 Kč/kg"],
    ["Loupaná plec", "350 Kč/kg"],
    ["Gulášové kostky", "260 Kč/kg"],
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Farma Kopta – úvod">
            <span className="wordmark-mark" aria-hidden="true">K</span>
            <span>
              Farma <strong>Kopta</strong>
              <small>Dubice · Ústí nad Labem</small>
            </span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#bedynky">Bedýnky</a>
            <a href="#farma">Naše farma</a>
            <a className="nav-call" href="tel:7201172913">Zavolat</a>
          </nav>
        </header>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Charolais · vlastní chov a výkrm</p>
            <h1 id="hero-title">Hovězí,<br /><em>které znáte</em><br />od pastviny.</h1>
            <p className="hero-intro">
              Maso z býků odchovaných na 144 hektarech naší farmy v Dubicích.
              Bez anonymního původu, bez prostředníků.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:info@farmakopta.cz?subject=Objednávka%20hovězího%20masa">Objednat bedýnku <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#bedynky">Co v bedýnce dostanu</a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Skot plemene Charolais na pastvině Farmy Kopta v Dubicích"
            />
            <aside className="sale-tag" aria-label="Termín dalšího prodeje masa">
              <span className="sale-kicker">Další prodej</span>
              <strong>říjen—listopad</strong>
              <span className="sale-year">2026</span>
              <span className="sale-note">Předběžné objednávky přijímáme už nyní.</span>
            </aside>
            <span className="place-stamp" aria-hidden="true">DUBICE</span>
          </div>
        </div>

        <a className="mobile-order" href="mailto:info@farmakopta.cz?subject=Objednávka%20hovězího%20masa">
          Objednat maso <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="boxes-section" id="bedynky" aria-labelledby="boxes-title">
        <div className="section-heading">
          <p className="eyebrow">Prodej ze dvora</p>
          <h2 id="boxes-title">Bedýnka, ze které opravdu uvaříte.</h2>
          <p>
            Mix předního a zadního hovězího připravujeme do bedýnek o váze 8–10 kg.
            Konkrétní složení i výsledná cena se odvíjejí od vybraných druhů masa.
          </p>
        </div>

        <div className="boxes-layout">
          <figure className="image-card">
            <img
              src="/section-1.webp"
              alt="Čerstvě připravené hovězí maso z Farmy Kopta"
              loading="lazy"
            />
            <figcaption>
              <span>Orientační cena bedýnky</span>
              <strong>1 800–3 000 Kč</strong>
            </figcaption>
          </figure>

          <div className="order-panel">
            <ol className="order-steps">
              <li>
                <span className="step-number">1</span>
                <div><strong>Napíšete nebo zavoláte</strong><p>Stačí uvést jméno, telefon a požadované množství.</p></div>
              </li>
              <li>
                <span className="step-number">2</span>
                <div><strong>Pošleme přesný termín</strong><p>Týden před prodejem dostanete SMS s datem a časem vyzvednutí.</p></div>
              </li>
              <li>
                <span className="step-number">3</span>
                <div><strong>Vyzvednete v Dubicích</strong><p>Bez zálohy. Zaplatíte hotově nebo okamžitě pomocí QR kódu.</p></div>
              </li>
            </ol>

            <div className="price-list" aria-label="Výběr z ceníku masa">
              <div className="price-head"><span>Výběr z ceníku</span><small>Ceny včetně DPH</small></div>
              {cuts.map(([name, price]) => (
                <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong></div>
              ))}
              <p>V nabídce jsou také kližka, krk, žebra, pupek, kosti na polévku a další řezy podle aktuální porážky.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="farm-section" id="farma" aria-labelledby="farm-title">
        <div className="farm-image-wrap">
          <img
            src="/section-2.webp"
            alt="Pastviny Farmy Kopta v Dubicích u Ústí nad Labem"
            loading="lazy"
          />
          <div className="land-label" aria-label="Rozloha farmy">
            <strong>144 ha</strong>
            <span>půdy kolem Dubic</span>
          </div>
        </div>

        <div className="farm-copy">
          <p className="eyebrow">Odchováno u nás</p>
          <h2 id="farm-title">Bílý skot. Zelené stráně. Poctivé hovězí.</h2>
          <p className="farm-lead">
            Chováme masný skot Charolais – mohutné francouzské plemeno ceněné pro
            kvalitní svalovinu. Býci se rodí a vyrůstají na naší farmě, kde je vykrmujeme
            přibližně do 24 měsíců.
          </p>
          <dl className="facts">
            <div><dt>Původ</dt><dd>vlastní chov v Dubicích</dd></div>
            <div><dt>Plemeno</dt><dd>Charolais</dd></div>
            <div><dt>Převzetí</dt><dd>přímo na farmě</dd></div>
          </dl>
          <div className="contact-note">
            <p>Potřebujete poradit s množstvím nebo výběrem masa?</p>
            <a href="tel:7201172913">720 117 2913</a>
            <a href="mailto:info@farmakopta.cz">info@farmakopta.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
