export default function Page() {
  return (
    <>
      <title>Metrostav a.s. | Bourací práce Liberec</title>
      <meta
        name="description"
        content="Řízené demolice, bourání železobetonu a příprava stavenišť v Liberci a severních Čechách."
      />
      <meta property="og:title" content="Metrostav | Bourací práce Liberec" />
      <meta
        property="og:description"
        content="Bezpečně odstraníme konstrukci a připravíme čistý prostor pro další stavbu."
      />
      <meta property="og:image" content="/hero.webp" />
      <meta property="og:type" content="website" />

      <main className="site-shell">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero__image"
            src="/hero.webp"
            alt="Demoliční stroj rozebírá betonovou konstrukci na staveništi"
          />
          <div className="hero__shade" aria-hidden="true" />

          <header className="topbar">
            <a className="wordmark" href="#top" aria-label="Metrostav – bourací práce, úvod">
              <span className="wordmark__name">METROSTAV</span>
              <span className="wordmark__trade">BOURACÍ PRÁCE · LIBEREC</span>
            </a>

            <nav className="nav" aria-label="Hlavní navigace">
              <a href="#sluzby">Co bouráme</a>
              <a href="#postup">Jak pracujeme</a>
            </nav>

            <a className="topbar__phone" href="tel:+420266019000">
              Zavolat <span>+420 266 019 000</span>
            </a>
          </header>

          <div className="hero__content" id="top">
            <p className="eyebrow">Řízené demolice · Liberec a severní Čechy</p>
            <h1 id="hero-title">
              Uvolníme prostor
              <span>pro další stavbu.</span>
            </h1>
            <p className="hero__lead">
              Bezpečně rozebereme betonové, ocelové i zděné konstrukce. Od prvního průzkumu až po
              vytříděný materiál a připravené staveniště.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="tel:+420266019000">
                Probrat demolici
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#sluzby">
                Zjistit rozsah prací
              </a>
            </div>
          </div>

          <div className="hero__cut" aria-hidden="true">
            <span>ŘEZ KONSTRUKCÍ</span>
          </div>

          <div className="hero__facts" aria-label="Základní informace">
            <div>
              <span>Místo zásahu</span>
              <strong>Liberec</strong>
            </div>
            <div>
              <span>Výsledek</span>
              <strong>Čisté staveniště</strong>
            </div>
            <div>
              <span>První krok</span>
              <strong>Prohlídka objektu</strong>
            </div>
          </div>
        </section>

        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="section-label">Rozsah prací / podle konstrukce</p>
            <h2 id="services-title">Bouráme přesně to, co musí pryč.</h2>
            <p>
              Každý zásah začíná posouzením nosných vazeb, okolní zástavby a přístupových cest.
              Podle objektu volíme strojní rozebrání, řezání nebo citlivou ruční demontáž.
            </p>
          </div>

          <div className="services__visual">
            <img
              src="/section-1.webp"
              alt="Detail demoliční techniky při rozebírání železobetonové konstrukce"
            />
            <div className="material-tag" aria-hidden="true">
              BETON / OCEL / ZDIVO
            </div>
          </div>

          <div className="service-list">
            <article>
              <span className="service-list__material">Železobeton</span>
              <div>
                <h3>Strojní demolice konstrukcí</h3>
                <p>Haly, skeletové objekty, základy, stropy a masivní betonové prvky.</p>
              </div>
            </article>
            <article>
              <span className="service-list__material">Přesný zásah</span>
              <div>
                <h3>Řezání a částečné bourání</h3>
                <p>Otvory, jednotlivá podlaží a konstrukční části, které navazují na zachovaný objekt.</p>
              </div>
            </article>
            <article>
              <span className="service-list__material">Staveniště</span>
              <div>
                <h3>Třídění a odvoz materiálu</h3>
                <p>Oddělíme beton, kov a ostatní materiály a připravíme plochu pro navazující práce.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="process" id="postup" aria-labelledby="process-title">
          <div className="process__image-wrap">
            <img
              src="/section-2.webp"
              alt="Připravené demoliční staveniště s těžkou technikou v Liberci"
            />
            <p className="image-note">Kontrolovaný pohyb techniky. Oddělené pracovní zóny.</p>
          </div>

          <div className="process__content">
            <p className="section-label section-label--light">Bezpečnost / průběh zakázky</p>
            <h2 id="process-title">Nejdřív plán. Potom síla.</h2>
            <p className="process__lead">
              Demolice probíhá v jasném pořadí, aby byl pod kontrolou pohyb konstrukce, techniky i
              materiálu. Vy víte, co se právě děje a co bude následovat.
            </p>

            <ol className="steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Prohlídka a plán zásahu</h3>
                  <p>Prověříme konstrukci, sítě, okolí a možnosti příjezdu techniky.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Zajištění pracovního prostoru</h3>
                  <p>Vymezíme bezpečné zóny a připravíme objekt na kontrolované rozebrání.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Demolice a předání plochy</h3>
                  <p>Konstrukci rozebereme, materiál vytřídíme a staveniště připravíme pro další etapu.</p>
                </div>
              </li>
            </ol>

            <div className="process__contact">
              <p>
                Máte objekt k odstranění v Liberci nebo okolí? Popište nám konstrukci a místo.
              </p>
              <a href="mailto:info@metrostav.cz">Napsat na info@metrostav.cz</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
