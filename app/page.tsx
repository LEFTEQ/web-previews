export default function Page() {
  const postup = [
    {
      cislo: "01",
      nazev: "Projdeme byt",
      text: "V Olomouci a okolí se přijedeme podívat na dispozici, rozvody i stav povrchů. Řeknete nám, co vám doma nefunguje."
    },
    {
      cislo: "02",
      nazev: "Srovnáme rozsah",
      text: "Dostanete přehled prací od bourání po poslední spáru. Před zahájením si potvrdíme cenu, návaznosti i termín."
    },
    {
      cislo: "03",
      nazev: "Předáme hotový byt",
      text: "Koordinujeme zednické práce, sádrokarton, obklady i dlažby. Vy řešíte výsledek, ne pět různých řemeslníků."
    }
  ];

  const sluzby = [
    "Kompletní rekonstrukce bytů",
    "Koupelny a kuchyně",
    "Bourání a nové příčky",
    "Sádrokartony a podhledy",
    "Obklady, dlažby a omítky",
    "Osazení dveří a zárubní"
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#nahoru" aria-label="DVV stav – úvod">
            <span className="wordmark-main">DVV</span>
            <span className="wordmark-side">stav<br />Olomouc</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#rekonstrukce">Jak pracujeme</a>
            <a href="#sluzby">Co umíme</a>
          </nav>

          <a className="phone-link" href="tel:+420601214833">
            <span>Zavolat</span>
            +420 601 214 833
          </a>
        </header>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Rekonstrukce bytů · Olomouc</p>
            <h1 id="hero-title">
              Z původního bytu
              <span>uděláme váš.</span>
            </h1>
            <p className="hero-lead">
              Jedna stavební firma od bourání po obklady. Rekonstrukci naplánujeme,
              provedeme a předáme tak, abyste přesně věděli, co se u vás děje.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420601214833">Probrat rekonstrukci</a>
              <a className="text-link" href="#rekonstrukce">Jak probíhá práce <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Řemeslník DVV stav při rekonstrukci interiéru bytu"
            />
            <div className="measure measure-top" aria-hidden="true">
              <span>Olomouc</span><i></i><span>hotový interiér</span>
            </div>
            <div className="site-note">
              <span className="site-note-label">Jedna zakázka</span>
              <strong>od hrubé práce<br />po čistý detail</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section" id="rekonstrukce" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow">Postup bez dohadů</p>
          <h2 id="process-title">Víte, co bude následovat.</h2>
          <p>Rekonstrukce je zásah do každodenního života. Proto držíme jasné pořadí prací a mluvíme s vámi průběžně.</p>
        </div>

        <div className="process-layout">
          <div className="process-image">
            <img
              src="/section-1.webp"
              alt="Probíhající přesné stavební práce při rekonstrukci bytu"
              loading="lazy"
            />
            <span className="image-caption">Přesnost před rychlou zkratkou.</span>
          </div>

          <ol className="process-list">
            {postup.map((krok) => (
              <li key={krok.cislo}>
                <span className="step-number">{krok.cislo}</span>
                <div>
                  <h3>{krok.nazev}</h3>
                  <p>{krok.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="services-section" id="sluzby" aria-labelledby="services-title">
        <div className="services-visual">
          <img
            src="/section-2.webp"
            alt="Dokončený moderní interiér po rekonstrukci od DVV stav"
            loading="lazy"
          />
          <div className="address-stamp">
            <span>Zázemí firmy</span>
            <strong>Jeremenkova 54/3</strong>
            <span>779 00 Olomouc</span>
          </div>
        </div>

        <div className="services-copy">
          <p className="eyebrow">Řemesla pod jedním vedením</p>
          <h2 id="services-title">Méně předávání.<br />Více hotové práce.</h2>
          <p className="services-intro">
            DVV stav spojuje práce, které na sebe při rekonstrukci skutečně navazují.
            Nemusíte shánět zvlášť zedníka, obkladače a sádrokartonáře ani hlídat, kdo po kom nastoupí.
          </p>

          <ul className="service-list">
            {sluzby.map((sluzba) => <li key={sluzba}>{sluzba}</li>)}
          </ul>

          <div className="trust-strip" aria-label="Kontaktní a firemní údaje">
            <div><span>Firma</span><strong>DVV stav s.r.o.</strong></div>
            <div><span>IČO</span><strong>07928688</strong></div>
            <div><span>E-mail</span><a href="mailto:stavbypolach@seznam.cz">stavbypolach@seznam.cz</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
