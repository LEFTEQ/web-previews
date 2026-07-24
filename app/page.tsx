import { AiImage } from "./_ui";

const menu = [
  {
    kat: "Z pánve",
    hod: "11:00–14:00 polední menu",
    items: [
      { n: "Hovězí líčka na kořenové zelenině, bramborová kaše", c: "289 Kč" },
      { n: "Smažený řízek z krkonošského vepře, okurkový salát", c: "245 Kč" },
      { n: "Pstruh z Jizerských hor, máslo, petrželka, brambory", c: "310 Kč" },
    ],
  },
  {
    kat: "Ze zahrádky",
    hod: "celý den",
    items: [
      { n: "Kulajda s křepelčím vejcem a koprem", c: "98 Kč" },
      { n: "Pečená dýně, kozí sýr z Podještědí, dýňová semínka", c: "195 Kč" },
      { n: "Bramborové noky, špenát, uzený tvaroh", c: "210Kč" },
    ],
  },
  {
    kat: "K pivu na baru",
    hod: "do 23:00",
    items: [
      { n: "Nakládaný hermelín a topinka z domácího chleba", c: "129 Kč" },
      { n: "Utopenec, cibule, hořčice", c: "95 Kč" },
      { n: "Svickova tatarka a 6 topinek", c: "265 Kč" },
    ],
  },
];

const hodiny = [
  { den: "Pondělí – čtvrtek", cas: "11:00 – 23:00" },
  { den: "Pátek", cas: "11:00 – 01:00" },
  { den: "Sobota", cas: "12:00 – 01:00" },
  { den: "Neděle", cas: "12:00 – 22:00" },
];

