const services = [
  {
    title: 'Individuální psychoterapie',
    text: 'Pro chvíle, kdy se opakují úzkosti, vyčerpání, smutek nebo vztahové potíže a chcete jim lépe porozumět.',
    forWhom: 'Dospělí',
  },
  {
    title: 'Párová terapie',
    text: 'Bezpečný prostor pro rozhovor o blízkosti, důvěře, konfliktech i změnách, které se vám nedaří zvládnout ve dvou.',
    forWhom: 'Páry',
  },
  {
    title: 'Rodinná terapie',
    text: 'Společné hledání cesty v náročných obdobích, při dlouhodobém napětí nebo když se potřeby členů rodiny míjejí.',
    forWhom: 'Rodiny',
  },
];

const hours = [
  ['Pondělí', '7–12 · 13–17'],
  ['Úterý', '8–12 · 13–18'],
  ['Středa', '8–12 · 13–16'],
  ['Čtvrtek', '8–12 · 13–16'],
  ['Pátek', 'po telefonické domluvě'],
];

export default function Page() {
  return (
    <main className='pcl-page'>
      <section className='hero' aria-labelledby='hero-title'>
        <header className='site-header'>
          <a className='wordmark' href='#zacatek' aria-label='Psychologické centrum Liberec – úvod'>
            <span className='wordmark-mark' aria-hidden='true'>P</span>
            <span className='wordmark-text'>
              <strong>Psychologické centrum</strong>
              <span>Liberec · Tkalcovská 53</span>
            </span>
          </a>

          <nav className='nav' aria-label='Hlavní navigace'>
            <a href='#sluzby'>S čím pomáháme</a>
            <a href='#navsteva'>První návštěva</a>
            <a className='nav-call' href='tel:+420733291032'>Zavolat</a>
          </nav>
        </header>

        <div className='hero-grid' id='zacatek'>
          <div className='hero-copy'>
            <p className='eyebrow'>Nestátní zdravotnické zařízení v Liberci</p>
            <h1 id='hero-title'>Místo, kde můžete mluvit bez spěchu.</h1>
            <p className='hero-lead'>
              Ambulantní psychologická péče pro dospělé, páry a rodiny. Na Tkalcovské 53 společně rozplétáme to, co je těžké nést o samotě.
            </p>
            <div className='hero-actions'>
              <a className='button button-primary' href='tel:+420733291032'>
                Zavolat na 733 291 032
              </a>
              <a className='text-link' href='#sluzby'>
                Vybrat druh podpory <span aria-hidden='true'>↓</span>
              </a>
            </div>
            <p className='availability'>Přijímáme klienty po předchozí telefonické domluvě.</p>
          </div>

          <figure className='hero-visual'>
            <img
              src='/hero.webp'
              alt='Klidný interiér Psychologického centra Liberec připravený pro terapeutický rozhovor'
              width='1200'
              height='1500'
              loading='eager'
              decoding='async'
            />
            <svg className='conversation-thread' viewBox='0 0 520 680' fill='none' aria-hidden='true'>
              <path d='M42 598C133 568 79 462 180 430C286 397 213 270 338 236C427 212 400 111 481 76' />
            </svg>
            <figcaption>
              <span>Liberec 1</span>
              <strong>Tkalcovská 53/9</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className='services-section' id='sluzby' aria-labelledby='services-title'>
        <div className='section-intro'>
          <p className='eyebrow'>Odborná psychologická péče</p>
          <h2 id='services-title'>Nemusíte předem vědět, jak svůj problém pojmenovat.</h2>
          <p>Stačí popsat, co se ve vašem životě děje. Při prvním setkání společně ujasníme, jaká forma podpory pro vás dává smysl.</p>
        </div>

        <div className='services-layout'>
          <figure className='section-image services-image'>
            <img
              src='/section-1.webp'
              alt='Detail křesel a přirozených materiálů v terapeutické místnosti centra'
              width='1100'
              height='900'
              loading='lazy'
              decoding='async'
            />
          </figure>

          <div className='service-list'>
            {services.map((service) => (
              <article className='service-card' key={service.title}>
                <span className='service-for'>{service.forWhom}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
            <aside className='atelier-note'>
              <span className='atelier-knot' aria-hidden='true' />
              <div>
                <strong>Ateliér 53</strong>
                <p>Součástí centra je také arteterapeutická skupina Cesta k sobě, která se schází v úterý od 16:30 do 19:30.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className='visit-section' id='navsteva' aria-labelledby='visit-title'>
        <div className='visit-grid'>
          <div className='visit-content'>
            <p className='eyebrow'>Prakticky a bez nejistoty</p>
            <h2 id='visit-title'>Co je dobré vědět před návštěvou</h2>
            <p className='visit-lead'>Jsme ambulantní zdravotnické zařízení. Termín si vždy domluvte předem; při telefonátu vám řekneme, co bude potřeba a zda lze péči vykázat vaší pojišťovně.</p>

            <div className='visit-facts'>
              <div className='fact'>
                <span className='fact-label'>Smluvní pojišťovny</span>
                <p>VZP 111 · VoZP 201 · ZP MV ČR 211</p>
              </div>
              <div className='fact'>
                <span className='fact-label'>Kde nás najdete</span>
                <p>Tkalcovská 53/9, 460 01 Liberec 1</p>
              </div>
              <div className='fact'>
                <span className='fact-label'>E-mail</span>
                <a href='mailto:info@psychologliberec.cz'>info@psychologliberec.cz</a>
              </div>
            </div>

            <div className='hours' aria-label='Ordinační hodiny'>
              <h3>Ordinační hodiny</h3>
              <dl>
                {hours.map(([day, time]) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <figure className='section-image visit-image'>
            <img
              src='/section-2.webp'
              alt='Přívětivé zázemí Psychologického centra v ulici Tkalcovská v Liberci'
              width='1100'
              height='1350'
              loading='lazy'
              decoding='async'
            />
            <figcaption>
              <span>První krok</span>
              <p>Zavolejte nám. Krátce probereme, koho hledáte a nabídneme vhodný termín.</p>
              <a href='tel:+420733291032'>733 291 032</a>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
