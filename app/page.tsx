const distributorBrands = [
  "ARTIS",
  "BOTAS",
  "GALA",
  "GUMOTEX",
  "LION",
  "POKORNÝ SÍTĚ",
  "VHV-OPUS",
  "SKIVO",
  "SPORTEN",
  "YEDOO",
];

const otherBrands = [
  "ADIDAS",
  "CAMPINGAZ",
  "COLEMAN",
  "DONIC",
  "DUNLOP",
  "FISCHER",
  "HEAD",
  "HARROWS",
  "INTEX",
  "LOAP",
  "MOLTEN",
  "MERCO",
  "WILSON",
];

const categories = [
  {
    name: "Týmové sporty",
    detail: "Míče, sítě a vybavení pro školy, kluby i sportovní prodejny.",
    code: "HŘIŠTĚ",
  },
  {
    name: "Zima a servis",
    detail: "Lyže, zimní sortiment a finské lyžařské vosky VAUHTI.",
    code: "STOPA",
  },
  {
    name: "Outdoor a volný čas",
    detail: "Kemping, nafukovací program, koloběžky a vybavení na cesty.",
    code: "VENKU",
  },
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Sportovní vybavení z velkoobchodní nabídky LERKO SPORT"
        />
        <div className="hero__shade" aria-hidden="true" />
        <div className="court-lines" aria-hidden="true">
          <span className="court-lines__circle" />
        </div>

        <header className="topbar">
          <a className="wordmark" href="#hlavni-obsah" aria-label="LERKO SPORT – na hlavní obsah">
            <span className="wordmark__lerko">LERKO</span>
            <span className="wordmark__sport">SPORT</span>
          </a>
          <nav className="topnav" aria-label="Hlavní navigace">
            <a href="#sortiment">Sortiment</a>
            <a href="#spoluprace">Pro prodejce</a>
          </nav>
          <a className="topbar__login" href="#objednavky">
            Objednávkový systém
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero__content" id="hlavni-obsah">
          <p className="eyebrow">Sportovní velkoobchod · Praha</p>
          <h1 id="hero-title">
            Vybavení, které
            <span>jde rovnou do hry.</span>
          </h1>
          <p className="hero__lead">
            České sportovní značky i prověřený světový sortiment pro prodejny,
            kluby a další registrované odběratele.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#objednavky">
              Přihlásit se a objednat
              <span aria-hidden="true">→</span>
            </a>
            <a className="button button--ghost" href="#sortiment">
              Prohlédnout nabídku
            </a>
          </div>
        </div>

        <div className="hero__status" aria-label="Aktuální informace">
          <span className="status-dot" aria-hidden="true" />
          <div>
            <strong>Velkoobchodní nabídka</strong>
            <time dateTime="2026-07-14">Aktualizováno 14. 7. 2026</time>
          </div>
        </div>
      </section>

      <section className="assortment section" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section__intro">
          <p className="eyebrow eyebrow--blue">Co u nás objednáte</p>
          <h2 id="sortiment-title">Od tělocvičny až po běžkařskou stopu.</h2>
          <p>
            Jedna velkoobchodní nabídka pro sezonní i celoroční sport. Pomůžeme vám
            poskládat sortiment podle toho, co vaši zákazníci skutečně hledají.
          </p>
        </div>

        <div className="assortment__visual">
          <img
            src="/section-1.webp"
            alt="Výběr míčů, raket a dalšího sportovního vybavení"
          />
          <span className="image-stamp">SKLADEM / NA HŘIŠTĚ</span>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <article className="category" key={category.name}>
              <span className="category__code">{category.code}</span>
              <div>
                <h3>{category.name}</h3>
                <p>{category.detail}</p>
              </div>
              <span className="category__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>

        <div className="brands" aria-label="Zastupované značky">
          <div className="brands__heading">
            <span>České značky, které distribuujeme</span>
            <strong>{distributorBrands.length} značek</strong>
          </div>
          <div className="brand-grid">
            {distributorBrands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
          <p className="brands__more">
            V nabídce dále: {otherBrands.join(" · ")} a další.
          </p>
        </div>
      </section>

      <section className="partnership section" id="spoluprace" aria-labelledby="spoluprace-title">
        <div className="partnership__image-wrap">
          <img
            src="/section-2.webp"
            alt="Příprava sportovního zboží pro velkoobchodní expedici"
          />
          <div className="vauhti-card">
            <span>Výhradní specialita nabídky</span>
            <strong>VAUHTI</strong>
            <p>Finské vosky pro rychlou a spolehlivou stopu.</p>
          </div>
        </div>

        <div className="partnership__content">
          <p className="eyebrow eyebrow--orange">Pro registrované odběratele</p>
          <h2 id="spoluprace-title">Objednávka bez obíhání dodavatelů.</h2>
          <p className="partnership__lead">
            Po přihlášení využijete online objednávkový systém určený pro pravidelné
            dodávky zboží. Sortiment několika sportů vyřešíte na jednom místě.
          </p>

          <div className="benefits">
            <article>
              <span aria-hidden="true">01</span>
              <div>
                <h3>Registrace odběratele</h3>
                <p>Nejprve si projdete obchodní podmínky a založíte firemní přístup.</p>
              </div>
            </article>
            <article>
              <span aria-hidden="true">02</span>
              <div>
                <h3>Výběr v systému</h3>
                <p>Po přihlášení skládáte objednávku z dostupného velkoobchodního sortimentu.</p>
              </div>
            </article>
            <article>
              <span aria-hidden="true">03</span>
              <div>
                <h3>Dodávka pro váš provoz</h3>
                <p>Zboží míří do prodejny, klubu nebo organizace podle domluvených podmínek.</p>
              </div>
            </article>
          </div>

          <div className="partnership__actions" id="objednavky">
            <a className="button button--dark" href="#objednavky">
              Vstoupit do objednávek
              <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#spoluprace">
              Přečíst obchodní podmínky
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
