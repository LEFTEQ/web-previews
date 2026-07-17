import React from "react";

const SLUZBY = [
  {
    t: "Kanceláře a administrativa",
    d: "Pravidelný úklid open-space, zasedaček, kuchyněk i sociálního zázemí. Přijedeme, než dorazí první klient — nebo až všichni odejdou.",
  },
  {
    t: "Společné prostory domů",
    d: "Chodby, schodiště a vstupy bytových, činžovních i panelových domů. Stálý pracovník, který dům zná a je za něj zodpovědný.",
  },
  {
    t: "Mytí oken a prosklení",
    d: "Prosklené fasády, výlohy a interiérové příčky bez šmouh a kapek. Stěrka, teleskop a certifikovaná chemie.",
  },
  {
    t: "Generální a jednorázový úklid",
    d: "Po malování, stavbě nebo před předáním prostor. Od podlah po parapety, do každého kouta a spáry.",
  },
];

const VYHODY = [
  {
    n: "01",
    t: "Testovací měsíc",
    d: "Nový klient může do měsíce odejít bez výpovědní doby. Věříme tomu, co odvádíme.",
  },
  {
    n: "02",
    t: "Certifikované prostředky",
    d: "Uklízíme jen schválenými postupy a přípravky. Žádná náhodná chemie z regálu.",
  },
  {
    n: "03",
    t: "Náhrada do 24 hodin",
    d: "Vypadne pracovník? Z prověřené databáze pošleme obratem jiného. Úklid nestojí.",
  },
  {
    n: "04",
    t: "Interní kontrola",
    d: "Kvalitu kontrolujeme sami a pravidelně. Nápravu řešíme hned, ne po stížnosti.",
  },
  {
    n: "05",
    t: "Náhradní plnění",
    d: "Splníme za vás zákonný podíl zaměstnávání OZP. Doklad dodáme ke smlouvě.",
  },
  {
    n: "06",
    t: "Večerní termíny",
    d: "Přijedeme, když je kancelář prázdná — klidně po setmění. Čas si držíte vy.",
  },
];

const REFERENCE = [
  {
    q: "Uklízí nám několik bytových domů včetně bytů už delší dobu a vždy je vše naprosto v pořádku. Spolupráce funguje na jedničku.",
    a: "Alena",
    r: "správa bytových domů",
  },
  {
    q: "Uklízí pro nás už několik let — bytové domy i administrativní budovy. Spokojeni jsme s kvalitou i s dodržováním termínů. Doporučuji.",
    a: "Radek Štědrý",
    r: "facility manažer",
  },
  {
    q: "Objednali jsme mytí oken a generální úklid kanceláří. S ničím nebyl problém, navázali jsme další spoluprací. Doporučuji.",
    a: "Miloslava Senecká",
    r: "kancelářské prostory",
  },
];

export default function Page() {
  return (
    <main className="pu">
      <header className="pu-top">
        <a className="pu-mark" href="#top" aria-label="Pražský úklid — domů">
          <span className="pu-mark-blade" aria-hidden="true" />
          <span className="pu-mark-txt">
            Pražský<span className="pu-mark-strong">úklid</span>
          </span>
        </a>
        <nav className="pu-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a className="pu-nav-tel" href="tel:777111222">777 111 222</a>
        </nav>
      </header>

      <section className="pu-hero" id="top">
        <div className="pu-hero-grid" aria-hidden="true" />
        <div className="pu-hero-inner">
          <p className="pu-eyebrow">Úklid kanceláří &middot; Praha &middot; od roku 2016</p>
          <h1 className="pu-h1">
            Setřeme to
            <br />
            <span className="pu-swipe">do čista</span> —
            <br />
            než přijdete.
          </h1>
          <p className="pu-lede">
            Pravidelný úklid kanceláří a společných prostor v Praze.
            Certifikované postupy, vlastní kontrola kvality a náhrada
            pracovníka do 24 hodin.
          </p>
          <div className="pu-cta">
            <a className="pu-btn pu-btn-lime" href="tel:777111222">
              Nezávazná poptávka
            </a>
            <a className="pu-btn pu-btn-ghost" href="#sluzby">
              Co uklidíme
            </a>
          </div>
        </div>
        <div className="pu-frost" aria-hidden="true" />
      </section>

      <section className="pu-sec pu-sluzby" id="sluzby">
        <div className="pu-wrap">
          <div className="pu-sec-head">
            <p className="pu-eyebrow pu-eyebrow-dark">Co uklidíme</p>
            <h2 className="pu-h2">
              Kancelář, dům i prosklení — jedna firma, jeden zodpovědný člověk.
            </h2>
          </div>
          <div className="pu-cards">
            {SLUZBY.map((s) => (
              <article className="pu-card" key={s.t}>
                <span className="pu-card-blade" aria-hidden="true" />
                <h3 className="pu-card-t">{s.t}</h3>
                <p className="pu-card-d">{s.d}</p>
              </article>
            ))}
          </div>
          <p className="pu-note">
            Naši klienti jsou hlavně v Praze a okolí — úklid ale zajistíme
            i jinde v ČR. Chybí vám služba ze seznamu? Zeptejte se, pokryjeme
            i vývoz odpadu či čištění fasád.
          </p>
        </div>
      </section>

      <section className="pu-sec pu-proc" id="reference">
        <div className="pu-wrap">
          <div className="pu-sec-head">
            <p className="pu-eyebrow">Proč Pražský úklid</p>
            <h2 className="pu-h2 pu-h2-light">
              Malá firma, blízký vztah, měřitelná kvalita.
            </h2>
          </div>
          <ol className="pu-vyhody">
            {VYHODY.map((v) => (
              <li className="pu-vyhoda" key={v.n}>
                <span className="pu-vyhoda-n" aria-hidden="true">
                  {v.n}
                </span>
                <div>
                  <h3 className="pu-vyhoda-t">{v.t}</h3>
                  <p className="pu-vyhoda-d">{v.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pu-ref-head">
            <p className="pu-eyebrow">Hodnocení zákazníků</p>
          </div>
          <div className="pu-refs">
            {REFERENCE.map((r) => (
              <figure className="pu-ref" key={r.a}>
                <span className="pu-ref-blade" aria-hidden="true" />
                <blockquote className="pu-ref-q">{r.q}</blockquote>
                <figcaption className="pu-ref-a">
                  <span className="pu-ref-name">{r.a}</span>
                  <span className="pu-ref-role">{r.r}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
