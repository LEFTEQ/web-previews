export default function Page() {
  const services = [
    {
      label: 'DOMOV',
      title: 'Byty a domy',
      text: 'Zabalíme vybavení, rozebereme nábytek a přestěhujeme domácnost po Praze i za její hranice.'
    },
    {
      label: 'PRÁCE',
      title: 'Kanceláře',
      text: 'Přesun naplánujeme tak, aby se váš tým mohl co nejrychleji vrátit k práci.'
    },
    {
      label: 'MEGA-AKLIS',
      title: 'Těžká břemena',
      text: 'Zajistíme stěhování strojů, nadrozměrného vybavení i technicky náročných nákladů.'
    },
    {
      label: 'ZA HRANICE',
      title: 'Mezinárodní stěhování',
      text: 'Pohlídáme balení, nakládku i bezpečný přesun vašich věcí do nové země.'
    },
    {
      label: 'MEZIZASTÁVKA',
      title: 'Skladování',
      text: 'Věci uložíme v zabezpečeném skladu s kontrolou teploty a vlhkosti.'
    },
    {
      label: 'HOTOVO',
      title: 'Montáž a odvoz',
      text: 'Nábytek rozebereme a znovu sestavíme. Nepotřebné věci odvezeme na sběrný dvůr.'
    }
  ];

  const steps = [
    ['01', 'Projdeme zadání', 'Po telefonu si upřesníme adresy, patro, výtah, objem věcí a požadovaný termín.'],
    ['02', 'Připravíme přesun', 'Dovezeme krabice, přepravky nebo šatní boxy a citlivé vybavení bezpečně zabalíme.'],
    ['03', 'Naložíme a převezeme', 'Zkušený tým chrání nábytek i společné prostory a drží se domluveného plánu.'],
    ['04', 'Usadíme věci na místě', 'Vyložíme do správných místností, nábytek smontujeme a obaly odvezeme.']
  ];

  return (
    <main className='aklis-site' id='nahoru'>
      <section className='hero' aria-labelledby='hero-title'>
        <header className='hero-nav'>
          <a className='wordmark' href='#nahoru' aria-label='Stěhování AKLIS, zpět nahoru'>
            <span>AKLIS</span>
            <small>STĚHOVÁNÍ · PRAHA</small>
          </a>
          <a className='nav-phone' href='tel:+420608815565'>
            <span>Po–Ne</span>
            +420 608 815 565
          </a>
        </header>

        <div className='hero-grid'>
          <div className='hero-copy'>
            <p className='eyebrow'>BYTY · KANCELÁŘE · TĚŽKÁ BŘEMENA</p>
            <h1 id='hero-title'>
              Váš svět
              <span>přeneseme</span>
              bez zbytečné tíhy.
            </h1>
            <p className='hero-lead'>
              Zabalíme, naložíme, převezeme a smontujeme. Stěhování v Praze naplánujeme tak, abyste přesně věděli, co se bude dít a kolik to bude stát.
            </p>
            <div className='hero-action'>
              <a className='primary-button' href='tel:+420608815565'>Zavolat pro kalkulaci <span aria-hidden='true'>↗</span></a>
              <p>Nezávazně · konkrétní termín · jasná cena</p>
            </div>
          </div>

          <figure className='hero-visual'>
            <img src='/hero.webp' alt='Stěhovací tým AKLIS při nakládání vybavení v Praze' />
            <div className='packing-tape' aria-hidden='true'>
              <span>KŘEHKÉ</span><span>AKLIS</span><span>PRAHA</span><span>KŘEHKÉ</span>
            </div>
            <figcaption>
              <span>NALOŽENO S PÉČÍ</span>
              <span>PRAHA A OKOLÍ</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className='services-section' aria-labelledby='services-title'>
        <div className='section-heading'>
          <p className='section-code'>TRASA A → B</p>
          <h2 id='services-title'>Co potřebujete dostat na nové místo?</h2>
          <p>Od jedné pohovky po celou firmu. Poskládáme rozsah služby podle toho, co skutečně stěhujete.</p>
        </div>

        <div className='services-layout'>
          <figure className='section-image services-image'>
            <img src='/section-1.webp' alt='Pracovník AKLIS pečlivě balí nábytek před stěhováním' />
            <figcaption>Ochranné obaly, krabice a šatní boxy můžeme přivézt předem.</figcaption>
          </figure>

          <div className='service-list'>
            {services.map((service) => (
              <article className='service-item' key={service.title}>
                <p>{service.label}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='process-section' aria-labelledby='process-title'>
        <div className='process-intro'>
          <div className='section-heading section-heading-light'>
            <p className='section-code'>JEDEN TÝM · CELÁ CESTA</p>
            <h2 id='process-title'>Od prvního kartonu po poslední skříň.</h2>
            <p>Více než 10 let zkušeností proměňujeme v přesný plán, šetrnou manipulaci a termín, na který se můžete spolehnout.</p>
          </div>

          <figure className='section-image process-image'>
            <img src='/section-2.webp' alt='Stěhovací vůz a tým AKLIS připravený k bezpečnému převozu' />
            <figcaption>
              <strong>Krabice k objednávce zdarma</strong>
              <span>Včetně přepravek a šatních boxů podle rozsahu stěhování.</span>
            </figcaption>
          </figure>
        </div>

        <ol className='process-list'>
          {steps.map(([number, title, text]) => (
            <li key={number}>
              <span className='step-number'>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
