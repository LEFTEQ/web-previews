import React from "react";

export default function Page() {
  const trades = [
    {
      idx: "01",
      name: "Žlaby a svody",
      detail:
        "Podokapní žlaby, kotlíky a svody z pozinku, mědi i titanzinku. Spádujeme tak, aby voda odtékala i při ostravských přívalech, a spoje pájíme, ne jen lepíme.",
      material: "pozink · měď · titanzinek",
    },
    {
      idx: "02",
      name: "Oplechování a lemování",
      detail:
        "Atiky, parapety, komíny a prostupy střechou. Přesně ohnuté lemy, které drží spád a nepouští vodu tam, kde se plech potkává se zdivem.",
      material: "atiky · parapety · komíny",
    },
    {
      idx: "03",
      name: "Falcovaná krytina",
      detail:
        "Stojatá drážka na plné bednění pro šikmé i ploché střechy. Falcujeme na míru, bez viditelných šroubů — čistá plocha, která vydrží desítky let.",
      material: "stojatá drážka · plný plech",
    },
    {
      idx: "04",
      name: "Střechy panelových domů",
      detail:
        "Klempířina při revitalizaci sídlišť — nové oplechování atik, výměna svodů a napojení na zateplenou fasádu. Pracujeme za provozu domu.",
      material: "revitalizace · SVJ · bytové domy",
    },
  ];

  const proof = [
    { num: "14", label: "let ohýbáme plech v Ostravě" },
    { num: "600+", label: "dokončených střech a fasád" },
    { num: "99 %", label: "zákazníků nás doporučí dál" },
  ];

  return (
    <main className="sm-page">
      <header className="sm-nav">
        <a className="sm-wordmark" href="#top" aria-label="Střechmont-Stav, klempířství Ostrava">
          <span className="sm-wordmark-main">STŘECHMONT</span>
          <span className="sm-wordmark-sub">— STAV · klempířství Ostrava</span>
        </a>
        <nav className="sm-nav-links" aria-label="Hlavní navigace">
          <a href="#remeslo">Řemeslo</a>
          <a href="#duvera">Reference</a>
          <a className="sm-call" href="tel:+420603874313">Zavolat 603 874 313</a>
        </nav>
      </header>

      <section className="sm-hero" id="top">
        <div className="sm-hero-media">
          <img
            src="/hero.webp"
            alt="Klempíř ohýbá plechový lem na střeše bytového domu v Ostravě"
            className="sm-hero-img"
          />
          <div className="sm-hero-scrim" aria-hidden="true" />
        </div>

        <div className="sm-hero-inner">
          <p className="sm-eyebrow">Klempířství · Pavlovova 3107/38A · Ostrava</p>
          <h1 className="sm-hero-title">
            Plech,<br />
            který drží&nbsp;vodu
            <span className="sm-hero-title-fold">tam, kde ji nechcete.</span>
          </h1>
          <p className="sm-hero-lede">
            Ohýbáme žlaby, svody a lemy na míru vaší střeše. Falcovaná krytina,
            oplechování atik a komínů — poctivá klempířina na panelové, bytové
            i rodinné domy po celé Ostravě a okolí.
          </p>
          <div className="sm-hero-actions">
            <a className="sm-btn" href="tel:+420603874313">Zavolat na střechu</a>
            <a className="sm-btn sm-btn-ghost" href="mailto:strechmontstav@seznam.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="sm-fold-strip" aria-hidden="true">
          <span>ŽLAB</span><span>SVOD</span><span>LEM</span><span>FALC</span><span>ATIKA</span><span>KOMÍN</span><span>ŽLAB</span><span>SVOD</span><span>LEM</span><span>FALC</span>
        </div>
      </section>

      <section className="sm-remeslo" id="remeslo">
        <div className="sm-section-head">
          <p className="sm-eyebrow sm-eyebrow-dark">Co ohneme na míru</p>
          <h2 className="sm-section-title">Šest kroků vody — a náš plech u každého z nich</h2>
          <p className="sm-section-note">
            Dešťová voda putuje od hřebene ke svodu. Na každém spoji, kde se plech
            potkává se zdivem nebo krytinou, rozhoduje řemeslo. Tady je naše.
          </p>
        </div>

        <ol className="sm-trades">
          {trades.map((t) => (
            <li className="sm-trade" key={t.idx}>
              <span className="sm-trade-idx" aria-hidden="true">{t.idx}</span>
              <div className="sm-trade-body">
                <h3 className="sm-trade-name">{t.name}</h3>
                <p className="sm-trade-detail">{t.detail}</p>
                <p className="sm-trade-material">{t.material}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="sm-remeslo-figure">
          <img
            src="/section-1.webp"
            alt="Detail nového falcovaného oplechování a měděného žlabu"
            className="sm-figure-img"
          />
          <figcaption className="sm-figure-cap">
            Stojatá drážka bez viditelných šroubů — spoje falcujeme, aby držely i vítr od Beskyd.
          </figcaption>
        </figure>
      </section>

      <section className="sm-duvera" id="duvera">
        <div className="sm-duvera-grid">
          <figure className="sm-duvera-figure">
            <img
              src="/section-2.webp"
              alt="Zrevitalizovaný bytový dům v Ostravě s novými svody a oplechováním"
              className="sm-figure-img"
            />
          </figure>

          <div className="sm-duvera-text">
            <p className="sm-eyebrow sm-eyebrow-dark">Proč zrovna my</p>
            <h2 className="sm-section-title">
              Ostravská parta, která bere plech vážně od roku 2010
            </h2>
            <p className="sm-section-note">
              Jsme Střechmont-Stav — kluci od klempířiny, kteří tady vyrostli.
              Na sídlištích v Porubě i na rodinných domech v Krásném Poli řešíme
              to samé: aby voda tekla tam, kam má, a fasáda pod ní zůstala suchá.
              Pracujeme za provozu domu, po sobě uklidíme a za spoje ručíme.
            </p>

            <dl className="sm-proof">
              {proof.map((p) => (
                <div className="sm-proof-item" key={p.label}>
                  <dt className="sm-proof-num">{p.num}</dt>
                  <dd className="sm-proof-label">{p.label}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="sm-quote">
              „Přijeli, změřili žlaby a za dva dny byla celá strana domu
              přeoplechovaná. Nikde nezateklo, nic po nich nezůstalo.“
              <cite className="sm-quote-cite">— SVJ, ulice Pavlovova, Ostrava</cite>
            </blockquote>

            <a className="sm-btn" href="tel:+420603874313">Zavolat a domluvit prohlídku</a>
          </div>
        </div>
      </section>
    </main>
  );
}
