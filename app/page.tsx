const services = [
  {
    no: "01",
    title: "Filtrace atmosférického vzduchu Camfil",
    text: "Autorizovaně dodáváme filtry Camfil pro provozy, kanceláře i čisté prostory — od hrubé filtrace přes kapsové filtry až po HEPA. Doporučíme třídu filtrace podle vaší aplikace a spočítáme, kolik ušetříte na tlakové ztrátě.",
    tag: "Filtry",
  },
  {
    no: "02",
    title: "Měřicí přístroje Dwyer",
    text: "Tlak, teplota, vlhkost, průtok, hladina i rychlost proudění. Ze sortimentu Dwyer vybereme snímače a manometry na míru vaší vzduchotechnice a předáme je nakalibrované.",
    tag: "Přístroje",
  },
  {
    no: "03",
    title: "Montáž klimatizace a vzduchotechniky",
    text: "Navrhneme, dodáme a namontujeme větrací a klimatizační zařízení. Řešení stavíme podle skutečných objemů vzduchu a hlukových limitů, ne podle katalogu.",
    tag: "Realizace",
  },
  {
    no: "04",
    title: "Filtr-Management a servis",
    text: "Hlídáme za vás výměny filtrů, děláme metrologii i pravidelnou údržbu. Víte dopředu, kdy a co se bude měnit — a proč.",
    tag: "Servis",
  },
];

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a className="mark" href="#" aria-label="Garija Trade, úvod">
            <span className="g">GARIJA</span>
            <span className="dot" aria-hidden="true"></span>
            <small>vzduchotechnika Brno</small>
          </a>
          <nav aria-label="Hlavní">
            <ul className="nav-links">
              <li><a href="#sluzby">Služby</a></li>
              <li><a href="#znacky">Značky</a></li>
              <li><a href="#onas">O nás</a></li>
            </ul>
          </nav>
          <a className="nav-call" href="tel:+420603841550">Zavolat 603 841 550</a>
        </div>
      </header>

      <section className="hero">
        <img className="hero-img" src="/hero.webp" alt="Vzduchotechnické potrubí a filtrační jednotka v provozu" />
        <div className="hero-inner">
          <p className="hero-eyebrow reveal d1">Filtrace · přístroje · klimatizace — Brno od roku 1997</p>
          <h1 className="hero-title reveal d2">Vzduch, který <em>projde</em> každou kontrolou.</h1>
          <p className="hero-lead reveal d3">Dodáváme a servisujeme vzduchotechniku, filtry Camfil a měřicí přístroje Dwyer. Postaráme se o to, aby vzduch ve vašem provozu měl správný tlak, teplotu i čistotu — a aby to šlo dokázat čísly.</p>
          <div className="hero-cta reveal d4">
            <a className="btn-primary" href="#sluzby">Prohlédnout služby</a>
            <a className="btn-ghost" href="mailto:info@garija.cz">info@garija.cz</a>
          </div>
        </div>
        <div className="gauges" aria-label="Klíčové ukazatele">
          <div className="gauges-inner">
            <div className="gauge">
              <div className="val">1997</div>
              <div className="lab">Na trhu od</div>
            </div>
            <div className="gauge">
              <div className="val">H13<span className="unit"> / HEPA</span></div>
              <div className="lab">Až po třídu</div>
            </div>
            <div className="gauge">
              <div className="val">Camfil<span className="unit"> · Dwyer</span></div>
              <div className="lab">Autorizovaný dodavatel</div>
            </div>
            <div className="gauge">
              <div className="val">Brno<span className="unit"> + okolí</span></div>
              <div className="lab">Servis na místě</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block wrap" id="sluzby">
        <div className="sec-head">
          <span className="sec-num">§ 01–04</span>
          <div>
            <h2 className="sec-title">Čtyři věci, které pro vás děláme</h2>
            <p className="sec-sub">Od jednoho filtru po celý rozvod. Nejčastěji nás firmy volají kvůli tomu, co je níž na seznamu — servis, který udrží vše ostatní v chodu.</p>
          </div>
        </div>
        <div className="services">
          {services.map((s) => (
            <article className="svc" key={s.no}>
              <div className="svc-no">{s.no}</div>
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <div className="svc-tag">{s.tag}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="block trust" id="onas">
        <div className="wrap">
          <div className="trust-grid">
            <div>
              <div className="sec-head" style={{marginBottom:"28px"}}>
                <span className="sec-num">§ 05</span>
                <h2 className="sec-title">Vzduchotechnika, které rozumíme do detailu</h2>
              </div>
              <p>Firmu GARIJA TRADE jsme založili v roce 1997 na montážích větracích a klimatizačních zařízení. Ještě téže se rozjela i obchodní část — na základě dohody s Camfil Farr jsme začali dodávat filtry atmosférického vzduchu do celé České republiky přes autorizované zastoupení.</p>
              <p>Dnes spojujeme obojí: umíme zařízení navrhnout, dodat, namontovat i dlouhodobě udržovat — a k tomu dodat přesné přístroje, kterými se dá výsledek změřit. Sídlíme v Brně a servis jezdíme dělat na místo.</p>
              <div className="brands" id="znacky">
                <div className="brand">Camfil<small>Filtrace vzduchu</small></div>
                <div className="brand">Dwyer<small>Měřicí přístroje</small></div>
              </div>
            </div>
            <div className="trust-figure">
              <img src="/section-1.webp" alt="Technik při montáži vzduchotechnického zařízení" />
              <div className="trust-badge">
                <div className="yr">27 let</div>
                <div className="yt">zkušeností s filtrací a klimatizací</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
