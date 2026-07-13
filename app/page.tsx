export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="masthead">
          <a className="wordmark" href="#top" aria-label="Servis a opravy oken – úvod">
            <span className="wordmark-window" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>
              <strong>SERVIS</strong>
              <small>OKEN · PRAHA</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#opravy">Co opravíme</a>
            <a href="#prubeh">Jak pracujeme</a>
          </nav>

          <a className="header-phone" href="tel:+420723139213">
            <span>Servisní linka</span>
            +420 723 139 213
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Praha · plastová okna a dveře</p>
            <h1 id="hero-title">
              Okno se má
              <span>zavírat.</span>
              Ne přemlouvat.
            </h1>
            <p className="hero-lead">
              Seřídíme kování, vyměníme těsnění, kliku i rozbité sklo. Většinu závad vyřešíme při jedné návštěvě — bez zbytečné výměny celého okna.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420723139213">
                Zavolat servis
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href="#opravy">Najít svoji závadu</a>
            </div>
            <p className="availability">
              <span aria-hidden="true" />
              Servisní vozy vyjíždějí po Praze
            </p>
          </div>

          <figure className="hero-visual">
            <img
              src="/hero.webp"
              alt="Technik při servisním zásahu na plastovém okně"
              width="1400"
              height="1050"
              fetchPriority="high"
            />
            <figcaption>Diagnostika přímo u okna</figcaption>
            <span className="profile-rail" aria-hidden="true">KŘÍDLO / RÁM</span>
            <span className="fault-label fault-label-one" aria-hidden="true">KOVÁNÍ</span>
            <span className="fault-label fault-label-two" aria-hidden="true">TĚSNĚNÍ</span>
          </figure>
        </div>
      </section>

      <section className="repairs" id="opravy" aria-labelledby="repairs-title">
        <div className="section-intro">
          <p className="eyebrow">Závada → konkrétní oprava</p>
          <h2 id="repairs-title">Najdeme příčinu. Ne výmluvu.</h2>
          <p>
            Okno nejdřív prohlédneme a změříme. Opravujeme výrobky různých výrobců, takže doporučení vychází ze skutečného stavu — ne ze značky na rámu.
          </p>
        </div>

        <div className="repairs-layout">
          <figure className="service-image">
            <img
              src="/section-1.webp"
              alt="Detail seřizování mechanismu plastového okna"
              width="1100"
              height="1300"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Seřízení a promazání okenního kování</figcaption>
          </figure>

          <div className="fault-list">
            <article className="fault-item">
              <div className="fault-name">
                <span>Okno drhne nebo nejde dovřít</span>
                <i aria-hidden="true">↘</i>
              </div>
              <p>Seřídíme chod křídla, zkontrolujeme kování a promažeme namáhané části.</p>
            </article>

            <article className="fault-item">
              <div className="fault-name">
                <span>Kolem rámu táhne</span>
                <i aria-hidden="true">↘</i>
              </div>
              <p>Prověříme přítlak a stav těsnění. Poškozené těsnění vyměníme za odpovídající profil.</p>
            </article>

            <article className="fault-item">
              <div className="fault-name">
                <span>Sklo je prasklé nebo rozbité</span>
                <i aria-hidden="true">↘</i>
              </div>
              <p>Zaměříme nové izolační sklo a provedeme bezpečné přesklení okna nebo dveří.</p>
            </article>

            <article className="fault-item">
              <div className="fault-name">
                <span>Klika, pant nebo povrch je poškozený</span>
                <i aria-hidden="true">↘</i>
              </div>
              <p>Opravíme mechanické poškození, vyměníme ovládací kliku a dodáme vhodný náhradní díl.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="process" id="prubeh" aria-labelledby="process-title">
        <div className="process-media">
          <img
            src="/section-2.webp"
            alt="Vybavení připravené pro opravu plastových oken v Praze"
            width="1400"
            height="1000"
            loading="lazy"
            decoding="async"
          />
          <p>Vybavení vozíme s sebou, abychom většinu běžných závad odstranili rovnou na místě.</p>
        </div>

        <div className="process-content">
          <p className="eyebrow">Jak probíhá návštěva</p>
          <h2 id="process-title">Nejdřív oprava. Výměna až tehdy, když dává smysl.</h2>

          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>Prohlédneme celé okno</h3>
                <p>Zkontrolujeme kování, těsnění, sklo, rám i způsob zavírání.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Řekneme, co je potřeba</h3>
                <p>Rozlišíme běžné seřízení od závady, která vyžaduje nový díl.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Opravíme na místě</h3>
                <p>Pokud to stav okna dovolí, závadu odstraníme během stejné návštěvy.</p>
              </div>
            </li>
          </ol>

          <div className="service-note">
            <div>
              <strong>Praha a okolí</strong>
              <span>Servis oken a dveří pro domácnosti, SVJ i firmy</span>
            </div>
            <a href="mailto:info@servisaopravyoken.cz">info@servisaopravyoken.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
