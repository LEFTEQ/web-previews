import { Fragment } from "react";

const deck = [
  { ral: "RAL 2011", name: "Tieforange", hex: "#cf5a1a", finish: "lesk" },
  { ral: "RAL 5010", name: "Enciánová modř", hex: "#124b73", finish: "lesk" },
  { ral: "RAL 9005", name: "Hluboká čerň", hex: "#15181b", finish: "mat" },
  { ral: "RAL 7016", name: "Antracit", hex: "#2b3236", finish: "struktura" },
  { ral: "RAL 9006", name: "Stříbrná metalíza", hex: "#9fa2a4", finish: "lesk" },
  { ral: "RAL 6005", name: "Mechová zelená", hex: "#2f4538", finish: "mat" },
  { ral: "RAL 3020", name: "Dopravní červená", hex: "#b3140f", finish: "lesk" },
  { ral: "Zinek 95 %", name: "Zinková", hex: "#7f8489", finish: "antikoroze" },
];

const steps = [
  {
    n: "01",
    title: "Odmaštění a tryskání",
    body:
      "Předúprava rozhoduje o přilnavosti. Odmastíme, u zarezlých dílů tryskáme ocelovým abrazivem v komorovém tryskači s metacími koly.",
    spec: "kulička 0,7 mm · ostrohran 0,8 mm",
  },
  {
    n: "02",
    title: "Nástřik prášku",
    body:
      "Atestované práškové barvy v celé škále RAL — hladké, jemné i hrubé struktury. Nanášíme na technologiích Nordson a Sames.",
    spec: "hladké · struktura · metalíza",
  },
  {
    n: "03",
    title: "Vypálení v peci",
    body:
      "Díl projede vypalovací pecí, kde se prášek při vysoké teplotě roztaví, vytvrdí a pevně přilne k povrchu.",
    spec: "180–200 °C",
  },
  {
    n: "04",
    title: "Balení a expedice",
    body:
      "Hotové díly balíme do strečové fólie a prokládáme papírem nebo bublinkovou fólií, aby lak přežil převoz bez oděrek.",
    spec: "krátké dodací lhůty",
  },
];

