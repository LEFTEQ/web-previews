import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      name: "3D-LAK a parciální zušlechtění",
      desc: "Vyzdvihneme jméno, logo nebo detail vrstvou UV laku, kterou ucítíte pod prsty. Reliéf, který mění obyčejnou vizitku v předmět, co si klient nechá na stole.",
      tag: "reliéfní UV lak",
    },
    {
      no: "02",
      name: "Digitální tisk na míru",
      desc: "Malé i velké náklady bez tiskových desek. Personalizované diáře, katalogy, obaly — každý kus může být jiný, cena zůstává rozumná.",
      tag: "od 1 do 5 000 kusů",
    },
    {
      no: "03",
      name: "Velkoformát a obrazy na stěnu",
      desc: "Obraz na recepci, polep, plakát A0. Realizovali jsme velkoformátovou grafiku přímo na míru interiérů — malý obraz do kanceláře i velký pro celou halu.",
      tag: "až po formát stěny",
    },
    {
      no: "04",
      name: "Vazba, ražba a distribuce",
      desc: "Vytiskneme, zušlechtíme, zabalíme a rozvezeme. Diáře denní A5, týdenní kapesní i měsíční plánovací — kompletně od nápadu po ruce adresáta.",
      tag: "vše pod jednou střechou",
    },
  ];

  return (
    <main className="dt">
      {/* HERO */}
      <header className="dt-hero">
        <nav className="dt-nav" aria-label="Hlavní navigace">
          <a className="dt-wordmark" href="#top">
            <span className="dt-wordmark__dum">dům</span>
            <span className="dt-wordmark__tisku">tisku</span>
            <span className="dt-wordmark__dot" aria-hidden="true"></span>
          </a>
          <ul className="dt-nav__links">
            <li><a href="#sluzby">Co tiskneme</a></li>
            <li><a href="#dilna">Chráněná dílna</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>

        <div className="dt-hero__grid" id="top">
          <div className="dt-hero__copy">
            <p className="dt-eyebrow"><span className="dt-eyebrow__mark">★</span> Tiskárna &amp; chráněná dílna · Ústí nad Labem-Střekov</p>
            <h1 className="dt-title">
              Dáme vašemu nápadu
              <span className="dt-title__lak"> lesk</span>,
              který <em>ucítíte</em> pod prsty.
            </h1>
            <p className="dt-lead">
              Jsme digitální tiskárna se specializací na 3D-LAK — reliéfní UV zušlechtění, po kterém vizitka, obal nebo diář přestane být papír a stane se předmětem. Od roku 2014 na Střekově.
            </p>
            <div className="dt-hero__actions">
              <a className="dt-btn dt-btn--primary" href="#kontakt">Poptat kalkulaci</a>
              <a className="dt-btn dt-btn--ghost" href="#sluzby">Prohlédnout, co umíme</a>
            </div>
            <dl className="dt-stats">
              <div><dt>Zakázek s lakem či fólií</dt><dd>5 000+</dd></div>
              <div><dt>Let v oboru polygrafie</dt><dd>25</dd></div>
              <div><dt>Náklad od</dt><dd>1 ks</dd></div>
            </dl>
          </div>

          <figure className="dt-hero__figure">
            <img
              src="/hero.webp"
              alt="Detail tiskoviny se zušlechtěným 3D-LAK reliéfem z produkce dům tisku"
              width={880}
              height={1100}
              className="dt-hero__img"
            />
            <figcaption className="dt-hero__cap">Reliéfní UV lak zblízka — světlo si s ním hraje jinak než s hladkým tiskem.</figcaption>
          </figure>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="dt-section dt-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="dt-section__head">
          <p className="dt-eyebrow">Co u nás vytisknete</p>
          <h2 id="sluzby-nadpis" className="dt-h2">Od nápadu po hotový, zušlechtěný a rozvezený kus.</h2>
        </div>

        <ol className="dt-cards">
          {services.map((s) => (
            <li className="dt-card" key={s.no}>
              <span className="dt-card__no" aria-hidden="true">{s.no}</span>
              <h3 className="dt-card__name">{s.name}</h3>
              <p className="dt-card__desc">{s.desc}</p>
              <span className="dt-card__tag">{s.tag}</span>
            </li>
          ))}
        </ol>

        <figure className="dt-banner">
          <img
            src="/section-1.webp"
            alt="Ukázka z portfolia dům tisku — personalizované tiskoviny a obaly"
            width={1400}
            height={720}
            className="dt-banner__img"
            loading="lazy"
          />
          <figcaption className="dt-banner__cap">
            <span>Z portfolia</span> Diáře na míru pro Magistrát Ústí nad Labem — denní A5, týdenní kapesní i měsíční plánovací.
          </figcaption>
        </figure>
      </section>

      {/* DŮVĚRA / CHRÁNĚNÁ DÍLNA */}
      <section className="dt-section dt-dilna" id="dilna" aria-labelledby="dilna-nadpis">
        <div className="dt-dilna__grid">
          <figure className="dt-dilna__figure">
            <img
              src="/section-2.webp"
              alt="Provoz tiskárny dům tisku v Ústí nad Labem"
              width={900}
              height={1080}
              className="dt-dilna__img"
              loading="lazy"
            />
          </figure>

          <div className="dt-dilna__copy">
            <p className="dt-eyebrow">Kdo to tiskne</p>
            <h2 id="dilna-nadpis" className="dt-h2">Jsme chráněná dílna. Vaše zakázka tady dává práci lidem, kteří ji jinde těžko hledají.</h2>
            <p className="dt-dilna__text">
              Když necháte tiskoviny u nás, nezískáte jen kvalitní polygrafii — podpoříte chráněné pracovní místo. Rychlost realizace, příjemné jednání a čtvrt století zkušeností z oboru máme, o zbytek se postaráme rádi.
            </p>

            <blockquote className="dt-quote">
              „Rád vám pomohu s technickou poptávkou na tiskoviny. Specializuji se na personalizované a hybridní zakázky.“
              <cite>Jiří Stibor · obchod a finance</cite>
            </blockquote>

            <div id="kontakt" className="dt-kontakt">
              <div className="dt-kontakt__row">
                <span className="dt-kontakt__label">Zavolat</span>
                <a href="tel:+420603337853">+420 603 337 853</a>
              </div>
              <div className="dt-kontakt__row">
                <span className="dt-kontakt__label">Napsat</span>
                <a href="mailto:info@dum-tisku.cz">info@dum-tisku.cz</a>
              </div>
              <div className="dt-kontakt__row">
                <span className="dt-kontakt__label">Dílna</span>
                <span>Hviezdoslavova 614/16, 400 03 Ústí nad Labem-Střekov</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
