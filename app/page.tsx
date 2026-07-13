export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#uvod" aria-label="Procalor, úvodní stránka">
            <span className="wordmark-main">pro<span>/</span>calor</span>
            <span className="wordmark-note">vzduch &amp; klima · Liberec</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#reseni">Co řešíme</a>
            <a href="#jistota">Proč Procalor</a>
          </nav>

          <a className="header-phone" href="tel:+420603548042">
            <span>Rychlá rada</span>
            +420 603 548 042
          </a>
        </header>

        <div className="hero-grid" id="uvod">
          <div className="hero-copy">
            <p className="eyebrow"><span>Liberec</span> Klimatizace a úprava vzduchu</p>
            <h1 id="hero-title">
              Vzduch doma,
              <span className="air-heading">
                který drží směr.
                <i aria-hidden="true"><b></b><b></b><b></b></i>
              </span>
            </h1>
            <p className="hero-lead">
              Pomůžeme vám vybrat klimatizaci, odvlhčovač nebo čističku podle prostoru,
              provozu a toho, co vás doma skutečně trápí.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420603548042">Zavolat a poradit se</a>
              <a className="text-link" href="mailto:procalor@volny.cz">Napsat e-mail <span aria-hidden="true">↗</span></a>
            </div>
            <p className="availability"><span aria-hidden="true"></span> Pro zákazníky z Liberce a okolí</p>
          </div>

          <div className="hero-visual">
            <div className="temperature-rail" aria-hidden="true">
              <span>CHLADIT</span>
              <i></i>
              <span>TOPIT</span>
            </div>
            <div className="hero-image-frame">
              <img
                src="/hero.webp"
                alt="Klimatizační technika v čistém moderním interiéru"
                width="1200"
                height="900"
              />
              <div className="image-label">
                <span>01</span>
                <p><strong>Nejdřív prostor.</strong> Potom výkon a typ zařízení.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions" id="reseni" aria-labelledby="solutions-title">
        <div className="section-heading">
          <p className="section-kicker">Co potřebujete vyřešit</p>
          <h2 id="solutions-title">Jedna domácnost.<br />Čtyři různé druhy vzduchu.</h2>
          <p>Neprodáváme univerzální odpověď. Zařízení vybíráme podle velikosti místnosti, vlhkosti, prašnosti i způsobu používání.</p>
        </div>

        <div className="solutions-layout">
          <figure className="solutions-image">
            <img
              src="/section-1.webp"
              alt="Detail klimatizační jednotky a lamel usměrňujících proud vzduchu"
              width="1000"
              height="900"
              loading="lazy"
            />
            <figcaption>Správný výkon znamená klidný provoz, ne průvan.</figcaption>
          </figure>

          <div className="service-list">
            <article>
              <span className="service-code">COOL</span>
              <div>
                <h3>Klimatizace</h3>
                <p>Nástěnné i mobilní řešení pro ložnici, byt, kancelář nebo provozovnu.</p>
              </div>
              <span className="service-mark" aria-hidden="true">↘</span>
            </article>
            <article>
              <span className="service-code">DRY</span>
              <div>
                <h3>Odvlhčování</h3>
                <p>Pro chladné sklepy, novostavby i místnosti, kde se vrací plíseň.</p>
              </div>
              <span className="service-mark" aria-hidden="true">↘</span>
            </article>
            <article>
              <span className="service-code">PURE</span>
              <div>
                <h3>Čištění vzduchu</h3>
                <p>Čističky a náhradní filtry pro domácnosti s alergiky, zvířaty nebo jemným prachem.</p>
              </div>
              <span className="service-mark" aria-hidden="true">↘</span>
            </article>
            <article>
              <span className="service-code">WARM</span>
              <div>
                <h3>Doplňkové vytápění</h3>
                <p>Elektrické přímotopy a přenosná kamna tam, kde potřebujete teplo rychle.</p>
              </div>
              <span className="service-mark" aria-hidden="true">↘</span>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust-media">
          <img
            src="/section-2.webp"
            alt="Kontrola klimatizační techniky před předáním zákazníkovi"
            width="1100"
            height="1050"
            loading="lazy"
          />
          <div className="trust-stamp" aria-label="Procalor, Liberec">
            <span>PROCALOR</span>
            <strong>LIB</strong>
            <span>VZDUCHOTECHNIKA</span>
          </div>
        </div>

        <div className="trust-copy">
          <p className="section-kicker">Technika bez mlhy</p>
          <h2 id="trust-title">Víte, co kupujete — a proč právě to.</h2>
          <p className="trust-intro">
            Procalor je liberecký specialista na klima v domácnosti. Místo anonymního výběru podle obrázku dostanete konkrétní doporučení a dostupný kontakt, když si nejste jistí.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Výběr podle místnosti</dt>
              <dd>Zohledníme objem prostoru, oslunění, hluk i požadovaný způsob používání.</dd>
            </div>
            <div>
              <dt>Ověřený sortiment</dt>
              <dd>Klimatizace, čističky, odvlhčovače a příslušenství značek Qlima a Zibro.</dd>
            </div>
            <div>
              <dt>Člověk na telefonu</dt>
              <dd>Na čísle <a href="tel:+420603548042">+420 603 548 042</a> řešíte svůj prostor, ne číslo objednávky.</dd>
            </div>
          </dl>

          <div className="product-note">
            <span>Konkrétně z nabídky</span>
            <p>Od filtrů pro čističky až po nástěnnou klimatizaci Qlima SC 6053.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
