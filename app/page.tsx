import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "DOP",
      title: "Kamionová doprava",
      desc: "Vnitrostátní i mezinárodní přepravy do SK, PL a Maďarska. Vozíme vlastní flotilou třiceti souprav — bez zprostředkovatelů mezi vámi a řidičem.",
      meta: "CZ · SK · PL · H",
    },
    {
      code: "SPE",
      title: "Spedice a vytěžování",
      desc: "Vytěžíme vozidla po Česku i Slovensku a naplánujeme trasy tak, aby žádný kilometr nejel naprázdno. Dispečink zvedá telefon i po osmnácté.",
      meta: "Dispečink 8–18",
    },
    {
      code: "SKL",
      title: "Skladování",
      desc: "Skladovací prostory k pronájmu v našem areálu u Olomouce. Zázemí, které zvládne technické i logistické operace pod jednou střechou.",
      meta: "Areál Olomouc",
    },
    {
      code: "KAR",
      title: "Kariéra u nás",
      desc: "Rozšiřujeme tým. Hledáme spolehlivé řidiče a dispečery — férové podmínky, moderní vozy a domů na víkend.",
      meta: "Nábor otevřen",
    },
  ];

  const milestones = [
    { year: "2002", text: "Založení firmy J&M Transped v Olomouci — korektnost a osobní přístup od prvního dne." },
    { year: "2003", text: "Pořízena první kamionová souprava. Začátek vlastní flotily." },
    { year: "2014", text: "Vybudování vlastního areálu se zázemím pro techniku, dispečink i posádky." },
    { year: "dnes", text: "Třicet souprav na cestách a nové spediční centrum v Rakodavech ve výstavbě." },
  ];

  return (
    <main className="pg">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="J&M Transped, úvod">
          <span className="wordmark__amp">J&amp;M</span>
          <span className="wordmark__name">Transped</span>
          <span className="wordmark__tag">autodoprava · Olomouc</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Doprava</a>
          <a href="#sluzby">Spedice</a>
          <a href="#sluzby">Skladování</a>
          <a href="#firma">O nás</a>
          <a className="topnav__call" href="tel:+420736605768">+420 736 605 768</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Souprava J&M Transped na cestě mezi Olomoucí a hranicemi"
            width={1600}
            height={1000}
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span className="pulse" aria-hidden="true" /> Dispečink jede · Po–Pá 8:00–18:00
          </p>
          <h1 id="hero-title" className="hero__title">
            Náklad z Olomouce
            <br />
            <span className="hero__title--em">až za hranice.</span>
          </h1>
          <p className="hero__lead">
            Vlastní flotila třiceti kamionových souprav a spedice, která
            nenechá žádný kilometr jet naprázdno. Vozíme po Česku, Slovensku,
            Polsku i Maďarsku — od roku 2002.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420736605768">Zavolat dispečinkovi</a>
            <a className="btn btn--ghost" href="#sluzby">Co přepravíme</a>
          </div>

          <dl className="fleet" aria-label="Firma v číslech">
            <div className="fleet__cell">
              <dt>Souprav ve flotile</dt>
              <dd>30</dd>
            </div>
            <div className="fleet__cell">
              <dt>Na cestách od roku</dt>
              <dd>2002</dd>
            </div>
            <div className="fleet__cell">
              <dt>Států v dosahu</dt>
              <dd>4</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">Nákladní list</p>
          <h2 id="services-title" className="section-title">Čtyři věci, které pro vás vezeme dál</h2>
          <p className="section-sub">
            Od jednoho paletového místa po celovozovou zásilku přes čtyři země.
            Vše řídí náš dispečink, ne cizí zprostředkovatel.
          </p>
        </div>

        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card__code" aria-hidden="true">{s.code}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__desc">{s.desc}</p>
              <span className="card__meta">{s.meta}</span>
            </li>
          ))}
        </ul>

        <figure className="services__figure">
          <img
            src="/section-1.webp"
            alt="Kamiony J&M Transped v areálu společnosti u Olomouce"
            width={1400}
            height={840}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Vlastní areál z roku 2014 — zázemí pro techniku i posádky.</figcaption>
        </figure>
      </section>

      <section className="about" id="firma" aria-labelledby="about-title">
        <div className="about__grid">
          <div className="about__intro">
            <p className="eyebrow eyebrow--light">Kilometrovník firmy</p>
            <h2 id="about-title" className="section-title section-title--light">
              Dvě dekády na silnici, jeden přístup: dodržet slovo
            </h2>
            <p className="about__lead">
              J&amp;M Transped je logistická a spediční firma z Olomouce.
              Rosteme od jedné soupravy k celé flotile, a přesto si každou
              zakázku pořád vyřizuje konkrétní dispečer, kterého znáte jménem.
            </p>
            <figure className="about__figure">
              <img
                src="/section-2.webp"
                alt="Dispečer J&M Transped plánuje trasy zásilek"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <ol className="timeline" aria-label="Milníky firmy">
            {milestones.map((m) => (
              <li className="timeline__item" key={m.year}>
                <span className="timeline__year">{m.year}</span>
                <p className="timeline__text">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="about__note">
          Novinka: v Rakodavech stavíme nové spediční centrum. Součástí areálu
          budou i byty k pronájmu — projekt právě v přípravě.
        </p>
      </section>
    </main>
  );
}
