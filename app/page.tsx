import type { CSSProperties } from "react";

export const metadata = {
  title: "Šurík — fasády a revitalizace panelových domů | Ostrava",
  description:
    "Zateplení fasád, revitalizace panelových a cihlových domů. Ostrava a Moravskoslezský kraj. Pětiletá záruka, dotace vyřídíme za vás.",
};

type Sluzba = {
  cislo: string;
  nazev: string;
  popis: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "01",
    nazev: "Zateplení a revitalizace fasád",
    popis:
      "Kompletní zateplovací systém panelových i cihlových domů — od odizolování a nové omítky po klempířské prvky. Dům, který přestane utíkat teplem.",
  },
  {
    cislo: "02",
    nazev: "Lodžie, balkóny a zábradlí",
    popis:
      "Prefabrikované lodžie, zasklení, nové zábradlí i zámečnická výroba na míru. Vyrábíme ve vlastní dílně, montujeme vlastními lidmi.",
  },
  {
    cislo: "03",
    nazev: "Dotace a projektová dokumentace",
    popis:
      "Energetický audit, průkaz, projekt a vyřízení státních dotací i financování. Papírování necháte na nás, vy podepíšete výsledek.",
  },
  {
    cislo: "04",
    nazev: "Půjčovna lešení",
    popis:
      "Fasádní lešení k zapůjčení pro váš vlastní projekt. Doprava i montáž po Ostravsku podle domluvy.",
  },
];

const reference = [
  { adresa: "Stadická 3, 5, 7", mesto: "Ostrava" },
  { adresa: "Zdenka Vavříka 7–13", mesto: "Ostrava" },
  { adresa: "Varenská 10, 12", mesto: "Ostrava" },
  { adresa: "Podéště 1883", mesto: "Ostrava" },
  { adresa: "Na jízdárně 16", mesto: "Ostrava" },
  { adresa: "Dukelská 12–20", mesto: "Kopřivnice" },
  { adresa: "Palackého 80–84", mesto: "Nový Jičín" },
  { adresa: "Borovského 3–9", mesto: "Karviná" },
  { adresa: "5. května 907–909", mesto: "Frýdlant n. O." },
  { adresa: "Na Aleji 2678, 2679", mesto: "Frýdek-Místek" },
];

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní">
          <a className="wordmark" href="#" aria-label="Šurík — úvod">
            <span className="wordmark__mark" aria-hidden="true">Š</span>
            <span className="wordmark__text">
              ŠURÍK
              <em>fasády · Ostrava</em>
            </span>
          </a>
          <ul className="topnav">
            <li><a href="#sluzby">Služby</a></li>
            <li><a href="#reference">Reference</a></li>
            <li>
              <a className="topnav__phone" href="tel:+420596630651">
                596 630 651
              </a>
            </li>
          </ul>
        </nav>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Od roku 2004 · Moravskoslezský kraj
            </p>
            <h1 id="hero-title" className="hero__title">
              <span className="hero__line hero__line--a">Starý panel</span>
              <span className="hero__line hero__line--b">obalíme</span>
              <span className="hero__line hero__line--c">novou fasádou.</span>
            </h1>
            <p className="hero__lead">
              Zateplení, revitalizace, lodžie a zámečnina — pro panelové
              a cihlové domy po celém Ostravsku. Sto vlastních řemeslníků,
              pětiletá záruka na celé dílo, dotace vyřídíme za vás.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="tel:+420596630651">
                Zavolat na 596 630 651
              </a>
              <a className="btn btn--ghost" href="#sluzby">
                Prohlédnout služby
              </a>
            </div>
            <p className="hero__note">
              Nezávaznou cenovou nabídku vypracujeme zdarma.
            </p>
          </div>

          {/* Signature: řez fasádou — vrstvy zateplovacího systému */}
          <div className="section-cut" aria-hidden="true">
            <div className="section-cut__scale">
              <span>0 mm</span>
              <span>300 mm</span>
            </div>
            <div className="section-cut__layers">
              <div className="layer layer--panel">
                <span className="layer__label">Panel</span>
              </div>
              <div className="layer layer--glue">
                <span className="layer__label">Lepidlo</span>
              </div>
              <div className="layer layer--eps">
                <span className="layer__label">Izolace EPS 160&nbsp;mm</span>
              </div>
              <div className="layer layer--mesh">
                <span className="layer__label">Výztužná síť</span>
              </div>
              <div className="layer layer--render">
                <span className="layer__label">Omítka</span>
              </div>
            </div>
            <p className="section-cut__caption">Řez zateplenou fasádou</p>
          </div>
        </div>
      </header>

      {/* SLUŽBY */}
      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Co pro dům uděláme
          </p>
          <h2 id="sluzby-title">Od projektu po hotovou omítku</h2>
        </div>
        <ol className="sluzby__list">
          {sluzby.map((s) => (
            <li key={s.cislo} className="sluzba">
              <span className="sluzba__num" aria-hidden="true">{s.cislo}</span>
              <div className="sluzba__body">
                <h3 className="sluzba__nazev">{s.nazev}</h3>
                <p className="sluzba__popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* REFERENCE / DŮVĚRA */}
      <section id="reference" className="reference" aria-labelledby="ref-title">
        <div className="reference__intro">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Reference
          </p>
          <h2 id="ref-title">
            Domy, které už mají<br /> novou fasádu
          </h2>
          <p className="reference__text">
            Firma vznikla v roce 2007 transformací živnosti Jozefa Šuríka,
            která začala v roce 2004. Dnes máme přes sto vlastních
            řemeslníků potřebných profesí — proto stavby běží plynule
            a bez subdodavatelských prostojů. Standardně dáváme pětiletou
            záruku na celé dílo.
          </p>
          <div className="stat-row">
            <div className="stat">
              <span className="stat__num">2004</span>
              <span className="stat__label">na fasádách</span>
            </div>
            <div className="stat">
              <span className="stat__num">100+</span>
              <span className="stat__label">řemeslníků</span>
            </div>
            <div className="stat">
              <span className="stat__num">5 let</span>
              <span className="stat__label">záruka na dílo</span>
            </div>
          </div>
        </div>

        <ul className="ref-list" aria-label="Realizované adresy">
          {reference.map((r) => (
            <li key={r.adresa} className="ref-list__item">
              <span className="ref-list__addr">{r.adresa}</span>
              <span className="ref-list__city">{r.mesto}</span>
            </li>
          ))}
          <li className="ref-list__item ref-list__item--more">
            <span className="ref-list__addr">a desítky dalších</span>
            <span className="ref-list__city">MSK</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
