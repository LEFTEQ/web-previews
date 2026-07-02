const sluzby = [
  {
    kod: "VYM",
    nazev: "Výměna a montáž autoskel",
    popis:
      "Čelní, boční i zadní skla pro osobní, užitková a nákladní vozy, autobusy i zemědělské stroje. Skla držíme skladem, takže většinu výměn zvládneme do druhého dne.",
    doba: "cca 2–3 hodiny",
  },
  {
    kod: "SCE",
    nazev: "Oprava scelováním",
    popis:
      "Prasklinu od kamínku zacelíme pryskyřicí bez výměny celého skla. Platí ale: čím dřív přijedete, tím větší šance na opravu — do praskliny se nesmí dostat nečistoty.",
    doba: "do 45 minut",
  },
  {
    kod: "KAL",
    nazev: "Kalibrace asistenčních systémů",
    popis:
      "Po výměně čelního skla znovu seřídíme kamery a senzory (adaptivní tempomat, hlídání pruhu), aby asistenti fungovali přesně jako předtím.",
    doba: "součást výměny",
  },
  {
    kod: "TON",
    nazev: "Tónování autoskel",
    popis:
      "Certifikované fólie snižují oslnění a teplotu v kabině. A hlavně: tónované sklo při rozbití drží pohromadě — je to bezpečnostní prvek, ne jen vzhled.",
    doba: "dle vozu",
  },
  {
    kod: "KLI",
    nazev: "Čištění a plnění klimatizace",
    popis:
      "Doplníme chladivo, vyměníme filtr a vydezinfikujeme okruh. K tomu nabízíme i dezinfekci celého interiéru ozónem.",
    doba: "do 1 hodiny",
  },
  {
    kod: "INT",
    nazev: "Ruční čištění interiéru",
    popis:
      "Profesionální ruční mytí a čištění vozu uvnitř i zvenku. Auto vám vrátíme vyčištěné k nepoznání.",
    doba: "dle rozsahu",
  },
];

const kroky = [
  {
    cislo: "1",
    titulek: "Zavoláte nebo napíšete",
    text: "Řeknete nám značku, model a rok výroby vozu. Sklo najdeme ve skladu nebo objednáme — obvykle je do 24 hodin u nás.",
  },
  {
    cislo: "2",
    titulek: "Pojišťovnu vyřídíme za vás",
    text: "Škodu z havarijního pojištění nebo připojištění skel nahlásíme my. Ke každé pojišťovně známe postup — vy jen podepíšete.",
  },
  {
    cislo: "3",
    titulek: "Vyměníme — u nás, nebo u vás",
    text: "Přijedete do dílny v Hradci Králové, nebo vyjede naše mobilní služba kamkoliv po ČR. Prasklé sklo vás nesmí nechat stát na cestě.",
  },
];

