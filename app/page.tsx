const kroky = [
  {
    cislo: "1",
    nazev: "Změříme nožku",
    text: "Délku i šířku, obě nohy. Používáme měřidlo plus12, které rovnou počítá s prostorem pro růst. Měření je zdarma — i když nic nekoupíte.",
  },
  {
    cislo: "2",
    nazev: "Vybereme podle nohy, ne podle čísla",
    text: "Každá značka sedí jinak. Poradíme, jestli má dítě širší nárt, nízký kotník nebo teprve začíná chodit — a podle toho vybereme.",
  },
  {
    cislo: "3",
    nazev: "Zkontrolujeme, jak bota sedí",
    text: "Palcová zkouška, chůze po prodejně, kontrola paty. Odcházíte s botou, která opravdu padne — ne s tou, co jen hezky vypadá.",
  },
];

const nabidka = [
  {
    stitek: "Barefoot",
    nazev: "Barefoot boty pro celý rok",
    text: "Tenká podrážka, široká špička, nulový podpatek. Vedeme ověřené barefoot značky pro první krůčky i pro školáky — na léto, do deště i do sněhu.",
  },
  {
    stitek: "První botičky",
    nazev: "První krůčky bez chyb",
    text: "První boty rozhodují o tom, jak se noha vyvíjí. Pomůžeme vybrat měkkou, ohebnou botu se správnou délkou — a vysvětlíme, kdy je bosky nejlepší volba.",
  },
  {
    stitek: "Do školky a školy",
    nazev: "Přezůvky, které vydrží",
    text: "Pevná pata, prodyšný materiál, snadné obouvání i pro malé ruce. Poradíme rozdíl mezi přezůvkou do školky a do školy.",
  },
  {
    stitek: "Zima",
    nazev: "Zimní boty a péče o ně",
    text: "Zateplení podle toho, jak je dítě aktivní. K botám přidáme radu, jak je impregnovat a sušit, aby vydržely víc než jednu zimu.",
  },
];

const prodejny = [
  {
    nazev: "Smetanovy sady 6",
    popis: "Centrum Plzně, kousek od Divadla J. K. Tyla. Ideální, když jdete do města.",
  },
  {
    nazev: "Gerská 15",
    popis: "Plzeň-Bolevec, u zastávky. Parkování přímo před prodejnou, s kočárkem bez schodů.",
  },
];

