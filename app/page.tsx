import type { CSSProperties } from "react";

const services = [
  {
    tag: "Účetnictví",
    title: "Účetnictví a daňová evidence",
    body: "Vedeme kompletní účetní agendu, hlídáme termíny přiznání a výkazů a průběžně vám ukazujeme, jak si firma stojí — ne až po roce, ale kdykoli se zeptáte.",
  },
  {
    tag: "Mzdy",
    title: "Mzdová a personální agenda",
    body: "Spočítáme mzdy včetně tiskových sestav, odkomunikujeme sociálku i zdravotní pojišťovny a připravíme přehledy a vyúčtování daní. Vaši lidé dostanou výplatu včas a správně.",
  },
  {
    tag: "Uzávěrka",
    title: "Roční účetní uzávěrka a kontrola",
    body: "Zkontrolujeme účetnictví, uděláme inventury účtů, zpracujeme výkazy i přílohu k závěrce a sestavíme přiznání k dani z příjmů. Rok uzavřeme bez překvapení.",
  },
  {
    tag: "Úvěry",
    title: "Podklady pro bankovní úvěry",
    body: "Připravíme žádost o úvěrovou angažovanost včetně výkazů a příloh v podobě, kterou banka přijme na první dobrou.",
  },
  {
    tag: "Záměr",
    title: "Tvorba podnikatelského záměru",
    body: "Spočítáme ekonomickou návratnost a efektivitu nového záměru — nejčastěji pro potřeby dotací, kde se počítá každé číslo.",
  },
  {
    tag: "Poradna",
    title: "Poradenství v účetnictví a daních",
    body: "Když je potřeba víc, zajistíme daňového poradce nebo auditora. Řekneme vám, kdy to dává smysl, a kdy si vystačíme sami.",
  },
];

const clients = [
  "EMPOLAS s.r.o.",
  "Dům pro seniory s.r.o.",
  "GEO Skyva s.r.o.",
  "One Click Business Solutions s.r.o.",
  "ROOT IT s.r.o.",
  "M. Bordovský — zemní práce",
  "STEMA Logistic s.r.o.",
  "Shake Marketing s.r.o.",
  "HYGGE Interiéry s.r.o.",
];

export default function Page() {
  return (
    <main className="md-page">
      <header className="md-topbar">
        <a className="md-mark" href="#" aria-label="Mini DANĚ, účetnictví Olomouc">
          <span className="md-mark-mini">mini</span>
          <span className="md-mark-dane">DANĚ</span>
          <span className="md-mark-dot" aria-hidden="true">.</span>
        </a>
        <span className="md-loc">Olomouc · Erbenova 2</span>
      </header>

      <section className="md-hero">
        <div className="md-hero-copy">
          <p className="md-eyebrow">Účetní kancelář · vede Ing. Radka Severová</p>
          <h1 className="md-h1">
            Daně a účetnictví
            <span className="md-h1-line">v&nbsp;pohodě.</span>
          </h1>
          <p className="md-lead">
            Odpovědnost za účetnictví, daně, mzdy a věci kolem přenecháte nám.
            Vy se vrátíte k tomu, co vás živí a baví. Své práci rozumíme —
            a upřímně, dělá nám radost.
          </p>
          <div className="md-hero-cta">
            <a className="md-btn" href="tel:+420603235542">Zavolat Radce</a>
            <a className="md-btn md-btn-ghost" href="mailto:severova@minidane.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <figure className="md-hero-figure">
          <img
            src="/hero.webp"
            alt="Pracovní stůl účetní kanceláře Mini DANĚ v Olomouci"
            className="md-hero-img"
            width={880}
            height={1000}
          />
          <figcaption className="md-ledger" aria-hidden="true">
            <span className="md-ledger-row"><b>MD</b><i>Dal</i></span>
            <span className="md-ledger-row"><b>termíny</b><i>hlídáme my</i></span>
            <span className="md-ledger-row"><b>starosti</b><i>0,00</i></span>
          </figcaption>
        </figure>
      </section>

      <section className="md-services" aria-labelledby="sluzby-nadpis">
        <div className="md-section-head">
          <p className="md-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-nadpis" className="md-h2">
            Šest položek naší <span className="md-underline">rozvahy</span>
          </h2>
          <p className="md-section-note">
            Od kompletního účetnictví po podklady do banky. Vyberete si jen to,
            co potřebujete — zbytek zůstane na nás.
          </p>
        </div>

        <ol className="md-grid">
          {services.map((s, i) => (
            <li className="md-card" key={s.title}>
              <span className="md-card-no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="md-card-tag">{s.tag}</span>
              <h3 className="md-card-title">{s.title}</h3>
              <p className="md-card-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="md-trust" aria-labelledby="reference-nadpis">
        <figure className="md-trust-figure">
          <img
            src="/section-1.webp"
            alt="Zpracování mzdové a daňové agendy v kanceláři Mini DANĚ"
            className="md-trust-img"
            width={720}
            height={860}
          />
        </figure>

        <div className="md-trust-copy">
          <p className="md-eyebrow">Kdo nám věří</p>
          <h2 id="reference-nadpis" className="md-h2">
            Firmy z&nbsp;Olomouce
            <br />
            i&nbsp;odjinud
          </h2>
          <p className="md-section-note">
            Vedeme účetnictví výrobním firmám, řemeslníkům i&nbsp;IT studiím.
            Malé i&nbsp;větší, každou bereme stejně vážně.
          </p>

          <ul className="md-clients">
            {clients.map((c) => (
              <li className="md-client" key={c}>{c}</li>
            ))}
            <li className="md-client md-client-more">a další</li>
          </ul>

          <figure className="md-quote">
            <blockquote>
              „Cílem naší práce je zbavit vás starostí o věci, které vás obtěžují
              a berou čas. Za účetnictví, daně i&nbsp;mzdy ručíme my.“
            </blockquote>
            <figcaption>
              <img
                src="/section-2.webp"
                alt="Ing. Radka Severová, jednatelka Mini DANĚ"
                className="md-avatar"
                width={120}
                height={120}
              />
              <span>
                <b>Ing. Radka Severová</b>
                <i>jednatelka, Mini DANĚ s.r.o.</i>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
export const metadata = {
  title: "Mini DANĚ s.r.o. — účetnictví a daně v pohodě, Olomouc",
  description:
    "Účetní kancelář Ing. Radky Severové v Olomouci. Účetnictví, mzdy, daňová přiznání, uzávěrky a podklady pro banky. Přeneste starosti na nás.",
} satisfies Record<string, string>;

const _keep: CSSProperties = {};
void _keep;
