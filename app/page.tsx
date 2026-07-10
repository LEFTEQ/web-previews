import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "ADAS",
      title: "Kalibrace asistenčních systémů",
      lead: "Po výměně čelního skla nebo po nehodě",
      body:
        "Kalibrujeme adaptivní tempomat, varování před kolizí i asistent jízdy v pruzích na kalibračním zařízení BOSCH. Seřídíme senzory přesně podle geometrické jízdní osy a v souladu s požadavky výrobce.",
      tags: ["Active Cruise Control", "Forward Collision Warning", "Lane Assist"]
    },
    {
      code: "3D",
      title: "Měření a seřízení 3D geometrie",
      lead: "Na počkání, bez objednání — od 990 Kč bez DPH",
      body:
        "Osobní i dodávková auta. Správná geometrie šetří pneumatiky i palivo, chrání čepy, ložiska a odpružení a vrací autu stabilitu v zatáčce. 3D technologie měří rychle a přesně, bez rizika poškození senzorů.",
      tags: ["Osobní vozy", "Dodávky", "Ford Transit", "VW Crafter"]
    },
    {
      code: "KLEMP",
      title: "Autoklempířství a lakování",
      lead: "Od drobného ťukance po opravu po nehodě",
      body:
        "Rovnáme karoserie, řešíme celé pojistné události a vyřídíme papírování za vás. Nabídneme kvalitní díly z druhovýroby i garantované repasy od automobilek — vždy po dohodě s vámi.",
      tags: ["Pojistné události", "Náhradní vůz", "Odtah", "STK"]
    }
  ];

  const brands = ["FORD", "VW", "AUDI", "ŠKODA", "SEAT", "BMW"];

  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Autoservis Michal, Praha 9">
          <span className="wordmark__mark" aria-hidden="true">AM</span>
          <span className="wordmark__text">
            Autoservis <strong>Michal</strong>
            <span className="wordmark__loc">Praha 9 · Českobrodská</span>
          </span>
        </a>
        <a className="top__call" href="tel:+420602350947">
          <span className="top__call-label">Zavolat</span>
          <span className="top__call-num">602 350 947</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            width={1600}
            height={1000}
            alt="Dílna Autoservisu Michal — vůz na zvedáku připravený k seřízení geometrie"
          />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Rodinný autoservis od roku 1989</p>
          <h1 className="hero__title">
            Auto zpět<br />
            <span className="hero__accent">v ose.</span>
          </h1>
          <p className="hero__lead">
            Rovnáme karoserie a kalibrujeme asistenční systémy tak, aby auto po
            nehodě i po výměně skla zase jelo přesně rovně. Drobné opravy stihneme
            do druhého dne.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420602350947">Zavolat na servis</a>
            <a className="btn btn--ghost" href="#sluzby">Co umíme</a>
          </div>
        </div>

        <dl className="hero__facts">
          <div className="fact">
            <dt>Od roku</dt>
            <dd>1989</dd>
          </div>
          <div className="fact">
            <dt>Geometrie od</dt>
            <dd>990 Kč</dd>
          </div>
          <div className="fact">
            <dt>Drobné opravy</dt>
            <dd>do 2. dne</dd>
          </div>
        </dl>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-h">
        <div className="section-head">
          <p className="section-head__kicker">Tři věci, kterými se živíme</p>
          <h2 id="services-h" className="section-head__title">
            Rovnáme, měříme, kalibrujeme
          </h2>
        </div>

        <div className="grid">
          {services.map((s) => (
            <article className="card" key={s.code}>
              <span className="card__code" aria-hidden="true">{s.code}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__lead">{s.lead}</p>
              <p className="card__body">{s.body}</p>
              <ul className="chips">
                {s.tags.map((t) => (
                  <li className="chip" key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="services__figure">
          <img
            src="/section-1.webp"
            width={1400}
            height={900}
            alt="Kalibrace ADAS na zařízení BOSCH v dílně Autoservisu Michal"
          />
          <figcaption>
            Kalibrujeme na počítačovém zařízení BOSCH — přesně podle geometrické
            jízdní osy vozu.
          </figcaption>
        </figure>
      </section>

      <section className="about" aria-labelledby="about-h">
        <figure className="about__figure">
          <img
            src="/section-2.webp"
            width={1400}
            height={1000}
            alt="Mechanik Autoservisu Michal při práci na karoserii vozu"
          />
        </figure>

        <div className="about__text">
          <p className="section-head__kicker">Kdo vám auto opraví</p>
          <h2 id="about-h" className="section-head__title">
            Rodinná dílna, ne montovna
          </h2>
          <p className="about__p">
            Začínali jsme v roce 1989, od roku 1991 jsme jezdili výhradně Fordy a
            od roku 2000 opravujeme všechny značky. Specializujeme se na údržbu
            vozových parků malých a středních firem — víme, že auto v servisu je
            auto, které nevydělává, a tak vás nedržíme déle, než je nutné.
          </p>
          <p className="about__p">
            Oproti autorizovaným servisům máme kratší termíny, konkrétní ceny a
            osobní přístup. Po dohodě nabídneme díly z druhovýroby i garantované
            repasy od automobilek. Odtah, náhradní vůz, STK i papírování na
            dopravním inspektorátu vyřídíme za vás.
          </p>

          <div className="brands" aria-label="Značky, na které se specializujeme">
            {brands.map((b) => (
              <span className="brands__item" key={b}>{b}</span>
            ))}
          </div>

          <p className="about__sign">
            — Lukáš Böhm a Michal Kotalík, Autoservis Michal s.r.o.
          </p>

          <dl className="info">
            <div className="info__row">
              <dt>Kde nás najdete</dt>
              <dd>Českobrodská 10/19, Praha 9</dd>
            </div>
            <div className="info__row">
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8:00–17:00</dd>
            </div>
            <div className="info__row">
              <dt>Telefon</dt>
              <dd><a href="tel:+420602350947">602 350 947</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
