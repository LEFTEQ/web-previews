// Sendi Design s.r.o. — galanterie, Brno (Veveří 131)
// Náhledový web: hero + sortiment + důvěra/značky. Bez patičky (doplní studio).

const kolekceZeny = [
  { nazev: "Kabelky", pozn: "kožené i městské, Enrico Benetti a Mustang" },
  { nazev: "Batohy", pozn: "do města i na cesty" },
  { nazev: "Psaníčka", pozn: "na večer, s řetízkem i bez" },
  { nazev: "Peněženky", pozn: "kožené, s RFID ochranou" },
  { nazev: "Cestovní zavazadla", pozn: "kufry a tašky na víkend" },
];

const kolekceMuzi = [
  { nazev: "Tašky přes rameno", pozn: "Hexagona Streight, tři barvy skladem" },
  { nazev: "Aktovky a business tašky", pozn: "na notebook do 15,6″" },
  { nazev: "Batohy", pozn: "New Rebels, unisex střihy" },
  { nazev: "Etue a ledvinky", pozn: "na doklady a drobnosti" },
  { nazev: "Peněženky", pozn: "klasické i slim formáty" },
];

const znacky = [
  { jmeno: "Enrico Benetti", role: "výhradní dovozce pro ČR" },
  { jmeno: "Hexagona", role: "výhradní dovozce pro ČR" },
  { jmeno: "Mustang", role: "kožené kabelky a doplňky" },
  { jmeno: "New Rebels", role: "městské batohy" },
  { jmeno: "Justified", role: "kožená galanterie" },
  { jmeno: "SendiDesign", role: "vlastní značka" },
];

export default function Page() {
  return (
    <main className="sd">
      {/* ===== HLAVIČKA ===== */}
      <header className="sd-top">
        <a className="sd-wordmark" href="#" aria-label="Sendi Design, úvod">
          <span className="sd-wordmark-sendi">SENDI</span>
          <span className="sd-wordmark-stitch" aria-hidden="true"></span>
          <span className="sd-wordmark-design">design</span>
        </a>
        <nav className="sd-nav" aria-label="Hlavní navigace">
          <a href="#sortiment">Sortiment</a>
          <a href="#znacky">Značky</a>
          <a className="sd-nav-tel" href="tel:+420604798514">+420 604 798 514</a>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section className="sd-hero" aria-label="Úvod">
        <p className="sd-hero-eyebrow">
          <span className="sd-stitchline" aria-hidden="true"></span>
          Kožená galanterie · Brno, Veveří 131 · 25 let na trhu
        </p>

        <h1 className="sd-hero-title">
          <span className="sd-hero-row sd-hero-row-1">Kabelka,</span>
          <span className="sd-hero-row sd-hero-row-2">
            která <em>vydrží</em>
          </span>
          <span className="sd-hero-row sd-hero-row-3">déle než móda.</span>
        </h1>

        <p className="sd-hero-lead">
          Jsme výhradní dovozci značek Enrico Benetti a Hexagona pro Českou
          republiku. Kabelky, batohy, tašky a peněženky vybíráme podle kůže,
          prošití a kování — a všechno, co nabízíme, máme fyzicky skladem v Brně.
        </p>

        <div className="sd-hero-cta">
          <a className="sd-btn sd-btn-full" href="#sortiment">Prohlédnout sortiment</a>
          <a className="sd-btn sd-btn-line" href="mailto:eshop@sendi.cz">Napsat na eshop@sendi.cz</a>
        </div>

        {/* Signature: přezka + prošívaný steh — grafika odvozená z řemesla */}
        <div className="sd-hero-buckle" aria-hidden="true">
          <div className="sd-buckle">
            <div className="sd-buckle-pin"></div>
          </div>
          <div className="sd-strap">
            <span className="sd-strap-stitch"></span>
            <span className="sd-strap-stitch"></span>
          </div>
        </div>

        <ul className="sd-hero-facts">
          <li>
            <strong>Skladem v Brně</strong>
            <span>zboží odesíláme z Veveří, ne z ciziny</span>
          </li>
          <li>
            <strong>6 značek</strong>
            <span>od kožené klasiky po městské batohy</span>
          </li>
          <li>
            <strong>Velkoobchod i e-shop</strong>
            <span>prodáváme koncovým zákazníkům i obchodům</span>
          </li>
        </ul>
      </section>

      {/* ===== SORTIMENT ===== */}
      <section className="sd-sortiment" id="sortiment" aria-label="Sortiment">
        <header className="sd-section-head">
          <h2>Co u nás najdete</h2>
          <p>
            Dvě kolekce, jeden metr kvality: poctivá kůže nebo pevný textil,
            dvojité prošití namáhaných švů a kování, které přežije každodenní nošení.
          </p>
        </header>

        <div className="sd-kolekce">
          <article className="sd-kolekce-card sd-kolekce-zeny">
            <h3>
              <span className="sd-kolekce-tag">Ženy</span>
              Kabelky a doplňky
            </h3>
            <ul className="sd-kolekce-list">
              {kolekceZeny.map((k) => (
                <li key={k.nazev}>
                  <strong>{k.nazev}</strong>
                  <span>{k.pozn}</span>
                </li>
              ))}
            </ul>
            <p className="sd-kolekce-note">
              Nejžádanější: kožená kabelka Mustang Roxxy — 2 390 Kč, skladem.
            </p>
          </article>

          <article className="sd-kolekce-card sd-kolekce-muzi">
            <h3>
              <span className="sd-kolekce-tag">Muži</span>
              Tašky a batohy
            </h3>
            <ul className="sd-kolekce-list">
              {kolekceMuzi.map((k) => (
                <li key={k.nazev}>
                  <strong>{k.nazev}</strong>
                  <span>{k.pozn}</span>
                </li>
              ))}
            </ul>
            <p className="sd-kolekce-note">
              Novinka: taška přes rameno Hexagona Streight — 1 799 Kč, černá, hnědá i navy.
            </p>
          </article>
        </div>
      </section>

      {/* ===== ZNAČKY / DŮVĚRA ===== */}
      <section className="sd-znacky" id="znacky" aria-label="Značky a o nás">
        <header className="sd-section-head sd-section-head-inverse">
          <h2>Značky, za které ručíme</h2>
          <p>
            Nejsme překupník s dropshippingem. Každou značku dovážíme napřímo,
            zboží kontrolujeme kus po kusu a reklamace řešíme tady v Brně —
            osobně, ne přes formulář do zahraničí.
          </p>
        </header>

        <ul className="sd-znacky-grid">
          {znacky.map((z) => (
            <li key={z.jmeno} className="sd-znacka">
              <span className="sd-znacka-jmeno">{z.jmeno}</span>
              <span className="sd-znacka-role">{z.role}</span>
            </li>
          ))}
        </ul>

        <div className="sd-provoz">
          <div className="sd-provoz-item">
            <span className="sd-provoz-label">Kde nás najdete</span>
            <span className="sd-provoz-value">Veveří 131, 616 00 Brno</span>
          </div>
          <div className="sd-provoz-item">
            <span className="sd-provoz-label">Otevírací doba</span>
            <span className="sd-provoz-value">po–pá 9:00–17:00</span>
          </div>
          <div className="sd-provoz-item">
            <span className="sd-provoz-label">Velkoobchod</span>
            <span className="sd-provoz-value">
              ceník pošleme na <a href="mailto:eshop@sendi.cz">eshop@sendi.cz</a>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
