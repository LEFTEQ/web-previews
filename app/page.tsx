import type { ReactNode } from "react";

type Course = {
  glyph: string;
  lang: string;
  focus: string;
};

const courses: Course[] = [
  {
    glyph: "英",
    lang: "Angličtina",
    focus: "Pro cestovní ruch i byznys. Připravíme vás na zkoušky B2 First (FCE) a C1 Advanced (CAE).",
  },
  {
    glyph: "中",
    lang: "Čínština",
    focus: "Obchodní čínština i čínština pro tradiční čínskou medicínu. Znaky bereme od základů.",
  },
  {
    glyph: "한",
    lang: "Korejština",
    focus: "Od hangulu po zkoušku TOPIK. Kurzy s přesahem do korejské kultury a hudby.",
  },
  {
    glyph: "日",
    lang: "Japonština",
    focus: "Japonština pro bojová umění i příprava na JLPT. K tomu přednášky o japonské historii.",
  },
  {
    glyph: "ع",
    lang: "Arabština",
    focus: "Spisovná arabština, písmo i výslovnost. Pro úplné začátečníky i pokročilé.",
  },
  {
    glyph: "ру",
    lang: "Ruština",
    focus: "Konverzace i obchodní ruština. Gramatiku vysvětlíme srozumitelně, ne ze staré učebnice.",
  },
  {
    glyph: "Deu",
    lang: "Němčina",
    focus: "Němčina pro zdravotníky a pečující profese. Slovník, který v práci opravdu použijete.",
  },
  {
    glyph: "Esp",
    lang: "Španělština",
    focus: "Od základů po certifikát DELE. Živá konverzace s rodilými mluvčími.",
  },
];

type Reason = {
  label: string;
  text: string;
};

const reasons: Reason[] = [
  {
    label: "Lektoři",
    text: "Čeští lektoři i rodilí mluvčí. Kurz přizpůsobíme vaší úrovni i tomu, proč se jazyk učíte.",
  },
  {
    label: "Certifikáty",
    text: "Připravíme vás na JLPT, TOPIK, DELE, B2 First (FCE) i C1 Advanced (CAE).",
  },
  {
    label: "Pro studenty",
    text: "Středoškoláci mohou přes školu vyjet na studijní pobyt do Japonska.",
  },
  {
    label: "Pro děti",
    text: "Příměstské tábory s asijskou kulturou — smysluplná náplň prázdnin.",
  },
  {
    label: "Kultura",
    text: "Japonské dny, přednášky a setkání. Učíme jazyk i to, co za ním stojí.",
  },
  {
    label: "Kde nás najdete",
    text: "V centru Českých Budějovic. Nový semestr právě otevírá zápisy.",
  },
];

export default function Page(): ReactNode {
  return (
    <main className="ak">
      <section className="ak-section ak-hero">
        <div className="ak-wrap ak-hero__wrap">
          <p className="ak-eyebrow">赤い菊 — červená chryzantéma · Jazyková škola · České Budějovice</p>

          <div
            className="ak-seal"
            role="img"
            aria-label="Pečeť AKAI KIKU — červená chryzantéma"
          >
            <span className="ak-seal__glyph" aria-hidden="true">菊</span>
          </div>

          <h1 className="ak-wordmark">AKAI KIKU</h1>

          <p className="ak-hero__lead">
            Čínština pro čínskou medicínu, japonština pro bojová umění, němčina pro
            zdravotníky. Kurzy stavíme na míru tomu, proč se jazyk učíte — a učíme ho
            tak, jak ho budete používat.
          </p>

          <div className="ak-hero__actions">
            <a className="ak-btn ak-btn--solid" href="#kurzy">Zapsat se do kurzu</a>
            <a className="ak-btn ak-btn--ghost" href="#proc">Proč právě AKAI KIKU</a>
          </div>
        </div>
      </section>

      <section className="ak-section ak-catalog" id="kurzy">
        <div className="ak-wrap">
          <header className="ak-catalog__head">
            <p className="ak-eyebrow ak-eyebrow--rule">Katalog jazyků — každý má svou pečeť</p>
            <h2 className="ak-h2">Osm jazyků, jeden přístup</h2>
            <p className="ak-lede">
              Vyberte si jazyk jako razítko ze sbírky. Ke každému patří kurz vedený tak,
              abyste ho hned uměli použít — v práci, na cestách i u zkoušky.
            </p>
          </header>

          <div className="ak-grid">
            {courses.map((c) => (
              <article className="ak-spec" key={c.lang}>
                <span className="ak-spec__glyph" aria-hidden="true">{c.glyph}</span>
                <div className="ak-spec__body">
                  <h3 className="ak-spec__lang">{c.lang}</h3>
                  <p className="ak-spec__focus">{c.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ak-section ak-colophon" id="proc">
        <div className="ak-wrap">
          <header className="ak-colophon__head">
            <p className="ak-eyebrow ak-eyebrow--brass">Proč AKAI KIKU</p>
            <h2 className="ak-h2 ak-h2--light">
              Škola, kde jazyk není jen slovíčka
            </h2>
          </header>

          <dl className="ak-colophon__list">
            {reasons.map((r) => (
              <div className="ak-colophon__row" key={r.label}>
                <dt className="ak-colophon__term">{r.label}</dt>
                <dd className="ak-colophon__desc">{r.text}</dd>
              </div>
            ))}
          </dl>

          <a className="ak-btn ak-btn--solid ak-colophon__cta" href="#kurzy">
            Vybrat jazyk a zapsat se
          </a>
        </div>
      </section>
    </main>
  );
}
