import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      ring: "01",
      title: "Rizikové kácení stromů",
      body: "Stromy u domů, drátů a v úzkých zahradách. Postupné spouštění po kusech na laně tam, kde není kam pokácet celý kmen. Bezpečně, bez škody na plotech a střechách.",
    },
    {
      ring: "02",
      title: "Ošetření a řez korun",
      body: "Zdravotní a bezpečnostní řez, odlehčení přetížených větví, instalace vazeb. Aby strom u vás vydržel další desítky let a nebyl hrozbou.",
    },
    {
      ring: "03",
      title: "Frézování pařezů",
      body: "Po pokácení nezůstane překážka v trávníku. Pařez odfrézujeme pod úroveň terénu, štěpku odvezeme, plochu srovnáme.",
    },
    {
      ring: "04",
      title: "Odvoz a úklid dřeva",
      body: "Rozřezání kmenů, odvoz větví a štěpkování. Zahradu předáváme uklizenou — jako by se u vás nic nedělo.",
    },
  ];

  const rings = [
    { label: "Výjezd po Ostravě", value: "do 24 h" },
    { label: "Na trhu od roku", value: "2015" },
    { label: "Pojištění odpovědnosti", value: "ano" },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="mark" href="#top" aria-label="K&I Forest, kácení stromů Ostrava">
          <span className="mark__k">K</span>
          <span className="mark__amp">&amp;</span>
          <span className="mark__i">I</span>
          <span className="mark__word">FOREST</span>
        </a>
        <a className="nav__tel" href="tel:+420721531097">721&nbsp;531&nbsp;097</a>
      </header>

      <section className="hero" id="top">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Arborista ve výškách řeže korunu vzrostlého stromu"
            className="hero__img"
            width={1600}
            height={2000}
          />
          <span className="hero__cut" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="eyebrow">Kácení stromů &middot; Ostrava-Poruba</p>
          <h1 className="hero__title">
            Skácíme strom, který už<br />
            <span className="hero__em">nemá kam spadnout.</span>
          </h1>
          <p className="hero__lede">
            Vzrostlé stromy natěsno u domu, nad drátem, v cizí zahradě.
            Spouštíme je po kusech na laně — tam, kde běžná firma říká, že to nejde.
          </p>
          <div className="hero__cta">
            <a className="btn" href="tel:+420721531097">Zavolat: 721&nbsp;531&nbsp;097</a>
            <a className="btn btn--ghost" href="mailto:info@kaceni-stromu-ostrava.cz">
              Napsat na e-mail
            </a>
          </div>
        </div>

        <div className="rings" role="list">
          {rings.map((r) => (
            <div className="ring" role="listitem" key={r.label}>
              <span className="ring__value">{r.value}</span>
              <span className="ring__label">{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="work" aria-labelledby="work-h">
        <div className="work__head">
          <p className="eyebrow eyebrow--dark">Co u vás uděláme</p>
          <h2 id="work-h" className="sec__title">
            Od stojícího problému<br />po uklizený trávník.
          </h2>
        </div>

        <div className="work__grid">
          <ol className="letts">
            {services.map((s) => (
              <li className="lett" key={s.ring}>
                <span className="lett__ring" aria-hidden="true">{s.ring}</span>
                <div className="lett__txt">
                  <h3 className="lett__title">{s.title}</h3>
                  <p className="lett__body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="work__fig">
            <img
              src="/section-1.webp"
              alt="Spouštění odříznuté části kmene po laně mezi zahradami"
              className="work__img"
              width={1200}
              height={1500}
            />
            <figcaption className="work__cap">
              Spouštění po kusech — jediná cesta ke stromu, pod kterým stojí dům.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <figure className="trust__fig">
          <img
            src="/section-2.webp"
            alt="Tomáš a David z K&I Forest s motorovou pilou a lanovým vybavením"
            className="trust__img"
            width={1200}
            height={1400}
          />
        </figure>

        <div className="trust__body">
          <p className="eyebrow">Kdo k vám přijede</p>
          <h2 id="trust-h" className="sec__title sec__title--light">
            Tomáš a David.<br />Dva jednatelé, žádný dispečink.
          </h2>
          <p className="trust__lede">
            K&amp;I Forest vedeme od roku 2015 ve dvou — Tomáš Imrišek a David Kudela.
            Kdo bere telefon, ten k vám i vyleze na strom. Řešíme kácení, řez korun,
            frézování pařezů i úklid po celé Ostravě.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt>Sídlo</dt>
              <dd>Bajkalská 1253/2, Poruba, 708&nbsp;00 Ostrava</dd>
            </div>
            <div className="fact">
              <dt>Telefon</dt>
              <dd><a href="tel:+420721531097">721&nbsp;531&nbsp;097</a></dd>
            </div>
            <div className="fact">
              <dt>E-mail</dt>
              <dd><a href="mailto:info@kaceni-stromu-ostrava.cz">info@kaceni-stromu-ostrava.cz</a></dd>
            </div>
            <div className="fact">
              <dt>IČO</dt>
              <dd>03679322</dd>
            </div>
          </dl>

          <p className="trust__note">
            Přijedeme, prohlédneme strom a řekneme cenu na místě — zdarma a bez závazku.
          </p>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// intentionally unused type import guard
void (0 as unknown as CSSProperties);
