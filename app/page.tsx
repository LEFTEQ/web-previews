import type { CSSProperties } from "react";

export const metadata = {
  title: "Solid Group — bezpečnostní agentura Ostrava | Pult centrální ochrany 24/7",
  description:
    "Bezpečnostní agentura z Ostravy. Pult centrální ochrany s nepřetržitým dohledem, výjezdové jednotky, kamerové a zabezpečovací systémy i fyzická ostraha. Reakce v řádu minut, ne hodin.",
  openGraph: {
    title: "Solid Group — když se něco spustí, jsme na příjmu",
    description:
      "Dohledové centrum, výjezdové jednotky a kamerové systémy pro firmy i domácnosti na Ostravsku. Nepřetržitě.",
    type: "website",
    locale: "cs_CZ",
  },
};

type Signal = {
  time: string;
  code: string;
  place: string;
  state: "vyjezd" | "proveren" | "strezeno";
};

const signals: Signal[] = [
  { time: "02:14", code: "EZS · pohyb", place: "Sklad Hrušov, hala C", state: "vyjezd" },
  { time: "02:11", code: "CCTV · linie", place: "Areál Vítkovice, brána 4", state: "proveren" },
  { time: "01:57", code: "EPS · kouř", place: "Kancelář Poruba", state: "proveren" },
  { time: "01:38", code: "tíseň", place: "Prodejna Přívoz", state: "vyjezd" },
  { time: "01:20", code: "stav klidu", place: "27 objektů v obvodu", state: "strezeno" },
];

const stateLabel: Record<Signal["state"], string> = {
  vyjezd: "výjezd",
  proveren: "prověřeno",
  strezeno: "střeženo",
};

type Service = {
  n: string;
  title: string;
  lead: string;
  points: string[];
};

const services: Service[] = [
  {
    n: "01",
    title: "Pult centrální ochrany",
    lead: "Signál z vašeho objektu doběhne k operátorovi během vteřin. Vyhodnotíme ho a rozhodneme, co dál — bez čekání.",
    points: ["Nepřetržitý dohled 24/7", "EZS, EPS i tíseň na jednom pultu", "Zápis každé události s časem"],
  },
  {
    n: "02",
    title: "Výjezdové jednotky",
    lead: "Když poplach nestačí prověřit z kamer, vyjíždí posádka. Na Ostravsku jsme u objektu dřív, než stihnete zavolat.",
    points: ["Zásah na místě do minut", "Ověření a zajištění objektu", "Součinnost s Policií ČR"],
  },
  {
    n: "03",
    title: "Kamery a zabezpečení",
    lead: "Navrhneme, nainstalujeme a napojíme kamerový i poplachový systém tak, aby dával smysl přesně pro váš provoz.",
    points: ["CCTV a EZS na míru", "Napojení na dohledové centrum", "Elektronická požární signalizace"],
  },
  {
    n: "04",
    title: "Fyzická ostraha",
    lead: "Stálá hlídka i pochůzka. Ostraha, která zná váš objekt, dodavatele i to, kdo tam večer nemá co dělat.",
    points: ["Stacionární i mobilní hlídky", "Recepční a vrátná služba", "Bezpečnostní audit objektu"],
  },
];

type Covered = { label: string; note: string };
const covered: Covered[] = [
  { label: "Průmyslové areály", note: "haly, sklady, logistika" },
  { label: "Kanceláře a obchody", note: "komerční objekty" },
  { label: "Rodinné domy", note: "osobní bydlení" },
  { label: "Vozový park", note: "GPS monitoring" },
];

