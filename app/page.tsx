import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protisk s.r.o. — tiskárna a výroba reklamy, Hradec Králové",
  description:
    "Protisk Hradec Králové: tisk, grafika, vazba diplomových prací, samolepky, cedule, vizitky, razítka i potisk triček. Wonkova 340, tel. 495 220 028.",
  openGraph: {
    title: "Protisk — tisk a reklama, Hradec Králové",
    description:
      "Od vizitky po ceduli. Tiskneme, řežeme, vážeme a potiskujeme na Wonkově ulici v Hradci Králové.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "CMYK",
    nazev: "Tisk a grafika",
    popis:
      "Letáky, plakáty, brožury i katalogy. Grafiku připravíme, nebo zkontrolujeme vaše podklady před tiskem — bez příplatku.",
    detail: "od 1 kusu, data přes e-mail",
  },
  {
    kod: "ŘEZ",
    nazev: "Samolepky, cedule, štítky",
    popis:
      "Řezaná i tištěná reklama na výlohy, auta a fasády. Odolné venkovní fólie, které vydrží hradecké počasí.",
    popiska: true,
    detail: "polep na míru, i s montáží",
  },
  {
    kod: "VAZBA",
    nazev: "Diplomové práce a vazby",
    popis:
      "Pevná vazba s ražbou do 24 hodin, v sezóně i na počkání. Kroužková vazba a laminace na místě, zatímco čekáte.",
    detail: "expres do druhého dne",
  },
  {
    kod: "RAZ",
    nazev: "Vizitky a razítka",
    popis:
      "Vizitky, které se neohnou v peněžence, a razítka Trodat s výměnným polštářkem. Návrh vám ukážeme před výrobou.",
    detail: "vizitky do 2 dnů",
  },
  {
    kod: "TEX",
    nazev: "Potisk triček a dárků",
    popis:
      "Trika, hrnky, propisky s vaším motivem. Jeden kus na narozeniny i stovka pro firemní tým — cenu spočítáme předem.",
    detail: "vlastní motiv i naše grafika",
  },
];

const duvody = [
  {
    titulek: "Jsme tiskárna, ne přeposílatel",
    text: "Stroje máme přímo na Wonkově. Když se něco pokazí nebo spěcháte, řešíme to hned u pultu — ne přes objednávkový formulář a týden čekání.",
  },
  {
    titulek: "Uprostřed Hradce, kousek od nádraží",
    text: "Wonkova 340, pět minut pěšky od hlavního nádraží. Zakázku si vyzvednete cestou z práce, parkování před domem.",
  },
  {
    titulek: "Studenti nás znají léta",
    text: "Diplomky vážeme pro hradecké fakulty každé jaro. Víme, jaké desky chce která katedra, a poradíme s formátem, než tisknete.",
  },
  {
    titulek: "Cena předem, žádné překvapení",
    text: "Zavolejte na 495 220 028 nebo napište, co potřebujete — do druhého dne máte přesnou cenu i termín. Platí to, co jsme řekli.",
  },
];

export default function Page() {
  return (
    <main className="pt">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Protisk — tiskárna a výroba reklamy">
        <div className="hero-inner">
          <header className="hero-top">
            <span className="wordmark">
              PRO<span className="wordmark-tisk">TISK</span>
              <span className="wordmark-reg">Hradec Králové · od r. 1994</span>
            </span>
            <a className="hero-tel" href="tel:+420495220028">
              495 220 028
            </a>
          </header>

          {/* Soutisková mřížka — signature prvek odvozený z tiskového archu */}
          <div className="reg-marks" aria-hidden="true">
            <span className="reg reg-tl" />
            <span className="reg reg-tr" />
            <span className="reg reg-bl" />
            <span className="reg reg-br" />
          </div>

          <div className="hero-stage">
            <p className="hero-eyebrow">Tiskárna a výroba reklamy · Wonkova 340</p>
            <h1 className="hero-title">
              <span className="pass pass-c" aria-hidden="true">Vytiskneme.</span>
              <span className="pass pass-m" aria-hidden="true">Vytiskneme.</span>
              <span className="pass pass-y" aria-hidden="true">Vytiskneme.</span>
              <span className="pass pass-k">Vytiskneme.</span>
            </h1>
            <p className="hero-sub">
              Od vizitky po ceduli na fasádu. Přinesete data, my tiskneme, řežeme,
              vážeme a potiskujeme — všechno pod jednou střechou v Hradci Králové.
            </p>
            <ul className="hero-tags" aria-label="Co u nás vyrobíte">
              <li>tisk &amp; grafika</li>
              <li>samolepky &amp; cedule</li>
              <li>diplomové práce</li>
              <li>vizitky &amp; razítka</li>
              <li>trika &amp; dárky</li>
            </ul>
          </div>

          <div className="hero-strip" aria-hidden="true">
            <span className="chip chip-c">C</span>
            <span className="chip chip-m">M</span>
            <span className="chip chip-y">Y</span>
            <span className="chip chip-k">K</span>
            <span className="strip-note">soutisk v pořádku — jedeme</span>
          </div>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <header className="section-head">
            <p className="section-eyebrow">Zakázková výroba</p>
            <h2 id="sluzby-h">Co vám vyrobíme</h2>
            <p className="section-lead">
              Každá zakázka projde rukama, ne jen strojem. Malé náklady bereme
              stejně vážně jako velké — i jedno triko, i jedna diplomka.
            </p>
          </header>

          <div className="sluzby-grid">
            {sluzby.map((s) => (
              <article className="karta" key={s.kod}>
                <span className="karta-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <p className="karta-detail">{s.detail}</p>
              </article>
            ))}
            <article className="karta karta-vzornik" aria-label="Barevnost tiskneme přesně">
              <span className="vzornik" aria-hidden="true">
                <i className="v v-c" />
                <i className="v v-m" />
                <i className="v v-y" />
                <i className="v v-k" />
              </span>
              <h3>Barvy sedí</h3>
              <p>
                Firemní barvu vám vytiskneme stejně dnes i za rok. Vzorek
                schválíte dřív, než pustíme celý náklad.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-inner">
          <header className="section-head section-head-inv">
            <p className="section-eyebrow">Proč Protisk</p>
            <h2 id="duvera-h">Tiskárna, do které se chodí osobně</h2>
          </header>

          <dl className="duvody">
            {duvody.map((d) => (
              <div className="duvod" key={d.titulek}>
                <dt>{d.titulek}</dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>

          <div className="duvera-adresa">
            <p className="adresa-radek">
              <strong>Protisk s.r.o.</strong> · Wonkova 340, 500 02 Hradec Králové
            </p>
            <p className="adresa-radek">
              <a href="tel:+420495220028">495 220 028</a> ·{" "}
              <a href="tel:+420603908909">603 908 909</a> ·{" "}
              <a href="mailto:info@protisk-hk.cz">info@protisk-hk.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
