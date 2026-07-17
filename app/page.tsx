import { FocusHeading } from "./motion";

const services = [
  {
    id: "01",
    ch: "cyan",
    name: "Grafický design",
    body: "Kompletní grafické práce od vizuální identity značek přes obalový design a vektorovou grafiku až po ucelené reklamní kampaně. Do každého návrhu přidáváme dávku kreativity a kritického myšlení.",
    chips: ["logo a firemní identita", "tiskoviny", "obalový design", "3D vizualizace", "webdesign", "profesionální fotografie"],
  },
  {
    id: "02",
    ch: "magenta",
    name: "Video služby",
    body: "Natáčíme produktová a firemní videa i obsah pro web a sociální sítě. Přes hledáček kamery lovíme okamžiky z vašich akcí a zajišťujeme živé přenosy na velkoplošnou obrazovku i online.",
    chips: ["produktové video", "propagační video", "záznamy a přenosy", "online streaming", "animace a znělky"],
  },
  {
    id: "03",
    ch: "amber",
    name: "Eventy",
    body: "Instalujeme videoprojekce a ozvučení na konference, ladíme detailní program firemních oslav a výročí a připravujeme 3D vizualizace veletržních expozic pro zahraniční veletrhy.",
    chips: ["videoprojekce", "konference", "veletržní expozice", "oslavy výročí", "ozvučení sálu"],
  },
  {
    id: "04",
    ch: "screen",
    name: "Půjčovna techniky",
    body: "Půjčujeme audiovizuální techniku pro prezentace, konference a společenské akce. Vyberete si z různých druhů projektorů, projekčních pláten, LCD displejů, videokamer a ozvučení.",
    chips: ["projektory", "projekční plátna", "LCD displeje", "videokamery", "ozvučení"],
  },
];

const references = [
  {
    quote:
      "Najít v džungli agentur takovou, která vás nikdy nezklame, je fuška. Na Michala a jeho partu je vždycky spolehnutí. Už několik let nám pomáhají se vším od grafiky přes videa až po eventy. A moc nás to s nimi baví.",
    who: "Agata Hauerová",
    role: "Interní komunikace, E.ON Česká republika",
  },
  {
    quote:
      "Novou vizuální identitu naší značky FIXED včetně oceňovaného packaging designu jsme řešili právě s nimi. Oceňuji komplexní profi přístup, pečlivost a smysl pro detail.",
    who: "Martin Kubáč",
    role: "Marketingový ředitel, RECALL",
  },
  {
    quote:
      "Se službami Media Consult jsem dlouhodobě velmi spokojen. Vyzdvihuji osobní přístup a neotřelé myšlenky při zpracování našich zadání. Vřele tento kreativní tým doporučuji.",
    who: "Mgr. Radek Bílý, MBA",
    role: "Head of Marketing, Photomate",
  },
  {
    quote:
      "Spolupracujeme už několik let a realizovali jsme spolu mnoho úspěšných marketingových aktivit. Oceňujeme profesionalitu, rychlost a originalitu, která nás posouvá dál.",
    who: "Ing. Petra Průchová",
    role: "Brand a propagace, O2 Family",
  },
];

export default function Page() {
  return (
    <main className="mc-stage">
      <header className="mc-hero mc-section">
        <span className="mc-tick mc-tick-tl" aria-hidden="true" />
        <span className="mc-tick mc-tick-tr" aria-hidden="true" />
        <span className="mc-tick mc-tick-bl" aria-hidden="true" />
        <span className="mc-tick mc-tick-br" aria-hidden="true" />

        <div className="mc-wrap">
          <nav className="mc-topbar" aria-label="Značka">
            <span className="mc-mark" aria-label="Media Consult">
              <span className="mc-mark-ch mc-mark-c" aria-hidden="true">Media Consult</span>
              <span className="mc-mark-ch mc-mark-m" aria-hidden="true">Media Consult</span>
              <span className="mc-mark-core">Media Consult</span>
            </span>
            <span className="mc-loc">Reklamní agentura · České Budějovice</span>
          </nav>

          <p className="mc-eyebrow"><span className="mc-reg" aria-hidden="true">✛</span> Grafika &nbsp;·&nbsp; Video &nbsp;·&nbsp; Eventy &nbsp;·&nbsp; Půjčovna techniky</p>

          <h1 className="mc-hero-title">
            <span className="mc-hero-ch mc-hero-c" aria-hidden="true">Zaostřujeme<br />vaše&nbsp;sdělení</span>
            <span className="mc-hero-ch mc-hero-m" aria-hidden="true">Zaostřujeme<br />vaše&nbsp;sdělení</span>
            <span className="mc-hero-core">Zaostřujeme<br />vaše&nbsp;sdělení</span>
          </h1>

          <p className="mc-lead">
            Jsme kreativní studio z Českých Budějovic. Přes hledáček kamery lovíme
            okamžiky z vašich firemních akcí, na velké plátno promítáme značky, na
            nichž vám záleží — a všechno kolem toho zajistíme technicky. Velké i menší
            zakázky, férové jednání, respekt.
          </p>

          <dl className="mc-stats">
            <div><dt>Vizuální identity</dt><dd>značek &amp; obalový design</dd></div>
            <div><dt>Video &amp; přenosy</dt><dd>živě na velkoplošnou obrazovku</dd></div>
            <div><dt>Konference</dt><dd>projekce, ozvučení, expozice</dd></div>
          </dl>
        </div>
      </header>

      <section className="mc-section mc-services" aria-labelledby="sluzby-nadpis">
        <div className="mc-wrap">
          <p className="mc-label">Čtyři kanály jedné agentury</p>
          <h2 id="sluzby-nadpis" className="mc-h2">
            <FocusHeading text="Co pro vás děláme" />
          </h2>

          <div className="mc-grid">
            {services.map((s) => (
              <article key={s.id} className="mc-card" data-ch={s.ch}>
                <span className="mc-tick mc-tick-tl" aria-hidden="true" />
                <span className="mc-tick mc-tick-br" aria-hidden="true" />
                <span className="mc-card-bar" aria-hidden="true" />
                <p className="mc-card-idx">{s.id}<span> / 04</span></p>
                <h3 className="mc-h3"><FocusHeading text={s.name} /></h3>
                <p className="mc-card-body">{s.body}</p>
                <ul className="mc-chips">
                  {s.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mc-section mc-refs" aria-labelledby="reference-nadpis">
        <div className="mc-wrap">
          <p className="mc-label">Reference</p>
          <h2 id="reference-nadpis" className="mc-h2">
            <FocusHeading text="Mají v nás jistotu" />
          </h2>

          <div className="mc-quotes">
            {references.map((r) => (
              <figure key={r.who} className="mc-quote">
                <span className="mc-tick mc-tick-tl" aria-hidden="true" />
                <span className="mc-tick mc-tick-br" aria-hidden="true" />
                <span className="mc-quote-mark" aria-hidden="true">„</span>
                <blockquote>{r.quote}</blockquote>
                <figcaption>
                  <span className="mc-quote-who">{r.who}</span>
                  <span className="mc-quote-role">{r.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mc-note">
            <span className="mc-reg" aria-hidden="true">✛</span> Víte, že? Materiály
            připravíme i v angličtině a němčině pro vaše zahraniční partnery a klienty.
          </p>
        </div>
      </section>
    </main>
  );
}
