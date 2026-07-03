// Kytky od Pepy — Ústí nad Labem
// Květinářství: pultová kytice na počkání, vazba na zakázku, vyzvednutí na pobočce.
// Design: „papír z květinářství" — zelený rub balicího papíru, stonková linka jako signature prvek.

const nabidka = [
  {
    znacka: "Po ruce",
    nazev: "Kytice na počkání",
    popis:
      "Přijdete, vyberete z toho, co je ten den čerstvé na pultu, a Pepa vám kytici uváže během pár minut. Od 250 Kč.",
    detail: "Vazba na místě · 5–10 minut",
  },
  {
    znacka: "Předem",
    nazev: "Objednávka s vyzvednutím",
    popis:
      "Objednáte online do 16:00, druhý den si kytici vyzvednete hotovou na pobočce. Bez čekání, bez front — jen si ji odnesete.",
    detail: "objednavky.kytkyodpepy.com",
  },
  {
    znacka: "Na míru",
    nazev: "Svatby a smuteční vazba",
    popis:
      "Svatební kytice, korsáže, výzdoba stolů i věnce. Domluvíme se osobně na pobočce nebo po telefonu — vždy dopředu ukážeme návrh.",
    detail: "Konzultace zdarma",
  },
  {
    znacka: "Pro firmy",
    nazev: "Pravidelné závozy",
    popis:
      "Čerstvé květiny do kanceláře, ordinace nebo restaurace každý týden. Domluvíme rytmus a o zbytek se nestaráte.",
    detail: "Ústí nad Labem a okolí",
  },
];

const tydenNaPultu = [
  { den: "Út", co: "závoz z burzy — tulipány, frézie, eukalyptus" },
  { den: "Čt", co: "druhý závoz — růže, pivoňky v sezóně" },
  { den: "So", co: "nejplnější pult týdne, otevřeno do 12:00" },
];

const reference = [
  {
    text:
      "Objednala jsem kytici pro mámu z mobilu cestou z práce, druhý den ráno byla nachystaná u pultu. Krásná, voněla celý týden.",
    kdo: "Lucie K., Střekov",
  },
  {
    text:
      "Pepa nám vázal svatební kytici i výzdobu. Přišli jsme s fotkou z Pinterestu, odešli jsme s něčím lepším.",
    kdo: "Manželé Havlovi, Ústí nad Labem",
  },
  {
    text:
      "Chodím sem každý pátek pro kytku domů. Vždycky se zeptá, co bylo minule, a uváže něco jiného. To jinde nezažijete.",
    kdo: "Petr M., Klíše",
  },
];

