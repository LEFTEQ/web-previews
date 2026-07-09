import type { CSSProperties } from "react";

const services = [
  {
    tag: "01",
    obor: "Plášť domu",
    title: "Revitalizace bytových domů",
    body: "Komplexní obnova pláště panelového i zděného domu — od nových oken a dveří po zateplení. Cílem není jen nový kabát, ale nižší náklady na vytápění a klid uvnitř: tepelná pohoda v zimě i v létě a poctivá zvuková izolace.",
    img: "/section-1.webp",
    alt: "Revitalizovaný bytový dům se zatepleným pláštěm a novými okny.",
    kpi: "okna · zateplení · fasáda"
  },
  {
    tag: "02",
    obor: "Vnitřní prostory",
    title: "Rekonstrukce společných prostor",
    body: "Chodby, schodiště, vstupy a sklepní prostory, které dům používá každý den. Rekonstrukce interiéru prodlužuje životnost objektu, navyšuje hodnotu jednotlivých bytů a je nedílnou součástí každé poctivé revitalizace.",
    img: "/section-2.webp",
    alt: "Zrekonstruované společné prostory bytového domu — schodiště a vstupní hala.",
    kpi: "chodby · schodiště · vstupy"
  },
  {
    tag: "03",
    obor: "Vzduchotechnika",
    title: "Inteligentní odvětrání panelových domů",
    body: "Nedostatečné odvětrání trápí řadu panelových domů — mezi byty při změnách tlaku volně proudí pach spálené večeře i mikroskopické částice. Řízené větrání to zastaví a udrží vzduch v domě zdravý.",
    img: null,
    alt: "",
    kpi: "řízené větrání · rekuperace"
  }
];

export default function Page() {
  return (
    <main className="iz">
      <header className="iz-nav">
        <a className="iz-mark" href="#top" aria-label="IZOLTECHNIK CZECH, domů">
          <span className="iz-mark-hazard" aria-hidden="true" />
          <span className="iz-mark-text">
            <span className="iz-mark-name">IZOLTECHNIK</span>
            <span className="iz-mark-sub">CZECH · České Budějovice</span>
          </span>
        </a>
        <a className="iz-nav-call" href="tel:+420775216637">
          <span aria-hidden="true">📞</span> +420 775 216 637
        </a>
      </header>

      <section className="iz-hero" id="top">
        <div className="iz-hero-media">
          <img src="/hero.webp" alt="Revitalizace bytového domu firmou IZOLTECHNIK CZECH v Jihočeském kraji — lešení a nová fasáda." />
          <span className="iz-hero-scrim" aria-hidden="true" />
        </div>
        <div className="iz-hero-band" aria-hidden="true">
          <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
        </div>
        <div className="iz-hero-body">
          <p className="iz-eyebrow">Prostě stavaři · už 30 let na českém trhu</p>
          <h1 className="iz-title">
            Vracíme <span className="iz-hl">bytovým domům</span> teplo,
            ticho a čerstvý vzduch.
          </h1>
          <p className="iz-lede">
            Revitalizace, rekonstrukce a vzduchotechnika panelových i zděných
            domů. Působíme v Jihočeském a Středočeském kraji a hlavně v Praze —
            řídíme z Českých Budějovic.
          </p>
          <div className="iz-hero-cta">
            <a className="iz-btn iz-btn-primary" href="tel:+420775216637">Zavolat mistrovi</a>
            <a className="iz-btn iz-btn-ghost" href="mailto:info@izoltechnik.cz">Napsat na e-mail</a>
          </div>
        </div>
        <dl className="iz-facts">
          <div><dt>Od roku</dt><dd>1996</dd></div>
          <div><dt>Působnost</dt><dd>Jihočeský · Středočeský · Praha</dd></div>
          <div><dt>Specializace</dt><dd>Bytové domy</dd></div>
        </dl>
      </section>

      <section className="iz-services" aria-labelledby="sluzby-h">
        <div className="iz-sec-head">
          <p className="iz-eyebrow iz-dark">Co pro dům uděláme</p>
          <h2 id="sluzby-h">Tři vrstvy jednoho domu</h2>
          <p className="iz-sec-note">
            Plášť, vnitřek a vzduch. Umíme každou zvlášť i všechny naráz jako
            jednu zakázku s jedním mistrem, který ji vede.
          </p>
        </div>
        <ol className="iz-cards">
          {services.map((s) => (
            <li key={s.tag} className={s.img ? "iz-card iz-card-img" : "iz-card"}>
              <div className="iz-card-top">
                <span className="iz-card-tag">{s.tag}</span>
                <span className="iz-card-obor">{s.obor}</span>
              </div>
              {s.img && (
                <div className="iz-card-media">
                  <img src={s.img} alt={s.alt} loading="lazy" />
                </div>
              )}
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <p className="iz-card-kpi">{s.kpi}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="iz-trust" aria-labelledby="onas-h">
        <div className="iz-trust-inner">
          <div className="iz-trust-copy">
            <p className="iz-eyebrow iz-dark">O nás</p>
            <h2 id="onas-h">Kvalita není heslo — je to náš první úkol na stavbě.</h2>
            <p>
              IZOLTECHNIK CZECH s.r.o. vznikl v roce 1996. Za tu dobu jsme
              zrevitalizovali panelové i zděné bytové domy napříč Jihočeským a
              Středočeským krajem a v Praze. Držení kvality bereme jako
              podmínku, ne jako bonus — díky němu se k nám investoři vracejí a
              doporučují nás dál.
            </p>
            <ul className="iz-checks">
              <li>Jeden mistr vede zakázku od zaměření po předání.</li>
              <li>Práce s ohledem na to, že v domě se dál bydlí.</li>
              <li>Reference přímo od SVJ a bytových družstev v kraji.</li>
            </ul>
            <div className="iz-hero-cta">
              <a className="iz-btn iz-btn-primary" href="tel:+420775216637">Zavolat: +420 775 216 637</a>
              <a className="iz-btn iz-btn-ghost" href="mailto:info@izoltechnik.cz">info@izoltechnik.cz</a>
            </div>
          </div>
          <div className="iz-trust-plate" aria-hidden="true">
            <span className="iz-plate-label">STAVBA · IZOLTECHNIK</span>
            <span className="iz-plate-big">30</span>
            <span className="iz-plate-unit">let na střeše českého stavebnictví</span>
            <span className="iz-plate-strip" />
          </div>
        </div>
      </section>
    </main>
  );
}
