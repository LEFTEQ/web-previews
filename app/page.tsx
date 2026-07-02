// CK MÁJ — cestovní kancelář, České Budějovice
// Design koncept: „Jízdní řád na dovolenou“ — vizuální svět autobusových linek,
// odjezdových tabulí a cestovních itinerářů. Signature prvek: trasová linka
// s zastávkami (route line), která prochází hero sekcí i výletovými kartami.

const vylety = [
  {
    destinace: "Krimmelské vodopády",
    zeme: "Rakousko",
    popis: "Největší vodopády v Rakousku — 380 metrů padající vody.",
    cena: "1 490 Kč",
    typ: "Příroda",
  },
  {
    destinace: "Berchtesgaden",
    zeme: "Německo",
    popis: "Kehlstein „Orlí hnízdo“ s výhledem na Alpy.",
    cena: "1 750 Kč",
    typ: "Hory a výhledy",
  },
  {
    destinace: "Schafberg",
    zeme: "Rakousko",
    popis: "Zubačkou na vrchol nad jezerem Wolfgangsee.",
    cena: "895 Kč",
    typ: "Zubačka",
  },
  {
    destinace: "Pasov a Linec",
    zeme: "Rakousko",
    popis: "Lodí po modrém Dunaji, dvě města za jeden den.",
    cena: "1 890 Kč",
    typ: "Plavba",
  },
  {
    destinace: "Caorle",
    zeme: "Itálie",
    popis: "Víkendové koupání v Jadranu — vyjedete v pátek, v neděli jste doma.",
    cena: "1 750 Kč",
    typ: "Koupání",
  },
  {
    destinace: "Solnohradská jezera",
    zeme: "Rakousko",
    popis: "Traunsee, Wolfgangsee a Mondsee během jediného dne.",
    cena: "1 390 Kč",
    typ: "Jezera",
  },
];

const pobyty = [
  { destinace: "Poreč — pobyt u moře", detail: "Hotel Delfin**, Chorvatsko", cena: "11 490 Kč" },
  { destinace: "Portorož — pobyt u moře", detail: "Hotel Histrion****, Slovinsko", cena: "14 290 Kč" },
  { destinace: "Sivota", detail: "Řecko — autobusem i letecky", cena: "12 490 Kč" },
  { destinace: "Lago di Garda", detail: "La Rotonda***, Itálie", cena: "10 990 Kč" },
  { destinace: "Okruh středním Norskem", detail: "Poznávací zájezd, hotely dle programu", cena: "41 990 Kč" },
  { destinace: "Orlické hory", detail: "Pro zdatné turisty i pohodové výletníky", cena: "4 590 Kč" },
];

