const services = [
  {
    title: "Strategie",
    text: "Ujasníme si, komu značka mluví, co má říkat a kde má být vidět. Výsledkem je srozumitelný plán, ne prezentace do šuplíku.",
    tag: "Směr značky",
  },
  {
    title: "Kreativa",
    text: "Navrhneme vizuální identitu, kampaně, tiskoviny i digitální obsah. Jedna nosná myšlenka drží každý výstup pohromadě.",
    tag: "Nápad a design",
  },
  {
    title: "Realizace",
    text: "Od loga po výroční zprávu, od sociální kampaně po konverzní web. Produkci dotáhneme až k hotovému výsledku.",
    tag: "Online i tisk",
  },
];

const awards = [
  ["2016", "Nejlepší jednotná kampaň", "Pardubický kraj — GO & Regiontour"],
  ["2014", "Firemní médium roku · 1. místo", "Časopis To jsou Pardubice"],
  ["2011 / 2010", "Zlatý středník", "Nejlepší zaměstnanecký časopis · Hartmann-Rico"],
  ["2008", "Kalendář roku", "Kalendář Synthesia"],
];

export default function Page() {
  return (
    <main>
      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#nahoru" aria-label="MAXX Creative — úvod">
          <span>MA</span><span className="wordmark-cut">XX</span>
          <small>creative · Pardubice</small>
        </a>
        <nav>
          <a href="#servis">Co děláme</a>
          <a href="#zkusenosti">Zkušenosti</a>
          <a className="nav-contact" href="tel:+420777100151">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="nahoru" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Nezávislá reklamní agentura · Pardubice · od roku 1998</p>
          <h1 id="hero-title">
            Značky, které
            <span>nejdou přehlédnout.</span>
          </h1>
          <p className="hero-intro">
            Vymýšlíme strategie, identity a kampaně. Silný nápad převedeme do grafiky, tisku i webu — a pohlídáme, aby fungoval všude stejně dobře.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:info@maxx.cz?subject=Nový%20projekt">Popsat nám projekt</a>
            <a className="text-link" href="#servis">Prohlédnout služby <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-art" aria-label="Ukázka kreativní práce agentury">
          <div className="proof-label proof-label-top">Kreativní koncept / 01</div>
          <img src="/hero.webp" alt="Výrazný kreativní návrh z portfolia MAXX Creative" />
          <div className="crop crop-one" aria-hidden="true" />
          <div className="crop crop-two" aria-hidden="true" />
          <div className="hero-stamp" aria-hidden="true">MAXX<br />IDEAS</div>
          <div className="proof-label proof-label-bottom">Nápad → obraz → výsledek</div>
        </div>
      </section>

      <section className="services" id="servis" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro vás spojíme</p>
          <h2 id="services-title">Od první otázky<br />po poslední výstup.</h2>
          <p>Nemusíte koordinovat stratéga, grafika, produkci a webmastera zvlášť. U jednoho stolu dostanete myšlenku i její provedení.</p>
        </div>

        <div className="services-visual">
          <img src="/section-1.webp" alt="Detail grafického návrhu připravovaného ve studiu MAXX Creative" />
          <span>Studio / Jiráskova 1275</span>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <p>{service.tag}</p>
              <h3>{service.title}</h3>
              <div className="service-detail">
                <p>{service.text}</p>
                <a href="mailto:info@maxx.cz?subject=Dotaz%20na%20služby" aria-label={`Zeptat se na službu ${service.title}`}>
                  Zeptat se <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="zkusenosti" aria-labelledby="trust-title">
        <div className="trust-image">
          <img src="/section-2.webp" alt="Realizovaný projekt z více než pětadvacetileté historie agentury" />
          <p><strong>150+</strong><span>klientů a značek,<br />pro které jsme tvořili</span></p>
        </div>

        <div className="trust-content">
          <p className="eyebrow">Zkušenost bez agenturního odstupu</p>
          <h2 id="trust-title">Stejné pevné jádro.<br />Pořád nové nápady.</h2>
          <p className="trust-lead">
            Tomáš Pospíšil a Martin Došek vedou MAXX od roku 1998. Klienti tak jednají přímo s lidmi, kteří nastavují směr, tvoří a ručí za výsledek.
          </p>

          <div className="awards" aria-label="Vybraná ocenění">
            {awards.map(([year, title, client]) => (
              <article className="award" key={`${year}-${title}`}>
                <time>{year}</time>
                <h3>{title}</h3>
                <p>{client}</p>
              </article>
            ))}
          </div>

          <div className="local-note">
            <span aria-hidden="true">PCE</span>
            <p><strong>Jsme opravdu z Pardubic.</strong> Najdete nás v přízemí na Jiráskově 1275, naproti Aquacentru. V pracovní dny obvykle od 8 do 16 hodin.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
