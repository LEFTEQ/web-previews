import type { CSSProperties } from "react";

const materials = [
  {
    id: "Ti",
    number: "22",
    name: "Titan Grade 5",
    note: "Implantáty a šrouby pro dentální i ortopedické použití. Tvrdý, biokompatibilní, zrádný na obrábění.",
  },
  {
    id: "Cr",
    number: "—",
    name: "Chirurgická ocel",
    note: "Nástroje a komponenty, které musí zvládnout stovky cyklů sterilizace bez ztráty přesnosti.",
  },
  {
    id: "Al",
    number: "13",
    name: "Hliníkové slitiny",
    note: "Lehké přípravky a pouzdra tam, kde na každém gramu záleží.",
  },
  {
    id: "Ms",
    number: "29",
    name: "Mosaz a nerez",
    note: "Doplňkové díly, závity a spojky s jistotou uložení na setiny.",
  },
];

const reasons = [
  {
    label: "Tolerance",
    value: "±0,005 mm",
    note: "Na tolik hlídáme rozměr u titanových implantátů. Každý kus je měřený, ne odhadovaný.",
  },
  {
    label: "Tradice",
    value: "20+ let",
    note: "Přesná strojírenská výroba v Českých Budějovicích. Zdravotnictví nás naučilo dělat věci bez kompromisu.",
  },
  {
    label: "Série",
    value: "1 – 50 000",
    note: "Od jednoho prototypu po velkosérii. CAD/CAM řetězec zvládne obojí bez ztráty kvality.",
  },
];

export default function Page() {
  return (
    <main className="dm">
      <header className="dm-nav">
        <a className="dm-mark" href="#top" aria-label="Dentamechanik, domů">
          <span className="dm-mark__d">D</span>
          <span className="dm-mark__word">
            DENTA<span className="dm-mark__thin">MECHANIK</span>
          </span>
        </a>
        <nav className="dm-menu" aria-label="Hlavní">
          <a href="#program">Výrobní program</a>
          <a href="#duvod">Proč my</a>
          <a className="dm-menu__cta" href="#poptavka">Poptat výrobu</a>
        </nav>
      </header>

      <section className="dm-hero" id="top">
        <div className="dm-hero__media">
          <img
            src="/hero.webp"
            alt="Soustružený titanový díl pro zdravotnickou výrobu upnutý v CNC stroji"
            className="dm-hero__img"
          />
        </div>
        <div className="dm-hero__panel">
          <p className="dm-eyebrow">České Budějovice · přesná strojírenská výroba</p>
          <h1 className="dm-hero__title">
            Obrábíme titan na<span className="dm-hero__accent"> setiny milimetru</span> —
            pro implantáty, které nesmí selhat.
          </h1>
          <p className="dm-hero__lead">
            Dentamechanik dělá to, čeho se jiné dílny bojí: přesné díly z těžko
            obrobitelných materiálů pro zdravotnictví. Titan, chirurgická ocel,
            nerez — soustružené a frézované na CNC s kontrolou každého kusu.
          </p>
          <div className="dm-hero__actions">
            <a className="dm-btn dm-btn--solid" href="#poptavka">Poslat výkres k ocenění</a>
            <a className="dm-btn dm-btn--ghost" href="#program">Co dokážeme vyrobit</a>
          </div>
          <dl className="dm-hero__spec">
            <div>
              <dt>Tolerance</dt>
              <dd>±0,005 mm</dd>
            </div>
            <div>
              <dt>Materiály</dt>
              <dd>Titan · nerez · ocel</dd>
            </div>
            <div>
              <dt>Série</dt>
              <dd>Kus i velkosérie</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="dm-program" id="program">
        <div className="dm-section-head">
          <p className="dm-eyebrow">Výrobní program</p>
          <h2 className="dm-h2">Čtyři kovy, které umíme zkrotit</h2>
          <p className="dm-section-sub">
            Každý materiál se chová jinak a každý vyžaduje jiné otáčky, chlazení
            i nástroj. Tady je to, s čím pracujeme denně.
          </p>
        </div>

        <ul className="dm-grid">
          {materials.map((m, i) => (
            <li className="dm-card" key={m.id} style={{ "--i": i } as CSSProperties}>
              <span className="dm-card__symbol" aria-hidden="true">
                <span className="dm-card__num">{m.number}</span>
                <span className="dm-card__id">{m.id}</span>
              </span>
              <h3 className="dm-card__name">{m.name}</h3>
              <p className="dm-card__note">{m.note}</p>
            </li>
          ))}
        </ul>

        <div className="dm-program__figure">
          <img
            src="/section-1.webp"
            alt="Detail CNC obrábění kovového dílu s odletujícími třískami a chladicí kapalinou"
            className="dm-figure__img"
          />
          <p className="dm-figure__cap">
            Málosériová i velkosériová výroba na jednom CAD/CAM řetězci — od
            modelu k hotovému dílu bez ručního překreslování.
          </p>
        </div>
      </section>

      <section className="dm-trust" id="duvod">
        <div className="dm-trust__intro">
          <p className="dm-eyebrow">Proč právě Dentamechanik</p>
          <h2 className="dm-h2">
            Když jde díl do těla pacienta,<br />přesnost není přání. Je zadání.
          </h2>
          <p className="dm-section-sub">
            Přes dvacet let vyrábíme v Českých Budějovicích pro zdravotnický
            průmysl. Naučilo nás to jedno: kontrolovat, ne doufat. Každý kus
            projde měřením, každá zakázka má svou dokumentaci.
          </p>
        </div>

        <div className="dm-trust__body">
          <img
            src="/section-2.webp"
            alt="Přesně obrobené titanové zdravotnické komponenty připravené k expedici"
            className="dm-trust__img"
          />
          <dl className="dm-stats">
            {reasons.map((r) => (
              <div className="dm-stat" key={r.label}>
                <dt className="dm-stat__label">{r.label}</dt>
                <dd className="dm-stat__value">{r.value}</dd>
                <p className="dm-stat__note">{r.note}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
