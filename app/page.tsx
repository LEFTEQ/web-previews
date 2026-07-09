import type { CSSProperties } from "react";

export default function Page() {
  const okna = [
    {
      cislo: "01",
      nazev: "Špaletová okna",
      popis:
        "Repliky podle původní konstrukce pro historické budovy a památkové zóny. Vyrobíme je věrně původnímu profilu, ale s dnešními tepelně‑izolačními vlastnostmi.",
    },
    {
      cislo: "02",
      nazev: "Eurookna",
      popis:
        "Moderní profilace z přírodního dřeva, dlouhá životnost a nízká roztažnost. Ideální do rodinných a bytových domů.",
    },
    {
      cislo: "03",
      nazev: "Dvoufalcová okna",
      popis:
        "Vzhled původních zdvojených a jednoduchých oken, který splňuje aktuální tepelné standardy.",
    },
    {
      cislo: "04",
      nazev: "Americká okna",
      popis:
        "Funkční i designový prvek do kaváren, restaurací a stylově zařízených domů.",
    },
    {
      cislo: "05",
      nazev: "Vchodové a interiérové dveře",
      popis:
        "Vchodové dveře jako tvář domu i interiérové dveře s obložkovou zárubní. Přírodní materiály, bezpečnost a originalita.",
    },
    {
      cislo: "06",
      nazev: "Atypická výroba a doplňky",
      popis:
        "Atypické truhlářské prvky pro moderní stavby i historické objekty v památkových zónách.",
    },
  ];

  const reference = [
    {
      stavba: "Budova Krajského soudu",
      misto: "Hradec Králové",
    },
    {
      stavba: "Gymnázium Prachatice",
      misto: "Zlatá stezka, Prachatice",
    },
    {
      stavba: "Obvodní soud pro Prahu 3",
      misto: "Jagellonská, Praha",
    },
    {
      stavba: "Dům u Zlaté štiky",
      misto: "Praha — repase špaletových oken",
    },
  ];

  const kroky = [
    { k: "Zaměření", d: "Přijedeme, změříme a poradíme přímo na stavbě." },
    { k: "Nabídka a projekt", d: "Zpracujeme cenovou nabídku i projektovou dokumentaci." },
    { k: "Povolení", d: "Vyřídíme administrativu i souhlas pro památkové zóny." },
    { k: "Výroba", d: "Vyrobíme ve vlastní moderní hale v Příbrami." },
    { k: "Montáž", d: "Dodáme a odborně osadíme na místě." },
  ];

  return (
    <main className="kaiser">
      <header className="kai-top">
        <a className="kai-mark" href="#uvod" aria-label="Truhlářství Petr Kaiser, úvod">
          <span className="kai-mark__grain">Kaiser</span>
          <span className="kai-mark__sub">truhlářství · Příbram</span>
        </a>
        <a className="kai-call" href="tel:+420318000000">Zavolat truhláři</a>
      </header>

      <section className="kai-hero" id="uvod">
        <div className="kai-hero__frame">
          <div className="kai-hero__text">
            <p className="kai-eyebrow">Dřevěná okna a dveře na míru</p>
            <h1 className="kai-h1">
              Okno není<br />
              <span className="kai-h1__accent">jen díra ve zdi.</span>
            </h1>
            <p className="kai-lead">
              Vyrábíme dřevěná okna, vchodové a interiérové dveře — od věrných
              replik špaletových oken pro památkové zóny až po moderní eurookna.
              Kompletní služby od zaměření po montáž, výroba ve vlastní hale
              v Příbrami.
            </p>
            <div className="kai-hero__actions">
              <a className="kai-btn" href="tel:+420318000000">Zavolat truhláři</a>
              <a className="kai-btn kai-btn--ghost" href="mailto:info@truhlarstvi-kaiser.cz">
                Napsat na e‑mail
              </a>
            </div>
          </div>
          <figure className="kai-hero__media">
            <img
              src="/hero.webp"
              alt="Detail dřevěného špaletového okna vyrobeného truhlářstvím Petra Kaisera"
              className="kai-hero__img"
            />
            <figcaption className="kai-hero__cap">Repase špaletového okna · přírodní dřevo</figcaption>
          </figure>
        </div>
      </section>

      <section className="kai-sec kai-produkty" aria-labelledby="produkty-nadpis">
        <div className="kai-sec__head">
          <p className="kai-eyebrow">Co pro vás vyrobíme</p>
          <h2 className="kai-h2" id="produkty-nadpis">Šest řezů jednoho řemesla</h2>
        </div>
        <ul className="kai-grid">
          {okna.map((o) => (
            <li className="kai-card" key={o.cislo}>
              <span className="kai-card__num" aria-hidden="true">{o.cislo}</span>
              <h3 className="kai-card__title">{o.nazev}</h3>
              <p className="kai-card__text">{o.popis}</p>
            </li>
          ))}
        </ul>
        <figure className="kai-band">
          <img
            src="/section-1.webp"
            alt="Výroba dřevěných oken ve výrobní hale truhlářství v Příbrami"
            className="kai-band__img"
          />
        </figure>
      </section>

      <section className="kai-sec kai-onas" aria-labelledby="onas-nadpis">
        <div className="kai-onas__grid">
          <div className="kai-onas__col">
            <p className="kai-eyebrow">Proč právě my</p>
            <h2 className="kai-h2" id="onas-nadpis">
              Truhlařina, které<br />svěříte i&nbsp;památku
            </h2>
            <p className="kai-onas__text">
              Vyrábíme repliky oken s mimořádnými nároky na věrnost původnímu
              provedení — proto nás volají soudy, školy i majitelé domů
              v památkových zónách. V roce 2025 jsme získali ocenění
              <span className="kai-tag">Spolehlivá firma</span>.
            </p>

            <ol className="kai-kroky">
              {kroky.map((s, i) => (
                <li className="kai-krok" key={s.k}>
                  <span className="kai-krok__i" aria-hidden="true">{i + 1}</span>
                  <div>
                    <span className="kai-krok__k">{s.k}</span>
                    <span className="kai-krok__d">{s.d}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="kai-onas__col">
            <figure className="kai-onas__media">
              <img
                src="/section-2.webp"
                alt="Osazená dřevěná okna na dokončené realizaci"
                className="kai-onas__img"
              />
            </figure>
            <h3 className="kai-ref__title">Vybrané realizace</h3>
            <ul className="kai-ref">
              {reference.map((r) => (
                <li className="kai-ref__row" key={r.stavba}>
                  <span className="kai-ref__stavba">{r.stavba}</span>
                  <span className="kai-ref__misto">{r.misto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
