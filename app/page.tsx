const categories = [
  "Furgony a dodávky",
  "Chladicí a mrazicí vozy",
  "Valníky",
  "Sklápěče",
  "Skříňové vozy",
  "Speciální nástavby",
];

const services = [
  {
    title: "Prověřené užitkové vozy",
    text: "U každého vozu vidíte rok uvedení do provozu, stav tachometru, výbavu i cenu bez DPH a s DPH.",
  },
  {
    title: "Výkup a komisní prodej",
    text: "Váš nákladní nebo užitkový vůz vykoupíme, případně zajistíme jeho komisní prodej.",
  },
  {
    title: "Financování na míru",
    text: "Pomůžeme vám porovnat úvěr a leasing pro vůz, přívěs, návěs i další nákladní techniku.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Užitkový vůz v nabídce společnosti Truck In v Praze"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Truck In — úvod">
            <span>TRUCK</span>
            <span className="wordmark__in">IN</span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Nabídka</a>
            <a href="#sluzby">Služby</a>
            <a className="site-nav__phone" href="tel:+420777575296">
              777 575 296
            </a>
          </nav>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Nákladní a užitkové vozy · Praha 9</p>
          <h1 id="hero-title">
            Vůz, který
            <span>jde rovnou do práce.</span>
          </h1>
          <p className="hero__lead">
            Vyberte si prověřenou dodávku, valník nebo speciální nástavbu.
            Stav, nájezd i cena jsou jasné ještě před návštěvou.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#nabidka">
              Projít nabídku vozů
            </a>
            <a className="button button--ghost" href="tel:+420777575296">
              Zavolat prodejci
            </a>
          </div>
        </div>

        <aside className="vehicle-ticket" aria-label="Vybraný vůz z nabídky">
          <span className="vehicle-ticket__label">Právě v nabídce</span>
          <strong>Ford Transit 4×4</strong>
          <span>L3H2 · 7 míst · tažné</span>
          <div className="vehicle-ticket__price">
            <small>Cena bez DPH</small>
            <b>269 000 Kč</b>
          </div>
          <span className="vehicle-ticket__id">Vůz 1057</span>
        </aside>
      </section>

      <section className="inventory section-shell" id="nabidka" aria-labelledby="inventory-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Co potřebujete odvézt?</p>
          <h2 id="inventory-title">Karoserie podle skutečné práce</h2>
          <p>
            Od městské dodávky po nákladní vůz se speciální nástavbou. Nabídku
            můžete vybírat podle typu využití, ne podle neurčitých kategorií.
          </p>
        </div>

        <div className="inventory__layout">
          <div className="category-list" aria-label="Kategorie vozů">
            {categories.map((category) => (
              <a href="tel:+420777575296" key={category}>
                <span>{category}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <figure className="inventory__visual">
            <img
              src="/section-1.webp"
              alt="Detail užitkového vozu připraveného k prohlídce v areálu Truck In"
            />
            <figcaption>
              <span>Osobní prohlídka</span>
              <strong>Chlumecká 2588, Praha 9</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="trust" id="sluzby" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Kontrola nákladního vozu před prodejem ve společnosti Truck In"
          />
          <div className="trust__hours">
            <span>Prohlídky vozů</span>
            <strong>Po–Pá 8–18</strong>
            <strong>So 9–14</strong>
          </div>
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--dark">Koupě bez slepých míst</p>
          <h2 id="trust-title">Víte, pro co si jedete.</h2>
          <p className="trust__intro">
            Truck In je specializovaný prodejce nákladních a užitkových vozidel
            v Praze. Konkrétní parametry řešíme otevřeně, abyste mohli posoudit,
            zda vůz odpovídá vaší trase, nákladu i rozpočtu.
          </p>

          <div className="service-list">
            {services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className="trust__contact">
            <div>
              <span>Truck In s.r.o.</span>
              <strong>Chlumecká 2588, Praha 9</strong>
            </div>
            <a href="mailto:info@truckin.cz">info@truckin.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
