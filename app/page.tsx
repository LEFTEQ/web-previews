import { AiImage } from "./_ui";
import { ProfileDiagram } from "./motion";

export default function Page() {
  return (
    <main className="kn">
      <header className="kn-topbar">
        <a className="kn-wordmark" href="#top" aria-label="Kalibra Nova, výroba plastových oken">
          <span className="kn-wordmark-main">KALIBRA</span>
          <span className="kn-wordmark-tick" aria-hidden="true" />
          <span className="kn-wordmark-sub">NOVA</span>
        </a>
        <nav className="kn-nav" aria-label="Hlavní navigace">
          <a href="#profily">Profily</a>
          <a href="#reference">Reference</a>
          <a href="#poptavka">Poptávka</a>
        </nav>
      </header>

      <section className="kn-section kn-hero" id="top">
        <div className="kn-hero-copy">
          <div className="kn-eyebrow">
            <span className="kn-reading">90 mm</span>
            <span className="kn-eyebrow-text">Otovice · Karlovy Vary — výroba od roku 1996</span>
          </div>
          <div className="kn-ruler" aria-hidden="true" />
          <h1 className="kn-h1">
            Okna seřízená<br />na desetinu<br />milimetru.
          </h1>
          <p className="kn-lead">
            Plastová okna a dveře stavíme z profilů K&nbsp;90&nbsp;MD a K&nbsp;80
            Smoovio — se třemi úrovněmi těsnění a stavební hloubkou 90&nbsp;mm.
            Zaměříme, vyrobíme a nakalibrujeme každé křídlo tak, aby dosedlo
            přesně a těsnilo roky.
          </p>
          <div className="kn-cta-row">
            <a className="kn-btn kn-btn-brass" href="#poptavka">Nezávazná poptávka</a>
            <a className="kn-btn kn-btn-ghost" href="#profily">Prohlédnout profily</a>
          </div>
        </div>
        <div className="kn-hero-media">
          <AiImage
            className="kn-hero-img"
            src="/hero.webp"
            alt="Detail rohu plastového okna Kalibra Nova s trojitým těsněním"
          />
          <div className="kn-hero-tag">
            <span className="kn-hero-tag-num">Uf 0,95</span>
            <span className="kn-hero-tag-label">W/m²K — rámový profil</span>
          </div>
        </div>
      </section>

      <section className="kn-section kn-profily" id="profily">
        <div className="kn-section-head">
          <div className="kn-eyebrow kn-eyebrow-light">
            <span className="kn-reading">3× těsnění</span>
            <span className="kn-eyebrow-text">Profily</span>
          </div>
          <div className="kn-ruler kn-ruler-light" aria-hidden="true" />
          <h2 className="kn-h2">Dva profily, tři úrovně těsnění.</h2>
        </div>

        <div className="kn-profily-grid">
          <figure className="kn-diagram">
            <ProfileDiagram />
            <figcaption className="kn-diagram-cap">
              Řez profilem K&nbsp;90&nbsp;MD — vnější, střední a vnitřní těsnění
              v jedné rovině. Diagram se při posuvu „kalibruje“: stěny komor se
              vykreslí, tři těsnění dosednou do drážek.
            </figcaption>
          </figure>

          <div className="kn-specs">
            <article className="kn-spec-card">
              <h3 className="kn-spec-name">K 90 MD</h3>
              <p className="kn-spec-note">Vlajkový profil se středovým těsněním</p>
              <dl className="kn-spec-list">
                <div><dt>Stavební hloubka</dt><dd>90 mm</dd></div>
                <div><dt>Komory</dt><dd>6</dd></div>
                <div><dt>Těsnění</dt><dd>3 úrovně</dd></div>
                <div><dt>Uf rámu</dt><dd>0,95 W/m²K</dd></div>
              </dl>
            </article>
            <article className="kn-spec-card">
              <h3 className="kn-spec-name">K 80 Smoovio</h3>
              <p className="kn-spec-note">Úzký pohledový rám, více skla, více světla</p>
              <dl className="kn-spec-list">
                <div><dt>Stavební hloubka</dt><dd>80 mm</dd></div>
                <div><dt>Komory</dt><dd>5</dd></div>
                <div><dt>Těsnění</dt><dd>2 úrovně</dd></div>
                <div><dt>Uf rámu</dt><dd>1,0 W/m²K</dd></div>
              </dl>
            </article>

            <div className="kn-profily-photo">
              <AiImage
                className="kn-profily-img"
                src="/section-1.webp"
                alt="Vzorky plastových profilů K 90 a K 80 v anthracitovém odstínu"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="kn-section kn-reference" id="reference">
        <div className="kn-section-head">
          <div className="kn-eyebrow">
            <span className="kn-reading">30 let</span>
            <span className="kn-eyebrow-text">O nás &amp; reference</span>
          </div>
          <div className="kn-ruler" aria-hidden="true" />
          <h2 className="kn-h2">Měříme, vyrábíme a montujeme v Karlovarském kraji.</h2>
        </div>

        <div className="kn-reference-grid">
          <div className="kn-reference-media">
            <AiImage
              className="kn-reference-img"
              src="/section-2.webp"
              alt="Realizace plastových oken na novostavbě v Karlovarském kraji"
            />
          </div>
          <div className="kn-reference-copy">
            <p className="kn-lead">
              Novostavby i rozsáhlé rekonstrukce. Zaměření na stavbě děláme sami,
              okna vyrábíme na míru a montujeme vlastní partou — od panelového
              bytu v Karlových Varech po rodinný dům v Otovicích.
            </p>
            <ul className="kn-trust">
              <li>
                <span className="kn-trust-mark">01</span>
                <div>
                  <strong>Vlastní zaměření a montáž</strong>
                  <span>Jeden tým od první schůzky po dotažení kování.</span>
                </div>
              </li>
              <li>
                <span className="kn-trust-mark">02</span>
                <div>
                  <strong>Showroom v Otovicích</strong>
                  <span>Profily, kliky i odstíny si osaháte naživo, ne z katalogu.</span>
                </div>
              </li>
              <li>
                <span className="kn-trust-mark">03</span>
                <div>
                  <strong>Kalibrace na místě</strong>
                  <span>Po montáži seřídíme každé křídlo, aby těsnilo a lehce chodilo.</span>
                </div>
              </li>
            </ul>
            <p className="kn-address">
              Kalibra Nova, s.r.o. · Hroznětínská 183, 360 01 Otovice-Karlovy Vary 1
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
