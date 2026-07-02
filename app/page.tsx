export default function Page() {
  return (
    <main className="mk">
      {/* ================= HERO ================= */}
      <header className="mk-hero">
        <div className="mk-hero__media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="mk-hero__shade" />
        </div>

        <div className="mk-hero__inner">
          <div className="mk-topbar">
            <a href="#" className="mk-wordmark" aria-label="Makovec – řeznictví a uzenářství">
              <span className="mk-wordmark__name">MAKOVEC</span>
              <span className="mk-wordmark__trade">řeznictví &amp; uzenářství · od 19. století</span>
            </a>
            <nav className="mk-nav" aria-label="Hlavní navigace">
              <a href="#pult">Co je na pultu</a>
              <a href="#cesta">Od farmy k pultu</a>
            </nav>
          </div>

          <div className="mk-hero__copy">
            <p className="mk-stamp" aria-hidden="true">
              <span>ČESKÉ MASO</span>
              <span className="mk-stamp__dot">●</span>
              <span>VLASTNÍ PORÁŽKA</span>
            </p>
            <h1 className="mk-hero__title">
              Maso, které známe
              <br />
              <em>od jatek po váš pult.</em>
            </h1>
            <p className="mk-hero__lede">
              Rodinné řeznické řemeslo z Prostějovska, dnes ve víc než 120 prodejnách
              po Moravě i Čechách — včetně Brna. Porážíme sami, vyrábíme sami,
              rozvážíme sami. Proto víme, co vám vážíme.
            </p>
            <div className="mk-hero__actions">
              <a className="mk-btn mk-btn--primary" href="#pult">
                Podívat se na nabídku
              </a>
              <a className="mk-btn mk-btn--ghost" href="#cesta">
                Najít prodejnu v Brně
              </a>
            </div>
          </div>

          {/* Signature: řeznická cedulka s dnešní nabídkou */}
          <aside className="mk-tag" aria-label="Dnes na pultu">
            <p className="mk-tag__hole" aria-hidden="true" />
            <p className="mk-tag__label">Dnes na pultu</p>
            <p className="mk-tag__item">Vepřová krkovice bez kosti</p>
            <p className="mk-tag__price">
              149,90 <span>Kč / kg</span>
            </p>
            <p className="mk-tag__note">z vlastní porážky · baleno dnes ráno</p>
          </aside>
        </div>
      </header>

      {/* ================= SEKCE 1: CO JE NA PULTU ================= */}
      <section className="mk-section mk-pult" id="pult">
        <div className="mk-section__head">
          <p className="mk-eyebrow">Vitrína</p>
          <h2>Co u nás najdete každý den</h2>
          <p className="mk-section__lede">
            Nabídka se řídí tím, co ráno přijede z výrobny v Prostějově.
            Tohle jsou stálice, na které se můžete spolehnout.
          </p>
        </div>

        <div className="mk-cuts">
          <article className="mk-cut">
            <p className="mk-cut__kind">Čerstvé maso</p>
            <h3>Vepřové a hovězí z vlastní porážky</h3>
            <p>
              Krkovice, plec, kýta, svíčková i polévkové kosti. Naporcujeme
              přesně podle toho, co vaříte — stačí říct u pultu.
            </p>
            <p className="mk-cut__tag">bouráme denně</p>
          </article>

          <article className="mk-cut">
            <p className="mk-cut__kind">Uzeniny</p>
            <h3>Vlastní špekáčky, klobásy a šunky</h3>
            <p>
              Recepty se v rodině předávají generacemi. Velká část sortimentu
              je bezlepková a nese značku kvality KLASA.
            </p>
            <p className="mk-cut__tag">bez lepku · KLASA</p>
          </article>

          <article className="mk-cut">
            <p className="mk-cut__kind">Hotová jídla</p>
            <h3>Poctivé polévky Makovec, 600 g</h3>
            <p>
              Gulášovka, dršťková nebo vývar jako od babičky. Ohřejete za pět
              minut a máte oběd, za který se nemusíte stydět.
            </p>
            <p className="mk-cut__tag">praktické balení</p>
          </article>

          <article className="mk-cut">
            <p className="mk-cut__kind">Sezóna</p>
            <h3>Marinovaná kýta a maso na gril</h3>
            <p>
              Od jara do podzimu marinujeme podle vlastních receptur.
              Na víkend doporučujeme objednat den předem přímo na prodejně.
            </p>
            <p className="mk-cut__tag">jaro–podzim</p>
          </article>
        </div>
      </section>

      {/* ================= SEKCE 2: OD FARMY K PULTU ================= */}
      <section className="mk-section mk-cesta" id="cesta">
        <div className="mk-cesta__grid">
          <figure className="mk-cesta__media">
            <img
              src="/section-2.webp"
              alt="Řezník za pultem prodejny Makovec připravuje čerstvé maso"
            />
            <figcaption>Za každým pultem stojí vyučený řezník, ne jen prodavač.</figcaption>
          </figure>

          <div className="mk-cesta__copy">
            <p className="mk-eyebrow">Proč Makovec</p>
            <h2>Čtyři kroky, které neděláme přes nikoho</h2>
            <p className="mk-section__lede">
              Jméno Makovec je na Prostějovsku spojené s řeznictvím od začátku
              19. století. Dnes hlídáme celou cestu masa vlastníma rukama —
              proto za něj ručíme celým jménem.
            </p>

            <ol className="mk-steps">
              <li>
                <span className="mk-steps__label">Porážka</span>
                <p>Vlastní jatka, maso z českých chovů a vlastních farem. Žádné anonymní dovozy.</p>
              </li>
              <li>
                <span className="mk-steps__label">Výroba</span>
                <p>Uzeniny děláme ve vlastní výrobně s certifikací HACCP a ISO 9001.</p>
              </li>
              <li>
                <span className="mk-steps__label">Doprava</span>
                <p>Vlastní chlazené vozy rozvezou zboží každé ráno. Nic neleží na cestě.</p>
              </li>
              <li>
                <span className="mk-steps__label">Prodejna</span>
                <p>Víc než 120 vlastních prodejen — v Brně nás najdete hned na několika místech.</p>
              </li>
            </ol>

            <blockquote className="mk-quote">
              <p>
                „Chodím sem pro špekáčky a krkovici už roky. Řezník ví, co beru,
                a vždycky poradí, co je zrovna nejlepší.“
              </p>
              <cite>— paní Alena, zákaznice prodejny v Brně</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
