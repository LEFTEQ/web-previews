const sluzby = [
  {
    kod: "UV",
    nazev: "UV tisk na cokoliv",
    popis:
      "Přímý potisk PVC, skla, dřeva, plexi i plátna. Deska do tiskárny, hotový kus ven — barva drží i venku a nesloupne se.",
    material: "sklo · dřevo · PVC · plexi",
  },
  {
    kod: "ŘG",
    nazev: "Řezaná grafika a polepy",
    popis:
      "Polepy výloh, aut a firemních štítů řežeme z fólie na plotru. Návrh vám ukážeme na fotce vaší výlohy, než cokoliv nalepíme.",
    material: "fólie · výlohy · auta · štíty",
  },
  {
    kod: "TX",
    nazev: "Potisk textilu a výšivky",
    popis:
      "Firemní trika, mikiny i pracovní oděvy s vaším logem. Od jednoho kusu na zkoušku po stovky pro celý tým.",
    material: "trika · mikiny · pracovní oděvy",
  },
  {
    kod: "GS",
    nazev: "Grafické studio",
    popis:
      "Logo, vizitky, letáky i design na auto — navrhneme a rovnou vyrobíme. Nemusíte obíhat grafika a tiskárnu zvlášť.",
    material: "loga · vizitky · tiskoviny",
  },
  {
    kod: "VF",
    nazev: "Velkoformát a plánografie",
    popis:
      "Bannery, plachty, vlajky a výstavní systémy. Kopírujeme a skenujeme od A5 do A0 včetně kompletace.",
    material: "bannery · vlajky · A5–A0",
  },
  {
    kod: "SP",
    nazev: "Svatby a zakázky na míru",
    popis:
      "Polepy svatebních aut, průhledné vizitky, poháry a trofeje. Věci, které jinde neseženete, tady vyrobíme na počkání s vámi.",
    material: "svatební auta · vizitky · trofeje",
  },
];

const kroky = [
  {
    cislo: "1",
    titul: "Napíšete nebo zavoláte",
    text: "Stačí říct, co potřebujete — polep výlohy, trika pro tým, banner na plot. Do druhého dne se ozveme s cenou.",
  },
  {
    cislo: "2",
    titul: "Ukážeme návrh",
    text: "Grafiku vidíte předem — na fotce vaší výlohy, auta nebo trika. Upravujeme, dokud nejste spokojení.",
  },
  {
    cislo: "3",
    titul: "Vyrobíme pod jednou střechou",
    text: "Tisk, řezání i lepení děláme sami na Pospíšilově třídě. Hotovou zakázku si vyzvednete, nebo ji přijedeme nalepit.",
  },
];

