import type { CSSProperties } from "react";

const prakticke = [
  {
    zkr: "OBCH",
    nazev: "Korporátní a obchodní právo",
    popis:
      "Zakládání a přeměny obchodních společností, akvizice, smluvní dokumentace, valné hromady i spory mezi společníky. Provedeme vás celou transakcí od due diligence po zápis do rejstříku.",
  },
  {
    zkr: "ENERG",
    nazev: "Energetické právo",
    popis:
      "Licence, regulace a smlouvy v energetice, zastupování před Energetickým regulačním úřadem. Rozumíme prostředí, ve kterém dodavatelé i odběratelé musí každý den obstát.",
  },
  {
    zkr: "INSOL",
    nazev: "Insolvence a vymáhání",
    popis:
      "Přihlášky pohledávek, incidenční spory, oddlužení i reorganizace. Díky personálnímu propojení s insolvenčním správcem BHJ správci v.o.s. vidíme řízení z obou stran stolu.",
  },
  {
    zkr: "SPRÁV",
    nazev: "Správní a stavební právo",
    popis:
      "Územní a stavební řízení, přestupky, opravné prostředky a správní žaloby. Zastoupíme vás před úřady i správními soudy, když rozhodnutí úřadu nedává smysl.",
  },
  {
    zkr: "TREST",
    nazev: "Trestní právo",
    popis:
      "Obhajoba v přípravném řízení i před soudem, zastoupení poškozených, hospodářská a majetková trestná činnost. Jsme na příjmu, když jde o čas a je potřeba jednat hned.",
  },
  {
    zkr: "RODIN",
    nazev: "Rodinné a občanské právo",
    popis:
      "Rozvody, péče o děti, výživné, dědictví a spory o nemovitosti. Věcně a se zdravým rozumem provedeme i běžnými i mimořádnými životními situacemi.",
  },
];

const pilire = [
  {
    cislo: "01",
    titul: "Vlastní tým, ne outsourcing",
    text:
      "Vaši věc řeší advokát, se kterým jednáte od začátku — ne anonymní koncipient, kterého uvidíte poprvé u soudu.",
  },
  {
    cislo: "02",
    titul: "Klienti od malých firem po nadnárodní",
    text:
      "Od živnostníka a rodiny až po velké korporace. Každému mluvíme lidsky a bez zbytečné latiny.",
  },
  {
    cislo: "03",
    titul: "Doma v Hradci, doma v celé ČR",
    text:
      "Sídlíme v Jana Koziny v centru Hradce Králové, pobočku máme v Praze a zastupujeme klienty po celé republice.",
  },
];

