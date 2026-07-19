import { HeroThermal } from "./motion";

const services = [
  {
    tag: "Vzduch-vzduch",
    mode: "both",
    modeLabel: "Topí i chladí",
    title: "Tepelná čerpadla vzduch-vzduch",
    body: "Daikin Stylish i Emura. V zimě jeden z nejlevnějších zdrojů vytápění, v létě obrátí směr a ochladí byt. Jeden systém na celý rok.",
  },
  {
    tag: "Na klíč",
    mode: "cool",
    modeLabel: "Chlazení",
    title: "Klimatizace",
    body: "Daikin, Toshiba, Sinclair. Vybereme, dodáme a nainstalujeme jednotku přesně pro vaši místnost — poradí naši odborníci.",
  },
  {
    tag: "Zdravé bydlení",
    mode: "heat",
    modeLabel: "Topení",
    title: "Rekuperace tepla",
    body: "Čerstvý vzduch v domě bez otevírání oken a bez ztráty natopeného tepla. Řízené větrání s návratem energie.",
  },
  {
    tag: "Vlhkost",
    mode: "none",
    modeLabel: "",
    title: "Odvlhčovače",
    body: "Suchý sklep, prádelna i prostor u bazénu. Vlhkost pod kontrolou po celý rok.",
  },
  {
    tag: "Provozy",
    mode: "none",
    modeLabel: "",
    title: "Vzduchotechnika",
    body: "Odvětrání dílen, kuchyní a provozoven podle platných norem — návrh i realizace.",
  },
  {
    tag: "Komerce",
    mode: "cool",
    modeLabel: "Chlazení",
    title: "Chlazení a mražení",
    body: "Chladicí a mrazicí technika pro obchody, restaurace a sklady. Instalace i pravidelný servis.",
  },
];

const steps = [
  {
    n: "01",
    title: "Konzultace a zaměření zdarma",
    body: "Technik přijede, změří místo a navrhne řešení na míru. Nezávazně a bez poplatku.",
  },
  {
    n: "02",
    title: "Cenová nabídka",
    body: "Jasná cena včetně jednotky, materiálu, montáže i DPH. Poradíme s dotací Nová zelená úsporám.",
  },
  {
    n: "03",
    title: "Rychlá montáž",
    body: "Instalujeme bez dlouhých čekacích lhůt. Set 3,5 kW zvládneme i na splátky od 350 Kč měsíčně.",
  },
  {
    n: "04",
    title: "Servis do 24 hodin",
    body: "Vlastní servisní vozy a vyškolení chladírenští technici. Při závadě u vás do 24 hodin.",
  },
];

const regions = [
  "Ostrava",
  "Frýdek-Místek",
  "Havířov",
  "Karviná",
  "Nový Jičín",
  "Opava",
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <div className="wrap masthead__inner">
          <div className="wordmark">
            <span className="wordmark__mark" aria-hidden="true" />
            <span className="wordmark__name">
              FINIŠ<span className="wordmark__city">OSTRAVA</span>
            </span>
          </div>
          <p className="masthead__tag">Klimatizace &amp; tepelná čerpadla — od roku 1994</p>
        </div>
      </header>

      <section className="section hero">
        <div className="wrap hero__grid">
          <div className="hero__body">
            <p className="kicker">Tepelné čerpadlo vzduch-vzduch · Moravskoslezský kraj</p>
            <h1 className="hero__title">Jedna jednotka pro celý rok.</h1>
            <HeroThermal />
            <p className="hero__sub">
              Nejlevnější způsob vytápění domácnosti, který v létě obrátí směr
              a ochladí byt i během největších veder. Návrh, montáž i servis
              řešíme v Ostravě sami — 30 let v oboru a tisíce spokojených
              zákazníků.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#sluzby">
                Nezávazná konzultace zdarma
              </a>
              <a className="btn btn--ghost" href="#jak">
                Jak vzduch-vzduch funguje
              </a>
            </div>
          </div>

          <aside className="hero__spec" aria-label="Parametry firmy">
            <dl className="spec">
              <div className="spec__row">
                <dt className="spec__k">Výjezd servisu</dt>
                <dd className="spec__v">do 24 h</dd>
              </div>
              <div className="spec__row">
                <dt className="spec__k">Zkušenost v oboru</dt>
                <dd className="spec__v">30 let</dd>
              </div>
              <div className="spec__row">
                <dt className="spec__k">Značky</dt>
                <dd className="spec__v">Daikin · Toshiba · Sinclair</dd>
              </div>
              <div className="spec__row">
                <dt className="spec__k">Provozní režim</dt>
                <dd className="spec__v">Chlazení ↔ Topení</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section sluzby" id="sluzby">
        <div className="wrap">
          <div className="sechead">
            <p className="eyebrow">Co pro vás uděláme</p>
            <h2 className="sechead__title">Řemeslo chladírenského technika</h2>
            <span className="rule" aria-hidden="true" />
          </div>

          <ul className="cards">
            {services.map((s) => (
              <li className="card" key={s.title}>
                <div className="card__top">
                  <span className="card__tag">{s.tag}</span>
                  {s.mode !== "none" && (
                    <span className={`chip chip--${s.mode}`}>{s.modeLabel}</span>
                  )}
                </div>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </li>
            ))}
          </ul>

          <div className="coanda">
            <span className="rule rule--vert" aria-hidden="true" />
            <div className="coanda__text">
              <p className="eyebrow eyebrow--cyan">Coanda efekt</p>
              <p className="coanda__body">
                Speciálně tvarované klapky Daikinu vedou proud vzduchu podél
                stropu — na vás netáhne a teplo se rozloží rovnoměrně po celé
                místnosti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section proc" id="jak">
        <div className="wrap proc__grid">
          <div className="proc__intro">
            <p className="eyebrow eyebrow--cyan">Proč FINIŠ Ostrava</p>
            <h2 className="proc__title">
              Vlastní technici, vlastní vozy, jasná cena.
            </h2>
            <span className="rule" aria-hidden="true" />
            <p className="proc__lead">
              Nejsme překupník. Od prvního zaměření po servis po letech děláme
              všechno sami — proto jsme u vás při závadě do 24 hodin.
            </p>

            <div className="stats">
              <div className="stat">
                <span className="stat__v">30</span>
                <span className="stat__k">let v oboru</span>
              </div>
              <div className="stat">
                <span className="stat__v">24 h</span>
                <span className="stat__k">výjezd technika</span>
              </div>
              <div className="stat">
                <span className="stat__v">350 Kč</span>
                <span className="stat__k">splátka měsíčně</span>
              </div>
            </div>

            <div className="regions">
              <p className="regions__label">Montáže v regionu:</p>
              <ul className="regions__list">
                {regions.map((r) => (
                  <li className="regions__item" key={r}>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ol className="steps">
            {steps.map((st) => (
              <li className="step" key={st.n}>
                <span className="step__n">{st.n}</span>
                <div className="step__text">
                  <h3 className="step__title">{st.title}</h3>
                  <p className="step__body">{st.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
