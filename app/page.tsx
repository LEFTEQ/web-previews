export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Pohřební služba Harmonie, Brno">
          <span className="wordmark-name">Harmonie</span>
          <span className="wordmark-sub">pohřební služba · Brno · od 1996</span>
        </a>
        <div className="topbar-call">
          <span className="topbar-call-label">Voláte kdykoli, dnem i nocí</span>
          <a className="topbar-call-num" href="tel:+420737879199">+420 737 879 199</a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Tichá obřadní síň připravená k poslednímu rozloučení"
            className="hero-img"
          />
        </div>
        <div className="hero-body">
          <p className="hero-eyebrow">Když přijde ta chvíle, nezůstáváte na to sami</p>
          <h1 id="hero-title" className="hero-title">
            Doprovodíme vás<br /> klidně a s&nbsp;úctou —<br /> krok za&nbsp;krokem.
          </h1>
          <p className="hero-lead">
            Když doma nebo v&nbsp;nemocnici zemře někdo blízký, sevře se čas.
            Zvednete telefon a&nbsp;my převezmeme, co jde převzít: převoz zesnulého,
            úřady, obřad, květiny i&nbsp;tisk oznámení na&nbsp;počkání. Vy máte prostor
            se rozloučit.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420605773026">Svoz zesnulých nonstop</a>
            <a className="btn btn-ghost" href="#pruvodce">Co dělat, když někdo zemře</a>
          </div>
          <dl className="hero-lines">
            <div>
              <dt>Nepřetržitý svoz</dt>
              <dd><a href="tel:+420605773026">+420 605 773 026</a></dd>
            </div>
            <div>
              <dt>Poradíme vám</dt>
              <dd><a href="tel:+420737879199">+420 737 879 199</a></dd>
            </div>
            <div>
              <dt>Kancelář Brno-střed</dt>
              <dd>Lidická&nbsp;44</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-kicker">Způsoby rozloučení</p>
          <h2 id="services-title">Vyberte podle toho, co by si přál — a&nbsp;co unesete vy</h2>
          <p className="section-note">
            Není jediná správná cesta. Projdeme s&nbsp;vámi možnosti v&nbsp;klidu,
            bez tlaku a&nbsp;bez skrytých položek. Urnu u&nbsp;nás uchováme do&nbsp;vyzvednutí zdarma.
          </p>
        </div>

        <ol className="service-list">
          <li className="service">
            <span className="service-index">I</span>
            <h3>Kremace s&nbsp;obřadem</h3>
            <p>
              Smuteční rozloučení v&nbsp;obřadní síni s&nbsp;hudbou, řečníkem nebo knězem
              a&nbsp;květinovou výzdobou, poté zpopelnění. Prostor pozvat rodinu i&nbsp;přátele
              a&nbsp;dát rozloučení pevný tvar.
            </p>
          </li>
          <li className="service">
            <span className="service-index">II</span>
            <h3>Kremace bez&nbsp;obřadu</h3>
            <p>
              Tichá, komorní volba bez&nbsp;veřejného obřadu. Zajistíme zpopelnění
              a&nbsp;předání urny. Rozloučit se můžete později a&nbsp;po&nbsp;svém,
              v&nbsp;čase, který vám vyhovuje.
            </p>
          </li>
          <li className="service">
            <span className="service-index">III</span>
            <h3>Pohřeb do&nbsp;země s&nbsp;obřadem</h3>
            <p>
              Klasický pohřeb s&nbsp;uložením do&nbsp;hrobu. Domluvíme obřad, hudbu,
              květiny, oznámení i&nbsp;matriku a&nbsp;provedeme vás vším, co&nbsp;vyžaduje
              úřad i&nbsp;hřbitov.
            </p>
          </li>
        </ol>

        <div className="services-arrange">
          <p>
            Vše sjednáte v&nbsp;jednom sezení. Přineste, co&nbsp;máte po&nbsp;ruce —
            zbytek dořešíme společně.
          </p>
          <a className="btn btn-primary" href="tel:+420737879199">Zavolat a&nbsp;domluvit se</a>
        </div>
      </section>

      {/* PRŮVODCE / DŮVĚRA */}
      <section id="pruvodce" className="guide" aria-labelledby="guide-title">
        <div className="guide-media">
          <img
            src="/section-1.webp"
            alt="Květinová výzdoba a klidné prostředí naší kanceláře v Brně"
            className="guide-img"
          />
          <blockquote className="guide-quote">
            <p>„…smrt není zlá, smrt je jen kus života těžkého…“</p>
          </blockquote>
        </div>

        <div className="guide-body">
          <p className="section-kicker">Co dělat, když někdo zemře</p>
          <h2 id="guide-title">První hodiny bývají nejtěžší. Tady je, na&nbsp;co&nbsp;myslet.</h2>

          <div className="guide-cols">
            <div className="guide-card">
              <h3>Úmrtí doma</h3>
              <ol>
                <li>Zavolejte lékaře.</li>
                <li>Zavolejte pohřební službu pro&nbsp;odvoz zesnulého — klidně nás na&nbsp;čísle 605&nbsp;773&nbsp;026.</li>
                <li>Do&nbsp;dvou dnů si vyberte a&nbsp;navštivte pohřební službu, kde pohřeb sjednáte.</li>
              </ol>
            </div>
            <div className="guide-card">
              <h3>Úmrtí v&nbsp;nemocnici</h3>
              <ol>
                <li>Stačí v&nbsp;nejbližších dnech vybrat a&nbsp;navštívit pohřební službu.</li>
                <li>Prvních 48&nbsp;hodin po&nbsp;úmrtí se v&nbsp;nemocnici neplatí žádné poplatky.</li>
              </ol>
            </div>
          </div>

          <p className="guide-notice">
            <strong>Dobré vědět:</strong> nemusíte pohřeb sjednávat u&nbsp;služby, která zesnulého odvezla.
            Máte ze&nbsp;zákona nárok na&nbsp;dva dny volna — den na&nbsp;zařízení pohřbu a&nbsp;den na&nbsp;účast.
          </p>

          <div className="guide-bring">
            <h3>Co si vzít s&nbsp;sebou k&nbsp;nám</h3>
            <ul>
              <li>Občanský průkaz zesnulého (je-li k&nbsp;dispozici)</li>
              <li>Rodný a&nbsp;oddací list zesnulého (je-li k&nbsp;dispozici)</li>
              <li>Oblečení pro&nbsp;zesnulého — můžete předat u&nbsp;nás v&nbsp;kanceláři</li>
              <li>Občanský průkaz objednavatele pohřbu</li>
            </ul>
          </div>

          <div className="guide-arrange">
            <h3>Vyřídíme za&nbsp;vás</h3>
            <p className="guide-tags">
              <span>hudba</span>
              <span>květinové dary</span>
              <span>smuteční oznámení na&nbsp;počkání</span>
              <span>fotograf</span>
              <span>řečník i&nbsp;kněz</span>
              <span>úmrtní list a&nbsp;matrika</span>
            </p>
          </div>
        </div>
      </section>

      {/* KDE NÁS NAJDETE */}
      <section className="places" aria-labelledby="places-title">
        <div className="section-head">
          <p className="section-kicker">Kde nás najdete</p>
          <h2 id="places-title">Dvě kanceláře v&nbsp;Brně, dveře máte otevřené</h2>
        </div>
        <div className="place-grid">
          <div className="place">
            <h3>Brno-střed</h3>
            <p className="place-addr">Lidická&nbsp;44</p>
            <dl className="place-lines">
              <div><dt>Telefon</dt><dd><a href="tel:+420545573804">+420 545 573 804</a></dd></div>
              <div><dt>Mobil</dt><dd><a href="tel:+420723283290">+420 723 283 290</a></dd></div>
              <div><dt>Po–čt</dt><dd>7:30 – 15:30</dd></div>
              <div><dt>Pá</dt><dd>7:30 – 15:00</dd></div>
            </dl>
          </div>
          <div className="place">
            <h3>Brno-Starý Lískovec</h3>
            <p className="place-addr">Mikuláškovo náměstí&nbsp;1</p>
            <dl className="place-lines">
              <div><dt>Telefon</dt><dd><a href="tel:+420547210465">+420 547 210 465</a></dd></div>
              <div><dt>Po–pá</dt><dd>8:00 – 15:30</dd></div>
            </dl>
          </div>
          <div className="place place-contact">
            <h3>Napište nebo zavolejte</h3>
            <dl className="place-lines">
              <div><dt>Informace</dt><dd><a href="tel:+420737879199">+420 737 879 199</a></dd></div>
              <div><dt>Svoz zesnulých</dt><dd><a href="tel:+420605773026">+420 605 773 026</a></dd></div>
              <div><dt>E-mail</dt><dd><a href="mailto:psharmonie@seznam.cz">psharmonie@seznam.cz</a></dd></div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
