export default function Page() {
  const sluzby = [
    {
      kod: "KLI",
      nazev: "Klimatizace",
      popis:
        "Návrh, montáž a servis klimatizací pro byty, kanceláře i výrobní haly. Poradíme s výkonem, umístěním jednotek i hlučností — a přijedeme, když se něco pokazí.",
      detail: "Split i multisplit systémy, VRV/VRF pro větší objekty",
    },
    {
      kod: "TČ",
      nazev: "Tepelná čerpadla",
      popis:
        "V zimě topí, v létě chladí. Spočítáme vám návratnost pro váš dům nebo provoz, zajistíme montáž i pravidelné revize.",
      detail: "Vzduch–voda i vzduch–vzduch, včetně zapojení do stávajícího topení",
    },
    {
      kod: "VZT",
      nazev: "Vzduchotechnika",
      popis:
        "Kompletní dodávky vzduchotechniky pro průmysl i komerční budovy. Potrubí vyrábíme ve vlastní dílně v Plzni — z oceli i polyuretanu ALP, přesně na míru stavbě.",
      detail: "Vlastní výroba potrubí = žádné čekání na subdodávky",
    },
    {
      kod: "CHL",
      nazev: "Chlazení a vytápění",
      popis:
        "Technologické chlazení výrobních provozů, vytápění hal i administrativních budov. Řešíme celek, ne jen kus technologie.",
      detail: "Od projektu po uvedení do provozu a záruční servis",
    },
    {
      kod: "MaR",
      nazev: "Měření a regulace",
      popis:
        "Aby technologie nejela naplno, když nemusí. Regulace šetří energii a prodlužuje životnost zařízení.",
      detail: "Napojení na řídicí systémy budov",
    },
    {
      kod: "ELE",
      nazev: "Elektroinstalace",
      popis:
        "Silnoproud i slaboproud k dodávaným technologiím i samostatně. Vlastní elektrikáři, žádné přehazování odpovědnosti.",
      detail: "Včetně revizí a dokumentace",
    },
  ];

  const klienti = [
    "Panasonic Planá",
    "EvoBus Holýšov",
    "Borgers CS",
    "Ideal Automotive",
    "Strabag",
    "Metrostav",
    "Swietelsky",
    "SMP CZ",
    "Novasport Tachov",
    "Wake Stříbro",
    "Zeman a.s.",
    "KDK Tachov",
  ];

  return (
    <main className="kk">
      {/* ===== HERO ===== */}
      <header className="kk-hero">
        <div className="kk-hero-top">
          <div className="kk-wordmark" aria-label="KOVO KLIMA">
            <span className="kk-wordmark-kovo">KOVO</span>
            <span className="kk-wordmark-klima">KLIMA</span>
          </div>
          <p className="kk-hero-locality">Plzeň · vzduchotechnika od roku 1993</p>
        </div>

        <div className="kk-hero-main">
          <h1 className="kk-hero-title">
            <span className="kk-line kk-line-1">
              <span className="kk-hot">V&nbsp;zimě teplo,</span>
            </span>
            <span className="kk-line kk-line-2">
              <span className="kk-cold">v&nbsp;létě zima.</span>
            </span>
          </h1>

          {/* Signature: řez vzduchotechnickým potrubím — spirálová trubka z dílny */}
          <div className="kk-duct" aria-hidden="true">
            <div className="kk-duct-ring kk-duct-ring-1"></div>
            <div className="kk-duct-ring kk-duct-ring-2"></div>
            <div className="kk-duct-ring kk-duct-ring-3"></div>
            <div className="kk-duct-ring kk-duct-ring-4"></div>
            <div className="kk-duct-ring kk-duct-ring-5"></div>
            <div className="kk-duct-seam"></div>
          </div>

          <p className="kk-hero-sub">
            Klimatizace, tepelná čerpadla a vzduchotechnika pro západní Čechy.
            Potrubí si vyrábíme sami ve vlastní dílně — proto držíme termíny,
            na které se dá spolehnout.
          </p>

          <div className="kk-hero-actions">
            <a className="kk-btn kk-btn-primary" href="tel:+420377000000">
              Zavolat do dílny
            </a>
            <a className="kk-btn kk-btn-ghost" href="#sluzby">
              Co všechno děláme
            </a>
          </div>
        </div>

        <div className="kk-hero-strip" aria-hidden="true">
          <span>OCEL</span>
          <span className="kk-strip-dot">·</span>
          <span>POLYURETAN ALP</span>
          <span className="kk-strip-dot">·</span>
          <span>VLASTNÍ VÝROBA POTRUBÍ</span>
          <span className="kk-strip-dot">·</span>
          <span>MONTÁŽ</span>
          <span className="kk-strip-dot">·</span>
          <span>SERVIS</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="kk-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="kk-section-head">
          <p className="kk-eyebrow">Naše řemesla</p>
          <h2 id="sluzby-h" className="kk-h2">
            Šest oborů, jedna parta,
            <br />
            jedna odpovědnost.
          </h2>
          <p className="kk-section-lead">
            Nemusíte shánět pět firem. Technologii navrhneme, vyrobíme,
            namontujeme, zapojíme — a pak se o ni staráme.
          </p>
        </div>

        <ul className="kk-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="kk-card">
              <span className="kk-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="kk-card-title">{s.nazev}</h3>
              <p className="kk-card-text">{s.popis}</p>
              <p className="kk-card-detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="kk-duvera" aria-labelledby="duvera-h">
        <div className="kk-duvera-inner">
          <div className="kk-duvera-text">
            <p className="kk-eyebrow kk-eyebrow-light">Proč nám věří průmysl</p>
            <h2 id="duvera-h" className="kk-h2 kk-h2-light">
              Když nám svěří halu Panasonic, zvládneme i váš dům.
            </h2>
            <p className="kk-duvera-p">
              Začínali jsme v roce 1993 jako zámečnictví a vzduchotechnika
              Jaroslava Holuba. Dnes dodáváme kompletní technologie do
              výrobních závodů po celém Plzeňsku a Tachovsku — a stejnou
              pečlivost přenášíme do každé montáže klimatizace v rodinném domě.
            </p>
            <p className="kk-duvera-p">
              Ve většině závodů, kam jsme technologii dodali, děláme dodnes
              i servis. To je nejlepší reference, jakou známe: zákazník, který
              se vrací třicet let.
            </p>

            <dl className="kk-fakta">
              <div className="kk-fakt">
                <dt>Na trhu od</dt>
                <dd>1993</dd>
              </div>
              <div className="kk-fakt">
                <dt>Výroba potrubí</dt>
                <dd>vlastní dílna</dd>
              </div>
              <div className="kk-fakt">
                <dt>Působnost</dt>
                <dd>Plzeňský kraj</dd>
              </div>
            </dl>
          </div>

          <div className="kk-klienti">
            <h3 className="kk-klienti-title">Servisujeme a dodáváme pro</h3>
            <ul className="kk-klienti-list">
              {klienti.map((k) => (
                <li key={k} className="kk-klient">
                  {k}
                </li>
              ))}
            </ul>
            <p className="kk-klienti-note">
              …a pro stovky domácností v Plzni a okolí, které chtějí v létě
              spát a v zimě netopit pánubohu do oken.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
