const services = [
  {
    n: "01",
    title: "Firemní identita",
    lead: "Pomůžeme vám zjistit, kdo doopravdy jste — a dát tomu tvar, který si lidé zapamatují.",
  },
  {
    n: "02",
    title: "Webová prezentace",
    lead: "Kreativně vás představíme veřejnosti. UX, SEO, copywriting a konverze, ve kterých se nikdo neztratí.",
  },
  {
    n: "03",
    title: "Reklama a marketing",
    lead: "Nápadu vždycky předchází výzkum cílové skupiny. Výsledkem je reklama originální, srozumitelná a účinná.",
  },
  {
    n: "04",
    title: "Public relations",
    lead: "Dobré vztahy stojí na důvěře, z důvěry pramení pochopení. To za vás budujeme s veřejností každý den.",
  },
];

function Plate() {
  return (
    <svg
      className="plate"
      viewBox="0 0 600 440"
      role="img"
      aria-labelledby="plate-title plate-desc"
    >
      <title id="plate-title">Metabolický diagram značky</title>
      <desc id="plate-desc">
        Jedna žláza se čtyřmi vývody: identita, web, reklama a public relations.
      </desc>

      <g className="gland">
        <path
          className="gland__fill"
          d="M70 250 C60 190 130 158 205 172 C265 183 320 205 372 208 C412 210 434 232 424 258 C408 292 352 292 300 281 C242 269 186 262 132 270 C96 275 78 292 70 250 Z"
        />
        <path
          className="gland__duct"
          d="M96 252 C170 240 262 240 344 240 C382 240 404 244 420 252"
        />
        <path className="gland__acinus" d="M140 232 q10 -14 20 0" />
        <path className="gland__acinus" d="M186 236 q10 -14 20 0" />
        <path className="gland__acinus" d="M232 236 q10 -14 20 0" />
        <path className="gland__acinus" d="M278 236 q10 -14 20 0" />
        <path className="gland__acinus" d="M324 236 q10 -14 20 0" />
        <path className="gland__acinus" d="M162 258 q10 14 20 0" />
        <path className="gland__acinus" d="M208 260 q10 14 20 0" />
        <path className="gland__acinus" d="M254 260 q10 14 20 0" />
        <path className="gland__acinus" d="M300 258 q10 14 20 0" />
      </g>

      <g className="callout c1">
        <path className="leader" pathLength={1} d="M300 200 C360 140 430 96 508 82" />
        <circle className="node" cx={508} cy={82} r={7} />
        <text className="cl-num" x={524} y={72}>01</text>
        <text className="cl-name" x={524} y={94}>Identita</text>
      </g>

      <g className="callout c2">
        <path className="leader" pathLength={1} d="M344 224 C410 200 460 178 508 168" />
        <circle className="node" cx={508} cy={168} r={7} />
        <text className="cl-num" x={524} y={158}>02</text>
        <text className="cl-name" x={524} y={180}>Web</text>
      </g>

      <g className="callout c3">
        <path className="leader" pathLength={1} d="M360 258 C420 268 464 274 508 278" />
        <circle className="node" cx={508} cy={278} r={7} />
        <text className="cl-num" x={524} y={268}>03</text>
        <text className="cl-name" x={524} y={290}>Reklama</text>
      </g>

      <g className="callout c4">
        <path className="leader" pathLength={1} d="M300 278 C360 320 430 356 508 366" />
        <circle className="node" cx={508} cy={366} r={7} />
        <text className="cl-num" x={524} y={356}>04</text>
        <text className="cl-name" x={524} y={378}>PR</text>
      </g>
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <div className="duct-line" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark wordmark--sm" href="#" aria-label="PANKREA, úvodní stránka">
          PANKREA<span className="pan-s">s</span>
        </a>
        <p className="topbar__meta">Reklamní agentura · Hradec&nbsp;Králové</p>
        <a className="topbar__phone" href="tel:+420608318151">+420&nbsp;608&nbsp;318&nbsp;151</a>
      </header>

      <section className="section hero" aria-labelledby="hero-title">
        <div className="hero__col hero__text">
          <p className="eyebrow">Diagnóza vaší značky</p>
          <h1 id="hero-title" className="wordmark wordmark--xl">
            PANKREA<span className="pan-s">s</span>
          </h1>
          <p className="hero__thesis">
            Ovlivňujeme vaši marketingovou komunikaci{" "}
            <em>stejně jako pankreas ovlivňuje&nbsp;metabolismus</em> —
            v malých dávkách, přesně načasovaně, a je hned znát rozdíl.
          </p>
          <p className="hero__sub">
            Společnost mladých kreativců a odborníků z Hradce Králové. Jedna žláza,
            čtyři sekrece: identita, web, reklama a PR.
          </p>
        </div>

        <div className="hero__col hero__plate">
          <Plate />
          <p className="plate__caption">
            Obr. 1 — metabolický diagram značky. Čtyři vývody, jedna žláza.
          </p>
        </div>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="services__head">
          <p className="eyebrow eyebrow--amber">Co děláme</p>
          <h2 id="services-title" className="h2">Čtyři sekrece jedné žlázy</h2>
          <p className="lede">
            Každá služba je jedna sekrece — vzniká ve žláze značky a proudí dál do
            vašeho marketingového metabolismu. Berete je společně, protože se navzájem
            posilují.
          </p>
        </div>

        <ol className="secretions">
          {services.map((s) => (
            <li key={s.n} className="secretion">
              <span className="secretion__node" aria-hidden="true" />
              <span className="secretion__n">{s.n}</span>
              <div className="secretion__body">
                <h3 className="secretion__title">{s.title}</h3>
                <p className="secretion__lead">{s.lead}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div className="about__grid">
          <div className="about__lead">
            <p className="eyebrow eyebrow--coral">Kdo jsme</p>
            <h2 id="about-title" className="h2">
              Mladí kreativci a odborníci, kteří se spojili kvůli jedné věci —
              originalitě.
            </h2>
            <p className="about__para">
              Vytvoříme vám jedinečnou firemní identitu, ukážeme ji veřejnosti
              formou precizní webové prezentace a pak už jen kreativně ovlivňujeme
              vaši komunikaci. Považujeme se za specialistu i partnera v online
              marketingu — ne za dodavatele šablon.
            </p>
          </div>

          <ul className="trust">
            <li className="trust__item">
              <span className="trust__k">Důvěra</span>
              <span className="trust__v">
                Dobrý vztah vždy stojí na důvěře. Z ní pramení pochopení toho, proč
                tu jste a jaký má vaše podnikání smysl.
              </span>
            </li>
            <li className="trust__item">
              <span className="trust__k">Výzkum napřed</span>
              <span className="trust__v">
                Reklamní myšlence u nás vždy předchází výzkum potřeb a myšlení cílové
                skupiny. Nápad není náhoda.
              </span>
            </li>
            <li className="trust__item">
              <span className="trust__k">Vše pod jednou žlázou</span>
              <span className="trust__v">
                Identita, web, reklama i PR z jednoho místa — ladí spolu, protože
                vznikají spolu.
              </span>
            </li>
          </ul>
        </div>

        <dl className="facts">
          <div className="fact">
            <dt className="fact__k">Ordinace</dt>
            <dd className="fact__v">Horova 36/29<br />500&nbsp;02 Hradec Králové</dd>
          </div>
          <div className="fact">
            <dt className="fact__k">Volejte PANKREAtivce</dt>
            <dd className="fact__v">
              <a href="tel:+420608318151">+420&nbsp;608&nbsp;318&nbsp;151</a>
            </dd>
          </div>
          <div className="fact">
            <dt className="fact__k">Obor</dt>
            <dd className="fact__v">Kreativní PR &amp; reklamní agentura</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
