import type { CSSProperties } from "react";

export default function Page() {
  const tents = [
    {
      code: "N",
      name: "Nůžkové párty stany",
      spec: "Rozložíte ve dvou lidech za pár minut. Hliníková nebo ocelová konstrukce, 3×3 až 4×8 m.",
      use: "Trhy, catering, firemní akce",
    },
    {
      code: "P",
      name: "Stany s potiskem",
      spec: "Váš motiv na střeše i bočnicích. Vizualizaci připravíme zdarma do dvou pracovních dnů.",
      use: "Reklama, značkové stánky",
    },
    {
      code: "A",
      name: "Nafukovací stany a brány",
      spec: "Bez konstrukce, jen kompresor. Postavíte sami během okamžiku a stejně rychle sbalíte.",
      use: "Sport, cíle závodů, promo",
    },
    {
      code: "B",
      name: "Strečové beduínské stany",
      spec: "Pružná plachta napnutá do organických tvarů. Zastřešíte i členitý prostor.",
      use: "Svatby, festivaly, terasy",
    },
  ];

  const proof = [
    { n: "20", label: "let vyrábíme stany", sub: "založeno 2006" },
    { n: "16", label: "zemí Evropy", sub: "kam dodáváme" },
    { n: "10", label: "let záruka", sub: "na spoje a klouby" },
    { n: "1700", label: "m² skladu v ČB", sub: "showroom na dosah" },
  ];

  return (
    <main className="pg">
      {/* HERO */}
      <header className="hero" aria-label="RedX International — párty stany">
        <div className="hero__grid" aria-hidden="true">
          {/* stan jako signature: profil sklápěcí střechy nůžkového stanu */}
          <svg className="tent" viewBox="0 0 400 180" preserveAspectRatio="xMidYMax meet" role="presentation">
            <path className="tent__canvas" d="M20 78 L200 16 L380 78 L360 78 L200 32 L40 78 Z" />
            <path className="tent__roofL" d="M40 78 L200 32 L200 44 L52 84 Z" />
            <path className="tent__roofR" d="M360 78 L200 32 L200 44 L348 84 Z" />
            <line className="tent__leg" x1="52" y1="84" x2="52" y2="172" />
            <line className="tent__leg" x1="348" y1="84" x2="348" y2="172" />
            <line className="tent__brace" x1="52" y1="110" x2="200" y2="172" />
            <line className="tent__brace" x1="348" y1="110" x2="200" y2="172" />
            <line className="tent__brace" x1="200" y1="84" x2="200" y2="172" />
          </svg>
        </div>

        <div className="hero__inner">
          <a className="wordmark" href="#" aria-label="RedX International">
            Red<span className="wordmark__x">X</span>
            <sup className="wordmark__r">®</sup>
          </a>

          <p className="eyebrow">Výrobce nůžkových a nafukovacích stanů · České Budějovice</p>

          <h1 className="hero__h1">
            <span className="line line--1">Postavíte za</span>
            <span className="line line--2">pár minut.</span>
            <span className="line line--3">Vydrží roky.</span>
          </h1>

          <p className="hero__lead">
            Rychloskládací párty stany přímo od výrobce — s desetiletou zárukou na
            konstrukci a doručením po celé ČR zdarma. Přijeďte si je vyzkoušet do
            našeho showroomu v Českých Budějovicích.
          </p>

          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420777979111">Zavolat +420 777 979 111</a>
            <a className="btn btn--ghost" href="#nabidka">Prohlédnout stany</a>
          </div>
        </div>
      </header>

      {/* NABÍDKA */}
      <section id="nabidka" className="sec sec--offer" aria-labelledby="nabidka-h">
        <div className="sec__head">
          <p className="sec__eyebrow">Co u nás pořídíte</p>
          <h2 id="nabidka-h" className="sec__h2">Čtyři typy zastřešení, jeden výrobce</h2>
          <p className="sec__intro">
            Vybíráte podle toho, kde budete stavět a jak často stan přemisťujete.
            Náhradní díly a doplňky — stoly, židle, pulty, vlajky — máme skladem.
          </p>
        </div>

        <ul className="cards">
          {tents.map((t) => (
            <li key={t.code} className="card">
              <span className="card__code" aria-hidden="true">{t.code}</span>
              <h3 className="card__name">{t.name}</h3>
              <p className="card__spec">{t.spec}</p>
              <p className="card__use"><span className="card__useLabel">Hodí se na</span> {t.use}</p>
            </li>
          ))}
        </ul>

        <p className="offer__note">
          Chcete potisk? Pošlete nám podklady a <strong>vizualizaci připravíme zdarma</strong> do dvou pracovních dnů.
        </p>
      </section>

      {/* DŮVĚRA */}
      <section className="sec sec--trust" aria-labelledby="onas-h">
        <div className="sec__head">
          <p className="sec__eyebrow">Proč RedX</p>
          <h2 id="onas-h" className="sec__h2">Stany děláme dvacet let. Ne měsíc.</h2>
        </div>

        <dl className="stats">
          {proof.map((p) => (
            <div key={p.label} className="stat">
              <dt className="stat__n">{p.n}<span className="stat__plus">+</span></dt>
              <dd className="stat__label">
                <span className="stat__main">{p.label}</span>
                <span className="stat__sub">{p.sub}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="trust__body">
          <p>
            RedX International vznikl v roce 2006 a dnes vyrábí a dodává rychloskládací
            stany do šestnácti evropských zemí. Za každým modelem stojí vlastní vývoj
            a hlavně servis — poradíme s výběrem, vyřešíme náhradní díl i po letech.
          </p>
          <ul className="trust__list">
            <li>Doručení stanů po ČR a SR <strong>zdarma</strong>, bez expresního příplatku</li>
            <li>Objednávky odesíláme do <strong>1–2 pracovních dnů</strong> (DPD, Dachser)</li>
            <li>Kamenná prodejna a showroom v <strong>Českých Budějovicích</strong></li>
            <li>Vizualizace potisku <strong>zdarma</strong> a bez závazku</li>
          </ul>
          <a className="trust__contact" href="mailto:info@redx.cz">info@redx.cz</a>
        </div>
      </section>
    </main>
  );
}
