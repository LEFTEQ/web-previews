export default function Page() {
  const sluzby = [
    {
      kod: "CMYK",
      barva: "tm-c",
      nazev: "Renovace tonerů a cartridgí",
      popis:
        "Váš prázdný toner rozebereme, vyměníme opotřebené díly, doplníme prášek a otestujeme na zkušební tiskárně. Ušetříte 40–60 % oproti originálu — a tisk poznáte jen podle nižší faktury.",
      detail: "HP · Canon · Brother · Xerox · Kyocera",
    },
    {
      kod: "C",
      barva: "tm-c",
      nazev: "Kompatibilní a originální náplně",
      popis:
        "Skladem držíme přes 800 typů tonerů a inkoustů. Objednáte do 14:00, po Hradci Králové vezeme ještě týž den — vlastním rozvozem, ne kurýrem.",
      detail: "Rozvoz po HK zdarma od 500 Kč",
    },
    {
      kod: "M",
      barva: "tm-m",
      nazev: "Servis tiskáren",
      popis:
        "Pruhuje, zasekává papír, hlásí chybu? Přijedeme k vám do firmy, závadu najdeme na místě a většinu oprav zvládneme do 48 hodin. Na dobu opravy půjčíme náhradní stroj.",
      detail: "Výjezd po Hradci a okolí do 30 km",
    },
    {
      kod: "Y",
      barva: "tm-y",
      nazev: "Pronájem a správa tisku",
      popis:
        "Tiskárnu vám pronajmeme včetně tonerů a servisu za pevnou cenu za stránku. Vy tisknete, my hlídáme, aby bylo čím. Žádné skladování náplní, žádné překvapení na faktuře.",
      detail: "Od 0,29 Kč za černobílou stránku",
    },
  ];

  const duvody = [
    {
      cislo: "18 let",
      text: "renovujeme tonery ve stejné dílně na Pouchovské. Kdo u nás nakupoval v roce 2007, mluví dnes se stejnými lidmi.",
    },
    {
      cislo: "800+",
      text: "typů náplní skladem. Nečekáte na objednávku z centrálního skladu — většinu vezeme hned.",
    },
    {
      cislo: "48 h",
      text: "je náš standard na opravu tiskárny. Když to trvá déle, tisknete zatím na našem zápůjčním stroji.",
    },
    {
      cislo: "0 Kč",
      text: "za rozvoz po Hradci Králové při objednávce nad 500 Kč. Prázdné tonery od vás odvezeme k renovaci zdarma.",
    },
  ];

  return (
    <main className="tm">
      {/* ===== HERO ===== */}
      <header className="tm-hero">
        <div className="tm-hero-inner">
          <div className="tm-brandline">
            <span className="tm-wordmark" aria-label="Tonermax">
              TONER<em>MAX</em>
            </span>
            <span className="tm-brand-note">tonery · tiskárny · Hradec Králové</span>
          </div>

          <h1 className="tm-h1">
            <span className="tm-h1-row tm-anim-1">
              Prázdný toner<span className="tm-h1-dot tm-dot-c" aria-hidden="true"></span>
            </span>
            <span className="tm-h1-row tm-anim-2">
              není odpad<span className="tm-h1-dot tm-dot-m" aria-hidden="true"></span>
            </span>
            <span className="tm-h1-row tm-h1-accent tm-anim-3">
              Naplníme ho znovu<span className="tm-h1-dot tm-dot-y" aria-hidden="true"></span>
            </span>
          </h1>

          <p className="tm-lede tm-anim-4">
            Renovace tonerů, náplně skladem a servis tiskáren pro firmy i domácnosti
            v Hradci Králové. Objednáte dopoledne, odpoledne tisknete.
          </p>

          <div className="tm-hero-cta tm-anim-5">
            <a className="tm-btn tm-btn-primary" href="#sluzby">
              Co pro vás uděláme
            </a>
            <a className="tm-btn tm-btn-ghost" href="tel:+420495000000">
              Zavolat dílnu
            </a>
          </div>
        </div>

        {/* Signature: kontrolní tiskový pruh CMYK — jako na okraji každého tiskového archu */}
        <div className="tm-calibration" aria-hidden="true">
          <span className="tm-cal tm-cal-c"></span>
          <span className="tm-cal tm-cal-m"></span>
          <span className="tm-cal tm-cal-y"></span>
          <span className="tm-cal tm-cal-k"></span>
          <span className="tm-cal tm-cal-c"></span>
          <span className="tm-cal tm-cal-m"></span>
          <span className="tm-cal tm-cal-y"></span>
          <span className="tm-cal tm-cal-k"></span>
        </div>
        <div className="tm-regmarks" aria-hidden="true">
          <span>C 100</span>
          <span>M 100</span>
          <span>Y 100</span>
          <span>K 100</span>
          <span className="tm-regmark-loc">50.2288 N · 15.8500 E</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="tm-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="tm-section-head">
          <p className="tm-eyebrow">
            <span className="tm-eyebrow-chip tm-chip-k" aria-hidden="true"></span>
            Co děláme
          </p>
          <h2 className="tm-h2" id="sluzby-h">
            Čtyři služby.{" "}
            <span className="tm-h2-quiet">Jako čtyři barvy v tiskárně — potřebujete většinou všechny.</span>
          </h2>
        </div>

        <div className="tm-cards">
          {sluzby.map((s) => (
            <article className="tm-card" key={s.nazev}>
              <div className={`tm-card-tab ${s.barva}`} aria-hidden="true"></div>
              <h3 className="tm-card-title">{s.nazev}</h3>
              <p className="tm-card-text">{s.popis}</p>
              <p className="tm-card-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="tm-section tm-section-dark" aria-labelledby="duvera-h">
        <div className="tm-section-head">
          <p className="tm-eyebrow tm-eyebrow-light">
            <span className="tm-eyebrow-chip tm-chip-y" aria-hidden="true"></span>
            Proč Tonermax
          </p>
          <h2 className="tm-h2 tm-h2-light" id="duvera-h">
            Dílna na Pouchovské, ne e-shop bez tváře.
          </h2>
          <p className="tm-dark-lede">
            Tonery renovujeme vlastníma rukama v Hradci Králové. Každý kus projde
            zkušebním tiskem, než ho vezeme k vám — proto na renovované tonery
            dáváme stejnou záruku jako na nové.
          </p>
        </div>

        <dl className="tm-facts">
          {duvody.map((d) => (
            <div className="tm-fact" key={d.cislo}>
              <dt className="tm-fact-num">{d.cislo}</dt>
              <dd className="tm-fact-text">{d.text}</dd>
            </div>
          ))}
        </dl>

        <figure className="tm-quote">
          <blockquote>
            <p>
              „Tiskneme přes tři tisíce stran měsíčně a od přechodu na renovované
              tonery od Tonermaxu jsme nepoznali rozdíl — kromě toho, že platíme
              zhruba polovinu. Když se něco zadrhne, do dvou dnů je to vyřešené.“
            </p>
          </blockquote>
          <figcaption>
            <strong>Účetní kancelář, Hradec Králové — Slezské Předměstí</strong>
            <span>zákazník od roku 2019</span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
