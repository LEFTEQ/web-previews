import { HeroFigure } from "./motion";

const STATS = [
  { value: 12, label: "let na trhu", note: "od roku 2012" },
  { value: 500, label: "zpracovaných přiznání", note: "DPPO · DPFO · DPH" },
  { value: 2500, label: "zpracovaných mezd", note: "měsíčně i ročně" },
  { value: 5933, label: "šálků kávy", note: "a stále počítáme" },
];

const SERVICES = [
  {
    idx: "01",
    title: "Účetní služby na klíč",
    desc: "Komplexní vedení účetnictví i daňové evidence pro malé a střední firmy. Každý doklad zaúčtujeme podle vaší situace, ne podle šablony.",
  },
  {
    idx: "02",
    title: "Daňové poradenství",
    desc: "Daňová přiznání s důrazem na legální optimalizaci. Řekneme dopředu, kolik zaplatíte — a kde ještě lze ušetřit.",
  },
  {
    idx: "03",
    title: "Zpracování mezd a personalistika",
    desc: "Mzdové účetnictví, výplaty, odvody a kompletní personální agenda. Termíny hlídáme za vás.",
  },
  {
    idx: "04",
    title: "Správa a vymáhání pohledávek",
    desc: "Mějte za svou práci zaplaceno. Sledujeme splatnosti a upomínáme za vás, abyste se nemuseli zdržovat vy.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top">
          AVISTA<span className="wordmark-suffix">s.r.o.</span>
        </a>
        <span className="masthead-meta">Daňový poradce · České Budějovice</span>
      </header>

      <section className="section hero" id="top" aria-labelledby="hero-title">
        <div className="ledger" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Daňová kancelář · účetnictví · mzdy</p>
          <h1 className="hero-title" id="hero-title">
            Sečteno,<br />
            <span className="hero-title-rule">podtrženo.</span>
          </h1>
          <p className="hero-lead">
            Účetnictví, daně a mzdy pro živnostníky a firmy v Českých
            Budějovicích. Přesně, včas a bez nepříjemných překvapení na konci
            roku. Získaný čas věnujte tomu, co vás baví — čísla nechte nám.
          </p>
          <a className="hero-link" href="#sluzby">
            Prohlédnout služby
            <span aria-hidden="true"> ↓</span>
          </a>

          <div className="stats" role="list" aria-label="Naše čísla">
            {STATS.map((s, i) => (
              <div className="stat" role="listitem" key={s.label}>
                <span className="stat-note">{s.note}</span>
                <span className="stat-num">
                  <HeroFigure value={s.value} index={i} />
                  <span className="stat-plus">+</span>
                </span>
                <span className="stat-rule" aria-hidden="true" />
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services" id="sluzby" aria-labelledby="svc-title">
        <div className="col-head">
          <p className="eyebrow">Rozvaha služeb · položky 01—04</p>
          <h2 className="rule-heading" id="svc-title">
            Co pro vás vedeme
          </h2>
        </div>

        <ol className="svc-list">
          {SERVICES.map((svc) => (
            <li className="svc-row" key={svc.idx}>
              <span className="svc-idx">{svc.idx}</span>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section about" id="o-nas" aria-labelledby="about-title">
        <div className="col-head">
          <p className="eyebrow">O kanceláři · Piaristická 22/8</p>
          <h2 className="rule-heading" id="about-title">
            Seznamte se s námi
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Zásadní know-how AVISTA s.r.o. je individuální přístup ke klientovi.
              Odráží se v tom, jak zpracováváme doklady i jak nakonec
              optimalizujeme daně — vždycky podle vaší konkrétní situace.
            </p>
            <p>
              Za dvanáct let jsme vedli účetnictví výrobcům, řemeslníkům i
              službám z jižních Čech. Umíme převzít rozdělané účetnictví, srovnat
              ho a vést dál — bez toho, abyste museli cokoli vysvětlovat dvakrát.
            </p>

            <blockquote className="quote">
              <p>
                „Firmu AVISTA jsme oslovili kvůli rekonstrukci účetnictví za celé
                účetní období. Přeúčtování úspěšně proběhlo a spolupráce k naší
                spokojenosti trvá už pátým rokem.“
              </p>
              <footer className="quote-author">
                Ing. Zdeněk Kašparů — jednatel, QUATRO-K spol. s r.o.
              </footer>
            </blockquote>
          </div>

          <aside className="boutique" aria-labelledby="boutique-title">
            <p className="boutique-lead" id="boutique-title">
              Garantujeme kvalitu tím, že do portfolia bereme jen omezený počet
              klientů. Na každého tak máme dost času.
            </p>
            <div
              className="stamp"
              role="img"
              aria-label="Razítko: přijímáme omezený počet klientů"
            >
              <span className="stamp-top">AVISTA · Č. Budějovice</span>
              <span className="stamp-main">Omezený počet klientů</span>
              <span className="stamp-bottom">Přijímáme · 2024</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
