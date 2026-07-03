// ESN – ekonomická správa nemovitostí, spol. s r.o., Plzeň
// Náhledový web: hero + služby + důvěra. Statická server komponenta.

const sluzby = [
  {
    id: "E",
    nazev: "Ekonomika domu",
    popis:
      "Předpisy záloh, vyúčtování služeb do 30. dubna, vedení účetnictví SVJ i bytových družstev, přehledy pro shromáždění. Každou korunu domu doložíme položkově.",
    body: ["Vyúčtování tepla, vody a služeb", "Účetní závěrka a podklady pro shromáždění", "Vymáhání dluhů na zálohách"],
  },
  {
    id: "S",
    nazev: "Správa a provoz",
    popis:
      "Revize, havárie, úklid, výtahy. Hlídáme termíny povinných revizí za vás a na havárii vody nebo topení reagujeme ještě týž den — v Plzni jsme do hodiny.",
    body: ["Plán revizí a jejich objednání", "Havarijní služba pro spravované domy", "Výběr a kontrola dodavatelů úklidu a údržby"],
  },
  {
    id: "N",
    nazev: "Nemovitost dlouhodobě",
    popis:
      "Fond oprav, který dává smysl. Připravíme plán oprav na roky dopředu, pohlídáme zateplení, střechu i výtah a pomůžeme s úvěrem pro SVJ, když je potřeba.",
    body: ["Dlouhodobý plán oprav a rozpočet", "Technický dozor při rekonstrukcích", "Podklady pro úvěr a dotace"],
  },
];

const kroky = [
  {
    rok: "1993",
    text: "Zápis do obchodního rejstříku u Krajského soudu v Plzni. Od začátku sídlíme na jedné adrese — Prešovská 318/20 ve Vnitřním Městě.",
  },
  {
    rok: "2001",
    text: "Vedení přebírají jednatelé Maximilian Neumeier a Josef Ludwig Kappenberger. Oba firmu řídí dodnes — přes dvacet let stejné tváře, stejná odpovědnost.",
  },
  {
    rok: "dnes",
    text: "Spravujeme bytové domy, SVJ a komerční objekty po celé Plzni. Většina nových domů k nám přichází na doporučení výborů, se kterými už pracujeme.",
  },
];

export default function Page() {
  return (
    <main className="esn">
      {/* ================= HERO ================= */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní">
          <span className="wordmark" aria-label="ESN — ekonomická správa nemovitostí">
            <span className="wordmark-blok">ESN</span>
            <span className="wordmark-pop">ekonomická správa nemovitostí</span>
          </span>
          <a className="hero-tel" href="tel:+420377220118">
            377 220 118
          </a>
        </nav>

        <div className="hero-grid" aria-hidden="true">
          {/* Katastrální parcelace — signature prvek odvozený z map nemovitostí */}
          <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" focusable="false">
            <g className="parcely" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 120 L210 90 L340 140 L340 300 L120 340 L0 290 Z" />
              <path d="M210 90 L470 40 L520 180 L340 140 Z" />
              <path d="M470 40 L800 0 L800 160 L520 180 Z" />
              <path d="M520 180 L800 160 L800 360 L560 380 L340 300 L340 140 Z" />
              <path d="M120 340 L340 300 L560 380 L540 520 L80 520 L60 400 Z" />
              <path d="M560 380 L800 360 L800 520 L540 520 Z" />
            </g>
            <g className="parcela-cisla" fill="currentColor" fontSize="13" fontFamily="var(--font-mono)">
              <text x="150" y="220">318/20</text>
              <text x="400" y="110">318/21</text>
              <text x="640" y="90">317/4</text>
              <text x="600" y="270">319/1</text>
              <text x="300" y="430">320/2</text>
              <text x="670" y="450">321/7</text>
            </g>
            <path className="parcela-zvyraznena" d="M0 120 L210 90 L340 140 L340 300 L120 340 L0 290 Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="hero-obsah">
          <p className="hero-eyebrow">Správa nemovitostí · Plzeň · od roku 1993</p>
          <h1>
            Váš dům má&nbsp;účetnictví,
            <br />
            <em>revize a&nbsp;starosti.</em>
            <br />
            My máme obojí rádi.
          </h1>
          <p className="hero-perex">
            Spravujeme bytové domy, SVJ a&nbsp;komerční objekty v&nbsp;Plzni už přes třicet let. Ekonomika domu
            v&nbsp;pořádku, revize včas, havárie vyřešená — a&nbsp;výbor domu má klid.
          </p>
          <div className="hero-akce">
            <a className="btn-primarni" href="tel:+420377220118">
              Zavolat: 377 220 118
            </a>
            <a className="btn-tichy" href="mailto:sprava@esn-plzen.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="hero-adresa">
            Kancelář: Prešovská 318/20, Vnitřní Město, Plzeň — dvě minuty od&nbsp;náměstí Republiky.
          </p>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <h2 id="sluzby-nadpis">
            Tři písmena, tři&nbsp;závazky
          </h2>
          <p>
            E jako ekonomika, S jako správa, N jako nemovitost. Není to slovní hříčka — je to přesně to,
            co pro váš dům každý měsíc děláme.
          </p>
        </div>

        <div className="sluzby-mrizka">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.id}>
              <span className="sluzba-pismeno" aria-hidden="true">
                {s.id}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <ul>
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="sluzby-pozn">
          Cenu správy počítáme na&nbsp;jednotku a&nbsp;měsíc podle rozsahu služeb — na&nbsp;první schůzce ji řekneme
          na&nbsp;korunu přesně, žádné „od“.
        </p>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="sekce-hlava">
          <h2 id="duvera-nadpis">Jedna adresa od&nbsp;roku 1993</h2>
          <p>
            Správce domu si vybíráte na&nbsp;roky. Proto se nejdřív podívejte, kdo jsme — všechno je
            dohledatelné v&nbsp;obchodním rejstříku pod IČO&nbsp;49788906.
          </p>
        </div>

        <ol className="casova-osa">
          {kroky.map((k) => (
            <li key={k.rok}>
              <span className="osa-rok">{k.rok}</span>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="duvera-fakta" role="list" aria-label="Fakta o firmě">
          <div role="listitem">
            <strong>30+ let</strong>
            <span>nepřetržité správy nemovitostí v&nbsp;Plzni</span>
          </div>
          <div role="listitem">
            <strong>C 4648/KSPL</strong>
            <span>spisová značka, Krajský soud v&nbsp;Plzni</span>
          </div>
          <div role="listitem">
            <strong>2 jednatelé</strong>
            <span>stejné vedení od&nbsp;roku 2001 — víte, s&nbsp;kým jednáte</span>
          </div>
          <div role="listitem">
            <strong>1 000 000 Kč</strong>
            <span>základní kapitál, plně splacený</span>
          </div>
        </div>

        <blockquote className="duvera-citace">
          <p>
            „Vyúčtování máme každý rok do&nbsp;konce dubna a&nbsp;na&nbsp;shromáždění přijde někdo, kdo dům
            skutečně zná. To u&nbsp;předchozího správce nebývalo.“
          </p>
          <footer>— předseda výboru SVJ, bytový dům na&nbsp;Slovanech, 48&nbsp;jednotek</footer>
        </blockquote>
      </section>
    </main>
  );
}
