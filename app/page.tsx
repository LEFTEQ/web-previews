import React from "react";

export default function Page() {
  const specs = [
    { code: "±0,02", unit: "mm", label: "typická tolerance přípravku" },
    { code: "2010", unit: "", label: "děláme to už od roku" },
    { code: "1", unit: "", label: "jeden člověk vede celý projekt" },
  ];

  const sluzby = [
    {
      num: "01",
      title: "Konstrukce",
      lead: "Navrhneme přípravek dřív, než se udělá první tříska.",
      body:
        "Kontrolní, měřicí a zkušební přípravky, montážní přípravky, díly jednoúčelových strojů, formy pro vakuové tvarování plastů i závěsy pro lakovací linky. Máme za sebou vakuově tvarované díly a jejich sestavy pro kabiny zemědělských a stavebních strojů — včetně pohledových dílů.",
    },
    {
      num: "02",
      title: "Výroba",
      lead: "Od CAD dat po přípravek, který u vás na dílně sedí.",
      body:
        "Vyrábíme kontrolní, měřicí a zkušební přípravky. Řešíme kontrolu a měření zejména plastových interiérových a exteriérových dílů a sestav pro automotive. První sadu měřicích přípravků jsme dodali už v prvním čtvrtletí 2012.",
    },
    {
      num: "03",
      title: "3D tisk",
      lead: "Volná kapacita FDM tiskáren — PLA, PVB, PET, Flexi.",
      body:
        "Tiskneme podle vašich CAD dat, nebo vám je podle zadání připravíme sami. Hodí se na prototyp, přípravek na míru i malou sérii, když nemá cenu rozjíždět velkou výrobu.",
    },
  ];

  const reference = [
    "AAS Automotive",
    "Faurecia Interior Systems Bohemia",
    "Magna Exteriors (Bohemia)",
    "Magna Exteriors (Nymburk)",
    "Sigmaplast",
    "F.S. Fehrer Automotive",
    "JVP Praha",
    "Magna Exteriors (Germany)",
    "Pavel Jelínek Modelářství",
    "Zámečnictví Ron",
    "Fehrer Bohemia",
    "Magna Automotive (Poland)",
    "Magna Exteriors (Meerane)",
    "Otsuka Brano",
  ];

  return (
    <main className="wrap">
      <header className="topbar">
        <a className="mark" href="#" aria-label="3Ddesign Liberec — domů">
          <span className="mark-3d">3D</span>
          <span className="mark-rest">design</span>
          <span className="mark-loc">Liberec</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Co děláme</a>
          <a href="#duvera">O nás</a>
          <a className="top-tel" href="tel:+420603970458">+420 603 970 458</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Kontrolní a měřicí přípravek pro plastové díly z výroby 3Ddesign Liberec"
            className="hero-img"
          />
          <div className="hero-grid" aria-hidden="true" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Přípravkárna pro automotive · Liberec, Krymská 549/2</p>
          <h1 className="hero-h1">
            Měříme plastové díly<br />
            <span className="accentword">na setiny</span> milimetru.
          </h1>
          <p className="hero-sub">
            Rodinná firma, která od roku 2010 navrhuje a vyrábí kontrolní,
            měřicí a zkušební přípravky pro interiér i exteriér automobilů.
            Jeden člověk vede vaši zakázku od poptávky až po předání.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420603970458">Zavolat: +420 603 970 458</a>
            <a className="btn btn-ghost" href="mailto:info@3Ddesign.cz">Poslat poptávku e‑mailem</a>
          </div>

          <dl className="specstrip">
            {specs.map((s) => (
              <div className="spec" key={s.label}>
                <dt>
                  {s.code}
                  {s.unit ? <span className="unit">{s.unit}</span> : null}
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="sluzby" className="sec sec-services">
        <div className="sec-head">
          <p className="kicker">Výrobní list</p>
          <h2 className="sec-h2">Tři věci, které pro vás uděláme</h2>
          <p className="sec-lead">
            Zaměřujeme se na kontrolu a měření plastových dílů pro automotive.
            Přiznáme, kde jsou naše technologické i kapacitní meze — radši včas
            zavoláme, než abychom slíbili nesplnitelné.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.num}>
              <span className="card-num" aria-hidden="true">{s.num}</span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-lead">{s.lead}</p>
              <p className="card-body">{s.body}</p>
            </li>
          ))}
        </ol>

        <figure className="sec-figure">
          <img
            src="/section-1.webp"
            alt="Detail výroby měřicího přípravku ve 3Ddesign Liberec"
            className="figure-img"
          />
          <figcaption>Každý přípravek stavíme na míru konkrétnímu dílu — žádné dvě zakázky nejsou stejné.</figcaption>
        </figure>
      </section>

      <section id="duvera" className="sec sec-trust">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="kicker">Kdo za tím stojí</p>
            <h2 className="sec-h2">Rodinná firma z Liberce, ne montovna</h2>
            <p className="sec-lead">
              Začínalo to v roce 2010 návrhy a 3D modelováním pro výrobce bez
              vlastního CAD pracoviště. V roce 2011 přišla vlastní výroba — od
              šablon a kalibrů k větším kontrolním a měřicím přípravkům. Dnes
              jako 3Ddesign Liberec s.r.o. děláme kompletní servis v realizaci
              kontrolních, měřicích a zkušebních přípravků.
            </p>

            <ul className="values">
              <li>
                <h3>Otevřeně</h3>
                <p>Známe své meze. Když něco nedáme v termínu nebo kvalitě, řekneme to hned — ne až po deadline.</p>
              </li>
              <li>
                <h3>Jeden člověk za projekt</h3>
                <p>Od poptávky po předání jednáte s jedním konkrétním člověkem. Jasná zodpovědnost, žádné přehazování.</p>
              </li>
              <li>
                <h3>Na dlouho</h3>
                <p>Stavíme dlouhodobé férové vztahy se zákazníky i dodavateli. Většina partnerů se k nám vrací.</p>
              </li>
            </ul>
          </div>

          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Pracoviště 3Ddesign Liberec s hotovými přípravky pro automotive"
              className="figure-img"
            />
          </figure>
        </div>

        <div className="refs">
          <p className="kicker">Pro koho jsme stavěli přípravky</p>
          <ul className="reflist">
            {reference.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
