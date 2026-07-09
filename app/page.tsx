import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      key: "voda",
      dim: "Js 3\"",
      title: "Rozvody vody",
      lead: "Plast, měď, pozink — nová montáž, rekonstrukce i oprava.",
      items: [
        "Montáže a rekonstrukce rozvodů studené a teplé vody",
        "Opravy odpadů a kanalizace v PVC a HT",
        "Dodávka, montáž a výměna vodoměrů včetně příslušenství",
      ],
    },
    {
      key: "topeni",
      dim: "ÚT",
      title: "Topenářské práce",
      lead: "Rozvody a systémy ústředního topení z oceli a mědi.",
      items: [
        "Dodávka a montáž topenářských rozvodů a systémů ÚT",
        "Údržba a servisní opravy topných systémů",
        "Napojení radiátorů, odvzdušnění, tlakové zkoušky",
      ],
    },
    {
      key: "rekonstrukce",
      dim: "m²",
      title: "Rekonstrukce jader",
      lead: "Bytová jádra, koupelny a WC na klíč.",
      items: [
        "Kompletní rekonstrukce bytových jader",
        "Koupelny a WC — od demontáže po obklad",
        "Kanalizační přípojky a jejich napojení",
      ],
    },
  ];

  const zajistime = [
    "plynařské",
    "kominické",
    "elektrikářské",
    "zednické",
    "obkladačské",
    "malířské",
    "stolařské",
    "projektová dokumentace",
  ];

  const reference = [
    { adresa: "Syllabova 25, 27, 29, 31", mc: "Ostrava-Vítkovice", typ: "GO rozvodů vody" },
    { adresa: "U cementárny 29, 31", mc: "Ostrava-Vítkovice", typ: "GO rozvodů vody" },
    { adresa: "Ženíškova 5, 7, 9", mc: "Ostrava 1", typ: "GO rozvodů vody" },
    { adresa: "Zborovská 8, 8a", mc: "Ostrava 1", typ: "GO rozvodů vody" },
    { adresa: "Slavíčková 12, 14, 16", mc: "Ostrava 1", typ: "GO rozvodů vody" },
    { adresa: "Gregorova 10, 12, 14", mc: "Ostrava 1", typ: "GO rozvodů vody" },
    { adresa: "Ocelářská 41, 43, 45, 47", mc: "Ostrava-Vítkovice", typ: "Výměna vodoměrů" },
  ];

  return (
    <main className="pc">
      <header className="pc-top">
        <a className="pc-mark" href="#" aria-label="Instalatérství Pačan, Ostrava">
          <span className="pc-mark-pipe" aria-hidden="true" />
          <span className="pc-mark-txt">
            <b>PAČAN</b>
            <i>instalatérství &amp; topenářství</i>
          </span>
        </a>
        <a className="pc-call" href="tel:+420603429241">
          <span className="pc-call-lbl">Havárie? Zavolejte</span>
          <span className="pc-call-num">603 429 241</span>
        </a>
      </header>

      <section className="pc-hero">
        <div className="pc-hero-media">
          <img
            src="/hero.webp"
            alt="Nové měděné a plastové rozvody vody a topení v rekonstruovaném bytovém jádru"
            className="pc-hero-img"
          />
          <div className="pc-hero-grad" aria-hidden="true" />
        </div>

        <div className="pc-hero-body">
          <p className="pc-eyebrow">
            <span className="pc-since">od 1993</span>
            Ostrava · Poruba &amp; Vítkovice
          </p>
          <h1 className="pc-h1">
            Voda a&nbsp;topení,
            <br />
            co&nbsp;<span className="pc-h1-accent">drží spoje</span>
            <br />
            třicet let.
          </h1>
          <p className="pc-hero-lead">
            Miroslav Pačan spravuje rozvody vody, kanalizaci a&nbsp;ústřední topení
            pro bytová družstva, správce domů i&nbsp;jednotlivé byty v&nbsp;Ostravě.
            Od prasklé stoupačky po&nbsp;kompletní rekonstrukci jádra.
          </p>
          <div className="pc-hero-cta">
            <a className="pc-btn" href="tel:+420603429241">Zavolat instalatéra</a>
            <a className="pc-btn pc-btn-ghost" href="mailto:instalaterstvi@mpacan.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="pc-services" aria-labelledby="sluzby-nadpis">
        <div className="pc-sec-head">
          <p className="pc-sec-kicker">Co u&nbsp;nás objednáte</p>
          <h2 className="pc-h2" id="sluzby-nadpis">
            Tři řemesla<br />pod jednou trubkou
          </h2>
          <p className="pc-sec-note">
            Instalatér, topenář a&nbsp;parta na&nbsp;rekonstrukce. Plynaře, kominíka,
            elektrikáře i&nbsp;obkladače k&nbsp;tomu zajistíme, ať nemusíte shánět firmu
            za&nbsp;firmou.
          </p>
        </div>

        <ol className="pc-cards">
          {services.map((s, i) => (
            <li className="pc-card" key={s.key}>
              <div className="pc-card-top">
                <span className="pc-card-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="pc-card-dim">{s.dim}</span>
              </div>
              <h3 className="pc-card-title">{s.title}</h3>
              <p className="pc-card-lead">{s.lead}</p>
              <ul className="pc-card-list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="pc-zajistime">
          <span className="pc-zajistime-lbl">Zajistíme i&nbsp;navazující práce:</span>
          <ul className="pc-tags">
            {zajistime.map((z) => (
              <li className="pc-tag" key={z}>{z}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pc-trust" aria-labelledby="onas-nadpis">
        <div className="pc-trust-grid">
          <div className="pc-trust-media">
            <img
              src="/section-1.webp"
              alt="Rekonstruovaná koupelna s novým obkladem a instalací"
              className="pc-trust-img"
            />
            <img
              src="/section-2.webp"
              alt="Detail montáže topenářského rozvodu z mědi"
              className="pc-trust-img pc-trust-img-sm"
            />
          </div>

          <div className="pc-trust-body">
            <p className="pc-sec-kicker">Kdo přijede</p>
            <h2 className="pc-h2" id="onas-nadpis">
              Malá firma,<br />rychlý příjezd
            </h2>
            <p className="pc-trust-lead">
              Od roku 1993 pracujeme hlavně pro stavební družstva, realitní kanceláře
              a&nbsp;správy domů — proto víme, jak se dělá výměna stoupaček
              v&nbsp;obydleném domě, aby lidem tekla voda co&nbsp;nejdřív.
              Včasná oprava šetří peníze a&nbsp;předchází haváriím.
            </p>

            <dl className="pc-facts">
              <div className="pc-fact">
                <dt>Na trhu</dt>
                <dd>od&nbsp;1993</dd>
              </div>
              <div className="pc-fact">
                <dt>Kde pracujeme</dt>
                <dd>Ostrava a&nbsp;okolí</dd>
              </div>
              <div className="pc-fact">
                <dt>Sídlo firmy</dt>
                <dd>Zengrova 14, Vítkovice</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="pc-ref">
          <div className="pc-ref-head">
            <h3 className="pc-ref-title">Vybrané realizace</h3>
            <p className="pc-ref-note">Generální opravy rozvodů vody napříč ostravskými domy.</p>
          </div>
          <ul className="pc-ref-list">
            {reference.map((r) => (
              <li className="pc-ref-item" key={r.adresa}>
                <span className="pc-ref-typ">{r.typ}</span>
                <span className="pc-ref-adr">{r.adresa}</span>
                <span className="pc-ref-mc">{r.mc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
