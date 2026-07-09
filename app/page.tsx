import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-železářství — nářadí EXTOL skladem, odeslání ihned | Praha",
  description:
    "Ruční, aku i motorové nářadí značky EXTOL a další. 90 % sortimentu skladem, odeslání ihned z Prahy. Poradíme, co si na tu práci pořídit.",
  openGraph: {
    title: "E-železářství — nářadí EXTOL skladem",
    description:
      "90 % sortimentu skladem, odeslání ihned. Ruční, aku i motorové nářadí. Provozovna u Prahy.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const oddeleni = [
  {
    kod: "AKU",
    nazev: "Aku nářadí",
    popis:
      "Vrtačky, utahováky a pily na systému SHARE20V — jedna baterie do celé dílny.",
    prikladZbozi: "EXTOL pila přímočará aku, BRUSHLESS",
  },
  {
    kod: "EL",
    nazev: "Elektrické nářadí",
    popis:
      "Míchadla, brusky, sekací kladiva SDS MAX. Do řemesla i na stavbu, denně v provozu.",
    prikladZbozi: "EXTOL PREMIUM kladivo sekací SDS MAX, 15 J",
  },
  {
    kod: "RU",
    nazev: "Ruční nářadí",
    popis:
      "Kleště, paličky, škrabky, odizolovače. Věci, které chytnete do ruky a hned pracují.",
    prikladZbozi: "TOTAL kleště odizolovací / krimpovací industrial",
  },
  {
    kod: "MO",
    nazev: "Motorové stroje",
    popis:
      "Zahradní a lesní technika. Na sezónu i na celý pozemek — s díly a servisem.",
    prikladZbozi: "Motorové stroje EXTOL a Kreator",
  },
  {
    kod: "SP",
    nazev: "Spojovací materiál",
    popis:
      "Vruty, hmoždinky, kotvy RAWLPLUG. Krabice i kusově — dokup přesně to, co chybí.",
    prikladZbozi: "RAWLPLUG kotvy a hmoždinky",
  },
  {
    kod: "KZ",
    nazev: "Kování a zámky",
    popis:
      "Panty, zámky, kliky. Ke dveřím i k vratům, aby to drželo a zamklo.",
    prikladZbozi: "Kování a zámky pro dům i dílnu",
  },
];

