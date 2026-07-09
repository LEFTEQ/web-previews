import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Středověká Krčma — hospoda v srdci Brna",
  description:
    "Zažijte středověk na talíři i v korbelu. Krčma v centru Brna, kde se peče u ohně a vaří až do konce otevírací doby. Rezervujte stůl na 722 000 063.",
  metadataBase: new URL("https://www.stredovekakrcma.cz"),
  openGraph: {
    title: "Středověká Krčma — hospoda v srdci Brna",
    description:
      "Zažijte středověk na talíři i v korbelu. Peče se u ohně, vaří až do zavíračky. Brno.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Interiér Středověké Krčmy v Brně" }],
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='5' fill='%231b1410'/%3E%3Cpath d='M9 10h4v9a3 3 0 0 0 6 0v-9h4v9a7 7 0 0 1-6 6.9V27h-2v-1.1A7 7 0 0 1 9 19z' fill='%23d9a441'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
};

const hours = [
  { day: "Pondělí", open: false, time: "Zavřeno" },
  { day: "Úterý", open: false, time: "Zavřeno" },
  { day: "Středa", open: true, time: "16–24" },
  { day: "Čtvrtek", open: true, time: "16–24" },
  { day: "Pátek", open: true, time: "16–24" },
  { day: "Sobota", open: true, time: "16–24" },
  { day: "Neděle", open: false, time: "Zavřeno" },
];

const feast = [
  {
    name: "Pečínka z ohniště",
    note: "Vepřové koleno, kachní stehno a klobása pečené nad žhavým uhlím. Podává se na dřevěném prkně, k tomu křen a hrubá hořčice.",
    tag: "od ohně",
  },
  {
    name: "Kotlíková polévka",
    note: "Hustá zelňačka s uzeným, dopékaná v litinovém kotli přímo u stolu. K namáčení pecen chleba ze zdejší pece.",
    tag: "z kotle",
  },
  {
    name: "Medovina a pivo z korbele",
    note: "Teplá kořeněná medovina, tmavé pivo do hliněného korbele a bylinné pálenky podle starých receptur. Na zdraví, jak se sluší.",
    tag: "z korbele",
  },
];

export default function Page() {
  return (
    <main className="kr">
      <header className="kr-nav" aria-label="Hlavní">
        <span className="kr-mark">
          <span className="kr-mark-top">Středověká</span>
          <span className="kr-mark-big">KRČMA</span>
          <span className="kr-mark-loc">Brno · Anno Domini</span>
        </span>
        <a className="kr-nav-tel" href="tel:+420722000063">
          <span aria-hidden="true">☎</span> 722&nbsp;000&nbsp;063
        </a>
      </header>

      <section className="kr-hero" aria-labelledby="hero-title">
        <img
          className="kr-hero-img"
          src="/hero.webp"
          alt="Klenutá krčma osvětlená ohněm a svícemi, dřevěné stoly plné jídla"
          width={1600}
          height={1000}
          fetchPriority="high"
        />
        <div className="kr-hero-veil" aria-hidden="true" />
        <div className="kr-hero-inner">
          <p className="kr-eyebrow">Hospoda · Brno · vaříme u ohně</p>
          <h1 id="hero-title" className="kr-hero-title">
            Přisedni k ohni.
            <br />
            Zbytek nechej
            <br />
            <span className="kr-hero-accent">na krčmě.</span>
          </h1>
          <p className="kr-hero-lede">
            Klenuté sklepení v srdci Brna, kde se peče nad žhavým uhlím a vaří
            až do zavíračky. Žádné umělé řemeslo — jen oheň, korbel a poctivá
            porce středověku.
          </p>
          <div className="kr-hero-cta">
            <a className="kr-btn kr-btn-primary" href="tel:+420722000063">
              Rezervovat stůl
            </a>
            <a className="kr-btn kr-btn-ghost" href="#hodovani">
              Co se peče
            </a>
          </div>
        </div>

        <div className="kr-hours" aria-label="Otevírací doba">
          <p className="kr-hours-head">Brána otevřená</p>
          <ul className="kr-hours-list">
            {hours.map((h) => (
              <li
                key={h.day}
                className={h.open ? "kr-hour kr-hour-on" : "kr-hour kr-hour-off"}
              >
                <span className="kr-hour-day">{h.day}</span>
                <span className="kr-hour-time">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="kr-hours-note">Vaříme až do konce otevírací doby.</p>
        </div>
      </section>

      <section className="kr-feast" id="hodovani" aria-labelledby="feast-title">
        <div className="kr-sec-head">
          <p className="kr-eyebrow kr-eyebrow-dark">Ze tří ohňů</p>
          <h2 id="feast-title" className="kr-h2">
            Co ti postaví na stůl
          </h2>
          <p className="kr-sec-lede">
            Nevaříme z jídelníčku o padesáti položkách. Máme oheň, kotel a
            korbel — a z každého to nejlepší, co u nás roky umíme.
          </p>
        </div>

        <ol className="kr-dishes">
          {feast.map((d, i) => (
            <li className="kr-dish" key={d.name}>
              <span className="kr-dish-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="kr-dish-body">
                <span className="kr-dish-tag">{d.tag}</span>
                <h3 className="kr-dish-name">{d.name}</h3>
                <p className="kr-dish-note">{d.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="kr-feast-fig">
          <img
            src="/section-1.webp"
            alt="Pečené maso a chléb na dřevěném prkně ve světle svící"
            width={1200}
            height={800}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="kr-about" aria-labelledby="about-title">
        <figure className="kr-about-fig">
          <img
            src="/section-2.webp"
            alt="Klenutý sál krčmy s dlouhými dřevěnými stoly a světlem ohně"
            width={1200}
            height={900}
            loading="lazy"
          />
        </figure>
        <div className="kr-about-body">
          <p className="kr-eyebrow kr-eyebrow-dark">O krčmě</p>
          <h2 id="about-title" className="kr-h2">
            Kus Brna, kde se čas
            <br />
            posunul o pár století
          </h2>
          <p className="kr-about-text">
            Sejdeš dolů z brněnské ulice a nahoře necháš dnešek. Klenutý strop,
            svíce místo displejů, dlouhé stoly, u kterých se sedí bok po boku
            s cizími lidmi — a než dojíš, jsou z nich známí. Hodí se na
            oslavu, sraz družiny i večer, kdy chceš jen sedět u ohně.
          </p>
          <dl className="kr-facts">
            <div className="kr-fact">
              <dt>Kde nás najdeš</dt>
              <dd>V centru Brna, v klenutém sklepení</dd>
            </div>
            <div className="kr-fact">
              <dt>Kdy máme otevřeno</dt>
              <dd>Středa až sobota, 16–24</dd>
            </div>
            <div className="kr-fact">
              <dt>Stůl pro družinu</dt>
              <dd>Velké stoly na 10 i více zamluvíme rádi</dd>
            </div>
          </dl>
          <div className="kr-about-cta">
            <a className="kr-btn kr-btn-primary" href="tel:+420722000063">
              Zavolat a zamluvit stůl
            </a>
            <a className="kr-btn kr-btn-line" href="mailto:info@stredovekakrcma.cz">
              Napsat na e-mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
