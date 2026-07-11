import './globals.css';

export default function Page() {
  const services = [
    {
      idx: '01',
      t: 'Krovy a tesařina',
      d: 'Vázané krovy, výměny poškozených trámů, celé dřevostavby. Řežeme, tesáme a spojujeme tak, aby to drželo dalších sto let.',
      tag: 'Nosná konstrukce',
    },
    {
      idx: '02',
      t: 'Střecha na klíč',
      d: 'Pokrývačské i klempířské práce v jedné partě — od latění přes krytinu po žlaby, oplechování a hřebenáče. Šikmá i plochá.',
      tag: 'Pokrývač + klempíř',
    },
    {
      idx: '03',
      t: 'Zateplení a izolace',
      d: 'Nadkrokevní izolace, zateplení šikmých i plochých střech. Teplo zůstane doma a střecha dýchá tak, jak má.',
      tag: 'Úspora energie',
    },
    {
      idx: '04',
      t: 'Střešní okna a vazníky',
      d: 'Montáž střešních oken, dodávka a montáž vazníků i ventilačních turbín. Přesně zaměřeno, čistě zapraveno.',
      tag: 'Montáže',
    },
    {
      idx: '05',
      t: 'Solár a fotovoltaika',
      d: 'Kotvení solárních a fotovoltaických panelů do střechy tak, aby to netěsnalo a drželo v plzeňském větru.',
      tag: 'Střešní energie',
    },
    {
      idx: '06',
      t: 'Zahradní stavby',
      d: 'Altány a pergoly ze dřeva na míru zahrady. Ať už na posezení, nebo pro stín nad terasou.',
      tag: 'Dřevo na zahradu',
    },
  ];

  return (
    <>
      <header className="top">
        <div className="top-in">
          <div className="mark">
            <b>HOLUB</b>
            <span>střechy · Plzeň</span>
          </div>
          <a className="phone" href="tel:+420602420935">
            <span>
              <small>Luboš Holub</small><br />602 420 935
            </span>
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-img">
          <img src="/hero.webp" alt="Nový krov a střecha od tesařství Holub v Plzni" />
        </div>
        <div className="hero-in">
          <h1 className="pitch">
            Krov, který přežije <em>tři generace</em> majitelů.
          </h1>
          <p className="lede">
            Normální práce pro normální lidi. Klempířina, pokrývačina a tesařina
            z jedné ruky — v Plzni a okolí od roku 1992.
          </p>

          <div className="ruler" role="list" aria-label="Čím se firma vyznačuje">
            <div className="tick" role="listitem">
              <span className="n">1992</span>
              <span className="l">Řežeme krovy nad Plzní od roku</span>
            </div>
            <div className="tick" role="listitem">
              <span className="n">stovky</span>
              <span className="l">hotových realizací v kraji</span>
            </div>
            <div className="tick" role="listitem">
              <span className="n">3 v 1</span>
              <span className="l">tesař, pokrývač i klempíř v jedné partě</span>
            </div>
            <div className="tick" role="listitem">
              <span className="n">kdykoliv</span>
              <span className="l">zvedneme telefon — 602 420 935</span>
            </div>
          </div>
        </div>
      </section>

      <section className="svc">
        <div className="wrap">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 className="head">Od trámu po hřebenáč — celá střecha z jedné party</h2>
          <p className="sub">
            Novostavba, rekonstrukce nebo jen oprava po vichřici. Přijedeme, zaměříme
            a řekneme rovnou, co střecha potřebuje a co počká.
          </p>

          <div className="rows">
            {services.map((s) => (
              <div className="row" key={s.idx}>
                <span className="idx">{s.idx}</span>
                <span className="t">{s.t}</span>
                <span className="tag">{s.tag}</span>
                <span className="d">{s.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="wrap">
          <div className="trust-grid">
            <figure className="trust-figure">
              <img src="/section-1.webp" alt="Detail nové krytiny a klempířských prvků na střeše v Plzni" />
              <div className="stamp">
                <b>30 let</b>
                <span>na plzeňských střechách</span>
              </div>
            </figure>

            <div>
              <p className="eyebrow">Kdo vám leze na střechu</p>
              <blockquote className="quote">
                „Dělám střechy tak, jak bych je chtěl mít <span>nad vlastní hlavou</span>.
                Bez keců, bez zbytečných prací navíc.“
              </blockquote>
              <p className="byline">
                <b>Luboš Holub</b> — tesař a pokrývač, Masarykova 916/87, Plzeň
              </p>

              <ul className="facts">
                <li><span className="k">Kde</span><span className="v">Plzeň a Plzeň-jih, směr Přeštice a okolí</span></li>
                <li><span className="k">Od</span><span className="v">roku 1992 — stovky dokončených střech</span></li>
                <li><span className="k">Jak</span><span className="v">osobně zaměřím, nacením a odpracuji, ne subdodávka</span></li>
                <li><span className="k">Kdy</span><span className="v">volejte kdykoliv, ozvu se i večer</span></li>
              </ul>
            </div>
          </div>

          <div className="band">
            <p>Máte děravou střechu nebo plán na novou? Ozvěte se, přijedu se podívat.</p>
            <a href="tel:+420602420935">
              <small>Zavolat Lubošovi</small>
              <b>602 420 935</b>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
