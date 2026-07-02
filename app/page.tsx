export default function Page() {
  return (
    <main className="tc">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Venkovní jednotka tepelného čerpadla instalovaná u rodinného domu v Karlových Varech"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-name">POLER</span>
            <span className="wordmark-sub">tepelná čerpadla · Karlovy Vary</span>
          </div>
          <a className="hero-call" href="tel:+420353000000">Zavolat</a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Mgr. Antonín Poler — návrh, montáž a servis tepelných čerpadel</p>
          <h1 className="hero-title">
            Teplo z venkovního
            <br />
            vzduchu. <em>I&nbsp;když mrzne.</em>
          </h1>
          <p className="hero-lead">
            Tepelné čerpadlo vytápí váš dům i&nbsp;při −20&nbsp;°C a&nbsp;za&nbsp;zlomek nákladů na
            plyn nebo elektrokotel. Přijedu, změřím dům, spočítám úsporu — a&nbsp;řeknu vám na rovinu,
            jestli se vám čerpadlo vyplatí.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420353000000">Zavolat a&nbsp;domluvit prohlídku</a>
            <a className="btn btn-ghost" href="mailto:info@poler-cerpadla.cz">Napsat e-mail</a>
          </div>
        </div>

        {/* signature: teplotní stupnice — pásek COP hodnot podle venkovní teploty */}
        <div className="tempscale" role="img" aria-label="Účinnost tepelného čerpadla podle venkovní teploty: při minus 15 stupních topný faktor 2,1; při minus 7 stupních 2,8; při 2 stupních 3,6; při 7 stupních 4,5; při 12 stupních 5,2">
          <div className="tempscale-track" aria-hidden="true">
            <div className="temp-stop">
              <span className="temp-deg">−15 °C</span>
              <span className="temp-bar" style={{ ['--h' as never]: '32%' }} />
              <span className="temp-cop">COP 2,1</span>
            </div>
            <div className="temp-stop">
              <span className="temp-deg">−7 °C</span>
              <span className="temp-bar" style={{ ['--h' as never]: '48%' }} />
              <span className="temp-cop">COP 2,8</span>
            </div>
            <div className="temp-stop">
              <span className="temp-deg">+2 °C</span>
              <span className="temp-bar" style={{ ['--h' as never]: '64%' }} />
              <span className="temp-cop">COP 3,6</span>
            </div>
            <div className="temp-stop">
              <span className="temp-deg">+7 °C</span>
              <span className="temp-bar" style={{ ['--h' as never]: '82%' }} />
              <span className="temp-cop">COP 4,5</span>
            </div>
            <div className="temp-stop">
              <span className="temp-deg">+12 °C</span>
              <span className="temp-bar" style={{ ['--h' as never]: '100%' }} />
              <span className="temp-cop">COP 5,2</span>
            </div>
          </div>
          <p className="tempscale-note">
            Topný faktor (COP): kolik kW tepla dostanete z&nbsp;1&nbsp;kW elektřiny. Čím tepleji venku, tím víc čerpadlo šetří — a&nbsp;topí i&nbsp;v&nbsp;krušnohorské zimě.
          </p>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Jak to u&nbsp;mě probíhá</p>
          <h2 id="sluzby-h">Od prohlídky domu po první topnou sezónu</h2>
          <p className="section-lead">
            Čtyři kroky, které projdeme spolu. Žádní obchodní zástupci, žádné podomní
            nabídky — celou zakázku dělám sám, od výpočtu po zapojení.
          </p>
        </div>

        <div className="sluzby-grid">
          <div className="sluzby-media">
            <img
              src="/section-1.webp"
              alt="Montáž vnitřní jednotky tepelného čerpadla a připojení k otopné soustavě"
              className="sluzby-img"
            />
            <p className="media-caption">Vnitřní jednotka se zásobníkem teplé vody — instalace v&nbsp;rodinném domě</p>
          </div>

          <ol className="kroky">
            <li className="krok">
              <span className="krok-num" aria-hidden="true">1</span>
              <div>
                <h3>Prohlídka a&nbsp;výpočet tepelné ztráty</h3>
                <p>
                  Přijedu k&nbsp;vám, projdu dům, izolaci, radiátory či podlahovku a&nbsp;spočítám,
                  jak výkonné čerpadlo skutečně potřebujete. Předimenzovaný stroj je vyhozená
                  investice — dimenzuji přesně.
                </p>
              </div>
            </li>
            <li className="krok">
              <span className="krok-num" aria-hidden="true">2</span>
              <div>
                <h3>Nabídka s&nbsp;úsporou v&nbsp;korunách</h3>
                <p>
                  Dostanete konkrétní čísla: cenu instalace, roční úsporu proti vašemu
                  současnému kotli a&nbsp;návratnost. Pomohu vám i&nbsp;s&nbsp;žádostí o&nbsp;dotaci
                  Nová zelená úsporám — až 100&nbsp;000&nbsp;Kč.
                </p>
              </div>
            </li>
            <li className="krok">
              <span className="krok-num" aria-hidden="true">3</span>
              <div>
                <h3>Montáž za 2–3 dny</h3>
                <p>
                  Vzduch–voda čerpadlo napojím na vaši stávající otopnou soustavu i&nbsp;ohřev
                  vody. Většinou bez bourání a&nbsp;bez odstávky topení delší než jeden den.
                </p>
              </div>
            </li>
            <li className="krok">
              <span className="krok-num" aria-hidden="true">4</span>
              <div>
                <h3>Servis a&nbsp;roční kontroly</h3>
                <p>
                  Po první zimě přijedu zkontrolovat chod a&nbsp;doladit topnou křivku. Na servis
                  se dovoláte mně, ne na call centrum — jsem z&nbsp;Karlových Varů a&nbsp;jezdím po celém kraji.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== DŮVĚRA / O MNĚ ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-text">
            <p className="eyebrow eyebrow-light">Kdo vám bude topit</p>
            <h2 id="duvera-h">Jedno jméno na smlouvě, na montáži i&nbsp;na servisu</h2>
            <p>
              Jmenuji se Antonín Poler a&nbsp;tepelnými čerpadly se živím jako samostatný
              montážník. Sídlím ve Vyšehradské ulici v&nbsp;Karlových Varech a&nbsp;instaluji
              v&nbsp;okruhu zhruba 50&nbsp;km — Ostrov, Sokolov, Chodov, Nejdek, Toužim i&nbsp;horské
              obce, kde zima umí přitvrdit.
            </p>
            <p>
              Právě proto dimenzuji čerpadla na krušnohorské podmínky, ne na tabulkovou
              průměrnou zimu. Každou instalaci si sám navrhnu, sám zapojím a&nbsp;sám za ni ručím.
            </p>

            <ul className="duvera-fakta">
              <li>
                <strong>Vzduch–voda</strong>
                <span>specializace na nejběžnější a&nbsp;nejlevnější typ pro rodinné domy</span>
              </li>
              <li>
                <strong>Karlovarský kraj</strong>
                <span>na servisní zásah dojedu zpravidla do&nbsp;48&nbsp;hodin</span>
              </li>
              <li>
                <strong>Dotace NZÚ</strong>
                <span>žádost připravím a&nbsp;podám za&nbsp;vás, bez poplatku navíc</span>
              </li>
              <li>
                <strong>Záruka 5&nbsp;let</strong>
                <span>na montáž nad rámec záruky výrobce jednotky</span>
              </li>
            </ul>

            <blockquote className="reference">
              <p>
                „Dům v&nbsp;Nejdku, 140&nbsp;m², předtím elektrokotel za 68&nbsp;tisíc ročně. První
                zima s&nbsp;čerpadlem od pana Polera: 24&nbsp;tisíc. Přijel i&nbsp;v&nbsp;lednu
                doladit topnou křivku, když nám přišlo, že podlahovka topí málo.“
              </p>
              <footer>— rodina Šimkových, Nejdek</footer>
            </blockquote>
          </div>

          <div className="duvera-media">
            <img
              src="/section-2.webp"
              alt="Antonín Poler při kontrole tepelného čerpadla, měření tlaku chladiva"
              className="duvera-img"
            />
            <p className="media-caption media-caption-light">
              Kontrola tlaku chladiva při roční prohlídce — Karlovy Vary a&nbsp;okolí
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
