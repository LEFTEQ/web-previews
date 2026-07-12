export default function Page() {
  const services = [
    {
      name: "Rekonstrukce bytů",
      detail: "Od bourání a nových rozvodů po podlahy, koupelnu a poslední nátěr.",
      scope: "Kompletně",
    },
    {
      name: "Stavby a přestavby",
      detail: "Rodinné domy, příčky, podhledy i změny dispozic podle projektu.",
      scope: "Na klíč",
    },
    {
      name: "Opravy a montáže",
      detail: "Nábytek, kuchyně, vrtání, zapojení spotřebičů a práce, které doma čekají.",
      scope: "Bez starostí",
    },
    {
      name: "Projekt a NZÚ",
      detail: "Dokumentace, praktické poradenství a pomoc s programem Nová zelená úsporám.",
      scope: "Od záměru",
    },
  ];

  return (
    <main>
      <header className="hero" id="uvod">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#uvod" aria-label="Opravíme hned – úvod">
            <span className="wordmark-main">OPRAVÍME</span>
            <span className="wordmark-tag">HNED / PRAHA</span>
          </a>

          <div className="nav-links">
            <a href="#sluzby">Co umíme</a>
            <a href="#pristup">Jak pracujeme</a>
          </div>

          <a className="nav-phone" href="tel:+420730515102">
            <span>Zavolat</span>
            +420 730 515 102
          </a>
        </nav>

        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="/hero.webp"
            alt="Řemeslník při pečlivé rekonstrukci interiéru v Praze"
          />
          <div className="hero-shade" aria-hidden="true" />
          <p className="site-note">Praha a okolí · byty · domy · provozovny</p>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Stavební práce bez věčného čekání</p>
          <h1>
            Co je potřeba,
            <span>opravíme hned.</span>
          </h1>
          <p className="hero-lead">
            Rekonstrukce, montáže i drobné opravy v Praze. Přivezeme nářadí,
            zajistíme materiál a po práci po sobě uklidíme.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+420730515102">
              Zavolat řemeslníkům
            </a>
            <a className="text-link" href="#sluzby">
              Prohlédnout služby <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="measure-line" aria-label="Rozsah zakázky od zaměření po čisté předání">
          <span>00</span>
          <strong>Zaměříme</strong>
          <i aria-hidden="true" />
          <strong>Postavíme</strong>
          <i aria-hidden="true" />
          <strong>Čistě předáme</strong>
          <span>100</span>
        </div>
      </header>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Jedna parta, celý seznam</p>
          <h2 id="services-title">Od vrtačky po kompletní rekonstrukci.</h2>
          <p>
            Nemusíte shánět každého řemeslníka zvlášť. Domluvíme návaznost prací,
            materiál i termín, který dává smysl.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-visual">
            <img
              src="/section-1.webp"
              alt="Probíhající rekonstrukce pražského bytu s připraveným nářadím"
            />
            <figcaption>
              <span>Zakázka v Praze</span>
              <strong>Pracujeme tak, aby byt mohl zase brzy sloužit.</strong>
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.name}>
                <p className="service-scope">{service.scope}</p>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="pristup" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">Pořádek není práce navíc</p>
          <h2 id="trust-title">Domluva platí. A suť nezůstává.</h2>
          <p className="trust-intro">
            Rychlost má cenu jen tehdy, když je práce provedená pečlivě. Proto předem
            vyjasníme rozsah, dorazíme s vlastním vybavením a hotové místo uklidíme.
          </p>

          <dl className="promise-list">
            <div>
              <dt>Termín</dt>
              <dd>Přijedeme v čase, na kterém jsme se domluvili.</dd>
            </div>
            <div>
              <dt>Vybavení</dt>
              <dd>Nářadí i potřebný materiál zařídíme a přivezeme.</dd>
            </div>
            <div>
              <dt>Náprava</dt>
              <dd>Pokud se objeví skrytá závada, vrátíme se a dáme ji do pořádku.</dd>
            </div>
          </dl>

          <div className="contact-strip">
            <span>Popište, co doma potřebujete</span>
            <a href="mailto:info@opravimehned.cz">info@opravimehned.cz</a>
          </div>
        </div>

        <figure className="trust-visual">
          <img
            src="/section-2.webp"
            alt="Dokončený čistý interiér po rekonstrukci firmou Opravíme hned"
          />
          <figcaption>
            <span>Výsledek práce</span>
            Připraveno k bydlení, ne k dalšímu úklidu.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
