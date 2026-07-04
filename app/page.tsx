import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Správa nemovitostí Olomouc — každý dům má svého člověka",
  description:
    "Spravujeme bytové domy, byty a hotelový dům v Olomouci. Vyúčtování, opravy, revize i pronájem — s kanceláří na Školní 2 a člověkem, kterému se dovoláte.",
};

const services = [
  {
    key: "01",
    title: "Správa bytových domů a SVJ",
    body: "Vedeme účetnictví domu, hlídáme fond oprav, svoláváme schůze a připravujeme podklady. Vy dostanete jasné vyúčtování, ne hromadu papírů.",
  },
  {
    key: "02",
    title: "Opravy a údržba",
    body: "Prasklá stoupačka v neděli večer neřeší e-mail. Máme prověřené řemeslníky po Olomouci a jednu havarijní linku, která zvedá telefon.",
  },
  {
    key: "03",
    title: "Pronájem bytů",
    body: "Aktuální volné byty ze správcovského portfolia, prohlídka i smlouva. Nájemníka prověříme, vy dostanete plný byt bez inzerátů naslepo.",
  },
  {
    key: "04",
    title: "Hotelový dům",
    body: "Ubytování za rozumnou cenu přímo v Olomouci — krátkodobě i na měsíce. Recepce, úklid a klid na práci či studium.",
  },
];

export default function Page() {
  return (
    <main className="sno">
      <header className="sno-nav">
        <a className="sno-mark" href="#" aria-label="Správa nemovitostí Olomouc — domů">
          <span className="sno-mark__glyph" aria-hidden="true">SNO</span>
          <span className="sno-mark__full">Správa nemovitostí
            <span className="sno-mark__city">Olomouc</span>
          </span>
        </a>
        <nav className="sno-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#dum">Hotelový dům</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="sno-hero" aria-labelledby="hero-title">
        <div className="sno-hero__media">
          <img
            src="/hero.webp"
            alt="Bytový dům ve správě Správy nemovitostí Olomouc"
            className="sno-hero__img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="sno-hero__panel">
          <p className="sno-eyebrow">Školní 202/2 · 779 00 Olomouc</p>
          <h1 id="hero-title" className="sno-hero__title">
            Každý dům<br />má svého člověka.
          </h1>
          <p className="sno-hero__lead">
            Staráme se o bytové domy, byty a hotelový dům v Olomouci od střechy
            po fond oprav. Když něco praskne, víte, komu volat — a on to zvedne.
          </p>
          <div className="sno-hero__actions">
            <a className="sno-btn sno-btn--solid" href="tel:+420585238111">
              Zavolat 585 238 111
            </a>
            <a className="sno-btn sno-btn--ghost" href="#sluzby">
              Co spravujeme
            </a>
          </div>
        </div>
      </section>

      <section className="sno-services" id="sluzby" aria-labelledby="services-title">
        <div className="sno-section-head">
          <p className="sno-eyebrow">Co pro dům děláme</p>
          <h2 id="services-title">Správa, kterou je slyšet jen když má být.</h2>
        </div>
        <ul className="sno-grid">
          {services.map((s) => (
            <li className="sno-card" key={s.key}>
              <span className="sno-card__num" aria-hidden="true">{s.key}</span>
              <h3 className="sno-card__title">{s.title}</h3>
              <p className="sno-card__body">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sno-trust" id="dum" aria-labelledby="trust-title">
        <div className="sno-trust__media">
          <img
            src="/section-1.webp"
            alt="Hotelový dům a kancelář Správy nemovitostí Olomouc"
            className="sno-trust__img"
            width={1400}
            height={1000}
          />
        </div>
        <div className="sno-trust__text" id="kontakt">
          <p className="sno-eyebrow">Od roku, kdy se domům začalo dařit</p>
          <h2 id="trust-title">Kancelář, kam za správcem zajdete na kus řeči.</h2>
          <p className="sno-trust__lead">
            Nejsme call centrum kdesi v Praze. Sedíme na Školní 2 kousek od centra
            Olomouce, dům po domě známe jménem a s nájemníky se potkáváme na chodbě,
            ne přes formulář.
          </p>
          <dl className="sno-facts">
            <div className="sno-fact">
              <dt>Kancelář</dt>
              <dd>Školní 202/2<br />779 00 Olomouc</dd>
            </div>
            <div className="sno-fact">
              <dt>Telefon</dt>
              <dd><a href="tel:+420585238111">585 238 111</a><br /><a href="tel:+420606750763">606 750 763</a></dd>
            </div>
            <div className="sno-fact">
              <dt>Havárie</dt>
              <dd>Nonstop linka pro voду,<br />topení a výtahy</dd>
            </div>
          </dl>
          <a className="sno-btn sno-btn--solid" href="tel:+420585238111">
            Domluvit si schůzku
          </a>
        </div>
      </section>
    </main>
  );
}
