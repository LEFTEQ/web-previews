// LEGIE GUARD service s.r.o. — bezpečnostní agentura Brno
// Design: „Perimetr" — vizuální jazyk odvozený z řemesla ostrahy:
// obchůzkové trasy, kontrolní body, perimetr objektu. Signature prvek je
// SVG mapa perimetru s kontrolními body v hero sekci.

const sluzby = [
  {
    kod: "OS-01",
    nazev: "Fyzická ostraha objektů",
    popis:
      "Stálá strážní služba na vrátnici, obchůzky areálu podle plánu kontrolních bodů, evidence osob a vozidel. Stavby, sklady, administrativní budovy, hotely.",
    rezim: "24/7 nebo dle směn",
  },
  {
    kod: "PR-02",
    nazev: "Převozy hotovosti a cenin",
    popis:
      "Doprovod a přeprava finanční hotovosti a cenností vlastním vozovým parkem. Trasa i časy se plánují individuálně, posádka je proškolená a pojištěná.",
    rezim: "Na objednávku",
  },
  {
    kod: "DT-03",
    nazev: "Detektivové v civilu",
    popis:
      "Nenápadný dohled v prodejnách a obchodních domech. Detektiv zadrží pachatele při činu a předá věc podle zákona — bez rozruchu pro vaše zákazníky.",
    rezim: "Otevírací doba prodejny",
  },
  {
    kod: "AK-04",
    nazev: "Pořadatelská služba na akcích",
    popis:
      "Koncerty, kluby, sportovní a společenské akce. Kontrola vstupu, dohled v hledišti i zákulisí. Léta spolupracujeme s brněnskými kluby a hudebními agenturami.",
    rezim: "Jednorázově i dlouhodobě",
  },
  {
    kod: "EZ-05",
    nazev: "Elektronické zabezpečení",
    popis:
      "Návrh a kompletní realizace elektronického zabezpečení objektu včetně připojení na pult centrální ochrany. Technika doplňuje fyzickou ostrahu, nenahrazuje ji.",
    rezim: "Cena na dotaz: 603 844 343",
  },
  {
    kod: "BA-06",
    nazev: "Bezpečnostní analýzy",
    popis:
      "Projdeme váš objekt, najdeme slabá místa a navrhneme režim ostrahy, který dává smysl provozně i finančně. Analýza je základ každé naší smlouvy.",
    rezim: "Před zahájením služby",
  },
];

const reference = [
  "Česká televize, studio Brno",
  "Český rozhlas, studio Brno",
  "Muzeum města Brna — hrad Špilberk",
  "Janáčkova akademie múzických umění",
  "Kulturní a informační centrum města Brna",
  "ČSAD Brno holding a.s.",
  "Stavospol, spol. s r.o.",
  "KENVELO CZ, spol. s r.o.",
  "Gymnázium Křenová Brno",
  "ÚKZÚZ — Ústřední kontrolní a zkušební ústav zemědělský",
  "Klub Alterna",
  "AUTONOVA Brno, s.r.o.",
];

