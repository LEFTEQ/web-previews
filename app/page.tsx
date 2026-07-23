import { AiImage } from "./_ui";

const services = [
  {
    ref: "ČSN EN 1069-1,2",
    title: "Kontrola tobogánů a skluzavek",
    body: "Změříme geometrii žlabu, sklony, přechodové rádiusy i součinitel tření a jako nezávislá třetí osoba posoudíme rizika provozu. Provozovateli zůstane protokol s přesným rozsahem měření, který norma vyžaduje.",
    tick: "R = 2 500 mm",
  },
  {
    ref: "DSP · DPS · autorský dozor",
    title: "Projektová dokumentace",
    body: "Zpracujeme dokumentaci bazénů a koupališť od studie po prováděcí stupeň — technologie úpravy vody, akumulace, atrakce. Kreslíme tak, aby stavba i revize seděly na milimetr.",
    tick: "ø 900 mm",
  },
  {
    ref: "hydraulika · trysky · atrakce",
    title: "Vodní prvky a fontány",
    body: "Navrhneme vodní prvky, fontány a chrliče včetně hydrauliky a osazení trysek. Spočítáme průtoky, tlaky a dosahy tak, aby voda dělala přesně to, co má.",
    tick: "sklon 8 %",
  },
];

const references = [
  { year: "2021", name: "Aquapark Kladno — revize a zkušební jízdy skluzavkami" },
  { year: "2021", name: "Liberec — laminátový tobogán, kontrola geometrie" },
  { year: "2020", name: "Benátky nad Jizerou — rekonstrukce koupaliště" },
];

export default function Page() {
  return (
    <div className="page">
      <div className="slide-canvas" aria-hidden="true">
        <svg viewBox="0 0 1000 4000" preserveAspectRatio="none">
          <path
            className="slide-line"
            pathLength={1}
            d="M300 0 C300 380 600 470 580 880 C560 1290 140 1330 170 1740 C200 2150 600 2190 570 2600 C540 3010 160 3040 210 3450 C245 3780 380 3820 380 4000"
          />
        </svg>
      </div>

      <header className="hero section">
        <AiImage
          src="/hero.webp"
          alt="Laminátový tobogán s vodní skluzavkou během revize"
          className="hero-media"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="wrap hero-inner">
          <p className="eyebrow eyebrow--light">Projektový ateliér · Praha 8–Kobylisy</p>
          <div className="wordmark">
            <span className="wordmark-main">
              Bazény<span className="amp">&amp;</span>wellness
            </span>
            <span className="wordmark-sub">ateliér skluzavek a vodních staveb</span>
          </div>
          <h1 className="hero-title">
            Než po skluzavce sjede první&nbsp;návštěvník, projde revizí.
          </h1>
          <p className="hero-lead">
            Jako nezávislá třetí osoba měříme, zkoušíme a posuzujeme rizika tobogánů
            a skluzavek podle ČSN&nbsp;EN&nbsp;1069-1,2. Provozovateli zůstane v ruce
            protokol, který obstojí.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#sluzby">Poptat revizi skluzavky</a>
            <ul className="hero-specs">
              <li>ČSN EN 1069-1,2</li>
              <li>zkoušky · měření</li>
              <li>posouzení rizik</li>
            </ul>
          </div>
        </div>
        <span className="tick tick--hero">
          <i aria-hidden="true" />μ&nbsp;≥&nbsp;0,25
        </span>
      </header>

      <section id="sluzby" className="section section--light">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Co pro provozovatele děláme</p>
            <h2>Tři služby, jeden vodorys.</h2>
          </div>
          <ul className="svc">
            {services.map((s) => (
              <li className="svc-item" key={s.title}>
                <p className="svc-ref">{s.ref}</p>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-body">{s.body}</p>
                <span className="tick">
                  <i aria-hidden="true" />
                  {s.tick}
                </span>
              </li>
            ))}
          </ul>
          <div className="svc-media">
            <AiImage
              src="/section-1.webp"
              alt="Žlab laminátové skluzavky připravený k proměření během revize"
              className="media-fill"
            />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap about-grid">
          <div className="about-media">
            <AiImage
              src="/section-2.webp"
              alt="Vodní prvky a bazénová technologie navržená ateliérem"
              className="media-fill"
            />
          </div>
          <div className="about-body">
            <p className="eyebrow eyebrow--light">Proč zrovna náš ateliér</p>
            <h2>Nezávislost, kterou norma přímo vyžaduje.</h2>
            <p className="about-lead">
              Novela ČSN&nbsp;EN&nbsp;1069-1,2 z července 2011 svěřuje zkoušky
              skluzavek třetí nezávislé osobě — ne dodavateli, ne provozovateli.
              Přesně tuto roli držíme na koupalištích i v aquaparcích po celé
              republice.
            </p>
            <ul className="refs">
              {references.map((r) => (
                <li className="ref" key={r.name}>
                  <span className="ref-year">{r.year}</span>
                  <span className="ref-name">{r.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
