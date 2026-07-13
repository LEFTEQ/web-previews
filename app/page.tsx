export default function Page() {
  const drinks = [
    {
      method: "Z páky",
      title: "Espresso a mléčná klasika",
      text: "Čisté espresso, cappuccino i flat white. Zeptejte se baristy, co je právě na mlýnku.",
    },
    {
      method: "Přes filtr",
      title: "Káva s čitelným původem",
      text: "Batch brew pro rychlé ráno a ručně připravený filtr, když máte čas vnímat každý tón.",
    },
    {
      method: "Bez kofeinu",
      title: "Plná chuť i později odpoledne",
      text: "Bezkofeinovou kávu připravíme stejně pečlivě jako každé jiné espresso.",
    },
  ];

  return (
    <main className="miners-page">
      <section className="miners-hero" aria-labelledby="hero-title">
        <header className="miners-header">
          <a className="miners-wordmark" href="#zacatek" aria-label="The Miners Slavíkova – začátek stránky">
            <span>THE MINERS</span>
            <small>SLAVÍKOVA · PRAHA</small>
          </a>

          <nav className="miners-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Káva</a>
            <a href="#navsteva">Slavíkova</a>
          </nav>
        </header>

        <div className="miners-hero-grid" id="zacatek">
          <div className="miners-hero-copy">
            <p className="miners-kicker">Výběrová kavárna na Vinohradech</p>
            <h1 id="hero-title">
              Slavíkova má svůj
              <span>ranní rituál.</span>
            </h1>
            <p className="miners-lead">
              Zastavte se na espresso z naší pražírny, čistý filtr nebo klidnou snídani. Kávu vám připravíme přesně tak, jak ji máte rádi.
            </p>
            <a className="miners-primary-link" href="#nabidka">
              Co vám připravíme
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="miners-hero-visual">
            <div className="miners-bean-stamp" aria-hidden="true">
              <span>PRAHA</span>
              <strong>VINOHRADY</strong>
            </div>
            <div className="miners-hero-frame">
              <img
                src="/hero.webp"
                alt="Čerstvě připravená výběrová káva v kavárně The Miners Slavíkova"
                width="1400"
                height="1600"
                fetchPriority="high"
              />
            </div>
            <p className="miners-image-note">Od prvního namletí po poslední doušek</p>
          </div>
        </div>
      </section>

      <section className="miners-menu" id="nabidka" aria-labelledby="menu-title">
        <div className="miners-section-heading">
          <p className="miners-kicker">Podle toho, na co máte chuť</p>
          <h2 id="menu-title">Jedno zrno.<br />Několik cest.</h2>
          <p>
            Každá příprava ukáže kávu trochu jinak. Nemusíte znát správné názvy — řekněte nám, jakou chuť hledáte.
          </p>
        </div>

        <div className="miners-menu-layout">
          <div className="miners-menu-image">
            <img
              src="/section-1.webp"
              alt="Barista připravuje kávu za barem kavárny The Miners"
              width="1200"
              height="900"
              loading="lazy"
            />
          </div>

          <div className="miners-drink-list">
            {drinks.map((drink) => (
              <article className="miners-drink" key={drink.method}>
                <p>{drink.method}</p>
                <h3>{drink.title}</h3>
                <span>{drink.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="miners-place" id="navsteva" aria-labelledby="place-title">
        <div className="miners-place-image">
          <img
            src="/section-2.webp"
            alt="Interiér pražské kavárny The Miners ve Slavíkově ulici"
            width="1400"
            height="1100"
            loading="lazy"
          />
          <div className="miners-address-card">
            <span>Najdete nás</span>
            <strong>Slavíkova<br />Praha–Vinohrady</strong>
          </div>
        </div>

        <div className="miners-place-copy">
          <p className="miners-kicker">Kavárna pro všední den</p>
          <h2 id="place-title">Místo mezi cestou a chvílí pro sebe.</h2>
          <p className="miners-place-intro">
            Přijďte na rychlé espresso cestou městem, otevřete notebook u filtru nebo se posaďte s někým, koho jste dlouho neviděli. Slavíkova je náš pražský bod pro dobrou kávu bez zbytečných obřadů.
          </p>

          <dl className="miners-facts">
            <div>
              <dt>U mlýnku</dt>
              <dd>Kávy z vlastní pražírny, které pravidelně obměňujeme podle sklizně.</dd>
            </div>
            <div>
              <dt>Za barem</dt>
              <dd>Baristé, kteří doporučí přípravu podle chuti, ne podle poučky.</dd>
            </div>
            <div>
              <dt>Na stole</dt>
              <dd>Káva připravená pro krátkou zastávku i pomalé vinohradské ráno.</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
