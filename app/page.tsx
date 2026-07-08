import type { CSSProperties } from "react";

export const metadata = {
  title: "OTRADOVEC — plastová okna a dveře na míru | Praha 6 Bubeneč",
  description:
    "Vyrábíme a montujeme plastová okna a interiérové dveře v Praze. Zaměření zdarma, vlastní montáž, vzorková prodejna v Bubenči. Přijďte si okna osahat.",
};

const services = [
  {
    mark: "A",
    title: "Plastová okna na míru",
    body: "Šestikomorové profily, izolační trojsklo a kování s mikroventilací. Změříme každý otvor u vás doma, vyrobíme přesně na centimetr a bez štěrbin. Staré rámy odvezeme.",
    detail: "Trojsklo · Uw od 0,7",
  },
  {
    mark: "B",
    title: "Vchodové a interiérové dveře",
    body: "Bezpečnostní vchodové dveře do bytu i rodinného domu a interiérové dveře do zárubní, které sedí do centimetru. Kliky, prahy a těsnění vybíráme s vámi ve vzorkovně.",
    detail: "Bezpečnostní třída · RC2",
  },
  {
    mark: "C",
    title: "Montáž a začištění",
    body: "Vlastní montážní parta, ne subdodávka. Osadíme, zapěníme, olištujeme a uklidíme po sobě. Panelák, bytový dům i novostavba — okna odevzdáme hotová k užívání.",
    detail: "Vlastní parta · úklid v ceně",
  },
];

const proof = [
  { num: "1994", label: "vyrábíme okna od roku" },
  { num: "6 000+", label: "osazených oken v Praze" },
  { num: "14 dní", label: "od zaměření k montáži" },
];

export default function Page() {
  return (
    <main className="ot">
      <header className="ot-nav">
        <a className="ot-wordmark" href="#top" aria-label="OTRADOVEC — plastová okna a dveře">
          <span className="ot-wordmark__name">OTRADOVEC</span>
          <span className="ot-wordmark__sub">OKNA · DVEŘE · PRAHA</span>
        </a>
        <nav className="ot-nav__links" aria-label="Hlavní navigace">
          <a href="#nabidka">Co děláme</a>
          <a href="#duvera">Vzorkovna</a>
          <a className="ot-nav__cta" href="tel:+420602233456">Zavolat</a>
        </nav>
      </header>

      <section className="ot-hero" id="top">
        <div className="ot-hero__frame">
          <img
            className="ot-hero__img"
            src="/hero.webp"
            alt="Plastové okno OTRADOVEC osazené v pražském bytě, výhled do ulice"
          />
        </div>
        <div className="ot-hero__copy">
          <p className="ot-eyebrow">Vzorková prodejna · Podbabská 81/17, Praha 6 – Bubeneč</p>
          <h1 className="ot-hero__title">
            Okno se dá<br />
            <span className="ot-hero__accent">osahat,</span> ne jen
            objednat.
          </h1>
          <p className="ot-hero__lead">
            Vyrábíme a montujeme plastová okna a dveře pro pražské byty i domy.
            Přijďte do vzorkovny v Bubenči, otevřete si je, sáhněte na kování a
            trojsklo. Zaměření u vás doma je zdarma.
          </p>
          <div className="ot-hero__actions">
            <a className="ot-btn" href="tel:+420602233456">Zavolat +420 602 233 456</a>
            <a
              className="ot-btn ot-btn--ghost"
              href="https://maps.google.com/?q=Podbabsk%C3%A1+81/17+Praha"
            >
              Do vzorkovny
            </a>
          </div>
        </div>
      </section>

      <section className="ot-services" id="nabidka">
        <div className="ot-section-head">
          <p className="ot-eyebrow">Co pro vás uděláme</p>
          <h2 className="ot-h2">Od zaměření po hotové okno</h2>
        </div>
        <ol className="ot-list">
          {services.map((s) => (
            <li className="ot-card" key={s.mark}>
              <span className="ot-card__mark" aria-hidden="true">
                {s.mark}
              </span>
              <div className="ot-card__text">
                <h3 className="ot-card__title">{s.title}</h3>
                <p className="ot-card__body">{s.body}</p>
                <p className="ot-card__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="ot-figure">
          <img
            src="/section-1.webp"
            alt="Detail profilu plastového okna OTRADOVEC s izolačním trojsklem a kováním"
          />
          <figcaption>Profil s trojsklem, který u nás uvidíte na stole ve vzorkovně.</figcaption>
        </figure>
      </section>

      <section className="ot-trust" id="duvera">
        <div className="ot-trust__media">
          <img
            src="/section-2.webp"
            alt="Realizace oken OTRADOVEC — osazená okna v pražském bytovém domě"
          />
        </div>
        <div className="ot-trust__copy">
          <p className="ot-eyebrow">Proč OTRADOVEC</p>
          <h2 className="ot-h2">Pražská firma, vlastní parta, žádné výmluvy</h2>
          <p className="ot-trust__lead">
            Okna montujeme sami — ne přes subdodavatele. Když se za rok něco
            usadí, přijede stejný člověk, který vám je osazoval. Vzorkovnu v
            Bubenči máme otevřenou, ať víte, koho zvete domů.
          </p>
          <dl className="ot-stats">
            {proof.map((p, i) => (
              <div className="ot-stat" key={i} style={{ "--i": i } as CSSProperties}>
                <dt className="ot-stat__num">{p.num}</dt>
                <dd className="ot-stat__label">{p.label}</dd>
              </div>
            ))}
          </dl>
          <ul className="ot-contact">
            <li>
              <span className="ot-contact__k">Vzorkovna</span>
              <span className="ot-contact__v">Podbabská 81/17, Praha 6 – Bubeneč</span>
            </li>
            <li>
              <span className="ot-contact__k">Telefon</span>
              <a href="tel:+420602233456">+420 602 233 456</a>
            </li>
            <li>
              <span className="ot-contact__k">E-mail</span>
              <a href="mailto:info@otradovec.eu">info@otradovec.eu</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