export default function Page() {
  return (
    <main className="sg">
      <header className="sg-nav">
        <a className="sg-mark" href="#" aria-label="Solid Group, úvod">
          <span className="sg-mark__dot" aria-hidden="true" />
          <span className="sg-mark__name">SOLID<span className="sg-mark__thin">GROUP</span></span>
        </a>
        <a className="sg-nav__phone" href="tel:+420553401401">
          <span className="sg-nav__phoneLabel">Dispečink</span>
          <span className="sg-nav__phoneNum">553&nbsp;401&nbsp;401</span>
        </a>
      </header>

      <section className="sg-hero" aria-labelledby="hero-title">
        <img
          className="sg-hero__img"
          src="/hero.webp"
          alt="Operátor dohledového centra Solid Group u stěny s kamerovými přenosy"
        />
        <div className="sg-hero__scrim" aria-hidden="true" />

        <div className="sg-hero__inner">
          <p className="sg-eyebrow">Bezpečnostní agentura · Ostrava · od roku 1991</p>
          <h1 id="hero-title" className="sg-hero__title">
            Když se něco spustí,<br />
            <span className="sg-hero__accent">jsme na příjmu.</span>
          </h1>
          <p className="sg-hero__lead">
            Signál z vašeho objektu doběhne na náš pult v Moravské Ostravě během vteřin.
            Operátor ho prověří a — pokud je třeba — posílá výjezd. Vy zatím spíte.
          </p>
          <div className="sg-hero__cta">
            <a className="sg-btn sg-btn--solid" href="tel:+420553401401">Zavolat dispečink</a>
            <a className="sg-btn sg-btn--ghost" href="#sluzby">Co hlídáme</a>
          </div>
        </div>

        <aside className="sg-feed" aria-label="Ukázka provozu dohledového centra">
          <div className="sg-feed__head">
            <span className="sg-feed__pulse" aria-hidden="true" />
            <span className="sg-feed__title">DOHLEDOVÉ CENTRUM · živě</span>
          </div>
          <ol className="sg-feed__list">
            {signals.map((s) => (
              <li key={s.time} className={`sg-feed__row sg-feed__row--${s.state}`}>
                <span className="sg-feed__time">{s.time}</span>
                <span className="sg-feed__code">{s.code}</span>
                <span className="sg-feed__place">{s.place}</span>
                <span className="sg-feed__state">{stateLabel[s.state]}</span>
              </li>
            ))}
          </ol>
          <p className="sg-feed__foot">Ilustrace provozu. Skutečné události nezveřejňujeme.</p>
        </aside>
      </section>

      <section className="sg-services" id="sluzby" aria-labelledby="services-title">
        <div className="sg-section__head">
          <p className="sg-eyebrow sg-eyebrow--dark">Čtyři vrstvy jedné ochrany</p>
          <h2 id="services-title" className="sg-section__title">
            Od signálu k zásahu — a všechno mezi tím.
          </h2>
          <p className="sg-section__lead">
            Kamery vidí, pult vyhodnotí, hlídka zasáhne. Neprodáváme jednu krabičku —
            skládáme řetěz, kde nesmí selhat žádný článek.
          </p>
        </div>

        <div className="sg-grid">
          {services.map((s) => (
            <article className="sg-card" key={s.n}>
              <span className="sg-card__n" aria-hidden="true">{s.n}</span>
              <h3 className="sg-card__title">{s.title}</h3>
              <p className="sg-card__lead">{s.lead}</p>
              <ul className="sg-card__list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="sg-covered">
          <img
            className="sg-covered__img"
            src="/section-1.webp"
            alt="Kamerový a zabezpečovací systém instalovaný na chráněném objektu"
          />
          <div className="sg-covered__body">
            <p className="sg-eyebrow sg-eyebrow--dark">Co pro vás zajistíme</p>
            <h3 className="sg-covered__title">Střežíme to, na čem stojí váš provoz.</h3>
            <ul className="sg-covered__list">
              {covered.map((c) => (
                <li key={c.label}>
                  <span className="sg-covered__label">{c.label}</span>
                  <span className="sg-covered__note">{c.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sg-trust" aria-labelledby="trust-title">
        <div className="sg-trust__media">
          <img
            className="sg-trust__img"
            src="/section-2.webp"
            alt="Výjezdové vozidlo Solid Group připravené k zásahu v ulicích Ostravy"
          />
        </div>
        <div className="sg-trust__body">
          <p className="sg-eyebrow sg-eyebrow--dark">Proč Ostravsko věří nám</p>
          <h2 id="trust-title" className="sg-trust__title">
            Třicet let stejné otázky:<br />je objekt v pořádku?
          </h2>
          <p className="sg-trust__lead">
            Solid Group hlídá firmy, sklady i domácnosti na Ostravsku od roku 1991.
            Náš pult centrální ochrany běží bez pauzy — o víkendu, v noci i o svátcích.
            Když přijde poplach, nezvedáme ho „hned ráno“. Řešíme ho teď.
          </p>

          <dl className="sg-metrics">
            <div className="sg-metric">
              <dt className="sg-metric__k">24/7</dt>
              <dd className="sg-metric__v">operátor u pultu, každý den v roce</dd>
            </div>
            <div className="sg-metric">
              <dt className="sg-metric__k">1991</dt>
              <dd className="sg-metric__v">střežíme Ostravsko bez přestávky</dd>
            </div>
            <div className="sg-metric">
              <dt className="sg-metric__k">min.</dt>
              <dd className="sg-metric__v">v minutách u objektu, ne v hodinách</dd>
            </div>
          </dl>

          <p className="sg-trust__addr">
            Dispečink · Smetanovo náměstí 979/2, Moravská Ostrava
          </p>
        </div>
      </section>
    </main>
  );
}
