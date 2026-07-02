const okna = [
  {
    id: "trocal",
    system: "Trocal 76",
    label: "Hlavní program",
    title: "Plastová okna z profilů Trocal",
    text: "Německý profil, který vyrábíme a montujeme od roku 1993. Šestikomorová konstrukce, stavební hloubka 76 mm a trojsklo standardně. Okno, které v zimě drží teplo a v létě ticho.",
    specs: [
      { k: "Uw", v: "až 0,73 W/m²K" },
      { k: "Komory", v: "6" },
      { k: "Záruka", v: "60 měsíců" },
    ],
  },
  {
    id: "aluplast",
    system: "Aluplast",
    label: "Úsporná řada",
    title: "Okna Aluplast pro rozumný rozpočet",
    text: "Když rozhoduje cena, ale nechcete slevit z kvality německého profilu. Dodáváme od roku 2005 — osvědčená volba pro panelové byty i rekonstrukce rodinných domů na Mělnicku.",
    specs: [
      { k: "Uw", v: "od 0,95 W/m²K" },
      { k: "Komory", v: "5–6" },
      { k: "Záruka", v: "60 měsíců" },
    ],
  },
  {
    id: "drevo-hlinik",
    system: "Dřevo & hliník",
    label: "Nad rámec plastu",
    title: "Eurookna a hliníkové systémy",
    text: "Dřevěná eurookna pro historické fasády v centru Mělníka, hliník tam, kde plast nestačí — velké prosklené stěny, vchodové portály, provozovny. Vše zaměříme, dodáme a namontujeme.",
    specs: [
      { k: "Materiál", v: "smrk / dub / Al" },
      { k: "Použití", v: "fasády, portály" },
      { k: "Záruka", v: "60 měsíců" },
    ],
  },
];

const dalsi = [
  {
    title: "Bezpečnostní dveře",
    text: "Vchodové dveře s vícebodovým zamykáním a bezpečnostní třídou RC2/RC3. Do bytů i rodinných domů.",
  },
  {
    title: "Sekční garážová vrata Kružík",
    text: "Česká vrata s tichým chodem a možností dálkového ovládání. Zaměření a montáž do 4 týdnů.",
  },
  {
    title: "Parapety, žaluzie, sítě",
    text: "Kompletní doplňky k oknům při jedné montáži — vnitřní i venkovní parapety, žaluzie, sítě proti hmyzu.",
  },
];

const duvera = [
  {
    rok: "1993",
    text: "Začínáme jako jediný výrobce plastových oken na Mělnicku. Část výroby exportujeme do Německa.",
  },
  {
    rok: "2005",
    text: "Rozšiřujeme nabídku o profily Aluplast — reakce na poptávku po dostupnějších oknech.",
  },
  {
    rok: "dnes",
    text: "Přes 30 let montáží na Mělníku, Neratovicích, Kralupech a okolí. Vlastní montážní party, žádní subdodavatelé.",
  },
];

export default function Page() {
  return (
    <main className="mpo">
      {/* ================= HERO ================= */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní">
          <span className="wordmark">
            <span className="wordmark-frame" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className="wordmark-text">
              Mělnická<br />plastová okna
            </span>
          </span>
          <a className="hero-tel" href="tel:+420315000000">
            Zavolat: 315 000 000
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Výroba a montáž od roku 1993 · Mělník</p>
            <h1 className="hero-title">
              Okno je rám,
              <br />
              <em>výhled</em> je váš.
            </h1>
            <p className="hero-lead">
              Vyrábíme plastová okna z německých profilů Trocal a montujeme je
              po celém Mělnicku — nad soutokem Labe a Vltavy, 30 km od Prahy.
              Na každé okno dáváme záruku 60 měsíců.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="tel:+420315000000">
                Zavolat a domluvit zaměření
              </a>
              <a className="btn btn-line" href="#okna">
                Prohlédnout profily
              </a>
            </div>
          </div>

          {/* Signature: typografické okno — kříž rámu, čtyři tabule */}
          <div className="hero-window" aria-hidden="true">
            <div className="pane pane-sky">
              <span className="pane-num">60</span>
              <span className="pane-label">měsíců záruka</span>
            </div>
            <div className="pane pane-deep">
              <span className="pane-num">6</span>
              <span className="pane-label">komor profilu Trocal</span>
            </div>
            <div className="pane pane-river">
              <span className="pane-num">2</span>
              <span className="pane-label">řeky pod okny — Labe a Vltava</span>
            </div>
            <div className="pane pane-light">
              <span className="pane-num">31</span>
              <span className="pane-label">let výroby na Mělnicku</span>
            </div>
            <span className="mullion mullion-v" />
            <span className="mullion mullion-h" />
            <span className="handle" />
          </div>
        </div>

        <p className="hero-strip" aria-hidden="true">
          Trocal · Aluplast · Eurookna · Hliník · Trocal · Aluplast · Eurookna · Hliník
        </p>
      </header>

      {/* ================= SEKCE: OKNA ================= */}
      <section className="section section-okna" id="okna" aria-labelledby="okna-h">
        <div className="section-head">
          <p className="eyebrow">Co vyrábíme a montujeme</p>
          <h2 id="okna-h">Tři profily. Jedna montážní parta.</h2>
          <p className="section-lead">
            Nejsme překupník z katalogu — okna Trocal si sami vyrábíme a všechno,
            co prodáme, si taky sami namontujeme. Proto můžeme dát záruku 60 měsíců.
          </p>
        </div>

        <div className="okna-list">
          {okna.map((o) => (
            <article className="okno-card" key={o.id}>
              <div className="okno-frame" aria-hidden="true">
                <span className="okno-frame-cross" />
              </div>
              <div className="okno-body">
                <p className="okno-label">{o.label}</p>
                <h3>{o.title}</h3>
                <p className="okno-text">{o.text}</p>
                <dl className="okno-specs">
                  {o.specs.map((s) => (
                    <div key={s.k}>
                      <dt>{s.k}</dt>
                      <dd>{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="dalsi-grid">
          {dalsi.map((d) => (
            <div className="dalsi-item" key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SEKCE: DŮVĚRA ================= */}
      <section className="section section-duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-intro">
            <p className="eyebrow eyebrow-light">Kdo za okny stojí</p>
            <h2 id="duvera-h">
              První okna na Mělnicku jsme vyrobili, když se ještě faxovalo.
            </h2>
            <p>
              Sídlíme v ulici 17. listopadu 250 v Mělníku — deset minut pěšky od
              náměstí. Zaměření děláme osobně, cenu spočítáme na místě a montáž
              řídí lidé, kteří u nás pracují roky. Když se něco pokazí, víte,
              komu zavolat, a on to ví taky.
            </p>
            <p className="duvera-adresa">
              Mělnická plastová okna s.r.o.
              <br />
              17. listopadu 250, 276 01 Mělník
            </p>
          </div>

          <ol className="duvera-timeline">
            {duvera.map((d) => (
              <li key={d.rok}>
                <span className="timeline-rok">{d.rok}</span>
                <p>{d.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <blockquote className="duvera-cit">
          <p>
            „Okna do celého bytu v paneláku na Slovanech vyměnili za jeden den,
            včetně parapetů a úklidu. Po pěti letech ani jedno neseřizovali.“
          </p>
          <cite>— rodina Hrubých, Mělník</cite>
        </blockquote>
      </section>
    </main>
  );
}
