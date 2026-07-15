import type { ReactNode } from "react";

function LedgerRow({ name, spec, price }: { name: string; spec?: string; price: string }) {
  return (
    <li className="ledger-row">
      <span className="ledger-name">
        {name}
        {spec ? <span className="ledger-spec">{spec}</span> : null}
      </span>
      <span className="ledger-leader" aria-hidden="true" />
      <span className="ledger-price">{price}</span>
    </li>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>;
}

export default function Page() {
  const categories = [
    "Chafingy a ohřevné lampy",
    "Porcelán",
    "Sklo",
    "Příbory",
    "Etažéry a podnosy",
    "Gastronádoby",
    "Kávovary",
    "Výčepní zařízení",
    "Výrobníky ledu",
    "Stany",
    "Stoly a pivní sety",
    "Židle",
    "Dekorace",
    "Osvětlení",
    "Plynové zářiče",
    "Termoboxy a termovárnice",
  ];

  return (
    <main className="page">
      {/* ——— HERO ——— */}
      <header className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Prostřený banketový stůl s porcelánem, sklem a příbory od půjčovny Express Rent"
        />
        <div className="hero-veil" aria-hidden="true" />

        <nav className="nav" aria-label="Hlavní">
          <a className="wordmark" href="#top" aria-label="Express Rent — domů">
            <span className="wordmark-name">Express&nbsp;Rent</span>
            <span className="wordmark-tag">půjčovna cateringového vybavení</span>
          </a>
          <a className="nav-tel" href="tel:+420603110934">
            <span className="nav-tel-label">Hradec Králové</span>
            <span className="nav-tel-num">+420&nbsp;603&nbsp;110&nbsp;934</span>
          </a>
        </nav>

        <div className="hero-inner" id="top">
          <p className="eyebrow reveal r1">
            Přes 200 položek skladem&nbsp;·&nbsp;doprava až k vám
          </p>
          <h1 className="hero-title">
            <span className="reveal r2">Od kávové lžičky</span>{" "}
            <span className="reveal r3">po párty stan.</span>
          </h1>
          <p className="hero-lede reveal r4">
            Cateringové a gastro vybavení k pronájmu, které si poskládáte kus
            po kuse — sklo, porcelán, chafingy, výčep i stany. Přivezeme až k
            vám a na místě sestavíme.
          </p>
          <div className="hero-actions reveal r5">
            <a className="btn btn-primary" href="mailto:info@express-rent.cz?subject=Rezervace%20vybavení">
              Rezervovat vybavení
            </a>
            <a className="btn btn-ghost" href="tel:+420603110934">
              Zavolat 603&nbsp;110&nbsp;934
            </a>
          </div>

          {/* SIGNATURE: rental ledger */}
          <div className="ledger reveal r6" role="group" aria-label="Ukázka z ceníku">
            <div className="ledger-head">
              <span>Ukázka z ceníku</span>
              <span>cena za kus / den, bez DPH</span>
            </div>
            <ul className="ledger-list">
              <LedgerRow name="Vidlička jídelní" spec="BAQUETTE" price="4 Kč" />
              <LedgerRow name="Sklenice na víno" spec="NAOMI · 0,35 l" price="6 Kč" />
              <LedgerRow name="Dezertní talíř" spec="PRAHA · 19 cm" price="6 Kč" />
              <LedgerRow name="Sklenice na sekt" spec="SIDERA · 220 ml" price="6 Kč" />
              <LedgerRow name="Mělký talíř" spec="PRAHA · 26 cm" price="8 Kč" />
            </ul>
          </div>
        </div>
      </header>

      {/* ——— SECTION 1: co si půjčíte ——— */}
      <section className="sec sec-light" aria-labelledby="sec1-title">
        <div className="sec-grid">
          <div className="sec-copy">
            <p className="sec-eyebrow">01 — Sortiment</p>
            <h2 id="sec1-title" className="sec-title">
              Co si u nás půjčíte
            </h2>
            <p className="sec-lede">
              Kompletní vybavení pro firemní večírky, svatby i venkovní akce.
              Nádobí vracíte jak chcete — vypůjčíte s mytím, nebo bez mytí za
              nižší cenu.
            </p>

            <div className="index" aria-label="Rejstřík kategorií vybavení">
              {categories.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </div>

          <figure className="sec-figure">
            <img
              src="/section-1.webp"
              alt="Naskladněné cateringové vybavení připravené k rozvozu v půjčovně Express Rent"
            />
            <figcaption>Sklad Express Rent — připraveno k rozvozu</figcaption>
          </figure>
        </div>

        <div className="price-panel">
          <p className="price-panel-head">Služby a doprava · bez DPH</p>
          <ul className="ledger-list ledger-list--wide">
            <LedgerRow
              name="Vybavení skladem"
              spec="přes 200 položek, od příboru po stan"
              price="na míru"
            />
            <LedgerRow name="Doprava dodávkou" spec="rozvoz i svoz" price="18 Kč / km" />
            <LedgerRow name="Doprava s přívěsem" spec="objemné zakázky" price="27 Kč / km" />
            <LedgerRow
              name="Instalace a deinstalace"
              spec="1 osoba, sestavení na místě"
              price="380 Kč"
            />
          </ul>
        </div>
      </section>

      {/* ——— SECTION 2: jak to funguje / důvěra ——— */}
      <section className="sec sec-dark" aria-labelledby="sec2-title">
        <div className="sec-grid sec-grid--reverse">
          <figure className="sec-figure sec-figure--dark">
            <img
              src="/section-2.webp"
              alt="Rozvoz a instalace cateringového vybavení Express Rent u zákazníka"
            />
            <figcaption>Přivezeme a sestavíme — vy se staráte o hosty</figcaption>
          </figure>

          <div className="sec-copy">
            <p className="sec-eyebrow sec-eyebrow--light">02 — Jak to funguje</p>
            <h2 id="sec2-title" className="sec-title sec-title--light">
              Tři kroky k prostřenému stolu
            </h2>

            <ol className="steps">
              <li className="step">
                <span className="step-num">01</span>
                <div>
                  <h3>Vyberete si vybavení</h3>
                  <p>
                    Projdete přes 200 položek. Poradíme s množstvím i sestavou
                    podle počtu hostů a druhu akce.
                  </p>
                </div>
              </li>
              <li className="step">
                <span className="step-num">02</span>
                <div>
                  <h3>Rezervujete termín</h3>
                  <p>
                    Ozvete se telefonem nebo e-mailem. Potvrdíme dostupnost a
                    připravíme objednávku k datu vaší akce.
                  </p>
                </div>
              </li>
              <li className="step">
                <span className="step-num">03</span>
                <div>
                  <h3>Přivezeme a nainstalujeme</h3>
                  <p>
                    Dopravíme vybavení až k vám a na místě sestavíme. Po akci
                    zase odvezeme — nádobí klidně vraťte bez mytí.
                  </p>
                </div>
              </li>
            </ol>

            <div className="trust">
              <Chip>Doprava až k vám</Chip>
              <Chip>Instalace na místě</Chip>
              <Chip>Nádobí i bez mytí</Chip>
              <Chip>Hradec Králové a okolí</Chip>
            </div>

            <div className="contact">
              <a className="contact-line" href="tel:+420603110934">
                <span className="contact-key">Telefon</span>
                <span className="contact-val">+420 603 110 934</span>
              </a>
              <a className="contact-line" href="mailto:info@express-rent.cz">
                <span className="contact-key">E-mail</span>
                <span className="contact-val">info@express-rent.cz</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
