import type { CSSProperties } from "react";

export const metadata = {
  title: "NOVOS — autoservis a autoskla, Liberec",
  description:
    "Výměna a oprava čelních skel, servis osobních i užitkových vozů. Rochlická 35, Liberec. Po–Pá 8:00–19:00.",
  openGraph: {
    title: "NOVOS — autoservis a autoskla, Liberec",
    description:
      "Prasklé čelní sklo vyřešíme i na počkání. Autoservis s víc než desetiletou tradicí v Liberci.",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Výměna čelních skel",
    popis:
      "Originální i kvalitní neoriginální skla od ELIT, Pilkington a AGC. Demontáž, lepení certifikovaným tmelem, vytvrzení — vůz si můžete odvézt ještě týž den.",
  },
  {
    kod: "02",
    nazev: "Oprava odštěpků a prasklin",
    popis:
      "Drobný kamínek od náklaďáku zalijeme pryskyřicí dřív, než se prodlouží přes celé sklo. Hotovo zhruba do hodiny, sklo zůstane v autě.",
  },
  {
    kod: "03",
    nazev: "Servis osobních a užitkových vozů",
    popis:
      "Pravidelné prohlídky, brzdy, výměna olejů a kapalin, autobaterie Banner. Pro autobusy a stavební stroje zajišťujeme dílčí servisní práce.",
  },
  {
    kod: "04",
    nazev: "Pojistné události za vás",
    popis:
      "Jsme smluvní partner pojišťoven. Sklo z povinného i havarijního pojištění vyřídíme přímo s pojišťovnou — vy jen přivezete auto.",
  },
];

const partneri = [
  "ELIT",
  "Pilkington",
  "AGC autoskla",
  "Banner baterie",
  "ASS autoskloservis",
  "HOOK CZ — tažná zařízení",
];

const kontakty = [
  { jmeno: "Jaroslav Novotný", tel: "602 411 214" },
  { jmeno: "Lukáš Novotný", tel: "723 524 342" },
  { jmeno: "Jan Novotný", tel: "728 464 104" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="NOVOS autoservis, úvod">
          <span className="wordmark__n">NOVOS</span>
          <span className="wordmark__sub">autoservis · autoskla · Liberec</span>
        </a>
        <a className="top__call" href="tel:+420723524342">
          Zavolat 723 524 342
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Detail čelního skla vozu v dílně autoservisu NOVOS v Liberci"
            className="hero__img"
          />
          <span className="impact" aria-hidden="true">
            <span className="impact__ring" />
            <span className="impact__crack impact__crack--a" />
            <span className="impact__crack impact__crack--b" />
            <span className="impact__crack impact__crack--c" />
            <span className="impact__crack impact__crack--d" />
            <span className="impact__crack impact__crack--e" />
            <span className="impact__core" />
          </span>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Prasklé sklo? Začalo to kamínkem.</p>
          <h1 id="hero-title">
            Než se ta prasklina<br />
            <em>roztáhne přes celý výhled.</em>
          </h1>
          <p className="hero__lead">
            Vyměníme i opravíme čelní skla osobních a užitkových vozů.
            Drobný odštěpek zvládneme na počkání, sklo z pojistky vyřídíme
            za vás. Rodinný autoservis na Rochlické v Liberci, přes deset let
            v provozu.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420723524342">
              Objednat do servisu
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co opravujeme
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8:00–19:00</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Rochlická 35, Liberec</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co u nás vyřešíte</p>
          <h2 id="sluzby-title">
            Od kamínku ve skle<br />po celý servis vozu
          </h2>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="figure">
          <img
            src="/section-1.webp"
            alt="Technik NOVOS při lepení nového čelního skla"
          />
          <figcaption>
            Sklo lepíme certifikovaným tmelem a necháme řádně vytvrdit —
            bezpečnost výhledu nesnese kompromis.
          </figcaption>
        </figure>
      </section>

      <section className="onas" aria-labelledby="onas-title">
        <div className="onas__grid">
          <div className="onas__media">
            <img
              src="/section-2.webp"
              alt="Dílna autoservisu NOVOS v Liberci"
            />
          </div>
          <div className="onas__text">
            <p className="eyebrow">Tři Novotní, jedna dílna</p>
            <h2 id="onas-title">
              Autoservis, kde si pamatujeme vaše auto i jméno
            </h2>
            <p>
              NOVOS vede rodina Novotných už přes deset let. Děláme práci,
              za kterou se nemusíme stydět — od výměny skla přes brzdy
              po sezónní prohlídky. Když zavoláte, mluvíte s člověkem,
              který vám auto bude opravovat.
            </p>

            <ul className="partneri" aria-label="Dodavatelé a partneři">
              {partneri.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <ul className="lidi">
              {kontakty.map((k) => (
                <li key={k.tel}>
                  <span className="lidi__jmeno">{k.jmeno}</span>
                  <a href={`tel:+420${k.tel.replace(/\s/g, "")}`}>{k.tel}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
