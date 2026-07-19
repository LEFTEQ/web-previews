import type { CSSProperties } from "react";

type Service = { t: string; d: string };
type Step = { n: string; t: string; d: string };

const services: Service[] = [
  { t: "Rekonstrukce koupelen", d: "Kompletní i dílčí rekonstrukce koupelen na míru. Obklady srovnané do roviny, aby výsledek vydržel roky." },
  { t: "Bytová jádra v panelu", d: "Specializujeme se na bytová jádra v panelových domech. Vyřešíme dispozici, instalace i moderní finiš." },
  { t: "Elektroinstalace", d: "Elektrické rozvody a instalace s důrazem na bezpečnost a revize podle platné normy." },
  { t: "Instalatérské práce", d: "Voda, odpady i topení — od výměny baterie po kompletní nové rozvody." },
  { t: "Stavební práce", d: "Bourání, zdění, jádrové omítky a sádrokartony. Čistá práce od hrubé stavby po finiš." },
  { t: "Malířské práce", d: "Malby a nátěry interiérů. Kryté podlahy, ostré hrany a uklizeno po nás." },
];

const steps: Step[] = [
  { n: "01", t: "Zaměření a návrh", d: "Přijedeme, zaměříme prostor a navrhneme řešení i rozpočet. Bez závazku." },
  { n: "02", t: "Harmonogram na míru", d: "Sestavíme časový plán a domluvíme termíny. Víte dopředu, co kdy proběhne." },
  { n: "03", t: "Realizace a předání", d: "Odvedeme práci v dohodnutém čase a předáme uklizený, hotový prostor." },
];

function Vial({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <div className={`vial vial--${size}`} aria-hidden="true">
      <span className="vial__mark" />
      <span className="vial__mark" />
      <span className="bubble" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="wall">
      <header className="bar" aria-label="Hlavní navigace">
        <a className="tile brand" href="#uvod">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">LD&nbsp;PROF&nbsp;KOMFORT</span>
          <span className="brand__suf">s.r.o. — rekonstrukce, Praha</span>
        </a>
        <nav className="tile nav">
          <a href="#uvod">Úvod</a>
          <a href="#sluzby">Služby</a>
          <a href="#jak">Jak pracujeme</a>
        </nav>
        <div className="tile signet signet--nav">
          <Vial size="sm" />
          <span className="signet__cap">srovnáno do roviny</span>
        </div>
      </header>

      <section id="uvod" className="sec hero" aria-labelledby="hero-h">
        <p className="tile eyebrow hero__eye">
          <span className="num">01</span>
          <span>Rekonstrukce bytů &amp; koupelen — Praha</span>
        </p>
        <div className="tile signet signet--hero">
          <Vial size="md" />
          <span className="signet__cap">na&nbsp;klíč</span>
        </div>
        <h1 id="hero-h" className="tile head">
          <span className="head__l1">POCTIVÁ</span>
          <span className="head__l2">REKONSTRUKCE</span>
        </h1>
        <p className="tile sub">
          Koupelny, byty a interiéry v Praze. Kvalitní řemeslo, spolehlivý
          přístup a důraz na detail — proměníme váš prostor s maximální péčí.
        </p>
      </section>

      <section id="sluzby" className="sec services" aria-labelledby="sluzby-h">
        <div className="tile sec-head">
          <p className="eyebrow"><span className="num">02</span><span>Naše služby</span></p>
          <h2 id="sluzby-h">Od drobné opravy po kompletní rekonstrukci na klíč.</h2>
        </div>
        {services.map((s, i) => (
          <article className="tile card" key={s.t} style={{ "--i": i } as CSSProperties}>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </article>
        ))}
      </section>

      <section id="jak" className="sec about" aria-labelledby="jak-h">
        <div className="tile about-head">
          <p className="eyebrow"><span className="num">03</span><span>Jak pracujeme</span></p>
          <h2 id="jak-h">Každý projekt začíná harmonogramem.</h2>
          <p className="about-lede">
            S vámi definujeme rozsah prací a sestavíme harmonogram na míru. Díky
            individuálnímu přístupu odpovídají všechny fáze rekonstrukce vašim
            požadavkům — a vy víte dopředu, co kdy proběhne.
          </p>
        </div>
        {steps.map((st) => (
          <article className="tile step" key={st.n}>
            <span className="step__n">{st.n}</span>
            <h3>{st.t}</h3>
            <p>{st.d}</p>
          </article>
        ))}
        <div className="tile signet signet--about">
          <Vial size="md" />
          <span className="signet__cap">Dlouholeté zkušenosti v Praze</span>
        </div>
        <div className="tile contact">
          <h3>Kde nás najdete</h3>
          <dl>
            <div><dt>Adresa</dt><dd>Ukázková 123, Praha</dd></div>
            <div><dt>Telefon</dt><dd>+420 777 111 222</dd></div>
            <div><dt>E-mail</dt><dd>info@example.cz</dd></div>
          </dl>
        </div>
      </section>
    </main>
  );
}
