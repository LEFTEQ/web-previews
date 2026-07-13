export default function Page() {
  return (
    <>
      <title>Zednictví Miroslav Veselý | Zateplení fasád Ústí nad Labem</title>
      <meta
        name="description"
        content="Zateplení fasád, hrubé stavby a interiérové práce v Ústí nad Labem. Vlastní zkušené party, osobní prohlídka a záruka až 60 měsíců."
      />
      <meta property="og:title" content="Zednictví Miroslav Veselý" />
      <meta
        property="og:description"
        content="Fasády děláme ve vlastních rukou — od prohlídky domu po poslední vrstvu omítky."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero.webp" />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%232145d6'/%3E%3Cpath d='M14 45V18h8l10 15 10-15h8v27h-8V31L32 45 22 31v14z' fill='white'/%3E%3C/svg%3E"
      />

      <main className="mv-site" id="zacatek">
        <section className="hero" aria-labelledby="hero-title">
          <header className="topbar">
            <a className="brand" href="#zacatek" aria-label="Miroslav Veselý — začátek stránky">
              <span className="brand-mark" aria-hidden="true">MV</span>
              <span className="brand-name">
                <strong>Miroslav Veselý</strong>
                <small>zednictví · Ústí nad Labem</small>
              </span>
            </a>

            <nav className="navigation" aria-label="Hlavní navigace">
              <a className="nav-link" href="#sluzby">Co děláme</a>
              <a className="nav-link" href="#duvera">Jak pracujeme</a>
              <a className="nav-cta" href="#duvera">Poptat fasádu</a>
            </nav>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal">Fasády a zednické práce · Ústecko</p>
              <h1 id="hero-title" className="reveal reveal-two">
                Fasáda,<br />
                <span>která drží.</span>
              </h1>
              <p className="hero-lead reveal reveal-three">
                Dům prohlédneme, navrhneme vhodnou skladbu a zateplení provedeme vlastní partou. Bez přeprodávání práce neznámým subdodavatelům.
              </p>
              <div className="hero-actions reveal reveal-four">
                <a className="primary-button" href="#duvera">Domluvit prohlídku stavby</a>
                <a className="text-link" href="#sluzby">Prohlédnout služby <span aria-hidden="true">↓</span></a>
              </div>

              <ul className="proof-strip reveal reveal-four" aria-label="Hlavní zkušenosti firmy">
                <li><strong>23 let</strong><span>zkušeností s fasádami</span></li>
                <li><strong>kolem 50 domů</strong><span>zateplených každý rok</span></li>
                <li><strong>až 60 měsíců</strong><span>záruky na dílo</span></li>
              </ul>
            </div>

            <figure className="hero-visual reveal reveal-image">
              <img
                src="/hero.webp"
                alt="Řemeslník při realizaci zateplené fasády rodinného domu"
              />
              <figcaption>Pracujeme na rodinných domech, panelových domech i větších budovách.</figcaption>

              <div className="facade-sample" aria-label="Vrstvy správně provedené fasády">
                <p>Skladba fasády</p>
                <ol>
                  <li><i className="layer-finish" aria-hidden="true" /><span>finální omítka</span></li>
                  <li><i className="layer-mesh" aria-hidden="true" /><span>stěrka a perlinka</span></li>
                  <li><i className="layer-insulation" aria-hidden="true" /><span>tepelný izolant</span></li>
                  <li><i className="layer-wall" aria-hidden="true" /><span>nosné zdivo</span></li>
                </ol>
              </div>
            </figure>
          </div>
        </section>

        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-label">Práce podle sezony</p>
            <h2 id="services-title">Od zateplení po hrubou stavbu.</h2>
            <p>
              V teplých měsících se soustředíme na fasády. Přes zimu přesouváme zkušenost s přesnou, čistou prací do interiérů.
            </p>
          </div>

          <div className="services-layout">
            <figure className="section-photo service-photo">
              <img
                src="/section-1.webp"
                alt="Detail odborně prováděného zateplení fasády"
                loading="lazy"
              />
              <figcaption>Zvolenou skladbu přizpůsobíme domu, podkladu i rozpočtu.</figcaption>
            </figure>

            <div className="service-list">
              <article>
                <p className="trade-label">Hlavní specializace</p>
                <h3>Zateplené fasády</h3>
                <p>Zateplení rodinných a panelových domů, opravy podkladu, armovací vrstva i všechny běžné druhy finálních omítek.</p>
              </article>
              <article>
                <p className="trade-label">Stavba od základů</p>
                <h3>Hrubé stavby</h3>
                <p>Zemní práce, základové desky, založení zdiva, zdění až po věnec a betonáže podlah.</p>
              </article>
              <article>
                <p className="trade-label">Práce v interiéru</p>
                <h3>Omítky a podkroví</h3>
                <p>Jádrové omítky, štuky, sádrokarton a zateplení půdních či podstřešních prostor.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="trust" id="duvera" aria-labelledby="trust-title">
          <div className="trust-layout">
            <div className="trust-copy">
              <p className="section-label">Jasná odpovědnost</p>
              <h2 id="trust-title">Práci nepředáváme dál.</h2>
              <p className="trust-lead">
                Zakázku realizují naši lidé — dvě stálé pětičlenné skupiny. Víte, kdo na domě pracuje, a my ručíme za výsledek od první prohlídky po předání.
              </p>

              <div className="process" aria-label="Průběh přípravy zakázky">
                <article>
                  <span>01</span>
                  <div><h3>Prohlídka na místě</h3><p>Podíváme se na stav podkladu, přístup i problematická místa domu.</p></div>
                </article>
                <article>
                  <span>02</span>
                  <div><h3>Varianty materiálů</h3><p>Vysvětlíme rozdíly a doporučíme smysluplnou skladbu bez zbytečných položek.</p></div>
                </article>
                <article>
                  <span>03</span>
                  <div><h3>Podrobný rozpočet</h3><p>Předem dostanete rozsah prací, technologický postup a konkrétní cenu.</p></div>
                </article>
              </div>

              <a className="primary-button dark-button" href="#zacatek">Poptat osobní schůzku</a>
              <p className="location-note">Výchozí lokalita: Ústí nad Labem · realizace po celé ČR</p>
            </div>

            <figure className="section-photo trust-photo">
              <img
                src="/section-2.webp"
                alt="Dokončená světlá fasáda rodinného domu po zateplení"
                loading="lazy"
              />
              <figcaption>
                <strong>Výsledek si můžete ověřit.</strong>
                Na vyžádání předáme kontakt na investory našich dokončených staveb.
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
