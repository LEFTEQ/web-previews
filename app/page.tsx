const myti = [
  {
    id: "K1",
    nazev: "Rychlé opláchnutí",
    cas: "≈ 4 min",
    cena: "99 Kč",
    popis:
      "Aktivní pěna a tlakový oplach. Když jedete z dálnice a auto je od solí a much — stačí projet.",
    kroky: ["Předmytí pěnou", "Tlakový oplach", "Oplach podvozku"],
  },
  {
    id: "K2",
    nazev: "Základní mytí",
    cas: "≈ 7 min",
    cena: "179 Kč",
    popis:
      "Nejčastější volba. Pěna, kartáče s měkkým lamelovým vláknem, oplach a osušení. Auto vyjede suché.",
    kroky: ["Aktivní pěna", "Šetrné kartáče", "Oplach", "Sušení"],
  },
  {
    id: "K3",
    nazev: "Mytí s voskem",
    cas: "≈ 10 min",
    cena: "249 Kč",
    popis:
      "Vše ze základního mytí plus horký vosk a leštění. Lak drží vodu v kapkách ještě týdny po mytí.",
    kroky: ["Pěna a kartáče", "Horký vosk", "Leštění", "Sušení vzduchem"],
  },
  {
    id: "K4",
    nazev: "Kompletní péče",
    cas: "≈ 14 min",
    cena: "329 Kč",
    popis:
      "Mytí podvozku a disků, pěna, kartáče, horký vosk, leštění a dvojité sušení. Jednou za měsíc a auto vypadá jako nové.",
    kroky: ["Podvozek a disky", "Pěna a kartáče", "Horký vosk", "Dvojité sušení"],
  },
];

const duvody = [
  {
    titulek: "Otevřeno nonstop",
    text:
      "Myjeme 24 hodin denně, 7 dní v týdnu. Ve tři ráno po cestě z hor i v neděli odpoledne — vždycky svítí zelená.",
  },
  {
    titulek: "Platíte kartou i hotově",
    text:
      "Terminál přímo u vjezdu do boxu. Přiložíte kartu, vyberete program a jedete. Žádné žetony, žádné fronty u pokladny.",
  },
  {
    titulek: "Voda v oběhu",
    text:
      "Přes 80 % vody recyklujeme a čistíme přímo v areálu. Jedno mytí u nás spotřebuje méně čisté vody než mytí na dvoře.",
  },
  {
    titulek: "U pumpy ONO",
    text:
      "Myčka stojí přímo v areálu čerpací stanice Tank ONO na Domažlické. Natankujete za nízkou cenu a umyjete auto na jeden zajezd.",
  },
];

const reference = [
  {
    jmeno: "Petr H., Plzeň-Skvrňany",
    text:
      "Jezdím sem každý druhý týden. Program s voskem za 249 je poměr cena/výkon, který jinde v Plzni nenajdu.",
  },
  {
    jmeno: "Martina K., Nýřany",
    text:
      "Oceňuju, že je otevřeno pořád. Myju auto v šest ráno cestou do práce, nikdy nečekám.",
  },
  {
    jmeno: "Jaroslav D., řidič dodávky",
    text:
      "Vysoký průjezd, dodávka projede bez problémů. Kartáče jsou šetrné, na polepu firmy ani škrábanec.",
  },
];

