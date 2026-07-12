import type { ReactNode } from "react";

const services = [
  {
    n: "01",
    t: "Pokrývačské práce",
    d: "Pokládka a výměna střešních krytin, izolace a fólie, opravy komínů — od jednotlivé opravy po celou střechu.",
  },
  {
    n: "02",
    t: "Klempířské prvky",
    d: "Okapy, žlaby, svody a parapety. Oplechování komínů, oken i dveří. Lemovací plechy vyrábíme až do délky 4 m.",
  },
  {
    n: "03",
    t: "Rekonstrukce střech",
    d: "Kompletní přestavby i dílčí opravy. Přijedeme, prohlédneme krov a řekneme rovnou, co střecha potřebuje.",
  },
  {
    n: "04",
    t: "Střešní okna",
    d: "Montáž oken značek VELUX a FAKRO — od zaměření po dokonalé oplechování, aby nikde nezateklo.",
  },
  {
    n: "05",
    t: "Hromosvody a uzemnění",
    d: "Montáž hromosvodů a realizace uzemnění. Ochrana, na kterou po dokončení střechy nezapomeneme.",
  },
  {
    n: "06",
    t: "Plošina a kontejner",
    d: "Pronájem vysokozdvižné plošiny MP-13 na práci do výšky a kontejneru na odvoz stavební suti.",
  },
];

export default function Page(): ReactNode {
  return (
    <main>
      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="mark" href="#" aria-label="PFP střechy Plzeň, úvod">
            PFP<b>.</b>střechy<span>Plzeň</span>
          </a>
          <a className="top-call" href="tel:+420608333613">
            <span className="dot" aria-hidden="true" />
            <span className="txt">Zavolat</span> 608&nbsp;333&nbsp;613
          </a>
        </div>
      </header>

      <section className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Pokrývači PFP na hřebeni střechy během pokládky nové krytiny v Plzni"
        />
        <div className="hero-grad" aria-hidden="true" />
        <div className="wrap hero-in">
          <p className="hero-eyebrow rise d1">Pokrývačství &amp; klempířství · Plzeň</p>
          <h1 className="rise d2">
            Střecha, co<br />
            <em>přežije</em> počasí.
          </h1>
          <p className="hero-lede rise d3">
            Pokrývačské a klempířské práce v Plzni a okolí. Krytiny, okapy,
            komíny i celé rekonstrukce — <b>od roku 1990</b> a stovky
            dokončených střech za sebou.
          </p>
          <div className="hero-cta rise d4">
            <a className="btn btn-primary" href="tel:+420608333613">
              Zavolat 608&nbsp;333&nbsp;613
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>
        </div>

        <dl className="ridge rise d4">
          <div>
            <dt>1990</dt>
            <dd>Pokrýváme střechy od tohoto roku</dd>
          </div>
          <div>
            <dt>stovky</dt>
            <dd>Dokončených střech a rekonstrukcí</dd>
          </div>
          <div>
            <dt>4&nbsp;m</dt>
            <dd>Délka lemovacích plechů z naší dílny</dd>
          </div>
          <div>
            <dt>Plzeň</dt>
            <dd>Železniční 19 — a okolí kraje</dd>
          </div>
        </dl>
      </section>

      <section className="sec" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Naše řemeslo</p>
            <h2>Vše, co drží dům suchý — na jedné partě.</h2>
            <p>
              Od jedné utržené tašky po kompletní krov. Nemusíte shánět zvlášť
              pokrývače, klempíře a firmu na plošinu — uděláme to pod jednou
              střechou.
            </p>
          </div>

          <div className="ledger">
            {services.map((s) => (
              <article className="row" key={s.n}>
                <span className="num">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec trust" id="o-nas">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Proč zrovna my</p>
            <h2>Tři desítky let na plzeňských střechách.</h2>
            <p>
              Jsme místní firma z Železniční ulice. Neposíláme subdodavatele,
              které jste nikdy neviděli — na střechu vyleze ta parta, se kterou
              se domluvíte.
            </p>
          </div>

          <div className="trust-grid">
            <img
              className="trust-img"
              src="/section-1.webp"
              alt="Detail nové plechové krytiny a oplechování komína na rodinném domě"
            />

            <div>
              <ul className="facts">
                <li>
                  <span className="k">01</span>
                  <span className="v">
                    <b>Kvalita, kterou uvidíte i za deset let</b>
                    <span>Na provedení práce si zakládáme — bez zatékání a odfouknutých tašek.</span>
                  </span>
                </li>
                <li>
                  <span className="k">02</span>
                  <span className="v">
                    <b>Vlastní klempířská dílna</b>
                    <span>Lemy a prvky ohýbáme sami, přesně na míru vaší střechy.</span>
                  </span>
                </li>
                <li>
                  <span className="k">03</span>
                  <span className="v">
                    <b>Plošina i kontejner součástí zakázky</b>
                    <span>Techniku na výšku i odvoz suti řešíme za vás.</span>
                  </span>
                </li>
              </ul>

              <div className="brands">
                <span>Montujeme okna a materiály značek</span>
                <ul>
                  <li>VELUX</li>
                  <li>FAKRO</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="trust-grid" style={{ marginTop: "48px" }}>
            <div className="contact">
              <h3>Domluvme prohlídku střechy</h3>
              <a href="tel:+420608333613">
                <span className="lbl">Mobil</span>
                <span className="val">+420 608 333 613</span>
              </a>
              <a href="tel:+420377420574">
                <span className="lbl">Telefon</span>
                <span className="val">+420 377 420 574</span>
              </a>
              <a href="mailto:pfpprotivinsky@centrum.cz">
                <span className="lbl">E-mail</span>
                <span className="val">pfpprotivinsky@centrum.cz</span>
              </a>
              <p className="hours">
                Železniční 19, 326 00 Plzeň · IČ 05621208<br />
                Voláme zpět po&nbsp;–&nbsp;pá 7:00–18:00
              </p>
            </div>

            <img
              className="trust-img"
              src="/section-2.webp"
              alt="Dokončená rekonstrukce střechy rodinného domu v Plzni s novými okapy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
