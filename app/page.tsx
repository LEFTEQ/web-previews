const rooms: [string, string][] = [
  ["Deluxe", "Prostorný pokoj s elegantním designem"],
  ["Deluxe s výhledem na město", "Ranní Brno přímo z okna"],
  ["Executive", "Více prostoru a klidu pro práci i odpočinek"],
  ["Apartmá Junior", "Obývací kout navíc pro delší pobyty"],
  ["Apartmá", "Samostatná ložnice a reprezentativní salon"],
  ["Superior Attic", "Podkrovní apartmá s atmosférou paláce"],
];

const venues: { name: string; note: string; hours: string }[] = [
  { name: "Restaurace Atrium", note: "Fine dining, sezónní menu z lokálních surovin", hours: "Po–Ne 12:00–23:00" },
  { name: "Lobby bar", note: "Káva, domácí dezerty, vína a koktejly", hours: "Denně 07:00–24:00" },
  { name: "Wellness & SPA", note: "Finská sauna, parní lázeň, thajské masáže", hours: "Sauna 24 h · masáže 9:00–21:00" },
  { name: "Fitness", note: "Plně vybavené, pro hotelové hosty zdarma", hours: "24 hodin denně" },
  { name: "Konference", note: "Pět sálů, moderní technika na míru", hours: "Až 160 hostů" },
];

const facts: string[] = [
  "Pětihvězdičkový komfort",
  "Konference až pro 160 hostů",
  "Součást sítě 6 hotelů",
  "Valet parking zdarma",
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="hero__arcade" aria-hidden="true">
          <span className="arch" />
          <span className="arch" />
          <span className="arch" />
          <span className="arch" />
          <span className="arch" />
        </div>

        <div className="hero__inner wrap">
          <p className="hero__stars" aria-hidden="true">★★★★★</p>
          <p className="eyebrow eyebrow--light">Pětihvězdičkový hotel · centrum Brna</p>
          <h1 className="wordmark">
            <span>Grand</span>
            <span>Palace</span>
          </h1>
          <p className="wordmark__place">B&nbsp;·&nbsp;R&nbsp;·&nbsp;N&nbsp;·&nbsp;O</p>
          <div className="hero__rule" aria-hidden="true" />
          <p className="hero__tagline">
            Luxusní elegance v srdci Brna — pokoje, apartmá, restaurace Atrium a wellness
            pod jednou historickou střechou.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#pobyt">Rezervovat pobyt</a>
            <a className="btn btn--ghost" href="tel:+420777111222">Zavolat 777&nbsp;111&nbsp;222</a>
          </div>
        </div>
      </header>

      <section className="section section--dark" id="pobyt" aria-labelledby="pobyt-nadpis">
        <div className="wrap">
          <div className="section__head">
            <span className="chapter">01</span>
            <p className="eyebrow eyebrow--light">Ubytování &amp; zážitky</p>
            <h2 id="pobyt-nadpis" className="section__title">Vše pod jednou palácovou střechou</h2>
            <p className="section__lead">
              Šest kategorií pokojů a apartmá, gastronomie i relaxace — všechno v jedné adrese
              pár kroků od náměstí Svobody.
            </p>
          </div>

          <div className="directory">
            <p className="directory__label">Pokoje &amp; apartmá</p>
            <ul className="rooms">
              {rooms.map(([name, note], i) => (
                <li className="room" key={name}>
                  <span className="room__no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="room__name">{name}</span>
                  <span className="room__note">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="venues">
            {venues.map((v) => (
              <article className="venue" key={v.name}>
                <h3 className="venue__name">{v.name}</h3>
                <p className="venue__note">{v.note}</p>
                <p className="venue__hours">{v.hours}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light" aria-labelledby="about-nadpis">
        <div className="wrap about">
          <div className="about__col">
            <span className="chapter chapter--ink">02</span>
            <p className="eyebrow">Proč Grand Palace</p>
            <h2 id="about-nadpis" className="section__title section__title--ink">
              Palác, který si vás pamatuje.
            </h2>
            <p className="about__body">
              Pětihvězdičkový hotel ve výjimečné poloze v centru Brna — dříve známý jako
              Barceló Palace, dnes hrdý člen skupiny CZECH INN HOTELS. Prostorné pokoje
              s elegantním designem, vynikající gastronomie a komplexní služby od valet
              parkingu po business centrum.
            </p>
            <p className="about__addr">Ukázková 123, Brno — pár kroků od náměstí Svobody</p>
          </div>

          <div className="about__col">
            <blockquote className="quote">
              <p>„Děláme maximum pro Vaši spokojenost. Za to osobně ručím.“</p>
              <cite>Alexandra, recepce</cite>
            </blockquote>
            <ul className="facts">
              {facts.map((f) => (
                <li className="fact" key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
