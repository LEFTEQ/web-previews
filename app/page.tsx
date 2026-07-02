export const metadata = {
  title: "Karel Pressl – Reality | Správa nemovitostí Plzeň",
  description:
    "Správa bytových domů a nemovitostí v Plzni. Vyúčtování služeb, technická údržba, jednání s SVJ i vlastníky. Kancelář Radyňská 10, Plzeň. Volejte 603 818 015.",
  openGraph: {
    title: "Karel Pressl – Reality | Správa nemovitostí Plzeň",
    description:
      "Správa bytových domů v Plzni: vyúčtování, údržba, účetnictví SVJ. Kancelář na Radyňské 10.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "SPRÁVA",
    nazev: "Správa bytových domů a SVJ",
    popis:
      "Převezmeme kompletní agendu vašeho domu: předpisy záloh, roční vyúčtování služeb, evidenci vlastníků a nájemníků, přípravu podkladů pro shromáždění. Vy schvalujete, my vyřizujeme.",
    detaily: ["Předpisy a vyúčtování záloh", "Evidence vlastníků a plateb", "Podklady pro shromáždění SVJ"],
  },
  {
    kod: "ÚDRŽBA",
    nazev: "Technická údržba a revize",
    popis:
      "Hlídáme termíny povinných revizí — plyn, elektro, hromosvody, komíny — a zajišťujeme opravy prověřenými plzeňskými řemeslníky. O havárii se dozvíte od nás, ne od souseda.",
    detaily: ["Plán a evidence revizí", "Havarijní služba a opravy", "Výběr dodavatelů, kontrola faktur"],
  },
  {
    kod: "REALITY",
    nazev: "Prodej a pronájem",
    popis:
      "Prodáváme a pronajímáme byty i domy v Plzni a okolí. Známe ceny v konkrétních ulicích, ne jen průměry z tabulek. Prohlídky, smlouvy i předání bytu vyřídíme za vás.",
    detaily: ["Odhad tržní ceny zdarma", "Kompletní právní servis", "Předávací protokoly a energie"],
  },
  {
    kod: "FINANCE",
    nazev: "Finance a pojištění domu",
    popis:
      "Pomůžeme s pojištěním bytového domu, úvěrem na opravu fasády nebo výtahu a s nastavením fondu oprav tak, aby dům nežil od havárie k havárii.",
    detaily: ["Pojištění bytových domů", "Úvěry na revitalizace", "Nastavení fondu oprav"],
  },
];

const zasady = [
  {
    cislo: "25+",
    jednotka: "let",
    text: "spravujeme domy v Plzni. Většina klientů k nám přišla na doporučení jiného výboru SVJ.",
  },
  {
    cislo: "1",
    jednotka: "člověk",
    text: "za váš dům odpovídá. Žádné call centrum — voláte přímo správci, který váš dům zná.",
  },
  {
    cislo: "24 h",
    jednotka: "reakce",
    text: "na havárii. Prasklý stoupák v sobotu večer neřešíte vy, ale my a náš instalatér.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="Karel Pressl Reality – správa nemovitostí Plzeň">
        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-name">PRESSL</span>
            <span className="wordmark-sub">reality &amp; správa nemovitostí</span>
          </div>
          <a className="hero-tel" href="tel:+420603818015">
            603&nbsp;81&nbsp;80&nbsp;15
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Plzeň · Radyňská 10 · od roku 1998</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Váš dům</span>
            <span className="ht-line ht-2">má správce,</span>
            <span className="ht-line ht-3">kterému se dovoláte.</span>
          </h1>
          <p className="hero-lead">
            Spravujeme bytové domy a SVJ v Plzni: vyúčtování, revize, havárie i účetnictví.
            Jeden správce, jedno číslo, žádné přepojování.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420603818015">Zavolat správci</a>
            <a className="btn btn-line" href="mailto:reality@karel-pressl.cz">Napsat e-mail</a>
          </div>
        </div>

        {/* Signature: typografická "fasáda" — rastr oken plzeňského činžáku */}
        <div className="facade" aria-hidden="true">
          <div className="facade-grid">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className={`okno${[3, 7, 12, 18, 21].includes(i) ? " okno-lit" : ""}`} />
            ))}
          </div>
          <div className="facade-base" />
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Co pro váš dům děláme</p>
          <h2 id="sluzby-h" className="sec-title">
            Čtyři agendy, které vám sundáme z krku
          </h2>
        </div>
        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article key={s.kod} className="karta">
              <p className="karta-kod">{s.kod}</p>
              <h3 className="karta-nazev">{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
              <ul className="karta-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <p className="sec-eyebrow sec-eyebrow-inv">Proč Pressl</p>
            <h2 id="duvera-h" className="sec-title sec-title-inv">
              Malá kancelář.
              <br />
              Proto to funguje.
            </h2>
            <p className="duvera-lead">
              Nejsme řetězec se stovkami domů a anonymní linkou. Známe každý dům, který
              spravujeme — víme, kde teče střecha a kdy má výtah revizi. Když zavoláte na
              Radyňskou, zvedne to člověk, který váš dům opravdu zná.
            </p>
            <blockquote className="reference">
              <p>
                „Předchozí správce nám tři roky sliboval opravu vchodu. Pan Pressl ji měl
                domluvenou za měsíc a vyúčtování konečně chodí včas.“
              </p>
              <cite>— výbor SVJ, Slovany, dům o 18 jednotkách</cite>
            </blockquote>
          </div>
          <div className="duvera-fakta">
            {zasady.map((z) => (
              <div key={z.cislo} className="fakt">
                <p className="fakt-cislo">
                  {z.cislo} <span className="fakt-jednotka">{z.jednotka}</span>
                </p>
                <p className="fakt-text">{z.text}</p>
              </div>
            ))}
            <p className="duvera-adresa">
              Kancelář: Radyňská 10, 326 00 Plzeň‑Slovany
              <br />
              reality@karel-pressl.cz · finance@karel-pressl.cz
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
