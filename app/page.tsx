export default function Page() {
  const cenik = [
    { prace: "Zednická hodina", cena: "400 Kč", jednotka: "/ h" },
    { prace: "Ztracené bednění", cena: "od 1 200 Kč", jednotka: "/ m²" },
    { prace: "Zámková dlažba", cena: "od 550 Kč", jednotka: "/ m²" },
    { prace: "Keramická dlažba (malý / velký formát)", cena: "450–1 200 Kč", jednotka: "/ m²" },
    { prace: "Zdění z Ytongu (dle tloušťky)", cena: "od 650 Kč", jednotka: "/ m²" },
    { prace: "Štuky vnitřní i vnější, se zatočením", cena: "od 230 Kč", jednotka: "/ m²" },
    { prace: "Lepidlo 2× s perlinkou (štuk, fasáda)", cena: "250 Kč", jednotka: "/ m²" },
    { prace: "Betonové podlahy", cena: "od 500 Kč", jednotka: "/ m²" },
    { prace: "Zateplení perimetru s hydroizolací a nopovou fólií", cena: "950 Kč", jednotka: "/ m²" },
    { prace: "Doprava materiálu a suti (do 1 m³)", cena: "12 Kč", jednotka: "/ km" },
  ];

  const sluzby = [
    {
      nazev: "Zdivo a beton",
      popis:
        "Vyzdíváme z Ytongu i ztraceného bednění, betonujeme a armujeme podlahy i základy. Pozemek zaměříme laserovou nivelací, takže sedí každý centimetr.",
    },
    {
      nazev: "Voda a kanalizace",
      popis:
        "Přípojky vody a kanalizace včetně zemních prací. Cenový odhad přípojky dostanete předem, ne až po výkopu.",
    },
    {
      nazev: "Dlažby a povrchy",
      popis:
        "Zámková dlažba na dvůr i příjezd, keramická dlažba uvnitř — maloformát i velkoformát. Štuky se zatočením, lepidlo s perlinkou pro fasádu.",
    },
    {
      nazev: "Zateplení a hydroizolace",
      popis:
        "Zateplení perimetru extrudovaným polystyrenem, hydroizolace domu a natažení nopové fólie. Dům drží teplo a sklep zůstane suchý.",
    },
    {
      nazev: "Rekonstrukce a opravy",
      popis:
        "Ploty, přístřešky, opravy po letech provozu i kompletní rekonstrukce. Menší práce nacením zvlášť podle vašich požadavků.",
    },
    {
      nazev: "Doprava a odvoz",
      popis:
        "Přivezeme materiál, odvezeme suť — od sypkých materiálů po beton, přívěsem do 1 m³ na jednu jízdu. Termín podle domluvy.",
    },
  ];

  return (
    <main className="st">
      {/* ================= HERO ================= */}
      <header className="hero" aria-label="Stavební a zednické práce Rakovník">
        <div className="hero-topbar">
          <span className="wordmark">
            <span className="wordmark-block" aria-hidden="true"></span>
            STAVEBNÍ A ZEDNICKÉ PRÁCE
          </span>
          <a className="hero-tel" href="tel:+420739065359">
            739 065 359
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Zedník z Rakovníka · ceny předem</p>
          <h1 className="hero-title">
            <span className="row r1">ZDIVO.</span>
            <span className="row r2">BETON.</span>
            <span className="row r3">DLAŽBA.</span>
          </h1>
          <p className="hero-sub">
            Zednické a stavební práce v Rakovníku a okolí. Od přípojky vody po
            zateplenou fasádu — a cenu znáte dřív, než vezmu do ruky lžíci.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420739065359">
              Zavolat: 739 065 359
            </a>
            <a className="btn btn-line" href="mailto:tothr@seznam.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: běhounová vazba — cihelný pás */}
        <div className="bond" aria-hidden="true">
          <div className="bond-row">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <div className="bond-row offset">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <div className="bond-row">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás postavím</h2>
          <p className="section-note">
            Jedna parta, jedno číslo. Zaměření laserem, betonáž s armováním,
            zdění, dlažby i doprava materiálu.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.nazev}>
              <span className="karta-cihla" aria-hidden="true"></span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CENÍK / DŮVĚRA ================= */}
      <section className="cenik" aria-labelledby="cenik-h">
        <div className="cenik-inner">
          <div className="cenik-uvod">
            <h2 id="cenik-h">Ceník bez překvapení</h2>
            <p>
              Kalkulaci dostanete <strong>předem a písemně</strong> — u přípojek,
              u fasády i u dlažby. Co si domluvíme, to platí. Práce, které tu
              nejsou, nacením zvlášť podle rozsahu.
            </p>
            <p className="cenik-adresa">
              Nádraží 215, 269 01 Rakovník II<br />
              Jezdím po Rakovnicku — doprava 12 Kč / km.
            </p>
          </div>

          <ul className="cenik-list">
            {cenik.map((r) => (
              <li key={r.prace}>
                <span className="polozka">{r.prace}</span>
                <span className="tecky" aria-hidden="true"></span>
                <span className="castka">
                  {r.cena}
                  <em>{r.jednotka}</em>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
