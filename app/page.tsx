const katalog = [
  {
    kod: "18–26 °C",
    nazev: "Klimatizace",
    popis:
      "Splitové a multisplitové jednotky pro byty i kanceláře, mobilní klimatizace 2,5–4,3 kW bez montáže, VRF systémy pro celé budovy.",
    typy: ["Mobilní", "Splitové", "Multisplitové", "VRF systémy"],
  },
  {
    kod: "40–60 %",
    nazev: "Odvlhčovače",
    popis:
      "Domácí odvlhčovače od 30 l/den proti plísni a kondenzaci, průmyslové vysoušeče zdiva na stavbu, bazénové a koupelnové provedení.",
    typy: ["Domácí", "Průmyslové", "Bazénové", "Koupelnové"],
  },
  {
    kod: "+35 °C",
    nazev: "Topidla",
    popis:
      "Elektrická, naftová i plynová mobilní topidla. Vytopí dílnu, halu, nouzový stan — i ten cirkusový. Stacionární řešení pro trvalý provoz.",
    typy: ["Elektrická", "Naftová", "Plynová", "Stacionární"],
  },
  {
    kod: "COP 4,8",
    nazev: "Tepelná čerpadla",
    popis:
      "Vzduch/voda a vzduch/vzduch pro rodinné domy, modulární řešení pro bytové domy. Úsporný standard, který šetří peněženku i přírodu.",
    typy: ["Vzduch/vzduch", "Vzduch/voda", "Voda/voda", "Modulární"],
  },
  {
    kod: "kW–MW",
    nazev: "Chillery a fancoily",
    popis:
      "Výkonné chladicí jednotky pro serverovny, výrobu a administrativní budovy. Navrhneme, dodáme a zapojíme včetně rozvodů.",
    typy: ["Chillery", "Fancoily", "Průmysl", "Serverovny"],
  },
  {
    kod: "PM 2,5",
    nazev: "Čističky vzduchu",
    popis:
      "Filtrace prachu, pylu a alergenů v domácnosti i ordinaci. Skladem držíme i náhradní filtrační náplně pro celou řadu.",
    typy: ["Domácí", "Ordinace", "Filtrační náplně"],
  },
];

const sluzby = [
  {
    nazev: "Prodej",
    popis:
      "E-shop i kamenný sklad v Praze. Mobilní klimatizaci nebo odvlhčovač si odvezete ještě týž den — poradíme výkon přesně na vaše metry čtvereční.",
  },
  {
    nazev: "Montáž na klíč",
    popis:
      "Splitovou klimatizaci nebo tepelné čerpadlo zaměříme, dodáme a namontujeme včetně chladivového rozvodu a revize. Termín držíme, po Praze obvykle do dvou týdnů.",
  },
  {
    nazev: "Půjčovna",
    popis:
      "Vytopilo vás? Půjčíme vysoušeč zdiva na den i na měsíc. Topidla a ventilátory na akce, stavby a nárazové situace — bez čekání, ze skladu.",
  },
  {
    nazev: "Poradenství a servis",
    popis:
      "Zavoláte, popíšete prostor, my spočítáme výkon. Žádný prodej naslepo — a když zařízení jednou doslouží, víte, kam se obrátit.",
  },
];

