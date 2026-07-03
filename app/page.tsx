// Motocentrum Olomouc — motoservis, výkup a prodej motocyklů, Holice
// Design: „garážová hala" — tachometrová typografie, asfaltová čerň, oranž brzdového třmenu

const bikes = [
  {
    brand: "Harley-Davidson",
    model: "FXFBS Softail Fat Bob 114cui",
    kat: "Silniční cestovní",
    rok: "2017",
    ccm: "1 850 ccm",
    km: "700 km",
    cena: "411 400 Kč",
  },
  {
    brand: "Benelli",
    model: "750 Sei",
    kat: "Veterán · šestiválec",
    rok: "1974",
    ccm: "750 ccm",
    km: "3 900 km",
    cena: "399 000 Kč",
  },
  {
    brand: "Triumph",
    model: "Tiger 1200 Desert",
    kat: "Silniční enduro",
    rok: "2021",
    ccm: "1 200 ccm",
    km: "40 000 km",
    cena: "346 950 Kč",
  },
  {
    brand: "Indian",
    model: "FTR 1200 S",
    kat: "Nakedbike",
    rok: "2022",
    ccm: "1 200 ccm",
    km: "3 800 km",
    cena: "290 400 Kč",
  },
  {
    brand: "Suzuki",
    model: "GT 750",
    kat: "Veterán · dvoutakt",
    rok: "1977",
    ccm: "750 ccm",
    km: "43 000 km",
    cena: "225 000 Kč",
  },
  {
    brand: "Yamaha",
    model: "V-Max VMX 1200",
    kat: "Chopper",
    rok: "2002",
    ccm: "1 200 ccm",
    km: "37 000 km",
    cena: "159 000 Kč",
  },
];

const sluzby = [
  {
    title: "Výkup vašeho motocyklu",
    text: "Přijedete, projdeme stroj společně na můstku a řekneme vám cenu na rovinu. Peníze dostanete hned při předání, papírování vyřídíme za vás.",
    tag: "Platba na místě",
  },
  {
    title: "Prodej prověřených strojů",
    text: "Přes 45 motocyklů skladem — od Harleye přes Triumph až po Jawu. Každý stroj projde servisní prohlídkou, než ho vystavíme. Historii vám ukážeme, nic neschováváme.",
    tag: "45+ strojů skladem",
  },
  {
    title: "Servis a příprava na sezónu",
    text: "Výměny olejů, brzdy, pneumatiky, karburátory i příprava na STK. Objednáte se telefonicky, termín držíme. Na práci dáváme záruku.",
    tag: "Po telefonické domluvě",
  },
  {
    title: "Veteráni a klasiky",
    text: "Benelli Sei, Suzuki GT, Jawy. Veteránům rozumíme — poradíme s testacemi, sháníme originální díly a víme, co která éra snese.",
    tag: "Testace i díly",
  },
];

export default function Page() {
  return (
    <main className="mc">
      {/* ====================== HERO ====================== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Motocentrum Olomouc">
            <span className="wordmark-moto">MOTO</span>
            <span className="wordmark-centrum">CENTRUM</span>
            <span className="wordmark-city">Olomouc · Holice 907</span>
          </div>
          <a className="hero-phone" href="tel:+420777053073">
            777 053 073
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Motoservis · výkup · prodej motocyklů a veteránů</p>
          <h1 className="hero-title">
            <span className="line line-1">Koupíme,</span>
            <span className="line line-2">prodáme,</span>
            <span className="line line-3">
              opravíme<span className="title-dot">.</span>
            </span>
          </h1>
          <p className="hero-sub">
            Dvacet let děláme motorky v olomoucké Holici. Od dvoutaktních veteránů
            po Fat Boba — když to má dvě kola a motor, patří to k nám na můstek.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420777053073">
              Zavolat do dílny
            </a>
            <a className="btn btn-ghost" href="#nabidka">
              Motocykly skladem
            </a>
          </div>
        </div>

        {/* Signature: tachometrová stupnice — oblouk s ryskami jako otáčkoměr */}
        <div className="tacho" aria-hidden="true">
          <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMax meet">
            <g className="tacho-ticks">
              {Array.from({ length: 25 }).map((_, i) => {
                const a = (Math.PI * (180 - i * 7.5)) / 180;
                const big = i % 4 === 0;
                const r1 = big ? 218 : 236;
                const r2 = 258;
                const x1 = 300 + r1 * Math.cos(a);
                const y1 = 330 - r1 * Math.sin(a);
                const x2 = 300 + r2 * Math.cos(a);
                const y2 = 330 - r2 * Math.sin(a);
                const red = i >= 20;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className={red ? "tick tick-red" : "tick"}
                    strokeWidth={big ? 5 : 2}
                  />
                );
              })}
            </g>
            <path
              className="tacho-arc"
              d="M 22 330 A 278 278 0 0 1 578 330"
              fill="none"
              strokeWidth="3"
            />
            <line className="tacho-needle" x1="300" y1="330" x2="120" y2="140" strokeWidth="5" />
            <circle className="tacho-hub" cx="300" cy="330" r="14" />
            <text className="tacho-label" x="300" y="300" textAnchor="middle">
            RPM ×1000
            </text>
          </svg>
        </div>

        <ul className="hero-strip" aria-label="Rychlé informace">
          <li>
            <strong>Výkup</strong>
            <span>peníze hned na místě</span>
          </li>
          <li>
            <strong>19 značek</strong>
            <span>od Aprilie po Yamahu</span>
          </li>
          <li>
            <strong>Veteráni</strong>
            <span>testace, díly, poradenství</span>
          </li>
          <li>
            <strong>Holice 907</strong>
            <span>Olomouc, po tel. domluvě</span>
          </li>
        </ul>
      </header>

      {/* ====================== SLUŽBY ====================== */}
      <section className="sekce sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-head">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p>
            Nejsme showroom s kravatami. Jsme dílna a bazar, kde motorku nejdřív
            vezmeme na můstek a pak se o ní teprve bavíme.
          </p>
        </div>
        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.title}>
              <span className="sluzba-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ====================== NABÍDKA ====================== */}
      <section className="sekce nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="sekce-head">
          <h2 id="nabidka-h">Právě stojí v hale</h2>
          <p>
            Výběr z aktuální nabídky. Každý stroj si můžete prohlédnout a nastartovat —
            zavolejte a domluvíme, kdy se stavíte.
          </p>
        </div>
        <div className="bike-grid">
          {bikes.map((b) => (
            <article className="bike" key={b.brand + b.model}>
              <div className="bike-head">
                <span className="bike-brand">{b.brand}</span>
                <span className="bike-kat">{b.kat}</span>
              </div>
              <h3 className="bike-model">{b.model}</h3>
              <dl className="bike-specs">
                <div>
                  <dt>Rok</dt>
                  <dd>{b.rok}</dd>
                </div>
                <div>
                  <dt>Objem</dt>
                  <dd>{b.ccm}</dd>
                </div>
                <div>
                  <dt>Najeto</dt>
                  <dd>{b.km}</dd>
                </div>
              </dl>
              <p className="bike-cena">{b.cena}</p>
            </article>
          ))}
        </div>
        <p className="nabidka-note">
          Sháníte konkrétní model? Zavolejte na{" "}
          <a href="tel:+420777053073">777 053 073</a> nebo napište na{" "}
          <a href="mailto:kancelar@mtco.cz">kancelar@mtco.cz</a> — často víme o
          strojích, které ještě nejsou v nabídce.
        </p>
      </section>
    </main>
  );
}
