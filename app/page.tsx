export const metadata = {
  title: "Klimex Brno — vzduchotechnika a klimatizace na míru",
  description:
    "Klimex spol. s r.o. Brno: návrh, montáž a servis vzduchotechniky a klimatizací pro byty, kanceláře i výrobní haly. Měření průtoku, rekuperace, pravidelné revize.",
  openGraph: {
    title: "Klimex Brno — vzduchotechnika a klimatizace",
    description:
      "Návrh, montáž a servis vzduchotechniky v Brně a okolí. Čistý vzduch od projektu po revizi.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "VZT",
    nazev: "Vzduchotechnika na míru",
    popis:
      "Navrhneme a namontujeme rozvody čerstvého vzduchu pro kanceláře, restaurace i výrobní haly. Potrubí vyměříme přímo u vás, spoje těsníme a před předáním měříme skutečný průtok anemometrem — dostanete protokol, ne slib.",
    parametr: "průtok až 12 000 m³/h",
  },
  {
    kod: "KLI",
    nazev: "Klimatizace bytů a kanceláří",
    popis:
      "Splitové i multisplitové jednotky Daikin a Mitsubishi. Vnitřní jednotku umístíme tak, aby nefoukala na postel ani na pracovní stůl. Montáž zvládneme za jeden den včetně vyvložkování prostupu a úklidu.",
    parametr: "montáž do 1 dne",
  },
  {
    kod: "REK",
    nazev: "Rekuperace pro domy",
    popis:
      "Větrání s rekuperací tepla pro novostavby i rekonstrukce. Vzduch se vymění, teplo zůstane doma — v zimě ušetříte a ráno se nebudíte do vydýchané ložnice. Návrh děláme podle skutečné dispozice, ne podle tabulky.",
    parametr: "účinnost až 93 %",
  },
  {
    kod: "SRV",
    nazev: "Servis a čištění",
    popis:
      "Pravidelné kontroly, výměny filtrů, dezinfekce výparníků a čištění potrubí. Zanesená vzduchotechnika žere elektřinu a šíří prach — po našem servisu poznáte rozdíl čichem. Servisujeme i jednotky, které jsme nemontovali.",
    parametr: "do 48 h u vás",
  },
];

const duvody = [
  {
    cislo: "29",
    jednotka: "let",
    text: "montujeme vzduchotechniku v Brně a okolí. Známe brněnské panelaky, funkcionalistické činžáky i haly ve Slatině.",
  },
  {
    cislo: "1 400+",
    jednotka: "realizací",
    text: "od klimatizace do ložnice po odsávání lakovny. Každou zakázku předáváme s protokolem o zaměřeném průtoku vzduchu.",
  },
  {
    cislo: "48",
    jednotka: "hodin",
    text: "maximální doba, do které u vás servisní technik je. V létě, když klimatizace vypadne, se počítá každý den.",
  },
];

const reference = [
  {
    citace:
      "Klimatizaci do bytu na Vinohradech namontovali za dopoledne. Venkovní jednotku schovali na lodžii tak, že ji od sousedů není vidět, a po sobě uklidili líp, než jsme měli před nimi.",
    kdo: "Rodina Doležalova, Brno-Vinohrady",
  },
  {
    citace:
      "Řešili nám odvětrání kuchyně restaurace na Zelném trhu. Jiné firmy couvly kvůli památkové ochraně, Klimex našel trasu půdou a hygiena prošla napoprvé.",
    kdo: "Restaurace, Brno-střed",
  },
  {
    citace:
      "Servisují nám vzduchotechniku ve výrobní hale už osm let. Filtry mění podle skutečného zanesení, ne podle kalendáře — ušetřili nám desítky tisíc ročně.",
    kdo: "Strojírenská výroba, Brno-Slatina",
  },
];

