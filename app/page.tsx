export default function Page() {
  const services = [
    {
      tag: "TEXTIL",
      title: "Oblečení, které patří k týmu",
      text: "Trička, mikiny, bundy i pracovní oděvy. Vybereme materiál a technologii potisku podle toho, jak často se bude textil nosit a prát.",
      note: "výšivka · sítotisk · transfer",
    },
    {
      tag: "PŘEDMĚTY",
      title: "Dárky, které nezůstanou v šuplíku",
      text: "Lahve, hrnky, zápisníky, elektronika i udržitelné drobnosti. Doporučíme věci, které dávají smysl vaší značce i rozpočtu.",
      note: "UV tisk · tampon · laser",
    },
    {
      tag: "SADY",
      title: "Balíčky připravené k předání",
      text: "Produkty sladíme, označíme a zabalíme do jednoho celku — pro onboarding, konferenci, klienty nebo firemní akci.",
      note: "návrh · výroba · kompletace",
    },
  ];

  return (
    <main>
      <title>Sketch reklama Praha | Reklamní předměty a potisk</title>
      <meta
        name="description"
        content="Reklamní předměty, firemní textil, potisk a dárkové sady od Sketch reklama. Přes 33 let zkušeností, výroba pro firmy v Praze i celé ČR."
      />
      <meta property="og:title" content="Sketch reklama — vaše značka v dobrých rukou" />
      <meta
        property="og:description"
        content="Vybereme předměty, navrhneme potisk a pohlídáme výrobu od prvního nápadu po hotovou zásilku."
      />
      <meta property="og:image" content="/hero.webp" />
      <meta property="og:type" content="website" />

      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#zacatek" aria-label="Sketch reklama, úvod">
            <span>sketch</span>
            <small>reklama / Praha</small>
          </a>

          <div className="nav-links">
            <a href="#nabidka">Co vyrábíme</a>
            <a href="#proc-sketch">Proč Sketch</a>
          </div>

          <a className="phone-link" href="tel:+420727908933">
            <span>Zavolat</span>
            727 908 933
          </a>
        </nav>

        <div className="hero-stage" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Reklamní výroba · od roku 1993</p>
            <h1 id="hero-title">
              Vaše značka.
              <span>Do ruky.</span>
            </h1>
            <p className="hero-intro">
              Vybereme předmět, doladíme potisk a pohlídáme výrobu. Vy dostanete firemní dárky a textil,
              které lidé opravdu chtějí používat.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="mailto:info@sketch.cz?subject=Poptávka%20reklamní%20výroby">
                Popsat svou poptávku
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                <strong>Odpovíme do 2 hodin</strong>
                <span>v pracovní době</span>
              </p>
            </div>
          </div>

          <figure className="proof-sheet">
            <div className="crop-mark crop-mark-a" aria-hidden="true" />
            <div className="crop-mark crop-mark-b" aria-hidden="true" />
            <img
              src="/hero.webp"
              alt="Detail firemních reklamních předmětů připravených k potisku"
              width="1200"
              height="900"
              fetchPriority="high"
            />
            <figcaption>
              <span>NÁTISK / 01</span>
              <strong>Barva. Materiál. Detail.</strong>
            </figcaption>
            <div className="ink-strip" aria-label="Ukázka tiskových barev">
              <i className="ink-blue" />
              <i className="ink-orange" />
              <i className="ink-cyan" />
              <i className="ink-black" />
            </div>
          </figure>
        </div>
      </section>

      <section className="services" id="nabidka" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Od výběru po hotovou krabici</p>
            <h2 id="services-title">Co umíme dostat na materiál</h2>
          </div>
          <p>
            Neprodáváme jen volnou plochu pro logo. Hledáme správnou kombinaci předmětu, technologie a
            provedení, aby výsledek vydržel a reprezentoval.
          </p>
        </div>

        <div className="services-layout">
          <figure className="material-image">
            <img
              src="/section-1.webp"
              alt="Ukázky potisku na firemním textilu a reklamních předmětech"
              width="1000"
              height="1200"
              loading="lazy"
            />
            <figcaption>
              <span>VZORNÍK MATERIÁLŮ</span>
              Každý povrch potřebuje jiný postup.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.tag}>
                <p className="service-tag">{service.tag}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <small>{service.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="proc-sketch" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Kontrola kvality hotové reklamní zakázky ve výrobě Sketch"
            width="1200"
            height="1000"
            loading="lazy"
          />
          <div className="quality-stamp" aria-hidden="true">
            <span>SK</span>
            <small>kontrola detailu</small>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Sketch reklama · Praha</p>
          <h2 id="trust-title">Klid od první konzultace po předání.</h2>
          <p className="trust-lead">
            Už více než 33 let pomáháme značkám převést nápad do věci, která obstojí v ruce. Hlídáme
            odstín, umístění potisku, termín i kompletaci — a mluvíte s člověkem, který vaši zakázku zná.
          </p>

          <dl className="facts">
            <div>
              <dt>33+ let</dt>
              <dd>zkušeností s reklamní výrobou</dd>
            </div>
            <div>
              <dt>Do 2 hodin</dt>
              <dd>první odpověď na vaši poptávku</dd>
            </div>
            <div>
              <dt>Jeden partner</dt>
              <dd>pro výběr, potisk i kompletaci</dd>
            </div>
          </dl>

          <blockquote>
            „Potřebovali jsme sjednotit textil, lahve a balení pro celý tým. Sketch pohlídal odstíny i
            termín, takže jsme nemuseli koordinovat tři různé dodavatele.“
            <cite>— firemní zakázka, Praha</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
