// SBD Vítkovice — návrh nového webu (hero + 2 sekce)
// Koncept: „Panelová mřížka" — vizuální svět družstva je fasáda panelového domu:
// pravidelný rastr oken, čísla vchodů, evidenční štítky. Celý design z toho vychází.

const obvody = [
  {
    kod: "MH",
    nazev: "Mariánské Hory",
    popis: "Sídlo družstva a technický úsek",
    adresa: "Daliborova 390/54, 709 00",
  },
  {
    kod: "PO",
    nazev: "Poruba",
    popis: "Obvodová bytová správa — Ostrava, Poruba",
    adresa: "Daliborova 390/54, 709 00",
  },
  {
    kod: "HB",
    nazev: "Hrabůvka · Dubina · Zábřeh",
    popis: "Obvodová bytová správa — jižní obvody",
    adresa: "Krakovská 1628/15A, 700 30",
  },
];

const sluzby = [
  {
    stitek: "TECH",
    nazev: "Technická správa domu",
    text: "Revize, opravy, havarijní služba a plánování oprav. Hlídáme termíny revizí za vás — od výtahů po hromosvody.",
  },
  {
    stitek: "EKON",
    nazev: "Ekonomika a účetnictví",
    text: "Předpisy záloh, vyúčtování služeb, vedení účetnictví SVJ i družstva. Přehledně, včas a bez překvapení.",
  },
  {
    stitek: "PŘED",
    nazev: "Profesionální předseda SVJ",
    text: "Nemáte ve výboru nikoho, kdo by chtěl funkci dělat? Převezmeme roli předsedy včetně plné odpovědnosti.",
  },
  {
    stitek: "ONLINE",
    nazev: "E-domovník",
    text: "Vyúčtování, dokumenty domu i nahlášení závady online. Vše o vašem bytě na jednom místě, kdykoli.",
  },
];

export default function Page() {
  return (
    <main className="sbd">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="SBD Vítkovice">
            <span className="wordmark-blok">SBD</span>
            <span className="wordmark-text">Vítkovice</span>
          </div>
          <p className="hero-tag">Správa bytových domů · Ostrava</p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Družstvo založené 1959</p>
            <h1 className="hero-title">
              <span className="hero-line">Váš dům.</span>
              <span className="hero-line hero-line-accent">Naše starost.</span>
              <span className="hero-line hero-line-mut">Už 65&nbsp;let.</span>
            </h1>
            <p className="hero-lead">
              Spravujeme <strong>12&nbsp;500 bytů, garáží a nebytových prostor</strong> po
              celé Ostravě. Vlastníkům a společenstvím šetříme čas, peníze
              a&nbsp;starosti — od revize výtahu po roční vyúčtování.
            </p>
            <div className="hero-akce">
              <a className="btn btn-hlavni" href="tel:+420556205411">
                Zavolat 556 205 411
              </a>
              <a className="btn btn-vedlejsi" href="mailto:druzstvo@sbd-vitkovice.cz">
                Napsat e-mail
              </a>
            </div>
          </div>

          {/* Signature prvek: „fasáda" — rastr oken panelového domu.
              Každé rozsvícené okno = domácnost ve správě. */}
          <div className="fasada" aria-hidden="true">
            <div className="fasada-okna">
              {Array.from({ length: 60 }).map((_, i) => (
                <span
                  key={i}
                  className={`okno${[3, 7, 12, 16, 21, 26, 30, 34, 41, 45, 50, 55, 58].includes(i) ? " okno-svetlo" : ""}`}
                />
              ))}
            </div>
            <div className="fasada-patro">
              <span className="fasada-cislo">12 500</span>
              <span className="fasada-popisek">jednotek ve správě</span>
            </div>
          </div>
        </div>

        <div className="hero-pas">
          <span>Mezi největšími správci v ČR</span>
          <span className="pas-delic">·</span>
          <span>3 provozovny v Ostravě</span>
          <span className="pas-delic">·</span>
          <span>Havarijní služba pro klienty</span>
        </div>
      </header>

      {/* ===================== SEKCE: SLUŽBY ===================== */}
      <section className="sekce sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Co pro váš dům děláme</p>
          <h2 id="sluzby-nadpis" className="sekce-titul">
            Kompletní správa — technická i&nbsp;ekonomická
          </h2>
        </div>

        <div className="sluzby-mrizka">
          {sluzby.map((s) => (
            <article key={s.stitek} className="karta">
              <span className="karta-stitek">{s.stitek}</span>
              <h3 className="karta-nazev">{s.nazev}</h3>
              <p className="karta-text">{s.text}</p>
            </article>
          ))}
        </div>

        <p className="sluzby-pozn">
          Hledáte správce pro vaše SVJ nebo dům? Ozvěte se — připravíme
          nabídku přesně pro váš dům, bez závazků.
        </p>
      </section>

      {/* ===================== SEKCE: DŮVĚRA / OBVODY ===================== */}
      <section className="sekce duvera" aria-labelledby="duvera-nadpis">
        <div className="sekce-hlava sekce-hlava-svetla">
          <p className="sekce-eyebrow">Proč nám Ostrava věří</p>
          <h2 id="duvera-nadpis" className="sekce-titul">
            Družstvo, ne firma na jedno použití
          </h2>
        </div>

        <div className="duvera-obsah">
          <div className="duvera-text">
            <p>
              Fungujeme od roku 1959 a patříme mezi největší správce bytových
              domů v České republice. Většina společenství vlastníků v naší
              správě nám svěřila i funkci <strong>profesionálního předsedy</strong> —
              to je důvěra, která se buduje desítky let.
            </p>
            <p>
              Nejsme anonymní firma z druhého konce republiky. Naši technici
              znají vaše domy, vchody i kotelny osobně. Když se něco stane,
              nejsme na telefonu — jsme za rohem.
            </p>
            <ul className="duvera-fakta">
              <li>
                <strong>65+ let</strong> zkušeností se správou domů
              </li>
              <li>
                <strong>12 500</strong> spravovaných jednotek v Ostravě
              </li>
              <li>
                <strong>3 provozovny</strong> — vždy blízko vašemu domu
              </li>
            </ul>
          </div>

          <div className="obvody">
            <p className="obvody-titul">Kde nás najdete</p>
            {obvody.map((o) => (
              <div key={o.kod} className="obvod">
                <span className="obvod-kod">{o.kod}</span>
                <div className="obvod-info">
                  <span className="obvod-nazev">{o.nazev}</span>
                  <span className="obvod-popis">{o.popis}</span>
                  <span className="obvod-adresa">{o.adresa}</span>
                </div>
              </div>
            ))}
            <div className="obvody-kontakt">
              <a href="tel:+420602702946">+420 602 702 946</a>
              <a href="mailto:druzstvo@sbd-vitkovice.cz">druzstvo@sbd-vitkovice.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
