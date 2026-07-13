export default function Page() {
  return (
    <main className="strob-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="ŠTROB a spol. – úvod">
            <span className="wordmark-name">ŠTROB <b>&amp;</b></span>
            <span className="wordmark-note">tepelné systémy · Budějovice</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co umíme</a>
            <a href="#jistota">Proč ŠTROB</a>
            <a className="nav-phone" href="tel:+420387314334" aria-label="Zavolat na číslo 387 314 334">
              Zavolat
            </a>
          </nav>
        </header>

        <div className="hero-layout" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Plynařství a tepelná technika · České Budějovice</p>
            <h1 id="hero-title">
              Teplo drží
              <span>v každém spoji.</span>
            </h1>
            <p className="hero-lead">
              Navrhneme, zapojíme a servisujeme tepelné čerpadlo jako jeden funkční systém — od zdroje přes regulaci až po teplou vodu.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420387314334">
                Zavolat technikovi
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="mailto:tepelka@strob.cz">
                tepelka@strob.cz
              </a>
            </div>
            <p className="hero-proof">
              <strong>Přes 30 let v oboru.</strong> Návrh, realizace i vlastní servis z jedné českobudějovické firmy.
            </p>
          </div>

          <div className="system-visual" aria-label="Tepelné čerpadlo jako součást celého topného okruhu">
            <div className="image-shell">
              <img
                src="/hero.webp"
                alt="Technik u venkovní jednotky tepelného čerpadla"
                width="960"
                height="1120"
                fetchPriority="high"
              />
            </div>
            <div className="circuit-orbit" aria-hidden="true">
              <span className="orbit-node orbit-source">zdroj</span>
              <span className="orbit-node orbit-home">dům</span>
              <span className="orbit-node orbit-water">teplá voda</span>
              <span className="orbit-node orbit-service">servis</span>
            </div>
            <div className="temperature-tag">
              <span>Jižní Čechy</span>
              <strong>teplo bez nejistoty</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-shell" id="nabidka" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Jeden systém, jeden odpovědný tým</p>
          <h2 id="services-title">Od výpočtu domu až po první teplou sprchu.</h2>
          <p>
            Neprodáváme samostatnou krabici. Řešíme výkon, hydrauliku, zásobník i regulaci tak, aby spolu všechno skutečně fungovalo.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-image">
            <img
              src="/section-1.webp"
              alt="Odborná montáž rozvodů a technologie tepelného čerpadla"
              width="1000"
              height="760"
              loading="lazy"
            />
            <figcaption>
              <span>Realizace</span>
              Vlastní odborně školení pracovníci
            </figcaption>
          </figure>

          <div className="service-list">
            <article>
              <p className="service-code">VZDUCH ↔ VODA</p>
              <h3>Tepelná čerpadla pro novostavby i rekonstrukce</h3>
              <p>Navrhneme výkon podle tepelné ztráty domu, připravíme zapojení a uvedeme systém Vaillant do provozu.</p>
            </article>
            <article>
              <p className="service-code">ZEMĚ ↔ VODA</p>
              <h3>Stabilní výkon ze zemního zdroje</h3>
              <p>Propojíme čerpadlo s vrtem nebo plošným kolektorem a postaráme se o celý technologický okruh.</p>
            </article>
            <article>
              <p className="service-code">PLYN + HYDRAULIKA</p>
              <h3>Kotle, zásobníky a kombinované zdroje</h3>
              <p>Modernizujeme plynové vytápění, zapojujeme zásobníky a připravujeme systémy pro spolupráci více zdrojů tepla.</p>
            </article>
            <article>
              <p className="service-code">ŘÍZENÍ</p>
              <h3>Regulace, které rozumíte</h3>
              <p>Nastavíme systémový regulátor, termostat i ovládání telefonem a při předání vše srozumitelně ukážeme.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="trust section-shell" id="jistota" aria-labelledby="trust-title">
        <div className="trust-layout">
          <div className="trust-copy">
            <p className="eyebrow">Servis nekončí montáží</p>
            <h2 id="trust-title">Když topení potřebuje pomoc, víte, kdo přijede.</h2>
            <p className="trust-intro">
              Systémy sami navrhujeme, montujeme i servisujeme. Technik proto nehledá cizí chyby naslepo — zná zapojení i použité komponenty.
            </p>

            <dl className="facts">
              <div>
                <dt>30+ let</dt>
                <dd>zkušeností s vytápěním a plynařstvím</dd>
              </div>
              <div>
                <dt>do 24 h</dt>
                <dd>servisní zásah podle dostupnosti a naléhavosti</dd>
              </div>
              <div>
                <dt>10 let</dt>
                <dd>možná záruka na kompresor vybraných systémů</dd>
              </div>
            </dl>

            <div className="local-note">
              <span aria-hidden="true">●</span>
              <p>
                <strong>Zázemí máme v Českých Budějovicích.</strong><br />
                Obsluhujeme zákazníky v regionu a servis zajišťují naši vlastní pracovníci.
              </p>
            </div>
          </div>

          <figure className="trust-image">
            <img
              src="/section-2.webp"
              alt="Servisní technik kontroluje zapojení topného systému"
              width="960"
              height="1080"
              loading="lazy"
            />
            <figcaption>
              <span>Servisní dispečink tepelných čerpadel</span>
              <a href="tel:+420720872851">720 872 851</a>
              <small>Po–Pá, mimo pracovní dobu záznamník</small>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
