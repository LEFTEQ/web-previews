import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FABRI — Umělecké kovářství, Hradec Králové",
  description:
    "Ruční umělecké kovářství FABRI v Hradci Králové od roku 1992. Kované brány, zábradlí, mříže, svícny a interiérové prvky z pravého žhaveného železa. Absolventi turnovské uměleckoprůmyslové školy.",
};

const nabidka = [
  {
    cislo: "01",
    nazev: "Interiérové výrobky",
    text: "Zábradlí ke schodištím, svícny, madla, věšáky, konzole i mříže do sklepních oken. Ke každému kusu volíme povrch — od černěného vosku po pozlacení.",
    prvky: ["Zábradlí a madla", "Svícny a lustry", "Interiérové mříže", "Kované doplňky"],
  },
  {
    cislo: "02",
    nazev: "Exteriérové výrobky",
    text: "Vjezdové brány a branky, plotové výplně, ploty, zábradlí na terasy a schody. Ošetřeno proti korozi tak, aby drželo v dešti i mrazu východočeské zimy.",
    prvky: ["Brány a branky", "Ploty a výplně", "Venkovní zábradlí", "Mříže do oken"],
  },
  {
    cislo: "03",
    nazev: "Speciality",
    text: "Repliky historického kování pro památky, umělecké mříže, sakrální prvky i zakázky podle vašeho vlastního návrhu. To, co se nikde nekoupí, se u nás vykove.",
    prvky: ["Repliky pro památky", "Umělecké mříže", "Sakrální kování", "Zakázka na míru"],
  },
];

export default function Page() {
  return (
    <main className="fb">
      <header className="fb-top">
        <a className="fb-mark" href="#" aria-label="FABRI — umělecké kovářství">
          <span className="fb-mark-word">FABRI</span>
          <span className="fb-mark-sub">umělecké kovářství · od 1992</span>
        </a>
        <nav className="fb-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabízíme</a>
          <a href="#onas">O dílně</a>
          <a className="fb-nav-tel" href="tel:+420777648616">777 648 616</a>
        </nav>
      </header>

      <section className="fb-hero" aria-labelledby="hero-nadpis">
        <div className="fb-hero-media">
          <img
            src="/hero.webp"
            alt="Rozžhavené železo pod kladivem v kovářské výhni dílny FABRI"
            className="fb-hero-img"
            width={1600}
            height={1100}
          />
          <span className="fb-spark fb-spark-a" aria-hidden="true" />
          <span className="fb-spark fb-spark-b" aria-hidden="true" />
          <span className="fb-spark fb-spark-c" aria-hidden="true" />
        </div>

        <div className="fb-hero-body">
          <p className="fb-eyebrow">Hradec Králové · Třebechovice pod Orebem</p>
          <h1 id="hero-nadpis" className="fb-hero-title">
            Železo, které<br />
            <em>žhne</em>, ohýbá se<br />
            a zůstává.
          </h1>
          <p className="fb-hero-lead">
            Kujeme ručně od roku 1992. Bránu, zábradlí i svícen tvarujeme
            v ohni a pod kladivem — kus po kusu, přesně pro vaše místo.
          </p>
          <div className="fb-hero-actions">
            <a className="fb-btn" href="tel:+420777648616">Zavolat do dílny</a>
            <a className="fb-btn fb-btn-ghost" href="#nabidka">Co kujeme</a>
          </div>
          <dl className="fb-facts">
            <div>
              <dt>Kováme od</dt>
              <dd>1992</dd>
            </div>
            <div>
              <dt>Škola</dt>
              <dd>Turnov</dd>
            </div>
            <div>
              <dt>Výheň</dt>
              <dd>Třebechovice</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="fb-nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="fb-sec-head">
          <p className="fb-eyebrow fb-eyebrow-dark">Co u nás vykujete</p>
          <h2 id="nabidka-nadpis" className="fb-h2">Tři cesty ze železa</h2>
          <p className="fb-sec-intro">
            Do bytu, na dům, nebo úplně mimo katalog. Řekněte, kam to přijde —
            zbytek vyřešíme u nákresu a poté u výhně.
          </p>
        </div>

        <div className="fb-cards">
          {nabidka.map((s) => (
            <article className="fb-card" key={s.cislo}>
              <span className="fb-card-num" aria-hidden="true">{s.cislo}</span>
              <h3 className="fb-card-title">{s.nazev}</h3>
              <p className="fb-card-text">{s.text}</p>
              <ul className="fb-card-list">
                {s.prvky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="fb-strip">
          <img
            src="/section-1.webp"
            alt="Ukázka ručně kovaného zábradlí a mříže z dílny FABRI"
            className="fb-strip-img"
            width={1600}
            height={900}
          />
          <figcaption className="fb-strip-cap">
            Ze zakázek pro východočeské domy i památky — pravé žhavené železo, žádné odlitky.
          </figcaption>
        </figure>
      </section>

      <section className="fb-onas" id="onas" aria-labelledby="onas-nadpis">
        <div className="fb-onas-media">
          <img
            src="/section-2.webp"
            alt="Kovář z dílny FABRI při ruční práci u kovadliny"
            className="fb-onas-img"
            width={1200}
            height={1400}
          />
        </div>

        <div className="fb-onas-body">
          <p className="fb-eyebrow fb-eyebrow-dark">Krátce o dílně</p>
          <h2 id="onas-nadpis" className="fb-h2">
            Tři řemeslníci, jedna výheň, přes třicet let u kladiva.
          </h2>
          <p className="fb-onas-text">
            Firmu FABRI jsme založili v roce 1992 v Hradci Králové s jediným
            záměrem — dělat uměleckořemeslnou práci ze železa poctivě rukama.
            Dva z nás jsou absolventi turnovské uměleckoprůmyslové školy, oboru
            umělecký kovář a zámečník. Třetí se vyučil kovářem a podkovářem.
            Ten rozdíl je vidět na každém svaru i na tom, jak drží kroužek v oku.
          </p>

          <ul className="fb-values">
            <li>
              <span className="fb-value-k">Ručně</span>
              <span className="fb-value-v">Tvarujeme v ohni a pod kladivem, ne z hotových odlitků.</span>
            </li>
            <li>
              <span className="fb-value-k">Na míru</span>
              <span className="fb-value-v">Návrh a rozměry řešíme podle vašeho konkrétního místa.</span>
            </li>
            <li>
              <span className="fb-value-k">Nadlouho</span>
              <span className="fb-value-v">Povrchová úprava proti korozi, ať to drží roky venku i uvnitř.</span>
            </li>
          </ul>

          <address className="fb-kontakt">
            <p className="fb-kontakt-line">Umělecké kovářství FABRI s.r.o.</p>
            <p className="fb-kontakt-line">Za tratí 1306, 503 46 Třebechovice pod Orebem</p>
            <p className="fb-kontakt-line">
              <a href="tel:+420777648616">777 648 616</a>
              {" · "}
              <a href="tel:+420604748616">604 748 616</a>
            </p>
            <p className="fb-kontakt-line">
              <a href="mailto:fabri@email.cz">fabri@email.cz</a>
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}
