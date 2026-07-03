// MVDr. Igor Beneš — Veterinární klinika Brno-Komín
// Design koncept: „EKG linka" — signature prvek odvozený z kardiologie kliniky
// (echo-kardio je jejich specializace). Puls zvířecího srdce jako vizuální nit
// celé stránky. Paleta: klinická zeleň posunutá do hlubokého jedlového tónu
// + teplá srst (pískový akcent), žádné šablonové cream/terracotta.

const vykony = [
  {
    obor: "Interna a prevence",
    popis:
      "Vakcinace, odčervení, čipování a pasy pro psy, kočky i fretky. Vnitřní nemoci řešíme s laboratoří přímo na klinice — výsledky krve máte tentýž den.",
    detail: "Laboratoř na klinice",
  },
  {
    obor: "Kardiologie",
    popis:
      "Echokardiografické vyšetření srdce, EKG a řešení kolapsu průdušnice tracheálním stentem. Jedno z mála pracovišť v Brně s tímto zákrokem.",
    detail: "Echo-kardio + stenty",
  },
  {
    obor: "Chirurgie a ortopedie",
    popis:
      "Přes 20 000 provedených operací. Anestezie je u nás vždy inhalační a monitorovaná — vaše zvíře je pod dohledem po celou dobu zákroku.",
    detail: "Monitorovaná anestezie",
  },
  {
    obor: "Zobrazovací metody",
    popis:
      "RTG s přímou digitalizací, ultrasonografie, flexibilní i rigidní endoskopie a intraorální RTG pro zubní zákroky. Diagnózu stanovíme na místě.",
    detail: "Digitální RTG + endoskopie",
  },
  {
    obor: "Dermatologie a alergie",
    popis:
      "Alergenodiagnostika a následná desenzibilizace. Když se váš pes škrábe a nic nepomáhá, najdeme příčinu, ne jen mast na příznaky.",
    detail: "Desenzibilizace",
  },
  {
    obor: "FyzioPet rehabilitace",
    popis:
      "Laserová terapie, Dornova metoda, rehabilitace po operacích a kondiční cvičení. Aby se váš pes po ortopedickém zákroku vrátil k běhání.",
    detail: "Laser + Dornova metoda",
  },
];

const hodiny = [
  { den: "Pondělí–Pátek", cas: "8:00 – 19:00" },
  { den: "Sobota", cas: "8:00 – 10:00" },
  { den: "Neděle", cas: "19:00 – 20:00" },
];

export default function Page() {
  return (
    <main className="vk">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-vet">VETERINA</span>
            <span className="wordmark-komin">KOMÍN</span>
          </div>
          <p className="hero-loc">Bystrcká 28, Brno-Komín</p>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">MVDr. Igor Beneš — veterinární klinika</p>
          <h1 className="hero-title">
            <span className="line line-1">Srdce vašeho</span>
            <span className="line line-2">zvířete hlídáme</span>
            <span className="line line-3">
              od roku <em>1995</em>
            </span>
          </h1>

          {/* Signature: EKG puls — kardiologie je specializace kliniky */}
          <div className="ekg" aria-hidden="true">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="ekg-svg">
              <path
                className="ekg-path"
                d="M0,60 L180,60 L210,60 L225,38 L240,82 L255,60 L340,60 L370,60 L385,12 L402,108 L420,52 L435,60 L620,60 L650,60 L665,38 L680,82 L695,60 L830,60 L860,60 L875,12 L892,108 L910,52 L925,60 L1200,60"
                fill="none"
              />
            </svg>
          </div>

          <div className="hero-facts">
            <div className="fact">
              <span className="fact-num">250 000</span>
              <span className="fact-label">návštěv za 30 let</span>
            </div>
            <div className="fact">
              <span className="fact-num">20 000+</span>
              <span className="fact-label">provedených operací</span>
            </div>
            <div className="fact">
              <span className="fact-num">15 000</span>
              <span className="fact-label">ošetřených zvířat</span>
            </div>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420541224896">
              Zavolat 541 224 896
            </a>
            <a className="btn btn-ghost" href="mailto:veterinakomin@gmail.com">
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="hero-hours" role="note">
          <p className="hours-title">Ordinační hodiny</p>
          <dl className="hours-list">
            {hodiny.map((h) => (
              <div className="hours-row" key={h.den}>
                <dt>{h.den}</dt>
                <dd>{h.cas}</dd>
              </div>
            ))}
          </dl>
          <p className="hours-note">
            Mimo ordinační hodiny ošetříme po telefonické domluvě na{" "}
            <a href="tel:+420737313323">737 313 323</a> nebo{" "}
            <a href="tel:+420604752593">604 752 593</a>. Lékař není na klinice
            nonstop — vždy nejdřív volejte. Pohotovostní příplatek 1 000 Kč.
          </p>
        </div>
      </header>

      {/* ===== SEKCE 1: VÝKONY ===== */}
      <section className="vykony" aria-labelledby="vykony-h">
        <div className="section-head">
          <h2 id="vykony-h">Co u nás vyřešíte</h2>
          <p className="section-lead">
            Od očkování štěněte po operaci srdce. Většinu vyšetření provedeme
            přímo na klinice v Komíně — nemusíte s výsledky nikam jezdit.
          </p>
        </div>

        <ul className="vykony-grid">
          {vykony.map((v) => (
            <li className="vykon" key={v.obor}>
              <span className="vykon-tag">{v.detail}</span>
              <h3>{v.obor}</h3>
              <p>{v.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2 id="duvera-h">
              Třicet let v Komíně.
              <br />
              Tři generace pacientů.
            </h2>
            <p>
              Klinika MVDr. Igora Beneše ošetřuje zvířata z Komína, Bystrce a
              celého Brna od roku 1995. Za tu dobu k nám chodí rodiny, jejichž
              první pes u nás dostal štěněcí očkování — a dnes vodí jeho
              vnoučata.
            </p>
            <p>
              Nejsme fabrika na pacienty. Znáte svého lékaře jménem, on zná
              vašeho psa. A když jde do tuhého, máme vybavení, které jinde
              hledáte marně: monitorovanou inhalační anestezii u každého
              zákroku, digitální RTG, endoskopy i vlastní laboratoř.
            </p>
          </div>

          <ul className="duvera-body">
            <li>
              <span className="duvera-znak" aria-hidden="true">
                ✚
              </span>
              <div>
                <h3>Anestezie vždy monitorovaná</h3>
                <p>
                  Každá narkóza je u nás inhalační a pod trvalým dohledem
                  přístrojů i personálu. Žádné výjimky, žádné zkratky.
                </p>
              </div>
            </li>
            <li>
              <span className="duvera-znak" aria-hidden="true">
                ✚
              </span>
              <div>
                <h3>Výsledky ještě dnes</h3>
                <p>
                  Krevní testy a laboratorní vyšetření děláme přímo na klinice.
                  Nečekáte dny na diagnózu, když jde o hodiny.
                </p>
              </div>
            </li>
            <li>
              <span className="duvera-znak" aria-hidden="true">
                ✚
              </span>
              <div>
                <h3>Pohotovost po domluvě</h3>
                <p>
                  Akutní případy řešíme i mimo ordinační hodiny — zavolejte na{" "}
                  <a href="tel:+420737313323">737 313 323</a> a domluvíme se.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
