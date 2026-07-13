export default function Page() {
  const services = [
    {
      label: "Vlastní zuby",
      title: "Profesionální dentální hygiena",
      text: "Šetrně odstraníme zubní kámen, pigmentace i povlak. Ukážeme vám techniku čištění, která odpovídá právě vašemu chrupu.",
    },
    {
      label: "Implantáty",
      title: "Péče o implantáty a náhrady",
      text: "Pomůžeme udržet čisté okolí implantátů, korunek a můstků. Správná domácí péče chrání dáseň i výsledek stomatologického ošetření.",
    },
    {
      label: "Dásně",
      title: "Prevence zánětu",
      text: "Zaměříme se na krvácení, citlivost a hůře dostupná místa. Dostanete srozumitelný plán bez zbytečného zahlcení pomůckami.",
    },
  ];

  return (
    <main>
      <header className="hero">
        <div className="hero__bar">
          <a className="wordmark" href="#uvod" aria-label="Trifi Dent – úvod">
            <span className="wordmark__mark" aria-hidden="true">T</span>
            <span>Trifi Dent</span>
          </a>
          <span className="hero__place">Dentální péče · Liberec</span>
          <a className="phone-link phone-link--small" href="tel:+420733161550">
            <span aria-hidden="true">↗</span> 733 161 550
          </a>
        </div>

        <div className="hero__grid" id="uvod">
          <div className="hero__copy">
            <p className="eyebrow">Pro vlastní zuby i implantáty</p>
            <h1>Péče, která vidí <em>pod povrch.</em></h1>
            <p className="hero__lead">
              Dentální hygiena v Liberci zaměřená na zdravé dásně, čistý chrup a jistotu při každém úsměvu.
            </p>
            <div className="hero__actions">
              <a className="primary-button" href="tel:+420733161550">Zavolat a objednat se</a>
              <a className="text-link" href="#pece">Prohlédnout péči <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="mirror" aria-hidden="true">
            <div className="mirror__rim">
              <img
                src="/hero.webp"
                alt=""
                className="mirror__image"
              />
            </div>
            <div className="mirror__handle" />
            <span className="mirror__note">Detail rozhoduje</span>
          </div>
        </div>
      </header>

      <section className="care" id="pece" aria-labelledby="care-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="care-title">Čistota není kosmetika.<br />Je to základ zdravého chrupu.</h2>
        </div>

        <div className="care__layout">
          <figure className="care__visual">
            <img
              src="/section-1.webp"
              alt="Detail šetrného ošetření chrupu v ordinaci Trifi Dent"
            />
            <figcaption>Pečlivé ošetření v pohodlném tempu</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.label}>
                <span className="service__label">{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Moderní vybavení ordinace Trifi Dent v Liberci"
            className="trust__image"
          />
          <div className="trust__seal" aria-hidden="true">
            <span>Liberec</span>
            <strong>TRIFI</strong>
            <span>odborná péče</span>
          </div>
        </div>

        <div className="trust__content">
          <p className="eyebrow">Známé místo, současná péče</p>
          <h2 id="trust-title">Na chrup se díváme jako na celek.</h2>
          <p className="trust__intro">
            Trifi Dent navazuje na zkušenosti MUDr. Václava a Miroslava Fialových. V jedné ordinaci propojujeme prevenci s péčí o implantáty, protetické práce a dásně.
          </p>

          <dl className="facts">
            <div>
              <dt>Najdete nás</dt>
              <dd>Ignáta Herrmanna 4<br />460 01 Liberec 1</dd>
            </div>
            <div>
              <dt>Objednání</dt>
              <dd><a href="tel:+420733161550">+420 733 161 550</a></dd>
            </div>
            <div>
              <dt>Specializace</dt>
              <dd>Hygiena vlastních zubů, implantátů a protetických náhrad</dd>
            </div>
          </dl>

          <p className="trust__note">
            Pracujeme s respektem k předchozímu ošetření a vše vysvětlujeme tak, abyste věděli, co dělat doma.
          </p>
        </div>
      </section>
    </main>
  );
}
