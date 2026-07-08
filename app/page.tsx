import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      cislo: "01",
      nazev: "Teorie, která drží",
      text: "Předpisy, křižovatky a řešení situací vysvětlíme tak, aby dávaly smysl. Učebna na Kosmonautů, malé skupiny, k testům přístup online i z domova.",
    },
    {
      cislo: "02",
      nazev: "Za volantem po Olomouci",
      text: "Jízdy začínáme na klidných ulicích Hodolan a postupně přidáváme kruháče, tramvajové pásy i parkování ve městě. Vůz řadíme podle toho, kde bydlíte.",
    },
    {
      cislo: "03",
      nazev: "Zkouška bez stresu",
      text: "Před zkouškou projedeme trasy, kde komisař reálně jezdí. Víte, co vás čeká, a jdete si to jenom potvrdit.",
    },
  ];

  const skupiny = [
    {
      kod: "B",
      nazev: "Osobní automobil",
      detail: "Nejžádanější řidičák. Manuál i automat, výcvik na míru vašemu tempu.",
      cena: "20 900 Kč",
    },
    {
      kod: "A",
      nazev: "Motocykl",
      detail: "A1, A2 i neomezené A. Cvičná plocha i reálný provoz v Olomouci.",
      cena: "od 14 500 Kč",
    },
    {
      kod: "B96",
      nazev: "S přívěsem",
      detail: "Souprava do 4 250 kg. Ideální na karavan, loď nebo těžší vozík.",
      cena: "4 900 Kč",
    },
    {
      kod: "KON",
      nazev: "Kondiční jízdy",
      detail: "Řidičák máte, ale za volant si netroufáte? Naučíme vás to znovu.",
      cena: "590 Kč / hod",
    },
  ];

  return (
    <main className="ab">
      <header className="ab-top">
        <a className="ab-mark" href="#uvod" aria-label="AB Centrum autoškola, úvod">
          <span className="ab-mark__ab">AB</span>
          <span className="ab-mark__rest">
            <span>CENTRUM</span>
            <span className="ab-mark__sub">autoškola Olomouc</span>
          </span>
        </a>
        <a className="ab-call" href="tel:+420587433111">
          <span className="ab-call__label">Zavolat</span>
          <span className="ab-call__num">587 433 111</span>
        </a>
      </header>

      <section className="ab-hero" id="uvod">
        <div className="ab-hero__media">
          <img
            src="/hero.webp"
            alt="Cvičné vozidlo autoškoly AB Centrum v olomouckém provozu"
            className="ab-hero__img"
          />
          <div className="ab-hero__plate" aria-hidden="true">
            <span className="ab-hero__plate-eu">CZ</span>
            <span className="ab-hero__plate-txt">AB CENTRUM</span>
          </div>
        </div>
        <div className="ab-hero__copy">
          <p className="ab-eyebrow">Autoškola · Olomouc-Hodolany · od roku 1994</p>
          <h1 className="ab-hero__title">
            Řidičák<br />
            <span className="ab-hero__big">bez zbytečných</span><br />
            <span className="ab-hero__big ab-hero__big--accent">okliček.</span>
          </h1>
          <p className="ab-hero__lede">
            Učíme na Kosmonautů 8. Za volant vás posadíme hned na začátku,
            jezdíme přímo tam, kde budete jezdit i vy — mezi tramvajemi,
            kruháči a nádražím.
          </p>
          <div className="ab-hero__actions">
            <a className="ab-btn" href="tel:+420587433111">Zavolat a přihlásit se</a>
            <a className="ab-btn ab-btn--ghost" href="#skupiny">Prohlédnout skupiny</a>
          </div>
        </div>
      </section>

      <section className="ab-groups" id="skupiny">
        <div className="ab-section-head">
          <span className="ab-section-head__no">A</span>
          <div>
            <h2 className="ab-h2">Co u nás uděláte</h2>
            <p className="ab-section-head__sub">
              Skupiny řidičských oprávnění, které v AB Centru učíme.
            </p>
          </div>
        </div>

        <ul className="ab-grid">
          {skupiny.map((s) => (
            <li className="ab-card" key={s.kod}>
              <span className="ab-card__code">{s.kod}</span>
              <h3 className="ab-card__title">{s.nazev}</h3>
              <p className="ab-card__detail">{s.detail}</p>
              <p className="ab-card__price">{s.cena}</p>
            </li>
          ))}
        </ul>

        <figure className="ab-figure">
          <img
            src="/section-1.webp"
            alt="Žák za volantem během praktické jízdy autoškoly AB Centrum"
            className="ab-figure__img"
          />
          <figcaption className="ab-figure__cap">
            První jízdy začínáme v klidných ulicích Hodolan.
          </figcaption>
        </figure>
      </section>

      <section className="ab-trust">
        <div className="ab-section-head">
          <span className="ab-section-head__no">B</span>
          <div>
            <h2 className="ab-h2">Jak to u nás probíhá</h2>
            <p className="ab-section-head__sub">
              Tři kroky od přihlášky po vytažený řidičák.
            </p>
          </div>
        </div>

        <div className="ab-steps">
          <ol className="ab-steps__list">
            {kroky.map((k) => (
              <li className="ab-step" key={k.cislo}>
                <span className="ab-step__no">{k.cislo}</span>
                <div className="ab-step__body">
                  <h3 className="ab-step__title">{k.nazev}</h3>
                  <p className="ab-step__text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="ab-aside">
            <img
              src="/section-2.webp"
              alt="Učebna autoškoly AB Centrum na ulici Kosmonautů v Olomouci"
              className="ab-aside__img"
            />
            <div className="ab-aside__box">
              <p className="ab-aside__label">Najdete nás</p>
              <p className="ab-aside__addr">
                Kosmonautů 989/8<br />
                Olomouc-Hodolany, 779 00
              </p>
              <dl className="ab-hours">
                <div><dt>Po</dt><dd>7–17</dd></div>
                <div><dt>Út</dt><dd className="ab-hours__off">zavřeno</dd></div>
                <div><dt>St</dt><dd>7–17</dd></div>
                <div><dt>Čt</dt><dd>7–17</dd></div>
                <div><dt>Pá</dt><dd>7–17</dd></div>
              </dl>
              <p className="ab-aside__note">
                Tramvaj 100 m od dveří, hlavní nádraží 500 m — dojedete
                pohodlně i bez auta.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
