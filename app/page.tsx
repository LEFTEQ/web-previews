import { AiImage } from "./_ui";

const sluzby = [
  {
    label: "Koupelny",
    name: "Koupelny na klíč",
    spec: "bourání → spárování · 12–30 dní",
    desc:
      "Vybouráme staré jádro, uděláme rozvody, podlahové topení, obklady, sanitu a osvětlení. Předáme hotovou koupelnu, ve které se dá hned sprchovat.",
  },
  {
    label: "Rekonstrukce",
    name: "Rekonstrukce bytů a jader",
    spec: "elektro · voda · zdivo",
    desc:
      "Panelákové i cihlové byty od základu. Nové rozvody elektřiny a vody, vyzdění příček, štukové omítky, podlahy — i s odvozem sutě.",
  },
  {
    label: "Obklady",
    name: "Obklady a dlažby",
    spec: "velkoformát · rektifik. · mozaika",
    desc:
      "Rovné plochy a spáry na milimetr. Zvládneme formáty 120×60, rektifikované dlažby i drobnou mozaiku do niky.",
  },
  {
    label: "Hrubá stavba",
    name: "Novostavby a přístavby",
    spec: "základy → střecha",
    desc:
      "Rodinné domy, garáže a přístavby. Základová deska, zdivo, strop, střecha — hrubá stavba i dokončení do detailu.",
  },
  {
    label: "Zednictví",
    name: "Zednické práce",
    spec: "omítky · sádrokartony · jádrové vrty",
    desc:
      "Omítky, sádrokartonové podhledy, jádrové vrty pro odvětrání i klimatizaci. Klasické řemeslo bez zbytečných řečí.",
  },
  {
    label: "Příprava",
    name: "Zaměření a rozpočet",
    spec: "zdarma · položkově · termín na papíře",
    desc:
      "Přijedeme, zaměříme a spočítáme položkový rozpočet zdarma. Dostanete pevnou cenu a termín předání, ze kterého neuhýbáme.",
  },
];

const reference = [
  {
    text:
      "Panelákové jádro na Proseku vyměnili za tři týdny. Spáry jak podle pravítka a po sobě uklizeno.",
    who: "Jana K.",
    kde: "Praha 9",
  },
  {
    text:
      "Kompletní rekonstrukce bytu na Vinohradech: jeden termín, jedna parta, nulové výmluvy.",
    who: "Martin D.",
    kde: "Praha 2",
  },
  {
    text:
      "Koupelnu i kuchyň zvládli v jednom termínu a rozpočet držel na korunu.",
    who: "Petra S.",
    kde: "Praha 6",
  },
];

const fakta = [
  { k: "1997", v: "rok, kdy jsme začali" },
  { k: "1 200+", v: "dokončených koupelen a jader" },
  { k: "5 let", v: "záruka na naši práci" },
  { k: "60 min", v: "dojezd kamkoli po Praze" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" id="top">
          <span className="wordmark__mark">
            RUBI<span className="wordmark__k">K</span>ON
          </span>
          <span className="wordmark__sub">stavby&nbsp;·&nbsp;Praha</span>
        </a>
        <p className="masthead__note">Stavíme od roku 1997</p>
      </header>

      <section className="band hero">
        <div className="grout" aria-hidden="true" />
        <div className="rubicon" aria-hidden="true" />
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Stavební firma · Praha · 27 let na trhu</p>
            <h1 className="hero__title">
              Překročte Rubikon.
              <br />
              Postavíme to napevno.
            </h1>
            <p className="hero__lead">
              Rekonstrukce, koupelny na klíč a novostavby v Praze. Ta červená
              čára je moment, kdy se rozhodnete stavět — od ní vedeme každou
              spáru rovně až do předání.
            </p>
            <div className="hero__actions">
              <a className="btn btn--red" href="tel:+420777111222">
                Zavolat 777 111 222
              </a>
              <a className="btn btn--ghost" href="#katalog">
                Prohlédnout práce
              </a>
            </div>
            <dl className="hero__facts">
              {fakta.slice(0, 3).map((f) => (
                <div className="hero__fact" key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="hero__figure">
            <AiImage
              className="hero__img"
              src="/hero.webp"
              alt="Rozpracovaná koupelna s čerstvě položeným velkoformátovým obkladem"
            />
          </figure>
        </div>
      </section>

      <section className="band catalog-band" id="katalog">
        <div className="band__head">
          <p className="eyebrow">Katalog prací — vyberte formát</p>
          <h2 className="band__title">Co pro vás v Praze postavíme</h2>
          <p className="band__intro">
            Každá služba je jeden vzorek zasazený do spárořezu. Od zaměření po
            poslední spáru děláme všechno vlastní partou — nepředáváme vás mezi
            subdodavateli.
          </p>
        </div>

        <div className="catalog">
          <figure className="tile tile--photo">
            <AiImage
              className="tile__img"
              src="/section-1.webp"
              alt="Detail rovných spár a přesně kladeného obkladu v pražské koupelně"
            />
            <figcaption className="tile__caption">
              Vzorek: velkoformát 120×60, spára 2&nbsp;mm
            </figcaption>
          </figure>

          {sluzby.map((s) => (
            <article className="tile" key={s.name}>
              <p className="tile__label">{s.label}</p>
              <h3 className="tile__name">{s.name}</h3>
              <p className="tile__spec">{s.spec}</p>
              <p className="tile__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band trust-band">
        <div className="band__head">
          <p className="eyebrow">Kdo to staví</p>
          <h2 className="band__title">27 let na pražských stavbách, jedna parta</h2>
          <p className="band__intro">
            Od roku 1997 stavíme v Praze a okolí. Stálí zedníci a obkladači, ne
            lidé, které vidíte poprvé až na place. Držíme termín, cenu i po sobě
            uklidíme.
          </p>
        </div>

        <div className="trust">
          <figure className="trust__figure">
            <AiImage
              className="trust__img"
              src="/section-2.webp"
              alt="Parta stavbařů RUBIKON při práci na rekonstrukci bytu v Praze"
            />
          </figure>

          <div className="trust__panel">
            <dl className="stats">
              {fakta.map((f) => (
                <div className="stats__item" key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>

            <ul className="refs">
              {reference.map((r) => (
                <li className="ref" key={r.who}>
                  <p className="ref__text">„{r.text}"</p>
                  <p className="ref__who">
                    {r.who} <span>· {r.kde}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
