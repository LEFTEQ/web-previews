import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "SVC-01",
      nazev: "Oprava notebooků a počítačů",
      popis:
        "Nestartuje, přehřívá se, modrá obrazovka? Změříme, vyměníme vadný díl a vrátíme stroj v kondici. Servis značkové i sestavené techniky včetně příslušenství.",
      stav: "do 48 h",
    },
    {
      kod: "SVC-02",
      nazev: "Správa sítě a IT outsourcing",
      popis:
        "Pravidelná údržba i okamžitý zásah při havárii. Hlídáme síť lokálně i vzdáleně, ať vaše firma jede bez výpadků a bez vlastního IT oddělení.",
      stav: "24/7",
    },
    {
      kod: "SVC-03",
      nazev: "Počítačové sítě na klíč",
      popis:
        "Od bezplatného auditu přes návrh kabeláže, serveru a prvků až po zabezpečení. Převezmeme i existující síť po předchozím dodavateli.",
      stav: "audit zdarma",
    },
    {
      kod: "SVC-04",
      nazev: "Pronájem počítačů a techniky",
      popis:
        "Krátkodobě i dlouhodobě: PC, notebooky, tiskárny a kancelářská technika. Cenovou nabídku připravíme obratem podle vašeho zadání.",
      stav: "na míru",
    },
  ];

  const partneri = ["Microsoft", "ESET", "Kingston", "Acronis", "Solarix"];

  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#" aria-label="IT-pomoc.cz, domovská stránka">
          <span className="brand-mark" aria-hidden="true">&gt;_</span>
          <span className="brand-name">
            IT&#8209;pomoc<span className="brand-dot">.cz</span>
          </span>
        </a>
        <a className="top-call" href="tel:+420775207725">+420 775 207 725</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" /> Servis IT &middot; Praha a Středočeský kraj
          </p>
          <h1 id="hero-title">
            Počítač zlobí?
            <span className="hero-em">Najdeme příčinu, ne výmluvu.</span>
          </h1>
          <p className="hero-lede">
            Diagnostika zdarma, jasná cena předem a oprava notebooků i počítačů
            zpravidla do 48 hodin. Pro firmy hlídáme celé sítě, aby práce nikdy
            nestála kvůli technice.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420775207725">
              Zavolat technikovi
            </a>
            <a className="btn btn-ghost" href="mailto:info@it-pomoc.cz">
              Napsat, co se děje
            </a>
          </div>
        </div>

        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="Technik IT-pomoc.cz s otevřeným notebookem při diagnostice základní desky"
            className="hero-img"
            loading="eager"
          />
          <figcaption className="diag" aria-label="Stav servisu">
            <span className="diag-row">
              <span className="diag-led ok" aria-hidden="true" /> připojení zabezpečené (HTTPS)
            </span>
            <span className="diag-row">
              <span className="diag-led ok" aria-hidden="true" /> příjem zakázek otevřen
            </span>
            <span className="diag-row">
              <span className="diag-led busy" aria-hidden="true" /> průměrná doba opravy: 1–2 dny
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="sec-head">
          <h2 id="services-title">Co umíme spravit a postavit</h2>
          <p className="sec-note">
            Čtyři okruhy, ve kterých nás v Praze nejčastěji voláte. Každá zakázka
            začíná diagnostikou a končí tím, že stroj zase poslouchá.
          </p>
        </div>

        <ol className="svc-list">
          {sluzby.map((s) => (
            <li className="svc" key={s.kod}>
              <span className="svc-kod">{s.kod}</span>
              <div className="svc-body">
                <h3 className="svc-name">{s.nazev}</h3>
                <p className="svc-desc">{s.popis}</p>
              </div>
              <span className="svc-stav">{s.stav}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <figure className="trust-figure">
          <img
            src="/section-2.webp"
            alt="Pracoviště IT-pomoc.cz se servisovanými počítači a síťovým rozvaděčem"
            className="trust-img"
            loading="lazy"
          />
        </figure>

        <div className="trust-text">
          <h2 id="trust-title">Lidé s certifikáty, ne s šuplíkem náhradních dílů</h2>
          <p>
            Jsme malý pražský tým, který bere techniku osobně. Naši technici mají
            certifikace od předních výrobců a za sebou stovky oprav od domácích
            počítačů po firemní servery. Co slíbíme, to platí — včetně ceny.
          </p>

          <img
            src="/section-1.webp"
            alt="Detail opravy základní desky počítače pinzetou a měřicím přístrojem"
            className="trust-inline-img"
            loading="lazy"
          />

          <dl className="facts">
            <div className="fact">
              <dt>Kde jezdíme</dt>
              <dd>Praha a Středočeský kraj, po ČR po domluvě</dd>
            </div>
            <div className="fact">
              <dt>Audit sítě</dt>
              <dd>zdarma a nezávazně, dřív než cokoli koupíte</dd>
            </div>
            <div className="fact">
              <dt>Reakce při havárii</dt>
              <dd>okamžitý zásah, i mimo pracovní dobu</dd>
            </div>
          </dl>

          <p className="partners-label">Pracujeme s technologiemi</p>
          <ul className="partners">
            {partneri.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
