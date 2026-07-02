const sluzby = [
  {
    kod: "ČSN 33 2000-6",
    nazev: "Revize elektroinstalací",
    popis:
      "Výchozí i periodické revize domovních a průmyslových objektů do 1000 V. Zprávu dostanete v termínu, kterému rozumí pojišťovna i inspekce práce.",
  },
  {
    kod: "ČSN EN 62305",
    nazev: "Revize hromosvodů",
    popis:
      "Kontrola jímací soustavy, svodů i uzemnění. Změříme zemní odpory moderní technikou a upozorníme na závady dřív, než je najde bouřka.",
  },
  {
    kod: "ČSN 33 1600 ed. 2",
    nazev: "Revize spotřebičů a strojů",
    popis:
      "Pravidelné revize elektrických spotřebičů, ručního nářadí a strojů ve firmách. Vedeme evidenci a sami hlídáme, kdy se máme vrátit.",
  },
  {
    kod: "Monitoring sítě",
    nazev: "Dlouhodobá diagnostika",
    popis:
      "Připojíme analyzátor na vaši síť a měříme týdny. Odhalíme skrytá rizika, přetížené fáze i místa, kde zbytečně platíte za energii.",
  },
  {
    kod: "Elektroinstalace",
    nazev: "Montáže a opravy",
    popis:
      "Když revize odhalí závadu, umíme ji i odstranit. Kompletní elektroinstalace bytů, domů a průmyslových hal — od rozvaděče po zásuvku.",
  },
  {
    kod: "Zabezpečení",
    nazev: "Alarmy a kamery",
    popis:
      "Zabezpečovací a kamerové systémy s online přístupem 24/7. Chráníme domy, byty i průmyslové areály od roku 1992.",
  },
];

const klienti = [
  "Skupina ČEZ",
  "Kaufland",
  "Ředitelství silnic a dálnic",
  "JUTTA, s.r.o.",
  "PORSA SYSTÉM ČR",
  "NORMA",
];

const kroky = [
  {
    krok: "Ozvete se",
    popis: "Zavoláte nebo napíšete, co potřebujete zrevidovat. Do druhého dne máte termín a orientační cenu.",
  },
  {
    krok: "Změříme",
    popis: "Přijedeme s kalibrovanou měřicí technikou. Izolační odpory, impedance smyčky, zemní odpory — vše zdokumentované.",
  },
  {
    krok: "Revizní zpráva",
    popis: "Dostanete zprávu, která obstojí u pojišťovny i kontroly. Závady popíšeme srozumitelně a navrhneme opravu.",
  },
  {
    krok: "Pohlídáme lhůty",
    popis: "Termín další periodické revize hlídáme za vás. Až se bude blížit, ozveme se sami.",
  },
];

export default function Page() {
  return (
    <main className="et">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="32" height="32" focusable="false" aria-hidden="true">
                <path d="M18 2 L7 18 h7 L12 30 L25 12 h-8 L18 2 Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              ETTC <span className="brand-sub">spol. s r.o.</span>
            </span>
          </div>

          <p className="hero-eyebrow">
            Revizní technici elektro · Ústí nad Labem · od roku 1992
          </p>

          <h1 className="hero-title">
            <span className="line line-1">Změřeno.</span>
            <span className="line line-2">Zdokumentováno.</span>
            <span className="line line-3 ok">
              Bez&nbsp;závad.
              <svg className="stamp-check" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M4 13 l5 5 L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </h1>

          <p className="hero-lead">
            Revize elektroinstalací, hromosvodů a spotřebičů do 1000&nbsp;V.
            Přijedeme, změříme kalibrovanou technikou a vy dostanete zprávu,
            se kterou obstojíte u pojišťovny i inspekce.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420475000000">
              Zavolat revizního technika
            </a>
            <a className="btn btn-ghost" href="mailto:info@ettc.cz">
              Napsat e-mail
            </a>
          </div>

          {/* signature: štítek revizní zprávy */}
          <div className="protokol" aria-hidden="true">
            <div className="protokol-row">
              <span className="protokol-label">Riso</span>
              <span className="protokol-track"><span className="protokol-fill f1" /></span>
              <span className="protokol-val">&gt; 200 MΩ</span>
            </div>
            <div className="protokol-row">
              <span className="protokol-label">Zs</span>
              <span className="protokol-track"><span className="protokol-fill f2" /></span>
              <span className="protokol-val">0,38 Ω</span>
            </div>
            <div className="protokol-row">
              <span className="protokol-label">Rz</span>
              <span className="protokol-track"><span className="protokol-fill f3" /></span>
              <span className="protokol-val">4,2 Ω</span>
            </div>
            <div className="protokol-verdikt">
              Zařízení je schopno bezpečného provozu
            </div>
          </div>
        </div>

        {/* pozadí: fázový diagram / rastr měřicího přístroje */}
        <div className="hero-grid" aria-hidden="true" />
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co u vás změříme a zajistíme</h2>
          <p>
            Každou položku revidujeme podle konkrétní normy — proto ji u služby
            rovnou uvádíme. Žádné obecné sliby, jen to, co umíme doložit razítkem.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.nazev} className="karta">
              <span className="karta-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA / PRŮBĚH ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-text">
            <h2 id="duvera-h">32 let měříme, aby vám nic nehrozilo</h2>
            <p>
              ETTC funguje v Ústí nad Labem od roku 1992 a od začátku se
              soustředí výhradně na elektro. Revidujeme rodinné domy,
              činžáky na Klíši i průmyslové haly u dálnice D8 — a víme,
              že revizní zpráva není papír do šuplíku, ale doklad, který
              po vás jednou bude chtít pojišťovna.
            </p>

            <ol className="kroky">
              {kroky.map((k, i) => (
                <li key={k.krok}>
                  <span className="krok-cislo">{i + 1}</span>
                  <div>
                    <h3>{k.krok}</h3>
                    <p>{k.popis}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="duvera-klienti" aria-labelledby="klienti-h">
            <h3 id="klienti-h">Revize u nás objednávají</h3>
            <ul>
              {klienti.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <p className="klienti-pozn">
              …a desítky bytových družstev a SVJ v Ústí nad Labem a okolí.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
