const kroky = [
  {
    cislo: "1",
    titul: "Zavoláte nebo napíšete",
    text: "Popíšete situaci — exekuce, věcné břemeno, nechtěný podíl, insolvence. Nic nemusíte dopředu řešit ani platit.",
  },
  {
    cislo: "2",
    titul: "Do 48 hodin máte nabídku",
    text: "Jsme přímí investoři, ne zprostředkovatelé. Cenu vám řekneme rovnou, bez skrytých provizí a bez čekání na třetí stranu.",
  },
  {
    cislo: "3",
    titul: "Právník připraví smlouvy",
    text: "Spolupracujeme s renomovanou brněnskou advokátní kanceláří. Každý převod hlídá právník, včetně úschovy peněz.",
  },
  {
    cislo: "4",
    titul: "Peníze dostanete ihned",
    text: "Kupní cenu vyplácíme okamžitě po realizaci obchodu. Dluhy vůči exekutorům umíme vypořádat přímo z kupní ceny.",
  },
];

const sluzby = [
  {
    stitek: "Exekuce",
    titul: "Výkup nemovitostí v exekuci",
    text: "Vlastníte byt nebo dům zatížený exekucí a dražba se blíží? Vykoupíme nemovitost, vypořádáme exekutory a zbytek kupní ceny vyplatíme vám. Dražbě se dá předejít — ale jen dokud běží čas.",
    detaily: ["Zastavení dražby jednáním s exekutorem", "Vypořádání více exekucí najednou", "Výplata rozdílu ihned po převodu"],
  },
  {
    stitek: "Podíly",
    titul: "Výkup spoluvlastnických podílů",
    text: "Zdědili jste polovinu domu, ve kterém bydlí někdo jiný? Nechtěný podíl je majetek, který nemůžete užívat ani snadno prodat. My ho odkoupíme — a jednání s ostatními spoluvlastníky převezmeme za vás.",
    detaily: ["Odkup i menšinových podílů", "Jednání se spoluvlastníky za vás", "Řešení podílů zatížených břemenem"],
  },
  {
    stitek: "Insolvence",
    titul: "Pro insolvenční správce",
    text: "Insolvenčním správcům nabízíme rychlé a transparentní zpeněžení nemovitostí z majetkové podstaty. Rozumíme procesu, dokumentaci i termínům — spolupráce s námi znamená méně administrativy a rychlejší výnos pro věřitele.",
    detaily: ["Přímý odkup z majetkové podstaty", "Kompletní právní dokumentace", "Reference z realizovaných řízení"],
  },
];

const duvody = [
  {
    titul: "Přímí investoři",
    text: "Kupujeme za vlastní peníze. Žádné hledání kupce, žádné provize navíc, žádné měsíce nejistoty.",
  },
  {
    titul: "Brněnská advokátní kancelář",
    text: "Každou smlouvu připravuje a kontroluje advokát. Peníze jdou přes advokátní úschovu — vaše jistota je smluvně zajištěná.",
  },
  {
    titul: "Bereme, čeho se jiní bojí",
    text: "Exekuce, věcná břemena, problematické podíly. Případy, od kterých běžné realitky dávají ruce pryč, jsou naše specializace.",
  },
];

