import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tesera — kamenictví České Budějovice | přírodní a umělý kámen",
  description:
    "Kamenictví Tesera z Vidova u Českých Budějovic. Kuchyňské pracovní desky, obklady, schody, pomníky i fasády z přírodního a umělého kamene. Od roku 1992.",
};

const rez = [
  {
    hloub: "12–20 mm",
    nadpis: "Kuchyňské pracovní desky",
    text: "Žula, mramor i kompaktní materiály na míru. Zaměříme kuchyň u vás, desku vyřežeme a osadíme napevno k dřezu i varné desce.",
  },
  {
    hloub: "do 30 mm",
    nadpis: "Obklady koupelen a schody",
    text: "Parapety, schodišťové stupně, dlažby a soklové zdivo. Řežeme na formát, hrany brousíme a leštíme podle prostoru.",
  },
  {
    hloub: "pevný spoj",
    nadpis: "Krby a grilovací desky",
    text: "Obklady vnitřních i venkovních krbů a žulové desky, které drží žár. Materiál vybíráme podle namáhání ohněm.",
  },
  {
    hloub: "velký rozsah",
    nadpis: "Fasády, dlažby a čištění",
    text: "Obkladové desky interiérů i fasád, venkovní dlažby, zahradní doplňky a čištění fasád, schodů a soklů.",
  },
  {
    hloub: "na míru",
    nadpis: "Pomníky a náhrobky",
    text: "Výroba a osazení pomníků. Nápisy, doplňky i renovace stávajících hrobů — pracujeme po celé ČR i v zahraničí.",
  },
  {
    hloub: "terasa",
    nadpis: "Terasa a terasové produkty",
    text: "Výroba teraса a terasových prvků, stolky, barové i výdejní desky. Řemeslo, které tu firma dělá od začátku.",
  },
];

const duvery = [
  {
    rok: "1992",
    text: "Rok, kdy Tesera ve Vidově začala zpracovávat kámen. Od té doby jsme u tisíců kuchyní, schodišť i pomníků na jihu Čech.",
  },
  {
    rok: "2000",
    text: "Jako první kamenická firma v České republice jsme získali certifikát kvality ISO 9001 od společnosti TÜV.",
  },
  {
    rok: "ČR i svět",
    text: "Montáže a kamenické práce zvládáme po celé republice i v zahraničí — od jedné desky po zakázky velkého rozsahu.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#" aria-label="Tesera — kamenictví">
          <span className="brand-mark" aria-hidden="true">▚</span>
          <span className="brand-word">
            Tese<span className="brand-ra">ra</span>
          </span>
          <span className="brand-sub">kamenictví · Vidov</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#prace">Kamenické práce</a>
          <a href="#firma">O firmě</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Deska z leštěného přírodního kamene v dílně kamenictví Tesera"
            className="hero-img"
          />
          <div className="hero-grain" aria-hidden="true" />
        </div>

        <div className="hero-body">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Přírodní a umělý kámen · České Budějovice
          </p>
          <h1 id="hero-h" className="hero-h">
            Kámen, který
            <br />
            <span className="hero-em">unese celý dům</span>
          </h1>
          <p className="hero-lead">
            Řežeme, brousíme a osazujeme žulu i mramor od roku 1992. Pracovní
            deska, schodiště, krb nebo pomník — vyměříme u vás a osadíme
            napevno, aby to vydrželo generace.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#kontakt">Poptat kámen na míru</a>
            <a className="btn ghost" href="#prace">Co umíme vyrobit</a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>V řemesle od</dt>
              <dd>1992</dd>
            </div>
            <div>
              <dt>Certifikát kvality</dt>
              <dd>ISO 9001 · TÜV</dd>
            </div>
            <div>
              <dt>Dílna</dt>
              <dd>Vidov u Č. Budějovic</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="work" id="prace" aria-labelledby="work-h">
        <div className="sec-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Kamenické práce
          </p>
          <h2 id="work-h" className="sec-h">
            Od pracovní desky<br />po celou fasádu
          </h2>
          <p className="sec-lead">
            Specializujeme se na přírodní i umělý kámen. U každé zakázky
            vybíráme materiál i tloušťku podle toho, co bude kámen snášet —
            žár, vodu, mráz nebo každodenní vaření.
          </p>
        </div>

        <ul className="grid">
          {rez.map((r) => (
            <li key={r.nadpis} className="card">
              <span className="card-spec">{r.hloub}</span>
              <h3 className="card-h">{r.nadpis}</h3>
              <p className="card-t">{r.text}</p>
            </li>
          ))}
        </ul>

        <div className="work-strip">
          <img
            src="/section-1.webp"
            alt="Osazená kuchyňská pracovní deska z kamene od firmy Tesera"
            className="strip-img"
          />
          <div className="work-strip-text">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Realizace
            </p>
            <p>
              Barové, výdejní i stolové desky, obklady bazénů, zahradní doplňky
              i soklové zdivo. Dlaždičské a obkladačské práce zvládneme i ve
              velkém rozsahu — montujeme po celé ČR i v zahraničí.
            </p>
          </div>
        </div>
      </section>

      <section className="trust" id="firma" aria-labelledby="trust-h">
        <div className="trust-media">
          <img
            src="/section-2.webp"
            alt="Detail zpracovaného přírodního kamene v dílně Tesera"
            className="trust-img"
          />
        </div>

        <div className="trust-body">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            O firmě Tesera
          </p>
          <h2 id="trust-h" className="sec-h light">
            Rodinné kamenictví<br />s třicetiletou rukou
          </h2>
          <p className="trust-lead">
            Tesera vznikla ve Vidově roku 1992. Kámen tu neprodáváme z katalogu
            — vybíráme desku, řežeme ji na váš rozměr a osazujeme na místě. To,
            co odvezeme z dílny, u vás zůstane roky.
          </p>

          <ol className="timeline">
            {duvery.map((d, i) => (
              <li key={d.rok} className="tl-item">
                <span className="tl-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="tl-rok">{d.rok}</span>
                  <p className="tl-text">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="contact" id="kontakt">
            <div>
              <span className="contact-label">Dílna a provozovna</span>
              <p className="contact-val">Vidov 99, 370 07 České Budějovice</p>
            </div>
            <div>
              <span className="contact-label">Domluvit zaměření</span>
              <p className="contact-val">
                <a href="tel:+420386467076">+420 386 467 076</a>
                <br />
                <a href="mailto:info@tesera.cz">info@tesera.cz</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
