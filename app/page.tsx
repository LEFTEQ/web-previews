import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      idx: "01",
      title: "Nové pomníky na míru",
      desc: "Jednohroby, dvojhroby i urnové pomníky ze žuly a mramoru. Navrhneme tvar, vybereme kámen a osadíme na hřbitově — od základů po písmo.",
      material: "Žula · mramor"
    },
    {
      idx: "02",
      title: "Sekání a zlacení písma",
      desc: "Nové nápisy i doplnění jmen ke stávajícím. Ruční sekání, plnění barvou nebo pravé plátkové zlato — přímo na místě na hřbitově.",
      material: "Zlato · barva"
    },
    {
      idx: "03",
      title: "Broušení a renovace",
      desc: "Přebroušení a přeleštění zašlého kamene, srovnání sesednutých rámů, čištění a impregnace. Starý hrob dostane zpět svůj lesk.",
      material: "Leštění"
    },
    {
      idx: "04",
      title: "Přestavba a rozšíření hrobu",
      desc: "Rozebrání, nové betonové základy, výměna krycích desek a rámů. Řešíme i prosednuté a poškozené hroby po zimě.",
      material: "Základy"
    }
  ];

  const facts = [
    { k: "Praha a okolí", v: "Pracujeme na hřbitovech v Praze a Středočeském kraji — osazení i písmo přímo na místě." },
    { k: "Vlastní kamenná dílna", v: "Řezání, broušení i sekání písma zvládneme sami, bez prostředníků a zbytečného čekání." },
    { k: "Nezávazná prohlídka", v: "Přijedeme se na hrob podívat, zaměříme a řekneme rovnou cenu — bez poplatku předem." }
  ];

  return (
    <main className="stone">
      <header className="top">
        <a className="brand" href="#" aria-label="Kamenictví DaG, úvod">
          <span className="brand-mark" aria-hidden="true">DaG</span>
          <span className="brand-word">Kamenictví</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O dílně</a>
          <a className="nav-tel" href="tel:+420773750295">773 750 295</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img src="/hero.webp" alt="Kamenický pomník ze žuly s vysekaným a zlaceným písmem" />
          <span className="hero-scrim" aria-hidden="true" />
        </div>
        <div className="hero-inner">
          <p className="eyebrow">Kamenická dílna · Praha</p>
          <h1 id="hero-title">
            Kámen, který<br />
            <span className="engrave">přežije generace.</span>
          </h1>
          <p className="lede">
            Sekáme jména do žuly, brousíme zašlé pomníky a stavíme nové hroby.
            Řemeslo, kde záleží na každém milimetru — protože zůstane v kameni napořád.
          </p>
          <div className="hero-cta">
            <a className="btn" href="tel:+420773750295">Zavolat 773 750 295</a>
            <a className="btn btn-ghost" href="#sluzby">Co děláme</a>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-title">
        <div className="sec-head">
          <p className="eyebrow">Řemesla dílny</p>
          <h2 id="sluzby-title">Od jednoho písmene po celý hrob</h2>
        </div>
        <div className="grid">
          <div className="grid-media">
            <img src="/section-1.webp" alt="Detail ruční práce na kameni v kamenické dílně" />
          </div>
          <ol className="svc-list">
            {services.map((s) => (
              <li className="svc" key={s.idx}>
                <span className="svc-idx" aria-hidden="true">{s.idx}</span>
                <div className="svc-body">
                  <div className="svc-top">
                    <h3>{s.title}</h3>
                    <span className="svc-tag">{s.material}</span>
                  </div>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about" id="onas" aria-labelledby="onas-title">
        <div className="about-media">
          <img src="/section-2.webp" alt="Hotový osazený pomník na hřbitově" />
        </div>
        <div className="about-body">
          <p className="eyebrow">O dílně</p>
          <h2 id="onas-title">Poctivé kamenictví, na které se dá spolehnout</h2>
          <p className="about-lede">
            Kamenictví DaG je malá rodinná dílna. Neděláme tisíce zakázek za rok —
            děláme je tak, aby vydržely. Když se u pomníku vašich blízkých po letech
            zastavíte, má vypadat pořád stejně dobře jako v den osazení.
          </p>
          <dl className="facts">
            {facts.map((f) => (
              <div className="fact" key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
          <div className="contact-card" style={{ "--d": "0ms" } as CSSProperties}>
            <div>
              <span className="cc-label">Zavolejte nebo napište</span>
              <a className="cc-tel" href="tel:+420773750295">+420 773 750 295</a>
              <a className="cc-mail" href="mailto:kamenictvidag@email.cz">kamenictvidag@email.cz</a>
            </div>
            <div className="cc-loc">
              <span className="cc-label">Působnost</span>
              <p>Praha &amp; Středočeský kraj<br />osazení i písmo přímo na hřbitově</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
