import type { ReactNode } from "react";

type Entry = { text: string; fig?: string };

const LEDGER: { verb: string; role: string; entries: Entry[] }[] = [
  {
    verb: "VEDU",
    role: "Průběžně, měsíc co měsíc",
    entries: [
      { text: "účetnictví" },
      { text: "daňovou evidenci" },
      { text: "mzdovou agendu" },
    ],
  },
  {
    verb: "ZPRACUJI",
    role: "Přiznání a výkazy v termínu",
    entries: [
      { text: "přiznání k dani z příjmů právnických osob" },
      { text: "přiznání k dani z příjmů fyzických osob" },
      { text: "přiznání k DPH a kontrolní hlášení" },
      { text: "vyúčtování daně ze závislé činnosti" },
      { text: "vyúčtování daně vybírané srážkou" },
      { text: "přiznání k dani silniční" },
      { text: "přiznání k dani z nemovitých věcí" },
      { text: "přehledy o příjmech a výdajích OSVČ" },
      { text: "přihlášky a změny v registracích k daním" },
      { text: "statistické výkazy" },
    ],
  },
  {
    verb: "VYŘÍDÍM",
    role: "Vy máte klid, papíry řeším já",
    entries: [
      { text: "odevzdání všech dokumentů" },
      { text: "komunikaci s úřady a institucemi" },
      { text: "žádosti o potvrzení o bezdlužnosti" },
      { text: "žádosti o příspěvky a bonusy" },
    ],
  },
];

const CENIK: { text: string; note: string; fig: string }[] = [
  { text: "Vedení účetnictví", note: "měsíčně", fig: "od 1 500" },
  { text: "Daňová evidence", note: "měsíčně", fig: "od 900" },
  { text: "Mzdová agenda", note: "za zaměstnance", fig: "od 250" },
  { text: "Přiznání k dani z příjmů", note: "ročně", fig: "od 2 500" },
  { text: "Přiznání k DPH", note: "měsíčně", fig: "od 800" },
];

const KOMU: { title: string; note: string }[] = [
  { title: "Právnickým osobám", note: "s.r.o. i menší firmy s vlastním účetnictvím" },
  { title: "Fyzickým osobám", note: "OSVČ, živnostníci a podnikatelé na volné noze" },
  { title: "Zájmovým spolkům", note: "kluby a neziskové organizace" },
  { title: "Společenstvím vlastníků", note: "SVJ a bytová družstva" },
];

