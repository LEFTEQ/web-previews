import type { CSSProperties } from "react";

const ledger: { label: string; value: string }[] = [
  { label: "Členství", value: "Komora daňových poradců ČR" },
  { label: "Působíme od", value: "2004" },
  { label: "Sídlo", value: "České Budějovice" },
  { label: "Vzdálený přístup", value: "do vašeho účetního programu" },
];

const services: { no: string; name: string; desc: string; tag: string }[] = [
  {
    no: "01",
    name: "Vedení účetnictví a daňové evidence",
    desc: "Kompletní zpracování účetnictví, daňové evidence i daňových přiznání. Na přání vedeme účetnictví přímo ve vašem programu přes vzdálený přístup.",
    tag: "ÚČTO",
  },
  {
    no: "02",
    name: "Personální agenda a zpracování mezd",
    desc: "Výpočet mezd, srážky i povinná hlášení. Zastoupíme vás před ČSSZ, úřady práce i zdravotními pojišťovnami — tiskopisy vyplníme a odešleme za vás.",
    tag: "MZDY",
  },
  {
    no: "03",
    name: "Daňové poradenství a další služby",
    desc: "Certifikované poradenství, odklad i optimalizace daní. Zpracujeme podnikatelský záměr, finanční analýzu a pomůžeme s žádostí o úvěr či dotaci.",
    tag: "DAŇ",
  },
];

const sectors: { code: string; name: string; note: string }[] = [
  { code: "S-01", name: "Gastronomie a ubytování", note: "Restaurace, penziony a hotely z Budějovic a okolí." },
  { code: "S-02", name: "Maloobchod, velkoobchod, e-shopy", note: "Včetně účtování obchodu se zahraničím." },
  { code: "S-03", name: "Lékaři, advokáti a další služby", note: "Zdravotní péče, advokacie, architektura, IT." },
  { code: "S-04", name: "Neziskový sektor", note: "Sociální, sportovní i kulturní organizace." },
  { code: "S-05", name: "Stavební a řemeslné služby", note: "Zakázková evidence i přenesená daňová povinnost." },
  { code: "S-06", name: "Zemědělství", note: "Rostlinná i živočišná výroba, evidence zásob." },
];

export default function Page() {
  return (
    <main className="fq">
      {/* ── HERO ────────────────────────────────────────────── */}
      <header className="band band--dark hero">
        <nav className="topbar" aria-label="Hlavní">
          <a className="mark" href="#top" id="top">
            <span className="mark__glyph" aria-hidden="true">FQ</span>
            <span className="mark__name">Finance&nbsp;Quality<span className="mark__suffix">s.r.o.</span></span>
          </a>
          <ul className="navlinks">
            <li><a href="#sluzby">Služby</a></li>
            <li><a href="#klienti">Klienti</a></li>
            <li><a href="tel:+420776851071">Kontakt</a></li>
          </ul>
        </nav>

        <div className="wrap hero__grid">
          <div className="hero__lead">
            <p className="eyebrow eyebrow--brass a1">Daňový poradce · České Budějovice · od 2004</p>
            <h1 className="hero__title a2">
              Účetnictví, daně a&nbsp;mzdy —{" "}
              <span className="hero__title-accent">sečteno do posledního řádku.</span>
            </h1>
            <div className="total-rule total-rule--hero a3" aria-hidden="true" />
            <p className="hero__sub a4">
              Doklady nám předáte osobně nebo elektronicky. Legislativu, termíny
              i&nbsp;uzávěrky hlídáme my — vy se plně věnujete svému podnikání.
            </p>
            <p className="hero__phone a4">
              <span className="eyebrow eyebrow--brass">Domluvit spolupráci</span>
              <a className="fig" href="tel:+420776851071">+420&nbsp;776&nbsp;851&nbsp;071</a>
            </p>
          </div>

          <aside className="hero__ledger a5" aria-label="Firma v kostce">
            <p className="ledger__cap">V kostce</p>
            <dl className="ledger">
              {ledger.map((row) => (
                <div className="ledger__row" key={row.label}>
                  <dt>{row.label}</dt>
                  <dd className="fig">{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </header>

      {/* ── SLUŽBY ──────────────────────────────────────────── */}
      <section className="band" id="sluzby" aria-labelledby="sluzby-h">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Položky v knize služeb</p>
            <h2 className="head__title" id="sluzby-h">Co za vás vedeme</h2>
            <div className="total-rule" aria-hidden="true" />
          </div>

          <ol className="items">
            {services.map((s) => (
              <li className="item" key={s.no}>
                <span className="item__no fig" aria-hidden="true">{s.no}</span>
                <div className="item__body">
                  <h3 className="item__name">{s.name}</h3>
                  <p className="item__desc">{s.desc}</p>
                </div>
                <span className="item__tag fig">{s.tag}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── O NÁS / KLIENTI ─────────────────────────────────── */}
      <section className="band band--tint" id="klienti" aria-labelledby="klienti-h">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Profil &amp; rejstřík klientů</p>
            <h2 className="head__title" id="klienti-h">Firmy, které nám dají svou knihu</h2>
            <div className="total-rule" aria-hidden="true" />
          </div>

          <div className="about">
            <p className="about__lead">
              Finance Quality vznikla v&nbsp;roce 2004 sloučením několika daňových
              poradců, kteří chtěli klientům nabídnout víc pod jednou střechou.
            </p>
            <p className="about__body">
              Jsme hrdými členy Komory daňových poradců ČR, průběžně se vzděláváme
              a&nbsp;sledujeme každou změnu legislativy. Díky dlouhodobé spolupráci
              s&nbsp;renomovanými advokátními kancelářemi zvládneme lokální živnostníky
              i&nbsp;firmy působící mezinárodně.
            </p>
          </div>

          <table className="reg">
            <caption className="reg__cap">Obory, které u&nbsp;nás najdou svého poradce</caption>
            <tbody>
              {sectors.map((c) => (
                <tr className="reg__row" key={c.code}>
                  <td className="reg__code fig">{c.code}</td>
                  <th scope="row" className="reg__name">{c.name}</th>
                  <td className="reg__note">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

void ({} as CSSProperties);
