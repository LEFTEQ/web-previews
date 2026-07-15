import { AiImage } from "./_ui";

const lifts = [
  {
    id: "odpady",
    acc: "green",
    marker: "01",
    kicker: "Betonážní záběr 01",
    title: "Odpadové hospodářství",
    body: "Odvezeme a zlikvidujeme stavební i drobný odpad — od celé demolice po jeden kontejner před dům. Vedeme evidenci podle zákona, takže máte doklad, kam suť a materiál skončily.",
    facts: ["Kontejnery 3–30 m³", "Evidence a doklady o likvidaci", "Stavební suť · zemina · dřevo"],
  },
  {
    id: "stavitelstvi",
    acc: "oxide",
    marker: "02",
    kicker: "Betonážní záběr 02",
    title: "Stavitelství",
    body: "Dopravní a technická infrastruktura i pozemní objekty. Od výkopu a bednění přes armování až po zahlazenou desku — základy, opěrné zdi i monolitické konstrukce lijeme jednou partou.",
    facts: ["Základy a monolitické desky", "Opěrné a inženýrské konstrukce", "Bednění · armování · finiš povrchu"],
  },
  {
    id: "doprava",
    acc: "orange",
    marker: "03",
    kicker: "Betonážní záběr 03",
    title: "Doprava a mechanizace",
    body: "Silniční doprava stavebních materiálů a zajištění strojů pro zemní práce. Přivezeme beton, kamenivo i techniku přímo na místo — bez čekání na subdodavatele.",
    facts: ["Návoz materiálu na stavbu", "Bagry a stroje pro zemní práce", "Královéhradecký kraj"],
  },
];

const seals = [
  { code: "ISO 14001", label: "Environmentální management" },
  { code: "ISO 9001", label: "Management kvality" },
  { code: "BOZP", label: "Bezpečnost práce" },
];

export default function Page() {
  return (
    <main>
      <header className="band band--hero">
        <AiImage
          src="/hero.webp"
          alt="Čerstvý beton stéká z čerpadla do dřevěného bednění na stavbě"
          className="hero__media"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container hero__inner">
          <nav className="topbar" aria-label="Hlavní">
            <span className="wordmark">
              KENVI<span className="wordmark__cz">CZ</span>
            </span>
            <span className="topbar__loc">Hradec&nbsp;Králové · od&nbsp;1998</span>
          </nav>

          <div className="hero__body">
            <p className="eyebrow eyebrow--light">Betonáž &amp; kompletní stavební servis</p>
            <h1 className="pour" aria-label="Beton">
              <span className="pour__ghost" aria-hidden="true">BETON</span>
              <span className="pour__fill" aria-hidden="true">BETON</span>
            </h1>
            <p className="hero__lead">
              Lijeme ho tak, aby držel. Základy, desky i monolitické
              konstrukce pro stavby na Hradecku — od bednění po zahlazený
              povrch zvládne jedna parta v jednom termínu.
            </p>
            <a className="hero__jump" href="#sluzby">
              Co odléváme <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </header>

      <div className="seam" role="presentation" />

      <section id="sluzby" className="band band--intro" aria-labelledby="sluzby-nadpis">
        <div className="container">
          <p className="eyebrow">Služby</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Tři vrstvy, které se u nás potkávají
          </h2>
          <p className="section-intro">
            Firma stojí na třech samostatných směrech. Protože ale patří pod
            jednu střechu, nabízíme kompletní stavební servis — postaráme se o
            odpad, stavbu i její dopravní zajištění bez předávání mezi cizími
            firmami.
          </p>
        </div>
      </section>

      {lifts.map((lift, i) => (
        <div key={lift.id}>
          <div className="seam" role="presentation" />
          <section
            id={lift.id}
            className={`band band--lift lift lift--${lift.acc}`}
            aria-labelledby={`${lift.id}-nadpis`}
          >
            <div className="container lift__grid">
              <div className="lift__marker" aria-hidden="true">
                {lift.marker}
              </div>
              <div className="lift__content">
                <p className="eyebrow eyebrow--acc">{lift.kicker}</p>
                <h3 id={`${lift.id}-nadpis`} className="lift__title">
                  {lift.title}
                </h3>
                <p className="lift__body">{lift.body}</p>
                <ul className="lift__facts">
                  {lift.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              {i === 1 && (
                <AiImage
                  src="/section-1.webp"
                  alt="Rozestavěná betonová konstrukce s bedněním a výztuží"
                  className="lift__media"
                />
              )}
            </div>
          </section>
        </div>
      ))}

      <div className="seam" role="presentation" />

      <section className="band band--about" aria-labelledby="o-nas-nadpis">
        <div className="container about__grid">
          <div className="about__text">
            <p className="eyebrow eyebrow--light">O firmě</p>
            <h2 id="o-nas-nadpis" className="section-title section-title--light">
              Betonujeme na Hradecku od&nbsp;roku 1998
            </h2>
            <p className="about__lead">
              Pod hlavičkou fyzické osoby jsme začínali už v roce 1998, jako
              KENVI CZ s.r.o. fungujeme od roku 2011. Za tu dobu jsme spojili
              stavitelství, odpadové hospodářství a dopravu do jednoho týmu —
              zákazník tak řeší celou zakázku na jednom místě.
            </p>
            <dl className="about__facts">
              <div>
                <dt>Na trhu</dt>
                <dd>od roku 1998</dd>
              </div>
              <div>
                <dt>Působnost</dt>
                <dd>Královéhradecký kraj</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420731859500">+420 731 859 500</a>
                </dd>
              </div>
            </dl>
          </div>

          <AiImage
            src="/section-2.webp"
            alt="Technika KENVI CZ na stavbě — nákladní vozidlo a stavební stroj"
            className="about__media"
          />
        </div>

        <div className="container">
          <p className="eyebrow eyebrow--light about__certtitle">Certifikace</p>
          <ul className="seals">
            {seals.map((s) => (
              <li key={s.code} className="seal">
                <span className="seal__disc" aria-hidden="true">
                  {s.code}
                </span>
                <span className="seal__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
