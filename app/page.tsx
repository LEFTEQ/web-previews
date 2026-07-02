const terapie = [
  {
    nazev: "Poúrazové a pooperační stavy",
    popis:
      "Po zlomenině, operaci kolene či ramene vás vedeme od prvních šetrných pohybů zpět k plné zátěži. Postup ladíme podle zprávy od vašeho lékaře.",
    stitek: "ruce terapeuta",
  },
  {
    nazev: "Metoda Ludmily Mojžíšové",
    popis:
      "Jemná mobilizace páteře a pánve. Pomáhá při bolestech zad, funkční ženské sterilitě i potížích s kostrčí. Učíme vás i domácí cviky.",
    stitek: "ruce terapeuta",
  },
  {
    nazev: "DNS dle prof. Koláře",
    popis:
      "Dynamická neuromuskulární stabilizace — cvičení vycházející z pohybů, které umí každé miminko. Srovná to, co roky sezení rozhodily.",
    stitek: "aktivní cvičení",
  },
  {
    nazev: "Vysokointenzivní laser HIRO TT",
    popis:
      "Hilterapia® proniká hluboko do tkáně, tlumí bolest a zrychluje hojení. Typicky u zánětů šlach, artróz a chronických bolestí.",
    stitek: "přístroj",
  },
  {
    nazev: "Rázová vlna E-Shock HT",
    popis:
      "Cílené tlakové vlny na patní ostruhu, tenisový loket nebo ztuhlé svalové úpony. Několik minut, řádově 3–5 návštěv.",
    stitek: "přístroj",
  },
  {
    nazev: "Magnetoterapie SALUS TALENT",
    popis:
      "Vysokoindukční magnetické pole uleví od bolesti bez dotyku a bez svlékání. Vhodná i tam, kde je tkáň příliš citlivá na přímou terapii.",
    stitek: "přístroj",
  },
  {
    nazev: "Kinesio Taping® dle Dr. Kase",
    popis:
      "Pružný tejp podrží sval nebo kloub mezi terapiemi. Nalepíme přesně podle originální metody, ne „od oka“.",
    stitek: "ruce terapeuta",
  },
];

const pilire = [
  {
    cislo: "terapie",
    titulek: "Léčíme v ordinaci",
    text: "Individuální fyzioterapie v Ostravě-Vítkovicích a na pracovišti v Havířově. Na terapii jste vždy sami s terapeutem, nikdy „na páse“.",
  },
  {
    cislo: "educa",
    titulek: "Učíme fyzioterapeuty",
    text: "Pořádáme certifikované kurzy MZ ČR a odborné semináře pro fyzioterapeuty a lékaře. To, co učíme jiné, praktikujeme denně u nás.",
  },
  {
    cislo: "comes to you",
    titulek: "Přijedeme za vámi",
    text: "Fyzioterapeutické zázemí na sportovních akcích a masérské služby na soukromých událostech. Tým, přístroje i lehátka vozíme s sebou.",
  },
];

