import { WordSwap } from "./motion";

const specimens = [
  {
    n: "01",
    name: "Vázané kytice",
    tag: "Vázáno floristy",
    desc: "Svážeme do ruky z květin, které máme právě čerstvé na stole. Řekněte nám příležitost a rozpočet, zbytek je na nás.",
  },
  {
    n: "02",
    name: "Pivoňky v sezóně",
    tag: "Vždy čerstvé",
    desc: "Královny, na které se čeká celý rok. Poradíme, jak jim doma prodloužit život, ať vydrží co nejdéle nadýchané.",
  },
  {
    n: "03",
    name: "Smuteční vazba",
    tag: "Na zakázku",
    desc: "Věnce, kytice a srdce na poslední rozloučení. Připravíme s citem a včas, přesně podle vašich představ.",
  },
  {
    n: "04",
    name: "Svatební floristika",
    tag: "Na míru",
    desc: "Kytice pro nevěstu, ozdoba auta i výzdoba sálu. Sladíme všechno do jednoho tónu a jedné barevné linie.",
  },
  {
    n: "05",
    name: "Rozvoz po Ústí",
    tag: "Doprava",
    desc: "Doručíme na adresu v Ústí nad Labem i blízkém okolí — čerstvé, převázané a načas na daný den.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <div className="wordmark" aria-label="Flamengo květiny">
        <span className="wordmark-name">
          Flameng<span className="wordmark-bloom">o</span>
        </span>
        <span className="wordmark-sub">květiny · Ústí nad Labem</span>
      </div>

      <header className="hero">
        <svg
          className="stem"
          viewBox="0 0 240 520"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="xMidYMax meet"
        >
          <path
            className="stem-path"
            pathLength={1}
            d="M118 12 C 58 66, 58 156, 132 188 C 206 220, 202 312, 120 348 C 60 374, 72 448, 122 502"
            stroke="#ec5f74"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <g className="stem-bloom">
            <circle cx={122} cy={502} r={13} fill="#ec5f74" />
            <circle cx={122} cy={502} r={5} fill="#f6d4dc" />
          </g>
        </svg>

        <div className="hero-inner">
          <p className="eyebrow">Květinářství &middot; od roku 2021</p>
          <h1 className="hero-title">
            <span className="hero-line">Květiny</span>
            <span className="hero-line hero-line--muted">pro vaši</span>
            <WordSwap />
          </h1>
          <p className="lead">
            Malé květinářství v Ústí nad Labem. Vážeme z toho, co právě kvete, a
            doručíme čerstvé tam, kde má někdo udělat radost.
          </p>
          <div className="actions">
            <a className="btn btn--primary" href="#nabidka">
              Objednat kytici
            </a>
            <a className="btn btn--ghost" href="#prodejna">
              Kde nás najdete
            </a>
          </div>
        </div>
      </header>

      <section className="section section--catalog" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Herbář nabídky</p>
          <h2 className="section-title" id="nabidka-h">
            Pět věcí, které umíme nejlíp
          </h2>
          <p className="section-note">
            Katalog jako specimenový arch — každá položka má své číslo a poctivý
            popis. Nic víc vám neslibujeme, než co skutečně uvážeme.
          </p>
        </div>

        <ol className="specimens">
          {specimens.map((s) => (
            <li className="specimen" key={s.n}>
              <span className="specimen-num" aria-hidden="true">
                {s.n}
              </span>
              <div className="specimen-body">
                <div className="specimen-head">
                  <h3 className="specimen-name">{s.name}</h3>
                  <span className="tag">{s.tag}</span>
                </div>
                <p className="specimen-desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--trust" id="prodejna" aria-labelledby="trust-h">
        <div className="trust-grid">
          <div className="trust-lead">
            <p className="eyebrow">Proč zrovna my</p>
            <h2 className="section-title section-title--light" id="trust-h">
              Květinářství, které pozná, co k sobě patří
            </h2>
            <p className="trust-text">
              Jsme rodinné květinářství v Ústí nad Labem. Nemáme sto poboček ani
              regál s hotovými kyticemi z lednice. Máme čerstvé květiny, nůžky a
              floristy, kteří vám kytici uváží před očima a řeknou, jak o ni pečovat.
            </p>
            <ul className="claims">
              <li className="claim">
                <span className="claim-k">Vázáno floristy</span>
                <span className="claim-v">Každá kytice ručně, ne z automatu.</span>
              </li>
              <li className="claim">
                <span className="claim-k">Vždy čerstvé</span>
                <span className="claim-v">Nakupujeme sezónně, prodáváme rychle.</span>
              </li>
              <li className="claim">
                <span className="claim-k">Záruka kvality</span>
                <span className="claim-v">Nespokojenost řešíme, ne přehlížíme.</span>
              </li>
            </ul>
          </div>

          <aside className="store-card" aria-label="Naše prodejna">
            <p className="store-label">Naše prodejna</p>
            <p className="store-addr">
              Ukázková 123
              <br />
              Ústí nad Labem
            </p>
            <dl className="store-meta">
              <div>
                <dt>Telefon</dt>
                <dd>—</dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>—</dd>
              </div>
            </dl>
            <p className="store-note">
              Zastavte se pro kytici osobně, nebo si domluvte rozvoz na konkrétní
              den. Rádi poradíme, co se k příležitosti hodí.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
