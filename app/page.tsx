import type { ReactNode } from "react";

type Service = {
  code: string;
  title: string;
  material: string;
  text: string;
};

type Era = {
  year: string;
  text: string;
};

const services: Service[] = [
  {
    code: "S·01",
    title: "Schodiště na míru",
    material: "ocel + dřevo / sklo",
    text: "Nosnou konstrukci svaříme z oceli, stupně doplníme dřevem, sklem nebo kamenem. Rovná, točitá i vřetenová schodiště přesně do vašeho prostoru.",
  },
  {
    code: "S·02",
    title: "Zábradlí a madla",
    material: "nerez / mosaz / sklo",
    text: "Typová madla z nerezu, mosazi, skla a oceli — i zcela atypická řešení pro neobvyklé projekty, kde katalog nestačí.",
  },
  {
    code: "S·03",
    title: "Nábytek a interiéry",
    material: "truhlárna od 1996",
    text: "Vlastní truhlárna dotváří kompletní schodiště a vyrábí atypické nábytkové prvky do bytů, prodejen, kanceláří i společenských prostor.",
  },
  {
    code: "S·04",
    title: "Markýzy",
    material: "ocelová konstrukce",
    text: "Kovové konstrukce markýz nad vchody a terasami — navržené na míru fasádě a tomu, kolik stínu skutečně potřebujete.",
  },
  {
    code: "S·05",
    title: "Oddělovací stěny",
    material: "kov + sklo",
    text: "Kov a sklo, které rozdělí prostor, aniž by ho zatemnily. Prosklené příčky do bytů, kanceláří i provozoven.",
  },
  {
    code: "S·06",
    title: "Sprchové kouty",
    material: "nerez / sklo",
    text: "Nerezové profily a kalené sklo přesně na rozměr koupelny — bez kompromisů typových rozměrů z obchodu.",
  },
  {
    code: "S·07",
    title: "Ploty, brány a vrata",
    material: "ocel",
    text: "Kované i střídmě moderní ploty, brány a vrata pro dům i firemní areál — poctivá zámečnická práce, která vydrží.",
  },
  {
    code: "S·08",
    title: "Opláštění výtahů",
    material: "nerez · pro Otis",
    text: "Pro akciovou společnost Otis průběžně dodáváme atypická opláštění výtahových kabin, šachetní dveře a portály.",
  },
];

const timeline: Era[] = [
  {
    year: "1992",
    text: "Začínáme výrobou atypických svítidel a halogenových lamp. U nich rychle roste podíl přesné zámečnické práce.",
  },
  {
    year: "1993–95",
    text: "Těžiště výroby se přesouvá ke kovu — zábradlí, schodiště, nábytek, markýzy, ploty a vrata na míru.",
  },
  {
    year: "1996",
    text: "Otevíráme vlastní truhlárnu, která dotváří kompletní realizace schodišť a vyrábí nábytkové prvky interiérů.",
  },
  {
    year: "dnes",
    text: "Realizujeme interiéry na míru po celém regionu a jako dlouholetý dodavatel opláštíme kabiny výtahů Otis.",
  },
];

function DimEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-line" aria-hidden="true" />
      <span className="eyebrow-text">{children}</span>
    </p>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="TH Design — kovářské studio">
          <span className="wordmark-th">TH</span>
          <span className="wordmark-slash" aria-hidden="true">/</span>
          <span className="wordmark-design">DESIGN</span>
          <span className="wordmark-sub">kovářské studio · Č. Budějovice</span>
        </a>
        <a className="topbar-call" href="tel:+420602443588">
          <span className="topbar-call-label">volejte do dílny</span>
          <span className="topbar-call-num">602 443 588</span>
        </a>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detail kované ocelové konstrukce z dílny TH Design v Českých Budějovicích"
            className="hero-img"
            width={1600}
            height={1000}
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <div className="hero-spec" aria-hidden="true">
            <span className="hero-spec-line" />
            <span className="hero-spec-text">OCEL · NEREZ · MOSAZ · SKLO</span>
          </div>

          <div className="hero-copy">
            <p className="hero-eyebrow anim">
              Kovářství &amp; atypické zámečnictví — od roku 1992
            </p>
            <h1 className="hero-title anim">
              Ohýbáme ocel, nerez<br /> a mosaz do tvarů,<br />
              <em>které nejsou v katalogu.</em>
            </h1>
            <p className="hero-lead anim">
              TH Design v Českých Budějovicích navrhuje a vyrábí atypická
              schodiště, zábradlí, madla i nábytek. Od prvního nákresu přes svar
              až po montáž u vás doma.
            </p>
            <div className="hero-actions anim">
              <a className="btn btn-primary" href="tel:+420602443588">
                Zavolat 602 443 588
              </a>
              <a className="btn btn-ghost" href="#vyroba">
                Co vyrábíme
              </a>
            </div>
          </div>

          <div className="hero-stamp anim" aria-hidden="true">
            <span>EST.</span>
            <strong>1992</strong>
            <span>Č. BUDĚJOVICE</span>
          </div>
        </div>
      </section>

      <section className="section section-light" id="vyroba">
        <div className="container">
          <div className="section-head">
            <DimEyebrow>01 — výrobní program</DimEyebrow>
            <h2 className="section-title">Co u nás vykujeme a vyrobíme</h2>
            <p className="section-intro">
              Osm věcí, které děláme na míru a poctivě. Každý kus začíná nákresem
              a končí tím, že ho u vás usadíme a seřídíme na milimetr.
            </p>
          </div>

          <div className="work-layout">
            <figure className="work-figure">
              <img
                src="/section-1.webp"
                alt="Realizace atypického schodiště a zábradlí od TH Design"
                width={1200}
                height={1500}
              />
              <figcaption>Atypické schodiště se skleněnou výplní — vlastní realizace.</figcaption>
            </figure>

            <ul className="services">
              {services.map((s) => (
                <li className="service" key={s.code}>
                  <div className="service-top">
                    <span className="service-code">{s.code}</span>
                    <span className="service-material">{s.material}</span>
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-text">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="o-nas">
        <div className="container">
          <div className="section-head">
            <DimEyebrow>02 — dílna od roku 1992</DimEyebrow>
            <h2 className="section-title">Tři desetiletí u kovadliny</h2>
            <p className="section-intro">
              Nezačínáme dnes. Za tři dekády jsme z výroby svítidel vyrostli v
              dílnu, která zvládne kov, sklo i dřevo pod jednou střechou.
            </p>
          </div>

          <div className="about-layout">
            <ol className="timeline">
              {timeline.map((e) => (
                <li className="era" key={e.year}>
                  <span className="era-node" aria-hidden="true" />
                  <span className="era-year">{e.year}</span>
                  <p className="era-text">{e.text}</p>
                </li>
              ))}
            </ol>

            <div className="about-side">
              <figure className="about-figure">
                <img
                  src="/section-2.webp"
                  alt="Kovářská a zámečnická práce v dílně TH Design"
                  width={1200}
                  height={900}
                />
              </figure>

              <div className="workshop-card">
                <p className="workshop-label">Najdete nás v dílně</p>
                <p className="workshop-addr">
                  Družstevní 7<br />
                  370 06 České Budějovice
                </p>
                <dl className="workshop-contacts">
                  <div>
                    <dt>Telefon</dt>
                    <dd>
                      <a href="tel:+420602443588">+420 602 443 588</a>
                    </dd>
                  </div>
                  <div>
                    <dt>E-mail</dt>
                    <dd>
                      <a href="mailto:thdesign@seznam.cz">thdesign@seznam.cz</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
