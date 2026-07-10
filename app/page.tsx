import type { CSSProperties } from "react";

export default function Page() {
  const trades = [
    {
      no: "01",
      name: "Polygrafická výroba",
      medium: "papír · karton · fólie",
      body: "Digitální, velkoformátový i ofsetový tisk pod jednou střechou. CNC frézy, plotry, kašírka, laminátory i šicí dílna na textil. Zakázku nikam neposíláme — tiskneme, ořežeme a kompletujeme u nás v Brně.",
    },
    {
      no: "02",
      name: "Polepy vozidel",
      medium: "litá fólie · celopolep",
      body: "Od návrhu po aplikaci na míru karoserie. Litá fólie, která drží roky a nezvedá se v rozích. Auto přivezete čisté, odjíždíte s celopolepem, který si lidé přečtou i na křižovatce.",
    },
    {
      no: "03",
      name: "Reklama na MHD",
      medium: "tramvaje · autobusy",
      body: "Spolehlivý partner dopravních podniků po celé ČR. Tisk, instalace i pronájem velkoplošné mobilní reklamy. Vaše kampaň jezdí po Brně i po dalších městech — a je vidět z chodníku.",
    },
    {
      no: "04",
      name: "Výstavní systémy",
      medium: "roll‑up · LED · stánky",
      body: "Roll‑upy, fotostěny, výstavní stánky a LED panely skladem. Kvalitní hliník, snadná montáž a servis ke každému kusu. Na veletrh dorazíte, zapíchnete a stojíte za pár minut.",
    },
  ];

  return (
    <main className="kg">
      <header className="kg-nav">
        <a className="kg-mark" href="#top" aria-label="Kangaroo group — výroba reklam Brno">
          <span className="kg-mark__jump">Kangaroo</span>
          <span className="kg-mark__group">group</span>
        </a>
        <span className="kg-nav__loc">Výroba reklam · Brno</span>
      </header>

      <section className="kg-hero" id="top">
        <div className="kg-hero__media">
          <img
            src="/hero.webp"
            alt="Velkoformátový tisk a výroba reklamy ve výrobní hale Kangaroo group v Brně"
            width={1600}
            height={1000}
          />
        </div>
        <div className="kg-hero__panel">
          <p className="kg-eyebrow">Reklamní tiskárna &amp; výrobna · od roku 1993</p>
          <h1 className="kg-hero__title">
            Reklamu<br />
            <span className="kg-hero__accent">vyrobíme</span><br />
            u nás.
          </h1>
          <p className="kg-hero__lead">
            Od nápadu po hotový polep, banner nebo stánek — všechno se stane ve
            vlastní hale v Brně. Nic nedáváme dál, a proto víme, co vám odjíždí
            z dílny.
          </p>
          <div className="kg-hero__cta">
            <a className="kg-btn" href="#remesla">Prohlédnout výrobu</a>
            <a className="kg-btn kg-btn--ghost" href="tel:+420664530000">Zavolat do dílny</a>
          </div>
        </div>
      </section>

      <section className="kg-trades" id="remesla" aria-labelledby="remesla-h">
        <div className="kg-trades__head">
          <p className="kg-eyebrow">Co u nás vzniká</p>
          <h2 className="kg-section-title" id="remesla-h">
            Čtyři dílny, jedna adresa
          </h2>
          <p className="kg-section-sub">
            Reklama je řemeslo se strojem na konci. Tady jsou stroje, které to
            umí — a lidé, kteří u nich stojí.
          </p>
        </div>
        <ol className="kg-trades__list">
          {trades.map((t) => (
            <li className="kg-trade" key={t.no}>
              <span className="kg-trade__no" aria-hidden="true">{t.no}</span>
              <div className="kg-trade__text">
                <h3 className="kg-trade__name">{t.name}</h3>
                <p className="kg-trade__medium">{t.medium}</p>
                <p className="kg-trade__body">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="kg-trust" aria-labelledby="trust-h">
        <div className="kg-trust__media">
          <img
            src="/section-1.webp"
            alt="Detail polepu vozidla a velkoformátové tiskoviny z dílny Kangaroo group"
            width={1200}
            height={900}
          />
        </div>
        <div className="kg-trust__body">
          <p className="kg-eyebrow">Proč právě my</p>
          <h2 className="kg-section-title" id="trust-h">
            Značky u nás nechávají reklamu, se&nbsp;kterou&nbsp;se&nbsp;počítá
          </h2>
          <p className="kg-trust__lead">
            Pomáháme značkám i začínajícím firmám růst — od komunikační
            strategie přes tisk až po instalaci. Kampaň neskončí návrhem
            v počítači: vytiskneme ji, nalepíme a postavíme.
          </p>
          <dl className="kg-facts">
            <div className="kg-fact">
              <dt>Vlastní výroba</dt>
              <dd>Tisk, ořez, konfekce i montáž pod jednou střechou v Brně.</dd>
            </div>
            <div className="kg-fact">
              <dt>MHD po celé ČR</dt>
              <dd>Stálý partner dopravních podniků — tisk, instalace, pronájem.</dd>
            </div>
            <div className="kg-fact">
              <dt>Servis ke každé zakázce</dt>
              <dd>Ke stánkům, systémům i polepům, ať kampaň vydrží.</dd>
            </div>
          </dl>
          <figure className="kg-quote">
            <img
              src="/section-2.webp"
              alt="Realizovaná velkoplošná reklama Kangaroo group na tramvaji v Brně"
              width={1200}
              height={800}
            />
            <blockquote>
              „Zadali jsme kampaň v pátek, v úterý nám jezdila po Brně na
              tramvaji. Že si vše vyrábí sami, poznáte na termínu i&nbsp;na
              detailu.“
            </blockquote>
            <figcaption>— marketing regionálního klienta</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
