import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michaela Spívalová — italština v Olomouci",
  description:
    "Překlady, tlumočení a výuka italštiny v Olomouci. Soudně ověřené překlady, doprovod na jednání i kurzy pro firmy a jednotlivce. Přes 15 let praxe, každý rok půl roku v Itálii.",
  openGraph: {
    title: "Michaela Spívalová — italština v Olomouci",
    description:
      "Překlady, tlumočení a výuka italštiny. Soudní ověření, firmy i jednotlivci, Olomouc.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "TRA",
    titulek: "Překlady",
    perex:
      "Z italštiny do češtiny i opačně — s korekturou rodilého mluvčího. Technika, obchod, architektura, systémy kvality i životní prostředí.",
    body: [
      "Manuály, výrobní dokumentace, normy a certifikace, bezpečnostní listy",
      "Katalogy, weby, letáky, firemní prezentace",
      "Obchodní i odborná korespondence",
      "Náročné texty s podporou programu Trados",
    ],
  },
  {
    kod: "GIU",
    titulek: "Soudní ověření",
    perex:
      "Razítko soudního tlumočníka na dokumenty pro české i italské úřady. Vysvědčení, rodné a oddací listy, technické průkazy, osvědčení, potvrzení.",
    body: [
      "Ověření pro české úřady",
      "Ověření pro italské úřady",
      "Tištěně i elektronicky",
      "Mlčenlivost o všem, co překládám — samozřejmost",
    ],
  },
  {
    kod: "VOC",
    titulek: "Tlumočení",
    perex:
      "Stojím vedle vás při jednání s italským partnerem — na veletrhu, u instalace stroje i na telekonferenci. Vyřídím i schůzku, ubytování a stůl v restauraci.",
    body: [
      "Obchodní schůzky, veletrhy, telekonference",
      "Odborné semináře, školení, instalace zařízení",
      "Asistence italským občanům na českých úřadech",
      "Doprovod při pracovním pobytu i dovolené",
    ],
  },
  {
    kod: "LEZ",
    titulek: "Výuka italštiny",
    perex:
      "Kurzy pro firmy i soukromé osoby v Olomouci — i online. Komunikativně, odlehčeně, s individuálním přístupem. Termíny dopoledne i odpoledne, dohodou.",
    body: [
      "Skupiny i jednotlivci na všech úrovních",
      "Konverzace pro rozmluvení",
      "Příprava firemních týmů na spolupráci s Itálií",
      "Online výuka odkudkoli",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Michaela Spívalová, italština Olomouc">
          <span className="wordmark-ita">italiano</span>
          <span className="wordmark-name">Michaela Spívalová</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#omne">O mně</a>
          <a className="topnav-cta" href="tel:+420000000000">Zavolat</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-text">
          <p className="eyebrow">Traduzioni · Interpretariato · Corsi — Olomouc</p>
          <h1 id="hero-nadpis">
            Mezi <span className="cz">češtinou</span> a
            {" "}
            <span className="it">italštinou</span> překládám
            {" "}
            <span className="underline-swash">bez ztráty významu.</span>
          </h1>
          <p className="hero-lede">
            Jsem Michaela Spívalová. Přes patnáct let dělám z italských smluv,
            manuálů a rozhovorů srozumitelnou češtinu — a naopak. Každý rok
            trávím půl roku v Itálii, aby jazyk zůstal živý.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#sluzby">Co pro vás udělám</a>
            <a className="btn btn-ghost" href="tel:+420000000000">Zavolat</a>
          </div>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            alt="Michaela Spívalová při práci s italskými texty"
            width={900}
            height={1100}
          />
          <figcaption>
            <span className="passport-line">CZ ⇄ IT</span>
            <span>15+ let praxe · soudní ověření</span>
          </figcaption>
        </figure>
      </section>

      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow">I servizi</p>
          <h2 id="sluzby-nadpis">Čtyři věci, se kterými vám pomůžu</h2>
          <p className="section-lede">
            Od jednoho razítka na rodném listu po celý den vedle vás na
            veletrhu v Miláně. Vždycky jeden člověk, který rozumí oboru
            i jazyku.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li key={s.kod} className="card">
              <span className="card-code" aria-hidden="true">{s.kod}</span>
              <h3>{s.titulek}</h3>
              <p className="card-perex">{s.perex}</p>
              <ul className="card-list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="strip">
          <img
            src="/section-1.webp"
            alt="Detail překládaných dokumentů a slovníku italštiny"
            width={1400}
            height={600}
          />
        </figure>
      </section>

      <section id="omne" className="omne" aria-labelledby="omne-nadpis">
        <figure className="omne-media">
          <img
            src="/section-2.webp"
            alt="Michaela Spívalová, tlumočnice a lektorka italštiny z Olomouce"
            width={800}
            height={1000}
          />
        </figure>
        <div className="omne-text">
          <p className="eyebrow">Chi sono</p>
          <h2 id="omne-nadpis">Jeden člověk, dvě řeči, jedna zodpovědnost</h2>
          <p>
            Nepředávám vaše texty dál a nezmizím po první objednávce. Specializuji
            se na obory, kde na jednom slově záleží — systémy kvality, technologie,
            stavebnictví, architektura, průmysl, obchod a životní prostředí.
          </p>
          <p>
            Spolupracuji s kanceláří Překlady&nbsp;s.r.o., takže i větší zakázka má
            kapacitu i termín. A protože každý rok pobývám půl roku v Itálii, mluvím
            jazykem tak, jak se mluví dnes — ne jako v učebnici.
          </p>

          <dl className="facts">
            <div>
              <dt>Praxe</dt>
              <dd>15+ let v překladu a tlumočení</dd>
            </div>
            <div>
              <dt>Ověření</dt>
              <dd>Soudní razítko pro ČR i Itálii</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Olomouc — a online odkudkoli</dd>
            </div>
            <div>
              <dt>Korektura</dt>
              <dd>Rodilý mluvčí u překladů do italštiny</dd>
            </div>
          </dl>

          <p className="signoff">Těším se na spolupráci — Michaela</p>
        </div>
      </section>
    </main>
  );
}
