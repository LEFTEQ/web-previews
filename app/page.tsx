import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antonínovo pekařství — poctivý chléb pečený v noci, Praha",
  description:
    "Sedm pražských pekáren, kde se chleba pořád dělá rukama a peče přes noc. Vinohrady, Vršovice, Karlín, Holešovice, Dejvice, Smíchov. Přijďte na křupavý bochník a dobrou kávu.",
  openGraph: {
    title: "Antonínovo pekařství — poctivý chléb pečený v noci",
    description:
      "Zatímco spíte, naši pekaři už zadělávají těsto. Sedm pekáren po Praze, chleba přímo z pece.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const provozovny = [
  { part: "Praha 2", ctvrt: "Vinohrady", ulice: "Náměstí Míru 585/11", tel: "+420 603 816 942" },
  { part: "Praha 3", ctvrt: "Vinohrady", ulice: "Laubova 4", tel: "+420 605 202 861" },
  { part: "Praha 5", ctvrt: "Smíchov", ulice: "Štefánikova 339/39", tel: "+420 734 140 650" },
  { part: "Praha 6", ctvrt: "Bubeneč", ulice: "Československé armády 729/28", tel: "+420 739 027 750" },
  { part: "Praha 7", ctvrt: "Holešovice", ulice: "Strossmayerovo nám. 11", tel: "+420 734 783 443" },
  { part: "Praha 8", ctvrt: "Karlín", ulice: "Sokolovská 55", tel: "+420 731 611 812" },
  { part: "Praha 10", ctvrt: "Vršovice", ulice: "Moskevská 38", tel: "+420 733 593 925" },
];

const nocniPlan = [
  {
    cas: "22:30",
    titul: "Zaděláváme kvas",
    text: "Žitný kvas, který krmíme každý den už léta. Bez něj by chleba nebyl chléb — jen bílá bulka na náhodu.",
  },
  {
    cas: "01:00",
    titul: "Tvarujeme rukama",
    text: "Každý bochník bere pekař do dlaní. Žádný stroj, žádná forma na jedno kopyto. Proto nejsou dva úplně stejné.",
  },
  {
    cas: "03:45",
    titul: "Sázíme do pece",
    text: "Kámen rozpálený na plný výkon, pára do trouby — a kůrka, co zapraská, když ji zmáčknete.",
  },
  {
    cas: "06:00",
    titul: "Otevíráme",
    text: "Než dopijete první kávu, voní u nás celá ulice. Chleba je ještě teplý, když ho berete z regálu.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Antonínovo pekařství — domů">
          <span className="wordmark-a">Antonínovo</span>
          <span className="wordmark-b">pekařství</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#noc">Jak pečeme</a>
          <a href="#nabidka">Co u nás najdete</a>
          <a href="#kudy">Kudy k nám</a>
        </nav>
      </header>

      <section className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Čerstvě upečené bochníky chleba s křupavou kůrkou v pekárně"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-eyebrow">Praha · sedm pekáren · pečeno v noci</p>
          <h1 className="hero-title">
            Zatímco spíte,
            <br />
            <em>my už zaděláváme těsto.</em>
          </h1>
          <p className="hero-lede">
            Chleba z pravého žitného kvasu, tvarovaný rukama a pečený na kameni.
            Ráno voní celá ulice — a bochník je ještě teplý, když si ho berete domů.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#kudy">
              Najít nejbližší pekárnu
            </a>
            <a className="btn btn-ghost" href="#noc">
              Podívat se, jak pečeme
            </a>
          </div>
        </div>
        <p className="hero-clock" aria-hidden="true">
          03:45 — sázíme do pece
        </p>
      </section>

      <section className="noc" id="noc" aria-labelledby="noc-h">
        <div className="section-head">
          <p className="eyebrow">Jedna noc v pekárně</p>
          <h2 id="noc-h" className="section-title">
            Než se rozední, je hotovo
          </h2>
          <p className="section-sub">
            Nepečeme z prášku ani z polotovaru. Tady je hodina po hodině,
            jak vzniká bochník, který si ráno odnesete.
          </p>
        </div>

        <ol className="timeline">
          {nocniPlan.map((k) => (
            <li className="timeline-item" key={k.cas}>
              <span className="timeline-time">{k.cas}</span>
              <h3 className="timeline-title">{k.titul}</h3>
              <p className="timeline-text">{k.text}</p>
            </li>
          ))}
        </ol>

        <figure className="noc-figure">
          <img
            src="/section-1.webp"
            alt="Pekař tvaruje bochník těsta na pomoučené pracovní desce"
          />
          <figcaption>Ruční tvarování — u nás pořád povinnost, ne marketing.</figcaption>
        </figure>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nab-h">
        <div className="nabidka-grid">
          <div className="nabidka-copy">
            <p className="eyebrow">Co u nás kromě chleba najdete</p>
            <h2 id="nab-h" className="section-title">
              Posaďte se, nebo si to zabalte domů
            </h2>
            <p className="section-sub">
              Ke křupavému pečivu rovnou z pece si dáte dobrou kávu. A když spěcháte,
              pošleme dobroty přes Wolt i Bolt Food až ke dveřím.
            </p>

            <ul className="cards">
              <li className="card">
                <h3>Kváskový chléb a pečivo</h3>
                <p>
                  Bochníky, housky, koláče i sladké — každý den nová várka.
                  Co je v regálu, to jsme upekli dnes v noci.
                </p>
              </li>
              <li className="card">
                <h3>Káva a posezení</h3>
                <p>
                  Voňavá káva a čerstvé pečivo na jednom stole. V Antonínově
                  kavárně ve Vršovicích na vás máme i klidný kout.
                </p>
              </li>
              <li className="card">
                <h3>Rozvoz až domů</h3>
                <p>
                  Objednáte na Woltu nebo v Bolt Food a my pošleme čerstvé
                  pečivo z nejbližší pekárny přímo k vám.
                </p>
              </li>
            </ul>
          </div>

          <figure className="nabidka-figure">
            <img
              src="/section-2.webp"
              alt="Pult pekařství plný čerstvého pečiva a šálek kávy"
            />
            <figcaption>Vršovice · Antonínova kavárna</figcaption>
          </figure>
        </div>

        <div className="pekar-band">
          <div>
            <p className="eyebrow eyebrow-light">Hledáme pekaře</p>
            <p className="pekar-text">
              Máte chuť dělat poctivé řemeslo rukama? Přidejte se k nám do noční směny.
            </p>
          </div>
          <a className="btn btn-primary" href="mailto:info@antoninovopekarstvi.cz?subject=Chci%20p%C3%A9ct%20u%20V%C3%A1s">
            Ozvat se na pozici pekaře
          </a>
        </div>
      </section>

      <section className="kudy" id="kudy" aria-labelledby="kudy-h">
        <div className="section-head">
          <p className="eyebrow">Kudy k nám</p>
          <h2 id="kudy-h" className="section-title">
            Sedm pekáren po celé Praze
          </h2>
          <p className="section-sub">
            Vinohrady, Vršovice, Karlín, Holešovice, Bubeneč a nově i Smíchov.
            Někde to k čerstvému bochníku máte blíž, než si myslíte.
          </p>
        </div>

        <ul className="provozovny">
          {provozovny.map((p) => (
            <li className="provoz" key={p.tel}>
              <span className="provoz-ctvrt">{p.ctvrt}</span>
              <span className="provoz-part">{p.part}</span>
              <span className="provoz-ulice">{p.ulice}</span>
              <a className="provoz-tel" href={`tel:${p.tel.replace(/\s/g, "")}`}>
                Zavolat {p.tel}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
