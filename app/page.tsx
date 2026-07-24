import { AiImage } from "./_ui";
import { LedgerFigure } from "./motion";

const services = [
  "Správa účetnictví",
  "Daňová evidence",
  "Mzdová a personální agenda",
  "Reporting a výkazy",
  "Odborné konzultace",
  "Optimalizace účetních dokladů",
  "Účetní audity",
  "Příprava nových smluv",
  "Zaškolování personálu",
  "Dohledová činnost",
  "Přechod na digitální účetnictví",
];

const steps = [
  {
    t: "Příprava podkladů",
    d: "Sejdeme se, projdeme vaše doklady a připravíme vše potřebné k první konzultaci.",
  },
  {
    t: "Smlouva a rozsah",
    d: "Podepíšeme kontrakt s jasně vymezeným rozsahem, termíny a odpovědností.",
  },
  {
    t: "Vedeme vaše knihy",
    d: "Přebíráme agendu, hlídáme termíny a čísla vám sedí na haléř — od prvního měsíce.",
  },
];

const values = [
  {
    t: "Odpovědnost",
    d: "Na čem se domluvíme, to splníme. Termín u finančního úřadu je pro nás závazek, ne odhad.",
  },
  {
    t: "Preciznost",
    d: "Každý řádek dohledáme. Rozvaha, která nesedí, u nás z kanceláře neodejde.",
  },
  {
    t: "Výsledky",
    d: "Zpřehledníme účetnictví tam, kde bylo dosud chaosem — a ušetříme vám náklady i čas.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="wrap topbar">
        <a className="brand" href="#" aria-label="KATCER Účetnictví, domů">
          <span className="brand__name">
            KATCER<b>.</b>
          </span>
          <span className="brand__sub">Účetnictví · Liberec</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a className="navlink" href="#sluzby">
            Služby
          </a>
          <a className="navlink" href="#reference">
            Reference
          </a>
          <a className="btn" href="tel:+420777111222">
            Zavolat 777 111 222
          </a>
        </nav>
      </header>

      <section className="wrap section" aria-labelledby="hero-h">
        <div className="head">
          <span className="eyebrow">Účetnictví · Liberec · rozvaha aktuální k 01/2025</span>
          <h1 className="h1" id="hero-h">
            Čísla, která sedí na&nbsp;haléř. A&nbsp;vždycky včas.
          </h1>
        </div>

        <div className="hero__body">
          <div className="hero__intro">
            <p>
              Vedeme účetnictví firmám, korporacím i&nbsp;OSVČ z&nbsp;Liberce a&nbsp;okolí.
              Postavili jsme účetní knihy startupům, které změnily český internet —
              a&nbsp;stejnou preciznost dostanete i&nbsp;vy, ať začínáte, nebo rostete.
            </p>
            <div className="hero__actions">
              <a className="btn" href="tel:+420777111222">
                Zamluvit konzultaci
              </a>
              <a className="btn btn--ghost" href="#sluzby">
                Prohlédnout služby
              </a>
            </div>
          </div>
          <div className="hero__media">
            <AiImage
              src="/hero.webp"
              alt="Účetní stůl v kanceláři KATCER v Liberci s otevřenou účetní knihou"
            />
          </div>
        </div>

        <div className="ledger" role="list" aria-label="Klíčová čísla firmy">
          <LedgerFigure index={0} target={48} label="Spokojených klientů" note="firmy · korporace · OSVČ" />
          <LedgerFigure index={1} target={20} suffix="let" label="Profesionální praxe" note="nepřetržitě v oboru" />
          <LedgerFigure index={2} target={17} suffix="let" label="Se skupinou Miton" note="MITON · Heureka · GLAMI" />
        </div>
      </section>

      <section className="wrap section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="head">
          <span className="eyebrow">Služby · položky 01–11</span>
          <h2 className="h2" id="sluzby-h">
            Kompletní agenda pod jednou smlouvou.
          </h2>
          <p className="lead muted">
            Od papírové evidence po plně digitální účetnictví. Přebereme celou agendu,
            nebo doplníme jen to, co vám dosud chybělo.
          </p>
        </div>

        <div className="cols">
          <div className="col">
            <div className="col__no">01</div>
            <h3 className="col__title">Vedení účetnictví</h3>
            <p className="col__body">
              Spravujeme účetnictví malým firmám i&nbsp;korporacím — přesně, průběžně
              a&nbsp;s&nbsp;přehledem, který dostanete každý měsíc.
            </p>
          </div>
          <div className="col">
            <div className="col__no">02</div>
            <h3 className="col__title">Digitální účetnictví</h3>
            <p className="col__body">
              Provedeme vás přechodem z&nbsp;papíru do&nbsp;digitálu. Míň krabic
              s&nbsp;doklady, nižší náklady, doklad k&nbsp;nalezení do&nbsp;minuty.
            </p>
          </div>
          <div className="col">
            <div className="col__no">03</div>
            <h3 className="col__title">Konzultace</h3>
            <p className="col__body">
              Poradíme firmám i&nbsp;OSVČ, jak zpřehlednit a&nbsp;zefektivnit účetní
              procesy — bez nutnosti měnit celého poskytovatele.
            </p>
          </div>
        </div>

        <div className="band">
          <AiImage
            src="/section-1.webp"
            alt="Detail účetních výkazů a kalkulačky na pracovním stole KATCER"
          />
        </div>

        <div className="linewrap">
          <h3>Co pro vás vedeme</h3>
          <div className="lines">
            {services.map((s, i) => (
              <div className="line" key={s}>
                <span className="line__no">{String(i + 1).padStart(2, "0")}</span>
                <span className="line__name">{s}</span>
                <span className="line__dot" aria-hidden="true" />
                <span className="line__mark">v ceně</span>
              </div>
            ))}
            <div className="total">
              <span className="total__label">Vše v&nbsp;jedné smlouvě</span>
              <span className="total__val">11 služeb</span>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section" id="reference" aria-labelledby="ref-h">
        <div className="head">
          <span className="eyebrow">Reference · MITON / Heureka / GLAMI</span>
          <h2 className="h2" id="ref-h">
            Stáli jsme u&nbsp;knih firem, které změnily český internet.
          </h2>
        </div>

        <div className="trust__grid">
          <div className="trust__media">
            <AiImage
              src="/section-2.webp"
              alt="Kateřina Černá, zakladatelka KATCER Accounting, ve své kanceláři v Liberci"
            />
          </div>
          <div className="trust__copy">
            <p>
              Jako jedni z&nbsp;mála jsme byli u&nbsp;zrodu společností, které proměnily
              nakupování, cestování i&nbsp;ubytování v&nbsp;Česku. Vedli jsme účetnictví
              pro skupinu MITON a&nbsp;její dceřiné firmy — mezi nimi GLAMI a&nbsp;Heureku.
            </p>
            <p className="muted">
              Za&nbsp;ta léta jsme nasbírali know-how, které dnes dáváme každému klientovi:
              od&nbsp;zavedeného korporátu po&nbsp;startup, který právě vystavil první fakturu.
            </p>
            <div>
              <span className="pill">MITON</span>
              <span className="pill">Heureka</span>
              <span className="pill">GLAMI</span>
              <span className="pill">+ české StartUpy</span>
            </div>
          </div>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.t}>
              <span className="step__no">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="step__t">{s.t}</h3>
                <p className="step__d">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="values">
          {values.map((v) => (
            <div className="value" key={v.t}>
              <h4>{v.t}</h4>
              <p>{v.d}</p>
            </div>
          ))}
        </div>

        <figure className="quote">
          <span className="quote__mark" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="quote__q">
            Jako finanční architekt pomáhám vlastníkům firem vidět za&nbsp;horizont čísel.
          </blockquote>
          <figcaption className="quote__by">
            <b>Bc. Kateřina Černá, DiS.</b>
            <br />
            zakladatelka a&nbsp;jednatelka KATCER Accounting
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