export default function Page() {
  return (
    <main className="st-main">
      {/* ===== HERO ===== */}
      <header className="st-hero">
        <div className="st-hero-inner">
          <p className="st-brand" aria-label="Dětská obuv U Stonožky, Plzeň">
            <span className="st-brand-u">U</span>
            <span className="st-brand-name">Stonožky</span>
            <span className="st-brand-sub">dětská obuv · Plzeň</span>
          </p>

          <h1 className="st-h1">
            <span className="st-h1-line st-h1-line-1">Malé nohy</span>
            <span className="st-h1-line st-h1-line-2">rostou rychle.</span>
            <span className="st-h1-line st-h1-line-3">
              My je <em>změříme</em>.
            </span>
          </h1>

          <p className="st-hero-p">
            Specializovaná prodejna dětské a barefoot obuvi. Dvě prodejny
            v Plzni, měření nožky zdarma a poctivá rada — i kdyby zněla
            „ještě počkejte, tahle bota vašemu dítěti nesedí“.
          </p>

          <div className="st-hero-actions">
            <a className="st-btn st-btn-primary" href="#prodejny">
              Kde nás najdete
            </a>
            <a className="st-btn st-btn-ghost" href="tel:+420775601569">
              Zavolat prodejnu
            </a>
          </div>
        </div>

        {/* Signature: stonožka poskládaná z dětských stop */}
        <div className="st-stonozka" aria-hidden="true">
          <svg
            viewBox="0 0 1200 190"
            preserveAspectRatio="xMidYMax meet"
            className="st-stonozka-svg"
          >
            <defs>
              <g id="st-stopa">
                {/* chodidlo */}
                <ellipse cx="0" cy="14" rx="13" ry="20" />
                {/* prstíky */}
                <circle cx="-9" cy="-12" r="4.6" />
                <circle cx="-2.5" cy="-16" r="4.2" />
                <circle cx="4" cy="-16.5" r="3.8" />
                <circle cx="10" cy="-13.5" r="3.4" />
                <circle cx="14.5" cy="-8.5" r="3" />
              </g>
            </defs>
            {/* tělo stonožky – vlnka */}
            <path
              className="st-telo"
              d="M40 110 Q 130 60, 220 110 T 400 110 T 580 110 T 760 110 T 940 110 T 1120 110"
              fill="none"
            />
            {/* stopy = nožičky, střídavě nahoru a dolů natočené */}
            {[100, 190, 280, 370, 460, 550, 640, 730, 820, 910, 1000].map(
              (x, i) => (
                <use
                  key={x}
                  href="#st-stopa"
                  className={`st-noha st-noha-${(i % 4) + 1}`}
                  transform={`translate(${x} ${i % 2 === 0 ? 138 : 82}) rotate(${
                    i % 2 === 0 ? 14 : -14
                  }) scale(${i % 2 === 0 ? 1 : 0.92})`}
                  style={{ animationDelay: `${0.15 + i * 0.09}s` }}
                />
              )
            )}
            {/* hlava s tykadly */}
            <g className="st-hlava">
              <circle cx="1120" cy="110" r="26" />
              <circle cx="1112" cy="104" r="3.5" className="st-oko" />
              <circle cx="1128" cy="104" r="3.5" className="st-oko" />
              <path
                d="M1112 88 Q 1104 68, 1092 62 M1130 88 Q 1140 68, 1152 64"
                className="st-tykadla"
                fill="none"
              />
              <path
                d="M1110 118 Q 1120 126, 1130 118"
                className="st-tykadla"
                fill="none"
              />
            </g>
          </svg>
        </div>
      </header>

      {/* ===== SEKCE: JAK VYBÍRÁME + NABÍDKA ===== */}
      <section className="st-section st-section-nabidka" aria-labelledby="nabidka-h">
        <div className="st-container">
          <p className="st-eyebrow">Nejdřív noha, potom bota</p>
          <h2 id="nabidka-h" className="st-h2">
            Tři kroky, které děláme u&nbsp;každé boty
          </h2>

          <ol className="st-kroky">
            {kroky.map((k) => (
              <li key={k.cislo} className="st-krok">
                <span className="st-krok-stopa" aria-hidden="true">
                  {k.cislo}
                </span>
                <h3 className="st-h3">{k.nazev}</h3>
                <p>{k.text}</p>
              </li>
            ))}
          </ol>

          <div className="st-nabidka-grid">
            {nabidka.map((n) => (
              <article key={n.nazev} className="st-karta">
                <p className="st-stitek">{n.stitek}</p>
                <h3 className="st-h3">{n.nazev}</h3>
                <p>{n.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEKCE: PRODEJNY A DŮVĚRA ===== */}
      <section
        id="prodejny"
        className="st-section st-section-prodejny"
        aria-labelledby="prodejny-h"
      >
        <div className="st-container">
          <p className="st-eyebrow st-eyebrow-svetly">Dvakrát v Plzni</p>
          <h2 id="prodejny-h" className="st-h2">
            Přijďte i&nbsp;s&nbsp;dítětem — počítáme s&nbsp;tím
          </h2>
          <p className="st-section-p">
            Boty dětem zkoušíme přímo na noze, žádné „ono se to vyšlape“.
            Kočárek nechte klidně u&nbsp;vchodu, na zkoušení máme místo
            i&nbsp;trpělivost.
          </p>

          <div className="st-prodejny-grid">
            {prodejny.map((p) => (
              <div key={p.nazev} className="st-prodejna">
                <h3 className="st-h3">{p.nazev}</h3>
                <p>{p.popis}</p>
              </div>
            ))}
          </div>

          <ul className="st-duvera">
            <li>
              <strong>Měření zdarma</strong>
              <span>
                Změříme délku i šířku a řekneme, kdy je čas na větší číslo.
                Bez nákupu, bez řečí.
              </span>
            </li>
            <li>
              <strong>Jen ověřené značky</strong>
              <span>
                Vedeme značky, kterým věříme u vlastních dětí — barefoot
                i klasické, vždy s pevnou patou a prostorem pro prsty.
              </span>
            </li>
            <li>
              <strong>Poradíme na rovinu</strong>
              <span>
                Když bota nesedí, neprodáme ji. Radši vám poradíme, kde
                hledat dál — proto se k nám rodiče vracejí.
              </span>
            </li>
          </ul>

          <p className="st-kontakt-radek">
            Zavolejte před cestou:{" "}
            <a href="tel:+420775601569">775&nbsp;601&nbsp;569</a> (Smetanovy
            sady) ·{" "}
            <a href="tel:+420606602060">606&nbsp;602&nbsp;060</a> (Gerská) ·{" "}
            <a href="mailto:obchod@ustonozky.cz">obchod@ustonozky.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}
