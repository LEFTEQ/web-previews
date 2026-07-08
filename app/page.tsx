import type { ReactNode } from "react";

export default function Page() {
  return (
    <main className="page">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#uvod" aria-label="Neko Olomouc, účetní kancelář">
          <span className="wordmark__mark" aria-hidden="true">N</span>
          <span className="wordmark__text">
            <span className="wordmark__name">Neko</span>
            <span className="wordmark__place">Olomouc — účetní kancelář</span>
          </span>
        </a>
        <nav className="nav__links">
          <a href="#sluzby">Služby</a>
          <a href="#duvody">Proč my</a>
          <a className="nav__cta" href="#kontakt">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Účetnictví &amp; daně · Olomouc · od roku 2001</p>
            <h1 className="hero__title">
              Vaše čísla<br />
              <span className="hero__title--accent">sedí do haléře.</span>
            </h1>
            <p className="hero__lead">
              Vedeme účetnictví, daňovou evidenci, mzdy i přiznání k dani —
              pro živnostníky, firmy, SVJ i neziskovky. Termíny hlídáme za vás,
              takže se vyhnete pokutám a špatné pověsti.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#kontakt">Nezávazně poptat</a>
              <a className="btn btn--ghost" href="#sluzby">Prohlédnout služby</a>
            </div>
            <dl className="hero__facts">
              <div><dt>od roku</dt><dd>2001</dd></div>
              <div><dt>i na</dt><dd>dálku</dd></div>
              <div><dt>pojištěno</dt><dd>proti chybám</dd></div>
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Účetní stůl v kanceláři Neko Olomouc — doklady, kalkulačka a uzávěrka"
              width={880}
              height={1040}
              loading="eager"
            />
            <figcaption className="hero__stamp">
              <span className="hero__stamp-line">Uzávěrka</span>
              <span className="hero__stamp-ok">souhlasí</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ledger" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Nabídka</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Co vám zaúčtujeme
          </h2>
          <p className="section-sub">
            Vyberte si přesně to, co potřebujete — od jednoho přiznání ročně
            po kompletní ekonomický servis vaší firmy.
          </p>
        </div>

        <ol className="ledger__list">
          {SLUZBY.map((s) => (
            <li className="ledger-row" key={s.code}>
              <span className="ledger-row__code">{s.code}</span>
              <div className="ledger-row__body">
                <h3 className="ledger-row__title">{s.title}</h3>
                <ul className="ledger-row__items">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="trust" id="duvody" aria-labelledby="duvody-nadpis">
        <div className="trust__grid">
          <figure className="trust__media">
            <img
              src="/section-1.webp"
              alt="Účetní z Neko Olomouc při konzultaci nad podklady klienta"
              width={860}
              height={720}
              loading="lazy"
            />
          </figure>
          <div className="trust__copy">
            <p className="eyebrow eyebrow--dark">Proč s námi</p>
            <h2 id="duvody-nadpis" className="section-title">
              Starosti s úřady necháte na nás
            </h2>
            <p className="section-sub">
              Ke každému klientovi přistupujeme individuálně — ať jste OSVČ,
              malá dílna, nebo firma s desítkami zaměstnanců. Účtujeme přehledně
              a vysvětlíme každé číslo.
            </p>
            <ul className="trust__list">
              {DUVODY.map((d) => (
                <li key={d}>
                  <span className="trust__check" aria-hidden="true">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="trust__band">
          <img
            src="/section-2.webp"
            alt="Detail zpracovaných účetních dokladů a výkazů"
            width={1400}
            height={520}
            loading="lazy"
            className="trust__band-img"
          />
          <div className="trust__band-copy">
            <p className="trust__band-eyebrow">Neplátcům DPH</p>
            <p className="trust__band-text">
              fakturujeme bez daně — <strong>žádná skrytá přirážka.</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

type Sluzba = { code: string; title: string; items: string[] };

const SLUZBY: Sluzba[] = [
  {
    code: "01",
    title: "Účetnictví",
    items: ["Podvojné účetnictví", "Rozvaha, výsledovka, příloha", "Účetnictví pro SVJ a neziskovky"],
  },
  {
    code: "02",
    title: "Daňová evidence",
    items: ["Jednoduché účetnictví", "Zápis do peněžního deníku", "Přehled příjmů a výdajů"],
  },
  {
    code: "03",
    title: "Mzdy a personalistika",
    items: ["Zpracování mezd", "Přehledy pro zdravotní pojišťovny", "Přehledy pro správu sociálního zabezpečení"],
  },
  {
    code: "04",
    title: "Daňová přiznání",
    items: ["Přiznání fyzických osob", "Přiznání právnických osob", "Přiznání k DPH"],
  },
  {
    code: "05",
    title: "Fakturace",
    items: ["Faktury pro odběratele", "Přenesená daňová povinnost", "Zahraniční a zálohové faktury"],
  },
  {
    code: "06",
    title: "Ostatní agenda",
    items: ["Cestovné a kniha jízd", "Intrastat a statistika", "Dotace, příspěvky od úřadu práce"],
  },
];

const DUVODY: string[] = [
  "V oboru působíme od roku 2001",
  "Jsme pojištěni proti případným chybám",
  "Pracujeme i na dálku — dokládat můžete odkudkoliv",
  "Hlídáme termíny, abyste se vyhnuli pokutám",
];
