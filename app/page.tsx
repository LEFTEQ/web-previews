export default function Page() {
  const materials = [
    { name: "Žula", origin: "ČR, Indie, Brazílie", note: "Nejtvrdší volba — fasády, dlažby, kuchyňské desky. Nevadí jí mráz ani víno." },
    { name: "Mramor", origin: "Itálie, Řecko, Španělsko", note: "Klasika interiérů. Obklady, koupelny, krby — kámen, který má kresbu jako podpis." },
    { name: "Pískovec", origin: "Východní Čechy", note: "Domácí kámen Hradecka. Fasády, restaurování, sokly — patří sem odjakživa." },
    { name: "Travertin & onyx", origin: "Turecko, Írán", note: "Pro odvážnější interiéry. Onyx umí prosvítat — stěna, která svítí." },
  ];

  const works = [
    {
      num: "tl. 30 mm",
      title: "Zadem větrané fasády",
      text: "Masivní kamenný obklad na nerezových kotvách. Zaměříme stavbu, zpracujeme kladečský plán, vyrobíme a namontujeme. Fasáda, která vydrží déle než hypotéka.",
    },
    {
      num: "tl. 20 mm",
      title: "Obklady v interiéru",
      text: "Stěny, podlahy, schodiště, koupelny. Desky řežeme na míru ve Stěžerách — spáry navazují, kresba kamene běží přes celou stěnu.",
    },
    {
      num: "tl. 30 mm",
      title: "Kuchyňské pracovní desky",
      text: "Žula nebo tvrzený kámen, výřezy pro dřez a varnou desku přesně podle spotřebičů. Zaměření u vás doma, montáž do jednoho dne.",
    },
    {
      num: "na míru",
      title: "Doplňující kamenické práce",
      text: "Parapety, sokly, krbové portály, restaurování pískovcových prvků. Menší zakázky bereme stejně vážně jako fasádu banky.",
    },
  ];

  return (
    <main className="ke">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Kámen Engineering">
            <span className="wordmark-kamen">KÁMEN</span>
            <span className="wordmark-eng">ENGINEERING</span>
          </div>
          <p className="hero-loc">Kamenický závod Stěžery&nbsp;· Hradec Králové&nbsp;· od&nbsp;1992</p>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="line line-1">Přírodní kámen</span>
            <span className="line line-2">od zaměření</span>
            <span className="line line-3">po&nbsp;poslední spáru<span className="tecka">.</span></span>
          </h1>
          <p className="hero-sub">
            Kamenické práce na klíč — fasády, interiéry i kuchyňské desky.
            Vlastní výroba, vlastní montáž, sklad žuly, mramoru, travertinu
            a&nbsp;onyxu z&nbsp;celého světa.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420495000000">Zavolat do závodu</a>
            <a className="btn btn-line" href="mailto:info@kamen-engineering.cz">Napsat poptávku</a>
          </div>
        </div>

        {/* signature: kladečský plán — spárořez fasády */}
        <div className="sparorez" aria-hidden="true">
          <div className="deska d1"><span>žula</span></div>
          <div className="deska d2"><span>mramor</span></div>
          <div className="deska d3"><span>pískovec</span></div>
          <div className="deska d4"><span>travertin</span></div>
          <div className="deska d5"><span>onyx</span></div>
          <div className="deska d6"></div>
          <div className="deska d7"><span>tl. 20 mm</span></div>
          <div className="deska d8"></div>
          <div className="deska d9"><span>tl. 30 mm</span></div>
        </div>

        <p className="hero-caption">Spárořez — kladečský plán fasády. Každá deska má na výkrese své místo dřív, než ji řízneme.</p>
      </header>

      {/* ===== SEKCE 1: CO VYROBÍME A NAMONTUJEME ===== */}
      <section className="prace" aria-labelledby="prace-h">
        <div className="sec-head">
          <p className="eyebrow">Výroba a montáž</p>
          <h2 id="prace-h">Co vyrobíme a&nbsp;namontujeme</h2>
          <p className="sec-lead">
            Nejsme překupníci. Kámen zaměříme na stavbě, nařežeme ve vlastním
            závodě ve Stěžerách a&nbsp;namontujeme vlastními partami. Jedna firma,
            jedna odpovědnost.
          </p>
        </div>

        <ul className="prace-grid">
          {works.map((w) => (
            <li key={w.title} className="prace-card">
              <span className="prace-num">{w.num}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ul>

        <div className="sklad">
          <h3>Sklad kamene ve Stěžerách</h3>
          <p>
            Přijeďte si kámen vybrat naživo — žádný vzorník nenahradí desku
            2&nbsp;×&nbsp;3&nbsp;metry před vámi. Skladem držíme desky tloušťky 2 a&nbsp;3&nbsp;cm
            v&nbsp;různých povrchových úpravách.
          </p>
          <dl className="sklad-list">
            {materials.map((m) => (
              <div key={m.name} className="sklad-row">
                <dt>{m.name}</dt>
                <dd className="sklad-origin">{m.origin}</dd>
                <dd className="sklad-note">{m.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O NÁS ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sec-head sec-head-inverse">
          <p className="eyebrow">Proč s námi</p>
          <h2 id="duvera-h">Třicet let řežeme kámen pro&nbsp;architekty i&nbsp;rodinné domy</h2>
        </div>

        <div className="duvera-grid">
          <div className="duvera-item">
            <span className="duvera-mark">1992</span>
            <h3>Založeno v Hradci Králové</h3>
            <p>
              Přes tři dekády na stavebním trhu. Pracujeme pro architektonická
              a&nbsp;designová studia, stavební firmy i&nbsp;soukromé investory —
              od&nbsp;bytové koupelny po&nbsp;fasádu administrativní budovy.
            </p>
          </div>
          <div className="duvera-item">
            <span className="duvera-mark">1&nbsp;firma</span>
            <h3>Na klíč znamená na klíč</h3>
            <p>
              Zaměření, výrobní a&nbsp;montážní dokumentace, výroba, montáž.
              Nepředáváte zakázku mezi čtyřmi subdodavateli — všechno drží
              jedna parta a&nbsp;jedno telefonní číslo.
            </p>
          </div>
          <div className="duvera-item">
            <span className="duvera-mark">ČR&nbsp;+&nbsp;svět</span>
            <h3>Domácí pískovec, světová žula</h3>
            <p>
              Samozřejmostí je kámen z&nbsp;České republiky — pískovce a&nbsp;žuly,
              které na východ Čech patří. Vedle nich sklad desek z&nbsp;Itálie,
              Indie, Brazílie či Turecka.
            </p>
          </div>
        </div>

        <blockquote className="citat">
          <p>„Kdo chce, hledá způsob, kdo nechce, hledá důvod.“</p>
          <cite>— Jan Werich · motto, které visí u nás v dílně</cite>
        </blockquote>
      </section>
    </main>
  );
}
