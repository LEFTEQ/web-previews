import type { ReactNode } from "react";

type Service = {
  id: string;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    id: "01",
    title: "Denní úklid",
    desc: "Pravidelný úklid kanceláří, bytových domů i komerčních prostor. Přijdeme podle rozvrhu a necháme za sebou perfektní čistotu \u2013 každý den.",
  },
  {
    id: "02",
    title: "Jednorázový úklid",
    desc: "Po rekonstrukci, malování nebo před nastěhováním. Důkladně a přesně podle toho, co potřebujete uklidit.",
  },
  {
    id: "03",
    title: "Čištění koberců a čalounění",
    desc: "Hloubkové extrakční čištění, které vytáhne špínu z vláken. Kobercům i sedačkám vrátíme barvu a svěžest.",
  },
  {
    id: "04",
    title: "Mytí oken",
    desc: "Výlohy, skleněné plochy, rámy i parapety. Sklo necháme dokonale čisté \u2013 beze šmouh a bez zaschlých kapek.",
  },
  {
    id: "05",
    title: "Strojní mytí podlah",
    desc: "Profesionální stroje na čištění a leštění podlah. Zvládneme i zašlé skvrny a vrátíme povrchu lesk.",
  },
  {
    id: "06",
    title: "Venkovní plochy",
    desc: "Chodníky, parkoviště, terasy a vstupy. Postaráme se o čistotu i reprezentativní vzhled po celý rok.",
  },
  {
    id: "07",
    title: "Hygienický servis",
    desc: "Dodáváme a doplňujeme hygienické potřeby. Zajistíme bezproblémový chod sanitárních zařízení na pracovišti.",
  },
];

type Reason = { k: string; title: string; desc: string };

const reasons: Reason[] = [
  {
    k: "Osobně",
    title: "Profesionální přístup",
    desc: "Každou zakázku bereme osobně. Hlídáme kvalitu, detaily i férové jednání \u2013 a vždy víte, kdo k vám přijde.",
  },
  {
    k: "Domluva",
    title: "Flexibilita a domluva",
    desc: "Přizpůsobíme se vašemu času i provozu. Úklid nastavíme tak, aby vám co nejvíc vyhovoval.",
  },
  {
    k: "Technika",
    title: "Špičkové vybavení",
    desc: "Pracujeme s technikou Kleen Rite, Orbot a Cleansmart a s ověřenou chemií pro nejlepší výsledek.",
  },
  {
    k: "Roky",
    title: "Spolehlivost a dlouhodobost",
    desc: "Zákazníci s námi zůstávají roky. Držíme termíny, smluvený rozsah i kvalitu práce.",
  },
];

function Streak(): ReactNode {
  return <span className="streak" aria-hidden="true" />;
}

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-inner">
          <div className="wordmark display">
            MYFA<span className="wordmark-2">Myšík</span>
            <Streak />
          </div>

          <p className="eyebrow">
            <span>Čistírna &amp; úklid</span>
            <span className="dot" aria-hidden="true" />
            <span>Plzeň</span>
            <span className="dot" aria-hidden="true" />
            <span>od roku 1994</span>
          </p>

          <h1 className="display hero-title">
            Je čas
            <br />
            na úklid?
          </h1>

          <p className="hero-sub">
            Rodinná úklidová firma s více než 30 lety zkušeností. Pečujeme o
            vaše prostory s precizností a důvěrou &ndash; od denního servisu
            kanceláří po úklid po rekonstrukci.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#sluzby">
              Nezávazná nabídka
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Naše služby
            </a>
          </div>

          <dl className="hero-meta">
            <div>
              <dt>Zkušenosti</dt>
              <dd>30+ let</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Plzeň &amp; ČR</dd>
            </div>
            <div>
              <dt>Kdo jsme</dt>
              <dd>Rodinná firma</dd>
            </div>
          </dl>
        </div>

        <div className="hero-frost" aria-hidden="true" />
        <div className="hero-blade" aria-hidden="true" />
      </section>

      <section className="section section-light" id="sluzby">
        <header className="section-head">
          <p className="section-eyebrow">
            Služby <span className="idx">01&ndash;07</span>
          </p>
          <h2 className="display section-title">
            Profesionální úklid pro firmy i&nbsp;domácnosti
          </h2>
          <Streak />
          <p className="section-lead">
            Vyberte si službu, která vám sedne. Přijedeme, poradíme a
            připravíme nezávaznou nabídku &ndash; bez tlaku a bez skrytých
            položek.
          </p>
        </header>

        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.id}>
              <span className="card-corner" aria-hidden="true" />
              <span className="card-id">{s.id}</span>
              <h3 className="display card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section-dark" id="o-nas">
        <header className="section-head">
          <p className="section-eyebrow section-eyebrow-light">O nás</p>
          <h2 className="display section-title">Proč právě MYFA Myšík?</h2>
          <Streak />
          <p className="section-lead section-lead-light">
            Rodinná firma s více než 30 lety zkušeností. Naše práce stojí na
            spolehlivosti, rychlosti a kvalitě &ndash; a na sehraném týmu,
            který se za výsledek nestydí.
          </p>
        </header>

        <div className="reasons">
          {reasons.map((r) => (
            <article className="reason" key={r.title}>
              <span className="reason-k">{r.k}</span>
              <h3 className="display reason-title">{r.title}</h3>
              <p className="reason-desc">{r.desc}</p>
            </article>
          ))}
        </div>

        <p className="equip">
          <span className="equip-label">Vybavení</span>
          Kleen&nbsp;Rite <span className="sep" aria-hidden="true" /> Orbot{" "}
          <span className="sep" aria-hidden="true" /> Cleansmart
        </p>
      </section>
    </main>
  );
}
