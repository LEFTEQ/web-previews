export default function Page() {
  return (
    <main className="sw-site">
      <section className="sw-hero" id="uvod">
        <header className="sw-header">
          <a className="sw-wordmark" href="#uvod" aria-label="Smart Wheels, úvodní stránka">
            <span><strong>smart</strong>wheels</span>
            <small>autopůjčovna · Plzeň</small>
          </a>

          <nav className="sw-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Nabídka</a>
            <a href="#jak-to-funguje">Jak to funguje</a>
          </nav>

          <a className="sw-header-phone" href="tel:+420773338246">
            <span>Zavolat</span>
            <strong>773 338 246</strong>
          </a>
        </header>

        <div className="sw-hero-grid">
          <div className="sw-hero-copy">
            <p className="sw-eyebrow">Autopůjčovna a náhradní vozy v Plzni</p>
            <h1>Když vaše auto stojí, <em>vy nemusíte.</em></h1>
            <p className="sw-lead">
              Přistavíme spolehlivý vůz po nehodě i pro běžné zapůjčení. Pokud řešíte pojistnou událost, převezmeme komunikaci s pojišťovnou za vás.
            </p>

            <div className="sw-actions">
              <a className="sw-button sw-button-primary" href="tel:+420773338246">
                Potřebuji vůz
                <span aria-hidden="true">→</span>
              </a>
              <a className="sw-button sw-button-secondary" href="#nabidka">
                Prohlédnout možnosti
              </a>
            </div>

            <dl className="sw-quick-facts" aria-label="Základní informace">
              <div>
                <dt>Cena pronájmu</dt>
                <dd>od 330 Kč / den</dd>
              </div>
              <div>
                <dt>Zkušenost</dt>
                <dd>20 let v oboru</dd>
              </div>
              <div>
                <dt>Působnost</dt>
                <dd>Plzeň a okolí</dd>
              </div>
            </dl>
          </div>

          <div className="sw-hero-visual">
            <figure className="sw-windshield">
              <img
                src="/hero.webp"
                alt="Vůz autopůjčovny Smart Wheels připravený k předání v Plzni"
                width="1536"
                height="1024"
                fetchPriority="high"
                decoding="async"
              />
            </figure>

            <div className="sw-key-tag" aria-label="Náhradní vůz po nehodě">
              <span className="sw-key-tag-label">Náhradní vůz</span>
              <strong>Pár hodin po nehodě</strong>
              <span>předání klíčů · Plzeň</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-offer" id="nabidka">
        <div className="sw-section-heading">
          <p className="sw-eyebrow">Co potřebujete právě teď</p>
          <h2>Auto pro všední den. Podpora pro ten nečekaný.</h2>
          <p>
            Vybereme řešení podle vaší situace, ne podle nejdražší položky v ceníku.
          </p>
        </div>

        <div className="sw-offer-layout">
          <figure className="sw-section-image sw-section-image-left">
            <img
              src="/section-1.webp"
              alt="Čistý náhradní automobil připravený pro zákazníka autopůjčovny"
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Vozový park</span>
              Škoda · Toyota · Volkswagen · Audi
            </figcaption>
          </figure>

          <div className="sw-services">
            <article className="sw-service sw-service-featured">
              <div className="sw-service-title">
                <span className="sw-service-icon" aria-hidden="true">↗</span>
                <h3>Náhradní vůz po nehodě</h3>
              </div>
              <p>
                Jste poškozený? Pomůžeme vám získat náhradní auto po dobu opravy a vyřídíme potřebné podklady s pojišťovnou.
              </p>
              <span className="sw-service-note">Předání obvykle během několika hodin</span>
            </article>

            <article className="sw-service">
              <div className="sw-service-title">
                <span className="sw-service-icon" aria-hidden="true">⌁</span>
                <h3>Krátkodobý pronájem</h3>
              </div>
              <p>
                Městský vůz, úsporná Škoda nebo reprezentativní Audi. Řeknete nám trasu a počet cestujících, my doporučíme vhodnou kategorii.
              </p>
              <span className="sw-service-note">Férové podmínky bez skrytých poplatků</span>
            </article>

            <article className="sw-service">
              <div className="sw-service-title">
                <span className="sw-service-icon" aria-hidden="true">✓</span>
                <h3>Vyřízení pojistné události</h3>
              </div>
              <p>
                Pohlídáme prohlídku vozu, opravu, nárok na náhradní automobil i komunikaci s pojišťovnou. Zastupujeme vás, ne pojišťovnu.
              </p>
              <span className="sw-service-note">Pomoc pro poškozeného i viníka</span>
            </article>
          </div>
        </div>
      </section>

      <section className="sw-process" id="jak-to-funguje">
        <div className="sw-process-layout">
          <div className="sw-process-copy">
            <p className="sw-eyebrow">Od telefonátu zpátky na silnici</p>
            <h2>Jedno předání klíčů. O zbytek se postaráme.</h2>

            <ol className="sw-steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Popíšete nám situaci</h3>
                  <p>Zavoláte na 773 338 246 a řeknete, zda jde o nehodu, opravu nebo běžný pronájem.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Vybereme a předáme vůz</h3>
                  <p>Doporučíme vhodnou kategorii, vysvětlíme podmínky a domluvíme předání v Plzni.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Vy jedete, my vyřizujeme</h3>
                  <p>U pojistné události komunikujeme se servisem i pojišťovnou, abyste se mohli věnovat svému dni.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="sw-trust-card">
            <figure className="sw-section-image sw-section-image-right">
              <img
                src="/section-2.webp"
                alt="Předání klíčů od náhradního vozu zákazníkovi v Plzni"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <blockquote>
              <p>„Přijeli, odvezli moje poškozené vozidlo a předali mi náhradní. Vše vyřídili s pojišťovnou a já se nemusel o nic starat.“</p>
              <cite>Václav Ž. · zkušenost zákazníka</cite>
            </blockquote>

            <div className="sw-trust-strip">
              <span><strong>20 let</strong> praxe v oboru</span>
              <span><strong>Bez skrytých</strong> poplatků</span>
              <span><strong>Na vaší</strong> straně</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
