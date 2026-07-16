import type { ReactNode } from "react";

type Step = { num: string; title: string; text: string };
type Ref = { quote: string; who: string; org: string };

const steps: Step[] = [
  {
    num: "01",
    title: "Domluva",
    text: "Zavoláte, popíšete co a odkud kam. Řekneme rovnou cenu i termín — bez prohlídek a čekání.",
  },
  {
    num: "02",
    title: "Přistavení vozu",
    text: "Přijedeme s vozem, dekami a vybavením. V Ústí nad Labem je přistavení zdarma.",
  },
  {
    num: "03",
    title: "Nakládka",
    text: "Nábytek obalíme dekami, křehké věci vyztužíme. Stěhovací krabice půjčíme zdarma dopředu.",
  },
  {
    num: "04",
    title: "Přeprava",
    text: "Odvezeme kamkoli po České republice. Náklad je po celou dobu řádně pojištěný.",
  },
  {
    num: "05",
    title: "Vykládka a montáž",
    text: "Vyneseme na místo, smontujeme nábytek zpátky a po sobě uklidíme. Zbytek odvezeme do sběrného dvora.",
  },
];

const services: string[] = [
  "Stěhování domácností",
  "Stěhování firem a kanceláří",
  "Montáž a demontáž nábytku",
  "Vyklízení bytů a domů",
  "Krabice na stěhování zdarma",
  "Likvidace a odvoz odpadu",
];

const refs: Ref[] = [
  {
    quote:
      "Jejich služby jsme využili opravdu mnohokrát. Je příjemné vědět, co můžu očekávat, a být si jistá, že se na stěhováky spolehnu. Jde to jako na drátkách.",
    who: "Mgr. Vendula Bratinková",
    org: "Cesty domů",
  },
  {
    quote:
      "Opakovaně jsme využili stěhovacích služeb a byli jsme nadmíru spokojení. Stěhováci byli vždy příjemní a odvedli skvělou práci.",
    who: "ředitelka",
    org: "ZŠ Libčice nad Vltavou",
  },
  {
    quote:
      "Dobře komunikují, jsou spolehliví, opatrní a práce jim jde od ruky. Dostatečně flexibilní a ochotně plní přání. Velmi doporučuji.",
    who: "Mgr. Klára Šedivá",
    org: "Adam Eva Wedding Planners",
  },
];

const facts: { k: string; v: string }[] = [
  { k: "CENA", v: "od 950 Kč / hod" },
  { k: "PŘISTAVENÍ V ÚSTÍ", v: "zdarma" },
  { k: "DOSAH", v: "celá ČR" },
  { k: "KRABICE", v: "zapůjčíme zdarma" },
  { k: "NÁKLAD", v: "řádně pojištěn" },
];

function Arrows(): ReactNode {
  return (
    <span className="vs-arrows" aria-hidden="true">
      <span className="vs-arrow" />
      <span className="vs-arrow" />
    </span>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="vs">
      <header className="vs-hero">
        <div className="vs-topbar">
          <a className="vs-wordmark" href="#" aria-label="Vaše stěhování — úvod">
            <span className="vs-box" aria-hidden="true" />
            <span className="vs-wm-text">
              <span className="vs-wm-small">VAŠE</span>
              <strong>STĚHOVÁNÍ</strong>
            </span>
          </a>
          <a className="vs-phone" href="tel:+420734310224">
            <span className="vs-phone-lbl">TEL</span>
            734 310 224
          </a>
        </div>

        <div className="vs-hero-grid">
          <div className="vs-hero-main">
            <p className="vs-eyebrow vs-stamp" style={{ animationDelay: "0.05s" }}>
              Ústí nad Labem · stěhování a vyklízení
            </p>
            <h1 className="vs-h1">
              <span className="vs-stamp" style={{ animationDelay: "0.12s" }}>
                Přestěhujeme
              </span>
              <span className="vs-stamp" style={{ animationDelay: "0.2s" }}>
                vás rychle
              </span>
              <span className="vs-stamp vs-h1-accent" style={{ animationDelay: "0.28s" }}>
                a v celku.
              </span>
            </h1>
            <p className="vs-lead vs-stamp" style={{ animationDelay: "0.36s" }}>
              Byt, dům i kancelář. Nábytek obalíme dekami, křehké věci zabalíme,
              odvezeme a zase smontujeme. S úsměvem, opatrně a pojištěně.
            </p>
            <div className="vs-route vs-stamp" style={{ animationDelay: "0.44s" }}>
              <span className="vs-route-a">ÚSTÍ&nbsp;N.&nbsp;L.</span>
              <span className="vs-route-line" aria-hidden="true" />
              <span className="vs-route-b">KAMKOLI V ČR</span>
            </div>
            <div className="vs-cta-row vs-stamp" style={{ animationDelay: "0.52s" }}>
              <a className="vs-cta" href="tel:+420734310224">
                Zavolat 734 310 224
              </a>
              <span className="vs-price">od 950 Kč / hod</span>
            </div>
          </div>

          <aside className="vs-marks vs-stamp" style={{ animationDelay: "0.3s" }} aria-label="Manipulační značky">
            <Arrows />
            <p className="vs-marks-title">KŘEHKÉ</p>
            <p className="vs-marks-sub">NEKLOPIT · TENTO SMĚR NAHORU</p>
            <div className="vs-marks-tag">
              <span>OBSAH</span>
              <span>domácnost · kancelář</span>
            </div>
            <div className="vs-marks-tag">
              <span>VÁHA</span>
              <span>zvládneme i klavír</span>
            </div>
          </aside>
        </div>
      </header>

      <section className="section vs-process" aria-labelledby="vs-process-h">
        <p className="vs-eyebrow">Servis od A do Z</p>
        <h2 className="vs-h2" id="vs-process-h">
          Kompletní stěhování, od telefonu po poslední šroubek
        </h2>
        <ol className="vs-steps">
          {steps.map((s) => (
            <li className="vs-step" key={s.num}>
              <span className="vs-step-num">{s.num}</span>
              <div className="vs-step-body">
                <h3 className="vs-step-title">{s.title}</h3>
                <p className="vs-step-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <ul className="vs-tags" aria-label="Co všechno zajistíme">
          {services.map((sv) => (
            <li className="vs-tag" key={sv}>
              {sv}
            </li>
          ))}
        </ul>
      </section>

      <section className="section vs-trust" aria-labelledby="vs-trust-h">
        <p className="vs-eyebrow vs-eyebrow-light">Reference</p>
        <h2 className="vs-h2 vs-h2-light" id="vs-trust-h">
          Spolehli se na nás — a vrátili se
        </h2>
        <div className="vs-refs">
          {refs.map((r) => (
            <figure className="vs-ref" key={r.org}>
              <blockquote className="vs-ref-q">„{r.quote}“</blockquote>
              <figcaption className="vs-ref-cap">
                <span className="vs-ref-org">{r.org}</span>
                <span className="vs-ref-who">{r.who}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <dl className="vs-facts">
          {facts.map((f) => (
            <div className="vs-fact" key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
