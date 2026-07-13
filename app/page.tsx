export default function Page() {
  const services = [
    {
      title: "Zateplení fasády",
      text: "Navrhneme a provedeme souvislý zateplovací systém včetně detailů kolem soklu, oken a střechy. Výsledkem je teplejší dům bez zbytečných tepelných mostů.",
      label: "Rodinné i bytové domy",
    },
    {
      title: "Obnova pláště domu",
      text: "Opravíme poškozené povrchy, klempířské prvky i navazující části fasády. Jedna zakázka, návazná řemesla a jasná odpovědnost za celé provedení.",
      label: "Fasády a rekonstrukce",
    },
    {
      title: "Stavební práce vlastními lidmi",
      text: "Zakázku neřídíme jen od stolu. Stavební činnost provádějí naši pracovníci a podle potřeby zajistíme také související stavební profese.",
      label: "Vlastní realizační tým",
    },
  ];

  const references = [
    "FN Hradec Králové — Oční klinika",
    "Kolín — Na Magistrále 798–799",
    "Poděbrady — lázeňský hotel",
    "Letohrad — zámek",
    "Kolín Business Park — Zvěřínek",
  ];

  return (
    <main className="unitip">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-head">
          <a className="wordmark" href="#nahoru" aria-label="UNITIP — úvod">
            <span className="wordmark-mark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>UNI<span>TIP</span></span>
          </a>

          <div className="head-meta">
            <span>Stavební divize</span>
            <span>Hradec Králové</span>
          </div>

          <a className="head-action" href="/kontakty">
            Poptat zateplení
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-copy" id="nahoru">
          <p className="eyebrow">Zateplování a rekonstrukce · od roku 1991</p>
          <h1 id="hero-title">
            Dům má držet <em>teplo.</em><br />
            Ne účty vzhůru.
          </h1>
          <p className="hero-lead">
            Zateplujeme a obnovujeme domy v Hradci Králové i po celé republice.
            Od přípravy podkladu po poslední detail fasády — vlastními pracovníky
            a s odpovědností za hotové dílo.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/kontakty">Probrat můj dům</a>
            <a className="text-link" href="#realizace">Prohlédnout realizace <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Realizace zateplení fasády">
          <img
            src="/hero.webp"
            alt="Pracovníci UNITIP při zateplování fasády domu"
          />
          <div className="material-cut" aria-hidden="true">
            <span className="cut-finish">omítka</span>
            <span className="cut-insulation">izolace</span>
            <span className="cut-wall">zdivo</span>
          </div>
          <p className="visual-note">
            <span>Správný detail</span>
            rozhoduje o celé fasádě
          </p>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="services-title">Teplo zůstane uvnitř.<br />Starosti necháte nám.</h2>
          <p>
            Neřešíme jen metry izolace. Hlídáme návaznosti, které rozhodují o životnosti
            fasády — ostění, parapety, sokl i napojení na střechu.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-image">
            <img
              src="/section-1.webp"
              alt="Detail montáže izolačních desek na fasádu"
              loading="lazy"
            />
            <figcaption>Souvislá vrstva, čisté napojení, žádná slabá místa.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p>{service.label}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="realizace" aria-labelledby="trust-title">
        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Dokončená zateplená budova v realizaci společnosti UNITIP"
            loading="lazy"
          />
          <div className="since-card">
            <span>Na stavbách</span>
            <strong>od 1991</strong>
            <small>česká výrobně-montážní firma</small>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow">Zkušenost, kterou lze dohledat</p>
          <h2 id="trust-title">Od kliniky po bytový dům.</h2>
          <p className="trust-lead">
            UNITIP vyrostl v Hradci Králové a pracuje po celé republice. Za výsledkem
            stojí konkrétní lidé, vlastní realizační kapacity a zkušenost s domy,
            průmyslovými areály i veřejnými budovami.
          </p>

          <div className="proof-grid" aria-label="Hlavní důvody pro spolupráci">
            <div>
              <strong>Vlastní tým</strong>
              <span>Stavební práce provádějí naši pracovníci.</span>
            </div>
            <div>
              <strong>Jedna odpovědnost</strong>
              <span>Koordinujeme zateplení i navazující řemesla.</span>
            </div>
            <div>
              <strong>Celá republika</strong>
              <span>Zázemí máme v Hradci Králové, realizace napříč regiony.</span>
            </div>
          </div>

          <div className="reference-list">
            <p>Vybrané realizace</p>
            <ul>
              {references.map((reference) => (
                <li key={reference}>{reference}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
