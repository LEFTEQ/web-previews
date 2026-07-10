import React from "react";

export default function Page() {
  const kruh = [
    {
      cislo: "30",
      jednotka: "minut",
      nadpis: "Individuální fyzioterapie",
      text: "Hodina jen pro vás s fyzioterapeutkou, která ví, jak roztroušená skleróza mění den ode dne. Cvičíme podle toho, jak se dnes cítíte — ne podle plánu z papíru.",
    },
    {
      cislo: "2×",
      jednotka: "týdně",
      nadpis: "Kruhový trénink pro RS",
      text: "Střední zátěž, kombinace vytrvalosti a posilování. Přesně to, co po deseti týdnech zvedá svalovou sílu a snižuje únavu. Chodí se ve dvojicích i malých skupinkách.",
    },
    {
      cislo: "5",
      jednotka: "dní v týdnu",
      nadpis: "Jóga a rekondiční cvičení",
      text: "Skupinové lekce v klidném tempu — protažení, rovnováha, dech. Bez soutěžení, bez spěchu. Přijít můžete, i když je zrovna špatný den.",
    },
  ];

  return (
    <main className="rk">
      <header className="rk-top">
        <a className="rk-brand" href="#uvod" aria-label="ROSKA České Budějovice — úvod">
          <span className="rk-brand-mark" aria-hidden="true">R</span>
          <span className="rk-brand-name">
            <span className="rk-brand-lead">Rehabilitační centrum</span>
            <span className="rk-brand-main">ROSKA</span>
            <span className="rk-brand-city">České Budějovice</span>
          </span>
        </a>
        <nav className="rk-nav" aria-label="Hlavní">
          <a href="#centrum">Cvičení</a>
          <a href="#o-nas">Kdo jsme</a>
          <a className="rk-nav-call" href="tel:+420773728700">Zavolat 773 728 700</a>
        </nav>
      </header>

      <section className="rk-hero" id="uvod">
        <div className="rk-hero-media">
          <img
            src="/hero.webp"
            alt="Rehabilitační centrum ROSKA v Českých Budějovicích — cvičení pod vedením fyzioterapeutky"
            width={1600}
            height={1100}
            loading="eager"
          />
        </div>
        <div className="rk-hero-body">
          <p className="rk-eyebrow">Roztroušená skleróza · České Budějovice</p>
          <h1 className="rk-hero-title">
            Půl hodiny pohybu, které<br />
            <em>vrátí vám</em> tkaničku, kávu i děti do náruče.
          </h1>
          <p className="rk-hero-lead">
            Nemusíte na rehabilitaci čekat měsíce. U nás se cvičí pět dní v týdnu, osm
            hodin denně — individuálně i ve skupině, pod vedením fyzioterapeutek, které
            samy vědí, jaké to s „ereskou“ je.
          </p>
          <div className="rk-hero-actions">
            <a className="rk-btn" href="tel:+420773728700">Zavolat 773 728 700</a>
            <a className="rk-link" href="#centrum">Jak u nás cvičíme →</a>
          </div>
        </div>
        <dl className="rk-facts" aria-label="Co víme o roztroušené skleróze">
          <div className="rk-fact">
            <dt>~23 000</dt>
            <dd>lidí s RS žije dnes v Česku</dd>
          </div>
          <div className="rk-fact">
            <dt>10 týdnů</dt>
            <dd>pravidelného cvičení a síla se vrací</dd>
          </div>
          <div className="rk-fact">
            <dt>0 dní</dt>
            <dd>čekací doba u nás — státní oddělení mají měsíce</dd>
          </div>
        </dl>
      </section>

      <section className="rk-section rk-services" id="centrum">
        <div className="rk-section-head">
          <p className="rk-eyebrow">Co u nás najdete</p>
          <h2 className="rk-section-title">Cvičení, které dává tělu i hlavě smysl</h2>
          <p className="rk-section-lead">
            Pravidelný pohyb u pacientů s RS zvyšuje neurotrofní faktor — ten podporuje
            nervové buňky a vznik nových spojení. Není to fráze, je to důvod, proč sem
            lidé chodí a proč to funguje.
          </p>
        </div>

        <ol className="rk-cards">
          {kruh.map((k, i) => (
            <li className="rk-card" key={k.nadpis}>
              <span className="rk-card-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="rk-card-metric">
                <span className="rk-card-num">{k.cislo}</span>
                <span className="rk-card-unit">{k.jednotka}</span>
              </p>
              <h3 className="rk-card-title">{k.nadpis}</h3>
              <p className="rk-card-text">{k.text}</p>
            </li>
          ))}
        </ol>

        <figure className="rk-figure">
          <img
            src="/section-1.webp"
            alt="Skupinové rekondiční cvičení v rehabilitačním centru ROSKA"
            width={1400}
            height={900}
            loading="lazy"
          />
          <figcaption>
            Individuální hodiny s fyzioterapeutkou i osobní trenérkou najdete v jednom
            místě v Českých Budějovicích.
          </figcaption>
        </figure>
      </section>

      <section className="rk-section rk-about" id="o-nas">
        <div className="rk-about-grid">
          <div className="rk-about-media">
            <img
              src="/section-2.webp"
              alt="Zázemí rehabilitačního centra ROSKA České Budějovice"
              width={1200}
              height={1400}
              loading="lazy"
            />
          </div>
          <div className="rk-about-body">
            <p className="rk-eyebrow">Kdo jsme</p>
            <h2 className="rk-section-title">
              „Ereska“ — víme, jak se cítíte.<br />
              Většina z nás ji zná zblízka.
            </h2>
            <p className="rk-about-text">
              Ať jste diagnózu dostali nedávno a nevíte, co čekat, nebo s ní žijete
              roky, jsme tu pro vás všechny, abyste na ni nebyli sami. Prožíváme —
              nebo jsme si prožili — většinu toho, co cítíte i vy. Na vaše trápení si
              vždycky uděláme čas a poradíme se zdravotními i sociálními problémy.
            </p>

            <ul className="rk-goals">
              <li>Vyrovnat se s diagnózou nevyléčitelného onemocnění.</li>
              <li>Žít kvalitní, důstojný a plnohodnotný život.</li>
              <li>Dostupná komplexní rehabilitace pro každého s RS.</li>
              <li>Otevřeně mluvit o svých problémech a získávat informace.</li>
            </ul>

            <blockquote className="rk-quote">
              Zbudovali jsme centrum, kde si lidé znovu dokážou zavázat tkaničku,
              uvařit kávu, dojít nakoupit a zvednout dítě do náruče — a hlavně ŽÍT.
            </blockquote>

            <div className="rk-contact">
              <a className="rk-btn rk-btn-ghost" href="tel:+420773728700">
                Zavolat 773 728 700
              </a>
              <a className="rk-link" href="mailto:roska@roska-cb.cz">
                roska@roska-cb.cz
              </a>
            </div>
            <p className="rk-place">Unie ROSKA — reg. org. ROSKA České Budějovice, z. p. s.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
