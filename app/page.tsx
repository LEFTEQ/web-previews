import type { CSSProperties } from "react";

export default function Page() {
  const kategorie = [
    {
      cislo: "01",
      nazev: "Vodovodní baterie a designová sanita",
      popis:
        "Pákové i termostatické baterie, umyvadla, WC keramika a doplňky. Poradíme, co drží tlak a co jen dobře vypadá.",
      polozky: ["Pákové baterie", "Termostaty do sprchy", "Sanitární keramika", "Designové série"],
    },
    {
      cislo: "02",
      nazev: "Instalatérské zboží a rozvody",
      popis:
        "Trubky, tvarovky, ventily a průmyslové armatury pro celý rozvod vody. Sortiment, který znají profíci z montáží.",
      polozky: ["Trubky a tvarovky", "Průmyslové armatury", "Uzavírací ventily", "Spojovací materiál"],
    },
    {
      cislo: "03",
      nazev: "Filtrace a úprava vody",
      popis:
        "Změkčovače, mechanické filtry a úprava tvrdé pardubické vody. Podle rozboru navrhneme, co má smysl řešit.",
      polozky: ["Mechanická filtrace", "Změkčovače vody", "Rozbory vody", "Úprava tvrdosti"],
    },
    {
      cislo: "04",
      nazev: "Zahradní program a osvětlení",
      popis:
        "Zahradní armatury, čerpadla a LED osvětlení Best-LED. Na dvorek i k domu, ve stejné kvalitě jako koupelna.",
      polozky: ["Zahradní armatury", "Čerpadla", "LED osvětlení", "Venkovní svítidla"],
    },
  ];

  const duvery = [
    { cislo: "1993", label: "na trhu od" },
    { cislo: "4", label: "sortimentní řady pod jednou střechou" },
    { cislo: "1×", label: "velkoobchodní sklad v Pardubicích" },
  ];

  const veletrhy = [
    { nazev: "INFOTHERMA Ostrava", datum: "19.–22. 1. 2026" },
    { nazev: "AQUATHERM Praha", datum: "3.–6. 3. 2026" },
    { nazev: "Plzeňský veletrh Moderní dům a byt", datum: "17.–19. 10. 2025" },
  ];

  return (
    <main className="steno">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="STENO CZ – úvodní strana">
          <span className="wordmark__drop" aria-hidden="true" />
          <span className="wordmark__text">
            STENO<span className="wordmark__cz">CZ</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#o-nas">O nás</a>
          <a href="#veletrhy">Veletrhy</a>
        </nav>
        <a className="topcta" href="#o-nas">Velkoobchod Pardubice</a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Velkoobchod koupelnami · Pardubice · od 1993</p>
            <h1 id="hero-nadpis" className="hero__title">
              Voda, která<br />
              <span className="hero__accent">drží tlak</span>
            </h1>
            <p className="hero__lead">
              Baterie, sanita, rozvody i filtrace pod jednou střechou. Vybíráme sortiment tak,
              aby vydržel léta v provozu — ne jen týden na fotce v katalogu.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#sortiment">Prohlédnout sortiment</a>
              <a className="btn btn--ghost" href="#o-nas">Nechat si poradit</a>
            </div>
            <dl className="hero__meta">
              {duvery.map((d) => (
                <div key={d.label} className="hero__stat">
                  <dt>{d.cislo}</dt>
                  <dd>{d.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Detail vodovodní baterie a proudu vody v koupelně"
              width={900}
              height={1100}
              className="hero__img"
            />
            <figcaption className="hero__caption">
              <span className="hero__ripple" aria-hidden="true" />
              Sprchový termostat ze stálé nabídky skladu
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="sortiment" className="sortiment" aria-labelledby="sortiment-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Čtyři řady zboží</p>
          <h2 id="sortiment-nadpis">Celá koupelna od jednoho dodavatele</h2>
          <p className="section-head__lead">
            Od přívodní trubky po sprchovou hlavu. Značíme řady čísly tak, jak na sebe navazují
            při stavbě — od rozvodů až po to, co je vidět.
          </p>
        </div>

        <div className="cards">
          {kategorie.map((k) => (
            <article key={k.cislo} className="card">
              <span className="card__num" aria-hidden="true">{k.cislo}</span>
              <h3 className="card__title">{k.nazev}</h3>
              <p className="card__desc">{k.popis}</p>
              <ul className="card__list">
                {k.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="o-nas" className="onas" aria-labelledby="onas-nadpis">
        <figure className="onas__media">
          <img
            src="/section-1.webp"
            alt="Vystavené koupelnové baterie a sanita ve velkoobchodní prodejně STENO CZ"
            width={900}
            height={700}
            className="onas__img"
          />
        </figure>
        <div className="onas__copy">
          <p className="eyebrow eyebrow--dark">O nás</p>
          <h2 id="onas-nadpis">Velkoobchod, který vodě rozumí od rozvodu po odpad</h2>
          <p>
            STENO CZ zásobuje instalatéry i koncové zákazníky v Pardubicích a okolí od roku 1993.
            Neprodáváme jen krabice — poradíme s tlakem, tvrdostí vody i sladěním designu, aby
            koupelna fungovala roky, ne do konce záruky.
          </p>
          <ul className="onas__points">
            <li>
              <strong>Rozbor vody na míru.</strong> Podle tvrdosti navrhneme filtraci, která má
              v Pardubicích skutečně smysl.
            </li>
            <li>
              <strong>Skladem, ne na objednávku.</strong> Běžné baterie, tvarovky i ventily
              odvezete hned z velkoskladu.
            </li>
            <li>
              <strong>Smluvní prodejci.</strong> Spolupracujeme s montážními firmami po celém kraji.
            </li>
          </ul>
          <img
            src="/section-2.webp"
            alt="Detail sprchové hlavy a rozvodů vody"
            width={900}
            height={520}
            className="onas__img onas__img--wide"
          />
        </div>
      </section>

      <section id="veletrhy" className="veletrhy" aria-labelledby="veletrhy-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Kde nás potkáte</p>
          <h2 id="veletrhy-nadpis">Výstavy a aktuality</h2>
        </div>
        <ol className="vel-list">
          {veletrhy.map((v) => (
            <li key={v.nazev} className="vel-item">
              <span className="vel-item__date">{v.datum}</span>
              <span className="vel-item__name">{v.nazev}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
