import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "P0",
      title: "Diagnostika řídicích jednotek",
      desc: "Načteme paměť závad z motoru, převodovky, ABS i airbagů. Chybové kódy vám přeložíme do lidské řeči a řekneme, co je vážné a co počká.",
    },
    {
      code: "P1",
      title: "Hledání skryté závady",
      desc: "Bliká kontrolka, kterou nikdo neumí zhasnout? Měříme na živých datech, sledujeme senzory za jízdy a najdeme příčinu, ne jen příznak.",
    },
    {
      code: "P2",
      title: "Servisní resety a kalibrace",
      desc: "Zhasnutí servisního intervalu, adaptace po výměně dílů, kalibrace kamer a čidel. Po opravě necháme auto v pořádku i v elektronice.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Popíšete příznak",
      desc: "Zavoláte nebo napíšete, co auto dělá — od kdy, za jakých okolností, jestli svítí kontrolka. Podle toho odhadneme čas i cenu.",
    },
    {
      n: "02",
      title: "Připojíme diagnostiku",
      desc: "Sondou se napojíme na OBD a čteme paměť všech jednotek. U složitějších případů jezdíme s notebookem a měříme reálná data.",
    },
    {
      n: "03",
      title: "Dostanete protokol",
      desc: "Vytiskneme závady i naměřené hodnoty a vysvětlíme, co znamenají. Rozhodnutí, co opravit, necháme na vás — bez tlaku.",
    },
  ];

  const reviews = [
    {
      name: "Radim",
      text: "Naprosto skvělá komunikace, domluva na výměnu oleje a filtrů hned na druhý den a na počkání. Mohu jen doporučit!",
    },
    {
      name: "Gabriela",
      text: "V sobotu se nám porouchalo auto na cestě do Rakouska poblíž Prostějova a tohle bylo jediné místo v okruhu 100 km, které mělo otevřeno a bylo ochotné pomoct. Díky za skvělý přístup!",
    },
    {
      name: "Kristýna",
      text: "Rychle a efektivně za super cenu nám v neděli opravili píchnutou pneumatiku. Děkujeme.",
    },
  ];

  return (
    <main className="kr">
      <header className="kr-top">
        <a className="kr-brand" href="#uvod" aria-label="KARR Service, úvod">
          <span className="kr-brand-mark" aria-hidden="true">
            <span className="kr-dot" />
            <span className="kr-dot" />
          </span>
          <span className="kr-brand-word">
            KARR<span className="kr-brand-sub">·SERVICE</span>
          </span>
        </a>
        <span className="kr-loc">Diagnostika vozidel · Brno</span>
      </header>

      <section className="kr-hero" id="uvod">
        <div className="kr-hero-media">
          <img
            src="/hero.webp"
            alt="Diagnostický přístroj připojený k vozidlu v servisu KARR Service v Brně"
            className="kr-hero-img"
          />
          <div className="kr-scan" aria-hidden="true" />
        </div>

        <div className="kr-hero-body">
          <p className="kr-eyebrow">OBD · čtení paměti závad · Brno</p>
          <h1 className="kr-hero-title">
            Kontrolka svítí.
            <br />
            My víme <span className="kr-hl">proč.</span>
          </h1>
          <p className="kr-hero-lead">
            Autodiagnostika, která nehádá. Napojíme se na řídicí jednotky
            vašeho auta, přečteme chyby a řekneme vám je česky — dřív než
            začne pracovat opravna.
          </p>
          <div className="kr-hero-actions">
            <a className="kr-btn" href="tel:+420604131318">
              Zavolat na +420 604 131 318
            </a>
            <a className="kr-btn kr-btn-ghost" href="#sluzby">
              Co umíme přečíst
            </a>
          </div>

          <dl className="kr-readout" aria-label="Živý výpis z diagnostiky">
            <div className="kr-readout-row">
              <dt>STATUS</dt>
              <dd className="kr-ok">● SYSTÉM PŘIPOJEN</dd>
            </div>
            <div className="kr-readout-row">
              <dt>ZKUŠENOST</dt>
              <dd>5 let za volantem i pod kapotou</dd>
            </div>
            <div className="kr-readout-row">
              <dt>VOZŮ</dt>
              <dd>2000+ spokojených zákazníků</dd>
            </div>
            <div className="kr-readout-row">
              <dt>DOSTUPNOST</dt>
              <dd>24 h po předchozí domluvě</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="kr-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="kr-section-head">
          <p className="kr-eyebrow">S čím vám pomůžeme</p>
          <h2 className="kr-h2" id="sluzby-h">
            Kódy P0130, P0420, U0100… <br />u nás nezůstanou tajemstvím.
          </h2>
        </div>

        <div className="kr-cards">
          {services.map((s) => (
            <article className="kr-card" key={s.code}>
              <span className="kr-card-code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="kr-card-title">{s.title}</h3>
              <p className="kr-card-desc">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="kr-figure">
          <img
            src="/section-1.webp"
            alt="Technik KARR Service čte data z řídicí jednotky vozidla na notebooku"
            className="kr-figure-img"
          />
          <p className="kr-figure-cap">
            Měříme na živých datech — ne podle toho, „co to obvykle bývá“.
          </p>
        </div>

        <ol className="kr-steps">
          {steps.map((st) => (
            <li className="kr-step" key={st.n}>
              <span className="kr-step-n" aria-hidden="true">
                {st.n}
              </span>
              <h3 className="kr-step-title">{st.title}</h3>
              <p className="kr-step-desc">{st.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="kr-section kr-trust" aria-labelledby="duvera-h">
        <div className="kr-trust-grid">
          <div className="kr-trust-media">
            <img
              src="/section-2.webp"
              alt="Vozidlo v dílně KARR Service v Brně během diagnostiky"
              className="kr-trust-img"
            />
          </div>

          <div className="kr-trust-body">
            <p className="kr-eyebrow">Proč nám lidé věří</p>
            <h2 className="kr-h2" id="duvera-h">
              Dvě adresy v Brně, jeden přístup: řekneme vám pravdu o autě.
            </h2>
            <p className="kr-trust-lead">
              Nejsme řetězec. Jsme parta, která má diagnostiku jako řemeslo
              a baví ji, když se podaří vystopovat závadu, se kterou si
              jinde nevěděli rady.
            </p>

            <div
              className="kr-rating"
              style={{ "--val": 4.8 } as CSSProperties}
            >
              <span className="kr-rating-num">4,8</span>
              <span className="kr-stars" aria-hidden="true">
                ★★★★★
              </span>
              <span className="kr-rating-label">
                průměr recenzí zákazníků
              </span>
            </div>

            <ul className="kr-contact">
              <li>
                <span className="kr-contact-k">Sochorova</span>
                <span>Sochorova 19/22, 616 00 Brno</span>
                <a href="tel:+420604131318">+420 604 131 318</a>
              </li>
              <li>
                <span className="kr-contact-k">Šámalova</span>
                <span>Šámalova 4299/64, 615 00 Brno</span>
                <a href="tel:+420604131420">+420 604 131 420</a>
              </li>
              <li>
                <span className="kr-contact-k">Otevřeno</span>
                <span>Po–Pá 8–18 · So 9–18</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="kr-reviews">
          {reviews.map((r) => (
            <figure className="kr-review" key={r.name}>
              <blockquote>„{r.text}“</blockquote>
              <figcaption>— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
