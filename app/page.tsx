import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pivovarská brána — pivní bar v Hradci Králové",
  description:
    "Pivní bar V Kopečku v centru Hradce Králové. Deset piv na čepu z českých i minipivovarů, denně 12–22. Rezervace na 602 500 848.",
};

const TAPS = [
  { name: "Kotěra", degree: "12°", brewery: "Pivovar Brána, Starý Kolín", abv: "5 %", style: "světlý ležák" },
  { name: "Gočár", degree: "11°", brewery: "Pivovar Brána, Starý Kolín", abv: "4,5 %", style: "výčepní" },
  { name: "Světlý ležák", degree: "11°", brewery: "Agent", abv: "4,9 %", style: "ležák" },
  { name: "Liquid Luck", degree: "11°", brewery: "Sibeeria", abv: "4,3 %", style: "pale ale" },
  { name: "Hefe-Weissbier", degree: "12°", brewery: "Paulaner", abv: "5,5 %", style: "pšeničné" },
  { name: "Kurtizána", degree: "13°", brewery: "Mordýř", abv: "5,5 %", style: "polotmavé" },
  { name: "Sunshine", degree: "15°", brewery: "Matuška", abv: "6 %", style: "IPA" },
  { name: "Heterák", degree: "15°", brewery: "Třebonice", abv: "6,3 %", style: "speciál" },
  { name: "Konspirátor", degree: "14°", brewery: "Ovipistán", abv: "6 %", style: "IPA" },
  { name: "Twogether Forever", degree: "10°", brewery: "Mikkeller × Budvar", abv: "4,5 %", style: "pilsner" },
];

export default function Page() {
  return (
    <main className="pb">
      <header className="pb-topbar">
        <a className="pb-wordmark" href="#" aria-label="Pivovarská brána">
          <span className="pb-wordmark__pivo">PIVO</span>
          <span className="pb-wordmark__gate" aria-hidden="true">
            <span className="pb-arch" />
          </span>
          <span className="pb-wordmark__vrni">VÁRSKÁ</span>
          <span className="pb-wordmark__brana">BRÁNA</span>
        </a>
        <a className="pb-topbar__call" href="tel:+420602500848">
          Volat 602&nbsp;500&nbsp;848
        </a>
      </header>

      <section className="pb-hero" aria-labelledby="pb-hero-title">
        <div className="pb-hero__grid">
          <p className="pb-hero__eyebrow">V Kopečku 83/5 &middot; Hradec Králové</p>
          <h1 id="pb-hero-title" className="pb-hero__title">
            Deset piv
            <br />
            <span className="pb-hero__title--accent">na čepu.</span>
            <br />
            Žádné dvě
            <br />
            stejná.
          </h1>
          <p className="pb-hero__lede">
            Bar pod schody v samém centru Hradce. Ležáky z pivovaru Brána vedle
            IPA od Matušky a divočin od Ovipistánu — točíme to, co nás baví, a
            měníme to, jakmile dojde soudek.
          </p>
          <div className="pb-hero__actions">
            <a className="pb-btn pb-btn--solid" href="tel:+420602500848">
              Rezervovat stůl
            </a>
            <a className="pb-btn pb-btn--ghost" href="#cep">
              Co je dnes na čepu
            </a>
          </div>
        </div>

        <div className="pb-hero__gauge" aria-hidden="true">
          <div className="pb-gauge">
            <span className="pb-gauge__num">10</span>
            <span className="pb-gauge__label">pípy</span>
          </div>
          <ol className="pb-gauge__ticks">
            {TAPS.map((t, i) => (
              <li key={i} className="pb-tick" style={{ ["--i" as string]: i }}>
                <span className="pb-tick__deg">{t.degree}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-cep" id="cep" aria-labelledby="pb-cep-title">
        <div className="pb-section__head">
          <h2 id="pb-cep-title" className="pb-section__title">
            Dnes na čepu
          </h2>
          <p className="pb-section__note">
            Nabídka se točí každý týden. Až dojde soudek, nasadíme další — proto
            si nikdy neškrtnete stejný lístek dvakrát.
          </p>
        </div>

        <ul className="pb-taps">
          {TAPS.map((t, i) => (
            <li key={i} className="pb-tap">
              <span className="pb-tap__no">{String(i + 1).padStart(2, "0")}</span>
              <span className="pb-tap__deg">{t.degree}</span>
              <span className="pb-tap__body">
                <span className="pb-tap__name">{t.name}</span>
                <span className="pb-tap__meta">
                  {t.style} &middot; {t.brewery}
                </span>
              </span>
              <span className="pb-tap__abv">{t.abv}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pb-about" aria-labelledby="pb-about-title">
        <div className="pb-about__lead">
          <p className="pb-eyebrow">O baru</p>
          <h2 id="pb-about-title" className="pb-about__title">
            Brána, kterou stačí
            <br /> sejít po schodech.
          </h2>
          <p className="pb-about__text">
            Jsme malý pivní bar V Kopečku, pár kroků od Velkého náměstí. Sedne si
            k nám hospodský stálý host i výletník, co dorazil za novou várkou.
            Nespěcháme, poradíme s výběrem a platit můžete i kartou.
          </p>
        </div>

        <div className="pb-about__cols">
          <div className="pb-card">
            <p className="pb-card__k">Otevřeno</p>
            <p className="pb-card__v">Po–Ne</p>
            <p className="pb-card__sub">12:00 – 22:00, každý den</p>
          </div>
          <div className="pb-card">
            <p className="pb-card__k">Kde nás najdete</p>
            <p className="pb-card__v">V Kopečku 83/5</p>
            <p className="pb-card__sub">Hradec Králové, centrum</p>
          </div>
          <div className="pb-card">
            <p className="pb-card__k">Platba</p>
            <p className="pb-card__v">Karta i hotově</p>
            <p className="pb-card__sub">Bezkontaktně u výčepu</p>
          </div>
          <div className="pb-card pb-card--cta">
            <p className="pb-card__k">Rezervace &amp; dotazy</p>
            <a className="pb-card__tel" href="tel:+420602500848">
              602 500 848
            </a>
            <p className="pb-card__sub">Zavolejte nebo pošlete SMS</p>
          </div>
        </div>
      </section>
    </main>
  );
}
