const trasy = [
  {
    kod: "PED → AYT",
    mesto: "Antalya",
    zeme: "Turecko",
    doba: "3 h 05 min",
    popis: "Přímé charterové lety z Pardubic. Hotely s all inclusive u pláže Lara i klidnější Side — vybíráme podle toho, jestli letíte s dětmi, nebo ve dvou.",
  },
  {
    kod: "PED → HRG",
    mesto: "Hurghada",
    zeme: "Egypt",
    doba: "4 h 20 min",
    popis: "Rudé moře celoročně. Korálové útesy přímo u hotelové pláže, šnorchlování bez lodního výletu. Nejlepší ceny mimo hlavní prázdniny.",
  },
  {
    kod: "PED → RHO",
    mesto: "Rhodos",
    zeme: "Řecko",
    doba: "2 h 45 min",
    popis: "Řecké ostrovy bez přestupu v Praze. Rodinné hotely na východním pobřeží, taverny a staré město pod hradbami johanitů.",
  },
  {
    kod: "PED → BOJ",
    mesto: "Burgas",
    zeme: "Bulharsko",
    doba: "1 h 55 min",
    popis: "Nejkratší let na moře, jaký z Pardubic pořídíte. Slunečné pobřeží pro rodiny s menším rozpočtem — a bez kompromisu na kvalitě hotelu.",
  },
];

const sluzby = [
  {
    stitek: "ODBAVENÍ",
    titulek: "Z Pardubic, ne z Prahy",
    text: "Na letiště to máte deset minut, parkujete zdarma a u odbavení stojíte pár minut. Žádné vstávání ve tři ráno kvůli dálnici D11.",
  },
  {
    stitek: "VÝBĚR",
    titulek: "Zájezd vybíráme s vámi",
    text: "Přijďte do kanceláře na třídě Míru nebo zavolejte. Projdeme spolu termíny, hotely známe z vlastních inspekčních cest — řekneme vám i to, co v katalogu nenajdete.",
  },
  {
    stitek: "POJIŠTĚNÍ",
    titulek: "Pojištěni proti úpadku",
    text: "Flightics s.r.o. je pojištěna proti úpadku dle zákona č. 159/1999 Sb. Vaše peníze jsou kryté od zálohy až po návrat domů.",
  },
  {
    stitek: "NA CESTĚ",
    titulek: "Delegát, který zvedá telefon",
    text: "V každé destinaci máme česky mluvícího delegáta. Zpožděný kufr, změna pokoje, doktor — řešíme na místě, ne e-mailem za tři dny.",
  },
];

const reference = [
  {
    jmeno: "Marcela K., Pardubice-Polabiny",
    text: "Letěli jsme s dětmi do Antalye. Odbavení v Pardubicích trvalo dvacet minut, děti to zvládly bez breku. Hotel přesně podle popisu — paní v kanceláři nám ho vyloženě rozmluvila a nabídla lepší za stejné peníze.",
    trasa: "Antalya, srpen 2024",
  },
  {
    jmeno: "Petr a Jana V., Chrudim",
    text: "Poprvé jsme letěli z Pardubic místo z Prahy a už se nevrátíme. Auto na parkovišti u terminálu, za dvě hodiny na Rhodu. Delegátka nám pomohla přebookovat výlet, když pršelo.",
    trasa: "Rhodos, červen 2024",
  },
  {
    jmeno: "Rodina Doležalových, Holice",
    text: "Hurghada v listopadu — skvělá rada, jak utéct plískanicím. Moře 26 stupňů, hotel poloprázdný, cena o třetinu nižší než v létě. Příští rok bereme i babičku.",
    trasa: "Hurghada, listopad 2024",
  },
];

