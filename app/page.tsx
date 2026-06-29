import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petra Rabasová — úklid kanceláří a domů v Pardubicích",
  description:
    "Pravidelný i jednorázový úklid kanceláří, ordinací a bytových domů v Pardubicích a okolí. Pečlivá práce bez šmouh, individuální přístup, přes 20 let praxe.",
  openGraph: {
    title: "Petra Rabasová — úklidové služby Pardubice",
    description:
      "Pravidelný i jednorázový úklid kanceláří, ordinací a bytových domů. Bez šmouh, bez starostí, na čas.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    nazev: "Úklid kanceláří a firemních prostor",
    text: "Pravidelný úklid kanceláří, budov a provozů podle vašeho rozvrhu. Pracoviště, které ráno působí upraveně a profesionálně.",
    rezim: "pravidelně",
  },
  {
    nazev: "Společné prostory bytových domů",
    text: "Vchody, schodiště a chodby udržené pro obyvatele i návštěvy. Dům, do kterého se vrací domů příjemně.",
    rezim: "pravidelně",
  },
  {
    nazev: "Budovy a ordinace",
    text: "Prostory, kde se hlídá hygiena a pečlivost. Úklid přizpůsobíme charakteru provozu i frekvenci návštěv.",
    rezim: "pravidelně",
  },
  {
    nazev: "Mytí oken a prosklených ploch",
    text: "Okna a skleněné stěny bez jediné šmouhy. Samostatně, nebo jako součást běžného úklidu.",
    rezim: "na objednávku",
  },
  {
    nazev: "Čištění koberců a čalounění",
    text: "Hloubkové čištění koberců a čalouněného nábytku. Interiér, který je čistý na pohled i hygienicky příjemný.",
    rezim: "na objednávku",
  },
  {
    nazev: "Jednorázové a sezónní úklidy",
    text: "Před svátky, po rekonstrukci nebo po akci. Důkladně vyčistíme a připravíme prostor k dalšímu použití.",
    rezim: "jednorázově",
  },
  {
    nazev: "Doplňování hygienických potřeb",
    text: "Mýdlo, papír i ostatní zázemí doplňujeme podle skutečné spotřeby. O nic se nemusíte starat.",
    rezim: "na objednávku",
  },
];

const reference = [
  {
    klient: "MeDiLa Pardubice",
    detail:
      "Odběrové a laboratorní centrum, pobočky v Chrudimi a Hradci Králové. Pravidelný denní úklid.",
  },
  {
    klient: "AC Vinice Pardubice",
    detail: "Pravidelný denní úklid společných prostor.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Petra Rabasová, úklidové služby">
          <span className="wordmark__name">Rabasová</span>
          <span className="wordmark__sub">úklid · Pardubice</span>
        </a>
        <a className="topbar__phone" href="tel:+420774802393">
          +420 774 802 393
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Čerstvě umytá prosklená stěna kanceláře s odrazem světla"
            className="hero__img"
          />
          <span className="hero__swipe" aria-hidden="true" />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Pardubice a okolí · od roku 2003</p>
          <h1 id="hero-title" className="hero__title">
            Necháte po nás <em>čistou stopu</em>, ne šmouhu.
          </h1>
          <p className="hero__lead">
            Pravidelný i jednorázový úklid kanceláří, ordinací a bytových
            domů. Přizpůsobíme se vašemu provozu — uklízíme i o víkendech.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#sluzby">
              Prohlédnout služby
            </a>
            <a className="btn btn--ghost" href="tel:+420774802393">
              Zavolat Petře
            </a>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">Co pro vás uklidíme</p>
          <h2 id="services-title" className="section-title">
            Sedm věcí, díky kterým se nemusíte starat
          </h2>
        </div>
        <ul className="services__list">
          {sluzby.map((s) => (
            <li className="service" key={s.nazev}>
              <span className={`tag tag--${s.rezim.replace(/\s|á/g, "")}`}>
                {s.rezim}
              </span>
              <h3 className="service__name">{s.nazev}</h3>
              <p className="service__text">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" id="reference" aria-labelledby="trust-title">
        <div className="trust__media">
          <img
            src="/section-1.webp"
            alt="Úklidový vozík a profesionální pomůcky připravené k práci"
            className="trust__img"
          />
        </div>
        <div className="trust__body">
          <p className="eyebrow">O nás &amp; reference</p>
          <h2 id="trust-title" className="section-title">
            Přes dvacet let stejná jistota — práce odvedená pečlivě
          </h2>
          <p className="trust__text">
            Petra Veverková Rabasová uklízí v Pardubicích a okolí už od roku
            2003. Za tu dobu jsme se postarali o kanceláře, administrativní
            budovy, ordinace i bytové domy. Zakládáme si na spolehlivosti a
            individuálním přístupu a používáme prostředky, které jsou účinné a
            zároveň šetrné k vašemu vybavení.
          </p>

          <div className="stats">
            <div className="stat">
              <span className="stat__num">23 let</span>
              <span className="stat__label">praxe v úklidu</span>
            </div>
            <div className="stat">
              <span className="stat__num">126+</span>
              <span className="stat__label">spokojených klientů</span>
            </div>
            <div className="stat">
              <span className="stat__num">5,0</span>
              <span className="stat__label">hodnocení zákazníků</span>
            </div>
          </div>

          <div className="refs">
            <p className="refs__head">Kdo s námi spolupracuje</p>
            {reference.map((r) => (
              <div className="ref" key={r.klient}>
                <span className="ref__name">{r.klient}</span>
                <span className="ref__detail">{r.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
