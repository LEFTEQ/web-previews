import React from "react";

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#top" aria-label="CHAZEP a.s. — úvod">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-tread" />
          </span>
          <span className="brand-word">
            CHAZEP<span className="brand-dot">.</span>
          </span>
          <span className="brand-sub">zemní práce · České Budějovice</span>
        </a>
        <nav className="top-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#stavby">Stavby</a>
          <a href="tel:+420387312404" className="top-call">387&nbsp;312&nbsp;404</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Pásové rypadlo při skrývkových pracích na stavbě v jižních Čechách"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">
            <span className="tick" aria-hidden="true" />
            Odměřeno na milimetr · 3D nivelace na dozerech i rypadlech
          </p>

          <h1 className="hero-title">
            Přesouváme
            <br />
            terén tam,
            <br />
            <span className="hero-hl">kde má být.</span>
          </h1>

          <p className="hero-lede">
            Skrývky, násypy, zářezy a hrubé terénní úpravy pro silnice,
            dálnice a haly. Přijedeme s těžkou technikou, odjedeme až je
            pláň v rovině — přesně podle projektu.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420602125107">
              Zavolat na stavbu
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co umíme
            </a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Na trhu od</dt>
              <dd>1990</dd>
            </div>
            <div>
              <dt>Lidí v terénu</dt>
              <dd>100+</dd>
            </div>
            <div>
              <dt>Domovská pláň</dt>
              <dd>Č. Budějovice</dd>
            </div>
          </dl>
        </div>

        <p className="hero-datum" aria-hidden="true">
          49°58′ N · 14°28′ E — kamenolom Slapy, skrývka 2022
        </p>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Řez profilem — shora dolů</p>
          <h2 id="sluzby-h" className="sec-title">
            Od skrývky ornice
            <br /> až po hotovou pláň
          </h2>
          <p className="sec-note">
            Každá vrstva má svůj stroj a svou toleranci. Takhle jde stavba
            odshora dolů — přesně v tomhle pořadí ji přebíráme i my.
          </p>
        </div>

        <div className="strata">
          <ol className="layers">
            <li className="layer">
              <span className="layer-depth">±0,00 m</span>
              <div className="layer-body">
                <h3>Skrývka ornice</h3>
                <p>
                  Sejmeme svrchní vrstvu a uložíme ji na deponii, ať se dá
                  vrátit. Rypadla „Long Reach" i na hlubší záběr — jako na
                  zemním valu v lomu Slapy.
                </p>
              </div>
            </li>
            <li className="layer">
              <span className="layer-depth">−1,50 m</span>
              <div className="layer-body">
                <h3>Zářezy a odtěžení horniny</h3>
                <p>
                  Rozrývací hák (ripper) dolomí horninu po odstřelu,
                  dozery ji shrnou. Zkušenost z D3 Borek — Úsilné.
                </p>
              </div>
            </li>
            <li className="layer">
              <span className="layer-depth">+2,00 m</span>
              <div className="layer-body">
                <h3>Násypy a zazubení svahů</h3>
                <p>
                  Zazubíme původní těleso, sypeme po vrstvách a hutníme
                  válci. Stavěli jsme za plného provozu na půlce dálnice.
                </p>
              </div>
            </li>
            <li className="layer">
              <span className="layer-depth">0 mm</span>
              <div className="layer-body">
                <h3>Přesná pláň · 3D nivelace</h3>
                <p>
                  Dozery i rypadla řídí GPS podle 3D modelu. Výsledná pláň
                  sedí na projekt bez ručního doměřování.
                </p>
              </div>
            </li>
            <li className="layer layer-alt">
              <span className="layer-depth">HTÚ</span>
              <div className="layer-body">
                <h3>HTÚ hal a bytových domů</h3>
                <p>
                  Hrubé terénní úpravy pod základy — od haly EvoBus
                  Holýšov po bytové domy a vodohospodářské stavby.
                </p>
              </div>
            </li>
          </ol>

          <figure className="strata-fig">
            <img
              src="/section-1.webp"
              alt="Těžká technika Chazep při terénních úpravách — dozer a rypadlo na staveništi"
            />
            <figcaption>
              Vozíme vlastní park: dozery, pásová i kolová rypadla,
              nákladní auta, válce, nakladače, drtičky a třídičky.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="onas" id="stavby" aria-labelledby="onas-h">
        <div className="onas-grid">
          <div className="onas-text">
            <p className="sec-eyebrow onas-eyebrow">O firmě · od Vladimíra Chaluše po a.s.</p>
            <h2 id="onas-h" className="sec-title">
              Třicet let
              <br /> v jihočeské hlíně
            </h2>
            <p className="onas-lead">
              Začínali jsme v roce 1990 jako „Vladimír Chaluš — zemní
              práce". V prosinci 2003 jsme se stali akciovou společností
              CHAZEP a.s. a dnes je nás přes stovku. Sídlíme na Okružní
              v Českých Budějovicích a bezpečnost práce bereme jako první
              položku rozpočtu, ne poslední.
            </p>

            <ul className="refs">
              <li>
                <span className="ref-year">2022</span>
                <span className="ref-name">Kamenolom Slapy</span>
                <span className="ref-what">Skrývky a zemní val, rypadlo Long Reach</span>
              </li>
              <li>
                <span className="ref-year">2019</span>
                <span className="ref-name">D3 Ševětín — Borek</span>
                <span className="ref-what">Násypy za provozu na půlce dálnice</span>
              </li>
              <li>
                <span className="ref-year">2016</span>
                <span className="ref-name">D3 Borek — Úsilné</span>
                <span className="ref-what">Demolice mostu přes I/34</span>
              </li>
              <li>
                <span className="ref-year">2001</span>
                <span className="ref-name">EvoBus Holýšov</span>
                <span className="ref-what">HTÚ haly, I. etapa</span>
              </li>
            </ul>

            <div className="onas-cta">
              <a className="btn btn-primary" href="mailto:chazep@chazep.cz">
                Napsat o poptávce
              </a>
              <a className="btn btn-ghost" href="tel:+420387312404">
                387 312 404
              </a>
            </div>
          </div>

          <figure className="onas-fig">
            <img
              src="/section-2.webp"
              alt="Rozestavěné těleso dálnice s hotovou pláň připravenou pro další vrstvu"
            />
            <figcaption>Okružní 712, 370 01 České Budějovice</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
