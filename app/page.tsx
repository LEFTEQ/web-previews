import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      kod: "80g",
      nazev: "Kancelářský papír",
      popis: "Bílý ofsetový i kopírovací papír A4 a A3 po paletách. Značky, které projdou každou tiskárnou i kopírkou bez zasekávání.",
      detail: "A4 · A3 · role"
    },
    {
      kod: "250g",
      nazev: "Kartony a obálky",
      popis: "Grafické kartony, tvrdé desky a obálky všech formátů. Pro tiskárny, knihárny i školy, které potřebují mít vždy zásobu.",
      detail: "C6 – B4 · kartony"
    },
    {
      kod: "∞",
      nazev: "Hygiena a provoz",
      popis: "Toaletní papír, ručníky, ubrousky a čisticí role pro provozy, kanceláře i gastro. Rozvoz po Brně a okolí přímo do skladu.",
      detail: "role · balíky"
    }
  ];

  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#" aria-label="bika – velkoobchod papírem">
          <span className="brand-mark" aria-hidden="true">
            <span className="stack s1" />
            <span className="stack s2" />
            <span className="stack s3" />
          </span>
          <span className="brand-word">
            <b>bika</b>
            <em>velkoobchod papírem</em>
          </span>
        </a>
        <nav className="top-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#firma">O nás</a>
          <a className="top-call" href="tel:+420549413524">
            +420 549 413 524
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow">Brno · velkoobchod od roku 1991</p>
          <h1 id="hero-title">
            Papír po <span className="tick">paletách</span>,<br />
            ne po balíčcích.
          </h1>
          <p className="lede">
            Zásobujeme brněnské tiskárny, knihárny, školy a kanceláře kancelářským
            papírem, kartony, obálkami i hygienou. Ze skladu, ve velkých objemech,
            s rozvozem po městě.
          </p>
          <div className="hero-actions">
            <a className="btn" href="tel:+420549413524">Zavolat do skladu</a>
            <a className="btn ghost" href="#sortiment">Prohlédnout sortiment</a>
          </div>
          <dl className="hero-meta">
            <div>
              <dt>Rozvoz</dt>
              <dd>Brno a okolí</dd>
            </div>
            <div>
              <dt>Sklad</dt>
              <dd>naskladněno denně</dd>
            </div>
            <div>
              <dt>Formáty</dt>
              <dd>od A6 po role</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="Stohy balíků kancelářského papíru připravené k expedici ve skladu"
            width={900}
            height={1100}
            loading="eager"
          />
          <figcaption>Sklad, odkud denně vyjíždí papír k zákazníkům.</figcaption>
        </figure>
      </section>

      <section id="sortiment" className="sortiment" aria-labelledby="sortiment-title">
        <div className="section-head">
          <p className="eyebrow">Co vozíme</p>
          <h2 id="sortiment-title">Tři regály, ze kterých čerpáte</h2>
          <p className="section-lede">
            Gramáž na hraně dlaždice říká, s čím pracujete — od tenkého
            kancelářského papíru po tvrdý karton. Vše skladem ve velkoobchodním
            množství.
          </p>
        </div>
        <ul className="cards">
          {sortiment.map((item, i) => (
            <li
              className="card"
              key={item.nazev}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="card-gsm" aria-hidden="true">
                {item.kod}
              </span>
              <h3>{item.nazev}</h3>
              <p>{item.popis}</p>
              <span className="card-tag">{item.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="firma" className="firma" aria-labelledby="firma-title">
        <figure className="firma-figure">
          <img
            src="/section-1.webp"
            alt="Regály plné papíru a kartonů ve velkoobchodním skladu firmy bika v Brně"
            width={800}
            height={600}
            loading="lazy"
          />
        </figure>
        <div className="firma-text">
          <p className="eyebrow">O firmě bika</p>
          <h2 id="firma-title">Papír umíme koupit ve velkém, abyste vy nemuseli</h2>
          <p>
            Jsme rodinný velkoobchod z Brna. Objednáváme papír po paletách přímo
            od výrobců, držíme ho skladem a rozvážíme tam, kde právě dochází —
            do tiskáren, knihkupectví, škol i firemních kanceláří.
          </p>
          <ul className="proof">
            <li>
              <strong>Skladem, ne na objednávku.</strong> Běžný sortiment máme
              fyzicky ve skladu, ne u zahraničního dodavatele.
            </li>
            <li>
              <strong>Množstevní ceny.</strong> Čím víc odebíráte, tím lépe —
              cenu ladíme podle objemu, ne podle ceníku pro jednotlivce.
            </li>
            <li>
              <strong>Rozvoz po Brně.</strong> Palety i menší závozy dovezeme
              přímo k vám na rampu nebo do provozovny.
            </li>
          </ul>
          <a className="btn" href="tel:+420549413524">
            Zavolat a domluvit odběr
          </a>
        </div>
      </section>

      <section className="strip" aria-label="Pro koho vozíme papír">
        <img
          src="/section-2.webp"
          alt="Detail role papíru a balíků připravených k expedici"
          width={1200}
          height={500}
          loading="lazy"
        />
        <div className="strip-over">
          <p>Tiskárny · knihárny · školy · kanceláře · gastro provozy</p>
          <span>Brno a jižní Morava</span>
        </div>
      </section>
    </main>
  );
}
