import type { CSSProperties } from 'react';

export default function Page() {
  const catalog = [
    {
      no: 'RC',
      title: 'RC modely, které se opravdu řídí',
      body: 'Auta, letadla, vrtulníky, drony, lodě i tanky — RTR sady připravené k jízdě i stavebnice pro modeláře, co si chtějí každý šroub utáhnout sami.',
      tag: 'Auta · Letadla · Drony · Lodě',
    },
    {
      no: 'EL',
      title: 'Pohon a elektronika do posledního článku',
      body: 'Serva, přijímače, regulátory, střídavé motory, LiPo akumulátory a nabíječe. Poradíme, co k sobě sedí, ať model jezdí a nespálíte elektroniku.',
      tag: 'Serva · Regulátory · Akumulátory · Nabíječe',
    },
    {
      no: 'ST',
      title: 'Stavebnice a hračky pro celou rodinu',
      body: 'LEGO, Merkur, Engino, autodráhy, vláčky, puzzle a solární roboti. Věci, které se staví u kuchyňského stolu a vydrží další generaci.',
      tag: 'LEGO · Merkur · Autodráhy · Puzzle',
    },
    {
      no: '3D',
      title: 'Filamenty, materiál a náhradní díly',
      body: 'Filamenty do 3D tiskáren, potahový materiál, ložiska, guma, modelářská chemie a náhradní díly Bambulab. Skladem to, co dochází uprostřed stavby.',
      tag: 'Filamenty · Ložiska · Chemie · Náhradní díly',
    },
  ];

  const picks = [
    { name: 'KAVAN Norden 1600 mm ARF', price: '10 550 Kč', note: 'Polomaketa STOL letadla, rozpětí 1600 mm, uhlíkem vyztužený pěnový polyolefin.' },
    { name: 'Absima CR1.8 Yucatan 1:8 RTR', price: '15 790 Kč', note: 'Expediční crawler, portálové nápravy, uzávěrky diferenciálů, LED osvětlení.' },
    { name: 'Vysílač KAVAN V20', price: '14 540 Kč', note: '24kanálová souprava 2,4 GHz, Hallovy senzory, barevný dotykový displej.' },
    { name: 'SKY RC Q100 neo nabíječ', price: '2 190 Kč', note: 'Čtyřkanálový rychlonabíječ s balancery, 4×60 W, LiPo / NiMH / Pb.' },
  ];

  return (
    <main className="pv">
      <header className="pv-top">
        <a className="pv-mark" href="#" aria-label="PVmodel — modelářství Ostrava">
          <span className="pv-mark-pv">PV</span><span className="pv-mark-model">model</span>
          <span className="pv-mark-dot" aria-hidden="true"></span>
        </a>
        <nav className="pv-nav" aria-label="Hlavní">
          <a href="#katalog">Katalog</a>
          <a href="#vyber">Vybíráme</a>
          <a href="#duvera">Servis</a>
          <a className="pv-call" href="tel:+420596111446">Zavolat 596&nbsp;111&nbsp;446</a>
        </nav>
      </header>

      <section className="pv-hero" aria-labelledby="pv-hero-title">
        <div className="pv-hero-copy">
          <p className="pv-eyebrow">Modelářská prodejna · Ostrava · od roku 1998</p>
          <h1 id="pv-hero-title">
            Postavte to,<br />
            <span className="pv-hi">co doopravdy jezdí,</span><br />
            létá a plave.
          </h1>
          <p className="pv-lede">
            RC modely, elektronika i stavebnice pro nadšence od desíti do sta let. Přijďte si sáhnout,
            zavolejte pro radu, nebo si nechte poslat, co potřebujete dostavět dnes večer.
          </p>
          <div className="pv-hero-cta">
            <a className="pv-btn" href="#katalog">Prohlédnout katalog</a>
            <a className="pv-btn-ghost" href="tel:+420596111446">Poradit se: 596&nbsp;111&nbsp;446</a>
          </div>
          <dl className="pv-stats">
            <div><dt>měřítek na skladě</dt><dd>1:8 – 1:64</dd></div>
            <div><dt>osobní odběr</dt><dd>Ostrava</dd></div>
            <div><dt>servis RC modelů</dt><dd>ano</dd></div>
          </dl>
        </div>
        <figure className="pv-hero-fig">
          <img src="/hero.webp" alt="Detail RC modelů a modelářské elektroniky na prodejně PVmodel v Ostravě" width={880} height={1040} />
          <figcaption>Z prodejny — RC modely připravené k jízdě i pro stavbu</figcaption>
        </figure>
      </section>

      <section className="pv-catalog" id="katalog" aria-labelledby="pv-catalog-title">
        <div className="pv-sec-head">
          <p className="pv-eyebrow pv-eyebrow-dark">Čtyři regály, ze kterých vybíráme nejčastěji</p>
          <h2 id="pv-catalog-title">Co u nás najdete</h2>
        </div>
        <ul className="pv-grid">
          {catalog.map((c) => (
            <li key={c.no} className="pv-card">
              <span className="pv-card-no" aria-hidden="true">{c.no}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <p className="pv-card-tag">{c.tag}</p>
            </li>
          ))}
        </ul>
        <figure className="pv-band">
          <img src="/section-1.webp" alt="Regály modelářské prodejny PVmodel s RC auty, letadly a stavebnicemi" width={1600} height={720} />
        </figure>
      </section>

      <section className="pv-picks" id="vyber" aria-labelledby="pv-picks-title">
        <div className="pv-sec-head">
          <p className="pv-eyebrow pv-eyebrow-dark">Vybíráme pro Vás</p>
          <h2 id="pv-picks-title">Kusy, které stojí za pohled</h2>
        </div>
        <ul className="pv-picks-list">
          {picks.map((p, i) => (
            <li key={p.name} className="pv-pick">
              <span className="pv-pick-idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className="pv-pick-main">
                <h3>{p.name}</h3>
                <p>{p.note}</p>
              </div>
              <span className="pv-pick-price">{p.price}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pv-trust" id="duvera" aria-labelledby="pv-trust-title">
        <div className="pv-trust-media">
          <img src="/section-2.webp" alt="Modelářský ponk s nářadím a rozdělaným RC modelem v prodejně PVmodel" width={1000} height={900} />
        </div>
        <div className="pv-trust-copy">
          <p className="pv-eyebrow pv-eyebrow-dark">O nás</p>
          <h2 id="pv-trust-title">Modeláři, ne jen prodejci</h2>
          <p className="pv-trust-lede">
            V Ostravě prodáváme a hlavně stavíme modely už přes dvacet let. Než něco doporučíme, sami si to
            zkusíme — proto vám poradíme, jestli je model pro začátek, nebo už chce zkušenější ruku.
          </p>
          <ul className="pv-trust-list">
            <li>
              <strong>Technická podpora, která zvedá telefon</strong>
              Zavolejte na <a href="tel:+420596111446">596&nbsp;111&nbsp;446</a> a proberte konkrétní model, ne obecné parametry.
            </li>
            <li>
              <strong>Servis RC modelů a reklamace na jednom místě</strong>
              Opravíme, seřídíme a poradíme s díly — včetně náhradních dílů Bambulab a modelářské chemie.
            </li>
            <li>
              <strong>Osobní odběr v Ostravě</strong>
              Vyberte si online a vyzvedněte na prodejně. Chybějící šroubek dořešíme přímo u pultu.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
