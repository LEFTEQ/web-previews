import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main>
      <header className="mp-top">
        <a className="mp-mark" href="#uvod" aria-label="Michal Pozděna – plynařství">
          <span className="mp-flame" aria-hidden="true" />
          <b>Pozděna</b>
          <span>plyn · topení · voda</span>
        </a>
        <a className="mp-callbtn" href="tel:+420602000000">Zavolat technikovi</a>
      </header>

      <section className="mp-hero" id="uvod">
        <img
          className="mp-hero-img"
          src="/hero.webp"
          alt="Plynař Michal Pozděna při servisu plynového kotle v Ústí nad Labem"
        />
        <div className="mp-hero-veil" aria-hidden="true" />
        <div className="mp-wrap mp-hero-inner">
          <span className="mp-eyebrow reveal d1">Plynařství · Ústí nad Labem a okolí</span>
          <h1 className="mp-h1 reveal d2">
            Než přijde <em>topná sezóna</em>, ať kotel drží tlak.
          </h1>
          <p className="mp-lede reveal d3">
            Michal Pozděna dělá plyn, topení a vodu na Ústecku už přes dvacet let.
            Servis kotlů, revize podle normy TPG a připojení spotřebičů s papírem,
            který platí u pojišťovny i u komína.
          </p>
          <div className="mp-hero-cta reveal d4">
            <a className="mp-btn-primary" href="tel:+420602000000">
              <span className="mp-flame" aria-hidden="true" /> Objednat servis kotle
            </a>
            <a className="mp-btn-ghost" href="#sluzby">Co všechno udělám</a>
          </div>

          <dl className="mp-strip reveal d4">
            <div>
              <dt>20+ let</dt>
              <dd>u plynu, topení a vody</dd>
            </div>
            <div>
              <dt>Baxi</dt>
              <dd>autorizovaný servis kotlů</dd>
            </div>
            <div>
              <dt>TPG 704 01</dt>
              <dd>montáž dle platné normy</dd>
            </div>
            <div>
              <dt>Do 24 h</dt>
              <dd>reakce na výpadek topení</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mp-sec" id="sluzby">
        <div className="mp-wrap">
          <div className="mp-sec-head">
            <div>
              <div className="mp-kicker">Co pro vás udělám</div>
              <h2 className="mp-h2">Od revize kotle po připojení nového sporáku.</h2>
            </div>
            <p className="mp-sec-note">
              Jeden člověk, který zná váš rozvod. Žádné předávání mezi firmami,
              žádné „to není naše práce“.
            </p>
          </div>

          <div className="mp-grid">
            <article className="mp-card">
              <div className="num">01 — PLYN</div>
              <h3>Servis a revize kotlů</h3>
              <p>Roční servis, čištění a revize před zimou, ať kotel topí levně a bezpečně.</p>
              <ul>
                <li>Autorizovaný servis kotlů Baxi</li>
                <li>Revize a tlakové zkoušky plynu</li>
                <li>Výměna starého kotle za kondenzační</li>
              </ul>
            </article>
            <article className="mp-card">
              <div className="num">02 — SPOTŘEBIČE</div>
              <h3>Zapojení sporáků a spotřebičů</h3>
              <p>Nový sporák připojím tak, abyste na něm vařili ještě týž den.</p>
              <ul>
                <li>Plynová hadice dle normy TPG 704 01</li>
                <li>Demontáž starého, montáž nového spotřebiče</li>
                <li>Zkouška těsnosti a potvrzení záruky</li>
              </ul>
            </article>
            <article className="mp-card">
              <div className="num">03 — TOPENÍ &amp; VODA</div>
              <h3>Rozvody topení a vody</h3>
              <p>Od nového radiátoru po rekonstrukci koupelny včetně odpadů.</p>
              <ul>
                <li>Rozvody ústředního topení</li>
                <li>Vodoinstalace a výměna baterií</li>
                <li>Dotace Zelená úsporám – poradím s papíry</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mp-sec mp-trust" id="o-mne">
        <div className="mp-wrap">
          <div className="mp-split">
            <div>
              <div className="mp-kicker">Kdo k vám přijede</div>
              <h2 className="mp-h2">Přijedu já — ne parta, co jste nikdy neviděli.</h2>
              <p className="body">
                Jsem Michal Pozděna a na plyn a topení jezdím po Ústí nad Labem,
                Trmicích, Chabařovicích i okolních obcích. Práci předám čistou,
                s dokladem o revizi a potvrzeným záručním listem — přesně to,
                co po vás chce pojišťovna i kominík.
              </p>

              <div className="mp-price">
                <div className="row"><span>Připojení plynového sporáku</span><span>od 1 499 Kč</span></div>
                <div className="row"><span>Připojení elektrického sporáku</span><span>od 1 199 Kč</span></div>
                <div className="row"><span>Roční servis kotle Baxi</span><span>dle typu</span></div>
              </div>
              <p className="body" style={{ fontSize: "0.9rem", color: "var(--pipe)" } as CSSProperties}>
                V ceně je doprava technika po Ústecku i ekologická likvidace
                starého spotřebiče. Přesnou cenu řeknu po telefonu předem.
              </p>

              <div className="mp-badges">
                <span className="mp-badge"><b>Baxi</b> autorizovaný servis</span>
                <span className="mp-badge">Zelená úsporám</span>
                <span className="mp-badge">Norma <b>TPG 704 01</b></span>
              </div>
            </div>
            <img
              src="/section-1.webp"
              alt="Detail montáže plynového rozvodu a připojení kotle"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
