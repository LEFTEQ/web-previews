export default function Page() {
  const services = [
    {
      name: "Pojištění",
      description:
        "Nastavíme ochranu zdraví, příjmu, rodiny i majetku tak, aby odpovídala tomu, co skutečně potřebujete.",
      tags: ["zdraví", "příjem", "majetek"],
    },
    {
      name: "Hypotéky",
      description:
        "Projdeme možnosti financování bydlení, srozumitelně porovnáme varianty a pohlídáme celý postup.",
      tags: ["bydlení", "refinancování", "rodina"],
    },
    {
      name: "Investice",
      description:
        "Postavíme dlouhodobý plán podle vašich cílů, časového horizontu a míry rizika, která je vám příjemná.",
      tags: ["rezerva", "budoucnost", "růst"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Nejdřív posloucháme",
      text: "U kávy v ostravské kanceláři probereme vaše potřeby, závazky i plány. Bez produktů na stole.",
    },
    {
      number: "02",
      title: "Uděláme pořádek",
      text: "Podíváme se na současné smlouvy a ukážeme, co dává smysl zachovat, změnit nebo doplnit.",
    },
    {
      number: "03",
      title: "Navrhneme plán",
      text: "Propojíme pojištění, bydlení a investice do jednoho srozumitelného řešení pro vaši situaci.",
    },
    {
      number: "04",
      title: "Zůstáváme nablízku",
      text: "Plán pravidelně aktualizujeme, aby držel krok s novou prací, bydlením i změnami v rodině.",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="PROFORZA finance – úvod">
            <span className="wordmark-main">PROFORZA</span>
            <span className="wordmark-sub">finance · Ostrava</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co řešíme</a>
            <a href="#spoluprace">Jak spolupracujeme</a>
            <a className="nav-phone" href="tel:+420596110620">
              Zavolat
            </a>
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Finanční plán na míru · Ostrava</p>
            <h1 id="hero-title">
              Klid ve financích
              <span> není náhoda.</span>
              Je to plán.
            </h1>
            <p className="hero-intro">
              Pojištění, hypotéku i investice propojíme tak, aby dávaly smysl vašemu životu — dnes i za několik let.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420596110620">
                Zavolat poradci
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="mailto:info@proforza.cz">
                Napsat na info@proforza.cz
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Poradce PROFORZA při osobní konzultaci s klienty"
            />
            <div className="plan-map" aria-label="Finanční plán propojuje ochranu, bydlení a budoucnost">
              <p>Váš plán</p>
              <div className="plan-route" aria-hidden="true">
                <span className="route-segment" />
                <span className="route-dot route-dot-one" />
                <span className="route-dot route-dot-two" />
                <span className="route-dot route-dot-three" />
              </div>
              <div className="route-labels">
                <span>Ochrana</span>
                <span>Bydlení</span>
                <span>Budoucnost</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-shell" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Jedna situace, jeden souvislý pohled</p>
          <h2 id="services-title">Finance nemají žít v oddělených šuplících.</h2>
          <p>
            Když se změní bydlení, práce nebo rodina, ovlivní to víc než jednu smlouvu. Proto se díváme na celek.
          </p>
        </div>

        <div className="services-layout">
          <div className="services-image">
            <img
              src="/section-1.webp"
              alt="Detail konzultace nad osobním finančním plánem"
              loading="lazy"
            />
            <span className="image-note">Srozumitelně. V souvislostech. Bez spěchu.</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <div className="service-title-row">
                  <h3>{service.name}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>{service.description}</p>
                <ul aria-label={`Témata služby ${service.name}`}>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process" id="spoluprace" aria-labelledby="process-title">
        <div className="section-shell process-shell">
          <div className="process-intro">
            <div>
              <p className="eyebrow">Spolupráce, která pokračuje</p>
              <h2 id="process-title">Plán se mění spolu s vámi.</h2>
            </div>
            <p>
              Nejde nám o jednorázový podpis. Vysvětlíme souvislosti, navrhneme řešení a zůstaneme k dispozici, když se váš život posune dál.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-steps">
              {process.map((step) => (
                <article className="process-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="trust-panel" aria-label="O společnosti PROFORZA finance">
              <img
                src="/section-2.webp"
                alt="Tým finančních poradců PROFORZA v ostravské kanceláři"
                loading="lazy"
              />
              <div className="trust-copy">
                <p className="trust-kicker">Jsme vám nablízku</p>
                <h3>Osobně v Ostravě</h3>
                <address>
                  Jiřího Trnky 1237/9<br />
                  709 00 Ostrava–Mariánské Hory
                </address>
                <div className="trust-links">
                  <a href="tel:+420596110620">+420 596 110 620</a>
                  <a href="mailto:info@proforza.cz">info@proforza.cz</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
