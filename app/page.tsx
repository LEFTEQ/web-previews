export default function Page() {
  const vehicles = [
    {
      name: 'BMW XM 50e',
      spec: 'masáž · panorama · B&W',
      year: '2025',
      km: '14 800 km',
      power: '350 kW',
      fuel: 'PHEV',
      gear: 'automat',
      price: '2 628 000',
    },
    {
      name: 'BMW X7 40d M-Sport',
      spec: 'masáže · tažné',
      year: '2023',
      km: '105 000 km',
      power: '250 kW',
      fuel: 'nafta',
      gear: 'automat',
      price: '1 898 000',
    },
    {
      name: 'BMW M4 Competition xDrive',
      spec: 'odpočet DPH',
      year: '2022',
      km: '28 322 km',
      power: '375 kW',
      fuel: 'benzín',
      gear: 'automat',
      price: '1 690 000',
    },
    {
      name: 'Škoda Karoq Sportline 1.5 TSI',
      spec: 'DSG · odpočet DPH',
      year: '2024',
      km: '26 000 km',
      power: '110 kW',
      fuel: 'benzín',
      gear: 'automat',
      price: '688 000',
    },
  ];

  const services = [
    {
      code: 'S01',
      title: 'Prodej zánovních vozů',
      body: 'Prémiová BMW a další značky po pečlivém výběrovém procesu. Každý vůz prověřený, s možností odpočtu DPH.',
    },
    {
      code: 'S02',
      title: 'Servis vozů Tesla',
      body: 'Jediné certifikované centrum Tesla Approved Body Shop na severní Moravě. Originální díly a postupy dle výrobce.',
    },
    {
      code: 'S03',
      title: 'Autoservis',
      body: 'Od rutinní údržby po specializované opravy. Diagnostika, mechanika i elektrika pod jednou střechou.',
    },
    {
      code: 'S04',
      title: 'Karosárna a lakovna',
      body: 'Kompletní opravy karoserie a profesionální lakování v komorách s přesným tónováním odstínu.',
    },
  ];

  return (
    <main className="ac">
      <header className="ac-top">
        <a className="ac-mark" href="#" aria-label="AUTOCENT CZ — domů">
          <span className="ac-mark-auto">AUTO</span>
          <span className="ac-mark-cent">CENT</span>
          <span className="ac-mark-cz">CZ</span>
        </a>
        <nav className="ac-nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Prodej vozů</a>
          <a href="#sluzby">Servis</a>
          <a href="#onas">O nás</a>
        </nav>
        <span className="ac-loc">Ostrava-Kunčice</span>
      </header>

      <section className="ac-hero">
        <div className="ac-hero-media">
          <img
            src="/hero.webp"
            alt="Prémiový vůz v prostorách AUTOCENT CZ v Ostravě"
            className="ac-hero-img"
          />
          <span className="ac-hero-tag">Tesla Approved Body Shop</span>
        </div>
        <div className="ac-hero-copy">
          <p className="ac-eyebrow">Prémiový prodej &amp; certifikovaný servis · Ostrava</p>
          <h1 className="ac-hero-h1">
            Vozy, které<br />
            <em>si stojí</em> za<br />
            svým jménem.
          </h1>
          <p className="ac-hero-lead">
            Jediné certifikované centrum Tesla Approved Body Shop na severní Moravě.
            Exkluzivní výběr zánovních vozů, poctivá karosárna a servis, kterému rozumíme.
          </p>
          <div className="ac-hero-cta">
            <a className="ac-btn" href="#nabidka">Zobrazit nabídku vozů</a>
            <a className="ac-btn ac-btn-ghost" href="tel:+420734555999">Zavolat 734&nbsp;555&nbsp;999</a>
          </div>
        </div>
      </section>

      <section className="ac-listings" id="nabidka" aria-labelledby="nabidka-h">
        <div className="ac-sec-head">
          <h2 id="nabidka-h">Aktuálně na prodej</h2>
          <p>Skladem v Ostravě-Kunčicích. Rezervaci a prohlídku domluvíme na jeden telefon.</p>
        </div>
        <ul className="ac-grid">
          {vehicles.map((v) => (
            <li className="ac-card" key={v.name}>
              <div className="ac-card-price">
                <span className="ac-card-num">{v.price}</span>
                <span className="ac-card-cur">Kč</span>
              </div>
              <h3 className="ac-card-name">{v.name}</h3>
              <p className="ac-card-spec">{v.spec}</p>
              <dl className="ac-card-meta">
                <div><dt>Rok</dt><dd>{v.year}</dd></div>
                <div><dt>Nájezd</dt><dd>{v.km}</dd></div>
                <div><dt>Výkon</dt><dd>{v.power}</dd></div>
                <div><dt>Palivo</dt><dd>{v.fuel}</dd></div>
                <div><dt>Převodovka</dt><dd>{v.gear}</dd></div>
              </dl>
              <a className="ac-card-link" href="#nabidka">Detail nabídky</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="ac-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ac-serv-grid">
          <div className="ac-serv-intro">
            <p className="ac-eyebrow">Co pro váš vůz uděláme</p>
            <h2 id="sluzby-h">Čtyři dílny,<br />jedna adresa.</h2>
            <p className="ac-serv-text">
              Prodejem to nekončí. Každý vůz si zaslouží kvalitní servis —
              proto máme vlastní autoservis, karosárnu i lakovnu a jako jediní
              na severní Moravě servisujeme Teslu podle standardů výrobce.
            </p>
            <img
              src="/section-1.webp"
              alt="Servisní zázemí AUTOCENT CZ"
              className="ac-serv-img"
            />
          </div>
          <ol className="ac-serv-list">
            {services.map((s) => (
              <li className="ac-serv-item" key={s.code}>
                <span className="ac-serv-code">{s.code}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ac-about" id="onas" aria-labelledby="onas-h">
        <div className="ac-about-media">
          <img
            src="/section-2.webp"
            alt="Interiér AUTOCENT CZ v Ostravě"
            className="ac-about-img"
          />
        </div>
        <div className="ac-about-copy">
          <p className="ac-eyebrow">Slovo majitele</p>
          <blockquote className="ac-quote">
            „Když přemýšlíte, kde koupit nebo servisovat auto, chcete jistotu
            a profesionální přístup. U nás dostanete víc — vyzkoušejte si
            naše služby osobně a přesvědčte se.“
          </blockquote>
          <dl className="ac-facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Frýdecká 773/316<br />719 00 Ostrava-Kunčice</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7:00–17:00<br />So–Ne zavřeno</dd>
            </div>
            <div>
              <dt>Spojení</dt>
              <dd>
                <a href="tel:+420734555999">+420 734 555 999</a><br />
                <a href="mailto:info@autocent.cz">info@autocent.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
