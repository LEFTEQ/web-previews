import type { CSSProperties } from "react";

export default function Page() {
  const moduly = [
    {
      kod: "01",
      nazev: "Fakturace a doklady",
      popis: "Vystavte fakturu za pár vteřin, hlídejte splatnosti a párujte platby z výpisu. Doklady posíláte přímo z programu, v PDF i do datové schránky.",
    },
    {
      kod: "02",
      nazev: "Účetní deník a DPH",
      popis: "Podvojné účetnictví i daňová evidence pod jednou střechou. Kontrolní hlášení a přiznání k DPH vyplníte přímo z knih a odešlete na finanční správu.",
    },
    {
      kod: "03",
      nazev: "Mzdy a personalistika",
      popis: "Výplaty, srážky, ELDP i nové Jednotné měsíční hlášení (JMHZ). Legislativní změny zapracováváme dřív, než vejdou v účinnost.",
    },
    {
      kod: "04",
      nazev: "Sklad a čárové kódy",
      popis: "Skladová evidence přes čtečku a čárové kódy, naskladnění i výdejky. Běží svižně i na běžném kancelářském počítači.",
    },
  ];

  const reference = [
    {
      firma: "BRILAS",
      osoba: "Ing. Martin Kubíček — majitel",
      text: "Účetní systém EKONOM používáme přes 10 let a vyhovuje mě i všem zaměstnancům pro svou jednoduchost a rychlost. Zatím jsme nenarazili na nic v běžném chodu středně velké firmy, s čím by si program neporadil.",
    },
    {
      firma: "JASTR ELEKTRO",
      osoba: "Ing. Jan Strouhal — vedoucí skladu",
      text: "Využíváme hlavně skladovou evidenci, všechno jedeme přes čárové kódy a android čtečku. Intuitivní ovládání a rychlá odezva i na průměrném PC. Dokonce nám doprogramovali na zakázku speciální funkce.",
    },
    {
      firma: "LAUTIA, s.r.o.",
      osoba: "Luděk Vaňkát — jednatel",
      text: "Dvacet let vedeme účetnictví více než 300 zákazníkům. Program EKONOM nám pomáhá udržet klidné spaní — uživatelská přístupnost, bezproblémové aktualizace a kvalita výstupů.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="EKONOM System, účetní program">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="wordmark__eq">=</span>
          </span>
          <span className="wordmark__text">
            EKONOM<span className="wordmark__sys">System</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní nabídka">
          <a href="#moduly">Moduly</a>
          <a href="#reference">Reference</a>
          <a className="topnav__cta" href="tel:+420387007777">387 007 777</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Účetní software · České Budějovice</p>
            <h1 id="hero-title">
              Účetnictví, které vám
              <span className="hero__hi"> sedí do řádku.</span>
            </h1>
            <p className="hero__lead">
              Fakturace, DPH, mzdy i sklad v jednom programu EKONOM System.
              Vedeme účetnictví českým firmám už od roku 2007 — a novou
              legislativu zapracováváme dřív, než začne platit.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#moduly">
                Vyzkoušet zdarma
              </a>
              <a className="btn btn--ghost" href="tel:+420387007777">
                Zavolat 387 007 777
              </a>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Verze</dt>
                <dd>2026/04</dd>
              </div>
              <div>
                <dt>Na trhu od</dt>
                <dd>2007</dd>
              </div>
              <div>
                <dt>Podpora</dt>
                <dd>české ruce</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              width={880}
              height={1040}
              alt="Program EKONOM System otevřený na obrazovce s účetními doklady"
            />
            <figcaption className="hero__tape">
              <span className="hero__tapeItem">FAKTURA · DPH · MZDY · SKLAD</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="moduly" id="moduly" aria-labelledby="moduly-title">
        <div className="sectionhead">
          <p className="eyebrow">Co program umí</p>
          <h2 id="moduly-title">Čtyři agendy, jeden program</h2>
          <p className="sectionhead__lead">
            Nekupujete pět různých aplikací. Fakturaci, účtování, mzdy i
            skladovou evidenci vyřídíte na jednom místě — a data si mezi sebou
            samy předají.
          </p>
        </div>
        <ol className="ledger">
          {moduly.map((m) => (
            <li className="ledger__row" key={m.kod}>
              <span className="ledger__kod">{m.kod}</span>
              <div className="ledger__body">
                <h3>{m.nazev}</h3>
                <p>{m.popis}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="moduly__shot">
          <img
            src="/section-1.webp"
            width={1200}
            height={720}
            alt="Přehledné sestavy a účetní deník v programu EKONOM System"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="reference" id="reference" aria-labelledby="reference-title">
        <div className="reference__intro">
          <figure className="reference__media">
            <img
              src="/section-2.webp"
              width={1000}
              height={760}
              alt="Zákazníci pracující s účetním programem EKONOM System"
              loading="lazy"
            />
          </figure>
          <div className="reference__head">
            <p className="eyebrow">Ověřeno praxí</p>
            <h2 id="reference-title">
              Firmy, které nám svěřily svoje knihy
            </h2>
            <p className="reference__lead">
              Od velkoobchodu s elektroinstalací po účetní kanceláře se stovkami
              klientů. Spojuje je jedno — potřebují mít účetnictví v pořádku a
              podporu, která zvedne telefon.
            </p>
          </div>
        </div>
        <ul className="quotes">
          {reference.map((r) => (
            <li className="quote" key={r.firma}>
              <p className="quote__text">„{r.text}“</p>
              <p className="quote__firma">{r.firma}</p>
              <p className="quote__osoba">{r.osoba}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// keep CSSProperties import used-safe for strict setups
const _t: CSSProperties = {};
void _t;
