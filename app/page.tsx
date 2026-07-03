const stroje = [
  {
    kod: "TISK",
    nazev: "Velkoplošná tiskárna + plotter Roland",
    popis:
      "Samolepící etikety, reklamní banery, plakáty a řezaná grafika na polep cedulí, výkladů a automobilů. Tiskneme a hned řežeme — polep dostanete připravený k aplikaci.",
    vyrobky: ["banery", "polepy aut", "etikety", "plakáty", "výklady"],
  },
  {
    kod: "VF LIS",
    nazev: "Vysokofrekvenční lis",
    popis:
      "PVC obaly na dokumenty a visačky na cestovní zavazadla, potištěné sítotiskem vaším logem. Věc, kterou zákazník drží v ruce roky — ne den.",
    vyrobky: ["obaly na dokumenty", "visačky na zavazadla"],
  },
  {
    kod: "VAKUUM",
    nazev: "Vakuový lis",
    popis:
      "Tvarované plastové reklamní tabule a stojánky na prospekty. Trojrozměrná reklama, která na pultu prodejny nezapadne mezi papírové letáky.",
    vyrobky: ["reklamní tabule", "stojánky na prospekty"],
  },
  {
    kod: "KARUSEL",
    nazev: "Sítotiskový karusel",
    popis:
      "Potisk samolepících fólií, igelitových tašek a dalších materiálů. Barva jde do materiálu vrstvou, kterou digitál nenapodobí — sytá a odolná.",
    vyrobky: ["tašky", "fólie", "samolepky"],
  },
  {
    kod: "MHM",
    nazev: "Textilní karusel MHM",
    popis:
      "Potisk triček a textilu s tepelnou fixací. Firemní trička, která vydrží praní — fixovaný sítotisk drží, kde nažehlovačka dávno oprýskala.",
    vyrobky: ["trička", "pracovní oděvy", "textil"],
  },
];

const duvody = [
  {
    titulek: "Vyrábíme sami, ve vlastní dílně",
    text: "Nejsme překupník, který zakázku pošle dál. Od návrhu přes tisk až po lisování jde všechno přes naše stroje v Brně — a my za každý kus ručíme.",
  },
  {
    titulek: "Přes 15 let u stejného řemesla",
    text: "Reklamu na zakázku děláme od začátku tisíciletí. Víme, který materiál vydrží na jižní fasádě a která fólie se nedá sundat z výlohy bez fénu.",
  },
  {
    titulek: "Poradíme dřív, než zaplatíte",
    text: "Řeknete nám, co potřebujete odkomunikovat — my navrhneme techniku, materiál i formát. Někdy je lepší jeden pořádný baner než tisíc letáků.",
  },
  {
    titulek: "Komplet a rychle",
    text: "Polep vozového parku, tabule na prodejnu a trička pro tým zvládneme jako jednu zakázku. Krátké termíny, férové ceny, žádné schovávané položky.",
  },
];

export default function Page() {
  return (
    <main className="ft">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="FALCO TEAM — výroba reklamy Brno">
        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark">
              FALCO<span className="wordmark-team">TEAM</span>
            </span>
            <span className="hero-loc">výroba reklamy · Brno</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Vytiskneme.</span>
            <span className="hero-line hero-line-2">
              Vylisujeme<span className="tick">.</span>
            </span>
            <span className="hero-line hero-line-3 hero-line-fill">Polepíme.</span>
          </h1>

          <div className="hero-registry" aria-hidden="true">
            {/* soutiskové značky — registrace barev jako na sítotiskovém karuselu */}
            <span className="reg reg-c">C</span>
            <span className="reg reg-m">M</span>
            <span className="reg reg-y">Y</span>
            <span className="reg reg-k">K</span>
          </div>

          <p className="hero-claim">
            Reklama na zakázku z vlastní dílny v Brně. Od baneru přes polep auta
            po potištěné tričko — pět strojů, jedna parta, přes patnáct let řemesla.
          </p>

          <ul className="hero-tags" aria-label="Co vyrábíme">
            <li>banery</li>
            <li>polepy aut a výloh</li>
            <li>reklamní tabule</li>
            <li>potisk triček</li>
            <li>tašky a etikety</li>
          </ul>
        </div>

        {/* pás perforace — okraj tiskové fólie */}
        <div className="hero-perf" aria-hidden="true" />
      </header>

      {/* ===== STROJE / SLUŽBY ===== */}
      <section className="stroje" aria-labelledby="stroje-h">
        <div className="section-head">
          <p className="eyebrow">Dílna</p>
          <h2 id="stroje-h">
            Pět strojů. Každý umí něco,
            <br />
            co ostatní ne.
          </h2>
          <p className="section-lead">
            Nevybíráte techniku vy — to je naše práce. Řeknete, co má reklama
            udělat, a my zvolíme stroj, materiál a barvu, které to udělají nejlíp.
          </p>
        </div>

        <ol className="stroj-list">
          {stroje.map((s) => (
            <li key={s.kod} className="stroj">
              <div className="stroj-kod" aria-hidden="true">
                {s.kod}
              </div>
              <div className="stroj-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <ul className="stroj-vyrobky" aria-label="Vyrábíme na něm">
                  {s.vyrobky.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="proc" aria-labelledby="proc-h">
        <div className="section-head section-head-inv">
          <p className="eyebrow eyebrow-inv">Proč Falco</p>
          <h2 id="proc-h">
            Zakázka projde čtyřma rukama,
            <br />
            ne čtyřmi firmami.
          </h2>
        </div>

        <div className="proc-grid">
          {duvody.map((d) => (
            <article key={d.titulek} className="proc-card">
              <h3>{d.titulek}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <p className="proc-strip" aria-label="Shrnutí">
          <strong>FALCO TEAM s.r.o.</strong> — výroba reklamy na zakázku, Brno.
          Tisk, sítotisk, lisování a polepy pod jednou střechou od roku 2000.
        </p>
      </section>
    </main>
  );
}
