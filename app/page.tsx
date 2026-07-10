import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koleje Pedagog — apartmány a ubytování v Českých Budějovicích",
  description:
    "Moderní apartmány a studia v půlkruhové budově na Branišovské, hned vedle Jihočeské univerzity. Recepce nonstop, vlastní parkoviště, WIFI, prádelna a kolárna. Rezervace na +420 730 101 202.",
  openGraph: {
    title: "Koleje Pedagog — apartmány v Českých Budějovicích",
    description:
      "Půlkruhová budova o 9 podlažích u Výstaviště a JU. Apartmány pro 1–4 osoby, recepce 24 h, vlastní parkoviště.",
    type: "website",
    locale: "cs_CZ",
  },
};

const apartmany = [
  {
    patro: "01",
    nazev: "Apartmán pro 4",
    detail: "2× dvoulůžkový pokoj",
    popis: "Dva oddělené pokoje ve sdíleném apartmánu — ideál pro spolubydlící nebo rodinu.",
  },
  {
    patro: "02",
    nazev: "Apartmán pro 2",
    detail: "2× jednolůžkový pokoj",
    popis: "Vlastní postel v každém pokoji, společné zázemí. Klid na učení i práci.",
  },
  {
    patro: "03",
    nazev: "Studio pro 2",
    detail: "samostatný apartmán 1–2 osoby",
    popis: "Kompaktní samostatná jednotka pro jednoho nebo dva. Vše po ruce.",
  },
  {
    patro: "04",
    nazev: "Bezbariérový apartmán",
    detail: "1× jednolůžkový + 1× dvoulůžkový pokoj",
    popis: "Přizpůsobeno pro pohodlný pohyb, s ohledem na dostupnost celého objektu.",
  },
];

const vybaveni = [
  {
    nazev: "WIFI v celém objektu",
    popis: "Připojíte se bezdrátově kdekoli v budově. V každém pokoji je navíc síťová přípojka na vysokorychlostní internet.",
  },
  {
    nazev: "Prádelna s pračkami a sušičkami",
    popis: "V přízemí za poplatek dle ceníku. Žehličku, prkno, napařovač a fén půjčíme na recepci zdarma.",
  },
  {
    nazev: "Vlastní parkoviště, 30 míst",
    popis: "Monitorované stání přímo u budovy — zaparkujete auto i autobus.",
  },
  {
    nazev: "Úschovna kol",
    popis: "Vlastní kolárna přímo v objektu. Kolo necháte v bezpečí a suchu.",
  },
  {
    nazev: "Komunikační panel u vchodu",
    popis: "U hlavního vchodu vás host odbaví přímým spojením do konkrétního pokoje.",
  },
  {
    nazev: "Recepce nonstop",
    popis: "V přízemí je recepce s nepřetržitým 24hodinovým provozem. Vždy je vám kdo pomoci.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#" aria-label="Koleje Pedagog, domů">
          <span className="wordmark__k">Koleje</span>
          <span className="wordmark__p">Pedagog</span>
        </a>
        <nav className="nav__links">
          <a href="#ubytovani">Ubytování</a>
          <a href="#objekt">Objekt</a>
          <a href="tel:+420730101202" className="nav__phone">+420 730 101 202</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__arc" aria-hidden="true">
          <span className="hero__floor" style={{ ["--i" as string]: 8 }} />
          <span className="hero__floor" style={{ ["--i" as string]: 7 }} />
          <span className="hero__floor" style={{ ["--i" as string]: 6 }} />
          <span className="hero__floor" style={{ ["--i" as string]: 5 }} />
          <span className="hero__floor" style={{ ["--i" as string]: 4 }} />
          <span className="hero__floor" style={{ ["--i" as string]: 3 }} />
          <span className="hero__floor" style={{ ["--i" as string]: 2 }} />
          <span className="hero__floor" style={{ ["--i" as string]: 1 }} />
          <span className="hero__floor" style={{ ["--i" as string]: 0 }} />
        </div>

        <div className="hero__body">
          <p className="hero__eyebrow">České Budějovice · Branišovská 1800/36a</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line">Devět pater</span>
            <span className="hero__line hero__line--accent">do půlkruhu.</span>
            <span className="hero__line hero__line--sub">Bydlení hned vedle univerzity.</span>
          </h1>
          <p className="hero__lead">
            Novou budovu s devíti nadzemními podlažími ve tvaru půlkruhu
            nepřehlédnete — stojí u Výstaviště, kousek od areálu Jihočeské
            univerzity. Recepce běží nonstop, parkoviště je vlastní.
          </p>
          <div className="hero__cta">
            <a href="tel:+420730101202" className="btn btn--solid">Zavolat na recepci</a>
            <a href="mailto:recepce@kolejepedagog.cz" className="btn btn--ghost">Napsat o rezervaci</a>
          </div>
          <dl className="hero__facts">
            <div><dt>Recepce</dt><dd>Nonstop, 24 h</dd></div>
            <div><dt>Check-in</dt><dd>od 14:00</dd></div>
            <div><dt>Check-out</dt><dd>do 10:00</dd></div>
            <div><dt>Parkování</dt><dd>30 míst, i autobus</dd></div>
          </dl>
        </div>
      </section>

      <section className="sec" id="ubytovani" aria-labelledby="ubytovani-title">
        <div className="sec__head">
          <p className="sec__eyebrow">Možnosti ubytování</p>
          <h2 id="ubytovani-title">Čtyři typy apartmánů — vyberte si podle toho, kolik vás je.</h2>
        </div>

        <div className="sec__grid">
          <div className="media">
            <img
              src="/section-1.webp"
              alt="Interiér apartmánu v Kolejích Pedagog v Českých Budějovicích"
              className="media__img"
              loading="lazy"
              decoding="async"
            />
          </div>
          <ol className="cards">
            {apartmany.map((a) => (
              <li className="card" key={a.patro}>
                <span className="card__num" aria-hidden="true">{a.patro}</span>
                <div className="card__body">
                  <h3 className="card__title">{a.nazev}</h3>
                  <p className="card__detail">{a.detail}</p>
                  <p className="card__text">{a.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec sec--alt" id="objekt" aria-labelledby="objekt-title">
        <div className="sec__head">
          <p className="sec__eyebrow">Vybavení objektu</p>
          <h2 id="objekt-title">Co k pokoji dostanete — a proč sem lidé jezdí rádi.</h2>
          <p className="sec__intro">
            Snadno se sem dostanete i autobusem: v těsné blízkosti staví
            linky č. 3, 7, 15 a 53 v obou směrech. Zbytek už je o pohodlí.
          </p>
        </div>

        <div className="sec__grid sec__grid--rev">
          <ul className="amen">
            {vybaveni.map((v) => (
              <li className="amen__item" key={v.nazev}>
                <h3 className="amen__title">{v.nazev}</h3>
                <p className="amen__text">{v.popis}</p>
              </li>
            ))}
          </ul>
          <div className="media media--sticky">
            <img
              src="/section-2.webp"
              alt="Půlkruhová budova Koleje Pedagog na Branišovské ulici v Českých Budějovicích"
              className="media__img"
              loading="lazy"
              decoding="async"
            />
            <div className="media__caption">
              <span>Branišovská 1800/36a</span>
              <span>u Výstaviště &amp; JU</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
