import { AiImage } from "./_ui";

const nabidka = [
  {
    tag: "Dámská",
    title: "Dámská móda",
    text: "Kolekce na každý den i do společnosti — šaty, sukně, kabáty. Vybíráme značky, které vydrží víc než jednu sezónu.",
    accent: "scarlet",
  },
  {
    tag: "Pánská",
    title: "Pánská móda",
    text: "Obleky, saka a košile, které sedí v ramenou. Poradíme s barvou i střihem, ať to není náhoda.",
    accent: "blue",
  },
  {
    tag: "Ateliér",
    title: "Úpravy a šití na míru",
    text: "Zkrácení nohavic, úprava střihu, sako na tělo. Zkoušky u nás v ateliéru, hotovo většinou do týdne.",
    accent: "scarlet",
  },
  {
    tag: "Látky",
    title: "Látky a metráž",
    text: "Bavlny, vlny, lny a podšívky z evropských tkalcoven. Odstřihneme přesně tolik, kolik potřebujete.",
    accent: "gold",
  },
];

const reference = [
  {
    quote: "Sako mi po letech konečně sedí v ramenou. Zkoušeli jsme dvě úpravy a stálo to za to.",
    who: "Petr H., České Budějovice",
  },
  {
    quote: "Svatební šaty na míru za necelý měsíc a ani jeden nervák. Paní krejčová ví přesně, co dělá.",
    who: "Klára M., Hluboká nad Vltavou",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="C a A Moda, módní dům a ateliér">
          C <span className="amp">&amp;</span> A <em>Moda</em>
        </a>
        <nav className="topnav" aria-label="Kategorie">
          <a href="#nabidka">Dámská</a>
          <a href="#nabidka">Pánská</a>
          <a href="#nabidka">Ateliér</a>
          <a href="#o-nas">Látky</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker stitched">Módní dům &amp; krejčovský ateliér — České Budějovice</p>
          <h1 className="hero-title">
            Móda ušitá <em>přesně</em> na vás.
          </h1>
          <p className="hero-lede">
            Přes pětadvacet let oblékáme Budějovičany — od kvalitní konfekce a látek po úpravy a šití
            na míru. Přijďte si pro kousek, který padne a zůstane.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#nabidka">Prohlédnout, co šijeme</a>
            <a className="btn btn-ghost" href="#o-nas">Kde nás najdete</a>
          </div>
        </div>

        <figure className="hero-media">
          <AiImage src="/hero.webp" alt="Ateliér módního domu C a A Moda — látky, střihy a hotové kousky" className="hero-img" />
          <figcaption className="media-tag">Náměstí v centru · zkoušky bez objednání</figcaption>
        </figure>

        <div className="hero-seam" aria-hidden="true" />
      </section>

      <section className="section split" id="nabidka">
        <div className="section-head">
          <p className="kicker stitched">Nabídka</p>
          <h2 className="section-title">Co u nás pořídíte</h2>
          <div className="tapeline" aria-hidden="true">
            <span className="tag tag-scarlet">MÓDA</span>
            <span className="tag tag-blue">NA MÍRU</span>
            <span className="tag tag-gold">LÁTKY</span>
          </div>
        </div>

        <div className="offer-grid">
          <figure className="offer-media">
            <AiImage src="/section-1.webp" alt="Vybrané kousky a doplňky z nabídky C a A Moda" className="offer-img" />
          </figure>
          <ol className="offer-list">
            {nabidka.map((o) => (
              <li className="offer" key={o.title}>
                <span className={`offer-tag tag-${o.accent}`}>{o.tag}</span>
                <h3 className="offer-title">{o.title}</h3>
                <p className="offer-text">{o.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section split reverse" id="o-nas">
        <div className="about-copy">
          <p className="kicker stitched">O ateliéru</p>
          <h2 className="section-title">Rodinný ateliér v centru Budějovic</h2>
          <p className="about-lede">
            Šijeme a prodáváme od roku 1998. Střihač, dvě krejčové a jeden metr — to je celé
            tajemství. Přijdete, změříme, ušijeme. Žádné objednávkové systémy, žádné čekání týdny.
            Najdete nás v Ukázková 123, České Budějovice.
          </p>
          <ul className="about-facts">
            <li><strong>Zkoušky</strong> bez objednání, každý všední den</li>
            <li><strong>Úpravy</strong> zpravidla hotové do týdne</li>
            <li><strong>Látky</strong> z evropských tkalcoven, odstřih na míru</li>
          </ul>

          <div className="quotes">
            {reference.map((r) => (
              <blockquote className="quote" key={r.who}>
                <p>„{r.quote}“</p>
                <cite>{r.who}</cite>
              </blockquote>
            ))}
          </div>
        </div>

        <figure className="about-media">
          <AiImage src="/section-2.webp" alt="Krejčovský ateliér C a A Moda — práce s látkou a střihem" className="about-img" />
          <figcaption className="media-tag media-tag-blue">Ukázková 123 · České Budějovice</figcaption>
        </figure>
      </section>
    </main>
  );
}