function DeckDivider() {
  return (
    <div className="divider" aria-hidden="true">
      {deck.map((c, i) => (
        <span key={i} className="divider-chip" style={{ background: c.hex }} />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <header className="topbar">
          <a className="wordmark" href="#" aria-label="Procometal-Komexpo, prášková lakovna Brno">
            <span className="wm-chip" aria-hidden="true" />
            <span className="wm-name">
              PROCOMETAL<span className="wm-sep">·</span>KOMEXPO
            </span>
            <span className="wm-sub">prášková lakovna · Brno</span>
          </a>
          <a className="topbar-tel" href="tel:+420736485012">
            +420 736 485 012
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-main">
            <p className="eyebrow">Povrchové úpravy kovů · od roku 1992</p>
            <h1 className="headline">
              <span className="hl-stack">
                <span className="hl-base">
                  PRÁŠKOVÁ<br />LAKOVNA
                </span>
                <span className="hl-coat" aria-hidden="true">
                  PRÁŠKOVÁ<br />LAKOVNA
                </span>
              </span>
            </h1>
            <p className="lede">
              Kov k nám přijede holý a odjede nalakovaný v odstínu, který si vyberete
              z našeho vzorníku. Brněnská lakovna pro kusovou i sériovou výrobu —
              tryskání, nástřik, vypálení a zabalení pod jednou střechou.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="tel:+420736485012">
                Zavolat: 736 485 012
              </a>
              <a className="btn btn-ghost" href="#linka">
                Jak to projede linkou
              </a>
            </div>
            <p className="hero-meta">
              Výstaviště 1, Brno 603 00 · nájezd pro kamiony, VZV, kryté sklady
            </p>
          </div>

          <aside className="deck" aria-label="Vzorník práškových odstínů RAL">
            <p className="deck-cap">Vzorník na dílně</p>
            <ul className="deck-list">
              {deck.map((c, i) => (
                <li className="chip" key={i}>
                  <span className="chip-swatch" style={{ background: c.hex }} />
                  <span className="chip-info">
                    <span className="chip-ral">{c.ral}</span>
                    <span className="chip-name">{c.name}</span>
                  </span>
                  <span className="chip-finish">{c.finish}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="fold-edge" aria-hidden="true">
          <span className="fold-label">syrová ocel → nalakováno</span>
        </div>
      </section>

      <section className="section" id="linka" aria-labelledby="linka-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Linka krok za krokem</p>
          <h2 className="section-title" id="linka-title">
            Čtyři zastávky od holého plechu k hotovému laku
          </h2>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <div className="step-body">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-text">{s.body}</p>
                <span className="step-spec">{s.spec}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="specs">
          <div className="spec-card">
            <h3 className="spec-h">Průchodnost lakovací linky</h3>
            <dl className="spec-list">
              <div className="spec-row">
                <dt>Konstrukce</dt>
                <dd>3,2 × 2,2 × 1,2 m</dd>
              </div>
              <div className="spec-row">
                <dt>Ploché předměty</dt>
                <dd>3,2 × 2,2 m</dd>
              </div>
              <div className="spec-row">
                <dt>Profily a tyčovina</dt>
                <dd>až 3,5 m</dd>
              </div>
            </dl>
          </div>
          <div className="spec-card">
            <h3 className="spec-h">Vypalovací pec</h3>
            <dl className="spec-list">
              <div className="spec-row">
                <dt>Rozměr komory</dt>
                <dd>125 × 210 × 430 cm</dd>
              </div>
              <div className="spec-row">
                <dt>Uhlopříčný profil</dt>
                <dd>cca 470 cm</dd>
              </div>
              <div className="spec-row">
                <dt>Nosnost závěsu</dt>
                <dd>200 kg</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <DeckDivider />

      <section className="section section--trust" aria-labelledby="o-nas-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Kdo vám to lakuje</p>
          <h2 className="section-title" id="o-nas-title">
            Na trhu od roku 1992. Pořád stejná dílna, pořád stejný telefon.
          </h2>
        </div>

        <div className="trust-grid">
          <div className="trust-lead">
            <p>
              Prášková lakovna Procometal-Komexpo dělá povrchové úpravy kovů přes
              třicet let. Za tu dobu jsme si sáhli na hliníkové profily, ocelové
              konstrukce, ploty, díly strojů i osobní kousky do garáže — a víme,
              kde bývá problém dřív, než se objeví na laku.
            </p>
            <p>
              Firemní logistika drží krátké dodací lhůty a deponované zboží — hotové
              i rozdělané — máme v krytých skladech mimo dosah počasí. Ideální
              partner pro jednotlivce i pro velké série.
            </p>
          </div>

          <ul className="facts">
            <li className="fact">
              <span className="fact-num">5 000 h</span>
              <span className="fact-label">
                odolnost zinkové barvy v solné mlze — 95 % zinku nahradí žárový zinek
              </span>
            </li>
            <li className="fact">
              <span className="fact-num">200–430</span>
              <span className="fact-label">
                nová pec 125/210/430 cm zvládne i rozměrné konstrukce
              </span>
            </li>
            <li className="fact">
              <span className="fact-num">1992</span>
              <span className="fact-label">
                rok, kdy jsme rozsvítili první vypalovací pec
              </span>
            </li>
          </ul>
        </div>

        <div className="trust-extra">
          <div className="extra-card">
            <h3 className="extra-h">Repas ocelových ráfků</h3>
            <p>
              V kooperaci s pneuservisem repasujeme všechny typy ocelových ráfků.
              Nejčastěji do stříbrné nebo černé metalízy — nalakujeme i otryskáme
              podle přání. Skvělé termíny.
            </p>
          </div>
          <div className="extra-card">
            <h3 className="extra-h">Technologie, na kterých jedeme</h3>
            <p className="tech-line">
              {["Nordson", "Sames", "Ideál Line", "Surfin", "Datel", "Kovofiniš"].map(
                (t, i, arr) => (
                  <Fragment key={t}>
                    <span className="tech">{t}</span>
                    {i < arr.length - 1 ? <span className="tech-dot">·</span> : null}
                  </Fragment>
                )
              )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
