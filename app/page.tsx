import type { CSSProperties } from "react";

export default function Page() {
  const stalyListek = [
    {
      kat: "Předkrm",
      nazev: "Crostini",
      popis: "Křupavé plátky bagetky zapečené s Gorgonzolou a vlašskými ořechy, Prosciutto Crudo, grilované hrušky.",
      cena: "199",
      aler: "1, 7, 8",
    },
    {
      kat: "Předkrm",
      nazev: "Hovězí carpaccio",
      popis: "Tence krájené hovězí plátky, kapary, parmezán, rukola a bagetka. 80 g.",
      cena: "235",
      aler: "1, 7",
    },
    {
      kat: "Salát",
      nazev: "Insalata Caprese",
      popis: "Mozzarella di Bufala, zralá rajčata, čerstvá bazalka a řezy bagetky. 125 / 200 g.",
      cena: "180",
      aler: "1, 7, 12",
    },
    {
      kat: "Polévka",
      nazev: "Tomatová polévka",
      popis: "Se sýrem Gran Biraghi a domácími grissini. 0,3 l.",
      cena: "75",
      aler: "1, 7",
    },
    {
      kat: "K pivu",
      nazev: "Halloumi hranolky",
      popis: "Jemně pikantní, s avokádovým a bylinkovým dipem. 200 g.",
      cena: "240",
      aler: "1, 7",
    },
    {
      kat: "Pizza",
      nazev: "Calzone Salami",
      popis: "Kapsa plněná chorizem, salámem Milano, šunkou, kukuřicí a mozzarellou na drcených rajčatech.",
      cena: "180",
      aler: "1, 7",
    },
  ];

  const denniProgram = [
    {
      cas: "8:30 – 10:00",
      titul: "Snídaně",
      hlavni: "Piadina con Frittata",
      detail:
        "Italská pšeničná placka plněná vaječnou omeletou se šunkou, plátky rajčat a mozzarellou. 180 g.",
      cena: "155",
    },
    {
      cas: "11:00 – 14:00",
      titul: "Polední menu",
      hlavni: "Filírovaný flank steak",
      detail:
        "Hovězí flank steak, horká česneková omáčka a pečené brambůrky ve slupce. Ke každému menu boršč s nokem smetany.",
      cena: "245",
    },
    {
      cas: "od 14:00",
      titul: "Stálý lístek",
      hlavni: "Pizza z pece",
      detail:
        "Poctivé italské pizzy, těstoviny a gril po celý den. Ve všední dny akce Pizza 2+1.",
      cena: "180",
    },
  ];

  return (
    <main className="ac">
      <header className="ac-top">
        <a className="ac-logo" href="#" aria-label="Art Café Pardubice">
          <span className="ac-logo-art">art</span>
          <span className="ac-logo-cafe">café</span>
          <span className="ac-logo-loc">Pardubice · Karlovina</span>
        </a>
        <nav className="ac-nav" aria-label="Hlavní navigace">
          <a href="#den">Menu dne</a>
          <a href="#listek">Jídelní lístek</a>
          <a href="tel:+420773668283" className="ac-nav-tel">
            773 668 283
          </a>
        </nav>
      </header>

      <section className="ac-hero" aria-labelledby="ac-hero-title">
        <div className="ac-hero-media">
          <img
            src="/hero.webp"
            alt="Talíř z kuchyně Art Café — čerstvě připravený chod na tmavém stole"
            width={1600}
            height={1100}
            className="ac-hero-img"
          />
        </div>
        <div className="ac-hero-body">
          <p className="ac-eyebrow">Kavárna &amp; kuchyně · Jindřišská 2028</p>
          <h1 id="ac-hero-title">
            Od <em>snídaně</em> po pozdní
            <br />
            večeři. Každý den <em>čerstvě</em>.
          </h1>
          <p className="ac-lede">
            Otevřeme v půl deváté s piadinou a espressem, v poledne
            přendáme na boršč a flank steak a večer roztopíme pec na
            pizzu. Jedna kuchyně, tři nálady.
          </p>
          <div className="ac-hero-cta">
            <a className="ac-btn" href="tel:+420773668283">
              Rezervovat stůl
            </a>
            <span className="ac-hero-note">
              nebo rovnou objednat rozvoz
            </span>
          </div>
          <ul className="ac-hours" aria-label="Otevírací doba">
            <li>
              <span>Po–Čt</span>
              <b>8:30–21:00</b>
            </li>
            <li>
              <span>Pá</span>
              <b>8:30–22:00</b>
            </li>
            <li>
              <span>So</span>
              <b>11:00–22:00</b>
            </li>
            <li>
              <span>Ne</span>
              <b>11:00–21:00</b>
            </li>
          </ul>
        </div>
      </section>

      <section className="ac-day" id="den" aria-labelledby="ac-day-title">
        <div className="ac-day-head">
          <p className="ac-eyebrow ac-eyebrow-light">Jak plyne den</p>
          <h2 id="ac-day-title">Tři chody, jak jdou hodiny</h2>
          <p className="ac-section-lede">
            U nás se nečeká na jedno okno v poledne. Kuchyně mění tempo
            podle hodin — přijďte na to, co zrovna sedí.
          </p>
        </div>
        <ol className="ac-clock">
          {denniProgram.map((d, i) => (
            <li className="ac-clock-item" key={d.titul}>
              <div className="ac-clock-time">
                <span className="ac-clock-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="ac-clock-hours">{d.cas}</span>
              </div>
              <div className="ac-clock-text">
                <h3>{d.titul}</h3>
                <p className="ac-clock-dish">{d.hlavni}</p>
                <p className="ac-clock-detail">{d.detail}</p>
                <p className="ac-clock-price">{d.cena} Kč</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="ac-day-media">
          <img
            src="/section-1.webp"
            alt="Detail jídla z poledního menu Art Café"
            width={1200}
            height={800}
            className="ac-day-img"
          />
          <p className="ac-day-caption">
            Polední menu měníme podle dne — sledujte tabuli u vchodu
            nebo se ptejte na 773 668 283.
          </p>
        </div>
      </section>

      <section className="ac-menu" id="listek" aria-labelledby="ac-menu-title">
        <div className="ac-menu-grid">
          <div className="ac-menu-intro">
            <p className="ac-eyebrow">Stálý jídelní lístek</p>
            <h2 id="ac-menu-title">Klasiky, které tu najdete pořád</h2>
            <p className="ac-section-lede">
              Vedle měnícího se menu držíme lístek, na který se dá
              spolehnout. Čísla v závorkách jsou alergeny.
            </p>
            <img
              src="/section-2.webp"
              alt="Prostřený stůl v Art Café s pokrmy ze stálého lístku"
              width={1000}
              height={1200}
              className="ac-menu-img"
            />
            <p className="ac-menu-note">
              Dárkové poukazy koupíte na místě v libovolné hodnotě,
              platí půl roku.
            </p>
          </div>
          <ul className="ac-menu-list">
            {stalyListek.map((m) => (
              <li className="ac-menu-item" key={m.nazev}>
                <div className="ac-menu-item-head">
                  <span className="ac-menu-cat">{m.kat}</span>
                  <span className="ac-menu-dots" aria-hidden="true" />
                  <span className="ac-menu-price">{m.cena} Kč</span>
                </div>
                <h3>{m.nazev}</h3>
                <p>{m.popis}</p>
                <p className="ac-menu-aler">Alergeny: {m.aler}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
