export default function Page() {
  const sluzby = [
    {
      kod: "SANI",
      nazev: "Dodávka a montáž vzduchotechniky",
      popis:
        "Navrhneme, dodáme a namontujeme kompletní vzduchotechnické zařízení — od potrubních rozvodů po vzduchotechnické jednotky. Součástí je cenová nabídka i projektová dokumentace.",
      body: ["Potrubní rozvody a tvarovky", "VZT jednotky a ventilátory", "Izolace rozvodů"],
    },
    {
      kod: "SERV",
      nazev: "Servis, opravy a repase",
      popis:
        "Udržíme vaše větrání v chodu. Provádíme pravidelný servis, opravy poruch i kompletní repase starších zařízení, které by jinak čekala výměna.",
      body: ["Pravidelné servisní prohlídky", "Opravy poruch a výměny dílů", "Repase starších VZT zařízení"],
    },
    {
      kod: "PPK",
      nazev: "Revize požárních klapek",
      popis:
        "Kontrolujeme provozuschopnost požárně bezpečnostních zařízení (PBZ) a protipožárních klapek (PPK) podle předpisů — včetně protokolu pro vaši dokumentaci.",
      body: ["Kontroly provozuschopnosti PBZ", "Revize protipožárních klapek", "Protokoly a posudky"],
    },
    {
      kod: "KLIM",
      nazev: "Klimatizace TOSHIBA",
      popis:
        "Jsme montážní a servisní partner klimatizací TOSHIBA. Dodáme, namontujeme a dlouhodobě servisujeme klimatizaci pro byty, kanceláře i provozy.",
      body: ["Dodávka a montáž klimatizace", "Záruční i pozáruční servis", "Poradenství s výběrem výkonu"],
    },
    {
      kod: "MĚŘ",
      nazev: "Měření a regulace",
      popis:
        "Změříme skutečný výkon vašeho větrání a zaregulujeme ho tak, aby vzduch proudil tam, kam má. Doplníme automatickou regulaci pro úsporný provoz.",
      body: ["Měření výkonu zařízení", "Zaregulování rozvodů", "Automatická regulace"],
    },
    {
      kod: "PANEL",
      nazev: "Větrání panelových domů",
      popis:
        "Rekonstruujeme centrální větrání panelových domů — od posouzení stávajícího stavu po výměnu ventilátorů a vyčištění stoupacích šachet.",
      body: ["Posouzení stávajícího stavu", "Výměna střešních ventilátorů", "Rekonstrukce rozvodů"],
    },
  ];

  const duvera = [
    {
      cislo: "27",
      jednotka: "let",
      text: "Vzduchotechniku v Praze děláme od roku 1998. Za tu dobu jsme prošli stovky kotelen, strojoven a střech panelových domů.",
    },
    {
      cislo: "1",
      jednotka: "firma na všechno",
      text: "Dodávka, montáž, servis i revize pod jednou střechou. Nemusíte shánět tři dodavatele — a za výsledek ručí jedna parta.",
    },
    {
      cislo: "48",
      jednotka: "h reakce",
      text: "Na poruchu servisovaných zařízení reagujeme zpravidla do dvou pracovních dnů. Kritické provozy řešíme přednostně.",
    },
  ];

  return (
    <main className="vks">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="topbar">
            <span className="wordmark" aria-label="VKS Praha">
              <span className="wm-v">V</span>
              <span className="wm-k">K</span>
              <span className="wm-s">S</span>
              <span className="wm-praha">Praha</span>
            </span>
            <span className="topbar-info">
              Horní Měcholupy · Po–Pá 7.00–15.30 ·{" "}
              <a href="tel:+420274860591" className="topbar-tel">
                274 860 591
              </a>
            </span>
          </div>

          <div className="hero-grid">
            <div className="hero-text">
              <p className="hero-eyebrow">Vzduchotechnika · Praha · od 1998</p>
              <h1 className="hero-title">
                <span className="ht-line ht-1">Vzduch má</span>
                <span className="ht-line ht-2">proudit.</span>
                <span className="ht-line ht-3">
                  My se staráme, <em>aby proudil správně.</em>
                </span>
              </h1>
              <p className="hero-lead">
                Dodávka, montáž a servis vzduchotechniky. Revize požárních
                klapek, klimatizace TOSHIBA, větrání panelových domů. Jedna
                firma, celá Praha.
              </p>
              <div className="hero-cta">
                <a href="tel:+420602207423" className="btn btn-plna">
                  Zavolat 602 207 423
                </a>
                <a href="#sluzby" className="btn btn-obrys">
                  Co všechno děláme
                </a>
              </div>
            </div>

            {/* Signature: schéma VZT potrubí s klapkou a prouděním */}
            <div className="duct" aria-hidden="true">
              <svg viewBox="0 0 360 520" className="duct-svg" role="presentation">
                {/* svislé potrubí */}
                <rect x="120" y="0" width="120" height="300" className="d-body" />
                {/* koleno */}
                <path d="M120 300 L120 420 L360 420 L360 300 L240 300 L240 300 A0 0 0 0 0 120 300 Z" className="d-body" />
                <path d="M120 300 Q120 420 240 420 L360 420 L360 300 Q240 300 240 300" className="d-none" />
                {/* příruby */}
                <rect x="112" y="96" width="136" height="10" className="d-flange" />
                <rect x="112" y="208" width="136" height="10" className="d-flange" />
                <rect x="330" y="292" width="10" height="136" className="d-flange" />
                {/* požární klapka */}
                <g className="d-klapka">
                  <circle cx="180" cy="158" r="34" className="d-klapka-telo" />
                  <line x1="156" y1="134" x2="204" y2="182" className="d-klapka-list" />
                  <circle cx="180" cy="158" r="5" className="d-klapka-osa" />
                </g>
                {/* proudnice vzduchu */}
                <g className="d-proud">
                  <path d="M150 -40 L150 250 Q150 390 290 390 L420 390" className="d-linie d-l1" />
                  <path d="M180 -80 L180 240 Q180 360 300 360 L420 360" className="d-linie d-l2" />
                  <path d="M210 -20 L210 260 Q210 330 310 330 L420 330" className="d-linie d-l3" />
                </g>
                {/* nýty */}
                <g className="d-nyty">
                  <circle cx="128" cy="40" r="3" />
                  <circle cx="232" cy="40" r="3" />
                  <circle cx="128" cy="260" r="3" />
                  <circle cx="232" cy="260" r="3" />
                  <circle cx="300" cy="312" r="3" />
                  <circle cx="300" cy="408" r="3" />
                </g>
              </svg>
              <p className="duct-popisek">
                <span className="duct-znacka">PPK Ø 315</span> protipožární
                klapka — kontrolujeme podle vyhlášky
              </p>
            </div>
          </div>

          <div className="hero-pas" aria-hidden="true">
            <span>DODÁVKA</span>
            <span className="pas-sip">→</span>
            <span>MONTÁŽ</span>
            <span className="pas-sip">→</span>
            <span>ZAREGULOVÁNÍ</span>
            <span className="pas-sip">→</span>
            <span>SERVIS</span>
            <span className="pas-sip">→</span>
            <span>REVIZE</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-inner">
          <div className="sekce-hlava">
            <p className="sekce-eyebrow">Naše práce</p>
            <h2 id="sluzby-h" className="sekce-title">
              Od návrhu po revizi.\u00a0Vše kolem vzduchu.
            </h2>
            <p className="sekce-uvod">
              Vedle realizací provozujeme i velkoobchod a maloobchod se
              vzduchotechnikou — potrubí, tvarovky a ventilátory koupíte přímo
              u nás v Horních Měcholupech.
            </p>
          </div>

          <div className="sluzby-mrizka">
            {sluzby.map((s) => (
              <article className="karta" key={s.kod}>
                <div className="karta-hlava">
                  <span className="karta-kod">{s.kod}</span>
                  <span className="karta-vetrak" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" role="presentation">
                      <g className="vetrak-lopatky">
                        <path d="M12 12 C12 7 14 4 12 2 C9 3 8 8 10 11 Z" />
                        <path d="M12 12 C17 12 20 14 22 12 C21 9 16 8 13 10 Z" />
                        <path d="M12 12 C12 17 10 20 12 22 C15 21 16 16 14 13 Z" />
                        <path d="M12 12 C7 12 4 10 2 12 C3 15 8 16 11 14 Z" />
                      </g>
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </span>
                </div>
                <h3 className="karta-nazev">{s.nazev}</h3>
                <p className="karta-popis">{s.popis}</p>
                <ul className="karta-body">
                  {s.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-inner">
          <div className="duvera-grid">
            <div className="duvera-text">
              <p className="sekce-eyebrow sekce-eyebrow-svetla">O firmě</p>
              <h2 id="duvera-h" className="sekce-title sekce-title-svetla">
                Montérská firma z Horních Měcholup, ne&nbsp;call&nbsp;centrum.
              </h2>
              <p className="duvera-odstavec">
                VKS Praha jsme založili v roce 1998. Když nám zavoláte, mluvíte
                s někým, kdo byl minulý týden na střeše panelového domu nebo ve
                strojovně obchodního centra — ne s operátorem, který vaši
                zakázku přepošle dál.
              </p>
              <p className="duvera-odstavec">
                Držíme si vlastní montéry, vlastní sklad a vlastní prodejnu na
                Livornské 429 v Praze 15. Díky tomu umíme běžný díl vyměnit ze
                skladu, ne na objednávku s dodáním za tři týdny.
              </p>
              <div className="duvera-adresa">
                <span className="adresa-radek">Livornská 429, 109 00 Praha 15 — Horní Měcholupy</span>
                <span className="adresa-radek">Prodejna a sklad: Po–Pá 7.00–15.30</span>
              </div>
            </div>

            <div className="duvera-cisla">
              {duvera.map((d) => (
                <div className="cislo-blok" key={d.jednotka}>
                  <p className="cislo-hodnota">
                    {d.cislo}
                    <span className="cislo-jednotka"> {d.jednotka}</span>
                  </p>
                  <p className="cislo-text">{d.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reference">
            <p className="reference-titulek">Kde nás potkáte v terénu</p>
            <ul className="reference-seznam">
              <li>Rekonstrukce větrání panelových domů — Jižní Město, Horní Měcholupy</li>
              <li>Revize protipožárních klapek pro správce administrativních budov</li>
              <li>Klimatizace TOSHIBA v kancelářích a ordinacích po celé Praze</li>
              <li>Servisní smlouvy pro gastroprovozy a menší výrobní haly</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
