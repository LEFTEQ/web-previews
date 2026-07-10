import type { CSSProperties } from "react";

export default function Page() {
  const tel = "736734246";
  const telHref = "tel:+420736734246";
  const mail = "sevcik11@seznam.cz";

  const stroje = [
    {
      kod: "JCB 8026",
      typ: "Pásový minibagr",
      hmotnost: "2,6 t",
      popis: "Úzký podvozek projede brankou i mezi ploty. Ideální na přípojky a práci u domu.",
    },
    {
      kod: "JCB 8045",
      typ: "Pásový bagr",
      hmotnost: "4,5 t",
      popis: "Když je potřeba víc síly — jáma na bazén, větší výkopy, terénní úpravy.",
    },
  ];

  const sluzby = [
    {
      c: "01",
      nadpis: "Výkopy a zemní práce",
      text: "Výkopy přípojek vody, kanalizace a elektřiny, jámy na bazén, základy a terénní úpravy. Bagrem projedeme i tam, kam se velký stroj nedostane.",
      detaily: ["Přípojky", "Základy", "Bazénové jámy", "Terénní úpravy"],
    },
    {
      c: "02",
      nadpis: "Oprava hydraulických válců",
      text: "Kompletní přetěsnění, tlaková zkouška a výroba nových pístnic i obalů do délky 1500 mm. Honování a renovace otvorů na stroji HONING AG GO‑2000, průměry 63–280 mm.",
      detaily: ["Přetěsnění", "Tlaková zkouška", "Nové pístnice", "Honování 63–280 mm"],
    },
    {
      c: "03",
      nadpis: "Soustružnické práce",
      text: "Soustružíme na stroji SUI 50 do délky 1500 mm a průměru 500 mm. Kusová výroba i renovace dílů pro stavební a průmyslové stroje.",
      detaily: ["Soustruh SUI 50", "Délka do 1500 mm", "Průměr do 500 mm"],
    },
  ];

  return (
    <main className="se-main">
      <header className="se-topbar">
        <a className="se-wordmark" href="#" aria-label="Jan Ševčík — zemní práce Ostrava">
          <span className="se-wordmark-name">ŠEVČÍK</span>
          <span className="se-wordmark-sub">zemní práce · Ostrava</span>
        </a>
        <a className="se-topcall" href={telHref}>
          <span className="se-topcall-label">Zavolat</span>
          <span className="se-topcall-num">736 734 246</span>
        </a>
      </header>

      <section className="se-hero" aria-labelledby="se-hero-title">
        <div className="se-hero-media">
          <img
            src="/hero.webp"
            alt="Pásový bagr JCB při výkopových pracích na stavbě v Ostravě"
            className="se-hero-img"
            width={1600}
            height={1000}
          />
          <div className="se-hero-scrim" aria-hidden="true" />
        </div>

        <div className="se-hero-inner">
          <p className="se-hero-eyebrow">Výkopové práce · Ostrava a okolí</p>
          <h1 id="se-hero-title" className="se-hero-title">
            Kopeme tam,
            <br />
            kam se velký
            <br />
            <span className="se-hero-accent">bagr nevejde.</span>
          </h1>
          <p className="se-hero-lead">
            Úzký pásový minibagr projede brankou i mezi ploty. Přípojky, základy,
            jáma na bazén — a když je potřeba, hydraulika i soustružna ve vlastní dílně.
          </p>
          <div className="se-hero-actions">
            <a className="se-btn se-btn-primary" href={telHref}>Zavolat 736 734 246</a>
            <a className="se-btn se-btn-ghost" href={`mailto:${mail}`}>Napsat e‑mail</a>
          </div>
        </div>

        <dl className="se-hero-strip">
          <div className="se-strip-item">
            <dt>Podvozek od</dt>
            <dd>1,0 m<span>šířky</span></dd>
          </div>
          <div className="se-strip-item">
            <dt>Dva bagry</dt>
            <dd>2,6 &amp; 4,5<span>tuny</span></dd>
          </div>
          <div className="se-strip-item">
            <dt>Vlastní dílna</dt>
            <dd>hydraulika<span>&amp; soustružna</span></dd>
          </div>
        </dl>
      </section>

      <section className="se-services" aria-labelledby="se-services-title">
        <div className="se-section-head">
          <p className="se-eyebrow">Co pro vás uděláme</p>
          <h2 id="se-services-title" className="se-section-title">Od výkopu po přesný díl</h2>
        </div>

        <ol className="se-service-list">
          {sluzby.map((s) => (
            <li key={s.c} className="se-service">
              <div className="se-service-num" aria-hidden="true">{s.c}</div>
              <div className="se-service-body">
                <h3 className="se-service-title">{s.nadpis}</h3>
                <p className="se-service-text">{s.text}</p>
                <ul className="se-tags">
                  {s.detaily.map((d) => (
                    <li key={d} className="se-tag">{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <figure className="se-services-figure">
          <img
            src="/section-1.webp"
            alt="Detail práce s hydraulikou a strojním vybavením v dílně"
            width={1200}
            height={800}
          />
          <figcaption>Opravy hydrauliky a soustružení řešíme ve vlastní dílně — bez čekání na externí servis.</figcaption>
        </figure>
      </section>

      <section className="se-about" aria-labelledby="se-about-title">
        <div className="se-about-grid">
          <figure className="se-about-figure">
            <img
              src="/section-2.webp"
              alt="Jan Ševčík u stavebního stroje při zemních pracích"
              width={1000}
              height={1200}
            />
          </figure>

          <div className="se-about-text">
            <p className="se-eyebrow">O nás</p>
            <h2 id="se-about-title" className="se-section-title">
              Jeden člověk, který za prací stojí jménem
            </h2>
            <p className="se-about-lead">
              Domlouváte se přímo s tím, kdo bude na vašem pozemku sedět v bagru.
              Přijedu, podíváme se na terén a řekneme si to na rovinu — co jde, jak dlouho
              to potrvá a kolik to bude stát.
            </p>
            <p className="se-about-body">
              Dlouholeté zkušenosti se servisem a údržbou stavebních strojů, opravou
              hydraulických válců, výkopovými i soustružnickými pracemi. Individuální
              přístup ke každé zakázce. Cílem byl a vždy bude spokojený zákazník.
            </p>

            <dl className="se-contact">
              <div className="se-contact-row">
                <dt>Telefon</dt>
                <dd><a href={telHref}>736 734 246</a></dd>
              </div>
              <div className="se-contact-row">
                <dt>E‑mail</dt>
                <dd><a href={`mailto:${mail}`}>{mail}</a></dd>
              </div>
              <div className="se-contact-row">
                <dt>Kde nás najdete</dt>
                <dd>Kokešova 745/17, 724 00 Nová Bělá, Ostrava</dd>
              </div>
              <div className="se-contact-row">
                <dt>Nabídky a fakturace</dt>
                <dd>Ing. Lucie Ševčíková · 724 890 703</dd>
              </div>
              <div className="se-contact-row">
                <dt>Provozní doba</dt>
                <dd>dle dohody — zavolejte kdykoli</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
