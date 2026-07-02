export default function Page() {
  const sluzby = [
    {
      tag: "PRODEJ",
      title: "Zprostředkování prodeje",
      text: "Váš vůz prodáme bez poplatku za parkování. Díky databázi kupců z celé republiky obvykle do pár týdnů, ne měsíců.",
    },
    {
      tag: "VÝKUP",
      title: "Výkup za hotové",
      text: "Nechcete čekat na správného kupce? Vůz od vás odkoupíme na místě a peníze máte tentýž den.",
    },
    {
      tag: "PROTIÚČET",
      title: "Nákup protiúčtem",
      text: "Vyberete si vůz z naší nabídky a ten svůj nám necháte protiúčtem. Doplatíte jen rozdíl.",
    },
    {
      tag: "FINANCE",
      title: "Financování na počkání",
      text: "Úvěrovou nebo leasingovou smlouvu sjednáme přímo u nás, během jedné návštěvy. Spolupracujeme s prověřenými finančními společnostmi.",
    },
    {
      tag: "POJIŠTĚNÍ",
      title: "Pojištění na místě",
      text: "Povinné ručení i havarijní pojištění vyřídíte hned při koupi. Porovnáme nabídky, ať neplatíte víc, než musíte.",
    },
    {
      tag: "ÚŘADY",
      title: "Registrace vozidla",
      text: "Přepis, evidenční kontrola, registrační značky — všechny formality zařídíme za vás. Odjíždíte s hotovými papíry.",
    },
    {
      tag: "SERVIS",
      title: "Opravy, STK a emise",
      text: "Spolupracujeme s autorizovanými servisy v Brně, kde vám přednostně zajistí opravu, technickou kontrolu i měření emisí.",
    },
    {
      tag: "PRŮKAZ",
      title: "Prověření původu vozu",
      text: "Každý vůz prověřujeme přes Cebia a Car Detect — stočené kilometry ani skrytá havárie u nás neprojdou. Oceníme i váš vlastní vůz.",
    },
  ];

  const kroky = [
    {
      num: "1",
      title: "Přijedete nebo zavoláte",
      text: "Řeknete nám, co prodáváte nebo hledáte. Vůz si prohlédneme a rovnou řekneme reálnou cenu — žádné vytáčky.",
    },
    {
      num: "2",
      title: "Papíry řešíme my",
      text: "Prověření původu, kupní smlouva, financování, pojištění i přepis na úřadě. Vy jen podepisujete.",
    },
    {
      num: "3",
      title: "Odjíždíte s hotovou věcí",
      text: "Peníze na účet nebo klíčky v ruce. Většinu obchodů uzavíráme během jediné návštěvy.",
    },
  ];

  return (
    <main className="vs">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="AUTO VS Import">
            <span className="wm-auto">AUTO</span>
            <span className="wm-vs">VS</span>
            <span className="wm-import">IMPORT</span>
          </div>
          <a className="hero-tel" href="tel:+420602000000">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
            </svg>
            <span>602 000 000</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Autobazar · Brno · od roku 1998</p>
          <h1 className="hero-h1">
            <span className="h1-line h1-a">Auto prodáte,</span>
            <span className="h1-line h1-b">koupíte i&nbsp;přepíšete</span>
            <span className="h1-line h1-c">
              na <em>jednom místě</em>.
            </span>
          </h1>
          <p className="hero-sub">
            Výkup za hotové, prodej bez poplatku za stání, financování a pojištění
            na počkání. Každý vůz prověřený přes Cebia — u nás víte, co kupujete.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420602000000">Zavolat autobazar</a>
            <a className="btn btn-ghost" href="#sluzby">Co pro vás zařídíme</a>
          </div>
        </div>

        {/* signature: SPZ pruh — česká registrační značka jako grafický motiv */}
        <div className="plate-strip" aria-hidden="true">
          <div className="plate">
            <span className="plate-eu">CZ</span>
            <span className="plate-num">1BR&nbsp;2024</span>
          </div>
          <div className="plate plate-alt">
            <span className="plate-eu">CZ</span>
            <span className="plate-num">VÝKUP&nbsp;IHNED</span>
          </div>
          <div className="plate">
            <span className="plate-eu">CZ</span>
            <span className="plate-num">BEZ&nbsp;POPLATKU</span>
          </div>
          <div className="plate plate-alt">
            <span className="plate-eu">CZ</span>
            <span className="plate-num">CEBIA&nbsp;OK</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Od klíčků po velký techničák</h2>
          <p>
            Osm věcí, které kolem auta vyřídíte u nás na jednom dvoře v Brně —
            místo osmi cest po úřadech, pojišťovnách a servisech.
          </p>
        </div>
        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li className="karta" key={s.title}>
              <span className="karta-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA / JAK TO PROBÍHÁ ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2 id="duvera-h">Bazar, kde vám řeknou pravdu o&nbsp;kilometrech</h2>
            <p>
              Na brněnském dvoře obchodujeme s auty přes pětadvacet let. Za tu dobu
              víme, že jediné, co v tomhle oboru opravdu prodává, je klidné svědomí
              zákazníka. Proto každý vůz před prodejem prověřujeme v registrech
              Cebia a Car Detect a výsledek vám ukážeme černé na bílém.
            </p>
            <ul className="duvera-fakta">
              <li>
                <strong>25+ let</strong>
                <span>obchodujeme s vozy v Brně</span>
              </li>
              <li>
                <strong>100 %</strong>
                <span>vozů prověřeno přes Cebia a Car Detect</span>
              </li>
              <li>
                <strong>1 návštěva</strong>
                <span>stačí na výkup, smlouvu i pojištění</span>
              </li>
            </ul>
          </div>
          <ol className="kroky">
            {kroky.map((k) => (
              <li className="krok" key={k.num}>
                <span className="krok-plate" aria-hidden="true">
                  <span className="krok-eu">CZ</span>
                  <span className="krok-num">{k.num}</span>
                </span>
                <div>
                  <h3>{k.title}</h3>
                  <p>{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
