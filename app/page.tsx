import React from "react";

export default function Page() {
  const rok = new Date().getFullYear();
  const sezona = `${rok}/${rok + 1}`;

  const sluzby = [
    {
      kod: "KO",
      nazev: "Kontrola a čištění komínu",
      popis:
        "Pravidelná roční kontrola a vymetení sazí. Ať kotel táhne, jak má, a nehrozí požár od dehtu v průduchu.",
    },
    {
      kod: "VL",
      nazev: "Vložkování a frézování",
      popis:
        "Nerezová vložka do starého komína, frézování průduchu na potřebný průměr pro nový spotřebič.",
    },
    {
      kod: "NK",
      nazev: "Nové komíny",
      popis:
        "Postavíme komín na klíč — od paty ve sklepě až po hlavu nad střechou. Tvárnicové i nerezové.",
    },
    {
      kod: "OP",
      nazev: "Opravy komínů",
      popis:
        "Nová hlava, spárování, oplechování, omítka. Zastavíme zatékání i drolení zdiva nad střechou.",
    },
    {
      kod: "VR",
      nazev: "Výchozí revize",
      popis:
        "Revizní zpráva k novému kotli, krbu nebo ke kolaudaci. Vše podle vyhlášky, hned na místě.",
    },
    {
      kod: "PA",
      nazev: "Pasport komínu",
      popis:
        "Kompletní dokumentace stavu, rozměrů a připojených spotřebičů. Přehled, který se hodí i pojišťovně.",
    },
  ];

  const kroky = [
    {
      c: "01",
      nazev: "Zavoláte nebo napíšete",
      popis: "Řeknete, čím topíte a kde bydlíte. Domluvíme termín, který vám sedne.",
    },
    {
      c: "02",
      nazev: "Přijedeme za vámi",
      popis: "Do Brna i okolních obcí, s vlastním nářadím a žebříkem. Bez cestovného navíc.",
    },
    {
      c: "03",
      nazev: "Zkontrolujeme a vymeteme",
      popis: "Prohlédneme celý průduch, vymeteme saze a zkontrolujeme odvod spalin.",
    },
    {
      c: "04",
      nazev: "Dostanete revizní zprávu",
      popis: "Papír, který uzná pojišťovna i hasiči. Předáme ho na místě, ne za týden.",
    },
  ];

  const obce = [
    "Brno-město",
    "Brno-venkov",
    "Bílovice nad Svitavou",
    "Babice nad Svitavou",
    "Kanice",
    "Řícmanice",
    "Ochoz u Brna",
  ];

  return (
    <main className="k-page">
      {/* HERO */}
      <header className="k-hero">
        <nav className="k-nav" aria-label="Hlavní">
          <a className="k-wordmark" href="#top" id="top">
            <span className="k-wordmark-dot" aria-hidden="true" />
            KOMINICTVÍ<span className="k-wordmark-num">24</span>
          </a>
          <div className="k-nav-links">
            <a href="#sluzby">Služby</a>
            <a href="#jak-probiha">Jak to probíhá</a>
            <a href="#kde">Kde působíme</a>
          </div>
          <a className="k-btn k-btn-brass k-nav-cta" href="#objednat">
            Objednat kontrolu
          </a>
        </nav>

        <div className="k-hero-grid">
          <div className="k-hero-copy">
            <p className="k-eyebrow k-rise" style={{ animationDelay: "0.05s" }}>
              Brno &middot; Kominictví &middot; Revize od {rok}
            </p>
            <h1 className="k-h1">
              <span className="k-rise" style={{ animationDelay: "0.12s" }}>
                Čistý komín,
              </span>
              <span
                className="k-rise k-h1-brass"
                style={{ animationDelay: "0.2s" }}
              >
                klidná zima.
              </span>
            </h1>
            <p className="k-lead k-rise" style={{ animationDelay: "0.3s" }}>
              Kontrola, čištění a revize komínů v Brně a okolí. Přijedeme,
              vymeteme saze a vystavíme revizní zprávu, kterou uzná pojišťovna
              i hasiči.
            </p>
            <div
              className="k-hero-actions k-rise"
              style={{ animationDelay: "0.38s" }}
            >
              <a className="k-btn k-btn-brass" href="#objednat">
                Objednat kontrolu komína
              </a>
              <a className="k-btn k-btn-ghost" href="#sluzby">
                Prohlédnout služby
              </a>
            </div>
            <ul
              className="k-chips k-rise"
              style={{ animationDelay: "0.46s" }}
              aria-label="Co u nás dostanete"
            >
              <li>Revizní zpráva hned na místě</li>
              <li>Termín zpravidla do 3 dnů</li>
              <li>Brno-město i venkov</li>
            </ul>
          </div>

          <div className="k-hero-media k-rise" style={{ animationDelay: "0.24s" }}>
            <span className="k-flue-label" aria-hidden="true">
              Revize &middot; Čištění &middot; Vložkování
            </span>
            <figure className="k-hero-figure">
              <img
                src="/hero.webp"
                alt="Kominík při čištění komína na střeše domu v Brně"
                className="k-hero-img"
                width={960}
                height={1200}
              />
            </figure>
          </div>
        </div>
      </header>

      {/* SEKCE 1 — SLUŽBY */}
      <section className="k-sec k-sec-light" id="sluzby" aria-labelledby="sluzby-h">
        <div className="k-sec-head">
          <p className="k-eyebrow k-eyebrow-dark">Ceník začíná u poctivé práce</p>
          <h2 className="k-h2" id="sluzby-h">
            Co pro váš komín uděláme
          </h2>
          <p className="k-sec-intro">
            Od pravidelného vymetení až po stavbu nového komína. Vždy podle
            vyhlášky č. 34/2016 Sb. — ta říká, že komín na pevná paliva se má
            kontrolovat jednou ročně.
          </p>
        </div>

        <div className="k-sec1-grid">
          <ul className="k-services">
            {sluzby.map((s) => (
              <li className="k-service" key={s.kod}>
                <span className="k-service-dot" aria-hidden="true" />
                <span className="k-service-kod">{s.kod}</span>
                <div className="k-service-body">
                  <h3 className="k-service-nazev">{s.nazev}</h3>
                  <p className="k-service-popis">{s.popis}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="k-sec1-figure">
            <img
              src="/section-1.webp"
              alt="Detail kominického nářadí a vymetání sazí z komína"
              className="k-sec1-img"
              width={760}
              height={900}
            />
            <figcaption className="k-figcap">
              Saze a dehet ven z průduchu — přesně to, co v zimě rozhoduje
              o bezpečnosti.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 2 — JAK TO PROBÍHÁ + DŮVĚRA */}
      <section className="k-sec k-sec-dark" id="jak-probiha" aria-labelledby="jak-h">
        <div className="k-sec2-grid">
          <div className="k-sec2-left">
            <p className="k-eyebrow">Bez papírování na vaší straně</p>
            <h2 className="k-h2 k-h2-light" id="jak-h">
              Jak návštěva probíhá
            </h2>
            <ol className="k-steps">
              {kroky.map((k) => (
                <li className="k-step" key={k.c}>
                  <span className="k-step-num">{k.c}</span>
                  <div>
                    <h3 className="k-step-nazev">{k.nazev}</h3>
                    <p className="k-step-popis">{k.popis}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="k-ember">
              Necítí to táhnout nebo vám z komína padají saze? Volejte hned —
              ucpaný průduch neřešte přes zimu sami.
            </p>
          </div>

          <div className="k-sec2-right">
            <figure className="k-sec2-figure">
              <img
                src="/section-2.webp"
                alt="Kominík z Kominictví 24 při práci na komíně rodinného domu"
                className="k-sec2-img"
                width={760}
                height={620}
              />
            </figure>

            <div className="k-card" id="kde">
              <h3 className="k-card-title">Kde působíme</h3>
              <ul className="k-obce" aria-label="Obce, kam jezdíme">
                {obce.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <p className="k-card-note" id="objednat">
                Objednávky na topnou sezónu {sezona} přijímáme průběžně.
                Ozveme se zpravidla do druhého dne.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