export default function Page() {
  return (
    <main className="hp">
      <header className="hp-top">
        <a className="hp-brand" href="#uvod" aria-label="Havlíček &amp; Partners, advokátní kancelář">
          <span className="hp-brand-mark">H&amp;P</span>
          <span className="hp-brand-lines">
            <span className="hp-brand-name">Havlíček &amp; Partners</span>
            <span className="hp-brand-sub">advokátní kancelář · Hradec Králové</span>
          </span>
        </a>
        <nav className="hp-nav" aria-label="Hlavní navigace">
          <a href="#obory">Obory práva</a>
          <a href="#kancelar">Kancelář</a>
          <a className="hp-nav-cta" href="tel:+420491114232">Zavolat</a>
        </nav>
      </header>

      <section className="hp-hero" id="uvod">
        <div className="hp-hero-copy">
          <p className="hp-eyebrow">Advokátní kancelář · založeno 2010 · Hradec Králové &amp; Praha</p>
          <h1 className="hp-hero-title">
            Řešíme spory dřív, než&nbsp;se&nbsp;stanou
            <span className="hp-hero-title-accent"> vaším problémem.</span>
          </h1>
          <p className="hp-hero-lead">
            Právo obchodních společností, energetika, insolvence i&nbsp;běžné životní situace.
            Komplexní zastoupení pro firmy, podnikatele i&nbsp;rodiny — před úřady, soudy
            i&nbsp;v&nbsp;rozhodčím řízení.
          </p>
          <div className="hp-hero-actions">
            <a className="hp-btn hp-btn-solid" href="tel:+420491114232">Zavolat +420&nbsp;491&nbsp;114&nbsp;232</a>
            <a className="hp-btn hp-btn-ghost" href="#obory">Čím se zabýváme</a>
          </div>
        </div>
        <figure className="hp-hero-figure">
          <img
            src="/hero.webp"
            alt="Tým advokátní kanceláře Havlíček &amp; Partners v Hradci Králové"
            width={1200}
            height={1400}
            className="hp-hero-img"
          />
          <figcaption className="hp-hero-tag">
            <span>Jana Koziny 1295/2a</span>
            <span>500 03 Hradec Králové</span>
          </figcaption>
        </figure>
      </section>

      <section className="hp-section" id="obory" aria-labelledby="obory-nadpis">
        <div className="hp-section-head">
          <p className="hp-eyebrow">Rejstřík oborů</p>
          <h2 className="hp-section-title" id="obory-nadpis">
            Šest oblastí, ve kterých vás dovedeme až&nbsp;k&nbsp;rozhodnutí
          </h2>
          <p className="hp-section-note">
            Nejsme kancelář „na všechno a na nic“. Tohle jsou obory, kde máme za sebou stovky případů —
            a kde poznáte rozdíl na výsledku.
          </p>
        </div>
        <ol className="hp-docket">
          {prakticke.map((p) => (
            <li className="hp-docket-item" key={p.zkr}>
              <span className="hp-docket-tab" aria-hidden="true">{p.zkr}</span>
              <div className="hp-docket-body">
                <h3 className="hp-docket-name">{p.nazev}</h3>
                <p className="hp-docket-desc">{p.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="hp-section hp-trust" id="kancelar" aria-labelledby="kancelar-nadpis">
        <div className="hp-trust-grid">
          <figure className="hp-trust-figure">
            <img
              src="/section-1.webp"
              alt="Sídlo kanceláře Havlíček &amp; Partners v centru Hradce Králové"
              width={900}
              height={1100}
              className="hp-trust-img"
            />
          </figure>
          <div className="hp-trust-copy">
            <p className="hp-eyebrow">O kanceláři</p>
            <h2 className="hp-section-title" id="kancelar-nadpis">
              Od roku 2010 stavíme na tom, že klient se má vracet
            </h2>
            <p className="hp-trust-lead">
              Založil nás JUDr.&nbsp;Jakub Havlíček jako hradeckou kancelář s&nbsp;pražskou pobočkou.
              Od té doby nám klientela vyrostla po celé republice — od nadnárodních korporací po rodiny,
              které potřebují jednou za život dobře poradit.
            </p>
            <p className="hp-trust-lead">
              Profesionalita, kvalita a řešení šitá na míru pro nás nejsou fráze z brožury. Jsou to
              důvody, proč se k nám lidé vracejí a doporučují nás dál — obchodním partnerům, rodině
              i&nbsp;přátelům.
            </p>
            <ul className="hp-pillars">
              {pilire.map((pl) => (
                <li className="hp-pillar" key={pl.cislo}>
                  <span className="hp-pillar-num" aria-hidden="true">{pl.cislo}</span>
                  <div>
                    <h3 className="hp-pillar-title">{pl.titul}</h3>
                    <p className="hp-pillar-text">{pl.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <figure className="hp-quote">
              <blockquote>
                „Přišli jsme s přeměnou společnosti, u které nám dva úřady tvrdily opak. Havlíček
                &amp; Partners to dotáhli do zápisu bez jediného odkladu.“
              </blockquote>
              <figcaption>— jednatel výrobní firmy, klient od roku 2014</figcaption>
            </figure>
            <img
              src="/section-2.webp"
              alt="Jednací prostory advokátní kanceláře Havlíček &amp; Partners"
              width={900}
              height={520}
              className="hp-trust-img-wide"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
