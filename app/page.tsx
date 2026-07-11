import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Razítka",
      popis: "Samobarvící i dřevěná razítka od jednořádkových po firemní s logem. Návrh, výroba a nová polštářková vložka na počkání.",
      detail: "Trodat · Colop · datumovky",
    },
    {
      cislo: "02",
      nazev: "Vizitky a tisk",
      popis: "Vizitky, letáky a katalogy z digitálního i ofsetového tisku. Barvy, které sedí na první dobrou, a papír, který v ruce něco váží.",
      detail: "od 100 ks · matné i lesklé lamino",
    },
    {
      cislo: "03",
      nazev: "Polepy aut a výloh",
      popis: "Řezaná i tištěná fólie na dodávky, osobáky i prosklené provozovny. Zaměříme, vytiskneme, nalepíme u vás nebo u nás na dílně.",
      detail: "celopolepy · řezaná grafika · matná fólie",
    },
    {
      cislo: "04",
      nazev: "Bannery a cedule",
      popis: "Reklamní plachty s očky, hliníkové cedule i světelná loga nad vchod. Od formátu A2 po plnou fasádu prodejny.",
      detail: "PVC plachta · dibond · plexi",
    },
    {
      cislo: "05",
      nazev: "Potisk triček a textilu",
      popis: "Sítotisk i DTF přenos na trika, mikiny a čepice. Firemní oblečení na tým i jednorázová edice na akci.",
      detail: "sítotisk · flex · výšivka",
    },
    {
      cislo: "06",
      nazev: "Gravírování a dárky",
      popis: "Laserové gravírování per, štítků a plaket. Reklamní tašky, propisky a dárky s vaším logem, které nekončí v koši.",
      detail: "laser · tampon · PVC i plátěné tašky",
    },
  ];

  return (
    <main className="hp">
      <header className="hp-nav" aria-label="Hlavní">
        <a className="hp-mark" href="#top" aria-label="H-Propag, domů">
          <span className="hp-mark__glyph" aria-hidden="true">H</span>
          <span className="hp-mark__word">
            <strong>Propag</strong>
            <em>reklamní dílna · Pardubice</em>
          </span>
        </a>
        <nav className="hp-links">
          <a href="#sluzby">Co tiskneme</a>
          <a href="#dilna">O dílně</a>
          <a href="tel:+420603380139" className="hp-tel">603 380 139</a>
        </nav>
      </header>

      <section className="hp-hero" id="top">
        <div className="hp-hero__frame">
          <img
            className="hp-hero__img"
            src="/hero.webp"
            alt="Rozpracované reklamní tiskoviny a razítka na dílně H-Propag v Pardubicích"
            width={1600}
            height={1100}
          />
          <div className="hp-hero__tape" aria-hidden="true">
            <span>razítka</span><span>vizitky</span><span>polepy aut</span><span>bannery</span><span>potisk triček</span><span>gravírování</span><span>razítka</span><span>vizitky</span><span>polepy aut</span><span>bannery</span>
          </div>
        </div>
        <div className="hp-hero__copy">
          <p className="hp-eyebrow">Reklamní agentura · Na Hrádku 136, Pardubice</p>
          <h1 className="hp-title">
            Otiskneme<br />
            vaši značku<br />
            <span className="hp-title__ink">do světa</span>
          </h1>
          <p className="hp-lead">
            Od jednoho razítka po celopolep dodávky. Malá pardubická dílna, kde
            grafiku navrhneme, vytiskneme a rovnou vám ji nalepíme &mdash; bez
            prostředníků a bez čekání na týdny.
          </p>
          <div className="hp-cta">
            <a className="hp-btn" href="tel:+420603380139">Zavolat na dílnu</a>
            <a className="hp-btn hp-btn--ghost" href="#sluzby">Prohlédnout práci</a>
          </div>
          <dl className="hp-hours">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po&ndash;Pá&nbsp;8:00&ndash;15:30</dd>
            </div>
            <div>
              <dt>Napište</dt>
              <dd><a href="mailto:info@h-propag.cz">info@h-propag.cz</a></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="hp-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="hp-sec-head">
          <p className="hp-eyebrow">Ceník i vzorky ukážeme na dílně</p>
          <h2 id="sluzby-nadpis" className="hp-h2">Co u nás vytisknete</h2>
          <p className="hp-sec-lead">
            Šest věcí, které řešíme denně. Nemusíte objednávat v pěti firmách
            &mdash; grafiku, tisk i montáž zvládneme pod jednou střechou.
          </p>
        </div>
        <ol className="hp-grid">
          {sluzby.map((s) => (
            <li className="hp-card" key={s.cislo}>
              <span className="hp-card__num" aria-hidden="true">{s.cislo}</span>
              <h3 className="hp-card__name">{s.nazev}</h3>
              <p className="hp-card__desc">{s.popis}</p>
              <p className="hp-card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="hp-dilna" id="dilna" aria-labelledby="dilna-nadpis">
        <div className="hp-dilna__media">
          <img
            src="/section-1.webp"
            alt="Řezání a lepení reklamní fólie na výlohu"
            width={900}
            height={700}
          />
          <img
            src="/section-2.webp"
            alt="Detail vyrobených razítek a firemních tiskovin"
            width={900}
            height={700}
          />
        </div>
        <div className="hp-dilna__copy">
          <p className="hp-eyebrow">O dílně</p>
          <h2 id="dilna-nadpis" className="hp-h2">Malá dílna na Hrádku, kde se ještě lepí ručně</h2>
          <p className="hp-sec-lead">
            H-Propag dělá reklamu Pardubákům už řadu let &mdash; z jedné adresy,
            s jedním týmem a s telefonem, který zvedne člověk, co vaši zakázku
            skutečně tiskne. Přinesete logo, my se postaráme o zbytek.
          </p>
          <ul className="hp-fakta">
            <li>
              <span className="hp-fakta__k">Návrh &rarr; tisk &rarr; montáž</span>
              <span className="hp-fakta__v">celá zakázka u nás, ne u tří subdodavatelů</span>
            </li>
            <li>
              <span className="hp-fakta__k">Razítka na počkání</span>
              <span className="hp-fakta__v">jednodušší kousky obvykle týž den</span>
            </li>
            <li>
              <span className="hp-fakta__k">Vyjedeme za vámi</span>
              <span className="hp-fakta__v">polep auta i výlohy zaměříme na místě</span>
            </li>
          </ul>
          <p className="hp-adresa">
            Na Hrádku 136, 530&nbsp;02 Pardubice ·{" "}
            <a href="tel:+420466512624">466 512 624</a>
          </p>
        </div>
      </section>
    </main>
  );
}
