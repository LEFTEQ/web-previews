const ostreni = [
  {
    kategorie: "Stříhací technika",
    stroj: "bruska BEN-01, axiální uložení",
    polozky: [
      "Hlavice stříhacích strojků (Moser, Oster, Andis, Laube, Wahl, Heiniger)",
      "Kadeřnické nůžky včetně nůžek s mikrozuby",
      "Opravy akumulátorových strojků Moser, Wahl, Aesculap, Heiniger",
    ],
  },
  {
    kategorie: "Veterina a chirurgie",
    stroj: "nástrojová bruska BN 102",
    polozky: [
      "Chirurgické nástroje pro veterinární kliniky",
      "Speciální nůžky s jemným ozubením",
      "Individuální požadavky po domluvě",
    ],
  },
  {
    kategorie: "Dřevoobrábění",
    stroj: "OPK 630 A, OS-2M",
    polozky: [
      "Kotouče do kotoučových pil",
      "Hoblovací nože, frézy do dřeva, dláta",
      "Řetězy na motorové pily",
    ],
  },
  {
    kategorie: "Průmysl a velké nože",
    stroj: "BPV 300/1500, vertikální vřeteno",
    polozky: [
      "Nože do štěpkovačů a drtičů — i velkých formátů",
      "Přesné broušení rovinných ploch",
      "Nástroje pro průmyslové využití",
    ],
  },
  {
    kategorie: "Gastronomie",
    stroj: "strojní broušení, ruční dotažení ostří",
    polozky: [
      "Kuchyňské nože pro restaurace i domácnost",
      "Řeznické a filetovací nože",
      "Nástroje pro gastroprovozy",
    ],
  },
];

const kroky = [
  {
    krok: "Zavolejte nebo napište",
    text: "Ve všední dny 9–17 hod. na +420 720 657 385. Popíšete, co potřebujete nabrousit — poradíme, jestli to dává smysl a co to bude stát.",
  },
  {
    krok: "Doručte nástroje",
    text: "Osobně po telefonické domluvě, zásilkou přes PPL nebo DPD (ne Českou poštou), nebo si u nás objednáte svoz zakázky e-mailem.",
  },
  {
    krok: "Nabrousíme na stroji, který k tomu patří",
    text: "Každý nástroj jde na brusku určenou přesně pro jeho geometrii — hlavice na axiální BEN-01, pily na OPK 630 A, průmyslové nože na BPV 300/1500.",
  },
  {
    krok: "Vrátíme ostré",
    text: "Vyzvednete osobně nebo pošleme zpět přepravcem. Expresní vyřízení domluvíme telefonicky.",
  },
];

export default function Page() {
  return (
    <main className="os">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="Josef Přibyl — broušení a ostření, Praha">
            <span className="wordmark-name">Josef&nbsp;Přibyl</span>
            <span className="wordmark-sub">broušení &amp; ostření · Praha</span>
          </div>

          <h1 className="hero-title">
            <span className="line l1">Tupé</span>
            <span className="line l2 sharp">→ ostré.</span>
          </h1>

          {/* signature: úhel ostří 15° */}
          <div className="edge" aria-hidden="true">
            <div className="edge-line" />
            <div className="edge-angle" />
            <span className="edge-label">úhel ostří&nbsp;15°</span>
          </div>

          <p className="hero-lead">
            Strojní broušení nožů, nůžek, pilových kotoučů a stříhacích hlavic.
            Pět profesionálních brusek, žádné univerzální kompromisy — každý
            nástroj na stroj, který je pro něj stavěný.
          </p>

          <div className="hero-cta">
            <a className="btn-main" href="tel:+420720657385">
              Zavolat 720 657 385
            </a>
            <span className="hero-hours">všední dny 9–17 hod.</span>
          </div>

          <ul className="hero-strip" aria-label="Co brousíme">
            <li>nože</li>
            <li>nůžky</li>
            <li>hlavice strojků</li>
            <li>pilové kotouče</li>
            <li>řetězy</li>
            <li>nože štěpkovačů</li>
          </ul>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co u nás nabrousíte</h2>
          <p>
            Pět oborů, pět různých brusek. U každé kategorie uvádíme stroj,
            na kterém se vaše nástroje skutečně brousí — protože hlavice
            stříhacího strojku a nůž do štěpkovače nesnesou stejný přístup.
          </p>
        </div>

        <div className="sluzby-grid">
          {ostreni.map((s) => (
            <article className="karta" key={s.kategorie}>
              <h3>{s.kategorie}</h3>
              <p className="karta-stroj">{s.stroj}</p>
              <ul>
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}

          <aside className="karta karta-prodej">
            <h3>Prodej a servis</h3>
            <p className="karta-stroj">nové vybavení i opravy</p>
            <ul>
              <li>
                Stříhací hlavice kompatibilní s Moser, Oster, Andis, Laube,
                Wahl a Heiniger
              </li>
              <li>Nové stříhací strojky, nůžky a příslušenství</li>
              <li>Servis akumulátorových stříhacích strojků</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ================= JAK TO PROBÍHÁ / DŮVĚRA ================= */}
      <section className="prubeh" aria-labelledby="prubeh-h">
        <div className="section-head section-head--invert">
          <h2 id="prubeh-h">Jak zakázka probíhá</h2>
          <p>
            Brousíme pro veterinární kliniky, kadeřnictví, truhlárny i
            gastroprovozy z Prahy a celé republiky. Postup je stejný pro
            jeden kuchyňský nůž i bednu nožů do štěpkovače.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{k.krok}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="provoz">
          <div className="provoz-blok">
            <h3>Příjem a výdej nástrojů</h3>
            <p>
              Pouze po předchozí telefonické domluvě.
              <br />
              Pondělí–pátek <strong>9:00–12:00</strong> a{" "}
              <strong>14:00–17:00</strong>.
            </p>
          </div>
          <div className="provoz-blok">
            <h3>Zásilky</h3>
            <p>
              Posílejte přes PPL nebo DPD. <strong>Neposílejte Českou
              poštou.</strong> Svoz zakázky objednáte e-mailem na{" "}
              <a href="mailto:brouseninastroju@gmail.com">
                brouseninastroju@gmail.com
              </a>
              .
            </p>
          </div>
          <div className="provoz-blok provoz-blok--pozor">
            <h3>Dovolená</h3>
            <p>
              1.&nbsp;7. – 6.&nbsp;7.&nbsp;2026 nebrousíme. Zakázky přijímáme
              až po tomto datu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
