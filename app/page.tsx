export default function Page() {
  const categories = [
    {
      code: "REF",
      title: "Chlazení",
      text: "Kompresory, kondenzační jednotky, výparníky, kondenzátory, ventilátory a výměníky pro nové sestavy i servis.",
    },
    {
      code: "AIR",
      title: "Klimatizace",
      text: "Kompaktní, mobilní i okenní klimatizace a komponenty pro komerční a průmyslové instalace.",
    },
    {
      code: "HEAT",
      title: "Tepelná čerpadla",
      text: "Technika značek Daikin, Mitsubishi Electric, Panasonic, Toshiba, LG, Samsung a dalších výrobců.",
    },
    {
      code: "AUTO",
      title: "Autoklimatizace",
      text: "Kompresory, spojky, kondenzátory, vysoušeče, sběrače a expanzní ventily pro přesnou opravu okruhu.",
    },
  ];

  return (
    <main className="sh-page">
      <a className="sh-skip" href="#sortiment">
        Přeskočit na sortiment
      </a>

      <section className="sh-hero" aria-labelledby="hero-title">
        <header className="sh-masthead">
          <a className="sh-wordmark" href="#top" aria-label="Schiessl Liberec – začátek stránky">
            <span>schiessl</span>
            <small>LIBEREC / CHLADICÍ TECHNIKA</small>
          </a>

          <nav className="sh-nav" aria-label="Hlavní navigace">
            <a href="#sortiment">Sortiment</a>
            <a href="#podpora">Technická podpora</a>
          </nav>
        </header>

        <div className="sh-hero-grid" id="top">
          <div className="sh-hero-copy">
            <p className="sh-kicker">Velkoobchod pro montážní a projekční firmy · Liberec</p>
            <h1 id="hero-title">
              Díly pro <span>chlad,</span>
              <br />který nesmí stát.
            </h1>
            <p className="sh-lead">
              Komponenty pro chlazení, klimatizace a tepelná čerpadla vybíráme jako součást jednoho
              systému. Ať řešíte novou instalaci, nebo servis v provozu.
            </p>

            <div className="sh-actions" aria-label="Rychlý kontakt">
              <a className="sh-button sh-button-primary" href="tel:+420606611063">
                Zavolat odborníkovi
                <span aria-hidden="true">↗</span>
              </a>
              <a className="sh-button sh-button-secondary" href="#sortiment">
                Projít sortiment
              </a>
            </div>

            <ul className="sh-hero-notes" aria-label="Hlavní výhody">
              <li>Výběr kompatibilních dílů</li>
              <li>Podpora z technických databází</li>
              <li>Pobočka přímo v Liberci</li>
            </ul>
          </div>

          <figure className="sh-hero-visual">
            <div className="sh-cold-track" aria-hidden="true">
              <span>CHLADIVO</span>
              <i />
              <span>TLAK</span>
              <i />
              <span>VÝKON</span>
            </div>
            <img
              src="/hero.webp"
              width="1440"
              height="1080"
              alt="Detail profesionální klimatizační a chladicí techniky"
            />
            <figcaption>
              <span>Komponenta není položka v katalogu.</span>
              <strong>Je to článek funkčního okruhu.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sh-range" id="sortiment" aria-labelledby="range-title">
        <div className="sh-section-heading">
          <p className="sh-kicker">Sortiment pobočky Liberec</p>
          <h2 id="range-title">Od kompresoru po poslední ventil.</h2>
          <p>
            Na jednom místě vyřešíte hlavní zařízení, regulační prvky i náhradní díly. Pomůžeme vám
            ověřit výkon, chladivo a návaznost komponent ještě před objednávkou.
          </p>
        </div>

        <div className="sh-range-layout">
          <figure className="sh-range-image">
            <img
              src="/section-1.webp"
              width="1200"
              height="1400"
              loading="lazy"
              alt="Technik pracující s komponenty chladicího systému"
            />
            <figcaption>Pro montáž, pravidelný servis i rychlou výměnu v provozu.</figcaption>
          </figure>

          <div className="sh-category-list">
            {categories.map((category) => (
              <article className="sh-category" key={category.code}>
                <span className="sh-category-code">{category.code}</span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </div>
                <span className="sh-category-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-support" id="podpora" aria-labelledby="support-title">
        <div className="sh-support-visual">
          <img
            src="/section-2.webp"
            width="1400"
            height="1100"
            loading="lazy"
            alt="Odborná kontrola klimatizačního systému a jeho zapojení"
          />
          <div className="sh-image-label">
            <span>30 let zkušeností na trhu</span>
            <span>6 poboček v Česku</span>
          </div>
        </div>

        <div className="sh-support-copy">
          <p className="sh-kicker">Technická podpora před expedicí</p>
          <h2 id="support-title">Díl nestačí. Musí sedět do systému.</h2>
          <p className="sh-support-lead">
            Když si nejste jistí náhradou nebo návrhem okruhu, projdeme s vámi zadání. Opíráme se o
            data výrobců, vlastní zkušenosti a koncernové znalostní databáze.
          </p>

          <ol className="sh-process">
            <li>
              <span>01</span>
              <div>
                <h3>Popíšete provoz</h3>
                <p>Výkon, médium, teploty, prostor a zařízení, na které nový díl navazuje.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Ověříme souvislosti</h3>
                <p>Porovnáme parametry, kompatibilitu, dostupné chladivo a vhodnou alternativu.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Dostanete konkrétní řešení</h3>
                <p>Bez neurčitého seznamu možností — s výběrem, který lze skutečně namontovat.</p>
              </div>
            </li>
          </ol>

          <p className="sh-local-note">
            <span aria-hidden="true">●</span>
            Obsluhujeme montážní firmy a projektanty z Liberce i celého severu Čech.
          </p>
        </div>
      </section>
    </main>
  );
}
