import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      cislo: "01",
      nazev: "Hrnkové květiny",
      popis: "Pokojovky, které přežijí i nezalévací týdny. Poradíme, co dát do světla u okna a co do stínu chodby.",
    },
    {
      cislo: "02",
      nazev: "Květinové aranže a dekorace",
      popis: "Kytice a vazby vážeme na počkání z toho, co ráno přišlo čerstvé. Řekněte příležitost, zbytek je na nás.",
    },
    {
      cislo: "03",
      nazev: "Suché a umělé květiny",
      popis: "Trvanky a sušené vazby, které vydrží roky beze změny. Ideální do interiéru, kam se živé nehodí.",
    },
    {
      cislo: "04",
      nazev: "Sezónní zboží",
      popis: "Adventní věnce, dušičkové vazby, jarní cibuloviny. Sledujeme kalendář za vás.",
    },
    {
      cislo: "05",
      nazev: "Svatební výzdoba",
      popis: "Od svatební kytice po výzdobu obřadu a tabule. Domluvíme se osobně a odladíme každý detail.",
    },
    {
      cislo: "06",
      nazev: "Živé stěny",
      popis: "Zelené stěny do kanceláří, restaurací i domů. Navrhneme, nainstalujeme a staráme se dál.",
    },
  ];

  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#uvod" aria-label="Holflor Studio 1, květinářství Pardubice">
          <span className="wordmark__mark" aria-hidden="true">✿</span>
          <span className="wordmark__name">Holflor</span>
          <span className="wordmark__sub">Studio 1</span>
        </a>
        <nav className="nav__links" aria-label="Hlavní menu">
          <a href="#sortiment">Sortiment</a>
          <a href="#studio">O studiu</a>
          <a className="nav__call" href="tel:+420775220222">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">
            Květinářství &amp; kavárna · Pardubicko
          </p>
          <h1 className="hero__title">
            <span className="hero__line hero__line--a">Když se</span>
            <span className="hero__line hero__line--b">krása</span>
            <span className="hero__line hero__line--c">stává</span>
            <span className="hero__line hero__line--d">radostí.</span>
          </h1>
          <p className="hero__lede">
            Vážeme kytice z čerstvých květin, tvoříme svatební výzdobu a živé
            stěny — a mezi tím vám uvaříme kávu. Přijďte do Přelouče, nebo
            zavolejte a domluvíme se.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420775220222">
              Zavolat 775 220 222
            </a>
            <a className="btn btn--ghost" href="#sortiment">
              Co u nás najdete
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>28. října 152, Přelouč</dd>
            </div>
            <div>
              <dt>Vážeme čerstvé</dt>
              <dd>na počkání, z ranní dodávky</dd>
            </div>
            <div>
              <dt>U kávy</dt>
              <dd>Caffè Amsterdam v prodejně</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--sortiment" id="sortiment">
        <div className="section__head">
          <p className="section__eyebrow">Sortiment</p>
          <h2 className="section__title">Šest polic, ze kterých vybíráme</h2>
          <p className="section__intro">
            Nejsme jen stánek s kyticemi. Pod jednou střechou najdete živé i
            trvanlivé květiny, sezónní vazby a velké projekty jako jsou zelené
            stěny. Vyberte si směr — zbytek doladíme spolu u pultu.
          </p>
        </div>
        <ol className="cards">
          {sortiment.map((item) => (
            <li className="card" key={item.cislo}>
              <span className="card__num">{item.cislo}</span>
              <h3 className="card__title">{item.nazev}</h3>
              <p className="card__text">{item.popis}</p>
            </li>
          ))}
        </ol>
        <figure className="section__figure">
          <img
            src="/section-1.webp"
            alt="Aranžmá čerstvých květin z prodejny Holflor"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="section section--studio" id="studio">
        <figure className="studio__figure">
          <img
            src="/section-2.webp"
            alt="Interiér květinářství a kavárny Holflor"
            loading="lazy"
          />
        </figure>
        <div className="studio__body">
          <p className="section__eyebrow">O studiu</p>
          <h2 className="section__title">
            Květiny, káva a klid na jednom místě
          </h2>
          <p className="studio__text">
            U nás si vyberete kytici, dáte si kávu v holandské kavárně
            Caffè&nbsp;Amsterdam a odejdete s víc než jen květinami. Je to malé
            místo, kam se lidé vrací — proto máme i bonusovou kartu, na kterou
            sbíráte body a nakupujete výhodněji.
          </p>
          <ul className="studio__list">
            <li>
              <strong>Osobní přístup.</strong> Kytici vážeme podle vás, ne podle
              katalogu. Řekněte příležitost i rozpočet.
            </li>
            <li>
              <strong>Svatby na míru.</strong> Sejdeme se, projdeme termín i styl
              a připravíme kompletní výzdobu obřadu i hostiny.
            </li>
            <li>
              <strong>Věrnost se vyplácí.</strong> Bonusová karta Holflor — za
              každý nákup body, které příště ušetří.
            </li>
          </ul>
          <div className="studio__contact">
            <a className="btn btn--primary" href="tel:+420775220222">
              Zavolat a domluvit se
            </a>
            <p className="studio__addr">
              Holflor Studio 1 · 28. října 152, 535 01 Přelouč
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
