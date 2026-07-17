const services = [
  {
    code: "S.01",
    title: "Generální dodávka staveb",
    desc: "Celý rozsah pozemního stavitelství vedeme jako jeden zodpovědný partner — od převzetí staveniště po předání a kolaudaci.",
  },
  {
    code: "S.02",
    title: "Průmysl, sklady a obchod",
    desc: "Výrobní a skladové haly, prodejní a servisní areály. Rychlá výstavba s jasně stanoveným termínem i rozpočtem.",
  },
  {
    code: "S.03",
    title: "Občanské a veřejné stavby",
    desc: "Školy a školky, domovy důchodců, stavby pro zdravotnictví, sport a výcvik — včetně citlivých rekonstrukcí.",
  },
  {
    code: "S.04",
    title: "Bydlení a development",
    desc: "Bytové domy a developerské projekty od prvního výkopu po klíče v ruce.",
  },
  {
    code: "S.05",
    title: "Design & Build",
    desc: "Návrh i realizaci vedeme pod jednou smlouvou. Jeden dodavatel, jedna odpovědnost, jedna cena.",
  },
  {
    code: "S.06",
    title: "Projektování a inženýring",
    desc: "Projektová dokumentace včetně inženýrské činnosti, povolení a odpovědného záručního i pozáručního servisu.",
  },
];

const projects = [
  { coord: "A1", year: "2025", type: "Školství", name: "Dostavba pavilonu C2 a přírodní učebny, ZŠ Opatovice nad Labem" },
  { coord: "A2", year: "2025", type: "Školství", name: "Stavební úpravy MŠ Konecchlumí" },
  { coord: "B1", year: "2025", type: "Rekonstrukce", name: "Požární zbrojnice Dašice — adaptace bývalých kasáren" },
  { coord: "B2", year: "2025", type: "Bydlení", name: "Vrchlabí, Krkonošská 272 — rekonstrukce, vestavba družiny, snížení energetické náročnosti" },
  { coord: "C1", year: "2026", type: "Občanská stavba", name: "Výstavba budovy „C“, Pravy" },
  { coord: "C2", year: "2026", type: "Průmysl", name: "Novostavba výrobní haly Katring, Mochov" },
];

const scope = [
  "administrativní budovy",
  "bydlení",
  "sport a výcvik",
  "domovy důchodců",
  "výrobní haly",
  "prodejní areály",
  "sklady",
  "školy a školky",
  "zdravotnictví",
  "zemědělství",
];

export default function Page() {
  return (
    <main className="page">
      <div className="setout" aria-hidden="true">
        <span className="axis axis-a" style={{ left: "11%" }}>
          <span className="bubble">A</span>
        </span>
        <span className="axis axis-b" style={{ left: "39%" }}>
          <span className="bubble">B</span>
        </span>
        <span className="axis axis-c" style={{ left: "63%" }}>
          <span className="bubble">C</span>
        </span>
        <span className="axis axis-d" style={{ left: "89%" }}>
          <span className="bubble">D</span>
        </span>
      </div>

      <header className="hero block">
        <div className="wrap">
          <nav className="nav" aria-label="Hlavní">
            <a className="wordmark" href="#uvod">
              <span className="datum" aria-hidden="true" />
              STYLBAU
              <span className="wm-suffix">s.r.o.</span>
            </a>
            <ul className="nav-links">
              <li><a href="#sluzby">Co stavíme</a></li>
              <li><a href="#reference">Reference</a></li>
              <li><a className="nav-tel" href="tel:+420495401102">495&nbsp;401&nbsp;102</a></li>
            </ul>
          </nav>

          <div className="hero-body" id="uvod">
            <div className="hero-head">
              <p className="eyebrow reveal r1">
                <span className="tick">±0,000</span> Generální dodavatel · Hradec&nbsp;Králové
              </p>
              <h1 className="headline">
                <span className="h-line"><span>Spolehlivý</span></span>
                <span className="h-line"><span className="brick">generální dodavatel</span></span>
                <span className="h-line"><span>pozemních staveb.</span></span>
              </h1>
              <p className="lead reveal r2">
                Realizujeme celý rozsah pozemního stavitelství v Královéhradeckém kraji — od výrobních
                hal a škol po bydlení. Sehraný tým, jasný rozpočet, odpovědný servis.
              </p>
              <div className="cta-row reveal r3">
                <a className="btn btn-primary" href="tel:+420495401102">Zavolat 495&nbsp;401&nbsp;102</a>
                <a className="btn btn-ghost" href="#reference">Prohlédnout stavby</a>
              </div>
            </div>

            <aside className="titleblock reveal r3" aria-label="Titulní razítko">
              <p className="tb-head">Titulní razítko</p>
              <dl className="tb-rows">
                <div><dt>Zhotovitel</dt><dd>STYLBAU, s.r.o.</dd></div>
                <div><dt>Sídlo</dt><dd>Hradec Králové</dd></div>
                <div><dt>Stupeň</dt><dd>Generální dodávka</dd></div>
                <div><dt>Obor</dt><dd>Pozemní stavitelství</dd></div>
                <div><dt>Systém</dt><dd>Design &amp; Build</dd></div>
                <div><dt>Telefon</dt><dd>+420 495 401 102</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </header>

      <section className="block block-light" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-mark"><span className="sec-bubble">B</span> 02 · Rozsah dodávky</p>
            <h2 className="sec-title" id="sluzby-nadpis">Co pro vás postavíme</h2>
          </div>
          <div className="svc-list">
            {services.map((s) => (
              <article className="svc" key={s.code}>
                <span className="svc-code">{s.code}</span>
                <div className="svc-body">
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="reference" aria-labelledby="ref-nadpis">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-mark light"><span className="sec-bubble">C</span> 03 · Poslední stavby</p>
            <h2 className="sec-title light" id="ref-nadpis">Zakázky vytyčené v terénu</h2>
            <p className="sec-intro">
              Každou stavbu vedeme od výkresu po předání. Výběr dokončených zakázek z posledního období —
              každá „vytyčena“ na naší síti a označena souřadnicí a rokem realizace.
            </p>
          </div>

          <ul className="scope-row" aria-label="Typy staveb">
            {scope.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="ref-grid">
            {projects.map((p) => (
              <article className="ref-card" key={p.coord} tabIndex={0}>
                <div className="ref-top">
                  <span className="ref-year">{p.year}</span>
                  <span className="ref-type">{p.type}</span>
                </div>
                <h3 className="ref-name">{p.name}</h3>
                <span className="ref-coord" aria-hidden="true">
                  <span className="crosshair">⌖</span> SET-OUT {p.coord}
                </span>
              </article>
            ))}
          </div>

          <p className="ref-foot">
            Sehraný tým zkušených a kvalifikovaných odborníků. Odpovědný záruční i pozáruční servis —
            stavíme tak, aby stavba držela déle než záruka.
          </p>
        </div>
      </section>
    </main>
  );
}
