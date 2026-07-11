import React from "react";

const drops = [
  {
    n: "01",
    kdo: "HOLKY",
    popis: "Mikiny, kraťasy, kšiltovky a doplňky, které nesplynou s davem na hřišti ani ve městě.",
    znacka: "nová kolekce jaro 2025",
  },
  {
    n: "02",
    kdo: "KLUCI",
    popis: "Střihy, co vydrží skate, longboard i celý den venku. Bavlna, co drží tvar, potisky, co nevyblednou.",
    znacka: "restock trik triček",
  },
  {
    n: "03",
    kdo: "DOPLŇKY",
    popis: "Batohy, ponožky, čepice, placky. Detaily, na kterých stojí celý outfit.",
    znacka: "limitovaná série",
  },
];

const duvera = [
  {
    cislo: "2005",
    label: "Šijeme streetwear z Hradce",
    text: "Značka ATOM RAT vznikla v Hradci Králové a od začátku ji táhne parta, co skutečně jezdí, skáče a nosí, co navrhuje.",
  },
  {
    cislo: "AR TEAM",
    label: "Naši lidé v terénu",
    text: "Jezdci a jezdkyně z AR Teamu testují každý kus dřív, než ho pošleme na e-shop. Když projde jimi, projde i tebou.",
  },
  {
    cislo: "48 h",
    label: "Odesíláme z vlastního skladu",
    text: "Zboží máme fyzicky u nás v Hradci. Objednávku balíme a posíláme obvykle do dvou pracovních dnů.",
  },
];

export default function Page() {
  return (
    <main className="ar">
      <header className="ar-nav">
        <a className="ar-logo" href="#" aria-label="ATOM RAT — domů">
          <span className="ar-logo-atom">ATOM</span>
          <span className="ar-logo-rat">RAT</span>
        </a>
        <nav className="ar-nav-links" aria-label="Hlavní menu">
          <a href="#holky">Holky</a>
          <a href="#kluci">Kluci</a>
          <a href="#doplnky">Doplňky</a>
          <a href="#team">AR Team</a>
        </nav>
        <a className="ar-nav-cta" href="#drops">Do obchodu</a>
      </header>

      <section className="ar-hero">
        <img
          className="ar-hero-img"
          src="/hero.webp"
          alt="Modelka v oblečení ATOM RAT — hradecký streetwear"
        />
        <div className="ar-hero-scrim" aria-hidden="true" />
        <div className="ar-hero-inner">
          <p className="ar-hero-eyebrow">Streetwear z Hradce Králové · od 2005</p>
          <h1 className="ar-hero-title">
            <span className="ar-hero-line">OBLEČ SE</span>
            <span className="ar-hero-line ar-hero-line--mark">DO KRÁLOVSTVÍ</span>
          </h1>
          <p className="ar-hero-sub">
            Mikiny, trika a doplňky, které šijeme, testujeme a nosíme sami. Žádný
            nadnárodní řetězec — jen značka, co ví, jak vypadá ulice ve
            východních Čechách.
          </p>
          <div className="ar-hero-actions">
            <a className="ar-btn ar-btn--solid" href="#drops">Prohlédnout kolekci</a>
            <a className="ar-btn ar-btn--ghost" href="#team">Kdo jsme</a>
          </div>
        </div>
        <div className="ar-ticker" aria-hidden="true">
          <div className="ar-ticker-row">
            <span>NOVÁ KOLEKCE</span><span aria-hidden="true">✦</span>
            <span>ŠITO V ČR</span><span aria-hidden="true">✦</span>
            <span>AR TEAM</span><span aria-hidden="true">✦</span>
            <span>HRADEC KRÁLOVÉ</span><span aria-hidden="true">✦</span>
            <span>NOVÁ KOLEKCE</span><span aria-hidden="true">✦</span>
            <span>ŠITO V ČR</span><span aria-hidden="true">✦</span>
            <span>AR TEAM</span><span aria-hidden="true">✦</span>
            <span>HRADEC KRÁLOVÉ</span><span aria-hidden="true">✦</span>
          </div>
        </div>
      </section>

      <section className="ar-drops" id="drops" aria-labelledby="drops-h">
        <div className="ar-sec-head">
          <h2 className="ar-sec-title" id="drops-h">Co u nás najdeš</h2>
          <p className="ar-sec-lead">
            Tři regály, jedna značka. Vyber si stranu — nebo si vezmi z každé
            trochu.
          </p>
        </div>

        <div className="ar-drop-grid">
          {drops.map((d, i) => (
            <article
              className="ar-drop"
              key={d.n}
              id={i === 0 ? "holky" : i === 1 ? "kluci" : "doplnky"}
            >
              <div className="ar-drop-top">
                <span className="ar-drop-n">{d.n}</span>
                <span className="ar-drop-badge">{d.znacka}</span>
              </div>
              <h3 className="ar-drop-kdo">{d.kdo}</h3>
              <p className="ar-drop-popis">{d.popis}</p>
              <a className="ar-drop-link" href="#drops">
                Vybrat z regálu <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="ar-drops-media">
          <img
            src="/section-1.webp"
            alt="Detail oblečení a potisků z kolekce ATOM RAT"
            className="ar-drops-photo"
          />
          <div className="ar-drops-note">
            <p className="ar-drops-note-k">Dodání do Vánoc</p>
            <p>
              Objednávky balíme z vlastního skladu v Hradci a stíháme je pod
              stromeček. Přesné termíny hlídáme každý rok — u nás nezůstaneš bez
              dárku.
            </p>
          </div>
        </div>
      </section>

      <section className="ar-team" id="team" aria-labelledby="team-h">
        <div className="ar-team-media">
          <img
            src="/section-2.webp"
            alt="Jezdci AR Teamu v oblečení ATOM RAT"
            className="ar-team-photo"
          />
        </div>
        <div className="ar-team-body">
          <p className="ar-hero-eyebrow ar-hero-eyebrow--dark">O nás / AR Team</p>
          <h2 className="ar-sec-title" id="team-h">
            Značka, kterou nosí ti, co ji dělají
          </h2>
          <p className="ar-team-lead">
            ATOM RAT není katalog stažený z Asie. Navrhujeme, testujeme a
            posíláme z Hradce Králové — a stojí za tím lidi, které potkáš na
            skateparku i na akcích, kde se uvidíme.
          </p>

          <dl className="ar-facts">
            {duvera.map((f) => (
              <div className="ar-fact" key={f.cislo}>
                <dt className="ar-fact-num">{f.cislo}</dt>
                <dd className="ar-fact-body">
                  <span className="ar-fact-label">{f.label}</span>
                  <span className="ar-fact-text">{f.text}</span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="ar-team-foot">
            Provozuje ATOM RAT s.r.o., IČ 27541509 · Hradec Králové. Vracení
            zboží do 14 dnů, jasné obchodní podmínky, žádné triky.
          </p>
        </div>
      </section>
    </main>
  );
}
