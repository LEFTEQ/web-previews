import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hebnar pneu Tovéř — pneuservis a velkoobchod pneu, Olomouc",
  description:
    "Přes 30 let obouváme nákladní, zemědělská i průmyslová kola v Tovéři u Olomouce. Velkoobchod pneu přímo od dovozce, dopravné po celé ČR i zpětný odběr ojetých plášťů.",
  openGraph: {
    title: "Hebnar pneu Tovéř — pneuservis a velkoobchod pneu",
    description:
      "30 let zkušeností s nákladními, zemědělskými, průmyslovými i osobními pneumatikami. Tovéř u Olomouce.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Pneuservis Hebnar pneu Tovéř" }],
  },
};

const segmenty = [
  {
    kod: "NÁKLADNÍ",
    nazev: "Nákladní",
    popis: "Pláště 22,5\" pro tahače, návěsy i rozvoz. Vodící, záběrové i návěsové dezény od Goodride, Doublecoin, Satoya či Trazano.",
    priklad: "od 5 950 Kč",
  },
  {
    kod: "ZEMĚDĚLSKÉ",
    nazev: "Zemědělské",
    popis: "Radiály i diagonály pro traktory a stroje — Mitas, BKT, Alliance, Trelleborg. Rozměry od 12,4 po 710/70.",
    priklad: "na poptávku",
  },
  {
    kod: "PRŮMYSLOVÉ",
    nazev: "Průmyslové",
    popis: "Kola pro dumpery a zemní stroje. Triangle 23,5 R25 i 26,5 R25 — L3, L5 dezény skladem od dovozce.",
    priklad: "od 42 000 Kč",
  },
  {
    kod: "OSOBNÍ",
    nazev: "Osobní",
    popis: "Letní, zimní i celoroční pláště značek Barum, Matador, Continental, Nokian. Přezutí i uskladnění na sezónu.",
    priklad: "na poptávku",
  },
  {
    kod: "LESNÍ · MALÉ",
    nazev: "Lesní a malé",
    popis: "Speciály do lesa, na vyvážečky a malou mechanizaci. Duše, vložky, ochranné pásy i disky ke každému rozměru.",
    priklad: "na poptávku",
  },
  {
    kod: "DISKY · DUŠE",
    nazev: "Disky, duše, vložky",
    popis: "Ke každému plášti seženeme disk, duši i vložku. Kabat, Kama i originální rozměry na míru vašeho stroje.",
    priklad: "na poptávku",
  },
];

const duvody = [
  {
    titulek: "Přímo od dovozce",
    text: "Velkoobchodní ceny bez mezičlánků. Pláště tahá do Tovéře přímo dovozce, vy platíte to, co u velkoodběratele.",
  },
  {
    titulek: "Dopravné po celé ČR",
    text: "Objednané kolo vám pošleme kamkoli. U velkých rozměrů domluvíme svoz i osobní odběr na servise.",
  },
  {
    titulek: "Zpětný odběr",
    text: "Ojeté pláště od vás vezmeme zpět a ekologicky zlikvidujeme. Nemusíte řešit, kam se starým gumovím.",
  },
];

