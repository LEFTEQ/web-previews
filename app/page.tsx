import type { ReactNode } from "react";

export default function Page(): ReactNode {
  return (
    <div className="ts-root">
      <header className="ts-top">
        <a className="ts-brand" href="#uvod" aria-label="Auto TS Import Brno, úvod">
          <span className="ts-brand-mark">TS</span>
          <span className="ts-brand-word">
            AUTO<span className="ts-dot">.</span>TS
            <em>Import · Brno</em>
          </span>
        </a>
        <a className="ts-top-phone" href="tel:+420775252522">
          <span className="ts-top-phone-label">Zavolejte</span>
          <span className="ts-top-phone-num">775 25 25 22</span>
        </a>
      </header>

      <main id="uvod">
        <section className="ts-hero" aria-labelledby="hero-title">
          <img
            className="ts-hero-img"
            src="/hero.webp"
            alt="Ojetý vůz dovezený z Německa, připravený na prodej v autobazaru v Troubsku u Brna"
            width={1600}
            height={1000}
            loading="eager"
            decoding="async"
          />
          <div className="ts-hero-shade" aria-hidden="true" />

          <div className="ts-hero-inner">
            <div className="ts-hero-copy">
              <p className="ts-eyebrow ts-r1">Autobazar a dovoz vozů · Troubsko u Brna</p>
              <h1 id="hero-title" className="ts-h1 ts-r2">
                Ojetá auta z Německa,<br />
                dovezená na míru do Brna.
              </h1>
              <p className="ts-lead ts-r3">
                V areálu CS D-OIL v Troubsku vybereme, prověříme a přivezeme vůz
                přesně podle vašeho zadání — s doloženou historií a reálným
                počtem kilometrů. Přepis a papíry vyřídíme za vás.
              </p>
              <div className="ts-cta ts-r4">
                <a className="ts-btn ts-btn--amber" href="tel:+420775252522">
                  Zavolat 775 25 25 22
                </a>
                <a className="ts-btn ts-btn--ghost" href="mailto:info@autotsimport.cz">
                  Napsat e-mail
                </a>
              </div>
            </div>

            <figure className="ts-plate ts-plate--hero ts-r5" aria-label="Specifikace dovozu">
              <figcaption className="ts-plate-cap">Specifikace dovozu</figcaption>
              <dl className="ts-plate-rows">
                <div className="ts-row">
                  <dt>Zdroj</dt>
                  <span className="ts-dots" aria-hidden="true" />
                  <dd>Německo / EU</dd>
                </div>
                <div className="ts-row">
                  <dt>Prověrka</dt>
                  <span className="ts-dots" aria-hidden="true" />
                  <dd>historie + km</dd>
                </div>
                <div className="ts-row">
                  <dt>Převoz</dt>
                  <span className="ts-dots" aria-hidden="true" />
                  <dd>do Troubska</dd>
                </div>
                <div className="ts-row">
                  <dt>Přepis</dt>
                  <span className="ts-dots" aria-hidden="true" />
                  <dd>vyřídíme my</dd>
                </div>
              </dl>
            </figure>
          </div>

          <p className="ts-ticker ts-r6">
            Dovoz na míru <span aria-hidden="true">·</span> Výkup za hotové{" "}
            <span aria-hidden="true">·</span> Dezinfekce ozonem{" "}
            <span aria-hidden="true">·</span> GPS 49.1774 N, 16.4979 E
          </p>
        </section>

        <section className="ts-services" aria-labelledby="svc-title">
          <div className="ts-wrap ts-services-grid">
            <div className="ts-figure-col">
              <figure className="ts-figure">
                <img
                  src="/section-1.webp"
                  alt="Vůz z aktuální nabídky autobazaru Auto TS Import Brno"
                  width={1000}
                  height={1250}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Aktuální nabídka roste každý týden — ptejte se telefonicky.</figcaption>
              </figure>
            </div>

            <div className="ts-services-body">
              <p className="ts-eyebrow ts-eyebrow--ink">Naše služby</p>
              <h2 id="svc-title" className="ts-h2">Tři věci, které pro vás umíme</h2>

              <ul className="ts-svc-list">
                <li className="ts-svc">
                  <span className="ts-svc-code">Dovoz</span>
                  <div className="ts-svc-text">
                    <h3>Dovoz na míru</h3>
                    <p>
                      Řekněte nám značku, rozpočet a výbavu. Vůz najdeme v Německu,
                      prověříme jeho historii i skutečný stav a přivezeme ho do
                      Troubska připravený na přepis.
                    </p>
                  </div>
                </li>
                <li className="ts-svc">
                  <span className="ts-svc-code">Výkup</span>
                  <div className="ts-svc-text">
                    <h3>Výkup vozidel</h3>
                    <p>
                      Vaše auto vykoupíme za hotové i na protiúčet. Ocenění na
                      počkání, platba ihned a odhlášení i papíry vyřídíme za vás.
                    </p>
                  </div>
                </li>
                <li className="ts-svc">
                  <span className="ts-svc-code">Ozon</span>
                  <div className="ts-svc-text">
                    <h3>Dezinfekce ozonem</h3>
                    <p>
                      Zbavíme interiér pachů, roztočů i bakterií. Bez chemie, do
                      hodiny — ideální před prodejem vozu i pro vaše rodinné auto.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ts-about" aria-labelledby="about-title">
          <div className="ts-wrap ts-about-grid">
            <div className="ts-about-body">
              <p className="ts-eyebrow">O nás</p>
              <h2 id="about-title" className="ts-h2 ts-h2--light">
                Malý autobazar, kde auta vybíráme rukama
              </h2>
              <p className="ts-about-p">
                Auto TS Import Brno vozí ojeté vozy z Německa od roku 2016.
                Nejsme velkosklad — každé auto projedeme, prosvítíme jeho
                historii a stojíme si za tím, co v inzerátu píšeme. Když k nám
                přijedete do areálu CS D-OIL, mluvíte přímo s lidmi, kteří vůz
                dováželi.
              </p>

              <dl className="ts-contact">
                <div className="ts-contact-item">
                  <dt>Kde nás najdete</dt>
                  <dd>Jihlavská 21, 664 41 Troubsko (areál CS D-OIL)</dd>
                </div>
                <div className="ts-contact-item">
                  <dt>Otevřeno</dt>
                  <dd>Po–Ne po telefonické dohodě, kdykoli se vám hodí</dd>
                </div>
                <div className="ts-contact-item">
                  <dt>Telefon</dt>
                  <dd className="ts-phones">
                    <a href="tel:+420775252522">775 25 25 22</a>
                    <a href="tel:+420705454545">705 45 45 45</a>
                    <a href="tel:+420530508377">530 50 83 77</a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="ts-about-side">
              <figure className="ts-figure ts-figure--dark">
                <img
                  src="/section-2.webp"
                  alt="Zázemí autobazaru Auto TS Import Brno v Troubsku u Brna"
                  width={1000}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <figure className="ts-plate ts-plate--data" aria-label="Údaje o firmě">
                <figcaption className="ts-plate-cap">Údaje o firmě</figcaption>
                <dl className="ts-plate-rows">
                  <div className="ts-row">
                    <dt>Firma</dt>
                    <span className="ts-dots" aria-hidden="true" />
                    <dd>AUTO TS IMPORT BRNO s.r.o.</dd>
                  </div>
                  <div className="ts-row">
                    <dt>IČ</dt>
                    <span className="ts-dots" aria-hidden="true" />
                    <dd>04968263</dd>
                  </div>
                  <div className="ts-row">
                    <dt>DIČ</dt>
                    <span className="ts-dots" aria-hidden="true" />
                    <dd>CZ04968263</dd>
                  </div>
                  <div className="ts-row">
                    <dt>Spisová zn.</dt>
                    <span className="ts-dots" aria-hidden="true" />
                    <dd>C 92851, KS Brno</dd>
                  </div>
                  <div className="ts-row">
                    <dt>Vozíme od</dt>
                    <span className="ts-dots" aria-hidden="true" />
                    <dd>2016</dd>
                  </div>
                </dl>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
