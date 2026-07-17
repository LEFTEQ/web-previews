import { LiveStatus } from "./motion";

// Hero "organ register" — graduated brass pipes echoing the St. Mořic organ facade.
const HERO_BARS = [
  44, 60, 74, 88, 100, 86, 70, 56, 68, 84, 96, 78, 62, 50, 58, 74, 90, 66, 52, 46,
];

// Four registers of the galerie. Pipe height is proportional to the real number of units.
const CATEGORIES = [
  {
    name: "Obchody",
    count: 9,
    height: 100,
    lead: "Denní nákup bez objíždění města.",
    tenants: ["Supermarket", "Drogerie", "Knihkupectví", "Trafika", "Papírnictví"],
  },
  {
    name: "Služby",
    count: 6,
    height: 70,
    lead: "Vyřídíte cestou z práce.",
    tenants: ["Čistírna", "Opravna obuvi", "Výroba klíčů", "Bankomat", "Výdejna zásilek"],
  },
  {
    name: "Móda",
    count: 5,
    height: 58,
    lead: "Oblečení pro celou rodinu.",
    tenants: ["Dámská móda", "Pánská móda", "Obuv", "Doplňky"],
  },
  {
    name: "Gastronomie",
    count: 4,
    height: 46,
    lead: "Káva i polední menu.",
    tenants: ["Kavárna", "Pekárna", "Bistro", "Cukrárna"],
  },
];

export default function Page() {
  return (
    <main className="gm">
      <header className="gm-header">
        <div className="gm-inner gm-header-row">
          <a className="gm-mark" href="#top" aria-label="Galerie Moritz">
            <span className="gm-mark-mono">GM</span>
            <span className="gm-mark-name">Galerie Moritz</span>
          </a>
          <nav className="gm-nav" aria-label="Hlavní navigace">
            <a href="#rejstriky">Obchody</a>
            <a href="#doba">Otevírací doba</a>
            <a href="#o-centru">O centru</a>
          </nav>
        </div>
      </header>

      <section className="gm-hero" id="top">
        <div className="gm-inner">
          <p className="gm-eyebrow gm-eyebrow--coral">Nákupní galerie · Olomouc, 8. května</p>
          <h1 className="gm-wordmark">
            <span className="gm-wordmark-a">Galerie</span>
            <span className="gm-wordmark-b">Moritz</span>
          </h1>
          <p className="gm-lede">
            Vše na jednom místě u kostela svatého Mořice — od čerstvého pečiva
            po drogerii, sedm dní v týdnu, kousek od Horního náměstí.
          </p>

          <LiveStatus />
        </div>

        <div className="gm-register gm-register--hero" aria-hidden="true">
          {HERO_BARS.map((h, i) => (
            <span
              key={i}
              className="gm-bar"
              style={{ height: `${h}%`, animationDelay: `${i * 22}ms` }}
            />
          ))}
        </div>
      </section>

      <section className="gm-section gm-directory" id="rejstriky">
        <div className="gm-inner">
          <div className="gm-section-head">
            <p className="gm-eyebrow">Co u nás najdete</p>
            <h2 className="gm-h2">Čtyři rejstříky, jedna galerie</h2>
            <p className="gm-section-note">
              Výška píšťaly odpovídá počtu provozoven v každém rejstříku —
              čím vyšší, tím víc obchodů.
            </p>
          </div>

          <div className="gm-reg-grid">
            {CATEGORIES.map((c) => (
              <article className="gm-reg-col" key={c.name}>
                <div className="gm-reg-pipe-wrap">
                  <span
                    className="gm-reg-pipe"
                    style={{ height: `${c.height}%` }}
                    aria-hidden="true"
                  />
                </div>
                <div className="gm-reg-body">
                  <p className="gm-reg-count">
                    <span className="gm-reg-num">{c.count}</span>
                    <span className="gm-reg-unit">provozoven</span>
                  </p>
                  <h3 className="gm-reg-name">{c.name}</h3>
                  <p className="gm-reg-lead">{c.lead}</p>
                  <ul className="gm-reg-list">
                    {c.tenants.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gm-section gm-info" id="o-centru">
        <div className="gm-inner gm-info-grid">
          <div className="gm-info-main">
            <p className="gm-eyebrow">Praktické informace</p>
            <h2 className="gm-h2 gm-h2--light">Otevřeno každý den</h2>
            <p className="gm-info-text">
              Galerie Moritz je nákupní centrum v srdci Olomouce, pojmenované
              po nedalekém kostele svatého Mořice s jedněmi z největších varhan
              ve střední Evropě. Pod jednou střechou najdete supermarket,
              drogerii, služby i posezení u kávy.
            </p>

            <ul className="gm-perks">
              <li>Parkování 90 minut zdarma</li>
              <li>Bezbariérový přístup</li>
              <li>Wi-Fi zdarma</li>
              <li>Dárkové poukazy</li>
            </ul>
          </div>

          <aside className="gm-info-side" id="doba">
            <div className="gm-hours">
              <h3 className="gm-hours-title">Otevírací doba</h3>
              <dl className="gm-hours-list">
                <div className="gm-hours-row">
                  <dt>Galerie</dt>
                  <dd>Po–Ne 9:00–19:00</dd>
                </div>
                <div className="gm-hours-row">
                  <dt>Supermarket</dt>
                  <dd>
                    Po–So 7:00–20:00
                    <br />
                    Ne 8:00–20:00
                  </dd>
                </div>
              </dl>
            </div>

            <div className="gm-where">
              <h3 className="gm-hours-title">Kudy k nám</h3>
              <address className="gm-address">
                Ukázková 123
                <br />
                779 00 Olomouc
                <br />
                <span className="gm-address-note">
                  5 minut pěšky od Horního náměstí
                </span>
              </address>
              <p className="gm-contact">
                Info: 777 111 222
                <br />
                info@example.cz
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
