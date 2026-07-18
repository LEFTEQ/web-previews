const brands = [
  { name: "Tonin Casa", note: "Skleněné jídelní stoly a konzole" },
  { name: "Sovet", note: "Nábytek ze zušlechtěného benátského skla" },
  { name: "Marinelli Home", note: "Čalouněné postele a sedací soupravy" },
  { name: "Akante", note: "Rozkládací jídelní sety" },
  { name: "Incanto", note: "Obývací stěny na míru" },
  { name: "Kopar", note: "Kožené sedačky a relaxační křesla" },
  { name: "LoiudiceD", note: "Ručně šité čalounění" },
  { name: "Munari", note: "Jídelní a konferenční stoly" },
  { name: "Scab Design", note: "Designové židle a barové stoličky" },
  { name: "Vondom", note: "Nábytek na terasu a do zahrady" },
];

export default function Page() {
  return (
    <>
      <a className="skip" href="#znacky">Přeskočit na obsah</a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="wordmark" href="#top" aria-label="JV Design, designový nábytek Plzeň">
            <span className="wordmark-mark">JV</span>
            <span className="wordmark-name">Design</span>
            <span className="wordmark-tag">designový nábytek · Plzeň</span>
          </a>
          <nav className="topnav" aria-label="Hlavní">
            <a href="#znacky">Značky</a>
            <a href="#showroom">Showroom</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-inner">
            <p className="eyebrow">Showroom · Plzeň · Ukázková 123</p>

            <div className="vitrine hero-vitrine">
              <h1 className="hero-title">
                Italský<br />
                designový nábytek<br />
                <span className="brass">ve světle Plzně</span>
              </h1>
            </div>

            <p className="lede">
              Deset italských značek — od skleněných stolů Tonin Casa po čalounění
              Marinelli Home — vystavených jako v galerii. U nás se na nábytek
              nedíváte přes fotku: sednete si do něj a uvidíte, jak materiál žije
              ve světle.
            </p>

            <div className="hero-actions">
              <a className="btn" href="#showroom">Naplánovat návštěvu</a>
              <a className="btn btn-ghost" href="#znacky">Projít značky</a>
            </div>

            <div className="floor" aria-hidden="true" />
          </div>
        </section>

        <section id="znacky" className="section brands">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">10 značek pod jednou střechou</p>
              <h2 className="section-title">Stěna značek</h2>
              <p className="section-sub">
                Jak procházíte showroom, rozsvěcují se jednotlivé vitríny —
                každá kolekce chytá své světlo, přesně jako u nás na place.
              </p>
            </div>

            <ul className="brand-grid">
              {brands.map((b) => (
                <li key={b.name} className="vitrine brand">
                  <span className="brand-name">{b.name}</span>
                  <span className="brand-note">{b.note}</span>
                  <span className="brand-cta">Více o značce</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="showroom" className="section showroom">
          <div className="wrap showroom-grid">
            <div className="showroom-copy">
              <p className="eyebrow">Návštěva</p>
              <h2 className="section-title">Showroom, ne katalog</h2>
              <p className="section-sub">
                Přes deset let vozíme do Plzně italský design a stavíme ho tak,
                jak má stát — nasvícený a na dosah ruky. Přijďte si projet dlaní
                po skle Sovet, vyzkoušet, jak drží sedačka Kopar, a podívat se,
                co dělá travertin, když na něj dopadne teplé světlo.
              </p>

              <ul className="chips">
                <li>Autorizovaný prodejce italských značek</li>
                <li>Doprava a montáž po Plzeňském kraji</li>
                <li>Návrh sestavy na míru vašemu bytu</li>
              </ul>
            </div>

            <div className="vitrine info-card">
              <p className="info-label">Kde nás najdete</p>
              <p className="info-address">
                Ukázková 123<br />
                301 00 Plzeň
              </p>

              <dl className="hours">
                <div><dt>Po–Pá</dt><dd>10:00–18:00</dd></div>
                <div><dt>So</dt><dd>09:00–13:00</dd></div>
                <div><dt>Ne</dt><dd>zavřeno</dd></div>
              </dl>

              <div className="info-contact">
                <a className="btn" href="tel:+420777111222">Zavolat</a>
                <a className="info-mail" href="mailto:info@example.cz">info@example.cz</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
