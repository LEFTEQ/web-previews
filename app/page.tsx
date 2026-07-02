// Donor servis s.r.o. — diagnostika a servis nákladních i osobních vozidel, Praha 10
// Koncept: „Diagnostický protokol“ — vizuální svět OBD sběrnice, chybových kódů a měřených hodnot.
// Signature: živý diagnostický záznam (waveform) v heru + kódy služeb ve stylu DTC (P0xxx).

const truckServices = [
  { code: "D-01", name: "Diagnostika řídicích jednotek", note: "Motor, převodovka, brzdy EBS, retardér — čtení a mazání závad všech značek tahačů." },
  { code: "D-02", name: "Opravy a servis AdBlue / SCR", note: "Diagnostika dávkování, výměna čerpadel a NOx senzorů, řešení nouzového režimu." },
  { code: "D-03", name: "Čištění filtru pevných částic", note: "Regenerace i strojní čištění DPF bez demontáže motoru. Protokol o průchodnosti." },
  { code: "D-04", name: "Geometrie náprav", note: "3D měření náprav tahačů, návěsů a přívěsů. Ušetříte na pneumatikách i naftě." },
  { code: "D-05", name: "Klimatizace a nezávislé topení", note: "Servis Webasto a Eberspächer, plnění a dezinfekce klimatizace před sezónou." },
  { code: "D-06", name: "Servis autobusů, návěsů a přívěsů", note: "Pravidelné prohlídky, opravy brzd a náprav, příprava na technickou kontrolu." },
];

const carServices = [
  { code: "O-01", name: "Autodiagnostika motoru", note: "Přesné určení závady před opravou — platíte za díl, který je opravdu vadný." },
  { code: "O-02", name: "Servis a opravy všech značek", note: "Kompletní mechanické opravy osobních a užitkových vozidel, i klempířina a lak." },
  { code: "O-03", name: "Příprava a zajištění STK", note: "Vůz projdeme, opravíme co je potřeba a na stanici ho odvezeme za vás." },
  { code: "O-04", name: "Klimatizace, DPF, AdBlue", note: "Stejná technika jako u nákladních vozů — plnění klimatizace, čištění DPF, SCR." },
];

const steps = [
  { num: "1", title: "Zavoláte nebo přijedete", text: "U Plynárny 99, Praha 10. Bez objednání načteme závady na počkání, na větší opravu domluvíme termín." },
  { num: "2", title: "Změříme, než sáhneme na vůz", text: "Nejdřív diagnostika a protokol se skutečnou příčinou. Cenu opravy znáte předem, žádné měnění dílů naslepo." },
  { num: "3", title: "Opravíme a doložíme", text: "Po opravě vůz znovu projedeme diagnostikou. Odjíždíte s vytištěným protokolem bez aktivních závad." },
];

const contacts = [
  { role: "Vedoucí servisu", name: "Michal Dobeš", tel: "+420 777 720 974" },
  { role: "Technik — diagnostika", name: "Petr Kukliš", tel: "+420 777 720 976" },
  { role: "Pojistné události", name: "Petr Dvořák", tel: "+420 777 720 975" },
];

