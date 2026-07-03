import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martia 2000 — účetnictví a daně, Plzeň",
  description:
    "Vedení účetnictví, daňové poradenství a zpracování mezd v Plzni a Praze. Přehledy máte online, kdykoli je potřebujete. Poradíme i německy.",
  openGraph: {
    title: "Martia 2000 — účetnictví a daně, Plzeň",
    description:
      "Vedení účetnictví, daňové poradenství a mzdy. Plzeň a Praha, online přehledy, poradenství v němčině.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const zaverky = [
  { mesic: "Leden", udalost: "Roční zúčtování záloh a daňového zvýhodnění", termin: "do 15. 2." },
  { mesic: "Únor", udalost: "Přiznání k dani z nemovitých věcí", termin: "do 31. 1." },
  { mesic: "Duben", udalost: "Daň z příjmů — papírově", termin: "do 1. 4." },
  { mesic: "Květen", udalost: "Daň z příjmů — elektronicky", termin: "do 2. 5." },
  { mesic: "Červenec", udalost: "Přiznání s daňovým poradcem", termin: "do 1. 7." },
];

const sluzby = [
  {
    kod: "ÚČ",
    nazev: "Vedení účetnictví",
    popis:
      "Kompletní zpracování daňové evidence i podvojného účetnictví. Doklady předáváte tak, jak vám vyhovuje — osobně v Plzni, nebo naskenované z domova.",
    body: ["Deník a hlavní kniha", "DPH a kontrolní hlášení", "Podklady pro banku a úřady"],
  },
  {
    kod: "DP",
    nazev: "Daňové poradenství",
    popis:
      "Řekneme vám dopředu, kolik zaplatíte a kdy. S daňovým poradcem získáte i odklad přiznání do července a klidnější jaro.",
    body: ["Daň z příjmů fyzických i právnických osob", "Optimalizace v mezích zákona", "Zastupování před finančním úřadem"],
  },
  {
    kod: "MZ",
    nazev: "Zpracování mezd",
    popis:
      "Výplaty, odvody, přihlášky a odhlášky na správu i pojišťovnu. Zaměstnanci dostanou výplatnice včas, vy máte klid.",
    body: ["Měsíční mzdy a odvody", "Přihlášky ČSSZ a zdravotní pojišťovny", "Roční zúčtování"],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Martia 2000, účetnictví a daně">
          <span className="wordmark__name">Martia</span>
          <span className="wordmark__year">2000</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#profil">O nás</a>
          <a className="topnav__call" href="tel:+420377270099">377&nbsp;270&nbsp;099</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__ledger" aria-hidden="true">
          <span className="hero__col hero__col--md">MÁ&nbsp;DÁTI</span>
          <span className="hero__col hero__col--dal">DAL</span>
        </div>

        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Účetní a daňová kancelář · Plzeň &amp; Praha</p>
            <h1 id="hero-title">
              Účetnictví, které <em>sedí</em> na haléř
              <span className="hero__mark">—</span> a vy u toho spíte klidně.
            </h1>
            <p className="hero__lead">
              Vedeme účetnictví, hlídáme daně a zpracujeme mzdy. Přehledy máte
              online, kdykoli si vzpomenete. Poradíme i firmám se zahraniční
              účastí — německy.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420377270099">
                Zavolat 377&nbsp;270&nbsp;099
              </a>
              <a className="btn btn--ghost" href="mailto:info@martia2000.cz">
                Napsat e-mail
              </a>
            </div>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Účetní kancelář Martia 2000 v Plzni při zpracování daňového přiznání"
              className="hero__img"
              width={1200}
              height={1400}
            />
          </figure>
        </div>

        <dl className="hero__balance">
          <div className="balance__item">
            <dt>Regiony</dt>
            <dd>Plzeňský &amp; Pražský</dd>
          </div>
          <div className="balance__item">
            <dt>Jazyky poradenství</dt>
            <dd>Česky &amp; Deutsch</dd>
          </div>
          <div className="balance__item">
            <dt>Doklady předáte</dt>
            <dd>Osobně i na dálku</dd>
          </div>
        </dl>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">Co pro vás zaúčtujeme</p>
          <h2 id="services-title">Tři sloupce, na kterých firma stojí</h2>
        </div>

        <ul className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__desc">{s.popis}</p>
              <ul className="card__list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="calendar" aria-labelledby="cal-title">
          <h3 id="cal-title" className="calendar__title">
            Termíny, které za vás hlídáme
          </h3>
          <table className="cal-table">
            <thead>
              <tr>
                <th scope="col">Období</th>
                <th scope="col">Co se řeší</th>
                <th scope="col">Termín</th>
              </tr>
            </thead>
            <tbody>
              {zaverky.map((z) => (
                <tr key={z.mesic}>
                  <th scope="row">{z.mesic}</th>
                  <td>{z.udalost}</td>
                  <td className="cal-table__term">{z.termin}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="calendar__note">
            S daňovým poradcem posouváme přiznání až na 1.&nbsp;července. O žádný
            termín se tak nemusíte starat vy.
          </p>
        </div>
      </section>

      <section className="about" id="profil" aria-labelledby="about-title">
        <figure className="about__figure">
          <img
            src="/section-2.webp"
            alt="Doklady a šanony připravené ke zpracování v kanceláři Martia 2000"
            className="about__img"
            width={1200}
            height={900}
          />
        </figure>

        <div className="about__text">
          <p className="eyebrow">Profil společnosti</p>
          <h2 id="about-title">
            Vzdálenost dnes není překážka. Nepřesnost ano.
          </h2>
          <p>
            Martia 2000 vede účetnictví a daně z Plzně, ze Škroupovy ulice, a
            z pražské kanceláře na Štěpánské. Klienty máme po celé republice —
            v době datových schránek a scannerů si doklady předáváme, jak se
            zrovna hodí.
          </p>
          <p>
            Specializujeme se na firmy se zahraniční kapitálovou účastí. Jednáme,
            účtujeme a vysvětlujeme i německy, takže mateřská společnost rozumí
            číslům stejně dobře jako vy.
          </p>

          <ul className="contacts">
            <li>
              <span className="contacts__label">Plzeň</span>
              <span className="contacts__val">Škroupova 10, 301 00</span>
              <a href="tel:+420377270099">377&nbsp;270&nbsp;099</a>
            </li>
            <li>
              <span className="contacts__label">Praha</span>
              <span className="contacts__val">Štěpánská 61, 110 00</span>
              <a href="tel:+420222364946">222&nbsp;364&nbsp;946</a>
            </li>
            <li>
              <span className="contacts__label">E-mail</span>
              <span className="contacts__val">Odpovídáme do druhého dne</span>
              <a href="mailto:info@martia2000.cz">info@martia2000.cz</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
