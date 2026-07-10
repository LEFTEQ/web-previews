import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "AUTO",
      title: "Reklama na auta",
      lead: "Polepy, celopolepy a řezané fólie",
      items: ["Polepy aut a dodávek", "Celopolepy vozového parku", "Fólie na auto na míru"],
    },
    {
      code: "SVÍT",
      title: "Reklama a písmena",
      lead: "Světlo, výška, prostorové logo",
      items: ["Světelná reklama", "Reklamní bannery", "3D prostorová písmena"],
    },
    {
      code: "TISK",
      title: "Digitální tisk",
      lead: "Od vizitky po fasádu",
      items: ["Sublimační tisk", "Malonákladový tisk", "Velkoplošný tisk"],
    },
    {
      code: "KONS",
      title: "Konstrukce a stojany",
      lead: "Nosná řešení pro každou plochu",
      items: ["Stojany a stojánky", "Rámy a nosiče", "Podpůrné konstrukce"],
    },
    {
      code: "SYST",
      title: "Systémy",
      lead: "Aby lidé věděli, kudy jít",
      items: ["Orientační systémy", "Prezentační systémy", "Promostolky"],
    },
    {
      code: "PROD",
      title: "Branding prodejen",
      lead: "Celý obchod v jednotném stylu",
      items: ["Výlohy a polepy skel", "Branding provozoven", "Reklamní tabule"],
    },
  ];

  const steps = [
    {
      n: "01",
      t: "Zaměření a návrh",
      d: "Přijedeme k vám do Prahy i okolí, změříme plochu a připravíme grafický návrh na míru — uvidíte, jak reklama vypadá, ještě než ji vyrobíme.",
    },
    {
      n: "02",
      t: "Výroba v naší dílně",
      d: "Tiskneme velkoplošně, řežeme plotrem a frézou, laminujeme a kompletujeme 3D písmena. Všechno pod jednou střechou, bez subdodávek.",
    },
    {
      n: "03",
      t: "Montáž na místě",
      d: "Polep vozu, světelný nápis na fasádu i výlohu nainstaluje náš tým. Vy jen odemknete a předáte klíče od auta.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#uvod" aria-label="Logosign — výroba reklamy Praha">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-cut">Logo</span>sign
          </span>
          <span className="brand-sub">výroba reklamy · Praha</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#dilna">Dílna</a>
          <a className="call" href="tel:+420224313306">
            <span className="call-dot" aria-hidden="true" />
            +420 224 313 306
          </a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-copy">
          <p className="eyebrow">Řezaná fólie · velkoplošný tisk · 3D písmena</p>
          <h1 className="hero-title">
            Vaše značka<br />
            <span className="hl">nalepená,</span> nasvícená,<br />
            <span className="hl">nepřehlédnutelná.</span>
          </h1>
          <p className="hero-lead">
            V pražské dílně děláme reklamu, kterou je vidět z ulice i z dálnice —
            od celopolepu dodávky přes světelný nápis nad vchodem až po orientační
            systém celé budovy. Navrhneme, vyrobíme, přijedeme namontovat.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420224313306">Zavolat do dílny</a>
            <a className="btn btn-ghost" href="#sluzby">Co umíme vyrobit</a>
          </div>
          <dl className="hero-facts">
            <div><dt>Vlastní dílna</dt><dd>tisk · plotr · fréza · montáž</dd></div>
            <div><dt>Působíme</dt><dd>Praha a celé Česko</dd></div>
          </dl>
        </div>
        <figure className="hero-figure">
          <img src="/hero.webp" alt="Dodávka s celopolepem od Logosign vyjíždí z pražské dílny" width={1200} height={900} />
          <figcaption>Celopolep vozového parku — návrh, tisk i montáž u nás.</figcaption>
        </figure>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="sec-kicker">Katalog dílny</p>
          <h2 id="sluzby-nadpis">Umíme celou cestu od nápadu k hotové reklamě.</h2>
          <p className="sec-note">
            Šest disciplín, jeden dodavatel. Nemusíte obvolávat tiskárnu, montážníky
            a grafika zvlášť — u nás to na sebe navazuje.
          </p>
        </div>
        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card-code" aria-hidden="true">{s.code}</span>
              <h3>{s.title}</h3>
              <p className="card-lead">{s.lead}</p>
              <ul className="card-list">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="about" id="dilna" aria-labelledby="dilna-nadpis">
        <div className="about-media">
          <img src="/section-1.webp" alt="Velkoplošný tisk a řezaná fólie v pražské dílně Logosign" width={900} height={700} />
        </div>
        <div className="about-body">
          <p className="sec-kicker">Jak to u nás chodí</p>
          <h2 id="dilna-nadpis">Od zaměření po montáž nás máte na jednom telefonu.</h2>
          <ol className="steps">
            {steps.map((st) => (
              <li className="step" key={st.n}>
                <span className="step-n" aria-hidden="true">{st.n}</span>
                <div>
                  <h3>{st.t}</h3>
                  <p>{st.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="quote">
            <blockquote>
              „Řekli jsme si o polep tří dodávek a nový nápis nad prodejnu.
              Přijeli zaměřit, druhý týden vyráběli a v pátek montovali. Bez chaosu.“
            </blockquote>
            <figcaption>— provozní řetězce prodejen, Praha 9</figcaption>
          </figure>
          <a className="btn btn-primary" href="tel:+420224313306">Domluvit exkurzi po dílně</a>
        </div>
      </section>

      <section className="strip" aria-label="Ukázka výroby">
        <img src="/section-2.webp" alt="Světelná reklama a 3D písmena vyrobená v Logosign" width={1400} height={520} />
        <p className="strip-cap">Světelná reklama a prostorová písmena — vidět ve dne i po setmění.</p>
      </section>
    </main>
  );
}
