export default function Page() {
  const wines = [
    { name: "Bílá", note: "minerální · svěží", origin: "Condrieu / Luberon" },
    { name: "Červená", note: "kořenitá · plná", origin: "Crozes-Hermitage" },
    { name: "Růžová", note: "suchá · lehká", origin: "Tavel / Provence" },
    { name: "Bubliny", note: "jemné · slavnostní", origin: "Crémant de Die" },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Francouzské víno z údolí Rhôny připravené k ochutnání"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />
        <svg className="river" viewBox="0 0 320 900" aria-hidden="true">
          <path d="M188 -30C67 84 273 162 148 270S62 452 187 520s102 203-13 268S108 890 108 940" />
        </svg>

        <header className="site-head">
          <a className="wordmark" href="#obsah" aria-label="Na břehu Rhôny – úvod">
            <span className="wordmark__bank">NA BŘEHU</span>
            <span className="wordmark__river">RHÔNY</span>
          </a>
          <div className="site-head__place">Vinotéka · Olomouc</div>
          <a className="site-head__phone" href="tel:+420602195075">
            Zavolat
          </a>
        </header>

        <div className="hero__content" id="obsah">
          <p className="eyebrow">Francouzská vína, která známe jménem</p>
          <h1 id="hero-title">
            Po proudu
            <span>za dobrým vínem.</span>
          </h1>
          <p className="hero__intro">
            V Olomouci vybíráme lahve od malých vinařů z údolí Rhôny. Řekněte nám,
            co máte rádi — doporučíme víno k večeři, oslavě i obyčejnému úterý.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#vyber">
              Vybrat víno
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button button--quiet" href="mailto:eshop@nabrehurhony.cz">
              Napsat do vinotéky
            </a>
          </div>
        </div>

        <p className="hero__dispatch">
          Objednávky uhrazené do 11.00 expedujeme ještě tentýž den.
        </p>
      </section>

      <section className="selection" id="vyber" aria-labelledby="selection-title">
        <div className="selection__heading">
          <p className="section-label">Výběr podle chuti</p>
          <h2 id="selection-title">Nejdřív příležitost. Potom odrůda.</h2>
          <p>
            Nemusíte znát apelace ani ročníky. Začněte chutí, kterou hledáte — původ
            a příběh konkrétní lahve vám rádi dopovíme.
          </p>
        </div>

        <div className="selection__visual">
          <img
            src="/section-1.webp"
            alt="Výběr lahví francouzského vína ve vinotéce Na břehu Rhôny"
            loading="lazy"
          />
          <span className="selection__caption">Výběr z údolí řeky Rhôny</span>
        </div>

        <div className="wine-list" aria-label="Základní výběr vín">
          {wines.map((wine) => (
            <article className="wine-row" key={wine.name}>
              <div>
                <h3>{wine.name}</h3>
                <p>{wine.note}</p>
              </div>
              <span>{wine.origin}</span>
            </article>
          ))}
          <p className="wine-list__more">
            Také naturální vína, bag-in-box a vouchery na degustace.
          </p>
        </div>
      </section>

      <section className="provenance" aria-labelledby="provenance-title">
        <div className="provenance__image-wrap">
          <img
            src="/section-2.webp"
            alt="Detail francouzského vinařství a vinic v krajině údolí Rhôny"
            loading="lazy"
          />
          <div className="provenance__stamp" aria-hidden="true">
            <span>RHÔNE</span>
            <small>→ OLOMOUC</small>
          </div>
        </div>

        <div className="provenance__content">
          <p className="section-label">Od vinaře až do sklenky</p>
          <h2 id="provenance-title">Lahve s jasným původem. Rada bez pózy.</h2>
          <p className="provenance__lead">
            Za každým vínem stojí konkrétní vinařství, krajina a způsob práce. My k
            tomu přidáváme zkušenost s výběrem a normální lidské vysvětlení.
          </p>

          <dl className="facts">
            <div>
              <dt>Výběr</dt>
              <dd>Francouzská bílá, růžová, červená, šumivá i přírodní vína.</dd>
            </div>
            <div>
              <dt>Jistota</dt>
              <dd>Doporučení podle chuti, jídla a částky, kterou chcete utratit.</dd>
            </div>
            <div>
              <dt>Olomouc</dt>
              <dd>Osobní vyzvednutí po potvrzovacím e-mailu nebo rychlá expedice.</dd>
            </div>
          </dl>

          <div className="contact-note">
            <span>Potřebujete poradit s lahví?</span>
            <a href="tel:+420602195075">+420 602 195 075</a>
            <a href="mailto:eshop@nabrehurhony.cz">eshop@nabrehurhony.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
