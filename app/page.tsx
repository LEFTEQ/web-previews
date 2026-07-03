const sluzby = [
  {
    id: "D1",
    nazev: "Bourací práce",
    popis:
      "Kompletní demolice rodinných domů, hal, garáží i průmyslových objektů. Strojní i ruční bourání podle povahy stavby, včetně statického posouzení postupu.",
    detail: "Hydraulická kladiva, demoliční nůžky, drtící lžíce",
  },
  {
    id: "D2",
    nazev: "Zemní práce",
    popis:
      "Výkopy základů, přípojek a bazénů, terénní úpravy, skrývky ornice. Pásová i kolová rypadla pro stísněné dvorky i velké plochy.",
    detail: "Rypadla 1,8–22 t, nakladače, minibagry",
  },
  {
    id: "D3",
    nazev: "Paličské práce",
    popis:
      "Řezání a pálení ocelových konstrukcí, likvidace technologických celků, dělení materiálu přímo na stavbě. Držitelé platných paličských průkazů.",
    detail: "Autogenní pálení, úhlové řezání, likvidace ocele",
  },
  {
    id: "D4",
    nazev: "Odvoz a likvidace suti",
    popis:
      "Naložíme, odvezeme a legálně zlikvidujeme veškerou suť a odpad z demolice. Doklady o uložení dostanete ke každé zakázce.",
    detail: "Kontejnery 3–15 m³, sklápěče, evidence odpadů",
  },
  {
    id: "D5",
    nazev: "Nákladní doprava",
    popis:
      "Vlastní sklápěče a podvalník. Dovoz kameniva, recyklátu a zeminy, přeprava strojů po Ostravě a Moravskoslezském kraji.",
    detail: "Sklápěče do 30 t, podvalníková přeprava",
  },
  {
    id: "D6",
    nazev: "Příprava staveniště",
    popis:
      "Po demolici pozemek srovnáme, zhutníme a připravíme pro novou stavbu. Předáme čistou parcelu, na které se dá hned stavět.",
    detail: "Hutnění, srovnání pláně, recyklace betonu na místě",
  },
];

const postup = [
  {
    krok: "Obhlídka zdarma",
    text: "Přijedeme na místo, projdeme objekt a řekneme vám na rovinu, co demolice obnáší a kolik bude stát.",
  },
  {
    krok: "Pevná cena a termín",
    text: "Dostanete písemnou nabídku s postupem prací, termínem a smluvní cenou. Žádné položky navíc až na stavbě.",
  },
  {
    krok: "Demolice a odvoz",
    text: "Zbouráme, roztřídíme materiál, odvezeme suť s doklady o likvidaci a srovnáme terén.",
  },
  {
    krok: "Předání parcely",
    text: "Předáváme čistý, srovnaný pozemek připravený pro další stavbu. Většinu zakázek zvládáme do dvou týdnů.",
  },
];

const fakta = [
  { cislo: "15+", popisek: "let bouráme v Ostravě a okolí" },
  { cislo: "22 t", popisek: "nejtěžší rypadlo v našem parku" },
  { cislo: "100 %", popisek: "suti s dokladem o legální likvidaci" },
  { cislo: "48 h", popisek: "do obhlídky od vašeho zavolání" },
];

export default function Page() {
  return (
    <main className="zt">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <div className="wordmark">
            <span className="wordmark-sf">SF</span>
            <span className="wordmark-sep" aria-hidden="true"></span>
            <span className="wordmark-zt">ZEMTRADE</span>
          </div>
          <a className="hero-tel" href="tel:+420774447780">
            +420 774 447 780
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Bourací a zemní práce · Ostrava-Slezská Ostrava
          </p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Co stojí v cestě,</span>
            <span className="hero-line hero-line-2">
              <span className="strike-wrap">
                zbouráme<span className="strike" aria-hidden="true"></span>
              </span>
            </span>
            <span className="hero-line hero-line-3">a odvezeme.</span>
          </h1>
          <p className="hero-sub">
            Demolice domů, hal a průmyslových objektů. Vlastní stroje, vlastní
            doprava, doklad o likvidaci suti ke každé zakázce. Po nás zůstane
            čistá parcela.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420774447780">
              Zavolat o obhlídku zdarma
            </a>
            <a className="btn btn-ghost" href="mailto:info@zemtrade.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* signature: rozpadající se rastr — panelák, který mizí */}
        <div className="rubble" aria-hidden="true">
          <div className="rubble-grid">
            {Array.from({ length: 96 }).map((_, i) => (
              <span key={i} className={`rb rb-${i % 12}`} />
            ))}
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>DEMOLICE</span>
          <span className="strip-dot">◆</span>
          <span>VÝKOPY</span>
          <span className="strip-dot">◆</span>
          <span>PÁLENÍ OCELE</span>
          <span className="strip-dot">◆</span>
          <span>ODVOZ SUTI</span>
          <span className="strip-dot">◆</span>
          <span>OSTRAVA A OKOLÍ</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Co pro vás zajistíme</p>
          <h2 id="sluzby-h" className="section-title">
            Od první rány kladivem po čistou parcelu
          </h2>
          <p className="section-lead">
            Jedna firma, jedna smlouva, jedna odpovědnost. Nemusíte shánět
            bagristu, dopravce a skládku zvlášť — všechno máme vlastní.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article key={s.id} className="karta">
              <div className="karta-head">
                <span className="karta-id">{s.id}</span>
                <h3 className="karta-nazev">{s.nazev}</h3>
              </div>
              <p className="karta-popis">{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / POSTUP ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="section-head section-head-dark">
            <p className="section-eyebrow">Jak zakázka probíhá</p>
            <h2 id="duvera-h" className="section-title">
              Čtyři kroky. Smluvní cena. Žádná překvapení.
            </h2>
          </div>

          <ol className="postup">
            {postup.map((p, i) => (
              <li key={p.krok} className="postup-item">
                <span className="postup-cislo" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="postup-krok">{p.krok}</h3>
                  <p className="postup-text">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="fakta">
            {fakta.map((f) => (
              <div key={f.popisek} className="fakt">
                <dt className="fakt-popisek">{f.popisek}</dt>
                <dd className="fakt-cislo">{f.cislo}</dd>
              </div>
            ))}
          </dl>

          <blockquote className="reference">
            <p>
              „Zbourali nám starou stodolu i s betonovými základy za devět dní.
              Suť odvezli s doklady, pozemek srovnali — mohli jsme hned začít
              stavět. Jednání na rovinu, cena podle nabídky.“
            </p>
            <cite>— rodinná stavba, Ostrava-Radvanice, 2024</cite>
          </blockquote>

          <p className="duvera-pata">
            SF-zemtrade s.r.o. · Kramolišova 718, 710 00 Ostrava-Slezská
            Ostrava · IČO 28628683
          </p>
        </div>
      </section>

      {/* mobilní lišta se zavoláním */}
      <a className="mobil-cta" href="tel:+420774447780">
        Zavolat: 774 447 780
      </a>
    </main>
  );
}
