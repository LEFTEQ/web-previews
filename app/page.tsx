export const metadata = {
  title: "Správa domů Plzeň s.r.o. — správa bytových domů a SVJ v Plzni",
  description:
    "Kompletní správa bytových domů, SVJ a družstev v Plzni. Účetnictví, vyúčtování služeb, technická údržba, havarijní servis. Havířská 3, Plzeň. Volejte 777 322 897.",
  openGraph: {
    title: "Správa domů Plzeň s.r.o.",
    description:
      "Váš dům v pořádku — účetnictví, vyúčtování, údržba a havarijní servis pro bytové domy a SVJ v Plzni.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    id: "UC",
    nazev: "Účetnictví a vyúčtování",
    popis:
      "Vedeme účetnictví SVJ i družstev, hlídáme předpisy záloh a jednou ročně dostane každý vlastník srozumitelné vyúčtování služeb. Bez chyb a včas — do 30. dubna.",
    detail: "předpisy · zálohy · roční vyúčtování · daňová přiznání",
  },
  {
    id: "TE",
    nazev: "Technická správa",
    popis:
      "Pravidelné revize výtahů, kotelen, hasicích přístrojů a elektro. Plánujeme opravy dopředu, aby dům nechátral a fond oprav se utrácel rozumně.",
    detail: "revize · plán oprav · výběr dodavatelů · dozor prací",
  },
  {
    id: "HA",
    nazev: "Havarijní servis",
    popis:
      "Prasklá stoupačka nepočká na pracovní dobu. Naše havarijní linka funguje nonstop a řemeslníky posíláme z Plzně, ne z druhého konce kraje.",
    detail: "voda · plyn · elektro · zámky — nonstop linka",
  },
  {
    id: "SH",
    nazev: "Shromáždění a agenda SVJ",
    popis:
      "Připravíme podklady, pozvánky i hlasování, shromáždění odřídíme a zápis dodáme do týdne. Výbor má o starost méně, vlastníci mají přehled.",
    detail: "pozvánky · hlasování per rollam · zápisy · rejstřík",
  },
];

const duvody = [
  {
    cislo: "26 let",
    text: "spravujeme domy v Plzni. Známe tady každou kotelnu, každý výtah a většinu domovníků jménem.",
  },
  {
    cislo: "1 správce",
    text: "na dům — vždy stejný člověk, který zná váš vchod. Žádné call centrum, žádné přepojování.",
  },
  {
    cislo: "48 hodin",
    text: "maximálně čekáte na odpověď. Na e-mail i na dotaz z výboru. Havárie řešíme okamžitě.",
  },
];

export default function Page() {
  return (
    <main className="sd">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Správa domů Plzeň">
            <span className="wm-mark" aria-hidden="true">
              <i /><i /><i /><i /><i /><i />
            </span>
            <span className="wm-text">
              Správa domů <b>Plzeň</b>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420777322897">
            777 322 897
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Správa bytových domů, SVJ a družstev · Plzeň</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Váš dům.</span>
            <span className="ht-line ht-2">Naše&nbsp;starost.</span>
          </h1>
          <p className="hero-lead">
            Účetnictví, vyúčtování, revize i havárie ve tři ráno — všechno, co
            bytový dům potřebuje, pod jednou střechou na Havířské&nbsp;3.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420777322897">
              Zavolat správci
            </a>
            <a className="btn btn-line" href="mailto:servis@sdplzen.cz">
              Napsat na servis@sdplzen.cz
            </a>
          </div>
        </div>

        {/* Signature: fasáda — okenní rastr plzeňského činžáku */}
        <div className="fasada" aria-hidden="true">
          <div className="fasada-grid">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className={`okno${[2, 7, 9, 13, 16, 21].includes(i) ? " okno-svit" : ""}`}
              />
            ))}
          </div>
          <div className="fasada-rimsa" />
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <h2 id="sluzby-h">Co pro váš dům děláme</h2>
          <p>
            Čtyři věci, které musí fungovat, aby se ve vašem domě dobře bydlelo.
            Domluvíme se na všech, nebo jen na té, která vás pálí.
          </p>
        </div>
        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.id}>
              <span className="sluzba-stitek" aria-hidden="true">
                {s.id}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ DŮVĚRA ============ */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-in">
          <div className="duvera-text">
            <h2 id="duvera-h">Malá firma z Havířské. Schválně.</h2>
            <p>
              Nejsme celostátní síť. Sídlíme na Havířské 3 kousek od nádraží a
              spravujeme domy, ke kterým dojedeme do dvaceti minut — Bory,
              Slovany, Doubravka, Lochotín, centrum. Když se něco děje, jsme na
              místě, ne na telefonu.
            </p>
            <p>
              Výbor SVJ od nás dostává čísla, kterým rozumí, vlastníci
              vyúčtování, nad kterým se nemusí mračit, a dům správce, který ho
              zná jménem i popisným číslem.
            </p>
            <blockquote className="reference">
              <p>
                „Po letech s velkou správcovskou firmou je to úleva. Paní
                Kortanová zvedá telefon a vyúčtování máme poprvé bez
                jediné reklamace.“
              </p>
              <footer>— předseda výboru SVJ, Slovany, dům o 24 jednotkách</footer>
            </blockquote>
          </div>
          <dl className="duvera-cisla">
            {duvody.map((d) => (
              <div className="cislo" key={d.cislo}>
                <dt>{d.cislo}</dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
