import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizzovna — pizza z pece na dřevo | České Budějovice",
  description:
    "Pizzovna v Českých Budějovicích na rohu Jírovcovy a Smetanovy. Pizza z pece na dřevo z vybraných surovin. Jídlo na místě, s sebou i rozvoz přes Foodoru, Bolt a Wolt.",
  openGraph: {
    title: "Pizzovna — pizza z pece na dřevo",
    description:
      "Tradiční pizza z pece na dřevo v centru Českých Budějovic. Na místě, s sebou i rozvoz.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Pizza z pece na dřevo v Pizzovně" }],
  },
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%23181410'/><circle cx='16' cy='16' r='9' fill='none' stroke='%23C1440E' stroke-width='2.5'/><circle cx='16' cy='16' r='2.4' fill='%23E8B23A'/></svg>",
  },
};

const pizzy = [
  {
    nazev: "Margherita",
    znak: "🌱",
    zaklad: "sugo di pomodoro",
    slozeni: "mozzarella, čerstvá bazalka, oregano",
    cena: "190",
  },
  {
    nazev: "Cardinale",
    znak: "",
    zaklad: "sugo di pomodoro",
    slozeni: "mozzarella, šunka, oregano",
    cena: "210",
  },
  {
    nazev: "Salame",
    znak: "🌶",
    zaklad: "sugo di pomodoro",
    slozeni: "mozzarella, salám Ventricina piccante, oregano",
    cena: "225",
  },
  {
    nazev: "Rucola",
    znak: "🌱",
    zaklad: "sugo di pomodoro",
    slozeni: "mozzarella, Grana Padano, sušená rajčata, rukola, oregano",
    cena: "225",
  },
  {
    nazev: "Capricciosa",
    znak: "",
    zaklad: "sugo di pomodoro",
    slozeni: "mozzarella, šunka, žampiony, olivy, artyčoky, ančovičky, oregano",
    cena: "260",
  },
  {
    nazev: "Quattro Formaggi",
    znak: "🌱",
    zaklad: "smetana",
    slozeni: "mozzarella, Grana Padano, pecorino, gorgonzola, rukola",
    cena: "260",
  },
  {
    nazev: "Parma",
    znak: "",
    zaklad: "sugo di pomodoro",
    slozeni: "mozzarella, Grana Padano, parmská šunka, rukola, oregano",
    cena: "290",
  },
  {
    nazev: "Margherita Bufala",
    znak: "🌱",
    zaklad: "sugo di pomodoro",
    slozeni: "buvolí mozzarella, Grana Padano, bazalka, extra virgin olej, oregano",
    cena: "290",
  },
  {
    nazev: "Rapini",
    znak: "",
    zaklad: "sugo di pomodoro",
    slozeni: "mozzarella, klobása Salsiccia, rapini, gorgonzola, oregano",
    cena: "300",
  },
];

const hodiny = [
  { den: "Pondělí", cas: "zavřeno", open: false },
  { den: "Úterý", cas: "zavřeno", open: false },
  { den: "Středa", cas: "11.00 – 20.00", open: true },
  { den: "Čtvrtek", cas: "11.00 – 20.00", open: true },
  { den: "Pátek", cas: "11.00 – 20.00", open: true },
  { den: "Sobota", cas: "11.00 – 20.00", open: true },
  { den: "Neděle", cas: "zavřeno", open: false },
];

