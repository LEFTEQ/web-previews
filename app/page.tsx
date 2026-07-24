import { AiImage } from "./_ui";

const services = [
  {
    interval: "1× / 3 ROKY",
    title: "Kotel na tuhá paliva",
    body: "Každý kotel o příkonu 10 až 300 kW napojený na teplovodní topení musí jednou za tři roky projít kontrolou technického stavu a provozu. Přijedeme, proměříme a vystavíme protokol.",
    norm: "zákon č. 201/2012 Sb., §17",
  },
  {
    interval: "1× / ROK",
    title: "Spalinová cesta a komín",
    body: "Komín i kouřovod kontrolujeme a čistíme minimálně jednou ročně. Zanesená spalinová cesta bývá nejčastější příčinou požáru střechy i otravy oxidem uhelnatým.",
    norm: "vyhláška č. 34/2016 Sb.",
  },
  {
    interval: "DLE ČSN",
    title: "Revize hromosvodu",
    body: "Hromosvod chrání dům i lidi uvnitř před bleskem. Revizí ověříme, že jímače, svody i uzemnění drží normu, a řekneme rovnou, co je potřeba dotáhnout.",
    norm: "ČSN 34 1390 · ČSN EN 62305",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="TPT Servis — plynařství a revize, České Budějovice">
          <svg className="mark" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13 2c1.1 3.8-2 5.1-2 8.1a2 2 0 0 0 4 0c0-1.1.1-2 .9-3 1.2 1.9 2.1 3.4 2.1 6.4a8 8 0 1 1-16 0c0-4.5 4.4-6.6 5.5-12 .9 1.4 2.1 2.9 3.5 3.5z" />
          </svg>
          <span className="wordmark__text">
            <strong>TPT</strong>
            <span>SERVIS</span>
          </span>
        </a>
        <a className="topbar__phone" href="tel:+420777111222">
          <span className="topbar__phone-label">Objednávky kontrol</span>
          <span className="topbar__phone-num">777 111 222</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__text">
          <p className="eyebrow">REVIZE · KONTROLY · ČESKOBUDĚJOVICKO</p>
          <h1 className="hero__title">
            <span className="line line--1">Ať máte topení</span>
            <span className="line line--2">v pořádku —</span>
            <span className="line line--3">a v&nbsp;termínu.</span>
          </h1>
          <p className="hero__lead">
            Kontroly kotlů na tuhá paliva, spalinových cest i revize hromosvodů pro domy,
            chalupy a obce na Českobudějovicku. Přijedeme za vámi, proměříme a vystavíme
            protokol platný pro úřad i pojišťovnu.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420777111222">Zavolat 777 111 222</a>
            <a className="btn btn--ghost" href="mailto:info@example.cz">Napsat e-mail</a>
          </div>
          <p className="hero__hours">Objednávky PO–PÁ 8:00–15:30 · info@example.cz</p>
        </div>
        <figure className="hero__figure">
          <AiImage src="/hero.webp" alt="Modrý plamen plynového hořáku při kontrole kotle" className="hero__media" />
        </figure>
      </section>

      <aside className="alert" role="note">
        <span className="alert__tag">UPOZORNĚNÍ</span>
        <p className="alert__body">
          Kontrolám kotlů na tuhá paliva provedeným v&nbsp;roce 2023 končí v&nbsp;roce 2026 platnost.
          Objednejte novou včas, ať vám lhůta neproběhne.
        </p>
      </aside>

      <section className="band services" aria-labelledby="services-h">
        <div className="band__head">
          <p className="eyebrow">CO KONTROLUJEME</p>
          <h2 id="services-h" className="band__title">Tři kontroly, tři zákonné lhůty</h2>
          <p className="band__intro">
            Každou z nich hlídá jiný předpis a jiný interval. Napište nám značku kotle a obec —
            ozveme se s&nbsp;termínem a cenou předem.
          </p>
        </div>

        <figure className="services__figure">
          <AiImage src="/section-1.webp" alt="Technik TPT Servis měří technický stav kotle na tuhá paliva" className="services__media" />
        </figure>

        <ol className="svc-list">
          {services.map((s) => (
            <li className="svc" key={s.title}>
              <span className="svc__interval">{s.interval}</span>
              <div className="svc__body">
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__text">{s.body}</p>
                <p className="svc__norm">{s.norm}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="band trust" aria-labelledby="trust-h">
        <figure className="trust__figure">
          <AiImage src="/section-2.webp" alt="Rodinný dům s hromosvodem na střeše v obci u Českých Budějovic" className="trust__media" />
        </figure>
        <div className="trust__text">
          <p className="eyebrow">PROČ TPT SERVIS</p>
          <h2 id="trust-h" className="band__title">Jezdíme za vámi po celém Českobudějovicku</h2>
          <p className="band__intro">
            Jsme malá firma z Českých Budějovic. Domluvíme se lidsky, přijedeme včas a
            protokol dostanete hned na místě — bez zbytečného papírování navíc.
          </p>
          <ul className="trust__list">
            <li><strong>Hromadné kontroly v obcích.</strong> Když se domluví víc sousedů, jedeme se zvýhodněnou cenou a dopravou zdarma.</li>
            <li><strong>Technici na konkrétní značky.</strong> Vyškolení na běžné i moderní zplyňovací a automatické kotle.</li>
            <li><strong>Protokol, který uznají.</strong> Platný pro obecní úřad i pojišťovnu, s jasným závěrem.</li>
          </ul>
          <div className="price">
            <p className="price__label">Referenční cena kontroly kotle (limit MŽP)</p>
            <p className="price__row"><span>bez řídicí jednotky</span><span className="price__val">2&nbsp;222 Kč</span></p>
            <p className="price__row"><span>s řídicí jednotkou</span><span className="price__val">2&nbsp;590 Kč</span></p>
            <p className="price__note">Ceny bez DPH. Přesnou cenu pro vaši obec řekneme předem.</p>
          </div>
          <p className="trust__addr">Provozovna: Ukázková 123, České Budějovice</p>
        </div>
      </section>
    </main>
  );
}
