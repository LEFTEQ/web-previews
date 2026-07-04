import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="site">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="A stav projekt HK, domovská stránka">
          <span className="wordmark-a">A</span>
          <span className="wordmark-rest">stav&nbsp;projekt</span>
          <span className="wordmark-hk">HK</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#co-stavime">Co stavíme</a>
          <a href="#duvera">Proč nám věřit</a>
          <a className="nav-call" href="tel:+420731165167">Zavolat 731 165 167</a>
        </nav>
      </header>

      <section className="hero" id="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Novostavba rodinného domu na klíč postavená firmou A stav projekt HK na Královéhradecku"
            width={1600}
            height={1100}
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="hero-body">
          <p className="eyebrow">Rodinná stavební firma · Mokrovousy u Hradce Králové</p>
          <h1 className="hero-title">
            Stavíme domy,
            <br />
            do kterých se lidé
            <br />
            <span className="hero-accent">po letech vracejí.</span>
          </h1>
          <p className="hero-lede">
            Od roku 1990 stavíme na Královéhradecku rodinné domy na klíč,
            rekonstruujeme byty i půdy a zateplujeme fasády. Jedna parta,
            jedno slovo, jedna záruka&nbsp;— naše jméno na vaší stavbě.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420731165167">
              Zavolat na stavbu
            </a>
            <a className="btn btn-ghost" href="#co-stavime">
              Podívat se, co stavíme
            </a>
          </div>
        </div>

        <aside className="hero-plate" aria-label="Základní údaje o firmě">
          <dl className="plate">
            <div className="plate-row">
              <dt>Založeno</dt>
              <dd>1990</dd>
            </div>
            <div className="plate-row">
              <dt>Působíme</dt>
              <dd>Hradec Králové a okolí</dd>
            </div>
            <div className="plate-row">
              <dt>Voláte přímo</dt>
              <dd>
                <a href="tel:+420731165167">731 165 167</a>
              </dd>
            </div>
            <div className="plate-row">
              <dt>Na příjmu</dt>
              <dd>Po–Pá 7:00–16:00</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="trades" id="co-stavime">
        <header className="section-head">
          <p className="eyebrow">Naše řemeslo</p>
          <h2 className="section-title">Pět věcí, které umíme pořádně</h2>
          <p className="section-note">
            Bez subdodavatelů na náhodu. Buď to zvládne naše parta,
            nebo pošleme partnera, se kterým stavíme roky.
          </p>
        </header>

        <ol className="trade-list">
          {trades.map((t) => (
            <li className="trade" key={t.n}>
              <span className="trade-n" aria-hidden="true">
                {t.n}
              </span>
              <div className="trade-text">
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
              <span className="trade-tag">{t.tag}</span>
            </li>
          ))}
        </ol>

        <figure className="trades-figure">
          <img
            src="/section-1.webp"
            alt="Zateplená fasáda rodinného domu s novou dlažbou před vstupem"
            width={1400}
            height={900}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Zateplení, dlažba i vstup od jedné party&nbsp;— stavba drží
            pohromadě, protože ji dělá jeden tým.
          </figcaption>
        </figure>
      </section>

      <section className="trust" id="duvera">
        <div className="trust-grid">
          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Hotová rekonstrukce interiéru rodinného domu od firmy A stav projekt HK"
              width={1200}
              height={1400}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="trust-body">
            <p className="eyebrow">Proč nám věřit</p>
            <h2 className="section-title">
              Stavba na klíč je hlavně o&nbsp;důvěře. Tak to bereme.
            </h2>
            <blockquote className="quote">
              „Největší radost máme ze zákazníků, kteří se po letech
              budování svého zázemí vracejí s další prací a rádi nás
              doporučí dál. Doporučení bereme jako vrchol dobré
              spolupráce.“
              <cite>— rodina, která tuhle firmu vede od roku 1990</cite>
            </blockquote>

            <ul className="proof">
              <li>
                <span className="proof-k">30+ let</span>
                <span className="proof-v">
                  zkušeností v oboru, od základů po kolaudaci
                </span>
              </li>
              <li>
                <span className="proof-k">Rodinná firma</span>
                <span className="proof-v">
                  jednáte přímo s tím, kdo za stavbu ručí
                </span>
              </li>
              <li>
                <span className="proof-k">Stálí partneři</span>
                <span className="proof-v">
                  ověření řemeslníci, se kterými stavíme roky
                </span>
              </li>
            </ul>

            <div className="trust-contact">
              <a className="btn btn-primary" href="tel:+420731165167">
                Domluvit prohlídku pozemku
              </a>
              <p className="trust-where">
                Kancelář: Průmyslová 1200, Hradec Králové ·
                Sídlo: Mokrovousy 110, Nechanice
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type Trade = { n: string; title: string; body: string; tag: string };

const trades: Trade[] = [
  {
    n: "01",
    title: "Rodinné domy na klíč",
    body:
      "Od výkopu po předání klíčů. Vedeme celou stavbu, komunikujeme s úřady i partnery a vy máte jedno kontaktní číslo na všechno.",
    tag: "od základů po kolaudaci",
  },
  {
    n: "02",
    title: "Rekonstrukce bytů a půd",
    body:
      "Změníme bytové jádro k nepoznání i půdu na obytnou vestavbu s útulnými pokoji. Přestavby zvládáme i v obydleném domě.",
    tag: "interiér i dispozice",
  },
  {
    n: "03",
    title: "Zateplení fasád",
    body:
      "Zateplujeme rodinné i bytové domy — nižší účty za topení a fasáda, která vydrží. Poradíme se skladbou i barvou.",
    tag: "nižší účty, delší životnost",
  },
  {
    n: "04",
    title: "Dlažby a chodníky",
    body:
      "Vjezdy, terasy a chodníky kolem domu. Pomůžeme vybrat materiál, který sedne k domu i k tomu, jak ho budete používat.",
    tag: "venkovní plochy",
  },
  {
    n: "05",
    title: "Bazény venkovní i vnitřní",
    body:
      "Máme s bazény dlouholeté zkušenosti a držíme se řemeslné poctivosti — od jámy po hydroizolaci a obklad.",
    tag: "na míru pozemku",
  },
];
