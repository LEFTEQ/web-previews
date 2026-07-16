import { Plate } from "./_ui";

const services = [
  {
    n: "01",
    title: "Firemní identita",
    lead: "Pomůžeme vám zjistit, kdo doopravdy jste — a dát tomu tvar, který si lidé zapamatují.",
  },
  {
    n: "02",
    title: "Webová prezentace",
    lead: "Kreativně vás představíme veřejnosti. UX, SEO, copywriting a konverze, ve kterých se nikdo neztratí.",
  },
  {
    n: "03",
    title: "Reklama a marketing",
    lead: "Nápadu vždycky předchází výzkum cílové skupiny. Výsledkem je reklama originální, srozumitelná a účinná.",
  },
  {
    n: "04",
    title: "Public relations",
    lead: "Dobré vztahy stojí na důvěře, z důvěry pramení pochopení. To za vás budujeme s veřejností každý den.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <div className="duct-line" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark wordmark--sm" href="#" aria-label="PANKREA, úvodní stránka">
          PANKREA<span className="pan-s">s</span>
        </a>
        <p className="topbar__meta">Reklamní agentura · Hradec&nbsp;Králové</p>
        <a className="topbar__phone" href="tel:+420608318151">+420&nbsp;608&nbsp;318&nbsp;151</a>
      </header>

      <section className="section hero" aria-labelledby="hero-title">
        <div className="hero__col hero__text">
          <p className="eyebrow">Diagnóza vaší značky</p>
          <h1 id="hero-title" className="wordmark wordmark--xl">
            PANKREA<span className="pan-s">s</span>
          </h1>
          <p className="hero__thesis">
            Ovlivňujeme vaši marketingovou komunikaci{" "}
            <em>stejně jako pankreas ovlivňuje&nbsp;metabolismus</em> —
            v malých dávkách, přesně načasovaně, a je hned znát rozdíl.
          </p>
          <p className="hero__sub">
            Společnost mladých kreativců a odborníků z Hradce Králové. Jedna žláza,
            čtyři sekrece: identita, web, reklama a PR.
          </p>
        </div>

        <div className="hero__col hero__plate">
          <Plate />
          <p className="plate__caption">
            Obr. 1 — metabolický diagram značky. Čtyři vývody, jedna žláza.
          </p>
        </div>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="services__head">
          <p className="eyebrow eyebrow--amber">Co děláme</p>
          <h2 id="services-title" className="h2">Čtyři sekrece jedné žlázy</h2>
          <p className="lede">
            Každá služba je jedna sekrece — vzniká ve žláze značky a proudí dál do
            vašeho marketingového metabolismu. Berete je společně, protože se navzájem
            posilují.
          </p>
        </div>

        <ol className="secretions">
          {services.map((s) => (
            <li key={s.n} className="secretion">
              <span className="secretion__node" aria-hidden="true" />
              <span className="secretion__n">{s.n}</span>
              <div className="secretion__body">
                <h3 className="secretion__title">{s.title}</h3>
                <p className="secretion__lead">{s.lead}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div className="about__grid">
          <div className="about__lead">
            <p className="eyebrow eyebrow--coral">Kdo jsme</p>
            <h2 id="about-title" className="h2">
              Mladí kreativci a odborníci, kteří se spojili kvůli jedné věci —
              originalitě.
            </h2>
            <p className="about__para">
              Vytvoříme vám jedinečnou firemní identitu, ukážeme ji veřejnosti
              formou precizní webové prezentace a pak už jen kreativně ovlivňujeme
              vaši komunikaci. Považujeme se za specialistu i partnera v online
              marketingu — ne za dodavatele šablon.
            </p>
          </div>

          <ul className="trust">
            <li className="trust__item">
              <span className="trust__k">Důvěra</span>
              <span className="trust__v">
                Dobrý vztah vždy stojí na důvěře. Z ní pramení pochopení toho, proč
                tu jste a jaký má vaše podnikání smysl.
              </span>
            </li>
            <li className="trust__item">
              <span className="trust__k">Výzkum napřed</span>
              <span className="trust__v">
                Reklamní myšlence u nás vždy předchází výzkum potřeb a myšlení cílové
                skupiny. Nápad není náhoda.
              </span>
            </li>
            <li className="trust__item">
              <span className="trust__k">Vše pod jednou žlázou</span>
              <span className="trust__v">
                Identita, web, reklama i PR z jednoho místa — ladí spolu, protože
                vznikají spolu.
              </span>
            </li>
          </ul>
        </div>

        <dl className="facts">
          <div className="fact">
            <dt className="fact__k">Ordinace</dt>
            <dd className="fact__v">Horova 36/29<br />500&nbsp;02 Hradec Králové</dd>
          </div>
          <div className="fact">
            <dt className="fact__k">Volejte PANKREAtivce</dt>
            <dd className="fact__v">
              <a href="tel:+420608318151">+420&nbsp;608&nbsp;318&nbsp;151</a>
            </dd>
          </div>
          <div className="fact">
            <dt className="fact__k">Obor</dt>
            <dd className="fact__v">Kreativní PR &amp; reklamní agentura</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
