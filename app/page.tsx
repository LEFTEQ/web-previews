const OPENING_HOURS = [
  { day: "Pondělí", hours: "7:30 – 18:00" },
  { day: "Úterý", hours: "7:30 – 18:00" },
  { day: "Středa", hours: "7:30 – 18:00" },
  { day: "Čtvrtek", hours: "7:30 – 18:00" },
  { day: "Pátek", hours: "7:30 – 17:00" },
  { day: "So + Ne", hours: "zavřeno" },
];

const SERVICES = [
  {
    code: "Rx",
    title: "Léky na recept",
    text: "Přineste papírový recept nebo nám nadiktujte kód eReceptu — vyzvednete během pár minut. Pokud lék nemáme skladem, objednáme ho zpravidla do druhého dne.",
  },
  {
    code: "OTC",
    title: "Volný prodej a poradenství",
    text: "Léky bez předpisu, vitamíny a doplňky stravy vybíráme s vámi u táry, ne z regálu naslepo. Zeptáme se, co už berete, ať se přípravky nehádají mezi sebou.",
  },
  {
    code: "IPL",
    title: "Léky připravované na míru",
    text: "Masti, roztoky a kapky podle individuálního předpisu od vašeho lékaře připravujeme přímo v naší laboratoři — včetně přípravků pro děti a citlivou pleť.",
  },
  {
    code: "TK",
    title: "Měření tlaku zdarma",
    text: "Krevní tlak vám změříme na počkání a výsledek vysvětlíme. Hodí se před návštěvou lékaře i při kontrole nasazené léčby.",
  },
  {
    code: "eR",
    title: "Rezervace přes telefon",
    text: "Zavolejte předem a my vám lék připravíme k vyzvednutí. Nemusíte čekat, jestli je skladem — u výdeje ho už budete mít nachystaný na jméno.",
  },
  {
    code: "AKC",
    title: "Akční ceny každý měsíc",
    text: "Vybrané vitamíny, přípravky na chřipku a péči o pleť za snížené ceny. Aktuální leták najdete přímo v lékárně u vstupu.",
  },
];

const TRUST_POINTS = [
  {
    label: "Metro A · Petřiny",
    title: "30 vteřin od eskalátorů",
    text: "Jsme přímo u výstupu ze stanice Petřiny. Vyzvednete lék cestou z práce, ze školy nebo od lékaře — bez zajížďky a bez hledání parkování.",
  },
  {
    label: "Od roku 2011",
    title: "Lékárníci, kteří vás znají",
    text: "Na Petřinách vydáváme léky přes deset let. Stálé zákazníky známe jménem a pamatujeme si, co berete — poradíme tedy v souvislostech, ne od nuly.",
  },
  {
    label: "Bez front",
    title: "Malá lékárna, rychlý výdej",
    text: "Nejsme řetězec s číselným pořadníkem. Běžný výdej u nás trvá pár minut a na dotaz je vždy čas — i když se ptáte na věc, za kterou byste jinde platili u lékaře.",
  },
];

export default function Page() {
  return (
    <main className="pk">
      {/* ===== HERO ===== */}
      <header className="pk-hero">
        <div className="pk-hero-inner">
          <div className="pk-topbar">
            <span className="pk-wordmark" aria-label="Lékárna METRO Petřiny">
              <span className="pk-wordmark-cross" aria-hidden="true">
                <span />
                <span />
              </span>
              Lékárna <strong>METRO</strong> Petřiny
            </span>
            <span className="pk-topbar-note">Praha 6 · přímo u metra A</span>
          </div>

          <div className="pk-hero-grid">
            <div className="pk-hero-copy">
              <p className="pk-hero-eyebrow">Vaše lékárna u výstupu ze stanice Petřiny</p>
              <h1 className="pk-hero-title">
                Vystupte,
                <br />
                <em>vyzvedněte,</em>
                <br />
                jeďte dál.
              </h1>
              <p className="pk-hero-lead">
                Léky na recept, vitamíny i příprava mastí na míru — třicet vteřin od
                eskalátorů metra A. Zavolejte předem a budete mít lék nachystaný na jméno.
              </p>
              <div className="pk-hero-actions">
                <a className="pk-btn pk-btn-solid" href="tel:+420235000000">
                  Zavolat do lékárny
                </a>
                <a className="pk-btn pk-btn-ghost" href="#sluzby">
                  Co u nás vyřídíte
                </a>
              </div>
            </div>

            {/* Signature: staniční tabule — jízdní řád otevírací doby */}
            <aside className="pk-board" aria-label="Otevírací doba">
              <div className="pk-board-head">
                <span className="pk-board-dot" aria-hidden="true" />
                <span className="pk-board-station">PETŘINY · VÝDEJ LÉKŮ</span>
              </div>
              <table className="pk-board-table">
                <caption className="pk-visually-hidden">Otevírací doba lékárny</caption>
                <tbody>
                  {OPENING_HOURS.map((row) => (
                    <tr key={row.day} className={row.hours === "zavřeno" ? "pk-board-closed" : undefined}>
                      <th scope="row">{row.day}</th>
                      <td>{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="pk-board-foot">Brunclíkova 1875/17 · Praha 6, Petřiny</p>
            </aside>
          </div>
        </div>

        {/* Linka metra A protínající hero */}
        <div className="pk-line" aria-hidden="true">
          <span className="pk-line-stop pk-line-stop--past" style={{ left: "12%" }}>
            <i />
            <b>Nemocnice Motol</b>
          </span>
          <span className="pk-line-stop pk-line-stop--here" style={{ left: "48%" }}>
            <i />
            <b>Petřiny — jste zde</b>
          </span>
          <span className="pk-line-stop pk-line-stop--past" style={{ left: "82%" }}>
            <i />
            <b>Veleslavín</b>
          </span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="pk-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="pk-section-inner">
          <div className="pk-section-head">
            <h2 id="sluzby-h" className="pk-section-title">
              Co u nás vyřídíte
            </h2>
            <p className="pk-section-lead">
              Zkratky na štítcích znáte z krabiček a receptů — u nás za každou stojí
              konkrétní služba a lékárník, který vám ji vysvětlí lidsky.
            </p>
          </div>

          <ul className="pk-services">
            {SERVICES.map((s) => (
              <li key={s.code} className="pk-service">
                <span className="pk-service-code" aria-hidden="true">
                  {s.code}
                </span>
                <h3 className="pk-service-title">{s.title}</h3>
                <p className="pk-service-text">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="pk-section pk-section--deep" aria-labelledby="duvera-h">
        <div className="pk-section-inner">
          <div className="pk-section-head">
            <h2 id="duvera-h" className="pk-section-title">
              Proč Petřiny chodí k nám
            </h2>
            <p className="pk-section-lead">
              Nejsme řetězec. Jsme lékárna jedné stanice — a to je přesně naše výhoda.
            </p>
          </div>

          <div className="pk-trust">
            {TRUST_POINTS.map((t) => (
              <article key={t.title} className="pk-trust-card">
                <p className="pk-trust-label">{t.label}</p>
                <h3 className="pk-trust-title">{t.title}</h3>
                <p className="pk-trust-text">{t.text}</p>
              </article>
            ))}
          </div>

          <blockquote className="pk-quote">
            <p>
              „Recept od doktorky z Motola, dvě zastávky metrem a lék mám v ruce dřív,
              než mi vychladne káva. A paní magistra si pamatuje, že beru léky na tlak.“
            </p>
            <footer>— paní Havlová, zákaznice z Petřin</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
