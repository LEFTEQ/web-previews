export default function Page() {
  return (
    <main className="e6-page">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#zacatek" aria-label="Escape6 Wrap Lab — začátek stránky">
            <span>ESCAPE</span><strong>6</strong><small>WRAP LAB / PRAHA</small>
          </a>

          <div className="nav-links">
            <a href="#sluzby">Možnosti polepu</a>
            <a href="#dilna">Naše dílna</a>
          </div>

          <a className="nav-phone" href="tel:+420222519645">222 519 645</a>
        </nav>

        <div className="hero-layout" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Autofólie / Praha–Čestlice</p>
            <h1 id="hero-title">
              Změna barvy.<br />
              <span>Bez jediného laku.</span>
            </h1>
            <p className="hero-lead">
              Celopolepy, barevné akcenty a ochranné fólie pro auta, která nemají splynout s parkovištěm. Od výběru odstínu po čisté předání vozu.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="mailto:info@escape6.cz?subject=Poptávka%20polepu%20auta">Probrat můj polep</a>
              <a className="text-link" href="#sluzby">Prohlédnout možnosti <span aria-hidden="true">↓</span></a>
            </div>

            <dl className="craft-list" aria-label="Co rozhoduje o výsledku polepu">
              <div><dt>Materiál</dt><dd>litá automobilová fólie</dd></div>
              <div><dt>Povrch</dt><dd>lesk, mat i struktura</dd></div>
              <div><dt>Detail</dt><dd>čisté hrany a návaznosti</dd></div>
            </dl>
          </div>

          <figure className="hero-visual">
            <div className="swatch-rail" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="hero-image-frame">
              <img
                src="/hero.webp"
                alt="Sportovní vůz Escape6 s výrazným profesionálním celopolepem"
                width="1600"
                height="1100"
                fetchPriority="high"
              />
              <span className="vinyl-peel" aria-hidden="true"></span>
            </div>
            <figcaption>Nový povrch vozu vzniká fólií, teplem a přesností ruky.</figcaption>
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <header className="section-heading">
          <p className="eyebrow">Podle toho, co chcete změnit</p>
          <h2 id="services-title">Od jednoho detailu po celé auto.</h2>
          <p>Vybereme řešení podle tvaru karoserie, používání vozu a výsledku, který od něj čekáte — ne podle univerzálního balíčku.</p>
        </header>

        <div className="services-layout">
          <figure className="section-image section-image-tall">
            <img
              src="/section-1.webp"
              alt="Aplikace automobilové fólie na karoserii vozu v dílně Escape6"
              width="1200"
              height="1500"
              loading="lazy"
            />
            <figcaption>Fólie se tvaruje přímo podle prolisů a hran konkrétní karoserie.</figcaption>
          </figure>

          <div className="service-list">
            <article className="service-card">
              <p className="service-scope">Celá karoserie</p>
              <h3>Celopolep vozu</h3>
              <p>Kompletní změna barvy bez zásahu do původního laku. Řešíme návaznosti dílů, prolisy i místa, která jsou vidět po otevření dveří.</p>
              <ul><li>lesklé a matné odstíny</li><li>metalické a strukturované fólie</li></ul>
            </article>

            <article className="service-card">
              <p className="service-scope">Vybrané díly</p>
              <h3>Akcenty a dechrom</h3>
              <p>Střecha, zrcátka, lišty nebo maska. Přesně zvolený detail umí změnit charakter auta bez polepení celé karoserie.</p>
              <ul><li>černé lesklé prvky</li><li>barevné kontrasty</li></ul>
            </article>

            <article className="service-card">
              <p className="service-scope">Namáhaná místa</p>
              <h3>Ochranná fólie</h3>
              <p>Transparentní ochrana ploch, které dostávají nejvíc zabrat od kamínků, nečistot a běžného provozu.</p>
              <ul><li>přední partie vozu</li><li>prahy a nákladové hrany</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="workshop" id="dilna" aria-labelledby="workshop-title">
        <div className="workshop-layout">
          <figure className="section-image workshop-image">
            <img
              src="/section-2.webp"
              alt="Detail pečlivě dokončeného polepu sportovního auta Escape6"
              width="1500"
              height="1100"
              loading="lazy"
            />
            <figcaption>Výsledek stojí na detailech, které z běžného pohledu skoro nevidíte.</figcaption>
          </figure>

          <div className="workshop-copy">
            <p className="eyebrow">Zázemí pro upravená auta</p>
            <h2 id="workshop-title">Nejdřív vidět. Potom vybrat.</h2>
            <p className="workshop-intro">
              Escape6 se pohybuje ve světě sportovních a upravených aut od roku 2000. V showroomu o rozloze přes 400 m² v Čestlicích můžete porovnat odstíny a povrchy naživo, ještě než necháte polepit svůj vůz.
            </p>

            <div className="trust-grid">
              <article>
                <h3>Odstín na skutečném světle</h3>
                <p>Vzorek si prohlédnete venku i pod osvětlením dílny. Mat, metalíza a struktura se na fotografii chovají jinak než ve skutečnosti.</p>
              </article>
              <article>
                <h3>Domluva podle konkrétního auta</h3>
                <p>Předem projdeme stav laku, členitost karoserie i rozsah demontáže. Víte, co se bude dít a proč.</p>
              </article>
              <article>
                <h3>Praha na dosah</h3>
                <p>Showroom a zázemí najdete v Čestlicích na okraji Prahy. Vůz předáváme čistý, zkontrolovaný a s pokyny k péči o fólii.</p>
              </article>
            </div>

            <p className="contact-note">Dotazy k polepu: <a href="tel:+420222519645">222 519 645</a> · <a href="mailto:info@escape6.cz">info@escape6.cz</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
