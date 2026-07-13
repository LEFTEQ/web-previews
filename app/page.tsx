export default function Page() {
  return (
    <main className='av-page'>
      <section className='hero' aria-labelledby='hero-title'>
        <header className='site-header'>
          <a className='wordmark' href='#top' aria-label='AV interiéry – úvod'>
            <span className='wordmark-av'>AV</span>
            <span className='wordmark-name'>interiéry</span>
          </a>

          <nav className='main-nav' aria-label='Hlavní navigace'>
            <a href='#nabidka'>Nábytek</a>
            <a href='#poradenstvi'>Jak vybíráme</a>
          </nav>

          <a className='header-phone' href='tel:+420735173878'>735 173 878</a>
        </header>

        <div className='hero-grid' id='top'>
          <div className='hero-copy'>
            <p className='eyebrow'>Specialisté na masiv · České Budějovice</p>
            <h1 id='hero-title'>Nábytek, který s vámi zestárne.</h1>
            <p className='hero-lead'>
              Postele, stoly, židle a sedačky vybíráme podle materiálu, konstrukce
              a toho, jak budou sloužit každý den. Ne podle chvíli trvajícího trendu.
            </p>
            <div className='hero-actions'>
              <a className='button button-primary' href='#nabidka'>
                Vybrat podle místnosti
                <span aria-hidden='true'>↘</span>
              </a>
              <a className='text-link' href='tel:+420735173878'>Poradit se po telefonu</a>
            </div>
          </div>

          <figure className='hero-media'>
            <img
              src='/hero.webp'
              alt='Detail poctivě zpracovaného nábytku z masivního dřeva'
            />
            <figcaption className='material-label'>
              <span>01</span>
              <strong>Dřevo má kresbu.<br />Nábytek má charakter.</strong>
            </figcaption>
            <span className='fold-pivot' aria-hidden='true' />
          </figure>
        </div>

        <div className='hero-specs' aria-label='Hlavní nabídka'>
          <span>dub</span>
          <span>buk</span>
          <span>mango</span>
          <span>palisandr</span>
          <span>kůže</span>
        </div>
      </section>

      <section className='offer-section' id='nabidka' aria-labelledby='offer-title'>
        <div className='section-heading'>
          <p className='eyebrow'>Nabídka pro celý domov</p>
          <h2 id='offer-title'>Začněte místností.<br />Materiál doladíme spolu.</h2>
          <p>
            Od jídelního stolu po klápěcí postel. Pomůžeme vám porovnat rozměry,
            odstín dřeva, čalounění i skutečnou dobu dodání.
          </p>
        </div>

        <div className='offer-layout'>
          <figure className='offer-image'>
            <img
              src='/section-1.webp'
              alt='Jídelní nábytek z masivu v klidně zařízeném interiéru'
            />
            <figcaption>Masiv není dekor. Každý kus má vlastní kresbu.</figcaption>
          </figure>

          <div className='room-list'>
            <article className='room-item'>
              <div>
                <p className='room-kicker'>Pro společný čas</p>
                <h3>Jídelna</h3>
              </div>
              <p>Dubové a teakové stoly, masivní židle i vitríny pro každodenní provoz.</p>
              <span aria-hidden='true'>stoly · židle · vitríny</span>
            </article>

            <article className='room-item'>
              <div>
                <p className='room-kicker'>Pro klid a prostor</p>
                <h3>Ložnice</h3>
              </div>
              <p>Postele z buku, manga či palisandru a klápěcí řešení do menších pokojů.</p>
              <span aria-hidden='true'>postele · stolky · komody</span>
            </article>

            <article className='room-item'>
              <div>
                <p className='room-kicker'>Pro dlouhé večery</p>
                <h3>Obývací pokoj</h3>
              </div>
              <p>Kožené sedačky, křesla a úložný nábytek v moderním i zámeckém stylu.</p>
              <span aria-hidden='true'>sedačky · křesla · knihovny</span>
            </article>
          </div>
        </div>
      </section>

      <section className='trust-section' id='poradenstvi' aria-labelledby='trust-title'>
        <div className='trust-copy'>
          <p className='eyebrow'>Výběr bez nepříjemných překvapení</p>
          <h2 id='trust-title'>Víme, na co se ptát dřív, než objednáte.</h2>
          <p className='trust-intro'>
            Nábytek nekupujete na jednu sezonu. Proto s vámi projdeme prostor,
            rozměry i způsob používání a řekneme otevřeně, co je skladem a na co se čeká.
          </p>

          <dl className='trust-points'>
            <div>
              <dt>Materiál</dt>
              <dd>Vysvětlíme rozdíly mezi dubem, bukem, mangem i recyklovaným teakem.</dd>
            </div>
            <div>
              <dt>Rozměry</dt>
              <dd>Ověříme průchody, místo pro rozložení stolu i správnou velikost postele.</dd>
            </div>
            <div>
              <dt>Dodání</dt>
              <dd>Rozlišíme zboží skladem od výroby na objednávku a dáme reálný termín.</dd>
            </div>
          </dl>
        </div>

        <figure className='trust-image'>
          <img
            src='/section-2.webp'
            alt='Detail truhlářského spoje a přirozené kresby masivního dřeva'
          />
          <figcaption>
            <span>České Budějovice</span>
            <strong>Osobní rada místo anonymního katalogu.</strong>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
