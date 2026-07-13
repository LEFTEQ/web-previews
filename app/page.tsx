export default function Page() {
  return (
    <main className="rb-site">
      <section className="rb-hero" aria-labelledby="hero-title">
        <header className="rb-header">
          <a className="rb-wordmark" href="#top" aria-label="Řezanina a Bartoň — úvod">
            <span className="rb-wordmark-main">
              Řezanina <b>&amp;</b> Bartoň
            </span>
            <span className="rb-wordmark-sub">stavby / Hradec Králové</span>
          </a>

          <nav className="rb-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co stavíme</a>
            <a href="#spoluprace">Jak pracujeme</a>
            <a className="rb-nav-action" href="#spoluprace">Prohlédnout práci</a>
          </nav>
        </header>

        <div className="rb-hero-stage" id="top">
          <figure className="rb-hero-visual">
            <img
              src="/hero.webp"
              alt="Stavební realizace firmy Řezanina a Bartoň v Hradci Králové"
            />
            <figcaption>
              <span>Stavíme v Hradci Králové a okolí</span>
              <span>50°12′ s. š.</span>
            </figcaption>
          </figure>

          <div className="rb-hero-copy">
            <p className="rb-kicker">Stavební firma / od základu po předání</p>
            <h1 id="hero-title">
              Stavíme tak,
              <span>aby všechno sedělo.</span>
            </h1>
            <div className="rb-hero-intro">
              <p>
                Novostavby, rekonstrukce a dokončovací práce bez přehazování
                odpovědnosti. Jedna domluva, průběžná kontrola a výsledek, který
                funguje i po nastěhování.
              </p>
              <div className="rb-hero-actions">
                <a className="rb-button rb-button-primary" href="#sluzby">
                  Zjistit, co umíme
                </a>
                <a className="rb-text-link" href="#spoluprace">
                  Jak probíhá stavba <span aria-hidden="true">↘</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rb-services" id="sluzby" aria-labelledby="services-title">
        <div className="rb-section-heading">
          <p className="rb-kicker">Práce, které drží pohromadě</p>
          <h2 id="services-title">Od první tvárnice po poslední kliku.</h2>
          <p>
            Rozsah zakázky nastavíme předem. Víte, kdo práci vede, co se právě
            děje a co následuje.
          </p>
        </div>

        <div className="rb-services-layout">
          <figure className="rb-section-image rb-section-image-brick">
            <img
              src="/section-1.webp"
              alt="Detail řemeslné práce na stavbě v průběhu realizace"
            />
            <figcaption>
              <span>Detail rozhoduje</span>
              <span>rovina / návaznost / čisté provedení</span>
            </figcaption>
          </figure>

          <div className="rb-service-list">
            <article className="rb-service-item">
              <p className="rb-service-mark">NOVÁ STAVBA</p>
              <h3>Rodinné domy</h3>
              <p>
                Převezmeme projekt a proměníme ho ve stavbu, kde na sebe profese
                navazují. Hlídáme konstrukce, termíny i místa, která se později
                těžko opravují.
              </p>
              <span>zemní práce · hrubá stavba · dokončení</span>
            </article>

            <article className="rb-service-item">
              <p className="rb-service-mark">NOVÝ ŽIVOT DOMU</p>
              <h3>Rekonstrukce</h3>
              <p>
                Nejdřív zjistíme skutečný stav, potom bouráme. Řešíme dispozice,
                povrchy i technické návaznosti s respektem k tomu, co má smysl
                zachovat.
              </p>
              <span>domy · byty · provozovny</span>
            </article>

            <article className="rb-service-item">
              <p className="rb-service-mark">PŘESNÉ DOKONČENÍ</p>
              <h3>Stavební úpravy</h3>
              <p>
                Zednické práce, sádrokartony, podlahy a finální povrchy
                koordinujeme jako jeden celek. Bez mezer mezi řemesly a bez
                improvizace na poslední chvíli.
              </p>
              <span>interiéry · fasády · opravy</span>
            </article>
          </div>
        </div>
      </section>

      <section className="rb-trust" id="spoluprace" aria-labelledby="trust-title">
        <div className="rb-trust-grid">
          <div className="rb-trust-copy">
            <p className="rb-kicker">Stavba bez slepých míst</p>
            <h2 id="trust-title">Na stavbě má být vidět práce. Ne chaos.</h2>
            <p className="rb-trust-lead">
              Zakázku vedeme od společné prohlídky po předání. Průběžně říkáme,
              co je hotové, co se řeší a jaké rozhodnutí od vás potřebujeme.
            </p>

            <dl className="rb-proof-list">
              <div>
                <dt>Rozsah</dt>
                <dd>Položky a odpovědnosti si potvrdíme před zahájením.</dd>
              </div>
              <div>
                <dt>Průběh</dt>
                <dd>Na změnu narazíme společně, ne až v konečném účtu.</dd>
              </div>
              <div>
                <dt>Místo</dt>
                <dd>Pracujeme v Hradci Králové a rozumném dojezdu po okolí.</dd>
              </div>
            </dl>
          </div>

          <figure className="rb-section-image rb-trust-image">
            <img
              src="/section-2.webp"
              alt="Dokončená stavební realizace firmy Řezanina a Bartoň"
            />
            <figcaption>
              <strong>Poctivé provedení se pozná v užívání.</strong>
              <span>Řezanina &amp; Bartoň / Hradec Králové</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
