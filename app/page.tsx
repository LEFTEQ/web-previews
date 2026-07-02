// Instalprofi, spol. s r.o. — revize elektro, Brno
// Návrh: „Revizní protokol jako design" — signature prvek: měřicí stupnice / rastr rozvaděče,
// typografie inspirovaná technickým značením v rozvaděčích a na revizních štítcích.

const sluzby = [
  {
    kod: "EL-01",
    nazev: "Revize elektroinstalace",
    popis:
      "Výchozí i pravidelné revize rozvodů v bytech, domech i průmyslových halách. Změříme izolační odpory, impedanci smyčky a proudové chrániče — a vystavíme revizní zprávu, kterou po vás chce pojišťovna i inspektorát.",
    lhuta: "lhůta dle ČSN 33 1500",
  },
  {
    kod: "HR-02",
    nazev: "Revize hromosvodů",
    popis:
      "Kontrola jímací soustavy, svodů a uzemnění včetně měření zemního odporu. Hromosvod bez platné revize vás při škodě na majetku nechá pojišťovna zaplatit z vlastní kapsy.",
    lhuta: "1× za 2–4 roky dle objektu",
  },
  {
    kod: "SP-03",
    nazev: "Revize spotřebičů a nářadí",
    popis:
      "Periodické kontroly a revize elektrických spotřebičů a ručního nářadí ve firmách podle ČSN 33 1600 ed. 2. Přijedeme k vám, označíme štítky, vedeme evidenci termínů za vás.",
    lhuta: "od 6 měsíců dle třídy užívání",
  },
  {
    kod: "FV-04",
    nazev: "Revize fotovoltaiky a nové instalace",
    popis:
      "Výchozí revize FVE před připojením k distribuční síti. A když je potřeba, elektroinstalaci nebo solární systém rovnou namontujeme — děláme obojí přes 20 let.",
    lhuta: "před připojením + pravidelně",
  },
];

const kroky = [
  {
    stitek: "Zavoláte",
    text: "Řeknete nám, co potřebujete zrevidovat — byt, halu, hromosvod, spotřebiče. Termín domluvíme obvykle do týdne, v Brně i rychleji.",
  },
  {
    stitek: "Změříme",
    text: "Revizní technik s osvědčením přijede s kalibrovanými přístroji. Měření v bytě trvá zhruba hodinu, u větších objektů dopředu řekneme kolik.",
  },
  {
    stitek: "Dostanete zprávu",
    text: "Revizní zprávu s razítkem a všemi naměřenými hodnotami máte do pár dnů. Závady popíšeme srozumitelně a rovnou navrhneme, jak je opravit.",
  },
];

const duvody = [
  { hodnota: "20+", jednotka: "let", text: "provádíme revize a elektroinstalace v Brně a okolí" },
  { hodnota: "§ 6", jednotka: "vyhl. 50/78", text: "revizní technici s platným osvědčením TIČR" },
  { hodnota: "0 Kč", jednotka: "za rozpočet", text: "cenu prací i revize řekneme dopředu a zdarma" },
];

export default function Page() {
  return (
    <main className="ip">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="Instalprofi, spol. s r.o.">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="32" height="32" focusable="false" aria-hidden="true">
                <path d="M18 2 6 18h8l-2 12L26 12h-9l1-10Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              INSTAL<em>PROFI</em>
            </span>
            <span className="brand-sub">revize elektro · Brno</span>
          </div>

          <p className="hero-eyebrow">
            <span className="blik" aria-hidden="true" /> Revizní technik pro Brno a Jihomoravský kraj
          </p>

          <h1 className="hero-title">
            Elektřina buď <span className="vyhovuje">VYHOVUJE</span>,
            <br />
            nebo je to problém.
          </h1>

          <p className="hero-lead">
            Provádíme revize elektroinstalací, hromosvodů, spotřebičů a fotovoltaik. Přijedeme,
            změříme kalibrovanými přístroji a do pár dnů máte revizní zprávu s razítkem — pro
            pojišťovnu, kolaudaci i klidné spaní.
          </p>

          <div className="hero-akce">
            <a className="btn btn-hlavni" href="tel:+420541000000">
              Zavolat revizního technika
            </a>
            <a className="btn btn-vedlejsi" href="mailto:revize@instalprofi.cz">
              Napsat e-mail
            </a>
          </div>

          {/* signature: pás měřicí stupnice — jako displej revizního přístroje */}
          <div className="stupnice" role="img" aria-label="Ilustrace: stupnice měřicího přístroje s hodnotou izolačního odporu vyhovuje">
            <div className="stupnice-hlava">
              <span className="stupnice-popisek">R<sub>iso</sub> — izolační odpor</span>
              <span className="stupnice-hodnota">≥ 1,0 MΩ · VYHOVUJE</span>
            </div>
            <div className="stupnice-pas" aria-hidden="true">
              <span className="dilek d1" /><span className="dilek d2" /><span className="dilek d3" />
              <span className="dilek d4" /><span className="dilek d5" /><span className="dilek d6" />
              <span className="dilek d7" /><span className="dilek d8" /><span className="dilek d9" />
              <span className="dilek d10" /><span className="dilek d11" /><span className="dilek d12" />
              <span className="rucicka" />
            </div>
            <div className="stupnice-cisla" aria-hidden="true">
              <span>0</span><span>0,25</span><span>0,5</span><span>1,0</span><span>MΩ →</span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-inner">
          <p className="sekce-eyebrow">Co u vás zrevidujeme</p>
          <h2 id="sluzby-nadpis" className="sekce-title">
            Čtyři revize, jedna zpráva s razítkem
          </h2>
          <p className="sekce-lead">
            Každá položka má svou normu a svou lhůtu. Pohlídáme obojí — a termín další revize vám
            připomeneme dřív, než na něj přijde kontrola.
          </p>

          <div className="karty">
            {sluzby.map((s) => (
              <article className="karta" key={s.kod}>
                <div className="karta-hlava">
                  <span className="karta-kod">{s.kod}</span>
                  <span className="karta-lhuta">{s.lhuta}</span>
                </div>
                <h3 className="karta-nazev">{s.nazev}</h3>
                <p className="karta-popis">{s.popis}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DŮVĚRA / PRŮBĚH ================= */}
      <section className="prubeh" aria-labelledby="prubeh-nadpis">
        <div className="sekce-inner">
          <p className="sekce-eyebrow sekce-eyebrow--svetly">Jak revize probíhá</p>
          <h2 id="prubeh-nadpis" className="sekce-title sekce-title--svetly">
            Od telefonátu k razítku ve třech krocích
          </h2>

          <ol className="kroky">
            {kroky.map((k, i) => (
              <li className="krok" key={k.stitek}>
                <span className="krok-svorka" aria-hidden="true">
                  L{i + 1}
                </span>
                <h3 className="krok-nazev">{k.stitek}</h3>
                <p className="krok-text">{k.text}</p>
              </li>
            ))}
          </ol>

          <div className="duvody" role="list" aria-label="Proč Instalprofi">
            {duvody.map((d) => (
              <div className="duvod" role="listitem" key={d.hodnota}>
                <span className="duvod-hodnota">
                  {d.hodnota} <small>{d.jednotka}</small>
                </span>
                <p className="duvod-text">{d.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="reference">
            <p>
              „Potřebovali jsme revizi elektro i hromosvodu k bytovému domu na Vinohradech kvůli
              pojistce. Technik přijel do tří dnů, zprávy jsme měli do týdne a závady nám rovnou
              opravili. Přesně takhle si to představuju.“
            </p>
            <cite>— správce SVJ, Brno-Vinohrady</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
