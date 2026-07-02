export default function Page() {
  return (
    <main className="gt">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="EM Trading">
            <span className="wordmark-em">EM</span>
            <span className="wordmark-trading">TRADING</span>
            <span className="wordmark-sub">garážová vrata · Hradec Králové</span>
          </div>
          <a className="hero-phone" href="tel:+420603446351">
            <span className="hero-phone-label">Zavolejte nám</span>
            <span className="hero-phone-number">603 446 351</span>
          </a>
        </div>

        {/* Signature: typografická sekční vrata — lamely, které se "otevírají" */}
        <div className="gate" aria-hidden="false">
          <div className="gate-lamela lam-1">
            <span className="gate-word">VRATA,</span>
          </div>
          <div className="gate-lamela lam-2">
            <span className="gate-word">KTERÁ SE</span>
          </div>
          <div className="gate-lamela lam-3">
            <span className="gate-word gate-word-accent">OTEVŘOU</span>
          </div>
          <div className="gate-lamela lam-4">
            <span className="gate-word">30&nbsp;LET.</span>
            <span className="gate-note">
              Montujeme sekční, rolovací i&nbsp;dvoukřídlá garážová vrata od
              roku&nbsp;1995. Vlastní montážní tým, servis do&nbsp;48&nbsp;hodin,
              prodloužená záruka.
            </span>
          </div>
          <div className="gate-rail gate-rail-left" aria-hidden="true" />
          <div className="gate-rail gate-rail-right" aria-hidden="true" />
        </div>

        <div className="hero-bottom">
          <p className="hero-claim">
            Předváděcí centrum U&nbsp;jednoty&nbsp;141/2, Hradec Králové&nbsp;–&nbsp;Slatina.
            Vrata si u&nbsp;nás nejdřív vyzkoušíte, pak teprve objednáte.
          </p>
          <a className="btn btn-primary" href="tel:+420495544161">
            Domluvit zaměření zdarma
          </a>
        </div>
      </header>

      {/* ===== SEKCE 1: NABÍDKA ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <span className="eyebrow">Co montujeme</span>
          <h2 id="sluzby-h">
            Od garážových vrat po&nbsp;závoru na&nbsp;firemní dvůr
          </h2>
        </div>

        <ul className="karty">
          <li className="karta karta-hlavni">
            <span className="karta-lamely" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
            <h3>Sekční garážová vrata</h3>
            <p>
              Nejčastější volba do&nbsp;rodinného domu. Zateplené lamely, tichý
              chod po&nbsp;stropních kolejnicích, dálkové ovládání v&nbsp;ceně.
              Nezaberou místo před garáží ani&nbsp;v&nbsp;ní.
            </p>
            <span className="karta-fakt">Montáž za&nbsp;1&nbsp;den</span>
          </li>
          <li className="karta">
            <span className="karta-lamely karta-lamely-svisle" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
            <h3>Rolovací vrata</h3>
            <p>
              Když je v&nbsp;garáži nízký strop nebo potřebujete strop volný
              pro&nbsp;zvedák či regály. Vrata se svinou do&nbsp;kompaktního boxu
              nad&nbsp;otvorem.
            </p>
            <span className="karta-fakt">Šetří strop garáže</span>
          </li>
          <li className="karta">
            <span className="karta-lamely karta-lamely-brana" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
            <h3>Vjezdové brány a&nbsp;závory</h3>
            <p>
              Posuvné i&nbsp;křídlové brány s&nbsp;pohonem, závory a&nbsp;vstupní
              systémy pro&nbsp;bytové domy a&nbsp;firemní areály. Vše otevřete
              z&nbsp;auta jedním tlačítkem.
            </p>
            <span className="karta-fakt">Pohon + ovladače v&nbsp;ceně</span>
          </li>
          <li className="karta">
            <span className="karta-lamely karta-lamely-servis" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
            <h3>Servis a&nbsp;opravy</h3>
            <p>
              Prasklá pružina, vrata co nejedou, ovladač co nereaguje —
              opravujeme i&nbsp;vrata, která jsme nemontovali. Náhradní díly
              vozíme s&nbsp;sebou.
            </p>
            <span className="karta-fakt">Výjezd do&nbsp;48&nbsp;hodin</span>
          </li>
        </ul>

        <p className="sluzby-pozn">
          Dodáváme také průmyslová vrata, nakládací rampy, vchodové dveře
          a&nbsp;plastová okna. Řekněte, co&nbsp;řešíte —&nbsp;poradíme, co&nbsp;se
          k&nbsp;vaší garáži hodí.
        </p>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-text">
            <span className="eyebrow eyebrow-light">Proč EM Trading</span>
            <h2 id="duvera-h">
              Rodinná firma z&nbsp;Hradce. Vrata montuje pořád stejná parta.
            </h2>
            <p>
              Firmu založil Milan Špaček v&nbsp;roce&nbsp;1995. Od&nbsp;té doby
              jsme v&nbsp;Hradci Králové a&nbsp;okolí namontovali tisíce vrat —
              a&nbsp;na&nbsp;většinu z&nbsp;nich se dodnes jezdíme dívat jen
              na&nbsp;pravidelný servis. Nezprostředkováváme: zaměření, montáž
              i&nbsp;servis děláme vlastními lidmi.
            </p>
            <p>
              V&nbsp;předváděcím centru ve&nbsp;Slatině máte vrata naživo —
              otevřete si je, poslechnete, jak jedou, sáhnete si na&nbsp;lamely.
              Teprve pak se rozhodujete.
            </p>
          </div>

          <ul className="duvera-fakta">
            <li>
              <span className="fakt-cislo">1995</span>
              <span className="fakt-popis">rok založení — na&nbsp;trhu přes tři dekády</span>
            </li>
            <li>
              <span className="fakt-cislo">48&nbsp;h</span>
              <span className="fakt-popis">servisní výjezd v&nbsp;Hradci a&nbsp;okolí</span>
            </li>
            <li>
              <span className="fakt-cislo">+2&nbsp;roky</span>
              <span className="fakt-popis">prodloužená záruka nad&nbsp;rámec zákona</span>
            </li>
            <li>
              <span className="fakt-cislo">Po–Pá</span>
              <span className="fakt-popis">
                8:00–13:00 v&nbsp;kanceláři, termín montáže domluvíte
                na&nbsp;603&nbsp;446&nbsp;351 i&nbsp;mimo otevírací dobu
              </span>
            </li>
          </ul>
        </div>

        <div className="duvera-mapa">
          <span className="mapa-gps">50°14'1.8"N&nbsp;·&nbsp;15°53'29.6"E</span>
          <p>
            Kancelář a&nbsp;předváděcí centrum: U&nbsp;jednoty&nbsp;141/2,
            500&nbsp;03 Hradec Králové&nbsp;–&nbsp;Slatina. Zaparkujete přímo
            před&nbsp;vchodem.
          </p>
        </div>
      </section>
    </main>
  );
}
