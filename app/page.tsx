import { AiImage } from "./_ui";

const DAYS: [string, string][] = [
  ["Pondělí", "08:00–20:00"],
  ["Úterý", "08:00–20:00"],
  ["Středa", "08:00–20:00"],
  ["Čtvrtek", "08:00–20:00"],
  ["Pátek", "08:00–20:00"],
  ["Sobota", "08:00–20:00"],
  ["Neděle", "08:00–20:00"],
];

const SERVICES: { title: string; tag?: string; items: string[] }[] = [
  {
    title: "Vybavení prodejny",
    items: [
      "Samoobslužná pokladna",
      "Zákaznické WC",
      "Přebalovací pult",
      "Balicí pult",
      "Wi-Fi",
      "Hrací koutek pro děti",
    ],
  },
  {
    title: "Rychlé služby",
    items: [
      "Expresní vyzvednutí do 60 minut",
      "Scan&Go — plaťte přímo v mobilu",
      "Foto DIY — tisk fotek na počkání",
    ],
  },
  {
    title: "Dekorativní kosmetika navíc",
    items: ["Gabriella Salvete", "rom&nd", "miss sporty", "Rimmel London", "Max Factor"],
  },
  {
    title: "Péče o pleť navíc",
    items: ["Ziaja", "Dermacol", "Dr. PawPaw", "Geek & Gorgeous", "Aknelot"],
  },
  {
    title: "Zdraví & výživa",
    tag: "Vědomá volba",
    items: ["Rostlinné Alpro", "Rozšířené doplňky stravy"],
  },
  {
    title: "Textil",
    items: ["Bellinda", "Legstra", "Stella Jones"],
  },
];

const NEARBY: { addr: string; city: string; dist: string; until: string }[] = [
  { addr: "8. května 465/24", city: "779 00 Olomouc", dist: "2,21 km", until: "20:00" },
  { addr: "Polská 1201/1", city: "779 00 Olomouc", dist: "2,28 km", until: "21:00" },
  { addr: "Kafkova 465/39", city: "779 00 Olomouc", dist: "4,89 km", until: "20:00" },
  { addr: "Olomoucká 90", city: "783 72 Velký Týnec", dist: "5,25 km", until: "21:00" },
  { addr: "Konečná 4563/8", city: "796 01 Prostějov", dist: "17,41 km", until: "20:00" },
];

function Brace({ side }: { side: "l" | "r" }) {
  return (
    <span className={`brace brace--${side}`} aria-hidden="true">
      {side === "l" ? "{" : "}"}
    </span>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="wrap">
          <div className="wordmark">
            <span className="wordmark__tile">dm</span>
            <span className="wordmark__text">
              drogerie&nbsp;markt
              <em>Olomouc · Pavlovická</em>
            </span>
          </div>

          <div className="hero__grid">
            <div className="hero__intro">
              <p className="eyebrow">Prodejna · NP Bělidla</p>
              <h1 className="hero__title">
                Vaše dm hned<br />
                za&nbsp;rohem na&nbsp;Pavlovické
              </h1>
              <p className="lede">
                Otevřeli jste mapu, ať víte to podstatné bez klikání: kde nás
                najdete, kdy máme otevřeno a co si tu pořídíte. Vše ostatní jsme
                schovali.
              </p>

              <ul className="chips" aria-label="Výhody nákupu">
                <li className="chip">Doprava zdarma od 1 290 Kč</li>
                <li className="chip">Vyzvednutí do 60 minut</li>
                <li className="chip">Dárek v aplikaci Moje&nbsp;dm</li>
              </ul>
            </div>

            {/* Map + dropping tile-pin */}
            <div className="hero__map">
              <div className="map-frame">
                <AiImage
                  className="map-frame__img"
                  src="/hero.webp"
                  alt="Mapa okolí prodejny dm na Pavlovické ulici v Olomouci"
                />
                <span className="map-pin" aria-hidden="true">
                  <span className="map-pin__tile">dm</span>
                </span>
              </div>
            </div>
          </div>

          {/* Signature brace-card — address block held between { } */}
          <section className="brace-card" aria-label="Adresa a otevírací doba prodejny">
            <Brace side="l" />
            <div className="brace-card__body">
              <p className="brace-card__kicker">prodejna dm</p>
              <p className="brace-card__addr">
                Pavlovická 272/18
                <span>NP Bělidla · 779 00 Olomouc</span>
              </p>
              <p className="pill">
                <span className="pill__dot" aria-hidden="true" />
                Dnes otevřeno do 20:00
              </p>
              <div className="actions">
                <a className="btn btn--primary" href="https://mapy.cz">
                  Navigovat na prodejnu
                </a>
                <a className="btn btn--ghost" href="tel:+420777111222">
                  Zavolat 777 111 222
                </a>
              </div>
            </div>
            <Brace side="r" />
          </section>
        </div>
      </header>

      {/* ---------- SERVICES ---------- */}
      <section className="section section--services" aria-labelledby="sluzby-nadpis">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow eyebrow--sand">Co na Pavlovické najdete</p>
            <h2 id="sluzby-nadpis" className="section__title">
              Nejen běžná drogerie — tahle prodejna umí o&nbsp;kus víc
            </h2>
          </div>

          <div className="services">
            <div className="services__media">
              <AiImage
                className="services__img"
                src="/section-2.webp"
                alt="Interiér prodejny dm s regály kosmetiky a drogerie"
              />
            </div>

            <div className="brace-card brace-card--wide">
              <Brace side="l" />
              <div className="brace-card__body">
                <ul className="svc-grid">
                  {SERVICES.map((s) => (
                    <li className="svc" key={s.title}>
                      <h3 className="svc__title">
                        {s.title}
                        {s.tag ? <span className="svc__tag">{s.tag}</span> : null}
                      </h3>
                      <ul className="svc__list">
                        {s.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
                <p className="svc-pay">
                  <span>Zaplatíte jak chcete:</span> hotově, kartou, body
                  active&nbsp;beauty i vybranými dárkovými poukázkami.
                </p>
              </div>
              <Brace side="r" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOURS + NEARBY ---------- */}
      <section className="section section--hours" aria-labelledby="doba-nadpis">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Otevírací doba &amp; okolí</p>
            <h2 id="doba-nadpis" className="section__title">
              Přijďte kdykoli — máme stejně dlouho každý&nbsp;den
            </h2>
          </div>

          <div className="brace-card brace-card--dark">
            <Brace side="l" />
            <div className="brace-card__body hours">
              <p className="hours__big">
                Každý den
                <strong>08:00 – 20:00</strong>
              </p>
              <ul className="hours__days">
                {DAYS.map(([d, h]) => (
                  <li key={d}>
                    <span className="hours__d">{d}</span>
                    <span className="hours__h">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Brace side="r" />
          </div>

          <div className="nearby">
            <h3 className="nearby__title">Další dm v okolí</h3>
            <ul className="nearby__list">
              {NEARBY.map((n) => (
                <li className="nearby__item" key={n.addr}>
                  <span className="nearby__pin" aria-hidden="true">dm</span>
                  <span className="nearby__addr">
                    <strong>{n.addr}</strong>
                    <span>{n.city}</span>
                  </span>
                  <span className="nearby__meta">
                    <span className="nearby__dist">{n.dist}</span>
                    <span className="nearby__until">do {n.until}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