export default function Page() {
  return (
    <main className="rk">
      {/* ===== HERO ===== */}
      <header className="rk-hero">
        <div className="rk-hero-top">
          <div className="rk-wordmark" aria-label="Remko CZECH">
            <span className="rk-wordmark-main">REMKO</span>
            <span className="rk-wordmark-sub">CZECH · Praha</span>
          </div>
          <nav className="rk-hero-nav" aria-label="Rychlé odkazy">
            <a href="#sortiment">Sortiment</a>
            <a href="#sluzby">Služby</a>
            <a href="tel:+420602170400" className="rk-hero-tel">
              602 170 400
            </a>
          </nav>
        </div>

        <div className="rk-hero-body">
          <p className="rk-hero-eyebrow">
            Klimatizace · odvlhčení · topení — prodej, montáž a půjčovna
          </p>
          <h1 className="rk-hero-title">
            <span className="rk-line rk-line-1">
              <span className="rk-temp rk-temp-cold" aria-hidden="true">
                −7 °C
              </span>
              <span className="rk-word">venku,</span>
            </span>
            <span className="rk-line rk-line-2">
              <span className="rk-temp rk-temp-hot" aria-hidden="true">
                +34 °C
              </span>
              <span className="rk-word">venku —</span>
            </span>
            <span className="rk-line rk-line-3">
              u vás doma pořád{" "}
              <span className="rk-temp-just">22 °C.</span>
            </span>
          </h1>

          <p className="rk-hero-lead">
            Německá technika REMKO s padesátiletou tradicí, česká montáž po
            Praze a okolí. Klimatizace nainstalujeme na klíč, vysoušeč půjčíme
            do druhého dne.
          </p>

          <div className="rk-hero-actions">
            <a className="rk-btn rk-btn-primary" href="#sluzby">
              Domluvit montáž
            </a>
            <a className="rk-btn rk-btn-ghost" href="#sortiment">
              Prohlédnout sortiment
            </a>
          </div>
        </div>

        {/* signature: teplotní stupnice — páteř celé stránky */}
        <div className="rk-scale" aria-hidden="true">
          <div className="rk-scale-track">
            <span className="rk-scale-mark" style={{ left: "4%" }}>
              −15°
            </span>
            <span className="rk-scale-mark" style={{ left: "24%" }}>
              0°
            </span>
            <span className="rk-scale-mark rk-scale-mark-comfort" style={{ left: "52%" }}>
              22° komfort
            </span>
            <span className="rk-scale-mark" style={{ left: "78%" }}>
              +30°
            </span>
            <span className="rk-scale-mark" style={{ left: "94%" }}>
              +40°
            </span>
            <span className="rk-scale-pin" />
          </div>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="rk-section" id="sortiment" aria-labelledby="sortiment-h">
        <div className="rk-section-head">
          <h2 id="sortiment-h">Vaše klima v každém ročním období</h2>
          <p>
            Šest kategorií, jeden sklad v Praze. U každé uvádíme hodnotu, kterou
            zařízení hlídá — protože klima je vždycky o číslech.
          </p>
        </div>

        <div className="rk-katalog">
          {katalog.map((k) => (
            <article className="rk-karta" key={k.nazev}>
              <p className="rk-karta-kod">{k.kod}</p>
              <h3>{k.nazev}</h3>
              <p className="rk-karta-popis">{k.popis}</p>
              <ul className="rk-karta-typy">
                {k.typy.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== SLUŽBY / DŮVĚRA ===== */}
      <section className="rk-section rk-section-alt" id="sluzby" aria-labelledby="sluzby-h">
        <div className="rk-sluzby-grid">
          <div className="rk-sluzby-intro">
            <p className="rk-eyebrow">Proč Remko CZECH</p>
            <h2 id="sluzby-h">
              50 let německé techniky. Montujeme a půjčujeme z Prahy.
            </h2>
            <p className="rk-sluzby-text">
              Značka REMKO klimatizuje, topí a odvlhčuje objekty po celé Evropě
              od roku 1976. My jsme její české zastoupení — nejsme překupník
              s krabicemi, ale technici, kteří zařízení sami montují, servisují
              a půjčují. Když voláte na 602 170 400, mluvíte s někým, kdo měl
              tenhle stroj v rukou.
            </p>
            <dl className="rk-fakta">
              <div>
                <dt>50 let</dt>
                <dd>výroby REMKO v Německu</dd>
              </div>
              <div>
                <dt>6 kategorií</dt>
                <dd>od klimatizací po chillery</dd>
              </div>
              <div>
                <dt>1 telefon</dt>
                <dd>prodej, montáž i půjčovna</dd>
              </div>
            </dl>
          </div>

          <ol className="rk-sluzby-list">
            {sluzby.map((s) => (
              <li className="rk-sluzba" key={s.nazev}>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
