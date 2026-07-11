import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      c: "01",
      t: "Zavoláme si",
      d: "Při prvním hovoru vám vysvětlíme možnosti a výhody kachlových kamen, sporáků i krbů. Poradíme, co se hodí do vašeho prostoru.",
    },
    {
      c: "02",
      t: "Vyberete kachle",
      d: "U nás v Chodouni si na živo osaháte barvu i typ kachle. Nebo přijedeme za vámi na místo, kde budou kamna stát.",
    },
    {
      c: "03",
      t: "Dostanete 3D návrh",
      d: "Vypracujeme finální vizualizaci, rozpočet i termín stavby. Po schválení a záloze 50 % kachle ručně vyrobíme.",
    },
    {
      c: "04",
      t: "Postavíme kamna",
      d: "Kamnář kachle naloží, doveze a kamna postaví. Kamna, sporáky i krby pak takřka nepotřebují žádný servis.",
    },
  ];

  const vyrobky = [
    {
      t: "Kachlová kamna",
      d: "Postavená z našich ručně mačkaných kachlů. Přiznávají práci ruky — z každého kusu je cítit dotek řemesla.",
    },
    {
      t: "Kachlové krby",
      d: "Vykouzlí doma příjemnou atmosféru. Sednou na venkovskou chalupu i do moderní domácnosti.",
    },
    {
      t: "Kachlové sporáky",
      d: "Uvaříte a upečete na nich jídlo — a k tomu vám sporák zajistí příjemné, sálavé teplo.",
    },
  ];

  const vzory = [
    "Gotika",
    "Baroko",
    "Rustikal",
    "Darina Hofman",
    "Interiér",
  ];

  return (
    <main className="kk">
      <header className="kk-top">
        <a className="kk-brand" href="#uvod" aria-label="Kachlová kamna — úvod">
          <span className="kk-brand-mark" aria-hidden="true">
            <span className="kk-tile" />
            <span className="kk-tile" />
            <span className="kk-tile" />
            <span className="kk-tile" />
          </span>
          <span className="kk-brand-name">
            Kachlová kamna
            <span className="kk-brand-sub">Chodouň · ruční kachle</span>
          </span>
        </a>
        <a className="kk-tel" href="tel:+420603501428">
          +420 603 501 428
        </a>
      </header>

      <section className="kk-hero" id="uvod">
        <div className="kk-hero-media">
          <img
            src="/hero.webp"
            alt="Kachlová kamna postavená z ručně mačkaných kachlů"
            className="kk-hero-img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="kk-hero-copy">
          <p className="kk-eyebrow">Ručně mačkané kachle · Chodouň u Zdic</p>
          <h1 className="kk-h1">
            Kamna, ze kterých je
            <span className="kk-h1-accent"> cítit ruka</span> kamnáře.
          </h1>
          <p className="kk-lead">
            Jako jediní vyrábíme kachle ručně mačkané — každý kus je jiný,
            přiznává práci ruky a znovu objevené umělecké řemeslo. Kamna,
            krby i sporáky navrhneme přímo na míru vašemu domovu.
          </p>
          <div className="kk-hero-cta">
            <a className="kk-btn" href="tel:+420603501428">
              Zavolat kamnáři
            </a>
            <a className="kk-btn kk-btn-ghost" href="#jak">
              Jak si kamna pořídit
            </a>
          </div>
        </div>
      </section>

      <section className="kk-vyrobky" id="vyroba" aria-labelledby="vyroba-nadpis">
        <div className="kk-sec-head">
          <p className="kk-eyebrow">Co u nás vzniká</p>
          <h2 className="kk-h2" id="vyroba-nadpis">
            Teplo, které se dědí
          </h2>
        </div>
        <div className="kk-vyrobky-grid">
          <div className="kk-vyrobky-media">
            <img
              src="/section-1.webp"
              alt="Detail ručně mačkaných kachlů v barevné škále"
              width={900}
              height={1100}
            />
          </div>
          <ol className="kk-cards">
            {vyrobky.map((v, i) => (
              <li className="kk-card" key={v.t}>
                <span className="kk-card-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="kk-card-t">{v.t}</h3>
                  <p className="kk-card-d">{v.d}</p>
                </div>
              </li>
            ))}
            <li className="kk-vzory">
              <span className="kk-vzory-label">Vzory kachlů</span>
              <span className="kk-vzory-list">
                {vzory.map((z) => (
                  <span className="kk-chip" key={z}>
                    {z}
                  </span>
                ))}
              </span>
            </li>
          </ol>
        </div>
      </section>

      <section className="kk-jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="kk-jak-inner">
          <div className="kk-jak-head">
            <p className="kk-eyebrow kk-eyebrow-light">Od nápadu po sálavé teplo</p>
            <h2 className="kk-h2 kk-h2-light" id="jak-nadpis">
              Jak si pořídit kachlová kamna
            </h2>
            <p className="kk-jak-lead">
              Kompletní realizace od 3D návrhu až po instalaci. Vezmeme to
              za vás od prvního telefonu po den, kdy poprvé zatopíte.
            </p>
            <a className="kk-btn kk-btn-warm" href="tel:+420603501428">
              Domluvit schůzku v Chodouni
            </a>
          </div>
          <div className="kk-jak-media">
            <img
              src="/section-2.webp"
              alt="Realizace kachlových kamen v interiéru"
              width={900}
              height={700}
            />
          </div>
          <ol className="kk-steps">
            {kroky.map((k) => (
              <li className="kk-step" key={k.c}>
                <span className="kk-step-num" aria-hidden="true">
                  {k.c}
                </span>
                <h3 className="kk-step-t">{k.t}</h3>
                <p className="kk-step-d">{k.d}</p>
              </li>
            ))}
          </ol>
          <p className="kk-jak-note">
            Kachlová kamna, spol. s r.o. · Chodouň 226, 267 51 Chodouň ·{" "}
            info@kachlovakamna.com
          </p>
        </div>
      </section>
    </main>
  );
}
