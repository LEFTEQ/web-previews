const services = [
  {
    label: 'VZHLED',
    title: 'Celopolep a změna barvy',
    text: 'Nový odstín, překrytí unaveného laku nebo originální grafika navržená přímo pro tvar vašeho vozu.'
  },
  {
    label: 'OCHRANA',
    title: 'Ochranné PPF fólie',
    text: 'Čirá fólie pomáhá chránit namáhané části laku před kamínky, škrábanci a UV zářením.'
  },
  {
    label: 'SOUKROMÍ',
    title: 'Tónování oken',
    text: 'Méně tepla a oslnění v kabině, více soukromí pro posádku i věci uložené v kufru.'
  },
  {
    label: 'FLOTILA',
    title: 'Reklamní polepy',
    text: 'Čitelná firemní grafika pro osobní auta, dodávky, autobusy i kamiony — od jednoho vozu po celý vozový park.'
  }
];

const process = [
  {
    number: '01',
    title: 'Návrh na konkrétní vůz',
    text: 'Ujasníme si barvu, rozsah i účel polepu a grafiku připravíme podle karoserie.'
  },
  {
    number: '02',
    title: 'Příprava povrchu',
    text: 'Lak důkladně očistíme a zkontrolujeme, aby fólie přilnula rovnoměrně.'
  },
  {
    number: '03',
    title: 'Aplikace a předání',
    text: 'Fólii instalujeme v zázemí v Praze a hotový vůz s vámi projdeme detail po detailu.'
  }
];

export default function Page() {
  return (
    <main className='wd-page'>
      <a className='wd-skip' href='#obsah'>Přeskočit na obsah</a>

      <section className='wd-hero' aria-labelledby='wd-hero-title'>
        <header className='wd-header'>
          <a className='wd-wordmark' href='#top' aria-label='Wrapdesigne — úvod'>
            <span>wrap</span><i>/</i><strong>designe</strong>
          </a>

          <nav className='wd-nav' aria-label='Hlavní navigace'>
            <a href='#sluzby'>Polepy a fólie</a>
            <a href='#dilna'>Jak pracujeme</a>
            <a className='wd-nav__phone' href='tel:+420605003063'>605 003 063</a>
          </nav>

          <details className='wd-menu'>
            <summary aria-label='Otevřít navigaci'><span></span><span></span></summary>
            <nav aria-label='Mobilní navigace'>
              <a href='#sluzby'>Polepy a fólie</a>
              <a href='#dilna'>Jak pracujeme</a>
              <a href='tel:+420605003063'>Zavolat 605 003 063</a>
            </nav>
          </details>
        </header>

        <div className='wd-hero__grid' id='top'>
          <div className='wd-hero__copy'>
            <p className='wd-kicker'>Polepy aut · Praha</p>
            <h1 id='wd-hero-title'>Změna, která <em>drží</em> na laku.</h1>
            <p className='wd-hero__lead'>Navrhneme a precizně aplikujeme fólii, která změní barvu, ochrání lak nebo promění váš vůz v nepřehlédnutelnou reklamu.</p>
            <a className='wd-button wd-button--light' href='#sluzby'>Vybrat typ polepu <span aria-hidden='true'>↘</span></a>
          </div>

          <figure className='wd-hero__visual'>
            <img src='/hero.webp' alt='Automobil s profesionálně aplikovanou designovou fólií Wrapdesigne' />
            <figcaption>
              <span>Fólie mění povrch.</span>
              <strong>Ne charakter auta.</strong>
            </figcaption>
          </figure>
        </div>

        <div className='wd-hero__facts' aria-label='Hlavní přednosti'>
          <span>Od roku 2011</span>
          <span>Prémiové fólie</span>
          <span>Instalace v Praze</span>
        </div>
      </section>

      <section className='wd-services' id='obsah' aria-labelledby='sluzby'>
        <div className='wd-section-head'>
          <p className='wd-kicker'>Co umíme obléct do fólie</p>
          <h2 id='sluzby'>Jeden vůz.<br />Čtyři důvody ke změně.</h2>
          <p>Od decentní ochrany nového laku po kompletní proměnu firemní flotily. Doporučíme materiál i rozsah, který dává smysl vašemu autu.</p>
        </div>

        <div className='wd-services__body'>
          <figure className='wd-services__image'>
            <img src='/section-1.webp' alt='Detail precizní aplikace automobilové fólie na karoserii' />
            <figcaption>Čisté hrany, navazující linie a povrch bez zbytečných spojů.</figcaption>
          </figure>

          <div className='wd-service-list'>
            {services.map((service) => (
              <article className='wd-service' key={service.label}>
                <span>{service.label}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='wd-workshop' aria-labelledby='dilna'>
        <div className='wd-workshop__visual'>
          <img src='/section-2.webp' alt='Prostorná pražská dílna Wrapdesigne pro instalaci fólií' />
          <div className='wd-workshop__measure' aria-label='Parametry dílny'>
            <div><strong>100</strong><span>m² prostoru</span></div>
            <div><strong>3,5</strong><span>m vysoká vrata</span></div>
          </div>
        </div>

        <div className='wd-workshop__content'>
          <p className='wd-kicker'>Pražská dílna · zkušenosti od 2011</p>
          <h2 id='dilna'>Dobrá fólie začíná ještě před prvním tahem stěrky.</h2>
          <p className='wd-workshop__intro'>Na kvalitě je vidět příprava, správná teplota i trpělivost v detailech. Pracujeme v vybavené dílně, kam se vejdou dvě osobní auta nebo minibus dlouhý až osm metrů.</p>

          <ol className='wd-process'>
            {process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className='wd-note'>
            <span>PROČ WRAPDESIGNE</span>
            <p>Zkušenosti ze zahraničí, prémiové materiály a jedno odpovědné místo od návrhu po poslední zahnutou hranu.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
