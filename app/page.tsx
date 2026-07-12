import React from "react";

const obor = [
  {
    idx: "01 / BYTOVÁ",
    h: "Bytová výstavba",
    p: "Bytové a rodinné domy, ubytovací zařízení. Novostavby i rekonstrukce od základů po klíč.",
    tag: "Novostavba · rekonstrukce",
  },
  {
    idx: "02 / PRŮMYSL",
    h: "Průmyslová výstavba",
    p: "Výrobní haly, plynové kotelny a menší průmyslové celky s vlastní mechanizací.",
    tag: "Haly · kotelny",
  },
  {
    idx: "03 / OBČANSKÁ",
    h: "Občanská výstavba",
    p: "Obchodní centra, administrativní a veřejné budovy. Zkušenost i s objekty pro kraj.",
    tag: "Veřejné · komerční",
  },
  {
    idx: "04 / PROJEKT",
    h: "Projektová dokumentace",
    p: "Zajistíme komplexnost díla včetně projektu — od studie po realizaci pod jednou střechou.",
    tag: "Projekt · developing",
  },
];

const reference = [
  { name: "Rekonstrukce a nástavba budovy ZZS OK", meta: "Olomouc · pro kraj" },
  { name: "Bytové domy Balbínova", meta: "Olomouc" },
  { name: "Rodinné domy Týneček", meta: "Olomouc" },
  { name: "Rodinný dům Tovéř", meta: "okr. Olomouc" },
  { name: "Atrium Prostějov", meta: "Prostějov" },
];

export default function Page() {
  return (
    <>
      <header className="top">
        <div className="top-in">
          <div className="mark">
            <b>K—</b>
            <span>STAV</span>
            <span className="mark-est">Olomouc · od 1992</span>
          </div>
          <nav aria-label="Hlavní">
            <a href="#nabidka">Nabídka</a>
            <a href="#realizace">Realizace</a>
            <a href="#onas">O firmě</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Rozestavěná pozemní stavba K-stav v Olomouci — hrubá stavba s bedněním a výztuží"
        />
        <div className="hero-in">
          <p className="hero-eyebrow rise">Pozemní stavby · Olomouc a okolí</p>
          <h1 className="rise d1">
            Stavíme,
            <br />
            co <em>vydrží</em>.
            <span className="yr">
              Bytové, občanské i průmyslové stavby na klíč — už od roku 1992.
            </span>
          </h1>
          <p className="hero-lead rise d2">
            Vlastní doprava, mechanizace, pažení a bednění. Řídíme celé dílo od
            projektu po předání — bez subdodavatelských výmluv.
          </p>
          <div className="hero-cta rise d3">
            <a className="btn btn-solid" href="#nabidka">
              Prohlédnout nabídku
            </a>
            <a className="btn btn-ghost" href="tel:+420585413874">
              Zavolat 585 413 874
            </a>
          </div>
        </div>
      </section>

      <div className="rule" aria-label="Firma v číslech">
        <div className="rule-in">
          <div className="tick">
            <div className="n">1992</div>
            <div className="l">Stavíme od roku</div>
          </div>
          <div className="tick">
            <div className="n">30+</div>
            <div className="l">Let na trhu</div>
          </div>
          <div className="tick">
            <div className="n">Vlastní</div>
            <div className="l">Mechanizace i bednění</div>
          </div>
          <div className="tick">
            <div className="n">A.s.</div>
            <div className="l">Sídlo v Olomouci</div>
          </div>
        </div>
      </div>

      <section className="sec" id="nabidka">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Nabídka — <span>čtyři obory, jedno dílo na klíč</span></p>
            <h2>Co pro vás postavíme</h2>
            <p className="sec-sub">
              Zaměřujeme se na pozemní stavby — novostavby i rekonstrukce. Na
              přání zajistíme komplexnost celého díla včetně projektové
              dokumentace.
            </p>
          </div>
          <div className="grid">
            {obor.map((o) => (
              <article className="card" key={o.h}>
                <div className="idx">{o.idx}</div>
                <h3>{o.h}</h3>
                <p>{o.p}</p>
                <div className="tag">{o.tag}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec trust" id="onas">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">O firmě — <span>proč K-stav</span></p>
            <h2>Řemeslo, které <br />si za sebe ručí</h2>
          </div>
          <div className="split">
            <div className="trust-copy">
              <p>
                Od začátku se soustředíme na pozemní stavby — <b>bytové,
                občanské a menší průmyslové celky</b>. Novostavby i
                rekonstrukce vedeme jako jeden tým.
              </p>
              <p>
                Disponujeme vlastním vybavením: dopravou, mechanizací, pažením a
                bedněním, výtahy, vrátky, míchačkami, kompresory i vibračními
                pěchy. Díky tomu <b>pracujeme rychle a bez čekání na cizí
                techniku</b>.
              </p>
              <p>
                Filozofie je prostá — neustále zvyšovat kvalitu a efektivitu
                práce tak, aby zákazník zůstal spokojený i roky po předání.
              </p>

              <p className="kicker" style={{ marginTop: 34 }} id="realizace">
                Vybrané realizace v Olomouci a okolí
              </p>
              <ul className="refs">
                {reference.map((r) => (
                  <li key={r.name}>
                    <span className="name">{r.name}</span>
                    <span className="meta">{r.meta}</span>
                  </li>
                ))}
              </ul>
              <p className="trust-note">
                Sídlo: U Panelárny 588/7, 779 00 Olomouc · <b>info@k-stav.cz</b> ·
                <b> 585 413 874</b>
              </p>
            </div>

            <figure className="trust-fig">
              <img
                src="/section-1.webp"
                alt="Dokončená realizace K-stav — bytový dům v Olomouci"
              />
              <figcaption>
                Realizace K-stav — Olomouc a okolí
              </figcaption>
              <img
                src="/section-2.webp"
                alt="Rodinné domy postavené firmou K-stav v okolí Olomouce"
                style={{ marginTop: 16 }}
              />
              <figcaption>
                Rodinné domy — Týneček / Tovéř
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
