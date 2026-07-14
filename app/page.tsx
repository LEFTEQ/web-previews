const services = [
  {
    code: "PPC",
    title: "Kampaně ve vyhledávání",
    text: "Zachytíme lidi ve chvíli, kdy už hledají váš produkt nebo službu. Kampaně průběžně čistíme, testujeme a hlídáme jejich návratnost."
  },
  {
    code: "SOC",
    title: "Reklama na sociálních sítích",
    text: "Připravíme publika, sdělení i kreativní formáty pro Meta a další sítě. Každá varianta má jasný účel a měřitelný výsledek."
  },
  {
    code: "WEB",
    title: "Weby, které dokončí zásah",
    text: "Navrhneme rychlou vstupní stránku nebo celý web tak, aby návštěvník okamžitě poznal nabídku a věděl, co udělat dál."
  },
  {
    code: "VIS",
    title: "Grafika a video",
    text: "Tvoříme bannery, obsah pro sítě i krátká videa. Jednotný vizuální směr drží značku rozpoznatelnou napříč kampaní."
  }
];

export default function Page() {
  return (
    <>
      <title>Zacílená reklama | PPC, sociální sítě a weby v Praze</title>
      <meta
        name="description"
        content="Zacílená reklama je pražský tým specialistů na PPC kampaně, sociální sítě, weby, grafiku a video. Kampaně nastavujeme, optimalizujeme a srozumitelně vyhodnocujeme."
      />
      <meta property="og:title" content="Zacílená reklama | Míříme na výsledek" />
      <meta
        property="og:description"
        content="PPC, sociální sítě, weby a kreativní produkce od sehraného týmu z Prahy–Hostivaře."
      />
      <meta property="og:image" content="/hero.webp" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />

      <main className="site-shell">
        <section className="hero" aria-labelledby="hero-title">
          <header className="site-header">
            <a className="wordmark" href="#nahoru" aria-label="Zacílená reklama – začátek stránky">
              <span className="wordmark-sight" aria-hidden="true"><i /></span>
              <span>Zacílená<br />reklama</span>
            </a>

            <nav className="main-nav" aria-label="Hlavní navigace">
              <a href="#sluzby">Co zajistíme</a>
              <a href="#tym">Jak pracujeme</a>
            </nav>

            <a className="header-call" href="tel:+420737090049">
              <span className="header-call-label">Zavolat</span>
              <span className="header-call-number">+420 737 090 049</span>
            </a>
          </header>

          <div className="hero-grid" id="nahoru">
            <div className="hero-copy">
              <p className="eyebrow"><span>Praha–Hostivař</span><span>PPC · Social · Web</span></p>
              <h1 id="hero-title">Reklama,<br />která míří<br /><em>na výsledek.</em></h1>
              <p className="hero-lead">
                Přivedeme vás před správné lidi a ukážeme, co každý investovaný rozpočet skutečně přinesl.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="mailto:jakub.pavlicek@zacilenareklama.cz?subject=Chci%20probrat%20reklamn%C3%AD%20kampa%C5%88">
                  Probrat kampaň
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#sluzby">Prohlédnout služby <span aria-hidden="true">↓</span></a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Přesně zaměřená reklamní kampaň">
              <div className="target-frame">
                <img
                  src="/hero.webp"
                  alt="Specialista Zacílené reklamy při přípravě digitální kampaně"
                  width="1200"
                  height="900"
                  fetchPriority="high"
                />
                <div className="target-reticle" aria-hidden="true">
                  <span className="reticle-ring" />
                  <span className="reticle-dot" />
                </div>
                <span className="target-label target-label-top">CÍL / RŮST</span>
                <span className="target-label target-label-bottom">SIGNÁL NALEZEN</span>
              </div>
              <div className="hero-proof">
                <span>Od nastavení po vyhodnocení</span>
                <strong>Jedna sehraná parta</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="section-kicker">Co zajistíme</p>
            <h2 id="services-title">Od prvního zobrazení až po objednávku.</h2>
            <p>
              Jednotlivé kanály neskládáme vedle sebe. Propojíme je do jedné cesty, kterou lze měřit a postupně zpřesňovat.
            </p>
          </div>

          <div className="services-layout">
            <figure className="services-image">
              <img
                src="/section-1.webp"
                alt="Práce s reklamními kampaněmi a jejich přesným vyhodnocením"
                width="1000"
                height="1200"
                loading="lazy"
              />
              <figcaption>Rozpočet nesledujeme zpětně. Řídíme ho každý den.</figcaption>
            </figure>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-item" key={service.code}>
                  <span className="service-code">{service.code}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="team" id="tym" aria-labelledby="team-title">
          <div className="team-copy">
            <p className="section-kicker section-kicker-light">Kdo stojí za kampaní</p>
            <h2 id="team-title">Specialisté u jednoho stolu. Ne anonymní patro agentury.</h2>
            <p className="team-lead">
              Jsme sehraná parta freelancerů, která v Praze společně tvoří reklamní agenturu. Mluvíte přímo s lidmi, kteří kampaně nastavují, kreslí i vyhodnocují.
            </p>

            <dl className="trust-list">
              <div>
                <dt>Rozhodování</dt>
                <dd>Podle dat, ne podle dojmů</dd>
              </div>
              <div>
                <dt>Spolupráce</dt>
                <dd>Přímo se specialistou</dd>
              </div>
              <div>
                <dt>Zázemí</dt>
                <dd>Business Park, Praha 15–Hostivař</dd>
              </div>
            </dl>

            <blockquote>
              <p>„Neukazujeme jen počet kliknutí. Vysvětlíme, co kampaň přinesla a kam má smysl mířit dál.“</p>
              <cite>Jakub Pavlíček, Zacílená reklama</cite>
            </blockquote>
          </div>

          <figure className="team-image">
            <img
              src="/section-2.webp"
              alt="Sehraná skupina specialistů Zacílené reklamy v Praze"
              width="1200"
              height="1000"
              loading="lazy"
            />
            <figcaption>
              <span>Praha 15</span>
              <strong>Průmyslová 1306/7</strong>
            </figcaption>
          </figure>
        </section>
      </main>
    </>
  );
}
