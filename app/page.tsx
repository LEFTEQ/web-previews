import { DispatchStrip } from "./motion";

const services = [
  {
    idx: "SPEC-01",
    label: "Strojní čištění odpadů",
    spec: "Spirála Ø 16–32 mm · kuchyně, koupelny, svody",
    desc: "Rotační spirála protočí ucpané odpady i delší svody. Rychlé řešení běžných ucpání.",
    price: "od 1 490 Kč",
  },
  {
    idx: "SPEC-02",
    label: "Tlakové čištění kanalizace",
    spec: "Vysokotlak 150–200 bar · ležaté i svislé svody",
    desc: "Vysokotlaká voda spláchne tuky, usazeniny i písek z ležaté kanalizace.",
    price: "od 2 900 Kč",
  },
  {
    idx: "SPEC-03",
    label: "Kamerový monitoring potrubí",
    spec: "Kamera Ø 50–300 mm · záznam + protokol",
    desc: "Barevný záznam z potrubí, měření vzdálenosti a protokol o stavu. Víte přesně, co se opravuje.",
    price: "od 2 400 Kč",
  },
  {
    idx: "SPEC-04",
    label: "Frézování kořenů a nánosů",
    spec: "Řezná hlava · litina, kamenina, plast",
    desc: "Rotační fréza odstraní prorostlé kořeny a tvrdé nánosy z litiny i kameniny.",
    price: "od 3 500 Kč",
  },
  {
    idx: "SPEC-05",
    label: "Lokalizace a detekce ucpání",
    spec: "Sonda + kamera · zaměření na centimetr",
    desc: "Sondou a kamerou zaměříme přesné místo ucpání nebo prasklého potrubí — bez plošného bourání.",
    price: "od 1 900 Kč",
  },
  {
    idx: "SPEC-06",
    label: "Havárie kanalizace 24/7",
    spec: "Výjezd nonstop · zpětné vzdutí, zaplavení",
    desc: "Zpětné vzdutí, zaplavený sklep, ucpaná hlavní stoupačka? Vyjedeme nonstop po celé Praze.",
    price: "dle času výjezdu",
  },
];

const stats = [
  { k: "Dojezd Praha", v: "do 60 min" },
  { k: "Recenze", v: "4,8 / 5 (268)" },
  { k: "Záruka", v: "2 roky na práci" },
  { k: "Linka", v: "365 dní / 24 h" },
];

const reviews = [
  {
    name: "L. A. Resler",
    tag: "Kamerový monitoring",
    text: "Soused tvrdil, že mu přes plot teče naše odpadní voda. Technici udělali kamerou záznam a jasně ukázali, kudy to doopravdy teče. Vyřešeno na místě.",
  },
  {
    name: "Anna B.",
    tag: "Havárie 24/7",
    text: "Praskla nám v noci kanalizace a sklepem stoupala voda. Volala jsem na nonstop, za 40 minut byli u nás a vzdutí zastavili. Obrovská úleva.",
  },
];

