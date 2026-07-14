export default function Page() {
  const rooms = [
    {
      name: 'Obývací pokoj',
      detail: 'Sedačka Romeo · TV stolek Meolo',
      tag: 'Pohodlí a úložný prostor',
    },
    {
      name: 'Jídelna',
      detail: 'Stůl Titan · lavice Kassandra',
      tag: 'Pro všední den i návštěvy',
    },
    {
      name: 'Ložnice',
      detail: 'Postel Verde · stolek Marle',
      tag: 'Klid, textilie a chytré ukládání',
    },
    {
      name: 'Předsíň',
      detail: 'Botník Lima · skříň Kevo',
      tag: 'Pořádek hned za dveřmi',
    },
  ];

  return (
    <main className='site-shell'>
      <section className='hero' aria-labelledby='hero-title'>
        <header className='site-header'>
          <a className='wordmark' href='#top' aria-label='ASKO prostor — zpět nahoru'>
            <span className='wordmark-joint' aria-hidden='true'>
              <i />
              <i />
            </span>
            <span>
              <strong>ASKO</strong>
              <small>prostor</small>
            </span>
          </a>

          <nav className='main-nav' aria-label='Hlavní navigace'>
            <a href='#mistnosti'>Podle místnosti</a>
            <a href='#jistota'>Proč k nám</a>
          </nav>

          <a className='location-link' href='#jistota'>
            <span aria-hidden='true'>●</span>
            Olomouc
          </a>
        </header>

        <div className='hero-grid' id='top'>
          <div className='hero-copy'>
            <p className='eyebrow'>Nábytek pro skutečný domov · Olomouc</p>
            <h1 id='hero-title'>Sedněte si.<br />Sáhněte na dub.<br /><em>Pak si vyberte.</em></h1>
            <p className='hero-intro'>
              Sedačku, postel ani jídelní stůl nemusíte odhadovat z obrázku. Prohlédněte si nabídku podle místnosti a vybrané kusy si vyzkoušejte osobně v Olomouci.
            </p>
            <div className='hero-actions'>
              <a className='button button-primary' href='#mistnosti'>Vybrat podle místnosti</a>
              <a className='text-link' href='#jistota'>Co je připravené skladem <span aria-hidden='true'>↓</span></a>
            </div>
          </div>

          <figure className='hero-visual'>
            <img src='/hero.webp' alt='Zařízený obývací prostor s nábytkem ASKO v přírodních odstínech' />
            <figcaption>Obývací pokoj není katalogová kategorie. Je to místo, kde se večer konečně posadíte.</figcaption>
            <div className='material-tabs' aria-hidden='true'>
              <span className='sample sample-oak'>dub</span>
              <span className='sample sample-cashmere'>kašmír</span>
              <span className='sample sample-fabric'>tkanina</span>
            </div>
            <span className='joinery-mark' aria-hidden='true' />
          </figure>
        </div>

        <div className='hero-service-strip' aria-label='Výhody nákupu'>
          <p><strong>95 % produktů</strong><span>máme skladem</span></p>
          <p><strong>Osobní odběr</strong><span>vždy zdarma</span></p>
          <p><strong>Prodejna Olomouc</strong><span>nábytek si vyzkoušíte</span></p>
        </div>
      </section>

      <section className='rooms-section' id='mistnosti' aria-labelledby='rooms-title'>
        <div className='section-heading'>
          <div>
            <p className='eyebrow eyebrow-dark'>Začněte místností, ne nekonečným menu</p>
            <h2 id='rooms-title'>Co právě potřebujete doma vyřešit?</h2>
          </div>
          <p>Vybrali jsme čtyři nejčastější začátky. U každého kusu snadno zjistíte rozměry, variantu i dostupnost před cestou na prodejnu.</p>
        </div>

        <div className='rooms-layout'>
          <figure className='rooms-image'>
            <img src='/section-1.webp' alt='Jídelní stůl, židle a úložný nábytek v sladěném interiéru' />
            <figcaption>
              <span>Materiál vedle materiálu</span>
              Dub artisan, béžový kašmír a strukturovanou látku porovnáte v jednom prostoru.
            </figcaption>
          </figure>

          <div className='room-list'>
            {rooms.map((room) => (
              <a className='room-card' href='#jistota' key={room.name}>
                <span className='room-tag'>{room.tag}</span>
                <strong>{room.name}</strong>
                <small>{room.detail}</small>
                <span className='room-arrow' aria-hidden='true'>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className='trust-section' id='jistota' aria-labelledby='trust-title'>
        <div className='trust-copy'>
          <p className='eyebrow eyebrow-dark'>Méně nejistoty mezi výběrem a domovem</p>
          <h2 id='trust-title'>Víte, co kupujete. A kdy to bude u vás.</h2>
          <p className='trust-lead'>
            Nábytek vybíráte na roky, proto před rozhodnutím potřebujete víc než slevový štítek. V Olomouci si ověříte pohodlí, odstín i skutečné rozměry.
          </p>

          <dl className='proof-list'>
            <div>
              <dt>95 % produktů skladem</dt>
              <dd>U položky vidíte dostupnost a nemusíte čekat naslepo.</dd>
            </div>
            <div>
              <dt>Osobní odběr zdarma</dt>
              <dd>Objednávku si vyzvednete bez dalšího poplatku.</dd>
            </div>
            <div>
              <dt>Milion spokojených zákazníků</dt>
              <dd>Zkušenost, o kterou se můžete opřít při zařizování jedné místnosti i celého bytu.</dd>
            </div>
          </dl>
        </div>

        <figure className='trust-image'>
          <img src='/section-2.webp' alt='Detail zpracování dřevěného nábytku a čalounění v prodejně' />
          <figcaption>
            <strong>Na dotek záleží.</strong>
            Strukturu dřeva, tuhost sedáku ani odstín látky displej přesně nepřenese.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
