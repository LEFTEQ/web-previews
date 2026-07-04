import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "F",
      name: "Fasády a zateplení",
      lead: "Secesní i moderní fasády — od zateplení po štukové profilace.",
      detail:
        "Rekonstruovali jsme nárožní secesní domy na Javořičské i Havlíčkově v Olomouci. Umíme obnovit původní profilace, ale i navrhnout kontaktní zateplení tak, aby dům dýchal a nepraskal.",
    },
    {
      code: "R",
      name: "Rekonstrukce budov",
      lead: "Kompletní obnova bytových, administrativních i historických objektů.",
      detail:
        "Za sebou máme rekonstrukci budovy Spea na náměstí Národních hrdinů. Řešíme statiku, rozvody i finální povrchy — jeden dodavatel od demolice po kolaudaci.",
    },
    {
      code: "N",
      name: "Novostavby a haly",
      lead: "Polyfunkční domy, výrobní a skladovací haly na klíč.",
      detail:
        "Postavili jsme halu a administrativní budovu pro F.G.P. studio i polyfunkční dům APIS Trading. Držíme termín, protože stavíme vlastními lidmi a technikou.",
    },
  ];

  const proof = [
    {
      title: "Rekonstrukce budovy Spea",
      place: "náměstí Národních hrdinů, Olomouc",
      note: "Obnova reprezentativní budovy v samém centru města.",
    },
    {
      title: "Secesní fasády Javořičská",
      place: "Javořičská / Havlíčkova, Olomouc",
      note: "Rekonstrukce zdobených fasád nárožního domu.",
    },
    {
      title: "Hala F.G.P. studio",
      place: "Olomoucko",
      note: "Výrobně skladovací hala s administrativní budovou.",
    },
    {
      title: "Polyfunkční dům APIS Trading",
      place: "Olomouc",
      note: "Novostavba spojující obchod, kanceláře a bydlení.",
    },
  ];

  return (
    <main className="refas">
      <header className="nav" aria-label="Hlavní">
        <a className="wordmark" href="#top" aria-label="REFAS Olomouc, domů">
          <span className="wordmark__re">RE</span>
          <span className="wordmark__fas">FAS</span>
          <span className="wordmark__city">Olomouc</span>
        </a>
        <nav className="nav__links">
          <a href="#cinnost">Co stavíme</a>
          <a href="#realizace">Realizace</a>
          <a className="nav__call" href="tel:+420737288208">
            737&nbsp;288&nbsp;208
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Rekonstruovaná fasáda historického domu v Olomouci od firmy REFAS"
            width={1600}
            height={1000}
          />
          <span className="hero__tag">Olomouc · od základů po štuk</span>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Stavební firma · Na Zákopě 525</p>
          <h1 className="hero__title">
            Držíme fasády
            <br />
            <span className="hero__accent">olomouckých</span> domů
            <br />
            pohromadě.
          </h1>
          <p className="hero__lead">
            REFAS obnovuje secesní fasády v centru, zatepluje rodinné domy za
            městem a staví haly na klíč. Vlastní lidé, vlastní technika, jeden
            odpovědný dodavatel.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420737288208">
              Zavolat na stavbu
            </a>
            <a className="btn btn--ghost" href="#realizace">
              Prohlédnout realizace
            </a>
          </div>
        </div>
      </section>

      <section className="section cinnost" id="cinnost" aria-labelledby="cinnost-h">
        <div className="section__head">
          <p className="eyebrow eyebrow--light">Činnost</p>
          <h2 id="cinnost-h" className="section__title">
            Tři věci, které umíme dotáhnout
          </h2>
        </div>

        <div className="cards">
          {services.map((s) => (
            <article className="card" key={s.code}>
              <div className="card__mark" aria-hidden="true">
                {s.code}
              </div>
              <h3 className="card__name">{s.name}</h3>
              <p className="card__lead">{s.lead}</p>
              <p className="card__detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <figure className="section__strip">
          <img
            src="/section-1.webp"
            alt="Detail rekonstruované omítky a lešení na stavbě v Olomouci"
            width={1600}
            height={700}
          />
        </figure>
      </section>

      <section className="section realizace" id="realizace" aria-labelledby="realizace-h">
        <div className="realizace__grid">
          <div className="realizace__intro">
            <p className="eyebrow">Vybrané stavby</p>
            <h2 id="realizace-h" className="section__title">
              Za jménem REFAS stojí konkrétní adresy v Olomouci
            </h2>
            <p className="realizace__note">
              Nejsme firma jen na papíře. Řadu našich staveb si můžete projít
              pěšky po městě — od náměstí Národních hrdinů po Javořičskou.
            </p>
            <div className="realizace__contact">
              <a href="tel:+420737288208">+420 737 288 208</a>
              <a href="mailto:refas@volny.cz">refas@volny.cz</a>
              <span>Na Zákopě 525, 779 00 Olomouc</span>
            </div>
          </div>

          <figure className="realizace__photo">
            <img
              src="/section-2.webp"
              alt="Dokončená rekonstrukce fasády rodinného domu na Olomoucku"
              width={1200}
              height={1400}
            />
          </figure>
        </div>

        <ol className="proof" style={{ "--n": proof.length } as CSSProperties}>
          {proof.map((p, i) => (
            <li className="proof__item" key={p.title}>
              <span className="proof__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="proof__body">
                <h3 className="proof__title">{p.title}</h3>
                <p className="proof__place">{p.place}</p>
                <p className="proof__desc">{p.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