export default function Page() {
  return (
    <main className="pg">
      {/* ——— HERO ——— */}
      <header className="pg-hero" id="uvod">
        <div className="pg-hero__grid">
          <div className="pg-hero__type">
            <p className="pg-eyebrow">Bar Šaldovka&nbsp;· restaurace v Hotelu Liberec</p>
            <h1 className="pg-wordmark">
              <span className="pg-wordmark__l pg-wordmark__l--1">HOTEL</span>
              <span className="pg-wordmark__l pg-wordmark__l--2">LIBEREC</span>
            </h1>
            <p className="pg-hero__lead">
              Kuchyně v přízemí hotelu na Šaldově náměstí. Vaříme z toho, co doveze
              řezník z Podještědí a zelinář z tržnice — a čepujeme do půlnoci.
              Stůl si rezervujete na dvě kliknutí, i z telefonu.
            </p>
            <div className="pg-hero__cta">
              <a className="pg-btn pg-btn--primary" href="#rezervace">
                Rezervovat stůl
              </a>
              <a className="pg-btn pg-btn--ghost" href="#menu">
                Prohlédnout menu
              </a>
            </div>
          </div>

          <figure className="pg-hero__fig">
            <AiImage
              className="pg-hero__img"
              src="/hero.webp"
              alt="Večerní bar Šaldovka v Hotelu Liberec — mosazné madlo baru, pípa a stolky u okna"
            />
            <figcaption className="pg-hero__cap">
              Bar Šaldovka po osmé — výhled na osvětlený Ještěd z oken v přízemí.
            </figcaption>
          </figure>
        </div>

        {/* signature: Šaldovka rail */}
        <div className="rail rail--hero" aria-hidden="true">
          <svg className="rail__svg" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <defs>
              <linearGradient id="railGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#b98b3c" />
                <stop offset="62%" stopColor="#b98b3c" />
                <stop offset="100%" stopColor="#1f7a7d" />
              </linearGradient>
            </defs>
            <path
              className="rail__path"
              d="M0 30 H820 L860 7 H1200"
              fill="none"
              stroke="url(#railGrad)"
              strokeWidth="6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className="rail__dot" />
        </div>
      </header>

      {/* ——— SEKCE 1: menu / provoz ——— */}
      <section className="pg-sec pg-sec--menu" id="menu" aria-labelledby="h-menu">
        <div className="pg-sec__split">
          <div className="pg-sec__display">
            <p className="pg-eyebrow pg-eyebrow--dark">Kuchyně &amp; bar</p>
            <h2 className="pg-h2" id="h-menu">
              Co dnes<br />vaříme
            </h2>
            <p className="pg-sec__note">
              Lístek měníme každý týden podle sezóny. Polední menu vydáváme
              do 14:00, do posledního hosta pak vaříme z hlavního lístku.
              Bezlepkovou i bezmasou úpravu řekněte obsluze — kuchař ji zvládne
              u většiny jídel.
            </p>

            <figure className="pg-fig pg-fig--reveal">
              <AiImage
                className="pg-fig__img"
                src="/section-1.webp"
                alt="Talíř hovězích líček s bramborovou kaší připravený v kuchyni restaurace Hotelu Liberec"
              />
            </figure>
          </div>

          <div className="pg-sec__dense">
            {menu.map((g) => (
              <div className="pg-menu" key={g.kat}>
                <div className="pg-menu__head">
                  <h3 className="pg-menu__kat">{g.kat}</h3>
                  <span className="pg-menu__hod">{g.hod}</span>
                </div>
                <ul className="pg-menu__list">
                  {g.items.map((it) => (
                    <li className="pg-menu__item" key={it.n}>
                      <span className="pg-menu__n">{it.n}</span>
                      <span className="pg-menu__c">{it.c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="pg-hours" id="rezervace">
              <h3 className="pg-menu__kat pg-menu__kat--hours">Otevřeno</h3>
              <dl className="pg-hours__list">
                {hodiny.map((h) => (
                  <div className="pg-hours__row" key={h.den}>
                    <dt>{h.den}</dt>
                    <dd>{h.cas}</dd>
                  </div>
                ))}
              </dl>
              <a className="pg-btn pg-btn--primary pg-btn--wide" href="tel:+420000000000">
                Zavolat a rezervovat stůl
              </a>
              <p className="pg-hours__tel">
                tel — · e-mail —
                <br />
                Velké skupiny nad 10 osob řešíme telefonicky den předem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— SEKCE 2: o nás / důvěra ——— */}
      <section className="pg-sec pg-sec--dum" aria-labelledby="h-dum">
        <div className="pg-sec__split pg-sec__split--rev">
          <div className="pg-sec__display">
            <p className="pg-eyebrow">Dům, ve kterém vaříme</p>
            <h2 className="pg-h2 pg-h2--light" id="h-dum">
              Od roku<br />1988v centru
            </h2>
            <p className="pg-sec__note pg-sec__note--light">
              Hotel Liberec vyrostl technikou zvedaných stropů — v republice
              jich takhle stojí pár. První hosté se ubytovali v neděli
              7. června 1988. Restaurace a bar Šaldovka jsou v přízemí,
              otevřené i lidem z ulice: na oběd, na pivo po práci,
              na večeři před Ještědem.
            </p>

            <ul className="pg-facts">
              <li className="pg-facts__i">
                <span className="pg-facts__k">Parking</span>
                <span className="pg-facts__v">Uzavřené stání pod kamerami, pro hosty restaurace první 2 hodiny zdarma</span>
              </li>
              <li className="pg-facts__i">
                <span className="pg-facts__k">Sály</span>
                <span className="pg-facts__v">Tři salonky, rauty a firemní večeře až pro 100 osob, catering podle vašeho rozpočtu</span>
              </li>
              <li className="pg-facts__i">
                <span className="pg-facts__k">Pěšky</span>
                <span className="pg-facts__v">5 minut na radnici, 8 minut na tramvaj k Ještědu</span>
              </li>
            </ul>
          </div>

          <div className="pg-sec__dense">
            <figure className="pg-fig pg-fig--reveal">
              <AiImage
                className="pg-fig__img pg-fig__img--tall"
                src="/section-2.webp"
                alt="Restaurace Hotelu Liberec — prostřené stoly u velkých oken s výhledem do centra města"
              />
            </figure>

            <blockquote className="pg-quote">
              <p>
                „Profesionální a ochotný personál, čisté a dobře vybavené pokoje.
                Do restaurace jsme chodili i na obědy — kulajda a líčka byly
                lepší než v podnicích na náměstí.“
              </p>
              <cite>Ověřené hodnocení hosta, srpen 2024</cite>
            </blockquote>

            <div className="pg-tiles">
              <div className="pg-tile">
                <span className="pg-tile__k">Polední menu</span>
                <span className="pg-tile__v">od 159 Kč včetně polévky</span>
              </div>
              <div className="pg-tile">
                <span className="pg-tile__k">Na čepu</span>
                <span className="pg-tile__v">Svijany 11°, ležák z Vratislavic, nealko cider</span>
              </div>
              <div className="pg-tile">
                <span className="pg-tile__k">Pro firmy</span>
                <span className="pg-tile__v">Sál od 900 Kč/hod, coffee break 145 Kč/os.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
