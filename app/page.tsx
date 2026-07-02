export default function Page() {
  const sluzby = [
    {
      kod: "KAROSÁRNA",
      nazev: "Rovnání a výměna karosářských dílů",
      popis:
        "Promáčklý blatník, pokřivený práh nebo poškozený sloupek po nehodě. Díl vyrovnáme na rovnacím rámu, nebo vyměníme a přivaříme nový — vždy podle rozměrů výrobce.",
      detaily: ["měření geometrie karoserie", "bodové i MIG/MAG svařování", "výměna prahů a lemů"],
    },
    {
      kod: "PO NEHODĚ",
      nazev: "Kompletní oprava po dopravní nehodě",
      popis:
        "Auto od nás odjede tak, jak vypadalo před nehodou. Vyřídíme za vás komunikaci s pojišťovnou, doložíme fotodokumentaci a opravu provedeme na jednom místě.",
      detaily: ["likvidace pojistné události", "fotodokumentace pro pojišťovnu", "náhradní vozidlo po dobu opravy"],
    },
    {
      kod: "LAKOVNA",
      nazev: "Lakování a lokální opravy laku",
      popis:
        "Namícháme přesný odstín podle kódu barvy vašeho vozu. Lakujeme celé díly i lokálně — škrábanec na dveřích nemusí znamenat přelakování celého boku.",
      detaily: ["míchání barev podle VIN", "opravy oděrek a škrábanců", "leštění a ochrana laku"],
    },
    {
      kod: "KROUPY & RUČNÍ PRÁCE",
      nazev: "Oprava krupobití bez lakování (PDR)",
      popis:
        "Důlky od krup nebo parkovací ťukanec vytáhneme technologií PDR — bez broušení, tmelení a laku. Původní lak zůstane netknutý, což drží cenu vozu.",
      detaily: ["vytahování důlků zezadu dílu", "bez zásahu do originálního laku", "oprava zpravidla do 2 dnů"],
    },
  ];

  const duvody = [
    {
      cislo: "20+",
      jednotka: "let u plechu",
      text: "Autoklempířině se věnujeme přes dvacet let. Poznáme podle zvuku kladiva, kdy je plech vytažený správně.",
    },
    {
      cislo: "48 h",
      jednotka: "do prohlídky",
      text: "Zavolejte a do dvou pracovních dnů máte termín prohlídky vozu i předběžný rozpočet opravy.",
    },
    {
      cislo: "1",
      jednotka: "místo pro vše",
      text: "Klempířina, svařování, lakovna i jednání s pojišťovnou pod jednou střechou v Pardubicích. Nikam vás neposíláme.",
    },
  ];

  const reference = [
    {
      text:
        "Po střetu se srnou jsem myslel, že je kapota na odpis. Kluci ji vyrovnali, přelakovali a vůz mi předali za týden — pojišťovnu vyřídili sami.",
      autor: "Martin K., Pardubice — Škoda Octavia III",
    },
    {
      text:
        "Kroupy mi posely střechu i kapotu důlky. Opravili to metodou PDR bez laku, auto má pořád originální lak a při prodeji to ocenil i kupec.",
      autor: "Jana V., Sezemice — VW Golf VII",
    },
    {
      text:
        "Prorezlé prahy na starší Fabii. Vyvařili nové, ošetřili dutiny voskem a auto prošlo STK bez připomínek. Férová cena, žádné překvapení navíc.",
      autor: "Petr D., Holice — Škoda Fabia II",
    },
  ];

  return (
    <main className="rdm">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-topbar">
          <div className="wordmark" aria-label="RD Montage">
            <span className="wordmark-rd">RD</span>
            <span className="wordmark-sep" aria-hidden="true"></span>
            <span className="wordmark-montage">MONTAGE</span>
          </div>
          <a className="hero-tel" href="tel:+49541915310">
            <span className="hero-tel-label">Dílna Pardubice</span>
            <span className="hero-tel-num">+49 541 915 310 10</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow anim anim-1">
            Autoklempířství &amp; karosárna · Pardubice
          </p>

          <h1 className="hero-title">
            <span className="hero-line anim anim-2">Plech si pamatuje</span>
            <span className="hero-line hero-line-dent anim anim-3">
              každou <em>ránu.</em>
            </span>
            <span className="hero-line anim anim-4">My mu pomůžeme</span>
            <span className="hero-line hero-line-fix anim anim-5">zapomenout.</span>
          </h1>

          <p className="hero-sub anim anim-6">
            Rovnáme, svařujeme a lakujeme karoserie osobních vozů. Od parkovacího
            ťukance po opravu po nehodě — včetně jednání s vaší pojišťovnou.
          </p>

          <div className="hero-actions anim anim-7">
            <a className="btn btn-primary" href="tel:+49541915310">
              Zavolat do dílny
            </a>
            <a className="btn btn-ghost" href="mailto:dilna@rd-montage.cz">
              Poslat fotky poškození
            </a>
          </div>
        </div>

        {/* signature: profil plechu — promáčknutí a jeho vyrovnání */}
        <div className="hero-metal" aria-hidden="true">
          <svg
            className="metal-svg"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path
              className="metal-line metal-line-dent"
              d="M0,60 L340,60 C400,60 430,130 500,130 C570,130 600,60 660,60 L1200,60"
            />
            <path
              className="metal-line metal-line-flat"
              d="M0,60 L1200,60"
            />
            <g className="metal-marks">
              <line x1="500" y1="18" x2="500" y2="44" />
              <circle cx="500" cy="12" r="3" />
            </g>
          </svg>
          <div className="metal-caption">
            <span>stav při přijetí</span>
            <span>→</span>
            <span>stav při předání</span>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sekce sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Co u nás opravíte</p>
          <h2 id="sluzby-nadpis" className="sekce-titul">
            Od důlku po kroupách<br />po vůz po nehodě
          </h2>
        </div>

        <div className="sluzby-mriz">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.kod}>
              <p className="sluzba-kod">{s.kod}</p>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
              <ul className="sluzba-detaily">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="sluzby-pozn">
          Nevíte, do které škatulky vaše poškození patří? Vyfoťte ho mobilem a
          pošlete na{" "}
          <a href="mailto:dilna@rd-montage.cz">dilna@rd-montage.cz</a> — do
          druhého dne odpovíme s odhadem ceny.
        </p>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="sekce duvera" aria-labelledby="duvera-nadpis">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow sekce-eyebrow-svetla">
            Proč nám lidé z Pardubicka svěřují auta
          </p>
          <h2 id="duvera-nadpis" className="sekce-titul sekce-titul-svetly">
            Řemeslo, které je vidět<br />až když není vidět
          </h2>
          <p className="duvera-uvod">
            Dobrou klempířinu poznáte tak, že ji nepoznáte. Rovná plocha, stejná
            spára, odstín laku k nerozeznání. Přesně tak předáváme každé auto.
          </p>
        </div>

        <div className="duvody-mriz">
          {duvody.map((d) => (
            <div className="duvod" key={d.jednotka}>
              <p className="duvod-cislo">
                {d.cislo} <span className="duvod-jednotka">{d.jednotka}</span>
              </p>
              <p className="duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="reference-mriz">
          {reference.map((r) => (
            <figure className="reference" key={r.autor}>
              <blockquote className="reference-text">„{r.text}“</blockquote>
              <figcaption className="reference-autor">{r.autor}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
