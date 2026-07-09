import type { CSSProperties } from "react";

export default function Page() {
  const oblasti = [
    {
      cislo: "01",
      nazev: "Obchodní právo",
      popis:
        "Zakládání a změny společností, smlouvy mezi podnikateli, valné hromady, převody podílů. Zkušenost z mezinárodní kanceláře i korporátní praxe.",
    },
    {
      cislo: "02",
      nazev: "Občanské právo",
      popis:
        "Kupní, nájemní a darovací smlouvy, nemovitosti, náhrada škody, sousedské spory. Praktická řešení životních situací.",
    },
    {
      cislo: "03",
      nazev: "Vymáhání pohledávek a spory",
      popis:
        "Od výzvy k úhradě přes žalobu až po exekuci. Zastoupení u soudu ve všech stupních, jednání s protistranou.",
    },
    {
      cislo: "04",
      nazev: "IT právo a duševní vlastnictví",
      popis:
        "Licenční a vývojářské smlouvy, ochranné známky, autorská práva, ochrana dat. Pro tvůrce i digitální firmy.",
    },
    {
      cislo: "05",
      nazev: "Pracovní právo",
      popis:
        "Pracovní smlouvy, ukončení poměru, spory o neplatnou výpověď. Pro zaměstnavatele i zaměstnance.",
    },
    {
      cislo: "06",
      nazev: "Rodinné právo",
      popis:
        "Rozvody, péče o děti, výživné, majetkové vypořádání. Citlivá agenda vedená věcně a s respektem.",
    },
    {
      cislo: "07",
      nazev: "Trestní právo",
      popis:
        "Obhajoba v přípravném řízení i před soudem, zastoupení poškozených. Dostupnost v neodkladných situacích.",
    },
    {
      cislo: "08",
      nazev: "Správní právo",
      popis:
        "Řízení před úřady, přestupky, správní žaloby. Jednání se státní správou i samosprávou.",
    },
  ];

  return (
    <main className="pr-page">
      <header className="pr-topbar">
        <a className="pr-wordmark" href="#" aria-label="JUDr. Pavel Raichl, advokát — domů">
          <span className="pr-wordmark-mono">§</span>
          <span className="pr-wordmark-name">Raichl</span>
          <span className="pr-wordmark-tag">advokátní kancelář&nbsp;·&nbsp;Brno</span>
        </a>
        <nav className="pr-nav" aria-label="Hlavní navigace">
          <a href="#oblasti">Právní oblasti</a>
          <a href="#odmena">Odměna</a>
          <a href="#advokat">O advokátovi</a>
          <a className="pr-nav-call" href="tel:+420605114260">Zavolat</a>
        </nav>
      </header>

      <section className="pr-hero" aria-labelledby="pr-hero-title">
        <div className="pr-hero-frame">
          <img
            className="pr-hero-img"
            src="/hero.webp"
            alt="Advokátní kancelář JUDr. Pavla Raichla v Brně"
            width={1600}
            height={1000}
          />
          <span className="pr-hero-caseno">spis&nbsp;·&nbsp;Brno&nbsp;/&nbsp;2016—2025</span>
        </div>

        <div className="pr-hero-copy">
          <p className="pr-eyebrow">
            <span className="pr-eyebrow-mark">ČAK</span> Registrovaný advokát · Dřevařská 855/12
          </p>
          <h1 id="pr-hero-title" className="pr-hero-title">
            Právo
            <br />
            srozumitelně,
            <br />
            <em>bez zbytečného</em> balastu.
          </h1>
          <p className="pr-hero-lede">
            JUDr.&nbsp;Pavel Raichl vede v centru Brna advokátní kancelář, která
            řeší obchodní i osobní situace efektivně a v nejvyšší kvalitě —
            česky i anglicky, po celé České republice.
          </p>
          <div className="pr-hero-actions">
            <a className="pr-btn" href="tel:+420605114260">
              Zavolat 605&nbsp;114&nbsp;260
            </a>
            <a className="pr-btn pr-btn-ghost" href="mailto:hon@hr-advokati.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="pr-hero-facts">
            <div>
              <dt>V advokacii od</dt>
              <dd>2008</dd>
            </div>
            <div>
              <dt>Doktor práv (JUDr.)</dt>
              <dd>2025</dd>
            </div>
            <div>
              <dt>Pojištění odpovědnosti</dt>
              <dd>7,5&nbsp;mil.&nbsp;Kč</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pr-oblasti" id="oblasti" aria-labelledby="pr-oblasti-title">
        <div className="pr-section-head">
          <p className="pr-eyebrow">
            <span className="pr-eyebrow-mark">§</span> Právní oblasti
          </p>
          <h2 id="pr-oblasti-title" className="pr-section-title">
            Komplexní služby napříč obory práva
          </h2>
          <p className="pr-section-lede">
            Vaši věc vedu od začátku do konce. Kde je potřeba, spolupracuji
            s&nbsp;daňovými poradci, notáři nebo soudními exekutory — vy
            komunikujete s&nbsp;jedním člověkem.
          </p>
        </div>

        <ol className="pr-registr">
          {oblasti.map((o) => (
            <li className="pr-registr-item" key={o.cislo}>
              <span className="pr-registr-no">{o.cislo}</span>
              <div className="pr-registr-body">
                <h3 className="pr-registr-nazev">{o.nazev}</h3>
                <p className="pr-registr-popis">{o.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="pr-odmena" id="odmena">
          <div className="pr-odmena-img">
            <img
              src="/section-1.webp"
              alt="Konzultace v advokátní kanceláři JUDr. Pavla Raichla"
              width={1200}
              height={900}
            />
          </div>
          <div className="pr-odmena-copy">
            <p className="pr-eyebrow">
              <span className="pr-eyebrow-mark">Kč</span> Odměna advokáta
            </p>
            <h3 className="pr-odmena-title">Předem víte, kolik to bude stát</h3>
            <ul className="pr-odmena-list">
              <li>
                <span className="pr-odmena-tag">Hodinová sazba</span>
                Nejčastější způsob. Předem odhadneme rozsah, ať máte přehled
                o&nbsp;nákladech.
              </li>
              <li>
                <span className="pr-odmena-tag">Pevná odměna</span>
                Když jde rozsah dobře odhadnout, dohodneme se na jedné částce
                za&nbsp;celou věc.
              </li>
              <li>
                <span className="pr-odmena-tag">Paušál</span>
                Pro dlouhodobou spolupráci — měsíční paušál za&nbsp;služby
                do&nbsp;sjednaného rozsahu.
              </li>
            </ul>
            <p className="pr-odmena-note">
              Bez smluvní dohody se odměna řídí advokátním tarifem
              (vyhláška č.&nbsp;177/1996&nbsp;Sb.).
            </p>
          </div>
        </div>
      </section>

      <section className="pr-advokat" id="advokat" aria-labelledby="pr-advokat-title">
        <div className="pr-advokat-portret">
          <img
            src="/section-2.webp"
            alt="JUDr. Pavel Raichl, advokát v Brně"
            width={1000}
            height={1200}
          />
        </div>
        <div className="pr-advokat-copy">
          <p className="pr-eyebrow">
            <span className="pr-eyebrow-mark">CV</span> O advokátovi
          </p>
          <h2 id="pr-advokat-title" className="pr-section-title">
            JUDr.&nbsp;Pavel Raichl
          </h2>
          <p className="pr-advokat-lede">
            Vystudoval Právnickou fakultu Masarykovy univerzity v&nbsp;Brně,
            kde v&nbsp;roce&nbsp;2012 získal titul magistr. V&nbsp;roce&nbsp;2025
            získal v&nbsp;rigorózním řízení titul doktora práv (JUDr.).
          </p>

          <ol className="pr-timeline">
            <li>
              <span className="pr-timeline-year">2008</span>
              <span className="pr-timeline-text">
                Začátek v&nbsp;advokacii — brněnská kancelář se všeobecnou praxí
                napříč obory práva.
              </span>
            </li>
            <li>
              <span className="pr-timeline-year">2012</span>
              <span className="pr-timeline-text">
                Magisterský titul na Právnické fakultě MU v&nbsp;Brně a certifikát
                ILEC University of Cambridge z&nbsp;právní angličtiny.
              </span>
            </li>
            <li>
              <span className="pr-timeline-year">2013</span>
              <span className="pr-timeline-text">
                Praxe v&nbsp;mezinárodní kanceláři — obchodní a&nbsp;závazkové právo
                pro české i&nbsp;zahraniční korporátní klienty.
              </span>
            </li>
            <li>
              <span className="pr-timeline-year">2016</span>
              <span className="pr-timeline-text">
                Samostatný advokát zapsaný v&nbsp;seznamu České advokátní komory.
              </span>
            </li>
            <li>
              <span className="pr-timeline-year">2025</span>
              <span className="pr-timeline-text">
                Titul doktora práv (JUDr.) získaný v&nbsp;rigorózním řízení.
              </span>
            </li>
          </ol>

          <div className="pr-kontakt-card">
            <p className="pr-kontakt-title">Sídlo kanceláře</p>
            <address className="pr-kontakt">
              Dřevařská 855/12, 602&nbsp;00 Brno
              <br />
              <a href="tel:+420605114260">+420&nbsp;605&nbsp;114&nbsp;260</a>
              {" · "}
              <a href="mailto:hon@hr-advokati.cz">hon@hr-advokati.cz</a>
            </address>
            <p className="pr-kontakt-langs">
              Jednání v&nbsp;češtině i&nbsp;angličtině · základní francouzština
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
