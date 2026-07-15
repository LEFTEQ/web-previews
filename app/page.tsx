import type { ReactElement } from "react";

const HOURS = [6, 8, 10, 12, 14, 16, 18, 20, 22];

const FEATURES = [
  {
    tag: "TECHNOGYM",
    title: "Kompletní řada strojů Technogym",
    body:
      "Celé patro vybavené italským Technogymem. Přesně vedený pohyb, plynulý odpor a dost stanovišť na to, abyste nečekali ve frontě na leg press.",
  },
  {
    tag: "ZÁZEMÍ",
    title: "Prostorné šatny a klidná regenerace",
    body:
      "Čisté šatny, sprchy a místo, kde se po tréninku v pohodě zchladíte. Žádné mačkání v pěti lidech u jedné lavičky.",
  },
  {
    tag: "9 TRENÉRŮ",
    title: "Osobní trenérky a trenéři na míru",
    body:
      "Devět trenérů, kteří vám sestaví plán podle vašeho cíle — ať začínáte, nebo se chystáte na závody. Domluvíte se přímo na recepci.",
  },
  {
    tag: "PARKING 4H",
    title: "Čtyři hodiny parkování zdarma",
    body:
      "Zaparkujete pod střechou v OC Plaza, čtyři hodiny máte zdarma a jdete rovnou cvičit. Za nepohodou nikam nemusíte.",
  },
];

const FACTS = [
  { label: "OTEVŘENO", value: "PO–PÁ 6–22 · SO–NE 7–21" },
  { label: "ADRESA", value: "Radčická 2, 301 00 Plzeň · OC Plaza" },
  { label: "TELEFON", value: "602 625 158", href: "tel:+420602625158" },
  { label: "E-MAIL", value: "info@premierfitness.cz", href: "mailto:info@premierfitness.cz" },
];

const CHIPS = [
  "Partner Technogym",
  "Multisport partner",
  "9 osobních trenérů",
  "Otevřeno 7 dní v týdnu",
];

export default function Page(): ReactElement {
  return (
    <main className="pf">
      <header className="pf-top">
        <a className="wordmark" href="#hero" aria-label="Premier Fitness, Plzeň">
          <span className="wordmark__bar" aria-hidden="true" />
          <span className="wordmark__p">Premier</span>
          <span className="wordmark__f">Fitness</span>
        </a>
        <span className="pf-top__hours">PO–PÁ 6–22 · SO–NE 7–21</span>
      </header>

      <section className="hero" id="hero">
        <img
          className="hero__bg"
          src="/hero.webp"
          alt="Interiér fitness centra Premier Fitness v plzeňské OC Plaza se stroji Technogym"
          width={1600}
          height={900}
          loading="eager"
        />
        <div className="hero__scrim" aria-hidden="true" />

        <div className="hero__inner">
          <p className="eyebrow hero__eyebrow">Plzeň · OC Plaza · Technogym</p>
          <h1 className="hero__title">
            Ryzí trénink
            <br />
            <span className="accent">na Technogymu</span>
          </h1>
          <p className="lede hero__lede">
            Moderní fitness centrum v OC Plaza. Kompletní řada strojů Technogym,
            devět osobních trenérů a čtyři hodiny parkování zdarma — otevřeno už
            od šesti ráno.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#nabidka">
              Zobrazit ceník
            </a>
            <a className="btn btn--ghost" href="#onas">
              Naši trenéři
            </a>
          </div>

          <div className="gauge" role="img" aria-label="Provozní doba: pracovní dny od 6 do 22 hodin">
            <span className="gauge__label">PROVOZ</span>
            <div className="gauge__track">
              <div className="gauge__fill" aria-hidden="true" />
              <div className="gauge__ticks" aria-hidden="true">
                {HOURS.map((h) => (
                  <span className="gauge__tick" key={h}>
                    {String(h).padStart(2, "0")}
                  </span>
                ))}
              </div>
            </div>
            <span className="gauge__note">otevřeno 16 h denně</span>
          </div>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow">Co u nás najdete</p>
          <h2 className="section-head__title" id="nabidka-h">
            Postaveno na kvalitě, ne na kilometrech běžících pásů
          </h2>
        </div>

        <div className="nabidka__grid">
          <div className="nabidka__media">
            <img
              src="/section-1.webp"
              alt="Cvičební stroje a činky ve fitness centru Premier Fitness"
              width={900}
              height={1100}
              loading="lazy"
            />
          </div>

          <ul className="features">
            {FEATURES.map((f) => (
              <li className="feature" key={f.tag}>
                <span className="feature__tag">{f.tag}</span>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__body">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="onas" id="onas" aria-labelledby="onas-h">
        <div className="onas__grid">
          <div className="onas__media">
            <img
              src="/section-2.webp"
              alt="Zázemí a tréninkový prostor fitness centra Premier Fitness v Plzni"
              width={900}
              height={1000}
              loading="lazy"
            />
          </div>

          <div className="onas__text">
            <p className="eyebrow">O nás</p>
            <h2 className="section-head__title" id="onas-h">
              Fitness, které v Plzni postavili s Technogymem
            </h2>
            <p className="lede">
              Premier Fitness v OC Plaza jsme vybavili ve spolupráci s prestižním
              výrobcem posilovacích strojů Technogym. Výsledkem je centrum, kam
              chodí lidé z celé Plzně — od úplných začátečníků po ty, kdo trénují
              každý den před prací.
            </p>

            <div className="chips">
              {CHIPS.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>

            <dl className="facts">
              {FACTS.map((f) => (
                <div className="fact" key={f.label}>
                  <dt className="fact__label">{f.label}</dt>
                  <dd className="fact__value">
                    {f.href ? <a href={f.href}>{f.value}</a> : f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
