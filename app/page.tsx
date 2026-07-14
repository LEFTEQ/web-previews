export default function Page() {
  const layers = [
    {
      n: "01",
      title: "Příprava a lepicí hmota",
      desc: "Očistíme a vyrovnáme podklad, penetrujeme a natáhneme lepidlo.",
      spec: "podklad",
    },
    {
      n: "02",
      title: "Izolant",
      desc: "Šedý fasádní polystyren nebo minerální vata — podle typu domu.",
      spec: "120–200 mm",
    },
    {
      n: "03",
      title: "Talířové hmoždinky",
      desc: "Mechanické kotvení izolantu do nosné zdi, aby držel desítky let.",
      spec: "6–8 ks/m²",
    },
    {
      n: "04",
      title: "Armovací vrstva",
      desc: "Stěrka se sklovláknitou tkaninou — výztuha proti prasklinám.",
      spec: "výztuž",
    },
    {
      n: "05",
      title: "Probarvená omítka",
      desc: "Silikonová omítka, finální struktura a barva fasády.",
      spec: "finiš",
    },
  ];

  const references = [
    { place: "Poděbrady", object: "Lázeňský hotel" },
    { place: "Hradec Králové", object: "FN — Oční klinika" },
    { place: "Kolín", object: "Business Park, Zvěřínek" },
    { place: "Letohrad", object: "Zámek" },
    { place: "Tábor", object: "PT servis, konzervárna" },
    { place: "Čáslav", object: "ul. Pražská" },
  ];

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/hero.webp"
            alt="Zateplená bytová fasáda realizovaná firmou UNITIP"
            className="hero-img"
          />
          <div className="hero-veil" aria-hidden="true" />
        </div>

        <header className="site-head">
          <a className="wordmark" href="#top" aria-label="UNITIP — úvod">
            UNI<span className="wordmark-hot">TIP</span>
          </a>
          <span className="head-tag">zateplení fasád · Hradec Králové</span>
          <a className="head-call" href="tel:+420495211111">Zavolat</a>
        </header>

        <div className="hero-content" id="top">
          <p className="eyebrow eyebrow--light reveal r1">
            Zateplení fasád — Hradec Králové — od roku 1991
          </p>
          <h1 className="hero-title reveal r2">
            Ať vám teplo<br />neuniká fasádou.
          </h1>
          <p className="hero-lead reveal r3">
            Zateplujeme bytové domy, panelové objekty i výrobní haly
            certifikovaným systémem ETICS. Termovizí nejdřív najdeme, kudy dům
            topí ven — a pak to spolehlivě uzavřeme.
          </p>

          <div className="hero-cta reveal r4">
            <a className="btn btn--primary" href="#firma">Nezávazná poptávka</a>
            <a className="btn btn--ghost" href="tel:+420495211111">
              Zavolat 495 211 111
            </a>
          </div>

          <div
            className="scale reveal r5"
            role="img"
            aria-label="Termovizní stupnice: modrá znamená dobře zateplenou fasádu, oranžová a červená znamenají únik tepla."
          >
            <div className="scale-bar" aria-hidden="true" />
            <div className="scale-labels">
              <span>dobře zatepleno</span>
              <span>únik tepla</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section layers" id="skladba">
        <div className="section-head">
          <p className="eyebrow">Skladba ETICS — vrstva po vrstvě</p>
          <h2 className="section-title">
            Zateplení není jen polystyren nalepený na zeď.
          </h2>
          <p className="section-lead">
            Kvalitní fasáda drží desítky let, protože každá vrstva má svůj úkol.
            Takhle vypadá certifikovaná skladba, kterou na váš dům skládáme —
            odspodu nahoru.
          </p>
        </div>

        <div className="layers-grid">
          <figure className="layers-figure">
            <img
              src="/section-1.webp"
              alt="Detail zateplovacího systému a lešení na fasádě"
              className="media-img"
            />
            <figcaption>Realizace ETICS · zateplovací systém na fasádě</figcaption>
          </figure>

          <ol className="layer-list">
            {layers.map((l) => (
              <li className="layer" key={l.n}>
                <span className="layer-n">{l.n}</span>
                <div className="layer-body">
                  <h3 className="layer-title">{l.title}</h3>
                  <p className="layer-desc">{l.desc}</p>
                </div>
                <span className="layer-spec">{l.spec}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section trust" id="firma">
        <div className="trust-grid">
          <div className="trust-text">
            <p className="eyebrow">Ryze česká firma — od roku 1991</p>
            <h2 className="section-title">
              35 let na fasádách po celé republice.
            </h2>
            <p className="section-lead">
              UNITIP je stavebně-montážní firma z Hradce Králové. Od roku 1991
              zateplujeme a rekonstruujeme objekty vlastními lidmi — pokrýváme
              všechna potřebná řemesla, od lešení po finální omítku. Pracujeme
              ve dvou divizích: stavební a elektro.
            </p>

            <div className="divisions">
              <article className="division">
                <h3 className="division-name">Stavební divize</h3>
                <p>
                  Rekonstrukce a zateplení objektů, inženýrská činnost,
                  spolupráce s investory a možnosti financování.
                </p>
              </article>
              <article className="division">
                <h3 className="division-name">Elektro divize</h3>
                <p>
                  Obchodní a poradenská činnost, projektování elektro a
                  vlastní reference.
                </p>
              </article>
            </div>
          </div>

          <div className="trust-side">
            <figure className="trust-figure">
              <img
                src="/section-2.webp"
                alt="Dokončená rekonstrukce a zateplení objektu"
                className="media-img"
              />
            </figure>

            <div className="reflog">
              <p className="reflog-head">Vybrané reference</p>
              <ul className="reflog-list">
                {references.map((r) => (
                  <li className="reflog-item" key={r.place + r.object}>
                    <span className="reflog-place">{r.place}</span>
                    <span className="reflog-dots" aria-hidden="true" />
                    <span className="reflog-object">{r.object}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