function Band({
  index,
  verb,
  role,
  entries,
}: {
  index: string;
  verb: string;
  role: string;
  entries: Entry[];
}): ReactNode {
  return (
    <div className="band">
      <div className="band-grid">
        <div className="verb-col">
          <p className="verb-index">{index}</p>
          <h3 className="verb">{verb}</h3>
          <p className="verb-role">{role}</p>
        </div>
        <ol className="entries">
          {entries.map((e) => (
            <li className="entry" key={e.text}>
              <span className="tick" aria-hidden="true">&gt;</span>
              <span className="entry-text">{e.text}</span>
              <span className="entry-num" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#hero" aria-label="FinOp účetnictví, Liberec">
          <span className="wm-fin">Fin</span>
          <span className="wm-op">Op</span>
          <span className="wm-dot" aria-hidden="true" />
          <span className="wm-sub">účetnictví · Liberec</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#cenik">Ceník</a>
          <a className="topcall" href="tel:+420777111222">+420 777 111 222</a>
        </nav>
      </header>

      <section className="hero" id="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <p className="hero-eyebrow">Účetní kancelář · Petra Opočenská</p>
          <h1 className="hero-title" id="hero-title">
            <span className="hl">Postarám se</span>
            <span className="hl">o Vaše finanční</span>
            <span className="hl">záležitosti.</span>
            <span className="hl hl-accent">
              Pro Váš klid.<span className="cursor" aria-hidden="true">▮</span>
            </span>
          </h1>
          <p className="hero-lead">
            Vedu účetnictví a daně malým firmám, živnostníkům, spolkům i SVJ
            v Liberci. Odevzdání dokumentů, komunikaci s úřady i termíny nechte
            na mně — knihy vedu do posledního řádku.
          </p>
          <div className="hero-meta" role="list">
            <span className="hm" role="listitem">
              <span className="hm-k">IČO</span>
              <span className="hm-v">22498079</span>
            </span>
            <span className="hm" role="listitem">
              <span className="hm-k">Datová schránka</span>
              <span className="hm-v">fyvaui3</span>
            </span>
            <span className="hm" role="listitem">
              <span className="hm-k">Kancelář</span>
              <span className="hm-v">Ukázková 123, Liberec</span>
            </span>
          </div>
        </div>
      </section>

      <section className="section" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">Otevřená kniha</p>
          <h2 className="section-title" id="sluzby-title">
            Co pro Vás vedu, zpracuji a vyřídím
          </h2>
          <p className="section-sub">
            Každá služba je zaúčtovaná položka. Ať přijde přiznání k DPH nebo
            žádost o bezdlužnost — má svůj řádek a svůj termín.
          </p>
        </div>

        {LEDGER.map((b, i) => (
          <Band
            key={b.verb}
            index={String(i + 1).padStart(2, "0")}
            verb={b.verb}
            role={b.role}
            entries={b.entries}
          />
        ))}

        <div className="band band-cenik" id="cenik">
          <div className="band-grid">
            <div className="verb-col">
              <p className="verb-index">Kč</p>
              <h3 className="verb">CENÍK</h3>
              <p className="verb-role">Orientační ceny bez DPH, ušité na míru rozsahu</p>
            </div>
            <ul className="cenik">
              {CENIK.map((c) => (
                <li className="cenik-row" key={c.text}>
                  <span className="tick" aria-hidden="true">&gt;</span>
                  <span className="cenik-text">
                    {c.text} <span className="cenik-note">{c.note}</span>
                  </span>
                  <span className="leader" aria-hidden="true" />
                  <span className="cenik-fig">
                    {c.fig} <span className="cenik-unit">Kč</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="komu" aria-labelledby="komu-title">
        <div className="section-head">
          <p className="eyebrow">Komu pomáhám</p>
          <h2 className="section-title" id="komu-title">
            Jedna účetní, kterou znáte jménem
          </h2>
          <p className="section-sub">
            Nejsem call centrum ani řetězec poboček. Jsem Petra a Vaše knihy
            vedu osobně — proto vím, co se ve firmě děje, dřív než přijde
            kontrola.
          </p>
        </div>

        <div className="band">
          <div className="komu-grid">
            {KOMU.map((k, i) => (
              <article className="komu-card" key={k.title}>
                <span className="komu-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="komu-title">{k.title}</h3>
                <p className="komu-note">{k.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="band">
          <div className="band-grid">
            <div className="verb-col">
              <p className="verb-index">01</p>
              <h3 className="verb verb-small">O MNĚ</h3>
              <p className="verb-role">Petra Opočenská, účetní · Liberec</p>
            </div>
            <div className="about">
              <p className="about-lead">
                Účetnictví dělám tak, jak se má vést kniha — přehledně, včas
                a bez dohadů. Klienty beru z Liberce a okolí, komunikaci
                zvládneme e-mailem i osobně v kanceláři.
              </p>
              <ul className="contact">
                <li className="contact-row">
                  <span className="tick" aria-hidden="true">&gt;</span>
                  <span className="contact-k">Telefon</span>
                  <a className="contact-v mono" href="tel:+420777111222">
                    +420 777 111 222
                  </a>
                </li>
                <li className="contact-row">
                  <span className="tick" aria-hidden="true">&gt;</span>
                  <span className="contact-k">E-mail</span>
                  <a className="contact-v mono" href="mailto:info@example.cz">
                    info@example.cz
                  </a>
                </li>
                <li className="contact-row">
                  <span className="tick" aria-hidden="true">&gt;</span>
                  <span className="contact-k">Kancelář</span>
                  <span className="contact-v">Ukázková 123, Liberec · 1. patro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
