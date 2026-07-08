const services = [
  {
    code: "01 / DOPRAVA",
    title: "Nákladní doprava",
    tag: "Váš termín je náš cíl",
    desc: "Kamionová přeprava po celé ČR i Evropě. Termín dohodneme předem a držíme ho — dispečink máte na telefonu, ne v e-mailové frontě.",
  },
  {
    code: "02 / SKLAD",
    title: "Skladování a logistika",
    tag: "85 000 m² u D3",
    desc: "Tři vlastní areály v Českých Budějovicích u dálničního exitu na D3. Skladová plocha 45 000 m² plní přísné standardy vašich zákazníků.",
  },
  {
    code: "03 / SYPKÉ",
    title: "Sklápěcí přeprava",
    tag: "Od roku 1990",
    desc: "Naše historicky první oddělení. Přepravu sypkých směsí pro stavbu jihočeských silnic zvládáme spolehlivě už přes tři desetiletí.",
  },
  {
    code: "04 / MYTÍ",
    title: "Mytí průmyslových obalů",
    tag: "Standard automotive",
    desc: "Splňujeme nejpřísnější požadavky na kvalitu mytí průmyslových obalů pro automobilový průmysl.",
  },
  {
    code: "05 / OKNA",
    title: "Rezervace časových oken — Hůry",
    tag: "Areál D Hůry",
    desc: "Naplánujte si vykládku i nakládku předem. Časová okna na logistickém areálu D v Hůrách rezervujete bez čekání ve frontě.",
  },
];

const fuel = [
  { name: "Natural 95", price: "37,90" },
  { name: "Diesel", price: "33,90" },
  { name: "HVO100 Diesel", price: "45,00" },
  { name: "AdBlue", price: "15,00" },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="mark" href="#top" aria-label="Lašek — autodoprava a logistika">
            <span className="dash" aria-hidden="true" />
            LAŠEK
            <small>České Budějovice</small>
          </a>
          <nav className="topnav" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#o-nas">O firmě</a>
            <a href="#o-nas">Certifikace</a>
            <a href="#o-nas">Práce u nás</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <img className="hero-img" src="/hero.webp" alt="Kamiony firmy Lašek na logistickém areálu u dálnice D3 v Českých Budějovicích" />
        <div className="hero-grad" aria-hidden="true" />
        <div className="wrap hero-in">
          <p className="hero-eyebrow reveal">Autodoprava &amp; logistika · od roku 1990</p>
          <h1 className="reveal d1">
            Váš termín<br />je <span className="hl">náš cíl.</span>
          </h1>
          <p className="hero-lead reveal d2">
            Rodinná firma z Českých Budějovic. Kamiony na silnici, 85&nbsp;000&nbsp;m² areálů u exitu D3
            a dispečink, který zvedne telefon. Bez privatizace, bez restituce — postavené od nuly poctivou prací.
          </p>
          <div className="hero-cta reveal d3">
            <a className="btn btn-primary" href="#sluzby">Poptat přepravu <span className="arr" aria-hidden="true">→</span></a>
            <a className="btn btn-ghost" href="#o-nas">Kdo jsme</a>
          </div>
        </div>
      </section>

      <div className="hazard-strip" aria-hidden="true" />

      <div className="rail">
        <div className="wrap rail-in">
          <div className="rail-item">
            <div className="rail-num">1990</div>
            <div className="rail-lab">Na silnici od roku</div>
          </div>
          <div className="rail-item">
            <div className="rail-num">3 <span>areály</span></div>
            <div className="rail-lab">Vlastní logistika u D3</div>
          </div>
          <div className="rail-item">
            <div className="rail-num">85 000 <span>m²</span></div>
            <div className="rail-lab">Plocha areálů</div>
          </div>
          <div className="rail-item">
            <div className="rail-num">20+ <span>let</span></div>
            <div className="rail-lab">S některými kolegy</div>
          </div>
        </div>
      </div>

      <section className="services" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-eyebrow">Nákladní list <b>· co pro vás uvezeme</b></p>
            <h2>Komplexní logistické centrum</h2>
            <p>Od jednoho kamionu po celý řetězec — doprava, sklad, mytí obalů i vlastní čerpací stanice na jednom místě.</p>
          </div>

          <div className="manifest">
            {services.map((s) => (
              <div className="row" key={s.code}>
                <div className="row-code">{s.code}</div>
                <div>
                  <div className="row-title">{s.title}</div>
                  <span className="row-tag">{s.tag}</span>
                </div>
                <div className="row-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <figure className="svc-img">
            <img src="/section-1.webp" alt="Skladová hala a manipulační technika v logistickém areálu Lašek u Českých Budějovic" />
            <figcaption>Areál u exitu D3 · České Budějovice</figcaption>
          </figure>

          <div className="fuel">
            <div className="fuel-head">
              <h3>Čerpací stanice — aktuální ceny</h3>
              <span>PHM od OMV a Unipetrol</span>
            </div>
            <div className="fuel-grid">
              {fuel.map((f) => (
                <div className="fuel-cell" key={f.name}>
                  <div className="fuel-name">{f.name}</div>
                  <div className="fuel-price">{f.price} <small>Kč/l</small></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="o-nas">
        <div className="wrap about-grid">
          <figure className="about-img">
            <img src="/section-2.webp" alt="Řidiči a technika firmy Lašek — rodinná autodoprava z Českých Budějovic" />
          </figure>
          <div className="about-body">
            <p className="sec-eyebrow">O firmě <b>· rodinná tradice od 1990</b></p>
            <h2>Postaveno od nuly, poctivou prací</h2>
            <p className="big">
              „Pokud k nám přijdeš pracovat, máš šanci se hodně naučit — protože logistika je součástí praktického života.“
            </p>
            <p>
              Jsme hrdí na to, že naše společnost vznikla bez privatizace a restituce. Poctivou prací jsme se zařadili
              mezi přední poskytovatele komplexních přepravních a logistických služeb v České republice.
            </p>
            <p>
              Jsme strukturálně flexibilní, agilní a neustále se vzděláváme. Ctíme tradici a hodnoty — někteří z našich
              kolegů jsou s námi už více než dvacet let.
            </p>

            <div className="trust-grid">
              <div className="trust-cell">
                <div className="trust-num">ISO</div>
                <div className="trust-lab">Certifikované procesy</div>
              </div>
              <div className="trust-cell">
                <div className="trust-num">Rodinná</div>
                <div className="trust-lab">Firma, ne řetězec</div>
              </div>
              <div className="trust-cell">
                <div className="trust-num">D3</div>
                <div className="trust-lab">U dálničního exitu</div>
              </div>
            </div>

            <div className="badges">
              <span className="badge">Certifikace ISO</span>
              <span className="badge">Nabídka volných míst</span>
              <span className="badge">Areál D — Hůry</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
