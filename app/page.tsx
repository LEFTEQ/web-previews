export default function Page() {
  return (
    <main className="mk">
      {/* ===== HERO ===== */}
      <header className="mk-hero">
        <div className="mk-hero__topbar">
          <div className="mk-wordmark" aria-label="Makovec, řeznictví">
            <span className="mk-wordmark__name">MAKOVEC</span>
            <span className="mk-wordmark__sub">řeznictví &amp; uzenářství · od 19. století</span>
          </div>
          <a className="mk-topbar__link" href="mailto:central@makovec.cz">
            central@makovec.cz
          </a>
        </div>

        <div className="mk-hero__grid">
          <div className="mk-hero__copy">
            <p className="mk-stamp" aria-hidden="true">
              <span>ČESKÉ MASO</span>
              <span>VLASTNÍ PORÁŽKA</span>
            </p>
            <h1 className="mk-hero__title">
              Maso, které má<br />
              <em>rodokmen.</em>
            </h1>
            <p className="mk-hero__lead">
              Od chovu přes vlastní porážku až po pult vaší prodejny v Brně.
              Řeznické řemeslo předáváme v rodině z generace na generaci —
              a každý kus masa u nás projde jen našima rukama.
            </p>
            <div className="mk-hero__actions">
              <a className="mk-btn mk-btn--fill" href="#prodejny">
                Najít prodejnu v Brně
              </a>
              <a className="mk-btn mk-btn--line" href="#nabidka">
                Co máme na pultě
              </a>
            </div>
          </div>

          <figure className="mk-hero__figure">
            <img
              src="/hero.webp"
              alt="Řeznický pult Makovec s čerstvým českým masem a domácími uzeninami"
              className="mk-hero__img"
            />
            <figcaption className="mk-hero__tag">
              <strong>4×&nbsp;vlastní</strong>
              <span>porážka · výroba · doprava · prodejny</span>
            </figcaption>
          </figure>
        </div>

        {/* Signature: papírová řeznická cenovka / štítková lišta */}
        <ul className="mk-ticket-rail" aria-label="Čím se řídíme">
          <li className="mk-ticket">
            <span className="mk-ticket__label">Původ</span>
            <span className="mk-ticket__value">100 % české maso</span>
          </li>
          <li className="mk-ticket">
            <span className="mk-ticket__label">Uzeniny</span>
            <span className="mk-ticket__value">bez lepku</span>
          </li>
          <li className="mk-ticket">
            <span className="mk-ticket__label">Kvalita</span>
            <span className="mk-ticket__value">KLASA · HACCP</span>
          </li>
          <li className="mk-ticket">
            <span className="mk-ticket__label">Síť</span>
            <span className="mk-ticket__value">120+ prodejen</span>
          </li>
        </ul>
      </header>

      {/* ===== SEKCE 1: NABÍDKA / PULT ===== */}
      <section className="mk-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="mk-section__head">
          <p className="mk-eyebrow">Dnes na pultě</p>
          <h2 className="mk-h2" id="nabidka-h">
            Od bourárny rovnou k vám
          </h2>
          <p className="mk-section__intro">
            Nekupujeme anonymní maso z velkoskladu. Porážíme, bouráme a udíme
            sami — proto vám u pultu řekneme, odkud každý kus je a co s ním doma udělat.
          </p>
        </div>

        <div className="mk-counter">
          <article className="mk-cut">
            <h3 className="mk-cut__name">Čerstvé maso</h3>
            <p className="mk-cut__desc">
              Vepřové a hovězí z vlastní porážky. Kýta, krkovice, svíčková —
              nabouráme vám i na přání, stačí říct u pultu.
            </p>
            <p className="mk-cut__note">Denně čerstvě naskladněno</p>
          </article>
          <article className="mk-cut">
            <h3 className="mk-cut__name">Domácí uzeniny</h3>
            <p className="mk-cut__desc">
              Šunky, klobásy, špekáčky a tlačenky podle rodinných receptur.
              Celá řada je bezlepková — vhodná i pro celiaky.
            </p>
            <p className="mk-cut__note">Uzeno v naší výrobně</p>
          </article>
          <article className="mk-cut">
            <h3 className="mk-cut__name">Poctivé polévky</h3>
            <p className="mk-cut__desc">
              Hovězí vývar, dršťková nebo gulášovka v praktickém balení 600 g.
              Vaříme z vlastního masa — doma jen ohřejete.
            </p>
            <p className="mk-cut__note">Balení 600 g, do lednice</p>
          </article>
          <article className="mk-cut">
            <h3 className="mk-cut__name">Maso na gril</h3>
            <p className="mk-cut__desc">
              Naložené krkovice, kýta na gril i marinovaná žebra.
              Připravíme podle sezóny, ať jen rozpálíte rošt.
            </p>
            <p className="mk-cut__note">Sezónní nabídka, ptejte se</p>
          </article>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / OD FARMY K PULTU ===== */}
      <section className="mk-section mk-section--dark" id="prodejny" aria-labelledby="cesta-h">
        <div className="mk-trust">
          <figure className="mk-trust__figure">
            <img
              src="/section-2.webp"
              alt="Řezník Makovec při práci s masem ve vlastní výrobně"
              className="mk-trust__img"
            />
          </figure>

          <div className="mk-trust__copy">
            <p className="mk-eyebrow mk-eyebrow--light">Proč nakupovat u nás</p>
            <h2 className="mk-h2 mk-h2--light" id="cesta-h">
              Celou cestu masa držíme ve vlastních rukou
            </h2>
            <p className="mk-trust__lead">
              Jméno Makovec patří k řeznickému řemeslu už od začátku 19. století.
              Dnes provozujeme přes 120 vlastních prodejen po celé republice —
              v Brně nás najdete hned na několika místech.
            </p>

            <ol className="mk-chain">
              <li className="mk-chain__step">
                <span className="mk-chain__num">1</span>
                <div>
                  <h3 className="mk-chain__title">Vlastní porážka</h3>
                  <p className="mk-chain__text">
                    Zvířata od českých chovatelů, porážka pod naším dohledem.
                    Víme přesně, co prodáváme.
                  </p>
                </div>
              </li>
              <li className="mk-chain__step">
                <span className="mk-chain__num">2</span>
                <div>
                  <h3 className="mk-chain__title">Vlastní výroba</h3>
                  <p className="mk-chain__text">
                    Uzeniny děláme podle receptur, které se v rodině předávají
                    generace. Certifikace KLASA, HACCP a ISO 9001.
                  </p>
                </div>
              </li>
              <li className="mk-chain__step">
                <span className="mk-chain__num">3</span>
                <div>
                  <h3 className="mk-chain__title">Vlastní doprava</h3>
                  <p className="mk-chain__text">
                    Chlazené vozy rozvážejí každé ráno. Do brněnských prodejen
                    přijíždí maso čerstvé, ne rozmražené.
                  </p>
                </div>
              </li>
              <li className="mk-chain__step">
                <span className="mk-chain__num">4</span>
                <div>
                  <h3 className="mk-chain__title">Vlastní prodejny</h3>
                  <p className="mk-chain__text">
                    Za pultem stojí vyučení řezníci. Poradí s výběrem,
                    naporcují na přání a znají zboží, které prodávají.
                  </p>
                </div>
              </li>
            </ol>

            <p className="mk-trust__quote">
              „U Makovce beru maso na neděli už léta. Paní za pultem ví,
              kterou krkovici mi dát na gril a kterou do trouby.“
              <span className="mk-trust__author">— zákaznice, prodejna Brno</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
