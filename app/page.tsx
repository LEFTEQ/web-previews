import type { ReactNode } from "react";

type Service = {
  tag: string;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    tag: "Konzultace",
    title: "Rozbor situace na rovinu",
    body:
      "Než se do čehokoli pustíme, řeknu vám bez obalu, jak na tom jste, jaké máte možnosti a co bude který krok reálně stát. Žádné plané sliby, žádné hodiny navíc.",
  },
  {
    tag: "Spory",
    title: "Zastupování u soudu i mimo něj",
    body:
      "Sepíšu žalobu, odpor i vyjádření a zastoupím vás v soudním i mimosoudním sporu i v řízení před správními úřady. Od prvního podání do pravomocného rozhodnutí jednáte pořád se mnou.",
  },
  {
    tag: "Dokumenty",
    title: "Smlouvy, rozbory a stanoviska",
    body:
      "Kupní a darovací smlouvy, právní rozbory a písemná stanoviska připravená přesně na váš záměr — ne vytažená ze šablony, kterou byste našli i sami.",
  },
  {
    tag: "Úschova",
    title: "Advokátní úschova kupní ceny",
    body:
      "Peníze kupujícího leží na oddělené advokátní úschově, dokud nejsou splněny dohodnuté podmínky převodu. Ani koruna se nepohne dřív, než má.",
  },
];

function ArcadeRule({ className }: { className?: string }): ReactNode {
  return <div className={className} role="presentation" aria-hidden="true" />;
}

export default function Page(): ReactNode {
  return (
    <main className="page">
      <header className="topbar">
        <span className="wordmark">
          <span className="wordmark__mono">ZP</span>
          <span className="wordmark__label">Mgr. Zita Poláková · advokátka</span>
        </span>
        <a className="topbar__phone link" href="tel:+420777111222">
          777 111 222
        </a>
      </header>

      <section className="band hero" aria-labelledby="hero-name">
        <div className="hero__display">
          <p className="eyebrow anim anim--eyebrow">
            Advokátní kancelář — České Budějovice
          </p>
          <ArcadeRule className="arcade arcade--hero anim anim--arcade" />
          <h1 id="hero-name" className="hero__name anim anim--name">
            Zita
            <br />
            Poláková
          </h1>
          <p className="hero__role anim anim--role">
            Mgr. Zita Poláková, advokátka — členka České advokátní komory od roku 1997
          </p>
        </div>

        <div className="hero__side anim anim--side">
          <p className="hero__lead">
            Samostatná advokátka pod arkádami českobudějovického náměstí.
            Vedu jen tolik případů, kolik jich zvládnu vést pořádně — každý
            dostane mou plnou pozornost, ne pozornost týmu, který se u vašeho
            spisu střídá.
          </p>
          <dl className="facts">
            <div className="facts__row">
              <dt>Samostatná praxe</dt>
              <dd>od roku 2001</dd>
            </div>
            <div className="facts__row">
              <dt>Zaměření</dt>
              <dd>německy hovořící klientela, nemovitosti, spory</dd>
            </div>
            <div className="facts__row">
              <dt>Kde mě najdete</dt>
              <dd>Ukázková 123, České Budějovice</dd>
            </div>
          </dl>
          <div className="cta">
            <a className="btn btn--primary" href="tel:+420777111222">
              Zavolat 777 111 222
            </a>
            <a className="btn btn--ghost" href="mailto:info@example.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="band services" aria-labelledby="services-title">
        <div className="services__intro">
          <p className="eyebrow eyebrow--copper">Právní služby</p>
          <h2 id="services-title" className="section-title">
            S čím za mnou můžete přijít
          </h2>
          <p className="section-note">
            Čtyři věci, které pro vás dělám osobně a do konce. U složitějšího
            případu vám dopředu řeknu, kdy má smysl přizvat kolegu — a kdy ne.
          </p>
        </div>

        <ol className="service-list">
          {services.map((s, i) => (
            <li className="service" key={s.tag}>
              {i > 0 && (
                <ArcadeRule className="arcade arcade--divider" />
              )}
              <div className="service__inner">
                <span className="service__tag">{s.tag}</span>
                <div className="service__text">
                  <h3 className="service__title">{s.title}</h3>
                  <p className="service__body">{s.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="band trust" aria-labelledby="trust-title">
        <div className="trust__intro">
          <p className="eyebrow eyebrow--brass">Jak pracuji</p>
          <h2 id="trust-title" className="section-title section-title--light">
            Klid, diskrétnost a jedna odpovědná osoba
          </h2>
          <ul className="principles">
            <li>
              <strong>Jeden advokát od začátku do konce.</strong> Nepředávám
              spis dál — víte, s kým jednáte.
            </li>
            <li>
              <strong>Německy i česky.</strong> Zastoupím i klienty, kteří
              česky nemluví, bez tlumočníka mezi vámi a právem.
            </li>
            <li>
              <strong>Odměna jasně předem.</strong> Domluvíme ji na začátku,
              písemně, ať se nemusíte bát otevřít fakturu.
            </li>
          </ul>
        </div>

        <div className="escrow">
          <svg
            className="escrow__portal"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M1 100 L1 38 C1 14 24 3 50 3 C76 3 99 14 99 38 L99 100"
              fill="none"
              stroke="#a67c33"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="escrow__body">
            <p className="escrow__label">Advokátní úschova</p>
            <p className="escrow__lead">
              Vaše peníze leží v bezpečí, dokud není hotovo.
            </p>
            <p className="escrow__text">
              Kupní cenu vedu na zvláštním účtu advokátní úschovy, odděleném
              od mého majetku a evidovaném u České advokátní komory. Vyplatím
              ji teprve tehdy, když jsou splněny dohodnuté podmínky převodu —
              typicky až po zápisu vlastnického práva v katastru.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
