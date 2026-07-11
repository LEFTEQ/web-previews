import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "autochodura — autopůjčovna Ostrava | dodávky a osobní vozy",
  description:
    "Autopůjčovna autochodura v Ostravě. Osobní auta i dodávky na den, víkend nebo měsíc. Ceny bez překvapení, klíče na počkání.",
};

const floise = [
  {
    kod: "OS",
    trida: "Osobní pětimístné",
    priklad: "Škoda Octavia, VW Golf",
    popis:
      "Na běžné ježdění, dojezd do práce i výlet přes celý kraj. Nízká spotřeba, klimatizace, čistý interiér.",
    denod: "690",
    misto: "5 míst",
  },
  {
    kod: "KO",
    trida: "Kombi na náklad",
    priklad: "Škoda Octavia Combi, Ford Focus Kombi",
    popis:
      "Když se osobák nehodí, ale dodávka je moc. Velký kufr na kočárek, kola nebo nákup ze stavebnin.",
    denod: "790",
    misto: "5 míst",
  },
  {
    kod: "DO",
    trida: "Dodávka na stěhování",
    priklad: "VW Transporter, Fiat Ducato",
    popis:
      "Skříňová dodávka na stěhování bytu, rozvoz materiálu nebo odvoz nábytku. Vysoká i dlouhá varianta.",
    denod: "990",
    misto: "3 místa",
  },
];

const kroky = [
  {
    n: "01",
    t: "Zavoláte nebo napíšete",
    p: "Řeknete termín a k čemu auto potřebujete. Poradíme, jestli stačí osobák, nebo bude lepší dodávka.",
  },
  {
    n: "02",
    t: "Rezervujeme konkrétní vůz",
    p: "Zapíšeme vás na jmenovité auto z parku, ne na „nějaké volné“. Víte předem, co dostanete a za kolik.",
  },
  {
    n: "03",
    t: "Vyzvednete klíče na Studentské",
    p: "Občanka, řidičák, vratná kauce — a jedete. Předání i vrácení stihneme za pár minut.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="mark" href="#uvod" aria-label="autochodura, úvod">
          <span className="mark__a">auto</span>
          <span className="mark__b">chodura</span>
          <span className="mark__plate">OSTRAVA</span>
        </a>
        <nav className="nav__links">
          <a href="#vozy">Vozový park</a>
          <a href="#jak">Jak to chodí</a>
          <a className="nav__cta" href="tel:+420000000000">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Autopůjčovna · Ostrava
            </p>
            <h1 className="hero__title">
              Klíče od auta
              <br />
              <span className="hero__title--out">na počkání.</span>
            </h1>
            <p className="hero__lead">
              Osobní vozy i dodávky k zapůjčení na den, víkend nebo celý měsíc.
              Rezervujeme vám konkrétní auto, ceny říkáme dopředu a při vrácení
              vás nepřekvapíme dodatečnými položkami.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="tel:+420000000000">
                Zavolat a rezervovat
              </a>
              <a className="btn btn--ghost" href="#vozy">
                Projít vozy
              </a>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Od</dt>
                <dd>690 Kč / den</dd>
              </div>
              <div>
                <dt>Vyzvednutí</dt>
                <dd>Studentská, Ostrava</dd>
              </div>
              <div>
                <dt>Kauce</dt>
                <dd>Vratná, řeknem předem</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Zapůjčené vozidlo z autopůjčovny autochodura připravené k předání"
              width={900}
              height={1100}
              loading="eager"
            />
            <figcaption className="hero__tag">
              <span>Připraveno k předání</span>
              <span className="hero__tag--k">stanoviště&nbsp;01</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="fleet" id="vozy" aria-labelledby="fleet-h">
        <div className="sec__head">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Vozový park
          </p>
          <h2 id="fleet-h" className="sec__title">
            Tři třídy. Vyberete podle toho,
            <br />
            co potřebujete převézt.
          </h2>
        </div>

        <ul className="fleet__list">
          {floise.map((v) => (
            <li className="card" key={v.kod}>
              <div className="card__kod" aria-hidden="true">
                {v.kod}
              </div>
              <div className="card__body">
                <h3 className="card__trida">{v.trida}</h3>
                <p className="card__priklad">{v.priklad}</p>
                <p className="card__popis">{v.popis}</p>
                <div className="card__meta">
                  <span className="card__misto">{v.misto}</span>
                  <span className="card__cena">
                    od <strong>{v.denod}</strong>&nbsp;Kč/den
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <figure className="fleet__strip">
          <img
            src="/section-1.webp"
            alt="Vozový park autopůjčovny autochodura — osobní i dodávková vozidla"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="trust" id="jak" aria-labelledby="trust-h">
        <div className="trust__grid">
          <figure className="trust__media">
            <img
              src="/section-2.webp"
              alt="Předání vozu na provozovně autochodura v Ostravě"
              loading="lazy"
            />
          </figure>
          <div className="trust__text">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Jak to u nás chodí
            </p>
            <h2 id="trust-h" className="sec__title">
              Od telefonu ke klíčům
              <br />
              ve třech krocích.
            </h2>
            <ol className="steps">
              {kroky.map((k) => (
                <li className="step" key={k.n}>
                  <span className="step__n">{k.n}</span>
                  <div>
                    <h3 className="step__t">{k.t}</h3>
                    <p className="step__p">{k.p}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="trust__adr">
              Vyzvednutí i vrácení: <strong>Studentská, Ostrava</strong>. Mimo
              otvírací dobu se domluvíme telefonicky — řekneme přesný čas, ať
              nečekáte.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
