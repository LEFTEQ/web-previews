const kroky = [
  {
    cislo: "1",
    nazev: "Zaměření u vás doma",
    text: "Přijedeme do vašeho bytu nebo domu v Ostravě a okolí, prostor zaměříme na milimetr a probereme, co od nábytku čekáte. Pro nové zákazníky stojí zaměření 950 Kč — celou částku vám odečteme z ceny zakázky.",
  },
  {
    cislo: "2",
    nazev: "Návrh a výběr dekorů",
    text: "Pomůžeme vám vybrat dekor lamina, kování i doplňky. Řekneme na rovinu, co je jen hezké a co vydrží každodenní provoz kuchyně nebo dětského pokoje.",
  },
  {
    cislo: "3",
    nazev: "Cenová nabídka",
    text: "Dostanete podrobnou kalkulaci položku po položce. Když souhlasíte, stačí 70% záloha a pouštíme se do práce.",
  },
  {
    cislo: "4",
    nazev: "Výroba do 6 týdnů",
    text: "Precizní truhlařina chce čas. Váš nábytek vyrobíme standardně do šesti týdnů od schválení výrobní dokumentace.",
  },
  {
    cislo: "5",
    nazev: "Montáž a předání",
    text: "Náš tým nábytek smontuje přímo u vás. Doplatek platíte až ve chvíli, kdy je vše hotové a vy jste spokojení.",
  },
];

const sortiment = [
  { nazev: "Kuchyně na míru", popis: "Kuchyňské linky přesně podle dispozice bytu — i do panelákových kuchyní netypických rozměrů." },
  { nazev: "Vestavěné skříně", popis: "Šatní a vestavěné skříně od podlahy ke stropu, žádný mrtvý prostor." },
  { nazev: "Nábytek do předsíně", popis: "Předsíňové stěny s místem na boty, bundy i kočárek." },
  { nazev: "Obývací stěny", popis: "Obývací sestavy kolem televize, které jednou půjdou rozšířit." },
  { nazev: "Dětské pokoje", popis: "Dětské a studentské pokoje, které rostou s dítětem." },
];

const duvody = [
  {
    titul: "Kování Blum, Hettich, Häfele",
    text: "Životnost nábytku určuje kování, ne dekor. Používáme výhradně značkové panty a pojezdy, u kterých seženete náhradní díl i za deset let.",
  },
  {
    titul: "ABS hrany na každé desce",
    text: "Laminovaný nábytek se nejčastěji poškodí na hraně. Proto každou desku olemujeme hranou z tvrzeného plastu — a nábytek vydrží roky každodenního provozu.",
  },
  {
    titul: "Desky Egger a Kronospan",
    text: "Laminované dřevotřískové desky od prověřených evropských výrobců. Široký výběr dezénů, na přání i od jiného dodavatele.",
  },
  {
    titul: "Máte se kam vrátit",
    text: "Když se za pár let rozhodnete sestavu rozšířit, víte, komu zavolat. Pracujeme podle truhlářských zásad předávaných z generace na generaci.",
  },
];

export default function Page() {
  return (
    <main className="tp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="Truhlářství Peter, Ostrava">
            <span className="wordmark-znak" aria-hidden="true">
              {/* rybinový spoj — dovetail */}
              <svg viewBox="0 0 40 40" width="36" height="36" role="img" aria-hidden="true">
                <path d="M0 0 H40 V12 L28 20 L40 28 V40 H0 V28 L12 20 L0 12 Z" fill="currentColor" />
              </svg>
            </span>
            <span className="wordmark-text">
              Truhlářství <strong>Peter</strong>
              <span className="wordmark-mesto">Ostrava</span>
            </span>
          </div>

          <h1 className="hero-titulek">
            <span className="radek radek-1">Nábytek</span>
            <span className="radek radek-2">na milimetr</span>
            <span className="radek radek-3">přesně.</span>
          </h1>

          <p className="hero-perex">
            Kuchyně, vestavěné skříně a pokoje na míru z laminovaných desek Egger
            a Kronospan, s kováním Blum a Hettich. Vyrábí Ing. Peter Tomáš
            v Ostravě — podle zásad, které si čeští truhláři předávají
            z generace na generaci.
          </p>

          <div className="hero-akce">
            <a className="tlacitko" href="tel:+420737643620">Zavolat: 737 643 620</a>
            <a className="tlacitko tlacitko-tiche" href="mailto:peter@truhlarstvi-peter.cz">Napsat e-mail</a>
          </div>

          <dl className="hero-fakta">
            <div>
              <dt>Výroba</dt>
              <dd>do 6 týdnů</dd>
            </div>
            <div>
              <dt>Zaměření</dt>
              <dd>950 Kč — odečteme z ceny</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Ostrava a okolí</dd>
            </div>
          </dl>
        </div>

        {/* signature: pás rybinových spojů — místo, kde se potkávají dvě desky */}
        <div className="rybina" aria-hidden="true">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" role="img" aria-hidden="true">
            <path
              className="rybina-horni"
              d="M0,0 H1200 V52 L1150,88 L1100,52 L1050,88 L1000,52 L950,88 L900,52 L850,88 L800,52 L750,88 L700,52 L650,88 L600,52 L550,88 L500,52 L450,88 L400,52 L350,88 L300,52 L250,88 L200,52 L150,88 L100,52 L50,88 L0,52 Z"
            />
          </svg>
        </div>
      </header>

      {/* ===== SEKCE 1: CO VYRÁBÍME + PRŮBĚH ===== */}
      <section className="sekce sekce-vyroba" aria-labelledby="vyroba-titulek">
        <div className="sekce-inner">
          <p className="stitek">Zakázková výroba</p>
          <h2 id="vyroba-titulek">Co pro vás vyrobíme</h2>

          <ul className="sortiment">
            {sortiment.map((s) => (
              <li key={s.nazev} className="sortiment-karta">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </li>
            ))}
          </ul>

          <div className="prubeh-hlava">
            <p className="stitek">Průběh zakázky</p>
            <h2>Od prvního telefonátu po montáž — pět kroků</h2>
            <p className="prubeh-perex">
              Žádná překvapení na faktuře. Takhle přesně budeme postupovat:
            </p>
          </div>

          <ol className="kroky">
            {kroky.map((k) => (
              <li key={k.cislo} className="krok">
                <span className="krok-cislo" aria-hidden="true">{k.cislo}</span>
                <div className="krok-obsah">
                  <h3>{k.nazev}</h3>
                  <p>{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== SEKCE 2: MATERIÁLY A DŮVĚRA ===== */}
      <section className="sekce sekce-duvera" aria-labelledby="duvera-titulek">
        <div className="sekce-inner">
          <p className="stitek stitek-svetly">Materiály a poctivá práce</p>
          <h2 id="duvera-titulek">
            Proč nábytek od nás vydrží déle než kuchyně z hobbymarketu
          </h2>

          <div className="duvody">
            {duvody.map((d) => (
              <article key={d.titul} className="duvod">
                <span className="duvod-znak" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    <path d="M2 2 H22 V8 L15 12 L22 16 V22 H2 V16 L9 12 L2 8 Z" fill="currentColor" />
                  </svg>
                </span>
                <h3>{d.titul}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>

          <figure className="citace">
            <blockquote>
              „Nejčastěji se laminovaný nábytek poškodí na hraně. Proto u nás
              žádná deska neodejde z dílny bez ABS hrany. Je to detail, který
              na první pohled nevidíte — ale za deset let ho oceníte.“
            </blockquote>
            <figcaption>Ing. Peter Tomáš, truhlář a majitel dílny</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
