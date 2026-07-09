export default function Page() {
  const vysetreni = [
    {
      kod: "MIK",
      nazev: "Mikrobiologie klinického materiálu",
      popis:
        "Krev, trus, moč, výtěry, kožní stěry i seškraby všech druhů zvířat. Přesně určíme původce bakteriální infekce a doporučíme antibiotikum, které na něj skutečně zabírá.",
    },
    {
      kod: "PAR",
      nazev: "Parazitologie a mykologie",
      popis:
        "Průkaz zevních i vnitřních parazitů z biologického materiálu, záchyt kvasinek, plísní a dermatofytů — od psa a kočky po exotické plazy a ptáky.",
    },
    {
      kod: "PAT",
      nazev: "Pitva a patologie",
      popis:
        "Stanovení příčiny úhynu, patologicko-anatomické vyšetření hospodářských zvířat, drůbeže, koní i zájmových chovů. Uložení kadáveru a předání asanačnímu podniku zajistíme.",
    },
    {
      kod: "SER",
      nazev: "Sérologie a virologie",
      popis:
        "Serologická a virologická vyšetření pro potřeby léčby, přesunů zvířat i státního veterinárního dozoru.",
    },
    {
      kod: "VČE",
      nazev: "Diagnostika chorob včel",
      popis:
        "Vyšetření chorob včel a rozbory včelích produktů pro chovatele i státní dozor.",
    },
    {
      kod: "POT",
      nazev: "Hygiena potravin a krmiv",
      popis:
        "Mikrobiologické, chemické a smyslové rozbory masa, mléka, medu, cereálií, koření i obalů. Vyšetření vzorků z jatečně opracovaných těl.",
    },
  ];

  const kroky = [
    {
      c: "01",
      t: "Odeberte vzorek",
      d: "Formuláře objednávek vyšetření si stáhnete předem. K odběru přiložte anamnézu — čím víc víme, tím přesnější je nález.",
    },
    {
      c: "02",
      t: "Předejte přes svozovou linku",
      d: "Vzorek nemusíte vozit sami. Pravidelné svozové linky projíždějí region a materiál k nám dopraví zdarma.",
    },
    {
      c: "03",
      t: "Převezmeme nález",
      d: "Výsledky i doporučení k léčbě dostanete v protokolu. Materiál na specializované rozbory (PCR, toxikologie) odešleme za vás bezplatně.",
    },
  ];

  return (
    <main className="svu">
      <header className="svu-top">
        <a className="svu-brand" href="#uvod" aria-label="Státní veterinární ústav Hradec Králové">
          <span className="svu-brand-mark" aria-hidden="true">SVÚ</span>
          <span className="svu-brand-txt">
            <span className="svu-brand-line1">Státní veterinární ústav</span>
            <span className="svu-brand-line2">pobočka Hradec Králové</span>
          </span>
        </a>
        <a className="svu-top-tel" href="tel:+420495212921">495&nbsp;212&nbsp;921</a>
      </header>

      <section className="svu-hero" id="uvod">
        <img
          className="svu-hero-img"
          src="/hero.webp"
          alt="Vzorky připravené k laboratornímu vyšetření ve Státním veterinárním ústavu"
        />
        <div className="svu-hero-scrim" aria-hidden="true" />
        <div className="svu-hero-inner">
          <p className="svu-eyebrow">Akreditovaná laboratoř · Wonkova 343, Hradec Králové</p>
          <h1 className="svu-hero-title">
            Když vzorek napoví,<br />
            <em>co zvíře neřekne.</em>
          </h1>
          <p className="svu-hero-lead">
            Diagnostikujeme choroby zvířat a kontrolujeme bezpečnost potravin
            i krmiv. Pro chovatele, veterináře a potravinářské provozy ve
            východních Čechách — od jednoho výtěru po pitvu celého stáda.
          </p>
          <div className="svu-hero-cta">
            <a className="svu-btn svu-btn-primary" href="tel:+420495212921">Zavolat do laboratoře</a>
            <a className="svu-btn svu-btn-ghost" href="#vysetreni">Co vyšetřujeme</a>
          </div>
        </div>
        <dl className="svu-hero-facts">
          <div><dt>Materiál</dt><dd>Krev · trus · výtěry · tkáně</dd></div>
          <div><dt>Druhy</dt><dd>Od koček po včely a exoty</dd></div>
          <div><dt>Svoz</dt><dd>Do laboratoře zdarma</dd></div>
        </dl>
      </section>

      <section className="svu-sec" id="vysetreni" aria-labelledby="vysetreni-h">
        <div className="svu-sec-head">
          <p className="svu-kicker">Katalog vyšetření</p>
          <h2 id="vysetreni-h">Šest laboratoří pod jednou střechou</h2>
          <p className="svu-sec-lead">
            Každý úsek má vlastní kód, kterým se vyšetření značí na protokolu.
            Nevíte, kam vzorek patří? Zavolejte — poradíme a vzorek roztřídíme za vás.
          </p>
        </div>
        <ul className="svu-grid">
          {vysetreni.map((v) => (
            <li className="svu-card" key={v.kod}>
              <span className="svu-card-kod" aria-hidden="true">{v.kod}</span>
              <h3 className="svu-card-nazev">{v.nazev}</h3>
              <p className="svu-card-popis">{v.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="svu-sec svu-sec-alt" id="jak" aria-labelledby="jak-h">
        <div className="svu-split">
          <div className="svu-split-media">
            <img
              className="svu-split-img"
              src="/section-1.webp"
              alt="Laborant připravuje vzorek k mikrobiologickému vyšetření"
            />
          </div>
          <div className="svu-split-body">
            <p className="svu-kicker">Cesta vzorku</p>
            <h2 id="jak-h">Od odběru k nálezu ve třech krocích</h2>
            <ol className="svu-steps">
              {kroky.map((k) => (
                <li className="svu-step" key={k.c}>
                  <span className="svu-step-c" aria-hidden="true">{k.c}</span>
                  <div>
                    <h3>{k.t}</h3>
                    <p>{k.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="svu-trust">
          <img
            className="svu-trust-img"
            src="/section-2.webp"
            alt="Budova Státního veterinárního ústavu v Hradci Králové"
          />
          <div className="svu-trust-body">
            <p className="svu-kicker">Proč nám chovatelé věří</p>
            <h2>Státní laboratoř, ne rychlokvaška</h2>
            <p className="svu-trust-lead">
              Pracujeme pro státní veterinární dozor i pro soukromé chovatele.
              Vystavujeme vyšetření potřebná k přesunům zvířat, radíme s léčbou
              a materiál na specializované rozbory — molekulární PCR nebo
              toxikologii — odesíláme na partnerská pracoviště zdarma.
            </p>
            <div className="svu-contact">
              <div>
                <span className="svu-contact-l">Kde nás najdete</span>
                <span className="svu-contact-v">Wonkova 343, 500 02 Hradec Králové</span>
              </div>
              <div>
                <span className="svu-contact-l">Telefon</span>
                <a className="svu-contact-v svu-link" href="tel:+420495212921">495 212 921</a>
              </div>
              <div>
                <span className="svu-contact-l">E-mail</span>
                <a className="svu-contact-v svu-link" href="mailto:svu.hk@tiscali.cz">svu.hk@tiscali.cz</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
