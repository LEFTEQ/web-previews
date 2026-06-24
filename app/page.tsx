export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#top" aria-label="Bezděk nábytek na míru">
            <span className="wordmark__mark">BD</span>
            <span className="wordmark__text">Bezděk</span>
          </a>
          <div className="topbar__links">
            <a href="#vyroba">Výroba</a>
            <a href="tel:+420605409944">+420 605 409 944</a>
          </div>
        </nav>

        <div className="hero__grid" id="top">
          <div className="hero__copy">
            <p className="eyebrow">Truhlářství Olomouc · 22 let praxe</p>
            <h1 id="hero-title">Kuchyň začne přesným řezem.</h1>
            <p className="hero__lead">
              Pro zákazníka navrhneme, vyrobíme a namontujeme kuchyň, vestavěnou skříň nebo nábytek na míru tak, aby seděl prostoru, rozpočtu i termínu.
            </p>
            <div className="hero__actions" aria-label="Kontaktní akce">
              <a className="button button--primary" href="tel:+420605409944">Domluvit konzultaci</a>
              <a className="button button--ghost" href="mailto:info@truhlarstvi-bezdek.cz">Poslat poptávku</a>
            </div>
          </div>

          <div className="cut-panel" aria-label="Stylizovaný detail truhlářského řezu">
            <div className="cut-panel__grain" />
            <div className="cut-panel__rail cut-panel__rail--one" />
            <div className="cut-panel__rail cut-panel__rail--two" />
            <div className="cut-panel__measure">
              <span>zaměření</span>
              <strong>na milimetr</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="content" id="vyroba" aria-labelledby="content-title">
        <div className="content__intro">
          <p className="eyebrow">Co dostanu jako zákazník</p>
          <h2 id="content-title">Jeden domluvený postup od první poptávky po uklizenou montáž.</h2>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <span className="service-card__index">01</span>
            <h3>Kuchyně na míru</h3>
            <p>Návrh, nacenění, zaměření i výroba linky, která využije prostor bez slepých kompromisů.</p>
          </article>
          <article className="service-card">
            <span className="service-card__index">02</span>
            <h3>Vestavěné skříně</h3>
            <p>Úložný prostor přesně do niky, chodby nebo ložnice, včetně promyšleného vnitřního členění.</p>
          </article>
          <article className="service-card">
            <span className="service-card__index">03</span>
            <h3>Nábytek na míru</h3>
            <p>Solitéry i celé sestavy z kvalitních materiálů, vyrobené s důrazem na detail a dlouhou životnost.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Bezděk · návrh wordmarku</strong>
          <p>Telefon: <a href="tel:+420605409944">+420 605 409 944</a> · E-mail: <a href="mailto:info@truhlarstvi-bezdek.cz">info@truhlarstvi-bezdek.cz</a></p>
        </div>
        <p>Nezávazný návrh od studia lovinka, ne oficiální web firmy.</p>
      </footer>
    </main>
  );
}
