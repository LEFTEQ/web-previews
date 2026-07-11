import React from "react";

export default function Page() {
  const checks = [
    {
      code: "P1",
      title: "Chod motoru",
      note: "Benzín, diesel i elektromotor \u2014 kontrola stability chodu, chybové paměti a náplní.",
    },
    {
      code: "P2",
      title: "Úniky provozních kapalin",
      note: "Olej, chladicí a brzdová kapalina \u2014 vyhledáme, kde a proč uniká.",
    },
    {
      code: "P3",
      title: "Brzdová soustava",
      note: "Kotouče, destičky, hadice a píst \u2014 změříme opotřebení, ne odhadneme.",
    },
    {
      code: "P4",
      title: "Podvozek a osvětlení",
      note: "Vůle v čepech, tlumiče, geometrie a funkce všech světel.",
    },
  ];

  const services = [
    {
      no: "01",
      name: "Tesla servis",
      desc: "Opravy vozů Tesla a prodej originálních dílů. Elektromobily jsou u nás doma.",
    },
    {
      no: "02",
      name: "Autoservis a diagnostika",
      desc: "Vyčteme chybové kódy z řídicích jednotek a opravíme vozy všech značek.",
    },
    {
      no: "03",
      name: "Autodoprava do 3,5 t",
      desc: "Přeprava paletových zásilek a balíků z bodu A do bodu B.",
    },
    {
      no: "04",
      name: "Pneuservis",
      desc: "Přezutí na zimní i letní pneu, vyvážení a uskladnění. Sezónu zvládneme.",
    },
  ];

  return (
    <main className="sw">
      <a className="sw-skip" href="#obsah">Přeskočit na obsah</a>

      <header className="sw-top">
        <div className="sw-wordmark" aria-label="SHIFTWOO Garage Ostrava">
          <span className="sw-mark-shift">SHIFT</span>
          <span className="sw-mark-woo">WOO</span>
          <span className="sw-mark-tag">/ Ostrava &middot; Zábřeh</span>
        </div>
        <nav className="sw-nav" aria-label="Hlavní">
          <a href="#diagnostika">Diagnostika</a>
          <a href="#sluzby">Služby</a>
          <a href="#objednat" className="sw-nav-cta">Objednat termín</a>
        </nav>
      </header>

      <section className="sw-hero" id="obsah">
        <div className="sw-hero-media">
          <img
            src="/hero.webp"
            alt="Vůz na diagnostice v dílně SHIFTWOO Garage v Ostravě"
            className="sw-hero-img"
            width={1600}
            height={1000}
          />
          <div className="sw-scan" aria-hidden="true" />
        </div>

        <div className="sw-hero-body">
          <p className="sw-eyebrow">Diagnostika vozidel &middot; Pavlovova 3204/40c</p>
          <h1 className="sw-hero-h">
            Nejdřív<span className="sw-hl"> vyčteme závadu</span>, pak teprve sáhneme po klíči.
          </h1>
          <p className="sw-hero-lead">
            Žádné hádání „mělo by to být tímhle". Připojíme vůz na diagnostiku,
            přečteme chybové kódy z řídicích jednotek a řekneme vám přesně, co
            oprava obnáší &mdash; benzín, diesel i Tesla.
          </p>
          <div className="sw-hero-actions">
            <a href="#objednat" className="sw-btn">Objednat vůz na diagnostiku</a>
            <a href="tel:+420737101001" className="sw-btn-ghost">+420 737 101 001</a>
          </div>

          <dl className="sw-readout" aria-label="Rychlé informace">
            <div>
              <dt>OBD</dt>
              <dd>Čtení chyb všech značek</dd>
            </div>
            <div>
              <dt>EV</dt>
              <dd>Tesla servis &amp; díly</dd>
            </div>
            <div>
              <dt>Po&ndash;Pá</dt>
              <dd>9:00&ndash;15:00, so po domluvě</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sw-section" id="diagnostika">
        <div className="sw-sec-head">
          <p className="sw-eyebrow">Prohlídka vozidla</p>
          <h2 className="sw-h2">Co při opravě projedeme bod po bodu</h2>
          <p className="sw-sec-lead">
            Když k nám vůz přijede, neděláme jen to, kvůli čemu jste přijeli.
            Projdeme celé auto podle stejného protokolu &mdash; ať víte, na čem
            jste, dřív než něco odejde na cestě.
          </p>
        </div>

        <div className="sw-checklist">
          {checks.map((c) => (
            <article className="sw-check" key={c.code}>
              <span className="sw-check-code">{c.code}</span>
              <h3 className="sw-check-title">{c.title}</h3>
              <p className="sw-check-note">{c.note}</p>
            </article>
          ))}
        </div>

        <figure className="sw-figure">
          <img
            src="/section-1.webp"
            alt="Detail práce na brzdové soustavě v dílně SHIFTWOO"
            width={1400}
            height={900}
          />
          <figcaption>
            Změřené opotřebení brzd &mdash; ne odhad od oka.
          </figcaption>
        </figure>
      </section>

      <section className="sw-section sw-section--alt" id="sluzby">
        <div className="sw-services-grid">
          <div className="sw-services-intro">
            <p className="sw-eyebrow">Kdo jsme &middot; co děláme</p>
            <h2 className="sw-h2">
              Vše kolem aut je naše záliba &mdash; a Ostrava to na nás pozná.
            </h2>
            <p className="sw-sec-lead">
              Servisujeme vozy všech značek, elektromobily Tesla máme v malíčku
              a když je potřeba něco převézt, nasedneme do dodávky. Výměna
              náplní je u nás jen začátek: vůz prohlédneme celý a uvedeme do
              funkčního stavu.
            </p>
            <figure className="sw-figure sw-figure--inline">
              <img
                src="/section-2.webp"
                alt="Vůz Tesla v servisu SHIFTWOO Garage v Ostravě"
                width={1200}
                height={800}
              />
            </figure>
          </div>

          <ol className="sw-services">
            {services.map((s) => (
              <li className="sw-service" key={s.no}>
                <span className="sw-service-no">{s.no}</span>
                <div className="sw-service-text">
                  <h3 className="sw-service-name">{s.name}</h3>
                  <p className="sw-service-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="sw-band" id="objednat">
          <p className="sw-band-lead">
            Máte na palubovce svítící kontrolku nebo divný zvuk? Ozvěte se &mdash;
            určitě najdeme řešení.
          </p>
          <div className="sw-band-actions">
            <a href="tel:+420604924033" className="sw-btn">Zavolat +420 604 924 033</a>
            <a href="mailto:info@shiftwoo.com" className="sw-btn-ghost">info@shiftwoo.com</a>
          </div>
          <p className="sw-band-addr">
            SHIFTWOO Garage &middot; Pavlovova 3204/40c, Ostrava &ndash; Zábřeh
          </p>
        </div>
      </section>
    </main>
  );
}
