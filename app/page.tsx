import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tomáš Růt — vrtané studny v Praze a okolí od roku 1990",
  description:
    "Vrtané studny na klíč od žuly po tekuté písky. Vrty 150–260 mm, oprávnění nad 30 metrů, projekty a posudky. Rodinná firma bez zaměstnanců, Praha.",
  openGraph: {
    title: "Tomáš Růt — vrtané studny v Praze a okolí",
    description:
      "Vrtám všechny druhy hornin od žuly po tekuté písky. Studny na klíč, šachty, čerpadla, úpravny vody. Od roku 1990.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Vrtná souprava Tomáše Růta při práci" }]
  }
};

const PROFILY = [
  {
    hloubka: "0",
    vrstva: "Ornice a navážka",
    popis: "Začínáme malou soupravou, která projede i úzkou brankou na zahradu. Nízká hmotnost, minimální stopy po práci."
  },
  {
    hloubka: "6",
    vrstva: "Rozvětralé podloží",
    popis: "Soudržné i rozvětralé horniny. Rotačně příklepové nebo přítlakové vrtání podle toho, co pod nohama najdeme."
  },
  {
    hloubka: "18",
    vrstva: "Skalní masiv",
    popis: "Žula a tvrdé skály. Jádrové vrtání s propažováním — projdeme i tím, co jiné firmy vzdají."
  },
  {
    hloubka: "30+",
    vrstva: "Tekuté štěrkopísky",
    popis: "Sypké a tekuté materiály s průběžným propažováním. Mám oprávnění vrtat i nad 30 metrů."
  }
];

const SLUZBY = [
  {
    id: "01",
    nazev: "Vrtané studny na klíč",
    text: "Vrty o průměru 150–260 mm s výpažnicemi 125 a 200 mm. Vyřídím projekt, hydrogeologický a geologický posudek i stavební povolení. Vy jen řeknete kde."
  },
  {
    id: "02",
    nazev: "Šachty a čerpadla",
    text: "Vybuduji zhlaví studny, osadím čerpací technologii, vyrobím ocelový poklop na betonové skruže. K tomu čištění vrtů a čerpací zkoušky."
  },
  {
    id: "03",
    nazev: "Rozbory a úpravny vody",
    text: "Chemický rozbor vody v rozsahu, který dává pro danou lokalitu smysl. Navrhnu a namontuji certifikovanou domovní úpravnu na pitnou vodu."
  },
  {
    id: "04",
    nazev: "Posudky a další vrty",
    text: "Hydrogeologické a geologické posudky, vrty pro tepelná čerpadla, piloty, opěrné zdi, vsakování i inženýrskou geologii."
  }
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Tomáš Růt, vrtané studny">
          <span className="wordmark-name">RŮT</span>
          <span className="wordmark-sub">vrtané studny · od 1990</span>
        </a>
        <a className="top-call" href="tel:+420602000000">
          <span aria-hidden="true" className="top-dot" />
          Zavolat na místo
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Praha a střední Čechy</p>
          <h1 id="hero-title">
            Vodu najdu
            <br />
            <span className="hero-em">i tam, kde jiní</span>
            <br />
            couvli.
          </h1>
          <p className="hero-lede">
            Od žuly po tekuté písky. Vrtám studny na klíč od roku 1990 — malou
            soupravou, která projede i tam, kam se velké stroje nedostanou.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420602000000">
              Zavolat Tomášovi
            </a>
            <a className="btn btn-ghost" href="mailto:vrty@rut-studny.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            alt="Vrtná souprava Tomáše Růta při vrtání studny na pozemku rodinného domu"
            className="hero-img"
            width={1200}
            height={1400}
          />
          <figcaption className="hero-badge">
            <span className="hero-badge-num">30 m+</span>
            <span className="hero-badge-lab">oprávnění k vrtům nad 30 metrů</span>
          </figcaption>
        </figure>
      </section>

      <section className="section profil" aria-labelledby="profil-title">
        <div className="section-head">
          <p className="eyebrow">Řez podložím</p>
          <h2 id="profil-title">Než dorazíme k vodě, projdeme tímhle</h2>
          <p className="section-intro">
            Každý pozemek je jiný. Podle toho, co je pod povrchem, měním způsob
            vrtání — a jdu tak hluboko, jak je potřeba.
          </p>
        </div>

        <ol className="strata">
          {PROFILY.map((p) => (
            <li className="strata-row" key={p.hloubka}>
              <span className="strata-depth" aria-hidden="true">
                {p.hloubka}
                <em>m</em>
              </span>
              <div className="strata-body">
                <h3>{p.vrstva}</h3>
                <p>{p.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="profil-services">
          <img
            src="/section-1.webp"
            alt="Detail vrtné techniky a výpažnic připravených k osazení do vrtu"
            className="profil-img"
            width={800}
            height={600}
          />
          <div className="cards">
            {SLUZBY.map((s) => (
              <article className="card" key={s.id}>
                <span className="card-id" aria-hidden="true">
                  {s.id}
                </span>
                <h3>{s.nazev}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="trust-grid">
          <figure className="trust-media">
            <img
              src="/section-2.webp"
              alt="Hotové zhlaví vrtané studny s poklopem a osazeným čerpadlem"
              className="trust-img"
              width={800}
              height={900}
            />
          </figure>
          <div className="trust-copy">
            <p className="eyebrow">Rodinná firma bez zaměstnanců</p>
            <h2 id="trust-title">U vás vrtá ten, kdo vám telefon zvedne</h2>
            <p>
              Žádný dispečink, žádní subdodavatelé. Tomáš Růt starší i mladší —
              dva lidé, jedna souprava a víc než třicet let vrtů v pražském
              podloží. Domluvíte se přímo s tím, kdo bude na pozemku stát.
            </p>
            <ul className="trust-list">
              <li>
                <strong>Návštěva na místě zdarma.</strong> Přijedu, obhlédnu
                pozemek a řeknu, jestli má vrt smysl.
              </li>
              <li>
                <strong>Papíry beru na sebe.</strong> Ohlášení průzkumného vrtu,
                posudky i stavební povolení vyřídím za vás.
              </li>
              <li>
                <strong>Čerpací zkouška na závěr.</strong> Než odjedu, víte,
                kolik vody studna dá.
              </li>
            </ul>
            <p className="trust-steps-label">Jak to u nás proběhne</p>
            <ol className="trust-steps">
              <li>Kontakt</li>
              <li>Návštěva na místě</li>
              <li>Ohlášení vrtu</li>
              <li>Vrtání</li>
              <li>Čerpací zkouška</li>
            </ol>
            <a className="btn btn-primary" href="tel:+420602000000">
              Domluvit návštěvu pozemku
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
