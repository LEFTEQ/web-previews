const sluzby = [
  {
    medium: "PLYN",
    nazev: "Plynové kotelny a rozvody",
    popis:
      "Montáž a rekonstrukce plynových kotelen, domovní rozvody plynu, připojení spotřebičů. Kondenzační kotle navrhujeme na míru domu — ne podle katalogu.",
    detaily: ["Kondenzační kotle", "Domovní plynovody", "Revize a tlakové zkoušky"],
  },
  {
    medium: "TOPENÍ",
    nazev: "Otopné soustavy",
    popis:
      "Nové otopné soustavy i výměny starých rozvodů. Podlahové topení, otopná tělesa, hydraulické vyvážení, aby každá místnost topila tak, jak má.",
    detaily: ["Podlahové vytápění", "Výměna radiátorů", "Tepelná čerpadla"],
  },
  {
    medium: "VODA",
    nazev: "Vodoinstalace a ohřev",
    popis:
      "Rozvody teplé i studené vody, zásobníkové ohřívače, solární ohřev vody. Čisté řemeslo od stoupačky po baterii.",
    detaily: ["Rozvody vody", "Solární systémy", "Zásobníky TUV"],
  },
  {
    medium: "PROJEKCE",
    nazev: "Projekční kancelář TZB",
    popis:
      "Vlastní projekce technického zařízení budov v AutoCADu a Revitu. Projekt, výkaz výměr i vyřízení podkladů pro Novou zelenou úsporám.",
    detaily: ["Projekty vytápění a plynu", "Dokumentace pro NZÚ", "Autorský dozor"],
  },
];

const duvody = [
  {
    cislo: "35 mm",
    titulek: "Přesnost, na které stavíme",
    text: "Plynové potrubí nesnese odhad. Každý spoj, každý spád, každá dimenze má v našich projektech své číslo — a montáž ho dodrží.",
  },
  {
    cislo: "1 firma",
    titulek: "Projekt i montáž pod jednou střechou",
    text: "Projektant a montážník u nás sedí u jednoho stolu. Nemusíte nic přenášet mezi firmami — co nakreslíme, to také postavíme a zprovozníme.",
  },
  {
    cislo: "Hradec",
    titulek: "Jsme odsud",
    text: "Kancelář máme na Kubelíkově ulici v Hradci Králové. Jezdíme po Hradecku a okolí — když se něco děje, jsme u vás rychle, ne za týden.",
  },
];

export default function Page() {
  return (
    <main className="vk">
      {/* ===== HERO ===== */}
      <header className="vk-hero">
        <div className="vk-hero-top">
          <div className="vk-wordmark" aria-label="VIK tepelná technika">
            <span className="vk-wordmark-main">VIK</span>
            <span className="vk-wordmark-sub">tepelná&nbsp;technika</span>
          </div>
          <a className="vk-hero-tel" href="tel:+420777716780">
            777 716 780
          </a>
        </div>

        <div className="vk-hero-body">
          <p className="vk-hero-eyebrow">Projekce a montáže · Hradec Králové</p>
          <h1 className="vk-hero-title">
            <span className="vk-line vk-line-1">Topení.</span>
            <span className="vk-line vk-line-2">Voda.</span>
            <span className="vk-line vk-line-3">
              Plyn<span className="vk-flame" aria-hidden="true">.</span>
            </span>
          </h1>
          <p className="vk-hero-lead">
            Tři media, jedno řemeslo. Navrhneme, namontujeme a zprovozníme
            tepelnou techniku vašeho domu — od projektu v Revitu po první
            zapálení kotle.
          </p>
          <div className="vk-hero-actions">
            <a className="vk-btn vk-btn-solid" href="tel:+420777716780">
              Zavolat Jiřímu Vikovi
            </a>
            <a className="vk-btn vk-btn-ghost" href="mailto:jiri.vik@vik.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        {/* signature: schéma rozvodů — tři média jako potrubní trasy */}
        <div className="vk-pipes" aria-hidden="true">
          <svg viewBox="0 0 1200 190" preserveAspectRatio="none" focusable="false">
            {/* TOPENÍ — červená trasa */}
            <path
              className="vk-pipe vk-pipe-heat"
              d="M0,40 H320 q24,0 24,24 V120 q0,24 24,24 H1200"
            />
            {/* VODA — modrá trasa */}
            <path
              className="vk-pipe vk-pipe-water"
              d="M0,95 H560 q24,0 24,-24 V50 q0,-24 24,-24 H1200"
            />
            {/* PLYN — žlutá trasa (v ČR se plynové potrubí značí žlutě) */}
            <path
              className="vk-pipe vk-pipe-gas"
              d="M0,150 H820 q24,0 24,-24 V96 q0,-24 24,-24 H1200"
            />
            {/* uzavírací ventily na trasách */}
            <g className="vk-valves">
              <circle cx="320" cy="40" r="7" className="vk-valve vk-valve-heat" />
              <circle cx="608" cy="26" r="7" className="vk-valve vk-valve-water" />
              <circle cx="868" cy="72" r="7" className="vk-valve vk-valve-gas" />
            </g>
          </svg>
          <div className="vk-pipes-legend">
            <span className="vk-leg vk-leg-heat">topná voda</span>
            <span className="vk-leg vk-leg-water">pitná voda</span>
            <span className="vk-leg vk-leg-gas">zemní plyn</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="vk-sluzby" aria-labelledby="sluzby-h">
        <div className="vk-section-head">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p>
            Rodinné domy, bytovky i menší provozy na Hradecku. Každou zakázku
            vedeme od výkresu po předávací protokol.
          </p>
        </div>
        <div className="vk-sluzby-grid">
          {sluzby.map((s) => (
            <article className="vk-karta" key={s.medium} data-medium={s.medium}>
              <p className="vk-karta-medium">{s.medium}</p>
              <h3>{s.nazev}</h3>
              <p className="vk-karta-popis">{s.popis}</p>
              <ul className="vk-karta-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="vk-duvera" aria-labelledby="duvera-h">
        <div className="vk-section-head vk-section-head-inverse">
          <h2 id="duvera-h">Proč Vik, a ne katalogová firma</h2>
          <p>
            Zavedená hradecká projekční kancelář s vlastní montážní partou.
            Malý tým, který znáte jménem.
          </p>
        </div>
        <div className="vk-duvody">
          {duvody.map((d) => (
            <div className="vk-duvod" key={d.titulek}>
              <p className="vk-duvod-cislo">{d.cislo}</p>
              <h3>{d.titulek}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
        <div className="vk-vizitka">
          <p className="vk-vizitka-label">Kde nás najdete</p>
          <p className="vk-vizitka-adresa">
            Kubelíkova 467, 500 03 Hradec Králové
          </p>
          <p className="vk-vizitka-kontakt">
            <a href="tel:+420495407311">495 407 311</a>
            <span aria-hidden="true"> · </span>
            <a href="mailto:jiri.vik@vik.cz">jiri.vik@vik.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}
