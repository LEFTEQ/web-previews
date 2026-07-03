export const metadata = {
  title: "EQUI Stavebniny Praha — sádrokartony, suchá výstavba, stavební materiál",
  description:
    "Stavebniny a sádrokartonářské práce v Praze. Desky, profily, izolace i kompletní půdní vestavby a příčky na míru. Poradíme, dovezeme, postavíme. Po–Pá od 7:00.",
  openGraph: {
    title: "EQUI Stavebniny Praha — sádrokarton od desky po hotovou stěnu",
    description:
      "Sádrokartonářské práce a stavební materiál v Praze. Příčky, podhledy, půdní vestavby. Zpětný odběr nespotřebovaného materiálu.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    kod: "GKB 12,5",
    nazev: "Příčky a předstěny",
    popis:
      "Rozdělíme byt, kancelář i sklad. Standardní i akustické příčky s minerální izolací — stěna stojí za den, druhý den se tmelí.",
    detail: "vč. dveřních zárubní a rozvodů ve stěně",
  },
  {
    kod: "GKF 15",
    nazev: "Půdní vestavby",
    popis:
      "Z půdy obytný pokoj. Protipožární opláštění krovu, parozábrana, izolace mezi krokvemi — všechno z jedné party a jednoho skladu.",
    detail: "protipožární desky, revize skladby zdarma",
  },
  {
    kod: "GKBI 12,5",
    nazev: "Koupelny a podhledy",
    popis:
      "Impregnované desky do vlhka, kazetové i hladké podhledy se zapuštěným osvětlením. Rovný strop i tam, kde původní nikdy rovný nebyl.",
    detail: "impregnace do vlhkých prostor",
  },
  {
    kod: "CW / UW",
    nazev: "Materiál ze skladu",
    popis:
      "Desky, profily, tmely, pásky, izolace i bednící stojky k zapůjčení. Naložíme na počkání, po Praze dovezeme do 48 hodin.",
    detail: "zpětný odběr nespotřebovaného materiálu",
  },
];

const duvody = [
  {
    cislo: "7:00",
    text: "Otvíráme, když otvírají řemeslníci. Materiál naložíte cestou na stavbu, ne až po obědě.",
  },
  {
    cislo: "1 : 1",
    text: "Co nespotřebujete, vezmeme zpět. Nepoškozené desky a palety vykupujeme — neplatíte za odhad navíc.",
  },
  {
    cislo: "48 h",
    text: "Doprava po Praze a okolí do dvou pracovních dnů. Složíme hydraulickou rukou tam, kam ukážete.",
  },
];

export default function Page() {
  return (
    <main className="eq">
      {/* ===== HERO ===== */}
      <header className="eq-hero">
        <div className="eq-hero-inner">
          <div className="eq-topbar">
            <span className="eq-wordmark" aria-label="EQUI Stavebniny">
              EQUI<span className="eq-wordmark-sub">stavebniny</span>
            </span>
            <span className="eq-topbar-note">Praha · Po–Pá 7:00–16:00</span>
          </div>

          <div className="eq-hero-grid" aria-hidden="true">
            {/* svislé linky = rastr CW profilů à 625 mm */}
            <span className="eq-stud" />
            <span className="eq-stud" />
            <span className="eq-stud" />
            <span className="eq-stud" />
            <span className="eq-stud" />
          </div>

          <h1 className="eq-h1">
            <span className="eq-h1-row eq-h1-row--1">Sádrokarton.</span>
            <span className="eq-h1-row eq-h1-row--2">
              Od&nbsp;desky
            </span>
            <span className="eq-h1-row eq-h1-row--3">
              po&nbsp;hotovou <em>stěnu.</em>
            </span>
          </h1>

          <div className="eq-hero-foot">
            <p className="eq-lead">
              Stavebniny a sádrokartonářská parta v&nbsp;Praze. Prodáme vám
              přesně tolik desek, kolik potřebujete — nebo přijedeme a
              postavíme to za vás.
            </p>
            <div className="eq-hero-cta">
              <a className="eq-btn eq-btn--full" href="tel:+420222333444">
                Zavolat stavebninám
              </a>
              <a className="eq-btn eq-btn--ghost" href="mailto:info@equistavebniny.cz">
                Napsat poptávku
              </a>
            </div>
          </div>

          <div className="eq-spec-strip" aria-hidden="true">
            <span>625&nbsp;mm rozteč</span>
            <span>12,5&nbsp;mm deska</span>
            <span>Q2&nbsp;tmelení</span>
            <span>CW&nbsp;75 profil</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="eq-sluzby" aria-labelledby="sluzby-h">
        <div className="eq-section-head">
          <p className="eq-eyebrow">Co u nás vyřešíte</p>
          <h2 id="sluzby-h" className="eq-h2">
            Čtyři desky, čtyři práce
          </h2>
          <p className="eq-section-note">
            Každý typ desky má svou barvu hrany a svůj úkol. My taky.
          </p>
        </div>

        <div className="eq-boards">
          {sluzby.map((s) => (
            <article className="eq-board" key={s.kod}>
              <div className="eq-board-edge" aria-hidden="true" />
              <p className="eq-board-kod">{s.kod}</p>
              <h3 className="eq-board-nazev">{s.nazev}</h3>
              <p className="eq-board-popis">{s.popis}</p>
              <p className="eq-board-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="eq-duvera" aria-labelledby="duvera-h">
        <div className="eq-duvera-inner">
          <div className="eq-duvera-text">
            <p className="eq-eyebrow eq-eyebrow--light">Proč k nám jezdí party z celé Prahy</p>
            <h2 id="duvera-h" className="eq-h2 eq-h2--light">
              Stavebniny, kde vám<br />u pultu rozumí
            </h2>
            <p className="eq-duvera-p">
              Prodáváme materiál, se kterým sami stavíme. Když se zeptáte,
              jestli na podhled v&nbsp;koupelně stačí zelená deska, dostanete
              odpověď od někoho, kdo ji minulý týden montoval — ne odečtenou
              z&nbsp;katalogu.
            </p>
            <p className="eq-duvera-p">
              Fungujeme v&nbsp;Praze pro řemeslníky i&nbsp;domácí kutily.
              Půjčíme bednící stojky, poradíme skladbu příčky, vezmeme zpět
              nepoškozené palety. Otevřeno máme celý rok, v&nbsp;létě už
              od&nbsp;sedmi ráno.
            </p>
          </div>

          <ul className="eq-duvera-cisla">
            {duvody.map((d) => (
              <li className="eq-cislo" key={d.cislo}>
                <span className="eq-cislo-hodnota">{d.cislo}</span>
                <p className="eq-cislo-text">{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
