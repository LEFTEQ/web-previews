export default function Page() {
  return (
    <>
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="hero">
        <div className="hero-topbar">
          <div className="wordmark" aria-label="Tiskdruck s.r.o.">
            <span className="wordmark-main">TISK</span>
            <span className="wordmark-accent">DRUCK</span>
            <span className="wordmark-reg">s.r.o.</span>
          </div>
          <a className="phone-pill" href="tel:+420775310368">
            <span className="phone-dot" aria-hidden="true"></span>
            775 310 368
          </a>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Polygrafická výroba v Brně · od roku 1989</p>
            <h1 className="hero-title">
              Tiskneme,
              <br />
              dokud <span className="ink-underline">barva</span>
              <br />
              nezaschne.
            </h1>
            <p className="hero-lead">
              Ofsetový a digitální tisk, knihařské práce a grafické studio
              pod jednou střechou na Žebětíně. Zakázku vyřídíme{" "}
              <strong>do 24 hodin</strong> a po Brně a okolí do 50&nbsp;km
              ji dovezeme zdarma.
            </p>
            <div className="hero-cta-row">
              <a className="btn-primary" href="tel:+420775310368">
                Zavolat na tiskárnu
              </a>
              <a className="btn-ghost" href="mailto:obchod@tiskdruck.cz">
                Napsat na obchod@tiskdruck.cz
              </a>
            </div>
            <ul className="hero-stamps" aria-label="Klíčové parametry">
              <li>
                <span className="stamp-num">24 h</span>
                <span className="stamp-label">expresní dodání</span>
              </li>
              <li>
                <span className="stamp-num">50 km</span>
                <span className="stamp-label">doprava zdarma</span>
              </li>
              <li>
                <span className="stamp-num">1989</span>
                <span className="stamp-label">na trhu v Brně</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Ofsetový tiskový stroj Tiskdruck v provozu, čerstvě potištěné archy papíru"
              className="hero-img"
              width={960}
              height={720}
            />
            <div className="registration-mark" aria-hidden="true">
              <span>CMYK</span>
            </div>
          </div>
        </div>
      </header>

      <main id="obsah">
        <section className="section services" aria-labelledby="sluzby-h">
          <div className="section-head">
            <p className="eyebrow eyebrow-dark">Co nabízíme</p>
            <h2 id="sluzby-h">
              Šest řemesel, jedna adresa na Hostislavově&nbsp;619/34.
            </h2>
            <p className="section-lead">
              Žádná zakázka pro nás není příliš malá — od jedné navštívenky
              po tiskovou sérii pro veletrh. Vybírejte, co potřebujete
              vyrobit:
            </p>
          </div>

          <div className="service-panel">
            <img
              src="/section-1.webp"
              alt="Knihařské zpracování a řezání archů ve výrobně Tiskdruck"
              className="service-img"
              width={800}
              height={600}
            />
            <ol className="service-list">
              <li>
                <span className="svc-no">01</span>
                <div>
                  <h3>Ofsetový tisk</h3>
                  <p>Velké náklady, přesné barvy, papír podle vašeho zadání.</p>
                </div>
              </li>
              <li>
                <span className="svc-no">02</span>
                <div>
                  <h3>Digitální tisk</h3>
                  <p>Malé i malonákladové zakázky rychle a bez zdlouhavé přípravy.</p>
                </div>
              </li>
              <li>
                <span className="svc-no">03</span>
                <div>
                  <h3>Knihařské práce</h3>
                  <p>Vazba, falcování, ořez — dotáhneme tisk do finální podoby.</p>
                </div>
              </li>
              <li>
                <span className="svc-no">04</span>
                <div>
                  <h3>Grafické studio</h3>
                  <p>Práce grafika a bezplatné poradenství k vaší zakázce.</p>
                </div>
              </li>
              <li>
                <span className="svc-no">05</span>
                <div>
                  <h3>Výroba kalendářů</h3>
                  <p>Firemní i nástěnné kalendáře na míru, tisk i vazba u nás.</p>
                </div>
              </li>
              <li>
                <span className="svc-no">06</span>
                <div>
                  <h3>Vlastní doprava</h3>
                  <p>Rozvoz zakázek na pobočky, po Brně a okolí do 50 km zdarma.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="fair-banner">
            <div className="fair-text">
              <p className="eyebrow eyebrow-light">Speciální nabídka pro vystavovatele na BVV</p>
              <h3>Rychlý tisk s bezplatným dovozem na výstaviště</h3>
              <p>
                Chystáte se na MSV, Techagro, Amper, Styl, Kabo, Salima nebo
                Gaudeamus a potřebujete letáky či katalogy expresně dotisknout?
                Vyrobíme je nejpozději do druhého dne a přivezeme zdarma přímo
                na brněnské výstaviště.
              </p>
              <a className="btn-primary btn-on-dark" href="tel:+420775310368">
                Domluvit expresní tisk na veletrh
              </a>
            </div>
          </div>
        </section>

        <section className="section trust" aria-labelledby="duvera-h">
          <div className="section-head">
            <p className="eyebrow eyebrow-dark">Jak zakázka probíhá</p>
            <h2 id="duvera-h">Na co se u nás můžete spolehnout</h2>
            <p className="section-lead">
              Od poptávky po dovoz hotové zakázky vás provede stále stejný
              kontakt — víte tak vždy, na koho se obrátit.
            </p>
          </div>

          <div className="trust-grid">
            <ul className="promise-list">
              <li>
                <h3>Rychlá cenová nabídka</h3>
                <p>Expresní zpracování ceny, vzorky a makety zdarma předem.</p>
              </li>
              <li>
                <h3>Poradenství bez příplatku</h3>
                <p>Technické poradenství, práce grafika i marketéra v ceně.</p>
              </li>
              <li>
                <h3>Profesionální foto</h3>
                <p>Nově nabízíme i služby profesionálního fotografa.</p>
              </li>
              <li>
                <h3>Přehled o zakázce</h3>
                <p>Jste průběžně informováni o stavu výroby i dodání.</p>
              </li>
              <li>
                <h3>Dovoz do 24 hodin</h3>
                <p>Zakázku doručíme na místo určení rychle a spolehlivě.</p>
              </li>
              <li>
                <h3>Stálý kontakt</h3>
                <p>Vaši zakázku má na starosti konkrétní člověk, ne přepážka.</p>
              </li>
            </ul>

            <figure className="trust-figure">
              <img
                src="/section-2.webp"
                alt="Detail čerstvě potištěných archů a grafických podkladů v tiskárně Tiskdruck"
                className="trust-img"
                width={800}
                height={600}
              />
              <figcaption>
                <strong>Radek Matějek</strong> — obchodní oddělení
                <br />
                <a href="mailto:obchod@tiskdruck.cz">obchod@tiskdruck.cz</a>
                <br />
                <a href="tel:+420775310368">775 310 368</a>
              </figcaption>
            </figure>
          </div>

          <div className="cred-strip" role="note">
            <p>
              Dlouholetá spolupráce se <strong>ŠKODA Auto</strong> · výroba
              regálových čel a POS upoutávek · polygrafie v Brně-Žebětíně od
              roku 1989.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
