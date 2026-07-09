import type { CSSProperties } from "react";

const produkty = [
  { c: "01", n: "Venkovní žaluzie", d: "Naklápěcí lamely nad oknem — světlo pustíte dovnitř, horko necháte venku. Nejúčinnější ochrana proti letnímu přehřívání." },
  { c: "02", n: "Screenové rolety", d: "Průsvitná tkanina odrazí sluneční záření, ale výhled i denní světlo zůstanou. Ideální na prosklené fasády a kanceláře." },
  { c: "03", n: "Venkovní rolety", d: "Hliníkové lamely, které zatemní ložnici a přidají tepelnou i akustickou izolaci. Klid pro spánek i v létě." },
  { c: "04", n: "Pergoly a stínění", d: "Bioklimatické pergoly a stínění zimních zahrad. Terasa použitelná od jara do podzimu, ať svítí slunce nebo prší." },
  { c: "05", n: "Sítě proti hmyzu", d: "Posuvné a pevné sítě do oken i dveří. Téměř neviditelné, komáři ani mouchy dovnitř nevletí." },
  { c: "06", n: "Vnitřní stínění", d: "Plisé, látkové rolety, žaluzie i závěsy na míru. Dolaďují světlo a interiér tam, kde venkovní řešení nestačí." }
];

const kroky = [
  { c: "01", t: "Showroom v Dejvicích", d: "Přijďte na Evropskou 648/102. Sáhnete si na lamely, porovnáte typy stínění vedle sebe a projdete vzorníky látek." },
  { c: "02", t: "Zaměření u vás", d: "Technik přijede na místo, přeměří okna na milimetry a poradí, co dává na vaší fasádě smysl." },
  { c: "03", t: "Výroba a montáž", d: "Vyrábíme s českou značkou Climax. Montáž zvládneme obvykle do tří týdnů — i v letní špičce." },
  { c: "04", t: "Servis po záruce", d: "O žaluzie se staráme dál. Napojíme je i na chytrou domácnost Somfy a solární pohon bez tahání kabelů." }
];

const reference = [
  { jm: "Pavel Šlambora", txt: "Řešili jsme přehřívání rodinného domu. Venkovní rolety od Proklimy byly vynikající volba — od zaměření až po montáž vše profesionálně, rychle a spolehlivě. Vřele doporučujeme.", prod: "Venkovní rolety" },
  { jm: "Tereza Gluzová", txt: "Zatemňovací roletu instalovali v řádu několika týdnů — a to v letní sezóně, kdy se běžně čeká déle. Komunikace rychlá a transparentní, technici zkušení. Roleta dělá přesně to, co má.", prod: "Zatemňovací roleta" },
  { jm: "Vít Spíšek", txt: "Objednali jsme venkovní žaluzie i posuvné sítě proti hmyzu. Vše nám předvedli v showroomu v Jesenici, termíny i ceny sedly. Sítě jsou téměř neviditelné.", prod: "Žaluzie + sítě" }
];

