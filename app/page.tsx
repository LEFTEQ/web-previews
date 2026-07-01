const sluzby = [
  {
    kod: "SVJ",
    nazev: "Správa společenství vlastníků",
    popis:
      "Účetnictví, vyúčtování služeb, evidence vlastníků, shromáždění včetně pozvánek a zápisů. Výbor od nás dostává podklady, ne práci navíc.",
    polozky: ["Roční vyúčtování do 30. 4.", "Podklady pro shromáždění", "Vymáhání dlužných záloh"],
  },
  {
    kod: "BD",
    nazev: "Správa bytových družstev",
    popis:
      "Nájemné, anuita, členská evidence a převody družstevních podílů. Známe specifika ostravských družstev z porubských i jižních sídlišť.",
    polozky: ["Předpisy nájemného a záloh", "Převody podílů bez front", "Ekonomika domu přehledně"],
  },
  {
    kod: "TECH",
    nazev: "Technická správa domu",
    popis:
      "Revize plynu, elektro, výtahů a hydrantů hlídáme v termínech za vás. Havárii vody nebo topení řešíme s osvědčenými řemeslníky z Ostravy.",
    polozky: ["Plán revizí a kontrol", "Havarijní zásah do 24 hodin", "Dozor nad opravami a fakturami"],
  },
];

const zaznamy = [
  { den: "Pondělí", cas: "8:30–11:30 a 12:30–17:00", pozn: "nejdelší den, i pro pracující" },
  { den: "Úterý", cas: "8:30–11:30", pozn: "dopolední agenda" },
  { den: "Středa", cas: "8:30–11:30 a 12:30–16:00", pozn: "druhý celý den" },
  { den: "Čtvrtek a pátek", cas: "pro domluvené schůzky", pozn: "volejte předem" },
];

export default function Page() {
  return (
    <main className="ax">
      {/* ===================== HERO ===================== */}
      <header className="ax-hero">
        <div className="ax-hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
        </div>

        <div className="ax-hero-panel">
          <p className="ax-wordmark">
            <span className="ax-wordmark-a">AXA</span>
            <span className="ax-wordmark-t">TEM</span>
            <span className="ax-wordmark-sub">správa nemovitostí · Ostrava</span>
          </p>

          <h1 className="ax-hero-title">
            Váš dům má<br />
            <em>svou kartu.</em><br />
            My ji vedeme.
          </h1>

          <p className="ax-hero-lead">
            Revize v termínu, vyúčtování bez chyb a člověk na telefonu, který váš
            dům zná jménem. Spravujeme bytové domy, SVJ a družstva v Ostravě a okolí.
          </p>

          <div className="ax-hero-akce">
            <a className="ax-btn" href="tel:+420739357492">Zavolat 739 357 492</a>
            <a className="ax-btn ax-btn-ghost" href="mailto:info@axatem.cz">Napsat na info@axatem.cz</a>
          </div>

          <dl className="ax-hero-fakta">
            <div>
              <dt>Vyúčtování</dt>
              <dd>vždy do 30. dubna</dd>
            </div>
            <div>
              <dt>Havárie</dt>
              <dd>zásah do 24 hodin</dd>
            </div>
            <div>
              <dt>Kancelář</dt>
              <dd>Ostrava, osobně po–st</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===================== SLUŽBY — KARTA DOMU ===================== */}
      <section className="ax-sekce" aria-labelledby="sluzby-h">
        <div className="ax-sekce-hlava">
          <p className="ax-razitko">Evidenční list</p>
          <h2 id="sluzby-h">Co za váš dům přebíráme</h2>
          <p className="ax-sekce-uvod">
            Každý spravovaný dům u nás má svou složku: ekonomiku, techniku i lidi.
            Tři agendy, jedna odpovědná kancelář.
          </p>
        </div>

        <div className="ax-karty">
          {sluzby.map((s) => (
            <article className="ax-karta" key={s.kod}>
              <div className="ax-karta-stitek">
                <span className="ax-karta-kod">{s.kod}</span>
                <span className="ax-karta-derovani" aria-hidden="true" />
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <ul>
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="ax-obraz">
          <img
            src="/section-1.webp"
            alt="Bytový dům v Ostravě, který spravuje kancelář Axatem"
          />
          <figcaption>
            Bytové domy, SVJ i družstva — od cihlových domů v centru po panelové
            domy na sídlištích.
          </figcaption>
        </figure>
      </section>

      {/* ===================== DŮVĚRA / KANCELÁŘ ===================== */}
      <section className="ax-sekce ax-sekce-tmava" aria-labelledby="kancelar-h">
        <div className="ax-duvera">
          <div className="ax-duvera-text">
            <p className="ax-razitko ax-razitko-svetle">Kancelář, ne call centrum</p>
            <h2 id="kancelar-h">Přijďte se poradit osobně</h2>
            <p>
              Nejsme anonymní správcovská firma s infolinkou. Jsme malá ostravská
              kancelář — když zavoláte, zvedne to člověk, který zná váš dům,
              vaše zálohy i jméno vaší předsedkyně výboru.
            </p>

            <table className="ax-hodiny">
              <caption>Úřední hodiny kanceláře</caption>
              <tbody>
                {zaznamy.map((z) => (
                  <tr key={z.den}>
                    <th scope="row">{z.den}</th>
                    <td>{z.cas}</td>
                    <td className="ax-hodiny-pozn">{z.pozn}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <blockquote className="ax-citace">
              <p>
                „Vyúčtování jsme poprvé dostali bez jediné reklamace. A když nám
                v neděli praskla stoupačka, do hodiny volal instalatér.“
              </p>
              <footer>— výbor SVJ, bytový dům se 48 jednotkami, Ostrava-Jih</footer>
            </blockquote>
          </div>

          <figure className="ax-duvera-obraz">
            <img
              src="/section-2.webp"
              alt="Pracovní stůl správce nemovitostí se složkami spravovaných domů"
            />
            <figcaption>
              Složky spravovaných domů: revizní zprávy, vyúčtování, zápisy ze
              shromáždění — vše dohledatelné na jednom místě.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
