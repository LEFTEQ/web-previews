export default function Page() {
  return (
    <main>
      <a className='skip-link' href='#obsah'>Přejít na obsah</a>

      <section className='hero' aria-labelledby='hero-title'>
        <header className='site-header'>
          <a className='brand' href='#obsah' aria-label='Zahradní dekorace – úvod'>
            <span className='brand-stone' aria-hidden='true'>ZD</span>
            <span className='brand-copy'>
              <strong>Zahradní dekorace</strong>
              <small>Rychnov nad Kněžnou</small>
            </span>
          </a>

          <nav className='main-nav' aria-label='Hlavní navigace'>
            <a href='#kolekce'>Co vybíráte</a>
            <a href='#remeslo'>Jak pracujeme</a>
            <a className='nav-phone' href='tel:+420734449449'>734 449 449</a>
          </nav>
        </header>

        <div className='hero-layout' id='obsah'>
          <div className='hero-copy'>
            <p className='eyebrow'>Česká dílna · přírodní materiály · od roku 2006</p>
            <h1 id='hero-title'>Zahrada, po které se dá <em>chodit</em> i dívat.</h1>
            <p className='hero-lead'>
              Pískovcové šlapáky, nádoby a sochy pro místa, která mají zrát spolu se zahradou. Vyberte si z hotových kusů, nebo nám popište vlastní představu.
            </p>
            <div className='hero-actions'>
              <a className='button button-primary' href='#kolekce'>Vybrat kámen do zahrady</a>
              <a className='text-link' href='tel:+420734449449'>Zavolat do dílny <span aria-hidden='true'>↗</span></a>
            </div>
            <ul className='hero-assurances' aria-label='Hlavní výhody'>
              <li><strong>1–3 týdny</strong><span>běžná expedice</span></li>
              <li><strong>Na paletě</strong><span>bezpečně zabaleno</span></li>
              <li><strong>Česká výroba</strong><span>ruční detail</span></li>
            </ul>
          </div>

          <div className='hero-visual'>
            <figure className='hero-image-wrap'>
              <img
                src='/hero.webp'
                width='1500'
                height='1100'
                alt='Pískovcové dekorace a nášlapné kameny v upravené zahradě'
              />
            </figure>
            <div className='material-mark' aria-label='Materiál: český pískovec'>
              <span>český</span>
              <strong>pískovec</strong>
            </div>
            <nav className='stone-path' aria-label='Oblíbené druhy zahradních dekorací'>
              <a href='#slapaky'><span>suchou botou</span><strong>Šlapáky</strong></a>
              <a href='#sochy'><span>výrazný solitér</span><strong>Sochy</strong></a>
              <a href='#nadoby'><span>pro zeleň</span><strong>Nádoby</strong></a>
            </nav>
          </div>
        </div>
      </section>

      <section className='collection section-shell' id='kolekce' aria-labelledby='collection-title'>
        <div className='section-heading'>
          <p className='eyebrow'>Kámen podle místa</p>
          <h2 id='collection-title'>Od prvního kroku po poslední detail.</h2>
          <p>Začněte tím, co má kámen ve vaší zahradě dělat. Provede vás mokrou trávou, podrží rostliny, nebo vytvoří bod, u kterého se zastavíte.</p>
        </div>

        <div className='collection-layout'>
          <figure className='collection-image'>
            <img
              src='/section-1.webp'
              width='1200'
              height='900'
              loading='lazy'
              alt='Detail přírodního pískovce použitého v zahradní architektuře'
            />
            <figcaption>Pískovec má vlastní kresbu. Drobné rozdíly v odstínu nejsou vada, ale podpis materiálu.</figcaption>
          </figure>

          <div className='product-groups'>
            <article className='product-group' id='slapaky'>
              <span className='group-use'>Cesta</span>
              <div>
                <h3>Šlapáky do trávy</h3>
                <p>Přírodní i odolný umělý pískovec v tloušťce 4–5 cm. Projdete zahradou suchou botou i po dešti.</p>
              </div>
              <span className='group-detail'>od 10 kusů · světlé i barevné</span>
            </article>

            <article className='product-group' id='nadoby'>
              <span className='group-use'>Růst</span>
              <div>
                <h3>Květináče a záhony</h3>
                <p>Kamenné nádoby a truhlíky, které drží měřítko terasy, vstupu i otevřené zahrady.</p>
              </div>
              <span className='group-detail'>do zahrady i na terasu</span>
            </article>

            <article className='product-group' id='sochy'>
              <span className='group-use'>Charakter</span>
              <div>
                <h3>Sochy, lampy a fontány</h3>
                <p>Solitérní prvky, které nepřebíjejí zeleň. Motiv i rozměr umíme upravit podle konkrétního místa.</p>
              </div>
              <span className='group-detail'>hotové kusy i výroba na přání</span>
            </article>
          </div>
        </div>
      </section>

      <section className='craft' id='remeslo' aria-labelledby='craft-title'>
        <div className='craft-inner section-shell'>
          <div className='craft-copy'>
            <p className='eyebrow'>Od kamene až k vám</p>
            <h2 id='craft-title'>Kámen, který přijede celý.</h2>
            <p className='craft-lead'>Těžká dekorace potřebuje víc než kartonovou krabici. Každý kus zabalíme podle jeho tvaru, upevníme na paletu a předáme dopravci připravený na cestu.</p>

            <dl className='trust-facts'>
              <div>
                <dt>2006</dt>
                <dd>Od tohoto roku vybíráme a vyrábíme dekorace z přírodních materiálů.</dd>
              </div>
              <div>
                <dt>1 000+</dt>
                <dd>Typů dekorací pro malé dvorky, rodinné zahrady i rozlehlé pozemky.</dd>
              </div>
              <div>
                <dt>Na míru</dt>
                <dd>Pískovec opracujeme podle předlohy, rozměru nebo vaší představy.</dd>
              </div>
            </dl>

            <address>
              <span>Osobně nás najdete</span>
              <strong>Jiráskova 899, Rychnov nad Kněžnou</strong>
              <span>Po–Ne, 7:00–21:00 · obchod@zahradnidekorace.com</span>
            </address>
          </div>

          <figure className='craft-image'>
            <img
              src='/section-2.webp'
              width='1200'
              height='1450'
              loading='lazy'
              alt='Ručně zpracovaná pískovcová zahradní dekorace s výraznou kresbou kamene'
            />
            <figcaption><span>Materiál /</span> český pískovec</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