export default function Page() {
  return (
    <main className="bf">
      {/* ===== HERO ===== */}
      <header className="bf-hero">
        <div className="bf-hero-top">
          <div className="bf-wordmark" aria-label="BlackFox Art">
            <span className="bf-wordmark-black">BLACK</span>
            <span className="bf-wordmark-fox">FOX</span>
            <span className="bf-wordmark-art">ART</span>
          </div>
          <p className="bf-hero-loc">
            Hradec Králové · Pospíšilova tř. 1157/37
          </p>
        </div>

        <div className="bf-hero-main">
          <p className="bf-hero-eyebrow">Výroba reklamy pod jednou střechou</p>
          <h1 className="bf-hero-title">
            <span className="bf-line bf-line-1">Potiskneme</span>
            <span className="bf-line bf-line-2">
              <em>sklo, dřevo, auto</em>
            </span>
            <span className="bf-line bf-line-3">i&nbsp;vaše triko.</span>
          </h1>
          <p className="bf-hero-sub">
            UV tisk, řezaná grafika, potisk textilu a&nbsp;grafické studio
            v&nbsp;Hradci Králové. Návrh i&nbsp;výroba na jednom místě — bez
            přeposílání mezi grafikem a&nbsp;tiskárnou.
          </p>
          <div className="bf-hero-cta">
            <a className="bf-btn bf-btn-solid" href="tel:+420734230338">
              Zavolat 734 230 338
            </a>
            <a className="bf-btn bf-btn-line" href="mailto:info@blackfoxart.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* signature: řezací plotr — ořezová dráha lišky */}
        <div className="bf-cutpath" aria-hidden="true">
          <svg viewBox="0 0 640 420" className="bf-cutpath-svg" role="img">
            <path
              className="bf-fox-fill"
              d="M110 340 L200 120 L265 210 L320 90 L375 210 L440 120 L530 340 L470 340 L440 260 L400 330 L320 200 L240 330 L200 260 L170 340 Z"
            />
            <path
              className="bf-fox-cut"
              d="M110 340 L200 120 L265 210 L320 90 L375 210 L440 120 L530 340 L470 340 L440 260 L400 330 L320 200 L240 330 L200 260 L170 340 Z"
            />
            <g className="bf-cut-marks">
              <path d="M188 100 h24 M200 88 v24" />
              <path d="M428 100 h24 M440 88 v24" />
              <path d="M98 356 h24 M110 344 v24" />
              <path d="M518 356 h24 M530 344 v24" />
            </g>
          </svg>
          <p className="bf-cutpath-label">ořezová dráha · fólie oranžová 034</p>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="bf-sluzby" aria-labelledby="sluzby-h">
        <div className="bf-section-head">
          <h2 id="sluzby-h" className="bf-h2">
            Co pro vás vyrobíme
          </h2>
          <p className="bf-section-lead">
            Šest dílen v&nbsp;jednom ateliéru. U&nbsp;každé služby vidíte, na
            jaké materiály se hodí — když si nejste jistí, poradíme po
            telefonu.
          </p>
        </div>

        <ul className="bf-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="bf-card">
              <span className="bf-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="bf-card-title">{s.nazev}</h3>
              <p className="bf-card-text">{s.popis}</p>
              <p className="bf-card-material">{s.material}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== JAK TO PROBÍHÁ + DŮVĚRA ===== */}
      <section className="bf-duvera" aria-labelledby="duvera-h">
        <div className="bf-duvera-inner">
          <div className="bf-duvera-text">
            <h2 id="duvera-h" className="bf-h2 bf-h2-light">
              Jak zakázka probíhá
            </h2>
            <ol className="bf-kroky">
              {kroky.map((k) => (
                <li key={k.cislo} className="bf-krok">
                  <span className="bf-krok-cislo" aria-hidden="true">
                    {k.cislo}
                  </span>
                  <div>
                    <h3 className="bf-krok-titul">{k.titul}</h3>
                    <p className="bf-krok-text">{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="bf-atelier" aria-label="Ateliér a otevírací doba">
            <h3 className="bf-atelier-title">Ateliér v&nbsp;Hradci</h3>
            <p className="bf-atelier-adresa">
              Pospíšilova tř. 1157/37
              <br />
              500 03 Hradec Králové
            </p>
            <dl className="bf-hodiny">
              <div className="bf-hodiny-radek">
                <dt>Po–Čt</dt>
                <dd>9:00–12:00 · 13:00–16:00</dd>
              </div>
              <div className="bf-hodiny-radek">
                <dt>Pátek</dt>
                <dd>9:00–12:00 · 13:00–15:00</dd>
              </div>
              <div className="bf-hodiny-radek">
                <dt>So–Ne</dt>
                <dd>zavřeno</dd>
              </div>
            </dl>
            <div className="bf-atelier-kontakt">
              <a href="tel:+420734230338" className="bf-kontakt-link">
                +420 734 230 338
              </a>
              <a href="mailto:info@blackfoxart.cz" className="bf-kontakt-link">
                info@blackfoxart.cz
              </a>
            </div>
            <p className="bf-atelier-pozn">
              Zakázku si můžete vyzvednout osobně — dílna i&nbsp;výdej jsou na
              stejné adrese.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
