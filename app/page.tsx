import React from "react";

const sluzby = [
  {
    kod: "IN",
    nazev: "Inženýrské stavby",
    popis:
      "Kanalizace, vodovodní řady, opěrné zdi a zpevněné plochy. Stavíme to, co drží celé území pohromadě — od výkopu po přejímku s technickým dozorem investora.",
  },
  {
    kod: "PR",
    nazev: "Průmyslové haly a objekty",
    popis:
      "Základové desky, montované skelety, podlahy s vysokou zátěží. Realizace pro výrobní a logistické provozy v Královéhradeckém kraji.",
  },
  {
    kod: "FV",
    nazev: "Fotovoltaické systémy",
    popis:
      "Střešní i pozemní elektrárny včetně nosných konstrukcí a stavební připravenosti. Realizováno také v rámci NPO — s řádnou povinnou publicitou.",
  },
  {
    kod: "RE",
    nazev: "Rekonstrukce a sanace",
    popis:
      "Betonové konstrukce, mosty a propustky, injektáže a spárování. Vracíme životnost objektům, které mají ještě desítky let sloužit.",
  },
];

const etapy = [
  {
    faze: "01",
    titul: "Prohlídka a rozpočet",
    text: "Přijedeme na místo, zaměříme skutečný stav a připravíme položkový rozpočet, ve kterém uvidíte každou korunu.",
  },
  {
    faze: "02",
    titul: "Harmonogram a smlouva",
    text: "Termíny, milníky a odpovědnosti dáme písemně. Víte, kdy se kope, kdy betonuje a kdy předáváme.",
  },
  {
    faze: "03",
    titul: "Realizace pod dozorem",
    text: "Vlastní stavební tým a stavbyvedoucí s autorizací. Fotodokumentace průběhu vám chodí průběžně.",
  },
  {
    faze: "04",
    titul: "Předání a záruka",
    text: "Předáme dílo s dokumentací skutečného provedení, revizemi a zárukou. Reklamaci řešíme do 48 hodin.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="MSIo — inženýrské a průmyslové stavby, Hradec Králové">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__bar" />
            <span className="brand__bar" />
            <span className="brand__bar" />
          </span>
          <span className="brand__word">MSIo</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co stavíme</a>
          <a href="#duvera">Jak pracujeme</a>
          <a className="nav__cta" href="#duvera">Zavolat</a>
        </nav>
      </header>

      <section className="hero">
        <img className="hero__img" src="/hero.webp" alt="Rozestavěná inženýrská stavba realizovaná firmou MSIo v okolí Hradce Králové" />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__eyebrow">MSIo s.r.o. · Hradec Králové · od výkopu po kolaudaci</p>
          <h1 className="hero__title">
            Inženýrské a<br />
            <span className="hero__accent">průmyslové stavby,</span><br />
            které vydrží.
          </h1>
          <p className="hero__lede">
            Kanalizace, haly, zpevněné plochy i fotovoltaika. Stavíme v Královéhradeckém
            kraji s vlastním týmem, položkovým rozpočtem a termínem, na který se dá spolehnout.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#duvera">Nezávazně poptat stavbu</a>
            <a className="btn btn--ghost" href="#sluzby">Co pro vás postavíme</a>
          </div>
          <dl className="hero__facts">
            <div><dt>Kraj</dt><dd>Královéhradecký</dd></div>
            <div><dt>Záběr</dt><dd>Voda · Beton · FVE</dd></div>
            <div><dt>Dozor</dt><dd>Autorizovaný stavbyvedoucí</dd></div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="sluzby">
        <div className="sec-head">
          <p className="sec-head__eyebrow">Co stavíme</p>
          <h2 className="sec-head__title">Čtyři obory, jedna parta lidí</h2>
          <p className="sec-head__lede">
            Nejsme generální dodavatel na papíře. Beton, výkopy i montáž děláme vlastními
            silami — a tam, kde je potřeba specialista, ho známe jménem.
          </p>
        </div>

        <div className="sluzby__split">
          <ul className="cards">
            {sluzby.map((s) => (
              <li className="card" key={s.kod}>
                <span className="card__kod" aria-hidden="true">{s.kod}</span>
                <h3 className="card__nazev">{s.nazev}</h3>
                <p className="card__popis">{s.popis}</p>
              </li>
            ))}
          </ul>
          <figure className="sluzby__figure">
            <img src="/section-1.webp" alt="Detail betonářských a inženýrských prací na stavbě MSIo" />
            <figcaption>Vlastní betonáž a armování — bez subdodávek na klíčových částech konstrukce.</figcaption>
          </figure>
        </div>
      </section>

      <section id="duvera" className="duvera">
        <figure className="duvera__figure">
          <img src="/section-2.webp" alt="Dokončená stavba realizovaná firmou MSIo v Královéhradeckém kraji" />
        </figure>
        <div className="duvera__body">
          <p className="sec-head__eyebrow">Jak pracujeme</p>
          <h2 className="sec-head__title">Od prohlídky po předání ve čtyřech krocích</h2>
          <p className="duvera__lede">
            Víte předem, co se kdy děje a kolik to stojí. Žádné dodatky na poslední chvíli
            — každou změnu odsouhlasíte, než se pustíme dál.
          </p>

          <ol className="steps">
            {etapy.map((e) => (
              <li className="step" key={e.faze}>
                <span className="step__faze" aria-hidden="true">{e.faze}</span>
                <div>
                  <h3 className="step__titul">{e.titul}</h3>
                  <p className="step__text">{e.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="duvera__note">
            Realizujeme i projekty z Národního plánu obnovy — fotovoltaické systémy
            včetně řádné povinné publicity a doložení způsobilosti výdajů.
          </p>
        </div>
      </section>
    </main>
  );
}
