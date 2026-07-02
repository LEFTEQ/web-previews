// RAL PNEU s.r.o. — pneuservis & autoservis Olomouc
// Design koncept: „Stopa pneumatiky" — vertikální dezénový pás jako signature prvek,
// paleta odvozená z dílny: asfaltová čerň, guma, chromová žluť výstražných pásů zvedáku.

const sluzby = [
  {
    nazev: "Přezutí a montáž pneu",
    popis:
      "Bezkontaktní montáž a demontáž — na ráfku nezůstane ani škrábanec. Osobní, 4x4 i lehké dodávky. Bez objednání, na počkání.",
    stroj: "bezkontaktní zouvačka",
  },
  {
    nazev: "Diagnostika pneumatik",
    popis:
      "Hunter GSP 9700 změří pneumatiku pod zátěží a odhalí vady, které okem nevidíte. Podklad použijete i pro reklamaci u výrobce.",
    stroj: "Hunter GSP 9700",
  },
  {
    nazev: "Geometrie náprav",
    popis:
      "Měření a seřízení sbíhavosti na počkání. Auto přestane táhnout do strany a pneumatiky se přestanou sjíždět nakřivo.",
    stroj: "Hunter HawkEye + VAS 6292",
  },
  {
    nazev: "Autoservis a mechanika",
    popis:
      "Veškeré mechanické práce, diagnostika motoru i podvozku, seřízení světlometů. Jedna návštěva, jedna střecha.",
    stroj: "motortester",
  },
  {
    nazev: "Karosárna a lakovna",
    popis:
      "Opravy po nehodě včetně vyřízení pojistné události — náklady jdou za pojišťovnou, ne za vámi. Lakujeme i do matu.",
    stroj: "lakovací box",
  },
  {
    nazev: "Péče o vůz",
    popis:
      "Čištění interiéru extrakční metodou, renovace a leštění světlometů, renovace laku systémem 3M, karbonové fólie 3M.",
    stroj: "extraktor / 3M",
  },
];

const duvody = [
  {
    cislo: "25+",
    jednotka: "let",
    text: "Rodinný pneuservis v Olomouci. Založili jsme ho jako rodina a rodina ho vede dodnes.",
  },
  {
    cislo: "0",
    jednotka: "objednávek",
    text: "Přijeďte, kdy se vám to hodí. Přezutí i geometrii uděláme na počkání — u kávy a s wi-fi.",
  },
  {
    cislo: "3",
    jednotka: "značky",
    text: "Výhradní zastoupení Bridgestone, Firestone a Dayton pro region. Pneu prodáme i namontujeme.",
  },
  {
    cislo: "1",
    jednotka: "v regionu",
    text: "Diagnostiku pneumatik Hunter GSP 9700 pod zátěží u nás v okolí nenajdete nikde jinde.",
  },
];

function TreadStrip({ className }: { className?: string }) {
  // Dezénový pás — stylizovaný vzor běhounu pneumatiky (šípové lamely)
  const rows = Array.from({ length: 14 });
  return (
    <svg
      className={className}
      viewBox="0 0 120 980"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
      focusable="false"
    >
      {rows.map((_, i) => {
        const y = i * 72;
        return (
          <g key={i} transform={`translate(0 ${y})`}>
            <path
              d="M0 8 L44 30 L44 44 L0 22 Z"
              fill="currentColor"
            />
            <path
              d="M120 8 L76 30 L76 44 L120 22 Z"
              fill="currentColor"
            />
            <rect x="52" y="26" width="16" height="14" rx="2" fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}

export default function Page() {
  return (
    <main className="rp">
      {/* ===== HERO ===== */}
      <header className="rp-hero">
        <div className="rp-hero-inner">
          <div className="rp-topbar">
            <span className="rp-wordmark">
              RAL<b>PNEU</b>
              <span className="rp-wordmark-sub">pneuservis · autoservis</span>
            </span>
            <a className="rp-topbar-place" href="#kontaktni-udaje">
              Olomouc
            </a>
          </div>

          <div className="rp-hero-grid">
            <TreadStrip className="rp-tread" />

            <div className="rp-hero-copy">
              <p className="rp-hero-eyebrow">Bez objednání · na počkání</p>
              <h1 className="rp-hero-title">
                <span className="rp-line rp-line-1">Přezujeme,</span>
                <span className="rp-line rp-line-2">změříme,</span>
                <span className="rp-line rp-line-3 rp-line-accent">seřídíme.</span>
              </h1>
              <p className="rp-hero-lead">
                Rodinný pneuservis a autoservis v Olomouci. Jediní v regionu
                diagnostikujeme pneumatiky pod zátěží na stroji Hunter GSP&nbsp;9700
                — auto od nás odjede bez vibrací a bez tahání do strany.
              </p>
              <div className="rp-hero-actions">
                <a className="rp-btn rp-btn-primary" href="tel:+420585000000">
                  Zavolat do servisu
                </a>
                <a className="rp-btn rp-btn-ghost" href="#sluzby">
                  Co všechno umíme
                </a>
              </div>
            </div>
          </div>

          <div className="rp-hero-strip" aria-hidden="true">
            <span>PNEUSERVIS</span>
            <span className="rp-dot">●</span>
            <span>AUTOSERVIS</span>
            <span className="rp-dot">●</span>
            <span>GEOMETRIE</span>
            <span className="rp-dot">●</span>
            <span>KAROSÁRNA</span>
            <span className="rp-dot">●</span>
            <span>LAKOVNA</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="rp-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="rp-section-head">
          <h2 id="sluzby-h">
            Všechno pro auto <em>pod jednou střechou</em>
          </h2>
          <p>
            Od přezutí přes geometrii až po opravu po nehodě. Nemusíte objíždět
            půl Olomouce — u nás to vyřídíte na jedné adrese.
          </p>
        </div>

        <ul className="rp-sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.nazev} className="rp-karta">
              <span className="rp-karta-stroj">{s.stroj}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="rp-duvera" aria-labelledby="duvera-h">
        <div className="rp-duvera-inner">
          <div className="rp-section-head rp-section-head-invert">
            <h2 id="duvera-h">
              Proč k nám jezdí <em>celá Olomouc</em>
            </h2>
            <p>
              Zvyšujeme odbornost, ne ceny. Špičkové stroje Hunter a poctivé
              řemeslo — to je celý recept.
            </p>
          </div>

          <dl className="rp-duvody">
            {duvody.map((d) => (
              <div key={d.jednotka} className="rp-duvod">
                <dt>
                  <span className="rp-duvod-cislo">{d.cislo}</span>
                  <span className="rp-duvod-jednotka">{d.jednotka}</span>
                </dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>

          <div className="rp-kontakt-pas" id="kontaktni-udaje">
            <p className="rp-kontakt-veta">
              Přijeďte bez objednání — kafe vaříme, wi-fi běží, geometrii
              změříme, než ho dopijete.
            </p>
            <div className="rp-kontakt-akce">
              <a className="rp-btn rp-btn-primary" href="tel:+420585000000">
                Zavolat: 585 000 000
              </a>
              <a className="rp-btn rp-btn-outline" href="mailto:servis@ralpneu.cz">
                Napsat e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
