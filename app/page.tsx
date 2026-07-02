const sluzby = [
  {
    nazev: "Individuální fyzioterapie",
    popis:
      "Vstupní vyšetření, cílená terapie pohybového aparátu a cvičení šité na míru vaší diagnóze. Vede vás jeden fyzioterapeut od začátku do konce.",
    stitek: "Základ péče",
  },
  {
    nazev: "Elektroterapie",
    popis:
      "Osvědčená léčba bolesti a stimulace svalů. Zlepšuje prokrvení tkání a pomáhá tělu nastartovat vlastní hojení.",
    stitek: "Fyzikální terapie",
  },
  {
    nazev: "Magnetoterapie",
    popis:
      "Šetrné pulzní magnetické pole urychluje hojení, tlumí bolest a zánět a uvolňuje svalové napětí.",
    stitek: "Fyzikální terapie",
  },
  {
    nazev: "Ultrazvuková terapie",
    popis:
      "Mikromasáž hlubokých tkání ultrazvukem — prokrvení, uvolnění svalů, snížení otoku a úleva od bolesti.",
    stitek: "Fyzikální terapie",
  },
  {
    nazev: "Parafango",
    popis:
      "Lokální prohřátí konkrétní části těla podle diagnózy. Rozšíří cévy, prokrví tkáň a sníží svalové napětí.",
    stitek: "Teplo",
  },
  {
    nazev: "Hydroterapie",
    popis:
      "Léčebné působení vody — preventivně, léčebně i rehabilitačně jako doplněk individuální terapie.",
    stitek: "Voda",
  },
  {
    nazev: "Kinesio taping",
    popis:
      "Elastické tejpy podpoří svaly a klouby při pohybu, aniž by ho omezovaly. Vhodné i mezi terapiemi.",
    stitek: "Podpora pohybu",
  },
  {
    nazev: "Masáže",
    popis:
      "Klasické i sportovní masáže každou sobotu 8:00–14:00. Objednávají se zvlášť, i bez poukazu.",
    stitek: "Sobota",
  },
];

const kroky = [
  {
    krok: "Přijďte osobně",
    detail:
      "Do ambulance v Ostravě-Porubě, pondělí až čtvrtek 8:00–16:00. Telefonicky ani e-mailem nové pacienty neobjednáváme — registrace probíhá na místě.",
  },
  {
    krok: "Vezměte poukaz a zprávu",
    detail:
      "Poukaz FT nebo K od vašeho lékaře a lékařskou zprávu. Pozor: poukaz FT platí jen 14 dní od vystavení.",
  },
  {
    krok: "Naplánujeme vstupní vyšetření",
    detail:
      "U fyzioterapeuta, případně přímo u našeho rehabilitačního lékaře RFM, který vám předepíše procedury pro vaši diagnózu.",
  },
];

const ordinace = [
  { den: "Pondělí–Čtvrtek", cas: "6:30 – 18:00" },
  { den: "Pátek", cas: "6:30 – 15:00" },
  { den: "Sobota (masáže)", cas: "8:00 – 14:00" },
  { den: "Lékař RFM (úterý)", cas: "16:00 – 19:00" },
];

export default function Page() {
  return (
    <main className="fz">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Fyzartis">
            <span className="wordmark-fyz">FYZ</span>
            <span className="wordmark-artis">ARTIS</span>
          </div>
          <div className="hero-contact">
            <a href="tel:+420601117811" className="hero-tel">
              +420 601 117 811
            </a>
            <span className="hero-mail">info@fyzartis.cz</span>
          </div>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Rehabilitační ambulance · Ostrava-Poruba
          </p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Vrátíme</span>
            <span className="hero-line hero-line-2">
              vás <em>do&nbsp;pohybu</em>
            </span>
          </h1>

          {/* Signature: pohybová amplituda — křivka rozsahu pohybu kloubu */}
          <div className="amplituda" aria-hidden="true">
            <svg
              viewBox="0 0 1200 220"
              preserveAspectRatio="none"
              className="amplituda-svg"
            >
              <path
                className="amp-path amp-path-slaba"
                d="M0,190 C150,190 250,160 400,150 C550,140 650,170 800,160 C950,150 1080,170 1200,165"
              />
              <path
                className="amp-path amp-path-silna"
                d="M0,190 C140,190 230,60 400,55 C570,50 640,130 800,90 C960,50 1090,80 1200,40"
              />
              <circle className="amp-bod amp-bod-1" cx="400" cy="55" r="7" />
              <circle className="amp-bod amp-bod-2" cx="800" cy="90" r="7" />
              <circle className="amp-bod amp-bod-3" cx="1200" cy="40" r="7" />
            </svg>
            <div className="amplituda-legenda">
              <span className="leg leg-pred">rozsah pohybu před terapií</span>
              <span className="leg leg-po">po terapii u nás</span>
            </div>
          </div>

          <div className="hero-fakta">
            <p className="fakt">
              <strong>Poukazy FT i K</strong> — máme vlastního rehabilitačního
              lékaře RFM přímo v ambulanci.
            </p>
            <p className="fakt">
              <strong>Všechny hlavní pojišťovny</strong> — a přijímáme i
              samoplátce, platit můžete kartou.
            </p>
            <p className="fakt">
              <strong>Od 6:30 ráno</strong> — stihnete terapii před prací,
              otevřeno pět dní v týdnu.
            </p>
          </div>
        </div>
      </header>

      {/* ===== SEKCE: SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Co u nás najdete</p>
          <h2 id="sluzby-h" className="sekce-title">
            Osm způsobů, jak léčíme pohyb
          </h2>
          <p className="sekce-perex">
            Vhodnou kombinaci procedur vám předepíše náš rehabilitační lékař
            podle vaší diagnózy — nemusíte vybírat sami.
          </p>
        </div>
        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.nazev} className="sluzba">
              <span className="sluzba-stitek">{s.stitek}</span>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SEKCE: JAK SE OBJEDNAT + PROVOZ ===== */}
      <section className="objednani" aria-labelledby="objednani-h">
        <div className="objednani-vnitrek">
          <div className="objednani-kroky">
            <p className="sekce-eyebrow sekce-eyebrow-svetla">
              Jak se stát naším pacientem
            </p>
            <h2 id="objednani-h" className="sekce-title sekce-title-svetla">
              Tři kroky k první terapii
            </h2>
            <ol className="kroky">
              {kroky.map((k, i) => (
                <li key={k.krok} className="krok">
                  <span className="krok-cislo" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="krok-nazev">{k.krok}</h3>
                    <p className="krok-detail">{k.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="provoz" aria-label="Provozní doba a adresa">
            <h3 className="provoz-title">Kdy máme otevřeno</h3>
            <dl className="provoz-tabulka">
              {ordinace.map((o) => (
                <div key={o.den} className="provoz-radek">
                  <dt>{o.den}</dt>
                  <dd>{o.cas}</dd>
                </div>
              ))}
            </dl>
            <p className="provoz-pozn">
              Registrace nových pacientů: pondělí–čtvrtek 8:00–16:00, pouze
              osobně v ambulanci.
            </p>
            <p className="provoz-adresa">
              Fyzartis s.r.o. · Ostrava-Poruba
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
