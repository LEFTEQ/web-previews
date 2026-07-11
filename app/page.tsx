import './globals.css';

export default function Page() {
  const services = [
    {
      no: '01',
      code: 'KAN·01',
      title: 'Odpadní vody a kanalizace',
      desc: 'Provoz a údržba obecní splaškové kanalizace, opravy havárií řadu i havarijní výjezdy k ucpaným přípojkám.',
    },
    {
      no: '02',
      code: 'VOD·02',
      title: 'Pitná voda a vodovodní řad',
      desc: 'Odstávky při havárii, výměny úseků potrubí a obnovení dodávky do domácností co nejrychleji zpět.',
    },
    {
      no: '03',
      code: 'SVZ·03',
      title: 'Svoz a třídění odpadu',
      desc: 'Pravidelný svoz podle kalendáře, sběrné místo Hájek a péče o separační místa v celé obci.',
    },
    {
      no: '04',
      code: 'ČIŠ·04',
      title: 'Čištění a monitoring stok',
      desc: 'Tlakové proplachy, kamerová prohlídka stok a plánovaná deratizace kanalizační sítě.',
    },
    {
      no: '05',
      code: 'BIO·05',
      title: 'Bioodpad a zeleň',
      desc: 'Odvoz biologického odpadu a údržba veřejných ploch — od posekané trávy po spadané listí.',
    },
    {
      no: '06',
      code: 'HAV·06',
      title: 'Havarijní služba',
      desc: 'Prasklý řad, přetékající šachta, ucpaná stoka — nahlaste to a my vyjíždíme na místo.',
    },
  ];

  const facts = [
    { dt: 'Provozujeme od', dd: '2007', sub: 'nepřetržitě pro Hostivici' },
    { dt: 'Kanalizační síť', dd: '48 km', sub: 'splaškové stoky v obci' },
    { dt: 'Sběrné místo', dd: 'Hájek', sub: 'otevřeno i v sobotu' },
    { dt: 'Havárie řešíme', dd: '24 / 7', sub: 'do dokončení oprav' },
  ];

  return (
    <>
      <header className="mast">
        <div className="mast-in">
          <a className="logo" href="#" aria-label="Technické služby Hostivice — úvod">
            <span className="logo-mark">TSH</span>
            <span className="logo-word">Technické služby <span>Hostivice</span></span>
          </a>
          <div className="mast-meta">Jiráskova 100 · Hostivice &nbsp;·&nbsp; <b>Po</b> 7:00–17:00</div>
        </div>
      </header>

      <div className="ticker" role="status">
        <div className="ticker-in">
          <span className="ticker-tag">Odstávka vody</span>
          <span className="ticker-msg"><b>Kutnauerova</b> — havárie řadu, přerušená dodávka 14:00–18:00 nebo do dokončení oprav.</span>
        </div>
      </div>

      <section className="hero" aria-labelledby="h1">
        <div className="hero-media">
          <img src="/hero.webp" alt="Práce technických služeb na kanalizačním řadu v Hostivici" />
        </div>
        <div className="hero-body">
          <p className="hero-eyebrow rise"><span className="dot" aria-hidden="true"></span> Voda · kanalizace · odpad pro Hostivici</p>
          <h1 id="h1" className="rise d1">Voda teče, stoky drží, <em>odpad zmizí</em>.</h1>
          <p className="hero-lead rise d2">Staráme se o vodovod, splaškovou kanalizaci a svoz odpadu ve městě. Když praskne řad nebo se ucpe stoka, jedeme to spravit — a tady vždycky najdete, co zrovna platí.</p>
          <div className="hero-cta rise d3">
            <a className="btn btn-primary" href="#havarie">Nahlásit havárii</a>
            <a className="btn btn-ghost" href="#sluzby">Svozový kalendář a služby</a>
          </div>
        </div>
      </section>

      <section className="block" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-kick">Co pro město děláme</p>
            <h2 className="sec-title">Šest provozů, jedna parta v montérkách</h2>
            <p className="sec-sub">Od vodovodní přípojky přes stoku až po popelnici před domem. Každý provoz má svůj tým, techniku i dispečink — vy voláte na jedno číslo.</p>
          </div>

          <div className="svc-grid">
            {services.map((s) => (
              <article className="svc" key={s.no}>
                <div className="svc-no"><span>{s.no}</span><span className="code">{s.code}</span></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block about" id="havarie" aria-labelledby="about-h">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-copy">
              <p className="sec-kick">Kdo jsme a proč nám věřit</p>
              <h2 className="sec-title" id="about-h">Městská firma, ne anonymní dodavatel</h2>
              <p>Technické služby Hostivice jsou příspěvková organizace města. Nejsme nadnárodní síť — jsme lidé z Hostivice, kteří tu bydlí a starají se o vlastní vodovod, kanalizaci i sběrné místo Hájek.</p>
              <p>Když v ulici praskne řad, řešíme to na místě a dáme vědět, kdy poteče voda zpět. Odstávky, uzavírky sběrného místa i změny svozu hlásíme dopředu, ať vás nic nepřekvapí.</p>

              <dl className="facts">
                {facts.map((f) => (
                  <div className="fact" key={f.dt}>
                    <dt>{f.dt}</dt>
                    <dd>{f.dd}<small>{f.sub}</small></dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <figure className="about-fig">
                <img src="/section-1.webp" alt="Technika a zázemí Technických služeb Hostivice" />
                <figcaption className="fig-cap">Dvůr Jiráskova 100 — odsud vyjíždíme k výjezdům po celé Hostivici.</figcaption>
              </figure>

              <div className="hours">
                <h4>Sběrné místo Hájek — otevírací doba</h4>
                <ul>
                  <li><span>Pondělí–čtvrtek</span> <b>8:00–16:00</b></li>
                  <li><span>Pátek</span> <b>8:00–15:00</b></li>
                  <li><span>Sobota</span> <b>8:00–13:00</b></li>
                  <li><span>Pokladna Jiráskova (Po)</span> <b>7:00–17:00</b></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
