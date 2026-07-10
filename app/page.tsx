import React from "react";

export default function Page() {
  const brands = [
    { name: "AEG", note: "chladicí, pračky, sušičky" },
    { name: "Electrolux", note: "vestavné i volně stojící" },
    { name: "Zanussi", note: "pračky, myčky, trouby" },
  ];

  const steps = [
    {
      no: "01",
      title: "Nahlaste závadu online",
      body:
        "Vyplňte typový štítek spotřebiče, popis problému a adresu v Ostravě a okolí. Formulář vám zabere dvě minuty a máme rovnou vše, co k opravě potřebujeme.",
      cta: "Nahlásit opravu",
    },
    {
      no: "02",
      title: "Ozveme se a domluvíme termín",
      body:
        "Jakmile požadavek zpracujeme, kontaktujeme vás e‑mailem nebo telefonicky a domluvíme návštěvu technika. Prosíme, nevolejte — vše řešíme přes formulář, ať na nikoho nezapomeneme.",
      cta: "Termín potvrdíme my",
    },
    {
      no: "03",
      title: "Opravíme u vás doma",
      body:
        "Technik dorazí s nářadím i běžnými díly a spotřebič opraví na místě. Jsme autorizovaný servis — díly i postup odpovídají tomu, co předepisuje výrobce.",
      cta: "Autorizovaný servis",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Elektroservis Janík, domovská stránka">
          <span className="wm-mark" aria-hidden="true">
            <span className="wm-plug" />
          </span>
          <span className="wm-text">
            <span className="wm-name">Elektroservis Janík</span>
            <span className="wm-sub">Autorizovaný servis · Ostrava</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#znacky">Značky</a>
          <a href="#postup">Jak to probíhá</a>
          <a href="#nahlaseni" className="topnav-cta">Nahlásit opravu</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Technik Elektroservisu Janík opravuje vestavěný spotřebič v ostravské domácnosti"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">Autorizovaný servis · AEG · Electrolux · Zanussi</p>
          <h1 id="hero-title" className="hero-title">
            Když pračka<br />
            <span className="hero-accent">stávkuje,</span>
            <br />přijdeme ji přemluvit.
          </h1>
          <p className="hero-lead">
            Opravy velkých domácích spotřebičů u vás doma v Ostravě a okolí.
            Značky AEG, Electrolux a Zanussi servisujeme přesně podle výrobce —
            se správnými díly a bez improvizace.
          </p>
          <div className="hero-actions">
            <a href="#nahlaseni" className="btn btn-primary">Nahlásit opravu online</a>
            <a href="#postup" className="btn btn-ghost">Jak to probíhá</a>
          </div>

          <dl className="hero-facts">
            <div className="fact">
              <dt>Jen velké spotřebiče</dt>
              <dd>pračky, myčky, trouby, chladničky</dd>
            </div>
            <div className="fact">
              <dt>Objednávky přes formulář</dt>
              <dd>prosíme nevolejte — nezapomeneme na vás</dd>
            </div>
            <div className="fact">
              <dt>Ostrava a okolí</dt>
              <dd>servis přímo u vás doma</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section znacky" id="znacky" aria-labelledby="znacky-title">
        <div className="section-head">
          <p className="section-eyebrow">Co opravujeme</p>
          <h2 id="znacky-title" className="section-title">
            Tři značky, které známe do posledního šroubku
          </h2>
          <p className="section-intro">
            Nesbíráme všechno. Jsme autorizovaní pro tři značky a díky tomu je
            umíme opravit správně napoprvé — máme na ně díly, schémata i cvik.
          </p>
        </div>

        <div className="znacky-grid">
          <figure className="znacky-figure">
            <img
              src="/section-1.webp"
              alt="Otevřená pračka s nářadím připraveným k výměně dílu"
              className="znacky-img"
            />
          </figure>

          <ul className="brand-list">
            {brands.map((b, i) => (
              <li key={b.name} className="brand-item">
                <span className="brand-idx" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="brand-body">
                  <span className="brand-name">{b.name}</span>
                  <span className="brand-note">{b.note}</span>
                </span>
              </li>
            ))}
            <li className="brand-note-line">
              Neprodáváme náhradní díly a neopravujeme malé spotřebiče —
              vysavače, mixéry ani žehličky. Zaměřujeme se na to, co umíme nejlíp.
            </li>
          </ul>
        </div>

        <div className="warranty-note" role="note">
          <strong>Máte spotřebič v záruce?</strong> Volejte call centrum výrobce
          na <a href="tel:+420261302261">261 302 261</a>. Záruční opravy jdou přímo
          přes výrobce — ušetříte tím čas i vám i nám.
        </div>
      </section>

      <section className="section postup" id="postup" aria-labelledby="postup-title">
        <div className="section-head">
          <p className="section-eyebrow">Jak to probíhá</p>
          <h2 id="postup-title" className="section-title">
            Od nahlášení k opravené kuchyni ve třech krocích
          </h2>
          <p className="section-intro">
            Celý servis vedeme přes online formulář, ať se nám žádná objednávka
            neztratí. Tady je přesně to, co vás čeká.
          </p>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li key={s.no} className="step">
              <span className="step-no" aria-hidden="true">{s.no}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
              <span className="step-tag">{s.cta}</span>
            </li>
          ))}
        </ol>

        <div className="trust" id="nahlaseni">
          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Technik Elektroservisu Janík s tabletem zapisuje typový štítek spotřebiče"
              className="trust-img"
            />
          </figure>
          <div className="trust-body">
            <h3 className="trust-title">Elektroservis Janík s.r.o.</h3>
            <p className="trust-text">
              Rodinný autorizovaný servis se sídlem u Ostravy. Jezdíme za zákazníky
              domů, opravujeme přímo na místě a mluvíme normální řečí — bez
              zbytečných termínů a bez naúčtovaných díra do rozpočtu.
            </p>
            <dl className="contact">
              <div>
                <dt>Napište nám</dt>
                <dd><a href="mailto:info@elektroservisjanik.cz">info@elektroservisjanik.cz</a></dd>
              </div>
              <div>
                <dt>Sídlo</dt>
                <dd>Okružní 204, 747 64 Horní Lhota (u Ostravy)</dd>
              </div>
              <div>
                <dt>Firma</dt>
                <dd>IČO 04693337 · DIČ CZ04693337</dd>
              </div>
            </dl>
            <a href="mailto:info@elektroservisjanik.cz" className="btn btn-primary">
              Nahlásit opravu e‑mailem
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