export default function Page() {
  return (
    <main className="pk">
      <header className="pk-nav">
        <a className="pk-mark" href="#" aria-label="PROKLIMA stínící technika, domů">
          <span className="pk-mark-p">PRO</span><span className="pk-mark-k">KLIMA</span>
          <span className="pk-mark-sub">stínící technika</span>
        </a>
        <span className="pk-nav-loc">Praha 6 — Dejvice</span>
      </header>

      <section className="pk-hero">
        <div className="pk-hero-media">
          <img src="/hero.webp" alt="Fasáda domu s venkovními žaluziemi, lamely nakloněné proti letnímu slunci" className="pk-hero-img" />
          <div className="pk-louvers" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="pk-hero-text">
          <p className="pk-eyebrow">Stínící technika · od roku 2003</p>
          <h1 className="pk-h1">
            Světlo pustíme dovnitř.<br /><em>Horko necháme venku.</em>
          </h1>
          <p className="pk-lede">
            Naklopená lamela venkovní žaluzie zastaví slunce dřív, než dopadne na sklo. Zastíníme vám byt, dům i kancelář — od zaměření po montáž obvykle do tří týdnů.
          </p>
          <div className="pk-cta-row">
            <a className="pk-btn pk-btn-solid" href="#produkty">Pomůžeme s výběrem</a>
            <a className="pk-btn pk-btn-ghost" href="#showroom">Přijít do showroomu</a>
          </div>
          <dl className="pk-facts">
            <div><dt>3 mil.</dt><dd>zastíněných oken</dd></div>
            <div><dt>4 roky</dt><dd>záruka kvality</dd></div>
            <div><dt>20 let</dt><dd>na českém trhu</dd></div>
          </dl>
        </div>
      </section>

      <section className="pk-section" id="produkty">
        <div className="pk-sec-head">
          <p className="pk-eyebrow">Co pro vás zastíníme</p>
          <h2 className="pk-h2">Od venkovní lamely po síť proti hmyzu</h2>
          <p className="pk-sec-lede">Největší partner české značky Climax. Poradíme, které stínění dává na vaší fasádě a orientaci oken skutečný smysl — ne to nejdražší, ale to, co funguje.</p>
        </div>
        <ul className="pk-grid">
          {produkty.map((p) => (
            <li className="pk-card" key={p.c}>
              <span className="pk-card-num">{p.c}</span>
              <h3 className="pk-card-t">{p.n}</h3>
              <p className="pk-card-d">{p.d}</p>
            </li>
          ))}
        </ul>
        <div className="pk-smart">
          <img src="/section-1.webp" alt="Ovládání venkovního stínění chytrou domácností přes mobilní aplikaci" className="pk-smart-img" />
          <div className="pk-smart-txt">
            <p className="pk-eyebrow">Chytrá domácnost</p>
            <h3 className="pk-h3">Žaluzie, které se ovládají samy</h3>
            <p>Napojíme stínění na systém Somfy — spustí se podle slunce, větru nebo z mobilu. Solární pohon zvládne montáž i bez tahání kabelů skrz fasádu.</p>
            <a className="pk-link" href="#showroom">Solární i chytré řešení →</a>
          </div>
        </div>
      </section>

      <section className="pk-section pk-section-alt" id="showroom">
        <div className="pk-sec-head">
          <p className="pk-eyebrow">Jak to u nás probíhá</p>
          <h2 className="pk-h2">Rodinná firma, na kterou je spoleh</h2>
          <p className="pk-sec-lede">Za dvacet let jsme se postarali o víc než tři miliony oken. Každý výrobek projde výstupní kontrolou — a čtyři kroky od návštěvy po servis znáte předem.</p>
        </div>

        <ol className="pk-steps">
          {kroky.map((k) => (
            <li className="pk-step" key={k.c}>
              <span className="pk-step-num">{k.c}</span>
              <div>
                <h3 className="pk-step-t">{k.t}</h3>
                <p className="pk-step-d">{k.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="pk-quotes">
          <img src="/section-2.webp" alt="Realizace venkovních žaluzií na rodinném domě od firmy Proklima" className="pk-quotes-img" />
          <ul className="pk-quote-list">
            {reference.map((r) => (
              <li className="pk-quote" key={r.jm}>
                <p className="pk-quote-txt">„{r.txt}“</p>
                <p className="pk-quote-meta"><span className="pk-quote-name">{r.jm}</span><span className="pk-quote-prod">{r.prod}</span></p>
              </li>
            ))}
          </ul>
        </div>

        <div className="pk-showrooms">
          <p className="pk-eyebrow">11 showroomů po celé ČR</p>
          <p className="pk-cities">
            {["Praha 6 — Dejvice","Praha 5","Praha 8","Jesenice u Prahy","Český Brod","Mladá Boleslav","Liberec","Plzeň","Brno","Prostějov","Olomouc"].map((c, i) => (
              <span className={"pk-city" + (i === 0 ? " pk-city-home" : "")} key={c}>{c}</span>
            ))}
          </p>
        </div>
      </section>
    </main>
  );
}
