import type { CSSProperties } from "react";

const services = [
  {
    code: "SDK",
    name: "Sádrokartonové příčky",
    desc: "Dělící stěny na míru — od jednoduché příčky po zvukově izolovanou stěnu mezi ložnicí a obývákem. CW/UW profily, minerální vata, dvojité opláštění tam, kde je potřeba klid.",
    detail: "tl. 75–150 mm"
  },
  {
    code: "PDH",
    name: "Podhledy a stropy",
    desc: "Rovné podhledy, které schovají vzduchotechniku a rozvody, i kazetové stropy do kanceláří. Připravíme prostupy pro bodovky a LED pásky ještě před zaklopením.",
    detail: "vč. osvětlení"
  },
  {
    code: "NIK",
    name: "Niky, obklady a police",
    desc: "Sádrokartonové niky do koupelny, obklad instalačních šachet, police a předstěny za WC. Do vlhka zelená impregnovaná deska, do krbů růžová protipožární.",
    detail: "zelená / růžová deska"
  },
  {
    code: "AKU",
    name: "Akustické a protipožární konstrukce",
    desc: "Tam, kde je hluk od sousedů nebo požadavek požární odolnosti — vícevrstvé opláštění, akustické desky, tmelení spár na Q3 pro čistý povrch pod malbu.",
    detail: "finiš Q2–Q4"
  }
];

const projects = [
  {
    place: "Praha 10 — Hostivař",
    what: "Podhled s bodovým osvětlením v koupelně po změně dispozice, předstěna pro závěsné WC."
  },
  {
    place: "Praha 4 — Nusle",
    what: "Zaklopení stropů a příčky v bytě 100 m², příprava pro obklady a dlažbu v koupelně a WC."
  },
  {
    place: "Praha 6",
    what: "Akustická příčka mezi ložnicí a obývacím pokojem, sádrokartonové niky v koupelně."
  }
];

const layers = [
  { n: "01", label: "UW/CW profil", note: "pozinkovaný rošt, kotvený do podlahy i stropu" },
  { n: "02", label: "Minerální vata", note: "akustická a tepelná výplň mezi profily" },
  { n: "03", label: "SDK deska", note: "opláštění — bílá, zelená do vlhka, růžová do ohně" },
  { n: "04", label: "Tmel + páska", note: "přebroušené spáry, hladký povrch pod malbu" }
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="AvantStav — sádrokartonářské práce Praha">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-slab" />
            <span className="brand-slab" />
          </span>
          <span className="brand-word">Avant<span className="brand-word-light">Stav</span></span>
        </a>
        <a className="topcall" href="tel:+420732672368">
          <span className="topcall-label">Zavolat</span>
          <span className="topcall-num">+420 732 672 368</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Rozestavěná sádrokartonová příčka s pozinkovaným roštem a bílými deskami v pražském bytě"
            className="hero-img"
          />
          <span className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Sádrokartonář · Praha · od profilu po hladkou stěnu</p>
          <h1 className="hero-title">
            Rovná stěna<br />
            <span className="hero-title-accent">za pár dní.</span>
          </h1>
          <p className="hero-lead">
            AvantStav staví příčky, podhledy a niky ze sádrokartonu po celé Praze.
            Přijedeme, zaměříme a odejdeme, když je povrch hladký a připravený na malbu —
            bez nepořádku, který byste po nás museli uklízet.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420732672368">Zavolat a domluvit termín</a>
            <a className="btn btn-ghost" href="mailto:avantstav@post.cz?subject=Poptávka%20sádrokartonu">Napsat e-mail</a>
          </div>
        </div>

        <aside className="hero-layers" aria-label="Z čeho se skládá naše stěna">
          <p className="hero-layers-head">Řez stěnou</p>
          <ol className="layer-list">
            {layers.map((l) => (
              <li className="layer" key={l.n}>
                <span className="layer-n">{l.n}</span>
                <span className="layer-body">
                  <span className="layer-label">{l.label}</span>
                  <span className="layer-note">{l.note}</span>
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Co pro vás uděláme</p>
          <h2 className="section-title" id="services-title">
            Čtyři věci, které umíme do detailu
          </h2>
          <p className="section-sub">
            Děláme jen sádrokarton — a právě proto ho děláme pořádně. Každou zakázku
            vedeme od zaměření po přebroušené spáry vlastními lidmi a vlastním nářadím.
          </p>
        </div>

        <ul className="svc-grid">
          {services.map((s) => (
            <li className="svc" key={s.code}>
              <span className="svc-code" aria-hidden="true">{s.code}</span>
              <div className="svc-body">
                <h3 className="svc-name">{s.name}</h3>
                <p className="svc-desc">{s.desc}</p>
                <span className="svc-detail">{s.detail}</span>
              </div>
            </li>
          ))}
        </ul>

        <figure className="svc-figure">
          <img
            src="/section-1.webp"
            alt="Hotový sádrokartonový podhled s bodovým osvětlením v pražském bytě"
            className="svc-figure-img"
          />
          <figcaption className="svc-figure-cap">
            Podhled s bodovkami — rozvody schované, světlo přesně tam, kde má být.
          </figcaption>
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-grid">
          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Detail zatmelené a přebroušené spáry mezi sádrokartonovými deskami"
              className="trust-figure-img"
            />
          </figure>

          <div className="trust-body">
            <p className="eyebrow eyebrow-dark">O firmě</p>
            <h2 className="section-title" id="trust-title">
              Vede nás Oleksandr — a bere to osobně
            </h2>
            <p className="trust-text">
              „Do bytu, kde bydlíte, vejdu jako k sobě domů. Zakryju podlahu, odsávám prach
              přímo od brusky a to, co po nás zůstane, je rovná stěna a čistá místnost —
              ne stavební nepořádek.“
            </p>
            <p className="trust-sign">Oleksandr Yureskul — jednatel AvantStav s.r.o.</p>

            <ul className="trust-facts">
              <li className="fact">
                <span className="fact-k">Kde stavíme</span>
                <span className="fact-v">Praha a okolí — přijedeme i na obhlídku zdarma</span>
              </li>
              <li className="fact">
                <span className="fact-k">Sídlo</span>
                <span className="fact-v">Rubeška 393/7, Praha 9, 190 00</span>
              </li>
              <li className="fact">
                <span className="fact-k">IČ</span>
                <span className="fact-v">27166732 · plátce DPH</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="projects">
          <h3 className="projects-title">Vybrané zakázky</h3>
          <ul className="proj-list">
            {projects.map((p) => (
              <li className="proj" key={p.place}>
                <span className="proj-place">{p.place}</span>
                <span className="proj-what">{p.what}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
