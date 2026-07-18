import { Tally } from "./motion";

const STATS = [
  { value: 148, label: "aktuálně spravovaných nemovitostí" },
  { value: 3650, label: "dní se staráme o plzeňské pronájmy" },
  { value: 98, suffix: "%", label: "pronajímatelů dostalo nájem včas" },
  { value: 512, label: "realizovaných pronájmů" },
];

const SERVICES = [
  {
    n: "01",
    title: "Ocenění nájmu",
    body:
      "Projdeme byt, srovnáme ho s tím, za co se v okolí právě pronajímá, a řekneme vám férové číslo — ne vzdušný zámek, ale cenu, za kterou se v Plzni skutečně podepisuje smlouva.",
    tag: "Zdarma · do 3 dnů",
  },
  {
    n: "02",
    title: "Výběr nájemníka",
    body:
      "Vyfotíme, zveřejníme a odvedeme prohlídky — osobně i online. Zájemce prověříme v registrech a podepíšeme smlouvu, která drží: s inventářem, kaucí a předávacím protokolem.",
    tag: "Prohlídky i online",
  },
  {
    n: "03",
    title: "Správa pronájmu",
    body:
      "Vybíráme nájem, hlídáme platby, řešíme opravy i noční havárie a jednáme s nájemníkem za vás. Vy jen sledujete, jak vám každý měsíc chodí peníze — včas.",
    tag: "Od 8 % z nájmu · garance příjmu",
  },
];

const PROPERTIES = [
  { name: "Klatovská třída", meta: "činžovní dům · 6 bytů", since: "ve správě od 2019" },
  { name: "Americká", meta: "kanceláře + 3 byty", since: "ve správě od 2021" },
  { name: "Bezručova", meta: "secesní dům · 5 bytů", since: "ve správě od 2018" },
  { name: "sady Pětatřicátníků", meta: "měšťanský dům · 4 byty", since: "ve správě od 2022" },
  { name: "Riegrova", meta: "podkrovní byty · 2 jednotky", since: "ve správě od 2023" },
  { name: "Kardinála Berana", meta: "bytový dům · 8 bytů", since: "ve správě od 2017" },
];

export default function Page() {
  return (
    <main className="vd">
      <section className="section hero">
        <div className="wrap hero-inner">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Správa nemovitostí · Plzeň, vnitřní město
          </p>

          <div className="board board--hero">
            <div className="nameplate nameplate--title">
              <span className="wordmark">
                VÁŠ<br />DOMOVNÍK
              </span>
              <span className="wordmark-sub">s.r.o. · správa pronájmů</span>
            </div>

            <ol className="stat-grid">
              {STATS.map((s, i) => (
                <li className="plate stat" key={s.label}>
                  <span className="stat-num">
                    <Tally value={s.value} index={i} />
                    {s.suffix ? <span className="stat-suffix">{s.suffix}</span> : null}
                  </span>
                  <span className="stat-label">{s.label}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="lede">
            Váš domovník na zavolání. Pronajmeme, spravujeme a hlídáme vaše byty
            v Plzni — vy dostanete nájem včas a klid, my si necháme starosti
            s nájemníky, opravami i papíry.
          </p>

          <div className="actions">
            <a className="buzzer" href="tel:+420777111222">
              <span className="buzzer-led" aria-hidden="true" />
              Zavolat domovníkovi
            </a>
            <a className="ghost" href="#jak-to-funguje">
              Jak to funguje
            </a>
          </div>
        </div>
      </section>

      <section className="section band" id="jak-to-funguje">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Jak to funguje
            </p>
            <h2 className="section-title">Tři plakety, jedna starost míň</h2>
            <p className="section-sub">
              Od prvního ocenění po měsíční výplatu nájmu jde všechno v jedné
              lince — vy podepíšete plnou moc, my zacvakneme zbytek na panel.
            </p>
          </header>

          <ol className="service-list">
            {SERVICES.map((s) => (
              <li className="plate service" key={s.n}>
                <span className="svc-num" aria-hidden="true">{s.n}</span>
                <div className="svc-body">
                  <h3 className="svc-title">{s.title}</h3>
                  <p>{s.body}</p>
                  <span className="svc-tag">{s.tag}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="reference">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Náš zvonkový panel
            </p>
            <h2 className="section-title">Domy, které máme na starosti</h2>
            <p className="section-sub">
              Každá plaketa je jeden dům ve vnitřním městě, o který se staráme
              den co den. Kliky, nájemníci i papíry — všechno běží přes jeden
              panel.
            </p>
          </header>

          <ul className="board board--panel prop-grid">
            {PROPERTIES.map((p) => (
              <li className="plate prop" key={p.name}>
                <span className="prop-name">{p.name}</span>
                <span className="prop-meta">{p.meta}</span>
                <span className="prop-since">{p.since}</span>
              </li>
            ))}
          </ul>

          <div className="trust-grid">
            <blockquote className="plate quote">
              <p>
                „Byt po rodičích jsem řešit nechtěl. Předal jsem klíče a od té
                doby mi jen chodí nájem — a jednou ročně vyúčtování, kterému
                rozumím.“
              </p>
              <cite>— pronajímatel bytu na Bezručově, klient od 2020</cite>
            </blockquote>

            <div className="plate assure">
              <span className="assure-head">Profesní pojištění do 5 mil. Kč</span>
              <p>
                Jsme pojištění na odpovědnost při výkonu správy. Když se něco
                pokazí u nás, neřešíte to vy.
              </p>
            </div>

            <div className="plate assure">
              <span className="assure-head">Nájem u vás včas — nebo my</span>
              <p>
                U spravovaných bytů garantujeme výplatu nájmu. Pozdní platbu
                nájemníka vymáháme sami, vás se to nedotkne.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
