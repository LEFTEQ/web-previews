export default function Page() {
  const openingHours = [
    ["Po–Pá", "09:00–21:00"],
    ["So–Ne", "09:00–21:00"],
  ];

  const departments = [
    ["Příběhy", "Romány, thrillery, fantasy i čtení pro nejmenší."],
    ["Pro volný čas", "Deskové hry, hračky a dárky, které nebudete chtít schovat do šuplíku."],
    ["Papírnictví", "Zápisníky, diáře a potřeby do školy i kanceláře."],
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Knihy Dobrovský Liberec – úvod">
            <span className="wordmark-mark" aria-hidden="true">D</span>
            <span>Knihy <strong>Dobrovský</strong></span>
          </a>
          <nav aria-label="Navigace stránky">
            <a href="#vyber">Co u nás najdete</a>
            <a href="#cesta">Cesta a otevírací doba</a>
          </nav>
        </header>

        <div className="hero-image" id="top">
          <img
            src="/hero.webp"
            alt="Interiér knihkupectví Knihy Dobrovský v OC Nisa v Liberci s regály plnými knih"
          />
          <div className="shelf-tabs" aria-hidden="true">
            <span>ROMÁNY</span>
            <span>DĚTI</span>
            <span>HRY</span>
          </div>
        </div>

        <div className="hero-copy">
          <p className="location-line"><span>Liberec</span> OC Nisa</p>
          <h1 id="hero-title">Příběhy<br />pod Ještědem.</h1>
          <div className="hero-details">
            <p>
              Zastavte se pro další kapitolu, hru na víkend nebo dárek na poslední chvíli.
              Jsme v OC Nisa, každý den až do devíti.
            </p>
            <div className="hero-action">
              <a className="primary-link" href="#cesta">Naplánovat cestu <span aria-hidden="true">↘</span></a>
              <span>České mládeže 456</span>
            </div>
          </div>
        </div>

        <aside className="open-card" aria-label="Dnešní otevírací doba">
          <span className="open-dot" aria-hidden="true"></span>
          <p>Otevřeno denně</p>
          <strong>09—21</strong>
        </aside>
      </section>

      <section className="selection" id="vyber" aria-labelledby="selection-title">
        <div className="section-heading">
          <p className="eyebrow">Mezi regály v Liberci</p>
          <h2 id="selection-title">Přijďte bez seznamu.<br />Odejděte s objevem.</h2>
          <p className="section-intro">
            Knihkupci vám pomohou najít čtení podle nálady, věku i poslední oblíbené knihy.
            Vedle novinek držíme prostor také hrám, papírnictví a malým radostem.
          </p>
        </div>

        <div className="selection-layout">
          <figure className="image-frame image-frame-large">
            <img
              src="/section-1.webp"
              alt="Výběr knih vystavených v liberecké prodejně Knihy Dobrovský"
              loading="lazy"
            />
            <figcaption>Výběr, který si můžete vzít rovnou do ruky.</figcaption>
          </figure>

          <div className="departments">
            {departments.map(([title, description]) => (
              <article className="department" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
            <p className="staff-note">
              <span aria-hidden="true">„</span>
              Řekněte nám, co vás naposledy nepustilo spát. Navážeme správným titulem.
            </p>
          </div>
        </div>
      </section>

      <section className="visit" id="cesta" aria-labelledby="visit-title">
        <div className="visit-visual">
          <img
            src="/section-2.webp"
            alt="Příjemný prostor knihkupectví Knihy Dobrovský v obchodním centru Nisa"
            loading="lazy"
          />
          <div className="book-spine" aria-hidden="true">
            <span>LIBEREC</span>
            <strong>OC NISA</strong>
          </div>
        </div>

        <div className="visit-content">
          <p className="eyebrow">Vaše knihkupectví v OC Nisa</p>
          <h2 id="visit-title">Kousek od města.<br />Blízko dalšího příběhu.</h2>

          <div className="address-block">
            <p>České mládeže 456<br />460 00 Liberec</p>
            <a href="https://www.openstreetmap.org/search?query=%C4%8Cesk%C3%A9%20ml%C3%A1de%C5%BEe%20456%20Liberec">Otevřít mapu <span aria-hidden="true">↗</span></a>
          </div>

          <div className="hours" aria-label="Otevírací doba">
            {openingHours.map(([days, time]) => (
              <div className="hours-row" key={days}>
                <span>{days}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>

          <div className="directions">
            <article>
              <h3>Zdarma autobusem</h3>
              <p>Linka 500 odjíždí z terminálu Fügnerova, stanoviště č. 4, přímo do přízemí OC Nisa.</p>
            </article>
            <article>
              <h3>Pohodlně autem</h3>
              <p>Z R35 sledujte sjezd Ještěd – nákupní zóna Doubí 1. U centra pohodlně zaparkujete.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
