export default function Page() {
  return (
    <main className="vet-page" id="zacatek">
      <header className="site-header">
        <a className="wordmark" href="#zacatek" aria-label="Veterina U Zoo, úvodní stránka">
          <span className="wordmark-kicker">veterina</span>
          <span className="wordmark-name">u zoo</span>
        </a>

        <nav className="site-nav" aria-label="Hlavní navigace">
          <a href="#pece">Naše péče</a>
          <a href="#navsteva">První návštěva</a>
        </nav>

        <span className="freshness">Aktualizováno 07/2026</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" /> Veterinární ordinace v Brně
          </p>
          <h1 id="hero-title">
            Když vám neřeknou,
            <span>co bolí, nasloucháme za vás.</span>
          </h1>
          <p className="hero-lead">
            Citlivě vyšetříme psy, kočky i drobné savce. Vysvětlíme, co jsme zjistili,
            a společně vybereme péči, které budete rozumět.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pece">
              Zjistit, s čím pomůžeme
            </a>
            <a className="text-link" href="#navsteva">
              Jak probíhá návštěva <span aria-hidden="true">↓</span>
            </a>
          </div>
          <dl className="hero-facts" aria-label="Základní informace o ordinaci">
            <div>
              <dt>Pacienti</dt>
              <dd>Psi, kočky a drobní savci</dd>
            </div>
            <div>
              <dt>Zkušenost</dt>
              <dd>V Brně od roku 1992</dd>
            </div>
          </dl>
        </div>

        <figure className="hero-visual">
          <div className="hero-lens">
            <img
              src="/hero.webp"
              alt="Veterinářka při klidném vyšetření zvířecího pacienta v ordinaci Veterina U Zoo"
            />
          </div>
          <figcaption>
            <span className="pulse-dot" aria-hidden="true" />
            Vyšetření bez zbytečného spěchu
          </figcaption>
        </figure>
      </section>

      <section className="care-section" id="pece" aria-labelledby="care-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark">Péče pod jednou střechou</p>
          <h2 id="care-title">Od pravidelné kontroly po chvíle, kdy si nejste jistí.</h2>
          <p>
            Nečekáme, až se drobný problém změní ve velký. Prohlédneme pacienta v souvislostech
            a řekneme vám, co má smysl řešit právě teď.
          </p>
        </div>

        <div className="care-layout">
          <figure className="care-photo">
            <img
              src="/section-1.webp"
              alt="Detail šetrného veterinárního vyšetření psa v brněnské ordinaci"
            />
            <figcaption>Klidný přístup pomáhá i citlivým pacientům.</figcaption>
          </figure>

          <div className="service-list">
            <article>
              <span className="service-tag">Prevence</span>
              <h3>Kontroly, očkování a péče během celého života</h3>
              <p>
                Hlídáme kondici, chrup i změny spojené s věkem. Doporučení přizpůsobíme konkrétnímu
                zvířeti, ne univerzálnímu kalendáři.
              </p>
            </article>
            <article>
              <span className="service-tag">Když něco není v pořádku</span>
              <h3>Vyšetření potíží a srozumitelný plán léčby</h3>
              <p>
                Nechutenství, bolest, kulhání nebo změna chování mají svůj důvod. Hledáme ho
                systematicky a každý další krok vám vysvětlíme.
              </p>
            </article>
            <article>
              <span className="service-tag">Dlouhodobá péče</span>
              <h3>Kontroly chronických a seniorských pacientů</h3>
              <p>
                Sledujeme vývoj zdravotního stavu a léčbu průběžně upravujeme tak, aby přinášela
                úlevu a dobrou kvalitu života.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="visit-section" id="navsteva" aria-labelledby="visit-title">
        <div className="visit-photo-wrap">
          <figure className="visit-photo">
            <img
              src="/section-2.webp"
              alt="Veterinární tým Veteriny U Zoo při rozhovoru s majitelkou zvířete"
            />
          </figure>
          <p className="photo-note">
            <strong>Znát souvislosti pomáhá.</strong>
            Přineste zprávy z předchozích vyšetření a seznam užívaných léků.
          </p>
        </div>

        <div className="visit-content">
          <p className="eyebrow eyebrow-dark">Vaše návštěva</p>
          <h2 id="visit-title">V ordinaci víte, co se právě děje.</h2>
          <p className="visit-intro">
            Zdravotní starost je sama o sobě náročná. Proto u nás průběh návštěvy zůstává klidný,
            předvídatelný a bez nesrozumitelných zkratek.
          </p>

          <ol className="visit-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Nejdřív vás vyslechneme</h3>
                <p>Popíšete změny, kterých jste si doma všimli, a co vás znepokojuje.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Pacienta šetrně vyšetříme</h3>
                <p>Tempo i způsob vyšetření přizpůsobíme jeho povaze a aktuálnímu stavu.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Odcházíte s jasným plánem</h3>
                <p>Víte, co dělat doma, co sledovat a kdy je potřeba přijít na kontrolu.</p>
              </div>
            </li>
          </ol>

          <aside className="trust-note">
            <span aria-hidden="true">U ZOO</span>
            <p>
              Jsme brněnská ordinace s tradicí od roku 1992. Zkušenost pro nás neznamená rutinu,
              ale schopnost všímat si detailů a mluvit s vámi otevřeně.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
