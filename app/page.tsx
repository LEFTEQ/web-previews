import React from "react";

const kroky = [
  {
    n: "01",
    t: "Návrh a cena — zdarma",
    d: "Přijedeme do bytu, změříme jádro, probereme obklady i dispozici. Do pár dní máte návrh a konkrétní cenu na papíře. Nezávazně.",
  },
  {
    n: "02",
    t: "Papíry vyřídíme za vás",
    d: "Ohlášky, stavební povolení, komunikace se správcem domu i družstvem. Vy jen podepíšete, zbytek je na nás.",
  },
  {
    n: "03",
    t: "Bourání a hrubá práce",
    d: "Staré umakartové jádro ven, nové zděné příčky, rozvody vody a odpadů, elektrika. Denně uklizeno.",
  },
  {
    n: "04",
    t: "Obklady, sanita, finiš",
    d: "Dlažba, obklad, vana nebo sprchový kout, umyvadlo, baterie. Předáváme hotovou koupelnu připravenou k užívání.",
  },
];

const sluzby = [
  "Kompletní rekonstrukce bytových jader",
  "Přestavba umakartového jádra na zděné",
  "Sprchové kouty i vany na míru",
  "Obklady a dlažby dle vašeho výběru",
  "Kuchyně a kuchyňské kouty vč. montáže",
  "Podlahářské práce v celém bytě",
  "Náhradní ubytování po dobu prací",
  "Úvěrové a splátkové financování",
];

export default function Page() {
  return (
    <main className="br-main">
      <header className="br-nav" aria-label="Hlavní">
        <a className="br-logo" href="#" aria-label="Braho, rekonstrukce koupelen Brno">
          <span className="br-logo-mark" aria-hidden="true">▚</span>
          <span className="br-logo-word">Braho</span>
          <span className="br-logo-sub">koupelny&nbsp;/&nbsp;Brno</span>
        </a>
        <a className="br-nav-cta" href="tel:+420774877262">Zavolat: 774&nbsp;877&nbsp;262</a>
      </header>

      <section className="br-hero" aria-labelledby="br-hero-h">
        <div className="br-hero-copy">
          <p className="br-eyebrow">Rekonstrukce koupelen a bytových jader &middot; Brno a okolí</p>
          <h1 id="br-hero-h">
            Ze starého<br />
            <span className="br-hero-em">umakartového jádra</span><br />
            hotová koupelna.
          </h1>
          <p className="br-hero-lede">
            Vybouráme, vyzdíme, obložíme, zapojíme. Cenu i termín znáte předem — návrh děláme zdarma
            a na práci dáváme <strong>pět let záruky</strong>.
          </p>
          <div className="br-hero-actions">
            <a className="br-btn" href="tel:+420774877262">Zavolat a domluvit návrh</a>
            <a className="br-btn br-btn-ghost" href="#sluzby">Co všechno uděláme</a>
          </div>
          <dl className="br-hero-facts">
            <div>
              <dt>Záruka</dt>
              <dd>5 let</dd>
            </div>
            <div>
              <dt>Návrh a cena</dt>
              <dd>zdarma</dd>
            </div>
            <div>
              <dt>Papírování</dt>
              <dd>za vás</dd>
            </div>
          </dl>
        </div>
        <figure className="br-hero-fig">
          <img
            src="/hero.webp"
            alt="Nově zrekonstruovaná koupelna s obklady a sprchovým koutem"
            className="br-hero-img"
            width={900}
            height={1100}
          />
          <figcaption className="br-hero-cap">Bytové jádro po rekonstrukci, Brno-Královo Pole</figcaption>
        </figure>
      </section>

      <section className="br-steps" id="postup" aria-labelledby="br-steps-h">
        <div className="br-sec-head">
          <p className="br-eyebrow">Jak to u nás probíhá</p>
          <h2 id="br-steps-h">Čtyři kroky od prvního měření po hotovo</h2>
        </div>
        <ol className="br-steps-list">
          {kroky.map((k) => (
            <li key={k.n} className="br-step">
              <span className="br-step-n" aria-hidden="true">{k.n}</span>
              <div className="br-step-body">
                <h3>{k.t}</h3>
                <p>{k.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="br-steps-fig">
          <img
            src="/section-1.webp"
            alt="Detail obkladu a dlažby v rekonstruované koupelně"
            width={1200}
            height={800}
          />
        </figure>
      </section>

      <section className="br-trust" id="sluzby" aria-labelledby="br-trust-h">
        <figure className="br-trust-fig">
          <img
            src="/section-2.webp"
            alt="Zrekonstruovaná koupelna s vanou a moderní sanitou"
            width={1200}
            height={900}
          />
        </figure>
        <div className="br-trust-copy">
          <p className="br-eyebrow">Co u nás pořídíte</p>
          <h2 id="br-trust-h">Specializovaná firma na koupelny a bytová jádra</h2>
          <p className="br-trust-lede">
            Proměňujeme byty v brněnských panelácích i cihlových domech. Konečnou cenu si můžete
            spočítat sami dopředu — pak už záleží jen na tom, jaké obklady a sanitu si vyberete.
          </p>
          <ul className="br-services">
            {sluzby.map((s, i) => (
              <li key={i}>
                <span className="br-tick" aria-hidden="true">▚</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="br-trust-note">
            Bydlet v bytě, kde se zrovna bourá jádro, není nic příjemného. Když bude potřeba,
            zařídíme vám na dobu rekonstrukce náhradní ubytování.
          </p>
          <div className="br-trust-contact">
            <span>Ptejte se přímo stavbyvedoucího</span>
            <a href="tel:+420774877262">Ing. Radovan Holek &middot; 774&nbsp;877&nbsp;262</a>
          </div>
        </div>
      </section>
    </main>
  );
}
