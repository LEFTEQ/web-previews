import './globals.css';

export default function Page() {
  const sluzby = [
    { code: 'E01', nazev: 'Diagnostika elektroniky', popis: 'Načteme chybové kódy z řídicích jednotek, přeměříme napětí a najdeme příčinu, ne jen kontrolku na palubce.' },
    { code: 'E02', nazev: 'Startéry a alternátory', popis: 'Auto nenaskočí ráno na parkovišti? Přezkoušíme dobíjení, opravíme nebo vyměníme startér i alternátor.' },
    { code: 'E03', nazev: 'Autobaterie a dobíjení', popis: 'Test baterie pod zátěží, výměna na počkání a kontrola celého okruhu, aby vydržela i pardubickou zimu.' },
    { code: 'E04', nazev: 'Kabeláž a zkraty', popis: 'Hledáme přerušené vodiče, prokousané kabely a zkraty, které vybíjejí baterku přes noc.' },
    { code: 'E05', nazev: 'Světla a senzory', popis: 'Seřízení světel, výměna xenonů a LED, oprava parkovacích senzorů, kamer a čidel.' },
    { code: 'E06', nazev: 'Chiptuning a řídicí jednotky', popis: 'Úprava softwaru motoru, čtení a zápis řídicích jednotek, řešení po výpadku elektroniky.' },
  ];

  return (
    <main className="ae-main">
      <header className="ae-nav">
        <a className="ae-wordmark" href="#" aria-label="Autoservis Dubina – domů">
          <span className="ae-wordmark__mark" aria-hidden="true">
            <span className="ae-spark">+</span><span className="ae-spark ae-spark--minus">–</span>
          </span>
          <span className="ae-wordmark__text">
            <span className="ae-wordmark__top">DUBINA</span>
            <span className="ae-wordmark__sub">autoelektrika · Pardubice</span>
          </span>
        </a>
        <a className="ae-call" href="tel:+420607067466">
          <span className="ae-call__label">Zavolat</span>
          <span className="ae-call__num">607 067 466</span>
        </a>
      </header>

      <section className="ae-hero">
        <div className="ae-hero__grid">
          <div className="ae-hero__text">
            <p className="ae-eyebrow"><span className="ae-eyebrow__dot" aria-hidden="true" />Husova 1782 · Pardubice</p>
            <h1 className="ae-hero__title">
              Když auto <span className="ae-hl">nechce naskočit</span>,<br/>hledáme to<br/><span className="ae-hero__wire">v kabelech</span>.
            </h1>
            <p className="ae-hero__lead">
              Specializujeme se na autoelektriku všech značek. Startéry, alternátory,
              baterie, zkraty i řídicí jednotky — najdeme příčinu měřením, ne odhadem.
            </p>
            <div className="ae-hero__actions">
              <a className="ae-btn ae-btn--primary" href="tel:+420607067466">Zavolat 607 067 466</a>
              <a className="ae-btn ae-btn--ghost" href="#sluzby">Co opravíme</a>
            </div>
          </div>
          <figure className="ae-hero__figure">
            <img src="/hero.webp" alt="Měření elektroinstalace vozu v Autoservisu Dubina v Pardubicích" className="ae-hero__img" />
            <figcaption className="ae-hero__cap">
              <span className="ae-hero__reading" aria-hidden="true">12,6 V</span>
              <span>Diagnostika napětí v provozu</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ae-services" id="sluzby">
        <div className="ae-section-head">
          <p className="ae-eyebrow"><span className="ae-eyebrow__dot" aria-hidden="true" />Náš okruh</p>
          <h2 className="ae-h2">Elektrika, na kterou si servisy netroufají</h2>
          <p className="ae-section-lead">
            Vedeme každou zakázku jako uzavřený obvod: nejdřív změřit, pak opravit.
            Kódy sekcí odpovídají tomu, kterou část elektrického okruhu řešíme.
          </p>
        </div>
        <ul className="ae-grid">
          {sluzby.map((s) => (
            <li className="ae-card" key={s.code}>
              <span className="ae-card__code">{s.code}</span>
              <h3 className="ae-card__title">{s.nazev}</h3>
              <p className="ae-card__text">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ae-trust">
        <div className="ae-trust__grid">
          <figure className="ae-trust__figure">
            <img src="/section-1.webp" alt="Detail práce na kabeláži a řídicí jednotce vozu" className="ae-trust__img" />
          </figure>
          <div className="ae-trust__text">
            <p className="ae-eyebrow"><span className="ae-eyebrow__dot" aria-hidden="true" />Proč k nám</p>
            <h2 className="ae-h2">Diagnostika, která ušetří peníze za slepé výměny</h2>
            <p className="ae-trust__lead">
              Elektrická závada bývá schovaná v jednom vodiči nebo v konektoru.
              Než vyměníme drahý díl, přeměříme okruh a řekneme vám, v čem je skutečně problém.
              Pracujeme na všech značkách a mluvíme s vámi jazykem, kterému rozumíte.
            </p>
            <dl className="ae-stats">
              <div className="ae-stat">
                <dt className="ae-stat__k">Všechny značky</dt>
                <dd className="ae-stat__v">osobní i užitková vozidla</dd>
              </div>
              <div className="ae-stat">
                <dt className="ae-stat__k">Diagnostika na počkání</dt>
                <dd className="ae-stat__v">baterie a dobíjení hned</dd>
              </div>
              <div className="ae-stat">
                <dt className="ae-stat__k">Pardubice, Husova</dt>
                <dd className="ae-stat__v">objednání telefonem</dd>
              </div>
            </dl>
          </div>
        </div>
        <figure className="ae-trust__wide">
          <img src="/section-2.webp" alt="Vozidlo připravené k opravě v dílně Autoservisu Dubina" className="ae-trust__wideimg" />
          <figcaption className="ae-trust__widecap">Dílna na Husově 1782, Pardubice</figcaption>
        </figure>
      </section>
    </main>
  );
}
