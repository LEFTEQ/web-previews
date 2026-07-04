import type { CSSProperties } from "react";

export default function Page() {
  const skladem = [
    {
      model: "Honda ZR-V 2.0 e:HEV",
      spec: "135 kW · Elegance · hybrid",
      cena: "799 900 Kč",
      puvodni: "932 700 Kč",
      usetri: "132 800 Kč",
      stav: "Skladem v Pardubicích",
    },
    {
      model: "Honda CR-V 2.0 e:PHEV RED",
      spec: "Plug-in · 360° kamery · 12× airbag",
      cena: "1 224 900 Kč",
      puvodni: "1 407 700 Kč",
      usetri: "182 800 Kč",
      stav: "Na objednání",
    },
    {
      model: "Honda Jazz 1.5 e:HEV",
      spec: "Elegance facelift · hybrid · odpočet DPH",
      cena: "569 900 Kč",
      puvodni: "646 700 Kč",
      usetri: "76 800 Kč",
      stav: "Na objednání",
    },
    {
      model: "Honda Jazz Crosstar 1.5 e:HEV",
      spec: "122 k · vyšší světlá výška · hybrid",
      cena: "634 900 Kč",
      puvodni: "714 700 Kč",
      usetri: "79 800 Kč",
      stav: "Na objednání",
    },
  ];

  const sluzby = [
    {
      idx: "A",
      nadpis: "Ojeté vozy s prověřenou historií",
      text: "Prodej, výkup i komisní prodej. Každý vůz projde naší dílnou dřív, než ho postavíme na plac — dostanete servisní historii, ne slibem.",
      akce: "Prohlédnout ojeté vozy",
    },
    {
      idx: "B",
      nadpis: "Nové Hondy se zárukou 8 let",
      text: "CR-V, ZR-V, Civic, Jazz i Crosstar — skladem nebo na objednání. U hybridů a plug-inů řešíme i možnost odpočtu DPH pro firmy.",
      akce: "Zobrazit skladové vozy",
    },
    {
      idx: "C",
      nadpis: "Autoservis a půjčovna na jednom místě",
      text: "Od běžného seřízení po opravy po havárii. Než vůz opravíme, můžete si u nás krátkodobě i dlouhodobě půjčit náhradní.",
      akce: "Objednat vůz do servisu",
    },
  ];

  return (
    <main className="ad">
      <header className="ad-top">
        <a href="#" className="ad-mark" aria-label="autoDukla Pardubice, domů">
          <span className="ad-mark-auto">auto</span>
          <span className="ad-mark-dukla">DUKLA</span>
        </a>
        <p className="ad-top-meta">Pardubice · Kpt. Nálepky 2674</p>
      </header>

      <section className="ad-hero" aria-labelledby="hero-h">
        <div className="ad-hero-copy">
          <p className="ad-eyebrow">Autobazar &amp; autosalon Honda</p>
          <h1 id="hero-h" className="ad-hero-h">
            <span className="ad-hero-line">Prodáváme vozy</span>
            <span className="ad-hero-line ad-hero-accent">v Pardubicích</span>
            <span className="ad-hero-line ad-hero-since">už 36 let.</span>
          </h1>
          <p className="ad-hero-lede">
            Tři generace řidičů si u nás na Kpt. Nálepky vybraly první i další
            auto. Nové Hondy, prověřené ojetiny, vlastní servis a půjčovna —
            a lidi, které tu potkáte i za deset let.
          </p>
          <div className="ad-hero-cta">
            <a href="#skladem" className="ad-btn ad-btn-solid">Prohlédnout vozy skladem</a>
            <a href="tel:+420777633001" className="ad-btn ad-btn-ghost">
              Zavolat na bazar
            </a>
          </div>
        </div>
        <div className="ad-hero-media">
          <img
            src="/hero.webp"
            alt="Prodejna autoDukla v Pardubicích s vozy Honda"
            className="ad-hero-img"
          />
          <div className="ad-hero-badge">
            <span className="ad-hero-badge-num">36</span>
            <span className="ad-hero-badge-lbl">let na jedné adrese</span>
          </div>
        </div>
      </section>

      <section id="skladem" className="ad-stock" aria-labelledby="stock-h">
        <div className="ad-sec-head">
          <p className="ad-eyebrow">Aktuálně na place</p>
          <h2 id="stock-h" className="ad-sec-h">Vozy se zvýhodněním</h2>
          <p className="ad-sec-note">
            Ceny včetně DPH. U hybridů řešíme odpočet DPH pro firmy — zeptejte se.
          </p>
        </div>

        <ul className="ad-stock-grid">
          {skladem.map((v, i) => (
            <li
              key={v.model}
              className="ad-card"
              style={{ "--d": `${i * 70}ms` } as CSSProperties}
            >
              <div className="ad-card-tag">{v.stav}</div>
              <h3 className="ad-card-model">{v.model}</h3>
              <p className="ad-card-spec">{v.spec}</p>
              <div className="ad-card-price">
                <span className="ad-card-now">{v.cena}</span>
                <span className="ad-card-was">{v.puvodni}</span>
              </div>
              <p className="ad-card-save">Ušetříte {v.usetri}</p>
            </li>
          ))}
        </ul>

        <figure className="ad-stock-fig">
          <img
            src="/section-1.webp"
            alt="Předání vozu Honda zákazníkovi v autobazaru autoDukla"
            className="ad-stock-fig-img"
          />
        </figure>
      </section>

      <section className="ad-trust" aria-labelledby="trust-h">
        <div className="ad-trust-media">
          <img
            src="/section-2.webp"
            alt="Servisní zázemí autoDukla v Pardubicích"
            className="ad-trust-img"
          />
        </div>
        <div className="ad-trust-body">
          <div className="ad-sec-head">
            <p className="ad-eyebrow">Co u nás vyřídíte</p>
            <h2 id="trust-h" className="ad-sec-h">
              Od výběru vozu po servis pod jednou střechou
            </h2>
          </div>
          <ul className="ad-list">
            {sluzby.map((s) => (
              <li key={s.idx} className="ad-list-item">
                <span className="ad-list-idx" aria-hidden="true">{s.idx}</span>
                <div>
                  <h3 className="ad-list-h">{s.nadpis}</h3>
                  <p className="ad-list-p">{s.text}</p>
                  <a href="#" className="ad-list-link">{s.akce} →</a>
                </div>
              </li>
            ))}
          </ul>

          <div className="ad-hours">
            <p className="ad-hours-h">Kdy nás zastihnete</p>
            <dl className="ad-hours-grid">
              <div>
                <dt>Autobazar</dt>
                <dd>Po–Pá 9–17 · So po dohodě</dd>
                <dd className="ad-hours-tel">+420 777 633 001</dd>
              </div>
              <div>
                <dt>Autoservis</dt>
                <dd>Po–Pá 7:30–17 · So zavřeno</dd>
                <dd className="ad-hours-tel">+420 777 794 235</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
