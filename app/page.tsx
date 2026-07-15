import { AiImage } from "./_ui";
import { BayFrame, DateStamp } from "./motion";

const services = [
  {
    tag: "SL 70",
    title: "Pronájem lešení Plettac SL 70",
    body: "Zapůjčíme rámové díly, podlážky, zábradlí i patky systému Plettac SL 70. Na pár dní, na týdny nebo na celou stavbu.",
    accent: false,
  },
  {
    tag: "MONTÁŽ",
    title: "Montáž a demontáž lešení",
    body: "Postavíme lešení na fasádu podle norem a po dokončení prací ho zase bezpečně a rychle složíme.",
    accent: false,
  },
  {
    tag: "SÍTĚ",
    title: "Montáž a demontáž ochranných sítí",
    body: "Natáhneme ochranné sítě proti pádu materiálu i osob. Přidáme je k lešení nebo namontujeme samostatně.",
    accent: true,
  },
  {
    tag: "DOPRAVA",
    title: "Vlastní přeprava",
    body: "Lešení k vám přivezeme a zase odvezeme vlastními vozy. Dopravu ani nakládku nemusíte nijak řešit.",
    accent: false,
  },
];

const specs = [
  ["Systém", "Plettac SL 70/100"],
  ["Výrobce", "Altrad — Francie"],
  ["Normy", "EN 12810 · EN 12811"],
  ["Kontakt", "Radek Bagač"],
  ["Sídlo", "5. května 159/15, 460 01 Liberec"],
];

export default function Page() {
  return (
    <main className="bks">
      {/* ——— HERO ——— */}
      <header className="bks-hero">
        <div className="bks-topbar">
          <a className="bks-wordmark" href="#poptavka" aria-label="B.K.S. lešení, Liberec">
            <svg className="bks-wm-mark" viewBox="0 0 32 40" aria-hidden="true">
              <rect x="2" y="2" width="28" height="36" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="2" y1="38" x2="30" y2="2" stroke="#e35722" strokeWidth="3" />
            </svg>
            <span className="bks-wm-name">
              B.K.S.
              <span className="bks-wm-sub">lešení · Liberec</span>
            </span>
          </a>
          <a className="bks-phone" href="tel:+420704702221">
            Volejte 704&nbsp;702&nbsp;221
          </a>
        </div>

        <div className="bks-hero-grid">
          <div className="bks-hero-text">
            <p className="bks-eyebrow">Lešenářství — 460 01 Liberec</p>
            <h1 className="bks-h1">
              Postavíme vám lešení
              <span className="bks-h1-accent">Plettac SL 70/100</span>
            </h1>
            <p className="bks-lede">
              Rámové fasádní lešení systému Altrad Plettac. Snadno se staví, drží
              pevně a splňuje evropské normy. Půjčíme, postavíme, natáhneme sítě
              i přivezeme — po Liberci a okolí.
            </p>
            <div className="bks-cta-row">
              <a className="bks-btn" href="tel:+420704702221">
                Volejte 704 702 221
              </a>
              <a className="bks-btn-ghost" href="#poptavka">
                Nezávazná poptávka
              </a>
            </div>
          </div>

          <div className="bks-bay bks-hero-bay">
            <span className="bks-tag bks-tag-tl">SL 70/100</span>
            <span className="bks-tag bks-tag-br">EN 12810</span>
            <AiImage
              src="/hero.webp"
              alt="Rámové fasádní lešení Plettac postavené na fasádě domu v Liberci"
              className="bks-hero-img"
            />
            <BayFrame className="bks-frame" />
          </div>
        </div>
      </header>

      {/* ——— SLUŽBY ——— */}
      <section className="bks-section bks-services" aria-labelledby="sluzby-nadpis">
        <div className="bks-section-head">
          <p className="bks-eyebrow bks-eyebrow-orange">Naše služby</p>
          <h2 id="sluzby-nadpis" className="bks-h2">Co pro vás uděláme</h2>
          <p className="bks-section-lede">
            Od zapůjčení jednotlivých dílů až po montáž ochranných sítí. Vždy
            s vlastní dopravou a podle platných norem.
          </p>
        </div>

        <div className="bks-bay bks-services-bay">
          <span className="bks-tag bks-tag-tl">SL 70 / SL 100</span>
          <div className="bks-service-grid">
            {services.map((s) => (
              <article
                key={s.title}
                className={`bks-service${s.accent ? " bks-service-net" : ""}`}
              >
                <span className="bks-service-tag">{s.tag}</span>
                <h3 className="bks-service-title">{s.title}</h3>
                <p className="bks-service-body">{s.body}</p>
              </article>
            ))}
          </div>
          <BayFrame className="bks-frame" />
        </div>
      </section>

      {/* ——— DŮVĚRA / SYSTÉM ——— */}
      <section className="bks-section bks-trust bks-dark" aria-labelledby="system-nadpis">
        <div className="bks-trust-grid">
          <div className="bks-bay bks-trust-bay">
            <span className="bks-tag bks-tag-tl">Altrad</span>
            <span className="bks-tag bks-tag-br">460 01 Liberec</span>
            <AiImage
              src="/section-2.webp"
              alt="Detail rámového dílu a diagonální výztuhy lešení Plettac SL 70"
              className="bks-trust-img"
            />
            <BayFrame className="bks-frame" />
          </div>

          <div className="bks-trust-text">
            <p className="bks-eyebrow bks-eyebrow-orange">EN 12810 / EN 12811</p>
            <h2 id="system-nadpis" className="bks-h2">Systém Plettac SL 70/100</h2>
            <p className="bks-trust-body">
              Výrobcem systému Plettac je francouzská společnost Altrad, jeden
              z největších výrobců lešení v Evropě. Tento typ lešení se snadno
              staví, je velmi robustní a bezpečný.
            </p>
            <p className="bks-trust-body">
              Lešení splňuje normu EN 12810 pro bezpečnost výrobku a EN 12811
              pro dočasné stavební konstrukce. O montáž se stará zkušená parta,
              která ví, jak má správně postavené lešení vypadat.
            </p>

            <dl className="bks-spec">
              {specs.map(([k, v]) => (
                <div className="bks-spec-row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <DateStamp />
          </div>
        </div>
      </section>
    </main>
  );
}
