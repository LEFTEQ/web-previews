export default function Page() {
  const cinnosti = [
    { c: "01", t: "Strojní zemní práce", p: "Výkopy, terénní úpravy a přesuny hmot těžkou technikou přímo na vaší stavbě." },
    { c: "02", t: "Výkopové a přípravné práce", p: "Základy, inženýrské sítě, přípojky – od prvního výkopu po zához." },
    { c: "03", t: "Nákladní autodoprava", p: "Odvoz zeminy a stavebního materiálu vlastními vozy po celém Ústecku." },
    { c: "04", t: "Demolice budov a staveb", p: "Bourací práce včetně odvozu a likvidace suti." },
    { c: "05", t: "Recyklace stavebních odpadů", p: "Zpracování suti a betonu na recykláty v provozovně Dobkovice." },
    { c: "06", t: "Nakládání s odpady", p: "Příjem a zpracování odpadů vyjma nebezpečných." },
    { c: "07", t: "Práce autojeřábem", p: "Zvedací a manipulační práce na stavbách i mimo ně." },
    { c: "08", t: "Lesnická činnost", p: "Těžba a úprava dřevní hmoty, čištění pozemků." },
    { c: "09", t: "Hornická činnost", p: "Práce prováděné hornickým způsobem dle příslušných oprávnění." },
    { c: "10", t: "Opravy silničních vozidel", p: "Servis vlastního i externího vozového parku." },
    { c: "11", t: "Prodej zeminy, štěrků a písků", p: "Sypké materiály i recykláty s dovozem až na stavbu nebo domů." },
  ];

  return (
    <>
      <section className="hrdy-hero">
        <div className="hrdy-hero__media">
          <img
            src="/hero.webp"
            alt="Pásové rypadlo při zemních pracích na stavbě v Ústí nad Labem"
            className="hrdy-hero__img"
          />
          <div className="hrdy-hero__scrim" />
        </div>

        <div className="hrdy-hero__grain" aria-hidden="true" />

        <div className="hrdy-hero__content">
          <div className="hrdy-hero__mark">
            <span className="hrdy-hero__mark-line1">HRDÝ</span>
            <span className="hrdy-hero__mark-line2">ZEMNÍ &amp; DOPRAVNÍ STAVBY</span>
          </div>

          <p className="hrdy-hero__eyebrow">Ústí nad Labem · Dobkovice · od základů po recyklát</p>

          <h1 className="hrdy-hero__title">
            Když je potřeba<br />
            <span className="hrdy-hero__title-accent">pohnout zemí.</span>
          </h1>

          <p className="hrdy-hero__lead">
            Zemní a dopravní stavby Hrdý Milan s.r.o. — rypadla, nákladní vozy
            a jeřáb pro stavby, výkopy i demolice na Ústecku. Bez zbytečných
            řečí, s technikou připravenou k výjezdu.
          </p>

          <div className="hrdy-hero__actions">
            <a className="hrdy-hero__call" href="tel:+420602193283">
              <span className="hrdy-hero__call-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              Milan Hrdý — 602 193 283
            </a>
            <a className="hrdy-hero__call hrdy-hero__call--ghost" href="tel:+420412543106">
              Recyklace Dobkovice — 412 543 106
            </a>
          </div>

          <p className="hrdy-hero__reg">
            Zapsáno u Krajského soudu v Ústí nad Labem, oddíl C, vložka 19781
          </p>
        </div>
      </section>

      <section className="hrdy-services" aria-labelledby="sluzby-heading">
        <div className="hrdy-services__inner">
          <div className="hrdy-services__head">
            <span className="hrdy-services__tag">Čím se zabýváme</span>
            <h2 id="sluzby-heading" className="hrdy-services__title">
              Jedenáct oborů, jedna parta na telefonu
            </h2>
            <p className="hrdy-services__lead">
              Od výkopu základů po odvoz a recyklaci suti — většinu prací zvládneme
              vlastní technikou, bez zdlouhavého shánění subdodavatelů.
            </p>
          </div>

          <div className="hrdy-services__media">
            <img
              src="/section-1.webp"
              alt="Nákladní vozy a stavební technika firmy Hrdý připravené na stavbě"
              className="hrdy-services__img"
            />
          </div>

          <ol className="hrdy-services__list">
            {cinnosti.map((item) => (
              <li className="hrdy-services__item" key={item.c}>
                <span className="hrdy-services__num" aria-hidden="true">{item.c}</span>
                <div className="hrdy-services__text">
                  <h3 className="hrdy-services__item-title">{item.t}</h3>
                  <p className="hrdy-services__item-desc">{item.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hrdy-trust" aria-labelledby="duvera-heading">
        <div className="hrdy-trust__inner">
          <div className="hrdy-trust__media">
            <img
              src="/section-2.webp"
              alt="Recyklace stavebního odpadu a skladovaný recyklát v provozovně Dobkovice"
              className="hrdy-trust__img"
            />
            <div className="hrdy-trust__media-cap">Recyklace Dobkovice</div>
          </div>

          <div className="hrdy-trust__content">
            <span className="hrdy-services__tag">Provoz a ceny</span>
            <h2 id="duvera-heading" className="hrdy-trust__title">
              Materiál dovezeme, ceny řekneme na rovinu
            </h2>

            <div className="hrdy-trust__block">
              <h3 className="hrdy-trust__block-title">Aktuálně</h3>
              <p className="hrdy-trust__block-text">
                Vzhledem k neustále rostoucí inflaci se ceny zeminy, štěrků a recyklátů
                mohou průběžně měnit. O aktuální ceně se prosím informujte na telefonu
                412 543 106. Materiál vám dovezeme vlastními vozy přímo na stavbu
                nebo domů. Děkujeme za vaši přízeň.
              </p>
            </div>

            <div className="hrdy-trust__grid">
              <div className="hrdy-trust__card">
                <h3 className="hrdy-trust__card-title">Provozní doba — Dobkovice</h3>
                <dl className="hrdy-trust__hours">
                  <div className="hrdy-trust__hours-row">
                    <dt>Po – Pá</dt>
                    <dd>7:00 – 15:30</dd>
                  </div>
                  <div className="hrdy-trust__hours-row">
                    <dt>So</dt>
                    <dd>7:00 – 12:30</dd>
                  </div>
                  <div className="hrdy-trust__hours-row hrdy-trust__hours-row--note">
                    <dt>Přestávka</dt>
                    <dd>11:00 – 11:30</dd>
                  </div>
                </dl>
                <p className="hrdy-trust__note">Platební karty bohužel nepřijímáme — počítejte s hotovostí.</p>
              </div>

              <div className="hrdy-trust__card">
                <h3 className="hrdy-trust__card-title">Volná místa</h3>
                <ul className="hrdy-trust__jobs">
                  <li>Řidič nákladních automobilů (ŘP sk. C, E, platné psychotesty)</li>
                  <li>Stavební technik</li>
                  <li>Obsluha finišeru — pokládka živičných povrchů</li>
                  <li>Strojník — obsluha kolového bagru</li>
                </ul>
                <p className="hrdy-trust__note">
                  Zájemci ať se hlásí přímo u pana Hrdého na{" "}
                  <a className="hrdy-trust__inline-link" href="tel:+420602193283">602 193 283</a>.
                </p>
              </div>
            </div>

            <p className="hrdy-trust__signature">— Milan Hrdý, jednatel společnosti</p>
          </div>
        </div>
      </section>
    </>
  );
}
