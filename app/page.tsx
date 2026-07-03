const kontejnery = [
  {
    objem: "5",
    jednotka: "m³",
    nazev: "Kontejner na suť",
    popis: "Beton, cihly, tašky, zemina a kamení. Nejtěžší materiály, které se do většího kontejneru vozit nevyplatí.",
    hodiSe: ["Bourání příček a podlah", "Výkopová zemina", "Stará střešní krytina"],
  },
  {
    objem: "11",
    jednotka: "m³",
    nazev: "Kontejner na stavební odpad",
    popis: "Směsný stavební a demoliční odpad — všechno, co zbude po rekonstrukci bytu nebo domu.",
    hodiSe: ["Rekonstrukce bytu", "Výměna oken a dveří", "Demolice menších staveb"],
  },
  {
    objem: "21",
    jednotka: "m³",
    nazev: "Velkoobjemový kontejner",
    popis: "Nábytek, koberce, objemný odpad z vyklízení. Zadní čelo se otevírá jako vrata — nakládá se pohodlně po zemi.",
    hodiSe: ["Vyklízení budov a bytů", "Objemný odpad", "Křoviny, dřevo, tráva"],
  },
];

const odpady = [
  "Beton, cihly, tašky",
  "Zemina a kamení",
  "Asfaltové směsi",
  "Izolační materiály",
  "Dřevo a sklo",
  "Plasty a směsné obaly",
  "Železo, ocel, hliník",
  "Měď, bronz, mosaz",
  "Objemný odpad",
  "Křoviny a tráva",
];

