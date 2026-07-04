import type { CSSProperties } from "react";

const services = [
  {
    code: "BOURÁNÍ",
    title: "Bourání staveb a jader",
    body: "Ruční i strojní demolice od bytových jader po celé objekty. Sbíjecí kladiva, pásové bagříky do 3,5 t i těžká technika nad 3,5 t. Bouráme přesně tam, kde má konstrukce spadnout — a nikde jinde.",
  },
  {
    code: "ODVOZ",
    title: "Odvoz a likvidace suti",
    body: "Nakládka na místě, vlastní vozy na odvoz zeminy a suti, uložení na certifikované skládce. Po nás zůstane vyklizený prostor připravený pro další stavbu — ne hromada rumu.",
  },
  {
    code: "VÝKOP",
    title: "Výkopové a zemní práce",
    body: "Ruční i strojní výkopy, rypadla a minibagry do stísněných dvorů. Kabelové trasy na železnici, v průmyslu i u domů. Havarijní zásah při poruchách vody, kanalizace a plynu.",
  },
  {
    code: "STAVBA",
    title: "Zpět na zelenou louku",
    body: "Když je zbořeno, stavíme dál — chodníky, zakládání staveb, rekonstrukce bytů i dům na klíč. Jedna parta od demolice po hotovou hrubou stavbu.",
  },
];

const facts = [
  { n: "15", label: "řemeslníků ve stálé partě" },
  { n: "3,5 t", label: "hranice mezi mini a těžkou technikou" },
  { n: "24/7", label: "havarijní služba voda · plyn · kanalizace" },
];

export default function Page() {
  return (
    <main className="tk">
      <header className="tk-top">
        <a className="tk-mark" href="#" aria-label="Torakom, domů">
          <span className="tk-mark-word">TORAKOM</span>
          <span className="tk-mark-sub">demolice · Plzeň</span>
        </a>
        <nav className="tk-nav" aria-label="Hlavní">
          <a href="#prace">Co bouráme</a>
          <a href="#firma">O firmě</a>
          <a className="tk-nav-call" href="tel:+420776795998">Zavolat 776 795 998</a>
        </nav>
      </header>

      <section className="tk-hero" aria-labelledby="tk-hero-h">
        <div className="tk-hero-media">
          <img
            src="/hero.webp"
            alt="Bagr Torakomu při bourání zdi, prach a suť na plzeňské stavbě"
            className="tk-hero-img"
          />
          <span className="tk-hero-tape" aria-hidden="true">POZOR · DEMOLICE · POZOR · DEMOLICE ·</span>
        </div>
        <div className="tk-hero-body">
          <p className="tk-eyebrow">Stavební firma · Božkovská, Plzeň</p>
          <h1 id="tk-hero-h" className="tk-hero-h">
            Zbouráme to<br />
            <span className="tk-hero-strike">do základů.</span>
          </h1>
          <p className="tk-lead">
            Ruční a strojní bourání, výkopy a odvoz suti. Přijedeme s technikou
            od minibagru po vůz na zeminu, odvezeme rum a předáme vyklizený
            prostor. Bez prachu na vašich rukou.
          </p>
          <div className="tk-hero-cta">
            <a className="tk-btn" href="tel:+420776795998">Zavolat na obhlídku</a>
            <a className="tk-btn tk-btn-ghost" href="mailto:info@torakom.cz">Napsat poptávku</a>
          </div>
        </div>
      </section>

      <section id="prace" className="tk-work" aria-labelledby="tk-work-h">
        <div className="tk-section-head">
          <p className="tk-eyebrow">Řádek demolice</p>
          <h2 id="tk-work-h" className="tk-h2">Od prvního úderu kladiva po vyklizený dvůr</h2>
        </div>
        <ol className="tk-steps">
          {services.map((s, i) => (
            <li className="tk-step" key={s.code} style={{ "--i": i } as CSSProperties}>
              <span className="tk-step-code">{s.code}</span>
              <h3 className="tk-step-title">{s.title}</h3>
              <p className="tk-step-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="firma" className="tk-firm" aria-labelledby="tk-firm-h">
        <div className="tk-firm-media">
          <img
            src="/section-1.webp"
            alt="Parta Torakomu s těžkou technikou na demoliční ploše"
            className="tk-firm-img"
          />
        </div>
        <div className="tk-firm-body">
          <p className="tk-eyebrow">O firmě · TORAKOM s.r.o.</p>
          <h2 id="tk-firm-h" className="tk-h2">Patnáct lidí, kteří vědí, kde uhodit</h2>
          <p className="tk-firm-text">
            Sídlíme v Božkovské ulici v Plzni a máme vlastní zámečnickou dílnu,
            sklady i mechanizaci — nákladní i dodávkové vozy, svářečky, sbíjecí
            kladiva, vibrační desky. Demolice není o síle, ale o pořadí. My ho
            známe.
          </p>
          <dl className="tk-facts">
            {facts.map((f) => (
              <div className="tk-fact" key={f.label}>
                <dt className="tk-fact-n">{f.n}</dt>
                <dd className="tk-fact-l">{f.label}</dd>
              </div>
            ))}
          </dl>
          <figure className="tk-quote">
            <img
              src="/section-2.webp"
              alt="Detail sbíjecího kladiva a suti při bourání"
              className="tk-quote-img"
            />
            <blockquote>
              „Přijeli ráno, do večera bylo bytové jádro pryč i s odvozem.
              Sousedům nic nespadlo na hlavu, dvůr zametený.“
            </blockquote>
            <figcaption>— rekonstrukce bytu, Plzeň-Slovany</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
