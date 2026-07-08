import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="ek">
      {/* ===== HERO ===== */}
      <header className="ek-hero">
        <div className="ek-hero__grid">
          <div className="ek-hero__copy">
            <a href="#" className="ek-mark" aria-label="Elektroinstalace Klír, domovská stránka">
              <span className="ek-mark__bolt" aria-hidden="true">
                <svg viewBox="0 0 24 40" width="22" height="36" role="img" aria-hidden="true">
                  <path d="M14 0 0 22h8L6 40l16-24h-9l4-16z" fill="currentColor" />
                </svg>
              </span>
              <span className="ek-mark__text">
                <span className="ek-mark__name">KLÍR</span>
                <span className="ek-mark__sub">elektroinstalace &amp; revize · Plzeň</span>
              </span>
            </a>

            <p className="ek-eyebrow">
              <span className="ek-eyebrow__dot" aria-hidden="true" /> Revizní technik s oprávněním · Plzeň &amp; Klatovsko
            </p>

            <h1 className="ek-h1">
              Revize elektro,
              <br />
              která obstojí
              <br />
              <span className="ek-h1__hi">při kontrole i&nbsp;pojistné události.</span>
            </h1>

            <p className="ek-lede">
              Změříme, prohlédneme a sepíšeme revizní zprávu na elektroinstalaci,
              hromosvod, stroje i&nbsp;spotřebiče. Najdeme závadu, opravíme ji
              a&nbsp;dáme vám papír, který platí. Když hoří termín kolaudace,
              přijedeme.
            </p>

            <div className="ek-hero__actions">
              <a className="ek-btn ek-btn--solid" href="tel:+420731251241">
                Zavolat 731&nbsp;251&nbsp;241
              </a>
              <a className="ek-btn ek-btn--ghost" href="mailto:info@elektroinstalace-klir-plzen.cz">
                Napsat na e-mail
              </a>
            </div>

            <p className="ek-hero__note">
              <strong>Non-stop pohotovost</strong> Plzeň — Klatovy a okolí. Vyrazila pojistka celého bytu? Volejte.
            </p>
          </div>

          <div className="ek-hero__media">
            <img
              className="ek-hero__img"
              src="/hero.webp"
              alt="Revizní technik při měření rozvaděče elektroinstalace"
              loading="eager"
              width={720}
              height={900}
            />
            <div className="ek-tag" aria-hidden="true">
              <span className="ek-tag__k">Výsledek revize</span>
              <span className="ek-tag__v">Schopno bezpečného provozu</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: CO MĚŘÍME A DĚLÁME ===== */}
      <section className="ek-sec ek-sec--work" aria-labelledby="prace-nadpis">
        <div className="ek-sec__head">
          <p className="ek-eyebrow ek-eyebrow--dark">Co pro vás uděláme</p>
          <h2 id="prace-nadpis" className="ek-h2">
            Od revizní zprávy po výkop pro přípojku — jeden dodavatel.
          </h2>
        </div>

        <ol className="ek-cards">
          <li className="ek-card">
            <span className="ek-card__no" aria-hidden="true">01</span>
            <h3 className="ek-card__t">Revize elektro</h3>
            <p className="ek-card__p">
              Revize elektroinstalací, hromosvodů, strojního zařízení, spotřebičů
              i&nbsp;ručního nářadí. Změříme, sepíšeme zprávu a&nbsp;rovnou
              odstraníme zjištěné závady, ať nemusíte shánět druhou firmu.
            </p>
            <ul className="ek-card__list">
              <li>Výchozí i&nbsp;pravidelné revize</li>
              <li>Hromosvody a&nbsp;uzemnění</li>
              <li>Spotřebiče a&nbsp;nářadí pro firmy</li>
            </ul>
          </li>

          <li className="ek-card">
            <span className="ek-card__no" aria-hidden="true">02</span>
            <h3 className="ek-card__t">Elektroinstalace &amp; montáže</h3>
            <p className="ek-card__p">
              Veškeré elektroinstalační a&nbsp;elektromontážní práce od zásuvky
              po rozvaděč. Zvládneme i&nbsp;související stavební, SDK
              a&nbsp;vodoinstalační dokončení, aby po nás nezůstala
              rozkopaná zeď.
            </p>
            <ul className="ek-card__list">
              <li>Nové rozvody i&nbsp;rekonstrukce</li>
              <li>Rozvaděče a&nbsp;jištění</li>
              <li>Havarijní servis — Non-Stop</li>
            </ul>
          </li>

          <li className="ek-card">
            <span className="ek-card__no" aria-hidden="true">03</span>
            <h3 className="ek-card__t">Zemní práce minibagrem</h3>
            <p className="ek-card__p">
              Výkopy pro přípojky elektro a&nbsp;vody minibagrem. Projede
              průjezdem širokým 80&nbsp;cm, takže se dostane i&nbsp;tam, kde
              by velký stroj neprojel.
            </p>
            <ul className="ek-card__list">
              <li>Lžíce 20, 30 a&nbsp;svahová 60&nbsp;cm</li>
              <li>Hloubka výkopu až 1&nbsp;m</li>
              <li>Pro menší objemy a&nbsp;stísněná místa</li>
            </ul>
          </li>
        </ol>

        <div className="ek-work__media">
          <figure className="ek-figure">
            <img
              src="/section-1.webp"
              alt="Zapojený rozvaděč po dokončené elektroinstalaci"
              loading="lazy"
              width={640}
              height={440}
            />
            <figcaption className="ek-figure__cap">Rozvaděč připravený na výchozí revizi.</figcaption>
          </figure>
          <figure className="ek-figure">
            <img
              src="/section-2.webp"
              alt="Minibagr při výkopu rýhy pro elektro přípojku"
              loading="lazy"
              width={640}
              height={440}
            />
            <figcaption className="ek-figure__cap">Výkop pro přípojku v&nbsp;úzkém průjezdu.</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / JAK TO PROBÍHÁ ===== */}
      <section className="ek-sec ek-sec--trust" aria-labelledby="duvera-nadpis">
        <div className="ek-trust__grid">
          <div className="ek-trust__lead">
            <p className="ek-eyebrow">Proč Klír</p>
            <h2 id="duvera-nadpis" className="ek-h2 ek-h2--light">
              Papír od nás projde. A&nbsp;stojí za ním člověk, který to i&nbsp;opraví.
            </h2>
            <p className="ek-trust__p">
              Děláme revize a&nbsp;elektroinstalace na Plzeňsku a&nbsp;Klatovsku.
              Nepracujeme přes call centrum — domluvíte se přímo s&nbsp;technikem,
              který k&nbsp;vám přijede. Revizní zprávu dostanete čitelnou a&nbsp;úplnou,
              ať už ji potřebujete ke kolaudaci, pro pojišťovnu, nebo pro klid v&nbsp;duši.
            </p>
            <a className="ek-btn ek-btn--solid" href="tel:+420731251241">
              Domluvit termín revize
            </a>
          </div>

          <ol className="ek-steps">
            <li className="ek-step">
              <span className="ek-step__no">1</span>
              <div>
                <h3 className="ek-step__t">Zavoláte, popíšete objekt</h3>
                <p className="ek-step__p">Byt, dům, dílna nebo hromosvod — řekneme rovnou, co bude potřeba a&nbsp;kdy dorazíme.</p>
              </div>
            </li>
            <li className="ek-step">
              <span className="ek-step__no">2</span>
              <div>
                <h3 className="ek-step__t">Změříme a&nbsp;prohlédneme</h3>
                <p className="ek-step__p">Projdeme rozvody, jištění, uzemnění i&nbsp;spotřebiče. Závadu vám ukážeme na místě.</p>
              </div>
            </li>
            <li className="ek-step">
              <span className="ek-step__no">3</span>
              <div>
                <h3 className="ek-step__t">Odstraníme závady</h3>
                <p className="ek-step__p">Co lze opravit hned, spravíme na místě. Nemusíte volat další firmu.</p>
              </div>
            </li>
            <li className="ek-step">
              <span className="ek-step__no">4</span>
              <div>
                <h3 className="ek-step__t">Dostanete revizní zprávu</h3>
                <p className="ek-step__p">Úplný dokument, který obstojí u&nbsp;kontroly, pojišťovny i&nbsp;kolaudace.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="ek-facts">
          <div className="ek-fact">
            <span className="ek-fact__k">Působnost</span>
            <span className="ek-fact__v">Plzeň · Klatovy · okolí</span>
          </div>
          <div className="ek-fact">
            <span className="ek-fact__k">Havárie</span>
            <span className="ek-fact__v">Non-Stop pohotovost</span>
          </div>
          <div className="ek-fact">
            <span className="ek-fact__k">Revize</span>
            <span className="ek-fact__v">Instalace · hromosvody · stroje · nářadí</span>
          </div>
        </div>
      </section>
    </main>
  );
}
