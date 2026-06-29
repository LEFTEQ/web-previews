import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chata Harvilla — pronájem chaty v lesích u Plzně",
  description:
    "Roubená chata k pronájmu v lesích nad Plzní. Krb, sauna, terasa nad rybníkem a ticho, které slyšíte. Rezervujte víkend i celý týden.",
  openGraph: {
    title: "Chata Harvilla — pronájem chaty v lesích u Plzně",
    description:
      "Roubená chata pro 6 lidí, 25 minut z Plzně. Krb, sauna, terasa nad rybníkem. Volné termíny po celý rok.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const vybaveni = [
  {
    klic: "krb",
    nazev: "Krb a suché dřevo",
    popis:
      "Připravená zásoba bukového dřeva u kamen. Zatopíte do deseti minut, i když přijedete za tmy.",
  },
  {
    klic: "sauna",
    nazev: "Finská sauna",
    popis:
      "Vytápěná sauna pro čtyři, hned vedle ochlazovacího sudu. V zimě nejvyhledávanější kout chaty.",
  },
  {
    klic: "terasa",
    nazev: "Terasa nad rybníkem",
    popis:
      "Zastřešená terasa s grilem a výhledem na hladinu. Ráno sem chodí mlha, večer žáby.",
  },
  {
    klic: "kuchyne",
    nazev: "Plně vybavená kuchyně",
    popis:
      "Trouba, myčka, várnice na kávu i nádobí pro šest. Stačí přivézt jídlo a chuť vařit.",
  },
  {
    klic: "les",
    nazev: "Les a houbařské revíry",
    popis:
      "Smíšený les začíná za plotem. Značené trasy na Radyni i k Boleveckým rybníkům.",
  },
  {
    klic: "deti",
    nazev: "Pro děti i psa",
    popis:
      "Oplocená zahrada, houpačka a ohniště. Pes je vítaný, deku na gauč přivezte vlastní.",
  },
];

const sezona = [
  { mesice: "Duben — červen", stav: "Jaro", text: "Pučící les, chladná voda, prázdné cesty." },
  { mesice: "Červenec — srpen", stav: "Léto", text: "Koupání v rybníce, dlouhé večery u grilu." },
  { mesice: "Září — říjen", stav: "Houby", text: "Plné košíky a barvy, které jinde neuvidíte." },
  { mesice: "Listopad — březen", stav: "Sauna", text: "Zatopit, vyběhnout do sněhu, zase zatopit." },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#hero" aria-label="Chata Harvilla, úvod">
          <span className="wordmark__name">HARVILLA</span>
          <span className="wordmark__sub">chata&nbsp;·&nbsp;Plzeňsko</span>
        </a>
        <a className="topbar__call" href="tel:+420377226026">
          Zavolat 377&nbsp;226&nbsp;026
        </a>
      </header>

      <section className="hero" id="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Roubená chata mezi stromy s rozsvícenými okny za soumraku"
          />
          <span className="hero__stamp">est. Plzeňský les</span>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Pronájem chaty · 25 minut z Plzně</p>
          <h1 className="hero__title">
            Ticho, které<br />
            <em>slyšíte</em> hned za
            <br />okrajem lesa.
          </h1>
          <p className="hero__lead">
            Roubená chata pro šest lidí nad vlastním rybníkem. Krb, sauna a les,
            do kterého se vejdou všechny vaše plány na nedělání nic.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420377226026">
              Zarezervovat termín
            </a>
            <a className="btn btn--ghost" href="mailto:chata@harvilla-reality.cz">
              Napsat na e-mail
            </a>
          </div>
          <dl className="hero__facts">
            <div><dt>Lůžka</dt><dd>6 + přistýlka</dd></div>
            <div><dt>Pozemek</dt><dd>1 400 m² u vody</dd></div>
            <div><dt>Od Plzně</dt><dd>21 km</dd></div>
          </dl>
        </div>
      </section>

      <section className="vybaveni" aria-labelledby="vybaveni-nadpis">
        <div className="section-head">
          <p className="eyebrow">Co k chatě patří</p>
          <h2 id="vybaveni-nadpis" className="section-title">
            Všechno připravené,<br />než dojedete.
          </h2>
        </div>

        <div className="vybaveni__layout">
          <img
            className="vybaveni__img"
            src="/section-1.webp"
            alt="Interiér chaty s rozsvíceným krbem a dřevěným obložením"
          />
          <ul className="cards">
            {vybaveni.map((v) => (
              <li className="card" key={v.klic}>
                <h3 className="card__title">{v.nazev}</h3>
                <p className="card__text">{v.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sezona" aria-labelledby="sezona-nadpis">
        <div className="sezona__media">
          <img
            className="sezona__img"
            src="/section-2.webp"
            alt="Pohled z terasy chaty na rybník zahalený ranní mlhou"
          />
        </div>

        <div className="sezona__body">
          <p className="eyebrow">Chata po celý rok</p>
          <h2 id="sezona-nadpis" className="section-title">
            Každé roční období<br />tu vypadá jinak.
          </h2>
          <p className="sezona__lead">
            Chatu provozuje rodina Harvillových z Plzně. Pronajímáme ji od roku
            2005, staráme se o ni sami a poznáte to — od naštípaného dřeva po
            tip, kam vyrazit na houby.
          </p>

          <ol className="calendar">
            {sezona.map((s, i) => (
              <li className="calendar__row" key={s.stav}>
                <span className="calendar__no">{String(i + 1).padStart(2, "0")}</span>
                <span className="calendar__season">{s.stav}</span>
                <span className="calendar__months">{s.mesice}</span>
                <span className="calendar__text">{s.text}</span>
              </li>
            ))}
          </ol>

          <figure className="quote">
            <blockquote>
              „Přijeli jsme na víkend, zůstali týden. Děti od rybníka nešly a my
              od krbu taky ne.“
            </blockquote>
            <figcaption>— Markéta a Tomáš, Plzeň, loni v září</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
