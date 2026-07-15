import { AiImage } from "./_ui";
import { Counter } from "./motion";

const NABIDKA = [
  {
    parcel: "PARC. Č. 3472/1",
    kind: "Byty",
    lead: "Prodej i pronájem bytů v Plzni a okolí — od garsoniér na Borech po mezonety v centru.",
    plocha: "1+kk až 4+1",
    img: "Interior of a bright renovated Czech apartment in Plzen, wooden floors, tall windows, minimal furniture, warm daylight",
    alt: "Světlý zrekonstruovaný byt v Plzni"
  },
  {
    parcel: "PARC. Č. 3472/2",
    kind: "Domy",
    lead: "Rodinné domy, vily a novostavby v Plzeňském kraji — včetně pozemků k výstavbě.",
    plocha: "pozemky 400–2 000 m²",
    img: "Modern family villa with clay roof tiles in a Czech countryside near Plzen, garden, late afternoon light",
    alt: "Rodinná vila v okolí Plzně"
  },
  {
    parcel: "PARC. Č. 3472/3",
    kind: "Zemědělské objekty",
    lead: "Pole, statky a hospodářské budovy — segment, který v Plzeňském kraji známe nejlépe.",
    plocha: "orná půda i stavby",
    img: "Traditional Czech farmstead with barn and agricultural land, fields, Plzen region rural landscape, overcast day",
    alt: "Statek a zemědělské pozemky v Plzeňském kraji"
  }
];

const REFERENCE = [
  {
    text: "Pomohli nám několikrát s vystěhováním neplatících nájemníků. Nad očekávání!",
    who: "P. Klíma",
    tag: "SPRÁVA"
  },
  {
    text: "Prodej bytu — spokojenost, bez problémů. Doporučuji.",
    who: "H. Pecková",
    tag: "PRODEJ"
  },
  {
    text: "Na zástupce této společnosti jsme se vždy mohli 100% spolehnout — i po realizaci obchodu se nám s ochotou snažili pomoci.",
    who: "R. Malátná",
    tag: "PRODEJ"
  },
  {
    text: "Radka je už léta naše dvorní makléřka. Na čem jsme se domluvili, to platilo.",
    who: "M. Suchý",
    tag: "PRONÁJEM"
  }
];

