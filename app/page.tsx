import { CountUp } from "./motion";

const services = [
  {
    n: "01",
    t: "Rekonstrukce bytů",
    d: "Bytové jádro, nové rozvody, podlahy, omítky i finální úklid. Byt předáme hotový k nastěhování.",
    s: "na klíč",
  },
  {
    n: "02",
    t: "Rodinné domy",
    d: "Od hrubé stavby po dokončovací práce — včetně úředních formalit a prvních návrhů.",
    s: "od základů",
  },
  {
    n: "03",
    t: "Topení a energie",
    d: "Návrh a montáž vytápění, výměna kotle a úsporná řešení, která sníží účty za energie.",
    s: "úspora",
  },
  {
    n: "04",
    t: "Plynoservis",
    d: "Připojení, revize a opravy plynových rozvodů i spotřebičů — se vším potřebným papírováním.",
    s: "s revizí",
  },
  {
    n: "05",
    t: "Klimatizace",
    d: "Chlazení i temperování bytu s tichým provozem, čistým vedením a rychlou montáží.",
    s: "tichý chod",
  },
];

const steps = [
  {
    n: "01",
    t: "Přijedeme a zaměříme",
    d: "Dorazíme k vám, obhlédneme byt a všechno pečlivě přeměříme.",
  },
  {
    n: "02",
    t: "Poradíme a upozorníme",
    d: "Vyslechneme vaše přání, upozorníme na rizika a ukážeme alternativy.",
  },
  {
    n: "03",
    t: "Naceníme",
    d: "Dostanete jasnou cenu za konkrétní práce — bez překvapení na konci.",
  },
  {
    n: "04",
    t: "Postavíme",
    d: "Začneme v nejbližším termínu a bereme ohled na váš klid a soukromí.",
  },
  {
    n: "05",
    t: "Uklidíme a předáme",
    d: "Po sobě uklidíme a byt předáme hotový. Kvalita je pro nás zavazující.",
  },
];

export default function Page() {
  return (
    <main className="page">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="wrap hero-inner">
          <div className="topbar hero-anim" style={{ animationDelay: "0ms" }}>
            <div className="wordmark" aria-label="Rekonstrukce bytů Praha">
              <span className="wm-main">Rekonstrukce&nbsp;bytů</span>
              <span className="wm-tick">
                <i className="tk" />
                <b>PRAHA</b>
                <i className="tk" />
              </span>
            </div>
            <div className="topmeta">Praha 4 · CZ · od 1999</div>
          </div>

          <p className="eyebrow hero-anim" style={{ animationDelay: "80ms" }}>
            <span className="eb-num">00</span> Zaměření
          </p>

          <h1 className="h1">
            <span className="h1-line hero-anim" style={{ animationDelay: "140ms" }}>
              Byt jako nový.
            </span>
            <span className="h1-line hero-anim" style={{ animationDelay: "240ms" }}>
              Do&nbsp;<em>posledního</em>
            </span>
            <span className="h1-line hero-anim" style={{ animationDelay: "340ms" }}>
              milimetru.
            </span>
          </h1>

          <div
            className="hero-dim hero-anim"
            style={{ animationDelay: "460ms" }}
            aria-hidden="true"
          >
            <span className="tick left" />
            <span className="rule" />
            <span className="tick right" />
            <span className="fig">1 200 mm</span>
          </div>

          <p className="lead hero-anim" style={{ animationDelay: "540ms" }}>
            Kompletní rekonstrukce bytů na klíč v Praze. Od prvního zaměření
            přes rozvody a jádro až po úklid po sobě — děláme to poctivě
            a s papíry v pořádku už od roku 1999.
          </p>

          {/* Drawing titleblock */}
          <dl
            className="titleblock hero-anim"
            style={{ animationDelay: "640ms" }}
          >
            <div className="tb-cell">
              <dt>Objekt</dt>
              <dd>Byt · interiér</dd>
            </div>
            <div className="tb-cell">
              <dt>Měřítko</dt>
              <dd>1:1</dd>
            </div>
            <div className="tb-cell">
              <dt>Lokalita</dt>
              <dd>Praha 4</dd>
            </div>
            <div className="tb-cell">
              <dt>Založeno</dt>
              <dd>1999</dd>
            </div>
            <div className="tb-cell tb-phone">
              <dt>Zaměření zdarma</dt>
              <dd>
                <a href="tel:+420777111222">777&nbsp;111&nbsp;222</a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ============ 01 · NABÍDKA ============ */}
      <section className="section measure" aria-labelledby="nabidka-h">
        <div className="wrap grid">
          <div className="rail">
            <span className="rail-num">A</span>
            <span className="rail-label">Výkres nabídky</span>
          </div>
          <div className="col">
            <div className="sec-head">
              <h2 id="nabidka-h" className="h2">Co pro vás postavíme</h2>
              <div className="sec-dim" aria-hidden="true">
                <span className="tick left" />
                <span className="rule" />
                <span className="tick right" />
                <span className="fig">5 položek</span>
              </div>
            </div>

            <ol className="svc-list">
              {services.map((it) => (
                <li className="svc" key={it.n}>
                  <span className="svc-num">{it.n}</span>
                  <div className="svc-body">
                    <h3 className="svc-t">{it.t}</h3>
                    <div className="svc-dim" aria-hidden="true">
                      <span className="tick left" />
                      <span className="rule" />
                      <span className="tick right" />
                    </div>
                    <p className="svc-d">{it.d}</p>
                  </div>
                  <span className="svc-spec">{it.s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ 02 · OD ROKU 1999 ============ */}
      <section className="section measure alt" aria-labelledby="onas-h">
        <div className="wrap grid">
          <div className="rail">
            <span className="rail-num">B</span>
            <span className="rail-label">Titulní razítko</span>
          </div>
          <div className="col">
            <div className="sec-head">
              <h2 id="onas-h" className="h2">Měříme dvakrát, řežeme jednou</h2>
              <div className="sec-dim" aria-hidden="true">
                <span className="tick left" />
                <span className="rule" />
                <span className="tick right" />
                <span className="fig">postup 01–05</span>
              </div>
            </div>

            <div className="trust">
              <div className="stat">
                <span className="stat-num">
                  <CountUp to={26} />
                </span>
                <span className="stat-label">
                  let na pražských stavbách. Od roku 1999 bydlí naši klienti
                  v bytech, které jsou moderní, tiché a bezpečné.
                </span>
              </div>
            </div>

            <ol className="steps">
              {steps.map((s) => (
                <li className="step" key={s.n}>
                  <span className="step-num">{s.n}</span>
                  <div>
                    <h3 className="step-t">{s.t}</h3>
                    <p className="step-d">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="why">
              <li>Kvalita je pro nás prvořadá a zavazující.</li>
              <li>Firma s dlouholetou historií a stálým týmem odborníků.</li>
              <li>Průběžně se školíme a sledujeme nové postupy.</li>
              <li>Dodáme i materiál a vyjdeme vám vstříc.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
