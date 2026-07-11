import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ondřej Vladyka — zakázkové truhlářství Plzeň",
  description:
    "Rodinné zakázkové truhlářství v Plzni. Kuchyně, vestavěné skříně, schodiště a designový nábytek na míru z masivu. Řemeslo předávané z generace na generaci.",
  openGraph: {
    title: "Ondřej Vladyka — zakázkové truhlářství Plzeň",
    description:
      "Kuchyně, vestavěné skříně, schodiště a nábytek na míru z masivu. Rodinné truhlářství v Plzni.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const dilny = [
  {
    kod: "01",
    nazev: "Kuchyně na míru",
    popis:
      "Od zaměření po montáž. Tři řady podle rozpočtu — Economic, Comfort a designová OVplus — a vždycky dřevo, kování a fronty, které si osaháte předem.",
    materialy: ["dub", "jasan", "lakovaná MDF", "masivní čela"],
  },
  {
    kod: "02",
    nazev: "Vestavěné skříně",
    popis:
      "Skříně přesně do šikmin, výklenků a půdních prostor, kde katalogový nábytek končí. Vyměříme centimetr po centimetru, aby nezbyla škvíra.",
    materialy: ["lamino", "posuvné dveře", "vnitřní organizace"],
  },
  {
    kod: "03",
    nazev: "Schodiště a renovace",
    popis:
      "Nové dřevěné schodiště i oprava starého — stupně, madla, obklady betonových schodů. Renovujeme i nábytek po babičce, ať slouží dál.",
    materialy: ["buk", "dub", "broušení", "olej / lak"],
  },
  {
    kod: "04",
    nazev: "Nábytek na míru",
    popis:
      "Komoda, stůl, postel i vyřezávaná soška. Rozměry, které jinde ani nenačrtnou. Řekněte, co potřebujete — my to nakreslíme a vyrobíme.",
    materialy: ["masiv", "dýha", "kov + dřevo"],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Ondřej Vladyka, zakázkové truhlářství">
          <span className="wordmark__mono">OV</span>
          <span className="wordmark__name">
            <strong>Vladyka</strong>
            <em>truhlářství · Plzeň</em>
          </span>
        </a>
        <a className="top__call" href="tel:+420777081792">
          <span className="top__callLabel">Volejte dílnu</span>
          777&nbsp;081&nbsp;792
        </a>
      </header>

      <section className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Ruční práce v truhlářské dílně Ondřeje Vladyky — masivní dřevo, hoblina a nářadí"
            width={1600}
            height={1000}
          />
          <div className="hero__grain" aria-hidden="true" />
        </div>

        <div className="hero__text">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Rodinné řemeslo od dvacátých let minulého století
          </p>
          <h1 className="hero__title">
            Dřevo, které <span className="hl">sedne</span> na milimetr —
            protože se měří u vás doma.
          </h1>
          <p className="hero__lede">
            Jsem Ondřej Vladyka a v Plzni dělám nábytek na zakázku už přes
            dvacet let. Žádná katalogová řada, žádné „skoro pasuje“. Přijedu,
            zaměřím, poradím s materiálem — a vyrobím kus, který v tom prostoru
            vydrží další generaci.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420777081792">
              Zavolat do dílny
            </a>
            <a className="btn btn--ghost" href="#dilna">
              Co dělám
            </a>
          </div>

          <dl className="hero__facts">
            <div>
              <dt>Kde</dt>
              <dd>Plzeň a okolí</dd>
            </div>
            <div>
              <dt>Co</dt>
              <dd>Kuchyně · skříně · schody</dd>
            </div>
            <div>
              <dt>Jak</dt>
              <dd>Na míru, z masivu</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="work" id="dilna" aria-labelledby="work-title">
        <div className="work__head">
          <h2 id="work-title" className="section-title">
            Čtyři věci, ke&nbsp;kterým mě lidi v&nbsp;Plzni volají
          </h2>
          <p className="section-note">
            Každou zakázku vede jeden vyučený truhlář od zaměření po montáž.
            Dřevo bereme od prověřených dodavatelů — něco z Česka, něco ze
            zahraničí, vždy to, co se k práci hodí.
          </p>
        </div>

        <ol className="cards">
          {dilny.map((d) => (
            <li className="card" key={d.kod}>
              <span className="card__kod" aria-hidden="true">
                {d.kod}
              </span>
              <h3 className="card__title">{d.nazev}</h3>
              <p className="card__text">{d.popis}</p>
              <ul className="chips" aria-label="Materiály a postup">
                {d.materialy.map((m) => (
                  <li className="chip" key={m}>
                    {m}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="work__figure">
          <img
            src="/section-1.webp"
            alt="Hotová kuchyně na míru z dílny Vladyka — dřevěné fronty a preciznní spáry"
            width={1400}
            height={900}
          />
          <figcaption>
            Kuchyně řady OVplus — čela z masivu, spáry, které jdou rukou
            přejet a nezavadíte.
          </figcaption>
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Ondřej Vladyka při práci ve své truhlářské dílně v Plzni"
              width={1200}
              height={1400}
            />
          </figure>

          <div className="trust__body">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              O dílně
            </p>
            <h2 id="trust-title" className="section-title">
              Poctivost, důvěra, motivace — hesla, se&nbsp;kterými chodím do dílny každý den.
            </h2>
            <p className="trust__text">
              Truhlářská tradice v naší rodině sahá až do dvacátých let minulého
              století a zkušenosti si tu předáváme z generace na generaci. Za
              dvacet let na trhu jsem si vypiloval dvě věci: síť spolehlivých
              dodavatelů dřeva a tým vyučených lidí, kterým můžu předat i tu
              nejtěžší zakázku. Plzeň je můj domov — ale dělám dnes i za jejími
              hranicemi, ba i za hranicemi republiky.
            </p>

            <ul className="letters">
              <li>
                <span className="letters__mark">P</span>
                <span>
                  <strong>Poctivost</strong> — cena i termín, jak jsme si
                  plácli. Žádné dodatky na poslední chvíli.
                </span>
              </li>
              <li>
                <span className="letters__mark">D</span>
                <span>
                  <strong>Důvěra</strong> — přes dvacet let a stále stejní
                  zákazníci, kteří se vrací a doporučují dál.
                </span>
              </li>
              <li>
                <span className="letters__mark">M</span>
                <span>
                  <strong>Motivace</strong> — každý hotový kus je moje vizitka.
                  Proto se u nás nešidí.
                </span>
              </li>
            </ul>

            <div className="trust__contact">
              <a className="btn btn--primary" href="tel:+420777081792">
                Zavolat 777&nbsp;081&nbsp;792
              </a>
              <a className="btn btn--ghost" href="mailto:ovladyka@centrum.cz">
                Napsat na e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