export default function Page() {
  return (
    <main className="az">
      {/* ---------- HERO ---------- */}
      <header className="az-hero">
        <div className="az-hero-inner">
          <div className="az-topbar">
            <span className="az-wordmark">
              AZ&nbsp;<em>Real Invest</em>
              <span className="az-wordmark-city">Brno</span>
            </span>
            <a className="az-phone" href="tel:800100455">
              <span className="az-phone-label">Zdarma z celé ČR</span>
              800 100 455
            </a>
          </div>

          <div className="az-hero-grid">
            <div className="az-hero-copy">
              <p className="az-eyebrow">Přímý výkup nemovitostí · Brno a celá ČR</p>
              <h1 className="az-h1">
                <span className="az-h1-line">Nemovitost</span>
                <span className="az-h1-line az-h1-strike">v exekuci</span>
                <span className="az-h1-line">vykoupíme.</span>
              </h1>
              <p className="az-lead">
                Exekuce, věcné břemeno, nechtěný spoluvlastnický podíl. Případy,
                od kterých ostatní realitní kanceláře dávají ruce pryč, řešíme denně —
                jako přímí investoři s právní garancí a okamžitou výplatou.
              </p>
              <div className="az-hero-actions">
                <a className="az-btn az-btn-solid" href="tel:800100455">
                  Zavolat zdarma: 800 100 455
                </a>
                <a className="az-btn az-btn-ghost" href="mailto:info@azrealinvestbrno.cz">
                  Napsat e-mail
                </a>
              </div>
              <p className="az-hero-note">
                Nabídku dostanete do 48 hodin. Nezávazně a bez poplatků.
              </p>
            </div>

            {/* Signature: „výpis z katastru" — list C, závady mizí */}
            <aside className="az-list-c" aria-hidden="true">
              <div className="az-list-c-head">
                <span>Část C</span>
                <span>Omezení vlastnického práva</span>
              </div>
              <ul className="az-list-c-rows">
                <li className="az-row az-row-cleared">
                  <span className="az-row-type">Exekuční příkaz k prodeji</span>
                  <span className="az-row-status">vyřešeno</span>
                </li>
                <li className="az-row az-row-cleared az-row-d2">
                  <span className="az-row-type">Zástavní právo exekutorské</span>
                  <span className="az-row-status">vyřešeno</span>
                </li>
                <li className="az-row az-row-cleared az-row-d3">
                  <span className="az-row-type">Věcné břemeno užívání</span>
                  <span className="az-row-status">vyřešeno</span>
                </li>
                <li className="az-row az-row-clean az-row-d4">
                  <span className="az-row-type">Bez zápisu</span>
                  <span className="az-row-status az-row-status-ok">čistý list</span>
                </li>
              </ul>
              <div className="az-list-c-foot">Takhle vypadá katastr, když skončíme my.</div>
            </aside>
          </div>
        </div>
      </header>

      {/* ---------- SEKCE 1: SLUŽBY ---------- */}
      <section className="az-section az-section-sluzby" aria-labelledby="sluzby-h">
        <div className="az-container">
          <div className="az-section-head">
            <h2 id="sluzby-h" className="az-h2">Co pro vás vyřešíme</h2>
            <p className="az-section-sub">
              Tři situace, ve kterých vám běžná realitka nepomůže. Nám stačí jeden telefonát.
            </p>
          </div>

          <div className="az-sluzby-grid">
            {sluzby.map((s) => (
              <article className="az-karta" key={s.stitek}>
                <span className="az-karta-stitek">{s.stitek}</span>
                <h3 className="az-h3">{s.titul}</h3>
                <p className="az-karta-text">{s.text}</p>
                <ul className="az-karta-list">
                  {s.detaily.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <ol className="az-kroky">
            {kroky.map((k) => (
              <li className="az-krok" key={k.cislo}>
                <span className="az-krok-cislo" aria-hidden="true">{k.cislo}</span>
                <div>
                  <h3 className="az-krok-titul">{k.titul}</h3>
                  <p className="az-krok-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- SEKCE 2: DŮVĚRA ---------- */}
      <section className="az-section az-section-duvera" aria-labelledby="duvera-h">
        <div className="az-container">
          <div className="az-duvera-grid">
            <div className="az-duvera-copy">
              <h2 id="duvera-h" className="az-h2 az-h2-light">
                Vsázíme na jistotu.<br />Tu vaši.
              </h2>
              <p className="az-duvera-lead">
                Jsme brněnská realitní kancelář specializovaná na výkup problematických
                nemovitostí. Nejsme zprostředkovatelé — kupujeme za vlastní kapitál,
                a proto můžeme jednat okamžitě a platit ihned.
              </p>
              <blockquote className="az-citace">
                <p>
                  „Byt po tátovi měl tři exekuce a já bydlela v Ostravě. Do měsíce bylo
                  všechno vypořádané a peníze na účtu. Sama bych to nikdy nezvládla."
                </p>
                <footer>— paní Hana K., prodej bytu 2+1, Brno-Židenice</footer>
              </blockquote>
            </div>

            <div className="az-duvody">
              {duvody.map((d, i) => (
                <div className="az-duvod" key={d.titul}>
                  <span className="az-duvod-marker" aria-hidden="true">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div>
                    <h3 className="az-duvod-titul">{d.titul}</h3>
                    <p className="az-duvod-text">{d.text}</p>
                  </div>
                </div>
              ))}
              <div className="az-kontakt-pas">
                <p className="az-kontakt-pas-label">Kancelář Brno · působíme v celé ČR</p>
                <a href="tel:775185005" className="az-kontakt-pas-tel">775 185 005</a>
                <a href="mailto:info@azrealinvestbrno.cz" className="az-kontakt-pas-mail">
                  info@azrealinvestbrno.cz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