const rady = [
  {
    znacka: "EXTOL CRAFT",
    trida: "Kutil",
    popis:
      "Za hobby cenu to nejlepší, co jde v téhle kategorii pořídit. Na víkendovou práci kolem domu.",
  },
  {
    znacka: "EXTOL PREMIUM",
    trida: "Master",
    popis:
      "Důraz na materiály, zpracování a ergonomii. Ne cena za každou cenu — nářadí, které vydrží.",
  },
  {
    znacka: "EXTOL INDUSTRIAL",
    trida: "Profi",
    popis:
      "Pro denní profesionální nasazení. Robustní konstrukce po zátěžových testech, do průmyslu.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      {/* HERO */}
      <header className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Železářství &amp; nářadí · Všestary u&nbsp;Prahy
            </p>
            <h1 className="wordmark" aria-label="E-železářství">
              <span className="wordmark__e">E-</span>
              <span className="wordmark__rest">železářství</span>
            </h1>
            <p className="lede">
              Nářadí EXTOL na dosah ruky. <strong>90&nbsp;% sortimentu
              máme skladem</strong> a odesíláme ho ještě ten den — od paličky
              za stovku po sekací kladivo do průmyslu.
            </p>
            <div className="hero__meta" role="list">
              <div className="metacard" role="listitem">
                <span className="metacard__num">90&nbsp;%</span>
                <span className="metacard__lbl">sortimentu skladem</span>
              </div>
              <div className="metacard" role="listitem">
                <span className="metacard__num">3</span>
                <span className="metacard__lbl">řady od kutila po profi</span>
              </div>
              <div className="metacard" role="listitem">
                <span className="metacard__num">0&nbsp;Kč</span>
                <span className="metacard__lbl">doprava nad limit</span>
              </div>
            </div>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#oddeleni">
                Vybrat nářadí
              </a>
              <a className="btn btn--ghost" href="tel:+420323605843">
                Zavolat na prodejnu
              </a>
            </div>
          </div>

          <figure className="hero__figure">
            <img
              className="hero__img"
              src="/hero.webp"
              alt="Nářadí EXTOL srovnané v regálech železářství"
              width={880}
              height={1000}
            />
            <figcaption className="hero__tag">
              <span className="hero__tag-kod">AKCE DNE</span>
              EXTOL míchadlo stavebních směsí, 1800&nbsp;W
              <span className="hero__tag-cena">
                <s>3&nbsp;350&nbsp;Kč</s> 2&nbsp;581&nbsp;Kč
              </span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ODDĚLENÍ */}
      <section className="sec sec--oddeleni" id="oddeleni" aria-labelledby="oddeleni-h">
        <div className="sec__head">
          <p className="sec__eyebrow">Regály prodejny</p>
          <h2 className="sec__title" id="oddeleni-h">
            Šest oddělení, ve kterých se vyznáte
          </h2>
          <p className="sec__intro">
            Sortiment jsme rozdělili tak, jak ho hledáte v dílně — od aku
            nářadí po spojovací materiál. U každého oddělení najdete, co se
            v&nbsp;něm prodává nejvíc.
          </p>
        </div>

        <ul className="deps">
          {oddeleni.map((o) => (
            <li className="dep" key={o.kod}>
              <span className="dep__kod" aria-hidden="true">
                {o.kod}
              </span>
              <h3 className="dep__nazev">{o.nazev}</h3>
              <p className="dep__popis">{o.popis}</p>
              <p className="dep__priklad">
                <span className="dep__priklad-lbl">Skladem např.</span>
                {o.prikladZbozi}
              </p>
            </li>
          ))}
        </ul>

        <figure className="sec__banner">
          <img
            src="/section-1.webp"
            alt="Vystavené elektrické a aku nářadí EXTOL v prodejně"
            width={1200}
            height={520}
          />
        </figure>
      </section>

      {/* RADY EXTOL / DŮVĚRA */}
      <section className="sec sec--rady" aria-labelledby="rady-h">
        <div className="sec__head">
          <p className="sec__eyebrow">Proč u nás EXTOL</p>
          <h2 className="sec__title" id="rady-h">
            Tři řady — poradíme, která je na vaši práci
          </h2>
          <p className="sec__intro">
            EXTOL dělá jedno nářadí ve třech úrovních. Rozdíl není v ceně,
            ale v tom, jak často a jak tvrdě ho budete používat. Řekneme
            vám, kterou zvolit — a nepřeprodáme vám profi stroj na věšení
            poličky.
          </p>
        </div>

        <div className="rady">
          {rady.map((r, i) => (
            <article className="rada" key={r.znacka}>
              <span className="rada__idx" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="rada__body">
                <p className="rada__trida">{r.trida}</p>
                <h3 className="rada__znacka">{r.znacka}</h3>
                <p className="rada__popis">{r.popis}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="trust">
          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Detail ručního nářadí a spojovacího materiálu na pultu železářství"
              width={900}
              height={720}
            />
          </figure>
          <div className="trust__copy">
            <h3 className="trust__title">Kamenná prodejna, ne jen e-shop</h3>
            <p className="trust__text">
              Nejsme anonymní sklad. Nářadí si u nás můžete osahat,
              přijít na radu i vyzvednout objednávku osobně. Když něco
              zlobí, řešíme reklamaci s vámi tváří v tvář.
            </p>
            <dl className="trust__facts">
              <div className="fact">
                <dt>Provozovna</dt>
                <dd>Říčanská 29, Všestary 251&nbsp;63</dd>
              </div>
              <div className="fact">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420323605843">+420&nbsp;323&nbsp;60&nbsp;58&nbsp;43</a>
                </dd>
              </div>
              <div className="fact">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@e-zelezarstvi.cz">info@e-zelezarstvi.cz</a>
                </dd>
              </div>
              <div className="fact">
                <dt>Odeslání</dt>
                <dd>Skladové zboží ještě týž den</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
