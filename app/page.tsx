import "./globals.css";

const materials = [
  {
    name: "Ratan",
    tag: "pletená liána",
    body: "Ohýbaný a ručně pletený ratan na křesla, pohovky a závěsná lůžka. Vzdušný, pružný, lehký — vydrží roky na terase i v zimní zahradě.",
  },
  {
    name: "Teak",
    tag: "jádrové dřevo",
    body: "Masivní jádrový teak s čepovanými spoji. Zahradní lavice PIETRO 180 patří k nejpevnějším kusům — zesílená konstrukce odolá dešti i mrazu.",
  },
  {
    name: "Suar",
    tag: "monolitická deska",
    body: "Jídelní a konferenční stoly z jednoho kusu suaru. Každá deska nese vlastní kresbu letokruhů — žádné dva stoly nejsou stejné.",
  },
  {
    name: "Rosewood",
    tag: "palisandr",
    body: "Doplňky a solitéry z rosewoodu s hlubokým, teplým tónem. Umělecké kusy na pomezí nábytku a sochy.",
  },
];

const trust = [
  {
    k: "30+ let",
    t: "řemesla od roku 1993",
    d: "Od začátku se specializujeme na ratanový a teakový nábytek a doplňky pro interiér i exteriér.",
  },
  {
    k: "Legální",
    t: "pěstované dřevo",
    d: "Vyrábíme výhradně z legálně pěstovaného dřeva — teak, suar i rosewood s doloženým původem.",
  },
  {
    k: "25 let",
    t: "autorizovaný prodejce Fa KOPA",
    d: "Čtvrt století spolupracujeme jako autorizovaní prodejci firmy Fa KOPA s.r.o.",
  },
  {
    k: "1 : 1",
    t: "přímý kontakt s dílnou",
    d: "Skládáme originální sestavy na míru prostoru — bez prostředníků, přímo se zákazníkem.",
  },
];

export default function Page() {
  return (
    <main className="rs-main">
      <header className="rs-hero">
        <div className="rs-warp" aria-hidden="true" />
        <div className="rs-weft" aria-hidden="true" />
        <div className="rs-hero-inner">
          <nav className="rs-topbar" aria-label="Hlavní">
            <a className="rs-wordmark" href="#top">
              <span className="rs-mark" aria-hidden="true" />
              <span>
                <b>RATTAN</b> STUDIO
              </span>
            </a>
            <ul className="rs-nav">
              <li>
                <a className="rs-link" href="#kolekce">
                  Kolekce
                </a>
              </li>
              <li>
                <a className="rs-link" href="#studio">
                  O studiu
                </a>
              </li>
              <li>
                <a className="rs-link" href="tel:+420602408728">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>

          <div className="rs-hero-body" id="top">
            <p className="rs-eyebrow">
              České Budějovice · od roku 1993
            </p>
            <h1 className="rs-h1">
              Ruční nábytek
              <span>jako umělecký prvek</span>
            </h1>
            <p className="rs-lede">
              Tkáme ratan a opracováváme teak, suar a rosewood do kusů, které
              přežijí generace. Elegance, komfort a trvanlivost — pro interiér,
              zahradu i terasu.
            </p>
            <div className="rs-hero-cta">
              <a className="rs-btn" href="#kolekce">
                Prohlédnout kolekci
              </a>
              <p className="rs-materials-row">
                RATAN <i>·</i> TEAK <i>·</i> SUAR <i>·</i> ROSEWOOD
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="rs-section" id="kolekce" aria-labelledby="kolekce-nadpis">
        <div className="rs-container">
          <div className="rs-section-head">
            <p className="rs-eyebrow rs-eyebrow--dark">Co u nás najdete</p>
            <h2 className="rs-h2" id="kolekce-nadpis">
              Kolekce podle materiálu
            </h2>
            <p className="rs-section-note">
              Každý materiál si žádá jiný postup i jiné použití. Vybíráme podle
              toho, co má kus vydržet a kde bude stát.
            </p>
          </div>

          <ol className="rs-grid">
            {materials.map((m) => (
              <li key={m.name} className="rs-card rs-reveal">
                <div className="rs-card-frame" aria-hidden="true" />
                <div className="rs-card-body">
                  <p className="rs-card-tag">{m.tag}</p>
                  <h3 className="rs-card-name">{m.name}</h3>
                  <p className="rs-card-text">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rs-weave-divider" aria-hidden="true" />

          <p className="rs-extra">
            Vyrábíme také <strong>gastro nábytek</strong> do restaurací a kaváren
            a řadu <strong>Art&nbsp;/ doplňky</strong> — solitéry na pomezí
            nábytku a sochy. Stoly, židle, křesla, lavice i celé soupravy skládáme
            do originálních sestav, které ladí s okolím.
          </p>
        </div>
      </section>

      <section className="rs-section rs-section--sage" id="studio" aria-labelledby="studio-nadpis">
        <div className="rs-container rs-studio">
          <div className="rs-studio-lead">
            <p className="rs-eyebrow">Od roku 1993</p>
            <h2 className="rs-h2" id="studio-nadpis">
              Malé studio, přímý kontakt
            </h2>
            <p className="rs-lede rs-lede--tight">
              Nábytek pečlivě ručně vyrábíme z prvotřídních materiálů a spolu se
              zákazníky skládáme sestavy na míru prostoru. Věříme, že dobrý kus
              není jen praktický — obohacuje místo, kde stojí.
            </p>
            <address className="rs-contact">
              <span>Luboš Novák — jednatel</span>
              <a className="rs-link" href="tel:+420602408728">
                +420 602 408 728
              </a>
              <a className="rs-link" href="mailto:abratanstudio@gmail.com">
                abratanstudio@gmail.com
              </a>
              <span>Resslova 1526/20, 370&nbsp;04 České Budějovice</span>
            </address>
          </div>

          <ul className="rs-trust">
            {trust.map((item) => (
              <li key={item.k} className="rs-trust-item rs-reveal">
                <span className="rs-trust-k">{item.k}</span>
                <div>
                  <p className="rs-trust-t">{item.t}</p>
                  <p className="rs-trust-d">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
