export default function Page() {
  const kytice = [
    {
      nazev: "Pepova ranní",
      popis: "Tulipány, eukalyptus a to, co ráno dorazilo z trhu. Každý den jiná.",
      cena: "od 390 Kč",
      stitek: "nejprodávanější",
    },
    {
      nazev: "Luční nevázaná",
      popis: "Kopretiny, chrpy, třezalka. Volně vázaná, jako z louky za Labem.",
      cena: "od 450 Kč",
      stitek: "sezónní",
    },
    {
      nazev: "Růže po kusech",
      popis: "Holandské i české růže, 60–70 cm. Kolik chcete, tolik vážeme.",
      cena: "55 Kč / ks",
      stitek: null,
    },
    {
      nazev: "Svatební vazba",
      popis: "Kytice, korsáže, výzdoba stolů. Domluva osobně na pobočce, klidně s kávou.",
      cena: "individuálně",
      stitek: "na objednávku",
    },
    {
      nazev: "Smuteční vazba",
      popis: "Věnce a vypichované kytice do 24 hodin. Řešíme citlivě a spolehlivě.",
      cena: "od 900 Kč",
      stitek: null,
    },
    {
      nazev: "Pokojovky a bylinky",
      popis: "Monstery, sukulenty, bazalka v květináči. Poradíme, co přežije i u vás.",
      cena: "od 120 Kč",
      stitek: null,
    },
  ];

  const recenze = [
    {
      text: "Objednala jsem přes web v devět ráno, ve dvanáct byla kytice připravená na pultě. Manžel nepoznal, že to bylo na poslední chvíli.",
      autor: "Markéta H., Polabiny",
    },
    {
      text: "Pepa mi vázal svatební kytici a přesně pochopil, co chci, i když jsem to sama neuměla popsat. Držela celý den i celou noc.",
      autor: "Tereza K., Pardubice",
    },
    {
      text: "Chodím sem každý pátek pro kytku domů. Nikdy stejná, vždycky čerstvá. To se v supermarketu nestane.",
      autor: "Jan V., Bílé Předměstí",
    },
  ];

  return (
    <main className="pepa">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="Kytky od Pepy">
            <span className="wordmark-kytky">Kytky</span>
            <span className="wordmark-od">od</span>
            <span className="wordmark-pepy">Pepy</span>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Vážeme,</span>
            <span className="line line-2">co ráno&nbsp;přišlo</span>
            <span className="line line-3">
              z&nbsp;trhu<span className="stem" aria-hidden="true">.</span>
            </span>
          </h1>

          <p className="hero-sub">
            Květinářství v&nbsp;Pardubicích. Objednáte online, my uvážeme,
            vy si vyzvednete na pobočce — nebo dovezeme po městě do dvou hodin.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="https://objednavky.kytkyodpepy.com">
              Objednat kytici
            </a>
            <a className="btn btn-ghost" href="tel:+420466123456">
              Zavolat Pepovi
            </a>
          </div>

          <ul className="hero-facts" aria-label="Rychlé informace">
            <li>Vyzvednutí týž den</li>
            <li>Rozvoz po Pardubicích</li>
            <li>Po–So 8–18, Ne na objednávku</li>
          </ul>
        </div>

        {/* Signature: velký řez stonku – rostoucí linka s listy */}
        <svg
          className="hero-stem"
          viewBox="0 0 220 720"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="xMidYMax meet"
        >
          <path
            className="stem-line"
            d="M120 720 C 100 560, 150 480, 118 360 C 90 260, 140 180, 110 60"
            stroke="var(--stonek)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            className="stem-leaf leaf-1"
            d="M126 520 C 190 500, 210 440, 200 410 C 150 420, 120 470, 126 520 Z"
            fill="var(--list)"
          />
          <path
            className="stem-leaf leaf-2"
            d="M112 380 C 48 360, 28 300, 40 272 C 88 282, 118 330, 112 380 Z"
            fill="var(--stonek)"
          />
          <path
            className="stem-leaf leaf-3"
            d="M116 220 C 178 202, 196 148, 186 122 C 138 132, 110 176, 116 220 Z"
            fill="var(--list)"
          />
          <circle className="stem-bloom" cx="110" cy="52" r="34" fill="var(--kvet)" />
          <circle className="stem-bloom-core" cx="110" cy="52" r="12" fill="var(--pyl)" />
        </svg>
      </header>

      {/* ===== SEKCE 1: NABÍDKA ===== */}
      <section className="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow">Co dnes vážeme</p>
          <h2 id="nabidka-h">Kytice podle sezóny, ceny bez překvapení</h2>
          <p className="section-lead">
            Nabídka se mění s&nbsp;tím, co je zrovna čerstvé. Tohle u&nbsp;nás
            najdete skoro vždycky — a&nbsp;v&nbsp;objednávce si řeknete, pro koho to je.
          </p>
        </div>

        <ul className="karty">
          {kytice.map((k) => (
            <li className="karta" key={k.nazev}>
              <div className="karta-hlava">
                <h3>{k.nazev}</h3>
                {k.stitek && <span className="stitek">{k.stitek}</span>}
              </div>
              <p className="karta-popis">{k.popis}</p>
              <p className="karta-cena">{k.cena}</p>
            </li>
          ))}
        </ul>

        <div className="nabidka-cta">
          <a className="btn btn-primary" href="https://objednavky.kytkyodpepy.com">
            Vybrat a objednat online
          </a>
          <p className="nabidka-pozn">
            Objednávky do 14:00 vyzvednete ještě týž den.
          </p>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O PEPOVI ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-text">
            <p className="eyebrow eyebrow-light">Kdo vám váže kytky</p>
            <h2 id="duvera-h">
              Pepa vstává ve&nbsp;čtyři, aby vaše kytice vydržela týden
            </h2>
            <p>
              Josef „Pepa“ Malý váže květiny v&nbsp;Pardubicích dvanáct let.
              Třikrát týdně jezdí na&nbsp;květinovou burzu, zbytek bere od
              pěstitelů z&nbsp;Polabí — proto se nabídka mění a&nbsp;proto
              kytice od&nbsp;nás nestojí druhý den svěšená.
            </p>
            <p>
              Najdete nás kousek od&nbsp;třídy Míru. Přijďte si vybrat osobně,
              nebo objednejte online a&nbsp;jen si vyzvedněte hotovou kytici
              na&nbsp;pultě.
            </p>

            <dl className="kontakt">
              <div>
                <dt>Pobočka</dt>
                <dd>Sladkovského 12, Pardubice</dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–So 8:00–18:00</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420466123456">466 123 456</a>
                </dd>
              </div>
            </dl>
          </div>

          <ul className="recenze" aria-label="Recenze zákazníků">
            {recenze.map((r) => (
              <li className="recenze-karta" key={r.autor}>
                <p className="recenze-text">„{r.text}“</p>
                <p className="recenze-autor">{r.autor}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
