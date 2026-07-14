export default function Page() {
  const categories = [
    {
      label: "Stavět a objevovat",
      copy: "Stavebnice, autodráhy, hlavolamy a pokusy pro děti, které chtějí vědět, jak věci fungují.",
      age: "od 4 let",
      tone: "blue",
    },
    {
      label: "Vyrábět a vymýšlet",
      copy: "Modelína, barvy, korálky, puzzle a kreativní sady pro dlouhá odpoledne bez obrazovky.",
      age: "od 3 let",
      tone: "pink",
    },
    {
      label: "Vyrazit ven",
      copy: "Míče, odrážedla, bublifuky a hry, které promění zahradu i ostravský park v hřiště.",
      age: "pro celou rodinu",
      tone: "orange",
    },
  ];

  return (
    <main className="oam-site">
      <section className="oam-hero" aria-labelledby="hero-title">
        <header className="oam-header">
          <a className="oam-wordmark" href="#top" aria-label="OAM Hračky – úvod">
            <span>OAM</span>
            <strong>hračky</strong>
          </a>

          <nav className="oam-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co u nás najdete</a>
            <a href="#navsteva">Než vyrazíte</a>
          </nav>

          <div className="oam-languages" aria-label="Jazyk webu">
            <strong>CZ</strong>
            <span>EN</span>
            <span>PL</span>
          </div>
        </header>

        <div className="oam-hero-grid" id="top">
          <div className="oam-hero-copy">
            <p className="oam-kicker">Hračkářství · Outlet Arena Moravia · Ostrava</p>
            <h1 id="hero-title">
              <span className="oam-toy-word" aria-label="Hračky">
                <span className="oam-letter oam-letter-h">H</span>
                <span className="oam-letter oam-letter-r">R</span>
                <span className="oam-letter oam-letter-a">A</span>
                <span className="oam-letter oam-letter-c">Č</span>
                <span className="oam-letter oam-letter-k">K</span>
                <span className="oam-letter oam-letter-y">Y</span>
              </span>
              <span className="oam-title-tail">které nezůstanou v krabici.</span>
            </h1>
            <p className="oam-lead">
              Hledáte dárek, který opravdu trefí věk i zájmy? V ostravské Outlet Areně vybíráme hračky pro malé stavitele, výtvarníky i neposedné dobrodruhy.
            </p>
            <div className="oam-actions">
              <a className="oam-button oam-button-primary" href="#nabidka">
                Vybrat podle zájmu
              </a>
              <a className="oam-button oam-button-secondary" href="#navsteva">
                Kdy máme otevřeno
              </a>
            </div>
          </div>

          <figure className="oam-hero-visual">
            <img
              src="/hero.webp"
              alt="Barevné hračky vystavené v hračkářství Outlet Arena Moravia v Ostravě"
              width="1600"
              height="1200"
              fetchPriority="high"
            />
            <figcaption>
              <span>Tip z regálu</span>
              Dárek vybírejte podle toho, co dítě rádo dělá — ne jen podle čísla na krabici.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="oam-offer" id="nabidka" aria-labelledby="offer-title">
        <div className="oam-section-heading">
          <p className="oam-kicker">Co najdete v regálech</p>
          <h2 id="offer-title">Od prvního puzzle po stavebnici, u které zůstane i táta.</h2>
          <p>
            Nabídku skládáme tak, abyste rychle našli smysluplný dárek pro školku, narozeniny i obyčejné deštivé úterý.
          </p>
        </div>

        <div className="oam-offer-layout">
          <div className="oam-category-list">
            {categories.map((category) => (
              <article className={`oam-category oam-category-${category.tone}`} key={category.label}>
                <span className="oam-category-dot" aria-hidden="true" />
                <div>
                  <h3>{category.label}</h3>
                  <p>{category.copy}</p>
                </div>
                <span className="oam-age">{category.age}</span>
              </article>
            ))}
          </div>

          <figure className="oam-offer-image">
            <img
              src="/section-1.webp"
              alt="Výběr stavebnic, tvořivých sad a dětských her v ostravském hračkářství"
              width="1400"
              height="1100"
              loading="lazy"
            />
            <figcaption>Hračky si můžete před nákupem prohlédnout zblízka a poradit se s výběrem.</figcaption>
          </figure>
        </div>
      </section>

      <section className="oam-visit" id="navsteva" aria-labelledby="visit-title">
        <div className="oam-visit-image">
          <img
            src="/section-2.webp"
            alt="Rodinný nákup hraček v Outlet Arena Moravia v Ostravě"
            width="1400"
            height="1200"
            loading="lazy"
          />
          <div className="oam-location-stamp" aria-hidden="true">
            <span>OSTRAVA</span>
            <strong>severní Morava</strong>
          </div>
        </div>

        <div className="oam-visit-copy">
          <p className="oam-kicker">Návštěva bez překvapení</p>
          <h2 id="visit-title">Dárek vyberete. Parkování řešit nemusíte.</h2>
          <p className="oam-visit-intro">
            Najdete nás přímo v Outlet Arena Moravia. Přijedete autem, pohodlně zaparkujete zdarma a nákup hraček spojíte s dalšími obchody v centru.
          </p>

          <dl className="oam-facts">
            <div>
              <dt>Hračkářství</dt>
              <dd>denně 9:00–20:00</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Outlet Arena Moravia, Ostrava</dd>
            </div>
            <div>
              <dt>Příjezd autem</dt>
              <dd>parkování u centra zdarma</dd>
            </div>
          </dl>

          <aside className="oam-note">
            <strong>Jedete pro konkrétní hračku?</strong>
            <p>Outletová nabídka se průběžně mění. Dostupnost konkrétního výrobku si proto ověřte přímo na prodejně.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
