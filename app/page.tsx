export default function Page() {
  const services = [
    {
      title: "Sklo do interiéru",
      text: "Zaměříme a vyrobíme zrcadlové stěny, skleněné příčky, dveře i pochůzná skla přesně pro váš prostor.",
      detail: "Zrcadla · stěny · dveře · podlahy"
    },
    {
      title: "Zasklení a opravy",
      text: "Vyměníme rozbité sklo v okně, dveřích nebo výloze. Dodáváme také izolační skla pro rekonstrukce.",
      detail: "Okna · výlohy · izolační skla"
    },
    {
      title: "Bezpečnostní sklo",
      text: "Pro místa s vyšší zátěží připravíme kalené, vrstvené Connex i neprůstřelné sklo s atestem.",
      detail: "Kalení · Connex · atestovaná skla"
    },
    {
      title: "Akvária a terária",
      text: "Vyrobíme nádrž na míru, zvolíme vhodnou sílu skla a pečlivě zabrousíme všechny pohledové hrany.",
      detail: "Výroba na míru · broušené hrany"
    }
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#zacatek" aria-label="Flotis – zpět na začátek">
            <span className="wordmark-main">FLOTIS</span>
            <span className="wordmark-sub">sklenářství / Brno</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co vyrábíme</a>
            <a href="#zkusenosti">Proč Flotis</a>
          </nav>

          <a className="phone-link" href="tel:+420777347704">
            <span>Zavolat</span>
            <strong>777 347 704</strong>
          </a>
        </header>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Sklenářská dílna od roku 1993</p>
            <h1 id="hero-title">
              Sklo, které
              <span>sedne na milimetr.</span>
            </h1>
            <p className="hero-lead">
              Zaměříme, opracujeme a osadíme sklo pro byty, domy i provozovny.
              Od jedné rozbité tabule po celoskleněnou stěnu.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420777347704">
                Zavolat sklenáři
              </a>
              <a className="text-link" href="#sluzby">
                Prohlédnout služby <span aria-hidden="true">↓</span>
              </a>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Působíme</dt>
                <dd>Brno a okolí</dd>
              </div>
              <div>
                <dt>Zakázky</dt>
                <dd>Domácnosti i stavby</dd>
              </div>
            </dl>
          </div>

          <div className="glass-stage" aria-label="Ukázka přesného opracování skla">
            <div className="measure measure-top" aria-hidden="true">
              <span>0</span><span>250</span><span>500</span><span>750</span>
            </div>
            <div className="hero-pane">
              <img
                src="/hero.webp"
                alt="Detail skleněné tabule při opracování ve sklenářské dílně Flotis"
              />
              <div className="pane-note">
                <span>Řez · brus · fazeta</span>
                <strong>na míru</strong>
              </div>
            </div>
            <p className="edge-label">Leštěná hrana / přesné zaměření</p>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Od tabule k hotovému prvku</p>
            <h2 id="services-title">Co pro vás vyrobíme</h2>
          </div>
          <p>
            Sklo řežeme, brousíme, leštíme, fazetujeme a necháváme kalit podle
            způsobu použití. Řešení doporučíme až podle rozměru a místa montáže.
          </p>
        </div>

        <div className="services-layout">
          <figure className="services-image">
            <img
              src="/section-1.webp"
              alt="Sklenář opracovává hranu skla v dílně"
              loading="lazy"
            />
            <figcaption>Čistá hrana je detail, podle kterého poznáte poctivou práci.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>{service.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="zkusenosti" aria-labelledby="trust-title">
        <div className="trust-visual">
          <img
            src="/section-2.webp"
            alt="Hotová celoskleněná realizace od sklenářství Flotis"
            loading="lazy"
          />
          <div className="experience-stamp" aria-label="Více než 30 let zkušeností">
            <strong>30+</strong>
            <span>let u skla</span>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Řemeslo, které drží slovo</p>
          <h2 id="trust-title">Víte, kdo vaše sklo zaměřil i vyrobil.</h2>
          <p className="trust-intro">
            Flotis působí v oboru od roku 1993. Za tu dobu jsme dokončili stovky
            zakázek v Česku, Rakousku i Španělsku — od bytových úprav po komerční stavby.
          </p>

          <div className="proof-grid">
            <article>
              <h3>Správné sklo na správném místě</h3>
              <p>
                Neprodáváme jednu tabuli na všechno. Zohledníme bezpečnost, zatížení,
                způsob kotvení i požadovaný vzhled hran.
              </p>
            </article>
            <article>
              <h3>Zakázka bez dohadů</h3>
              <p>
                Domluvíme rozsah práce, ověříme rozměry a řekneme, co bude výroba
                a montáž obnášet.
              </p>
            </article>
          </div>

          <div className="location-strip">
            <div>
              <span>Sídlo</span>
              <strong>Charbulova 76, Brno</strong>
            </div>
            <div>
              <span>Provozovna</span>
              <strong>Zahradní 1, Rousínov</strong>
            </div>
            <a href="mailto:info@flotis.cz">info@flotis.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
