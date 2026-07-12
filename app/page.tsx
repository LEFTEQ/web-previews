import React from "react";

const sluzby = [
  {
    sym: "§",
    nadpis: "Právo k nemovitostem",
    text: "Kupní, darovací, směnná i smlouva o smlouvě budoucí — sepis, návrh na vklad do katastru a advokátní úschova kupní ceny na oddělené účtu.",
    tag: "Katastr · úschova · vklad",
  },
  {
    sym: "§",
    nadpis: "Trestní právo",
    text: "Obhajoba od prvního výslechu, kvalifikovaná trestní oznámení i řádné a mimořádné opravné prostředky — odvolání, stížnost, dovolání, obnova řízení.",
    tag: "Obhajoba · oznámení · odvolání",
  },
  {
    sym: "§",
    nadpis: "Občanské právo hmotné",
    text: "Ochrana osobnosti, spotřebitelské spory, smlouvy uzavírané na dálku a odstoupení od nich. Poradíme dřív, než podepíšete.",
    tag: "Smlouvy · spotřebitel",
  },
  {
    sym: "§",
    nadpis: "Občanské právo procesní",
    text: "Zastupování fyzických i právnických osob před soudy a v exekučním řízení, sepis žalob i návrhů. Vedeme spor od podání po výkon rozhodnutí.",
    tag: "Soudy · exekuce · žaloby",
  },
  {
    sym: "§",
    nadpis: "Správní právo",
    text: "Řízení před katastrálním úřadem, vklady, zápisy a výmazy práv i zastupování v přestupkovém řízení včetně podání oznámení.",
    tag: "Úřady · přestupky",
  },
  {
    sym: "§",
    nadpis: "Další právní služby",
    text: "Prohlášení advokáta o pravosti podpisu jako náhrada úředního ověření a advokátní úschova peněz i listin. Praktické maličkosti, které šetří čas.",
    tag: "Ověření · úschova",
  },
];

export default function Page() {
  return (
    <main>
      <div className="topbar">
        <div className="topbar-inner">
          <a href="#uvod" className="wordmark" aria-label="JUDr. Martin Klimo, advokát — úvod">
            <span className="mono">§</span>
            <span>Klimo</span>
            <span className="sub">ADVOKÁT · BRNO</span>
          </a>
          <div className="topbar-meta">
            <span className="secure" aria-label="Zabezpečené spojení HTTPS">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
              </svg>
              Zabezpečeno
            </span>
            <a href="tel:+420603147513">+420 603 147 513</a>
            <a href="mailto:klimo@akklimo.cz">klimo@akklimo.cz</a>
          </div>
        </div>
      </div>

      <header className="hero" id="uvod">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="hero-eyebrow reveal">Advokátní kancelář · Sukova 4, Brno</p>
            <h1 className="reveal d1">
              Právo, které<br />
              <em>drží slovo.</em>
            </h1>
            <p className="hero-lead reveal d2">
              Od roku 2002 zastupuji klienty v Brně v trestních věcech, u nemovitostí
              i běžných sporech. Jeden advokát, se kterým řešíte celou věc — bez předávání spisu z ruky do ruky.
            </p>
            <div className="hero-actions reveal d3">
              <a className="btn btn-primary" href="tel:+420603147513">Zavolat 603 147 513</a>
              <a className="btn btn-ghost" href="#sluzby">Prohlédnout služby</a>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="/hero.webp"
              alt="Advokátní kancelář JUDr. Martina Klimo v centru Brna na Sukově ulici"
            />
            <svg className="hero-seal" viewBox="0 0 160 160" aria-hidden="true">
              <g className="ring">
                <circle cx="80" cy="80" r="70" fill="none" stroke="#a6863f" strokeWidth="1" />
                <circle cx="80" cy="80" r="58" fill="none" stroke="#a6863f" strokeWidth=".6" />
                <path id="sealPath" d="M80 16a64 64 0 1 1 0 128 64 64 0 0 1 0-128" fill="none" />
                <text fill="#661317" fontFamily="Fraunces, serif" fontSize="9.5" letterSpacing="3">
                  <textPath href="#sealPath" startOffset="2%">
                    · ADVOKÁT V BRNĚ OD ROKU 2002 · ČAK ·
                  </textPath>
                </text>
              </g>
              <text x="80" y="92" textAnchor="middle" fill="#8a1c22" fontFamily="Fraunces, serif" fontSize="44" fontWeight="600">§</text>
            </svg>
          </div>
        </div>
      </header>

      <section className="section" id="sluzby">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="section-index"><span className="pilcrow">¶</span> Přehled agend</span>
              <h2>Šest oborů, jedna kancelář</h2>
            </div>
            <p className="lede">
              Generální praxe znamená, že vaši věc nemusíte skládat z několika specialistů.
              Vyberte oblast, která vás pálí.
            </p>
          </div>

          <div className="para-list">
            {sluzby.map((s, i) => (
              <article className={"para reveal d" + (((i % 4) + 1))} key={s.nadpis}>
                <div className="para-sym" aria-hidden="true">{s.sym}</div>
                <div className="para-body">
                  <h3>{s.nadpis}</h3>
                  <p>{s.text}</p>
                  <span className="para-tag">{s.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="o-nas">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="section-index"><span className="pilcrow">¶</span> O kanceláři</span>
              <h2>Zavedená brněnská praxe</h2>
            </div>
            <p className="lede">
              Sídlíme v centru Brna na Sukově ulici, pár kroků od Moravského náměstí a soudů.
            </p>
          </div>

          <div className="about">
            <figure className="about-media reveal">
              <img
                src="/section-2.webp"
                alt="JUDr. Martin Klimo, advokát působící v Brně od roku 2002"
              />
              <figcaption>JUDr. Martin Klimo · advokát zapsaný u České advokátní komory</figcaption>
            </figure>

            <div className="about-text reveal d1">
              <p>
                Kancelář poskytuje generální právní služby už <span className="since">od roku 2002</span>.
                Těžištěm je trestní právo a obhajoba, vedle toho ale běžně řešíme převody nemovitostí,
                občanské spory i správní řízení — v nesporové i sporné agendě.
              </p>
              <p>
                Pracujeme přímo: s advokátem se domluvíte na dalším postupu, ceně i termínech dřív, než
                cokoli podepíšete. Žádné anonymní „oddělení“, ale jeden člověk, který za vaši věc ručí.
              </p>

              <dl className="facts">
                <div className="fact">
                  <dt>Sídlo</dt>
                  <dd>Sukova 49/4<br /><small>602 00 Brno</small></dd>
                </div>
                <div className="fact">
                  <dt>Praxe od</dt>
                  <dd>2002</dd>
                </div>
                <div className="fact">
                  <dt>Úřední hodiny</dt>
                  <dd>Po–Pá<br /><small>8:00 – 16:00</small></dd>
                </div>
                <div className="fact">
                  <dt>Spojení</dt>
                  <dd><small>+420 603 147 513<br />klimo@akklimo.cz</small></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
