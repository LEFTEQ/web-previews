import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allegro — vinotéka a vinárna Moravský šenk, Liberec",
  description:
    "Moravská a česká vína přímo od vinařů. Vinotéka a vinárna Moravský šenk na Hanychovské v Liberci. Vlastní parkoviště, denní provoz, ochutnávky i soukromé akce.",
  openGraph: {
    title: "Allegro — vinotéka a vinárna Moravský šenk",
    description:
      "Moravská a česká vína od vinařů. Vinotéka a vinárna v Liberci s vlastním parkovištěm.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const vina = [
  {
    kraj: "Čejkovice",
    obec: "Slovácká podoblast",
    popis:
      "Domácí kolekce od Zemědělské a.s. Čejkovice — Ryzlink, Veltlín, Frankovka. Vína, která tady máme pod rukou od vinice po pult.",
  },
  {
    kraj: "Morava",
    obec: "vína od výrobce",
    popis:
      "Moravští vinaři, se kterými se známe osobně. Bez mezičlánků — proto víme, z jakého ročníku a viniční trati láhev je.",
  },
  {
    kraj: "Čechy",
    obec: "vína od výrobce",
    popis:
      "České vinařství pro srovnání i pro radost. Rádi otevřeme a poradíme, co k čemu a co zrovna teď stojí za ochutnání.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#uvod" aria-label="Allegro, vinotéka a vinárna">
          <span className="wordmark__a">Allegro</span>
          <span className="wordmark__sub">vinotéka &middot; Moravský šenk</span>
        </a>
        <a className="nav__tel" href="tel:+420725955383">
          <span aria-hidden="true">☎</span> 725 955 383
        </a>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Regál s lahvemi moravských a českých vín ve vinotéce Allegro v Liberci"
            className="hero__img"
            width={1600}
            height={1000}
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">Liberec · Hanychovská 92/47</p>
          <h1 className="hero__title">
            Víno od vinaře,<br />
            <em>ne z regálu supermarketu.</em>
          </h1>
          <p className="hero__lead">
            Vinotéka a vinárna, kde stojí za pultem někdo, kdo víno opravdu
            ochutnal. Moravská a česká vína přímo od výrobců — přijďte si vybrat,
            posedět nebo jen zeptat, co se hodí k dnešní večeři.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420725955383">
              Zavolat 725 955 383
            </a>
            <a className="btn btn--ghost" href="#kudy">
              Kudy k nám
            </a>
          </div>
          <dl className="hero__hours">
            <div>
              <dt>Po–Pá</dt>
              <dd>9:00 – 18:00</dd>
            </div>
            <div>
              <dt>So</dt>
              <dd>9:00 – 13:00</dd>
            </div>
            <div>
              <dt>Parkování</dt>
              <dd>vlastní, zdarma</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="selection" aria-labelledby="vyber-nadpis">
        <div className="selection__intro">
          <p className="eyebrow">Co u nás najdete</p>
          <h2 id="vyber-nadpis">Tři police, jedno pravidlo: znát každý ročník</h2>
          <p className="selection__note">
            Prodáváme vína přímo od výrobce. Díky spolupráci se Zemědělskou a.s.
            Čejkovice máme moravská vína z první ruky — a rádi vám k nim řekneme
            víc než jen cenu.
          </p>
        </div>
        <ol className="cards">
          {vina.map((v, i) => (
            <li className="card" key={v.kraj}>
              <span className="card__idx">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="card__title">{v.kraj}</h3>
              <p className="card__region">{v.obec}</p>
              <p className="card__text">{v.popis}</p>
            </li>
          ))}
        </ol>

        <div className="senk">
          <img
            src="/section-1.webp"
            alt="Interiér vinárny Moravský šenk se sklenkami vína"
            className="senk__img"
            width={1200}
            height={800}
          />
          <div className="senk__text">
            <p className="eyebrow">Vinárna „Moravský šenk“</p>
            <h3>Sklenka po práci i celá vaše oslava</h3>
            <p>
              Vedle vinotéky máme šenk s denním provozem — na skleničku cestou
              domů, k posezení s přáteli. Chcete uspořádat degustaci, oslavu
              nebo firemní večer? Zamluvíme vám celý šenk a vybereme vína podle
              chuti i rozpočtu.
            </p>
            <a className="btn btn--primary" href="tel:+420725955383">
              Domluvit akci telefonicky
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="kudy" aria-labelledby="o-nas-nadpis">
        <div className="about__media">
          <img
            src="/section-2.webp"
            alt="Prodejna vinotéky Allegro na Hanychovské ulici v Liberci"
            className="about__img"
            width={1200}
            height={900}
          />
        </div>
        <div className="about__body">
          <p className="eyebrow">Najdete nás v Liberci</p>
          <h2 id="o-nas-nadpis">Hanychovská 92/47, vchod z ulice Švermova</h2>
          <p className="about__lead">
            Vinotéku a vinárnu Allegro provozujeme společně se Zemědělskou a.s.
            Čejkovice. Přijeďte autem — máme vlastní parkoviště přímo u
            prodejny.
          </p>
          <ul className="facts">
            <li>
              <span className="facts__k">Adresa</span>
              <span className="facts__v">
                Hanychovská 92/47, Liberec 10, 460 10
              </span>
            </li>
            <li>
              <span className="facts__k">Vchod</span>
              <span className="facts__v">z ulice Švermova</span>
            </li>
            <li>
              <span className="facts__k">Telefon</span>
              <span className="facts__v">
                <a href="tel:+420725955383">725 955 383</a>
              </span>
            </li>
            <li>
              <span className="facts__k">Parkování</span>
              <span className="facts__v">vlastní, zdarma</span>
            </li>
          </ul>
          <a
            className="btn btn--ghost"
            href="https://mapy.cz/zakladni?q=Hanychovsk%C3%A1%2092%2F47%20Liberec"
            target="_blank"
            rel="noopener noreferrer"
          >
            Otevřít v mapě
          </a>
        </div>
      </section>
    </main>
  );
}
