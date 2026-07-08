import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taneční škola Vavruška — kurzy, tančírny a plesy na Karlově náměstí",
  description:
    "Tančit s námi může opravdu každý. Taneční pro mládež i dospělé, lady latino i sobotní tančírny v nejkrásnějších sálech Prahy. Karlovo nám. 5, Praha 2.",
  openGraph: {
    title: "Taneční škola Vavruška — Praha 2, Karlovo náměstí",
    description:
      "Kurzy, tančírny a plesy v Obecním domě, na Žofíně i ve Slovanském domě. Přijďte si zatančit — i na kávu.",
    type: "website",
    locale: "cs_CZ",
  },
};

const kurzy = [
  {
    tempo: "1—2—3",
    nazev: "Taneční pro mládež",
    komu: "Studenti a středoškoláci",
    popis:
      "Klasické taneční, kde se z prvních nejistých kroků stane samozřejmost. Waltz, jive, cha-cha i společenská výchova — a hlavně parta, se kterou se těšíte na každou lekci.",
    kdy: "Zápis na sezónu 2026—2027 právě probíhá",
    akce: "Rozvrh a přihlášky",
  },
  {
    tempo: "slow—quick",
    nazev: "Taneční pro dospělé",
    komu: "Páry i jednotlivci, začátečníci i pokročilí",
    popis:
      "Nikdy není pozdě začít. Naučíme vás vést i následovat, ať jdete na svatbu, ples nebo jen chcete konečně tančit beze studu. Tempo držíme podle vás.",
    kdy: "Nové kurzy od září 2026",
    akce: "Rozvrh a přihlášky",
  },
  {
    tempo: "¡latino!",
    nazev: "Lady latino",
    komu: "Ženy, které si chtějí zatančit pro sebe",
    popis:
      "Salsa, bachata a pořádná dávka energie. Žádný partner potřeba — jen vy, hudba a chuť se hýbat. V létě navíc otevřené lekce Ladies Open Class.",
    kdy: "Nové kurzy od září 2026",
    akce: "Info a termíny",
  },
];

const akce = [
  {
    stitek: "Každou sobotu",
    nazev: "Sobotní tančírna",
    text: "Přijďte si zatančit to, co jste se naučili — nebo jen tak. Živá parketa, dobrá nálada, žádné zkoušení.",
  },
  {
    stitek: "Sezónně",
    nazev: "Plesy a taneční snídaně",
    text: "Třešnička na dortu celé sezóny. Velké sály, živá hudba a večery, na které se vzpomíná.",
  },
  {
    stitek: "Denně",
    nazev: "Kavárna na Karlově náměstí 5",
    text: "Přijďte k nám na kávu i mimo lekce. Sejděte se, domluvte kurz nebo jen poseďte mezi tanečníky.",
  },
];

