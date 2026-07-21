import { AiImage } from "./_ui";

function ContourDivider({ tone = "sun" }: { tone?: string }) {
  return (
    <div className={`divider divider--${tone}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="contour-svg">
        <path
          className="contour-faint"
          vectorEffect="non-scaling-stroke"
          d="M0,64 C160,36 300,34 440,58 C560,78 640,84 760,66 C900,42 1020,34 1180,60 C1300,80 1380,72 1440,58"
        />
        <path
          className="contour-line"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          d="M0,50 C160,20 300,20 440,44 C560,64 640,72 760,52 C900,28 1020,20 1180,46 C1300,66 1380,58 1440,44"
        />
      </svg>
    </div>
  );
}

function Ripples() {
  const radii = [26, 52, 78, 104, 130, 156];
  return (
    <svg
      className="ripples"
      viewBox="0 0 340 340"
      role="img"
      aria-label="Hladina biobazénu nakreslená jako soustředné vrstevnice"
    >
      <g fill="none">
        {radii.map((r, i) => (
          <circle key={r} cx={170} cy={170} r={r} style={{ animationDelay: `${i * 0.5}s` }} />
        ))}
        <circle className="ripple-core" cx={170} cy={170} r={7} />
      </g>
    </svg>
  );
}

const references = [
  {
    text:
      "Od začátku do konce byla spolupráce příjemná — profesionální přístup a ochota pomoci. Práce byla odvedena kvalitně a v dohodnutém termínu. Kdybych se znovu rozhodla pro zahradu, opět volím AK zahrady.",
    name: "Irena Svobodová",
    place: "Frýdek-Místek",
  },
  {
    text:
      "Paní zahradnice respektuje naše přání a zároveň přináší nové nápady. Máme krásnou zahradu, ze které se těšíme v každém ročním období.",
    name: "Lada Faldynová",
    place: "Palkovice",
  },
  {
    text:
      "Zahradu jsme řešili od návrhu, přes realizaci až po údržbu. Všechny naše požadavky jsme společně probrali a zasadili do reality. Můžu jedině doporučit.",
    name: "Ing. Jiří Vykoukal",
    place: "Metylovice",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="AK zahrady, domů">
          <span className="wm-ak">AK</span>
          <span className="wm-z">zahrady</span>
          <svg className="wm-line" viewBox="0 0 120 8" aria-hidden="true">
            <path d="M0,5 C20,1 40,1 60,4 C80,7 100,7 120,3" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Zahrady</a>
          <a href="#reference">Reference</a>
          <a className="topnav-loc" href="#top">Palkovice · Beskydy</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="eyebrow eyebrow--dark">Návrh · realizace · údržba zahrad v Podbeskydí</p>
          <h1 className="hero-title">
            U nás nápady jen{" "}
            <span className="bloom">kvetou</span>
          </h1>
          <p className="hero-sub">
            Budujeme a udržujeme zahrady na dohled od beskydských hřebenů. Možná mají
            všechny ty stromy a květiny svůj řád — ve skutečnosti ale vypadají, jako by
            vyrostly ze země jen a jen pro vás.
          </p>
          <div className="cta-row">
            <a className="btn btn--primary" href="#sluzby">Prohlédnout naše zahrady</a>
            <a className="btn btn--ghost" href="#reference">Číst reference</a>
          </div>
        </div>
        <figure className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Realizovaná zahrada AK zahrady v podhůří Beskyd s upravenými záhony a trávníkem"
            className="hero-img"
          />
        </figure>
      </section>

      <ContourDivider tone="sun" />

      <div id="sluzby">
        <article className="band band--meadow">
          <div className="band-inner">
            <div className="band-copy">
              <p className="eyebrow">Jaro — nová zahrada</p>
              <h2 className="band-title">Zahrada, kde jsou večery až příliš krátké</h2>
              <p className="band-text">
                Začneme u vašich představ. K nim přidáme šestnáct let zkušeností a znalost
                zdejší půdy i svahů. Vznikne místo, kde jsou rána kouzelná a kam se z práce
                budete těšit.
              </p>
              <a className="btn btn--primary" href="#reference">Vše o nové zahradě</a>
            </div>
            <figure className="band-media">
              <AiImage
                src="/section-1.webp"
                alt="Nově založená zahrada s čerstvě vysázenými trvalkami a mladým trávníkem"
                className="band-img"
              />
            </figure>
          </div>
        </article>
      </div>

      <ContourDivider tone="lake" />

      <article className="band band--lake">
        <div className="band-inner band-inner--reverse">
          <div className="band-copy">
            <p className="eyebrow">Léto — biobazén</p>
            <h2 className="band-title">Voda jako v horském jezeře</h2>
            <p className="band-text">
              Čistá, voňavá, bez chloru. Filtrují ji kamínky a mikroorganismy, ne chemie.
              Funguje jako příroda a vypadá jako sen — hladina se čeří v soustředných
              vrstevnicích, přesně jako naše značka.
            </p>
            <a className="btn btn--sun" href="#reference">Ponořit se do přírody</a>
          </div>
          <figure className="band-media band-media--ripple">
            <Ripples />
          </figure>
        </div>
      </article>

      <ContourDivider tone="cream" />

      <article className="band band--spruce">
        <div className="band-inner">
          <div className="band-copy">
            <p className="eyebrow">Celý rok — údržba</p>
            <h2 className="band-title">Starost, o které nemusíte vědět</h2>
            <p className="band-text">
              Pletí, hnojení, stříhání i hrabání listí. Vrátíte se z práce a ledacos bude
              jiné — lepší. Trávník posekaný do pravidelných pásů, záhony připravené na
              další sezónu.
            </p>
            <a className="btn btn--sun" href="#reference">Vše o pravidelné údržbě</a>
          </div>
          <figure className="band-media">
            <AiImage
              src="/section-2.webp"
              alt="Pečlivě posekaný trávník a udržované záhony jako výsledek pravidelné údržby"
              className="band-img"
            />
            <div className="mown-stripes" aria-hidden="true" />
          </figure>
        </div>
      </article>

      <ContourDivider tone="sun" />

      <section className="trust" id="reference">
        <div className="trust-inner">
          <div className="trust-head">
            <p className="eyebrow eyebrow--dark">Z takových slov rozkveteme</p>
            <h2 className="trust-title">Máme recept na spokojenost</h2>
            <p className="trust-lede">
              Jsme tým zahradníků z Palkovic. Někteří překypují nápady, jiní dávají věcem
              řád, další mají zlaté ruce. Jsme rychlí, ale pečliví; máme zkušenosti, ale
              taky nadhled. Umíme poradit — i naslouchat.
            </p>
            <div className="stat">
              <span className="stat-num">16</span>
              <span className="stat-label">let staráme se o zahrady v Beskydech a Podbeskydí</span>
            </div>
          </div>

          <ul className="refs">
            {references.map((r) => (
              <li key={r.name} className="ref">
                <p className="ref-text">{r.text}</p>
                <p className="ref-name">
                  {r.name}
                  <span className="ref-place">{r.place}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
