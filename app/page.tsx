import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pekařství Nodes — kváskový chléb ze sázecí pece | Pardubice",
  description:
    "Rodinná pekárna Nodes peče od roku 1992 tradiční kváskový chléb z vlastního třístupňového žitného kvasu. Ruční zpracování těsta, sázecí pec, nonstop prodejna v Pardubicích.",
  openGraph: {
    title: "Pekařství Nodes — kváskový chléb ze sázecí pece",
    description:
      "Vlastní žitný kvas, ruční zpracování těsta, sázecí pec. Rodinná pekárna v Pardubicích od roku 1992.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", alt: "Bochníky kváskového chleba čerstvě vytažené ze sázecí pece" }],
  },
};

const kroky = [
  {
    fáze: "kvas",
    hodiny: "48 h",
    nadpis: "Vlastní žitný kvas",
    text:
      "Kvas vyvádíme třístupňově, den dopředu. Žádné droždí do chleba — jen mouka, voda, sůl a živý kvas, který u nás jede bez přestávky od roku 1992.",
  },
  {
    fáze: "zrání",
    hodiny: "2×",
    nadpis: "Dvojí zrání v ošatkách",
    text:
      "Těsto necháme vyzrát dvakrát — nejprve v chladu, potom při běžné teplotě. Odtud pórovitější střídka a nadýchanější bochník, který dlouho vydrží čerstvý.",
  },
  {
    fáze: "pec",
    hodiny: "250 °C",
    nadpis: "Sázení do žhavé pece",
    text:
      "Bochníky sázíme lopatou přímo na dno sázecí pece. Spodek chytne kůrku, střídka zůstane vláčná. Ruční práce od začátku do konce.",
  },
];

const sortiment = [
  {
    název: "Tradiční kváskový chléb",
    detail: "Pšenično-žitný, dvakrát zrající. 900 g i půlka.",
  },
  {
    název: "Žitný na kvasu",
    detail: "Tmavý, celozrnný podíl, výrazná kůrka.",
  },
  {
    název: "Sázková veka",
    detail: "Ranní pečivo ze sázecí pece, křupavá kůrka.",
  },
  {
    název: "Běžné a sladké pečivo",
    detail: "Rohlíky, housky, koláče — pečeme přes noc na ráno.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Pekařství Nodes, domů">
          <span className="wordmark__name">Nodes</span>
          <span className="wordmark__tag">pekařství · od 1992</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#chleb">Jak pečeme</a>
          <a href="#sortiment">Sortiment</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Rodinná pekárna · Pardubice</p>
          <h1 id="hero-title">
            Chléb, který začíná
            <span className="hero__accent"> živým kvasem</span>,
            ne prášpáškem.
          </h1>
          <p className="hero__lede">
            Sázíme bochníky do žhavé pece stejně jako v roce 1992. Vlastní
            třístupňový žitný kvas, ruční zpracování těsta a nonstop otevřená
            prodejna — když se vám v noci zachce čerstvého chleba.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#prodejna">
              Kde nás najdete
            </a>
            <a className="btn btn--ghost" href="tel:+420380711712">
              Zavolat na 380 711 712
            </a>
          </div>
        </div>
        <figure className="hero__img">
          <img
            src="/hero.webp"
            alt="Bochníky kváskového chleba čerstvě vytažené ze sázecí pece"
            width={880}
            height={1040}
          />
          <figcaption>Ranní sázka, přímo z pece</figcaption>
        </figure>
      </section>

      <section className="proc" id="chleb" aria-labelledby="proc-title">
        <div className="proc__head">
          <p className="eyebrow eyebrow--dark">Proč mu říkáme tradiční</p>
          <h2 id="proc-title">Tři kroky, žádná zkratka</h2>
          <p className="proc__intro">
            Kváskový chléb se u nás nedá uspěchat. Od vyvedení kvasu po vytažení
            z pece uběhnou dva dny. Tady je celá cesta.
          </p>
        </div>
        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.fáze}>
              <div className="krok__mark">
                <span className="krok__phase">{k.fáze}</span>
                <span className="krok__num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="krok__body">
                <p className="krok__time">{k.hodiny}</p>
                <h3>{k.nadpis}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="proc__img">
          <img
            src="/section-1.webp"
            alt="Ruce pekaře tvarují bochník kváskového těsta na moukou posypané desce"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="pult" id="sortiment" aria-labelledby="pult-title">
        <div className="pult__grid">
          <div className="pult__text">
            <p className="eyebrow">Co dnes voní z pece</p>
            <h2 id="pult-title">Na pultě u nás</h2>
            <p className="pult__lede">
              Pečeme v malém a poctivě — pár druhů, které umíme dělat pořádně.
              Objednávky na větší množství berem přes týden ráno.
            </p>
            <ul className="sortiment">
              {sortiment.map((s) => (
                <li className="sortiment__item" key={s.název}>
                  <span className="sortiment__name">{s.název}</span>
                  <span className="sortiment__detail">{s.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="pult__img">
            <img
              src="/section-2.webp"
              alt="Naplněný pult prodejny s bochníky, veky a běžným pečivem"
              width={900}
              height={1100}
            />
          </figure>
        </div>

        <div className="prodejna" id="prodejna">
          <div className="prodejna__card prodejna__card--wide">
            <p className="eyebrow eyebrow--dark">Prodejna &amp; kontakt</p>
            <h3>Nonstop otevřeno. I ve tři ráno.</h3>
            <p className="prodejna__addr">
              Budějovická 21, 381 01 Pardubice
            </p>
            <p className="prodejna__note">
              Ocenění „Chutná hezky. Jihočesky.“ — 3. místo za náš kváskový
              chléb. Kvalitu dokáže nejlíp první ukousnutá kůrka.
            </p>
          </div>
          <div className="prodejna__card">
            <p className="prodejna__label">Příjem objednávek</p>
            <p className="prodejna__val">Po–pá 7:30–14:30</p>
            <a className="prodejna__link" href="tel:+420380711712">
              380 711 712
            </a>
            <a className="prodejna__link" href="mailto:fakturace@nodesck.cz">
              fakturace@nodesck.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