export default function Page() {
  return (
    <main className="vv">
      <header className="vv-nav">
        <a className="vv-logo" href="#uvod" aria-label="Taneční škola Vavruška — domů">
          <span className="vv-logo-mark">V</span>
          <span className="vv-logo-text">
            <span className="vv-logo-name">Vavruška</span>
            <span className="vv-logo-sub">taneční škola · Praha 2</span>
          </span>
        </a>
        <nav className="vv-nav-links" aria-label="Hlavní navigace">
          <a href="#kurzy">Kurzy</a>
          <a href="#akce">Akce</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="vv-nav-cta" href="#kurzy">
          Vybrat kurz
        </a>
      </header>

      <section className="vv-hero" id="uvod">
        <div className="vv-hero-media">
          <img
            src="/hero.webp"
            alt="Tanečníci na parketu v jednom z pražských sálů taneční školy Vavruška"
            className="vv-hero-img"
          />
          <span className="vv-hero-scrim" aria-hidden="true" />
        </div>

        <div className="vv-hero-inner">
          <p className="vv-hero-eyebrow">Karlovo nám. 5 · Praha 2 — Nové Město</p>
          <h1 className="vv-hero-title">
            Tanec nás
            <span className="vv-hero-accent"> dělá krásné.</span>
          </h1>
          <p className="vv-hero-lead">
            Taneční, které vás baví — pro mládež i dospělé. Tančit s námi může
            opravdu každý; z tance máte obavy? Rozumíme jim a přesvědčíme vás, že
            se není čeho bát.
          </p>
          <div className="vv-hero-actions">
            <a className="vv-btn vv-btn-primary" href="#kurzy">
              Vybrat si kurz
            </a>
            <a className="vv-btn vv-btn-ghost" href="#akce">
              Přijít na tančírnu
            </a>
          </div>
          <ol className="vv-hero-steps" aria-label="Jak u nás začnete">
            <li>
              <span className="vv-step-count">1.</span> Vyberete si kurz
            </li>
            <li>
              <span className="vv-step-count">2.</span> Přijdete na lekci
            </li>
            <li>
              <span className="vv-step-count">3.</span> Tančíte v sálech Prahy
            </li>
          </ol>
        </div>
      </section>

      <section className="vv-kurzy" id="kurzy" aria-labelledby="kurzy-nadpis">
        <div className="vv-section-head">
          <p className="vv-section-eyebrow">Nabídka kurzů</p>
          <h2 id="kurzy-nadpis" className="vv-section-title">
            Který kurz bude ten váš?
          </h2>
          <p className="vv-section-note">
            Stačí si jen vybrat. U každého kurzu vás vede lektor, který umí nejen
            tančit, ale hlavně učit.
          </p>
        </div>

        <div className="vv-kurzy-grid">
          {kurzy.map((k) => (
            <article className="vv-card" key={k.nazev}>
              <span className="vv-card-tempo" aria-hidden="true">
                {k.tempo}
              </span>
              <h3 className="vv-card-title">{k.nazev}</h3>
              <p className="vv-card-komu">{k.komu}</p>
              <p className="vv-card-popis">{k.popis}</p>
              <p className="vv-card-kdy">{k.kdy}</p>
              <a className="vv-card-link" href="#onas">
                {k.akce}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="vv-onas" id="onas" aria-labelledby="onas-nadpis">
        <div className="vv-onas-media">
          <img
            src="/section-1.webp"
            alt="Slavnostní sál, kde taneční škola Vavruška pořádá lekce a plesy"
            className="vv-onas-img"
          />
        </div>
        <div className="vv-onas-body">
          <p className="vv-section-eyebrow">O nás</p>
          <h2 id="onas-nadpis" className="vv-section-title vv-section-title--light">
            Místo dělá rozdíl
          </h2>
          <ul className="vv-onas-list">
            <li>
              <strong>Tančíme v nejkrásnějších sálech Prahy.</strong> Obecní
              dům, Žofín, Slovanský dům, ND na Vinohradech i palác Charitas.
            </li>
            <li>
              <strong>Učí u nás skvělí lektoři.</strong> Že umějí tančit, je
              samozřejmé — především ale umějí učit a chovají se ke klientům s
              respektem a citem.
            </li>
            <li>
              <strong>Nepořádáme jen kurzy.</strong> Pravidelné tančírny, skvělé
              plesy, taneční snídaně a spoustu dalších akcí, které jsou
              třešničkou na dortu.
            </li>
            <li>
              <strong>Staráme se o vás.</strong> Máme propracovaný systém výuky i
              péče o klienty a jejich rodiče.
            </li>
          </ul>

          <div className="vv-akce" id="akce">
            <img
              src="/section-2.webp"
              alt="Návštěvníci tančírny a kavárny taneční školy Vavruška"
              className="vv-akce-img"
            />
            <div className="vv-akce-list">
              {akce.map((a) => (
                <div className="vv-akce-item" key={a.nazev}>
                  <span className="vv-akce-stitek">{a.stitek}</span>
                  <h3 className="vv-akce-nazev">{a.nazev}</h3>
                  <p className="vv-akce-text">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
