export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Matějovo pekařství – úvod">
            <span>Matějovo</span>
            <span>pekařství</span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#pecivo">Pečivo</a>
            <a href="#remeslo">Jak pečeme</a>
            <a href="tel:+420724776495">Prodejna</a>
          </nav>
        </header>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Brněnské ráno · kvásek · poctivá mouka</p>
            <h1 id="hero-title">
              Ráno má
              <span>kůrku.</span>
            </h1>
            <p className="hero-lead">
              Chleba, který měl čas vykynout. Koláče plné moravského ovoce.
              Snídaně, kvůli které se vyplatí vyrazit o chvíli dřív.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#pecivo">Vybrat si pečivo</a>
              <a className="text-link" href="tel:+420724776495">Zavolat do prodejny</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="bake-note bake-note-top">
              <span>zaděláno</span>
              <strong>večer</strong>
            </div>
            <img
              src="/hero.webp"
              width="1600"
              height="1200"
              alt="Čerstvě upečený bochník chleba z Matějova pekařství"
              fetchPriority="high"
            />
            <div className="loaf-cuts" aria-hidden="true">
              <i></i><i></i><i></i>
            </div>
            <div className="bake-note bake-note-bottom">
              <span>na pultě</span>
              <strong>ráno</strong>
            </div>
          </div>
        </div>

        <p className="hero-caption">Pečeme pomalu. Vy si přijdete pro čerstvé.</p>
      </section>

      <section className="offer" id="pecivo" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow">Co si dnes odnesete</p>
          <h2 id="offer-title">Od bochníku ke snídani</h2>
          <p>
            Stavte se cestou do práce, pro něco ke kávě nebo pro chleba ke
            společnému stolu. Vybíráme suroviny, jejichž původ i chuť známe.
          </p>
        </div>

        <div className="offer-layout">
          <figure className="offer-image">
            <img
              src="/section-1.webp"
              width="1200"
              height="900"
              loading="lazy"
              alt="Výběr čerstvého chleba, rohlíků a sladkého pečiva na pultu"
            />
            <figcaption>Každé ráno z pece, ne ze skladu.</figcaption>
          </figure>

          <div className="product-list">
            <article>
              <div className="product-mark" aria-hidden="true">K</div>
              <div>
                <h3>Kváskový chleba</h3>
                <p>Dlouhé kynutí, pružná střídka a kůrka, která opravdu křupne.</p>
              </div>
              <span className="product-time">na každý den</span>
            </article>
            <article>
              <div className="product-mark" aria-hidden="true">M</div>
              <div>
                <h3>Moravské koláče</h3>
                <p>Tvaroh, mák, povidla a ovoce. Náplň není jen tečka uprostřed.</p>
              </div>
              <span className="product-time">ke kávě i na oslavu</span>
            </article>
            <article>
              <div className="product-mark" aria-hidden="true">S</div>
              <div>
                <h3>Snídaně v pekárně</h3>
                <p>Vejce, čerstvé pečivo a dobrá káva pro ráno bez spěchu.</p>
              </div>
              <span className="product-time">posedět i s sebou</span>
            </article>
            <article>
              <div className="product-mark" aria-hidden="true">D</div>
              <div>
                <h3>Dorty a svatební koláčky</h3>
                <p>Objednávky pro narozeniny, svatby i společný stůl v kanceláři.</p>
              </div>
              <span className="product-time">na objednávku</span>
            </article>
          </div>
        </div>
      </section>

      <section className="craft" id="remeslo" aria-labelledby="craft-title">
        <div className="craft-image-wrap">
          <img
            src="/section-2.webp"
            width="1200"
            height="900"
            loading="lazy"
            alt="Pekař při ručním zpracování těsta v Matějově pekařství"
          />
          <p className="image-stamp">Mouka · voda · sůl · čas</p>
        </div>

        <div className="craft-copy">
          <p className="eyebrow">Aby se řemeslo neztratilo</p>
          <h2 id="craft-title">Čas je naše nejdůležitější surovina.</h2>
          <p className="craft-intro">
            Matějovo pekařství stojí na rodinných receptech a postupech starých
            mistrů pekařů. Těstu dáváme tolik času, kolik potřebuje — kvůli chuti,
            vůni i lehčí stravitelnosti.
          </p>

          <dl className="proof-points">
            <div>
              <dt>Co je uvnitř</dt>
              <dd>Kvalitní mouka, lokální suroviny a složení, na které se můžete zeptat.</dd>
            </div>
            <div>
              <dt>Co neděláme</dt>
              <dd>Neurychlujeme kynutí jen proto, aby byl chleba hotový dřív.</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>V Brně pro každodenní nákup, snídani i objednávky na oslavy.</dd>
            </div>
          </dl>

          <div className="contact-line">
            <span>Potřebujete poradit s objednávkou?</span>
            <a href="tel:+420724776495">724 776 495</a>
            <a href="mailto:borovcova@matejovopekarstvi.cz">Napsat e-mail</a>
          </div>
        </div>
      </section>
    </main>
  );
}
