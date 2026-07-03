const sluzby = [
  {
    kod: "K",
    nazev: "Kontejnerová doprava",
    popis:
      "Přistavíme kontejner 3–15 m³ na suť, zeminu, dřevo i směsný odpad. V Olomouci a okolí obvykle do 24 hodin — stačí zavolat dispečink.",
    detail: "Přistavení, odvoz i legální uložení odpadu vyřídíme za vás.",
  },
  {
    kod: "R",
    nazev: "Recyklace stavebních materiálů",
    popis:
      "Vlastní recyklační závod v Bystrovanech. Suť a beton od vás převezmeme, podrtíme a vrátíme do oběhu jako certifikovaný recyklát.",
    detail: "Prodáváme také písky, štěrky a betonový recyklát — odběr přímo v areálu.",
  },
  {
    kod: "Z",
    nazev: "Zemní práce",
    popis:
      "Výkopy základů, přípojek a bazénů, terénní úpravy, skrývka ornice. Bagry a nákladní vozy z jedné ruky — bez čekání na subdodavatele.",
    detail: "Zeminu rovnou odvezeme, nemusíte řešit, kam s ní.",
  },
  {
    kod: "D",
    nazev: "Demoliční práce",
    popis:
      "Demolice rodinných domů, hal i menších objektů včetně vyřízení odvozu a recyklace suti. Z bourání zbyde čistý pozemek, ne hromada problémů.",
    detail: "Suť z demolice zpracujeme ve vlastním závodě — ušetříte za skládkovné.",
  },
];

const reference = [
  "Strabag",
  "Gemo",
  "Zlínstav",
  "IMOS Brno",
  "Technické služby města Olomouce",
  "AVE CZ odpadové hospodářství",
];

const fakta = [
  { hodnota: "Bystrovany", popisek: "vlastní recyklační závod u Olomouce" },
  { hodnota: "do 24 h", popisek: "obvyklé přistavení kontejneru v regionu" },
  { hodnota: "6:30–15:30", popisek: "dispečink v provozu Po–Pá" },
];

export default function Page() {
  return (
    <main className="sm-page">
      {/* ===== HERO ===== */}
      <header className="sm-hero">
        <div className="sm-hero-top">
          <div className="sm-wordmark" aria-label="Smětal s.r.o.">
            <span className="sm-wordmark-name">SMĚTAL</span>
            <span className="sm-wordmark-sub">autodoprava · Olomouc</span>
          </div>
          <a className="sm-hero-tel" href="tel:+420602538058">
            <span className="sm-hero-tel-label">Dispečink</span>
            <span className="sm-hero-tel-num">602 538 058</span>
          </a>
        </div>

        <div className="sm-hero-body">
          <p className="sm-hero-route" aria-hidden="true">
            <span>OLOMOUC</span>
            <span className="sm-hero-route-line" />
            <span>BYSTROVANY</span>
            <span className="sm-hero-route-line" />
            <span>STAVBA</span>
          </p>

          <h1 className="sm-hero-title">
            <span className="sm-hero-line sm-hero-line-1">Kontejner na suť</span>
            <span className="sm-hero-line sm-hero-line-2">
              stojí u vás <em>do 24 hodin.</em>
            </span>
          </h1>

          <p className="sm-hero-lead">
            Kontejnerová doprava, zemní a demoliční práce a vlastní recyklační
            závod v Bystrovanech. Suť od vás odvezeme — a vrátíme ji na trh jako
            recyklát, ne na skládku.
          </p>

          <div className="sm-hero-cta">
            <a className="sm-btn sm-btn-solid" href="tel:+420602538058">
              Zavolat dispečink
            </a>
            <a className="sm-btn sm-btn-line" href="mailto:dispecink@smetal.cz">
              Napsat objednávku
            </a>
          </div>
        </div>

        {/* signature: reflexní šrafování jako na korbě kontejneru */}
        <div className="sm-hazard" aria-hidden="true">
          <div className="sm-hazard-stripes" />
          <div className="sm-hazard-plate">SMĚTAL · KONTEJNERY · RECYKLACE · ZEMNÍ PRÁCE · DEMOLICE ·&nbsp;</div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sm-sluzby" aria-labelledby="sluzby-h">
        <div className="sm-section-head">
          <p className="sm-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="sm-h2">
            Od výkopu po recyklát.
            <br />
            Jedna firma, jeden telefon.
          </h2>
        </div>

        <div className="sm-sluzby-grid">
          {sluzby.map((s) => (
            <article key={s.kod} className="sm-karta">
              <div className="sm-karta-kod" aria-hidden="true">
                {s.kod}
              </div>
              <h3 className="sm-karta-nazev">{s.nazev}</h3>
              <p className="sm-karta-popis">{s.popis}</p>
              <p className="sm-karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <p className="sm-sluzby-pozn">
          Potřebujete kontejner rychle? Volejte{" "}
          <a href="tel:+420602538058">602 538 058</a> — dispečink Po–Pá 6:30 až
          15:30.
        </p>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="sm-duvera" aria-labelledby="duvera-h">
        <div className="sm-duvera-inner">
          <div className="sm-duvera-text">
            <p className="sm-eyebrow sm-eyebrow-invert">Proč Smětal</p>
            <h2 id="duvera-h" className="sm-h2 sm-h2-invert">
              Suť u nás nekončí na skládce.
            </h2>
            <p className="sm-duvera-lead">
              V recyklačním závodě v Bystrovanech drtíme stavební suť a beton na
              certifikovaný recyklát. Stavíme na cirkulární ekonomice — co na
              stavbě zbyde, vrací se na jinou stavbu jako materiál. Pro vás to
              znamená nižší cenu za uložení a čisté svědomí vůči okolí.
            </p>

            <dl className="sm-fakta">
              {fakta.map((f) => (
                <div key={f.hodnota} className="sm-fakt">
                  <dt className="sm-fakt-hodnota">{f.hodnota}</dt>
                  <dd className="sm-fakt-popisek">{f.popisek}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="sm-duvera-ref">
            <h3 className="sm-ref-h">Jezdíme pro stavby, které znáte</h3>
            <ul className="sm-ref-list">
              {reference.map((r) => (
                <li key={r} className="sm-ref-item">
                  {r}
                </li>
              ))}
            </ul>
            <p className="sm-ref-pozn">
              Velkým stavebním firmám i domácnostem měříme stejně: přijedeme,
              kdy slíbíme, a odpad skončí tam, kde má.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
