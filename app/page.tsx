export const metadata = {
  title: "TOKAJCZECHTRADE — Vinotéka Olomouc | Tokajská a moravská vína",
  description:
    "Vinotéka TOKAJCZECHTRADE v Olomouci: pravé tokajské putňové výběry, furminty a moravská vína. Degustace, dárkové kazety a poradenství při výběru vína.",
  openGraph: {
    title: "TOKAJCZECHTRADE — Vinotéka Olomouc",
    description:
      "Tokajská putňová vína a furminty přímo od malých maďarských vinařů. Vinotéka a degustace v centru Olomouce.",
    type: "website",
    locale: "cs_CZ",
  },
};

const puttony = [
  { n: "3", note: "jemně medový, k modrým sýrům" },
  { n: "4", note: "plnější, sušené meruňky a šafrán" },
  { n: "5", note: "klasika k foie gras a dezertům" },
  { n: "6", note: "nejvzácnější, víno na roky ležení" },
];

const nabidka = [
  {
    label: "Aszú",
    title: "Tokajské putňové výběry",
    text:
      "Vína z hroznů napadených ušlechtilou plísní Botrytis cinerea, sbíraných bobule po bobuli. Vedeme ročníky 2013–2019 od rodinných vinařství z obcí Mád a Tarcal, 3–6 putní. Každou lahev vám otevřeme k ochutnání dřív, než ji koupíte.",
  },
  {
    label: "Furmint",
    title: "Suché furminty a szamorodni",
    text:
      "Tokaj nejsou jen sladká vína. Suchý furmint je minerální, ostrý jako křemen sopečného podloží, na kterém roste. Ideální k pstruhovi, ke svíčkové i jen tak k večeru. Od 240 Kč za lahev.",
  },
  {
    label: "Morava",
    title: "Moravská vína od sousedů",
    text:
      "Aby bylo co pít každý den: ryzlinky a veltlíny z Mikulovska a Slovácka, stáčená i lahvová. Sudová vína točíme čerstvá, dovezená každý týden — přineste si vlastní láhev, nebo ji koupíte u nás.",
  },
  {
    label: "Dárky",
    title: "Dárkové kazety a firemní odběry",
    text:
      "Půllitrová lahev šestiputňového aszú v dřevěné kazetě je dárek, který se nevrací. Sestavíme kazety na míru, pro firmy připravíme odběr s fakturou a doručením po Olomouci zdarma.",
  },
];

const duvera = [
  {
    q: "Šestiputňové aszú jsem do té doby znal jen z vyprávění. Tady mi ho nalili k ochutnání a hodinu se mnou probírali ročníky. Odcházel jsem se dvěma lahvemi a vracím se každý měsíc.",
    a: "Martin H., Olomouc-Hejčín",
  },
  {
    q: "Objednávali jsme dárkové kazety pro třicet obchodních partnerů. Vše připravené na den přesně, každá kazeta s kartičkou o ročníku. Profesionální práce.",
    a: "Ing. Petra S., účetní kancelář, Olomouc",
  },
  {
    q: "Chodím si sem točit furmint do vlastní lahve. Vždycky čerstvý, vždycky mi řeknou, co zrovna přivezli. Taková vinotéka v Olomouci chyběla.",
    a: "Jana K., Nová Ulice",
  },
];

export default function Page() {
  return (
    <main className="tct">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Tokaj Czech Trade, vinotéka Olomouc">
            <span className="wordmark-main">TOKAJ</span>
            <span className="wordmark-sub">CZECH&nbsp;TRADE</span>
          </div>
          <p className="hero-loc">Vinotéka · Olomouc</p>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Vinum regum — rex vinorum</p>
          <h1 className="hero-title">
            Víno králů,
            <br />
            <em>doma v Olomouci.</em>
          </h1>
          <p className="hero-lead">
            Vozíme tokajská putňová vína přímo od malých maďarských vinařů
            a k nim moravské lahve na každý den. Než koupíte, ochutnáte.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420585123456">
              Zavolat do vinotéky
            </a>
            <a className="btn btn-line" href="mailto:vinoteka@tokajczechtrade.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: puttonyos scale — the real Tokaj measure of sweetness */}
        <div className="putt-scale" role="img" aria-label="Stupnice putňových výběrů od tří do šesti putní">
          {puttony.map((p, i) => (
            <div className="putt" key={p.n} style={{ ['--i' as never]: i } as React.CSSProperties}>
              <span className="putt-drop" aria-hidden="true" />
              <span className="putt-num">{p.n}</span>
              <span className="putt-unit">putní</span>
              <span className="putt-note">{p.note}</span>
            </div>
          ))}
        </div>
        <p className="putt-caption">
          Putna = nůše botrytických bobulí na 136&nbsp;litrů moštu. Čím víc putní, tím sladší a vzácnější víno.
          U nás najdete celou stupnici.
        </p>
      </header>

      {/* ============ NABÍDKA ============ */}
      <section className="sec sec-nabidka" aria-labelledby="nabidka-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Co nalijeme</p>
          <h2 id="nabidka-h" className="sec-title">
            Od suchého furmintu po šest putní
          </h2>
        </div>
        <div className="nabidka-grid">
          {nabidka.map((item) => (
            <article className="karta" key={item.label}>
              <p className="karta-label">{item.label}</p>
              <h3 className="karta-title">{item.title}</h3>
              <p className="karta-text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ DŮVĚRA ============ */}
      <section className="sec sec-duvera" aria-labelledby="duvera-h">
        <div className="sec-head">
          <p className="sec-eyebrow sec-eyebrow-light">Proč k nám</p>
          <h2 id="duvera-h" className="sec-title sec-title-light">
            Malá vinotéka, přímé cesty
          </h2>
          <p className="duvera-intro">
            Nejsme řetězec. Do Tokaje jezdíme sami, vinaře známe jménem a každé
            víno, které stojí na našem regálu, jsme sami pili. V Olomouci nás
            najdete kousek od Dolního náměstí — otevřeno úterý až sobota,
            degustace každý první pátek v měsíci.
          </p>
        </div>
        <div className="duvera-grid">
          {duvera.map((d) => (
            <figure className="cit" key={d.a}>
              <blockquote className="cit-q">{d.q}</blockquote>
              <figcaption className="cit-a">{d.a}</figcaption>
            </figure>
          ))}
        </div>
        <ul className="fakta">
          <li>
            <strong>Degustace zdarma</strong> ke každé lahvi nad 500 Kč — otevřeme a nalijeme.
          </li>
          <li>
            <strong>Rozvoz po Olomouci</strong> od šesti lahví týž den, bez příplatku.
          </li>
          <li>
            <strong>Ročníky 2013–2019</strong> aszú skladem, starší sháníme na objednávku.
          </li>
        </ul>
      </section>
    </main>
  );
}
