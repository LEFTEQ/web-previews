export default function Page() {
  return (
    <main className="ok-page">
      {/* ===== HERO ===== */}
      <header className="ok-hero">
        <div className="ok-hero-top">
          <div className="ok-wordmark" aria-label="Oční klinika FN Hradec Králové">
            <span className="ok-wordmark-eye" aria-hidden="true">
              <svg viewBox="0 0 48 28" width="44" height="26" role="img" aria-hidden="true">
                <path d="M2 14 C10 3, 38 3, 46 14 C38 25, 10 25, 2 14 Z" fill="none" stroke="currentColor" strokeWidth="2.4" />
                <circle cx="24" cy="14" r="6.5" fill="currentColor" />
                <circle cx="26.5" cy="11.5" r="2" fill="#F5FAFB" />
              </svg>
            </span>
            <span className="ok-wordmark-text">
              Oční klinika<em>FN Hradec Králové</em>
            </span>
          </div>
          <a className="ok-hero-phone" href="tel:+420495833395">+420 495 833 395</a>
        </div>

        <div className="ok-hero-grid">
          <div className="ok-hero-copy">
            <p className="ok-eyebrow">Fakultní pracoviště · Budova 3, Sokolská 581</p>
            <h1 className="ok-hero-title">
              Vidění je jemná práce.
              <span className="ok-hero-title-soft"> Děláme ji na desetiny milimetru.</span>
            </h1>
            <p className="ok-hero-lead">
              Od kapky do oka po operaci sítnice. Jsme klinika Fakultní nemocnice
              Hradec&nbsp;Králové — místo, kam vás pošle váš oční lékař, když běžná
              ambulance nestačí.
            </p>
            <div className="ok-hero-actions">
              <a className="ok-btn ok-btn-primary" href="#poradny">Najít správnou poradnu</a>
              <a className="ok-btn ok-btn-ghost" href="tel:+420495833395">Zavolat sekretariát</a>
            </div>
            <dl className="ok-hero-facts">
              <div>
                <dt>Specializovaných poraden</dt>
                <dd>8</dd>
              </div>
              <div>
                <dt>Pracoviště očního laseru</dt>
                <dd>přímo na klinice</dd>
              </div>
              <div>
                <dt>Objednání</dt>
                <dd>online i telefonem</dd>
              </div>
            </dl>
          </div>

          <figure className="ok-hero-visual">
            <img
              src="/hero.webp"
              alt="Vyšetření oka na štěrbinové lampě na Oční klinice FN Hradec Králové"
              className="ok-hero-img"
            />
            <figcaption className="ok-hero-caption">
              <span className="ok-caption-ring" aria-hidden="true"></span>
              Štěrbinová lampa — první nástroj, kterým se vám podíváme do oka
            </figcaption>
          </figure>
        </div>

        <div className="ok-snellen" aria-hidden="true">
          <span>V</span><span>I D</span><span>Í M E</span><span>V Í C E</span><span>N E Ž O S T A T N Í</span>
        </div>
      </header>

      {/* ===== SEKCE 1: PORADNY ===== */}
      <section className="ok-section ok-section-poradny" id="poradny" aria-labelledby="poradny-title">
        <div className="ok-section-head">
          <p className="ok-eyebrow">S čím k nám přijdete</p>
          <h2 id="poradny-title" className="ok-section-title">
            Každá diagnóza má u nás vlastní poradnu
          </h2>
          <p className="ok-section-lead">
            Nejste „pacient s okem“. Jste pacient s glaukomem, s dítětem, které šilhá,
            nebo s makulou, která potřebuje laser. Proto se u nás objednáváte rovnou
            k lidem, kteří vaši diagnózu dělají každý den.
          </p>
        </div>

        <div className="ok-poradny-grid">
          <article className="ok-card">
            <h3 className="ok-card-title">Glaukomová poradna</h3>
            <p>
              Zelený zákal nebolí a nespěchá — o to je zákeřnější. Měříme nitrooční
              tlak, zorné pole i vrstvu nervových vláken a hlídáme, aby vám zůstalo
              vidění, které máte dnes.
            </p>
            <p className="ok-card-tag">Kontroly tlaku · perimetr · OCT</p>
          </article>

          <article className="ok-card">
            <h3 className="ok-card-title">Dětská a strabologická poradna</h3>
            <p>
              Šilhání a tupozrakost se dají napravit, ale jen dokud dětský mozek
              vidění ještě „ladí“. Čím dřív přijdete, tím víc toho spravíme okluzí
              a brýlemi místo operace.
            </p>
            <p className="ok-card-tag">Děti od kojenců · okluzní terapie</p>
          </article>

          <article className="ok-card">
            <h3 className="ok-card-title">Poradna pro nemoci sítnice</h3>
            <p>
              Věkem podmíněná makulární degenerace, diabetická retinopatie, otoky
              sítnice. Injekce do oka zní hrozivě — u nás je to pětiminutový,
              rutinní a bezbolestný výkon.
            </p>
            <p className="ok-card-tag">Anti-VEGF injekce · sledování VPMD</p>
          </article>

          <article className="ok-card">
            <h3 className="ok-card-title">Pracoviště očního laseru</h3>
            <p>
              Laserem ošetřujeme trhliny sítnice, druhotný šedý zákal i následky
              cukrovky. Přijdete, kápneme, ošetříme — a tentýž den odcházíte domů.
            </p>
            <p className="ok-card-tag">Ambulantně · bez hospitalizace</p>
          </article>

          <article className="ok-card">
            <h3 className="ok-card-title">Neurooftalmologická poradna</h3>
            <p>
              Když problém není v oku, ale za ním — dvojité vidění, výpadky zorného
              pole, poruchy zornic. Spolupracujeme přímo s neurology fakultní
              nemocnice, vše pod jednou střechou.
            </p>
            <p className="ok-card-tag">Ve spolupráci s neurologií FN HK</p>
          </article>

          <article className="ok-card">
            <h3 className="ok-card-title">Vrozená onemocnění sítnice + ERG</h3>
            <p>
              Vlastní elektrofyziologická laboratoř nám dovolí změřit, jak sítnice
              skutečně pracuje — ne jen jak vypadá. Pro dědičné dystrofie sítnice
              jedno z mála pracovišť v Česku.
            </p>
            <p className="ok-card-tag">ERG laboratoř · genetické poradenství</p>
          </article>
        </div>

        <figure className="ok-section-figure">
          <img
            src="/section-1.webp"
            alt="Snímek sítnice na monitoru diagnostického přístroje OCT"
            className="ok-figure-img"
          />
          <figcaption className="ok-figure-caption">
            OCT snímek sítnice: vrstvy tenčí než lidský vlas, které rozhodují o tom, jak vidíte
          </figcaption>
        </figure>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / PROČ K NÁM ===== */}
      <section className="ok-section ok-section-duvera" aria-labelledby="duvera-title">
        <div className="ok-duvera-grid">
          <figure className="ok-duvera-visual">
            <img
              src="/section-2.webp"
              alt="Lékařský tým Oční kliniky FN Hradec Králové na operačním sále"
              className="ok-figure-img"
            />
            <figcaption className="ok-figure-caption">
              Operační sály Budovy 3 — sítnicová chirurgie i katarakty
            </figcaption>
          </figure>

          <div className="ok-duvera-copy">
            <p className="ok-eyebrow">Proč fakultní klinika</p>
            <h2 id="duvera-title" className="ok-section-title">
              Učíme budoucí oční lékaře.<br />To nás drží v nejvyšší lize.
            </h2>
            <p>
              Jsme klinické pracoviště Fakultní nemocnice a Lékařské fakulty UK
              v Hradci Králové. Znamená to jediné: postupy, které jinde teprve
              přijdou, tady už běží — a každý lékař u nás obhajuje svou práci
              před kolegy i studenty.
            </p>

            <ul className="ok-trust-list">
              <li>
                <strong>Vedení s evropskou atestací.</strong> Přednosta kliniky
                doc. MUDr. Libor Hejsek, Ph.D., FEBO — specialista na chirurgii sítnice.
              </li>
              <li>
                <strong>Komplexní zázemí nemocnice.</strong> Interna, diabetologie,
                neurologie i anesteziologie na jednom areálu. Když oko souvisí
                s celým tělem, nemusíte nikam přejíždět.
              </li>
              <li>
                <strong>Bezbariérový přístup a jasná navigace.</strong> Budova 3,
                Sokolská 581, Nový Hradec Králové. Z hlavní vrátnice vás k nám
                dovede značení.
              </li>
              <li>
                <strong>Objednání bez dohadování.</strong> Online formulář nebo
                sekretariát na +420 495 833 395 v pracovní dny 7–15 h.
              </li>
            </ul>

            <blockquote className="ok-quote">
              <p>
                „S makulární degenerací jezdím na injekce už třetí rok. Vždycky vím,
                v kolik jdu na řadu, a vidím pořád na čtení. To mi před třemi lety
                nikdo neslíbil.“
              </p>
              <cite>— paní Věra, 74 let, pacientka poradny pro nemoci sítnice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
