import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      grain: "Masiv",
      title: "Masivní parkety",
      body: "Dubové, jasanové i exotické dřevo klademe do lepidla i na klasický rošt. Vybíráme vlys po vlysu tak, aby kresba pokračovala přes celou místnost.",
    },
    {
      grain: "Renovace",
      title: "Broušení a lakování",
      body: "Staré parkety obrousíme bezprašnou technikou, vyspravíme spáry a znovu je oživíme lakem nebo přírodním olejem. Původní podlaha vydrží další desítky let.",
    },
    {
      grain: "Vzory",
      title: "Rybina a intarzie",
      body: "Francouzská rybina, anglický vzor i vsazované bordury. Kladení do vzoru je řemeslo na milimetry — a přesně to nás na parketách baví nejvíc.",
    },
    {
      grain: "Olej",
      title: "Olejování a péče",
      body: "Naolejovaná podlaha se dá lokálně opravit bez broušení celé plochy. Poradíme, čím ji ošetřovat, a přijedeme obnovit olej i po letech.",
    },
  ];

  const refs = [
    { place: "Grand Hotel Brno", detail: "výměna podlah v reprezentačních prostorách" },
    { place: "Poliklinika Lesná", detail: "nové podlahy do ordinací" },
    { place: "OD Vichr", detail: "kancelářské plochy" },
    { place: "Grand Hotel Bohemia, Praha", detail: "pokládka v pokojích i chodbách" },
  ];

  return (
    <main className="zp">
      <header className="zp-nav" aria-label="Hlavní navigace">
        <a className="zp-logo" href="#uvod" aria-label="ZP Podlahy, domů">
          <span className="zp-logo-mark" aria-hidden="true">ZP</span>
          <span className="zp-logo-word">
            Podlahy
            <em>parkety · Brno · od 1995</em>
          </span>
        </a>
        <nav className="zp-nav-links">
          <a href="#provadime">Co děláme</a>
          <a href="#reference">Reference</a>
          <a href="#kontakt-cta" className="zp-nav-cta">Nezávazná poptávka</a>
        </nav>
      </header>

      <section className="zp-hero" id="uvod">
        <div className="zp-hero-text">
          <p className="zp-eyebrow">Podlahářství v Brně · vlys po vlysu od roku 1995</p>
          <h1>
            Klademe parkety,
            <span className="zp-hero-accent">které jdou po směru dřeva.</span>
          </h1>
          <p className="zp-hero-lead">
            Masivní dub, renovace starých parket i francouzská rybina.
            Přijedeme, změříme podklad a řekneme rovnou, co má smysl —
            po Brně i po celém Jihomoravském kraji.
          </p>
          <div className="zp-hero-actions">
            <a href="#kontakt-cta" className="zp-btn">Domluvit prohlídku podlahy</a>
            <a href="#provadime" className="zp-btn zp-btn-ghost">Co pokládáme</a>
          </div>
          <dl className="zp-hero-facts">
            <div><dt>Řemeslo od</dt><dd>1995</dd></div>
            <div><dt>Materiál</dt><dd>masiv i olej</dd></div>
            <div><dt>Kde</dt><dd>Brno + JMK</dd></div>
          </dl>
        </div>
        <figure className="zp-hero-figure">
          <img src="/hero.webp" alt="Detail položené dřevěné parketové podlahy s výraznou kresbou letokruhů" loading="eager" width={900} height={1100} />
          <figcaption>Dubová podlaha kladená do rybiny</figcaption>
        </figure>
      </section>

      <section className="zp-services" id="provadime">
        <div className="zp-section-head">
          <p className="zp-eyebrow">Co u nás doma nebo ve firmě položíme</p>
          <h2>Od masivu po olej — celá dráha jednoho vlysu</h2>
          <p className="zp-section-note">
            Neděláme jen jednu věc. Vybereme dřevo, připravíme podklad,
            položíme a nakonec ošetříme povrch. Tady jsou hlavní části té práce.
          </p>
        </div>
        <div className="zp-service-grid">
          {services.map((s, i) => (
            <article key={s.title} className="zp-card" style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}>
              <span className="zp-card-grain">{s.grain}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="zp-trust" id="reference">
        <figure className="zp-trust-figure">
          <img src="/section-1.webp" alt="Broušení a renovace dřevěné podlahy v interiéru" loading="lazy" width={800} height={640} />
        </figure>
        <div className="zp-trust-text">
          <p className="zp-eyebrow">O nás &amp; kde nás najdete pod nohama</p>
          <h2>Podlahy, po kterých se chodí v hotelech i ordinacích</h2>
          <p>
            Naši parketáři sbírají zkušenosti v oboru od roku 1995. Většinu
            zakázek děláme v Brně a okolí — od bytů a rodinných domů po hotely,
            školy a zdravotnická zařízení, kde musí podlaha vydržet skutečný provoz.
          </p>
          <ul className="zp-ref-list">
            {refs.map((r) => (
              <li key={r.place}>
                <span className="zp-ref-place">{r.place}</span>
                <span className="zp-ref-detail">{r.detail}</span>
              </li>
            ))}
          </ul>
          <div className="zp-trust-media">
            <img src="/section-2.webp" alt="Hotová parketová podlaha v obytném interiéru" loading="lazy" width={720} height={480} />
            <p className="zp-trust-quote">
              „Než začneme, řekneme vám na rovinu, jestli se stará podlaha dá
              zachránit, nebo se vyplatí položit novou.“
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
