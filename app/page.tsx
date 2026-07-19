import { HeroCrate } from "./motion";

const heroTiles = [
  { label: "Brzdy", icon: "disc" },
  { label: "Sedačka", icon: "seat" },
  { label: "Děti", icon: "child" },
];

const services = [
  {
    tag: "Servis",
    title: "Sezónní prohlídka kola",
    body: "Projedeme 21 bodů: brzdy, řetěz, převody, ložiska i tlak v pláštích. Odjíždíte s kolem, které nedrhne a neposkakuje.",
    passenger: null,
  },
  {
    tag: "Servis",
    title: "Seřízení a servis brzd",
    body: "Kotoučové i ráfkové. U cargo kola s dětmi je brzda to úplně první, na co u nás sáhneme — a to poznáte na cestě z kopce.",
    passenger: null,
  },
  {
    tag: "Montáž",
    title: "Montáž dětské sedačky",
    body: "Přední, zadní i sedačku na řídítka upevníme podle váhy dítěte a typu rámu. Ukážeme vám, jak ji sami sundáte a zase nasadíte.",
    passenger: "seat",
  },
  {
    tag: "Servis",
    title: "Servis elektro pohonu",
    body: "Diagnostika baterie i motoru, aktualizace systému a výměna řetězu na e-cargu, které toho utáhne opravdu hodně.",
    passenger: null,
  },
  {
    tag: "Půjčovna",
    title: "Půjčovna cargo kol",
    body: "Vozte děti celý víkend, než se rozhodnete koupit. Vyzkoušíte si zatáčení, parkování i to, jak se s nákladem šlape do ostravských kopců.",
    passenger: "child",
  },
  {
    tag: "Poradna",
    title: "Výběr kola na míru",
    body: "Poradíme s cargo kolem, dětským kolem i vozíkem. Jsme rodiče — víme, na co se ptát a co po roce vožení fakt oceníte.",
    passenger: null,
  },
];

function PassengerBadge({ kind }: { kind: string }) {
  return (
    <span className="cb-passenger" aria-hidden="true">
      {kind === "seat" ? (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4v9a4 4 0 0 0 4 4h5" />
          <path d="M6 9h7" />
          <circle cx="18" cy="18" r="1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="6" r="2.4" />
          <path d="M12 9v6" />
          <path d="M8 12h8" />
          <path d="M9 20l3-5 3 5" />
        </svg>
      )}
    </span>
  );
}

export default function Page() {
  return (
    <main className="cb-main">
      <header className="cb-top">
        <a className="cb-wordmark" href="#" aria-label="Cargo Bike Daddy, úvodní stránka">
          <span className="cb-wordmark__crate" aria-hidden="true" />
          <span className="cb-wordmark__text">
            Cargo Bike <em>Daddy</em>
          </span>
        </a>
        <span className="cb-top__loc">Ostrava · servis &amp; půjčovna</span>
      </header>

      <section className="cb-hero" aria-labelledby="cb-hero-title">
        <div className="cb-hero__grid">
          <div className="cb-hero__text">
            <p className="cb-eyebrow">Servis jízdních kol pro rodiny · Ostrava</p>
            <h1 id="cb-hero-title" className="cb-hero__title">
              Naložte děti.
              <br />
              O zbytek se
              <br />
              <span className="cb-hero__hi">postaráme.</span>
            </h1>
            <p className="cb-hero__sub">
              Břeťa a Tom — dva táta, co s vámi vyladí brzdy, upevní
              sedačku a pošlou vás s dětmi bezpečně na cestu. Servis,
              prodej i půjčovna cargo kol pod jednou střechou.
            </p>
            <div className="cb-hero__cta">
              <a className="cb-btn cb-btn--primary" href="#servis">
                Objednat servis
              </a>
              <a className="cb-btn cb-btn--ghost" href="tel:+420777111222">
                Zavolat 777 111 222
              </a>
            </div>
          </div>

          <div className="cb-hero__box">
            <HeroCrate tiles={heroTiles} />
            <p className="cb-hero__caption">
              Naložit a zkontrolovat, než vyrazíte.
            </p>
          </div>
        </div>
      </section>

      <section className="cb-section cb-section--paper" id="servis" aria-labelledby="cb-serv-title">
        <div className="cb-inner">
          <div className="cb-head">
            <p className="cb-eyebrow cb-eyebrow--teal">Co u nás vyladíme</p>
            <h2 id="cb-serv-title" className="cb-h2">
              Každou práci naložíme do bedny
            </h2>
            <p className="cb-lead">
              Přivezete kolo, my ho projedeme kus po kusu. Cenu i termín
              znáte předem — žádné překvapení u pokladny.
            </p>
          </div>

          <ul className="cb-catalog">
            {services.map((s) => (
              <li key={s.title} className="cb-card">
                <span className="cb-card__stripe" aria-hidden="true" />
                {s.passenger ? <PassengerBadge kind={s.passenger} /> : null}
                <div className="cb-card__body">
                  <span className="cb-tag">{s.tag}</span>
                  <h3 className="cb-card__title">{s.title}</h3>
                  <p className="cb-card__text">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cb-section cb-section--navy" aria-labelledby="cb-about-title">
        <div className="cb-inner">
          <div className="cb-head cb-head--light">
            <p className="cb-eyebrow cb-eyebrow--hi">Proč zrovna k nám</p>
            <h2 id="cb-about-title" className="cb-h2">
              Jsme rodiče jako vy
            </h2>
          </div>

          <div className="cb-about">
            <blockquote className="cb-quote">
              <span className="cb-card__stripe" aria-hidden="true" />
              <PassengerBadge kind="child" />
              <p className="cb-quote__text">
                „Jsme rodiče jako vy. Už stovkám rodin jsme pomohli
                začít jezdit s dětmi na kole — a rádi pomůžeme i vám.
                Než kolo pustíme z dílny, projedeme s ním trasu, jako
                by na něm zítra jely naše vlastní děti.“
              </p>
              <footer className="cb-quote__by">
                Břeťa &amp; Tom, zakladatelé Cargo Bike Daddy
              </footer>
            </blockquote>

            <ul className="cb-stats">
              <li className="cb-stat">
                <span className="cb-stat__num">500+</span>
                <span className="cb-stat__label">rodin, které už jezdí</span>
              </li>
              <li className="cb-stat">
                <span className="cb-stat__num">21</span>
                <span className="cb-stat__label">bodů u každé prohlídky</span>
              </li>
              <li className="cb-stat">
                <span className="cb-stat__num">Po–Pá</span>
                <span className="cb-stat__label">dílna otevřená 9–17</span>
              </li>
              <li className="cb-stat">
                <span className="cb-stat__num">Ostrava</span>
                <span className="cb-stat__label">kamenná prodejna i servis</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
