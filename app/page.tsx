import type { CSSProperties } from "react";

export default function Page() {
  const systemy = [
    {
      kod: "SDK",
      nazev: "Sádrokartonové systémy",
      popis:
        "Nosný rošt z CW/UW profilů, opláštění deskou, přetmelení Q2–Q4. Stavíme dělicí stěny, předsazené konstrukce i šachtové obklady — s protipožární i akustickou variantou desky podle toho, co za stěnou má být slyšet.",
    },
    {
      kod: "PDH",
      nazev: "Podhledové systémy",
      popis:
        "Zavěšené i samonosné podhledy včetně zaoblení, světelných kapes a přechodů okolo vzduchotechniky. Rovina se u nás měří latí, ne od oka — spára mezi deskami sedí na milimetry.",
    },
    {
      kod: "PŘČ",
      nazev: "Montované příčky",
      popis:
        "Suchá cesta k novému členění dispozice. Jednoduše i dvojitě opláštěné příčky s minerální izolací pro útlum, hotové za dny, ne týdny — bez bourání a bez mokrého procesu.",
    },
    {
      kod: "ZDP",
      nazev: "Zdvojené podlahy",
      popis:
        "Zdvojené a dutinové podlahy pro kanceláře a technické provozy — kabeláž a rozvody schované pod nášlapem, přístupné kdykoli zvednutím dlaždice.",
    },
  ];

  const reference = [
    { misto: "Stanice metra A", detail: "Skalka, Praha 10" },
    { misto: "BBC — Budova A", detail: "Brumlovka, Praha 4" },
  ];

  return (
    <main className="kmt">
      <header className="kmt-top">
        <a className="kmt-mark" href="#" aria-label="KOMONT — úvod">
          <span className="kmt-mark-k">KO</span>
          <span className="kmt-mark-line" aria-hidden="true" />
          <span className="kmt-mark-m">MONT</span>
        </a>
        <nav className="kmt-nav" aria-label="Hlavní">
          <a href="#systemy">Systémy</a>
          <a href="#firma">Firma</a>
          <a className="kmt-tel" href="tel:+420602111390">
            +420 602 111 390
          </a>
        </nav>
      </header>

      <section className="kmt-hero" aria-labelledby="hero-nadpis">
        <div className="kmt-hero-img">
          <img
            src="/hero.webp"
            alt="Rozestavěná sádrokartonová konstrukce — svislé CW profily roštu před opláštěním deskou."
            width={1600}
            height={1200}
          />
          <span className="kmt-hero-veil" aria-hidden="true" />
        </div>

        <div className="kmt-hero-text">
          <p className="kmt-eyebrow">Suché interiérové technologie · Praha · od 1992</p>
          <h1 id="hero-nadpis">
            Nejdřív postavíme
            <br />
            <span className="kmt-hl">rošt</span>. Pak zmizí ve stěně.
          </h1>
          <p className="kmt-lead">
            Sádrokartonáři z KOMONTu. Příčky, podhledy a zdvojené podlahy montujeme
            suchou cestou — bez bourání a bez čekání na to, až vyschne malta.
            Rovinu měříme latí a na práci dáváme záruku nejméně 36 měsíců.
          </p>
          <div className="kmt-hero-cta">
            <a className="kmt-btn" href="tel:+420602111390">
              Zavolat na 602 111 390
            </a>
            <a className="kmt-btn kmt-btn-ghost" href="#systemy">
              Co montujeme
            </a>
          </div>
        </div>

        <dl className="kmt-spec" aria-label="Parametry firmy">
          <div>
            <dt>Rošt</dt>
            <dd>CW / UW profil</dd>
          </div>
          <div>
            <dt>Kmenoví montéři</dt>
            <dd>20 vyškolených</dd>
          </div>
          <div>
            <dt>Záruka</dt>
            <dd>min. 36 měsíců</dd>
          </div>
          <div>
            <dt>Normy</dt>
            <dd>ČSN · EU</dd>
          </div>
        </dl>
      </section>

      <section className="kmt-sec" id="systemy" aria-labelledby="systemy-nadpis">
        <div className="kmt-sec-head">
          <p className="kmt-eyebrow">Čtyři suché technologie</p>
          <h2 id="systemy-nadpis">Co pro vás postavíme</h2>
          <p className="kmt-sec-lead">
            Kód u každé položky je zkratka, kterou používáme na výkresech i v
            cenové nabídce — ať víte, o čem je řeč, ještě než přijedeme na obhlídku.
          </p>
        </div>

        <ol className="kmt-systemy">
          {systemy.map((s) => (
            <li key={s.kod} className="kmt-sys">
              <span className="kmt-sys-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="kmt-sys-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="kmt-figure">
          <img
            src="/section-1.webp"
            alt="Detail zavěšeného sádrokartonového podhledu s přiznanou spárou a rovným povrchem připraveným k malbě."
            width={1600}
            height={1000}
          />
          <figcaption>
            Podhled po přetmelení do stupně Q3 — připravený rovnou pod malbu.
          </figcaption>
        </figure>
      </section>

      <section className="kmt-sec kmt-sec-firma" id="firma" aria-labelledby="firma-nadpis">
        <div className="kmt-firma-grid">
          <div className="kmt-firma-text">
            <p className="kmt-eyebrow">Firma od roku 1992</p>
            <h2 id="firma-nadpis">Třicet let na pražských stavbách</h2>
            <p>
              KOMONT jsme založili v roce 1992 a od té doby jsme rozsah prací
              rozšířili na plný sortiment suchých interiérových technologií. Máme
              dvacet kmenových montérů — a když si to zakázka žádá, počet zvýšíme.
            </p>
            <p>
              Lidé, kteří konstrukce montují, chodí pravidelně na školení přímo u
              výrobců systémů. Garantujeme, že provedení odpovídá technickým
              předpisům výrobce i normám ČSN a EU. Záruku dáváme nejméně 36 měsíců,
              po dohodě i delší.
            </p>

            <ul className="kmt-ref" aria-label="Vybrané realizace">
              {reference.map((r) => (
                <li key={r.misto}>
                  <strong>{r.misto}</strong>
                  <span>{r.detail}</span>
                </li>
              ))}
            </ul>

            <p className="kmt-kontakt-line">
              Poptávka na míru:{" "}
              <a href="mailto:komont@komont.cz">komont@komont.cz</a>
            </p>
          </div>

          <figure className="kmt-firma-img">
            <img
              src="/section-2.webp"
              alt="Montér KOMONTu při práci na sádrokartonové konstrukci na pražské stavbě."
              width={1200}
              height={1500}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
