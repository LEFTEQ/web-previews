import { StopaSpine } from "./motion";

const apartmany = [
  {
    id: "01",
    name: "Smrk",
    lozka: "2 + 2",
    plocha: "40 m\u00b2",
    cena: "1 690",
    popis: "P\u0159\u00edzemn\u00ed apartm\u00e1n s terasou obr\u00e1cenou do lesa. R\u00e1no vyjdete rovnou na stopu.",
    detaily: ["Vlastn\u00ed kuchy\u0148", "Vyh\u0159\u00edvan\u00e1 ly\u017e\u00e1rna", "Parkov\u00e1n\u00ed u domu"],
  },
  {
    id: "02",
    name: "\u017dula",
    lozka: "4",
    plocha: "55 m\u00b2",
    cena: "2 190",
    popis: "Prostorn\u00fd apartm\u00e1n s krbem a \u017eulov\u00fdm ost\u011bn\u00edm. Pro rodinu, kter\u00e1 se ve\u010der r\u00e1da zah\u0159eje u ohn\u011b.",
    detaily: ["Krb na d\u0159evo", "My\u010dka a pra\u010dka", "D\u011btsk\u00e1 posty\u0301lka na p\u0159\u00e1n\u00ed"],
  },
  {
    id: "03",
    name: "Okno",
    lozka: "6",
    plocha: "72 m\u00b2",
    cena: "2 890",
    popis: "Podkrovn\u00ed apartm\u00e1n s velk\u00fdm oknem na h\u0159ebeny Jizersk\u00fdch hor. To rozsv\u00edcen\u00e9 okno vid\u00edte z \u00fadol\u00ed.",
    detaily: ["V\u00fdhled na h\u0159ebeny", "Dv\u011b lo\u017enice", "Sauna v p\u0159\u00edzem\u00ed domu"],
  },
];

const duvery = [
  { cislo: "200 m", popis: "na n\u00e1stup Jizersk\u00e9 magistr\u00e1ly \u2014 na b\u011b\u017eky vych\u00e1z\u00edte rovnou ode dve\u0159\u00ed" },
  { cislo: "1,2 km", popis: "ke ski are\u00e1lu Malinovka a k za\u010d\u00e1tku sjezdovek" },
  { cislo: "50 km", popis: "trasa Jizersk\u00e9 pades\u00e1tky, kterou m\u00e1te za rohem cel\u00fd \u00fanor" },
];

const reference = [
  {
    text: "P\u0159ijeli jsme na Jizersk\u00e1 50 a bydleli v Okn\u011b. Vyh\u0159\u00e1t\u00e1 ly\u017e\u00e1rna, stopa kousek za domem \u2014 l\u00edp si to p\u0159edstavit ne\u0161lo.",
    kdo: "Martin H.",
    kdy: "\u00fanor 2024",
  },
  {
    text: "S d\u011btmi ve \u017dule u krbu. \u010cist\u00e9, tich\u00e9, pan\u00ed maj\u00edc\u00ed nam poradila ka\u017edou tra\u0301su. Vr\u00e1t\u00edme se i v l\u00e9t\u011b.",
    kdo: "Lucie \u010c.",
    kdy: "leden 2024",
  },
];