export default function Page() {
  return (
    <main className="kop">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Kytky od Pepy">
            <span className="wordmark-kytky">Kytky</span>
            <span className="wordmark-od">od</span>
            <span className="wordmark-pepy">Pepy</span>
          </div>
          <p className="hero-lokace">
            Květinářství · Ústí nad Labem
          </p>
        </div>

        <div className="hero-body">
          <h1 className="hero-titulek">
            <span className="radek radek-1">Čerstvě</span>
            <span className="radek radek-2">uvázáno.</span>
            <span className="radek radek-3">
              Dvakrát týdně <em>z&nbsp;burzy</em>,
            </span>
            <span className="radek radek-4">každý den na&nbsp;pultu.</span>
          </h1>

          {/* signature: stonek — svislá linka s lístky, vede okem dolů stránkou */}
          <div className="stonek" aria-hidden="true">
            <svg viewBox="0 0 60 420" preserveAspectRatio="xMidYMin meet">
              <path
                className="stonek-linka"
                d="M30 0 C 26 80, 34 140, 30 210 C 27 280, 33 350, 30 420"
                fill="none"
              />
              <path className="list list-1" d="M30 90 C 12 82, 4 66, 6 50 C 24 56, 32 72, 30 90 Z" />
              <path className="list list-2" d="M30 170 C 48 162, 56 146, 54 130 C 36 136, 28 152, 30 170 Z" />
              <path className="list list-3" d="M30 260 C 12 252, 4 236, 6 220 C 24 226, 32 242, 30 260 Z" />
              <path className="list list-4" d="M30 340 C 48 332, 56 316, 54 300 C 36 306, 28 322, 30 340 Z" />
            </svg>
          </div>

          <div className="hero-akce">
            <a
              className="tlacitko tlacitko-hlavni"
              href="https://objednavky.kytkyodpepy.com"
            >
              Objednat kytici k&nbsp;vyzvednutí
            </a>
            <a className="tlacitko tlacitko-vedlejsi" href="#pult">
              Co je teď na pultu
            </a>
          </div>

          <dl className="hero-fakta">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8–18, So 8–12</dd>
            </div>
            <div>
              <dt>Pobočka</dt>
              <dd>Masarykova 87, Ústí nad Labem</dd>
            </div>
            <div>
              <dt>Vyzvednutí</dt>
              <dd>Objednáte dnes, vyzvednete zítra</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ================= NABÍDKA ================= */}
      <section className="sekce sekce-nabidka" id="nabidka" aria-labelledby="nabidka-titulek">
        <div className="sekce-hlava">
          <p className="sekce-znacka">Co u nás pořídíte</p>
          <h2 id="nabidka-titulek">
            Čtyři způsoby, jak od nás odejít s&nbsp;kytkou
          </h2>
        </div>

        <ul className="karty">
          {nabidka.map((n) => (
            <li className="karta" key={n.nazev}>
              <p className="karta-znacka">{n.znacka}</p>
              <h3 className="karta-nazev">{n.nazev}</h3>
              <p className="karta-popis">{n.popis}</p>
              <p className="karta-detail">{n.detail}</p>
            </li>
          ))}
        </ul>

        <aside className="pult" id="pult" aria-labelledby="pult-titulek">
          <h3 id="pult-titulek" className="pult-titulek">
            Rytmus pultu
          </h3>
          <p className="pult-uvod">
            Nedržíme květiny v chladu týdny. Pult žije podle závozů z pražské
            burzy — takhle vypadá náš týden:
          </p>
          <ul className="pult-tyden">
            {tydenNaPultu.map((t) => (
              <li key={t.den}>
                <span className="pult-den">{t.den}</span>
                <span className="pult-co">{t.co}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* ================= DŮVĚRA / O PEPOVI ================= */}
      <section className="sekce sekce-duvera" aria-labelledby="duvera-titulek">
        <div className="duvera-mriz">
          <div className="duvera-text">
            <p className="sekce-znacka sekce-znacka-svetla">Kdo vám kytku váže</p>
            <h2 id="duvera-titulek">
              Pepa váže kytky v&nbsp;Ústí přes patnáct let
            </h2>
            <p>
              Začínal jako pomocník ve floristice na Mírovém náměstí, dnes má
              vlastní pult na Masarykově. Květiny nakupuje osobně, dvakrát
              týdně, a co nesplňuje jeho představu o čerstvosti, na pult
              nepustí.
            </p>
            <p>
              Když si nebudete vědět rady, řekněte jen příležitost a částku —
              zbytek je jeho práce. A pokud kytice nevydrží aspoň pět dní,
              uváže vám novou. Bez řečí.
            </p>
            <dl className="duvera-cisla">
              <div>
                <dt>15+ let</dt>
                <dd>floristiky v Ústí nad Labem</dd>
              </div>
              <div>
                <dt>2× týdně</dt>
                <dd>čerstvý závoz z květinové burzy</dd>
              </div>
              <div>
                <dt>5 dní</dt>
                <dd>záruka čerstvosti na každou kytici</dd>
              </div>
            </dl>
          </div>

          <ul className="ohlasy">
            {reference.map((r) => (
              <li className="ohlas" key={r.kdo}>
                <blockquote>
                  <p>„{r.text}“</p>
                </blockquote>
                <p className="ohlas-kdo">{r.kdo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
