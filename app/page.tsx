import { HeroCrack, HeroHeadline } from "./motion";

const sluzby = [
  {
    t: "Výměna čelního skla",
    d: "Kompletní demontáž a montáž nového skla s originální lepicí sadou. Auto je za pár hodin zase v provozu.",
  },
  {
    t: "Oprava odštěpu pryskyřicí",
    d: "Dokud se prasklina nešíří, vyplníme odštěp čirou pryskyřicí. Levnější než výměna a hotovo na místě.",
  },
  {
    t: "Boční a zadní skla",
    d: "Rozbité okno u dveří nebo zadní sklo? Vyměníme i tato skla a odstraníme střepy z interiéru.",
  },
  {
    t: "Kalibrace kamer (ADAS)",
    d: "Po výměně čelního skla znovu seřídíme asistenční kameru za sklem, aby systémy fungovaly správně.",
  },
  {
    t: "Vyřízení s pojišťovnou",
    d: "Jsme smluvní partneři řady pojišťoven. Papírování a hlášení škody vyřídíme za vás.",
  },
];

const kroky = [
  {
    n: "01",
    t: "Zavolejte nebo napište",
    d: "Domluvíme nejbližší termín — často klidně na zítra. Řekneme rovnou, jestli stačí oprava, nebo je nutná výměna.",
  },
  {
    n: "02",
    t: "Přijedeme za vámi",
    d: "Na adresu po celé Praze i okolí — k domu, do práce, kamkoli vám to vyhovuje. Mobilní servis přiveze vše s sebou.",
  },
  {
    n: "03",
    t: "Pojišťovnu vyřídíme my",
    d: "U smluvních partnerů necháte administrativu na nás. Vy jen podepíšete a jedete dál.",
  },
];

function Seam() {
  return (
    <div className="seam" aria-hidden="true">
      <svg viewBox="0 0 1200 44" preserveAspectRatio="none">
        <polyline
          points="0,8 140,14 250,10 360,19 470,15 560,24 640,18 760,29 880,22 990,32 1090,26 1200,36"
          fill="none"
          stroke="var(--majak)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <section className="hero">
        <HeroCrack />
        <div className="wrap hero-wrap">
          <header className="topbar">
            <a className="brand" href="#" aria-label="GlassPro Mobile Service, autosklo Praha">
              <svg className="brand-chip" viewBox="0 0 22 22" aria-hidden="true">
                <g fill="none" stroke="var(--majak)" strokeWidth="1.3" strokeLinecap="round">
                  <path d="M11 11 L11 3" />
                  <path d="M11 11 L18 8" />
                  <path d="M11 11 L17 17" />
                  <path d="M11 11 L5 18" />
                  <path d="M11 11 L4 9" />
                </g>
                <circle cx="11" cy="11" r="1.7" fill="var(--majak)" />
              </svg>
              <span className="brand-name">
                GlassPro<span className="brand-sub">Mobile Service</span>
              </span>
            </a>
            <a className="topbar-tel" href="tel:+420777111222">777 111 222</a>
          </header>

          <div className="hero-body">
            <p className="eyebrow">Autosklo &middot; Praha a okolí &middot; přijedeme za vámi</p>
            <HeroHeadline />
            <p className="hero-lead">
              Prasklina od kamínku, hluboký odštěp nebo rozbité okno u dveří — přijedeme na
              domluvené místo a opravíme či vyměníme sklo přímo tam, kde stojíte.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="tel:+420777111222">
                Zavolat 777 111 222
              </a>
              <a className="btn btn-ghost" href="#jak">
                Jak to probíhá
              </a>
            </div>
            <p className="hero-note">Voláme zpět každý všední den do 17:00.</p>
          </div>
        </div>
      </section>

      <section className="section svc">
        <Seam />
        <div className="wrap">
          <p className="kicker">Co pro vás uděláme</p>
          <h2 className="section-title">
            Oprava vždy, když to sklo dovolí. Výměna, když už ne.
          </h2>
          <p className="section-lead">
            Když se prasklina nešíří, opravíme ji pryskyřicí a ušetříme vám peníze i čas. Když už
            sklo drží pohromadě jen tak tak, vyměníme ho za nové.
          </p>
          <ul className="svc-grid">
            {sluzby.map((s) => (
              <li className="svc-card" key={s.t}>
                <h3 className="svc-name">{s.t}</h3>
                <p className="svc-desc">{s.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section trust" id="jak">
        <Seam />
        <div className="wrap">
          <p className="kicker kicker-light">Jak to probíhá</p>
          <h2 className="section-title section-title-light">
            Tři kroky. O zbytek se postaráme my.
          </h2>

          <ol className="steps">
            {kroky.map((k) => (
              <li className="step" key={k.n}>
                <span className="step-num" aria-hidden="true">
                  {k.n}
                </span>
                <div className="step-text">
                  <h3 className="step-title">{k.t}</h3>
                  <p className="step-desc">{k.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="trust-band">
            <div className="stat">
              <svg className="stat-crack" viewBox="0 0 220 160" aria-hidden="true">
                <g fill="none" stroke="var(--sklo)" strokeWidth="1" strokeLinecap="round">
                  <path d="M110 80 L60 30 L44 6" />
                  <path d="M110 80 L170 40 L214 20" />
                  <path d="M110 80 L164 128 L188 158" />
                  <path d="M110 80 L54 118 L18 150" />
                  <path d="M110 80 L108 150" />
                </g>
                <circle cx="110" cy="80" r="2.4" fill="var(--majak)" />
              </svg>
              <span className="stat-num">70 000</span>
              <span className="stat-label">oprav a výměn autoskel, které máme za sebou</span>
            </div>
            <div className="trust-copy">
              <p className="trust-lead">
                Jsme smluvními partnery řady pojišťoven a držíme se etického kodexu: kde to jde,
                volíme opravu před výměnou, abyste do budoucna ušetřili na pojistném.
              </p>
              <ul className="chip-list">
                <li>Vstřícný přístup a férová cena podle stavu skla</li>
                <li>Snižujeme škodní průběh, ne jen účet za jeden zásah</li>
                <li>Dojedeme kamkoli po Praze i po celé ČR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
