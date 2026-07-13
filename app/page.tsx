export default function Page() {
  const nabídka = [
    {
      název: "Na čepu",
      popis: "Až 38 vín. Vybraná držíme vychlazená, abyste je mohli rovnou ochutnat nebo vzít na večer domů.",
      detail: "Stáčená vína · frizzante · nealko",
    },
    {
      název: "V lahvi",
      popis: "Moravská i zahraniční vína pro běžný stůl, oslavu i dárek. S výběrem poradíme podle chuti, ne podle cenovky.",
      detail: "Tichá vína · bubliny · dárkové lahve",
    },
    {
      název: "K vínu",
      popis: "Holandské sýry, italské uzeniny a drobnosti, které promění otevřenou lahev v hotový večer.",
      detail: "Sýry · uzeniny · pochutiny",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Naše Vinotéka – úvod">
            <span>Naše</span>
            <strong>Vinotéka</strong>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co u nás najdete</a>
            <a href="#zaruka">Proč právě k nám</a>
          </nav>

          <a className="header-call" href="tel:+420730159099">
            Zavolat
          </a>
        </header>

        <div className="hero-layout" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Vinotéka v Olomouci</p>
            <h1 id="hero-title">
              Ochutnejte,
              <span>než odnesete.</span>
            </h1>
            <p className="hero-lead">
              Na čepu, v lahvi i bez alkoholu. Pomůžeme vám vybrat víno,
              které bude sedět příležitosti i vaší chuti.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#nabidka">
                Vybrat si víno
                <span aria-hidden="true">↘</span>
              </a>
              <a className="text-action" href="tel:+420730159099">
                <span>Potřebujete poradit?</span>
                730 159 099
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/hero.webp"
                alt="Nalévání vína ve vinotéce v Olomouci"
              />
            </div>
            <div className="guarantee-seal" aria-label="Víno se zárukou kvality">
              <span>Víno se</span>
              <strong>zárukou</strong>
              <span>Olomouc</span>
            </div>
            <p className="photo-note">Vybraná vína chladíme. Stačí přijít s chutí.</p>
          </div>
        </div>

        <div className="hero-strip" aria-label="Rychlé informace">
          <p><strong>Až 38</strong> vín na čepu</p>
          <p><strong>16</strong> poboček na Moravě</p>
          <p><strong>1 bod</strong> za každých 25 Kč</p>
        </div>
      </section>

      <section className="offer-section" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow">Co si odnesete</p>
          <h2 id="offer-title">Od džbánku na stůl až po lahev k výročí.</h2>
          <p>
            Nemusíte znát odrůdu ani ročník. Řekněte nám, co vám chutná,
            co vaříte nebo koho chcete potěšit.
          </p>
        </div>

        <div className="offer-layout">
          <div className="offer-image-wrap">
            <img
              src="/section-1.webp"
              alt="Výběr lahvových vín a pochutin v Naší Vinotéce"
            />
            <p>Výběr, který začíná rozhovorem.</p>
          </div>

          <div className="offer-list">
            {nabídka.map((položka) => (
              <article className="offer-item" key={položka.název}>
                <h3>{položka.název}</h3>
                <p>{položka.popis}</p>
                <span>{položka.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section" id="zaruka" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Detail podávání a ochutnávky vína v olomoucké vinotéce"
          />
          <div className="bottle-label" aria-hidden="true">
            <span>NV</span>
            <strong>Ověřeno chutí</strong>
            <small>Olomouc</small>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Víno se zárukou</p>
          <h2 id="trust-title">Za tím, co vám načepujeme, si stojíme.</h2>
          <p className="trust-intro">
            Víno vybíráme pro skutečné večery, návštěvy a nedělní obědy —
            ne do vitríny. U vína zakoupeného u nás garantujeme kvalitu a při
            výběru vám řekneme věci tak, jak jsou.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Ochutnání před nákupem</dt>
              <dd>U stáčených vín víte ještě před cestou domů, co si berete.</dd>
            </div>
            <div>
              <dt>Body při každém nákupu</dt>
              <dd>Za každých 25 Kč získáte bod, který proměníte ve slevu na celý nákup.</dd>
            </div>
            <div>
              <dt>Platí napříč Moravou</dt>
              <dd>Věrnostní program využijete ve všech 16 prodejnách Naší Vinotéky.</dd>
            </div>
          </dl>

          <div className="location-note">
            <span>Olomouc — Holice</span>
            <p>Centrála: Sladkovského 656/38 · po–pá 8:00–16:00</p>
          </div>
        </div>
      </section>
    </main>
  );
}
