const sluzby = [
  {
    krok: "Odhad",
    nazev: "Odhad ceny zdarma",
    text:
      "Přijedeme, projdeme nemovitost a řekneme vám reálnou tržní cenu — ne číslo, které se hezky poslouchá. Znáte tak dopředu, s čím můžete počítat.",
  },
  {
    krok: "Příprava",
    nazev: "Příprava a prezentace",
    text:
      "Nemovitost připravíme k prodeji: profesionální fotografie, videoprohlídka, půdorysy. Byt v Židenicích i sklep v Bosonohách si zaslouží stejnou péči.",
  },
  {
    krok: "Prodej",
    nazev: "Inzerce a prohlídky",
    text:
      "Inzerci řídíme my, prohlídky vedeme osobně. Zájemce prověříme dřív, než vám je přivedeme — váš čas i klid mají cenu.",
  },
  {
    krok: "Smlouvy",
    nazev: "Právní servis a předání",
    text:
      "Rezervační smlouva, kupní smlouva, úschova peněz, katastr, předávací protokol. Stojíme za vámi až do chvíle, kdy máte peníze na účtu a klíče předané.",
  },
];

const reference = [
  {
    titulek: "Skvělá péče v každém kroku prodeje",
    text:
      "Příjemný, odborný a profesionální přístup při zajištění inzerce, následných prohlídek nemovitosti i smluvní dokumentace, včetně spoluúčasti při předání.",
    datum: "únor 2026",
  },
  {
    titulek: "Profičky od srdce",
    text:
      "Chtěli bychom poděkovat za skvělou práci při prodeji našeho sklípku — video, fotky, celý průběh. Prostě profičky od srdce, celý kolektiv.",
    datum: "červen 2025",
  },
  {
    titulek: "Spolehlivé a odborné řešení",
    text:
      "Paní Vejtasová nám poskytla mimořádně kvalitní služby. Spolehlivost a schopnost najít řešení i ve složitějších situacích byly klíčové pro hladký průběh.",
    datum: "únor 2025",
  },
  {
    titulek: "Špičkové služby",
    text:
      "Profesionální jednání s kompletním servisem — v mém případě paní makléřka do koupeného bytu rovnou našla i nájemníky.",
    datum: "leden 2025",
  },
];

export default function Page() {
  return (
    <main className="pm">
      {/* ===== HERO ===== */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní">
          <span className="wordmark">
            Profi<em>makléřky</em>
          </span>
          <a className="nav-tel" href="tel:+420777071370">
            777 071 370
          </a>
        </nav>

        <div className="hero-inner">
          <p className="hero-eyebrow">Realitní kancelář · Brno</p>
          <h1 className="hero-title">
            <span className="hero-line line-1">Reality</span>
            <span className="hero-line line-2">
              v&nbsp;ženské<span className="hero-key" aria-hidden="true"></span>
            </span>
            <span className="hero-line line-3">péči.</span>
          </h1>
          <p className="hero-lead">
            Prodej nemovitosti je jeden z&nbsp;nejdůležitějších obchodů vašeho
            života. Provedeme vás jím s&nbsp;jistotou a&nbsp;péčí — a&nbsp;když
            bude potřeba, budeme vás i&nbsp;bránit.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420777071370">
              Zavolat makléřce
            </a>
            <a className="btn btn-line" href="#sluzby">
              Jak prodej probíhá
            </a>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>byty</span>
          <span>domy a vily</span>
          <span>pozemky</span>
          <span>komerční</span>
          <span>chaty</span>
        </div>
      </header>

      {/* ===== SLUŽBY / PRŮBĚH PRODEJE ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Od odhadu po předání klíčů</p>
          <h2 id="sluzby-h">
            Prodej vedeme za vás, <br />
            krok za krokem
          </h2>
        </div>

        <ol className="kroky">
          {sluzby.map((s) => (
            <li className="krok" key={s.krok}>
              <span className="krok-stitek">{s.krok}</span>
              <h3>{s.nazev}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="sluzby-pozn">
          Nevíte, na kolik si vaše nemovitost cenit? Začněte odhadem —{" "}
          <a href="tel:+420777071370">zavolejte na 777 071 370</a>, odhad ceny
          děláme zdarma a&nbsp;nezávazně, po celém Brně a&nbsp;okolí.
        </p>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-uvod">
          <div className="hodnoceni" role="img" aria-label="Hodnocení 4,8 z 5 hvězdiček na Google">
            <span className="hodnoceni-cislo">4,8</span>
            <span className="hodnoceni-hvezdy" aria-hidden="true">
              ★★★★★
            </span>
            <span className="hodnoceni-pop">hodnocení klientů na Google</span>
          </div>
          <div>
            <p className="eyebrow">Zákazníci nás doporučují</p>
            <h2 id="duvera-h">
              Postaráme se o&nbsp;vás <em>jako o&nbsp;vlastní</em>
            </h2>
            <p className="duvera-text">
              Za Profimakléřkami stojí Milada Vejtasová a&nbsp;tým žen, které
              v&nbsp;Brně prodávají nemovitosti roky. Neprodáváme „položky
              v&nbsp;inzerci" — prodáváme domovy lidí, kteří nám je svěřili.
            </p>
          </div>
        </div>

        <ul className="reference">
          {reference.map((r) => (
            <li className="ref" key={r.titulek}>
              <blockquote>
                <p className="ref-titulek">„{r.titulek}“</p>
                <p className="ref-text">{r.text}</p>
              </blockquote>
              <p className="ref-datum">{r.datum} · ověřená recenze</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
