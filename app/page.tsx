const nemovitosti = [
  {
    tag: "Prodej · Rodinný dům",
    nazev: "Rodinný dům 339 m², parcela 1 301 m²",
    misto: "Frýdek-Místek",
    cena: "8 300 000 Kč",
    detail: "Užitná plocha 339 m², zahrada s jižní orientací, garáž pro dva vozy.",
  },
  {
    tag: "Prodej · Byt",
    nazev: "Horský apartmán 58 m² s venkovním stáním",
    misto: "Vsetín",
    cena: "4 590 000 Kč",
    detail: "Novostavba v Beskydech, vlastní stání 15 m², vhodné i k pronájmu.",
  },
  {
    tag: "Prodej · Pozemek",
    nazev: "Stavební pozemek 1 274 m²",
    misto: "Břeclav",
    cena: "3 400 000 Kč",
    detail: "Sítě na hranici pozemku, územní plán počítá s rodinným bydlením.",
  },
];

const krokyProdeje = [
  {
    krok: "Ocenění",
    text: "Spočítáme skutečnou tržní cenu z reálných prodejů v okolí — ne z inzerátů. Písemně a zdarma.",
  },
  {
    krok: "Příprava",
    text: "Profesionální fotografie, půdorys, právní prověrka nemovitosti. Inzerát, který obstojí.",
  },
  {
    krok: "Prodej",
    text: "Prohlídky vedeme my. Vy dostáváte zpětnou vazbu po každé z nich a rozhodujete o nabídkách.",
  },
  {
    krok: "Předání",
    text: "Kupní smlouva, advokátní úschova, katastr, předávací protokol. Peníze máte dřív, než předáte klíče.",
  },
];

export default function Page() {
  return (
    <main className="fr">
      {/* ================= HERO ================= */}
      <header className="fr-hero">
        <div className="fr-hero__media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="fr-hero__img"
          />
          <div className="fr-hero__scrim" />
        </div>

        <div className="fr-hero__inner">
          <div className="fr-topbar">
            <span className="fr-wordmark">
              FORTUNA<span className="fr-wordmark__dot">◆</span>REALITY
              <span className="fr-wordmark__city">Ostrava</span>
            </span>
            <a className="fr-topbar__tel" href="tel:+420800123456">
              Zavolat makléři
            </a>
          </div>

          <div className="fr-hero__copy">
            <p className="fr-hero__eyebrow">Realitní kancelář · 25 let na trhu · Ostrava a Moravskoslezský kraj</p>
            <h1 className="fr-hero__title">
              My neodhadujeme,
              <br />
              <em>my oceňujeme.</em>
            </h1>
            <p className="fr-hero__lead">
              Cenu vaší nemovitosti nepočítáme od stolu ani z inzerátů. Vycházíme
              ze skutečných prodejních cen v okolí — proto s námi neprodáte pod
              cenou a nekoupíte předraženě.
            </p>
            <div className="fr-hero__actions">
              <a className="fr-btn fr-btn--gold" href="#oceneni">
                Chci znát cenu své nemovitosti
              </a>
              <a className="fr-btn fr-btn--ghost" href="#nabidka">
                Prohlédnout nabídku
              </a>
            </div>
          </div>

          {/* Signature: cenový štítek — vizitka oboru oceňování */}
          <div className="fr-ticket" role="presentation">
            <div className="fr-ticket__row fr-ticket__row--head">
              <span>Tržní ocenění</span>
              <span className="fr-ticket__stamp">ověřeno</span>
            </div>
            <div className="fr-ticket__row">
              <span>Prodaných nemovitostí</span>
              <strong>2 870</strong>
            </div>
            <div className="fr-ticket__row">
              <span>Let na realitním trhu</span>
              <strong>25</strong>
            </div>
            <div className="fr-ticket__row">
              <span>Ocenění zdarma</span>
              <strong>do 48 h</strong>
            </div>
            <div className="fr-ticket__perf" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* ================= NABÍDKA ================= */}
      <section className="fr-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="fr-section__head">
          <p className="fr-eyebrow">Doporučené nemovitosti</p>
          <h2 id="nabidka-h" className="fr-h2">
            S námi nekoupíte předraženou nemovitost
          </h2>
          <p className="fr-section__lead">
            Každou nabídku před zveřejněním sami oceníme. Cena v inzerátu je
            cena, za kterou se v místě opravdu prodává.
          </p>
        </div>

        <ul className="fr-cards">
          {nemovitosti.map((n) => (
            <li className="fr-card" key={n.nazev}>
              <p className="fr-card__tag">{n.tag}</p>
              <h3 className="fr-card__title">{n.nazev}</h3>
              <p className="fr-card__misto">{n.misto}</p>
              <p className="fr-card__detail">{n.detail}</p>
              <div className="fr-card__price">
                <span className="fr-card__price-label">Tržní cena</span>
                <strong>{n.cena}</strong>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= OCENĚNÍ + DŮVĚRA ================= */}
      <section className="fr-section fr-section--dark" id="oceneni" aria-labelledby="oceneni-h">
        <div className="fr-split">
          <div className="fr-split__media">
            <img
              src="/section-2.webp"
              alt="Makléř Fortuna Reality předává klientům klíče od prodaného domu v Ostravě"
              className="fr-split__img"
            />
          </div>

          <div className="fr-split__body">
            <p className="fr-eyebrow fr-eyebrow--gold">Jak s námi prodáte</p>
            <h2 id="oceneni-h" className="fr-h2 fr-h2--light">
              Čtyři kroky od ocenění k předání klíčů
            </h2>
            <p className="fr-split__lead">
              Prodej vedeme od první schůzky po zápis v katastru. Vy podepisujete
              a rozhodujete, papírování je na nás.
            </p>

            <ol className="fr-steps">
              {krokyProdeje.map((k, i) => (
                <li className="fr-step" key={k.krok}>
                  <span className="fr-step__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="fr-step__title">{k.krok}</h3>
                    <p className="fr-step__text">{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="fr-quote">
              <p>
                „Byla jsem velmi spokojena s profesionálním přístupem a službami
                realitní kanceláře Fortuna Reality. Vše proběhlo přesně tak, jak
                slíbili.“
              </p>
              <footer>— Mirjana Landorová, prodej bytu</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
