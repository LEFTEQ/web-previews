import { AiImage } from "./_ui";

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="mark" href="#uvod" aria-label="Radniční sklípek – úvod">
          <span className="mark-arch" aria-hidden="true" />
          <span className="mark-name">Radniční&nbsp;sklípek</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#menu">Jídelní lístek</a>
          <a href="#aktuality">Aktuality</a>
          <a className="topnav-cta" href="#rezervace">Rezervovat stůl</a>
        </nav>
      </header>

      {/* HERO — vstup do sklepení */}
      <section className="hero" id="uvod">
        <div className="vault">
          <div className="arch hero-arch">
            <p className="eyebrow">Liberec · sklepení pod radnicí</p>
            <h1 className="hero-title">
              <span>Radniční</span>
              <span>sklípek</span>
            </h1>
            <p className="hero-lead">
              Cihlová klenba pod libereckou radnicí, světlo lamp mezi
              starými pilíři a vůně české kuchyně. Sedněte si ke
              stolu, kde se čepují Svijany rovnou ze sklepa.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#rezervace">Rezervovat stůl</a>
              <a className="btn btn-ghost" href="#menu">Prohlédnout jídelní lístek</a>
            </div>
          </div>
        </div>
        <p className="scroll-hint" aria-hidden="true">Sestupte hlouběji ↓</p>
      </section>

      {/* SEKCE 1 — jídelní lístek */}
      <section className="sec menu" id="menu">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Týdenní menu · 20.–24. 7.</p>
            <h2 className="sec-title">Z kuchyně pod klenbou</h2>
            <p className="sec-note">
              Vaříme sezónně a poctivě. Menu obměňujeme každý týden;
              níže je výběr ze sobotní nabídky. Alergeny značíme v
              závorce.
            </p>
          </div>

          <div className="menu-grid">
            <div className="arch menu-arch reveal">
              <h3 className="menu-cat">Polévky</h3>
              <ul className="menu-list">
                <li className="menu-item">
                  <div className="mi-main">
                    <span className="mi-name">Rajčatová polévka</span>
                    <span className="mi-desc">s parmezánem a čerstvou bazalkou <em>/1,3,7/</em></span>
                    <span className="mi-portion">0,25 l</span>
                  </div>
                  <span className="mi-price">69 Kč</span>
                </li>
                <li className="menu-item">
                  <div className="mi-main">
                    <span className="mi-name">Masový vývar s risi bisi</span>
                    <span className="mi-desc">poctivý, s rýžovo-hráškovou vložkou, co postaví na nohy <em>/1,3,7/</em></span>
                    <span className="mi-portion">0,25 l</span>
                  </div>
                  <span className="mi-price">69 Kč</span>
                </li>
                <li className="menu-item">
                  <div className="mi-main">
                    <span className="mi-name">Česnečka</span>
                    <span className="mi-desc">z uzeného a vepřového, s chlebovými krutony a kousky sýra podávanými zvlášť <em>/1,3,7/</em></span>
                    <span className="mi-portion">0,25 l</span>
                  </div>
                  <span className="mi-price">79 Kč</span>
                </li>
              </ul>
            </div>

            <div className="arch menu-arch reveal">
              <h3 className="menu-cat">Hlavní jídla</h3>
              <ul className="menu-list">
                <li className="menu-item">
                  <div className="mi-main">
                    <span className="mi-name">Hovězí roštěnky na lesních houbách</span>
                    <span className="mi-desc">s dušenou rýží nebo houskovým knedlíkem <em>/1,3,7/</em></span>
                    <span className="mi-portion">130 g</span>
                  </div>
                  <span className="mi-price">289 Kč</span>
                </li>
                <li className="menu-item">
                  <div className="mi-main">
                    <span className="mi-name">Pečené kuřecí stehno na másle</span>
                    <span className="mi-desc">s bramborovou kaší a okurkovým salátem <em>/1,3,7/</em></span>
                    <span className="mi-portion">1 ks</span>
                  </div>
                  <span className="mi-price">249 Kč</span>
                </li>
                <li className="menu-item">
                  <div className="mi-main">
                    <span className="mi-name">Domácí halušky s uzeným masem</span>
                    <span className="mi-desc">s kysaným bílým zelím a smaženou křupavou cibulkou <em>/1,3,7/</em></span>
                    <span className="mi-portion">300 g</span>
                  </div>
                  <span className="mi-price">219 Kč</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCE 2 — aktuality, pivo, důvěra */}
      <section className="sec news" id="aktuality">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Co se právě děje</p>
            <h2 className="sec-title">Aktuality ze sklípku</h2>
            <p className="sec-note">
              Svátky, sezónní hody a chvíle, kdy máme výjimečně
              zavřeno — ať víte, na co se u nás těšit.
            </p>
          </div>

          <div className="news-grid">
            <article className="arch news-arch reveal">
              <p className="news-date">11.–15. listopadu</p>
              <h3 className="news-title">Svatomartinské hody</h3>
              <p className="news-body">
                Tradiční hody jsou zpět. Husí stehno, kachní
                speciality, výběr svatomartinských vín a sladká tečka.
                Přijďte oslavit svatého Martina pod klenbu.
              </p>
            </article>

            <article className="arch news-arch reveal">
              <p className="news-date">28.–31. října</p>
              <h3 className="news-title">Vepřové hody</h3>
              <p className="news-body">
                Jitrnice, jelítka, tlačenka, klobásky, zabijačkový
                guláš, bůček na medu a steak z krkovice s pepřovou
                omáčkou. Zabijačka jak má být.
              </p>
            </article>

            <article className="arch news-arch reveal">
              <p className="news-date">24.–25. prosince</p>
              <h3 className="news-title">Vánoce ve sklípku</h3>
              <p className="news-body">
                Na Štědrý den máme zavřeno — jsme u rodinného
                stromečku. Na Boží hod vánoční, 25. prosince,
                otevíráme od 11:00. Přejeme poklidné svátky.
              </p>
            </article>
          </div>

          <div className="trust reveal" id="rezervace">
            <div className="trust-copy">
              <p className="eyebrow">Proč právě sem</p>
              <h3 className="trust-title">Sklep, který drží už přes sto let</h3>
              <ul className="trust-list">
                <li><span>Čepované Svijany</span> — světlá dvanáctka i tmavé speciály, tažené pomalu ze sklepa.</li>
                <li><span>Akce a svatby</span> — klenutý sál pod radnicí pro oslavy, firemní večery i svatební hostiny.</li>
                <li><span>Rozvoz jídel</span> — oběd z týdenního menu vám dovezeme po Liberci.</li>
              </ul>
            </div>
            <div className="arch reserve-arch">
              <AiImage
                alt="Cihlová klenba a stůl v Radničním sklípku"
                className="reserve-img"
                src="Warm candlelit brick barrel-vault cellar restaurant interior in Liberec, red-brick arches, wooden table set for dinner, brass beer taps, moody low lamp light, sandstone pillars, cinematic"
              />
              <div className="reserve-panel">
                <p className="reserve-label">Rezervace stolu</p>
                <p className="reserve-line">Zavolejte nám: <a href="tel:+420777111222">777 111 222</a></p>
                <p className="reserve-line">Napište: <a href="mailto:info@example.cz">info@example.cz</a></p>
                <p className="reserve-line reserve-addr">Ukázková 123, Liberec</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
