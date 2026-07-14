const services = [
  {
    title: "Kytice a rozvoz",
    text: "Květiny nakupujeme až pro vaši objednávku. Kytici připravíme podle příležitosti, barev i částky a po Praze ji doručíme na domluvený čas.",
    note: "Objednávka alespoň 24 hodin předem",
  },
  {
    title: "Svatby a události",
    text: "Navrhneme svatební kytici, výzdobu obřadu i stolů. Stejně pečlivě připravujeme květiny pro bankety, oslavy a firemní setkání.",
    note: "Od jednoho aranžmá po celý prostor",
  },
  {
    title: "Zeleň pro interiéry",
    text: "Vybereme rostliny a obaly pro kancelář, hotel nebo restauraci, vše nainstalujeme a můžeme se pravidelně starat i o další péči.",
    note: "Instalace, revitalizace a dlouhodobá péče",
  },
];

export default function Page() {
  return (
    <main className="rosmarino-page">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="atelier-nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#uvod" aria-label="Rosmarino, úvod">
            <span>rosmarino</span>
            <small>květinový ateliér · Praha</small>
          </a>
          <div className="nav-links">
            <a href="#sluzby">Co vážeme</a>
            <a href="#atelier">Náš přístup</a>
          </div>
          <a className="nav-phone" href="tel:+420724208832">724 208 832</a>
        </nav>

        <div className="hero-grid" id="uvod">
          <div className="hero-copy">
            <p className="kicker">Zakázkový ateliér od roku 2005</p>
            <h1 id="hero-title">
              Květiny,
              <span>které se neberou</span>
              <em>ze skladu.</em>
            </h1>
            <p className="hero-intro">
              Každou kytici vážeme pro konkrétního člověka. Čerstvé květiny objednáme na holandské burze nebo od českých pěstitelů a v Praze je předáme osobně či dovezeme.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420724208832">Zavolat a objednat kytici</a>
              <a className="text-action" href="mailto:rosmarino@rosmarino.cz">Napsat do ateliéru</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="ribbon-label" aria-hidden="true">
              <span>řezané čerstvě</span>
              <strong>24 h</strong>
              <span>předem</span>
            </div>
            <div className="hero-image-wrap">
              <img
                src="/hero.webp"
                alt="Bohatá čerstvě uvázaná kytice v květinovém ateliéru Rosmarino"
                width="900"
                height="1120"
                fetchPriority="high"
              />
            </div>
            <p className="image-caption">Květiny vybíráme až podle vašeho přání — ne naopak.</p>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="kicker">Co pro vás připravíme</p>
          <h2 id="services-title">Od jedné kytice po rozkvetlý sál.</h2>
          <p>Řekněte nám, pro koho květiny jsou, co má jejich předání znamenat a jaký máte rozpočet. Zbytek vezmeme do rukou my.</p>
        </div>

        <div className="services-layout">
          <div className="services-image">
            <img
              src="/section-1.webp"
              alt="Floristka skládá sezonní květiny na pracovním stole"
              width="800"
              height="980"
              loading="lazy"
            />
            <span>Vázáno ručně v Praze</span>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <div className="stem-mark" aria-hidden="true"><i /></div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <small>{service.note}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atelier" id="atelier" aria-labelledby="atelier-title">
        <div className="atelier-image">
          <img
            src="/section-2.webp"
            alt="Detail neobvyklého květinového aranžmá z ateliéru Rosmarino"
            width="960"
            height="760"
            loading="lazy"
          />
        </div>

        <div className="atelier-copy">
          <p className="kicker">Rosmarino · Praha</p>
          <h2 id="atelier-title">Floristika naučená ve světě, vázaná pro Prahu.</h2>
          <p className="lead">
            Markéta Keclíková založila Rosmarino po floristických kurzech v Paříži, Amsterdamu a Londýně. Z klasického květinářství postupně vytvořila ateliér, kde má každá zakázka vlastní výběr květin i kompozici.
          </p>

          <div className="trust-grid">
            <div>
              <strong>Čerstvost má přednost</strong>
              <p>Nenakupujeme do zásoby. Díky objednávce předem získáte kvalitnější květiny s delší trvanlivostí.</p>
            </div>
            <div>
              <strong>Sezona dává směr</strong>
              <p>Když je to možné, saháme po květinách od tuzemských pěstitelů a respektujeme přirozenou roční dobu.</p>
            </div>
            <div>
              <strong>Řemeslo před módou</strong>
              <p>Floristiku také odborně vyučujeme. Známe materiál, stavbu kytice i péči, která jí prodlouží život.</p>
            </div>
          </div>

          <aside className="contact-note" aria-label="Objednávkové informace">
            <span>Objednávky a domluva</span>
            <a href="tel:+420724208832">+420 724 208 832</a>
            <a href="mailto:rosmarino@rosmarino.cz">rosmarino@rosmarino.cz</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