export default function Page() {
  return (
    <main className="ckm">
      {/* ===================== HERO ===================== */}
      <section className="hero" aria-label="CK Máj — cestovní kancelář České Budějovice">
        <header className="hero-top">
          <div className="wordmark" aria-label="CK Máj">
            <span className="wordmark-ck">CK</span>
            <span className="wordmark-maj">MÁJ</span>
          </div>
          <nav className="hero-nav" aria-label="Rychlý kontakt">
            <a href="tel:+420602370665" className="hero-tel">+420 602 370 665</a>
            <a href="mailto:ckmaj@ckmaj.cz" className="hero-mail">ckmaj@ckmaj.cz</a>
          </nav>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Cestovní kancelář · České Budějovice · od roku 1992</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Odjezd</span>
            <span className="hero-line hero-line-2">z Budějovic,</span>
            <span className="hero-line hero-line-3">cíl <em>vaše dovolená.</em></span>
          </h1>
          <p className="hero-sub">
            Vlastní autobusové výlety k alpským jezerům i k moři, pobyty, lázně
            a poznávací zájezdy. Už 32 let vybíráme dovolené osobně — na pobočce,
            ne přes formulář.
          </p>
          <div className="hero-actions">
            <a href="#vylety" className="btn btn-solid">Prohlédnout výlety</a>
            <a href="tel:+420602370665" className="btn btn-ghost">Zavolat pobočku</a>
          </div>
        </div>

        {/* Signature: odjezdová trasa s zastávkami */}
        <div className="hero-route" aria-hidden="true">
          <div className="route-track">
            <div className="route-line" />
            <div className="route-stop stop-1">
              <span className="route-dot route-dot-start" />
              <span className="route-label">České Budějovice<small>odjezd 6:30</small></span>
            </div>
            <div className="route-stop stop-2">
              <span className="route-dot" />
              <span className="route-label">Solnohradská jezera<small>od 1 390 Kč</small></span>
            </div>
            <div className="route-stop stop-3">
              <span className="route-dot" />
              <span className="route-label">Caorle — Jadran<small>od 1 750 Kč</small></span>
            </div>
            <div className="route-stop stop-4">
              <span className="route-dot route-dot-end" />
              <span className="route-label">Sivota — Řecko<small>od 12 490 Kč</small></span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VÝLETY A POBYTY ===================== */}
      <section className="trips" id="vylety" aria-labelledby="trips-h">
        <div className="section-head">
          <p className="eyebrow">Jednodenní výlety vlastními autobusy</p>
          <h2 id="trips-h">Ráno vyjedete, večer jste doma</h2>
          <p className="section-lead">
            Odjezdy přímo z Českých Budějovic. Ceny jsou konečné — doprava
            a průvodce v ceně, bez skrytých příplatků.
          </p>
        </div>

        <ul className="trip-grid">
          {vylety.map((v) => (
            <li key={v.destinace} className="trip-card">
              <div className="trip-meta">
                <span className="trip-type">{v.typ}</span>
                <span className="trip-country">{v.zeme}</span>
              </div>
              <h3 className="trip-name">{v.destinace}</h3>
              <p className="trip-desc">{v.popis}</p>
              <div className="trip-foot">
                <span className="trip-price"><small>od</small> {v.cena}</span>
                <span className="trip-route" aria-hidden="true" />
              </div>
            </li>
          ))}
        </ul>

        <div className="stays">
          <div className="stays-head">
            <h3>Pobyty a poznávací zájezdy</h3>
            <p>Moře, hory i severská příroda — autobusem z Budějovic nebo letecky.</p>
          </div>
          <ul className="stays-list">
            {pobyty.map((p) => (
              <li key={p.destinace} className="stay-row">
                <div className="stay-info">
                  <span className="stay-name">{p.destinace}</span>
                  <span className="stay-detail">{p.detail}</span>
                </div>
                <span className="stay-price"><small>od</small> {p.cena}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== DŮVĚRA / O NÁS ===================== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="section-head section-head-light">
          <p className="eyebrow eyebrow-light">Proč s CK Máj</p>
          <h2 id="trust-h">32 let stejná telefonní linka,<br />stejná Česká ulice</h2>
        </div>

        <div className="trust-grid">
          <article className="trust-card">
            <span className="trust-num">32 let</span>
            <h3>Plníme cestovatelské sny od roku 1992</h3>
            <p>
              Nejsme anonymní e-shop. Dovolenou s vámi vybere člověk, který
              v destinaci sám byl a řekne vám i to, co v katalogu nenajdete.
            </p>
          </article>
          <article className="trust-card">
            <span className="trust-num">2 pobočky</span>
            <h3>Česká 44 a V. Volfa 19</h3>
            <p>
              Zastavte se v centru nebo na sídlišti Máj. Katalog 2026 si
              prolistujete u kávy a odnesete domů.
            </p>
          </article>
          <article className="trust-card">
            <span className="trust-num">65+ zájezdů</span>
            <h3>Vlastní výlety i velké katalogy</h3>
            <p>
              Prodáváme zájezdy CK Exim, Fischer, Čedok, Blue Style či TUI
              za stejné ceny jako pořádající kanceláře — a k tomu vlastní
              autobusové výlety, které jinde nekoupíte.
            </p>
          </article>
          <article className="trust-card">
            <span className="trust-num">8–59 míst</span>
            <h3>Autobusy i pro vaši skupinu</h3>
            <p>
              Firemní výlet, sportovní klub nebo škola? Zajistíme přepravu
              vlastními autobusy s kapacitou 8 až 59 míst.
            </p>
          </article>
        </div>

        <div className="trust-extra">
          <div className="trust-extra-item">
            <h4>Dárkové poukázky</h4>
            <p>Na konkrétní zájezd, výlet nebo finanční hodnotu. Platí rok — obdarovaný si termín vybere sám.</p>
          </div>
          <div className="trust-extra-item">
            <h4>Benefity a stravenky</h4>
            <p>Do 50 % ceny zájezdu přijímáme poukázky Sodexo, Benefit Plus a další.</p>
          </div>
          <div className="trust-extra-item">
            <h4>Osobní jednání</h4>
            <p>Zavolejte na <a href="tel:+420602370665">602 370 665</a> nebo napište na <a href="mailto:ckmaj@ckmaj.cz">ckmaj@ckmaj.cz</a> — odpovíme obratem, ne robotem.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
