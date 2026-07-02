export default function Page() {
  return (
    <main className="pg">
      {/* ===== HERO ===== */}
      <header className="pg-hero">
        <div className="pg-hero__bar">
          <div className="pg-wordmark" aria-label="Progresa — výroba reklam, Praha">
            <span className="pg-wordmark__name">PRO<b>GRESA</b></span>
            <span className="pg-wordmark__sub">výroba reklam · Praha</span>
          </div>
          <a className="pg-hero__call" href="tel:+420222000000">
            Zavolat: 222 000 000
          </a>
        </div>

        <div className="pg-hero__grid">
          <div className="pg-hero__copy">
            <p className="pg-eyebrow">
              <span className="pg-eyebrow__chip">Frézujeme</span>
              <span className="pg-eyebrow__chip">Tiskneme</span>
              <span className="pg-eyebrow__chip">Montujeme</span>
            </p>
            <h1 className="pg-hero__title">
              Vaše značka,
              <br />
              <span className="pg-hero__title-cut">vyřezaná do&nbsp;materiálu.</span>
            </h1>
            <p className="pg-hero__lead">
              Světelná loga, 3D&nbsp;písmena, polepy aut i výloh. Od návrhu přes
              vlastní dílnu až po montáž na fasádě — všechno pod jednou střechou
              v&nbsp;Praze.
            </p>
            <div className="pg-hero__actions">
              <a className="pg-btn pg-btn--solid" href="tel:+420222000000">
                Zavolat do dílny
              </a>
              <a className="pg-btn pg-btn--line" href="mailto:info@progresa.cz">
                Poslat poptávku
              </a>
            </div>
            <p className="pg-hero__note">
              Zaměření a kalkulace do 48&nbsp;hodin. Zdarma po celé Praze.
            </p>
          </div>

          <figure className="pg-hero__media">
            <img
              src="/hero.webp"
              alt="Výroba světelné reklamy v dílně Progresa — 3D písmena připravená k montáži"
              className="pg-hero__img"
            />
            <figcaption className="pg-hero__tag">
              <span className="pg-hero__tag-dim">Ø výroba</span>
              <span className="pg-hero__tag-val">10–14 dní od schválení návrhu</span>
            </figcaption>
          </figure>
        </div>

        {/* signature: řezací lišta s kótami */}
        <div className="pg-ruler" aria-hidden="true">
          <span className="pg-ruler__label">0</span>
          <span className="pg-ruler__label">500</span>
          <span className="pg-ruler__label">1000</span>
          <span className="pg-ruler__label">1500</span>
          <span className="pg-ruler__label">2000 mm</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="pg-section pg-services" aria-labelledby="sluzby">
        <div className="pg-section__head">
          <h2 id="sluzby" className="pg-section__title">
            Co u nás vyrobíte
          </h2>
          <p className="pg-section__sub">
            Každou zakázku řešíme jako výrobní výkres: materiál, rozměr, kotvení,
            elektro. Žádné překvapení na střeše ani na faktuře.
          </p>
        </div>

        <div className="pg-services__grid">
          <article className="pg-card">
            <p className="pg-card__mat">hliník · plexisklo · LED</p>
            <h3 className="pg-card__title">Světelná loga a 3D písmena</h3>
            <p className="pg-card__text">
              Prosvětlená písmena z plexi a hliníku s úsporými LED moduly.
              Vyfrézujeme, slepíme, zapojíme a přišroubujeme — včetně revize
              elektro a jeřábu, když je fasáda vysoko.
            </p>
          </article>

          <article className="pg-card">
            <p className="pg-card__mat">litá fólie · laminace</p>
            <h3 className="pg-card__title">Polepy aut a výloh</h3>
            <p className="pg-card__text">
              Dodávka, flotila i výloha na Vinohradech. Fólie tiskneme a řežeme
              u nás, lepíme v temperované dílně — bez bublin a s garancí, že
              polep přežije mytí i pražskou zimu.
            </p>
          </article>

          <article className="pg-card">
            <p className="pg-card__mat">dibond · PVC · sklo</p>
            <h3 className="pg-card__title">Cedule, tabule a navigace</h3>
            <p className="pg-card__text">
              Firemní štíty, orientační systémy v budovách, cedule na plot i
              recepci. Přesný řez na CNC fréze, hrany bez otřepů, montáž na
              míru podkladu.
            </p>
          </article>

          <article className="pg-card">
            <p className="pg-card__mat">banner · textil · karton</p>
            <h3 className="pg-card__title">Velkoformátový tisk</h3>
            <p className="pg-card__text">
              Bannery na lešení, roll-upy na veletrh, plachty na plot. Tisk do
              šíře 3,2&nbsp;m, oka a lemy zpracujeme tak, aby banner držel i ve
              větru na Letné.
            </p>
          </article>
        </div>

        <figure className="pg-services__media">
          <img
            src="/section-1.webp"
            alt="CNC fréza řeže logo z hliníkového kompozitu v dílně Progresa"
            className="pg-img"
          />
          <figcaption className="pg-caption">
            CNC fréza v naší dílně — řežeme s přesností na desetinu milimetru.
          </figcaption>
        </figure>
      </section>

      {/* ===== DŮVĚRA / PROCES ===== */}
      <section className="pg-section pg-trust" aria-labelledby="jak">
        <div className="pg-trust__grid">
          <div className="pg-trust__copy">
            <h2 id="jak" className="pg-section__title">
              Od zaměření po rozsvícení
            </h2>
            <p className="pg-section__sub">
              Reklamu vám nevyrobí obchodník s katalogem, ale lidé, kteří ji
              druhý den sami věší. Proto víme, co na fasádě drží — a co ne.
            </p>

            <ol className="pg-steps">
              <li className="pg-steps__item">
                <span className="pg-steps__num">1</span>
                <div>
                  <h3 className="pg-steps__title">Zaměření na místě</h3>
                  <p className="pg-steps__text">
                    Přijedeme, změříme fasádu či auto a poradíme materiál.
                    V&nbsp;Praze zdarma, obvykle do dvou dnů od zavolání.
                  </p>
                </div>
              </li>
              <li className="pg-steps__item">
                <span className="pg-steps__num">2</span>
                <div>
                  <h3 className="pg-steps__title">Návrh a vizualizace</h3>
                  <p className="pg-steps__text">
                    Dostanete vizualizaci přímo na fotce vašeho domu nebo vozu.
                    Schvalujete, až když přesně vidíte, co dostanete.
                  </p>
                </div>
              </li>
              <li className="pg-steps__item">
                <span className="pg-steps__num">3</span>
                <div>
                  <h3 className="pg-steps__title">Výroba ve vlastní dílně</h3>
                  <p className="pg-steps__text">
                    Nic nepřeprodáváme. Frézy, tiskárny i lakovna jsou naše,
                    takže hlídáme kvalitu i termín.
                  </p>
                </div>
              </li>
              <li className="pg-steps__item">
                <span className="pg-steps__num">4</span>
                <div>
                  <h3 className="pg-steps__title">Montáž a záruka</h3>
                  <p className="pg-steps__text">
                    Namontujeme, zapojíme, uklidíme po sobě. Na světelné reklamy
                    dáváme záruku 5&nbsp;let — a když LED dioda zhasne, přijedeme.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="pg-trust__side">
            <figure className="pg-trust__media">
              <img
                src="/section-2.webp"
                alt="Montážník Progresa instaluje světelné logo na fasádu obchodu v Praze"
                className="pg-img"
              />
            </figure>
            <blockquote className="pg-quote">
              <p className="pg-quote__text">
                „Zaměřili v úterý, za dva týdny svítilo. Když nám po roce
                vypadl jeden modul, přijeli druhý den. Tohle v Praze jen tak
                nenajdete.“
              </p>
              <footer className="pg-quote__by">
                — provozovatel kavárny, Praha 7
              </footer>
            </blockquote>
            <dl className="pg-facts">
              <div className="pg-facts__item">
                <dt className="pg-facts__label">Působíme od</dt>
                <dd className="pg-facts__val">roku 2004</dd>
              </div>
              <div className="pg-facts__item">
                <dt className="pg-facts__label">Záruka na světelné reklamy</dt>
                <dd className="pg-facts__val">5 let</dd>
              </div>
              <div className="pg-facts__item">
                <dt className="pg-facts__label">Zaměření v Praze</dt>
                <dd className="pg-facts__val">zdarma</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
