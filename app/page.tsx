export default function Page() {
  const services = [
    {
      title: "Sprchy a dveře",
      text: "Čiré, kouřové i satinované sklo zaměříme podle skutečného prostoru. Kování a způsob otevírání sladíme s každodenním provozem.",
      detail: "kalené bezpečnostní sklo"
    },
    {
      title: "Zábradlí",
      text: "Skleněná výplň pro schodiště, galerie a balkony. Navrhneme kotvení, které drží a přitom nechá architekturu dýchat.",
      detail: "návrh · výroba · montáž"
    },
    {
      title: "Obklady a tabule",
      text: "Barevné obklady za kuchyňskou linku i magnetické tabule na míru. Přesné výřezy pro zásuvky, vypínače a armatury jsou samozřejmostí.",
      detail: "odstín podle vašeho interiéru"
    }
  ];

  return (
    <main className="site-shell">
      <header className="hero" id="nahoru">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Detail skleněného prvku vyrobeného na míru v dílně Alfa Styl"
        />
        <div className="hero__shade" aria-hidden="true" />

        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#nahoru" aria-label="Alfa Styl, začátek stránky">
            <span className="wordmark__alfa">alfa</span>
            <span className="wordmark__cut" aria-hidden="true" />
            <span className="wordmark__styl">styl</span>
          </a>
          <a className="nav__action" href="#nabidka">Vybrat řešení</a>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">Sklenářství · Brno</p>
          <h1>Sklo, které<br />sedí prostoru.</h1>
          <p className="hero__lead">
            Dveře, sprchy, zábradlí, obklady a magnetické tabule vyrábíme na míru — od zaměření po čistou montáž.
          </p>
          <a className="primary-button" href="#nabidka">
            Prohlédnout možnosti
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="glass-specimen" aria-hidden="true">
          <span className="glass-specimen__line" />
          <span className="glass-specimen__glint" />
        </div>

        <p className="hero__note">Zakázková výroba v Brně</p>
      </header>

      <section className="services" id="nabidka" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Co pro vás vyrobíme</p>
          <h2 id="services-title">Od hrany po kování.<br />Všechno musí lícovat.</h2>
          <p>
            Nevybíráte z anonymní dlaždice. Každé řešení začíná rozměrem, způsobem používání a materiály vašeho interiéru.
          </p>
        </div>

        <div className="services__layout">
          <figure className="services__image-wrap">
            <img
              src="/section-1.webp"
              alt="Přesně opracovaná hrana skla a kovové kování v interiéru"
              className="services__image"
            />
            <figcaption>Přesné opracování hran a výřezů</figcaption>
          </figure>

          <div className="services__list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <div className="service__title-row">
                  <h3>{service.title}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>{service.text}</p>
                <small>{service.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__image-panel">
          <img
            src="/section-2.webp"
            alt="Skleněný prvek Alfa Styl zasazený do moderního interiéru"
            className="trust__image"
          />
          <div className="trust__stamp">
            <span>Brno</span>
            <strong>na míru</strong>
          </div>
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--dark">Jeden partner pro celý výsledek</p>
          <h2 id="trust-title">Nejen tabule skla.<br />Hotová součást interiéru.</h2>
          <p className="trust__intro">
            Alfa Styl propojuje sklenářskou výrobu se zkušeností s hliníkovými komponenty. Díky tomu řešíme sklo, profily i uchycení jako jeden celek — bez improvizace při montáži.
          </p>

          <dl className="trust__facts">
            <div>
              <dt>Zaměření</dt>
              <dd>Přijedeme v Brně a okolí, ověříme roviny, rozměry i přístup pro montáž.</dd>
            </div>
            <div>
              <dt>Bezpečnost</dt>
              <dd>Podle použití doporučíme vhodnou tloušťku, kalení, vrstvení i typ kování.</dd>
            </div>
            <div>
              <dt>Provedení</dt>
              <dd>Zakázku předáváme osazenou, seřízenou a připravenou k běžnému používání.</dd>
            </div>
          </dl>

          <p className="freshness">
            <span aria-hidden="true" /> Nabídka ověřena a aktualizována · červenec 2026
          </p>
        </div>
      </section>
    </main>
  );
}
