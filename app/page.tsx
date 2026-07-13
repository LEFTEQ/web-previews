export default function Page() {
  const services = [
    {
      title: 'Fasádní lešení',
      text: 'Bezpečný přístup k novostavbám, rekonstrukcím i členitým historickým fasádám.',
      tag: 'domy · kostely · haly',
    },
    {
      title: 'Průmyslové a atypické',
      text: 'Modulové, prostorové i závěsné konstrukce pro šachty, provozy a složité dispozice.',
      tag: 'zaměření · návrh · montáž',
    },
    {
      title: 'Pojízdné věže BOSS',
      text: 'Lehké hliníkové lešení pro rychlou a pružnou práci uvnitř i venku.',
      tag: 'pronájem · dovoz · odvoz',
    },
    {
      title: 'Zastřešení a schodiště',
      text: 'Dočasná ochrana stavby, bezpečné přístupové trasy a mobilní oplocení pracoviště.',
      tag: 'staveniště pod kontrolou',
    },
  ];

  return (
    <>
      <title>Scamont | Pronájem a montáž lešení Olomouc</title>
      <meta
        name='description'
        content='Pronájem, doprava, odborná montáž a demontáž fasádního, průmyslového i pojízdného lešení v Olomouci a okolí.'
      />
      <meta property='og:title' content='Scamont — lešení Olomouc' />
      <meta
        property='og:description'
        content='Lešení přivezeme, bezpečně postavíme a po dokončení práce zase odvezeme.'
      />
      <meta property='og:image' content='/hero.webp' />
      <meta property='og:type' content='website' />

      <main className='scamont-page'>
        <section className='hero' aria-labelledby='hero-title'>
          <header className='site-header'>
            <a className='wordmark' href='#zacatek' aria-label='Scamont — úvodní stránka'>
              <span className='wordmark-bracket' aria-hidden='true'>[</span>
              <span>sca<span>mont</span></span>
              <small>lešení · Olomouc</small>
            </a>

            <nav className='site-nav' aria-label='Hlavní navigace'>
              <a href='#sluzby'>Co stavíme</a>
              <a href='#jistota'>Jak pracujeme</a>
            </nav>

            <a className='header-call' href='tel:+420736604810'>
              <span>Zavolat</span>
              <strong>736 604 810</strong>
            </a>
          </header>

          <div className='hero-layout' id='zacatek'>
            <div className='hero-copy'>
              <p className='eyebrow'>Pronájem a montáž lešení · Olomouc</p>
              <h1 id='hero-title'>Pevná cesta<br />k práci <em>ve výšce.</em></h1>
              <p className='hero-intro'>
                Lešení zaměříme, přivezeme, odborně postavíme a po dokončení práce odvezeme.
                Pro fasády, průmyslové provozy i stavby, které se do běžné tabulky nevejdou.
              </p>
              <div className='hero-actions'>
                <a className='primary-button' href='tel:+420736604810'>
                  Zavolat kvůli lešení
                  <span aria-hidden='true'>↗</span>
                </a>
                <a className='text-link' href='#sluzby'>Prohlédnout možnosti</a>
              </div>
              <p className='service-line'>Olomouc a okolí · vlastní doprava s hydraulickou rukou · náklad do 10 tun</p>
            </div>

            <figure className='hero-visual'>
              <img
                src='/hero.webp'
                alt='Odborně sestavené fasádní lešení na stavbě v Olomouci'
              />
              <div className='scaffold-plan' aria-hidden='true'>
                <span className='plan-line plan-line-a' />
                <span className='plan-line plan-line-b' />
                <span className='plan-line plan-line-c' />
                <span className='plan-node plan-node-a'><i />kotvení</span>
                <span className='plan-node plan-node-b'><i />diagonála</span>
                <span className='plan-node plan-node-c'><i />pracovní podlaha</span>
              </div>
              <figcaption>
                <span>SC / systém</span>
                Konstrukce navržená podle skutečného profilu stavby
              </figcaption>
            </figure>
          </div>
        </section>

        <section className='services-section' id='sluzby' aria-labelledby='services-title'>
          <div className='section-heading'>
            <div>
              <p className='eyebrow'>Konstrukce podle práce</p>
              <h2 id='services-title'>Od rovné fasády<br />po atypický detail.</h2>
            </div>
            <p>
              Nejdřív potřebujeme znát délku, výšku a členitost objektu. Podle zaměření připravíme
              řešení, které využije správné komponenty bez zbytečné konstrukce navíc.
            </p>
          </div>

          <div className='services-layout'>
            <figure className='service-image'>
              <img
                src='/section-1.webp'
                alt='Detail ocelových dílů a bezpečné pracovní podlahy lešení Scamont'
                loading='lazy'
              />
              <figcaption>Ocel, spojky a podlahy sestavené pro konkrétní objekt.</figcaption>
            </figure>

            <div className='service-list'>
              {services.map((service) => (
                <article className='service-item' key={service.title}>
                  <span className='service-mark' aria-hidden='true' />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <small>{service.tag}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='trust-section' id='jistota' aria-labelledby='trust-title'>
          <div className='trust-copy'>
            <p className='eyebrow'>Kompletní lešenářský servis</p>
            <h2 id='trust-title'>Na stavbě zůstane bezpečný přístup. Starosti odvezeme.</h2>
            <p className='trust-lead'>
              Jedna domluva pokryje pronájem, dopravu, montáž i demontáž. Konstrukci přizpůsobíme
              práci řemeslníků, pohybu materiálu a skutečným podmínkám na místě.
            </p>

            <dl className='trust-facts'>
              <div>
                <dt>Bez improvizace</dt>
                <dd>U složitější fasády provedeme zaměření a připravíme návrh sestavy předem.</dd>
              </div>
              <div>
                <dt>Vlastní doprava</dt>
                <dd>Nákladní vůz DAF s hydraulickou rukou dopraví komponenty přímo na stavbu.</dd>
              </div>
              <div>
                <dt>Odborná montáž</dt>
                <dd>Montáž i demontáž vedeme s důrazem na bezpečnost, nosnost a funkční pohyb.</dd>
              </div>
            </dl>
          </div>

          <figure className='trust-image'>
            <img
              src='/section-2.webp'
              alt='Lešenáři při odborné montáži modulové konstrukce'
              loading='lazy'
            />
            <figcaption>
              <strong>Od příjezdu po odvoz</strong>
              <span>Jeden tým odpovídá za celý průběh zakázky.</span>
            </figcaption>
          </figure>
        </section>
      </main>
    </>
  );
}
