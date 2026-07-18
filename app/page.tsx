import { AiImage } from "./_ui";

type Service = {
  cz: string;
  sub: string;
  body: string;
};

type Specimen = {
  cz: string;
  latin: string;
  rose?: boolean;
};

const services: Service[] = [
  {
    cz: "Pravidelná údržba",
    sub: "celoroční péče",
    body: "Sečení trávníků, řez keřů, pletí záhonů, hnojení a jarní spuštění i zazimování automatické závlahy. Přijíždíme podle rozvrhu — vy se o nic nestaráte.",
  },
  {
    cz: "Řez stromů",
    sub: "klasicky i ve výškách",
    body: "Zdravotní a bezpečnostní řez ovocných i okrasných stromů. Do korun se dostaneme horolezeckou technikou, bez těžkých strojů na vaší zahradě.",
  },
  {
    cz: "Arboristika a kácení",
    sub: "i rizikové stromy",
    body: "Posouzení zdravotního stavu, instalace vazeb do korun a kácení po částech ve stísněných místech. Dřevo a klest odvezeme a uklidíme.",
  },
  {
    cz: "Výsadba a realizace",
    sub: "od cest po závlahu",
    body: "Nové záhony, mlatové cesty, zahradní doplňky a automatická závlaha. Osadíme rostlinami z vlastní školky a předáme hotovou zahradu.",
  },
  {
    cz: "Projekce zahrad",
    sub: "návrh na míru",
    body: "Do plánu sázíme jen to, co na daném stanovišti opravdu poroste. Návrhy soukromých zahrad i veřejných ploch po celém Plzeňsku.",
  },
  {
    cz: "Veřejná zeleň",
    sub: "pro města a obce",
    body: "Zakládání a údržba parků, sídlištní zeleně a uličních stromořadí. Spolehlivý partner pro obce v okolí Všerub a Plzně.",
  },
];

const bed: Specimen[] = [
  { cz: "Anglická růže", latin: "Rosa 'Olivia'", rose: true },
  { cz: "Habr obecný", latin: "Carpinus betulus" },
  { cz: "Javor mléč", latin: "Acer platanoides" },
  { cz: "Levandule", latin: "Lavandula angustifolia", rose: true },
  { cz: "Hortenzie latnatá", latin: "Hydrangea paniculata" },
  { cz: "Tis červený", latin: "Taxus baccata" },
];

const reasons: string[] = [
  "Komplexně od návrhu přes výsadbu po pravidelnou údržbu.",
  "Vlastní školka — rostliny prověřené naším podnebím.",
  "Řez korun horolezecky, bez rozježděné zahrady.",
  "Stálý tým, který vaši zahradu zná i po letech.",
];

function Tag({
  line1,
  line2,
  className,
  rose,
}: {
  line1: string;
  line2: string;
  className?: string;
  rose?: boolean;
}) {
  return (
    <span className={`tag${rose ? " tag--rose" : ""}${className ? " " + className : ""}`}>
      <span className="tag__hole" aria-hidden="true" />
      <span className="tag__l1">{line1}</span>
      <span className="tag__l2">{line2}</span>
    </span>
  );
}

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <span className="brand">
          <span className="brand__mark">ARBO</span>
          <span className="brand__sub">zahradnictví</span>
        </span>
        <span className="topbar__place">Všeruby u Plzně</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Zahradnictví &middot; Všeruby u Plzně &middot; od roku 2003</p>
            <h1 id="hero-title" className="hero__title">
              Zahrada,
              <br />o kterou se
              <br />staráme
              <br />místo vás
            </h1>
            <p className="hero__lead">
              Pravidelný řez, sečení, závlaha i zimní ochrana. Soukromé zahrady
              a veřejná zeleň na Plzeňsku — s rostlinami z vlastní školky, kde
              vypěstujeme 30&nbsp;000 okrasných dřevin ročně.
            </p>
          </div>

          <div className="specimen specimen--hero">
            <span className="specimen__string" aria-hidden="true" />
            <Tag className="tag--hero" line1="ARBO" line2="zahradnictví · Všeruby" />
          </div>
        </div>
      </section>

      <section className="section field" aria-labelledby="sluzby-title">
        <div className="section__head">
          <p className="eyebrow">Řádky naší práce</p>
          <h2 id="sluzby-title" className="section__title">
            Co pro vaši zahradu děláme
          </h2>
          <p className="section__intro">
            Projděte řady jako záhonem ve školce — každá služba visí na svém
            štítku, abyste přesně věděli, co si u nás objednáváte.
          </p>
        </div>

        <ol className="rows">
          {services.map((s) => (
            <li className="row" key={s.cz}>
              <div className="row__tag">
                <Tag line1={s.cz} line2={s.sub} />
              </div>
              <p className="row__body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section trust" aria-labelledby="skolka-title">
        <div className="section__head">
          <p className="eyebrow">Naše školka u Všerub</p>
          <h2 id="skolka-title" className="section__title">
            Dvacet let a vlastní pěstební pole
          </h2>
          <p className="section__intro">
            Rostliny pro vaše zahrady nekupujeme na poslední chvíli —
            pěstujeme si je sami. Projděte se pomyslným záhonem: co roste
            u nás, jednou poroste i u vás.
          </p>
        </div>

        <dl className="stats">
          <div className="stat">
            <dt className="stat__num">20+</dt>
            <dd className="stat__lbl">let v oboru</dd>
          </div>
          <div className="stat">
            <dt className="stat__num">500+</dt>
            <dd className="stat__lbl">zahrad v péči</dd>
          </div>
          <div className="stat">
            <dt className="stat__num">30 000</dt>
            <dd className="stat__lbl">dřevin ročně</dd>
          </div>
        </dl>

        <div className="trust__grid">
          <div className="bed">
            {bed.map((p) => (
              <div className="bed__cell" key={p.latin}>
                <span className="specimen__string specimen__string--sm" aria-hidden="true" />
                <Tag line1={p.cz} line2={p.latin} rose={p.rose} />
              </div>
            ))}
          </div>

          <div className="trust__side">
            <AiImage
              alt="Řady okrasných dřevin ve školce ARBO u Všerub"
              src="Neat rows of potted ornamental nursery trees and shrubs in a working Czech garden nursery field, overcast soft daylight, muted conifer-green and loam tones, documentary photograph"
              className="trust__photo"
            />
            <h3 className="reasons__title">Proč svěřit zahradu nám</h3>
            <ul className="reasons">
              {reasons.map((r) => (
                <li className="reasons__item" key={r}>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