export default function Page() {
  return (
    <main className="djk">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="DJK fyzio">
            <span className="wordmark-djk">DJK</span>
            <span className="wordmark-fyzio">fyzio</span>
          </div>

          <p className="hero-eyebrow">
            Rehabilitace · Ostrava-Vítkovice &amp; Havířov
          </p>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Rozsah</span>
            <span className="hero-line hero-line-2">pohybu</span>
            <span className="hero-line hero-line-3">se dá vrátit.</span>
          </h1>

          {/* Signature: goniometr — úhloměr rozsahu pohybu */}
          <div className="gonio" aria-hidden="true">
            <svg viewBox="0 0 400 220" className="gonio-svg">
              <path
                d="M 30 200 A 170 170 0 0 1 370 200"
                className="gonio-arc"
                fill="none"
              />
              {Array.from({ length: 19 }).map((_, i) => {
                const deg = i * 10;
                const rad = (Math.PI * deg) / 180;
                const r1 = 170;
                const r2 = deg % 30 === 0 ? 148 : 158;
                const x1 = 200 - r1 * Math.cos(rad);
                const y1 = 200 - r1 * Math.sin(rad);
                const x2 = 200 - r2 * Math.cos(rad);
                const y2 = 200 - r2 * Math.sin(rad);
                return (
                  <line
                    key={deg}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className={deg % 30 === 0 ? "gonio-tick-major" : "gonio-tick"}
                  />
                );
              })}
              <text x="38" y="192" className="gonio-num">0°</text>
              <text x="188" y="52" className="gonio-num">90°</text>
              <text x="336" y="192" className="gonio-num">180°</text>
              <line
                x1="200"
                y1="200"
                x2="340"
                y2="200"
                className="gonio-arm gonio-arm-fixed"
              />
              <line
                x1="200"
                y1="200"
                x2="340"
                y2="200"
                className="gonio-arm gonio-arm-moving"
              />
              <circle cx="200" cy="200" r="7" className="gonio-pivot" />
            </svg>
            <p className="gonio-caption">
              Goniometr — úhloměr, kterým měříme každý stupeň vašeho zlepšení
            </p>
          </div>

          <p className="hero-lead">
            Jsme fyzioterapeutická klinika na Závodní ulici ve Vítkovicích.
            Kombinujeme ruce zkušených terapeutů s laserem, rázovou vlnou a
            magnetoterapií — a měříme, o kolik stupňů se váš kloub každý týden
            posune. Objednáte se online, bez doporučení.
          </p>

          <div className="hero-akce">
            <a href="#terapie" className="btn btn-plna">
              Prohlédnout terapie
            </a>
            <a href="tel:+420605378397" className="btn btn-obrys">
              Zavolat 605 378 397
            </a>
          </div>
        </div>
      </header>

      {/* ===== SEKCE: TERAPIE ===== */}
      <section className="sekce sekce-terapie" id="terapie" aria-labelledby="terapie-h">
        <div className="sekce-inner">
          <p className="sekce-eyebrow">Co vám pomůže</p>
          <h2 className="sekce-title" id="terapie-h">
            Sedm terapií.<br />Jeden plán na míru vašemu tělu.
          </h2>
          <p className="sekce-uvod">
            Na první návštěvě vás vyšetříme a řekneme na rovinu, co má u vaší
            diagnózy smysl — jestli ruce terapeuta, přístroj, aktivní cvičení,
            nebo jejich kombinace.
          </p>

          <ul className="terapie-mrizka">
            {terapie.map((t) => (
              <li key={t.nazev} className="terapie-karta">
                <span className={`terapie-stitek stitek-${t.stitek.split(" ")[0]}`}>
                  {t.stitek}
                </span>
                <h3 className="terapie-nazev">{t.nazev}</h3>
                <p className="terapie-popis">{t.popis}</p>
              </li>
            ))}
            <li className="terapie-karta terapie-karta-poukaz">
              <h3 className="terapie-nazev">Dárkový poukaz</h3>
              <p className="terapie-popis">
                Darujte terapii nebo masáž někomu, kdo si pořád „nemá čas
                zajít“. Poukaz vystavíme na recepci nebo pošleme e-mailem.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SEKCE: DŮVĚRA / TŘI PILÍŘE ===== */}
      <section className="sekce sekce-duvera" aria-labelledby="duvera-h">
        <div className="sekce-inner">
          <p className="sekce-eyebrow sekce-eyebrow-svetly">Proč DJK fyzio</p>
          <h2 className="sekce-title sekce-title-svetly" id="duvera-h">
            Klinika, která fyzioterapii<br />zároveň vyučuje.
          </h2>

          <div className="pilire">
            {pilire.map((p) => (
              <article key={p.cislo} className="pilir">
                <p className="pilir-znacka">{p.cislo}</p>
                <h3 className="pilir-titulek">{p.titulek}</h3>
                <p className="pilir-text">{p.text}</p>
              </article>
            ))}
          </div>

          <div className="prakticke">
            <div className="prakticke-blok">
              <h3 className="prakticke-h">Kde nás najdete</h3>
              <p className="prakticke-p">
                Závodní 2892/86e, Ostrava-Vítkovice — vlastní parkoviště přímo
                u vchodu, bezbariérový přístup. Druhé pracoviště máme
                v Havířově.
              </p>
            </div>
            <div className="prakticke-blok">
              <h3 className="prakticke-h">Cvičte i doma</h3>
              <p className="prakticke-p">
                Natočili jsme pro vás série videí: posilování inspirované
                vývojovými pozicemi, protahování s prvky jógy i cvičení
                v bazénu. Terapeut vám doporučí tu vaši.
              </p>
            </div>
            <div className="prakticke-blok">
              <h3 className="prakticke-h">Pro lékaře</h3>
              <p className="prakticke-p">
                Pacienta od vás převezmeme se zprávou a po ukončení terapie
                pošleme zpět srozumitelný výstup. Rezervace vyřídíme do dvou
                pracovních dnů.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
