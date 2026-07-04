import React from "react";

const services = [
  {
    kod: "FVE",
    nazev: "Fotovoltaika na klíč",
    popis:
      "Od návrhu po revizi. Panely, měnič, kabeláž i papíry vyřídíme za vás — dorazíte domů a svítí to.",
    detail: "3–12 kWp · montáž za 1–2 dny",
  },
  {
    kod: "AKU",
    nazev: "Baterie a ukládání",
    popis:
      "Přebytky z poledne si necháte na večer. Navrhneme kapacitu na vaši reálnou spotřebu, ne na katalog.",
    detail: "5–20 kWh · záloha při výpadku",
  },
  {
    kod: "TČ",
    nazev: "Tepelné čerpadlo",
    popis:
      "Elektřinu ze střechy proměníme v teplo. Topení a ohřev vody spřáhneme s výrobou panelů.",
    detail: "vzduch–voda · řízení podle výroby",
  },
  {
    kod: "SRV",
    nazev: "Servis a dohled",
    popis:
      "Převzali jsme péči o zákazníky SOLARENVI. Voláte jedno číslo, přijedeme, opravíme.",
    detail: "monitoring 24/7 · výjezd po Třeboňsku",
  },
];

export default function Page() {
  return (
    <main className="sf">
      <header className="sf-top">
        <a className="sf-mark" href="#" aria-label="SolarEnvi, domů">
          <span className="sf-mark-solar">solar</span>
          <span className="sf-mark-envi">envi</span>
          <span className="sf-mark-dot" aria-hidden="true"></span>
        </a>
        <p className="sf-loc">Dukelská 145 · Třeboň</p>
      </header>

      <section className="sf-hero">
        <div className="sf-hero-media">
          <img
            src="/hero.webp"
            alt="Fotovoltaické panely na střeše rodinného domu na Třeboňsku"
            className="sf-hero-img"
          />
          <div className="sf-hero-grid" aria-hidden="true"></div>
        </div>

        <div className="sf-hero-copy">
          <p className="sf-eyebrow">Fotovoltaika z Třeboně · od roku pod jednou střechou</p>
          <h1 className="sf-h1">
            Střecha, která
            <br />
            <span className="sf-h1-accent">vydělává za bílého dne.</span>
          </h1>
          <p className="sf-lead">
            Postavíme vám fotovoltaiku, která pokryje spotřebu domu i tepelné
            čerpadlo. Přebytky uložíme do baterie na večer. A když se něco
            pokazí, jsme půl hodiny cesty daleko.
          </p>

          <div className="sf-hero-actions">
            <a className="sf-btn sf-btn-primary" href="tel:+420722915436">
              Nezávazně spočítat úsporu
            </a>
            <a className="sf-btn sf-btn-ghost" href="mailto:info@solarflux.cz">
              Napsat na info@solarflux.cz
            </a>
          </div>

          <dl className="sf-meter" aria-label="Typická domácí elektrárna">
            <div className="sf-meter-cell">
              <dt>Poledne</dt>
              <dd className="sf-meter-hi">panel dodává</dd>
            </div>
            <div className="sf-meter-cell">
              <dt>Odpoledne</dt>
              <dd>baterie nabíjí</dd>
            </div>
            <div className="sf-meter-cell">
              <dt>Večer</dt>
              <dd className="sf-meter-hi">dům bere z baterie</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sf-services" aria-labelledby="sf-services-h">
        <div className="sf-sec-head">
          <p className="sf-eyebrow">Co pro vás uděláme</p>
          <h2 id="sf-services-h" className="sf-h2">
            Čtyři kusy jedné skládačky.
          </h2>
          <p className="sf-sec-note">
            Panely, baterie, teplo a servis navrhujeme jako jeden systém — proto
            si spolu opravdu povídají.
          </p>
        </div>

        <ol className="sf-cards">
          {services.map((s) => (
            <li key={s.kod} className="sf-card">
              <span className="sf-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="sf-card-nazev">{s.nazev}</h3>
              <p className="sf-card-popis">{s.popis}</p>
              <p className="sf-card-detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sf-trust" aria-labelledby="sf-trust-h">
        <div className="sf-trust-media">
          <img
            src="/section-1.webp"
            alt="Montér SolarEnvi při instalaci panelů na střeše"
            className="sf-trust-img"
          />
        </div>

        <div className="sf-trust-copy">
          <p className="sf-eyebrow">Proč zrovna my</p>
          <h2 id="sf-trust-h" className="sf-h2">
            Firma z jihu Čech, ne call centrum z tabulky.
          </h2>
          <p className="sf-sec-note">
            SolarEnvi vyrostlo v Třeboni a odsud taky vyjíždíme na montáže i
            servisy. Péči o zákazníky dnes vedeme společně se SOLARFLUX — jedno
            telefonní číslo, jedni lidé, kteří vaši elektrárnu znají.
          </p>

          <ul className="sf-facts">
            <li>
              <span className="sf-fact-hi">Vlastní montéři</span> — na střeše
              nikdo, koho vidíte poprvé.
            </li>
            <li>
              <span className="sf-fact-hi">Revize a dotace</span> — Novou zelenou
              úsporám vyřídíme za vás.
            </li>
            <li>
              <span className="sf-fact-hi">Servis po telefonu</span> — voláte
              722 915 436, ne anonymní linku.
            </li>
          </ul>

          <figure className="sf-quote">
            <img
              src="/section-2.webp"
              alt="Rozvaděč s měničem a bateriovým úložištěm domácí fotovoltaiky"
              className="sf-quote-img"
            />
            <blockquote>
              „Přijeli, změřili spotřebu a navrhli baterku přesně na naši
              rodinu. Za rok jsme dobírali ze sítě jen v zimě.“
            </blockquote>
            <figcaption>Domácnost 6 kWp · Třeboň, Břilice</figcaption>
          </figure>

          <a className="sf-btn sf-btn-primary sf-btn-visit" href="tel:+420722915436">
            Objednat termín návštěvy
          </a>
        </div>
      </section>
    </main>
  );
}
