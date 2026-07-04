import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSK Rapid Plzeň — sportovní střelba a pistolové disciplíny od roku 1950",
  description:
    "Sportovně střelecký klub Rapid Plzeň. Pistolové a puškové disciplíny pro mládež i dospělé, tréninky na střelnici ASO Dukla a Olymp Plzeň. Přijďte si vystřelit.",
  openGraph: {
    title: "SSK Rapid Plzeň — sportovní střelba od roku 1950",
    description:
      "Pistolové a puškové disciplíny pro všechny věkové kategorie. Tradiční plzeňský klub s vybavením a trenéry pro mládež.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Střelnice SSK Rapid Plzeň" }],
  },
};

const disciplines = [
  {
    ring: "10",
    name: "Sportovní pistole",
    detail:
      "Naše srdcová disciplína. Malorážka i vzduchovka, přesná mířená i rychlopalba. Střílíme na 25 a 50 metrů na střelnici ASO Dukla Plzeň.",
  },
  {
    ring: "9",
    name: "Vzduchová puška a pistole",
    detail:
      "Ideální začátek pro mládež. Mladší střílí vleže na střelnici Olymp Plzeň MV, kde je klid, teplo a čas na techniku.",
  },
  {
    ring: "8",
    name: "Mládežnické kategorie",
    detail:
      "Zbraň, materiál i trenéra dostane dítě od nás. Stačí přijít, my zajistíme základní vybavení a organizaci od prvního výstřelu.",
  },
];

const results = [
  { date: "18. 6.", event: "Duklácká sportka", kind: "výsledky" },
  { date: "15. 6.", event: "100 plzeňských ran", kind: "propozice" },
  { date: "13. 6.", event: "Duklácká vzduchovka", kind: "výsledky" },
  { date: "24. 5.", event: "Plzeňský revolver — VP 30 + 30", kind: "výsledky" },
];

export default function Page() {
  return (
    <main className="rp">
      <header className="rp-nav">
        <a className="rp-mark" href="#top" aria-label="SSK Rapid Plzeň, úvod">
          <span className="rp-mark__ssk">SSK</span>
          <span className="rp-mark__rapid">RAPID</span>
          <span className="rp-mark__city">PLZEŇ · 1950</span>
        </a>
        <nav className="rp-nav__links" aria-label="Hlavní">
          <a href="#disciplines">Disciplíny</a>
          <a href="#klub">O klubu</a>
          <a href="tel:+420377000000" className="rp-nav__call">Zavolat</a>
        </nav>
      </header>

      <section className="rp-hero" id="top">
        <div className="rp-hero__copy">
          <p className="rp-eyebrow">Sportovně střelecký klub · Plzeň</p>
          <h1 className="rp-hero__title">
            Sedmdesát let
            <br />
            <span className="rp-hero__accent">mířené</span> přesnosti.
          </h1>
          <p className="rp-hero__lead">
            Od roku 1950 učíme Plzeňany držet pistoli klidně. Pistolové a puškové
            disciplíny pro děti i dospělé — a pro mládež zbraň i trenéra zdarma.
          </p>
          <div className="rp-hero__cta">
            <a className="rp-btn rp-btn--solid" href="tel:+420377000000">Přijít si vystřelit</a>
            <a className="rp-btn rp-btn--ghost" href="#disciplines">Naše disciplíny</a>
          </div>
        </div>
        <figure className="rp-hero__figure">
          <img
            src="/hero.webp"
            alt="Střelec v poloze při mířené střelbě z pistole na střelnici"
            className="rp-hero__img"
            width={1200}
            height={1400}
          />
          <figcaption className="rp-target" aria-hidden="true">
            <span className="rp-target__ring">10</span>
          </figcaption>
        </figure>
      </section>

      <section className="rp-section" id="disciplines" aria-labelledby="disc-h">
        <div className="rp-section__head">
          <p className="rp-eyebrow">Co u nás trénujeme</p>
          <h2 id="disc-h" className="rp-h2">Disciplíny podle terče</h2>
          <p className="rp-section__intro">
            Věnujeme se převážně pistolovým disciplínám ve všech věkových
            kategoriích. Číslo u každé je zásah do terče — desítka je střed.
          </p>
        </div>

        <ol className="rp-disc">
          {disciplines.map((d) => (
            <li className="rp-disc__item" key={d.name}>
              <span className="rp-disc__ring" aria-hidden="true">{d.ring}</span>
              <div className="rp-disc__body">
                <h3 className="rp-disc__name">{d.name}</h3>
                <p className="rp-disc__detail">{d.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="rp-figband">
          <img
            src="/section-1.webp"
            alt="Detail terče a nábojů na střeleckém stanovišti klubu Rapid Plzeň"
            width={1200}
            height={700}
          />
        </figure>
      </section>

      <section className="rp-section rp-section--klub" id="klub" aria-labelledby="klub-h">
        <div className="rp-klub">
          <div className="rp-klub__text">
            <p className="rp-eyebrow">O klubu</p>
            <h2 id="klub-h" className="rp-h2">Klub s pamětí a se zázemím</h2>
            <p className="rp-klub__lead">
              Podle dochovaných informací nás psali už do kroniky roku 1950.
              Malorážkové a vzduchovkové disciplíny střílíme na střelnici ASO
              Dukla Plzeň, vzduchovku pro mládež vleže na střelnici Olymp
              Plzeň MV. Za podporu činnosti mládeže děkujeme městu Plzni i
              Plzeňskému kraji.
            </p>
            <dl className="rp-facts">
              <div className="rp-facts__item">
                <dt>Založeno</dt>
                <dd>1950</dd>
              </div>
              <div className="rp-facts__item">
                <dt>Zaměření</dt>
                <dd>pistole &amp; puška</dd>
              </div>
              <div className="rp-facts__item">
                <dt>Střelnice</dt>
                <dd>Dukla · Olymp</dd>
              </div>
            </dl>
          </div>
          <figure className="rp-klub__figure">
            <img
              src="/section-2.webp"
              alt="Členové klubu Rapid Plzeň na střelnici při tréninku"
              width={900}
              height={1100}
            />
          </figure>
        </div>

        <div className="rp-results">
          <h3 className="rp-results__h">Z posledních závodů</h3>
          <ul className="rp-results__list">
            {results.map((r) => (
              <li className="rp-results__row" key={r.event}>
                <span className="rp-results__date">{r.date}</span>
                <span className="rp-results__event">{r.event}</span>
                <span className="rp-results__kind">{r.kind}</span>
              </li>
            ))}
          </ul>
          <p className="rp-results__note">
            Kompletní výsledky a propozice sezóny vám rádi pošleme — stačí
            zavolat nebo napsat.
          </p>
        </div>
      </section>
    </main>
  );
}
