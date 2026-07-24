import { AiImage } from "./_ui";

const LAYERS = [
  { n: "01", name: "Podklad", spec: "Očištění stěny, oprava trhlin a penetrace pod systém." },
  { n: "02", name: "Lepicí hmota", spec: "Nanesení lepidla na desku izolantu, rovina do 2 mm/m." },
  { n: "03", name: "Izolant", spec: "EPS nebo minerální vata v tloušťce dle projektu." },
  { n: "04", name: "Hmoždinky", spec: "Talířové kotvení do nosné konstrukce, kotevní plán." },
  { n: "05", name: "Armovací vrstva", spec: "Stěrka se sklovláknitou síťovinou, přetažení hran." },
  { n: "06", name: "Omítka", spec: "Probarvená fasádní omítka ve finálním odstínu." },
];

const SERVICES = [
  {
    tag: "Panelové domy",
    title: "Zateplení paneláků",
    body: "Kontaktní zateplení (ETICS) pro SVJ a bytová družstva — od kotevního plánu po hotovou fasádu.",
  },
  {
    tag: "Rodinné domy",
    title: "Zateplení RD",
    body: "Fasády i střešní pláště, nadkrokevní izolace, výměna oken a klempířské detaily.",
  },
  {
    tag: "Financování",
    title: "Dotace na klíč",
    body: "Nová zelená úsporám, IROP i PANEL — od podání žádosti až po závěrečné vyúčtování.",
  },
  {
    tag: "Papíry",
    title: "Dokumentace",
    body: "Posouzení objektu, návrh skladby a projektová dokumentace DPSP i DSPS.",
  },
];

const PROJECTS = [
  { place: "BD Třída Míru, Olomouc", spec: "Minerální vata · probarvená omítka", year: "2016" },
  { place: "BD Nároží, Schweitzerova, Olomouc", spec: "ETICS · fasáda bytového domu", year: "2016" },
  { place: "Fasáda RD, Křelov", spec: "EPS · finální štuková omítka", year: "2020" },
  { place: "Plochá střecha + EPS, Prostějov", spec: "Svornosti 624/7 · oprava a zateplení", year: "2018" },
  { place: "Zateplení RD, Skrbeň", spec: "Cemix flexi štuk · fasádní systém", year: "2016" },
  { place: "Rekonstrukce fasády RD, Černovír", spec: "Zateplení a nová omítka", year: "2020" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="LISFIO — zateplení, Olomouc">
          <span className="wordmark__disc" aria-hidden="true" />
          <span className="wordmark__name">LISFIO</span>
          <span className="wordmark__sub">zateplení · Olomouc</span>
        </a>
        <a className="topbar__phone" href="tel:+420777111222">+420 777 111 222</a>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="disc" aria-hidden="true" /> ETICS · vnější zateplení · Olomouc
            </p>
            <h1 className="hero__title">
              Zateplíme dům tak, aby držel&nbsp;teplo — i&nbsp;papíry na&nbsp;dotaci.
            </h1>
            <div className="hero__band" aria-hidden="true" />
            <p className="hero__lead">
              LISFIO obléká panelové i rodinné domy na Olomoucku do teplé fasády už
              od roku 2014. Kontaktní zateplení od podkladu po finální omítku — s
              hmoždinkami, které drží, a dokumentací, která projde kontrolou.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="tel:+420777111222">Zavolat</a>
              <a className="btn btn--ghost" href="mailto:info@example.cz">Napsat e-mail</a>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__frame">
              <AiImage
                src="/hero.webp"
                alt="Zateplená fasáda bytového domu v Olomouci s hotovou probarvenou omítkou"
                className="hero__img"
              />
              <div className="hero__render" aria-hidden="true" />
              <div className="hero__sweep" aria-hidden="true" />
            </div>
            <p className="hero__caption">
              Studený prefabrikát → teplá fasáda. Přesně to na stěně děláme.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--services">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">
              <span className="disc" aria-hidden="true" /> 01 — Co pro vás uděláme
            </p>
            <h2 className="sec-title">Zateplení, které projde kontrolou i&nbsp;dotací</h2>
          </div>

          <ul className="services">
            {SERVICES.map((s) => (
              <li className="card reveal" key={s.title}>
                <span className="card__tag">{s.tag}</span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </li>
            ))}
          </ul>

          <div className="layup">
            <div className="layup__intro">
              <p className="eyebrow eyebrow--ochre">Skladba ETICS</p>
              <h3 className="layup__title">Šest vrstev, žádnou nepřeskočíme</h3>
              <p className="layup__note">
                Fasáda drží tak dlouho, jak přesně sedí vrstvy pod ní. Každou
                kontrolujeme a zapisujeme do dokumentace.
              </p>
              <div className="layup__photo">
                <AiImage
                  src="/section-1.webp"
                  alt="Detail zateplovacího systému — izolační desky kotvené talířovými hmoždinkami"
                  className="layup__img"
                />
              </div>
            </div>
            <ol className="layers">
              {LAYERS.map((l) => (
                <li className="layer reveal" key={l.n}>
                  <span className="layer__n">{l.n}</span>
                  <div className="layer__body">
                    <span className="layer__name">{l.name}</span>
                    <span className="layer__spec">{l.spec}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--refs">
        <div className="wrap">
          <div className="refs__layout">
            <div className="refs__about">
              <p className="eyebrow">
                <span className="disc" aria-hidden="true" /> 02 — Reference
              </p>
              <h2 className="sec-title">Fasády, které v&nbsp;Olomouci stojí</h2>
              <p className="refs__text">
                LISFIO s.r.o. vznikla v roce 2014 z dlouholeté praxe ve stavebnictví —
                v prodeji materiálu i v samotné realizaci. Zaměřujeme se hlavně na
                vnější zateplení, střešní pláště a výměnu oken. Poradíme s výběrem
                systému, zajistíme materiál i dotaci a stavbu předáme s papíry, které
                sedí.
              </p>
              <div className="refs__photo">
                <AiImage
                  src="/section-2.webp"
                  alt="Dokončená rekonstrukce fasády rodinného domu na Olomoucku"
                  className="refs__img"
                />
              </div>
            </div>

            <ul className="refs__grid">
              {PROJECTS.map((p) => (
                <li className="proj card reveal" key={p.place}>
                  <span className="proj__year">{p.year}</span>
                  <h3 className="proj__place">{p.place}</h3>
                  <p className="proj__spec">{p.spec}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
