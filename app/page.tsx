import type { CSSProperties } from "react";

export default function Page() {
  const metody = [
    {
      kod: "01",
      hloubka: "do 60 cm",
      nazev: "Podřezání zdiva",
      popis:
        "Ruční i strojní podřezání se vsunutím nerezové izolační desky. Mechanická clona proti vzlínající vlhkosti tam, kde je zdivo přístupné a stabilní."
    },
    {
      kod: "02",
      hloubka: "vrty á 12 cm",
      nazev: "Chemická injektáž",
      popis:
        "Tlaková i beztlaká infuze do vrtů. Krystalická clona pro smíšené a kamenné zdivo, kde se řezat nedá — bez narušení statiky."
    },
    {
      kod: "03",
      hloubka: "3 vrstvy",
      nazev: "Sanační omítky",
      popis:
        "Odsolovací a sanační souvrství, které nechá stěnu dýchat a odvede zbytkovou vlhkost. Řešíme i výkvěty solí a opadávající omítku."
    },
    {
      kod: "04",
      hloubka: "po diagnostice",
      nazev: "Izolace a stavba",
      popis:
        "Svislé a vodorovné izolace, drenáže, ochrana spodní stavby a navazující speciální stavební práce. Od návrhu po předání."
    }
  ];

  const cislaHabese = [
    { c: "1993", p: "na plzeňských stavbách bez přestávky" },
    { c: "25 mil. Kč", p: "pojištění odpovědnosti za škodu" },
    { c: "3,5 t+", p: "vlastní autodoprava i strojní vybavení" }
  ];

  const heroStyle: CSSProperties = { backgroundImage: "url('/hero.webp')" };

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#uvod" aria-label="HABEŠ — stálé sucho, domů">
          <span className="brand__mark">HABEŠ</span>
          <span className="brand__line" aria-hidden="true" />
          <span className="brand__sub">stálé sucho · Plzeň</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#metody">Metody</a>
          <a href="#firma">O firmě</a>
          <a className="topnav__call" href="tel:+420602000000">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__media" style={heroStyle} role="img" aria-label="Sanace vlhkého zdiva — odkryté základy a nová izolace na plzeňské stavbě" />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Sanace vlhkého zdiva · izolace · speciální stavba</p>
          <h1 className="hero__title">
            Vlhkost se zastaví<br />
            <span className="hero__title--stress">na téhle čáře.</span>
          </h1>
          <p className="hero__lead">
            Vzlínající vodu ve zdivu neřešíme malováním přes flek. Najdeme, kudy voda
            stoupá, přerušíme ji clonou a necháme stěnu doschnout. Aby dole zůstalo
            trvale sucho — proto to jméno.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420602000000">Zavolat a domluvit prohlídku</a>
            <a className="btn btn--ghost" href="mailto:info@habes-suchо.cz">Napsat e-mail</a>
          </div>
        </div>
        <div className="hero__gauge" aria-hidden="true">
          <span className="hero__gauge-wet">mokro</span>
          <span className="hero__gauge-bar"><i /></span>
          <span className="hero__gauge-dry">sucho</span>
        </div>
      </section>

      <section className="metody" id="metody">
        <div className="section-head">
          <p className="section-head__eyebrow">Co s vlhkým domem uděláme</p>
          <h2 className="section-head__title">Čtyři způsoby, jak přerušit vzlínání</h2>
          <p className="section-head__note">
            Metodu nevybíráme podle katalogu, ale podle zdiva. Nejdřív přijedeme,
            změříme vlhkost a zasolení, pak navrhneme řešení a zpracujeme cenovou
            nabídku. Kombinace metod je u starých plzeňských domů spíš pravidlo.
          </p>
        </div>

        <ol className="metody__list">
          {metody.map((m) => (
            <li className="metoda" key={m.kod}>
              <div className="metoda__top">
                <span className="metoda__kod">{m.kod}</span>
                <span className="metoda__hloubka">{m.hloubka}</span>
              </div>
              <h3 className="metoda__nazev">{m.nazev}</h3>
              <p className="metoda__popis">{m.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="metody__figure">
          <img
            src="/section-1.webp"
            alt="Detail sanovaného zdiva s novou izolační clonou a sanační omítkou"
            loading="lazy"
          />
          <figcaption>
            Odkrytý sokl během sanace. Pod novou omítkou už je vodorovná clona,
            která nepustí vodu výš.
          </figcaption>
        </figure>
      </section>

      <section className="firma" id="firma">
        <div className="firma__grid">
          <div className="firma__text">
            <p className="section-head__eyebrow">Kdo přijede k vám domů</p>
            <h2 className="firma__title">
              Řemeslo, které v Plzni děláme od roku 1993
            </h2>
            <p className="firma__body">
              HABEŠ – stálé sucho s.r.o. vzniklo z živnostenské firmy Libora
              Hasmana, založené v roce 1993. Od začátku jedno téma: dostat vodu
              ze zdiva ven a udržet ji venku. Pracujeme s vlastními tuzemskými
              lidmi, které pravidelně školíme na technologické postupy i nové
              materiály.
            </p>
            <p className="firma__body">
              Máme vlastní autodopravu do i nad 3,5 t a vlastní strojní vybavení,
              takže na stavbu nečekáme na subdodavatele. A pro klid duše jsme
              pojištěni na 25 milionů korun.
            </p>

            <dl className="firma__cisla">
              {cislaHabese.map((x) => (
                <div className="firma__cislo" key={x.c}>
                  <dt>{x.c}</dt>
                  <dd>{x.p}</dd>
                </div>
              ))}
            </dl>

            <div className="firma__adresa">
              <p>
                <strong>Libor Hasman</strong><br />
                Pod Všemi Svatými 110/73, 301 00 Plzeň
              </p>
              <p className="firma__ic">IČO 26397048 · DIČ CZ26397048 · KS v Plzni, oddíl C, vložka 17662</p>
              <a className="btn btn--solid" href="tel:+420602000000">Zavolat Liborovi</a>
            </div>
          </div>

          <figure className="firma__figure">
            <img
              src="/section-2.webp"
              alt="Tým firmy HABEŠ při izolačních pracích na základech domu v Plzni"
              loading="lazy"
            />
            <figcaption>Naši lidé na plzeňské stavbě — vlastní technika, vlastní parta.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
