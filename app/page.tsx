export default function Page() {
  const koupele = [
    {
      cislo: "I",
      nazev: "Pivní lázeň",
      surovina: "chmel · slad · pivní kvasnice",
      popis:
        "Teplá koupel z chmelového výluhu a pivních kvasnic. Vůně sladu, tělo v páře, půllitr na dosah. Prohřeje záda i náladu — ostravsky, bez ceremonií.",
      teplota: "36 °C",
    },
    {
      cislo: "II",
      nazev: "Vinná lázeň",
      surovina: "hroznové výlisky · réva · med",
      popis:
        "Koupel z hroznových výlisků a révového extraktu. Kůže po ní jako po sklizni — vláčná, prokrvená. Sklenka moravského k tomu patří.",
      teplota: "37 °C",
    },
    {
      cislo: "III",
      nazev: "Andělská koupel s čertovským pitím",
      surovina: "citrusy · mořská sůl · jehličí",
      popis:
        "Osvěžení citrusů, mořské soli a svěžího jehličí. Dva lidé, jedna vana, míchané drinky podle chuti. Nebe i peklo v jedné kádi.",
      teplota: "35 °C",
    },
  ];

  const masaze = [
    {
      partie: "Záda a šíje",
      bylina: "dračí krev, kostival",
    },
    {
      partie: "Nohy a chodidla",
      bylina: "měsíček lékařský, konopí",
    },
    {
      partie: "Krční páteř a hlava",
      bylina: "úleva od stresu a migrén",
    },
    {
      partie: "Celé tělo",
      bylina: "únava, lymfa, stres",
    },
  ];

  return (
    <main className="stod">
      <header className="stod-nav">
        <a className="stod-mark" href="#" aria-label="Pivní a vinné lázně Stodolní, Ostrava">
          <span className="stod-mark__top">Pivní &amp; vinné lázně</span>
          <span className="stod-mark__big">STODOLNÍ</span>
        </a>
        <a className="stod-nav__tel" href="tel:+420734414400">
          +420 734 414 400
        </a>
      </header>

      <section className="stod-hero">
        <div className="stod-hero__media">
          <img
            src="/hero.webp"
            alt="Dřevěná koupelová káď plněná pivní lázní ve wellness Stodolní v Ostravě"
            className="stod-hero__img"
          />
          <div className="stod-hero__wash" aria-hidden="true" />
        </div>

        <div className="stod-hero__body">
          <p className="stod-eyebrow">Pobialova 819/14 · Moravská Ostrava</p>
          <h1 className="stod-hero__h">
            Vlezte do <em>kádě</em> plné chmele.
            <br />
            Zbytek přenecháte páře.
          </h1>
          <p className="stod-hero__lead">
            Pivní a vinné lázně kousek od Stodolní. Teplá koupel z chmele nebo
            hroznů, poctivá masáž a půllitr, který si držíte i ve vaně. Relax po
            ostravsku — bez uspěchanosti, bez pozlátka.
          </p>
          <div className="stod-hero__cta">
            <a className="stod-btn" href="tel:+420734414400">
              Zavolat a objednat se
            </a>
            <span className="stod-hero__hours">
              Objednávky po–pá 9–15 h
            </span>
          </div>
        </div>
      </section>

      <section className="stod-sec" id="kdo" aria-labelledby="kdo-h">
        <div className="stod-sec__head">
          <p className="stod-eyebrow">Kdo tu vaří vodu</p>
          <h2 className="stod-h2" id="kdo-h">
            Malé lázně na dosah tramvaje. Vše na objednávku, jen pro vás.
          </h2>
        </div>
        <div className="stod-about">
          <div className="stod-about__media">
            <img
              src="/section-1.webp"
              alt="Zátiší z lázní Stodolní — chmel, sklad a připravená vinná lázeň"
              className="stod-about__img"
            />
          </div>
          <div className="stod-about__text">
            <p>
              Nejsme obří wellness s pásovou výrobou relaxu. Když si u nás
              zamluvíte lázeň, patří ta vana i ta místnost jen vám a lidem, které
              si vezmete s sebou. Žádné čekání ve froté frontě.
            </p>
            <p>
              Koupele mícháme z toho, co má opravdový smysl na kůži: chmel a slad
              do pivní, hroznové výlisky do vinné, bylinné extrakty do masáží.
              Zavoláte, domluvíme čas — a nachystáme přesně vaši variantu.
            </p>
            <dl className="stod-facts">
              <div className="stod-facts__row">
                <dt>Kde</dt>
                <dd>Pobialova 819/14, Moravská Ostrava</dd>
              </div>
              <div className="stod-facts__row">
                <dt>Kdy</dt>
                <dd>Dle objednávky, víkendy omezeně</dd>
              </div>
              <div className="stod-facts__row">
                <dt>Objednávky</dt>
                <dd>
                  <a href="tel:+420734414400">+420 734 414 400</a> ·{" "}
                  <a href="mailto:laznestodolni@gmail.com">
                    laznestodolni@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="stod-sec stod-sec--dark" id="nabidka" aria-labelledby="nab-h">
        <div className="stod-sec__head">
          <p className="stod-eyebrow stod-eyebrow--light">Ceník ve zkratce</p>
          <h2 className="stod-h2 stod-h2--light" id="nab-h">
            Tři koupele a masáž na míru
          </h2>
        </div>

        <ul className="stod-koupele" role="list">
          {koupele.map((k) => (
            <li className="stod-card" key={k.nazev}>
              <div className="stod-card__num" aria-hidden="true">
                {k.cislo}
              </div>
              <div className="stod-card__body">
                <h3 className="stod-card__h">{k.nazev}</h3>
                <p className="stod-card__ingr">{k.surovina}</p>
                <p className="stod-card__desc">{k.popis}</p>
              </div>
              <div className="stod-card__meta">{k.teplota}</div>
            </li>
          ))}
        </ul>

        <div className="stod-mas">
          <div className="stod-mas__media">
            <img
              src="/section-2.webp"
              alt="Masáž s bylinnými extrakty v lázních Stodolní"
              className="stod-mas__img"
            />
          </div>
          <div className="stod-mas__text">
            <p className="stod-eyebrow stod-eyebrow--light">Sezónní nabídka</p>
            <h3 className="stod-mas__h">
              30 minut masáže <span>349 Kč</span>
            </h3>
            <p className="stod-mas__lead">
              Cílená masáž přesně na to, co vás bolí. Vyberte si partii —
              zkombinovat můžete i víc.
            </p>
            <ul className="stod-mas__list" role="list">
              {masaze.map((m) => (
                <li key={m.partie}>
                  <span className="stod-mas__part">{m.partie}</span>
                  <span className="stod-mas__herb">{m.bylina}</span>
                </li>
              ))}
            </ul>
            <a className="stod-btn stod-btn--light" href="tel:+420734414400">
              Objednat masáž
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