export default function Page() {
  return (
    <main className="page">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <div className="wordmark" aria-label="Tank ONO — myčka Plzeň">
              <span className="wordmark-tank">TANK</span>
              <span className="wordmark-ono">ONO</span>
              <span className="wordmark-sub">myčka · Plzeň, Domažlická</span>
            </div>
            <a className="hero-tel" href="tel:+420377244410">
              <span className="hero-tel-label">Zavolat myčce</span>
              <span className="hero-tel-num">377 244 410</span>
            </a>
          </div>

          <div className="hero-main">
            <p className="hero-eyebrow">Bezkontaktní i kartáčová myčka · otevřeno nonstop</p>
            <h1 className="hero-title">
              <span className="line line-1">Umyto.</span>
              <span className="line line-2">Navoskováno.</span>
              <span className="line line-3">
                Za <em>10&nbsp;minut</em> jedete.
              </span>
            </h1>
            <p className="hero-lead">
              Automatická myčka u čerpací stanice Tank&nbsp;ONO na Domažlické v&nbsp;Plzni.
              Čtyři programy od 99&nbsp;Kč, platba kartou u&nbsp;vjezdu, žádné čekání u&nbsp;pokladny.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#programy">
                Vybrat program mytí
              </a>
              <a className="btn btn-line" href="#proc">
                Proč mýt u ONO
              </a>
            </div>
          </div>

          {/* Signature: pás mycí linky — pěna → kartáče → vosk → sušení */}
          <div className="washline" aria-hidden="true">
            <div className="washline-track">
              <div className="washline-stage stage-foam">
                <span className="stage-dot" />
                <span className="stage-name">PĚNA</span>
              </div>
              <div className="washline-stage stage-brush">
                <span className="stage-dot" />
                <span className="stage-name">KARTÁČE</span>
              </div>
              <div className="washline-stage stage-wax">
                <span className="stage-dot" />
                <span className="stage-name">VOSK</span>
              </div>
              <div className="washline-stage stage-dry">
                <span className="stage-dot" />
                <span className="stage-name">SUŠENÍ</span>
              </div>
            </div>
            <div className="washline-bubbles">
              <span className="bubble b1" />
              <span className="bubble b2" />
              <span className="bubble b3" />
              <span className="bubble b4" />
              <span className="bubble b5" />
              <span className="bubble b6" />
              <span className="bubble b7" />
            </div>
          </div>
        </div>
      </header>

      {/* ================= PROGRAMY ================= */}
      <section className="programy" id="programy" aria-labelledby="programy-h">
        <div className="section-inner">
          <div className="section-head">
            <h2 id="programy-h">Programy mytí</h2>
            <p className="section-note">
              Program volíte na terminálu u vjezdu. Ceny platí pro osobní auta i dodávky do výšky
              2,8&nbsp;m.
            </p>
          </div>

          <div className="program-grid">
            {myti.map((p) => (
              <article className="program" key={p.id}>
                <div className="program-head">
                  <span className="program-id">{p.id}</span>
                  <span className="program-cas">{p.cas}</span>
                </div>
                <h3 className="program-nazev">{p.nazev}</h3>
                <p className="program-popis">{p.popis}</p>
                <ul className="program-kroky">
                  {p.kroky.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
                <p className="program-cena">
                  <span className="cena-castka">{p.cena}</span>
                  <span className="cena-pozn">platba kartou u vjezdu</span>
                </p>
              </article>
            ))}
          </div>

          <p className="programy-dovetek">
            K myčce patří i <strong>čtyři boxy ručního mytí</strong> s tlakovou pistolí a pěnovým
            kartáčem — 20&nbsp;Kč za 3&nbsp;minuty — a <strong>vysavače zdarma</strong> ke každému
            programu K2 a vyššímu.
          </p>
        </div>
      </section>

      {/* ================= PROČ ONO ================= */}
      <section className="proc" id="proc" aria-labelledby="proc-h">
        <div className="section-inner">
          <div className="section-head">
            <h2 id="proc-h">Proč se v Plzni myje u ONO</h2>
            <p className="section-note">
              Tank ONO provozuje 46 čerpacích stanic po celém Česku. Myčka na Domažlické běží od
              roku 2011 a denně jí projede přes 200 aut.
            </p>
          </div>

          <div className="proc-grid">
            {duvody.map((d) => (
              <div className="proc-item" key={d.titulek}>
                <h3>{d.titulek}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>

          <div className="reference" aria-label="Reference zákazníků">
            {reference.map((r) => (
              <figure className="ref" key={r.jmeno}>
                <blockquote>
                  <p>„{r.text}“</p>
                </blockquote>
                <figcaption>{r.jmeno}</figcaption>
              </figure>
            ))}
          </div>

          <div className="kde">
            <div className="kde-adresa">
              <span className="kde-label">Kde nás najdete</span>
              <p className="kde-text">
                Myčka Tank ONO · Domažlická 178, Plzeň-Skvrňany
                <br />
                V areálu čerpací stanice, vjezd z Domažlické směr Domažlice.
              </p>
            </div>
            <div className="kde-hodiny">
              <span className="kde-label">Otevírací doba</span>
              <p className="kde-text kde-nonstop">NONSTOP</p>
              <p className="kde-pozn">včetně svátků · technická pauza út 6–7 h</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
