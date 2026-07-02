export default function Page() {
  return (
    <main className="dm">
      {/* ===== HERO ===== */}
      <header className="dm-hero">
        <div className="dm-hero__media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="dm-hero__scrim" />
        </div>

        <div className="dm-hero__inner">
          <div className="dm-topbar">
            <span className="dm-wordmark">
              DACH<em>&nbsp;MORAVIA</em>
              <span className="dm-wordmark__seam" aria-hidden="true" />
            </span>
            <a className="dm-topbar__tel" href="tel:+420602771447">
              602 771 447
            </a>
          </div>

          <div className="dm-hero__copy">
            <p className="dm-eyebrow">
              Klempířství &middot; pokrývačství &middot; tesařství — Ostrava-Vítkovice
            </p>
            <h1 className="dm-hero__title">
              Plech ohýbáme <span className="dm-fold">na&nbsp;falc</span>,
              <br />
              ne na oko.
            </h1>
            <p className="dm-hero__lead">
              16 vyučených klempířů, pokrývačů a tesařů s&nbsp;vlastní dílnou.
              Stavíme a opravujeme střechy z&nbsp;mědi, titanzinku i klasických
              krytin — po celé Ostravě a okolí.
            </p>
            <div className="dm-hero__actions">
              <a className="dm-btn dm-btn--full" href="tel:+420596614272">
                Zavolat dílnu — 596 614 272
              </a>
              <a className="dm-btn dm-btn--line" href="mailto:info@dachmoravia.cz">
                Napsat e-mail
              </a>
            </div>
          </div>

          <ul className="dm-hero__facts">
            <li>
              <strong>Měď &amp; titanzinek</strong>
              <span>ušlechtilé kovy jako standard</span>
            </li>
            <li>
              <strong>Vlastní dílna</strong>
              <span>prvky ohýbáme na míru vaší střechy</span>
            </li>
            <li>
              <strong>Vítkovice</strong>
              <span>Prokopa Velikého 196/21, Ostrava</span>
            </li>
          </ul>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="dm-section dm-services" aria-labelledby="sluzby-h">
        <div className="dm-section__head">
          <p className="dm-eyebrow dm-eyebrow--dark">Co pro vás uděláme</p>
          <h2 id="sluzby-h">
            Od okapu po hřeben.
            <br />
            Jedna parta, celá střecha.
          </h2>
        </div>

        <ul className="dm-services__list">
          <li className="dm-service">
            <span className="dm-service__gauge" aria-hidden="true">
              0,55&nbsp;mm
            </span>
            <h3>Klempířské prvky na míru</h3>
            <p>
              Okapy, svody, oplechování komínů, atik a parapetů. Ohýbáme ve
              vlastní dílně z&nbsp;mědi, titanzinku a pozinku — prvek sedne na
              vaši střechu, ne „přibližně“.
            </p>
          </li>
          <li className="dm-service">
            <span className="dm-service__gauge" aria-hidden="true">
              0,60&nbsp;mm
            </span>
            <h3>Falcované plechové krytiny</h3>
            <p>
              Drážkovaná krytina na stojatou falc — řemeslo, které drží desítky
              let bez šroubu skrz plech. Vhodná i pro nízké sklony a členité
              střechy.
            </p>
          </li>
          <li className="dm-service">
            <span className="dm-service__gauge" aria-hidden="true">
              tašky
            </span>
            <h3>Pokrývačské práce</h3>
            <p>
              Pálená a betonová taška, vláknocement, šindel. Přeložení,
              kompletní výměna krytiny i drobné opravy po vichřici — přijedeme,
              zaměříme, naceníme.
            </p>
          </li>
          <li className="dm-service">
            <span className="dm-service__gauge" aria-hidden="true">
              krov
            </span>
            <h3>Tesařina a opravy krovů</h3>
            <p>
              Výměna napadených trámů, nové krovy, laťování a bednění. Tesaře
              máme ve vlastní partě — nečekáte na druhou firmu.
            </p>
          </li>
        </ul>

        <p className="dm-services__note">
          Zpracujeme <strong>všechny běžné střešní materiály</strong>.
          Upřednostňujeme klasické krytiny a klempířské prvky z&nbsp;ušlechtilých
          kovů — vydrží déle a stárnou krásně.
        </p>
      </section>

      {/* ===== O FIRMĚ / DŮVĚRA ===== */}
      <section className="dm-section dm-about" aria-labelledby="ofirme-h">
        <div className="dm-about__grid">
          <figure className="dm-about__media">
            <img
              src="/section-1.webp"
              alt="Klempíř spojuje drážky falcované plechové krytiny na střeše"
            />
            <figcaption>
              Stojatá falc: dva ohyby plechu do sebe, žádný šroub skrz krytinu.
            </figcaption>
          </figure>

          <div className="dm-about__copy">
            <p className="dm-eyebrow dm-eyebrow--dark">Proč Dach Moravia</p>
            <h2 id="ofirme-h">Řemeslo, které poznáte podle drážky</h2>
            <p>
              Na střechách pracujeme s&nbsp;partou <strong>16 vyučených
              řemeslníků</strong> — klempířů, pokrývačů a tesařů s&nbsp;dlouholetou
              praxí. Zázemím je nám vlastní zařízená dílna ve Vítkovicích a
              mechanizace, se kterou opravíme nebo postavíme jakoukoli střechu.
            </p>

            <ul className="dm-about__points">
              <li>
                <strong>Vyučení, ne zaučení.</strong> Každý v&nbsp;partě má
                výuční list v&nbsp;oboru a roky na střechách za sebou.
              </li>
              <li>
                <strong>Dílna, ne katalog.</strong> Prvky neobjednáváme
                „přibližně“ — ohneme je přesně na váš komín, atiku, úžlabí.
              </li>
              <li>
                <strong>Ostrava a okolí.</strong> Sídlíme na Prokopa Velikého
                196/21 ve Vítkovicích. Na obhlídku k&nbsp;vám dojedeme rychle a
                zdarma.
              </li>
            </ul>

            <blockquote className="dm-about__quote">
              <p>
                „Měděné oplechování komína drží osm let bez jediné opravy.
                Přijeli, zaměřili, druhý týden bylo hotovo.“
              </p>
              <cite>— majitel rodinného domu, Ostrava-Zábřeh</cite>
            </blockquote>

            <p className="dm-about__contact">
              Chcete vědět, v&nbsp;jakém stavu je vaše střecha?{" "}
              <a href="tel:+420602771447">Zavolejte 602&nbsp;771&nbsp;447</a>{" "}
              nebo napište na{" "}
              <a href="mailto:info@dachmoravia.cz">info@dachmoravia.cz</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
