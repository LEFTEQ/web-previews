import { CountUp } from "./motion";

function Flow({ className, lines = 12 }: { className?: string; lines?: number }) {
  const bend = 34;
  const paths: string[] = [];
  for (let i = 0; i < lines; i++) {
    const y = 12 + i * 14;
    paths.push(
      `M0 ${y} C 380 ${y} 470 ${y + bend} 700 ${y + bend} S 1010 ${y} 1200 ${y}`
    );
  }
  const h = 12 + (lines - 1) * 14 + bend + 12;
  return (
    <svg
      className={`flow ${className ?? ""}`}
      viewBox={`0 0 1200 ${h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} pathLength={1} />
      ))}
    </svg>
  );
}

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <Flow className="flow-hero" lines={13} />
        <div className="wrap hero-inner">
          <header className="site-head">
            <div className="wordmark">
              <span className="wm-main">
                Pro<span className="wm-accent">DiS</span>
              </span>
              <span className="wm-sub">Vzduchotechnika · Brno</span>
            </div>
            <a className="btn btn-primary head-call" href="tel:+420545234309">
              Zavolat · 545 234 309
            </a>
          </header>

          <p className="eyebrow">Brno · Vzduchotechnika · Od roku 2000</p>

          <h1>
            Čistý vzduch
            <br />
            pod kontrolou.
          </h1>

          <p className="lead">
            Projektujeme, dodáváme a montujeme klimatizační a
            vzduchotechnická zařízení pro specializované provozy — od prvního
            návrhu přes všechny stupně projektové dokumentace až po závěrečnou
            validaci.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420545234309">
              Zavolat · +420 545 234 309
            </a>
            <a className="btn btn-ghost" href="mailto:regina.truncova@tiscali.cz">
              Napsat e-mail
            </a>
          </div>

          <div className="spec-row" aria-hidden="true">
            <span className="spec">
              <b>Ø</b> 400 mm
            </span>
            <span className="spec">
              3 200 <b>m³/h</b>
            </span>
            <span className="spec">
              250 <b>Pa</b>
            </span>
            <span className="spec">
              <b>ISO</b> 9001
            </span>
          </div>
        </div>
      </section>

      {/* Streamline divider */}
      <div className="divider" aria-hidden="true">
        <Flow lines={10} />
      </div>

      {/* SLUŽBY — the real project lifecycle, so numbering is earned */}
      <section className="section services">
        <div className="wrap">
          <div className="svc-head">
            <div>
              <p className="eyebrow">Cesta zakázky</p>
              <h2 className="svc-title">Tři fáze, jeden dodavatel</h2>
            </div>
            <p className="svc-note">
              Návrh, montáž i servis vedeme pod jednou střechou — bez
              předávání odpovědnosti mezi firmami.
            </p>
          </div>

          <div className="svc-grid">
            <article className="svc">
              <span className="svc-num">01 / Projekce</span>
              <h3>Návrh a dokumentace</h3>
              <p>
                Komplexní řešení od prvního konceptu po všechny stupně
                projektové dokumentace — s výpočtem průtoků, tlakových ztrát a
                akustiky.
              </p>
            </article>
            <article className="svc">
              <span className="svc-num">02 / Realizace</span>
              <h3>Dodávka a montáž</h3>
              <p>
                Podle schválené dokumentace zajistíme dodávku VZT jednotek,
                rozvodů a koncových prvků včetně odborné montáže na místě.
              </p>
            </article>
            <article className="svc">
              <span className="svc-num">03 / Servis</span>
              <h3>Servis a validace</h3>
              <p>
                Pravidelný servis klimatizace a vzduchotechniky je základem
                jejich spolehlivého chodu — včetně měření a závěrečné validace
                provozu.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DŮVĚRA / O NÁS */}
      <section className="section trust">
        <Flow className="flow-trust" lines={14} />
        <div className="wrap trust-inner">
          <p className="eyebrow eyebrow-light">O společnosti</p>
          <h2>Zákazníci, kteří patří ke špičce ve svém oboru.</h2>
          <p>
            Téměř čtvrt století dodáváme vzduchotechniku do provozů, kde na
            čistotě a stabilitě vzduchu skutečně záleží — laboratoře, výroba i
            zdravotnictví. Každou zakázku uzavíráme měřením a závěrečnou
            validací, aby výsledek odpovídal projektu i normě.
          </p>

          <div className="stats">
            <div className="stat">
              <div className="stat-num">
                <CountUp to={25} />
              </div>
              <div className="stat-label">let zkušeností — od roku 2000</div>
            </div>
            <div className="stat">
              <div className="stat-num code">ISO 9001</div>
              <div className="stat-label">certifikovaný systém řízení kvality</div>
            </div>
            <div className="stat">
              <div className="stat-num">
                <CountUp to={100} suffix=" %" />
              </div>
              <div className="stat-label">zakázek se závěrečnou validací</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
