import { AiImage } from "./_ui";

export default function Page() {
  return (
    <main className="page">
      {/* ============ HERO ============ */}
      <header className="hero">
        <svg
          className="streams streams--hero"
          viewBox="0 0 1440 760"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <path
              id="fl-hero"
              d="M1560 70 C 1050 70 940 250 560 250 S 90 380 -100 380"
              pathLength={100}
            />
          </defs>
          <g className="fl-group">
            <use href="#fl-hero" className="fl" transform="translate(0 -60)" />
            <use href="#fl-hero" className="fl" transform="translate(0 -30)" />
            <use href="#fl-hero" className="fl fl--cyan" transform="translate(0 0)" />
            <use href="#fl-hero" className="fl" transform="translate(0 30)" />
            <use href="#fl-hero" className="fl" transform="translate(0 60)" />
            <use href="#fl-hero" className="fl" transform="translate(0 90)" />
            <use href="#fl-hero" className="fl fl--copper" transform="translate(0 120)" />
            <use href="#fl-hero" className="fl" transform="translate(0 150)" />
          </g>
          <rect className="duct" x={1428} y={0} width={12} height={760} />
        </svg>

        <div className="wrap hero__top">
          <a className="wm" href="#" aria-label="JM Klima, domů">
            <span className="wm__mark">JM</span>
            <span className="wm__name">Klima</span>
          </a>
          <span className="wm__tag">Vzduchotechnika · Brno</span>
        </div>

        <div className="wrap hero__grid">
          <div className="hero__body">
            <p className="eyebrow eyebrow--onlight">VZT-00 · Brno a jižní Morava</p>
            <h1 className="hero__title">
              Vzduch, který jde <em>přesně</em> tam, kam má.
            </h1>
            <p className="hero__lead">
              Navrhujeme a stavíme vzduchotechniku, klimatizace a tepelná
              čerpadla pro haly, kanceláře, obchody i rodinné domy. Čerstvý
              vzduch bez průvanu a bez zbytečného hluku — a spočítaná spotřeba.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420702099066">
                Zavolat 702 099 066
              </a>
              <a className="btn btn--ghost" href="#sluzby">
                Naše řešení
              </a>
            </div>
          </div>

          <aside className="hero__spec" aria-label="Kontaktní údaje">
            <dl className="spec">
              <div className="spec__row">
                <dt>Působnost</dt>
                <dd>Brno · jižní Morava</dd>
              </div>
              <div className="spec__row">
                <dt>Sídlo</dt>
                <dd>Tyršova 258, Modřice</dd>
              </div>
              <div className="spec__row">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420702099066">+420 702 099 066</a>
                </dd>
              </div>
              <div className="spec__row">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:danek@jmklima.cz">danek@jmklima.cz</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Tři obory, jeden rozvod vzduchu</p>
            <h2 className="section__title" id="sluzby-h">
              Kompletní řešení — od návrhu po servis
            </h2>
          </div>

          <ol className="cards">
            <li className="card">
              <span className="card__tag">VZT-01</span>
              <h3 className="card__title">Vzduchotechnika</h3>
              <p className="card__text">
                Rozvody, rekuperace a odvětrání pro výrobní haly, kanceláře i
                provozy. Přivádíme čerstvý vzduch a odvádíme zatížený —
                vyvážené, tiché a spočítané na konkrétní prostor.
              </p>
            </li>

            <li className="card">
              <span className="card__tag">KLI-02</span>
              <h3 className="card__title">Klimatizace</h3>
              <p className="card__text">
                Split i multisplit jednotky, chlazení obchodů, serveroven a
                kanceláří od ověřených výrobců. Stabilní teplota po celý rok a
                nízká spotřeba, kterou zákazník pozná na účtu.
              </p>
            </li>

            <li className="card card--fork">
              <span className="card__tag">TČ-03</span>
              <h3 className="card__title">Tepelná čerpadla</h3>
              <p className="card__text">
                Systémy vzduch–voda i vzduch–vzduch pro domy i komerční objekty.
                Jeden zdroj topí i chladí — proud vzduchu se dělí na
                <span className="kw kw--cyan"> přívod</span> a
                <span className="kw kw--copper"> zpátečku</span>.
              </p>
              <svg
                className="fork"
                viewBox="0 0 220 130"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path className="fl fl--in" d="M-10 65 H 96" pathLength={100} />
                <path
                  className="fl fl--cyan"
                  d="M96 65 C 140 65 160 26 232 18"
                  pathLength={100}
                />
                <path
                  className="fl fl--copper"
                  d="M96 65 C 140 65 160 104 232 112"
                  pathLength={100}
                />
              </svg>
            </li>
          </ol>
        </div>
      </section>

      {/* ============ PROČ NÁS / DŮVĚRA ============ */}
      <section className="section section--dark" id="onas" aria-labelledby="onas-h">
        <div className="wrap trust">
          <div className="trust__intro">
            <p className="eyebrow eyebrow--onlight">Proč JM Klima</p>
            <h2 className="section__title" id="onas-h">
              Technická firma, na kterou se dá spolehnout
            </h2>
            <p className="trust__lead">
              Ke každé zakázce přistupujeme individuálně — ať jde o rodinný dům,
              nebo komerční objekt. Pracujeme s ověřenými technologiemi,
              držíme domluvené termíny a po předání zůstáváme v kontaktu.
              Realizace máme pro firmy, průmysl i domácnosti na Brněnsku.
            </p>
            <div className="trust__cta">
              <a className="btn btn--primary" href="tel:+420702099066">
                Zavolat 702 099 066
              </a>
              <a className="btn btn--ghost btn--ghost-dark" href="mailto:danek@jmklima.cz">
                Napsat poptávku
              </a>
            </div>
          </div>

          <ul className="pillars">
            <li className="pillar">
              <span className="pillar__no">01</span>
              <h3 className="pillar__title">Řešení na míru</h3>
              <p className="pillar__text">
                Každý projekt navrhujeme podle skutečných potřeb prostoru a
                provozu — ne z katalogu.
              </p>
            </li>
            <li className="pillar">
              <span className="pillar__no">02</span>
              <h3 className="pillar__title">Ověřené technologie</h3>
              <p className="pillar__text">
                Používáme kvalitní systémy renomovaných výrobců, které mají
                v praxi odzkoušenou životnost.
              </p>
            </li>
            <li className="pillar">
              <span className="pillar__no">03</span>
              <h3 className="pillar__title">Dodržení termínů</h3>
              <p className="pillar__text">
                Zakládáme si na spolehlivosti a férovém přístupu — co domluvíme,
                to platí.
              </p>
            </li>
            <li className="pillar">
              <span className="pillar__no">04</span>
              <h3 className="pillar__title">Dlouhodobý servis</h3>
              <p className="pillar__text">
                O systémy pečujeme i po dokončení, aby zákazníkům spolehlivě
                sloužily řadu let.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
