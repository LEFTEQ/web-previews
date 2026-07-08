import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "H. B. Textilie — second hand v Plzni | značkové oblečení za pár korun",
  description:
    "Second hand H. B. Textilie v Plzni. Nové zboží každé úterý a pátek, ceny podle dne v týdnu. Dámské, pánské i dětské oblečení, boty a kabelky vytříděné kus po kuse.",
  openGraph: {
    title: "H. B. Textilie — second hand v Plzni",
    description:
      "Nové zboží každé úterý a pátek. Ceny klesají den za dnem — čím déle kousek visí, tím víc ušetříte. Přijďte do Plzně přehrabovat.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Regály second handu H. B. Textilie plné oblečení" }],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23C6412A'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='18' font-weight='700' fill='%23F3EBDD' text-anchor='middle'%3EHB%3C/text%3E%3C/svg%3E",
  },
};

const dny = [
  {
    den: "Úterý & pátek",
    stav: "ZÁVOZ",
    cena: "290 Kč / kg",
    popis:
      "Ráno vybalujeme nové pytle. Kdo přijde první, přehrabuje panenské zboží — kabáty, značkové mikiny, kabelky ještě s visačkou. Nejvyšší cena, ale největší výběr.",
  },
  {
    den: "Středa & sobota",
    stav: "NAČATO",
    cena: "149 Kč / kg",
    popis:
      "Nejlepší kousky jsou pryč, ale police jsou pořád plné. Ideální den na džíny, košile a dětské oblečení. Poměr cena / výběr, který v Plzni jinde nenajdete.",
  },
  {
    den: "Čtvrtek",
    stav: "DOPRODEJ",
    cena: "39 Kč / kg",
    popis:
      "Poslední šance před dalším závozem. Co zbylo, jde skoro zadarmo. Nabíráme plné tašky — trhne se, ušije, přešije. Ráj pro švadleny i divadelní kostyméry.",
  },
];

const regaly = [
  {
    stitek: "Dámské",
    text: "Šaty, halenky, svetry a kabáty tříděné podle velikosti. Značky od H&M přes Zaru po nečekané kousky Marimekko a COS.",
  },
  {
    stitek: "Pánské",
    text: "Košile, mikiny, bundy a kvalitní vlněné svetry. Práce i volný čas. Velikosti do 4XL, které v běžných obchodech shánět nemusíte.",
  },
  {
    stitek: "Dětské",
    text: "Body, dupačky, zimní kombinézy a boty, které dítě přeroste dřív než opotřebí. Za cenu jednoho nového trika odejdete se sáčkem.",
  },
  {
    stitek: "Doplňky",
    text: "Kabelky, opasky, šály a bytový textil. Povlečení, ubrusy a záclony — všechno prané a přebrané kus po kuse.",
  },
];

export default function Page() {
  return (
    <main className="hb">
      <header className="hb-top">
        <a className="hb-wordmark" href="#" aria-label="H. B. Textilie, domů">
          <span className="hb-wordmark__hb">H&#8202;B</span>
          <span className="hb-wordmark__word">Textilie</span>
          <span className="hb-wordmark__loc">second hand · Plzeň</span>
        </a>
        <a className="hb-call" href="tel:+420377220148">
          <span className="hb-call__label">Zavolat</span>
          <span className="hb-call__num">377 220 148</span>
        </a>
      </header>

      <section className="hb-hero" aria-labelledby="hb-hero-title">
        <div className="hb-hero__media">
          <img
            src="/hero.webp"
            alt="Nabité regály second handu H. B. Textilie v Plzni, oblečení navěšené na ramínkách"
            className="hb-hero__img"
            width={1600}
            height={1200}
          />
        </div>
        <div className="hb-hero__panel">
          <p className="hb-hero__eyebrow">Kilový second hand v centru Plzně</p>
          <h1 id="hb-hero-title" className="hb-hero__title">
            Čím déle to <span className="hb-em">visí</span>,
            <br />tím míň to <span className="hb-em">stojí</span>.
          </h1>
          <p className="hb-hero__lead">
            Nevážíme metry, vážíme kila. Nové zboží dorážíme dvakrát týdně a cena
            klesá den za dnem, dokud police nezůstane prázdná. U nás se nepočítá
            trend, ale ráno, kdy dorazíte.
          </p>
          <div className="hb-hero__actions">
            <a className="hb-btn hb-btn--solid" href="tel:+420377220148">
              Zavolat 377&nbsp;220&nbsp;148
            </a>
            <a className="hb-btn hb-btn--ghost" href="mailto:prodejna@hbtextilie.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="hb-hero__addr">
            Otevřeno po–so · Klatovská třída, Plzeň · zastávka Mrakodrap
          </p>
        </div>
      </section>

      <section className="hb-cal" aria-labelledby="hb-cal-title">
        <div className="hb-cal__head">
          <p className="hb-eyebrow">Ceník podle dne</p>
          <h2 id="hb-cal-title" className="hb-cal__title">
            Týden v naší prodejně má vlastní ekonomiku
          </h2>
          <p className="hb-cal__sub">
            Stejný svetr stojí v úterý a ve čtvrtek jinak. Vyberte si, jestli
            jdete po výběru, nebo po ceně.
          </p>
        </div>

        <ol className="hb-cal__list">
          {dny.map((d, i) => (
            <li className="hb-day" key={d.den}>
              <div className="hb-day__meter" aria-hidden="true">
                <span className="hb-day__phase">{d.stav}</span>
                <span className="hb-day__bars">
                  {[0, 1, 2].map((b) => (
                    <span
                      key={b}
                      className={
                        "hb-day__bar" + (b <= 2 - i ? " is-on" : "")
                      }
                    />
                  ))}
                </span>
              </div>
              <div className="hb-day__body">
                <p className="hb-day__when">{d.den}</p>
                <p className="hb-day__price">{d.cena}</p>
                <p className="hb-day__text">{d.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="hb-about" aria-labelledby="hb-about-title">
        <div className="hb-about__media">
          <img
            src="/section-1.webp"
            alt="Detail vytříděného oblečení a doplňků v prodejně H. B. Textilie"
            className="hb-about__img"
            width={1200}
            height={1500}
          />
        </div>
        <div className="hb-about__text">
          <p className="hb-eyebrow">Kdo za tím stojí</p>
          <h2 id="hb-about-title" className="hb-about__title">
            Přebíráme kus po kuse. Ne pytel po pytli.
          </h2>
          <p className="hb-about__lead">
            H. B. Textilie vozí zboží z Německa a Nizozemska už přes patnáct let.
            Než se cokoli dostane na ramínko, projde nám to rukama — díry,
            skvrny a nositelné zvlášť. Proto u nás nenajdete hromadu, ale police,
            ve kterých se dá dýchat.
          </p>

          <ul className="hb-racks">
            {regaly.map((r) => (
              <li className="hb-rack" key={r.stitek}>
                <span className="hb-rack__tag">{r.stitek}</span>
                <p className="hb-rack__text">{r.text}</p>
              </li>
            ))}
          </ul>

          <blockquote className="hb-quote">
            „Chodím sem každý pátek ráno před prací. Za dva roky jsem si tu
            oblékla celý šatník a sousedka nepozná, že je to second hand.“
            <cite className="hb-quote__cite">— Lucie H., stálá zákaznice z Doubravky</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
