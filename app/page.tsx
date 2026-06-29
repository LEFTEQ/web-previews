import type { CSSProperties } from "react";

export default function Page() {
  const sets = [
    { no: "01", name: "Piráti", note: "Lodní paluba, sudy, mořské bitvy a poklad pro nejmenší i dospělé." },
    { no: "02", name: "Fotbal", note: "Penalty na rychlost, stolní kopaná v životní velikosti, tribuna." },
    { no: "03", name: "Western", note: "Mechanický býk, lasování, zlatokopecké rýžování, saloon." },
    { no: "04", name: "Oktoberfest", name2: true, note: "Bavorské stany, pivní lavice, dechovka a krojovaná obsluha." },
    { no: "05", name: "Moto Day", note: "Čtyřkolky a buggyny do 70 km/h, motokáry, jízda s Hummerem H1." },
  ];

  const services = [
    { title: "Tématické sety na klíč", text: "Kompletní scéna, atrakce, technika i program v jednom konceptu — postavíme, odbavíme, sklidíme." },
    { title: "Mobilní reklama a roadshow", text: "Pojízdné poutače a putovní akce po městech, obcích a hypermarketech podle vaší trasy." },
    { title: "Pódia a ozvučení", text: "Stage, zvuk i světla pro koncerty, veletrhy a konference — od mikrofonu po velkou aparaturu." },
    { title: "Párty stany", text: "Zastřešení pro pár desítek i stovky hostů, ať počasí dělá cokoliv." },
    { title: "Zajištění umělců", text: "Kapely, moderátoři, baviči i hvězdy programu — domluvíme a přivezeme." },
  ];

  return (
    <main className="gm">
      <header className="gm-top">
        <a className="gm-logo" href="#" aria-label="GEMARE GROUP, úvodní stránka">
          <span className="gm-logo-main">GEMARE</span>
          <span className="gm-logo-sub">GROUP&nbsp;·&nbsp;Olomouc</span>
        </a>
        <a className="gm-call" href="tel:+420585000800">Zavolat&nbsp;585&nbsp;000&nbsp;800</a>
      </header>

      <section className="gm-hero">
        <img className="gm-hero-img" src="/hero.webp" alt="Večerní firemní akce GEMARE GROUP s nasvícenými atrakcemi a pódiem" />
        <div className="gm-hero-veil" aria-hidden="true" />
        <div className="gm-hero-inner">
          <p className="gm-eyebrow">Eventová agentura · akce na klíč od roku 2000</p>
          <h1 className="gm-poster">
            <span className="l l1">Atrakce</span>
            <span className="l l2">jsou</span>
            <span className="l l3">naše.</span>
            <span className="l l4 amber">Všechny.</span>
          </h1>
          <p className="gm-lede">
            Vlastníme největší portfolio zábavných a sportovních atrakcí v Česku a na Slovensku.
            Nic si nepůjčujeme — postavíme vám akci, jakou jinde nesehnají.
          </p>
          <a className="gm-cta" href="#sety">Prohlédnout katalog atrakcí</a>
        </div>
      </section>

      <section className="gm-sets" id="sety" aria-labelledby="sety-h">
        <div className="gm-head">
          <p className="gm-eyebrow dark">Katalog · tématické sety</p>
          <h2 id="sety-h" className="gm-h2">Vyberte si svět. Zbytek je na nás.</h2>
          <p className="gm-sub">Každý set přivezeme kompletní — scéna, atrakce, technika i lidé. Žádné skládání z více dodavatelů.</p>
        </div>

        <ol className="gm-list">
          {sets.map((s) => (
            <li className="gm-row" key={s.no}>
              <span className="gm-row-no">{s.no}</span>
              <span className="gm-row-name">{s.name}</span>
              <span className="gm-row-note">{s.note}</span>
            </li>
          ))}
        </ol>

        <h3 className="gm-svc-h">A k tomu celé zázemí akce</h3>
        <div className="gm-svc">
          {services.map((sv) => (
            <article className="gm-card" key={sv.title}>
              <h4>{sv.title}</h4>
              <p>{sv.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gm-about" aria-labelledby="about-h">
        <div className="gm-about-media">
          <img src="/section-2.webp" alt="Tým GEMARE GROUP při realizaci venkovní akce" />
        </div>
        <div className="gm-about-text">
          <p className="gm-eyebrow dark">O společnosti</p>
          <h2 id="about-h" className="gm-h2">Děláme zábavu jako řemeslo.</h2>
          <p className="gm-p">
            GEMARE GROUP realizuje akce na klíč pro firmy, města a obce, obchodní centra i sportovní kluby.
            Ročně postavíme přes 800 akcí a každou bereme jako originál — ne jako kopii té minulé.
          </p>

          <dl className="gm-facts">
            <div><dt>2000</dt><dd>na trhu nepřetržitě od tohoto roku</dd></div>
            <div><dt>800+</dt><dd>realizovaných akcí každý rok</dd></div>
            <div><dt>100&nbsp;%</dt><dd>atrakce v našem vlastnictví</dd></div>
            <div><dt>10&nbsp;mil.</dt><dd>pojištění odpovědnosti z provozu agentury (Kč)</dd></div>
          </dl>

          <p className="gm-disc">Diskrétnost u akcí pro klienty bereme jako samozřejmost.</p>
        </div>
      </section>
    </main>
  );
}