export default function Page() {
  return (
    <main className="lg-main">
      {/* ===================== HERO ===================== */}
      <header className="lg-hero">
        <div className="lg-hero-top">
          <div className="lg-wordmark" aria-label="Legie Guard service, bezpečnostní agentura Brno">
            <span className="lg-wordmark-legie">LEGIE</span>
            <span className="lg-wordmark-guard">GUARD</span>
            <span className="lg-wordmark-sub">service s.r.o. · Brno</span>
          </div>
          <a className="lg-hero-tel" href="tel:+420549244180">
            <span className="lg-hero-tel-label">Dispečink</span>
            +420 549 244 180
          </a>
        </div>

        <div className="lg-hero-grid">
          <div className="lg-hero-copy">
            <p className="lg-hero-eyebrow">
              <span className="lg-dot" aria-hidden="true"></span>
              Ve službě nepřetržitě — Brno a celá ČR
            </p>
            <h1 className="lg-hero-title">
              Váš objekt má<br />
              <em>perimetr.</em><br />
              My ho držíme.
            </h1>
            <p className="lg-hero-lead">
              Fyzická ostraha, převozy hotovosti, detektivové v civilu a
              pořadatelská služba. Od roku 1998 hlídáme brněnské stavby,
              obchodní domy, kulturní instituce i koncerty — na smlouvu
              i jednorázově.
            </p>
            <div className="lg-hero-actions">
              <a className="lg-btn lg-btn-primary" href="tel:+420737216790">
                Zavolat dispečink
              </a>
              <a className="lg-btn lg-btn-ghost" href="#sluzby">
                Přehled služeb
              </a>
            </div>
            <dl className="lg-hero-facts">
              <div>
                <dt>Působnost</dt>
                <dd>celá ČR</dd>
              </div>
              <div>
                <dt>Režim služby</dt>
                <dd>24 / 7 / 365</dd>
              </div>
              <div>
                <dt>Náhradní plnění</dt>
                <dd>§ 81 zák. 435/2004 Sb.</dd>
              </div>
            </dl>
          </div>

          {/* Signature: mapa perimetru s kontrolními body a obchůzkovou trasou */}
          <div className="lg-perimeter" aria-hidden="true">
            <svg viewBox="0 0 440 480" className="lg-perimeter-svg" role="img" focusable="false">
              {/* rastr objektu */}
              <g className="lg-p-grid" stroke="#2E3A31" strokeWidth="1">
                <path d="M40 0v480M120 0v480M200 0v480M280 0v480M360 0v480" />
                <path d="M0 60h440M0 140h440M0 220h440M0 300h440M0 380h440M0 460h440" />
              </g>
              {/* půdorys střeženého objektu */}
              <path
                className="lg-p-building"
                d="M120 140h160v80h80v160H160v-80h-40z"
                fill="#1B241E"
                stroke="#5E6E60"
                strokeWidth="1.5"
              />
              {/* obchůzková trasa — perimetr */}
              <path
                className="lg-p-route"
                d="M80 100 L340 100 L340 200 L400 200 L400 420 L120 420 L120 320 L80 320 Z"
                fill="none"
                stroke="#D9B14B"
                strokeWidth="2"
                strokeDasharray="7 7"
              />
              {/* kontrolní body */}
              <g className="lg-p-points">
                <g className="lg-p-pt lg-p-pt1">
                  <circle cx="80" cy="100" r="7" fill="#0F1512" stroke="#D9B14B" strokeWidth="2" />
                  <circle cx="80" cy="100" r="2.5" fill="#D9B14B" />
                </g>
                <g className="lg-p-pt lg-p-pt2">
                  <circle cx="340" cy="100" r="7" fill="#0F1512" stroke="#D9B14B" strokeWidth="2" />
                  <circle cx="340" cy="100" r="2.5" fill="#D9B14B" />
                </g>
                <g className="lg-p-pt lg-p-pt3">
                  <circle cx="400" cy="200" r="7" fill="#0F1512" stroke="#D9B14B" strokeWidth="2" />
                  <circle cx="400" cy="200" r="2.5" fill="#D9B14B" />
                </g>
                <g className="lg-p-pt lg-p-pt4">
                  <circle cx="400" cy="420" r="7" fill="#0F1512" stroke="#D9B14B" strokeWidth="2" />
                  <circle cx="400" cy="420" r="2.5" fill="#D9B14B" />
                </g>
                <g className="lg-p-pt lg-p-pt5">
                  <circle cx="120" cy="420" r="7" fill="#0F1512" stroke="#D9B14B" strokeWidth="2" />
                  <circle cx="120" cy="420" r="2.5" fill="#D9B14B" />
                </g>
                <g className="lg-p-pt lg-p-pt6">
                  <circle cx="80" cy="320" r="7" fill="#0F1512" stroke="#D9B14B" strokeWidth="2" />
                  <circle cx="80" cy="320" r="2.5" fill="#D9B14B" />
                </g>
              </g>
              {/* popisky bodů */}
              <g className="lg-p-labels" fill="#8A9A8C" fontSize="11" fontFamily="'IBM Plex Mono', monospace" letterSpacing="1">
                <text x="66" y="84">KB·01</text>
                <text x="326" y="84">KB·02</text>
                <text x="370" y="185">KB·03</text>
                <text x="370" y="445">KB·04</text>
                <text x="106" y="445">KB·05</text>
                <text x="40" y="305">KB·06</text>
              </g>
              {/* strážný na trase */}
              <circle className="lg-p-patrol" cx="210" cy="100" r="4" fill="#E8ECE7" />
            </svg>
            <p className="lg-perimeter-caption">Plán obchůzky · kontrolní body KB·01–06</p>
          </div>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="lg-section lg-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="lg-section-head">
          <p className="lg-eyebrow">Rozpis služeb</p>
          <h2 id="sluzby-h" className="lg-h2">
            Šest služeb.<br />Jeden režim: spolehlivě.
          </h2>
          <p className="lg-section-lead">
            Každou zakázku začínáme obhlídkou objektu. Teprve pak navrhneme
            rozsah — nikdy neprodáváme víc hodin, než ostraha reálně potřebuje.
          </p>
        </div>

        <ul className="lg-sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="lg-karta">
              <div className="lg-karta-head">
                <span className="lg-karta-kod">{s.kod}</span>
                <span className="lg-karta-rezim">{s.rezim}</span>
              </div>
              <h3 className="lg-karta-nazev">{s.nazev}</h3>
              <p className="lg-karta-popis">{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="lg-ozz">
          <span className="lg-ozz-znak" aria-hidden="true">§</span>
          <p>
            <strong>Náhradní plnění:</strong> zaměstnáváme více než 50 %
            osob se zdravotním znevýhodněním podle § 81 odst. 2 zákona
            č. 435/2004 Sb. Odběrem našich služeb si započtete povinný podíl
            zaměstnávání OZZ.
          </p>
        </div>
      </section>

      {/* ===================== DŮVĚRA / REFERENCE ===================== */}
      <section className="lg-section lg-duvera" aria-labelledby="duvera-h">
        <div className="lg-duvera-grid">
          <div className="lg-duvera-copy">
            <p className="lg-eyebrow lg-eyebrow-light">Kdo nám svěřil klíče</p>
            <h2 id="duvera-h" className="lg-h2 lg-h2-light">
              Hlídáme Špilberk.<br />A hlídali bychom i vás.
            </h2>
            <p className="lg-duvera-lead">
              Televizní studio, hrad, akademie múzických umění, autobusový
              dopravce, gymnázium i noční klub — každý z těchto objektů má
              jiná rizika a jiný provoz. Všem stavíme ostrahu na míru,
              ne podle šablony.
            </p>
            <div className="lg-duvera-fakta">
              <div className="lg-fakt">
                <span className="lg-fakt-cislo">1998</span>
                <span className="lg-fakt-popis">rok zápisu u Krajského soudu v Brně, odd. C, vl. 37038</span>
              </div>
              <div className="lg-fakt">
                <span className="lg-fakt-cislo">20+</span>
                <span className="lg-fakt-popis">stálých smluvních klientů v Brně a okolí</span>
              </div>
            </div>
            <address className="lg-adresa">
              LEGIE GUARD service s.r.o.<br />
              Ptašínského 308/5, 602 00 Brno<br />
              <a href="tel:+420549244180">+420 549 244 180</a> ·{" "}
              <a href="tel:+420737216790">+420 737 216 790</a>
            </address>
          </div>

          <ul className="lg-ref-list">
            {reference.map((r) => (
              <li key={r} className="lg-ref-item">
                <span className="lg-ref-check" aria-hidden="true">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