export default function Page() {
  return (
    <main className="kx">
      {/* ===== HERO ===== */}
      <header className="kx-hero">
        <div className="kx-hero-inner">
          <div className="kx-topbar">
            <span className="kx-wordmark" aria-label="Klimex">
              KLIM<span className="kx-wordmark-x">EX</span>
              <span className="kx-wordmark-sub">vzduchotechnika · Brno</span>
            </span>
            <a className="kx-tel" href="tel:+420541212840">
              <span className="kx-tel-label">Servis i poptávky</span>
              541 212 840
            </a>
          </div>

          <div className="kx-hero-main">
            <p className="kx-eyebrow">Návrh · montáž · servis vzduchotechniky</p>
            <h1 className="kx-title">
              <span className="kx-title-line kx-t1">Vzduch, který</span>
              <span className="kx-title-line kx-t2">
                je cítit{" "}
                <em className="kx-title-fresh">čerstvě</em>
              </span>
            </h1>
            <p className="kx-lead">
              Klimatizace, rekuperace a vzduchotechnické rozvody pro brněnské
              byty, kanceláře i haly. Vyměříme, namontujeme a průtok vzduchu
              vám změříme před očima.
            </p>
            <div className="kx-hero-cta">
              <a className="kx-btn kx-btn-solid" href="tel:+420541212840">
                Zavolat technikovi
              </a>
              <a className="kx-btn kx-btn-ghost" href="mailto:info@klimex-brno.cz">
                Poslat poptávku e-mailem
              </a>
            </div>
          </div>

          {/* signature: řez potrubím + proudnice */}
          <div className="kx-duct" aria-hidden="true">
            <svg viewBox="0 0 1200 340" preserveAspectRatio="none" className="kx-duct-svg">
              {/* potrubí */}
              <rect x="0" y="90" width="1200" height="160" className="kx-duct-body" />
              {/* přírubové spoje po ~1,5 m — tak se čtyřhranné potrubí opravdu spojuje */}
              <g className="kx-duct-flanges">
                <rect x="178" y="78" width="10" height="184" />
                <rect x="438" y="78" width="10" height="184" />
                <rect x="698" y="78" width="10" height="184" />
                <rect x="958" y="78" width="10" height="184" />
              </g>
              {/* proudnice vzduchu */}
              <g className="kx-flow">
                <path className="kx-flow-line kx-f1" d="M-80 130 C 200 118, 420 148, 700 132 S 1100 118, 1300 134" />
                <path className="kx-flow-line kx-f2" d="M-80 172 C 240 186, 460 158, 740 174 S 1120 188, 1300 170" />
                <path className="kx-flow-line kx-f3" d="M-80 212 C 220 200, 480 226, 760 208 S 1140 198, 1300 214" />
              </g>
              {/* výdech — anemometr ukazuje reálný parametr */}
              <g className="kx-duct-readout">
                <text x="1005" y="66" className="kx-readout-text">Ø průtok 3,2 m/s ✓</text>
              </g>
            </svg>
            <div className="kx-duct-caption">
              Řez čtyřhranným potrubím 400 × 160 mm — přírubové spoje po 1,5 m,
              těsněné, měřené.
            </div>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="kx-sluzby" aria-labelledby="sluzby-h">
        <div className="kx-section-inner">
          <div className="kx-section-head">
            <h2 id="sluzby-h" className="kx-h2">
              Co pro vás uděláme
            </h2>
            <p className="kx-section-note">
              Čtyři řemesla jednoho oboru. Kódy VZT, KLI, REK a SRV najdete i na
              našich naceněných nabídkách — víte přesně, za co platíte.
            </p>
          </div>
          <div className="kx-grid">
            {sluzby.map((s) => (
              <article className="kx-card" key={s.kod}>
                <div className="kx-card-head">
                  <span className="kx-kod">{s.kod}</span>
                  <span className="kx-param">{s.parametr}</span>
                </div>
                <h3 className="kx-card-title">{s.nazev}</h3>
                <p className="kx-card-text">{s.popis}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="kx-duvera" aria-labelledby="duvera-h">
        <div className="kx-section-inner">
          <div className="kx-section-head">
            <h2 id="duvera-h" className="kx-h2 kx-h2-light">
              Brno nás zná po čichu
            </h2>
            <p className="kx-section-note kx-note-light">
              Vzduchotechnika je vidět, jen když je špatně. Ta naše je slyšet
              maximálně šeptem — a poznáte ji podle toho, jak se vám dýchá.
            </p>
          </div>

          <dl className="kx-cisla">
            {duvody.map((d) => (
              <div className="kx-cislo" key={d.cislo}>
                <dt className="kx-cislo-hodnota">
                  {d.cislo}
                  <span className="kx-cislo-jednotka"> {d.jednotka}</span>
                </dt>
                <dd className="kx-cislo-text">{d.text}</dd>
              </div>
            ))}
          </dl>

          <ul className="kx-reference">
            {reference.map((r) => (
              <li className="kx-ref" key={r.kdo}>
                <blockquote className="kx-ref-citace">„{r.citace}“</blockquote>
                <p className="kx-ref-kdo">{r.kdo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
