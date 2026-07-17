import { DepthMeter } from "./motion";

function Profile({ fill }: { fill: string }) {
  const fillPath =
    "M0,70 L0,35 L70,35 L100,55 L190,55 L230,20 L330,20 L365,50 L465,50 L505,28 L610,28 L645,58 L760,58 L800,22 L900,22 L940,48 L1050,48 L1090,32 L1200,32 L1200,70 Z";
  const linePath =
    "M0,35 L70,35 L100,55 L190,55 L230,20 L330,20 L365,50 L465,50 L505,28 L610,28 L645,58 L760,58 L800,22 L900,22 L940,48 L1050,48 L1090,32 L1200,32";
  return (
    <svg className="profile" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true">
      <path fill={fill} d={fillPath} />
      <path className="profile__line" pathLength={1} d={linePath} />
    </svg>
  );
}

const services = [
  {
    code: "DE",
    name: "Demolice a bourací práce",
    desc: "Přístavby, garáže, jímky, betonové plochy, mosty i celé objekty. Rozebereme, rozbijeme, odvezeme.",
  },
  {
    code: "VÝ",
    name: "Výkopové a zemní práce",
    desc: "Základy novostaveb, bazény, sklepy, rýhy pro sítě. Podle rozsahu bagrem nebo ručně.",
  },
  {
    code: "OD",
    name: "Odvoz a likvidace suti",
    desc: "Nadbytečná zemina i stavební odpad. Kontejnery přistavíme, naložíme a legálně zlikvidujeme.",
  },
  {
    code: "TÚ",
    name: "Terénní úpravy",
    desc: "Srovnání pozemku, násypy, příprava plochy pod stavbu i zahradu. Necháme to rovné.",
  },
  {
    code: "IS",
    name: "Inženýrské sítě",
    desc: "Budování a rekonstrukce vodovodu, kanalizace a plynu — od výkopu po zásyp a povrch.",
  },
  {
    code: "RS",
    name: "Ruční i strojní práce",
    desc: "Tam, kde se bagr nedostane, jdeme rukama. Vrtání děr na sloupky, drobné výkopy, dokončení.",
  },
];

const references = [
  { place: "Dálnice D1", work: "Modernizace úseku" },
  { place: "Křižanovice", work: "Vybudování kanalizační sítě" },
  { place: "Rájec-Jestřebí", work: "Kanalizace a rekonstrukce vodovodního řádu" },
  { place: "Kurdějov", work: "Protipovodňový průleh" },
  { place: "Říčky", work: "Polní cesta, protipovodňové zídky a průlehy" },
  { place: "Ivančice", work: "Rekonstrukce komunikace, ul. Jana Blahoslava" },
  { place: "Moravský Krumlov", work: "Rekonstrukce cesty v zámeckém parku" },
];

export default function Page() {
  return (
    <div className="dig">
      <DepthMeter />

      <header className="topbar">
        <a className="wordmark" href="#top">
          <span className="wordmark__name">BADIN</span>
          <span className="wordmark__tag">bourací &amp; výkopové práce · Brno</span>
        </a>
        <a className="topbar__phone" href="tel:+420777156747">
          <span className="topbar__phone-lbl">Zavolejte</span>
          777&nbsp;156&nbsp;747
        </a>
      </header>

      <main id="top">
        {/* ±0,00 — POVRCH */}
        <section className="band band--surface hero" aria-labelledby="hero-title">
          <span className="band__elev band__elev--hero" aria-hidden="true">±0,00</span>
          <div className="hero__inner">
            <p className="eyebrow">Povrch · Brno a okolí · od roku, kdy jsme poprvé kopli do země</p>

            <svg className="survey" viewBox="0 0 500 30" preserveAspectRatio="none" aria-hidden="true">
              <path
                className="survey__line"
                pathLength={1}
                d="M0,15 L60,15 L90,25 L160,25 L190,6 L260,6 L290,22 L360,22 L390,10 L440,10 L470,20 L500,20"
              />
            </svg>

            <h1 className="hero__title" id="hero-title">
              <span className="hero__line"><span>BOURÁME.</span></span>
              <span className="hero__line"><span>KOPEME.</span></span>
              <span className="hero__line"><span>ODVEZEME.</span></span>
            </h1>

            <p className="hero__sub">
              Přijedeme s technikou, srovnáme přístavbu se zemí, vykopeme základy a suť
              naložíme na náklaďák. Vy si najdete ráno čistý, rovný pozemek — a termín, který
              opravdu platí.
            </p>

            <div className="hero__cta">
              <a className="btn" href="tel:+420777156747">Zavolat Radkovi</a>
              <span className="hero__note">Odpovíme, kolik to bude stát a kdy přijedeme.</span>
            </div>
          </div>
        </section>

        {/* −1,50 — PODLOŽÍ / SLUŽBY */}
        <section className="band band--subsoil" aria-labelledby="svc-title">
          <Profile fill="var(--subsoil)" />
          <div className="band__inner">
            <div className="band__head">
              <span className="band__elev" aria-hidden="true">−1,50 m</span>
              <h2 className="band__title" id="svc-title">Co pro vás vykopeme a zbouráme</h2>
              <p className="band__lead">
                Všechno od jedné party — přípravu, samotné bourání i úklid. Neváhejte nás
                oslovit i s drobnou prací; technika i lidé jsou sehraní.
              </p>
            </div>

            <ul className="svc">
              {services.map((s) => (
                <li className="svc__row" key={s.code}>
                  <span className="svc__code" aria-hidden="true">{s.code}</span>
                  <div className="svc__body">
                    <h3 className="svc__name">{s.name}</h3>
                    <p className="svc__desc">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* −3,00 — PODLOŽÍ / REFERENCE + DŮVĚRA */}
        <section className="band band--bedrock" aria-labelledby="ref-title">
          <Profile fill="var(--iron)" />
          <div className="band__inner">
            <div className="band__head">
              <span className="band__elev" aria-hidden="true">−3,00 m</span>
              <h2 className="band__title" id="ref-title">Na čem už jsme stáli</h2>
              <p className="band__lead">
                O kvalitě a termínech se přesvědčila řada obcí i soukromých stavebníků na
                Brněnsku. Tady je výběr z toho, co jsme dostali až na pevné podloží.
              </p>
            </div>

            <ol className="log">
              {references.map((r, i) => (
                <li className="log__row" key={r.place}>
                  <span className="log__idx" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="log__place">{r.place}</span>
                  <span className="log__work">{r.work}</span>
                </li>
              ))}
            </ol>

            <div className="promise">
              <p className="promise__lead">
                „Prodloužení výkopu naruší celý harmonogram stavby. S námi to nenastane.“
              </p>
              <dl className="promise__facts">
                <div>
                  <dt>Termín</dt>
                  <dd>Domluvíme datum a držíme se ho.</dd>
                </div>
                <div>
                  <dt>Rozsah</dt>
                  <dd>Od altánu po základy novostavby i demolice mostu.</dd>
                </div>
                <div>
                  <dt>Úklid</dt>
                  <dd>Suť a zeminu odvezeme. Pozemek necháme čistý.</dd>
                </div>
              </dl>

              <div className="contact">
                <a className="contact__phone" href="tel:+420777156747">777 156 747</a>
                <a className="contact__phone" href="tel:+420774849505">774 849 505</a>
                <a className="contact__mail" href="mailto:radekbadin@badinsro.cz">
                  radekbadin@badinsro.cz
                </a>
                <span className="contact__addr">
                  Působíme po celém Brněnsku — Brno-venkov, Ivančice, Rosice, Pohořelice,
                  Moravský Krumlov.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
