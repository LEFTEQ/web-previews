// ELETA tepelná čerpadla s.r.o. — Ostrava
// Návrhový koncept: „Teplo z venkovního vzduchu, převedené do čísel a linek."
// Signature prvek: velká „teplotní stupnice" — vertikální gradient od mrazu (−20 °C)
// po topnou vodu (+55 °C), která prochází hero sekcí jako osa celé stránky.
// Palety: hluboká modř zimního vzduchu → měděná barva topné spirály.

const sluzby = [
  {
    id: "navrh",
    krok: "Návrh",
    nazev: "Výpočet a návrh na míru vašemu domu",
    text: "Přijedeme, změříme tepelnou ztrátu a navrhneme čerpadlo Viessmann Vitocal přesně na váš dům — ne o třídu větší, ne o třídu menší. Dostanete cenovou nabídku s konkrétním modelem a reálnou spotřebou.",
    detail: "zdarma a nezávazně",
  },
  {
    id: "instalace",
    krok: "Instalace",
    nazev: "Montáž na klíč do 3 dnů",
    text: "Od usazení venkovní jednotky po připojení k vašemu topení a bojleru. Vyřídíme dotaci Nová zelená úsporám i připojení k distribuční síti. Odjíždíme, až topíte.",
    detail: "včetně dotace NZÚ",
  },
  {
    id: "servis",
    krok: "Servis",
    nazev: "Pohotovost 24/7 po celém Ostravsku",
    text: "Když čerpadlo v lednu zhasne, nečekáte do pondělí. Držíme nepřetržitou servisní pohotovost a povinné roční kontroly hlídáme za vás — ozveme se sami, když se blíží termín.",
    detail: "+420 777 266 644",
  },
];

const revize = [
  "Roční kontrola tepelného čerpadla",
  "Roční kontrola kondenzačního kotle",
  "Revize plynového zařízení",
  "Revize elektro",
];

const reference = [
  {
    misto: "Václavovice",
    typ: "Rodinný dům",
    popis: "Vitocal 200-S nahradil plynový kotel. Provoz venkovní jednotky 35 dB — sousedé přes plot nic neslyší.",
    hodnota: "35 dB",
    jednotka: "tichý provoz",
  },
  {
    misto: "Bruntál",
    typ: "Rodinný dům",
    popis: "Novostavba s podlahovým topením a přípravou na fotovoltaiku. Čerpadlo topí i při −22 °C bez bivalence.",
    hodnota: "−22 °C",
    jednotka: "spolehlivý start",
  },
  {
    misto: "Petřvald",
    typ: "Kaskáda kotlů",
    popis: "Regulace kotelny bytového domu — kaskádové řízení srovnalo špičky a snížilo spotřebu plynu o pětinu.",
    hodnota: "−20 %",
    jednotka: "spotřeba plynu",
  },
  {
    misto: "Stará Ves n. O.",
    typ: "Sauna a vířivka",
    popis: "Ohřev vířivky a sauny tepelným čerpadlem — luxus, který nestojí majlant za elektřinu.",
    hodnota: "55 °C",
    jednotka: "topná voda",
  },
];

