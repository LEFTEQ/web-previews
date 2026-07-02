const vrstvy = [
  { nazev: "Nosná zeď", popis: "Původní konstrukce domu — panel, cihla, plynosilikát." },
  { nazev: "Lepicí hmota", popis: "Celoplošné lepení, žádné vzduchové kapsy za izolantem." },
  { nazev: "Izolant", popis: "Fasádní polystyren nebo minerální vata, tloušťka dle výpočtu." },
  { nazev: "Hmoždinky", popis: "Kotvení podle tahových zkoušek přímo na vašem domě." },
  { nazev: "Výztužná vrstva", popis: "Sklotextilní síťovina utopená ve stěrce — proti prasklinám." },
  { nazev: "Omítka", popis: "Silikonová probarvená omítka, zrno a odstín podle vás." },
];

const sluzby = [
  {
    cislo: "λ",
    nazev: "Zateplení fasád",
    popis:
      "Kompletní kontaktní zateplovací systém (ETICS) pro rodinné domy, bytovky i panelové domy. Od tahových zkoušek podkladu po finální omítku — jedna parta, jeden termín, jedna záruka.",
    detail: "Certifikovaný systém, 10 let záruka",
  },
  {
    cislo: "U",
    nazev: "Renovace fasád",
    popis:
      "Starší zateplení nemusíte bourat. Opravíme praskliny, vyměníme poškozené desky, přestěrkujeme a natáhneme novou omítku. Fasáda vypadá jako nová za zlomek ceny.",
    detail: "Včetně mytí a nátěru proti řasám",
  },
  {
    cislo: "kč",
    nazev: "Dotace zateplení",
    popis:
      "Nová zelená úsporám pokryje až polovinu nákladů. Spočítáme, na kolik dosáhnete, připravíme podklady a žádost podáme za vás. Dotaci řešíme u většiny zakázek — známe to nazpaměť.",
    detail: "Žádost vyřídíme bez starostí",
  },
];

const reference = [
  {
    misto: "Bytový dům, Liberec — Rochlice",
    rozsah: "1 850 m² fasády",
    text: "Panelový dům ze 70. let. Zateplení 160 mm, nové parapety a hromosvod. Náklady na teplo klesly o 38 %.",
  },
  {
    misto: "Rodinný dům, Vratislavice nad Nisou",
    rozsah: "240 m² fasády",
    text: "Zateplení šedým polystyrenem včetně soklu a ostění. Hotovo za tři týdny, s dotací 185 000 Kč.",
  },
  {
    misto: "Mateřská škola, Liberec — Ruprechtice",
    rozsah: "920 m² fasády",
    text: "Minerální vata kvůli požárním předpisům, práce o prázdninách. Předáno v termínu před začátkem školního roku.",
  },
];

export default function Page() {
  return (
    <main className="gl">
      {/* ===== HERO ===== */}
      <header className="gl-hero">
        <div className="gl-hero-inner">
          <div className="gl-topbar">
            <span className="gl-wordmark">
              GALLOS<span className="gl-wordmark-dot">·</span>
              <span className="gl-wordmark-sub">zateplování&nbsp;Liberec</span>
            </span>
            <a className="gl-tel" href="tel:+420602288227">
              +420 602 288 227
            </a>
          </div>

          <div className="gl-hero-grid">
            <div className="gl-hero-text">
              <p className="gl-eyebrow">Kontaktní zateplovací systémy · od roku 1998</p>
              <h1 className="gl-h1">
                <span className="gl-h1-line">Šest vrstev</span>
                <span className="gl-h1-line gl-h1-accent">mezi zimou</span>
                <span className="gl-h1-line">a vaším obývákem.</span>
              </h1>
              <p className="gl-lead">
                Zateplujeme domy v Liberci a okolí. Fasáda od nás drží teplo,
                nepraská a vy za ni díky dotaci zaplatíte třeba jen polovinu.
              </p>
              <div className="gl-hero-fakta">
                <div className="gl-fakt">
                  <strong>−40&nbsp;%</strong>
                  <span>běžná úspora nákladů na vytápění</span>
                </div>
                <div className="gl-fakt">
                  <strong>25+ let</strong>
                  <span>zateplujeme pod Ještědem</span>
                </div>
              </div>
            </div>

            {/* Signature: řez zateplenou stěnou */}
            <div className="gl-rez" role="img" aria-label="Schematický řez zateplenou stěnou: šest vrstev od nosné zdi po omítku">
              <p className="gl-rez-titulek">Řez zateplenou stěnou</p>
              <div className="gl-rez-vrstvy">
                {vrstvy.map((v, i) => (
                  <div className="gl-vrstva" key={v.nazev} style={{ animationDelay: `${0.15 * i + 0.3}s` }}>
                    <span className="gl-vrstva-pruh" data-v={i + 1} aria-hidden="true" />
                    <span className="gl-vrstva-nazev">{v.nazev}</span>
                    <span className="gl-vrstva-popis">{v.popis}</span>
                  </div>
                ))}
              </div>
              <div className="gl-rez-teploty" aria-hidden="true">
                <span>−15&nbsp;°C venku</span>
                <span>+21&nbsp;°C doma</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="gl-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="gl-sekce-hlava">
          <h2 id="sluzby-nadpis" className="gl-h2">
            Co pro váš dům uděláme
          </h2>
          <p className="gl-sekce-perex">
            Tři věci, které umíme opravdu dobře. Nic jiného nenabízíme — a proto
            se na výsledek můžete spolehnout.
          </p>
        </div>
        <div className="gl-sluzby-grid">
          {sluzby.map((s) => (
            <article className="gl-karta" key={s.nazev}>
              <span className="gl-karta-znak" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="gl-h3">{s.nazev}</h3>
              <p className="gl-karta-popis">{s.popis}</p>
              <p className="gl-karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
        <p className="gl-sluzby-pozn">
          <strong>Nevíte, jaká tloušťka izolace dává u vašeho domu smysl?</strong>{" "}
          Přijedeme, změříme a spočítáme návratnost — v Liberci a do 30 km zdarma.
        </p>
      </section>

      {/* ===== REFERENCE ===== */}
      <section className="gl-reference" aria-labelledby="reference-nadpis">
        <div className="gl-sekce-hlava">
          <h2 id="reference-nadpis" className="gl-h2">
            Fasády, kolem kterých chodíte
          </h2>
          <p className="gl-sekce-perex">
            Většinu našich zakázek najdete přímo v Liberci. Rádi vám dáme adresy
            a kontakty na majitele — zeptejte se jich, jak se s námi pracovalo.
          </p>
        </div>
        <div className="gl-ref-seznam">
          {reference.map((r) => (
            <article className="gl-ref" key={r.misto}>
              <div className="gl-ref-hlava">
                <h3 className="gl-h3">{r.misto}</h3>
                <span className="gl-ref-rozsah">{r.rozsah}</span>
              </div>
              <p className="gl-ref-text">{r.text}</p>
            </article>
          ))}
        </div>
        <div className="gl-duvera">
          <p className="gl-duvera-radek">
            GALLOS s.r.o. · České mládeže 461, Liberec 8 · certifikovaní
            realizátoři zateplovacích systémů · pojištění odpovědnosti do 10 mil. Kč
          </p>
        </div>
      </section>
    </main>
  );
}
