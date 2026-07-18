import { RingCounter } from "./motion";

const services = [
  {
    name: "Tahové zkoušky",
    obj: "stromů",
    text: "Přístrojově změříme, kolik strom unese ve vichřici — bez poškození kmene. Dozvíte se, jestli je bezpečný, nebo potřebuje zásah, dřív než spadne.",
  },
  {
    name: "Dendrologické posudky",
    obj: "",
    text: "Posoudíme zdravotní stav, provozní bezpečnost i perspektivu růstu a dáme vám jasný písemný podklad — třeba pro úřad, souseda nebo pojišťovnu.",
  },
  {
    name: "Řez",
    obj: "stromů",
    text: "Zdravotní, bezpečnostní i zapěstování mladých stromů podle arboristických standardů. Strom po nás roste dál, ne sám proti sobě.",
  },
  {
    name: "Bezpečnostní vazby",
    obj: "stromů",
    text: "Do koruny instalujeme dynamické vazby, které podrží rozlomené kosterní větve a sníží riziko pádu — a strom přitom nechají dýchat.",
  },
  {
    name: "Rizikové kácení",
    obj: "stromů",
    text: "Postupné kácení po částech na laně tam, kam se technika nedostane — nad střechou, nad plotem i v úzké pražské zahradě.",
  },
];

const certs = [
  "European Tree Worker",
  "Český certifikovaný arborista – stromolezec",
  "Český certifikovaný arborista – konzultant",
  "Samostatný technik arborista",
];

function RingMark() {
  return (
    <svg className="ringmark" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="17" />
      <circle cx="20" cy="20" r="12" />
      <circle cx="20" cy="20" r="7" />
      <circle cx="20" cy="20" r="2.5" className="pith" />
    </svg>
  );
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="xMaxYMid meet">
        <g>
          <circle cx="1150" cy="60" r="32" pathLength={100} />
          <circle cx="1150" cy="60" r="64" pathLength={100} />
          <circle cx="1150" cy="60" r="104" pathLength={100} />
          <circle cx="1150" cy="60" r="156" pathLength={100} />
          <circle cx="1150" cy="60" r="220" pathLength={100} />
        </g>
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#" aria-label="Stromoborci, úvod">
          <span className="wordmark-ring" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="13" />
              <circle cx="16" cy="16" r="9" />
              <circle cx="16" cy="16" r="5" />
              <circle cx="16" cy="16" r="1.6" className="pith" />
            </svg>
          </span>
          <span className="wordmark-text">
            Stromoborci<sup>®</sup>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="wrap hero-grid">
          <div className="hero-lead">
            <p className="eyebrow">Arboristika — Praha a Středočeský kraj</p>
            <h1 id="hero-h" className="hero-title">
              <span>Stromy</span> <span>čteme.</span>
              <span className="hero-title-2">Když je čas,</span>
              <span className="hero-title-3">složíme je bezpečně.</span>
            </h1>
            <p className="hero-body">
              Certifikovaní arboristé z Prahy. Patnáct let lezeme do korun,
              měříme, řežeme i kácíme — vždycky tak, aby strom i vaše okolí
              zůstaly v bezpečí. Vaše stromy si rádi vezmeme na starost.
            </p>
            <ul className="hero-badges">
              <li>Certifikovaní profesionálové</li>
              <li>Pojištění odpovědnosti na 10 milionů</li>
            </ul>
          </div>

          <div className="hero-ring">
            <RingCounter />
          </div>
        </div>
      </section>

      <Divider />

      <section className="section sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="wrap">
          <p className="eyebrow eyebrow-accent">Pět věcí, které pro strom uděláme</p>
          <h2 className="section-h" id="sluzby-h">Naše služby</h2>
          <ol className="service-list">
            {services.map((s) => (
              <li className="service" key={s.name}>
                <RingMark />
                <div className="service-body">
                  <h3 className="service-name">
                    {s.name}
                    {s.obj ? <span className="service-obj"> {s.obj}</span> : null}
                  </h3>
                  <p className="service-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Divider />

      <section className="section onas" id="onas" aria-labelledby="onas-h">
        <div className="wrap">
          <p className="eyebrow eyebrow-accent">O nás</p>
          <h2 className="section-h" id="onas-h">Proč nás pustit do koruny</h2>
          <p className="onas-lead">
            Ať už ve stromech vidíte svůj majetek, nebo živé bytosti, tak či onak
            potřebují buď údržbu, nebo péči. Společně předejdeme zbytečným škodám
            na zdraví i majetku a pomůžeme stromu k perspektivnímu růstu. Péče o
            stromy je pro nás spíš posláním než prací — a to je na výsledku vidět.
          </p>

          <div className="stats">
            <div className="stat">
              <span className="stat-num">15</span>
              <span className="stat-label">let v korunách</span>
            </div>
            <div className="stat">
              <span className="stat-num">10<span className="stat-unit"> mil.</span></span>
              <span className="stat-label">pojištění odpovědnosti (Kč)</span>
            </div>
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">odborné certifikáty</span>
            </div>
          </div>

          <div className="cert-block">
            <h3 className="cert-h">Naše certifikáty</h3>
            <ul className="cert-list">
              {certs.map((c) => (
                <li key={c}>
                  <RingMark />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
