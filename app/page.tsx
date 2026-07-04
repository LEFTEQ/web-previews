import type { CSSProperties } from "react";

export const metadata = {
  title: "ACM Czech — účetnictví pro liberecké firmy a živnostníky",
  description:
    "Vedeme účetnictví a mzdovou agendu, zpracujeme daňová přiznání a poradíme s ESG reportingem. Liberec, Jablonecká 8/31. Pracujeme jako pro sebe.",
};

type Service = {
  no: string;
  title: string;
  body: string;
  items: string[];
};

const services: Service[] = [
  {
    no: "01",
    title: "Účetnictví a mzdy",
    body: "Vedeme účetnictví i mzdovou agendu společnostem a živnostníkům z celého Libereckého kraje. Hlídáme termíny za vás.",
    items: ["Kompletní vedení účetnictví", "Zpracování mezd a personalistika", "Přehledy pro OSSZ a zdravotní pojišťovny"],
  },
  {
    no: "02",
    title: "Daňová přiznání",
    body: "Zpracujeme daňová přiznání pro fyzické i právnické osoby. Poradíme, kde legálně ušetřit, a odešleme vše včas.",
    items: ["Přiznání k dani z příjmů PO i FO", "DPH a kontrolní hlášení", "Likvidace společností od A do Z"],
  },
  {
    no: "03",
    title: "Poradenství a ESG",
    body: "Máme po ruce daňové poradce, auditory, notáře, advokáty i odhadce. Pomůžeme s nefinančním reportingem.",
    items: ["ESG a uhlíková stopa", "Nefinanční reporting", "Konzultace s ověřenými odborníky"],
  },
];

type Row = { label: string; value: string };

const facts: Row[] = [
  { label: "Sídlo", value: "Jablonecká 8/31, Liberec 5 – Kristiánov" },
  { label: "Telefon", value: "+420 482 710 625" },
  { label: "E-mail", value: "info@acmcert.cz" },
  { label: "IČO", value: "250 20 862" },
];

export default function Page() {
  return (
    <main className="acm">
      <header className="acm-top">
        <a className="acm-brand" href="#uvod" aria-label="ACM Czech, účetní kancelář Liberec">
          <span className="acm-brand-mark" aria-hidden="true">
            A<span className="acm-brand-c">C</span>M
          </span>
          <span className="acm-brand-sub">účetní kancelář · Liberec</span>
        </a>
        <nav className="acm-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="acm-nav-call" href="tel:+420482710625">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="acm-hero" id="uvod">
        <div className="acm-hero-grid">
          <div className="acm-hero-copy">
            <p className="acm-eyebrow">Účetnictví · mzdy · daně · Liberecký kraj</p>
            <h1 className="acm-hero-title">
              Vaše čísla<br />
              <span className="acm-underline">sedí na haléř.</span>
            </h1>
            <p className="acm-hero-lede">
              Vedeme účetnictví společnostem i živnostníkům z Liberce a okolí. Termíny, mzdy i daňová
              přiznání hlídáme za vás — jako bychom je dělali sami pro sebe.
            </p>
            <div className="acm-hero-actions">
              <a className="acm-btn acm-btn-primary" href="#sluzby">
                Poptat vedení účetnictví
              </a>
              <a className="acm-btn acm-btn-ghost" href="tel:+420482710625">
                +420 482 710 625
              </a>
            </div>
          </div>

          <figure className="acm-hero-media">
            <img
              src="/hero.webp"
              alt="Účetní podklady, doklady a kalkulačka na pracovním stole ACM Czech v Liberci"
              className="acm-hero-img"
              width={880}
              height={720}
            />
            <figcaption className="acm-ledger" aria-hidden="true">
              <span className="acm-ledger-row">
                <span>Přijaté faktury</span>
                <span className="acm-num">148 320,00</span>
              </span>
              <span className="acm-ledger-row">
                <span>Mzdy — červen</span>
                <span className="acm-num">92 640,00</span>
              </span>
              <span className="acm-ledger-row acm-ledger-total">
                <span>Zůstatek</span>
                <span className="acm-num">+ 55 680,00</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="acm-services" id="sluzby">
        <div className="acm-section-head">
          <p className="acm-eyebrow">Co pro vás uděláme</p>
          <h2 className="acm-h2">Tři účetní knihy, jeden klid v hlavě</h2>
        </div>
        <ol className="acm-service-list">
          {services.map((s) => (
            <li className="acm-service" key={s.no}>
              <span className="acm-service-no" aria-hidden="true">
                {s.no}
              </span>
              <div className="acm-service-main">
                <h3 className="acm-service-title">{s.title}</h3>
                <p className="acm-service-body">{s.body}</p>
                <ul className="acm-service-items">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <figure className="acm-services-media">
          <img
            src="/section-1.webp"
            alt="Pracoviště účetní kanceláře ACM Czech se šanony a doklady připravenými ke zpracování"
            width={1200}
            height={620}
          />
        </figure>
      </section>

      <section className="acm-about" id="o-nas">
        <div className="acm-about-grid">
          <figure className="acm-about-media">
            <img
              src="/section-2.webp"
              alt="Kancelář ACM Czech v Liberci — místo, kde vzniká vaše účetnictví"
              width={620}
              height={720}
            />
          </figure>
          <div className="acm-about-copy">
            <p className="acm-eyebrow">O kanceláři</p>
            <h2 className="acm-h2">Liberecká kancelář, která zvedle čísel hlídá i termíny</h2>
            <p className="acm-about-lede">
              Nejsme anonymní účtárna. Známe liberecké firmy i drobné živnostníky a víme, co obnáší
              každá pobočka, provozovna i sezóna. Účetnictví děláme tak, jako bychom ho dělali pro sebe —
              přehledně, včas a bez překvapení.
            </p>
            <p className="acm-signature">
              „Uvedené kontakty nejsou určené k telefonickým ani e-mailovým nabídkám.“
              <span> — Ing. Vladimír Žďárský, referent</span>
            </p>
            <dl className="acm-facts">
              {facts.map((f) => (
                <div className="acm-fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

const _unused: CSSProperties = {};
