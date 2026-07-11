export default function Page() {
  return (
    <main>
      <div className="topbar">
        <div className="wrap">
          <span><b>Vídeňská 297/99</b> <span className="dot">·</span> 639 00 Brno</span>
          <span>Po–Pá 7:00–16:30 <span className="dot">·</span> nebo dle domluvy</span>
          <span>zelená linka <b>800 900 960</b> <span className="dot">·</span> zdarma</span>
        </div>
      </div>

      <div className="wrap brandrow">
        <h2 className="wordmark">
          <span className="a">ÁURIS</span>
          <span className="auris">autosklo</span>
          <small>Brno · od 2009</small>
        </h2>
        <div className="callfree">
          Volejte zdarma<br /><b>800 900 960</b>
        </div>
      </div>

      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy reveal d1">
              <p className="eyebrow">Výměna a oprava autoskel v Brně</p>
              <h1>Prasklina se šíří.<br /><em>My ji zastavíme dřív.</em></h1>
              <p className="lead">
                Kamínek do čelního skla řešíme na počkání — často stačí
                vyplnit odštěpek pryskyřicí a sklo měnit nemusíte. A když
                už na výměnu dojde, papírování s pojišťovnou vyřídíme za vás.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="tel:800900960">Zavolat zdarma</a>
                <a className="btn btn-ghost" href="#sluzby">Co umíme se sklem</a>
              </div>
            </div>

            <div className="hero-pane reveal d2">
              <img
                src="/hero.webp"
                alt="Technik Áuris zaměřuje poškozené čelní sklo před opravou v servisu v Brně"
              />
              <div className="scope" aria-hidden="true">
                <span className="tag">odštěpek · oprava možná</span>
                <span className="ring" />
              </div>
            </div>
          </div>

          <div className="stats reveal d3">
            <div className="stat"><b>15 let</b><span>servis autoskel v Brně</span></div>
            <div className="stat"><b>10 000+</b><span>spokojených řidičů</span></div>
            <div className="stat"><b>0 Kč</b><span>při splnění pojistných podmínek</span></div>
            <div className="stat"><b>do 20 km</b><span>náhradní vůz zdarma</span></div>
          </div>
        </div>
      </header>

      <section id="sluzby" className="svc-band">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-kicker">Chci…</p>
            <h2>Řekněte, co je se sklem. Zbytek je naše práce.</h2>
            <p>Přijeďte na Vídeňskou, nebo pošleme mobilní servis za vámi. Vůz můžeme vyzvednout a po výměně zase vrátit — ať nepřijdete o půl dne.</p>
          </div>

          <div className="svc-grid">
            <article className="svc">
              <span className="num">01 · oprava</span>
              <h3>Spravit odštěpek</h3>
              <p>Malý kamínek do čelního skla vyplníme pryskyřicí, než se z něj stane prasklina přes celé sklo. Hotovo obvykle do půl hodiny.</p>
              <span className="go">Objednat opravu</span>
            </article>
            <article className="svc">
              <span className="num">02 · výměna</span>
              <h3>Vyměnit autosklo</h3>
              <p>Prasklé čelní, boční i zadní sklo měníme za značková skla AGC, Pilkington či Saint-Gobain Sekurit. Kalibraci asistentů zajistíme.</p>
              <span className="go">Domluvit výměnu</span>
            </article>
            <article className="svc">
              <span className="num">03 · úpravy</span>
              <h3>Tónovat a doladit</h3>
              <p>Tónování skel, dodání lišt a těsnění. V areálu je i pneuservis — při sklení vám rovnou přezují kola.</p>
              <span className="go">Zeptat se na úpravu</span>
            </article>

            <article className="svc-full">
              <img
                src="/section-1.webp"
                alt="Nové čelní sklo připravené k montáži v servisu Autosklo Áuris Brno"
              />
              <div className="body">
                <h3>Pojistnou událost vyřídíme za vás</h3>
                <p>
                  Jsme smluvním partnerem většiny pojišťoven — a i u těch
                  nesmluvních vše zařídíme. Vy jen podepíšete, my komunikujeme
                  s pojišťovnou, hlídáme podmínky a při splnění pojistných
                  podmínek měníte sklo zdarma. Na dobu opravy půjčíme náhradní vůz.
                </p>
                <div className="notice">
                  <span aria-hidden="true">⚠</span>
                  <span><b>Pozor na zákon:</b> při poškození čelního skla nad 50 % plochy vám může být zabaven malý technický průkaz. S výměnou proto neotálejte.</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="o-nas">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-kicker">Proč Áuris</p>
            <h2>Servis, který za vás myslí i papíruje.</h2>
            <p>Patnáct let na jednom místě u Vídeňské. Naši technici jsou proškolení výrobci skel a s pojišťovnami jednáme denně — víte, na čem jste.</p>
          </div>

          <div className="trust-grid">
            <div className="trust-img">
              <img
                src="/section-2.webp"
                alt="Tým Autosklo Áuris při montáži nového autoskla v dílně v Brně"
              />
              <div className="brands">
                <p className="lbl">Montujeme jen značková skla</p>
                <div className="chips">
                  <span>AGC</span>
                  <span>Pilkington</span>
                  <span>Saint-Gobain Sekurit</span>
                  <span>Splintex</span>
                </div>
              </div>
            </div>

            <ul className="trust-list">
              <li>
                <span className="mk">›</span>
                <span className="txt"><b>Výměna zdarma</b> při splnění pojistných podmínek — pojišťovnu řešíme celou za vás.</span>
              </li>
              <li>
                <span className="mk">›</span>
                <span className="txt"><b>Vyzvedneme a vrátíme</b> váš vůz, abyste nemuseli trávit den čekáním v dílně.</span>
              </li>
              <li>
                <span className="mk">›</span>
                <span className="txt"><b>Náhradní vozidlo zdarma</b> u pojistných událostí do 20 km od Brna.</span>
              </li>
              <li>
                <span className="mk">›</span>
                <span className="txt"><b>Proškolený personál</b> s dlouholetou praxí — kalibraci jízdních asistentů zvládneme na místě.</span>
              </li>
              <li>
                <span className="mk">›</span>
                <span className="txt"><b>Mobilní servis</b> po Brně a okolí — přijedeme tam, kde vůz zrovna máte.</span>
              </li>
              <li>
                <span className="mk">›</span>
                <span className="txt"><b>Přezutí při sklení:</b> partnerský pneuservis máme přímo v areálu na Vídeňské.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
