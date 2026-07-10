import type { CSSProperties } from "react";

export default function Page() {
  const materialy = [
    { c: "01", nazev: "Masiv", popis: "Dub, buk, jasan i ořech. Naolejovaný povrch, kterému kresba dřeva vydrží desítky let." },
    { c: "02", nazev: "Lamino", popis: "Odolné plochy do kuchyní a dětských pokojů. Dekory ze vzorníku i podle vaší předlohy." },
    { c: "03", nazev: "HPL laminát", popis: "Do vlhka a zátěže — pracovní desky, koupelny, provozy restaurací." },
    { c: "04", nazev: "Dýha", popis: "Vzhled masivu na velkých plochách skříní a obkladů, za rozumnou cenu." }
  ];

  const zakazky = [
    { nazev: "Kuchyně na míru", popis: "Od zaměření po montáž. Dvířka z masivu i lamina, spotřebiče zabudované na milimetr." },
    { nazev: "Vestavěné skříně", popis: "Do šikmin, výklenků i celé stěny. Využijeme každý centimetr, který jinak zůstává prázdný." },
    { nazev: "Schodiště a dveře", popis: "Masivní schody i interiérové dveře sladěné se zbytkem interiéru." },
    { nazev: "Obklady stropů a stěn", popis: "Dřevěné podhledy, palubky, akustické lamely. Restaurace, kanceláře i obývák." },
    { nazev: "Postele a stoly", popis: "Jídelní stoly z jednoho fošny, postele na míru matrace i prostoru." },
    { nazev: "Zahradní stavby", popis: "Zahradní domky, přístřešky a venkovní garážová stání z impregnovaného dřeva." }
  ];

  return (
    <main className="br-main">
      <header className="br-nav" aria-label="Hlavní">
        <a href="#uvod" className="br-logo" aria-label="BREST Raspenava, truhlářství">
          <span className="br-logo-mark">BREST</span>
          <span className="br-logo-sub">Raspenava · truhlářství</span>
        </a>
        <nav className="br-navlinks">
          <a href="#materialy">Materiály</a>
          <a href="#zakazky">Zakázková výroba</a>
          <a href="#onas">O dílně</a>
        </nav>
      </header>

      <section className="br-hero" id="uvod">
        <div className="br-hero-media">
          <img src="/hero.webp" alt="Truhlářská dílna BREST — rozpracovaný nábytek z masivního dřeva" className="br-hero-img" />
          <div className="br-hero-veil" aria-hidden="true" />
        </div>
        <div className="br-hero-inner">
          <p className="br-eyebrow">Truhlářství · Liberec &amp; Raspenava · od návrhu po montáž</p>
          <h1 className="br-hero-title">
            Dřevo, které<br />
            <span className="br-hero-accent">sedne na milimetr.</span>
          </h1>
          <p className="br-hero-lede">
            Zakázková výroba z masivu, lamina, HPL i dýhy. Kuchyně, skříně, schodiště
            a dveře na míru vašemu prostoru — zaměříme, vyrobíme v dílně a přivezeme hotové.
          </p>
          <div className="br-hero-meta">
            <span className="br-chip">Vlastní dílna</span>
            <span className="br-chip">Zaměření zdarma</span>
            <span className="br-chip">Montáž u vás</span>
          </div>
        </div>
      </section>

      <section className="br-section" id="materialy" aria-labelledby="materialy-h">
        <div className="br-section-head">
          <p className="br-eyebrow br-eyebrow--dark">Z čeho stavíme</p>
          <h2 className="br-h2" id="materialy-h">Čtyři materiály, jedna dílna</h2>
          <p className="br-section-lede">
            Neděláme jen „nábytek". Každou zakázku vedeme od výběru materiálu, protože právě
            v něm se rozhoduje, jestli vám kus vydrží pět let, nebo padesát.
          </p>
        </div>

        <div className="br-grain">
          {materialy.map((m) => (
            <article className="br-grain-row" key={m.c}>
              <span className="br-grain-num">{m.c}</span>
              <h3 className="br-grain-name">{m.nazev}</h3>
              <p className="br-grain-text">{m.popis}</p>
            </article>
          ))}
        </div>

        <figure className="br-figure">
          <img src="/section-1.webp" alt="Detail dřevěné plochy a spojů z truhlářské výroby BREST" className="br-figure-img" />
          <figcaption className="br-figcap">Ukázka z naší výroby — spoje a povrch, které vydrží denní provoz.</figcaption>
        </figure>
      </section>

      <section className="br-section br-section--dark" id="zakazky" aria-labelledby="zakazky-h">
        <div className="br-section-head">
          <p className="br-eyebrow">Co pro vás vyrobíme</p>
          <h2 className="br-h2" id="zakazky-h">Zakázková výroba na míru</h2>
          <p className="br-section-lede br-section-lede--light">
            Vybavíme dům, byt, restauraci i kancelář. Od jednoho stolu po celý interiér —
            všechno kreslíme a vyrábíme pod jednou střechou v dílně u Liberce.
          </p>
        </div>

        <div className="br-cards">
          {zakazky.map((z) => (
            <article className="br-card" key={z.nazev}>
              <h3 className="br-card-name">{z.nazev}</h3>
              <p className="br-card-text">{z.popis}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="br-onas" id="onas" aria-labelledby="onas-h">
        <div className="br-onas-media">
          <img src="/section-2.webp" alt="Hotová truhlářská realizace BREST v interiéru" className="br-onas-img" />
        </div>
        <div className="br-onas-body">
          <p className="br-eyebrow br-eyebrow--dark">O dílně</p>
          <h2 className="br-h2" id="onas-h">Truhláři, ne montážníci z katalogu</h2>
          <p className="br-onas-text">
            BREST je truhlářská dílna na Liberecku. Neprodáváme skládaný nábytek z krabice —
            zaměříme prostor u vás, nakreslíme řešení a vyrobíme ho z materiálu, který k dané
            zakázce opravdu patří. Pak přivezeme a namontujeme, ať se nemusíte o nic starat.
          </p>
          <dl className="br-facts">
            <div className="br-fact"><dt>Kde jsme</dt><dd>Raspenava, okres Liberec</dd></div>
            <div className="br-fact"><dt>Pro koho</dt><dd>Domácnosti, restaurace, kanceláře</dd></div>
            <div className="br-fact"><dt>Jak pracujeme</dt><dd>Zaměření → návrh → výroba → montáž</dd></div>
          </dl>
        </div>
      </section>
    </main>
  );
}
