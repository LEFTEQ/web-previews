import type { CSSProperties } from "react";

const menu = [
  {
    kind: "Polévka",
    name: "Tomatová polévka",
    allergens: "7",
    price: "58",
  },
  {
    kind: "Special dne",
    name: "Pečená vinná klobása, bramborová kaše a rajčatový salát",
    allergens: "1a, 7, 12",
    price: "188",
  },
  {
    kind: "Čerstvé krůtí",
    name: "Roláda z krůtích prsou s červenou řepou, bulgur s oreganem a cherry rajčata",
    allergens: "1a, 3, 7",
    price: "198",
  },
  {
    kind: "Těstoviny",
    name: "Gratinovaná tarhoňa se slaninou, olivami, smetanou a čedarem",
    allergens: "1a, 3, 7",
    price: "188",
  },
  {
    kind: "Čerstvá ryba",
    name: "Filátko z tresky, pohankový koláček, brokolice na másle a celerové pyré",
    allergens: "3, 4, 7, 9",
    price: "268",
  },
  {
    kind: "„Easy\u201c pokrm",
    name: "Brambory Grenaille zapečené modrým sýrem, grilovaná zelenina a česnekový tvaroh",
    allergens: "7",
    price: "165",
  },
];

const pours = [
  { name: "Guinness", note: "Točený černý fešák z pípy, dopěněný přesně na dvakrát." },
  { name: "Cider", note: "Jablečné pivo pro ty, co jdou vedle piva." },
  { name: "Irská whiskey", note: "Jameson, Paddy, Bushmills a řada dalších v našem lístku." },
];

export default function Page() {
  return (
    <main className="bh">
      <section className="bh-hero" aria-label="Black Horse — irská hospoda v Liberci">
        <img
          className="bh-hero-img"
          src="/hero.webp"
          alt="Šenk irské hospody Black Horse — dřevěný bar, pípa s Guinnessem a police s whiskey"
        />
        <div className="bh-hero-veil" aria-hidden="true" />

        <div className="bh-topbar">
          <span className="bh-mark">Black&nbsp;Horse</span>
          <span className="bh-topbar-meta">Irská hospoda · Liberec</span>
        </div>

        <div className="bh-hero-inner">
          <div className="bh-sign">
            <span className="bh-club bh-club-tl" aria-hidden="true">&#9827;</span>
            <span className="bh-club bh-club-tr" aria-hidden="true">&#9827;</span>
            <span className="bh-club bh-club-bl" aria-hidden="true">&#9827;</span>
            <span className="bh-club bh-club-br" aria-hidden="true">&#9827;</span>

            <p className="bh-eyebrow bh-r1">Šenk &middot; kuchyně &middot; whiskey</p>
            <h1 className="bh-title">
              <span className="bh-title-l bh-r2">Black</span>
              <span className="bh-title-l bh-title-italic bh-r3">Horse</span>
            </h1>
            <p className="bh-lede bh-r4">
              Guinness z pípy, jablečný cider a whiskey lístek, který se čte jako
              cestopis po Irsku. V létě gril a domácí udírna na velké kryté terase.
            </p>
          </div>

          <div className="bh-cta bh-r5">
            <a className="bh-btn bh-btn-primary" href="tel:+420482710300">
              Rezervovat stůl
            </a>
            <a className="bh-btn bh-btn-ghost" href="#tabule">
              Dnešní tabule
            </a>
          </div>

          <ul className="bh-chips bh-r6" aria-label="Co u nás najdete">
            <li>Černý Guinness z pípy</li>
            <li>Prémiové irské whiskey</li>
            <li>Terasa s grilem a udírnou</li>
          </ul>
        </div>
      </section>

      <section className="bh-board" id="tabule" aria-labelledby="tabule-h">
        <div className="bh-board-head">
          <p className="bh-eyebrow">Denní nabídka &middot; středa 15.&nbsp;července</p>
          <h2 className="bh-h2" id="tabule-h">Dnešní tabule</h2>
          <p className="bh-p">
            Píšeme ji každé ráno podle toho, co přivezl trh. Stálice zůstávají,
            novinky přibývají — přijďte ochutnat obojí.
          </p>
        </div>

        <div className="bh-board-grid">
          <ol className="bh-menu">
            {menu.map((item) => (
              <li className="bh-row" key={item.name}>
                <div className="bh-row-main">
                  <span className="bh-kind">{item.kind}</span>
                  <span className="bh-dish">{item.name}</span>
                  <span className="bh-alerg">alergeny: {item.allergens}</span>
                </div>
                <span className="bh-price">
                  {item.price}&nbsp;<span className="bh-kc">Kč</span>
                </span>
              </li>
            ))}
          </ol>

          <aside className="bh-side">
            <img
              className="bh-side-img"
              src="/section-1.webp"
              alt="Talíř z denní nabídky Black Horse naservírovaný na dřevěném stole"
            />
            <div className="bh-pours">
              <p className="bh-eyebrow">Ke stolu čepujeme</p>
              <ul className="bh-pours-list">
                {pours.map((p) => (
                  <li key={p.name}>
                    <span className="bh-pour-name">
                      <span className="bh-club-inline" aria-hidden="true">&#9827;</span>
                      {p.name}
                    </span>
                    <span className="bh-pour-note">{p.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <p className="bh-note">
          Čísla v závorkách značí alergeny — jejich úplný seznam najdete v jídelním
          a nápojovém lístku na stole.
        </p>
      </section>

      <section className="bh-about" aria-labelledby="about-h">
        <div className="bh-about-media">
          <img
            className="bh-about-img"
            src="/section-2.webp"
            alt="Krytá letní terasa Black Horse s grilem a domácí udírnou"
          />
        </div>

        <div className="bh-about-body">
          <p className="bh-eyebrow">O hospodě</p>
          <h2 className="bh-h2" id="about-h">
            Kus Irska pod Ještědem
          </h2>
          <p className="bh-p">
            Vaříme oblíbenou irskou kuchyni a k ní čepujeme černého fešáka Guinness
            i jablečný cider. V letních měsících otevíráme velkou, částečně zastřešenou
            terasu, kde griluje udírna a připravujeme speciality nad ohněm.
          </p>
          <p className="bh-p">
            Pro milovníky destilátů máme samostatný whiskey lístek — Jameson, Paddy,
            Bushmills a spoustu dalších prémiových irských lahví, které stojí za
            pomalý večer.
          </p>

          <dl className="bh-contact">
            <div className="bh-contact-row">
              <dt>Zavolat &amp; rezervovat</dt>
              <dd>
                <a href="tel:+420482710300">+420 482 710 300</a>
              </dd>
            </div>
            <div className="bh-contact-row">
              <dt>Napsat</dt>
              <dd>
                <a href="mailto:hospoda@blackhorse-liberec.cz">
                  hospoda@blackhorse-liberec.cz
                </a>
              </dd>
            </div>
            <div className="bh-contact-row">
              <dt>Kde nás najdete</dt>
              <dd>Moskevská 1, 460&nbsp;01 Liberec</dd>
            </div>
            <div className="bh-contact-row">
              <dt>Otevřeno</dt>
              <dd>Po–Čt 11–23 · Pá 11–24 · So 12–24 · Ne 12–22</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

export const _styleHint: CSSProperties = {};
