const menu = [
  {
    n: "01",
    name: "Burrito Loco",
    desc: "Vlajkové burrito. Trhané hovězí nebo kuřecí, fazole, rýže, sýr, ostrá salsa — a fólie kolem, ať to na ulici drží.",
    price: "169",
  },
  {
    n: "02",
    name: "Quesadilla",
    desc: "Tortilla grilovaná do křupava, uvnitř roztavený sýr a maso. Se zakysanou smetanou.",
    price: "149",
  },
  {
    n: "03",
    name: "Nachos Grande",
    desc: "Kukuřičné chipsy pod roztaveným sýrem, jalapeños a guacamole na počkání.",
    price: "139",
  },
  {
    n: "04",
    name: "Tacos, tři kusy",
    desc: "Tři měkké tortilly, čerstvá koriandrová salsa, křížek limetky navrch.",
    price: "159",
  },
  {
    n: "05",
    name: "Chimichanga",
    desc: "Burrito smažené dozlatova. Křupavý obal, uvnitř pořádně pálí.",
    price: "179",
  },
  {
    n: "06",
    name: "Veggie burrito",
    desc: "Bez masa, zato se sladkými bramborami a černými fazolemi. Sytější, než čekáš.",
    price: "155",
  },
];

const stands = [
  { n: 1, street: "Masná", district: "Praha 1", quarter: "Staré Město" },
  { n: 2, street: "Spálená", district: "Praha 1", quarter: "Nové Město" },
  { n: 3, street: "Štefánikova", district: "Praha 5", quarter: "Smíchov" },
  { n: 4, street: "Milady Horákové", district: "Praha 7", quarter: "Holešovice" },
  { n: 5, street: "Vinohradská", district: "Praha 3", quarter: "Vinohrady" },
  { n: 6, street: "Dejvická", district: "Praha 6", quarter: "Dejvice" },
  { n: 7, street: "Vítězná", district: "Praha 5", quarter: "Malá Strana" },
  { n: 8, street: "Seifertova", district: "Praha 3", quarter: "Žižkov" },
  { n: 9, street: "Komunardů", district: "Praha 7", quarter: "Holešovice" },
];

export default function Page() {
  return (
    <main className="bl">
      <section className="hero">
        <p className="hero__eyebrow">Est. 2006 · Praha · 9 stánků</p>

        <h1 className="wordmark" aria-label="Burrito Loco">
          <span className="wm-line">Burrito</span>
          <span className="wm-line">Loco</span>
          <span className="foil" aria-hidden="true" />
        </h1>

        <p className="hero__lede">
          Mexiko přes ulici. Grilujeme, balíme do fólie a podáváme přes pult —
          rychle, ostře a na devíti místech po Praze.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#stanky">
            Najít nejbližší stánek
          </a>
          <a className="btn btn--ghost" href="tel:+420777111222">
            Zavolat +420 777 111 222
          </a>
        </div>
      </section>

      <section className="section menu" aria-labelledby="menu-h">
        <header className="section__head">
          <p className="eyebrow">Z grilu do fólie</p>
          <h2 id="menu-h" className="section__title">Co ti zabalíme</h2>
          <p className="section__sub">
            Žádné rozvážkové appky ani čekání. Řekneš číslo, my grilujeme a
            balíme. Ceny visí na tabuli u každého pultu.
          </p>
        </header>

        <ol className="menu__list">
          {menu.map((item) => (
            <li className="row" key={item.n}>
              <span className="row__stamp">{item.n}</span>
              <div className="row__body">
                <h3 className="row__name">{item.name}</h3>
                <p className="row__desc">{item.desc}</p>
              </div>
              <span className="row__price">
                {item.price}<span className="row__cur">Kč</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section roster" id="stanky" aria-labelledby="roster-h">
        <header className="section__head">
          <p className="eyebrow">Devítka stánků</p>
          <h2 id="roster-h" className="section__title">Praha, celá zabalená</h2>
          <p className="section__sub">
            Devět foliových lístků, devět adres. Najeď na lístek a otoč ho —
            řekne ti, kde přesně stojíme. Otevřeno denně 10–22.
          </p>
        </header>

        <ul className="tickets">
          {stands.map((s) => (
            <li className="ticket" key={s.n}>
              <div className="ticket__inner">
                <div className="ticket__face ticket__front">
                  <span className="ticket__hash">#</span>
                  <span className="ticket__num">{s.n}</span>
                  <span className="ticket__street">{s.street}</span>
                  <span className="ticket__district">{s.district}</span>
                </div>
                <div className="ticket__face ticket__back">
                  <span className="ticket__quarter">{s.quarter}</span>
                  <span className="ticket__open">Otevřeno denně 10–22</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="roster__note">
          Nechce se ti hledat?{" "}
          <a className="tel" href="tel:+420777111222">Zavolej +420 777 111 222</a>{" "}
          a nadiktuj objednávku dopředu.
        </p>
      </section>
    </main>
  );
}
