import type { CSSProperties } from "react";

export default function Page() {
  const profily = [
    { kod: "CB 8/88", vyska: "8", pouziti: "Stěny, podhledy, obklady" },
    { kod: "CB 20/190", vyska: "20", pouziti: "Fasády a lehké střechy" },
    { kod: "CB 35/207", vyska: "35", pouziti: "Střechy s běžným rozponem" },
    { kod: "CB 40/160", vyska: "40", pouziti: "Střechy, mezistřešní vazby" },
    { kod: "CB 45/333", vyska: "45", pouziti: "Úsporné střešní krytí" },
    { kod: "CB 60/235", vyska: "60", pouziti: "Stropy, větší rozpony" },
    { kod: "CB 135/310", vyska: "135", pouziti: "Haly, velké rozpony" },
    { kod: "CB 160/250", vyska: "160", pouziti: "Nosné stropní konstrukce" }
  ];

  const duvody = [
    {
      cislo: "01",
      titulek: "Vyrobeno v Budějovicích",
      text: "Přes 10 milionů m² plechu jsme naprofilovali doma na Křižíkově ulici. Ne přeprodáváme — vyrábíme na vlastní automatizované lince a dodáme do 14 dnů od objednávky."
    },
    {
      cislo: "02",
      titulek: "Ocel, na kterou je spoleh",
      text: "Standardně ocel S320 s pozinkem Z275 nebo ZM120 od prověřených dodavatelů z EU — i pro vnitřní použití, kde je kladen důraz na životnost."
    },
    {
      cislo: "03",
      titulek: "Certifikovaná výroba",
      text: "Od roku 2012 držíme certifikát EN 1090-1 a ISO 9001. Přesnost ohybu po celé délce hlídají ohraňovací lisy EHT s automatickým bombírováním."
    },
    {
      cislo: "04",
      titulek: "Blíž nulové stopě CO₂",
      text: "Navyšujeme podíl zpracovávané „zelené oceli“ a profilujeme z vlastní elektrické energie. Ekologie tu není heslo, ale způsob provozu."
    }
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="CB Profil, výroba trapézových plechů">
          <span className="wordmark__cb">CB</span>
          <span className="wordmark__profil">PROFIL</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#program">Výrobní program</a>
          <a href="#firma">O firmě</a>
          <a className="topnav__cta" href="#poptavka">Poptat plech</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__profile" aria-hidden="true">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="hero__wave">
            <path d="M0,50 L60,50 L100,10 L160,10 L200,50 L260,50 L300,10 L360,10 L400,50 L460,50 L500,10 L560,10 L600,50 L660,50 L700,10 L760,10 L800,50 L860,50 L900,10 L960,10 L1000,50 L1060,50 L1100,10 L1160,10 L1200,50" />
          </svg>
        </div>

        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">České Budějovice · Křižíkova 1762 · od roku 2006</p>
            <h1 className="hero__title">
              Trapézový plech,<br />
              <span className="hero__title-accent">ohnutý na milimetr.</span>
            </h1>
            <p className="hero__lead">
              Profilujeme střešní a stěnové plechy přímo v Budějovicích — od jemné vlny
              CB&nbsp;8/88 po nosné CB&nbsp;160/250. Vyberete profil, my ho naprofilujeme
              a doručíme do čtrnácti dnů.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#poptavka">Poptat cenu zakázky</a>
              <a className="btn btn--ghost" href="#program">Prohlédnout profily</a>
            </div>
            <dl className="hero__stats">
              <div>
                <dt>Naprofilováno v ČB</dt>
                <dd>10+ mil. m²</dd>
              </div>
              <div>
                <dt>Dodání</dt>
                <dd>do 14 dnů</dd>
              </div>
              <div>
                <dt>Výška vlny</dt>
                <dd>8–160 mm</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Trapézové plechy naskládané ve výrobní hale CB Profil v Českých Budějovicích"
              className="hero__img"
            />
            <figcaption className="hero__figcap">Výrobní hala, Křižíkova 1762</figcaption>
          </figure>
        </div>
      </section>

      <section className="program" id="program">
        <div className="program__head">
          <p className="eyebrow eyebrow--dark">Výrobní program</p>
          <h2 className="section-title">Profily řady CB, čtené podle výšky vlny</h2>
          <p className="section-lead">
            Označení říká všechno podstatné: první číslo je výška vlny v milimetrech,
            druhé krycí šířka. Čím vyšší vlna, tím větší rozpon plech unese.
          </p>
        </div>

        <ol className="profiles">
          {profily.map((p) => (
            <li className="profile" key={p.kod} style={{ "--h": p.vyska } as CSSProperties}>
              <div className="profile__glyph" aria-hidden="true">
                <svg viewBox="0 0 120 44" preserveAspectRatio="none">
                  <path
                    d="M0,40 L18,40 L30,6 L54,6 L66,40 L84,40 L96,6 L120,6"
                    className="profile__path"
                  />
                </svg>
              </div>
              <p className="profile__kod">{p.kod}</p>
              <p className="profile__vyska">vlna {p.vyska} mm</p>
              <p className="profile__pouziti">{p.pouziti}</p>
            </li>
          ))}
        </ol>

        <div className="program__note">
          <img
            src="/section-1.webp"
            alt="Detail profilované linky pro výrobu trapézových plechů"
            className="program__img"
          />
          <div className="program__notetext">
            <h3>Nejen trapéz</h3>
            <p>
              K profilům dodáváme lemovací a výztužné profily, kazety, střešní krytí
              se skrytým kotvením, sendvičové panely i spojovací a těsnicí materiál.
              Hraněné profily hraníme na lisech EHT — přesně, po celé délce.
            </p>
            <a className="link-arrow" href="#poptavka">Nevíte, který profil zvolit? Poradíme →</a>
          </div>
        </div>
      </section>

      <section className="firma" id="firma">
        <div className="firma__intro">
          <img
            src="/section-2.webp"
            alt="Pohled do výrobní haly CB Profil s automatizovanou profilovací linkou"
            className="firma__img"
          />
          <div className="firma__introtext">
            <p className="eyebrow">O firmě</p>
            <h2 className="section-title section-title--light">
              Ryze česká firma,<br />plech naprofilovaný doma
            </h2>
            <p className="section-lead section-lead--light">
              CB&nbsp;Profil vyrábí trapézové plechy a hraněné profily od roku 2006.
              Každý kus vzniká v nové hale na plně automatizované lince — žádné
              přeprodávání skladových zbytků, ale výroba na míru zakázce.
            </p>
          </div>
        </div>

        <ol className="reasons">
          {duvody.map((d) => (
            <li className="reason" key={d.cislo}>
              <span className="reason__num">{d.cislo}</span>
              <h3 className="reason__title">{d.titulek}</h3>
              <p className="reason__text">{d.text}</p>
            </li>
          ))}
        </ol>

        <div className="poptavka" id="poptavka">
          <div>
            <h3 className="poptavka__title">Máte rozměry? Řekneme cenu.</h3>
            <p className="poptavka__text">
              Pošlete typ profilu, barvu a metry — přibližnou cenu zakázky se snažíme
              vracet co nejrychleji. Volejte na výrobu do Budějovic nebo napište e-mail.
            </p>
          </div>
          <div className="poptavka__contact">
            <a className="btn btn--solid" href="tel:+420386116433">Zavolat na výrobu</a>
            <a className="btn btn--ghost" href="mailto:info@cbprofil.cz">Napsat poptávku</a>
          </div>
        </div>
      </section>
    </main>
  );
}
