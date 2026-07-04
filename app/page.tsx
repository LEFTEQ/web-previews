import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Defenders Gym Ostrava — strongman & funkční fitness",
  description:
    "Gym, ne fitko. Volné váhy, strongman vybavení a komunita sportovců na Slezské Ostravě. Bez strojů, bez anonymity.",
};

const disciplines = [
  {
    tag: "01",
    load: "volné váhy",
    title: "Funkční fitness / open gym",
    body: "Crosstrénink, kondice, síla — říkej si tomu, jak chceš. Extrémní výběr vybavení pro cvičení s volnými vahami, které jinde v Ostravě nenajdeš. Kalistenika, trojboj, powerlifting i hobby sport na jednom place.",
    who: "Pro každého, kdo chce zlepšit kvalitu života.",
  },
  {
    tag: "02",
    load: "100 kg v každé ruce",
    title: "Strongman",
    body: "Extrémnější forma funkčního fitness — hlavně síla, ale i dynamika a rychlost. Scházejí se tu strongmani z celého moravskoslezského kraje. Chceš začít? Lepší místo nenajdeš.",
    who: "Od roku 2020 pořádáme největší strongman závody v Česku.",
  },
  {
    tag: "03",
    load: "švédská ocel",
    title: "Vybavení, které jinde není",
    body: "Stali jsme se výhradním prodejcem švédského vybavení pro strongman a silové sporty. Kufry, kladiny, kladková věž, hrazda s rackem — nářadí pro powerlifting, crossfit, kalisteniku, street workout i vzpírání.",
    who: "Specializované vybavení k vyzkoušení přímo v gymu.",
  },
];

const rules = [
  "Boty nepovinné. Když je máš špinavé, nech je u dveří.",
  "Tričko nepovinné. Po sobě si utři pot.",
  "Magnézium ano. Bordel ne.",
  "Neanonymní. Tvoříme komunitu, ne obrátkovost.",
];

const hours = [
  { day: "Pondělí — Pátek", time: "8:00 — 21:00" },
  { day: "Sobota", time: "9:00 — 13:00" },
  { day: "Neděle", time: "13:00 — 19:00" },
];

export default function Page() {
  return (
    <main className="dg">
      <header className="dg-nav">
        <a className="dg-mark" href="#top" aria-label="Defenders Gym, domů">
          <span className="dg-mark-def">DEFENDERS</span>
          <span className="dg-mark-gym">GYM</span>
        </a>
        <span className="dg-nav-loc">Slezská Ostrava</span>
      </header>

      <section className="dg-hero" id="top">
        <div className="dg-plate" aria-hidden="true">
          <span>20</span>
          <span>25</span>
          <span>15</span>
          <span>10</span>
        </div>

        <p className="dg-eyebrow">Strongman &amp; funkční fitness · Ostrava</p>

        <h1 className="dg-headline">
          <span className="dg-line dg-line-1">GYM.</span>
          <span className="dg-line dg-line-2">NE</span>
          <span className="dg-line dg-line-3">FITKO.</span>
        </h1>

        <p className="dg-lede">
          Žádné posilovací stroje. Jen železo, volné váhy a spousta pomůcek, se
          kterými procvičíš celé tělo. Neanonymní parta sportovců na různých
          úrovních — společná cesta a stejná vášeň.
        </p>

        <div className="dg-actions">
          <a className="dg-btn dg-btn-primary" href="tel:+420776343675">
            Zavolat: 776 343 675
          </a>
          <a className="dg-btn dg-btn-ghost" href="mailto:defendersgym@gmail.com">
            Napsat e-mail
          </a>
        </div>

        <p className="dg-hero-note">Bereme Multisportky · Slezská Ostrava</p>
      </section>

      <section className="dg-section" aria-labelledby="co-cvicime">
        <div className="dg-section-head">
          <h2 id="co-cvicime" className="dg-h2">Co u nás cvičíš?</h2>
          <p className="dg-section-sub">
            Není důležité, co máš na sobě, ale co máš v sobě. Tři cesty, jedna
            podlaha.
          </p>
        </div>

        <ol className="dg-disciplines">
          {disciplines.map((d) => (
            <li className="dg-card" key={d.tag}>
              <div className="dg-card-top">
                <span className="dg-card-tag">{d.tag}</span>
                <span className="dg-card-load">{d.load}</span>
              </div>
              <h3 className="dg-card-title">{d.title}</h3>
              <p className="dg-card-body">{d.body}</p>
              <p className="dg-card-who">{d.who}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="dg-section dg-about" aria-labelledby="o-nas">
        <div className="dg-about-grid">
          <div className="dg-about-copy">
            <h2 id="o-nas" className="dg-h2">Jak to u nás chodí</h2>
            <p className="dg-about-lead">
              Nejsme komerční fitko. Běháme venku, cvičíme boso i bez trička,
              používáme magnézium. Užíváš si pohyb tak, jak ti to je příjemné —
              dokud je to příjemné všem ostatním. Zbytek řeší zdravý rozum.
            </p>

            <ul className="dg-rules">
              {rules.map((r) => (
                <li key={r} className="dg-rule">{r}</li>
              ))}
            </ul>

            <p className="dg-about-games">
              <strong>Defenders Strongman Games 26</strong> — dva dny nabité
              adrenalinem a největší strongmanské závody v Česku i na Slovensku.
              2.—3. 5. 2026, Trojhalí Karolina, Ostrava.
            </p>
          </div>

          <aside className="dg-hours" aria-label="Otevírací doba">
            <p className="dg-hours-title">Otevřeno</p>
            <dl className="dg-hours-list">
              {hours.map((h) => (
                <div className="dg-hours-row" key={h.day}>
                  <dt>{h.day}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="dg-hours-contact">
              <a href="tel:+420776343675">776 343 675</a>
              <a href="mailto:defendersgym@gmail.com">defendersgym@gmail.com</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
