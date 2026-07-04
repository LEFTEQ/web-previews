import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KP Attic — sádrokartonář Brno | suchá výstavba, podhledy, protipožární ochrana",
  description:
    "Sádrokartonové konstrukce, minerální a akustické podhledy, suché podlahy a certifikovaná protipožární ochrana v Brně. Osobní návštěva, poradenství i cenová nabídka zdarma.",
  openGraph: {
    title: "KP Attic — suchá výstavba a sádrokarton, Brno",
    description:
      "Konstrukce ze sádrokartonu, podhledy a certifikovaná protipožární ochrana systémy Knauf, Rigips, Lafarge a Promat. Cenová nabídka zdarma.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    cislo: "01",
    nazev: "Sádrokartonové konstrukce",
    popis:
      "Příčky, předsazené stěny a podkroví na míru. Rovné plochy připravené k malování, s ostrými hranami a dodrženými dilatacemi.",
    detail: "Knauf · Rigips · Lafarge Gips",
  },
  {
    cislo: "02",
    nazev: "Minerální a akustické podhledy",
    popis:
      "Kazetové i celoplošné podhledy pro kanceláře, ordinace a byty. Tam, kde je potřeba ztlumit hluk, montujeme akustické obklady.",
    detail: "Kazety 600×600 · rošt",
  },
  {
    cislo: "03",
    nazev: "Protipožární ochrana",
    popis:
      "Certifikovaná ochrana stavebních konstrukcí, vzduchotechniky a kabelových tras sádrokartonovými systémy. S protokolem pro kolaudaci.",
    detail: "Promat · certifikace",
  },
  {
    cislo: "04",
    nazev: "Suché podlahy a omítky",
    popis:
      "Suchá výstavba bez mokrého procesu a bez dlouhého schnutí. Rychlejší předání, čistší stavba, méně nepořádku v bytě.",
    detail: "suchý proces",
  },
  {
    cislo: "05",
    nazev: "Dokončovací práce",
    popis:
      "Obklady, malby a elektro pod jednou firmou. Se spřátelenou partou na vodu a topení zvládneme rekonstrukci v jednom balíku.",
    detail: "obklady · malba · elektro",
  },
];

export default function Page() {
  return (
    <main className="kp">
      <header className="kp-nav" aria-label="Hlavní">
        <a className="kp-brand" href="#top" aria-label="KP Attic, domů">
          <span className="kp-brand-mark" aria-hidden="true">
            <span className="kp-brand-panel" />
            <span className="kp-brand-panel" />
            <span className="kp-brand-panel" />
          </span>
          <span className="kp-brand-word">
            KP<span className="kp-brand-thin">Attic</span>
          </span>
        </a>
        <nav className="kp-nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#firma">O firmě</a>
          <a className="kp-nav-call" href="tel:+420777000000">
            777 000 000
          </a>
        </nav>
      </header>

      <section className="kp-hero" id="top">
        <div className="kp-hero-grid" aria-hidden="true">
          {Array.from({ length: 96 }).map((_, i) => (
            <span key={i} className="kp-stud" style={{ animationDelay: `${(i % 12) * 40 + Math.floor(i / 12) * 24}ms` }} />
          ))}
        </div>

        <div className="kp-hero-inner">
          <p className="kp-eyebrow">Suchá výstavba · Brno a okolí</p>
          <h1 className="kp-hero-title">
            <span className="kp-line kp-line-1">Rovná stěna</span>
            <span className="kp-line kp-line-2">za&nbsp;pár dní,</span>
            <span className="kp-line kp-line-3">bez&nbsp;mokra.</span>
          </h1>
          <p className="kp-hero-lead">
            KP Attic staví ze sádrokartonu — příčky, podhledy i podlahy suchou
            cestou. Žádné týdny schnutí, žádný nepořádek v bytě. Přijedeme,
            poradíme a cenovou nabídku uděláme zdarma.
          </p>
          <div className="kp-hero-cta">
            <a className="kp-btn" href="tel:+420777000000">
              Zavolat a domluvit prohlídku
            </a>
            <a className="kp-btn kp-btn-ghost" href="mailto:info@kpattic.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="kp-hero-meta">
            <div>
              <dt>Nabídka</dt>
              <dd>zdarma</dd>
            </div>
            <div>
              <dt>Systémy</dt>
              <dd>Knauf · Rigips · Promat</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Brno-město i venkov</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="kp-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="kp-section-head">
          <p className="kp-eyebrow kp-eyebrow-dark">Co postavíme</p>
          <h2 id="sluzby-nadpis">Od jedné příčky po celou rekonstrukci</h2>
          <p className="kp-section-lead">
            Děláme kompletní suchou výstavbu. Když je potřeba, vezmeme na sebe
            i obklady, malbu a elektro — abyste neháněli tři party najednou.
          </p>
        </div>

        <ol className="kp-cards">
          {sluzby.map((s) => (
            <li key={s.cislo} className="kp-card">
              <span className="kp-card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="kp-card-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <span className="kp-card-tag">{s.detail}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="kp-firma" id="firma" aria-labelledby="firma-nadpis">
        <div className="kp-firma-inner">
          <div className="kp-firma-text">
            <p className="kp-eyebrow">Kdo za tím stojí</p>
            <h2 id="firma-nadpis">
              Řemeslo, které je vidět až&nbsp;po&nbsp;malování
            </h2>
            <p>
              KP Attic dělá suchou výstavbu v Brně a okolí — sádrokartonové
              konstrukce, minerální a akustické podhledy, suché podlahy i suché
              omítky. Práci předáváme rovnou a připravenou tak, aby další
              řemeslníci navázali bez dohadování.
            </p>
            <p>
              Certifikovanou protipožární ochranu konstrukcí, vzduchotechniky a
              kabelových rozvodů řešíme systémy Knauf, Lafarge Gips, Rigips a
              Promat — s protokolem, který obstojí u kolaudace. Osobní návštěva,
              poradenství i cenová nabídka jsou u nás vždy zdarma.
            </p>
          </div>

          <ul className="kp-firma-facts">
            <li>
              <span className="kp-fact-label">Sídlo</span>
              <span className="kp-fact-value">Brno</span>
            </li>
            <li>
              <span className="kp-fact-label">Certifikace</span>
              <span className="kp-fact-value">Protipožární ochrana Promat</span>
            </li>
            <li>
              <span className="kp-fact-label">Spolupráce</span>
              <span className="kp-fact-value">ZTI, elektro, obklady, malby</span>
            </li>
            <li>
              <span className="kp-fact-label">Ozvěte se</span>
              <span className="kp-fact-value">
                <a href="tel:+420777000000">777 000 000</a>
                <br />
                <a href="mailto:info@kpattic.cz">info@kpattic.cz</a>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
