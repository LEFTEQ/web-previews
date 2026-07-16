import { AiImage } from "./_ui";

const heroTiles = [
  { v: "" },
  { v: " kachle--lite" },
  { v: "" },
  { v: " kachle--brass" },
  { v: "" },
  { v: " kachle--dark" },
  { v: "" },
  { v: " kachle--lite" },
  { v: " kachle--ember" },
  { v: "" },
  { v: " kachle--dark" },
  { v: "" },
];

const nabidka = [
  {
    kat: "Kamna",
    text: "Akumulační i sálavá kamna ze šamotu a glazovaných kachlí. Zatopíte večer a teplo drží dlouho potom, co oheň dohoří.",
  },
  {
    kat: "Krby",
    text: "Otevřená i prosklená ohniště s krbovou vložkou. Střed obývacího pokoje, ke kterému se rodina večer sama sejde.",
  },
  {
    kat: "Sporáky",
    text: "Kachlové sporáky, na kterých se opravdu vaří i peče. Teplo v kuchyni, které voní nedělním obědem.",
  },
  {
    kat: "Venkovní",
    text: "Zahradní krby, udírny a pece na pizzu. Oheň, který v létě vytáhne i sousedy ven na dvůr.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="site-head">
        <a className="brand" href="#uvod" aria-label="Kamnářství Jířa – domů">
          <span className="brand__mark" aria-hidden="true">
            <span />
            <span />
            <span className="is-ember" />
            <span />
          </span>
          <span className="brand__name">
            Kamnářství
            <b>Jířa</b>
          </span>
        </a>
        <a className="brand__call" href="tel:+420774323323">
          <span>Zavolat kamnáři</span>
          774&nbsp;323&nbsp;323
        </a>
      </header>

      <section className="hero" id="uvod">
        <div className="wrap hero__inner">
          <div className="hero__lead">
            <p className="eyebrow">Kamnář v Liberci · Růžodol · od roku 1997</p>
            <h1 className="hero__title">
              Kamna stavěná na míru,
              <span className="hero__title-em"> kachli po kachli.</span>
            </h1>
            <p className="hero__sub">
              Jiří Rakušan navrhne, postaví a poprvé zatopí. Individuální kamna,
              krby, sporáky i venkovní ohniště — měřeno a pálené na milimetr,
              přes 27 let jednou rukou.
            </p>
            <div className="hero__actions">
              <a className="btn btn--ember" href="tel:+420774323323">
                Zavolat 774 323 323
              </a>
              <a className="btn btn--ghost" href="mailto:jira@kamnarstvijira.cz">
                Napsat e-mail
              </a>
            </div>
            <ul className="hero__facts">
              <li>
                <b>1997</b>první kamna
              </li>
              <li>
                <b>27+</b>let u řemesla
              </li>
              <li>
                <b>Liberec</b>Růžodol I
              </li>
            </ul>
          </div>

          <div className="hero__glass" aria-hidden="true">
            <div className="kachle-field">
              <div
                className="kachle kachle--hero"
                style={{ ["--i" as string]: 6 }}
              >
                <span className="kachle__glaze" />
                <span className="kachle__label">Kamna modrá s ležením</span>
                <span className="kachle__sub">kobaltová glazura</span>
              </div>
              {heroTiles.map((t, i) => (
                <div
                  key={i}
                  className={"kachle" + t.v}
                  style={{ ["--i" as string]: i }}
                >
                  <span className="kachle__glaze" />
                </div>
              ))}
            </div>
            <div className="hero__ember" />
            <div className="hero__firebox" />
          </div>
        </div>
      </section>

      <section className="section section--nabidka">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Co pro vás postavíme</p>
            <h2 className="sec-title">Čtyři světy jednoho ohně</h2>
            <p className="sec-note">
              Každý kus je originál — od návrhu přes výběr kachlí až po první
              zatopení. Vyberte, kde má u vás doma hořet.
            </p>
          </div>

          <div className="specimens">
            {nabidka.map((n) => (
              <article key={n.kat} className="specimen">
                <span className="specimen__glaze" aria-hidden="true" />
                <h3 className="specimen__kat">{n.kat}</h3>
                <p className="specimen__text">{n.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--omne">
        <div className="wrap omne__grid">
          <div className="omne__text">
            <p className="eyebrow">O mně</p>
            <h2 className="sec-title">Jiří Rakušan, kamnář</h2>
            <p className="omne__lead">
              Přes 27 let zkušeností a lásky k řemeslu. Od roku 1997 stavím
              individuální kamna a krby s precizností, která je mi vlastní —
              a pořád se učím, aby to, co u vás postavím, bylo to nejlepší, co
              ve stavbě topidel existuje.
            </p>
            <ul className="omne__list">
              <li>
                <b>Návrh na míru</b>
                Sedneme si nad prostor, ne nad katalog. Kamna kreslím k vašemu
                domu, ne naopak.
              </li>
              <li>
                <b>Poctivé jádro</b>
                Šamot, litina a glazované kachle. Materiály, které přežijí
                nájezdy zim i děti.
              </li>
              <li>
                <b>První zatopení</b>
                Odejdu, až když v kamnech hoří a táhnou tak, jak mají.
              </li>
            </ul>
            <address className="omne__contact">
              <a href="tel:+420774323323">+420 774 323 323</a>
              <a href="mailto:jira@kamnarstvijira.cz">jira@kamnarstvijira.cz</a>
              <span>Růžodolská 148/9, Liberec — Růžodol I, 460 01</span>
            </address>
          </div>

          <aside className="omne__plate" aria-hidden="true">
            <span className="omne__glaze" />
            <span className="omne__est">EST.</span>
            <span className="omne__year">1997</span>
            <span className="omne__place">Kamnářství Jířa · Liberec</span>
          </aside>
        </div>
      </section>
    </main>
  );
}
