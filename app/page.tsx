const serviceGroups = [
  {
    title: "Rodina a dohody",
    items: ["rozvod a péče o děti", "vypořádání společného jmění", "dohody pro nesporné řízení"],
  },
  {
    title: "Smlouvy a nemovitosti",
    items: ["kupní, darovací a nájemní smlouvy", "revize smluv před podpisem", "věcná břemena a podíly"],
  },
  {
    title: "Spory a nároky",
    items: ["předžalobní výzvy", "vymáhání pohledávek", "pojistné plnění a újma na zdraví"],
  },
];

const reviews = [
  {
    quote:
      "Spolupráce byla rychlá a efektivní, vše jsme vyřídili přes e-mail a požadované právní dokumenty byly připravené v zásadě do dvou dnů.",
    author: "Ales Fojtik",
  },
  {
    quote:
      "Profesionalita, vstřícnost a lidský přístup. Věděla jsem, co se bude dít, kolik to bude stát a jaké mám možnosti.",
    author: "Aneta Serbusová",
  },
];

export default function Page() {
  return (
    <main className="kazda-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__rail" aria-hidden="true">
          <span>spis</span>
          <span>lhůta</span>
          <span>podpis</span>
        </div>

        <div className="hero__content">
          <header className="topbar" aria-label="Identita kanceláře">
            <a className="wordmark" href="mailto:120advokat@judrkazda.cz" aria-label="JUDr. Petr Kazda, advokát">
              <span className="wordmark__mark">KZ</span>
              <span className="wordmark__text">
                <span>Kazda</span>
                <span>advokát</span>
              </span>
            </a>
            <div className="topbar__meta" aria-label="Kontakt">
              <a href="tel:+420776573120">776 573 120</a>
              <span>Nymburk - Praha - online</span>
            </div>
          </header>

          <div className="hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">JUDr. Petr Kazda, advokát</p>
              <h1 id="hero-title">Právní věci mají lhůty. Vy máte jasný další krok.</h1>
              <p className="hero__lead">
                Kvalifikovaná a cenově dostupná pomoc pro občany, podnikatele i firmy. Konzultace,
                smlouvy a zastoupení před soudy nebo správními orgány řešíte s advokátem, který
                odpovídá konkrétně a drží tempo případu.
              </p>
              <div className="hero__facts" aria-label="Hlavní údaje">
                <span>5,0 z 5 na Googlu</span>
                <span>138 hodnocení</span>
                <span>osobně i na dálku</span>
              </div>
            </div>

            <aside className="case-card" aria-label="Jak probíhá první konzultace">
              <div className="case-card__stamp">Dnes k vyřízení</div>
              <dl>
                <div>
                  <dt>1. Popíšete situaci</dt>
                  <dd>Telefonicky nebo e-mailem pošlete dokumenty a otázky.</dd>
                </div>
                <div>
                  <dt>2. Dostanete varianty</dt>
                  <dd>Srozumitelně: rizika, cena, čas a doporučený postup.</dd>
                </div>
                <div>
                  <dt>3. Věc se připraví</dt>
                  <dd>Smlouva, výzva, návrh nebo zastoupení bez zbytečných průtahů.</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Služby</p>
          <h2 id="services-title">Nejdřív pořádek v dokumentech, potom silná pozice.</h2>
        </div>
        <div className="service-grid">
          {serviceGroups.map((group) => (
            <article className="service-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__intro">
          <p className="eyebrow">Důvěra</p>
          <h2 id="trust-title">Kancelář pro běžné právní situace i dlouhodobou firemní agendu.</h2>
          <p>
            Základní úkony lze vyřešit online. Osobní schůzky probíhají v Nymburce, Praze,
            Poděbradech a podle povahy věci i na dálku. Klienti oceňují rychlou komunikaci,
            věcné vysvětlení a prakticky použitelné dokumenty.
          </p>
          <div className="address-strip" aria-label="Adresy kanceláře">
            <span>Palackého třída 223/5, Nymburk</span>
            <span>Rumunská 12, Praha 2</span>
            <a href="mailto:120advokat@judrkazda.cz">120advokat@judrkazda.cz</a>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <figure className="review" key={review.author}>
              <blockquote>{review.quote}</blockquote>
              <figcaption>{review.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
