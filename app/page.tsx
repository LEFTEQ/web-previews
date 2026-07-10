import type { CSSProperties } from "react";

const sluzby = [
  {
    kod: "SP-01",
    nazev: "Pátrání po osobách a majetku",
    popis:
      "Hledáme dlužníky, nezvěstné příbuzné i pohřešované věci. Prověříme adresu, zaměstnavatele a majetkové poměry — vždy s protokolem, který obstojí u soudu.",
    stopa: "Zjištění pobytu · lustrace · dohledání majetku",
  },
  {
    kod: "SP-02",
    nazev: "Sledování a monitoring",
    popis:
      "Diskrétní sledování v terénu i statické pozorování. Nevěra, konkurenční jednání, zneužití pracovní neschopnosti — zdokumentujeme, co se skutečně děje.",
    stopa: "Foto · video · časová osa pohybu",
  },
  {
    kod: "SP-03",
    nazev: "Prověrky firem a partnerů",
    popis:
      "Než podepíšete smlouvu, zjistíme, s kým jednáte. Bonita, exekuce, insolvence, historie jednatelů a napojení na další společnosti.",
    stopa: "Due diligence · rejstříky · reference",
  },
  {
    kod: "SP-04",
    nazev: "Ostraha a osobní ochrana",
    popis:
      "Fyzická ostraha objektů v Plzni a okolí i doprovod osob. Vyškolení pracovníci s koncesí, kteří vědí, kdy stačí přítomnost a kdy je třeba jednat.",
    stopa: "Objekty · akce · doprovod",
  },
];

const pravidla = [
  {
    cislo: "01",
    titul: "Mlčení je součást zakázky",
    text: "O případu ví jen ten, kdo na něm pracuje. Podklady předáváme osobně, nikdy ne cizí osobě.",
  },
  {
    cislo: "02",
    titul: "Jen legální cesta",
    text: "Pracujeme podle živnostenského a trestního práva. Co získáme, obstojí jako důkaz — ne jako problém.",
  },
  {
    cislo: "03",
    titul: "Cena předem, ne po",
    text: "Před zahájením dostanete rozsah, počet hodin a strop ceny. Žádné dodatečné překvapení na faktuře.",
  },
];

export default function Page() {
  return (
    <main className="ua">
      <header className="ua-nav" aria-label="Hlavní">
        <a className="ua-mark" href="#top" aria-label="Universalia — pátrací a bezpečnostní agentura Plzeň">
          <span className="ua-mark__u">U</span>
          <span className="ua-mark__word">UNIVERSALIA</span>
          <span className="ua-mark__sub">pátrací &amp; bezpečnostní agentura · Plzeň</span>
        </a>
        <nav className="ua-nav__links">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Jak pracujeme</a>
          <a className="ua-nav__call" href="tel:+420377000000">Zavolat diskrétně</a>
        </nav>
      </header>

      <section className="ua-hero" id="top">
        <img
          className="ua-hero__img"
          src="/hero.webp"
          alt="Noční pohled na Plzeň — město, kde agentura Universalia sleduje stopy"
        />
        <div className="ua-hero__scrim" aria-hidden="true" />
        <div className="ua-hero__inner">
          <p className="ua-hero__eyebrow">SPIS Č. — VÁŠ PŘÍPAD · PLZEŇ</p>
          <h1 className="ua-hero__title">
            Když potřebujete
            <br />
            <span className="ua-hero__accent">vědět jistě</span>,
            <br />
            ne jen tušit.
          </h1>
          <p className="ua-hero__lede">
            Universalia je pátrací a bezpečnostní agentura z Plzně. Sledujeme,
            prověřujeme a dokumentujeme — tiše, legálně a tak, aby výsledek
            obstál i před soudem.
          </p>
          <div className="ua-hero__cta">
            <a className="ua-btn" href="tel:+420377000000">
              Zavolat vyšetřovateli
            </a>
            <a className="ua-btn ua-btn--ghost" href="#sluzby">
              Co dokážeme zjistit
            </a>
          </div>
          <dl className="ua-hero__facts">
            <div>
              <dt>Působnost</dt>
              <dd>Plzeň a Plzeňský kraj</dd>
            </div>
            <div>
              <dt>Reakce na první kontakt</dt>
              <dd>do 24 hodin</dd>
            </div>
            <div>
              <dt>Diskrétnost</dt>
              <dd>písemně smluvená</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ua-sec ua-sluzby" id="sluzby">
        <div className="ua-sec__head">
          <p className="ua-sec__eyebrow">SLOŽKY SPISU</p>
          <h2 className="ua-sec__title">Čtyři věci, se kterými za námi lidé chodí</h2>
          <p className="ua-sec__intro">
            Každá zakázka dostane vlastní spisovou značku a vede ji jeden
            konkrétní člověk. Vy máte jméno, telefon a přehled — ne anonymní
            e-mailovou adresu.
          </p>
        </div>

        <div className="ua-sluzby__media">
          <img
            src="/section-1.webp"
            alt="Vyšetřovatel Universalia při práci v terénu v Plzni"
          />
        </div>

        <ol className="ua-cards">
          {sluzby.map((s) => (
            <li className="ua-card" key={s.kod}>
              <span className="ua-card__kod">{s.kod}</span>
              <h3 className="ua-card__title">{s.nazev}</h3>
              <p className="ua-card__text">{s.popis}</p>
              <p className="ua-card__stopa">{s.stopa}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ua-sec ua-duvera" id="duvera">
        <div className="ua-duvera__grid">
          <div className="ua-duvera__media">
            <img
              src="/section-2.webp"
              alt="Detail spisu a podkladů předávaných klientovi agenturou Universalia"
            />
            <p className="ua-duvera__caption">
              Každý závěr předáváme jako uspořádaný spis — fotografie, časová osa
              a písemná zpráva.
            </p>
          </div>

          <div className="ua-duvera__body">
            <p className="ua-sec__eyebrow">TŘI PRAVIDLA, KTERÁ NEPORUŠÍME</p>
            <h2 className="ua-sec__title">
              Proč klienti v Plzni věří právě nám
            </h2>
            <p className="ua-sec__intro">
              Pátrací práce stojí a padá s důvěrou. Proto máme pár zásad, které
              platí u každé zakázky bez výjimky.
            </p>

            <ol className="ua-rules">
              {pravidla.map((p) => (
                <li className="ua-rule" key={p.cislo}>
                  <span className="ua-rule__num">{p.cislo}</span>
                  <div>
                    <h3 className="ua-rule__title">{p.titul}</h3>
                    <p className="ua-rule__text">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="ua-quote">
              „Půl roku jsem se domníval, že mě partner v s.r.o. tahá za nos.
              Universalia mi za tři týdny doložila, kam mizely zakázky. Bez
              scény, jen s papíry.“
              <cite>— jednatel stavební firmy, Plzeň-sever</cite>
            </blockquote>

            <a
              className="ua-btn ua-btn--solid"
              href="tel:+420377000000"
              style={{ "--d": "0ms" } as CSSProperties}
            >
              Domluvit nezávaznou schůzku
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
