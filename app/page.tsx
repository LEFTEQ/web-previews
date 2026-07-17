const services = [
  {
    no: "01",
    label: "Záruční servis",
    code: "WPR·ZAR",
    text: "Oprava spotřebiče rodiny Whirlpool, který je ještě v záruce. Vyřídíme za vás i komunikaci s výrobcem — vy jen počkáte na termín.",
  },
  {
    no: "02",
    label: "Pozáruční servis",
    code: "WPR·POZ",
    text: "Oprava po skončení záruky, výhradně s originálními díly a s jasnou cenou předem. Řekneme rovnou, kdy se oprava vyplatí.",
  },
  {
    no: "03",
    label: "Náhradní díly",
    code: "WPR·DIL",
    text: "Originální díly a příslušenství přímo od výrobce, skladem v Praze. Dohledáme je přesně podle 12NC kódu z vašeho štítku.",
  },
  {
    no: "04",
    label: "WPRO péče",
    code: "WPR·PECE",
    text: "Čisticí a odmašťovací přípravky a originální doplňky WPRO pro trouby, grily, pračky a sušičky — od výrobce, ne náhražky.",
  },
];

const brands = [
  "Whirlpool",
  "Bauknecht",
  "Hotpoint",
  "Indesit",
  "KitchenAid",
  "Ignis",
];

const spec: [string, string][] = [
  ["Provozovatel", "AP Servis"],
  ["Lokalita", "Praha"],
  ["V provozu od", "1991"],
  ["Servis", "Autorizovaný · rodina Whirlpool"],
  ["Sklad", "Vlastní · originální díly"],
  ["Tým", "Vlastní servisní technici"],
];

const sampleCode = "859991565430";

function Rivets() {
  return (
    <>
      <span className="rivet tl" aria-hidden="true" />
      <span className="rivet tr" aria-hidden="true" />
      <span className="rivet bl" aria-hidden="true" />
      <span className="rivet br" aria-hidden="true" />
    </>
  );
}

export default function Page() {
  return (
    <main>
      {/* ——— HERO ——— */}
      <section className="band band--dark hero">
        <div className="wrap">
          <header className="topbar">
            <div className="wordmark">
              <span className="wm-badge" aria-hidden="true">AP</span>
              <span className="wm-text">
                SERVIS
                <em>Praha · servis spotřebičů</em>
              </span>
            </div>
            <a className="topbar-phone" href="tel:+420777111222">
              <span>Objednávky oprav</span>
              777&nbsp;111&nbsp;222
            </a>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Praha · Autorizovaný servis · Od roku 1991</p>
              <h1>
                Každou opravu
                <br />
                začínáme u{" "}
                <span className="hl">štítku.</span>
              </h1>
              <p className="lede">
                Opravy a originální náhradní díly pro Whirlpool, Bauknecht,
                Hotpoint, Indesit, KitchenAid a Ignis. Opište{" "}
                <strong>12NC kód</strong> ze štítku na zádech spotřebiče a my
                dohledáme přesný díl i postup opravy. Vlastní sklad i servisní
                tým v Praze.
              </p>
              <div className="hero-actions">
                <a className="btn btn--primary" href="tel:+420777111222">
                  Objednat opravu
                </a>
                <span className="hero-note">
                  nebo volejte 777&nbsp;111&nbsp;222 — Po–Čt 8–17, Pá 8–15
                </span>
              </div>
            </div>

            {/* Signature: hero rating plate + 12NC lookup */}
            <div className="plate-shell">
              <div className="plate plate--hero">
                <Rivets />
                <div className="plate-head">
                  <span className="plate-kicker">Typový štítek · Rating plate</span>
                  <span className="plate-ref">MADE FOR AP SERVIS</span>
                </div>
                <dl className="plate-rows">
                  <div>
                    <dt>Model</dt>
                    <dd>AWZ / FSCR / AKZ …</dd>
                  </div>
                  <div>
                    <dt>12NC</dt>
                    <dd className="code">
                      {sampleCode.split("").map((d, i) => (
                        <span
                          key={i}
                          style={{ animationDelay: `${0.85 + i * 0.05}s` }}
                        >
                          {d}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <form className="lookup" action="#">
                  <label htmlFor="nc">12NC kód (najdete jej na štítku spotřebiče)</label>
                  <div className="lookup-row">
                    <input
                      id="nc"
                      name="nc"
                      type="text"
                      inputMode="numeric"
                      placeholder="např. 859991565430"
                      autoComplete="off"
                    />
                    <button type="button">Najít díl</button>
                  </div>
                </form>
                <div className="coil" aria-hidden="true" />
              </div>
              <p className="plate-caption">
                Nevíte, kde štítek hledat? Poradíme po telefonu — stačí model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— SLUŽBY ——— */}
      <section className="band band--light services" aria-labelledby="svc-h">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow eyebrow--dark">Rack služeb · 4 štítky</p>
            <h2 id="svc-h">S čím vám pomůžeme</h2>
            <p className="section-sub">
              Každá služba je jako díl v našem katalogu — má svůj štítek,
              referenci a jasné zadání. Vyberte, co potřebujete.
            </p>
          </div>

          <div className="svc-grid">
            {services.map((s) => (
              <article key={s.no} className="plate plate--svc">
                <Rivets />
                <div className="plate-head">
                  <span className="plate-kicker">Sekce {s.no} / 04</span>
                  <span className="plate-ref code">{s.code}</span>
                </div>
                <h3 className="svc-label">{s.label}</h3>
                <p className="svc-text">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— O NÁS / DŮVĚRA ——— */}
      <section className="band band--dark about" aria-labelledby="about-h">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-copy">
              <p className="eyebrow">Data-plate firmy · Od roku 1991</p>
              <h2 id="about-h">
                Značky rodiny Whirlpool opravujeme už od roku 1991.
              </h2>
              <p className="lede">
                O spotřebičích rodiny Whirlpool toho víme opravdu hodně — dalo by
                se říct, že skoro vše. Protože máme vlastní sklad i servisní tým,
                pomůžeme nejen odborně, ale hlavně rychle. Poradíme lajkům i
                zkušeným kutilům.
              </p>

              <p className="brands-label">Do rodiny patří:</p>
              <ul className="brands">
                {brands.map((b) => (
                  <li key={b} className="brand-chip">
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company as its own rating plate */}
            <div className="plate plate--spec">
              <Rivets />
              <div className="plate-head">
                <span className="plate-kicker">Typový štítek · Provozovatel</span>
                <span className="plate-ref code">EST·1991</span>
              </div>
              <dl className="spec-rows">
                {spec.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="coil" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