export default function Page() {
  return (
    <main className="hp">
      <header className="hp-topbar">
        <a className="hp-wordmark" href="#" aria-label="Hebnar pneu Tovéř, úvodní stránka">
          <span className="hp-wordmark__hebnar">HEBNAR</span>
          <span className="hp-wordmark__pneu">pneu</span>
          <span className="hp-wordmark__tover">TOVÉŘ</span>
        </a>
        <a className="hp-tel" href="tel:+420604826084">
          <span className="hp-tel__label">Zavolat</span>
          <span className="hp-tel__num">604 826 084</span>
        </a>
      </header>

      <section className="hp-hero" aria-labelledby="hp-hero-title">
        <div className="hp-hero__media">
          <img
            src="/hero.webp"
            alt="Nákladní pneumatiky připravené v pneuservisu Hebnar v Tovéři"
            className="hp-hero__img"
            width={1600}
            height={1000}
          />
        </div>
        <div className="hp-hero__panel">
          <p className="hp-eyebrow">Pneuservis &amp; velkoobchod · Tovéř u Olomouce</p>
          <h1 id="hp-hero-title" className="hp-hero__title">
            Obouváme kola,
            <br />
            která nesou
            <br />
            <span className="hp-hero__accent">celou práci.</span>
          </h1>
          <p className="hp-hero__lead">
            Nákladní, zemědělské, průmyslové i osobní pláště přímo od dovozce.
            Přes 30 let víme, jaká guma vydrží pole, staveniště i dálnici.
          </p>
          <div className="hp-hero__cta">
            <a className="hp-btn hp-btn--primary" href="tel:+420604826084">
              Zavolat na 604 826 084
            </a>
            <a className="hp-btn hp-btn--ghost" href="#nabidka">
              Vybrat pneu
            </a>
          </div>
          <dl className="hp-hero__facts">
            <div>
              <dt>Zkušenost</dt>
              <dd>30 let</dd>
            </div>
            <div>
              <dt>Značky skladem</dt>
              <dd>140+</dd>
            </div>
            <div>
              <dt>Rozměry</dt>
              <dd>od 3,00 po 875</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="hp-nabidka" id="nabidka" aria-labelledby="hp-nabidka-title">
        <div className="hp-section-head">
          <p className="hp-eyebrow">Co obujeme</p>
          <h2 id="hp-nabidka-title" className="hp-section-title">
            Šest světů, jedna dílna
          </h2>
          <p className="hp-section-note">
            Od malé mechanizace po dumper na staveništi. Vyberte obor — rozměr,
            dezén i disk k němu dohledáme.
          </p>
        </div>
        <ul className="hp-grid">
          {segmenty.map((s, i) => (
            <li className="hp-card" key={s.kod}>
              <span className="hp-card__index">{String(i + 1).padStart(2, "0")}</span>
              <span className="hp-card__kod">{s.kod}</span>
              <h3 className="hp-card__title">{s.nazev}</h3>
              <p className="hp-card__popis">{s.popis}</p>
              <span className="hp-card__cena">{s.priklad}</span>
            </li>
          ))}
        </ul>
        <p className="hp-nabidka__foot">
          Nenašli jste rozměr? <a href="tel:+420604826084">Zavolejte</a> — sháníme
          speciály i kusově.
        </p>
      </section>

      <section className="hp-onas" aria-labelledby="hp-onas-title">
        <div className="hp-onas__media">
          <img
            src="/section-1.webp"
            alt="Zemědělské pneumatiky uskladněné v areálu firmy Hebnar"
            className="hp-onas__img"
            width={1200}
            height={900}
          />
        </div>
        <div className="hp-onas__body">
          <p className="hp-eyebrow">O nás &amp; proč k nám</p>
          <h2 id="hp-onas-title" className="hp-section-title">
            Rodinný pneuservis, který vozíky nikdy nezastavil
          </h2>
          <p className="hp-onas__lead">
            V Tovéři u Olomouce točíme kola už přes tři desítky let. Zákazníci
            k nám jezdí ze širokého okolí — dopravci, zemědělci i stavaři, kteří
            potřebují gumu, co vydrží a je hned.
          </p>
          <ul className="hp-duvody">
            {duvody.map((d) => (
              <li className="hp-duvod" key={d.titulek}>
                <h3 className="hp-duvod__title">{d.titulek}</h3>
                <p className="hp-duvod__text">{d.text}</p>
              </li>
            ))}
          </ul>
          <div className="hp-onas__strip">
            <img
              src="/section-2.webp"
              alt="Detail dezénu nákladní pneumatiky"
              className="hp-onas__strip-img"
              width={1200}
              height={500}
            />
          </div>
          <div className="hp-onas__cta">
            <a className="hp-btn hp-btn--primary" href="tel:+420604826084">
              Zavolat na 604 826 084
            </a>
            <a className="hp-btn hp-btn--ghost" href="mailto:info@hebnarpneu.cz">
              Napsat poptávku
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
