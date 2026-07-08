import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S & N Accounting, s.r.o. — účetnictví a daně, České Budějovice",
  description:
    "Vedení účetnictví, mzdová agenda, DPH a daň z příjmů pro firmy z Českobudějovicka. Jednáme za vás s úřady a hlídáme termíny. Kancelář na Rudolfovské.",
};

const sluzby = [
  {
    kod: "§ 01",
    nazev: "Vedení účetnictví",
    popis:
      "Kompletní zpracování účetnictví i daňové evidence. Zaúčtujeme doklady, sestavíme závěrku a přiznání — vy dostanete čísla, kterým rozumíte.",
  },
  {
    kod: "§ 02",
    nazev: "Mzdy a personalistika",
    popis:
      "Mzdová agenda od výplatních pásek po hlášení na správu sociálního zabezpečení a zdravotní pojišťovny. Termíny hlídáme za vás.",
  },
  {
    kod: "§ 03",
    nazev: "DPH a daň z příjmů",
    popis:
      "Naše specializace. Kontrolní hlášení, přiznání k DPH, roční přiznání — sestavíme, zkontrolujeme a podáme včas a bez chyb.",
  },
  {
    kod: "§ 04",
    nazev: "Komunikace s úřady",
    popis:
      "Jednáme s finančním úřadem, ČSSZ i pojišťovnami místo vás. Datovou schránku i lhůty máme pod kontrolou.",
  },
  {
    kod: "§ 05",
    nazev: "Svěřenské fondy a příspěvkové organizace",
    popis:
      "Bohaté zkušenosti s poradenstvím a vedením účetnictví svěřenských fondů a příspěvkových organizací — agenda, kterou umí málokdo.",
  },
  {
    kod: "§ 06",
    nazev: "Software i umělá inteligence",
    popis:
      "Pracujeme v různých účetních systémech a na přání implementujeme nástroje s umělou inteligencí, které zrychlí zpracování dokladů.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="S a N Accounting, domů">
          <span className="wordmark__mark" aria-hidden="true">
            S<span className="wordmark__amp">&amp;</span>N
          </span>
          <span className="wordmark__tail">Accounting</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a className="nav__cta" href="tel:+420734489476">Zavolat</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Účetní kancelář · České Budějovice</p>
            <h1 id="hero-title">
              Čísla, která{" "}
              <span className="hero__accent">sedí na haléř.</span>
            </h1>
            <p className="hero__lead">
              Vedeme účetnictví, mzdy a daně pro firmy z Českobudějovicka. Doklady
              převedeme na přehledné výkazy, přiznání podáme včas a s úřady
              jednáme za vás. Vy se věnujete podnikání.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="tel:+420734489476">
                Zavolat: 734 489 476
              </a>
              <a className="btn btn--ghost" href="mailto:svobodny@snaccounting.cz">
                Napsat e-mail
              </a>
            </div>
            <dl className="ledger">
              <div className="ledger__row">
                <dt>Vede</dt>
                <dd>Ing. Lukáš Svobodný, jednatel</dd>
              </div>
              <div className="ledger__row">
                <dt>Kancelář</dt>
                <dd>Rudolfovská 202/88, České Budějovice</dd>
              </div>
              <div className="ledger__row ledger__row--sum">
                <dt>Termíny</dt>
                <dd>hlídáme za vás — bez pokut a doměrků</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Účetní stůl v kanceláři S &amp; N Accounting v Českých Budějovicích"
              width={720}
              height={900}
              loading="eager"
            />
            <figcaption className="hero__stamp">
              <span className="hero__stamp-line">Přijato</span>
              <span className="hero__stamp-date">Rudolfovská · ČB</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Rozvaha služeb</p>
          <h2 id="sluzby-title">Kompletní ekonomický servis pod jednou střechou</h2>
          <p className="section-head__lead">
            Od prvního dokladu po podané přiznání. Vyberte si položku, nebo
            nechte na nás celou agendu — každou vedeme jako řádek v účetní knize:
            přesně, dohledatelně, včas.
          </p>
        </div>
        <ul className="sluzby__grid">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__kod">{s.kod}</span>
              <h3 className="card__nazev">{s.nazev}</h3>
              <p className="card__popis">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="onas" id="onas" aria-labelledby="onas-title">
        <div className="onas__grid">
          <figure className="onas__figure">
            <img
              src="/section-1.webp"
              alt="Ing. Lukáš Svobodný při práci s účetními doklady"
              width={640}
              height={720}
              loading="lazy"
            />
          </figure>
          <div className="onas__copy">
            <p className="eyebrow eyebrow--dark">O nás</p>
            <h2 id="onas-title">
              Malá kancelář, která rozumí i těžkým položkám
            </h2>
            <p>
              S &amp; N Accounting vede účetnictví z kanceláře na Rudolfovské
              ulici v Českých Budějovicích. Specializujeme se na DPH a daň
              z příjmů a máme zkušenosti i s agendou, které se jiní vyhýbají —
              svěřenskými fondy a příspěvkovými organizacemi.
            </p>
            <p>
              Ve spolupráci s obchodními partnery zajistíme i navazující daňové
              a právní služby. Jeden kontakt, celá agenda vyřešená.
            </p>

            <ul className="proof">
              <li className="proof__item">
                <span className="proof__label">Specializace</span>
                <span className="proof__value">DPH &amp; daň z příjmů</span>
              </li>
              <li className="proof__item">
                <span className="proof__label">Náročná agenda</span>
                <span className="proof__value">
                  svěřenské fondy, příspěvkové organizace
                </span>
              </li>
              <li className="proof__item">
                <span className="proof__label">Kontakt</span>
                <span className="proof__value">Ing. Lukáš Svobodný</span>
              </li>
            </ul>

            <figure className="onas__second">
              <img
                src="/section-2.webp"
                alt="Detail účetních výkazů a kalkulačky na stole v kanceláři"
                width={640}
                height={420}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
