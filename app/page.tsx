const services = [
  {
    code: "AZ-01",
    zone: "Likvidace azbestu",
    lead: true,
    body:
      "Odstranění, likvidace a ekologické uložení azbestu i materiálů s jeho obsahem. Práci uzavřeme do kontrolované zóny, odsáváme vzduch a hlídáme, aby se vlákna nedostala ven.",
    items: [
      "Eternitové střešní krytiny",
      "Azbestové stoupačky",
      "Boletické panely",
    ],
  },
  {
    code: "DM-02",
    zone: "Demolice",
    body:
      "Bourání budov i objektů chemických provozů včetně ekologické likvidace stavebního odpadu a jeho odvozu na schválenou skládku.",
  },
  {
    code: "PR-03",
    zone: "Průzkum",
    body:
      "Předdemoliční průzkum stavby na výskyt azbestu. Ze zákona je povinný před každou demolicí i větší přestavbou — začneme jím, ať víte, do čeho jdete.",
  },
  {
    code: "SA-04",
    zone: "Sanace",
    body:
      "Sanace budov a průmyslových areálů zamořených chemickými látkami včetně azbestu. Vyčistíme i uzavřené nádrže, nádoby a zásobníky.",
  },
  {
    code: "ME-05",
    zone: "Měření",
    body:
      "Měření obsahu azbestu v ovzduší ve spolupráci s akreditovanými laboratořemi — máte v ruce doklad, že je vzduch čistý.",
  },
];

const dossier = [
  ["Založeno", "1996"],
  ["Střediska", "Brno · Praha"],
  ["Působnost", "celá Česká republika"],
  ["Klienti", "firmy i domácnosti"],
  ["Měření", "akreditované laboratoře"],
  ["Kontakt", "Petr Matějka, jednatel"],
];

export default function Page() {
  return (
    <main className="site">
      <header className="head">
        <div className="wrap head__in">
          <a className="mark" href="#top" aria-label="EKOLSAN.CZ — úvod">
            EKOLSAN<span className="mark__cz">.cz</span>
          </a>
          <a className="tel" href="tel:+420775705447">
            +420 775 705 447
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap">
          <p className="eyebrow">Azbest · Demolice · Sanace — Brno, od 1996</p>
          <h1 className="hero__h">
            Kontrolované
            <br />
            bourání.
            <br />
            Zapečetěná zóna.
          </h1>
          <div className="band band--hero" aria-hidden="true" />
          <p className="hero__lead">
            Odstraníme azbest, zbouráme stavbu a odvezeme odpad — pod kontrolou,
            s měřením ovzduší a papíry, které obstojí u kontroly. Pracujeme pro
            firmy i domácnosti po celé ČR.
          </p>
          <div className="hero__cta">
            <a className="btn btn--pri" href="tel:+420775705447">
              Zavolat 775 705 447
            </a>
            <a className="btn btn--sec" href="mailto:ekolsan@ekolsan.cz">
              Poslat poptávku
            </a>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <p className="kicker">Řízený přístup — pět zón</p>
          <h2 className="h2">Co u vás uděláme</h2>
          <div className="band band--rule" aria-hidden="true" />
          <div className="grid">
            {services.map((s) => (
              <article
                key={s.code}
                className={s.lead ? "placard placard--lg" : "placard"}
              >
                <div className="placard__tag">
                  <span className="placard__code">{s.code}</span>
                  <span className="placard__zone">{s.zone}</span>
                </div>
                <p className="placard__body">{s.body}</p>
                {s.items ? (
                  <ul className="placard__list">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="band band--divider" aria-hidden="true" />

      <section className="about">
        <div className="wrap about__grid">
          <div className="about__text">
            <p className="kicker">Kdo to dělá</p>
            <h2 className="h2">Ryze česká parta od roku 1996</h2>
            <div className="band band--rule" aria-hidden="true" />
            <p>
              Ve stavebnictví jsme skoro tři desítky let. Specializujeme se na
              demolice a bourací práce, sanaci a likvidaci azbestu i dalších
              nebezpečných odpadů, předdemoliční průzkumy a odstranění
              ekologických zátěží.
            </p>
            <p>
              Střediska máme v Brně a Praze a jezdíme po celém území republiky.
              Zavolejte nebo pošlete nezávaznou poptávku — navrhneme řešení a
              řekneme cenu prací.
            </p>
          </div>

          <aside className="dossier" aria-label="Údaje o firmě">
            <p className="dossier__title">Protokol firmy</p>
            <dl className="dossier__list">
              {dossier.map(([k, v]) => (
                <div className="dossier__row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <a className="dossier__mail" href="mailto:ekolsan@ekolsan.cz">
              ekolsan@ekolsan.cz
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
