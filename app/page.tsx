import type { CSSProperties } from "react";

export default function Page() {
  const doorTypes = [
    {
      no: "01",
      name: "Posuvné",
      track: "na stěně i do stavebního pouzdra",
      desc: "Jezdí podél stěny po kolejnici — neukrajují ani centimetr z místnosti. Skvělé do úzkých chodeb, šaten a menších bytů, kde na otevírání pantů není prostor.",
      detail: "Nosnost do 80 kg · tichý dojezd"
    },
    {
      no: "02",
      name: "Pantové",
      track: "klasické závěsy, plné i prosklené",
      desc: "Osvědčená klasika do interiéru. Vybíráte směr otevírání i dekor — od hladké bílé perličky po přírodní dub. Dodáme včetně obložkové zárubně.",
      detail: "Levé i pravé · šířky 60–92 cm"
    },
    {
      no: "03",
      name: "Shrnovací",
      track: "skládají se do harmoniky",
      desc: "Tam, kde chybí místo na křídlo i na kolejnici u stěny. Přepaží spíž, komoru nebo koupelnu a přitom se složí do pár centimetrů.",
      detail: "Na míru otvoru · lehký chod"
    }
  ];

  const kovani = [
    { name: "Barnio Simple", tone: "Industriální kování · černá", price: "3 555 Kč" },
    { name: "Barnio Square", tone: "Industriální kování · černá", price: "4 600 Kč" },
    { name: "Barnio BIG", tone: "Industriální kování · černá", price: "4 810 Kč" }
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Š+N MIRADE, domovská stránka">
          <span className="wordmark__mark">Š+N</span>
          <span className="wordmark__name">MIRADE</span>
        </a>
        <p className="topbar__place">Nábytek a dveře · Olomouc</p>
        <a className="topbar__tel" href="tel:+420606614299">+420 606 614 299</a>
      </header>

      <section className="hero" id="top">
        <div className="hero__copy">
          <p className="eyebrow">Návrh · výroba · montáž na místě</p>
          <h1 className="hero__title">
            Dveře,<br />
            <span className="hero__slide">které nekradou</span><br />
            místo.
          </h1>
          <p className="hero__lead">
            Posuvné, pantové a shrnovací dveře na zakázku. Změříme, vyrobíme a
            namontujeme u vás doma — vše z jedné dílny v Olomouci.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420606614299">Zavolat a poradit se</a>
            <a className="btn btn--ghost" href="#dvere">Vybrat typ dveří</a>
          </div>
        </div>
        <figure className="hero__figure">
          <img
            src="/hero.webp"
            alt="Posuvné dveře v interiéru vyrobené na míru firmou Š+N MIRADE"
            className="hero__img"
            width={1200}
            height={1400}
          />
          <figcaption className="hero__tag">
            <span className="hero__tagline">Posuvné · dojezd bez hluku</span>
          </figcaption>
        </figure>
      </section>

      <section className="types" id="dvere" aria-labelledby="types-h">
        <div className="section-head">
          <h2 id="types-h" className="section-head__title">Tři způsoby, jak otevřít místnost</h2>
          <p className="section-head__note">
            Vyberte podle prostoru, ne podle katalogu. Poradíme, co se k vašemu
            otvoru hodí — a co ne.
          </p>
        </div>
        <ol className="track">
          {doorTypes.map((d) => (
            <li className="door" key={d.no}>
              <div className="door__rail" aria-hidden="true">
                <span className="door__roller" />
                <span className="door__no">{d.no}</span>
              </div>
              <h3 className="door__name">{d.name}</h3>
              <p className="door__track">{d.track}</p>
              <p className="door__desc">{d.desc}</p>
              <p className="door__detail">{d.detail}</p>
            </li>
          ))}
        </ol>

        <div className="kovani">
          <div className="kovani__intro">
            <img
              src="/section-1.webp"
              alt="Detail černého industriálního kování pro posuvné dveře"
              className="kovani__img"
              width={900}
              height={700}
            />
            <div>
              <p className="eyebrow eyebrow--dark">Novinka v sortimentu</p>
              <h3 className="kovani__title">Industriální kování Barnio, matně černé</h3>
              <p className="kovani__lead">
                Viditelná kolejnice a válečky v matné černé — ke skandinávskému
                dřevu i k loftu s pohledovým betonem. Kompletní sada včetně kotvení.
              </p>
            </div>
          </div>
          <ul className="kovani__list">
            {kovani.map((k) => (
              <li className="kovani__row" key={k.name}>
                <span className="kovani__name">{k.name}</span>
                <span className="kovani__tone">{k.tone}</span>
                <span className="kovani__price">{k.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about" aria-labelledby="about-h">
        <figure className="about__figure">
          <img
            src="/section-2.webp"
            alt="Interiér s dveřmi a nábytkem vyrobeným na zakázku"
            className="about__img"
            width={1000}
            height={1200}
          />
        </figure>
        <div className="about__copy">
          <p className="eyebrow eyebrow--dark">O nás</p>
          <h2 id="about-h" className="about__title">
            Malá dílna, kde s vámi mluví ten, kdo dveře i vyrobí
          </h2>
          <p className="about__text">
            Š+N MIRADE navrhuje, vyrábí, prodává a montuje kompletní nábytek a
            dveře pro byty, domy i kanceláře. Nejsme řetězec — u zakázky je pořád
            stejný člověk, od zaměření až po dotažení posledního šroubu.
          </p>
          <dl className="facts">
            <div className="fact">
              <dt>Výroba na zakázku</dt>
              <dd>Rozměry i dekor podle vašeho otvoru, ne podle skladu.</dd>
            </div>
            <div className="fact">
              <dt>Montáž na místě</dt>
              <dd>Přivezeme, usadíme a seřídíme přímo u vás doma.</dd>
            </div>
            <div className="fact">
              <dt>Olomouc a okolí</dt>
              <dd>Osobní přístup, pružné termíny, cena předem.</dd>
            </div>
          </dl>
          <a className="btn btn--solid" href="mailto:eshop@nabyteksn.cz">Napsat o nezávaznou nabídku</a>
        </div>
      </section>
    </main>
  );
}
