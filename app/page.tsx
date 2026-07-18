import { ThreadRule, OpenStatus } from "./motion";

const HOURS = [
  ["Po", "7:00–15:00"],
  ["Út", "7:00–15:00"],
  ["St", "7:00–15:00"],
  ["Čt", "7:00–15:00"],
  ["Pá", "7:00–15:00"],
  ["So–Ne", "zavřeno"],
];

const STEPS = [
  {
    n: "01",
    t: "Vyšetření dásní a kamene",
    d: "Změříme hloubku dásňových chobotů a ukážeme vám na kamerce, kde se povlak drží nejvíc.",
  },
  {
    n: "02",
    t: "Ultrazvuk a Air-Flow",
    d: "Zubní kámen sundáme šetrným ultrazvukem, pigmentace od kávy a kouře rozpustí pískování Air-Flow.",
  },
  {
    n: "03",
    t: "Leštění a fluoridace",
    d: "Sklovinu doleštíme a uzavřeme fluoridovým lakem — zuby jsou hladké a hůř se na ně chytá plak.",
  },
  {
    n: "04",
    t: "Nácvik domácí péče",
    d: "Vybereme kartáček, mezizubní kartáčky i techniku, která vám vydrží až do další kontroly.",
  },
];

const PRICE = [
  ["Vstupní dentální hygiena · 60 min", "1 200 Kč"],
  ["Opakovaná dentální hygiena", "900 Kč"],
  ["Air-Flow pískování", "400 Kč"],
  ["Hygiena dětí a mládeže", "600 Kč"],
  ["Domácí bělení s dlahami", "3 900 Kč"],
];

const TEAM = [
  { m: "JP", name: "doc. MUDr. Josef Podstata, DrSc.", role: "ZAKLADATEL · STOMATOCHIRURG" },
  { m: "LS", name: "MUDr. Luboš Steklý", role: "ODBORNÝ ZÁSTUPCE" },
  { m: "PB", name: "MDDr. Pavlína Balharová", role: "ZUBNÍ LÉKAŘKA" },
  { m: "ŠP", name: "MDDr. Šimon Pacola", role: "ZUBNÍ LÉKAŘ" },
  { m: "TK", name: "MDDr. Tereza Kamínková", role: "ZUBNÍ LÉKAŘKA" },
  { m: "MŠ", name: "MDDr. Martina Šenková", role: "ZUBNÍ LÉKAŘKA" },
];

const POJISTOVNY = [
  ["VZP", "111"],
  ["VoZP", "201"],
  ["ČPZP", "205"],
  ["OZP", "207"],
  ["ZPMV", "211"],
  ["RBP", "213"],
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="wrap">
          <header className="topbar">
            <a className="wordmark" href="#top" aria-label="SCI Olomouc — úvod">
              <span className="wordmark__mark">SCI</span>
              <span className="wordmark__sub">
                Stomatochirurgie · Implantologie
                <br />
                Olomouc · od 1993
              </span>
            </a>
            <OpenStatus />
          </header>

          <div className="hero__grid" id="top">
            <div className="hero__lead">
              <p className="eyebrow">Dentální hygiena · Olomouc</p>
              <h1 className="hero__title">
                Chráníme každý zub — a vracíme zpět ty, které chybí.
              </h1>
              <ThreadRule color="#cfe3df" />
              <p className="hero__sub">
                Stomatochirurgie, implantologie a poctivá dentální hygiena pod
                jednou střechou. Navazujeme na praxi doc. MUDr. Josefa Podstaty,
                DrSc., otevřenou v Olomouci v roce 1993.
              </p>
              <div className="hero__cta">
                <a className="btn btn--phone" href="tel:777111222">
                  Zavolat 777 111 222
                </a>
                <a className="btn btn--ghost" href="#hygiena">
                  Objednat na hygienu
                </a>
              </div>
            </div>

            <aside className="panel" aria-label="Ordinační hodiny">
              <p className="panel__label">Ordinační hodiny</p>
              <dl className="hours">
                {HOURS.map(([d, h]) => (
                  <div className="hours__row" key={d}>
                    <dt>{d}</dt>
                    <dd className={h === "zavřeno" ? "is-off" : ""}>{h}</dd>
                  </div>
                ))}
              </dl>
              <p className="panel__note">
                Objednáváme telefonicky. Akutní bolest řešíme přednostně týž den.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="band band--aqua" id="hygiena">
        <ThreadRule color="#0f3a43" />
        <div className="wrap">
          <p className="index">
            <span className="index__num">01</span>
            <span className="index__slash">/</span> Dentální hygiena
          </p>
          <div className="band__head">
            <h2 className="band__title">
              Hygiena, po které zuby zase vržou
            </h2>
            <p className="band__intro">
              Zubní kámen a povlak jsou začátek zánětu dásní i kazů. Odstraníme je
              dřív, než napáchají škodu, a naučíme vás techniku, která funguje i
              doma mezi kontrolami. Prevence je nejlevnější zákrok, jaký u nás
              podstoupíte.
            </p>
          </div>

          <ol className="steps">
            {STEPS.map((s) => (
              <li className="step" key={s.n}>
                <span className="step__num">{s.n}</span>
                <h3 className="step__title">{s.t}</h3>
                <p className="step__desc">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="pricecard">
            <p className="pricecard__label">Orientační ceník</p>
            <dl className="price">
              {PRICE.map(([t, p]) => (
                <div className="price__row" key={t}>
                  <dt>{t}</dt>
                  <dd>{p}</dd>
                </div>
              ))}
            </dl>
            <p className="pricecard__note">
              Ceny jsou orientační. Přesnou kalkulaci dostanete po vstupním
              vyšetření — nic vám nenaúčtujeme bez domluvy.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--bone" id="tym">
        <ThreadRule color="#9d1b2e" />
        <div className="wrap">
          <p className="index">
            <span className="index__num">02</span>
            <span className="index__slash">/</span> Tým a důvěra
          </p>
          <div className="band__head">
            <h2 className="band__title">Lékaři, kteří obor učí i dělají</h2>
            <p className="band__intro">
              Za tři desetiletí prošly naší ordinací tisíce pacientů. Pořád platí,
              že vás ošetří lékaři, kteří implantologii a stomatochirurgii
              rozvíjejí a předávají dál — ne anonymní směna.
            </p>
          </div>

          <ul className="team">
            {TEAM.map((p) => (
              <li className="person" key={p.name}>
                <span className="person__crown" aria-hidden="true">
                  {p.m}
                </span>
                <span className="person__name">{p.name}</span>
                <span className="person__role">{p.role}</span>
              </li>
            ))}
          </ul>

          <div className="insurers">
            <p className="insurers__label">Máme smlouvu s pojišťovnami</p>
            <ul className="insurers__list">
              {POJISTOVNY.map(([z, code]) => (
                <li key={z}>
                  <span className="insurers__code">{code}</span> {z}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
