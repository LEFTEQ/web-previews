const schodyTypy = [
  {
    kod: "D",
    nazev: "Dřevěné schodiště",
    material: "dub · buk · jasan",
    popis:
      "Klasika, která se dědí. Masivní stupně, ručně broušené hrany, povrch olejovaný nebo lakovaný podle toho, jak žijete. Do novostavby i k trámům starého domu.",
    detail: "Sedlové, schodnicové i samonosné konstrukce.",
  },
  {
    kod: "O",
    nazev: "Ocelové schodiště",
    material: "ocel · práškový lak · nerez",
    popis:
      "Naše zámečnická parketa už 125 let. Bočnicové a středové konstrukce, přiznané svary, přesnost na milimetr. Ocel dovolí subtilní tvary, které dřevo neunese.",
    detail: "Točitá, přímá i zalomená ramena na míru.",
  },
  {
    kod: "K",
    nazev: "Kombinace se sklem",
    material: "kalené sklo · nerez · dřevo",
    popis:
      "Skleněné zábradlí pustí do schodiště světlo, nerezové madlo příjemně padne do ruky. Vhodné do otevřených dispozic, kde schody tvoří střed obývacího prostoru.",
    detail: "Bezpečnostní vrstvené sklo s atestem.",
  },
  {
    kod: "V",
    nazev: "Venkovní a úniková",
    material: "žárový zinek · pororošt",
    popis:
      "Dominanta fasády, ne nutné zlo. Venkovní schodiště k druhému bytu, úniková schodiště pro bytové domy a provozy — vše s certifikací CE a ochranou proti korozi.",
    detail: "Statický výpočet a montáž v ceně.",
  },
  {
    kod: "R",
    nazev: "Renovace schodišť",
    material: "výměna madel · zábradlí · stupňů",
    popis:
      "Vrzající stupně a odřená madla neznamenají výměnu celého schodiště. Často stačí nové zábradlí nebo přebroušení stupňů — a schody vypadají jako první den.",
    detail: "Posouzení stavu zdarma na místě.",
  },
];

const kroky = [
  {
    stupen: "1. stupeň",
    nazev: "Zaměření u vás doma",
    popis:
      "Přijedeme kamkoliv v Praze a okolí, zaměříme prostor laserem a probereme, jak schodiště používáte — děti, stěhování nábytku, pes.",
  },
  {
    stupen: "2. stupeň",
    nazev: "Návrh a přesná cena",
    popis:
      "Dostanete výkres schodiště na míru s materiály a konečnou cenou. Žádné odhady od metru — víte přesně, co a za kolik dostanete.",
  },
  {
    stupen: "3. stupeň",
    nazev: "Výroba v naší dílně",
    popis:
      "Každé schodiště vzniká kusově v naší dílně, ne na lince. Zámečník i truhlář pracují podle jednoho výkresu, díly do sebe zapadnou.",
  },
  {
    stupen: "4. stupeň",
    nazev: "Montáž za 1–2 dny",
    popis:
      "Vlastní montážní parta, žádní subdodavatelé. Po nás zůstane hotové schodiště a uklizený dům — večer už chodíte nahoru po svém.",
  },
];

