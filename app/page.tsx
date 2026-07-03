const znacky = [
  "Aprilia",
  "Ducati",
  "BMW",
  "Honda",
  "KTM",
  "Kawasaki",
  "Suzuki",
  "Triumph",
  "Yamaha",
];

const sluzby = [
  {
    kod: "EFI",
    nazev: "Servis vstřikování a diagnostika",
    popis:
      "Specializujeme se na silniční motocykly se vstřikováním paliva. Připojíme diagnostiku, přečteme chybové kódy a seřídíme motor tak, jak ho výrobce zamýšlel.",
  },
  {
    kod: "PNEU",
    nazev: "Pneuservis pro moto",
    popis:
      "Přezutí, vyvážení, kontrola tlaku a stavu dezénu. Poradíme s výběrem pneumatik podle toho, kde a jak jezdíte — okresky, dálnice, nebo okruh.",
  },
  {
    kod: "FULL",
    nazev: "Kompletní servis a seřízení",
    popis:
      "Od výměny oleje a brzdové kapaliny po vůle ventilů a seřízení podvozku. Držíme servisní intervaly, aby vás stroj nenechal stát v nevhodnou chvíli.",
  },
  {
    kod: "TUNE",
    nazev: "Tuning a renovace",
    popis:
      "Vrátíme starší stroj do kondice nebo posuneme ten váš dál. Renovace, úpravy výkonu i vzhledu — vždy tak, aby motorka zůstala spolehlivá.",
  },
  {
    kod: "SHOP",
    nazev: "Prodej a poradenství",
    popis:
      "Sortiment pro motorkáře i motocykl — oleje, kapaliny, díly, doplňky. K tomu odborné poradenství a školení, abyste svému stroji rozuměli.",
  },
];

const vipKroky = [
  {
    krok: "1",
    titul: "Svěřte nám motorku celou",
    text: "Od přezutí pneumatik po kompletní seřízení. Jedině tak poznáme váš stroj, jízdní styl i to, co od motorky čekáte.",
  },
  {
    krok: "2",
    titul: "Držte servisní intervaly",
    text: "Pravidelný servis znamená, že o problému víme dřív, než vás zastaví na cestě. Termín si domluvíme na konkrétní hodinu.",
  },
  {
    krok: "3",
    titul: "Mluvte s námi na rovinu",
    text: "Řekněte nám, co vás na stroji trápí, čeho se bojíte a co si přejete. Čím líp se pochopíme, tím líp servis dopadne.",
  },
];

const vipVyhody = [
  "VIP sleva na práci mechanika",
  "Přednostní termín, když spěcháte",
  "Kompletní servisní historie vašeho stroje u nás",
  "Individuální přístup — vaše požadavky už známe",
  "Výhoda při prodeji: doložitelně servisovaný motocykl",
];

export default function Page() {
  return (
    <main className="ma">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="topbar">
            <span className="wordmark" aria-label="Moto assistance">
              MOTO<em>ASSISTANCE</em>
            </span>
            <a className="topbar-tel" href="tel:+420702920313">
              +420 702 920 313
            </a>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">
                Nezávislý motoservis · České Budějovice
              </p>
              <h1 className="hero-title">
                <span className="line line-1">Váš osobní</span>
                <span className="line line-2">mechanik.</span>
                <span className="line line-3">Jako u závodního týmu.</span>
              </h1>
              <p className="hero-sub">
                Servis a pneuservis pro silniční motocykly se vstřikováním
                paliva. Známe váš stroj, jeho mouchy i servisní historii —
                a staráme se o něj, jako by byl náš.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="tel:+420702920313">
                  Zavolat servis
                </a>
                <span className="hero-note">
                  Otevřeno po dohodě — termín na konkrétní hodinu, žádné čekání
                  ve frontě.
                </span>
              </div>
            </div>

            {/* signature: otáčkoměr / redline */}
            <div className="tacho" aria-hidden="true">
              <svg viewBox="0 0 320 320" className="tacho-svg">
                <circle cx="160" cy="160" r="150" className="tacho-ring" />
                <circle cx="160" cy="160" r="122" className="tacho-inner" />
                {/* stupnice */}
                <g className="tacho-ticks">
                  {Array.from({ length: 13 }).map((_, i) => {
                    const a = (-210 + i * 20) * (Math.PI / 180);
                    const x1 = 160 + Math.cos(a) * 140;
                    const y1 = 160 + Math.sin(a) * 140;
                    const x2 = 160 + Math.cos(a) * (i >= 10 ? 118 : 126);
                    const y2 = 160 + Math.sin(a) * (i >= 10 ? 118 : 126);
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        className={i >= 10 ? "tick tick-red" : "tick"}
                      />
                    );
                  })}
                </g>
                {/* redline oblouk */}
                <path
                  d="M 268 55 A 150 150 0 0 1 310 160"
                  className="tacho-redline"
                />
                {/* ručička */}
                <g className="tacho-needle-group">
                  <line
                    x1="160"
                    y1="160"
                    x2="160"
                    y2="38"
                    className="tacho-needle"
                  />
                  <circle cx="160" cy="160" r="12" className="tacho-hub" />
                </g>
                <text x="160" y="228" className="tacho-label">
                  ×1000 ot/min
                </text>
              </svg>
              <p className="tacho-caption">
                Motor seřízený do redline — bez obav, že nedojedete.
              </p>
            </div>
          </div>
        </div>

        {/* pás značek */}
        <div className="brands" role="list" aria-label="Servisované značky">
          {znacky.map((z) => (
            <span role="listitem" className="brand" key={z}>
              {z}
            </span>
          ))}
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co u nás vyřešíte</p>
          <h2 id="sluzby-h">
            Od přezutí pneumatik po kompletní seřízení motoru
          </h2>
          <p className="section-lead">
            Jsme nezávislý servis — nejsme vázaní na jednu značku, zato jsme
            vázaní na váš stroj. Prémiové silniční motocykly jsou náš denní
            chleba.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.kod}>
              <span className="karta-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== VIP ===== */}
      <section className="vip" aria-labelledby="vip-h">
        <div className="vip-inner">
          <div className="vip-head">
            <p className="eyebrow eyebrow-light">VIP zákazník</p>
            <h2 id="vip-h">
              Mějte svůj tým mechaniků.
              <br />
              Jako závodní jezdci.
            </h2>
            <p className="vip-lead">
              Nejlepší je, když se o stroj stará pořád jeden servis — zná jeho
              stav, mouchy i vaše požadavky. Stejně to má u nás Milda ZUB,
              český stuntrider, i Luděk Málek, road racing #12.
            </p>
          </div>

          <div className="vip-grid">
            <div className="vip-kroky">
              <h3 className="vip-sub">Jak se stát VIP</h3>
              <ol>
                {vipKroky.map((k) => (
                  <li key={k.krok}>
                    <span className="krok-cislo" aria-hidden="true">
                      {k.krok}
                    </span>
                    <div>
                      <strong>{k.titul}</strong>
                      <p>{k.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="vip-vyhody">
              <h3 className="vip-sub">Co tím získáte</h3>
              <ul>
                {vipVyhody.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
              <p className="vip-pozn">
                Otevřeno po dohodě na konkrétní hodinu — vaše motorka má termín
                jen pro sebe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
