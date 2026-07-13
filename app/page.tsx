export default function Page() {
  return (
    <>
      <meta
        name='description'
        content='Version Coffee — pražírna a kavárna na adrese Anglická 15, Praha 2. Espresso, filtrovaná káva a čerstvě pražená zrna s sebou.'
      />

      <main className='vc-page'>
        <section className='vc-hero' aria-labelledby='hero-title'>
          <header className='vc-header'>
            <a className='vc-brand' href='#top' aria-label='Version Coffee — začátek stránky'>
              <span className='vc-brand-main'>Version</span>
              <span className='vc-brand-sub'>coffee · Praha</span>
            </a>

            <nav className='vc-nav' aria-label='Hlavní navigace'>
              <a href='#nabidka'>Co připravujeme</a>
              <a href='#navsteva'>Kde nás najdete</a>
            </nav>
          </header>

          <div className='vc-hero-media' id='top'>
            <img
              src='/hero.webp'
              alt='Káva připravovaná ve Version Coffee na pražských Vinohradech'
              fetchPriority='high'
            />
          </div>
          <div className='vc-hero-shade' aria-hidden='true' />

          <div className='vc-hero-copy'>
            <p className='vc-kicker'>Pražírna &amp; kavárna · Anglická 15</p>
            <h1 id='hero-title'>
              <span>Pražíme.</span>
              <span>Vaříme.</span>
              <span className='vc-outline'>Podáváme.</span>
            </h1>
            <div className='vc-hero-bottom'>
              <p>Výběrová káva z naší pražírny, připravená u baru v srdci Vinohrad.</p>
              <a className='vc-button vc-button-light' href='#navsteva'>
                Naplánovat návštěvu <span aria-hidden='true'>↓</span>
              </a>
            </div>
          </div>

          <ol className='vc-process' aria-label='Naše cesta kávy'>
            <li><span>01</span> roast</li>
            <li><span>02</span> brew</li>
            <li><span>03</span> serve</li>
          </ol>
        </section>

        <section className='vc-offer' id='nabidka' aria-labelledby='offer-title'>
          <div className='vc-section-intro'>
            <p className='vc-kicker vc-kicker-dark'>U baru</p>
            <h2 id='offer-title'>Káva podle chuti, ne podle zvyku.</h2>
            <p className='vc-lead'>Řekněte nám, co máte rádi. Doporučíme zrno i přípravu, která mu nechá vyniknout.</p>
          </div>

          <div className='vc-offer-image'>
            <img
              src='/section-1.webp'
              alt='Detail přípravy výběrové kávy ve Version Coffee'
              loading='lazy'
              decoding='async'
            />
            <p>Od zrna po šálek pod jednou střechou.</p>
          </div>

          <div className='vc-menu' aria-label='Nabídka kavárny'>
            <article className='vc-menu-row'>
              <div>
                <p className='vc-menu-note'>Klasika u baru</p>
                <h3>Espresso</h3>
              </div>
              <p>Čisté, s mlékem nebo na ledu. Chuť espressa ladíme podle aktuální sklizně.</p>
            </article>

            <article className='vc-menu-row'>
              <div>
                <p className='vc-menu-note'>Klidnější tempo</p>
                <h3>Filtr</h3>
              </div>
              <p>Lehká a čitelná káva, ve které poznáte původ i charakter konkrétního zrna.</p>
            </article>

            <article className='vc-menu-row'>
              <div>
                <p className='vc-menu-note'>Domů nebo do práce</p>
                <h3>Čerstvá zrna</h3>
              </div>
              <p>Poradíme s výběrem i mletím podle toho, jak kávu připravujete vy.</p>
            </article>
          </div>
        </section>

        <section className='vc-visit' id='navsteva' aria-labelledby='visit-title'>
          <div className='vc-visit-image'>
            <img
              src='/section-2.webp'
              alt='Interiér kavárny Version Coffee v Anglické ulici na Vinohradech'
              loading='lazy'
              decoding='async'
            />
          </div>

          <div className='vc-visit-copy'>
            <p className='vc-kicker'>Na Vinohradech</p>
            <h2 id='visit-title'>Zastavte se na kávu v Anglické.</h2>
            <p className='vc-visit-lead'>Jsme pár kroků od náměstí Míru. Přijďte na rychlé espresso, filtr v klidu nebo si odneste zrna domů.</p>

            <dl className='vc-details'>
              <div>
                <dt>Adresa</dt>
                <dd>Anglická 15<br />Vinohrady · Praha 2</dd>
              </div>
              <div>
                <dt>Kontakt</dt>
                <dd><a href='mailto:roastery@versioncoffee.cz'>roastery@versioncoffee.cz</a></dd>
              </div>
              <div>
                <dt>Než vyrazíte</dt>
                <dd>
                  Aktuální otevírací dobu sledujte na{' '}
                  <a href='https://www.instagram.com/versioncafe/' target='_blank' rel='noreferrer'>Instagramu</a>.
                </dd>
              </div>
            </dl>

            <p className='vc-updated'>Informace aktualizovány 13. 7. 2026</p>
          </div>
        </section>
      </main>
    </>
  );
}
