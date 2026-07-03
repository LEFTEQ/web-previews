const sluzby = [
  {
    kod: "CZ",
    nazev: "Vnitrostátní přeprava",
    popis:
      "Rozvoz zboží po celé České republice — z Olomouce jsme na D35 za pár minut a do rána u vás. Kusové zásilky i celovozové náklady.",
    detail: "Do 24 hodin kdekoliv v ČR",
  },
  {
    kod: "EU",
    nazev: "Příhraniční mezinárodní přeprava",
    popis:
      "Pravidelné trasy na Slovensko, do Polska, Rakouska a Německa. Kompletní přepravní doklady a pojištění nákladu v ceně.",
    detail: "SK · PL · AT · DE",
  },
  {
    kod: "SP",
    nazev: "Spedice a logistika",
    popis:
      "Nemáte volné auto nebo řešíte atyp? Najdeme vhodného dopravce, pohlídáme termíny a vy dostanete jednu fakturu a jedno telefonní číslo.",
    detail: "Jeden kontakt na celou přepravu",
  },
];

const duvody = [
  {
    cislo: "608 780 978",
    titulek: "Dispečink zvedá telefon",
    text: "Žádná ústředna, žádné čekání. Voláte přímo dispečerovi, který ví, kde vaše zásilka právě je.",
  },
  {
    cislo: "Řepčín 250",
    titulek: "Sídlíme v Olomouci",
    text: "Nejsme anonymní schránka. Přijeďte se domluvit osobně — naložíme vás doslova za rohem.",
  },
  {
    cislo: "1 faktura",
    titulek: "Přeprava bez papírování",
    text: "Objednávku potvrdíme e-mailem do hodiny, dodací listy a CMR řešíme za vás. Vy jen naložíte a vyložíte.",
  },
];

export default function Page() {
  return (
    <main className="sb">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Sanbravia">
            <span className="wordmark-san">SAN</span>
            <span className="wordmark-bravia">BRAVIA</span>
            <span className="wordmark-sub">autodoprava · Olomouc</span>
          </div>
          <a className="hero-tel" href="tel:+420608780978">
            +420 608 780 978
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Vnitrostátní a příhraniční přeprava · spedice · logistika</p>
          <h1 className="hero-title">
            <span className="line line-1">Naložíme</span>
            <span className="line line-2">v&nbsp;Olomouci,</span>
            <span className="line line-3 line-accent">vyložíme,</span>
            <span className="line line-4 line-accent">kde řeknete.</span>
          </h1>
          <p className="hero-lead">
            Rodinná autodoprava z olomouckého Řepčína. Jezdíme po Česku i přes hranice —
            a když nám zavoláte, mluvíte rovnou s člověkem, který vaši zásilku poveze.
          </p>
          <div className="hero-akce">
            <a className="btn btn-hlavni" href="tel:+420608780978">
              Zavolat dispečink
            </a>
            <a className="btn btn-vedlejsi" href="mailto:sanbravia@seznam.cz">
              Poslat poptávku e-mailem
            </a>
          </div>
        </div>

        {/* Signature: tachograf / silniční pás */}
        <div className="road" aria-hidden="true">
          <div className="road-line">
            <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
          </div>
          <div className="road-stops">
            <span className="stop stop-start">OLOMOUC</span>
            <span className="stop">BRNO</span>
            <span className="stop">PRAHA</span>
            <span className="stop">OSTRAVA</span>
            <span className="stop">BRATISLAVA</span>
            <span className="stop">KATOWICE</span>
            <span className="stop">WIEN</span>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <h2 id="sluzby-nadpis">Co pro vás odvezeme</h2>
          <p>
            Tři služby, žádné hvězdičky. Cenu vám řekneme po telefonu do pár minut —
            stačí odkud, kam a co vezeme.
          </p>
        </div>

        <div className="sluzby-mriz">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.kod}>
              <div className="sluzba-znacka" aria-hidden="true">
                {s.kod}
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="sekce-hlava sekce-hlava-svetla">
          <h2 id="duvera-nadpis">Proč nakládají u nás</h2>
          <p>
            Malá firma má jednu výhodu, kterou velcí dopravci nedoženou: u nás vás zná
            dispečer jménem.
          </p>
        </div>

        <div className="duvera-mriz">
          {duvody.map((d) => (
            <div className="duvod" key={d.titulek}>
              <p className="duvod-cislo">{d.cislo}</p>
              <h3>{d.titulek}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        <blockquote className="reference">
          <p>
            „Potřebovali jsme narychlo odvézt palety z Olomouce do Žiliny. V pátek odpoledne
            telefon, v sobotu ráno naloženo. Tohle vám žádný velký dopravce neudělá.“
          </p>
          <footer className="reference-autor">— zákazník z Olomouce, strojírenská výroba</footer>
        </blockquote>
      </section>
    </main>
  );
}
