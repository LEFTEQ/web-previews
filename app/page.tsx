import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      titul: "Tonery a inkousty",
      popis:
        "Originál i kvalitní alternativa pro každou značku. Poradíme, který výnos se vyplatí, a nejžádanější kusy máme skladem v Olomouci k okamžitému vyzvednutí.",
      detail: "HP · Canon · Brother · Epson · Xerox · Kyocera",
    },
    {
      cislo: "02",
      titul: "Tiskárny — prodej i pronájem",
      popis:
        "Vybereme stroj podle toho, kolik reálně tisknete. Multifunkce do kanceláře koupíte, nebo pronajmete i s tonerem a servisem v ceně — platíte za stránku, ne za starosti.",
      detail: "Laser · inkoust · multifunkce · velkoformát",
    },
    {
      cislo: "03",
      titul: "Servis tiskáren a PC",
      popis:
        "Když tiskárna stávkuje, přijedeme, nebo ji spravíme na pobočce. Řešíme i počítače, notebooky, sítě a WiFi po celém regionu.",
      detail: "Olomouc · Prostějov · Vyškov",
    },
    {
      cislo: "04",
      titul: "Tisk a grafika na pobočce",
      popis:
        "Vizitky, letáky, prezentace i barevný tisk z flashky na počkání. Přijďte s podkladem, odejdete s hotovou zakázkou.",
      detail: "Kancelářské potřeby · spotřební materiál",
    },
  ];

  return (
    <main className="tm">
      <header className="tm-top">
        <a className="tm-logo" href="#" aria-label="Tonermarket, domů">
          <span className="tm-logo-mark" aria-hidden="true">
            <span className="tm-drop" />
          </span>
          <span className="tm-logo-text">
            Toner<span className="tm-logo-accent">market</span>
          </span>
        </a>
        <nav className="tm-nav" aria-label="Hlavní">
          <a href="#sluzby">Nabídka</a>
          <a href="#duvera">O nás</a>
          <a className="tm-nav-cta" href="tel:+420777302677">Zavolat</a>
        </nav>
      </header>

      <section className="tm-hero" aria-labelledby="hero-nadpis">
        <div className="tm-hero-copy">
          <p className="tm-eyebrow">Tiskárna &amp; e-shop · Olomouc</p>
          <h1 id="hero-nadpis">
            Aby vám<br />
            <span className="tm-hero-big">nedošel</span><br />
            toner.
          </h1>
          <p className="tm-hero-lead">
            Tonery, tiskárny a servis pro kanceláře v Olomouci, Prostějově a
            Vyškově. Poradíme podle toho, kolik opravdu tisknete — a co je
            skladem, vyzvednete ještě dnes.
          </p>
          <div className="tm-hero-actions">
            <a className="tm-btn" href="tel:+420777302677">
              Zavolat 777 302 677
            </a>
            <a className="tm-btn tm-btn-ghost" href="#sluzby">
              Prohlédnout nabídku
            </a>
          </div>
          <dl className="tm-hero-meta">
            <div>
              <dt>Prodejna &amp; servis</dt>
              <dd>Šmerdova 973/4, Olomouc</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8:00–17:00</dd>
            </div>
          </dl>
        </div>
        <figure className="tm-hero-media">
          <img
            src="/hero.webp"
            alt="Regály s tonery a kancelářskými tiskárnami na prodejně Tonermarket v Olomouci"
            loading="eager"
          />
          <figcaption className="tm-hero-tag">
            <span className="tm-hero-tag-num">CMYK</span>
            <span>Skladem &amp; k vyzvednutí</span>
          </figcaption>
        </figure>
      </section>

      <section id="sluzby" className="tm-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="tm-section-head">
          <p className="tm-eyebrow">Co u nás pořídíte</p>
          <h2 id="sluzby-nadpis">
            Čtyři věci, kvůli kterým se k nám vracíte
          </h2>
        </div>
        <ol className="tm-grid">
          {sluzby.map((s) => (
            <li key={s.cislo} className="tm-card">
              <span className="tm-card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3>{s.titul}</h3>
              <p>{s.popis}</p>
              <p className="tm-card-detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="duvera" className="tm-duvera" aria-labelledby="duvera-nadpis">
        <figure className="tm-duvera-media">
          <img
            src="/section-1.webp"
            alt="Technik Tonermarket při servisu kancelářské multifunkční tiskárny"
            loading="lazy"
          />
        </figure>
        <div className="tm-duvera-copy">
          <p className="tm-eyebrow">Proč Tonermarket</p>
          <h2 id="duvera-nadpis">
            Kamenná prodejna, kde je za pultem někdo, kdo tiskárnám rozumí
          </h2>
          <p className="tm-duvera-lead">
            Nejsme anonymní krabice na internetu. Pobočky máme v Olomouci,
            Prostějově a Vyškově — přijedete, ukážete model tiskárny a odejdete
            se správným tonerem. Když se něco pokazí, servis vyřídíme sami.
          </p>
          <ul className="tm-list">
            <li>
              <strong>Poradíme rovnou</strong>
              Řekněte značku a model, my víme, co sedne — bez zkoušení naslepo.
            </li>
            <li>
              <strong>Pronájem s tonerem v ceně</strong>
              Multifunkci si můžete pronajmout včetně spotřebního materiálu a
              servisu. Platíte za stránku.
            </li>
            <li>
              <strong>Servis po celém regionu</strong>
              Tiskárny, počítače, sítě i WiFi — Olomouc, Prostějov, Vyškov.
            </li>
          </ul>
          <div className="tm-kontakty">
            <a className="tm-kontakt" href="tel:+420777302677">
              <span className="tm-kontakt-role">Tiskárny &amp; prodej</span>
              <span className="tm-kontakt-num">+420 777 302 677</span>
              <span className="tm-kontakt-time">8:00–17:00</span>
            </a>
            <a className="tm-kontakt" href="tel:+420777302678">
              <span className="tm-kontakt-role">Servis PC &amp; sítě</span>
              <span className="tm-kontakt-num">+420 777 302 678</span>
              <span className="tm-kontakt-time">9:00–18:00</span>
            </a>
          </div>
          <figure className="tm-duvera-media tm-duvera-media-sec">
            <img
              src="/section-2.webp"
              alt="Prodejna Tonermarket s kancelářskými potřebami a spotřebním materiálem"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
