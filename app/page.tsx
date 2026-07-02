// Fasády Šimek — revitalizace bytových domů, Olomouc
// Statický náhled: hero + služby + důvěra/reference. Bez patičky (doplní studio).

const sluzby = [
  {
    kod: "ETICS",
    nazev: "Zateplení bytového domu",
    popis:
      "Kompletní kontaktní zateplení fasády, střechy i stropu suterénu, včetně výměny oken a dveří. Pomůžeme s dotací Nová zelená úsporám — sníží investici až o polovinu.",
    detaily: ["Fasáda + střecha + suterén", "Výměna oken a dveří", "Vyřízení dotace NZÚ"],
  },
  {
    kod: "LODŽIE",
    nazev: "Balkony a lodžie na míru",
    popis:
      "Rekonstrukce, zvětšení i přístavba nových závěsných balkonů. Víc prostoru, vyšší komfort a hodnota bytu — statiku a kotvení řešíme vlastními silami.",
    detaily: ["Rekonstrukce a sanace", "Přístavba a zvětšení", "Závěsné balkony"],
  },
  {
    kod: "PŘÍPRAVA",
    nazev: "Příprava revitalizace",
    popis:
      "Než se cokoli postaví, projdeme s výborem SVJ celý záměr: stav domu, rozpočet, dotace, harmonogram. Na schůzi vlastníků přijedeme a vše vysvětlíme lidsky.",
    detaily: ["Posouzení stavu domu", "Rozpočet a financování", "Prezentace na schůzi SVJ"],
  },
];

const zaruky = [
  {
    titulek: "Jsme stavaři, ne obchodníci",
    text: "Nepošleme na vás armádu obchodních zástupců. Zakázku nerozprodáme subdodavatelům — o váš dům se postará náš vlastní tým od stavbyvedoucího po řemeslníky.",
  },
  {
    titulek: "14 let, jedno jméno",
    text: "Dobré jméno budujeme od roku 2011 a bereme ho jako závazek. Stabilní firma i finance — jistota, že váš projekt neskončí v půli cesty.",
  },
  {
    titulek: "Celá republika, dvě čísla",
    text: "Za prací přijedeme kamkoliv. Pro Čechy volejte +420 733 154 789, pro Moravu +420 604 294 012 — vždy se dovoláte člověku, který stavbám rozumí.",
  },
];

const reference = [
  {
    misto: "Pod Lysinami 15–19, Praha",
    prace: "Zateplení panelového domu, rekonstrukce balkonů a lodžií",
  },
  {
    misto: "Tylova 59 a 61, Prostějov",
    prace: "Zateplení bytového domu, balkony a lodžie",
  },
  {
    misto: "Budovatelská 4798–4799, Zlín",
    prace: "Zateplení panelového domu, rekonstrukce lodžií",
  },
  {
    misto: "Skácelova 3044–3045, Hodonín",
    prace: "Zateplení bytového domu, závěsné balkony",
  },
  {
    misto: "Dolní Jasenka 751, Vsetín",
    prace: "Zateplení panelového domu, balkony a lodžie",
  },
  {
    misto: "J. E. Purkyně 1018, Uherské Hradiště",
    prace: "Zateplení bytového domu",
  },
];

export default function Page() {
  return (
    <main className="fs">
      {/* ================= HERO ================= */}
      <header className="fs-hero">
        <div className="fs-hero-top">
          <div className="fs-wordmark" aria-label="Fasády Šimek">
            <span className="fs-wordmark-fasady">FASÁDY</span>
            <span className="fs-wordmark-simek">ŠIMEK</span>
          </div>
          <div className="fs-hero-contact">
            <a href="tel:+420733154789" className="fs-tel">
              <span className="fs-tel-label">Čechy</span> 733 154 789
            </a>
            <a href="tel:+420604294012" className="fs-tel">
              <span className="fs-tel-label">Morava</span> 604 294 012
            </a>
          </div>
        </div>

        <div className="fs-hero-body">
          <p className="fs-hero-eyebrow">Stavební firma · Olomouc · působíme v celé ČR</p>
          <h1 className="fs-hero-title">
            <span className="fs-hero-line fs-hero-line-1">Váš panelák.</span>
            <span className="fs-hero-line fs-hero-line-2">
              Zateplený<span className="fs-comma">,</span>
            </span>
            <span className="fs-hero-line fs-hero-line-3">s novými lodžiemi.</span>
          </h1>
          <p className="fs-hero-sub">
            287 dokončených revitalizací bytových domů, 21 právě na lešení. Zakázku
            nerozprodáme — od stavbyvedoucího po zedníky pracuje náš vlastní tým.
          </p>
          <div className="fs-hero-actions">
            <a href="#sluzby" className="fs-btn fs-btn-solid">
              Co pro váš dům uděláme
            </a>
            <a href="#reference" className="fs-btn fs-btn-line">
              Realizace ve vašem okolí
            </a>
          </div>
        </div>

        {/* Signature: fasáda paneláku jako čistá typografická/geometrická plocha.
            Mřížka oken s vloženými lodžiemi — postavená z divů, žádný obrázek. */}
        <div className="fs-facade" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={
                "fs-facade-cell" +
                ([2, 6, 10, 14, 18, 22].includes(i) ? " fs-facade-lodzie" : "") +
                ([9, 17].includes(i) ? " fs-facade-warm" : "")
              }
              style={{ animationDelay: `${0.06 * i + 0.4}s` }}
            />
          ))}
          <div className="fs-facade-caption">Řez fasádou · 6 podlaží · lodžie na jih</div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="fs-section fs-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="fs-section-head">
          <p className="fs-eyebrow">Tři věci, které umíme pořádně</p>
          <h2 id="sluzby-h" className="fs-h2">
            Od první schůze SVJ po předání klíčů od lešení
          </h2>
        </div>

        <div className="fs-sluzby-grid">
          {sluzby.map((s) => (
            <article key={s.kod} className="fs-karta">
              <div className="fs-karta-kod">{s.kod}</div>
              <h3 className="fs-karta-titulek">{s.nazev}</h3>
              <p className="fs-karta-popis">{s.popis}</p>
              <ul className="fs-karta-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="fs-dotace">
          <p>
            <strong>Dotace NZÚ vyřídíme za vás.</strong> U typického panelového domu
            pokryje 30–50 % nákladů na zateplení. Spočítáme vám ji zdarma ještě před
            podpisem smlouvy.
          </p>
        </div>
      </section>

      {/* ================= DŮVĚRA + REFERENCE ================= */}
      <section className="fs-section fs-duvera" id="reference" aria-labelledby="duvera-h">
        <div className="fs-section-head">
          <p className="fs-eyebrow fs-eyebrow-light">Proč nám výbory SVJ věří</p>
          <h2 id="duvera-h" className="fs-h2 fs-h2-light">
            287 domů dokončeno. Jen kladné reference.
          </h2>
        </div>

        <div className="fs-zaruky">
          {zaruky.map((z) => (
            <div key={z.titulek} className="fs-zaruka">
              <h3 className="fs-zaruka-titulek">{z.titulek}</h3>
              <p className="fs-zaruka-text">{z.text}</p>
            </div>
          ))}
        </div>

        <div className="fs-ref-head">
          <h3 className="fs-ref-h3">Z posledních realizací</h3>
          <p className="fs-ref-note">Aktuálně na lešení: 21 domů po celé republice</p>
        </div>

        <ul className="fs-ref-list">
          {reference.map((r) => (
            <li key={r.misto} className="fs-ref-item">
              <span className="fs-ref-misto">{r.misto}</span>
              <span className="fs-ref-prace">{r.prace}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
