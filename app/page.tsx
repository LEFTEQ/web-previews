const services = [
  {
    title: "Odtah bez dohadů",
    text: "Havarované nebo nepojízdné vozidlo odvezeme do servisu, domů nebo na místo, které určíte. Osobní i nákladní auta.",
    meta: "Plzeň · ČR · Evropa",
  },
  {
    title: "Vyproštění z terénu",
    text: "Zapadlé auto, svah, příkop nebo nehoda mimo vozovku. Přijedeme s technikou, která řeší situaci bezpečně a bez zbytečného poškození.",
    meta: "Terénní zásah",
  },
  {
    title: "Pomoc přímo na místě",
    text: "U běžných poruch nejdřív zkusíme opravu na místě. Když odtah není nutný, šetříme vám čas i další cestu do servisu.",
    meta: "Silniční asistence 24/7",
  },
  {
    title: "Pojišťovnu vyřídíme za vás",
    text: "Jsme smluvní partner předních pojišťoven. Nehodu pomůžeme nahlásit a v mnoha případech zákazník na místě nic neplatí.",
    meta: "Smluvní partner",
  },
];

const steps = [
  "Zapněte výstražná světla a odejděte od vozovky.",
  "Připravte polohu: číslo silnice, kilometr nebo GPS.",
  "Zavolejte Auto Kadet. Lovce nehod odmítněte.",
];

export default function Page() {
  return (
    <main className="ak-page" aria-labelledby="ak-title">
      <section className="ak-hero">
        <div className="ak-topbar" aria-label="Auto Kadet">
          <a className="ak-wordmark" href="tel:+420602434534" aria-label="Auto Kadet, zavolat asistenci">
            <span className="ak-mark">AK</span>
            <span className="ak-name">Auto Kadet</span>
          </a>
          <span className="ak-status">Nonstop 24/7</span>
        </div>

        <div className="ak-hero-grid">
          <div className="ak-hero-copy">
            <p className="ak-kicker">Odtahová asistence z Plzně po celé Evropě</p>
            <h1 id="ak-title">Když auto stojí, my už vyrážíme.</h1>
            <p className="ak-lead">
              Nehoda, porucha nebo nouzová situace. Auto Kadet přijede, zajistí odtah, pomůže s pojišťovnou a postará se o vás i o vozidlo.
            </p>
            <div className="ak-actions" aria-label="Rychlý kontakt">
              <a className="ak-button ak-button-primary" href="tel:+420602434534">Zavolat asistenci</a>
              <a className="ak-button ak-button-ghost" href="mailto:autokadet@seznam.cz">autokadet@seznam.cz</a>
            </div>
          </div>

          <div className="ak-dispatch" aria-label="Rychlá informace o zásahu">
            <div className="ak-road" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="ak-dispatch-label">Jeden hovor stačí</p>
            <p className="ak-dispatch-number">+420 602 434 534</p>
            <dl className="ak-dispatch-list">
              <div><dt>Působnost</dt><dd>Celá Evropa</dd></div>
              <div><dt>Základna</dt><dd>Plzeň</dd></div>
              <div><dt>Praxe</dt><dd>od roku 1995</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="ak-section ak-services" aria-labelledby="ak-services-title">
        <div className="ak-section-head">
          <p className="ak-kicker">Co vyřešíme</p>
          <h2 id="ak-services-title">Přijedeme, postaráme se, odjedeme.</h2>
        </div>
        <div className="ak-service-grid">
          {services.map((item) => (
            <article className="ak-service-card" key={item.title}>
              <p className="ak-service-meta">{item.meta}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ak-section ak-trust" aria-labelledby="ak-trust-title">
        <div className="ak-proof">
          <div className="ak-section-head">
            <p className="ak-kicker">Důvěra v krizi</p>
            <h2 id="ak-trust-title">Třicet let na silnici, žádné plané sliby.</h2>
            <p>
              Začali jsme v Plzni s jedním vozidlem. Dnes zajišťujeme odtahy a asistenci pro osobní i nákladní dopravu v Česku i zahraničí, nonstop 365 dní v roce.
            </p>
          </div>
          <div className="ak-stats" aria-label="Základní údaje">
            <div><strong>30+</strong><span>let praxe</span></div>
            <div><strong>24/7</strong><span>nonstop provoz</span></div>
            <div><strong>7+</strong><span>smluvních pojišťoven</span></div>
          </div>
        </div>

        <aside className="ak-guide" aria-labelledby="ak-guide-title">
          <h3 id="ak-guide-title">Co udělat hned po nehodě</h3>
          <ol>
            {steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p>Adresa provozu: Lochotínská 26, 301 00 Plzeň.</p>
        </aside>
      </section>
    </main>
  );
}