export default function Page() {
  return (
    <main className="ds">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Donor servis">
            <span className="wordmark-main">DONOR</span>
            <span className="wordmark-sub">SERVIS</span>
          </div>
          <div className="hero-meta">
            <span className="meta-dot" aria-hidden="true"></span>
            <span>Po–Pá 7:00–15:30 · Praha 10, U Plynárny 99</span>
          </div>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Diagnostika a servis nákladních i osobních vozidel</p>
          <h1 className="hero-title">
            <span className="line line-1">Nejdřív změříme,</span>
            <span className="line line-2">pak opravíme.</span>
          </h1>
          <p className="hero-lead">
            Připojíme váš vůz na diagnostiku, najdeme skutečnou příčinu závady
            a teprve potom bereme klíč do ruky. Tahače, autobusy, dodávky i osobní
            auta — všechny značky, jedno místo v Praze 10.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420777720974">Zavolat servis</a>
            <a className="btn btn-ghost" href="#sluzby">Co všechno měříme</a>
          </div>
        </div>

        {/* Signature: diagnostický záznam */}
        <div className="hero-scope" aria-hidden="true">
          <div className="scope-labels">
            <span>CH1 · MOTOR ECU</span>
            <span>CH2 · SCR / ADBLUE</span>
            <span>CH3 · DPF ΔP</span>
          </div>
          <svg className="scope-svg" viewBox="0 0 1200 160" preserveAspectRatio="none" role="presentation">
            <g className="scope-grid">
              <line x1="0" y1="40" x2="1200" y2="40" />
              <line x1="0" y1="80" x2="1200" y2="80" />
              <line x1="0" y1="120" x2="1200" y2="120" />
            </g>
            <path
              className="scope-wave wave-a"
              d="M0,80 L60,80 L80,30 L100,130 L120,80 L260,80 L280,55 L300,105 L320,80 L480,80 L500,20 L520,140 L540,80 L700,80 L720,60 L740,100 L760,80 L920,80 L940,35 L960,125 L980,80 L1200,80"
            />
            <path
              className="scope-wave wave-b"
              d="M0,100 C100,100 120,60 200,60 C280,60 300,110 400,110 C500,110 520,50 620,50 C720,50 740,115 840,115 C940,115 960,65 1060,65 C1140,65 1160,100 1200,100"
            />
          </svg>
          <div className="scope-readout">
            <span className="readout-item"><b>0</b> aktivních závad — cíl každé opravy</span>
            <span className="readout-item"><b>±1</b> parametr, kde se rodí problém</span>
            <span className="readout-item"><b>1994</b> rok, od kterého měříme v Praze</span>
          </div>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Protokol služeb</p>
          <h2 id="sluzby-h">Každou položku umíme změřit, doložit a opravit</h2>
          <p className="section-lead">
            Kódy v protokolu nejsou ozdoba — takhle vedeme zakázky v dílně.
            Řada <strong>D</strong> patří nákladním vozům a autobusům, řada <strong>O</strong> osobním a užitkovým.
          </p>
        </div>

        <div className="services-cols">
          <div className="service-block">
            <h3 className="block-title">
              <span className="block-tag tag-d">Řada D</span>
              Nákladní vozy a autobusy
            </h3>
            <ul className="service-list">
              {truckServices.map((s) => (
                <li key={s.code} className="service-row">
                  <span className="service-code">{s.code}</span>
                  <div>
                    <span className="service-name">{s.name}</span>
                    <p className="service-note">{s.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-block">
            <h3 className="block-title">
              <span className="block-tag tag-o">Řada O</span>
              Osobní a užitkové vozy
            </h3>
            <ul className="service-list">
              {carServices.map((s) => (
                <li key={s.code} className="service-row">
                  <span className="service-code code-o">{s.code}</span>
                  <div>
                    <span className="service-name">{s.name}</span>
                    <p className="service-note">{s.note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="insurance">
              <p className="insurance-title">Bouračka? Vyřídíme pojistnou událost za vás.</p>
              <p className="insurance-text">
                Nahlásíme škodu z povinného ručení i havarijního pojištění, připravíme
                dokumentaci pro pojišťovnu a vůz kompletně opravíme včetně klempířiny a laku.
              </p>
              <a className="insurance-link" href="tel:+420777720975">Zavolat Petru Dvořákovi — 777 720 975</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ JAK U NÁS OPRAVA PROBÍHÁ + KONTAKTY ============ */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="section-head">
          <p className="section-eyebrow section-eyebrow-dark">Jak to u nás chodí</p>
          <h2 id="trust-h">Tři kroky od závady k čistému protokolu</h2>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li key={s.num} className="step">
              <span className="step-num" aria-hidden="true">{s.num}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-text">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="crew">
          <div className="crew-intro">
            <h3>Víte, komu voláte</h3>
            <p>
              Jsme malý tým a u telefonu nesedí call centrum — zvedne ho člověk,
              který bude na vašem voze skutečně pracovat. Najdete nás
              v areálu U Plynárny 1290/99, Praha 10, hned u Michelské plynárny.
            </p>
          </div>
          <ul className="crew-list">
            {contacts.map((c) => (
              <li key={c.tel} className="crew-card">
                <span className="crew-role">{c.role}</span>
                <span className="crew-name">{c.name}</span>
                <a className="crew-tel" href={`tel:${c.tel.replace(/\s/g, "")}`}>{c.tel}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