export default function Page() {
  return (
    <main className="pc-page">
      {/* ---------------- HERO ---------------- */}
      <section className="pc-hero pc-frame" aria-label="Úvod">
        <span className="pc-tick pc-tick--tl" aria-hidden="true" />
        <span className="pc-tick pc-tick--tr" aria-hidden="true" />
        <span className="pc-tick pc-tick--bl" aria-hidden="true" />
        <span className="pc-tick pc-tick--br" aria-hidden="true" />
        <span className="pc-crosshair pc-crosshair--v" aria-hidden="true" />
        <span className="pc-crosshair pc-crosshair--h" aria-hidden="true" />

        <div className="pc-wrap pc-hero-inner">
          <div className="pc-brand">
            <span className="pc-rec" aria-hidden="true">
              <span className="pc-rec-dot" /> REC
            </span>
            <span className="pc-wordmark">
              Technický <b>Nonstop</b>
            </span>
          </div>

          <DispatchStrip />

          <p className="pc-eyebrow">Čištění kanalizace — Praha a okolí</p>

          <h1 className="pc-h1">
            Než začneme čistit,
            <br />
            pošleme dovnitř <span className="pc-phos">kameru.</span>
          </h1>

          <p className="pc-lede">
            Strojní i tlakové čištění odpadů, frézování kořenů a kamerový
            monitoring potrubí. Přijedeme nonstop a víme, kde je závada — dřív,
            než se sáhne po krumpáči.
          </p>

          <div className="pc-hero-actions">
            <a className="pc-cta" href="tel:+420777111222">
              <span className="pc-cta-label">Zavolat dispečink</span>
              <span className="pc-cta-num">777 111 222</span>
            </a>
            <p className="pc-cta-note">Průměrný dojezd po Praze do 60 minut.</p>
          </div>

          <dl className="pc-hud-specs" aria-label="Parametry kamery a techniky">
            <div>
              <dt>Kamera</dt>
              <dd>Ø 50–300 mm</dd>
            </div>
            <div>
              <dt>Dosah</dt>
              <dd>HL 0–40 m</dd>
            </div>
            <div>
              <dt>Tlak</dt>
              <dd>150–200 bar</dd>
            </div>
            <div>
              <dt>Region</dt>
              <dd>Praha 1–10</dd>
            </div>
          </dl>
        </div>

        <p className="pc-hero-readout" aria-hidden="true">
          T+00:41 · Ø 150 mm · HL 24 m · SIG 98% · REC
        </p>
      </section>

      {/* ---------------- SLUŽBY / KATALOG ---------------- */}
      <section className="pc-section" aria-labelledby="katalog-h">
        <div className="pc-wrap">
          <header className="pc-section-head">
            <p className="pc-eyebrow">Katalog výkonů · log kamery</p>
            <h2 id="katalog-h" className="pc-h2">
              Každá služba je záznam z terénu — s pevnou cenou.
            </h2>
            <p className="pc-section-sub">
              Šest zákroků, které řešíme na kanalizaci v Praze nejčastěji. Cenu
              řekneme předem, kamerový záznam a protokol dostanete po práci.
            </p>
          </header>

          <ul className="pc-grid">
            {services.map((s) => (
              <li key={s.idx} className="pc-card pc-frame-sm">
                <div className="pc-card-top">
                  <span className="pc-card-idx">{s.idx}</span>
                  <span className="pc-card-price">{s.price}</span>
                </div>
                <h3 className="pc-card-label">{s.label}</h3>
                <p className="pc-card-spec">{s.spec}</p>
                <p className="pc-card-desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- DŮVĚRA / PROČ MY ---------------- */}
      <section className="pc-section pc-section--alt" aria-labelledby="proc-h">
        <div className="pc-wrap pc-trust">
          <div className="pc-trust-lead">
            <p className="pc-eyebrow">Proč Technický Nonstop</p>
            <h2 id="proc-h" className="pc-h2">
              Deset let v pražských sklepech, dvorech a šachtách.
            </h2>
            <p className="pc-section-sub">
              Vyrostli jsme z jednoho vozu na tým dvanácti techniků s pěti
              servisními auty a vlastní kamerovou technikou. Máme oprávnění
              TIČR, jezdíme od Prahy 5 – Stodůlek po Prahu 9 a ceník držíme
              bez skrytých příplatků.
            </p>

            <dl className="pc-stats" aria-label="Klíčové údaje">
              {stats.map((s) => (
                <div key={s.k} className="pc-stat">
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="pc-reviews">
            {reviews.map((r) => (
              <li key={r.name} className="pc-review pc-frame-sm">
                <p className="pc-review-meta">
                  <span className="pc-review-tag">{r.tag}</span>
                  <span className="pc-stars" aria-label="5 z 5 hvězd">
                    ★★★★★
                  </span>
                </p>
                <blockquote className="pc-review-text">{r.text}</blockquote>
                <p className="pc-review-name">— {r.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