export default function Page() {
  return (
    <main className="pz">
      <header className="pz-top">
        <a className="pz-mark" href="#" aria-label="Pizzovna, České Budějovice">
          <span className="pz-mark-o" aria-hidden="true" />
          Pizzovna
        </a>
        <span className="pz-top-place">České Budějovice</span>
        <a className="pz-top-tel" href="tel:+420602857857">602 857 857</a>
      </header>

      <section className="pz-hero">
        <div className="pz-hero-media">
          <img
            src="/hero.webp"
            alt="Pizza dozrávající u sálajícího ohně v peci na dřevo"
            className="pz-hero-img"
          />
        </div>
        <div className="pz-hero-copy">
          <p className="pz-eyebrow">Roh Jírovcovy a Smetanovy · od roku v peci na dřevo</p>
          <h1 className="pz-h1">
            Pizza dopečená<br />
            <span className="pz-h1-em">živým ohněm.</span>
          </h1>
          <p className="pz-lead">
            Těsto necháváme kynout pomalu, do pece přikládáme dřevo a každou pizzu
            vytáhneme, když má okraj přesně tam, kde ho chceme. Poznáte to na prvním
            kousku.
          </p>
          <div className="pz-hero-cta">
            <a className="pz-btn" href="tel:+420602857857">Objednat k vyzvednutí</a>
            <a className="pz-btn pz-btn-ghost" href="#pizzy">Prohlédnout pizzy</a>
          </div>
          <ul className="pz-ways">
            <li>Na místě i s sebou</li>
            <li>Rozvoz Foodora · Bolt · Wolt</li>
          </ul>
        </div>
      </section>

      <section className="pz-menu" id="pizzy" aria-labelledby="pizzy-h">
        <div className="pz-menu-head">
          <h2 className="pz-h2" id="pizzy-h">Naše pizzy</h2>
          <p className="pz-menu-note">
            Vše z jedné pece. 🌱 bezmasá · 🌶 pálivá. Ceny v korunách.
          </p>
        </div>

        <ul className="pz-list">
          {pizzy.map((p) => (
            <li className="pz-item" key={p.nazev}>
              <div className="pz-item-row">
                <h3 className="pz-item-name">
                  {p.nazev}
                  {p.znak ? <span className="pz-item-flag" aria-hidden="true"> {p.znak}</span> : null}
                </h3>
                <span className="pz-dots" aria-hidden="true" />
                <span className="pz-price">
                  {p.cena}<span className="pz-price-cur">Kč</span>
                </span>
              </div>
              <p className="pz-item-base">{p.zaklad}</p>
              <p className="pz-item-desc">{p.slozeni}</p>
            </li>
          ))}
        </ul>

        <div className="pz-menu-foot">
          <img
            src="/section-1.webp"
            alt="Detail upečené pizzy s roztékanou mozzarellou a bazalkou"
            className="pz-menu-img"
          />
          <p className="pz-menu-foot-txt">
            K pizze máme nápojový lístek a přílohy — na místě rádi poradíme.
            Objednávky k vyzvednutí berem na <a href="tel:+420602857857">602 857 857</a>.
          </p>
        </div>
      </section>

      <section className="pz-about" aria-labelledby="about-h">
        <div className="pz-about-media">
          <img
            src="/section-2.webp"
            alt="Interiér Pizzovny s pecí na dřevo"
            className="pz-about-img"
          />
        </div>
        <div className="pz-about-copy">
          <h2 className="pz-h2" id="about-h">Najdete nás na rohu</h2>
          <p className="pz-about-lead">
            Jsme na rohu Jírovcovy a Smetanovy ulice v Českých Budějovicích.
            Pizzu připravujeme tradičním způsobem v peci na dřevo z vybraných
            kvalitních surovin — mozzarella, Grana Padano, parmská šunka i buvolí
            mozzarella.
          </p>

          <div className="pz-hours" aria-label="Otevírací doba">
            <p className="pz-hours-title">Otevřeno</p>
            <ul className="pz-hours-list">
              {hodiny.map((h) => (
                <li className={h.open ? "pz-hours-row pz-open" : "pz-hours-row"} key={h.den}>
                  <span className="pz-hours-day">{h.den}</span>
                  <span className="pz-hours-cas">{h.cas}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="pz-contact">
            <div>
              <dt>Adresa</dt>
              <dd>Jírovcova 1620/21, 370 01 České Budějovice</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+420602857857">602 857 857</a></dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd><a href="mailto:info@pizzovna.cz">info@pizzovna.cz</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
