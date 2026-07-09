import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "P",
      nazev: "Pneuservis",
      popis:
        "Kompletní přezutí osobních i lehkých užitkových vozů — vyvážení, mytí kol i lepení defektů. Sezónu zvládneme, ať přijedete se čtrnáctkami nebo s jednadvacítkami.",
      detail: "Vyvážení · mytí kol · lepení defektů",
    },
    {
      kod: "M",
      nazev: "Mechanické práce",
      popis:
        "Podvozky, brzdy, čepy, tlumiče, ramena. Opravy motorů, výměny rozvodů, přetěsňování i výfuky. Díly seženeme, nebo přijeďte s vlastními.",
      detail: "Brzdy · rozvody · tlumiče · výfuky",
    },
    {
      kod: "D",
      nazev: "Diagnostika",
      popis:
        "Napojíme vůz na OBD, přečteme chyby, smažeme servisní intervaly a najdeme, co vás na palubovce trápí. Bez zbytečného tápání.",
      detail: "OBD · servisní intervaly · chybové kódy",
    },
    {
      kod: "Č",
      nazev: "Čištění interiéru",
      popis:
        "Kompletní čištění interiéru osobních i užitkových aut značkovou autokosmetikou. Nová služba, se kterou odjedete jako z autosalonu.",
      detail: "Značková autokosmetika · osobní i užitkové",
    },
  ];

  const cenik = [
    { s: 'Přezutí + vyvážení 13"', c: "650 Kč", j: "sada" },
    { s: 'Přezutí + vyvážení 15"', c: "850 Kč", j: "sada" },
    { s: 'Přezutí + vyvážení 17"', c: "1 150 Kč", j: "sada" },
    { s: 'Přezutí + vyvážení 19"', c: "1 350 Kč", j: "kus" },
    { s: "Přezutí celých kol + vyvážení", c: "700 Kč", j: "sada" },
    { s: "Lepení pneu", c: "250 Kč", j: "kus" },
    { s: "Mechanické práce", c: "650 Kč", j: "hod." },
    { s: "Diagnostika", c: "500 Kč", j: "úkon" },
    { s: "Sezónní servisní prohlídka", c: "500 Kč", j: "úkon" },
    { s: "Zajištění STK", c: "3 500 Kč", j: "úkon" },
  ];

  return (
    <main className="kp">
      {/* HERO */}
      <header className="kp-hero">
        <nav className="kp-nav" aria-label="Hlavní">
          <a className="kp-mark" href="#top" aria-label="KOPAS Olomouc, úvod">
            <span className="kp-mark-k">KOPAS</span>
            <span className="kp-mark-sub">Olomouc · pneuservis</span>
          </a>
          <a className="kp-nav-tel" href="tel:+420606029077">
            <span className="kp-nav-tel-lbl">Volejte servis</span>
            <span className="kp-nav-tel-num">606&nbsp;029&nbsp;077</span>
          </a>
        </nav>

        <div className="kp-hero-grid" id="top">
          <div className="kp-hero-text">
            <p className="kp-eyebrow">Chválkovice · Jana Koziny 24</p>
            <h1 className="kp-h1">
              Přezout,
              <br />
              <span className="kp-h1-accent">vyvážit,</span>
              <br />
              vyrazit.
            </h1>
            <p className="kp-lead">
              Pneuservis a autoservis, kde vám hned řeknou, co to bude stát.
              Sezónní přezutí, brzdy, diagnostika i mechanika — bez čekání na
              nacenění a bez překvapení na faktuře.
            </p>
            <div className="kp-hero-cta">
              <a className="kp-btn kp-btn-primary" href="tel:+420606029077">
                Zavolat a domluvit termín
              </a>
              <a
                className="kp-btn kp-btn-ghost"
                href="mailto:kopasolomouc@gmail.com"
              >
                Napsat e-mail
              </a>
            </div>
            <dl className="kp-hours">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá&nbsp;8–17</dd>
              </div>
              <div>
                <dt>Příjem vozů</dt>
                <dd>Jana Koziny 537/24, Olomouc</dd>
              </div>
            </dl>
          </div>

          <figure className="kp-hero-figure">
            <img
              src="/hero.webp"
              alt="Přezouvání pneumatiky v pneuservisu KOPAS Olomouc"
              className="kp-hero-img"
              width={880}
              height={1040}
            />
            <figcaption className="kp-hero-tag">
              <span className="kp-hero-tag-dot" aria-hidden="true" />
              Servisní hala Chválkovice
            </figcaption>
          </figure>
        </div>

        {/* tread strip signature */}
        <div className="kp-tread" aria-hidden="true">
          <span>PŘEZUTÍ</span>
          <span className="kp-tread-sep">◦</span>
          <span>BRZDY</span>
          <span className="kp-tread-sep">◦</span>
          <span>DIAGNOSTIKA</span>
          <span className="kp-tread-sep">◦</span>
          <span>MECHANIKA</span>
          <span className="kp-tread-sep">◦</span>
          <span>ČIŠTĚNÍ INTERIÉRU</span>
          <span className="kp-tread-sep">◦</span>
          <span>PŘEZUTÍ</span>
          <span className="kp-tread-sep">◦</span>
          <span>BRZDY</span>
          <span className="kp-tread-sep">◦</span>
          <span>DIAGNOSTIKA</span>
          <span className="kp-tread-sep">◦</span>
          <span>MECHANIKA</span>
          <span className="kp-tread-sep">◦</span>
          <span>ČIŠTĚNÍ INTERIÉRU</span>
          <span className="kp-tread-sep">◦</span>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="kp-sec kp-sec-services" aria-labelledby="sluzby-h">
        <div className="kp-sec-head">
          <h2 id="sluzby-h" className="kp-h2">
            Co u nás vyřešíte
          </h2>
          <p className="kp-sec-intro">
            Od sezónního přezutí po opravu po nehodě. Máme zkušenost se širokou
            paletou vozidel a na každou zakázku dostanete jasnou cenu předem.
          </p>
        </div>

        <div className="kp-services">
          <ul className="kp-cards">
            {sluzby.map((s) => (
              <li className="kp-card" key={s.nazev}>
                <span className="kp-card-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <h3 className="kp-card-h">{s.nazev}</h3>
                <p className="kp-card-p">{s.popis}</p>
                <p className="kp-card-detail">{s.detail}</p>
              </li>
            ))}
          </ul>

          <aside className="kp-cenik" aria-labelledby="cenik-h">
            <div className="kp-cenik-top">
              <h3 id="cenik-h" className="kp-cenik-h">
                Ceník bez oklik
              </h3>
              <p className="kp-cenik-note">Ceny bez DPH · platné od 20.&nbsp;11.&nbsp;2025</p>
            </div>
            <ul className="kp-cenik-list">
              {cenik.map((r) => (
                <li className="kp-cenik-row" key={r.s}>
                  <span className="kp-cenik-s">{r.s}</span>
                  <span className="kp-cenik-c">
                    {r.c}
                    <span className="kp-cenik-j">/{r.j}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a className="kp-btn kp-btn-primary kp-cenik-cta" href="tel:+420606029077">
              Zeptat se na cenu vaší zakázky
            </a>
          </aside>
        </div>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="kp-sec kp-sec-about" aria-labelledby="about-h">
        <div className="kp-about">
          <figure className="kp-about-figs">
            <img
              src="/section-1.webp"
              alt="Mechanik při práci na voze v servisu KOPAS Olomouc"
              className="kp-about-img kp-about-img-a"
              width={720}
              height={860}
            />
            <img
              src="/section-2.webp"
              alt="Detail práce v pneuservisu KOPAS Olomouc"
              className="kp-about-img kp-about-img-b"
              width={520}
              height={520}
            />
          </figure>

          <div className="kp-about-text">
            <p className="kp-eyebrow kp-eyebrow-dark">Váš autoservis v Olomouci</p>
            <h2 id="about-h" className="kp-h2 kp-h2-dark">
              Osobní přístup, jasná cena, žádné mlžení
            </h2>
            <p className="kp-about-p">
              Jsme KOPAS Olomouc — parta, která se o vaše auto postará, ať jde o
              pravidelný servis, sezónní výměnu pneumatik, jednorázovou závadu
              nebo nečekanou opravu po nehodě. Za roky v oboru nám prošla dílnou
              spousta značek a vždycky nám záleží na tom, abyste věděli, co
              platíte a proč.
            </p>

            <ul className="kp-proof">
              <li>
                <strong>Cena předem.</strong> Zakázku naceníme jasně, než
                sáhneme na vůz.
              </li>
              <li>
                <strong>Osobní přístup.</strong> Mluvíte přímo s těmi, kdo auto
                opravují.
              </li>
              <li>
                <strong>Široká paleta vozidel.</strong> Osobní i lehká užitková,
                mnoho značek.
              </li>
            </ul>

            <div className="kp-contact-card">
              <div className="kp-contact-row">
                <span className="kp-contact-lbl">Kde nás najdete</span>
                <span className="kp-contact-val">
                  Jana Koziny 537/24, 779&nbsp;00 Olomouc-Chválkovice
                </span>
              </div>
              <div className="kp-contact-row">
                <span className="kp-contact-lbl">Otevřeno</span>
                <span className="kp-contact-val">Pondělí–pátek, 8.00–17.00</span>
              </div>
              <div className="kp-contact-actions">
                <a className="kp-btn kp-btn-primary" href="tel:+420606029077">
                  Zavolat 606&nbsp;029&nbsp;077
                </a>
                <a className="kp-btn kp-btn-ghost kp-btn-ghost-dark" href="mailto:kopasolomouc@gmail.com">
                  kopasolomouc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
