export default function Page() {
  const metody = [
    {
      krok: "01",
      nazev: "Vojtova reflexní lokomoce",
      popis: "Aktivace pohybových vzorů přes reflexní body — pro dospělé i nejmenší děti.",
    },
    {
      krok: "02",
      nazev: "DNS dle prof. Koláře",
      popis: "Dynamická neuromuskulární stabilizace. Trup se učí držet páteř tak, jak to zvládá zdravé dítě.",
    },
    {
      krok: "03",
      nazev: "Metoda Ludmily Mojžíšové",
      popis: "Cvičení pro páteř a pánevní dno — mimo jiné u funkční ženské neplodnosti a bolestí zad.",
    },
    {
      krok: "04",
      nazev: "PNF — Kabatova metoda",
      popis: "Proprioceptivní neuromuskulární facilitace pro obnovu síly po úrazech a operacích.",
    },
    {
      krok: "05",
      nazev: "Fasciální manipulace dle Stecca",
      popis: "Cílená práce s vazivem, které bolest často drží déle než sval sám.",
    },
    {
      krok: "06",
      nazev: "Lymfatické drenáže dle MUDr. Bechyněho",
      popis: "Šetrné ošetření otoků — po operacích i u chronických potíží.",
    },
  ];

  const cenik = [
    { sluzba: "Léčebná tělesná výchova (LTV)", detail: "30 minut", cena: "600 Kč" },
    { sluzba: "Metody na neurofyziologickém podkladě", detail: "30 minut", cena: "750 Kč" },
    { sluzba: "Masáž zad a šíje", detail: "30 minut", cena: "650 Kč" },
    { sluzba: "Laser", detail: "1 sezení", cena: "100 Kč" },
    { sluzba: "Tejpovací páska včetně aplikace", detail: "za 1 cm", cena: "3 Kč" },
    { sluzba: "Výpis ze zdravotnické dokumentace", detail: "—", cena: "100 Kč" },
  ];

  const pojistovny = [
    { kod: "111", nazev: "Všeobecná zdravotní pojišťovna" },
    { kod: "201", nazev: "Vojenská zdravotní pojišťovna" },
    { kod: "205", nazev: "Česká průmyslová zdravotní pojišťovna" },
    { kod: "207", nazev: "Oborová zdravotní pojišťovna" },
    { kod: "211", nazev: "Zdravotní pojišťovna ministerstva vnitra" },
  ];

  return (
    <main className="rc">
      <header className="rc-nav">
        <a className="rc-brand" href="#uvod" aria-label="Rehabilitační centrum Šumava">
          <span className="rc-brand-mark" aria-hidden="true">RC</span>
          <span className="rc-brand-text">
            <span className="rc-brand-line1">Rehabilitační centrum</span>
            <span className="rc-brand-line2">Šumava</span>
          </span>
        </a>
        <nav className="rc-links" aria-label="Hlavní navigace">
          <a href="#terapie">Terapie</a>
          <a href="#o-nas">O nás</a>
          <a href="#cenik">Ceník</a>
        </nav>
        <a className="rc-phone" href="tel:+420385340620">
          <span aria-hidden="true">☎</span> 385 340 620
        </a>
      </header>

      <section className="rc-hero" id="uvod">
        <div className="rc-hero-media">
          <img
            src="/hero.webp"
            alt="Fyzioterapeut při práci s klientem v Rehabilitačním centru Šumava v Českých Budějovicích"
            className="rc-hero-img"
            width={1600}
            height={1000}
          />
        </div>
        <div className="rc-hero-inner">
          <p className="rc-eyebrow">České Budějovice · od roku 1997</p>
          <blockquote className="rc-hero-quote">
            <span className="rc-quote-lead">„Chce-li člověk odstranit horu,</span>
            <span className="rc-quote-tail">musí začít odnášet malé kamení.“</span>
          </blockquote>
          <p className="rc-hero-lead">
            Bolest zad ani ztuhlá ramena nezmizí přes noc. Přepisujeme motorické
            zlozvyky trpělivě, krok za krokem — a učíme vaše tělo, jak si pomoct samo.
          </p>
          <div className="rc-hero-cta">
            <a className="rc-btn" href="tel:+420385340620">Zavolat a domluvit vyšetření</a>
            <a className="rc-btn rc-btn-ghost" href="#terapie">Jak pracujeme</a>
          </div>
        </div>
      </section>

      <section className="rc-section rc-terapie" id="terapie">
        <div className="rc-section-head">
          <p className="rc-eyebrow rc-eyebrow-dark">Naše metody · kamínek po kamínku</p>
          <h2 className="rc-h2">
            Dospělí i děti. Sportovci, kancelář i výroba.
          </h2>
          <p className="rc-section-intro">
            Řešíme potíže ortopedické, traumatologické, neurologické, gynekologické
            i respirační. Manuální práci vždy propojujeme s vaší vlastní aktivitou —
            bez ní hora nezmizí. Pracujeme těmito koncepty:
          </p>
        </div>

        <ol className="rc-methods">
          {metody.map((m) => (
            <li className="rc-method" key={m.krok}>
              <span className="rc-method-num">{m.krok}</span>
              <div>
                <h3 className="rc-method-name">{m.nazev}</h3>
                <p className="rc-method-desc">{m.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="rc-band">
          <img
            src="/section-1.webp"
            alt="Cvičební prostor rehabilitačního centra s pomůckami pro léčebnou tělesnou výchovu"
            className="rc-band-img"
            width={1200}
            height={800}
          />
          <div className="rc-band-text">
            <h3 className="rc-h3">První návštěva krok za krokem</h3>
            <p>
              S doporučením od svého lékaře si u nás domluvíte termín vyšetření.
              Rehabilitační lékař vás komplexně vyšetří a doporučí terapii u jednoho
              z našich fyzioterapeutů — nebo předepíše poukaz FT do místa vašeho bydliště.
            </p>
            <ul className="rc-check">
              <li>Komplexní vyšetření rehabilitačním lékařem</li>
              <li>Úzká spolupráce s vlastním pracovištěm fyzioterapie</li>
              <li>Zásady ergonomie stoje, sedu a zdravého spaní</li>
            </ul>
            <a className="rc-btn" href="tel:+420385340620">Chci si domluvit návštěvu</a>
          </div>
        </div>
      </section>

      <section className="rc-section rc-about" id="o-nas">
        <div className="rc-about-grid">
          <div className="rc-about-media">
            <img
              src="/section-2.webp"
              alt="Interiér Rehabilitačního centra Šumava"
              className="rc-about-img"
              width={1000}
              height={1200}
            />
          </div>
          <div className="rc-about-text">
            <p className="rc-eyebrow rc-eyebrow-dark">O nás</p>
            <h2 className="rc-h2">
              Založeno 1997. MUDr. Roman Hrdý a fyzioterapeutka Vlasta Caplová.
            </h2>
            <p>
              Jsme soukromé nestátní zdravotnické zařízení. Nejde nám o rychlé úlevy,
              které za týden pominou — hledáme příčinu bolesti a řešíme svalové
              dysbalance systémově. Snažíme se být vaším průvodcem: vysvětlit, proč
              stav vznikl, a najít cestu s využitím vašich vlastních pohybových
              dovedností a svalové koordinace.
            </p>

            <div className="rc-insurance">
              <p className="rc-insurance-label">Jsme smluvním partnerem pojišťoven</p>
              <ul className="rc-insurance-list">
                {pojistovny.map((p) => (
                  <li key={p.kod}>
                    <span className="rc-ins-kod">{p.kod}</span>
                    <span className="rc-ins-name">{p.nazev}</span>
                  </li>
                ))}
              </ul>
              <p className="rc-insurance-note">
                Léčbu s poukazem FT od vašeho lékaře hradí zdravotní pojišťovna.
                Ošetření za přímou platbu poskytneme dle ceníku po předchozí terapii
                na našem pracovišti.
              </p>
            </div>
          </div>
        </div>

        <div className="rc-cenik" id="cenik">
          <div className="rc-cenik-head">
            <h3 className="rc-h3">Ceník služeb za přímou platbu</h3>
            <p className="rc-cenik-note">
              Rezervovaný termín je závazný. Omluvte se prosím nejpozději 24 hodin
              předem — jinak účtujeme storno ve výši ceny terapie.
            </p>
          </div>
          <ul className="rc-cenik-list">
            {cenik.map((c) => (
              <li className="rc-cenik-row" key={c.sluzba}>
                <span className="rc-cenik-sluzba">{c.sluzba}</span>
                <span className="rc-cenik-detail">{c.detail}</span>
                <span className="rc-cenik-cena">{c.cena}</span>
              </li>
            ))}
          </ul>
        </div>

        <address className="rc-kontakt">
          <div>
            <p className="rc-eyebrow rc-eyebrow-dark">Kde nás najdete</p>
            <p className="rc-adr">
              Rehabilitační centrum Šumava s.r.o.<br />
              V. Talicha 11, 370 05 České Budějovice
            </p>
            <p className="rc-adr-small">Fakturační adresa: V. Nezvala 1707/30, 370 06 České Budějovice · IČO 19470983</p>
          </div>
          <a className="rc-btn rc-btn-lg" href="tel:+420385340620">☎ 385 340 620</a>
        </address>
      </section>
    </main>
  );
}
