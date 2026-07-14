export default function Page() {
  return (
    <main>
      <a className='skip-link' href='#nabidka'>Přeskočit na nabídku</a>

      <section className='hero' aria-labelledby='hero-title'>
        <header className='topbar'>
          <a className='wordmark' href='#top' aria-label='LBC reality — úvod'>
            <span className='wordmark-main'>LBC</span>
            <span className='wordmark-divider' aria-hidden='true'></span>
            <span className='wordmark-sub'>reality</span>
          </a>

          <nav className='nav' aria-label='Hlavní navigace'>
            <a href='#nabidka'>Nemovitosti</a>
            <a href='#prodej'>Jak prodáváme</a>
          </nav>

          <a className='phone-link' href='tel:+420773905050'>+420 773 905 050</a>
        </header>

        <div className='hero-grid' id='top'>
          <div className='hero-copy'>
            <p className='eyebrow'>Liberec · Jizerské hory · Praha</p>
            <h1 id='hero-title'>Bydlení s výhledem. Prodej bez přehlížení detailů.</h1>
            <p className='hero-lead'>Známe liberecké čtvrti, horské chalupy i městské investice. Nemovitost najdeme nebo prodáme s právním a finančním servisem pod jednou střechou.</p>
            <div className='hero-actions'>
              <a className='button button-primary' href='#nabidka'>Prohlédnout nabídku</a>
              <a className='button button-secondary' href='mailto:info@lbcreality.cz?subject=Chci%20prodat%20nemovitost'>Chci prodat nemovitost</a>
            </div>
            <p className='recommendation'>Pracujeme převážně na doporučení klientů.</p>
          </div>

          <div className='hero-visual'>
            <svg className='contours' viewBox='0 0 700 760' aria-hidden='true'>
              <path d='M-20 160C105 42 252 48 336 130s182 91 290 6 139-74 164-42'/>
              <path d='M-24 218C90 111 239 104 323 180s184 99 296 15 151-86 180-50'/>
              <path d='M-35 280C86 176 224 173 310 236s191 108 310 29 145-88 190-58'/>
              <path d='M-32 350C86 244 210 241 300 300s197 119 323 43 151-91 198-62'/>
              <path d='M-22 428C86 332 206 320 297 372s200 123 328 61 151-84 198-56'/>
              <path d='M5 514C112 426 217 413 303 456s190 118 316 71 154-75 199-45'/>
            </svg>
            <div className='city-stamp' aria-hidden='true'>LIBEREC</div>
            <div className='image-window'>
              <img src='/hero.webp' alt='Pohled na nemovitost v krajině Libereckého kraje' />
            </div>
            <div className='location-tag'>
              <span className='location-dot' aria-hidden='true'></span>
              <span><strong>50.7671° N</strong><small>domovský bod LBC reality</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className='offers section-shell' id='nabidka' aria-labelledby='offers-title'>
        <div className='section-heading'>
          <div>
            <p className='eyebrow'>Aktuálně v nabídce</p>
            <h2 id='offers-title'>Tři adresy. Tři různé důvody ke stěhování.</h2>
          </div>
          <p>Vybrané nemovitosti z Liberce a jeho okolí. U každé známe nejen metry, ale i místo, sousedství a skutečný stav.</p>
        </div>

        <div className='offer-layout'>
          <article className='featured-property'>
            <div className='property-image'>
              <img src='/section-1.webp' alt='Světlý interiér nabízené nemovitosti v Liberci' />
              <span className='property-state'>K nastěhování</span>
            </div>
            <div className='property-body'>
              <div>
                <p className='property-place'>Králův Háj · Liberec</p>
                <h3>Byt 3+1 s lodžií v jedné z nejoblíbenějších částí města</h3>
              </div>
              <div className='property-price'>5 390 000 Kč</div>
            </div>
            <a className='property-link' href='mailto:info@lbcreality.cz?subject=Byt%203%2B1%20Králův%20Háj'>Zeptat se na prohlídku <span aria-hidden='true'>↗</span></a>
          </article>

          <div className='property-list'>
            <article className='compact-property'>
              <div className='compact-topline'><span>Dům</span><span>01</span></div>
              <h3>Útulné bydlení v srdci Lužických hor</h3>
              <p>Rynoltice, Liberec</p>
              <strong>6 300 000 Kč</strong>
            </article>
            <article className='compact-property'>
              <div className='compact-topline'><span>Rodinný dům</span><span>02</span></div>
              <h3>Dům s garáží a výhledem do krajiny Českého ráje</h3>
              <p>Michovka, Železný Brod</p>
              <strong>Cena v kanceláři</strong>
            </article>
            <a className='all-offers' href='mailto:info@lbcreality.cz?subject=Mám%20zájem%20o%20neveřejné%20nabídky'>
              <span>Hledám něco jiného</span>
              <strong>Poslat neveřejné nabídky</strong>
              <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className='process section-shell' id='prodej' aria-labelledby='process-title'>
        <div className='process-visual'>
          <img src='/section-2.webp' alt='Makléř při přípravě nemovitosti k prodeji' />
          <div className='process-note'>
            <strong>Liberec známe po ulicích.</strong>
            <span>Včetně toho, co se do inzerátu nevejde.</span>
          </div>
        </div>

        <div className='process-content'>
          <p className='eyebrow'>Prodej pod kontrolou</p>
          <h2 id='process-title'>Prodej nemovitosti není inzerát. Je to řízený proces.</h2>
          <p className='process-intro'>Od prvního ocenění po předání klíčů víte, co se děje a proč. Jednáte s jedním člověkem, ne s řetězcem dodavatelů.</p>

          <ol className='process-list'>
            <li>
              <span>01</span>
              <div><h3>Oceníme cenu v kontextu místa</h3><p>Porovnáme skutečné prodeje, stav domu i konkrétní ulici.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><h3>Připravíme nemovitost pro správné zájemce</h3><p>Fotografie, text a prezentace ukážou hodnotu bez přikrášlování.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><h3>Vedeme prohlídky i vyjednávání</h3><p>Prověříme vážný zájem a chráníme vaši cenu i čas.</p></div>
            </li>
            <li>
              <span>04</span>
              <div><h3>Dotáhneme smlouvy, finance a předání</h3><p>Právní a finanční servis držíme pohromadě až do převodu.</p></div>
            </li>
          </ol>

          <div className='trust-strip' aria-label='Kontaktní a důvěryhodnostní údaje'>
            <div><span>Kancelář</span><strong>Lomená 398/2, Liberec</strong></div>
            <div><span>Přímý kontakt</span><a href='tel:+420773905050'>+420 773 905 050</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