export default function Page() {
  return (
    <main className="ft">
      {/* ===== HERO — odletová tabule ===== */}
      <header className="hero" aria-label="Flightics — cestovní kancelář Pardubice">
        <div className="hero-top">
          <span className="wordmark">
            FLIGHT<span className="wordmark-ics">ICS</span>
          </span>
          <span className="hero-tag">Cestovní kancelář · Pardubice</span>
        </div>

        <div className="hero-main">
          <p className="hero-eyebrow">Odlety z letiště Pardubice — brána k moři pro východní Čechy</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">K moři</span>
            <span className="hero-line hero-line-2">se lítá</span>
            <span className="hero-line hero-line-3">z&nbsp;Pardubic.</span>
          </h1>
          <p className="hero-sub">
            Charterové lety a zájezdy s odletem 10 minut od centra. Parkování zdarma,
            odbavení bez front, delegát v destinaci. Praha je zbytečná zajížďka.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#trasy">Prohlédnout odlety</a>
            <a className="btn btn-ghost" href="#duvera">Proč s námi</a>
          </div>
        </div>

        {/* Signature: split-flap odletová tabule */}
        <div className="board" role="table" aria-label="Odletová tabule — přímé lety z Pardubic">
          <div className="board-head" role="row">
            <span role="columnheader">LET</span>
            <span role="columnheader">DESTINACE</span>
            <span role="columnheader" className="board-col-time">DOBA LETU</span>
            <span role="columnheader" className="board-col-status">STAV</span>
          </div>
          {trasy.map((t, i) => (
            <div className="board-row" role="row" key={t.kod} style={{ animationDelay: `${0.15 * i + 0.4}s` }}>
              <span className="board-code" role="cell">{t.kod}</span>
              <span className="board-dest" role="cell">{t.mesto} <em>{t.zeme}</em></span>
              <span className="board-time board-col-time" role="cell">{t.doba}</span>
              <span className="board-status board-col-status" role="cell">V PRODEJI</span>
            </div>
          ))}
        </div>
      </header>

      {/* ===== SEKCE 1 — Destinace / trasy ===== */}
      <section className="sec sec-trasy" id="trasy" aria-labelledby="trasy-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Přímé lety · léto i zima</p>
          <h2 className="sec-title" id="trasy-h">Kam odlétáte z&nbsp;Pardubic</h2>
          <p className="sec-lead">
            Každou trasu jsme sami proletěli a hotely prošli na inspekčních cestách.
            Doba letu se měří od ranveje v Popkovicích — ne od vašich dveří v Praze.
          </p>
        </div>

        <div className="trasy-grid">
          {trasy.map((t) => (
            <article className="trasa" key={t.kod}>
              <div className="trasa-route">
                <span className="trasa-code">PED</span>
                <span className="trasa-path" aria-hidden="true">
                  <span className="trasa-dash" />
                  <svg className="trasa-plane" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path fill="currentColor" d="M21.5 15.5l-8.1-4.9V4.2c0-.9-.6-1.7-1.4-1.7s-1.4.8-1.4 1.7v6.4L2.5 15.5v1.9l8.1-2.5v4.6l-2.2 1.6v1.4l3.6-1 3.6 1v-1.4l-2.2-1.6v-4.6l8.1 2.5v-1.9z"/>
                  </svg>
                  <span className="trasa-dash" />
                </span>
                <span className="trasa-code">{t.kod.slice(-3)}</span>
              </div>
              <h3 className="trasa-mesto">{t.mesto} <span className="trasa-zeme">{t.zeme}</span></h3>
              <p className="trasa-doba">✈ {t.doba} přímým letem</p>
              <p className="trasa-popis">{t.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== SEKCE 2 — Důvěra / jak to u nás chodí ===== */}
      <section className="sec sec-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="sec-head">
          <p className="sec-eyebrow sec-eyebrow-light">Kancelář na třídě Míru · od roku 2016</p>
          <h2 className="sec-title sec-title-light" id="duvera-h">Malá kancelář. Velká výhoda.</h2>
          <p className="sec-lead sec-lead-light">
            Nejsme portál se stovkami operátorů. Jsme čtyři lidé v Pardubicích,
            kteří znají každý hotel, který prodávají — a každého klienta jménem.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.stitek}>
              <span className="sluzba-stitek">{s.stitek}</span>
              <h3 className="sluzba-titulek">{s.titulek}</h3>
              <p className="sluzba-text">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="ref-blok">
          <h3 className="ref-nadpis">Napsali nám po návratu</h3>
          <div className="ref-grid">
            {reference.map((r) => (
              <figure className="ref" key={r.jmeno}>
                <blockquote className="ref-text">„{r.text}“</blockquote>
                <figcaption className="ref-meta">
                  <span className="ref-jmeno">{r.jmeno}</span>
                  <span className="ref-trasa">{r.trasa}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
