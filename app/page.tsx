import { LiveClock } from "./motion";

function Chip({ className, big = false }: { className?: string; big?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      role="img"
      aria-label="Přístupový čip Maximal Limit"
    >
      <defs>
        <radialGradient id={big ? "chipFace" : "chipFaceSm"} cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#cdd4da" />
          <stop offset="46%" stopColor="#9aa3ab" />
          <stop offset="100%" stopColor="#3a4650" />
        </radialGradient>
      </defs>
      <circle className="chip__face" cx="120" cy="120" r="112" fill={`url(#${big ? "chipFace" : "chipFaceSm"})`} />
      <circle className="chip__ring chip__ring--1" pathLength={1} cx="120" cy="120" r="104" />
      <circle className="chip__coil" cx="120" cy="120" r="88" />
      <circle className="chip__ring chip__ring--2" pathLength={1} cx="120" cy="120" r="70" />
      <circle className="chip__ring chip__ring--3" pathLength={1} cx="120" cy="120" r="48" />
      <circle className="chip__signal" cx="120" cy="120" r="20" />
      <circle className="chip__signal-dot" cx="120" cy="120" r="7" />
    </svg>
  );
}

const steps = [
  {
    n: "01",
    t: "Zaregistruješ se online",
    d: "Účet založíš za pár minut z mobilu. Žádná recepce, žádné čekání na otevírací dobu.",
  },
  {
    n: "02",
    t: "Dostaneš vstupní čip",
    d: "Jeden čip tě pustí do dveří i k vybavení. K předplatnému ho máš zdarma, jednorázově za 100 Kč.",
  },
  {
    n: "03",
    t: "Rezervuješ čas a jdeš",
    d: "Vybereš si volný slot — ráno, v noci, o víkendu. Přijdeš, přiložíš čip a máš fitko jen pro sebe.",
  },
];

const equipment = [
  "Neomezená Wi-Fi zdarma",
  "Vlastní hudba přes reproduktory",
  "Klimatizace, kterou si nastavíš sám",
  "Ručník v ceně každého vstupu",
  "Samoobslužné občerstvení",
  "Profesionální vybavení na plný trénink",
];

const plans = [
  {
    name: "Jednorázový vstup",
    price: "220",
    unit: "Kč / vstup",
    note: "Vlastní čip za 100 Kč",
    perks: ["Neomezená Wi-Fi a vlastní hudba", "Ručník v ceně", "Nastavení klimatizace", "Samoobslužné občerstvení"],
    cta: "Rezervovat vstup",
  },
  {
    name: "Měsíční předplatné",
    price: "2 220",
    unit: "Kč / měsíc",
    note: "Vlastní čip zdarma",
    perks: ["Neomezený počet vstupů", "Wi-Fi, vlastní hudba, klimatizace", "Ručník v ceně", "Samoobslužné občerstvení"],
    cta: "Založit předplatné",
    featured: true,
  },
  {
    name: "Balíček 9+1",
    price: "1 880",
    unit: "Kč / 10 vstupů",
    note: "Jeden vstup navíc zdarma",
    perks: ["10 vstupů se slevou", "Wi-Fi, vlastní hudba, klimatizace", "Ručník v ceně", "Samoobslužné občerstvení"],
    cta: "Koupit balíček",
  },
];

export default function Page() {
  return (
    <main className="page">
      <div className="brandbar">
        <span className="wordmark">
          <Chip className="wordmark__chip" />
          Maximal<span className="wordmark__thin">Limit</span>
        </span>
        <span className="brandbar__loc">České Budějovice · Týn n. Vltavou · Tábor</span>
      </div>

      <section className="hero">
        <div className="hero__spot" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Soukromé samoobslužné fitness
            </p>
            <h1 className="hero__title">
              Tvoje fitness,<br />
              <span className="hero__accent">tvoje pravidla</span>
            </h1>
            <p className="hero__lead">
              Malé, dobře vybavené fitko, které je celé jen tvoje. Trénuješ sám nebo s tím,
              koho si vezmeš — kdy chceš, i uprostřed noci.
            </p>
            <div className="status" aria-label="Otevřeno nonstop, aktuální čas">
              <span className="status__dot" aria-hidden="true" />
              <span className="status__label">OTEVŘENO</span>
              <LiveClock />
            </div>
            <div className="cta-row">
              <a className="btn btn--primary" href="#cenik">
                <Chip className="btn__chip" />
                Rezervovat nyní
              </a>
              <a className="btn btn--ghost" href="#jak">
                Přihlásit se
              </a>
            </div>
          </div>
          <div className="hero__stage">
            <Chip className="hero__chip" big />
          </div>
        </div>
      </section>

      <section className="section" id="jak">
        <header className="section__head">
          <p className="section__kicker">
            <span className="kicker__chip" aria-hidden="true" />
            Jak to funguje
          </p>
          <h2 className="section__title">Čip je klíč. Zbytek je na tobě.</h2>
        </header>

        <ol className="steps">
          {steps.map((s) => (
            <li className="step" key={s.n}>
              <span className="step__num">{s.n}</span>
              <h3 className="step__title">{s.t}</h3>
              <p className="step__desc">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="equip">
          <h3 className="equip__title">Co je uvnitř v ceně</h3>
          <ul className="equip__list">
            {equipment.map((e) => (
              <li className="equip__item" key={e}>
                <span className="equip__mark" aria-hidden="true" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark" id="cenik">
        <header className="section__head">
          <p className="section__kicker">
            <span className="kicker__chip" aria-hidden="true" />
            Ceník
          </p>
          <h2 className="section__title">Vyber si tarif, který ti sedne</h2>
          <p className="section__lead">
            Ceny bez závazků navíc. Doprovod přidáš k libovolnému vstupu za 110 Kč, roční
            předplatné vyjde na 22 200 Kč.
          </p>
        </header>

        <div className="plans">
          {plans.map((p) => (
            <article className={p.featured ? "plan plan--featured" : "plan"} key={p.name}>
              {p.featured && <span className="plan__badge">Nejoblíbenější</span>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__price">
                <span className="plan__amount">{p.price}</span>
                <span className="plan__unit">{p.unit}</span>
              </p>
              <p className="plan__note">{p.note}</p>
              <ul className="plan__perks">
                {p.perks.map((perk) => (
                  <li className="plan__perk" key={perk}>
                    <span className="plan__mark" aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a className={p.featured ? "btn btn--primary btn--block" : "btn btn--ghost btn--block"} href="#cenik">
                {p.featured && <Chip className="btn__chip" />}
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
