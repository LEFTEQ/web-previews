import React from "react";

const services = [
  {
    id: "01",
    title: "Výměna čelního skla",
    lead: "Nové sklo do většiny značek skladem",
    body: "Prasklé nebo probité čelní sklo vyměníme originálem i kvalitním neoriginálem. Vozidlo předáme s vytvrzeným lepidlem, které drží tuhost karoserie i airbagy.",
    detail: "Osobní i dodávky",
  },
  {
    id: "02",
    title: "Oprava praskliny",
    lead: "Než se trhlina rozjede přes celé sklo",
    body: "Malý kamínek do velikosti dvoukoruny vyplníme pryskyřicí a vytvrdíme UV lampou. Rychlejší i levnější než výměna a sklo zůstane původní.",
    detail: "Hotovo do 45 minut",
  },
  {
    id: "03",
    title: "Kalibrace kamer a asistentů",
    lead: "Aby ADAS po výměně zase viděl",
    body: "Po každé výměně čelního skla seřídíme kameru za zrcátkem — udržování v pruhu, čtení značek, nouzové brzdění. Bez kalibrace systém hlásí chybu.",
    detail: "Statická i dynamická",
  },
  {
    id: "04",
    title: "Autofólie a tónování",
    lead: "Méně slunce, více soukromí",
    body: "Tónujeme zadní partie i celé vozy fóliemi s certifikovanou propustností. Bublinám a odlupování se vyhneme řezáním na míru přímo na voze.",
    detail: "Protisluneční i bezpečnostní",
  },
  {
    id: "05",
    title: "Značení skel Cebia",
    lead: "Levnější pojistka proti krádeži",
    body: "Do všech skel vyleptáme jedinečný kód registrovaný v systému Cebia. Auto je hůř prodejné pro zloděje a řada pojišťoven dá slevu na povinné ručení.",
    detail: "Registrace v ceně",
  },
  {
    id: "06",
    title: "Pneuservis",
    lead: "Přezutí i oprava defektu",
    body: "Přezouváme, vyvažujeme a opravujeme pneumatiky osobních aut i dodávek. Když už jste u nás na skle, vezmeme i kola pod jednou střechou.",
    detail: "Sezónní i akutní",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Autosklo Lassy, úvodní stránka">
          <span className="wordmark__name">LASSY</span>
          <span className="wordmark__sub">autosklo&nbsp;·&nbsp;Brno</span>
        </a>
        <a className="topbar__call" href="tel:+420603293438">
          <span className="topbar__calllabel">Autoskla Brno</span>
          <span className="topbar__callnum">603 293 438</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Technik Autoskla Lassy vsazuje nové čelní sklo do vozu v dílně v Brně"
            className="hero__img"
          />
          <div className="hero__crack" aria-hidden="true">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              <g className="crack" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="200" cy="200" r="10" />
                <circle cx="200" cy="200" r="20" strokeDasharray="2 6" />
                <path d="M200 200 L60 90" />
                <path d="M200 200 L350 70" />
                <path d="M200 200 L370 260" />
                <path d="M200 200 L250 380" />
                <path d="M200 200 L40 300" />
                <path d="M200 200 L110 380" />
                <path d="M120 145 L70 130" />
                <path d="M275 135 L300 100" />
                <path d="M285 230 L330 220" />
                <path d="M225 290 L235 340" />
                <path d="M120 250 L80 270" />
              </g>
            </svg>
          </div>
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Autosklo Lassy · Křenová 51, Brno</p>
          <h1 className="hero__title">
            Prasklina se <span className="hero__accent">nezastaví</span> sama.
            My ano.
          </h1>
          <p className="hero__lead">
            Odštípnutý kamínek vyplníme dřív, než přeběhne přes celé sklo.
            Když už je pozdě, vsadíme nové a hned zkalibrujeme kamery za
            zrcátkem — auto odjíždí připravené.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420603293438">Zavolat na dílnu</a>
            <a className="btn btn--ghost" href="#sluzby">Co opravujeme</a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Prasklina hotová do</dt>
              <dd>45 min</dd>
            </div>
            <div>
              <dt>Sklo obvyklých značek</dt>
              <dd>skladem</dd>
            </div>
            <div>
              <dt>Pobočky</dt>
              <dd>Brno · Znojmo</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Od kamínku po kalibraci</p>
          <h2 id="sluzby-nadpis" className="section-head__title">Šest věcí, se kterými k nám jezdíte</h2>
          <p className="section-head__note">
            Všechno pod jednou střechou na Křenové — nemusíte objíždět tři dílny
            kvůli jednomu prasklému sklu.
          </p>
        </div>

        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.id}>
              <span className="card__num">{s.id}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__lead">{s.lead}</p>
              <p className="card__body">{s.body}</p>
              <span className="card__detail">{s.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" aria-labelledby="onas-nadpis">
        <div className="trust__media">
          <img
            src="/section-1.webp"
            alt="Detail kalibrace asistenčního systému na čelním skle v dílně Autosklo Lassy"
            className="trust__img"
          />
          <img
            src="/section-2.webp"
            alt="Aplikace autofólie na okno vozu v Brně"
            className="trust__img trust__img--small"
          />
        </div>

        <div className="trust__text">
          <p className="section-head__eyebrow">O dílně</p>
          <h2 id="onas-nadpis" className="section-head__title">
            Rodinná dílna na Křenové, ne řetězec z billboardu
          </h2>
          <p className="trust__par">
            Sklo měníme v Brně i ve Znojmě roky. Přijedete, řekneme rovnou,
            jestli stačí oprava za pár set korun nebo je nutná výměna — a ne
            naopak. S pojišťovnou si poradíme za vás, ať to nemusíte řešit
            u přepážky.
          </p>

          <ul className="trust__points">
            <li>
              <strong>Kalibrace hned po výměně.</strong> Kameru za zrcátkem
              seřídíme na místě, ať asistenti v pruhu i nouzové brzdění zase
              fungují.
            </li>
            <li>
              <strong>Řešíme pojistnou událost.</strong> Škodu z havarijního
              pojištění i povinného ručení nahlásíme a vyúčtujeme přímo
              s pojišťovnou.
            </li>
            <li>
              <strong>Značení Cebia se slevou na pojistku.</strong> Kód do skel
              vyleptáme a zaregistrujeme — auto je pro zloděje nezajímavé.
            </li>
          </ul>

          <div className="branches">
            <div className="branch">
              <h3 className="branch__name">Pobočka Brno</h3>
              <p className="branch__addr">Křenová 51, Brno</p>
              <a className="branch__tel" href="tel:+420603293438">Autoskla 603 293 438</a>
              <a className="branch__tel" href="tel:+420734508954">Pneuservis 734 508 954</a>
            </div>
            <div className="branch">
              <h3 className="branch__name">Pobočka Znojmo</h3>
              <p className="branch__addr">Dobšická 5, Znojmo</p>
              <a className="branch__tel" href="tel:+420733587744">Autoskla 733 587 744</a>
              <a className="branch__tel" href="tel:+420739201819">Pneuservis 739 201 819</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