export default function Page() {
  return (
    <main className="hak">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="topbar">
            <div className="wordmark" aria-label="AUTOSKLO H.A.K.">
              <span className="wm-auto">AUTOSKLO</span>
              <span className="wm-hak">H·A·K</span>
            </div>
            <div className="topbar-kontakt">
              <span className="topbar-mesto">Hradec Králové</span>
              <a className="topbar-tel" href="tel:+420495000000">
                +420 495 000 000
              </a>
            </div>
          </div>

          <div className="hero-grid">
            <div className="hero-text">
              <p className="hero-eyebrow">Sklenářství pro auta · od roku 1995</p>
              <h1 className="hero-title">
                <span className="ht-line ht-1">Prasklé</span>
                <span className="ht-line ht-2 ht-crack">autosklo?</span>
                <span className="ht-line ht-3">Zítra jedete.</span>
              </h1>
              <p className="hero-lead">
                Vyměníme nebo scelíme sklo ve vaší dílně v Hradci Králové — nebo
                přijedeme za vámi kamkoliv po ČR. Pojišťovnu vyřídíme my.
              </p>
              <div className="hero-akce">
                <a className="btn btn-hlavni" href="tel:+420495000000">
                  Zavolat hned
                </a>
                <a className="btn btn-vedlejsi" href="mailto:info@autosklo-hak.cz">
                  Napsat e-mail
                </a>
              </div>
              <ul className="hero-fakta">
                <li>
                  <strong>30 let</strong>
                  <span>zkušeností s autoskly</span>
                </li>
                <li>
                  <strong>Celá ČR</strong>
                  <span>mobilní výměna na cestě</span>
                </li>
                <li>
                  <strong>Skladem</strong>
                  <span>skla pro většinu vozů</span>
                </li>
              </ul>
            </div>

            {/* signature: čelní sklo s prasklinou od kamínku */}
            <div className="hero-sklo" aria-hidden="true">
              <svg viewBox="0 0 420 300" className="sklo-svg" role="presentation">
                {/* obrys čelního skla */}
                <path
                  className="sklo-obrys"
                  d="M60 30 C 150 8, 270 8, 360 30 C 395 105, 400 195, 385 270 L 35 270 C 20 195, 25 105, 60 30 Z"
                />
                {/* vrstvené sklo — vnitřní linka */}
                <path
                  className="sklo-vnitrni"
                  d="M75 45 C 155 26, 265 26, 345 45 C 375 112, 380 190, 368 254 L 52 254 C 40 190, 45 112, 75 45 Z"
                />
                {/* dopad kamínku */}
                <circle className="crack-bod" cx="210" cy="140" r="4" />
                {/* praskliny */}
                <path className="crack c1" d="M210 140 L 268 96 L 292 84" />
                <path className="crack c2" d="M210 140 L 262 158 L 318 170" />
                <path className="crack c3" d="M210 140 L 188 196 L 176 236" />
                <path className="crack c4" d="M210 140 L 152 122 L 108 118" />
                <path className="crack c5" d="M210 140 L 176 92 L 160 62" />
                <path className="crack c6" d="M210 140 L 236 190 L 250 224" />
                {/* odlesk */}
                <path className="sklo-odlesk" d="M110 60 C 160 44, 200 42, 240 46" />
              </svg>
              <p className="sklo-popisek">
                Prasklinu od kamínku scelíme do 45 minut — když přijedete včas.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-inner">
          <div className="sekce-hlava">
            <h2 id="sluzby-nadpis">Co pro vaše auto uděláme</h2>
            <p>
              Hlavní obor je sklo — výměny, opravy, tónování. K tomu vše, co ke
              sklu patří: kalibrace kamer, klimatizace i čistý interiér.
            </p>
          </div>
          <div className="sluzby-mrizka">
            {sluzby.map((s) => (
              <article className="sluzba" key={s.kod}>
                <div className="sluzba-hlava">
                  <span className="sluzba-kod">{s.kod}</span>
                  <span className="sluzba-doba">{s.doba}</span>
                </div>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JAK TO PROBÍHÁ + DŮVĚRA ===== */}
      <section className="postup" aria-labelledby="postup-nadpis">
        <div className="sekce-inner">
          <div className="sekce-hlava">
            <h2 id="postup-nadpis">Od praskliny k novému sklu ve třech krocích</h2>
            <p>
              Rozbité sklo je vždycky nečekaná starost. Proto celý postup
              zjednodušujeme na jeden telefonát.
            </p>
          </div>

          <ol className="kroky">
            {kroky.map((k) => (
              <li className="krok" key={k.cislo}>
                <span className="krok-cislo" aria-hidden="true">
                  {k.cislo}
                </span>
                <h3>{k.titulek}</h3>
                <p>{k.text}</p>
              </li>
            ))}
          </ol>

          <div className="duvera">
            <figure className="reference">
              <blockquote>
                „Paní s pánem na místě velice ochotní a příjemní. Montáž byla
                provedena dle předchozí domluvy a ve stanovený čas. Auto
                odevzdáno ve stejném stavu — samozřejmě s vyměněným sklem — jako
                při předání.“
              </blockquote>
              <figcaption>Jakub Kobera, zákazník</figcaption>
            </figure>
            <div className="duvera-fakta">
              <p className="df-radek">
                <strong>Od roku 1995</strong> montujeme autoskla v Hradci
                Králové — pro osobní vozy, kamiony, autobusy i traktory.
              </p>
              <p className="df-radek">
                <strong>Kalená skla na zakázku</strong> dodáme i pro zemědělské
                a stavební stroje, kde běžný rozměr nestačí.
              </p>
              <p className="df-radek">
                <strong>Pojistné události</strong> řešíme se všemi velkými
                pojišťovnami — poradíme s hlášením a papíry vyřídíme za vás.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
