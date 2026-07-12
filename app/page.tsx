import React from "react";

export default function Page() {
  const rigs = [
    {
      code: "WIRTH ECO 1",
      chassis: "Kolový podvozek Tatra 815",
      spec: [
        ["Hmotnost soupravy", "16 000 kg"],
        ["Jádrové vrtání TK", "76–275 mm"],
        ["Hloubka vrtání", "do 30 m"],
        ["Pracovní pažení", "175 / 245 mm"],
      ],
    },
    {
      code: "COMACCHIO GEO 205",
      chassis: "Pásový podvozek",
      spec: [
        ["Hmotnost soupravy", "2 900 kg"],
        ["Jádrové vrtání TK", "76–195 mm, DIA 76 mm"],
        ["Hloubka vrtání", "do 30 m"],
        ["Pracovní pažení", "175 mm"],
      ],
    },
    {
      code: "MAN LE 8.140",
      chassis: "Nosič kontejnerů",
      spec: [
        ["Provozní hmotnost", "3 270 kg"],
        ["Největší povolená", "8 400 kg"],
        ["Rozměry V/Š/D", "2400 / 2300 / 5550 mm"],
        ["Role", "Zázemí a přeprava"],
      ],
    },
  ];

  const works = [
    {
      depth: "01",
      title: "Průzkum a jádro",
      items: [
        "Jádrové průzkumné vrty",
        "Odběry neporušených vzorků",
        "Inklinometrické vrty",
      ],
    },
    {
      depth: "02",
      title: "Voda a vsak",
      items: [
        "Vrty pro vsakovací zkoušky",
        "Hydrogeologický průzkum",
        "Monitoring podzemní vody",
      ],
    },
    {
      depth: "03",
      title: "Studny a založení",
      items: [
        "Vrtané studny",
        "Mikropiloty",
        "Odvodňovací vrty",
      ],
    },
  ];

  return (
    <main className="geo">
      <header className="geo-topbar">
        <a className="geo-mark" href="#top" aria-label="GEOSUR CZ — úvod">
          <span className="geo-mark-a">GEO</span>
          <span className="geo-mark-b">SUR</span>
          <span className="geo-mark-depth">/ vrty do 30 m</span>
        </a>
        <a className="geo-call" href="tel:+420728406751">
          +420 728 406 751
        </a>
      </header>

      <section className="geo-hero" id="top">
        <div className="geo-hero-media">
          <img
            src="/hero.webp"
            alt="Vrtná souprava GEOSUR CZ při jádrovém průzkumném vrtu v terénu"
            className="geo-hero-img"
          />
        </div>

        <div className="geo-hero-body">
          <p className="geo-eyebrow">Vrtné práce · Praha a okolí</p>
          <h1 className="geo-title">
            Ptáme se země,
            <br />
            co má pod povrchem.
          </h1>
          <p className="geo-lede">
            Inženýrskogeologický, geotechnický, hydrogeologický a ložiskový
            průzkum. Jádrové vrty, vrtané studny i vsakovací zkoušky — od
            posedu soupravy po předání vzorku.
          </p>
          <div className="geo-hero-cta">
            <a className="geo-btn" href="tel:+420728406751">Zavolat vrtmistrovi</a>
            <a className="geo-btn geo-btn-ghost" href="#cinnosti">Co vrtáme</a>
          </div>
        </div>

        <ul className="geo-corelog" aria-label="Profil vrtu">
          <li><span className="geo-mark-depth">0 m</span> ornice</li>
          <li><span className="geo-mark-depth">6 m</span> jíly, štěrk</li>
          <li><span className="geo-mark-depth">18 m</span> zvětralá skála</li>
          <li><span className="geo-mark-depth">30 m</span> zvodeň</li>
        </ul>
      </section>

      <section className="geo-section geo-works" id="cinnosti">
        <div className="geo-sec-head">
          <p className="geo-eyebrow">Provádíme</p>
          <h2 className="geo-h2">Tři hloubky jednoho řemesla</h2>
        </div>

        <div className="geo-works-grid">
          <img
            src="/section-1.webp"
            alt="Detail jádrového vrtání a odběru vzorku horniny"
            className="geo-works-img"
          />
          <ol className="geo-works-list">
            {works.map((w) => (
              <li className="geo-work" key={w.depth}>
                <span className="geo-work-num">{w.depth}</span>
                <div className="geo-work-text">
                  <h3 className="geo-work-title">{w.title}</h3>
                  <ul>
                    {w.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="geo-section geo-fleet" id="vybaveni">
        <div className="geo-sec-head">
          <p className="geo-eyebrow">Technické vybavení</p>
          <h2 className="geo-h2">Soupravy, které si na místo dojedou samy</h2>
          <p className="geo-sec-lede">
            Kolový Tatra 815 na velké vrty, pásový Comacchio tam, kde se běžná
            technika nedostane. Za oběma servisní zázemí z Měšic u Prahy.
          </p>
        </div>

        <div className="geo-fleet-photo">
          <img
            src="/section-2.webp"
            alt="Vrtná souprava GEOSUR CZ na podvozku připravená k práci"
          />
        </div>

        <div className="geo-fleet-grid">
          {rigs.map((r, i) => (
            <article className="geo-rig" key={r.code}>
              <div className="geo-rig-top">
                <span className="geo-rig-index">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="geo-rig-code">{r.code}</h3>
                  <p className="geo-rig-chassis">{r.chassis}</p>
                </div>
              </div>
              <dl className="geo-rig-spec">
                {r.spec.map(([k, v]) => (
                  <div className="geo-rig-row" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="geo-fleet-foot">
          GEOSUR CZ s.r.o. · Servisní místo Hlavní 141/28, 250 64 Měšice ·
          IČO 06852785 · sysel@geosur.cz
        </p>
      </section>
    </main>
  );
}
