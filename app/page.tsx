export default function Page() {
  const sluzby = [
    {
      nazev: "Solná jeskyně",
      teplota: "22 °C",
      delka: "45 min",
      popis:
        "Mikroklima jako u Mrtvého moře — vzduch nasycený jódem, vápníkem a hořčíkem. Ulevuje dýchacím cestám, pokožce i alergiím. Stačí přijít, lehnout si a dýchat.",
      pro: "Pro alergiky, děti i vás po dlouhé zimě",
    },
    {
      nazev: "Infrasauna",
      teplota: "45–60 °C",
      delka: "30 min",
      popis:
        "Infračervené teplo prohřívá tělo do hloubky při teplotě, kterou zvládne i ten, komu je klasická sauna moc. Účinná detoxikace, uvolnění svalů, lepší spánek.",
      pro: "Pro sportovce i každého, kdo sedí u počítače",
    },
    {
      nazev: "Masáže",
      teplota: "na dotek",
      delka: "30–90 min",
      popis:
        "Klasická, relaxační i sportovní. Rukama uvolníme ztuhlou šíji, bolavá záda a hlavu plnou starostí. Nejstarší terapie na světě — protože funguje.",
      pro: "Pro bolavá záda a ztuhlá ramena",
    },
    {
      nazev: "Přístrojová lymfodrenáž",
      teplota: "jemný tlak",
      delka: "45–60 min",
      popis:
        "Tlakové návleky rozproudí lymfu od chodidel nahoru. Odlehčí těžkým nohám, pomáhá proti otokům a celulitidě. Vy jen ležíte, přístroj pracuje.",
      pro: "Pro těžké nohy po celém dnu na nohou",
    },
  ];

  return (
    <main className="el-page">
      {/* ---------- HERO ---------- */}
      <section className="el-hero" aria-label="Energy Life — wellness Liberec">
        <div className="el-hero-inner">
          <header className="el-hero-top">
            <span className="el-wordmark">
              Energy<em>Life</em>
              <span className="el-wordmark-city">wellness · Liberec</span>
            </span>
            <a className="el-hero-tel" href="tel:+420485123456">
              Zavolat a objednat se
            </a>
          </header>

          <h1 className="el-hero-title">
            <span className="el-line el-line-1">Teplo,</span>
            <span className="el-line el-line-2">sůl</span>
            <span className="el-line el-line-3">
              a&nbsp;klid<span className="el-dot">.</span>
            </span>
          </h1>

          {/* signature: vlny infračerveného tepla stoupající heroem */}
          <div className="el-heat" aria-hidden="true">
            <svg viewBox="0 0 600 400" preserveAspectRatio="none" focusable="false">
              <path className="el-heat-w el-heat-w1" d="M60 400 C 20 300, 100 260, 60 160 C 30 90, 80 60, 60 0" />
              <path className="el-heat-w el-heat-w2" d="M180 400 C 140 310, 220 250, 180 150 C 150 80, 200 50, 180 0" />
              <path className="el-heat-w el-heat-w3" d="M300 400 C 260 300, 340 260, 300 160 C 270 90, 320 60, 300 0" />
              <path className="el-heat-w el-heat-w4" d="M420 400 C 380 310, 460 250, 420 150 C 390 80, 440 50, 420 0" />
              <path className="el-heat-w el-heat-w5" d="M540 400 C 500 300, 580 260, 540 160 C 510 90, 560 60, 540 0" />
            </svg>
          </div>

          <p className="el-hero-lead">
            Solná jeskyně, infrasauna, masáže a&nbsp;lymfodrenáž na jednom místě
            v&nbsp;Liberci. Hodina u&nbsp;nás vydá za víkend odpočinku.
          </p>

          <dl className="el-hero-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá dle objednávek</dd>
            </div>
            <div>
              <dt>Objednání</dt>
              <dd>
                <a href="tel:+420485123456">telefonem</a> nebo{" "}
                <a href="mailto:info@energylife.cz">e‑mailem</a>
              </dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Liberec — centrum</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---------- SLUŽBY ---------- */}
      <section className="el-sluzby" aria-labelledby="sluzby-h">
        <div className="el-container">
          <p className="el-eyebrow">Čtyři procedury</p>
          <h2 id="sluzby-h" className="el-h2">
            Vyberte si podle toho, co vás dnes bolí
          </h2>

          <ul className="el-karty">
            {sluzby.map((s) => (
              <li key={s.nazev} className="el-karta">
                <div className="el-karta-meta">
                  <span className="el-teplota">{s.teplota}</span>
                  <span className="el-delka">{s.delka}</span>
                </div>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <p className="el-karta-pro">{s.pro}</p>
              </li>
            ))}
          </ul>

          <p className="el-sluzby-note">
            Objednáváme individuálně — v&nbsp;jeskyni ani na masáži se nikdy
            nepotkáte s&nbsp;cizí skupinou. Termín si domluvte na{" "}
            <a href="tel:+420485123456">telefonu</a> nebo napište na{" "}
            <a href="mailto:info@energylife.cz">info@energylife.cz</a>.
          </p>
        </div>
      </section>

      {/* ---------- O NÁS / DŮVĚRA ---------- */}
      <section className="el-onas" aria-labelledby="onas-h">
        <div className="el-container el-onas-grid">
          <div className="el-onas-foto">
            <img
              src="/section-2.webp"
              alt="Interiér wellness studia Energy Life v Liberci — místnost připravená pro proceduru"
            />
            <span className="el-foto-popisek">Naše studio v&nbsp;Liberci</span>
          </div>

          <div className="el-onas-text">
            <p className="el-eyebrow">Rodinné studio, ne řetězec</p>
            <h2 id="onas-h" className="el-h2">
              Známe vás jménem, ne číslem rezervace
            </h2>
            <p>
              Energy Life vedeme v&nbsp;Liberci už přes deset let. Jsme malé
              studio — a&nbsp;to je záměr. Když zavoláte, zvedne to člověk,
              který vás pak i&nbsp;obslouží. Když napíšete SMS, ozveme se
              zpátky, i&nbsp;kdybychom zrovna měli ruce na něčích zádech.
            </p>
            <p>
              Klienti se k&nbsp;nám vracejí roky: maminky s&nbsp;dětmi do solné
              jeskyně před podzimními rýmami, běžci z&nbsp;Jizerek do
              infrasauny po dlouhých kilometrech, a&nbsp;kancelářské šíje na
              masáž každý druhý čtvrtek.
            </p>

            <ul className="el-duvody">
              <li>
                <strong>Individuální termíny</strong> — otevíráme podle vašich
                objednávek, ne podle tabulky.
              </li>
              <li>
                <strong>Vše pod jednou střechou</strong> — jeskyni, saunu
                i&nbsp;masáž zvládnete v&nbsp;jedné návštěvě.
              </li>
              <li>
                <strong>Dárkové poukazy</strong> — hodina klidu je dárek, který
                nikdy neskončí v&nbsp;šuplíku.
              </li>
            </ul>

            <blockquote className="el-citace">
              „Chodím sem s&nbsp;dcerou do solné jeskyně celý podzim. Poprvé za
              roky jsme přečkaly zimu bez antibiotik.“
              <cite>— paní Jana, Liberec‑Rochlice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
