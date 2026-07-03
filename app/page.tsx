const frakce = [
  { cislo: "6", jednotka: "frakcí", co: "kameniva" },
  { cislo: "3", jednotka: "druhy", co: "cementu" },
  { cislo: "6", jednotka: "druhů", co: "přísad" },
  { cislo: "90", jednotka: "m³/hod", co: "ověřený výkon" },
];

const sluzby = [
  {
    znacka: "C 20/25",
    nazev: "Běžné betony",
    popis:
      "Transportbeton pro základy, desky, věnce i stropy. Namícháme přesně podle projektu — stačí říct třídu pevnosti a konzistenci, zbytek pohlídá technolog.",
    detail: "Certifikováno dle ČSN EN 206",
  },
  {
    znacka: "ANHYSCREED",
    nazev: "Lité podlahy a speciální směsi",
    popis:
      "Samonivelační anhydritové potěry, drátkobetony, vodonepropustné betony. Pro speciální produkty máme v Olomouci vlastního obchodního zástupce.",
    detail: "Prohlášení o vlastnostech ke stažení",
  },
  {
    znacka: "AUTODOMÍCHÁVAČ",
    nazev: "Doprava a čerpání",
    popis:
      "Beton dovezeme autodomíchávačem a na stavbě přečerpáme tam, kam kolečko nedojede — do patra, přes plot, na dno výkopu. Čerpadlo objednáte spolu s betonem.",
    detail: "Dispečink: 724 173 128",
  },
  {
    znacka: "RECYKLACE",
    nazev: "Zbytkový beton zpracujeme",
    popis:
      "Součástí betonárny je recyklační zařízení — co se na stavbě nespotřebuje, nekončí na skládce. V zimě mícháme s ohřevem záměsové vody a předehřevem kameniva.",
    detail: "Betonujeme celoročně",
  },
];

const reference = [
  { stavba: "Šantovka Living", misto: "Olomouc" },
  { stavba: "Obchodní galerie Šantovka", misto: "Olomouc" },
  { stavba: "Holandská čtvrť", misto: "Olomouc" },
  { stavba: "Přestavba Hodolanského divadla", misto: "Olomouc" },
  { stavba: "Lékárna FN Olomouc", misto: "Olomouc" },
  { stavba: "WANZL", misto: "Olomouc – Hněvotín" },
  { stavba: "Technologický park", misto: "Olomouc – Hněvotín" },
  { stavba: "Hala DGPack", misto: "Kralice na Hané" },
];

export default function Page() {
  return (
    <main className="zb">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-topbar">
          <div className="wordmark" aria-label="ZAPA beton">
            <span className="wordmark-zapa">ZAPA</span>
            <span className="wordmark-beton">beton</span>
          </div>
          <p className="hero-plant">
            Betonárna Olomouc&nbsp;–&nbsp;Holice · Přerovská 621
          </p>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Čerstvý beton na vaši stavbu, do 30 minut jízdy po Olomoucku</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Namícháno</span>
            <span className="hero-line hero-line-2">v&nbsp;Holici,</span>
            <span className="hero-line hero-line-3">
              lito <em>u&nbsp;vás</em>.
            </span>
          </h1>
          <p className="hero-sub">
            Zavoláte dopoledne dispečerovi, odpoledne u&nbsp;vás staví
            autodomíchávač. Beton pro rodinný dům i&nbsp;pro halu —
            s&nbsp;certifikátem, technologem a&nbsp;dopravou v&nbsp;jedné objednávce.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420724173128">
              Zavolat dispečink — 724 173 128
            </a>
            <a className="btn btn-line" href="#sluzby">
              Co namícháme
            </a>
          </div>
          <p className="hero-hours">
            Po–Pá 6:30–16:00 (v&nbsp;zimě do 15:00) · víkendy na dotaz
          </p>
        </div>

        {/* Signature: dávkovací pás — sloupce kameniva, cementu a přísad,
            jak je řadí řídicí systém betonárny */}
        <div className="batch-strip" aria-hidden="true">
          <div className="batch-agg batch-a1" />
          <div className="batch-agg batch-a2" />
          <div className="batch-cem" />
          <div className="batch-agg batch-a3" />
          <div className="batch-add" />
          <div className="batch-agg batch-a4" />
          <div className="batch-cem batch-c2" />
          <div className="batch-agg batch-a5" />
        </div>

        <ul className="hero-recipe" aria-label="Parametry betonárny">
          {frakce.map((f) => (
            <li key={f.co}>
              <strong>{f.cislo}</strong>
              <span>
                {f.jednotka} {f.co}
              </span>
            </li>
          ))}
        </ul>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Receptura → mix → doprava → čerpání</p>
          <h2 id="sluzby-h">
            Od receptury po poslední kolečko
          </h2>
          <p className="section-lead">
            Betonárna MERKO&nbsp;VB-225 s&nbsp;automatickým řízením umí 90&nbsp;m³
            čerstvého betonu za hodinu. Malou zakázku na plot vyřídíme stejně
            spolehlivě jako zásobování stavby bytového domu.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.nazev}>
              <p className="karta-znacka">{s.znacka}</p>
              <h3>{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <aside className="mix-note">
          <p>
            <strong>Nevíte, jakou třídu betonu potřebujete?</strong> To je
            v&nbsp;pořádku — do poptávky napište, co stavíte, a&nbsp;náš
            technolog recepturu navrhne. Nemusíte vyplňovat nic, čemu
            nerozumíte.
          </p>
          <a className="btn btn-line btn-dark" href="tel:+420778742982">
            Poradit se s technologem
          </a>
        </aside>
      </section>

      {/* ============ REFERENCE / DŮVĚRA ============ */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head">
          <p className="section-eyebrow section-eyebrow-light">
            Betonovali jsme po celém Olomoucku
          </p>
          <h2 id="duvera-h">Náš beton drží Šantovku i&nbsp;Hodolanské divadlo</h2>
          <p className="section-lead section-lead-light">
            Když jedete Olomoucí, jedete kolem staveb z&nbsp;našeho betonu.
            Tady je pár z&nbsp;nich:
          </p>
        </div>

        <ul className="ref-list">
          {reference.map((r) => (
            <li key={r.stavba}>
              <span className="ref-stavba">{r.stavba}</span>
              <span className="ref-tecky" aria-hidden="true" />
              <span className="ref-misto">{r.misto}</span>
            </li>
          ))}
        </ul>

        <div className="duvera-fakta">
          <div className="fakt">
            <h3>Certifikovaná výroba</h3>
            <p>
              Kvalita, životní prostředí i&nbsp;hospodaření s&nbsp;energií podle
              ISO&nbsp;9001, 14001 a&nbsp;50001. Ke každé dodávce dostanete
              dodací list s&nbsp;přesnou recepturou.
            </p>
          </div>
          <div className="fakt">
            <h3>Lidé, ne formulář</h3>
            <p>
              V&nbsp;Holici se dovoláte konkrétním lidem: dispečerovi, dvěma
              obchodním zástupcům a&nbsp;technologovi. Cenu vám spočítáme
              obratem po telefonu nebo e-mailem na holice@zapa.cz.
            </p>
          </div>
          <div className="fakt">
            <h3>Součást skupiny Buzzi</h3>
            <p>
              Za olomouckou betonárnou stojí síť ZAPA beton a&nbsp;cementárna
              Hranice — suroviny máme vždy odkud vzít, i&nbsp;když stavební
              sezóna jede naplno.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
