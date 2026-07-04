import type { CSSProperties } from "react";

export default function Page() {
  const languages = [
    "CS",
    "EN",
    "DE",
    "FR",
    "ES",
    "IT",
    "PL",
    "RU",
    "UK",
    "NL",
    "SK",
    "HU",
    "PT",
    "SV",
    "DA",
    "NO",
    "FI",
    "RO",
    "BG",
    "HR",
    "SL",
    "EL",
    "TR",
    "ZH",
    "JA",
    "AR",
  ];

  const services = [
    {
      pair: "CS → EN",
      title: "Odborné a technické překlady",
      body:
        "Manuály, normy, technická dokumentace, bezpečnostní listy. Přeložíme přesně, s jednotnou terminologií napříč celým dokumentem.",
    },
    {
      pair: "CS ↔ DE",
      title: "Soudní (úřední) překlady s razítkem",
      body:
        "Rodné listy, výpisy, smlouvy, diplomy. Překlad se svázaným originálem a doložkou soudního tlumočníka — přijme ho úřad i soud.",
    },
    {
      pair: "EN → CS",
      title: "Marketing a weby, co znějí česky",
      body:
        "Nejen slovo za slovo. Přepíšeme text tak, aby fungoval na české čtenáře — tón, reálie i délka vět sedí.",
    },
    {
      pair: "SPĚCHÁ",
      title: "Expresní překlad do 24 hodin",
      body:
        "Když hoří termín. Kratší zakázky zvládneme týž den, delší dělíme mezi ověřené překladatele a hlídáme jednotnost.",
    },
  ];

  const trust = [
    {
      n: "18",
      label: "let na trhu",
      note: "Překládáme z Hradce Králové nepřetržitě od roku 2006.",
    },
    {
      n: "26",
      label: "jazyků v nabídce",
      note: "Od angličtiny a němčiny po arabštinu a čínštinu.",
    },
    {
      n: "24 h",
      label: "expresní režim",
      note: "Nejrychlejší zakázky vyřídíme ještě týž den.",
    },
  ];

  return (
    <main className="page">
      <a className="skip" href="#nabidka">
        Přeskočit na nabídku
      </a>

      <header className="topbar">
        <span className="mark" aria-label="Bleskové překlady">
          <span className="mark__bolt" aria-hidden="true">
            /
          </span>
          <span className="mark__word">
            Bleskové <em>překlady</em>
          </span>
        </span>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Co překládáme</a>
          <a href="#duvera">O nás</a>
          <a className="topnav__call" href="tel:+420495426168">
            495 426 168
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true" />
        <p className="hero__eyebrow">Překladatelská agentura · Hradec Králové · od 2006</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__from">Text v jednom jazyce</span>
          <span className="hero__arc">
            <span className="hero__bolt" aria-hidden="true">
              ⌁
            </span>
          </span>
          <span className="hero__to">a čitelně v tom vašem.</span>
        </h1>
        <p className="hero__lead">
          Rychle, přesně a s razítkem, když ho potřebujete. Pošlete dokument, do hodiny
          víte cenu i termín — a s jazykem už si nelámete hlavu.
        </p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="mailto:info@flash-translations.com?subject=Poptávka%20překladu">
            Poslat dokument k ocenění
          </a>
          <a className="btn btn--ghost" href="tel:+420495426168">
            Zavolat na 495 426 168
          </a>
        </div>

        <div className="ticker" aria-label="Jazyky, které překládáme">
          <div className="ticker__track">
            {[...languages, ...languages].map((lg, i) => (
              <span className="ticker__item" key={i} aria-hidden={i >= languages.length}>
                {lg}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="nabidka" className="offer" aria-labelledby="offer-title">
        <div className="section-head">
          <p className="eyebrow">Co překládáme</p>
          <h2 id="offer-title">Čtyři věci, se kterými za námi lidé chodí nejčastěji</h2>
          <p className="section-head__note">
            Vyberte, co řešíte. Ceníme podle normostrany a předem — bez skrytých příplatků.
          </p>
        </div>

        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.title}>
              <span className="card__pair">{s.pair}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="duvera" className="trust" aria-labelledby="trust-title">
        <div className="section-head section-head--light">
          <p className="eyebrow eyebrow--light">Kdo za tím stojí</p>
          <h2 id="trust-title">
            Malý tým v centru Hradce, který překládá už osmnáct let
          </h2>
        </div>

        <div className="trust__body">
          <dl className="stats">
            {trust.map((t) => (
              <div className="stat" key={t.label}>
                <dt className="stat__label">{t.label}</dt>
                <dd className="stat__num">{t.n}</dd>
                <p className="stat__note">{t.note}</p>
              </div>
            ))}
          </dl>

          <div className="trust__how">
            <h3 className="trust__how-title">Jak to u nás proběhne</h3>
            <ol className="steps">
              <li className="step">
                <span className="step__n">01</span>
                <span className="step__text">
                  Pošlete soubor mailem nebo přinesete na Malé náměstí. Řekneme cenu za
                  normostranu a nejzazší termín.
                </span>
              </li>
              <li className="step">
                <span className="step__n">02</span>
                <span className="step__text">
                  Text překládá člověk oboru, ne stroj. U odborných zakázek držíme jeden
                  slovník pojmů, aby termíny seděly všude stejně.
                </span>
              </li>
              <li className="step">
                <span className="step__n">03</span>
                <span className="step__text">
                  Hotovo dostanete v dohodnutém formátu. U soudních překladů svázané s
                  originálem a s doložkou tlumočníka.
                </span>
              </li>
            </ol>

            <p className="trust__where">
              Najdete nás na <strong>Malém náměstí 110/3, Hradec Králové</strong>. Napište
              na <a href="mailto:info@flash-translations.com">info@flash-translations.com</a>{" "}
              nebo zavolejte na <a href="tel:+420495426168">495 426 168</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
