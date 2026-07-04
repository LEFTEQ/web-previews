import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      name: "Lakování a přelakování",
      desc: "Odstín namícháme na míru přímo pod barvu vašeho vozu. Bezprašná lakovací kabina, čirý lak, sušení řízenou teplotou — bez šrámů, bez pomerančové kůry.",
    },
    {
      code: "02",
      name: "Karosářské a crash centrum",
      desc: "Rovnání na certifikované rámovací stolici, výměna dílů, měření geometrie karoserie. Vůz po nehodě vrátíme do původní tolerance — ne jen na oko.",
    },
    {
      code: "03",
      name: "Změna barvy a PPF fólie",
      desc: "Celozměna odstínu nebo ochranná průhledná fólie na kapotu i celý vůz. Lak pod fólií zůstane jako nový roky po odjezdu z Chotíkova.",
    },
    {
      code: "04",
      name: "Autoservis, 3D geometrie, pneu",
      desc: "Diagnostika, 3D geometrie náprav, přezutí a uskladnění pneu. Po dobu opravy máte k dispozici náhradní vůz — nezůstanete bez auta.",
    },
  ];

  return (
    <main className="lr">
      <header className="lr-nav">
        <a className="lr-mark" href="#top" aria-label="Lak Racing, domů">
          <span className="lr-mark__lak">LAK</span>
          <span className="lr-mark__racing">RACING</span>
          <span className="lr-mark__dot" aria-hidden="true" />
        </a>
        <span className="lr-nav__place">Chotíkov u Plzně</span>
      </header>

      <section className="lr-hero" id="top">
        <div className="lr-hero__media">
          <img
            src="/hero.webp"
            alt="Vůz v bezprašné lakovací kabině Lak Racing během finálního nástřiku laku"
            className="lr-hero__img"
            width={1600}
            height={1000}
          />
          <div className="lr-hero__scrim" aria-hidden="true" />
        </div>

        <div className="lr-hero__body">
          <p className="lr-hero__eyebrow">Autolakovna &amp; crash centrum · od roku v Chotíkově</p>
          <h1 className="lr-hero__title">
            <span className="lr-hero__line">Odstín,</span>
            <span className="lr-hero__line lr-hero__line--em">který sedne</span>
            <span className="lr-hero__line">na první nástřik.</span>
          </h1>
          <p className="lr-hero__lead">
            Míchání barvy pod váš lak, karosářské rovnání a PPF fólie pod jednou
            střechou. Přivezete auto po nehodě nebo s chutí na novou barvu — odjíždíte
            s prací, kterou nepoznáte od originálu.
          </p>

          <dl className="lr-swatch">
            <div className="lr-swatch__row">
              <div className="lr-swatch__chip" style={chip("#C41E1E")} aria-hidden="true" />
              <dt className="lr-swatch__code">RAL 3020</dt>
              <dd className="lr-swatch__name">nastříkáno včera, kapota Octavie</dd>
            </div>
            <div className="lr-swatch__row">
              <div className="lr-swatch__chip" style={chip("#1A1F2B")} aria-hidden="true" />
              <dt className="lr-swatch__code">Metalíza</dt>
              <dd className="lr-swatch__name">celozměna barvy, sedan po nehodě</dd>
            </div>
          </dl>

          <a className="lr-cta" href="tel:+420377320787">
            Zavolat do lakovny
            <span className="lr-cta__num">377 320 787</span>
          </a>
        </div>
      </section>

      <section className="lr-services" aria-labelledby="sv">
        <div className="lr-services__head">
          <h2 className="lr-h2" id="sv">Co u nás vyřešíte</h2>
          <p className="lr-h2__sub">
            Od jednoho škrábance po kompletní opravu vozu po nehodě. Vše na jedné adrese,
            s náhradním vozem po dobu práce.
          </p>
        </div>

        <ol className="lr-list">
          {services.map((s) => (
            <li className="lr-item" key={s.code}>
              <span className="lr-item__code" aria-hidden="true">{s.code}</span>
              <div className="lr-item__text">
                <h3 className="lr-item__name">{s.name}</h3>
                <p className="lr-item__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="lr-figure">
          <img
            src="/section-1.webp"
            alt="Detail práce v lakovně Lak Racing — příprava povrchu karoserie před nástřikem"
            className="lr-figure__img"
            width={1400}
            height={900}
          />
          <figcaption className="lr-figure__cap">
            Příprava povrchu — 80 % kvality laku vzniká ještě před tím, než se sáhne po pistoli.
          </figcaption>
        </figure>
      </section>

      <section className="lr-trust" aria-labelledby="tr">
        <div className="lr-trust__grid">
          <div className="lr-trust__media">
            <img
              src="/section-2.webp"
              alt="Hotový vůz opravený a nalakovaný v Lak Racing připravený k předání zákazníkovi"
              className="lr-trust__img"
              width={1200}
              height={1400}
            />
          </div>

          <div className="lr-trust__body">
            <h2 className="lr-h2" id="tr">Proč vám vůz svěří i pojišťovny</h2>
            <p className="lr-trust__lead">
              Jsme certifikované crash centrum v Chotíkově u Plzně. Pracujeme pro devatenáct
              smluvních partnerů a za sebou máme tisíce vozů, které odjely jako nové. Kvalitu
              nesoudíte podle slibu, ale podle spár a lesku — a ty u nás sedí.
            </p>

            <div className="lr-facts">
              <div className="lr-fact">
                <span className="lr-fact__k">19</span>
                <span className="lr-fact__v">smluvních partnerů a pojišťoven</span>
              </div>
              <div className="lr-fact">
                <span className="lr-fact__k">15 000+</span>
                <span className="lr-fact__v">opravených a nalakovaných vozů</span>
              </div>
              <div className="lr-fact">
                <span className="lr-fact__k">Náhradní vůz</span>
                <span className="lr-fact__v">po celou dobu opravy zdarma</span>
              </div>
            </div>

            <address className="lr-info">
              <p><strong>Lak Racing s.r.o.</strong> — Chotíkov 500, 330 17 Chotíkov</p>
              <p>Po–Čt 7:00–17:00 · Pá 7:00–15:00</p>
              <p>
                <a href="tel:+420377320787">377 320 787</a> ·{" "}
                <a href="mailto:info@lakracing.cz">info@lakracing.cz</a>
              </p>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}

function chip(color: string): CSSProperties {
  return { background: color };
}
