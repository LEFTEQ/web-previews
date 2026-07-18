const vnejsi = [
  "Venkovní žaluzie",
  "Venkovní rolety",
  "Screenové rolety",
  "Markýzy",
];

const vnitrni = [
  "Vnitřní žaluzie",
  "Vnitřní rolety",
  "Plisé žaluzie",
  "Závěsy a záclony",
];

const exterier = [
  "Pergoly a zimní zahrady",
  "Sítě proti hmyzu",
  "Solární pohon",
  "Chytrá domácnost Somfy",
];

const duvery = [
  { label: "Péče", text: "O vaše žaluzie se postaráme i po uplynutí záruky." },
  { label: "Záruka", text: "Na výrobky Climax dáváme čtyřletou záruku kvality." },
  { label: "V místě realizace", text: "Zaměření, montáž i servis vždy u vás doma." },
  { label: "20 let", text: "Přes 3 miliony zastíněných oken po celé ČR." },
];

const reference = [
  {
    name: "Pavel Šlambora",
    text:
      "Řešili jsme přehřívání rodinného domu a vybrali si venkovní rolety. Od zaměření až po montáž firma pracovala profesionálně, rychle a spolehlivě. Výsledek nám opravdu dobře slouží — všem doporučujeme.",
  },
  {
    name: "Tereza Gluzová",
    text:
      "Objednala jsem venkovní zatemňovací roletu a jsem spokojená s výrobkem i celým procesem. Komunikace rychlá a transparentní, montáž proběhla v řádu týdnů — a to v létě, kdy se na venkovní stínění obvykle čeká déle.",
  },
  {
    name: "Kateřina Šilhánová",
    text:
      "Skvělé jednání od první návštěvy po instalaci. Rychlá dodávka venkovních žaluzií, zkušení technici si při montáži poradili se vším. Nic pro ně nebyl problém. Zcela jistě doporučuji.",
  },
];

export default function Page() {
  return (
    <main id="top">
      <header className="head">
        <a className="mark" href="#top" aria-label="PROKLIMA — stínící technika, Liberec">
          <span className="mark__slats" aria-hidden="true" />
          <span className="mark__text">
            <span className="mark__name">PROKLIMA</span>
            <span className="mark__sub">stínící technika · Liberec</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a className="nav__link" href="#produkty">Produkty</a>
          <a className="nav__link" href="#duvera">Proč my</a>
          <a className="nav__link" href="#reference">Reference</a>
          <a className="btn btn--ghost" href="#produkty">Poptávka</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__texture" aria-hidden="true" />
        <div className="hero__sweep" aria-hidden="true" />
        <div className="hero__blind" aria-hidden="true" />
        <div className="wrap hero__inner">
          <p className="eyebrow eyebrow--light">
            <span className="tick" aria-hidden="true" />
            Rodinná firma z Liberce · od roku 2004
          </p>
          <h1 id="hero-title" className="hero__title">
            Specialisté na <span className="accent">zastínění</span> vašich bytů, domů a kanceláří
          </h1>
          <p className="hero__lead">
            Venkovní žaluzie, rolety, pergoly i sítě proti hmyzu — od zaměření po
            montáž zvládneme na klíč. Přijďte si stínění osahat do libereckého
            showroomu.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#produkty">Najít nejbližší showroom</a>
            <a className="btn btn--line" href="#produkty">Chci pomoci s výběrem</a>
          </div>
          <dl className="stats">
            <div className="stats__i"><dt>20 let</dt><dd>na českém trhu</dd></div>
            <div className="stats__i"><dt>3 mil.</dt><dd>zastíněných oken</dd></div>
            <div className="stats__i"><dt>11</dt><dd>showroomů v ČR</dd></div>
            <div className="stats__i"><dt>4 roky</dt><dd>záruka na výrobky</dd></div>
          </dl>
        </div>
      </section>

      <div className="louver" role="presentation" />

      <section id="produkty" className="band band--warm" aria-labelledby="prod-title">
        <div className="wrap">
          <p className="eyebrow">Nabídka</p>
          <h2 id="prod-title" className="h2">Co pro vás zastíníme</h2>
          <p className="lead">
            Vybíráme podle toho, kde má stínění pracovat — venku před sklem, uvnitř
            u okna, nebo nad terasou. Jsme největší partner české značky Climax.
          </p>

          <div className="cols">
            <div className="group">
              <h3 className="group__h">Venkovní stínění</h3>
              <ul className="plist">
                {vnejsi.map((p) => (
                  <li key={p} className="plist__i">{p}</li>
                ))}
              </ul>
            </div>
            <div className="group">
              <h3 className="group__h">Vnitřní stínění</h3>
              <ul className="plist">
                {vnitrni.map((p) => (
                  <li key={p} className="plist__i">{p}</li>
                ))}
              </ul>
            </div>
            <div className="group">
              <h3 className="group__h">Exteriér a doplňky</h3>
              <ul className="plist">
                {exterier.map((p) => (
                  <li key={p} className="plist__i">{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="note">
            Stínění napojíme na chytrou domácnost Somfy a doplníme solárním pohonem —
            ovládání z telefonu i automatika podle slunce a větru.
          </p>
        </div>
      </section>

      <div className="louver louver--flip" role="presentation" />

      <section id="duvera" className="band band--sky" aria-labelledby="trust-title">
        <div className="wrap">
          <p className="eyebrow">Proč PROKLIMA</p>
          <h2 id="trust-title" className="h2">Rodinná firma, na kterou se spolehnete</h2>
          <p className="lead">
            Na trhu působíme přes dvacet let a postarali jsme se o víc než tři
            miliony oken. Každý výrobek prochází testováním a pečlivou výstupní
            kontrolou — proto se za svoji práci nebojíme ručit i po záruce.
          </p>

          <div className="grid4">
            {duvery.map((d) => (
              <div key={d.label} className="card card--fact">
                <span className="card__label">{d.label}</span>
                <p className="card__text">{d.text}</p>
              </div>
            ))}
          </div>

          <div className="showroom" id="reference">
            <span className="tick tick--dark" aria-hidden="true" />
            <p className="showroom__text">
              Showroom Liberec — přijďte porovnat typy stínění naživo, prohlédnout
              si vzorníky materiálů a získat radu od techniků, kteří u vás pak i
              montují.
            </p>
          </div>

          <div className="grid3">
            {reference.map((r) => (
              <figure key={r.name} className="card card--ref">
                <blockquote className="card__quote">{r.text}</blockquote>
                <figcaption className="card__name">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
