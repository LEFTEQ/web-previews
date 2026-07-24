import { AiImage } from "./_ui";

const services = [
  {
    tag: "Naše řemeslo",
    title: "Vodorovné dopravní značení",
    desc: "Vodicí a dělicí čáry, přechody, piktogramy i nápisy na vozovce. Nanášíme reflexní barvy i tvrzené plasty, které drží a v noci svítí do světel.",
    mark: true,
  },
  {
    tag: "Léto",
    title: "Letní údržba",
    desc: "Opravy výtluků, čištění vozovek a příkopů, sekání krajnic a údržba svislých značek podél celé sítě.",
  },
  {
    tag: "Zima",
    title: "Zimní údržba",
    desc: "Pluhování a posyp v pohotovosti. Sjízdnost silnic II. a III. třídy hlídáme podle plánu i podle počasí.",
  },
  {
    tag: "Povrchy",
    title: "Opravy krytu",
    desc: "Lokální vysprávky, souvislé opravy a obnova asfaltového povrchu tam, kde už výtluky nestačí zalepit.",
  },
  {
    tag: "Mosty",
    title: "Mosty a propustky",
    desc: "Pravidelné prohlídky, opravy a rekonstrukce mostních objektů — od propustku po nový železobetonový most.",
  },
  {
    tag: "Bezpečnost",
    title: "Svislé značení a svodidla",
    desc: "Dopravní značky, svodidla a směrové sloupky. Doplňujeme a obnovujeme prvky, které řídí a chrání provoz.",
  },
];

const towns = [
  "Holice",
  "Luže",
  "Chrudim",
  "Běstovice",
  "Litomyšl",
  "Žamberk",
  "Lanškroun",
  "Ústí nad Orlicí",
  "Králíky",
  "Svitavy",
  "Moravská Třebová",
  "Polička",
  "Hlinsko",
  "Pardubice",
  "Přelouč",
  "Třemošnice",
];

export default function Page() {
  return (
    <main className="page">
      <div className="spine" aria-hidden="true">
        <span className="glint" />
      </div>

      <section className="panel hero" aria-labelledby="hero-title">
        <div className="brand">
          <span className="brand-mark">SÚS</span>
          <span className="brand-sub">Pardubický kraj</span>
        </div>

        <p className="eyebrow">Silnice II. a III. třídy · Pardubický kraj</p>
        <h1 id="hero-title" className="paint">
          Každou čáru<br />
          táhneme rovně.
        </h1>
        <p className="lede">
          Značíme, opravujeme a udržujeme přes 3 130 kilometrů krajských silnic.
          Od roku 2002 se z patnácti cestmistrovství staráme o to, aby byla
          vozovka sjízdná a čitelná — v létě i v zimě.
        </p>

        <nav className="jump" aria-label="Rychlé odkazy">
          <a href="#sluzby">Co děláme</a>
          <a href="#o-nas">Kdo za tím stojí</a>
        </nav>

        <div className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Technika správy silnic při obnově vodorovného značení na krajské silnici"
            className="media media-hero"
          />
        </div>
      </section>

      <section id="sluzby" className="panel" aria-labelledby="sluzby-title">
        <p className="eyebrow">Nabídka služeb</p>
        <h2 id="sluzby-title" className="paint">Práce, kterou znáte z vozovky</h2>
        <p className="section-lede">
          Většina naší práce je vidět jen pod koly. Tady je přehled toho, čím se
          každý den staráme o silniční síť kraje — od čerstvé bílé čáry po opravený most.
        </p>

        <div className="svc-grid">
          <div className="svc-media">
            <AiImage
              src="/section-1.webp"
              alt="Nanášení reflexního vodorovného značení na povrch silnice"
              className="media media-svc"
            />
          </div>
          {services.map((s) => (
            <article key={s.title} className={s.mark ? "svc svc-key" : "svc"}>
              <span className="svc-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="o-nas" className="panel" aria-labelledby="onas-title">
        <p className="eyebrow">Od roku 2002</p>
        <h2 id="onas-title" className="paint">
          Silnice druhé a třetí třídy<br />jsou naše každodenní práce
        </h2>
        <p className="section-lede">
          Nejsme dálnice ani hlavní tahy. Staráme se o hustou síť krajských
          silnic, po kterých jezdíte do práce, do školy a domů. Držíme je
          otevřené celý rok — a když je potřeba, jsme na místě jako první.
        </p>

        <dl className="stats">
          <div className="stat">
            <dt className="stat-num">3 130</dt>
            <dd className="stat-label">kilometrů silnic v naší péči</dd>
          </div>
          <div className="stat">
            <dt className="stat-num">15</dt>
            <dd className="stat-label">cestmistrovství po celém kraji</dd>
          </div>
          <div className="stat">
            <dt className="stat-num">2002</dt>
            <dd className="stat-label">rok, od kterého to táhneme</dd>
          </div>
        </dl>

        <div className="onas-media">
          <AiImage
            src="/section-2.webp"
            alt="Cestmistrovství správy silnic — technika připravená k výjezdu"
            className="media media-onas"
          />
        </div>

        <div className="towns">
          <p className="towns-title">Kde nás najdete</p>
          <ul className="towns-list">
            {towns.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
