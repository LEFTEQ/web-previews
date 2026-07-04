import type { CSSProperties } from "react";

export default function Page() {
  const products = [
    {
      slat: "01",
      name: "Předokenní rolety",
      desc: "Hliníkové lamely v boxu nad oknem. Ovládání dálkovým ovladačem, ráno se probudíte do tmy, ne do rozednění.",
    },
    {
      slat: "02",
      name: "Venkovní žaluzie",
      desc: "Naklápěcí lamely zvenku. Pouští světlo dovnitř, horko nechají venku — kombinace, kterou vnitřní stínění neumí.",
    },
    {
      slat: "03",
      name: "Screenové rolety",
      desc: "Technická tkanina napnutá v bočních vodicích lištách. Ztlumí slunce, přes okno je pořád vidět ven.",
    },
    {
      slat: "04",
      name: "Sítě proti hmyzu",
      desc: "Rámečky a rolovací sítě do oken i dveří. Okno otevřené celou noc, komár venku.",
    },
  ];

  const reviews = [
    {
      name: "Tom Š.",
      text: "Skvělá, zkušená a spolehlivá firma. Objednávali jsme opakovaně žaluzie do více objektů — profesionální přístup při zaměření, doladění objednávky i instalaci.",
    },
    {
      name: "Alena B.",
      text: "Venkovní žaluzie na míru. Vše proběhlo k mé spokojenosti. V létě zastíní, používám je i k zatemnění. Jsou super.",
    },
    {
      name: "Helena",
      text: "Vstřícné jednání, bezproblémová domluva a perfektní odborná práce. Produkty slouží už několik let bez poruchy. Montáž byla vždy rychlá a tichá.",
    },
  ];

  return (
    <main className="cs-main">
      <header className="cs-nav" aria-label="Hlavní">
        <a className="cs-wordmark" href="#" aria-label="CLIMASTYL, domů">
          <span className="cs-wordmark__slats" aria-hidden="true">
            <i /><i /><i /><i />
          </span>
          <span className="cs-wordmark__text">CLIMASTYL</span>
        </a>
        <a className="cs-nav__phone" href="tel:+420739685515">
          739 685 515
        </a>
      </header>

      <section className="cs-hero" aria-labelledby="hero-title">
        <div className="cs-hero__grid">
          <div className="cs-hero__copy">
            <p className="cs-eyebrow">Stínicí technika · Hradec Králové a východní Čechy</p>
            <h1 id="hero-title" className="cs-hero__title">
              Horko nechte<br />
              <span className="cs-hero__title-em">za oknem.</span>
            </h1>
            <p className="cs-hero__lead">
              Venkovní žaluzie, rolety a screeny na míru vašemu domu. Zastíní
              dřív, než slunce prohřeje sklo — a v pokoji zůstane příjemně bez
              zapnuté klimatizace.
            </p>
            <div className="cs-hero__actions">
              <a className="cs-btn cs-btn--solid" href="tel:+420739685515">
                Zavolat a nezávazně poptat
              </a>
              <a className="cs-btn cs-btn--ghost" href="#nabidka">
                Prohlédnout produkty
              </a>
            </div>
          </div>
          <div className="cs-hero__media">
            <img
              src="/hero.webp"
              alt="Fasáda s venkovními žaluziemi Climastyl staženými přes okna"
              className="cs-hero__img"
              width={900}
              height={1100}
            />
            <div className="cs-hero__tag" aria-hidden="true">
              lamela dolů = chládek
            </div>
          </div>
        </div>
      </section>

      <section className="cs-offer" id="nabidka" aria-labelledby="offer-title">
        <div className="cs-offer__head">
          <p className="cs-eyebrow">Co montujeme</p>
          <h2 id="offer-title" className="cs-section-title">
            Čtyři způsoby, jak dostat slunce pod kontrolu
          </h2>
          <p className="cs-offer__intro">
            Přijedeme za vámi, změříme okna a poradíme, co dává na vaší fasádě
            smysl. Řešíme i servis toho, co jsme namontovali — záruční i po ní.
          </p>
        </div>

        <ol className="cs-slats">
          {products.map((p) => (
            <li className="cs-slat" key={p.slat}>
              <span className="cs-slat__num" aria-hidden="true">{p.slat}</span>
              <div className="cs-slat__body">
                <h3 className="cs-slat__name">{p.name}</h3>
                <p className="cs-slat__desc">{p.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="cs-offer__figure">
          <img
            src="/section-1.webp"
            alt="Detail naklápěcích lamel venkovní žaluzie v denním světle"
            className="cs-offer__img"
            width={1200}
            height={720}
          />
          <figcaption className="cs-offer__cap">
            Naklopená lamela pustí dovnitř světlo, ne žár.
          </figcaption>
        </figure>
      </section>

      <section className="cs-trust" aria-labelledby="trust-title">
        <div className="cs-trust__grid">
          <div className="cs-trust__media">
            <img
              src="/section-2.webp"
              alt="Realizace předokenních rolet na rodinném domě ve východních Čechách"
              className="cs-trust__img"
              width={900}
              height={1000}
            />
          </div>
          <div className="cs-trust__copy">
            <p className="cs-eyebrow">Reference · hodnocení 4,8/5</p>
            <h2 id="trust-title" className="cs-section-title">
              Přes 150 recenzí a montér, který si najde čas i na maličkost
            </h2>
            <p className="cs-trust__intro">
              Zaměřujeme, vyrábíme na míru a montujeme sami — bez řetězce
              subdodavatelů. Proto stíháme termíny a víme, na čem stojíme.
              Pokryjeme celé východní Čechy z Hradce Králové.
            </p>

            <div className="cs-stat" role="group" aria-label="Hodnocení zákazníků">
              <span className="cs-stat__num">4,8</span>
              <span className="cs-stat__scale" aria-hidden="true">/5</span>
              <span className="cs-stat__label">průměr ze 150+ recenzí</span>
            </div>

            <ul className="cs-reviews">
              {reviews.map((r) => (
                <li className="cs-review" key={r.name}>
                  <p className="cs-review__text">{r.text}</p>
                  <p className="cs-review__name">— {r.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
