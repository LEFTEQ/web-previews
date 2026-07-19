import { HazardWipe, Odometer } from "./motion";

export default function Page() {
  return (
    <main className="page">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero__inner wrap">
          <nav className="topbar" aria-label="Hlavní">
            <a className="brand" href="#" aria-label="SPORYDO s.r.o., úvod">
              <span className="brand__mark" aria-hidden="true" />
              <span className="brand__name">
                SPORYDO<span className="brand__ext">s.r.o.</span>
              </span>
            </a>
            <ul className="topbar__nav">
              <li><a href="#nabidka">Co vozíme</a></li>
              <li><a href="#onas">Od roku 1990</a></li>
            </ul>
          </nav>

          <div className="hero__grid">
            <div className="hero__head">
              <p className="eyebrow">Autodoprava · Východní Čechy · Hradec Králové</p>
              <h1 className="hero__title">
                <span className="l1">Spolehlivá,</span>
                <span className="l2">rychlá</span>
                <span className="l3">doprava.</span>
              </h1>
              <p className="hero__lead">
                Od expresní padesátikilové krabice až po výrobní linku na
                osmdesáti kamionech. Jedna z prvních soukromých dopravních firem
                ve východních Čechách — a pořád jezdíme.
              </p>
              <div className="hero__cta">
                <a className="btn btn--solid" href="tel:+420777111222">
                  Zavolat 777 111 222
                </a>
                <a className="btn btn--ghost" href="#nabidka">Co vozíme</a>
              </div>
            </div>

            {/* Motorway direction sign — the firm's world */}
            <aside className="sign" role="img" aria-label="Směrová tabule: naše návěsy jezdí do Německa, Holandska a po celé České republice.">
              <div className="sign__badge">D11</div>
              <p className="sign__head">Kam jezdíme</p>
              <ul className="sign__list">
                <li><span>Německo</span><i className="arw" aria-hidden="true" /></li>
                <li><span>Holandsko</span><i className="arw" aria-hidden="true" /></li>
                <li><span>Celá ČR</span><i className="arw" aria-hidden="true" /></li>
              </ul>
              <p className="sign__foot">Návěsy plachtové i plata · nadrozměr do 21 m</p>
            </aside>
          </div>
        </div>
        <div className="divider" aria-hidden="true" />
      </header>

      {/* ============ SEKCE 1 — CO VOZÍME ============ */}
      <section className="section services" id="nabidka" aria-labelledby="nabidka-h">
        <div className="wrap">
          <p className="eyebrow eyebrow--dark">Naše nabídka</p>
          <h2 className="section__title" id="nabidka-h">
            Žádný náklad pro nás není moc velký ani příliš malý.
          </h2>

          <ul className="cards">
            <li className="card">
              <span className="card__tag">Mezinárodní</span>
              <h3 className="card__title">Zahraniční přepravy</h3>
              <p className="card__text">
                Naše návěsy jezdí po celé Evropě. Specializujeme se hlavně na
                Německo a Holandsko — pravidelně, s přehledem o zásilce.
              </p>
            </li>

            <li className="card">
              <span className="card__tag">Tuzemsko</span>
              <h3 className="card__title">Tuzemské přepravy</h3>
              <p className="card__text">
                Po celé ČR vozíme paletované zboží — potraviny i stavebniny —
                a stejně tak hutní materiál a konstrukce na platových návěsech.
              </p>
            </li>

            <li className="card card--feature">
              <span className="card__stripe" aria-hidden="true" />
              <span className="card__tag card__tag--warn">Nadrozměr · povolení</span>
              <h3 className="card__title">Nadrozměrné přepravy</h3>
              <p className="card__text">
                Část vozového parku má trvalá povolení pro nadrozměr. Speciál
                zvládne náklad dlouhý až 21 metrů — doprovodné vozidlo
                zajistíme.
              </p>
            </li>

            <li className="card">
              <span className="card__tag">Letecké zásilky</span>
              <h3 className="card__title">Letecké přepravy</h3>
              <p className="card__text">
                Jsme certifikovaní pro přepravu leteckých zásilek. Vozíme zboží
                na česká i zahraniční letiště.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ============ SEKCE 2 — OD ROKU 1990 / DŮVĚRA ============ */}
      <section className="section heritage" id="onas" aria-labelledby="onas-h">
        <div className="wrap heritage__head">
          <p className="eyebrow">O nás</p>
          <h2 className="section__title section__title--light" id="onas-h">
            Od roku 1990 vozíme východní Čechy po celé Evropě.
          </h2>
          <p className="heritage__lead">
            Vznikli jsme jako jedna z prvních soukromých dopravních firem ve
            východních Čechách. Za bezmála 35 let jsme přivezli střešní tašky na
            zámek, jeřáb do Pece pod Sněžkou i díly k Temelínu a do Dukovan.
          </p>
        </div>

        {/* Jediný orchestrovaný moment: pruh přejede jako přívěs, za ním se roztočí počítadla */}
        <HazardWipe />

        <div className="wrap counters">
          <div className="counter">
            <span className="counter__num" aria-hidden="true">
              <Odometer value={35} />
            </span>
            <span className="sr-only">Přibližně 35</span>
            <span className="counter__label">let zkušeností</span>
          </div>
          <div className="counter">
            <span className="counter__num" aria-hidden="true">
              <Odometer value={12000} />
              <span className="counter__plus">+</span>
            </span>
            <span className="sr-only">Přes 12 000</span>
            <span className="counter__label">uskutečněných přeprav</span>
          </div>
        </div>

        <div className="wrap heritage__bottom">
          <div className="advantages">
            <h3 className="advantages__title">Proč jezdit s námi</h3>
            <ul className="adv-list">
              <li>Spolehlivost a rychlost dopravy</li>
              <li>Dlouholeté zkušenosti od roku 1990</li>
              <li>Pojištění nákladu až do 10 000 000 Kč</li>
              <li>Příznivé ceny a férová domluva</li>
            </ul>
          </div>

          <div className="refs">
            <h3 className="refs__title">Kde už jsme byli</h3>
            <ul className="ref-list">
              <li>Střešní tašky až na zámek v Rychnově nad Kněžnou</li>
              <li>Jeřáb do Pece pod Sněžkou</li>
              <li>Díly k Temelínu i do Dukovan</li>
              <li>Přesun celé výrobní linky na 80 kamionech</li>
              <li>Větrné elektrárny na pěkná místa v republice</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
