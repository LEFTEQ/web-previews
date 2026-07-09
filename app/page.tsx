import type { CSSProperties } from "react";

const sluzby = [
  {
    idx: "01",
    nazev: "Měření zraku",
    detail:
      "Optometrista vás vezme na přístroje a projde s vámi celý zrak — od ostrosti do dálky až po čtení nablízko. Odejdete s jasným receptem a vysvětlením, co znamená.",
    delka: "cca 30 minut",
  },
  {
    idx: "02",
    nazev: "Brýlové obruby",
    detail:
      "Vyzkoušíte si desítky obrub podle tvaru obličeje i toho, jak často brýle nosíte. Poradíme s materiálem, váhou i tím, co vám sedne na denní nošení.",
    delka: "na prodejně",
  },
  {
    idx: "03",
    nazev: "Kontaktní čočky",
    detail:
      "Aplikace, nácvik nasazování a kontrola, jak čočky sedí na oku. Denní, měsíční i multifokální — vybereme podle vašeho režimu.",
    delka: "první návštěva 45 min",
  },
  {
    idx: "04",
    nazev: "Sportovní a sluneční",
    detail:
      "Brýle na kolo i na běžky, které při pohybu drží a nezamlžují se — i s dioptriemi. Sluneční s UV filtrem a možností dioptrických skel.",
    delka: "na míru",
  },
  {
    idx: "05",
    nazev: "Brýle pro děti",
    detail:
      "Pružné obruby, které vydrží školu i hřiště, a trpělivé měření, u kterého se malý pacient nebojí. Poradíme i s příspěvkem pojišťovny.",
    delka: "dle dítěte",
  },
];

const duvody = [
  {
    cislo: "50 000+",
    popis: "zákazníků, kterým jsme za roky provozu vyměřili zrak a vybrali brýle",
  },
  {
    cislo: "5 dioptrických skel",
    popis: "typů na výběr — od jednoduchých po prémiové multifokály s antireflexem",
  },
  {
    cislo: "Olomouc",
    popis: "Riegrova ulice v centru — zastavte se cestou z náměstí, bez objednání",
  },
];

export default function Page() {
  return (
    <main className="eo">
      <header className="eo-top">
        <a className="eo-mark" href="#" aria-label="Eurooptik — oční optika Olomouc">
          <span className="eo-mark-eye" aria-hidden="true">
            <span className="eo-mark-iris" />
          </span>
          <span className="eo-mark-word">
            Euro<em>optik</em>
          </span>
        </a>
        <nav className="eo-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="eo-nav-cta" href="#objednat">
            Objednat měření
          </a>
        </nav>
      </header>

      <section className="eo-hero">
        <div className="eo-hero-copy">
          <p className="eo-eyebrow">Oční optika · Riegrova, Olomouc</p>
          <h1 className="eo-hero-title">
            Vidět <span className="eo-hero-sharp">ostře</span> začíná
            <br /> pečlivým měřením.
          </h1>
          <p className="eo-hero-lead">
            Nesázíme na jedno kolečko u přístroje. Optometrista si na vás vezme
            čas, vysvětlí, co váš zrak potřebuje, a brýle sedneme přesně na vás —
            od obruby po střed čoček.
          </p>
          <div className="eo-hero-actions">
            <a className="eo-btn" href="#objednat">
              Objednat měření zraku
            </a>
            <a className="eo-btn-ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
          <dl className="eo-hero-chart" aria-label="Řádek pro měření zraku">
            <div className="eo-line eo-line-1"><span>E</span></div>
            <div className="eo-line eo-line-2"><span>F</span><span>P</span></div>
            <div className="eo-line eo-line-3"><span>T</span><span>O</span><span>Z</span></div>
            <div className="eo-line eo-line-4"><span>L</span><span>P</span><span>E</span><span>D</span></div>
          </dl>
        </div>
        <figure className="eo-hero-media">
          <img
            src="/hero.webp"
            alt="Detail brýlové obruby a čočky na prodejně Eurooptik v Olomouci"
            loading="eager"
          />
          <figcaption>Zabezpečeno přes HTTPS · aktuální nabídka {new Date().getFullYear()}</figcaption>
        </figure>
      </section>

      <section className="eo-sec" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="eo-sec-head">
          <p className="eo-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-nadpis" className="eo-sec-title">
            Pět služeb pod jednou střechou
          </h2>
          <p className="eo-sec-sub">
            Přijďte s tím, že špatně vidíte na semafory, nebo že vás bolí oči u
            počítače. Zbytek vyřešíme na místě — měření, výběr i výrobu.
          </p>
        </div>

        <div className="eo-sec-body">
          <ol className="eo-list">
            {sluzby.map((s) => (
              <li className="eo-item" key={s.idx}>
                <span className="eo-item-idx">{s.idx}</span>
                <div className="eo-item-text">
                  <h3>{s.nazev}</h3>
                  <p>{s.detail}</p>
                </div>
                <span className="eo-item-meta">{s.delka}</span>
              </li>
            ))}
          </ol>
          <figure className="eo-sec-media">
            <img
              src="/section-1.webp"
              alt="Výběr brýlových obrub na prodejně Eurooptik"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="eo-sec eo-sec-alt" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="eo-onas">
          <figure className="eo-onas-media">
            <img
              src="/section-2.webp"
              alt="Optometrista Eurooptik u přístroje na měření zraku"
              loading="lazy"
            />
          </figure>
          <div className="eo-onas-copy">
            <p className="eo-eyebrow">O nás</p>
            <h2 id="onas-nadpis" className="eo-sec-title">
              Rodinná optika v centru Olomouce
            </h2>
            <p className="eo-sec-sub">
              Nejsme řetězec. Poznáte tu stejné tváře, které vám poradí i za
              rok, když si přijdete pro nové čočky. To, co u nás koupíte, si
              taky sami nosíme.
            </p>
            <div className="eo-stats">
              {duvody.map((d) => (
                <div className="eo-stat" key={d.cislo}>
                  <span className="eo-stat-num">{d.cislo}</span>
                  <span className="eo-stat-txt">{d.popis}</span>
                </div>
              ))}
            </div>
            <blockquote className="eo-quote">
              <p>
                „Krásná optika, nádherné brýle a velice vstřícné a odborné
                poradenství dam.“
              </p>
              <footer>
                <span>Veronika</span> · zákaznice z Riegrovy ulice
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