export default function Page() {
  return (
    <main className="page">
      <StopaSpine />

      <header className="hero">
        <nav className="topbar" aria-label="Hlavn\u00ed">
          <span className="wordmark">
            Apartm\u00e1ny<span className="wordmark-place">Bed\u0159ichov</span>
          </span>
          <a className="topcall" href="tel:+420604118050">+420 604 118 050</a>
        </nav>

        <div className="hero-inner">
          <p className="eyebrow stopa-under">
            Bed\u0159ichov \u00b7 Jizersk\u00e9 hory \u00b7 na magistr\u00e1le
          </p>
          <h1 className="hero-title">
            <span className="line line-a">Rozsv\u00edcen\u00e9</span>
            <span className="line line-b">
              <em className="glow-word">okno</em> v \u010dern\u00e9m
            </span>
            <span className="line line-c">lese.</span>
          </h1>
          <p className="lead">
            T\u0159i apartm\u00e1ny p\u0159\u00edmo u Jizersk\u00e9 magistr\u00e1ly. Ve\u010der se vr\u00e1t\u00edte ze
            stopy, rozsv\u00edt\u00edte l\u00e1mpu a les za oknem ztmavne. Zbytek nech\u00e1te na h\u0159eb\u00edcen\u00ed d\u0159eva.
          </p>

          <div className="book">
            <a className="book-btn" href="tel:+420604118050">Rezervovat term\u00edn</a>
            <p className="book-note">Voln\u00e9 term\u00edny prosinec\u2013b\u0159ezen \u2014 zavolejte, dr\u017e\u00edme je do 24 hodin.</p>
          </div>
        </div>

        <div className="scene" aria-hidden="true">
          <svg className="ridge" viewBox="0 0 800 200" preserveAspectRatio="none" role="presentation">
            <path
              className="ridge-back"
              d="M0,200 L0,150 L50,90 L95,140 L140,70 L190,130 L240,80 L300,150 L360,70 L420,140 L480,90 L540,150 L600,80 L660,140 L720,95 L800,150 L800,200 Z"
            />
            <path
              className="ridge-front"
              d="M0,200 L0,175 L40,110 L72,155 L112,80 L152,150 L196,100 L240,165 L292,90 L340,155 L392,115 L448,170 L500,95 L560,155 L620,120 L668,170 L730,105 L800,160 L800,200 Z"
            />
          </svg>

          <div className="window-glow">
            <span className="pane" />
            <span className="pane" />
            <span className="pane" />
            <span className="pane" />
          </div>
        </div>
      </header>

      <section className="band" aria-labelledby="apart-h">
        <div className="wrap">
          <p className="section-eyebrow stopa-under">Kde budete bydlet</p>
          <h2 className="section-title" id="apart-h">T\u0159i apartm\u00e1ny pod Malinovkou</h2>
          <p className="section-lead">
            Ka\u017ed\u00fd m\u00e1 vlastn\u00ed kuchy\u0148, vyh\u0159\u00edvanou ly\u017e\u00e1rnu a m\u00edsto k parkov\u00e1n\u00ed. Ceny jsou
            za noc pro cel\u00fd apartm\u00e1n, sn\u00eddan\u011b si va\u0159\u00edte sami.
          </p>

          <ul className="rooms">
            {apartmany.map((a) => (
              <li className="room" key={a.id}>
                <div className="room-head">
                  <span className="room-num">{a.id}</span>
                  <h3 className="room-name">Apartm\u00e1n {a.name}</h3>
                </div>
                <p className="room-meta">
                  {a.lozka} l\u016f\u017eek \u00b7 {a.plocha}
                </p>
                <p className="room-desc">{a.popis}</p>
                <ul className="room-list">
                  {a.detaily.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="room-price">
                  od <strong>{a.cena} K\u010d</strong> <span>/ noc</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band-alt" aria-labelledby="proc-h">
        <div className="wrap">
          <p className="section-eyebrow stopa-under">Pro\u010d pr\u00e1v\u011b odsud</p>
          <h2 className="section-title" id="proc-h">Bed\u0159ichov za\u010d\u00edn\u00e1 na na\u0161em prahu</h2>
          <p className="section-lead">
            Nejsme hotel na kraji m\u011bsta. Jsme d\u016fm v Bed\u0159ichov\u011b, odkud se na b\u011b\u017eky vyjede
            d\u0159\u00edv, ne\u017e sta\u010d\u00edte vychladnout.
          </p>

          <dl className="facts">
            {duvery.map((f) => (
              <div className="fact" key={f.cislo}>
                <dt className="fact-num">{f.cislo}</dt>
                <dd className="fact-desc">{f.popis}</dd>
              </div>
            ))}
          </dl>

          <div className="reviews">
            {reference.map((r) => (
              <blockquote className="review" key={r.kdo}>
                <p className="review-text">\u201e{r.text}\u201c</p>
                <footer className="review-by">
                  {r.kdo} <span>\u2014 {r.kdy}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
