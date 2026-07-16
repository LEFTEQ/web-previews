import type { ReactNode } from "react";

type Spec = { k: string; v: string };
type Service = {
  code: string;
  title: string;
  lead: string;
  specs: Spec[];
};

const services: Service[] = [
  {
    code: "KOM",
    title: "Úklid komerčních prostor",
    lead:
      "Čisté prostředí prokazatelně zvedá výkon celé firmy. Přizpůsobíme se i náročnému provozu — uklízíme kolem vaší směny, ne proti ní.",
    specs: [
      { k: "Prostředí", v: "kanceláře, obchody, výrobní haly" },
      { k: "Frekvence", v: "denní · pravidelná · jednorázová" },
      { k: "Rozsah", v: "podlahy, sanita, odpad, kuchyňky" },
    ],
  },
  {
    code: "DOM",
    title: "Úklid domácností",
    lead:
      "Rodinný dům spolyká klidně celý den vašeho volna. Vezmeme ho za vás — byt, dům i úklid po malování nebo rekonstrukci.",
    specs: [
      { k: "Prostředí", v: "byty, rodinné domy" },
      { k: "Frekvence", v: "jednorázová · pravidelná" },
      { k: "Rozsah", v: "generální, po rekonstrukci, okna" },
    ],
  },
  {
    code: "ZDR",
    title: "Úklid zdravotnických zařízení",
    lead:
      "Nejnáročnější kategorie. Personál pravidelně školíme na hygienický režim, aby úklid seděl na chod ordinace či kliniky do minuty.",
    specs: [
      { k: "Prostředí", v: "ordinace, kliniky, laboratoře" },
      { k: "Frekvence", v: "dle provozního řádu" },
      { k: "Rozsah", v: "dezinfekce, školený personál" },
    ],
  },
];

const extras: { title: string; note: string }[] = [
  { title: "Mytí oken a fasád", note: "i horolezeckou technikou" },
  { title: "Čištění koberců", note: "extrakce i suchá technologie" },
  { title: "Voskování podlah", note: "nános i odstranění vosku" },
  { title: "Čištění čalounění", note: "židle, křesla, sedačky" },
  { title: "Generální úklid", note: "po stavbě a rekonstrukci" },
  { title: "Venkovní prostory", note: "zeleň i zimní údržba" },
];

const facts: { n: string; label: string }[] = [
  { n: "14", label: "let praxe v oboru" },
  { n: "3", label: "města — Brno, Praha, Ostrava" },
  { n: "9–20", label: "na telefonu, Po–So" },
];

function Stroke({ className }: { className?: string }): ReactNode {
  return <span className={"swipe " + (className ?? "")} aria-hidden="true" />;
}

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Boseka service, úvod">
          <span className="wordmark-mark" aria-hidden="true" />
          <span className="wordmark-name">Boseka</span>
          <span className="wordmark-sub">service · Brno</span>
        </a>
        <a className="masthead-phone" href="tel:+420732297288">
          <span className="masthead-phone-num">+420 732 297 288</span>
          <span className="masthead-phone-hint">Po–So, 9–20</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="eyebrow">Úklidové služby · Brno–Zábrdovice</p>
          <h1 className="hero-title">
            Nám na čistotě
            <br />
            záleží.
            <Stroke className="swipe-title" />
          </h1>
          <p className="hero-lead">
            Komplexní úklid pro firmy, domácnosti i zdravotnická zařízení.
            Na trhu krátce, v oboru čtrnáct let — a poznáte to na každém
            vytřeném metru.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420732297288">
              Zavolejte nám
            </a>
            <a className="btn btn-ghost" href="mailto:info@boseka.cz">
              info@boseka.cz
            </a>
          </div>
        </div>
        <div className="hero-frost" aria-hidden="true">
          <span className="hero-blade" />
        </div>
      </section>

      <section className="catalog" aria-labelledby="catalog-title">
        <div className="section-head">
          <p className="eyebrow">Katalog služeb — tři specializace</p>
          <h2 id="catalog-title" className="section-title">
            Co pro vás uklidíme
          </h2>
        </div>

        <div className="specimens">
          {services.map((s) => (
            <article className="card" key={s.code}>
              <div className="card-tag">
                <Stroke className="swipe-tag" />
                <span className="card-code">{s.code}</span>
              </div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-lead">{s.lead}</p>
              <dl className="spec-sheet">
                {s.specs.map((sp) => (
                  <div className="spec-row" key={sp.k}>
                    <dt>{sp.k}</dt>
                    <dd>{sp.v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="extras">
          <p className="extras-label">A ještě zvládneme</p>
          <ul className="extras-list">
            {extras.map((e) => (
              <li className="extras-item" key={e.title}>
                <span className="extras-title">{e.title}</span>
                <span className="extras-note">{e.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="section-head">
          <p className="eyebrow">O společnosti Boseka</p>
          <h2 id="trust-title" className="section-title">
            Malá firma, dlouhá praxe
          </h2>
        </div>

        <div className="trust-grid">
          <div className="trust-copy">
            <p>
              Boseka service je brněnská úklidová firma pro jednorázové,
              pravidelné i generální úklidy. Uklidíme kanceláře i domov,
              umyjeme okna a fasády, strojově vyčistíme podlahy a odstraníme
              vosk. Působíme v Brně, Praze, Ostravě a okolí.
            </p>
            <Stroke className="swipe-trust" />
            <ul className="trust-details">
              <li>
                <span className="td-k">Sídlo</span>
                <span className="td-v">Příkop 843/4, 602 00 Brno–Zábrdovice</span>
              </li>
              <li>
                <span className="td-k">IČO</span>
                <span className="td-v">17221633 · DIČ CZ17221633</span>
              </li>
              <li>
                <span className="td-k">Napište</span>
                <span className="td-v">info@boseka.cz</span>
              </li>
            </ul>
          </div>

          <ul className="figures">
            {facts.map((f) => (
              <li className="figure" key={f.label}>
                <span className="figure-n">{f.n}</span>
                <span className="figure-l">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
