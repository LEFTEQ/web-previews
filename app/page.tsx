import React from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "H2O",
      nazev: "Hydroizolace plochých střech",
      popis:
        "Fóliové systémy pro rovné střechy hal i panelových domů. Svařujeme spoje horkým vzduchem, každý detail atiky, prostupu a vpusti řešíme tak, aby voda neměla kudy dovnitř.",
    },
    {
      kod: "IZO",
      nazev: "Zateplení šikmých i plochých střech",
      popis:
        "Skladba na míru objektu — od minerální izolace po EPS a PIR desky. Snížíme únik tepla a s ním i účet za vytápění, aniž bychom střechu přetížili.",
    },
    {
      kod: "KEY",
      nazev: "Střešní pláště na klíč",
      popis:
        "Novostavby i sanace staré krytiny. Postaráme se o celou skladbu pláště od parozábrany po finální vrstvu — jeden dodavatel, jedna odpovědnost.",
    },
    {
      kod: "SEC",
      nazev: "Záchytné systémy proti pádu",
      popis:
        "Kotvicí body a lanové systémy pro bezpečný pohyb po ploché střeše. Instalace i pravidelná revize, aby servis a údržba byly v souladu s předpisy.",
    },
  ];

  const objekty = [
    "Výrobní a skladové haly",
    "Administrativní budovy",
    "Školy a mateřské školky",
    "Nákupní a relaxační centra",
    "Aquaparky a stadiony",
    "Chráněné památky",
    "Bytové a panelové domy",
    "Rodinné domy a garáže",
  ];

  return (
    <main className="iso">
      <header className="iso-nav">
        <a className="iso-mark" href="#top" aria-label="ISOmont — pokrývačství Olomouc">
          <span className="iso-mark__iso">ISO</span>
          <span className="iso-mark__mont">mont</span>
          <span className="iso-mark__dot" aria-hidden="true" />
        </a>
        <span className="iso-nav__place">Olomouc · pokrývačství</span>
      </header>

      <section className="iso-hero" id="top">
        <div className="iso-hero__media">
          <img
            src="/hero.webp"
            alt="Svařování hydroizolační fólie na ploché střeše haly"
            className="iso-hero__img"
            width={1600}
            height={1000}
          />
          <div className="iso-hero__scrim" aria-hidden="true" />
        </div>

        <div className="iso-hero__body">
          <p className="iso-hero__eyebrow">Ploché a šikmé střechy · od roku 2000</p>
          <h1 className="iso-hero__title">
            Střecha, kterou<br />
            <span className="iso-hero__accent">nepustí</span> ani po letech.
          </h1>
          <p className="iso-hero__lede">
            Hydroizolace a zateplení plochých střech na Olomoucku. 26 let
            v terénu, tisíce metrů svařené fólie a jediné pravidlo — spoj
            drží, nebo se dělá znovu.
          </p>
          <div className="iso-hero__cta">
            <a className="iso-btn" href="tel:+420585000000">Zavolat pokrývači</a>
            <a className="iso-btn iso-btn--ghost" href="#sluzby">Co děláme</a>
          </div>
          <dl className="iso-hero__facts">
            <div>
              <dt>Praxe ve stavebnictví</dt>
              <dd>26 let</dd>
            </div>
            <div>
              <dt>Realizace</dt>
              <dd>ČR i SR</dd>
            </div>
            <div>
              <dt>Záruka na spoj</dt>
              <dd>bez kompromisu</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="iso-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="iso-section__head">
          <p className="iso-kicker">Vrstvy střešního pláště</p>
          <h2 className="iso-h2" id="sluzby-h">
            Čtyři věci, které umíme<br /> pořádně.
          </h2>
          <p className="iso-section__note">
            Každou zakázku bereme jako skladbu — vrstva po vrstvě, odspodu
            nahoru. Tady jsou ty, na kterých stavíme.
          </p>
        </div>

        <ol className="iso-services__list">
          {sluzby.map((s) => (
            <li className="iso-card" key={s.kod}>
              <span className="iso-card__code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="iso-card__title">{s.nazev}</h3>
              <p className="iso-card__text">{s.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="iso-services__figure">
          <img
            src="/section-1.webp"
            alt="Detail hydroizolační vrstvy a zateplení ploché střechy"
            className="iso-figimg"
            width={1400}
            height={900}
          />
          <figcaption>
            Detail rozhoduje. U atiky, vpusti a prostupu se pozná, jestli
            střecha vydrží deset zim, nebo jednu.
          </figcaption>
        </figure>
      </section>

      <section className="iso-trust" aria-labelledby="firma-h">
        <div className="iso-trust__grid">
          <div className="iso-trust__text">
            <p className="iso-kicker iso-kicker--light">O firmě</p>
            <h2 className="iso-h2 iso-h2--light" id="firma-h">
              Nezastřešíme jen halu.<br /> Zastřešíme celou stavbu.
            </h2>
            <p className="iso-trust__p">
              ISOmont s.r.o. dělá stavebně řemeslné práce na střechách po
              celé České i Slovenské republice. Za 26 let nám prošly rukama
              haly, památky i rodinné domy — a pořád platí, že dobrá střecha
              je ta, na kterou nemusíte myslet.
            </p>
            <p className="iso-trust__p">
              Pracujeme s certifikovanými systémy, řešíme i záchytné body
              proti pádu a v případě potřeby saci starou krytinu vyměníme za
              novou skladbu na klíč.
            </p>
            <ul className="iso-objekty">
              {objekty.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <a className="iso-btn iso-btn--onDark" href="tel:+420585000000">
              Domluvit prohlídku střechy
            </a>
          </div>

          <figure className="iso-trust__figure">
            <img
              src="/section-2.webp"
              alt="Dokončená plochá střecha objektu realizovaná firmou ISOmont"
              className="iso-figimg"
              width={1200}
              height={1400}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
