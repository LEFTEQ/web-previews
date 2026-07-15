import { ServiceFeed } from "./motion";

const services = [
  {
    ch: "01",
    name: "Kamerové systémy",
    desc: "IP kamery s nočním viděním a detekcí pohybu. Ostrý obraz, spolehlivý záznam a živý přístup z mobilu odkudkoli.",
  },
  {
    ch: "02",
    name: "Zabezpečovací signalizace EZS",
    desc: "Alarmy s detekcí pohybu a napojením na pult centrální ochrany. Ohlásí vetřelce dřív, než si vás stihne všimnout.",
  },
  {
    ch: "03",
    name: "Požární signalizace EPS",
    desc: "Kouřové a teplotní hlásiče, které spustí poplach a přivolají pomoc dřív, než plameny naberou sílu.",
  },
  {
    ch: "04",
    name: "LAN sítě a komunikace",
    desc: "Strukturovaná kabeláž a datové rozvody, na kterých kamery i počítače běží bez výpadků a zádrhelů.",
  },
  {
    ch: "05",
    name: "Kontrola vstupu a docházka",
    desc: "Čipy, čtečky a docházkové terminály. Přesně víte, kdo přišel, kdy a kam má přístup.",
  },
  {
    ch: "06",
    name: "Silnoproudé elektroinstalace",
    desc: "Rozvaděče, zásuvky a přívody podle normy — pevný a bezpečný základ pro každou technologii v objektu.",
  },
  {
    ch: "07",
    name: "Evakuační rozhlas",
    desc: "Ozvučení, které v krizi srozumitelně navede lidi ven — slyšitelně, klidně a bez paniky.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <div className="topbar">
        <a className="wordmark" href="#top" aria-label="ASTRA-K, kamerové systémy">
          <span className="wordmark__rec" aria-hidden="true" />
          ASTRA<span className="wordmark__k">·K</span>
          <span className="wordmark__sub">s.r.o.</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>

      <header className="hero" id="top">
        <div className="hero__scan" aria-hidden="true" />
        <div className="hero__telemetry mono" aria-hidden="true">
          <span className="tel tel--rec">
            <i className="tel__dot" />REC
          </span>
          <span className="tel">49.7475°N · 13.3776°E</span>
          <span className="tel">PLZEŇ / CH01</span>
        </div>

        <p className="hero__eyebrow mono">Kamerové systémy · Plzeň · od roku 1999</p>

        <div className="hero__frame">
          <span className="corner tl" aria-hidden="true" />
          <span className="corner tr" aria-hidden="true" />
          <span className="corner bl" aria-hidden="true" />
          <span className="corner br" aria-hidden="true" />
          <span className="crosshair" aria-hidden="true" />
          <h1 className="hero__title">
            Kamerový dohled,
            <br />
            který <span className="hero__accent">skutečně vidí</span>.
          </h1>
        </div>

        <p className="hero__lede">
          Navrhujeme, montujeme a servisujeme kamerové a zabezpečovací systémy v Plzni
          a okolí. Ostrý obraz ve dne i v noci, záznam, na který se dá spolehnout, a
          přístup do kamer přímo z vašeho telefonu.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="tel:+420733353961">
            Zavolat 733 353 961
          </a>
          <a className="btn btn--ghost" href="#sluzby">
            Prohlédnout služby
          </a>
        </div>
      </header>

      <section className="section" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section__head">
          <p className="mono section__eyebrow">7 kanálů · jedna firma</p>
          <h2 className="section__title" id="sluzby-nadpis">
            Co pro vás hlídáme
          </h2>
          <p className="section__intro">
            Slaboproud i silnoproud pod jednou střechou. Přijedeme, zaměříme, navrhneme
            řešení na míru vašemu objektu a postaráme se i o pozdější servis.
          </p>
        </div>

        <div className="feeds">
          {services.map((s) => (
            <ServiceFeed key={s.ch} channel={s.ch} name={s.name} desc={s.desc} />
          ))}
        </div>
      </section>

      <section className="section section--trust" id="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="trust__grid">
          <div className="trust__lead">
            <p className="mono section__eyebrow">Založeno v dubnu 1999</p>
            <div className="reticle trust__year">
              <span className="corner tl" aria-hidden="true" />
              <span className="corner tr" aria-hidden="true" />
              <span className="corner bl" aria-hidden="true" />
              <span className="corner br" aria-hidden="true" />
              <span className="trust__num">25</span>
              <span className="trust__unit mono">let na Plzeňsku</span>
            </div>
            <h2 className="section__title" id="o-nas-nadpis">
              Technika, která chrání to, na čem vám záleží
            </h2>
          </div>

          <ul className="pillars">
            <li className="pillar">
              <span className="pillar__tag mono">01 / rychlost</span>
              <h3 className="pillar__title">Rychlé řešení</h3>
              <p>Přijedeme, namontujeme, zprovozníme — bez zbytečných průtahů a odkladů.</p>
            </li>
            <li className="pillar">
              <span className="pillar__tag mono">02 / jednání</span>
              <h3 className="pillar__title">Profesionální jednání</h3>
              <p>Držíme se dohody a komunikujeme napřímo, bez zbytečného technického balastu.</p>
            </li>
            <li className="pillar">
              <span className="pillar__tag mono">03 / jistota</span>
              <h3 className="pillar__title">Bezpečí na prvním místě</h3>
              <p>Naše technologie chrání vás i váš majetek. Přes dvacet let bez kompromisů.</p>
            </li>
          </ul>
        </div>

        <div className="contact" id="kontakt">
          <p className="mono contact__label">Kancelář · osobní schůzka po domluvě</p>
          <div className="contact__rows">
            <a className="contact__row" href="tel:+420733353961">
              <span className="mono contact__key">TEL</span>
              +420 733 353 961
            </a>
            <a className="contact__row" href="mailto:info@astra-k.cz">
              <span className="mono contact__key">MAIL</span>
              info@astra-k.cz
            </a>
            <p className="contact__row">
              <span className="mono contact__key">ADR</span>
              U Tržiště 5, 301 00 Plzeň
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