export default function Page() {
  return (
    <main className="ak">
      {/* ============ HERO ============ */}
      <header className="ak-hero">
        <div className="ak-hero-top">
          <span className="ak-wordmark">
            ALEKAR<span className="ak-wordmark-dot">•</span>
            <span className="ak-wordmark-sub">autodoprava a kontejnery</span>
          </span>
          <a className="ak-hero-tel" href="tel:+420602110606">
            602 110 606
          </a>
        </div>

        <div className="ak-hero-body">
          <p className="ak-hero-eyebrow">Ústí nad Labem · Teplice · Děčín · Lovosice</p>
          <h1 className="ak-hero-title">
            <span className="ak-line ak-line-1">Kontejner</span>
            <span className="ak-line ak-line-2">
              na váš <em>odpad</em>
            </span>
            <span className="ak-line ak-line-3">přistavíme.</span>
          </h1>
          <p className="ak-hero-lead">
            Přistavení kontejneru, odvoz suti i vyklízení budov po celém Ústecku.
            Odpad odvezeme na skládku a uložíme podle zákona — vy řešíte stavbu, my papíry.
          </p>
          <div className="ak-hero-actions">
            <a className="ak-btn ak-btn-solid" href="tel:+420602110606">
              Zavolat a domluvit termín
            </a>
            <a className="ak-btn ak-btn-ghost" href="mailto:info@alekar.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        {/* Signature: řez korby kontejneru s objemy */}
        <div className="ak-hero-container" aria-hidden="true">
          <div className="ak-cnt ak-cnt-5">
            <span className="ak-cnt-vol">5&nbsp;m³</span>
            <span className="ak-cnt-label">suť</span>
          </div>
          <div className="ak-cnt ak-cnt-11">
            <span className="ak-cnt-vol">11&nbsp;m³</span>
            <span className="ak-cnt-label">stavební odpad</span>
          </div>
          <div className="ak-cnt ak-cnt-21">
            <span className="ak-cnt-vol">21&nbsp;m³</span>
            <span className="ak-cnt-label">velkoobjemový</span>
          </div>
        </div>
        <div className="ak-hero-ground" aria-hidden="true" />
      </header>

      {/* ============ SEKCE 1: KONTEJNERY ============ */}
      <section className="ak-section ak-kontejnery" aria-labelledby="kontejnery-h">
        <div className="ak-section-head">
          <h2 id="kontejnery-h">Tři velikosti, každá na něco jiného</h2>
          <p>
            Kontejnery vozíme vlastními vozy Mercedes Atego (12&nbsp;t) a MAN (15&nbsp;t).
            Poradíme vám, který objem se na váš odpad hodí — na suť se velký kontejner
            nevyplatí, na vyklízení zase malý nestačí.
          </p>
        </div>

        <div className="ak-cards">
          {kontejnery.map((k) => (
            <article className="ak-card" key={k.objem}>
              <div className="ak-card-vol">
                <span className="ak-card-num">{k.objem}</span>
                <span className="ak-card-unit">{k.jednotka}</span>
              </div>
              <h3>{k.nazev}</h3>
              <p>{k.popis}</p>
              <ul>
                {k.hodiSe.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="ak-odpady">
          <h3>Co všechno odvezeme</h3>
          <ul className="ak-odpady-list">
            {odpady.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="ak-odpady-note">
            Každý odpad má katalogové číslo, podle kterého se na skládce účtuje
            skládkovné. Zařadíme ho za vás — do ceny vám rovnou spočítáme dopravu
            i uložení.
          </p>
        </div>
      </section>

      {/* ============ SEKCE 2: DŮVĚRA ============ */}
      <section className="ak-section ak-duvera" aria-labelledby="duvera-h">
        <div className="ak-duvera-grid">
          <div className="ak-duvera-text">
            <p className="ak-eyebrow">Od roku 2013 na Ústecku</p>
            <h2 id="duvera-h">Odpad končí na skládce, ne u cesty</h2>
            <p>
              ALEKAR s.r.o. vozí odpad a stavební materiály po Ústeckém kraji už přes
              deset let. Odpad ukládáme na řízených skládkách — především SUEZ
              v Ústí nad Labem a Juros na Jedlové Hoře — a nakládáme s ním podle
              zákona o odpadech. Ke každé zakázce dostanete doklad o uložení.
            </p>
            <p>
              Jezdíme pro firmy, stavebníky, obce i domácnosti. Zavoláte, domluvíme
              termín, kontejner přistavíme před dům nebo na stavbu — a plný odvezeme,
              obvykle do druhého dne.
            </p>
          </div>

          <dl className="ak-fakta">
            <div className="ak-fakt">
              <dt>Vozový park</dt>
              <dd>Mercedes Atego 12&nbsp;t a MAN 15&nbsp;t s nosičem kontejnerů</dd>
            </div>
            <div className="ak-fakt">
              <dt>Kde jezdíme</dt>
              <dd>Ústí nad Labem, Teplice, Děčín, Lovosice a okolí</dd>
            </div>
            <div className="ak-fakt">
              <dt>Pro koho</dt>
              <dd>Firmy, podnikatelé, občané, města a obce</dd>
            </div>
            <div className="ak-fakt">
              <dt>Legislativa</dt>
              <dd>Nakládání s odpady dle zákona č.&nbsp;185/2001&nbsp;Sb.</dd>
            </div>
          </dl>
        </div>

        <div className="ak-postup" aria-label="Jak to probíhá">
          <div className="ak-krok">
            <span className="ak-krok-num">1</span>
            <div>
              <h3>Zavoláte</h3>
              <p>Řeknete, co potřebujete odvézt a odkud. Doporučíme velikost kontejneru a řekneme cenu.</p>
            </div>
          </div>
          <div className="ak-krok">
            <span className="ak-krok-num">2</span>
            <div>
              <h3>Přistavíme</h3>
              <p>Kontejner složíme přesně tam, kde ho chcete — před dům, na dvůr, na stavbu.</p>
            </div>
          </div>
          <div className="ak-krok">
            <span className="ak-krok-num">3</span>
            <div>
              <h3>Odvezeme a uložíme</h3>
              <p>Plný kontejner odvezeme na skládku a odpad uložíme podle katalogového čísla.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
