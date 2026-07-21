import { AiImage } from "./_ui";

const offer = [
  {
    n: "01",
    t: "Zateplování stěn staveb",
    d: "Kontaktní zateplovací systémy pro bytové i nebytové budovy, včetně nových omítek a fasád.",
  },
  {
    n: "02",
    t: "Hydroizolace střech a spodních staveb",
    d: "Ploché i šikmé střechy, izolace základů a suterénů proti tlakové vodě a zemní vlhkosti.",
  },
  {
    n: "03",
    t: "Elektroinstalace bytové i průmyslové",
    d: "Silnoproud, zabezpečovací signalizace (EZS), telekomunikační a počítačové sítě.",
  },
  {
    n: "04",
    t: "Zdravotechnika, topení a plyn",
    d: "Rozvody vody a kanalizace, ústřední vytápění a plynoinstalace kompletně na klíč.",
  },
  {
    n: "05",
    t: "Sádrokartonové konstrukce",
    d: "Příčky, podhledy, půdní vestavby a nástavby s čistou a rychlou suchou montáží.",
  },
  {
    n: "06",
    t: "Obklady a dlažby",
    d: "Keramické obklady a dlažby v koupelnách, provozech i na venkovních plochách.",
  },
  {
    n: "07",
    t: "Klempířské, tesařské a lešenářské práce",
    d: "Krovy, oplechování a montáž lešení pro rekonstrukce i novostavby.",
  },
  {
    n: "08",
    t: "Inženýrské sítě, sanace a doprava",
    d: "Výstavba přípojek a sítí, vysoušení zdiva, sanace vlhkého zdiva a autodoprava materiálu.",
  },
];

const schedule = [
  ["Zápis do obchodního rejstříku", "26. 11. 1997"],
  ["Změna právní formy na a.s.", "11. 2. 2009"],
  ["Rejstříkový soud", "Krajský soud v Ostravě"],
  ["Působnost", "Olomoucký region"],
  ["Personál", "Technické i dělnické profese"],
];

export default function Page() {
  return (
    <main className="page">
      <div className="scaffold" aria-hidden="true">
        <div className="scaffold__inner">
          <span className="standard standard--edge" style={{ left: "0%", ["--i" as string]: 0 }} />
          <span className="standard" style={{ left: "25%", ["--i" as string]: 1 }} />
          <span className="standard" style={{ left: "50%", ["--i" as string]: 2 }} />
          <span className="standard" style={{ left: "75%", ["--i" as string]: 3 }} />
          <span className="standard standard--edge" style={{ left: "100%", ["--i" as string]: 4 }} />
        </div>
      </div>

      <div className="wrap">
        <header className="masthead">
          <a className="mark" href="#uvod">
            <span className="mark__mono">PSO</span>
            <span className="mark__full">Provádění staveb Olomouc&nbsp;·&nbsp;a.s.</span>
          </a>
          <div className="masthead__meta">
            <span className="coords">49.5938° N&nbsp;&nbsp;17.2509° E</span>
            <a className="call" href="tel:+420777111222">
              <span className="tick" aria-hidden="true" />
              Zavolat&nbsp;+420&nbsp;777&nbsp;111&nbsp;222
            </a>
          </div>
        </header>

        <section className="hero band" id="uvod">
          <p className="eyebrow">Stavební společnost&nbsp;·&nbsp;Olomouc&nbsp;·&nbsp;od 1997</p>
          <h1 className="nameplate">
            Provádění<br />
            staveb<br />
            <span className="nameplate__row">
              Olomouc<sup className="nameplate__as">a.s.</sup>
            </span>
          </h1>
          <div className="floor" aria-hidden="true" />
          <div className="hero__row">
            <p className="lead">
              Stavíme a rekonstruujeme v olomouckém regionu už přes čtvrt
              století. Od základů po střechu, od jedné party řemeslníků po
              kompletní dodávku stavby na klíč — s vlastními techniky, dělníky
              a zárukami, na které se dá spolehnout.
            </p>
            <div className="media hero__media">
              <AiImage
                src="/hero.webp"
                alt="Rozestavěná budova s lešením při realizaci Provádění staveb Olomouc"
                className="media__img"
              />
            </div>
          </div>
        </section>

        <section className="band" id="nabidka">
          <div className="rule" aria-hidden="true" />
          <div className="band__head">
            <p className="eyebrow">Naše nabídka</p>
            <h2 className="h2">Osm profesí pod jednou střechou</h2>
            <p className="band__note">
              Každý řádek je jedna podlažní deska naší nabídky — samostatná
              profese, kterou u nás zajistíte bez shánění dalších subdodavatelů.
            </p>
          </div>

          <div className="media band__banner">
            <AiImage
              src="/section-1.webp"
              alt="Řemeslníci Provádění staveb Olomouc při práci na stavbě"
              className="media__img"
            />
          </div>

          <ol className="offer">
            {offer.map((o) => (
              <li className="offer__row" key={o.n}>
                <span className="offer__num">{o.n}</span>
                <span className="tick" aria-hidden="true" />
                <div className="offer__body">
                  <h3 className="offer__title">{o.t}</h3>
                  <p className="offer__desc">{o.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="band" id="o-spolecnosti">
          <div className="rule" aria-hidden="true" />
          <div className="band__head">
            <p className="eyebrow">O společnosti&nbsp;·&nbsp;od 1997</p>
            <h2 className="h2">Firma, která tu byla a bude</h2>
          </div>

          <div className="about">
            <div className="about__text">
              <p>
                Společnost <strong>Provádění staveb Olomouc, a.s.</strong>
                vznikla v roce 2009 změnou právní formy z původní s.r.o.,
                zapsané do obchodního rejstříku už v listopadu 1997. Za tu dobu
                jsme si v olomouckém stavebnictví vydobyli stabilní postavení.
              </p>
              <p>
                Patříme k mála stavebním firmám v regionu, které dokážou
                zaručit kontinuitu a stálost. A právě to je rozhodující ve
                chvíli, kdy uplatňujete záruku — je tu pořád stejná firma,
                stejní lidé a stejná odpovědnost za odvedenou práci.
              </p>
            </div>

            <dl className="ledger">
              {schedule.map(([k, v]) => (
                <div className="ledger__row" key={k}>
                  <dt className="ledger__key">{k}</dt>
                  <dd className="ledger__val">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="media about__media">
            <AiImage
              src="/section-2.webp"
              alt="Dokončená stavba realizovaná firmou Provádění staveb Olomouc"
              className="media__img"
            />
          </div>

          <div className="contact">
            <div className="contact__col">
              <span className="eyebrow">Provozovna</span>
              <p className="contact__line">
                Provádění staveb Olomouc, a.s.
                <br />
                Ukázková 123, 779&nbsp;00 Olomouc
              </p>
            </div>
            <div className="contact__col">
              <span className="eyebrow">Spojení</span>
              <p className="contact__line">
                <a className="link" href="tel:+420777111222">
                  +420&nbsp;777&nbsp;111&nbsp;222
                </a>
                <br />
                <a className="link" href="mailto:info@example.cz">
                  info@example.cz
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
