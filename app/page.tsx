import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      ch: "C",
      name: "Ofsetový tisk",
      desc:
        "Náklady od pěti set kusů výš — katalogy, brožury, výroční zprávy. Tiskneme na archový stroj, hlídáme soutisk a barevnost podle ICC profilu.",
    },
    {
      ch: "M",
      name: "Digitální tisk",
      desc:
        "Vizitky, letáky a plakáty i v jednom kuse, hotové do druhého dne. Bez přípravných nákladů, ideální na malé série a personalizaci.",
    },
    {
      ch: "Y",
      name: "Velkoformát",
      desc:
        "Bannery, plachty, samolepky a polepy výloh pro liberecké provozovny. Tiskneme do šíře 160 cm, laminujeme a řežeme na míru.",
    },
    {
      ch: "K",
      name: "Knihařské zpracování",
      desc:
        "Vazba V1, V2 i šitá V8, ražba, bigování, laminace a výsek. Z archu uděláme hotovou knihu, blok nebo krabičku.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="mark" href="#" aria-label="Jungmann — tiskárna Liberec">
          <span className="mark__sep" aria-hidden="true">
            <b className="c">J</b>
            <b className="m">J</b>
            <b className="k">J</b>
          </span>
          <span className="mark__txt">
            Jungmann<span className="mark__sub">tiskárna · Liberec</span>
          </span>
        </a>
        <a className="nav__cta" href="tel:+420485100100">Zavolat do tiskárny</a>
      </header>

      <section className="hero">
        <div className="hero__marks" aria-hidden="true">
          <span className="reg reg--tl" />
          <span className="reg reg--tr" />
          <span className="reg reg--bl" />
          <span className="reg reg--br" />
        </div>
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="swatch c" /> <span className="swatch m" />{" "}
              <span className="swatch y" /> <span className="swatch k" /> čtyřbarvotisk od&nbsp;roku&nbsp;1991
            </p>
            <h1 className="hero__h1">
              Z&nbsp;archu
              <span className="hero__bleed">na&nbsp;papír,</span>
              který&nbsp;chcete vzít&nbsp;do&nbsp;ruky.
            </h1>
            <p className="hero__lead">
              Jungmann je rodinná tiskárna v&nbsp;Liberci. Připravíme data,
              vytiskneme a&nbsp;svážeme — od&nbsp;jedné vizitky po&nbsp;náklad
              katalogů. Barvu vidíte na&nbsp;nátisku dřív, než stroj naběhne.
            </p>
            <div className="hero__cta">
              <a className="btn btn--ink" href="mailto:tisk@jungmann.cz">
                Poslat poptávku
              </a>
              <a className="btn btn--ghost" href="tel:+420485100100">
                485&nbsp;100&nbsp;100
              </a>
            </div>
          </div>
          <figure className="hero__fig">
            <img
              src="/hero.webp"
              alt="Archový tiskový stroj v liberecké tiskárně Jungmann s vyjíždějícím potištěným archem"
              className="hero__img"
            />
            <figcaption className="hero__cap">
              Soutisk CMYK kontrolujeme na každém startu nákladu.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="svc" aria-labelledby="svc-h">
        <div className="svc__head">
          <h2 id="svc-h" className="sect__h">Co u nás vytiskneme</h2>
          <p className="sect__lead">
            Čtyři barvy, jeden proces. Vyberte si výseč — zbytek je na nás:
            od&nbsp;sazby přes nátisk až po&nbsp;hotové, svázané dílo.
          </p>
        </div>
        <ol className="svc__list">
          {sluzby.map((s) => (
            <li key={s.ch} className={`card card--${s.ch.toLowerCase()}`}>
              <span className="card__ch" aria-hidden="true">{s.ch}</span>
              <h3 className="card__name">{s.name}</h3>
              <p className="card__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" aria-labelledby="about-h">
        <figure className="about__fig">
          <img
            src="/section-2.webp"
            alt="Knihařské zpracování — ražba a vazba tištěných archů v tiskárně Jungmann"
            className="about__img"
          />
        </figure>
        <div className="about__copy">
          <h2 id="about-h" className="sect__h">Tiskneme v Liberci přes třicet let</h2>
          <p className="about__p">
            Jungmann CLC vede pořád stejná parta sazečů a&nbsp;tiskařů.
            Známe papíry, víme, kdy nátisk nesedí na&nbsp;monitor, a&nbsp;když je
            termín, přijdete si pro&nbsp;zakázku osobně na&nbsp;Šaldovo
            náměstí.
          </p>
          <dl className="facts">
            <div className="fact">
              <dt>Nátisk před tiskem</dt>
              <dd>Barvu schválíte na papíře, ne na obrazovce.</dd>
            </div>
            <div className="fact">
              <dt>Data zkontrolujeme zdarma</dt>
              <dd>Spadávku, přetisk i rozlišení projdeme za vás.</dd>
            </div>
            <div className="fact">
              <dt>Osobní odběr v centru</dt>
              <dd>Liberec, Šaldovo náměstí — bez čekání na kurýra.</dd>
            </div>
          </dl>
          <figure className="about__fig2">
            <img
              src="/section-1.webp"
              alt="Vzorník papírů a potištěné archy připravené k odběru v tiskárně Jungmann"
              className="about__img2"
            />
            <figcaption className="about__cap2">
              Vzorník papírů máme v dílně — přijďte si sáhnout.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
