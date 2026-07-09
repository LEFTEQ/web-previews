import type { CSSProperties } from "react";

export default function Page() {
  const legs = [
    {
      code: "07:40",
      label: "Svoz z depa",
      place: "Hradec Králové — Pražská třída",
      note: "Řidič nakládá ranní zásilky, sken každého balíku do GPORTALu.",
    },
    {
      code: "09:15",
      label: "Na trase",
      place: "Východní Čechy · Královéhradecký kraj",
      note: "Živá poloha na mapě, řidič vidí okno doručení i kód objednávky.",
    },
    {
      code: "11:50",
      label: "Předání příjemci",
      place: "U dveří, na recepci nebo do boxu",
      note: "Podpis na čtečce, foto předání, SMS a e-mail odletí do vteřiny.",
    },
    {
      code: "14:20",
      label: "Zpětná zásilka",
      place: "Vyzvednutí u vás cestou zpět",
      note: "Vratky a reklamační kusy vezmeme stejnou trasou, bez druhé jízdy.",
    },
  ];

  const services = [
    {
      tag: "Do rukou dnes",
      title: "Kurýr po Hradci",
      body: "Balík vyzvedneme do hodiny a rozvezeme po Hradci Králové ještě týž den. Ideální na vzorky, dokumenty a náhradní díly, které nemůžou čekat na noční třídění.",
      spec: ["Svoz do 60 minut", "Doručení týž den", "Do 30 kg / kus"],
    },
    {
      tag: "Východní Čechy",
      title: "Rozvoz po kraji",
      body: "Pravidelné okruhy po Královéhradeckém a Pardubickém kraji. Jedna trasa, jeden řidič, který zná vaše provozovny — od Náchoda po Chrudim.",
      spec: ["Ranní i odpolední okno", "Fixní řidič", "Doručení do D+1"],
    },
    {
      tag: "Křehké a paletové",
      title: "Palety a objemné",
      body: "Čelo s hydraulickým čelem na palety, popruhy a deky na nábytek a stroje. Naložíme, zajistíme a předáme bez škrábanců — s fotem stavu při nakládce.",
      spec: ["Hydraulické čelo", "Foto při nakládce", "Až 1 200 kg"],
    },
  ];

  return (
    <main className="geis">
      <header className="geis-nav" aria-label="Hlavní navigace">
        <a className="geis-mark" href="#top" aria-label="Geis CZ, kurýr Hradec Králové">
          <span className="geis-mark__box">G</span>
          <span className="geis-mark__word">
            Geis <em>kurýr</em>
          </span>
        </a>
        <nav className="geis-nav__links">
          <a href="#trasa">Trasa zásilky</a>
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Proč my</a>
        </nav>
        <a className="geis-nav__cta" href="#sluzby">
          Objednat svoz
        </a>
      </header>

      <section className="geis-hero" id="top">
        <div className="geis-hero__copy">
          <p className="geis-eyebrow">Kurýrní služba · Hradec Králové</p>
          <h1 className="geis-hero__title">
            Vyzvedneme<span className="geis-hero__stamp">do&nbsp;60&nbsp;min</span>
            <br />a&nbsp;doručíme <span className="geis-hero__accent">ještě dnes.</span>
          </h1>
          <p className="geis-hero__lead">
            Zavolejte a řidič vyráží z depa v Pražské třídě. Zásilku vidíte na
            mapě od naložení až po podpis příjemce — bez čekání na noční
            třídění a bez ztracených balíků.
          </p>
          <div className="geis-hero__actions">
            <a className="geis-btn geis-btn--solid" href="#sluzby">
              Objednat svoz
            </a>
            <a className="geis-btn geis-btn--ghost" href="#trasa">
              Kde je moje zásilka
            </a>
          </div>
          <dl className="geis-hero__stats">
            <div>
              <dt>Svoz</dt>
              <dd>do 60 min</dd>
            </div>
            <div>
              <dt>Kraj</dt>
              <dd>Východní Čechy</dd>
            </div>
            <div>
              <dt>Doručeno dnes</dt>
              <dd>98 % zásilek</dd>
            </div>
          </dl>
        </div>
        <figure className="geis-hero__media">
          <img
            src="/hero.webp"
            alt="Kurýr Geis nakládá balíky do dodávky v Hradci Králové"
            className="geis-hero__img"
            width={880}
            height={1040}
          />
          <figcaption className="geis-hero__ticket">
            <span className="geis-hero__ticket-code">HK-2481-CZ</span>
            <span className="geis-hero__ticket-line">Na trase · řidič Marek</span>
          </figcaption>
        </figure>
      </section>

      <section className="geis-trace" id="trasa" aria-labelledby="trasa-nadpis">
        <div className="geis-section-head">
          <p className="geis-eyebrow geis-eyebrow--dark">Cesta zásilky</p>
          <h2 id="trasa-nadpis">Jeden den, čtyři skeny, žádné hádání.</h2>
          <p className="geis-section-head__lead">
            Každá zastávka je záznam v GPORTALu. Vy i váš zákazník víte, kde
            balík je — nemusíte nikam volat.
          </p>
        </div>
        <ol className="geis-legs">
          {legs.map((leg, i) => (
            <li className="geis-leg" key={leg.code}>
              <span className="geis-leg__index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="geis-leg__time">{leg.code}</span>
              <h3 className="geis-leg__label">{leg.label}</h3>
              <p className="geis-leg__place">{leg.place}</p>
              <p className="geis-leg__note">{leg.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="geis-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="geis-section-head">
          <p className="geis-eyebrow">Co vozíme</p>
          <h2 id="sluzby-nadpis">Od obálky po paletu — pořád stejný řidič.</h2>
        </div>
        <div className="geis-cards">
          {services.map((s) => (
            <article className="geis-card" key={s.title}>
              <span className="geis-card__tag">{s.tag}</span>
              <h3 className="geis-card__title">{s.title}</h3>
              <p className="geis-card__body">{s.body}</p>
              <ul className="geis-card__spec">
                {s.spec.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <figure className="geis-services__media">
          <img
            src="/section-1.webp"
            alt="Naložená dodávka Geis připravená na rozvoz po Východních Čechách"
            width={1200}
            height={640}
          />
        </figure>
      </section>

      <section className="geis-trust" id="duvera" aria-labelledby="duvera-nadpis">
        <figure className="geis-trust__media">
          <img
            src="/section-2.webp"
            alt="Řidič Geis předává zásilku a snímá podpis příjemce na čtečce"
            width={900}
            height={1080}
          />
        </figure>
        <div className="geis-trust__copy">
          <p className="geis-eyebrow geis-eyebrow--dark">Proč lidi z Hradce volají nám</p>
          <h2 id="duvera-nadpis">
            Místní depo, řidiči, které poznáte podle jména.
          </h2>
          <p className="geis-trust__lead">
            Nejsme anonymní linka. Zásilky jezdí přes depo v Hradci Králové,
            trasy jezdí stejní řidiči a na telefonu je člověk, který ví, kde
            zrovna je vaše dodávka.
          </p>
          <ul className="geis-trust__list">
            <li>
              <strong>Foto a podpis u každého předání</strong>
              Doklad o doručení máte v mailu dřív, než řidič nastartuje.
            </li>
            <li>
              <strong>Zpětná zásilka cestou zpět</strong>
              Vratky a reklamace svezeme stejnou trasou — bez druhé jízdy navíc.
            </li>
            <li>
              <strong>Sledování bez volání</strong>
              GPORTAL ukáže polohu i okno doručení vám i vašemu zákazníkovi.
            </li>
          </ul>
          <p className="geis-trust__badge">
            <span>ISO/IEC 27001</span> Vaše data i adresy vozíme stejně pečlivě jako balíky.
          </p>
        </div>
      </section>
    </main>
  );
}
