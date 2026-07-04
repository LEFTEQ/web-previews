import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kumbál — kavárna a mléčný bar, Praha 7",
  description:
    "Kavárna a mléčný bar na Heřmanově 12 v Praze 7. Káva, domácí dezerty, víno, polévky každý den a stoh denního tisku. Otevřeno každý den do 21.30.",
  openGraph: {
    title: "Kumbál — kavárna a mléčný bar, Praha 7",
    description:
      "Káva, mléčný bar, domácí dezerty a denní tisk na Heřmanově 12. Otevřeno každý den do 21.30.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", alt: "Interiér kavárny Kumbál v Praze 7" }],
  },
};

const poledvky = [
  { den: "Pondělí", popis: "z pečených paprik s rajčaty a provensálským kořením" },
  { den: "Úterý", popis: "ukrajinský boršč se zakysanou smetanou" },
  { den: "Středa", popis: "dýňovo-mrkvový krém" },
  { den: "Čtvrtek", popis: "brokolicový krém se smetanou a krutony" },
  { den: "Pátek", popis: "zeleninová s červenou čočkou" },
];

const tisk = [
  "Lidové noviny",
  "Hospodářské noviny",
  "Deník N",
  "Respekt",
  "A2",
  "Reportér",
  "Harmonie",
  "Dějiny a současnost",
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a href="#uvod" className="brand" aria-label="Kumbál, domů">
          <span className="brand-word">Kumbál</span>
          <span className="brand-sub">kavárna &amp; mléčný bar</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#poled">Menu</a>
          <a href="#kavarna">O kavárně</a>
          <a href="tel:+420777559842" className="nav-call">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-img">
          <img
            src="/hero.webp"
            alt="Šálek kávy na stole v kavárně Kumbál v Praze 7"
            width={1600}
            height={1200}
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Heřmanova 12 · Praha 7</p>
          <h1 className="hero-title">
            Šálek, který<br />
            <em>nikam nespěchá.</em>
          </h1>
          <p className="hero-lede">
            Kavárna a mléčný bar kousek od Letenských sadů. Dáme vám kávu,
            domácí zákusek i sklenku vína — a stoh čerstvých novin, u kterých
            se dá vydržet do večera.
          </p>
          <div className="hero-actions">
            <a href="tel:+420777559842" className="btn btn-primary">
              Zavolat &amp; rezervovat
            </a>
            <a
              href="https://mapy.cz/zakladni?q=He%C5%99manova%2012%20Praha%207"
              className="btn btn-ghost"
            >
              Najít na mapě
            </a>
          </div>
          <dl className="hours">
            <div>
              <dt>Po–Pá</dt>
              <dd>8.00 – 21.30</dd>
            </div>
            <div>
              <dt>So–Ne</dt>
              <dd>9.00 – 21.30</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="menu" id="poled" aria-labelledby="menu-h">
        <div className="section-head">
          <p className="eyebrow">Denně na baru</p>
          <h2 id="menu-h">Káva, mléčný bar a co k tomu</h2>
        </div>

        <div className="menu-grid">
          <article className="card card-wide">
            <img
              src="/section-1.webp"
              alt="Domácí dezerty a káva v kavárně Kumbál"
              width={1200}
              height={900}
              className="card-img"
            />
            <div className="card-body">
              <h3>Ze šálku i ze sklenice</h3>
              <p>
                Espresso a mléčné nápoje z čerstvě praženého zrna, horká
                čokoláda pro mlsalouny, sklenka vína k večeru. Denní tisk máte
                v ceně dobré nálady.
              </p>
              <ul className="chips">
                <li>Káva</li>
                <li>Mléčný bar</li>
                <li>Víno</li>
                <li>Domácí dezerty</li>
              </ul>
            </div>
          </article>

          <article className="card card-soup" aria-labelledby="soup-h">
            <div className="card-body">
              <p className="eyebrow eyebrow-alt">Polévka dne</p>
              <h3 id="soup-h">Tento týden vaříme</h3>
              <ul className="soups">
                {poledvky.map((p) => (
                  <li key={p.den}>
                    <span className="soup-day">{p.den}</span>
                    <span className="soup-desc">{p.popis}</span>
                  </li>
                ))}
              </ul>
              <p className="note">Polévky točíme každý týden podle sezóny.</p>
            </div>
          </article>
        </div>

        <aside className="press" aria-labelledby="press-h">
          <h3 id="press-h">Denní tisk ke kávě</h3>
          <ul className="press-list">
            {tisk.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="about" id="kavarna" aria-labelledby="about-h">
        <div className="about-img">
          <img
            src="/section-2.webp"
            alt="Útulný interiér kavárny Kumbál v Praze 7"
            width={1200}
            height={1400}
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">O kavárně</p>
          <h2 id="about-h">Kumbál je malý, a to je záměr</h2>
          <p>
            Sedneme si k vám, poznáme štamgasty a víme, kdo pije flat white a kdo
            radši mléko navíc. Přijďte s pejskem, s dětmi i s knížkou — místo
            u okna vydrží tak dlouho, jak potřebujete.
          </p>
          <ul className="perks">
            <li>Wi-Fi zdarma</li>
            <li>Pejsci vítáni</li>
            <li>Hračky pro děti</li>
            <li>Kuřácké i nekuřácké místo</li>
          </ul>
          <div className="about-order">
            <h3>Na objednávku</h3>
            <p>
              Dorty, chlebíčky a zákusky upečeme na vaši oslavu. Celou kavárnu
              vám rádi zarezervujeme jen pro vás — občerstvení připravíme podle
              přání.
            </p>
          </div>
          <div className="contact-line">
            <a href="tel:+420777559842">777 559 842</a>
            <span aria-hidden="true">·</span>
            <a href="tel:+420604959323">604 959 323</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:kavarna@kumbal.cz">kavarna@kumbal.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
