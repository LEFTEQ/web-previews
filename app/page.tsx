import { AiImage } from "./_ui";

const SIZES = [
  {
    n: "1",
    color: "orange",
    name: "oranžová",
    seat: "sedák 26 cm",
    pupil: "výška žáka 93–116 cm",
  },
  {
    n: "5",
    color: "green",
    name: "zelená",
    seat: "sedák 43 cm",
    pupil: "výška žáka 146–176 cm",
  },
  {
    n: "6",
    color: "blue",
    name: "modrá",
    seat: "sedák 46 cm",
    pupil: "výška žáka 159–188 cm",
  },
];

const CATEGORIES = [
  { name: "Školní nábytek", count: 57, color: "orange" },
  { name: "Jídelny – stoly, židle", count: 9, color: "green" },
  { name: "Židle kancelářské", count: 86, color: "blue" },
  { name: "Kancelářské a počítačové stoly", count: 58, color: "orange" },
  { name: "Kancelářský nábytek typizovaný", count: 99, color: "green" },
  { name: "Skříňový nábytek zakázkový", count: 45, color: "blue" },
  { name: "Tabulové sestavy LCD", count: 9, color: "orange" },
  { name: "Tabule, nástěnky", count: 190, color: "green" },
  { name: "Regály, kovový nábytek", count: 52, color: "blue" },
  { name: "Šatny", count: 50, color: "orange" },
  { name: "Školky, družiny, kluby", count: 140, color: "green" },
];

const REFERENCES = [
  {
    quote:
      "Vyměnili nám židle ve třech třídách během prázdnin. V září děti seděly na svém a nic nechybělo.",
    who: "ředitelka ZŠ, Liberec",
  },
  {
    quote:
      "Poradili nám velikosti podle normy. Konečně nemáme prvňáčky na židlích pro páťáky.",
    who: "zástupce ředitele MŠ, Liberecký kraj",
  },
];

export default function Page() {
  return (
    <div className="sf-root">
      <header className="sf-header">
        <a className="sf-wordmark" href="#hero">
          <span className="sf-wordmark__name">ABCD</span>
          <span className="sf-bands" aria-hidden="true">
            <i className="sf-bands__i sf-bands__i--orange" />
            <i className="sf-bands__i sf-bands__i--green" />
            <i className="sf-bands__i sf-bands__i--blue" />
          </span>
          <span className="sf-wordmark__sub">služby školám · Liberec</span>
        </a>
        <nav className="sf-nav" aria-label="Hlavní">
          <a href="#katalog">Katalog</a>
          <a href="#duvera">O nás</a>
        </nav>
      </header>

      <main>
        <section className="sf-section sf-hero" id="hero">
          <div className="sf-hero__grid">
            <div className="sf-hero__copy">
              <p className="sf-eyebrow">Školní nábytek · norma ČSN EN 1729</p>
              <h1 className="sf-hero__title">
                Zařídíme školu <em>od velikosti&nbsp;1 po velikost&nbsp;6.</em>
              </h1>
              <p className="sf-hero__lead">
                Kompletní vybavení tříd, jídelen, sboroven i šaten. Dovezeme,
                smontujeme a odvezeme obaly — vy jen otevřete dveře do hotové
                učebny. Sídlíme v Liberci, rozvážíme po celém kraji.
              </p>

              <div className="sf-sizes" aria-label="Barevné značení velikostí podle EN 1729">
                <p className="sf-sizes__title">
                  Barevný proužek pod každou židlí říká její velikost:
                </p>
                {SIZES.map((s, i) => (
                  <div
                    key={s.n}
                    className={`sf-size sf-size--${s.color} sf-snap sf-snap--${i + 2}`}
                  >
                    <span className="sf-size__num">{s.n}</span>
                    <span className="sf-size__body">
                      <b>{s.name}</b>
                      <span>
                        {s.seat} · {s.pupil}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sf-hero__media sf-snap sf-snap--1">
              <AiImage
                src="/hero.webp"
                alt="Vybavená školní učebna se stoly a barevně značenými židlemi"
                className="sf-hero__img"
              />
            </div>
          </div>
        </section>

        <section className="sf-section sf-katalog" id="katalog">
          <div className="sf-head">
            <p className="sf-eyebrow">Nabídka</p>
            <h2 className="sf-h2">Jedenáct kategorií, celá škola.</h2>
            <p className="sf-head__note">
              Každá kategorie má svůj barevný proužek — stejný systém, jaký
              najdete stemplovaný pod židlemi. Vše skladem, s dopravou a montáží
              po Libereckém kraji.
            </p>
          </div>

          <ul className="sf-cats">
            {CATEGORIES.map((c) => (
              <li key={c.name} className={`sf-cat sf-cat--${c.color}`}>
                <a className="sf-cat__link" href="#katalog">
                  <span className="sf-cat__band" aria-hidden="true" />
                  <span className="sf-cat__in">
                    <span className="sf-cat__name">{c.name}</span>
                    <span className="sf-cat__count">
                      {c.count}
                      <small>položek</small>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="sf-section sf-duvera" id="duvera">
          <div className="sf-duvera__grid">
            <div className="sf-duvera__copy">
              <p className="sf-eyebrow">O nás</p>
              <h2 className="sf-h2">
                Vybavujeme liberecké školy už přes 25&nbsp;let.
              </h2>
              <p className="sf-duvera__text">
                ABCD Služby školám zařizuje mateřské, základní i střední školy
                od roku 1998. Neprodáváme jen kusy nábytku — poskládáme celou
                učebnu tak, aby seděla dětem i rozpočtu zřizovatele. Poradíme s
                velikostmi podle výšky žáků, zaměříme prostor a dodáme na klíč.
              </p>

              <dl className="sf-stats">
                <div className="sf-stat">
                  <dt>od roku</dt>
                  <dd>1998</dd>
                </div>
                <div className="sf-stat">
                  <dt>vybavených škol a školek</dt>
                  <dd>300+</dd>
                </div>
                <div className="sf-stat">
                  <dt>atest u každé židle</dt>
                  <dd>EN 1729</dd>
                </div>
              </dl>

              <div className="sf-refs">
                {REFERENCES.map((r) => (
                  <blockquote key={r.who} className="sf-ref">
                    <p>{r.quote}</p>
                    <cite>{r.who}</cite>
                  </blockquote>
                ))}
              </div>
            </div>

            <div className="sf-collage">
              <AiImage
                src="/section-1.webp"
                alt="Montáž skříňového nábytku ve školní chodbě"
                className="sf-imgA"
              />
              <AiImage
                src="/section-2.webp"
                alt="Barevné školní židle připravené k rozvozu"
                className="sf-imgB"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
