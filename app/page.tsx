import { Count } from "./motion";

const categories = [
  { label: "Silniční", live: false },
  { label: "Gravel", live: false },
  { label: "Horská", live: false },
  { label: "Elektrokola", live: false },
  { label: "Trekingová", live: false },
  { label: "Dětská", live: false },
  { label: "Tretry", live: false },
  { label: "Helmy", live: false },
  { label: "Komponenty", live: false },
  { label: "Koloběžky", live: false },
];

const offer = [
  {
    tag: "Skladem",
    title: "Silniční & gravel",
    body: "Tarmac, Roubaix, Crux. Aero rámy na závod i gravel na celodenní kilometry mimo asfalt.",
  },
  {
    tag: "Skladem",
    title: "Horská kola",
    body: "Stumpjumper, Epic i Rockhopper. Trail, cross-country i enduro — od prvního singletracku po závod.",
  },
  {
    tag: "Skladem",
    title: "Elektrokola",
    body: "Turbo Levo, Vado, Como a Haibike. Motory servisujeme přímo u nás, ne přes prostředníka.",
  },
  {
    tag: "Skladem",
    title: "Dětská kola",
    body: "Riprock, Jett a odrážedla Micro. Správná velikost, ať děti nešlápnou vedle.",
  },
  {
    tag: "Objednat termín",
    title: "Servis & BG Fit Studio",
    body: "Autorizovaný servis Specialized a Haibike. Nastavení posezu na míru vašemu tělu i jízdě.",
  },
  {
    tag: "Rezervovat",
    title: "Test centrum",
    body: "Nejdřív projeď, pak kup. Testovací kola připravená na prodejně — bez toho to nejde.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar wrap">
        <a className="wordmark" href="#" aria-label="SP KOLO — úvod">
          SP<span className="wordmark-dot" aria-hidden="true">·</span>KOLO
        </a>
        <a className="tel" href="tel:+420241080340">+420 241 080 340</a>
      </header>

      <section className="hero cog" aria-labelledby="hero-title">
        <div className="rosette" aria-hidden="true" />
        <div className="hero-inner wrap">
          <p className="eyebrow">Autorizovaný prodejce Specialized &amp; Haibike · Praha 4</p>
          <h1 id="hero-title" className="hero-title">
            Šlápněte do toho<br />s&nbsp;námi.
          </h1>
          <hr className="tarmac-line" aria-hidden="true" />
          <p className="hero-lead">
            350 m² prodejní plochy v Olbrachtově ulici, vlastní servis a test centrum.
            Kolo si u nás nejdřív osaháte a projedete — teprve pak kupujete.
          </p>
          <p className="stock-flag">
            <span className="stock-dot" aria-hidden="true" /> Novinka · Tarmac SL9 skladem
          </p>
          <ul className="chips" aria-label="Kategorie kol">
            {categories.map((c) => (
              <li key={c.label} className="chip">{c.label}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--light" aria-labelledby="offer-title">
        <div className="wrap">
          <div className="band-head cog">
            <span className="band-eyebrow">Nabídka</span>
            <h2 id="offer-title">Co u nás nasednete</h2>
          </div>
          <div className="cards">
            {offer.map((o) => (
              <article key={o.title} className="card cog">
                <span className="card-tag">{o.tag}</span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--dark trust" aria-labelledby="trust-title">
        <div className="rosette rosette--static" aria-hidden="true" />
        <div className="wrap trust-inner">
          <div className="band-head cog">
            <span className="band-eyebrow">Důvěra · O nás</span>
            <h2 id="trust-title">Ověřeno 20 lety i&nbsp;jezdci</h2>
          </div>

          <p className="story">
            SP KOLO jezdí od roku 2006, cyklistice se ale věnujeme přes 25 let. V týmu máme
            proškolené mechaniky a prodejce, kteří vám poradí s výběrem kola, doplňků i se
            servisem. Provozujeme autorizovaný servis Specialized a Haibike a profesionální
            nastavení posezu BG Fit Studio.
          </p>

          <dl className="numerals">
            <div className="numeral">
              <dd className="num"><Count to={2006} plain /></dd>
              <dt className="lbl">rok založení</dt>
            </div>
            <div className="numeral">
              <dd className="num"><Count to={20} />&nbsp;<span className="unit">let</span></dd>
              <dt className="lbl">na trhu</dt>
            </div>
            <div className="numeral numeral--wide">
              <dd className="num"><Count to={31000} /></dd>
              <dt className="lbl">spokojených jezdců</dt>
            </div>
            <div className="numeral">
              <dd className="num"><Count to={491} /></dd>
              <dt className="lbl">ověřených recenzí</dt>
            </div>
          </dl>

          <ul className="reviews" aria-label="Hodnocení zákazníků">
            <li><strong>4,8/5</strong> Google · 191 recenzí</li>
            <li><strong>4,3/5</strong> Heureka · 88 recenzí</li>
            <li><strong>96 %</strong> zákazníků doporučuje</li>
          </ul>

          <div className="showroom cog">
            <h3>Prodejna &amp; showroom Praha</h3>
            <p className="showroom-addr">Olbrachtova 1, Praha 4</p>
            <ul className="showroom-list">
              <li>350 m² prodejní plochy s centrálním skladem</li>
              <li>Parkování zdarma hned u prodejny</li>
              <li>Servis a výdejna e-shopu přímo na místě</li>
            </ul>
            <table className="hours">
              <caption>Otevírací doba</caption>
              <tbody>
                <tr><th scope="row">Po</th><td>9.00–19.00</td></tr>
                <tr><th scope="row">Út</th><td>10.00–18.00</td></tr>
                <tr><th scope="row">St</th><td>10.00–18.00</td></tr>
                <tr><th scope="row">Čt</th><td>10.00–19.00</td></tr>
                <tr><th scope="row">Pá</th><td>9.00–18.00</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
