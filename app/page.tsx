import type { CSSProperties } from "react";

export default function Page() {
  const trhTrida = [
    "třešně",
    "brambory",
    "cuketa",
    "česnek",
    "cibule",
    "kapusta",
    "kedlubny",
    "květák",
    "mrkev",
    "okurka",
    "paprika",
    "rajče",
    "zelí",
    "ředkvičky",
  ];

  const sortiment = [
    {
      cislo: "01",
      nazev: "Rostliny",
      popis:
        "Trvalky, letničky, keře i vzrostlé stromy. Poradíme, co se hodí ke stinnému severnímu záhonu i na výsluní k jižní zdi.",
    },
    {
      cislo: "02",
      nazev: "Zahradnické potřeby",
      popis:
        "Substráty, hnojiva, nářadí a semínka. České druhy, které tady na jihu Čech opravdu chytnou.",
    },
    {
      cislo: "03",
      nazev: "Dekorace",
      popis:
        "Truhlíky, keramika a vazačský materiál pro terasu, okno i balkon. Vybíráme sami, kus po kuse.",
    },
    {
      cislo: "04",
      nazev: "Farmářské produkty",
      popis:
        "Uzeniny od Misařů, mléčné výrobky, mouky, mošty, sirupy, med, čaje a koření. Čerstvé z okolí.",
    },
  ];

  const sluzby = [
    {
      nazev: "Květinová vazba",
      popis: "Kytice a věnce vážeme na počkání i na objednávku, na svatbu i na hřbitov.",
    },
    {
      nazev: "Dárkové poukazy",
      popis: "Poukaz v hodnotě, kterou zvolíte. Vyzvednete u nás nebo pošleme e‑mailem.",
    },
    {
      nazev: "Doprava",
      popis: "Velké rostliny, substráty i nábytek na zahradu přivezeme až domů po Českobudějovicku.",
    },
    {
      nazev: "Poradenství při nákupu rostlin",
      popis: "Ptejte se. Zahradník s vámi projde, co, kam a kdy zasadit, ať to roste.",
    },
  ];

  return (
    <main className="zk">
      <a className="zk-skip" href="#sortiment">
        Přeskočit na sortiment
      </a>

      <header className="zk-top">
        <div className="zk-wordmark" aria-label="Zahradnictví Krumlov">
          <span className="zk-wordmark-a">Zahradnictví</span>
          <span className="zk-wordmark-b">Krumlov</span>
        </div>
        <nav className="zk-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#trhy">Trhy</a>
          <a href="#sluzby">Služby</a>
        </nav>
      </header>

      <section className="zk-hero" aria-labelledby="zk-hero-nadpis">
        <img
          className="zk-hero-img"
          src="/hero.webp"
          alt="Pohled do zahradnictví plného kvetoucích rostlin"
          loading="eager"
          decoding="async"
        />
        <div className="zk-hero-panel">
          <p className="zk-eyebrow">Zahradnictví · Chvalšinská 222 · dojezd České Budějovice</p>
          <h1 id="zk-hero-nadpis" className="zk-hero-nadpis">
            Co vám může
            <br />
            <em>kvést</em> na zahradě
          </h1>
          <p className="zk-hero-text">
            Přijďte si udělat radost. Trvalky, letničky, stromy i farmářské dobroty —
            a zahradník, který poradí, co se u vás na jihu Čech opravdu ujme.
          </p>
          <div className="zk-hero-akce">
            <a className="zk-btn" href="#trhy">
              Co je právě zralé
            </a>
            <a className="zk-btn zk-btn-ghost" href="#sluzby">
              Naše služby
            </a>
          </div>
          <dl className="zk-otev">
            <div>
              <dt>Po–So</dt>
              <dd>8:00 – 18:00</dd>
            </div>
            <div>
              <dt>Neděle</dt>
              <dd>zavřeno</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sortiment" className="zk-sort" aria-labelledby="zk-sort-nadpis">
        <div className="zk-sort-head">
          <p className="zk-eyebrow zk-eyebrow-dark">Sortiment</p>
          <h2 id="zk-sort-nadpis">Od semínka po vzrostlý strom</h2>
          <p className="zk-lead">
            Čtyři regály celého zahradnictví. Vezmeme vás od záhonku až po sváteční stůl.
          </p>
        </div>
        <div className="zk-sort-grid">
          <ul className="zk-sort-list">
            {sortiment.map((s) => (
              <li key={s.cislo} className="zk-sort-item">
                <span className="zk-sort-num" aria-hidden="true">
                  {s.cislo}
                </span>
                <div>
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure className="zk-sort-fig">
            <img
              src="/section-1.webp"
              alt="Sazenice a rostliny připravené k prodeji v zahradnictví"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Sezónní kalendář najdete u vchodu — víme, co právě teď sázet.</figcaption>
          </figure>
        </div>
      </section>

      <section id="trhy" className="zk-trhy" aria-labelledby="zk-trhy-nadpis">
        <div className="zk-trhy-inner">
          <figure className="zk-trhy-fig">
            <img
              src="/section-2.webp"
              alt="Farmářské produkty a čerstvá zelenina na trzích v zahradnictví"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="zk-trhy-body">
            <p className="zk-eyebrow">Trhy v zahradnictví · každý čtvrtek</p>
            <h2 id="zk-trhy-nadpis">
              Tenhle čtvrtek ve znamení <em>třešní</em>
            </h2>
            <p className="zk-lead-light">
              Sezónní zelenina z okolí, uzeniny od Misařů, mléčné výrobky, mouky, mošty,
              sirupy, med a koření. Přijďte po ránu, než to nejlepší zmizí.
            </p>
            <ul className="zk-tags">
              {trhTrida.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="zk-sluzby">
              <h3>A ještě u nás zařídíte</h3>
              <ul className="zk-sluzby-list">
                {sluzby.map((s) => (
                  <li key={s.nazev}>
                    <strong>{s.nazev}</strong>
                    <span>{s.popis}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
