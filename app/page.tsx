import React from "react";

export default function Page() {
  return (
    <main className="ms">
      {/* ===== HERO ===== */}
      <header className="ms-hero">
        <div className="ms-hero__media">
          <img
            src="/hero.webp"
            alt="Bagr s demoličními nůžkami rozebírá betonovou konstrukci na stavbě v Brně"
            className="ms-hero__img"
          />
          <div className="ms-hero__scrim" aria-hidden="true" />
        </div>

        <div className="ms-topbar">
          <a className="ms-wordmark" href="#top" aria-label="Moravostav Brno – úvod">
            <span className="ms-wordmark__mark" aria-hidden="true">
              <span className="ms-wordmark__cut">M</span>
            </span>
            <span className="ms-wordmark__text">
              MORAVOSTAV<span className="ms-wordmark__sub">Brno · demolice</span>
            </span>
          </a>
          <a className="ms-phone" href="tel:+420549128150">549&nbsp;128&nbsp;150</a>
        </div>

        <div className="ms-hero__body" id="top">
          <p className="ms-eyebrow">Bourací práce · Brno a celá ČR · od roku 1992</p>
          <h1 className="ms-hero__title">
            Zbouráme to.
            <br />
            <span className="ms-hero__title-accent">Suť odvezeme. Beton vrátíme jako recyklát.</span>
          </h1>
          <p className="ms-hero__lede">
            Řízené demolice hal, panelů i celých areálů. S vlastní technikou,
            mobilní recyklací a papíry na odpady — od prvního záběru nůžek až po
            uklizenou, srovnanou plochu.
          </p>
          <div className="ms-hero__actions">
            <a className="ms-btn ms-btn--primary" href="tel:+420549128150">
              Zavolat na odhad
            </a>
            <a className="ms-btn ms-btn--ghost" href="#sluzby">
              Co bouráme
            </a>
          </div>

          <dl className="ms-facts">
            <div className="ms-fact">
              <dt>Vlastní technika</dt>
              <dd>Bagry s nůžkami, mobilní drtič, půjčovna v Modřicích</dd>
            </div>
            <div className="ms-fact">
              <dt>Recyklace na místě</dt>
              <dd>Beton a cihlu drtíme přímo na stavbě — bez zbytečných odvozů</dd>
            </div>
            <div className="ms-fact">
              <dt>30+ let na trhu</dt>
              <dd>Nástupce Pozemních staveb Brno, ~120 lidí v profesích</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===== SEKCE 1: SLUŽBY ===== */}
      <section className="ms-sec ms-sec--services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ms-sec__head">
          <p className="ms-sec__eyebrow">Postup bourání</p>
          <h2 className="ms-sec__title" id="sluzby-nadpis">
            Od nůžek k rovné ploše — v jedné partě
          </h2>
          <p className="ms-sec__intro">
            Demolici neděláme na etapy s pěti dodavateli. Přijedeme, rozebereme,
            roztřídíme, podrtíme a odvezeme. Kroky jdou přesně za sebou, jak je
            očíslujeme.
          </p>
        </div>

        <ol className="ms-steps">
          <li className="ms-step">
            <span className="ms-step__num">01</span>
            <h3 className="ms-step__title">Prohlídka a odpojení sítí</h3>
            <p className="ms-step__text">
              Přijedeme na místo, změříme kubaturu, zjistíme přípojky a azbest.
              Vyřídíme ohlášení i souhlas s odstraněním stavby.
            </p>
          </li>
          <li className="ms-step">
            <span className="ms-step__num">02</span>
            <h3 className="ms-step__title">Řízená demolice</h3>
            <p className="ms-step__text">
              Haly, panelové domy, komíny i inženýrské konstrukce. Bagry s
              demoličními nůžkami a kladivy — kontrolovaně, ne odstřelem.
            </p>
          </li>
          <li className="ms-step">
            <span className="ms-step__num">03</span>
            <h3 className="ms-step__title">Recyklace suti na místě</h3>
            <p className="ms-step__text">
              Mobilní drtič rozdrtí beton a cihlu přímo na stavbě. Z odpadu je
              certifikovaný recyklát — méně odvozů, nižší cena.
            </p>
          </li>
          <li className="ms-step">
            <span className="ms-step__num">04</span>
            <h3 className="ms-step__title">Odvoz a předání plochy</h3>
            <p className="ms-step__text">
              Roztříděný materiál odvezeme, plochu srovnáme a předáme čistou —
              připravenou na další výstavbu.
            </p>
          </li>
        </ol>

        <div className="ms-sec1-media">
          <img
            src="/section-1.webp"
            alt="Mobilní drtič zpracovává stavební suť na recyklát na demoliční ploše"
            className="ms-sec1-media__img"
          />
          <p className="ms-sec1-media__cap">
            Recyklační středisko a mobilní drcení — Tyršova 310, Brno-Modřice.
          </p>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O NÁS ===== */}
      <section className="ms-sec ms-sec--trust" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="ms-trust__grid">
          <div className="ms-trust__media">
            <img
              src="/section-2.webp"
              alt="Bourání panelové budovy technikou Moravostav Brno"
              className="ms-trust__img"
            />
          </div>

          <div className="ms-trust__body">
            <p className="ms-sec__eyebrow">Proč zrovna my</p>
            <h2 className="ms-sec__title" id="onas-nadpis">
              Bourat umí kdekdo. My po sobě umíme i uklidit.
            </h2>
            <p className="ms-trust__text">
              MORAVOSTAV Brno vznikl v roce 1992 z Pozemních staveb a dnes patří
              mezi stabilní stavební firmy střední velikosti s působností po celé
              republice. Demolice a recyklaci děláme desítky let — a děláme je
              celé, ne po částech.
            </p>

            <ul className="ms-checks">
              <li>Vlastní bagry, nůžky, kladiva i mobilní drtič — nikoho nesháníme</li>
              <li>Papíry na odpady a certifikát na recyklát v pořádku</li>
              <li>Půjčovna strojů, lešení a bednění hned vedle v Modřicích</li>
            </ul>

            <div className="ms-metrics">
              <div className="ms-metric">
                <span className="ms-metric__num">1992</span>
                <span className="ms-metric__label">na trhu od transformace</span>
              </div>
              <div className="ms-metric">
                <span className="ms-metric__num">~120</span>
                <span className="ms-metric__label">lidí v odborných profesích</span>
              </div>
              <div className="ms-metric">
                <span className="ms-metric__num">celá ČR</span>
                <span className="ms-metric__label">zázemí v Brně-Řečkovicích</span>
              </div>
            </div>

            <div className="ms-contactcard">
              <p className="ms-contactcard__where">
                Maříkova 1899/1, 621&nbsp;00 Brno-Řečkovice
              </p>
              <a className="ms-btn ms-btn--primary" href="tel:+420549128150">
                Zavolat 549&nbsp;128&nbsp;150
              </a>
              <a className="ms-mail" href="mailto:moravostav@moravostav.cz">
                moravostav@moravostav.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
