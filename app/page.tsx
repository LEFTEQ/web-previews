export default function Page() {
  const kroky = [
    {
      n: "01",
      t: "Návrh grafiky",
      d: "Grafické oddělení připraví polep přesně na tvar vašeho vozu. Vidíte náhled na 3D modelu ještě dřív, než sáhneme po fólii.",
    },
    {
      n: "02",
      t: "Tisk a laminace",
      d: "Tiskneme na litou fólii s ochrannou laminací, která drží barvy syté i po letech na slunci, v dešti i v myčce.",
    },
    {
      n: "03",
      t: "Aplikace na vůz",
      d: "Fólii natáhneme přes hrany, kliky i prolisy tak, aby polep vypadal jako lak z výroby. Bez bublin, bez odlepených rohů.",
    },
  ];

  const sluzby = [
    {
      t: "Celopolepy užitkových vozů",
      d: "Dodávka nebo skříňový vůz jako pojízdný billboard. Logo, kontakt a nabídka, které si přečte každý na křižovatce.",
    },
    {
      t: "Firemní flotily",
      d: "Deset i padesát aut ve stejném designu. Řešíme jednotný vizuál celého vozového parku od servisky po osobní vozy.",
    },
    {
      t: "Řezaná loga a nápisy",
      d: "Decentní řezaná grafika na dveře a bok vozu. Kontakt a IČO tam, kde je zákon i zákazníci chtějí mít.",
    },
    {
      t: "Polep výloh a oken",
      d: "Průhledné fólie one-way vision na okna aut i provozoven. Ven vidíte, dovnitř nikdo — a venku běží reklama.",
    },
  ];

  return (
    <main className="mb">
      <header className="mb-nav">
        <a className="mb-mark" href="#" aria-label="maybee — reklamní polepy aut, Hradec Králové">
          may<span className="mb-mark-bee">bee</span>
          <span className="mb-mark-dot" aria-hidden="true">.</span>
        </a>
        <nav className="mb-links" aria-label="Hlavní">
          <a href="#sluzby">Co polepíme</a>
          <a href="#postup">Jak to probíhá</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="mb-hero" aria-labelledby="hero-nadpis">
        <img
          className="mb-hero-img"
          src="/hero.webp"
          alt="Užitkový vůz čerstvě polepený reklamní fólií v dílně maybee v Hradci Králové"
        />
        <div className="mb-hero-veil" aria-hidden="true" />
        <div className="mb-hero-inner">
          <p className="mb-eyebrow">Reklamní polepy aut · Hradec Králové</p>
          <h1 id="hero-nadpis" className="mb-h1">
            Vaše auto jezdí.<br />
            <span className="mb-h1-accent">Ať jezdí i reklama.</span>
          </h1>
          <p className="mb-lede">
            Natáhneme fólii přes každou hranu, kliku i prolis — až vypadá jako lak z
            výroby. Od návrhu v grafickém oddělení po hotové auto před dílnou na
            Zemědělské.
          </p>
          <div className="mb-cta-row">
            <a className="mb-btn" href="tel:+420777253534">Zavolat grafikům</a>
            <a className="mb-btn mb-btn-ghost" href="#sluzby">Co dokážeme polepit</a>
          </div>
        </div>
      </section>

      <section id="sluzby" className="mb-section" aria-labelledby="sluzby-nadpis">
        <div className="mb-sec-head">
          <p className="mb-eyebrow mb-eyebrow-dark">Nabídka</p>
          <h2 id="sluzby-nadpis" className="mb-h2">Fólie na míru — auto, flotila i výloha</h2>
          <p className="mb-sec-lede">
            Litá fólie s laminací drží barvy syté roky. Ať potřebujete jednu dodávku,
            nebo obléct celý vozový park, řešíme to celé pod jednou střechou.
          </p>
        </div>

        <div className="mb-grid">
          <div className="mb-grid-media">
            <img
              src="/section-1.webp"
              alt="Aplikace reklamní fólie na bok vozu — stěrka vytlačuje vzduch pod fólií"
            />
          </div>
          <ul className="mb-cards">
            {sluzby.map((s) => (
              <li key={s.t} className="mb-card">
                <h3 className="mb-card-t">{s.t}</h3>
                <p className="mb-card-d">{s.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="postup" className="mb-section mb-section-dark" aria-labelledby="postup-nadpis">
        <div className="mb-sec-head">
          <p className="mb-eyebrow">Jak to probíhá</p>
          <h2 id="postup-nadpis" className="mb-h2 mb-h2-light">Od návrhu k hotovému autu ve třech krocích</h2>
        </div>

        <div className="mb-steps">
          {kroky.map((k) => (
            <div key={k.n} className="mb-step">
              <span className="mb-step-n" aria-hidden="true">{k.n}</span>
              <h3 className="mb-step-t">{k.t}</h3>
              <p className="mb-step-d">{k.d}</p>
            </div>
          ))}
        </div>

        <div className="mb-about" id="kontakt">
          <div className="mb-about-media">
            <img
              src="/section-2.webp"
              alt="Hotové auto s celopolepem od agentury maybee, připravené k předání"
            />
          </div>
          <div className="mb-about-text">
            <p className="mb-eyebrow">Fullservisová reklamní agentura</p>
            <h3 className="mb-about-h">Naši práci potkáváte v ulicích, aniž to víte</h3>
            <p className="mb-about-p">
              Jsme maybee — grafické oddělení, tiskárna i aplikační dílna na jednom
              místě v Hradci Králové. Návrh polepu vám ukážeme na modelu vašeho vozu,
              tiskneme na kvalitní fólie a fólii pokládáme tak, aby vydržela.
            </p>
            <dl className="mb-facts">
              <div className="mb-fact">
                <dt>Dílna</dt>
                <dd>Zemědělská 880/1, Hradec Králové</dd>
              </div>
              <div className="mb-fact">
                <dt>Otevřeno</dt>
                <dd>Po–Pá 8.00–16.30</dd>
              </div>
              <div className="mb-fact">
                <dt>Grafické oddělení</dt>
                <dd><a href="tel:+420777253534">777 253 534</a></dd>
              </div>
              <div className="mb-fact">
                <dt>Objednávky a informace</dt>
                <dd><a href="tel:+420773006575">773 006 575</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
