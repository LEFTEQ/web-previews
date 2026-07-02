export default function Page() {
  const vyroba = [
    {
      nazev: "Řezání skla",
      popis: "Řežeme tabule až do nadlimitního formátu 6 × 3,21 m — velikosti, které běžné sklenářství odmítne.",
      parametr: "max 6 000 × 3 210 mm",
    },
    {
      nazev: "Broušení zrcadel",
      popis: "Obrousíme zrcadlo až do výšky 4 metrů. Hrana je čistá, bez odštěpků, připravená k montáži.",
      parametr: "výška až 4 000 mm",
    },
    {
      nazev: "Fazetování",
      popis: "Na hraně skla vytvoříme jakoukoli fazetu — od jemné dekorativní po širokou zrcadlovou.",
      parametr: "libovolná šířka fazety",
    },
    {
      nazev: "Vrtání skla",
      popis: "Vrtáme float od tloušťky 2 mm do 19 mm. Otvory pro kování, terče i úchyty zábradlí.",
      parametr: "tl. 2–19 mm",
    },
    {
      nazev: "Lepení a vrstvení",
      popis: "Lepíme silikonem i UV lepidlem, laminujeme moderními fóliemi na bezpečnostní vrstvená skla.",
      parametr: "UV lepení · lamináty",
    },
    {
      nazev: "Pískování",
      popis: "Pískujeme celoplošně nebo podle vaší předlohy — matná grafika přímo do povrchu skla.",
      parametr: "celoplošně i dle šablony",
    },
  ];

  const postup = [
    {
      krok: "Poradíme s výběrem",
      popis: "Pomůžeme vám vybrat správný druh bezpečného skla — kalené, vrstvené, nebo obojí.",
    },
    {
      krok: "Zaměříme na místě",
      popis: "Přijedeme a odborně zaměříme přesné rozměry zasklení. Milimetry u skla rozhodují.",
    },
    {
      krok: "Navrhneme uložení",
      popis: "Určíme správný způsob uložení a podepření skla podle normy i podle stavby.",
    },
    {
      krok: "Vyrobíme a namontujeme",
      popis: "Sklo vyrobíme ve vlastní dílně a hned ho namontujeme vlastní montážní četou.",
    },
    {
      krok: "Zkontrolujeme a uklidíme",
      popis: "Před předáním zkontrolujeme kvalitu — a po sobě uklidíme. Tak to má být.",
    },
  ];

  const reference = [
    "Skleněná vitrína — Maurice Lacroix",
    "Vetknuté skleněné schodiště",
    "Samonosné zábradlí bez madla",
    "Akustická předsazená fasáda",
    "Zrcadla ve fitness — Praha Butovice",
    "Skleněná markýza nad promenádou",
    "Pochůzné sklo",
    "Skleněný bar do vinotéky",
  ];

  return (
    <main className="ag">
      {/* ===== HERO ===== */}
      <header className="ag-hero">
        <div className="ag-hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="ag-hero-img"
          />
          <div className="ag-hero-scrim" />
        </div>

        <div className="ag-hero-inner">
          <div className="ag-topbar">
            <div className="ag-wordmark" aria-label="Sklenářství Alfaglass">
              <span className="ag-wordmark-alfa">ALFA</span>
              <span className="ag-wordmark-glass">GLASS</span>
              <span className="ag-wordmark-sub">sklenářství · Hostouň u Prahy</span>
            </div>
            <a className="ag-topbar-tel" href="tel:+420224311225">
              +420 224 311 225
            </a>
          </div>

          <div className="ag-hero-copy">
            <p className="ag-hero-eyebrow">Vlastní výroba a montáž skla od roku 2001</p>
            <h1 className="ag-hero-title">
              <span className="ag-line ag-line-1">Řežeme sklo</span>
              <span className="ag-line ag-line-2">až do formátu</span>
              <span className="ag-line ag-line-3">
                6&thinsp;×&thinsp;3,21&nbsp;m
              </span>
            </h1>
            <p className="ag-hero-lead">
              Schodiště, zábradlí, příčky, zrcadla i pochůzné sklo. Zaměříme,
              vyrobíme ve vlastní dílně a namontujeme vlastní četou — v Praze a okolí.
            </p>
            <div className="ag-hero-actions">
              <a className="ag-btn ag-btn-solid" href="tel:+420224311225">
                Zavolat sklenáři
              </a>
              <a className="ag-btn ag-btn-ghost" href="mailto:info@alfaglass.cz">
                Poslat poptávku — kalkulace do 48 h
              </a>
            </div>
          </div>

          <ul className="ag-hero-facts" aria-label="Klíčové parametry dílny">
            <li>
              <strong>6 × 3,21 m</strong>
              <span>nadlimitní formát řezu</span>
            </li>
            <li>
              <strong>2–19 mm</strong>
              <span>vrtáme float sklo</span>
            </li>
            <li>
              <strong>48 hodin</strong>
              <span>cenová kalkulace</span>
            </li>
            <li>
              <strong>od 2001</strong>
              <span>navazujeme na pražské sklenářství</span>
            </li>
          </ul>
        </div>
      </header>

      {/* ===== SEKCE 1: DÍLNA / VÝROBA ===== */}
      <section className="ag-section ag-dilna" aria-labelledby="dilna-h">
        <div className="ag-section-head">
          <p className="ag-eyebrow">Co umí naše dílna</p>
          <h2 id="dilna-h" className="ag-h2">
            Osm operací se sklem.<br />
            Všechny pod jednou střechou.
          </h2>
          <p className="ag-section-lead">
            Sklo u nás projde celou cestou — od tabule po hotový výrobek. Nic
            nevozíme ke kooperantům, proto zvládáme krátké termíny i atypická
            zadání, která jinde nezaskočí zaskočí každého.
          </p>
        </div>

        <div className="ag-dilna-grid">
          <ul className="ag-ops" role="list">
            {vyroba.map((op) => (
              <li key={op.nazev} className="ag-op">
                <div className="ag-op-edge" aria-hidden="true" />
                <div className="ag-op-body">
                  <h3 className="ag-op-title">{op.nazev}</h3>
                  <p className="ag-op-text">{op.popis}</p>
                  <p className="ag-op-param">{op.parametr}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="ag-dilna-figure">
            <img
              src="/section-1.webp"
              alt="Opracování hrany skla v dílně Alfaglass — broušení a fazetování tabule skla"
              className="ag-img"
            />
            <figcaption className="ag-figcaption">
              Hrana rozhoduje o všem — broušení a fazetování děláme na vlastních strojích.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== SEKCE 2: POSTUP + REFERENCE ===== */}
      <section className="ag-section ag-duvera" aria-labelledby="duvera-h">
        <div className="ag-section-head">
          <p className="ag-eyebrow">Jak zakázka probíhá</p>
          <h2 id="duvera-h" className="ag-h2">
            Od zaměření po úklid — pět kroků,<br className="ag-br" /> jedna parta
          </h2>
        </div>

        <ol className="ag-postup" role="list">
          {postup.map((p, i) => (
            <li key={p.krok} className="ag-postup-item">
              <span className="ag-postup-cislo" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="ag-postup-title">{p.krok}</h3>
                <p className="ag-postup-text">{p.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="ag-duvera-grid">
          <figure className="ag-duvera-figure">
            <img
              src="/section-2.webp"
              alt="Montáž skleněného zábradlí — realizace Sklenářství Alfaglass"
              className="ag-img"
            />
            <figcaption className="ag-figcaption">
              Samonosné skleněné zábradlí — montujeme vlastní četou v Praze a okolí.
            </figcaption>
          </figure>

          <div className="ag-duvera-copy">
            <blockquote className="ag-quote">
              <p>
                „Vždy se uměli postavit k průšvihům čelem a nedělali mrtvého
                brouka. Pokud něco slíbí, tak to dodrží a převezmou si
                odpovědnost.“
              </p>
              <cite>Ing. Miroslav Sázovský, statik na sklo</cite>
            </blockquote>

            <h3 className="ag-ref-h">Z posledních realizací</h3>
            <ul className="ag-ref-list" role="list">
              {reference.map((r) => (
                <li key={r} className="ag-ref-item">
                  {r}
                </li>
              ))}
            </ul>

            <p className="ag-vzorkovna">
              Nevíte, které sklo vybrat? Přivezeme vám <strong>virtuální
              vzorkovnu</strong> — vzorky designového skla si prohlédnete přímo
              u vás na stavbě nebo v kanceláři.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
