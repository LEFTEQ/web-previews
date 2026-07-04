import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LKW Servis Plzeň — diagnostika nákladních vozidel a specializace na DAF",
  description:
    "Autoservis nákladních vozidel v Plzni. Diagnostika řídících jednotek, opravy motorů a servis klimatizací. Specialisté na značku DAF.",
  openGraph: {
    title: "LKW Servis Plzeň — diagnostika nákladních vozidel",
    description:
      "Napojíme se na řídící jednotku vašeho náklaďáku a řekneme vám přesně, co s ním je. Specializace na DAF, Plzeň.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const tel = "+420602691076";
const telDisplay = "+420 602 691 076";

const sluzby = [
  {
    kod: "P0000",
    nazev: "Čtení řídících jednotek",
    popis:
      "Napojíme se na řídící jednotku motoru i ostatních částí vozu, přečteme chybové kódy a řekneme vám, co je za problém — než se rozjede. Opravujeme i samotné řídící jednotky a elektroniku.",
  },
  {
    kod: "MOTOR",
    nazev: "Generální opravy motorů",
    popis:
      "Vložkování, hlavy válců, broušení nebo výměna pístní skupiny, klikový a vačkový hřídel, ložiska, veškerá těsnění. Motor rozebereme a složíme tak, aby držel dál.",
  },
  {
    kod: "KLIMA",
    nazev: "Klimatizace a nezávislá topení",
    popis:
      "Vyčistíme klimatizaci, vyměníme filtry, opravíme netěsnosti a doplníme chladivo. Montujeme, opravujeme a čistíme i nezávislá topení do kabiny.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="LKW Servis Plzeň, úvod">
          <span className="wordmark__lkw">LKW</span>
          <span className="wordmark__servis">SERVIS</span>
          <span className="wordmark__mesto">Plzeň</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co opravujeme</a>
          <a href="#duvera">O dílně</a>
          <a className="topnav__call" href={`tel:${tel}`}>
            {telDisplay}
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__diag" aria-hidden="true">
          <span className="hero__pin">OBD</span>
          <span className="hero__blink" />
          <span className="hero__code">DTC: 0 · připojeno</span>
        </div>
        <div className="hero__copy">
          <p className="eyebrow">Autoservis nákladních vozidel · Plzeň</p>
          <h1 id="hero-h">
            Napojíme se na váš náklaďák a řekneme vám
            <em> přesně, co s ním je.</em>
          </h1>
          <p className="hero__lead">
            Diagnostika řídících jednotek, generální opravy motorů a servis
            klimatizací. Jsme specialisté na značku <strong>DAF</strong> — ale
            přečteme i váš vůz jiné značky.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`tel:${tel}`}>
              Zavolat do dílny
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co opravujeme
            </a>
          </div>
        </div>
        <figure className="hero__figure">
          <img
            src="/hero.webp"
            alt="Diagnostika nákladního vozidla v dílně LKW Servis Plzeň"
            className="hero__img"
            width={1200}
            height={900}
          />
        </figure>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Naše dílna</p>
          <h2 id="sluzby-h">Tři věci, které umíme na náklaďáku nejlíp</h2>
        </div>
        <ul className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__code">{s.kod}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-h">
        <figure className="duvera__figure">
          <img
            src="/section-1.webp"
            alt="Detail motoru rozebraného při generální opravě"
            className="duvera__img"
            width={900}
            height={700}
          />
        </figure>
        <div className="duvera__copy">
          <p className="eyebrow">O dílně</p>
          <h2 id="duvera-h">
            Malá plzeňská dílna, která na náklaďáky rozumí elektronice i klíči
          </h2>
          <p>
            Většina dnešních vozidel má řídící jednotku — a bez správného
            přístroje se k závadě nedostanete. My máme přístroje pro komunikaci
            s řídícími jednotkami i ruce na to motor rozebrat. Právě to spojení
            diagnostiky a klasické opravárny drží vaše vozidlo na silnici.
          </p>
          <dl className="fakta">
            <div className="fakta__row">
              <dt>Specializace</dt>
              <dd>Diagnostika a opravy vozidel DAF</dd>
            </div>
            <div className="fakta__row">
              <dt>Kde nás najdete</dt>
              <dd>Plzeň</dd>
            </div>
            <div className="fakta__row">
              <dt>Opravujeme i</dt>
              <dd>Osobní vozy</dd>
            </div>
          </dl>
          <div className="duvera__actions">
            <a className="btn btn--primary" href={`tel:${tel}`}>
              Zavolat {telDisplay}
            </a>
          </div>
        </div>
        <figure className="duvera__figure duvera__figure--wide">
          <img
            src="/section-2.webp"
            alt="Nákladní vozidlo připravené v servisu LKW Servis Plzeň"
            className="duvera__img"
            width={1200}
            height={600}
          />
        </figure>
      </section>
    </main>
  );
}
