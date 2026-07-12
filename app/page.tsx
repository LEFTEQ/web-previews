import React from "react";

export default function Page() {
  const znacky = [
    "Škoda", "Volkswagen", "Audi", "Seat", "Peugeot", "Ford",
    "Toyota", "Volvo", "Opel", "Mazda", "Hyundai", "Dacia",
    "Citroën", "BMW", "Kia", "Fiat",
  ];

  const prace = [
    {
      id: "01",
      nazev: "Geometrie podvozku",
      popis:
        "Měříme na nejmodernějším 3D zařízení. Sjíždí vám guma do strany nebo auto táhne? Srovnáme sbíhavost i odklon kol přesně podle výrobce.",
      cas: "do 90 minut",
    },
    {
      id: "02",
      nazev: "Výměna rozvodů",
      popis:
        "Rozvodový řemen i sada s vodní pumpou. Známe úskalí motorů EA211 i EA288 — děláme to tak, aby držely dalších sto tisíc kilometrů.",
      cas: "1 den",
    },
    {
      id: "03",
      nazev: "Výměna brzd",
      popis:
        "Kotouče, destičky, brzdová kapalina. Skřípe to nebo pulzuje pedál? Přijeďte, změříme tloušťku kotoučů a řekneme rovnou, na čem jste.",
      cas: "na počkání",
    },
    {
      id: "04",
      nazev: "Klimatizace na počkání",
      popis:
        "Express servis autoklimatizace — plnění, kontrola těsnosti, dezinfekce. Přijedete zpocení, odjedete v chladu. Bez objednání předem.",
      cas: "do 60 minut",
    },
    {
      id: "05",
      nazev: "Diagnostika koncernových vozů",
      popis:
        "Originální software pro vozy koncernu VW i ostatní značky. Vyčteme chybové paměti, zakódujeme jednotky, poradíme s elektronikou.",
      cas: "do 45 minut",
    },
    {
      id: "06",
      nazev: "Generální oprava motoru",
      popis:
        "Když je zásah hlubší — spojka, hlava válců, celý motor. Nafotíme rozebrané díly a vysvětlíme, co a proč měníme. Žádné překvapení na faktuře.",
      cas: "dle rozsahu",
    },
  ];

  return (
    <main className="page">
      {/* HERO */}
      <header className="hero">
        <nav className="topbar" aria-label="Hlavní">
          <a className="wordmark" href="#" aria-label="AV Motors Brno, úvodní stránka">
            <span className="wm-av">AV</span>
            <span className="wm-motors">MOTORS</span>
            <span className="wm-brno">Brno</span>
          </a>
          <div className="topbar-right">
            <a className="tel" href="tel:+420530513581">530&nbsp;513&nbsp;581</a>
            <a className="btn btn-solid" href="#nacenit">Nacenit opravu</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Autoservis &amp; pneuservis · Brno</p>
            <h1 className="hero-title">
              Auto srovnáme<br />
              <span className="outline">do posledního</span><br />
              <span className="accent">stupně.</span>
            </h1>
            <p className="hero-lead">
              Táhne auto do strany a guma sjíždí po vnitřní hraně? Máme
              3D měření geometrie podvozku a mechaniky, kteří přesně vědí,
              o kolik desetin stupně se to rozešlo.
            </p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="#nacenit">Objednat servis</a>
              <a className="btn btn-ghost" href="#sluzby">Co všechno děláme</a>
            </div>
          </div>

          <figure className="hero-figure">
            <img
              src="/hero.webp"
              alt="Vůz na měřicím stání geometrie podvozku v dílně AV Motors Brno"
              className="hero-img"
              width={900}
              height={1100}
            />
            <figcaption className="hero-cap">
              <span className="cap-dot" aria-hidden="true" />
              3D geometrie · stání č.&nbsp;2
            </figcaption>
          </figure>
        </div>

        {/* Značkový pás — reálný obsah webu: seznam servisovaných značek */}
        <div className="marquee" aria-label="Servisujeme značky">
          <ul className="marquee-track">
            {znacky.concat(znacky).map((z, i) => (
              <li key={i} aria-hidden={i >= znacky.length ? true : undefined}>
                {z}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* SEKCE 1 — SLUŽBY */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="sec-eyebrow">Naše práce · 06 výkonů, které řešíme nejčastěji</p>
          <h2 className="sec-title" id="sluzby-nadpis">
            Od výměny oleje po generálku motoru
          </h2>
        </div>

        <div className="sluzby-layout">
          <ol className="karty">
            {prace.map((s) => (
              <li className="karta" key={s.id}>
                <span className="karta-id">{s.id}</span>
                <div className="karta-body">
                  <h3 className="karta-nazev">{s.nazev}</h3>
                  <p className="karta-popis">{s.popis}</p>
                </div>
                <span className="karta-cas">{s.cas}</span>
              </li>
            ))}
          </ol>

          <aside className="sluzby-media">
            <img
              src="/section-1.webp"
              alt="Detail práce mechanika v dílně AV Motors — servis motoru"
              className="media-img"
              width={800}
              height={1000}
            />
            <div className="media-note">
              <p>
                Servisujeme koncernové i běžné vozy ve stejné kvalitě jako
                autorizované servisy — jen bez zbytečné ceny za značku na dveřích.
              </p>
              <a className="btn btn-ghost small" href="#nacenit">Chci nacenit opravu</a>
            </div>
          </aside>
        </div>
      </section>

      {/* SEKCE 2 — O NÁS / DŮVĚRA */}
      <section className="onas" id="onas" aria-labelledby="onas-nadpis">
        <div className="onas-grid">
          <figure className="onas-figure">
            <img
              src="/section-2.webp"
              alt="Nová provozovna autoservisu AV Motors v Brně"
              className="onas-img"
              width={900}
              height={720}
            />
          </figure>

          <div className="onas-copy">
            <p className="sec-eyebrow light">Kdo jsme · nová provozovna v Brně</p>
            <h2 className="sec-title light" id="onas-nadpis">
              Jeden z předních autoservisů v Brně a okolí
            </h2>
            <p className="onas-lead">
              Najdete nás pod pojmy autodílna, autoopravna i servisní centrum.
              Ať už tomu říkáte jakkoliv — přivezete auto, my ho spravíme
              a řekneme vám rovnou a lidsky, na čem jste.
            </p>

            <dl className="fakta">
              <div>
                <dt>16</dt>
                <dd>značek se&nbsp;servisní podporou</dd>
              </div>
              <div>
                <dt>3D</dt>
                <dd>měření geometrie podvozku</dd>
              </div>
              <div>
                <dt>Nová</dt>
                <dd>provozovna s&nbsp;větší kapacitou</dd>
              </div>
            </dl>

            <p className="onas-poznamka">
              „Přijeďte se poradit ještě před opravou. Když se cena během
              servisu změní, dozvíte se to od nás dřív, než šroubováky
              zaberou.“
            </p>

            <div className="onas-kontakt" id="nacenit">
              <a className="btn btn-solid" href="tel:+420530513581">Zavolat 530&nbsp;513&nbsp;581</a>
              <a className="btn btn-ghost light" href="mailto:info@avmotors.cz">Napsat na e-mail</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