export default function Page() {
  return (
    <main className="st">
      {/* ===== HERO ===== */}
      <header className="st-hero">
        <div className="st-hero-top">
          <div className="st-wordmark" aria-label="Schody Stadler">
            <span className="st-wordmark-schody">SCHODY</span>
            <span className="st-wordmark-stadler">STADLER</span>
          </div>
          <p className="st-hero-since">
            zámečnická výroba<br />od roku 1898
          </p>
        </div>

        <div className="st-hero-main">
          <h1 className="st-hero-title">
            <span className="st-step st-step-1">Krok</span>
            <span className="st-step st-step-2">o&nbsp;stupeň</span>
            <span className="st-step st-step-3">výš.</span>
          </h1>

          {/* signature: schodišťová linka */}
          <svg
            className="st-stairline"
            viewBox="0 0 560 340"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMaxYMax meet"
          >
            <path
              className="st-stairline-path"
              d="M0 340 H80 V272 H160 V204 H240 V136 H320 V68 H400 V0 H560"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="M40 340 V318 M120 272 V250 M200 204 V182 M280 136 V114 M360 68 V46"
              stroke="currentColor"
              strokeWidth="3"
              className="st-stairline-balusters"
            />
          </svg>
        </div>

        <div className="st-hero-bottom">
          <p className="st-hero-lead">
            Schodiště na míru ze dřeva, oceli a skla. Navrhneme, vyrobíme
            v&nbsp;dílně a&nbsp;smontujeme u&nbsp;vás — v&nbsp;Praze
            a&nbsp;po&nbsp;celých Čechách. Každé schodiště je originál,
            žádné dva výkresy nejsou stejné.
          </p>
          <dl className="st-hero-facts">
            <div>
              <dt>Tradice řemesla</dt>
              <dd>125&nbsp;let</dd>
            </div>
            <div>
              <dt>V&nbsp;Česku od</dt>
              <dd>1995</dd>
            </div>
            <div>
              <dt>Bezplatná linka</dt>
              <dd>
                <a href="tel:800555556">800&nbsp;555&nbsp;556</a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===== SEKCE 1: TYPY SCHODIŠŤ ===== */}
      <section className="st-typy" aria-labelledby="typy-h">
        <div className="st-section-head">
          <p className="st-eyebrow">Co vyrábíme</p>
          <h2 id="typy-h">
            Pět druhů schodišť.<br />Jedna dílna, jedna ruka.
          </h2>
        </div>

        <ul className="st-typy-list">
          {schodyTypy.map((t) => (
            <li key={t.kod} className="st-typ">
              <span className="st-typ-kod" aria-hidden="true">
                {t.kod}
              </span>
              <div className="st-typ-body">
                <h3>{t.nazev}</h3>
                <p className="st-typ-material">{t.material}</p>
                <p className="st-typ-popis">{t.popis}</p>
                <p className="st-typ-detail">{t.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SEKCE 2: JAK PRACUJEME / DŮVĚRA ===== */}
      <section className="st-proces" aria-labelledby="proces-h">
        <div className="st-section-head st-section-head-dark">
          <p className="st-eyebrow">Jak to u nás chodí</p>
          <h2 id="proces-h">
            Od prvního zaměření<br />po poslední stupeň
          </h2>
          <p className="st-proces-uvod">
            Schodařině se věnujeme přes 40&nbsp;let, zámečnickému řemeslu
            od&nbsp;roku 1898. Do&nbsp;Česka jsme přišli v&nbsp;roce 1995
            a&nbsp;od&nbsp;té doby platí jedno: individualita nemusí být drahá.
            Namísto masové výroby děláme kusovou práci, za&nbsp;kterou si
            stojíme podpisem na&nbsp;výkresu.
          </p>
        </div>

        <ol className="st-kroky">
          {kroky.map((k) => (
            <li key={k.stupen} className="st-krok">
              <p className="st-krok-stupen">{k.stupen}</p>
              <h3>{k.nazev}</h3>
              <p>{k.popis}</p>
            </li>
          ))}
        </ol>

        <div className="st-zaruky">
          <p className="st-zaruka">
            <strong>CE certifikace</strong>
            <span>Ocelová schodiště vyrábíme podle evropských norem, včetně statického výpočtu.</span>
          </p>
          <p className="st-zaruka">
            <strong>Vlastní montéři</strong>
            <span>Montuje stejná parta, která schodiště vyrobila. Znají každý díl po jméně.</span>
          </p>
          <p className="st-zaruka">
            <strong>Cena předem</strong>
            <span>Konečná cena je součástí návrhu. Na stavbě se nic nedopočítává.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