export default function Page() {
  return (
    <main className="el">
      {/* ===== HLAVIČKA ===== */}
      <header className="el-top">
        <div className="el-wordmark" aria-label="ELETA tepelná čerpadla">
          <span className="el-wordmark-name">ELETA</span>
          <span className="el-wordmark-sub">tepelná čerpadla · Ostrava</span>
        </div>
        <nav className="el-topnav" aria-label="Rychlý kontakt">
          <a href="tel:+420777266644" className="el-topnav-tel">+420 777 266 644</a>
          <a href="#nabidka" className="el-topnav-cta">Chci cenovou nabídku</a>
        </nav>
      </header>

      {/* ===== HERO — teplotní stupnice ===== */}
      <section className="el-hero" aria-labelledby="hero-h">
        <div className="el-hero-grid">
          <div className="el-hero-copy">
            <p className="el-eyebrow el-anim el-anim-1">Vzduch venku má energii. My ji umíme dostat dovnitř.</p>
            <h1 id="hero-h" className="el-hero-title">
              <span className="el-anim el-anim-2">Z&nbsp;ostravského</span>
              <span className="el-anim el-anim-3 el-hero-cold">mrazu −20&nbsp;°C</span>
              <span className="el-anim el-anim-4">uděláme</span>
              <span className="el-anim el-anim-5 el-hero-warm">topnou vodu +55&nbsp;°C</span>
            </h1>
            <p className="el-hero-lead el-anim el-anim-6">
              Tepelná čerpadla Viessmann navrhujeme, instalujeme a servisujeme
              na Ostravsku už od roku 2017. Venkovní jednotka s&nbsp;provozem
              pouhých 35&nbsp;dB — vhodná i&nbsp;do husté zástavby.
            </p>
            <div className="el-hero-actions el-anim el-anim-7">
              <a href="#nabidka" className="el-btn el-btn-warm">Chci cenovou nabídku</a>
              <a href="tel:+420777266644" className="el-btn el-btn-ghost">Objednat servis 24/7</a>
            </div>
          </div>

          {/* Signature: teplotní stupnice */}
          <div className="el-scale el-anim el-anim-3" aria-hidden="true">
            <div className="el-scale-bar">
              <span className="el-scale-marker" style={{ top: "4%" }}>
                <i className="el-scale-tick" /><b>+55 °C</b><small>topná voda</small>
              </span>
              <span className="el-scale-marker" style={{ top: "34%" }}>
                <i className="el-scale-tick" /><b>+21 °C</b><small>váš obývák</small>
              </span>
              <span className="el-scale-marker" style={{ top: "62%" }}>
                <i className="el-scale-tick" /><b>0 °C</b><small>listopad v Ostravě</small>
              </span>
              <span className="el-scale-marker" style={{ top: "90%" }}>
                <i className="el-scale-tick" /><b>−20 °C</b><small>čerpadlo stále topí</small>
              </span>
            </div>
          </div>
        </div>

        <ul className="el-hero-facts el-anim el-anim-8">
          <li><b>35 dB</b><span>tišší než vaše lednice</span></li>
          <li><b>24/7</b><span>servisní pohotovost</span></li>
          <li><b>Viessmann</b><span>autorizovaný partner</span></li>
          <li><b>NZÚ</b><span>vyřídíme dotaci za vás</span></li>
        </ul>
      </section>

      {/* ===== SEKCE 1 — SLUŽBY ===== */}
      <section className="el-sluzby" id="nabidka" aria-labelledby="sluzby-h">
        <div className="el-section-head">
          <p className="el-eyebrow el-eyebrow-dark">Jak to u nás probíhá</p>
          <h2 id="sluzby-h">Od výpočtu tepelné ztráty<br />po první teplou zimu</h2>
        </div>

        <ol className="el-sluzby-list">
          {sluzby.map((s) => (
            <li key={s.id} className="el-sluzba">
              <span className="el-sluzba-krok">{s.krok}</span>
              <h3>{s.nazev}</h3>
              <p>{s.text}</p>
              <span className="el-sluzba-detail">{s.detail}</span>
            </li>
          ))}
        </ol>

        <div className="el-revize">
          <h3 className="el-revize-title">Pravidelný servis a&nbsp;revize hlídáme za vás</h3>
          <ul className="el-revize-list">
            {revize.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="el-revize-note">
            Termín roční kontroly si nemusíte pamatovat — před vypršením se vám sami ozveme.
          </p>
        </div>
      </section>

      {/* ===== SEKCE 2 — REFERENCE ===== */}
      <section className="el-reference" aria-labelledby="ref-h">
        <div className="el-section-head">
          <p className="el-eyebrow">Instalace, kolem kterých jezdíte</p>
          <h2 id="ref-h">Topíme domům na Ostravsku,<br />ne anonymním adresám</h2>
          <p className="el-section-lead">
            Sídlíme v&nbsp;Ostravě-Hulvákách, provozovnu máme ve Staré Vsi nad Ondřejnicí.
            Každou instalaci najdete na mapě do hodiny cesty od nás — a&nbsp;stejně rychle
            u&nbsp;vás bude i&nbsp;náš servisní technik.
          </p>
        </div>

        <ul className="el-ref-grid">
          {reference.map((r) => (
            <li key={r.misto} className="el-ref-card">
              <div className="el-ref-meta">
                <span className="el-ref-typ">{r.typ}</span>
                <span className="el-ref-misto">{r.misto}</span>
              </div>
              <p className="el-ref-popis">{r.popis}</p>
              <div className="el-ref-cislo">
                <b>{r.hodnota}</b>
                <span>{r.jednotka}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
