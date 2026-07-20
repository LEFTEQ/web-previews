import { SeparationWordmark } from "./motion";

function CrossMark() {
  return (
    <svg className="xmark" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
      <g className="xmark-lines">
        <line x1="22" y1="3" x2="22" y2="15" />
        <line x1="22" y1="29" x2="22" y2="41" />
        <line x1="3" y1="22" x2="15" y2="22" />
        <line x1="29" y1="22" x2="41" y2="22" />
        <circle cx="22" cy="22" r="8" fill="none" />
      </g>
      <rect className="xmark-rose" x="16.4" y="16.4" width="6.6" height="6.6" />
      <rect className="xmark-cyan" x="21" y="21" width="6.6" height="6.6" />
    </svg>
  );
}

const SERVICES = [
  {
    name: "Tamponový tisk",
    tag: "3D a tvarové díly",
    body:
      "Silikonový tampon se přizpůsobí prohlubním i oblým plochám a přenese i jemný detail, který jinou technologií na tvarový předmět nedostanete.",
  },
  {
    name: "Velkoplošný sítotisk",
    tag: "plné krytí na velkých plochách",
    body:
      "Víc vrstev barvy znamená lepší krytí — proto potisk drží i na náročných materiálech a světlá barva sedne i na tmavý podklad.",
  },
  {
    name: "Rotační sítotisk",
    tag: "lahve · dózy · zapalovače",
    body:
      "Potisk válcových předmětů rovnou z rolí. Vícebarevný soutisk zvládneme všude, kde má díl lock point pro přesné pasování vrstev.",
  },
];

const STATS = [
  { n: "50 000+", l: "zpracovaných zakázek od roku 1994" },
  { n: "9 500 ks", l: "zapalovačů potiskneme za jedinou hodinu" },
  { n: "42 mil.", l: "potištěných předmětů a materiálů" },
  { n: "1994", l: "rok, kdy jsme v Liberci začínali" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="band band--hero">
        <span className="corner corner--tl"><CrossMark /></span>
        <span className="corner corner--tr"><CrossMark /></span>
        <span className="corner corner--bl"><CrossMark /></span>
        <span className="corner corner--br"><CrossMark /></span>

        <div className="wrap hero">
          <p className="eyebrow eyebrow--load">
            <span className="eyebrow-mark"><CrossMark /></span>
            Tamponový tisk &middot; sítotisk &middot; Liberec od 1994
          </p>

          <SeparationWordmark lines={["TAMPO", "FRANCŮ"]} />

          <div className="hero-foot">
            <p className="lede">
              Potiskneme, co jiní odmítnou — zapalovače, cyklolahve, kosmetické
              dózy i tvarová 3D díla. Vícebarevně a přesně na&nbsp;lock&nbsp;point.
            </p>
            <ul className="specs">
              <li>
                <span className="specs-k">Materiály</span>
                <span className="specs-v">plast · sklo · kov · parafín</span>
              </li>
              <li>
                <span className="specs-k">Technologie</span>
                <span className="specs-v">tampon · sítotisk · rotační</span>
              </li>
              <li>
                <span className="specs-k">Provoz</span>
                <span className="specs-v">až 9 500 ks za hodinu</span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="band band--ink reveal" aria-labelledby="svc-title">
        <div className="wrap">
          <div className="rule">
            <span className="rule-mark"><CrossMark /></span>
          </div>
          <p className="eyebrow">
            <span className="eyebrow-mark"><CrossMark /></span>
            Tři vrstvy jednoho řemesla
          </p>
          <h2 id="svc-title" className="section-title">
            Tiskneme tam, kde běžný potisk končí.
          </h2>

          <div className="svc-grid">
            {SERVICES.map((s) => (
              <article className="svc" key={s.name}>
                <div className="svc-head">
                  <span className="svc-mark"><CrossMark /></span>
                  <h3 className="svc-name">{s.name}</h3>
                </div>
                <p className="svc-body">{s.body}</p>
                <p className="svc-tag">{s.tag}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--stock reveal" aria-labelledby="about-title">
        <div className="wrap">
          <div className="rule">
            <span className="rule-mark"><CrossMark /></span>
          </div>
          <div className="about">
            <div className="about-lead">
              <p className="eyebrow">
                <span className="eyebrow-mark"><CrossMark /></span>
                O tiskárně
              </p>
              <h2 id="about-title" className="section-title">
                Rodinná tiskárna z&nbsp;Machnína. Přesnost na&nbsp;lock&nbsp;point už&nbsp;přes 20&nbsp;let.
              </h2>
              <p className="about-body">
                Založeni 1994 v&nbsp;Liberci. Od té doby potiskujeme válcové,
                ploché, prohnuté i&nbsp;jinak nepřívětivé 3D&nbsp;předměty — od
                zapalovačů a&nbsp;cyklolahví po kosmetické dózy a&nbsp;průmyslové
                díly. Zakládáme si na&nbsp;kvalitě, ceně a&nbsp;rychlosti; barvu
                nanášíme ve&nbsp;vrstvách, protože víc vrstev líp kryje
                a&nbsp;déle vydrží.
              </p>
            </div>

            <dl className="stats">
              {STATS.map((s) => (
                <div className="stat" key={s.n}>
                  <dt className="stat-n">{s.n}</dt>
                  <dd className="stat-l">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
