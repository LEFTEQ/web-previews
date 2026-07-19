import { AiImage } from "./_ui";

const services = [
  {
    tag: "Střecha",
    name: "Pokrývačské práce",
    desc: "Šikmé i ploché střechy, pálená i betonová krytina, pokládka šablon Alukryt a samolepících asfaltových pásů.",
  },
  {
    tag: "Plech",
    name: "Klempířina na míru",
    desc: "Oplechování, úžlabí, komíny a atiky z titanzinku, mědi i pozinku — ohýbané přesně na váš dům.",
  },
  {
    tag: "Odvod",
    name: "Okapové systémy",
    desc: "Návrh a montáž okapů, svodů a lapačů. Osadíme okapové háky, dotěsníme, vyčistíme.",
  },
  {
    tag: "Energie",
    name: "Fotovoltaika na střechu",
    desc: "Panely kotvené tak, aby neublížily krytině ani hydroizolaci a nezaložily zatékání.",
  },
  {
    tag: "Přesnost",
    name: "Satelitní zaměření",
    desc: "Střechu zaměříme ze satelitu. Výkaz materiálu dostanete dřív, než někdo poleze po žebříku.",
  },
  {
    tag: "Logistika",
    name: "Doprava na střechu",
    desc: "Krytinu i plech dopravíme a vyzdvihneme přímo na střechu — bez ničení zahrady jeřábem.",
  },
  {
    tag: "Servis",
    name: "Půjčovna nářadí",
    desc: "Falcovačky, nůžky na plech a jištění k zapůjčení, když si část práce chcete udělat sami.",
  },
  {
    tag: "Prohlídka",
    name: "Kontrola a údržba",
    desc: "Prohlídka před zimou, čištění mechu, dotažení spojů a drobné opravy, než z nich bude oprava velká.",
  },
];

const radce = [
  "Snášenlivost kovů na jedné střeše",
  "Kondenzace vlhkosti v podkroví",
  "Jak na horko v podkroví v létě",
  "Záruka a skutečná životnost střechy",
  "Skladba zelené střechy",
  "Proč a jak kontrolovat střechu",
];

const rows = [0, 1, 2, 3, 4, 5];
const shingles = Array.from({ length: 24 });

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" id="top">
          <span className="wordmark__name">COLEMAN</span>
          <span className="wordmark__sub">Pokrývačství &middot; Liberec</span>
        </a>
        <a className="btn btn--call" href="tel:777111222">
          Zavolat 777&nbsp;111&nbsp;222
        </a>
      </header>

      <section className="section hero">
        <div className="hero__copy">
          <p className="eyebrow">Pokrývačství a klempířina &mdash; Liberec</p>
          <h1 className="hero__title">
            Pokrýváme střechy pro{" "}
            <span className="hero__accent">liberecké</span> počasí.
          </h1>
          <p className="hero__lead">
            Šikmé i ploché střechy, klempířina na míru, okapy a fotovoltaika.
            Zaměříme, poradíme s materiálem a položíme tak, aby to drželo
            desítky zim &mdash; ne do první vichřice od Ještědu.
          </p>
          <ul className="hero__chips">
            <li>Titanzinek &middot; měď &middot; pozink</li>
            <li>Záruka na řemeslo</li>
            <li>Servis po Liberecku</li>
          </ul>
        </div>

        <div className="roof" aria-hidden="true">
          {rows.map((r) => (
            <div
              key={r}
              className="course"
              style={{ animationDelay: `${(rows.length - 1 - r) * 70}ms` }}
            >
              {shingles.map((_, s) => (
                <span key={s} className="shingle" />
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="divider" aria-hidden="true">
        <span className="seam" />
      </div>

      <section className="section services">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Katalog služeb</p>
          <h2 className="section__title">
            Osm profesí, jedna parta na střeše.
          </h2>
          <p className="section__intro">
            Od zaměření po poslední oplechování to táhne jedna četa. Nemusíte
            shánět zvlášť pokrývače, klempíře a elektrikáře na panely.
          </p>
        </div>

        <ul className="catalog">
          {services.map((it) => (
            <li className="card" key={it.name}>
              <span className="card__tag">{it.tag}</span>
              <h3 className="card__name">{it.name}</h3>
              <p className="card__desc">{it.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="divider" aria-hidden="true">
        <span className="seam" />
      </div>

      <section className="section trust">
        <div className="trust__grid">
          <div className="trust__about">
            <p className="eyebrow eyebrow--dark">Pobočka Liberec</p>
            <h2 className="section__title">
              Řemeslo, které nezmizí po první zimě.
            </h2>
            <p className="section__intro">
              Liberecká pobočka Coleman dělá střechy pro rodinné domy i stavby
              v Liberci a okolí. Poradíme, které kovy k sobě patří, jak řešit
              kondenzaci v podkroví a čím se vyplatí nešetřit &mdash; a pak to
              taky položíme.
            </p>

            <dl className="facts">
              <div className="facts__row">
                <dt>Kde jsme</dt>
                <dd>Ukázková 123, Liberec</dd>
              </div>
              <div className="facts__row">
                <dt>Otevřeno</dt>
                <dd>Po&ndash;Pá 7:00&ndash;16:00</dd>
              </div>
              <div className="facts__row">
                <dt>Materiály</dt>
                <dd>titanzinek, měď, pozink</dd>
              </div>
              <div className="facts__row">
                <dt>Domluva</dt>
                <dd>
                  <a href="tel:777111222">777&nbsp;111&nbsp;222</a>{" "}
                  &middot;{" "}
                  <a href="mailto:info@example.cz">info@example.cz</a>
                </dd>
              </div>
            </dl>
          </div>

          <aside className="trust__radce">
            <p className="radce__label">Rádce ze střechy</p>
            <p className="radce__note">
              Co se u nás nejčastěji ptáte, než podepíšeme:
            </p>
            <ul className="radce__list">
              {radce.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
