export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="brand-row">
          <a className="wordmark" href="#top" aria-label="hammer and screwdriver">
            <span className="wordmark-mark" aria-hidden="true">H/S</span>
            <span className="wordmark-text">hammer and screwdriver</span>
          </a>
          <a className="contact-link" href="mailto:">Poptat práci</a>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Montáž, opravy, úpravy</p>
            <h1 id="hero-title">Když je potřeba vzít nářadí do ruky a dotáhnout věc do konce.</h1>
            <p className="lead">
              Pomůžeme s praktickými zásahy v bytě, domě nebo provozovně: od drobných oprav po sestavení,
              upevnění a úpravy, které mají držet, fungovat a nerušit každodenní provoz.
            </p>
            <div className="hero-actions" aria-label="Hlavní akce">
              <a className="button primary" href="mailto:">Napsat poptávku</a>
              <a className="button secondary" href="#sluzby">Co řešíme</a>
            </div>
          </div>

          <div className="tool-plate" aria-label="Stylizovaný nástrojový motiv">
            <div className="slot slot-hammer">
              <span className="tool-name">kladivo</span>
            </div>
            <div className="slot slot-driver">
              <span className="tool-name">šroubovák</span>
            </div>
            <div className="measure-line" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Bez velkých slov</p>
          <h2 id="services-title">Práce, u které zákazník potřebuje jasný postup a čistý výsledek.</h2>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <span className="card-index">01</span>
            <h3>Drobné opravy</h3>
            <p>Opravíme uvolněné, poškozené nebo nefunkční prvky v interiéru tak, aby znovu sloužily.</p>
          </article>
          <article className="service-card">
            <span className="card-index">02</span>
            <h3>Montáže a sestavení</h3>
            <p>Smontujeme vybavení, připevníme police, držáky a doplňky a pohlídáme pevné usazení.</p>
          </article>
          <article className="service-card">
            <span className="card-index">03</span>
            <h3>Úpravy na míru</h3>
            <p>Najdeme praktické řešení pro konkrétní prostor, materiál a způsob používání.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>hammer and screwdriver</strong>
          <p>tel — · e-mail — · adresa —</p>
        </div>
        <p>Nezávazný návrh od studia lovinka. Nejde o oficiální web.</p>
      </footer>
    </main>
  );
}
