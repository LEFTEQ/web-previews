import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RM stavitelství — žaluzie a rolety na míru, Brno",
  description:
    "Interiérové i venkovní žaluzie, rolety a sítě proti hmyzu na míru pro brněnské byty a domy. Zaměření zdarma, montáž do dvou týdnů.",
  openGraph: {
    title: "RM stavitelství — žaluzie a rolety na míru, Brno",
    description:
      "Zastíníme vaše okna přesně na milimetr. Interiérové žaluzie, venkovní rolety a sítě proti hmyzu z brněnské dílny.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Ložnice zastíněná lamelami žaluzie" }],
  },
};

const sluzby = [
  {
    cislo: "01",
    nazev: "Interiérové žaluzie",
    lamela: "lamela 16 / 25 mm",
    popis:
      "Hliníkové žaluzie mezi křídla i do okenní drážky. Vodicí lanka drží lamely na místě i při dokořán otevřeném okně — do dětských pokojů a kuchyní přesně to, co potřebujete.",
    detaily: ["přes 40 odstínů lamel", "ovládání řetízkem i klikou", "vhodné pro plastová i dřevěná okna"],
  },
  {
    cislo: "02",
    nazev: "Venkovní rolety",
    lamela: "box 137 / 165 mm",
    popis:
      "Předokenní hliníkové rolety s pěnovou výplní — v létě drží horko venku, v zimě teplo uvnitř. Motor na dálkové ovládání, nebo klasický pásek, jak jste zvyklí.",
    detaily: ["tepelná i zvuková izolace", "motor Somfy na ovladač", "barva boxu i lamel dle fasády"],
  },
  {
    cislo: "03",
    nazev: "Sítě proti hmyzu",
    lamela: "rám 25 / 32 mm",
    popis:
      "Pevné rámečky do oken, rolovací sítě k balkonovým dveřím, dvířka pro kočku. Otevřete okno na noc a komáři ani mušky se dovnitř nedostanou.",
    detaily: ["snadné sundání na zimu", "pet-síť odolná drápkům", "černá tkanina téměř neviditelná"],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="RM stavitelství, úvod">
          <span className="wordmark-rm">RM</span>
          <span className="wordmark-rest">stavitelství</span>
          <span className="wordmark-slats" aria-hidden="true">
            <i></i><i></i><i></i><i></i>
          </span>
        </a>
        <p className="topbar-loc">Žaluzie &amp; rolety · Brno a okolí</p>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Zaměření zdarma · montáž do 14 dnů</p>
          <h1 className="hero-title">
            Světlo si<br />
            <span className="hero-accent">nastavíte</span><br />
            přesně na lamelu.
          </h1>
          <p className="hero-lede">
            Zastíníme vaše okna na milimetr přesně — od jedné žaluzie v podkroví
            po venkovní rolety na celý brněnský řadový dům. Žádné katalogové rozměry,
            měříme u vás doma.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#sluzby">Prohlédnout nabídku</a>
            <a className="btn-ghost" href="#duvera">Jak měření probíhá</a>
          </div>
        </div>
        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="Interiérové žaluzie se stočeným světlem lamel v prosluněné místnosti"
            className="hero-img"
          />
          <figcaption className="hero-tag">
            <span className="hero-tag-num">30°</span>
            <span className="hero-tag-label">náklon lamel — soukromí i výhled zároveň</span>
          </figcaption>
        </figure>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <h2 id="sluzby-nadpis" className="section-title">Co pro vaše okna uděláme</h2>
          <p className="section-sub">
            Tři řemesla, jedna dílna. Vše zaměříme, vyrobíme na míru a namontujeme
            sami — bez subdodavatelů, na které bychom sváděli chyby.
          </p>
        </div>

        <div className="cards">
          {sluzby.map((s) => (
            <article className="card" key={s.cislo}>
              <header className="card-head">
                <span className="card-num">{s.cislo}</span>
                <span className="card-lamela">{s.lamela}</span>
              </header>
              <h3 className="card-title">{s.nazev}</h3>
              <p className="card-text">{s.popis}</p>
              <ul className="card-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="sluzby-media">
          <img
            src="/section-1.webp"
            alt="Detail namontovaných venkovních rolet nad okny domu"
            className="media-img"
          />
          <p className="media-note">
            Venkovní rolety montujeme s montážním boxem skrytým pod omítkou —
            zvenku vidíte jen čistou linku nad oknem.
          </p>
        </div>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera-grid">
          <div className="duvera-copy">
            <p className="eyebrow eyebrow--dark">Brněnská dílna, ne prodejní řetězec</p>
            <h2 id="duvera-nadpis" className="section-title section-title--light">
              Přijedeme, změříme, poradíme odstín. Pak teprve vyrábíme.
            </h2>
            <p className="duvera-lede">
              Vybírat lamely z fotky na e-shopu je loterie. Proto k vám
              nejdřív zajedeme s vzorníkem, ukážeme rozdíl mezi matnou
              a metalízou přímo na vašem okně a rozměry sundáme sami.
              Za montáž ručíme — když něco skřípe, vracíme se, dokud to nesedí.
            </p>

            <ol className="steps">
              <li className="step">
                <span className="step-num">1</span>
                <div>
                  <h3 className="step-title">Zavoláte, domluvíme termín</h3>
                  <p className="step-text">Do Brna a okolí jezdíme na zaměření zdarma, obvykle do tří dnů.</p>
                </div>
              </li>
              <li className="step">
                <span className="step-num">2</span>
                <div>
                  <h3 className="step-title">Vybereme odstín a typ ovládání</h3>
                  <p className="step-text">Vzorník lamel i tkanin necháme u vás, ať to v klidu zvážíte.</p>
                </div>
              </li>
              <li className="step">
                <span className="step-num">3</span>
                <div>
                  <h3 className="step-title">Vyrobíme a namontujeme</h3>
                  <p className="step-text">Montáž jedné místnosti zvládneme za dopoledne, bez sekání do zdí.</p>
                </div>
              </li>
            </ol>

            <dl className="stats">
              <div className="stat">
                <dt className="stat-label">na trhu od roku</dt>
                <dd className="stat-num">1991</dd>
              </div>
              <div className="stat">
                <dt className="stat-label">montáž zpravidla do</dt>
                <dd className="stat-num">14 dní</dd>
              </div>
              <div className="stat">
                <dt className="stat-label">záruka na motory</dt>
                <dd className="stat-num">5 let</dd>
              </div>
            </dl>
          </div>

          <figure className="duvera-figure">
            <img
              src="/section-2.webp"
              alt="Zaměřování okna svinovacím metrem před výrobou žaluzie na míru"
              className="media-img"
            />
            <figcaption className="duvera-quote">
              „Chtěli jsme zatemnit ložnici do dvora. Přijeli, změřili,
              za deset dní bylo hotovo a lamely přesně sedí do rámu.“
              <span className="quote-by">— manželé Doležalovi, Brno-Žabovřesky</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
