export const metadata = {
  title: "LUKDA trans — autodoprava Ústí nad Labem | Hotline 24 h",
  description:
    "LUKDA trans spol. s r.o. — vnitrostátní a mezinárodní kamionová doprava z Ústí nad Labem. Dispečink na telefonu 24 hodin denně: +420 739 050 444.",
  openGraph: {
    title: "LUKDA trans — autodoprava Ústí nad Labem",
    description:
      "Kamionová a nákladní doprava po ČR i Evropě. Dispečink 24 h denně, vlastní flotila, zázemí v Ústí nad Labem.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    kod: "FTL",
    nazev: "Celovozové přepravy",
    popis:
      "Kamion jen pro váš náklad. Plachtové návěsy do 24 tun, nakládka po celé ČR, vykládka kdekoli v Evropě. Termín držíme na hodinu.",
    trasa: "ČR → celá Evropa",
  },
  {
    kod: "LTL",
    nazev: "Dokládky a sběrná služba",
    popis:
      "Nemáte na celý kamion? Váš náklad přiložíme na pravidelné linky přes Německo a Benelux. Platíte jen za místo, které skutečně zaberete.",
    trasa: "linky přes DE / BeNeLux",
  },
  {
    kod: "EXP",
    nazev: "Expresní přepravy",
    popis:
      "Stojí vám výroba kvůli chybějícímu dílu? Dispečer vám do 30 minut potvrdí auto a vy sledujete, kde právě jede. I v noci, i o víkendu.",
    trasa: "nakládka do 3 hodin",
  },
  {
    kod: "SKL",
    nazev: "Prostory k pronájmu",
    popis:
      "V našem areálu v Ústí nad Labem pronajímáme skladové a manipulační plochy. Zboží přeložíme, uskladníme a naložíme na další cestu.",
    trasa: "areál Ústí nad Labem",
  },
];

const zasady = [
  {
    cislo: "24 h",
    titulek: "Dispečink nikdy nespí",
    text: "Na hotline +420 739 050 444 se dovoláte ve dvě odpoledne i ve dvě ráno. Řidiči jezdí, dispečer bdí — proto to číslo máme na každém autě.",
  },
  {
    cislo: "1 tým",
    titulek: "Od řidiče po majitele",
    text: "Firmu vede Lukáš Budaj a zná každého řidiče jménem. Malý, sehraný tým znamená, že se k vaší zakázce nikdo nechová jako k číslu v systému.",
  },
  {
    cislo: "0 překvapení",
    titulek: "Cena dopředu, písemně",
    text: "Objednávku potvrzujeme vždy písemně z ověřených kontaktů firmy. Pozor na falešné objednávky zneužívající naše jméno — ověřte si číslo i e-mail u dispečinku.",
  },
];

export default function Page() {
  return (
    <main className="ld">
      {/* ── HERO ───────────────────────────────────── */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="LUKDA trans">
            <span className="wordmark-lukda">LUKDA</span>
            <span className="wordmark-trans">trans</span>
          </span>
          <a className="hotline" href="tel:+420739050444">
            <span className="hotline-label">Hotline 24 h</span>
            <span className="hotline-num">+420 739 050 444</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Autodoprava · Ústí nad Labem · ČR a Evropa
          </p>
          <h1 className="hero-title">
            <span className="line line-1">Naložíme.</span>
            <span className="line line-2">Vezeme.</span>
            <span className="line line-3">
              Doručíme<span className="tecka">.</span>
            </span>
          </h1>
          <p className="hero-sub">
            Kamionová a nákladní doprava z Ústí nad Labem po celé republice i
            Evropě. Dispečink vám auto potvrdí do 30 minut — ve dne, v noci, o
            víkendu.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420739050444">
              Zavolat dispečink
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co vozíme
            </a>
          </div>
        </div>

        {/* signature: reflexní vodorovné pruhy jako na zádi návěsu */}
        <div className="marker" aria-hidden="true">
          <span className="marker-stripe"></span>
          <span className="marker-stripe"></span>
          <span className="marker-stripe"></span>
          <span className="marker-plate">UL · CZ</span>
        </div>
      </header>

      {/* ── SLUŽBY ─────────────────────────────────── */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás odvezeme</h2>
          <p className="section-lead">
            Čtyři služby, jedno telefonní číslo. Řekněte dispečerovi, co, odkud
            a kdy — zbytek je naše práce.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li className="sluzba" key={s.kod}>
              <div className="sluzba-head">
                <span className="sluzba-kod">{s.kod}</span>
                <span className="sluzba-trasa">{s.trasa}</span>
              </div>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── DŮVĚRA ─────────────────────────────────── */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head-dark">
          <h2 id="duvera-h">Proč se s námi jezdí dobře</h2>
          <p className="section-lead">
            LUKDA trans není anonymní logistický kolos. Jsme dopravce z Ústí
            nad Labem, který roste díky lidem — vlastním řidičům i zákazníkům,
            kteří se vracejí.
          </p>
        </div>

        <ol className="zasady">
          {zasady.map((z) => (
            <li className="zasada" key={z.titulek}>
              <span className="zasada-cislo">{z.cislo}</span>
              <div className="zasada-text">
                <h3>{z.titulek}</h3>
                <p>{z.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <blockquote className="citat">
          <p>
            „Pouze vynikající a stmelený tým — od řidičů až po dispečink — je
            zárukou našeho úspěchu. Přijeďte se k nám do Ústí přesvědčit
            osobně.“
          </p>
          <footer className="citat-autor">
            Lukáš Budaj, majitel společnosti LUKDA trans spol. s r.o.
          </footer>
        </blockquote>
      </section>
    </main>
  );
}
