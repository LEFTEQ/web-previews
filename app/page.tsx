export default function Page() {
  return (
    <main className="str-page">
      {/* ===== HERO ===== */}
      <header className="str-hero">
        <div className="str-hero-top">
          <div className="str-wordmark" aria-label="Stepok, pokrývačství, České Budějovice">
            <span className="str-wordmark-name">STEPOK</span>
            <span className="str-wordmark-sub">pokrývačství · České Budějovice</span>
          </div>
          <a className="str-hero-tel" href="tel:+420387000000">
            <span className="str-hero-tel-label">Zavolejte nám</span>
            <span className="str-hero-tel-num">387 000 000</span>
          </a>
        </div>

        <div className="str-hero-main">
          <p className="str-eyebrow">
            <span className="str-eyebrow-tick" aria-hidden="true" />
            Pokrývači z Českých Budějovic
          </p>
          <h1 className="str-h1">
            <span className="str-h1-line str-h1-line-1">Střecha,</span>
            <span className="str-h1-line str-h1-line-2">která drží</span>
            <span className="str-h1-line str-h1-line-3">desítky let.</span>
          </h1>
          <p className="str-hero-lead">
            Pokládáme tašky, plech i šindel. Opravujeme krovy, klempířinu a hromosvody.
            Na jihu Čech, kde ročně naprší přes 600 mm — a v zimě leží sníh.
          </p>
          <div className="str-hero-cta">
            <a className="str-btn str-btn-solid" href="tel:+420387000000">Zavolat pokrývači</a>
            <a className="str-btn str-btn-ghost" href="#sluzby">Co všechno děláme</a>
          </div>
        </div>

        {/* Signature: velkoformátový vzor bobrovek — šupinová řada tvořící „hřeben" hero sekce */}
        <div className="str-shingles" aria-hidden="true">
          <div className="str-shingle-row str-shingle-row-back">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={`b${i}`} className="str-shingle" />
            ))}
          </div>
          <div className="str-shingle-row str-shingle-row-front">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={`f${i}`} className="str-shingle" />
            ))}
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="str-section str-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="str-section-head">
          <p className="str-eyebrow">
            <span className="str-eyebrow-tick" aria-hidden="true" />
            Od krovu po hřebenáč
          </p>
          <h2 className="str-h2" id="sluzby-h">Střechu řešíme celou — ne po kouskách</h2>
          <p className="str-section-lead">
            Nemusíte shánět tři party. Krov, krytinu, klempířinu i okapy uděláme my,
            jedním rozpočtem a jedním termínem.
          </p>
        </div>

        <div className="str-services-grid">
          <article className="str-card">
            <div className="str-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                <path d="M4 26 L24 8 L44 26" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                <path d="M10 24 V40 H38 V24" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="str-card-title">Nové střechy a rekonstrukce</h3>
            <p className="str-card-text">
              Pálená a betonová taška, falcovaný plech, asfaltový šindel. Skladbu
              navrhneme podle sklonu a stavu krovu — a rovnou spočítáme laťování i fólie.
            </p>
            <p className="str-card-note">Bramac · Tondach · Lindab</p>
          </article>

          <article className="str-card">
            <div className="str-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                <path d="M6 14 H42 V22 H14 V30 H36" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                <circle cx="36" cy="36" r="5" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="str-card-title">Klempířské práce</h3>
            <p className="str-card-text">
              Okapy, svody, oplechování komínů a úžlabí. Ohýbáme na vlastní ohýbačce
              z titanzinku, mědi i lakovaného pozinku — na míru vaší střeše.
            </p>
            <p className="str-card-note">titanzinek · měď · pozink</p>
          </article>

          <article className="str-card">
            <div className="str-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                <path d="M24 6 L18 22 H26 L20 42 L38 18 H28 L34 6 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="str-card-title">Opravy a havárie</h3>
            <p className="str-card-text">
              Zatéká vám? Po vichřici chybí tašky? V Budějovicích a okolí do 30 km
              přijedeme obvykle do 48 hodin a střechu provizorně zajistíme hned.
            </p>
            <p className="str-card-note">výjezd do 48 h v okolí ČB</p>
          </article>

          <article className="str-card">
            <div className="str-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                <path d="M8 40 L8 20 L24 8 L40 20 L40 40" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <path d="M18 40 V28 H30 V40" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="str-card-title">Zateplení a střešní okna</h3>
            <p className="str-card-text">
              Nadkrokevní i mezikrokevní izolace, montáž oken Velux a Roto.
              Podkroví, ve kterém se dá bydlet v létě i v lednu.
            </p>
            <p className="str-card-note">Velux · Roto · Isover</p>
          </article>
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="str-section str-trust" aria-labelledby="duvera-h">
        <div className="str-trust-inner">
          <div className="str-trust-copy">
            <p className="str-eyebrow str-eyebrow-light">
              <span className="str-eyebrow-tick" aria-hidden="true" />
              Proč Stepok
            </p>
            <h2 className="str-h2 str-h2-light" id="duvera-h">
              Řemeslo se pozná na hřebeni, ne v katalogu
            </h2>
            <p className="str-trust-text">
              Jsme parta pokrývačů z Českých Budějovic. Většinu zakázek máme
              z doporučení — od sousedů, stavebníků a správců domů, kterým jsme
              už střechu dělali. Přijedeme, vylezeme nahoru, řekneme na rovinu,
              co střecha potřebuje a co ještě počká.
            </p>
            <ul className="str-trust-list">
              <li>Rozpočet položkově — víte, za co platíte, žádné „komplet cena dohodou“</li>
              <li>Záruka 5 let na práci, na krytinu záruka výrobce až 30 let</li>
              <li>Staveniště uklizené každý den, suť odvezeme my</li>
              <li>Pojištění odpovědnosti do 10 mil. Kč</li>
            </ul>
          </div>

          <div className="str-trust-refs">
            <figure className="str-ref">
              <blockquote>
                „Stará bobrovka dole, nová nahoře za dvanáct dní. A když přišla
                v červnu bouřka, nespadla ani kapka.“
              </blockquote>
              <figcaption>rodinný dům, Rudolfov — kompletní rekonstrukce střechy</figcaption>
            </figure>
            <figure className="str-ref">
              <blockquote>
                „Oplechování komína měli hotové za dopoledne. Konečně firma,
                která zvedne telefon i po předání.“
              </blockquote>
              <figcaption>bytový dům, České Budějovice — Pražské předměstí</figcaption>
            </figure>
            <div className="str-trust-stats">
              <div className="str-stat">
                <span className="str-stat-num">220+</span>
                <span className="str-stat-label">střech na jihu Čech</span>
              </div>
              <div className="str-stat">
                <span className="str-stat-num">48 h</span>
                <span className="str-stat-label">výjezd k havárii</span>
              </div>
              <div className="str-stat">
                <span className="str-stat-num">5 let</span>
                <span className="str-stat-label">záruka na práci</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