function Wordmark() {
  return (
    <span className="wordmark" aria-label="ZOKE">
      <span>Z</span>
      <span className="o-plot" aria-hidden="true">
        <i className="o-tick o-tl" />
        <i className="o-tick o-tr" />
        <i className="o-tick o-bl" />
        <i className="o-tick o-br" />
        <i className="o-point" />
      </span>
      <span>K</span>
      <span>E</span>
    </span>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <Wordmark />
        <span className="topbar-meta">REALITNÍ KANCELÁŘ · PLZEŇ</span>
      </header>

      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <svg className="hero-boundary" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect x="0.6" y="0.6" width="98.8" height="98.8" pathLength={1} />
        </svg>
        <i className="tick tick-tl" aria-hidden="true" />
        <i className="tick tick-tr" aria-hidden="true" />
        <i className="tick tick-bl" aria-hidden="true" />
        <i className="tick tick-br" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">k.ú. PLZEŇ · PRODEJ — PRONÁJEM — SPRÁVA</p>
            <h1 id="hero-title" className="hero-title">
              Realitní partner, který zná každou hranici
              <span className="hl"> pozemku v Plzni.</span>
            </h1>
            <p className="hero-lead">
              Byty, domy a zemědělské objekty v Plzni a Plzeňském kraji.
              Patňáct let měříme trh do detailu — poctivě a osobně, jako by šlo o naši vlastní nemovitost.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420725679535">Zavolat makléřce</a>
              <a className="btn btn-ghost" href="#nabidka">Prohlédnout nabídku</a>
            </div>
          </div>

          <aside className="survey-stamp" aria-label="Údaje kanceláře">
            <div className="stamp-row"><span>K.Ú.</span><b>Plzeň &amp; kraj</b></div>
            <div className="stamp-row"><span>VÝMĚRA PRAXE</span>
              <b><Counter to={15} /> let</b>
            </div>
            <div className="stamp-row"><span>SEGMENTY</span><b>byty · domy · půda</b></div>
            <div className="stamp-row"><span>SÍDLO</span><b>Tylova 473/27</b></div>
            <div className="stamp-note">ZÁMĚR OVĚŘEN · RÁMEC UZAMČEN</div>
          </aside>
        </div>
      </section>

      {/* NABÍDKA */}
      <section className="section" id="nabidka" aria-labelledby="nabidka-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">CO ZAMĚŘUJEME</p>
            <h2 id="nabidka-title" className="sec-title">Tři parcely našeho řemesla</h2>
            <p className="sec-sub">
              Každý typ nemovitosti má vlastní pravidla, kupce i papírování.
              Vedeme vás všemi třemi.
            </p>
          </div>

          <div className="plots">
            {NABIDKA.map((it) => (
              <article className="plot" key={it.parcel}>
                <i className="p-tick p-tl" aria-hidden="true" />
                <i className="p-tick p-tr" aria-hidden="true" />
                <i className="p-tick p-bl" aria-hidden="true" />
                <i className="p-tick p-br" aria-hidden="true" />
                <div className="plot-figure">
                  <AiImage prompt={it.img} alt={it.alt} className="plot-img" />
                  <span className="plot-parcel">{it.parcel}</span>
                </div>
                <div className="plot-body">
                  <h3 className="plot-kind">{it.kind}</h3>
                  <p className="plot-lead">{it.lead}</p>
                  <p className="plot-plocha">{it.plocha}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="section section-ink" id="o-nas" aria-labelledby="onas-title">
        <div className="wrap">
          <div className="trust-grid">
            <div className="trust-lead">
              <p className="eyebrow eyebrow-light">O NÁS · OD 2009</p>
              <h2 id="onas-title" className="sec-title sec-title-light">
                Zdravý a poctivý realitní trh — zaměřeno na Plzeňský kraj.
              </h2>
              <p className="trust-text">
                ZOKE se od začátku zabývá prodejem a pronájmem bytů, domů
                a zemědělských objektů v Plzni a okolí. Víme, že každý klient
                má své požadavky, a proto klademe důraz i na ty nejmenší detaily
                — co si dohodneme, to platí.
              </p>

              <dl className="values">
                <div className="value">
                  <dt>Naše vize</dt>
                  <dd>Lepší prostředí pro zdravý a poctivý realitní trh.</dd>
                </div>
                <div className="value">
                  <dt>Naše hodnoty</dt>
                  <dd>Kroky pečlivě plánujeme a držíme dané slovo. Pravidla i morálka na prvním místě.</dd>
                </div>
                <div className="value">
                  <dt>Přesah</dt>
                  <dd>Vcítíme se do přání druhé strany a snažíme se předčít očekávání.</dd>
                </div>
              </dl>

              <ul className="stats" aria-label="Čísla kanceláře">
                <li>
                  <span className="stat-num"><Counter to={15} /></span>
                  <span className="stat-lab">let na trhu</span>
                </li>
                <li>
                  <span className="stat-num"><Counter to={800} />+</span>
                  <span className="stat-lab">realizovaných obchodů</span>
                </li>
                <li>
                  <span className="stat-num">3</span>
                  <span className="stat-lab">segmenty nemovitostí</span>
                </li>
              </ul>
            </div>

            <div className="refs">
              <p className="refs-label">REFERENCE — ZAPSÁNO KLIENTY</p>
              {REFERENCE.map((r) => (
                <figure className="ref" key={r.who}>
                  <span className="ref-tag">{r.tag}</span>
                  <blockquote>{r.text}</blockquote>
                  <figcaption>— {r.who}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
