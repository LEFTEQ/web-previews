export default function Page() {
  const sluzby = [
    {
      kod: "TAB",
      nazev: "Bezpečnostní tabulky a samolepky",
      popis:
        "Požární a únikové značení, GHS a ADR symboly pro nebezpečné látky, označení tlakových lahví. Vše podle vládního nařízení o vzhledu a provedení bezpečnostního značení — tabulka, kterou vylepíte a máte kontrolu z inspektorátu vyřešenou.",
      pocet: "1 900+ položek",
    },
    {
      kod: "FOTO",
      nazev: "Fotoluminiscenční značení",
      popis:
        "Únikové cesty, které svítí i po výpadku proudu. Fotoluminiscenční tabulky a pásky nabíjí běžné osvětlení — ve tmě vedou lidi k východu, přesně jak vyžadují normy pro veřejné budovy.",
      pocet: "po tmě čitelné",
    },
    {
      kod: "AUTO",
      nazev: "Dopravní a motoristické samolepky",
      popis:
        "Samolepky na vozidla, siluety, woblery a podložky pod registrační značku. Ke každé objednávce přikládáme návod, jak samolepku nalepit bez bublin — na rovnou plochu i na karoserii.",
      pocet: "skladem k odeslání",
    },
    {
      kod: "MÍRA",
      nazev: "Zakázková výroba",
      popis:
        "Potřebujete tabulku s vlastním textem, označení fotovoltaiky nebo netypický rozměr? Pošlete nám zadání, do dvou pracovních dnů máte návrh a cenu. Vyrábíme v Českých Budějovicích, kusově i v sériích.",
      pocet: "návrh do 2 dnů",
    },
  ];

  const duvody = [
    {
      titulek: "2 348 položek skladem",
      text: "Nejčastější tabulky a samolepky držíme skladem a odesíláme do 24 hodin. Nečekáte na výrobu — čekáte jen na poštu.",
    },
    {
      titulek: "Značení podle předpisů",
      text: "Sledujeme vládní nařízení i změny norem — třeba přechod na GHS značení chemikálií. Co si u nás koupíte, obstojí při kontrole.",
    },
    {
      titulek: "Poradíme, co kam patří",
      text: "Nevíte, jestli na dveře patří 'Únikový východ' nebo 'Nouzový východ'? Zavolejte. Děláme to přes patnáct let a rádi poradíme zdarma.",
    },
  ];

  return (
    <main className="rs">
      {/* ===== HERO ===== */}
      <header className="rs-hero">
        <div className="rs-hero-inner">
          <div className="rs-topbar">
            <span className="rs-wordmark" aria-label="ReSit">
              <span className="rs-wm-re">Re</span>
              <span className="rs-wm-sit">Sit</span>
              <span className="rs-wm-dot" aria-hidden="true"></span>
            </span>
            <span className="rs-topbar-note">České Budějovice · e-shop s bezpečnostním značením</span>
          </div>

          <div className="rs-hero-grid">
            <div className="rs-hero-text">
              <p className="rs-eyebrow">Bezpečnostní tabulky · samolepky · zakázková výroba</p>
              <h1 className="rs-h1">
                <span className="rs-h1-line">Značení,</span>
                <span className="rs-h1-line">které projde</span>
                <span className="rs-h1-line rs-h1-accent">kontrolou.</span>
              </h1>
              <p className="rs-lead">
                2 348 tabulek a samolepek skladem — od únikových východů po GHS symboly.
                Vyrábíme a odesíláme z Českých Budějovic, netypické kusy vám vyrobíme na míru.
              </p>
              <div className="rs-hero-cta">
                <a className="rs-btn rs-btn-primary" href="#sortiment">
                  Prohlédnout sortiment
                </a>
                <a className="rs-btn rs-btn-ghost" href="#duvera">
                  Zakázková výroba
                </a>
              </div>
            </div>

            {/* Signature: stěna bezpečnostních piktogramů jako typografická kompozice */}
            <div className="rs-signwall" aria-hidden="true">
              <div className="rs-sign rs-sign-exit">
                <svg viewBox="0 0 24 24" className="rs-sign-ico">
                  <path d="M13 3h7v18h-7v-2h5V5h-5V3zM10.5 7.5 15 12l-4.5 4.5-1.4-1.4 2.1-2.1H3v-2h8.2L9.1 8.9l1.4-1.4z" fill="currentColor" />
                </svg>
                <span>ÚNIKOVÝ VÝCHOD</span>
              </div>
              <div className="rs-sign rs-sign-warn">
                <svg viewBox="0 0 24 24" className="rs-sign-ico">
                  <path d="M12 2 1 21h22L12 2zm0 5 7.5 12.5h-15L12 7zm-1 4h2v4h-2v-4zm0 5h2v2h-2v-2z" fill="currentColor" />
                </svg>
                <span>POZOR — NEBEZPEČÍ</span>
              </div>
              <div className="rs-sign rs-sign-fire">
                <svg viewBox="0 0 24 24" className="rs-sign-ico">
                  <path d="M9 3h6v3h4v2h-1v13H6V8H5V6h4V3zm2 2v1h2V5h-2zM8 8v11h8V8H8zm3 2h2v7h-2v-7z" fill="currentColor" />
                </svg>
                <span>HASICÍ PŘÍSTROJ</span>
              </div>
              <div className="rs-sign rs-sign-forbid">
                <svg viewBox="0 0 24 24" className="rs-sign-ico">
                  <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 0 0-6.32 12.9L16.9 5.68A7.96 7.96 0 0 0 12 4zm6.32 3.1L7.1 18.32A8 8 0 0 0 18.32 7.1z" fill="currentColor" />
                </svg>
                <span>ZÁKAZ VSTUPU</span>
              </div>
              <div className="rs-sign rs-sign-glow">
                <svg viewBox="0 0 24 24" className="rs-sign-ico">
                  <path d="M12 3a7 7 0 0 1 4 12.7V18H8v-2.3A7 7 0 0 1 12 3zm-2 16h4v2h-4v-2z" fill="currentColor" />
                </svg>
                <span>SVÍTÍ VE TMĚ</span>
              </div>
              <div className="rs-sign rs-sign-count">
                <strong>2 348</strong>
                <span>položek skladem</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rs-hazard-stripe" aria-hidden="true"></div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="rs-section" id="sortiment" aria-labelledby="sortiment-h">
        <div className="rs-section-inner">
          <div className="rs-section-head">
            <h2 className="rs-h2" id="sortiment-h">Co u nás pořídíte</h2>
            <p className="rs-section-sub">
              Čtyři hlavní kategorie e-shopu. Každou položku vyrábíme tak, aby odpovídala
              platným předpisům — a přežila déšť, mráz i myčku.
            </p>
          </div>

          <div className="rs-cards">
            {sluzby.map((s) => (
              <article className="rs-card" key={s.kod}>
                <div className="rs-card-top">
                  <span className="rs-card-kod">{s.kod}</span>
                  <span className="rs-card-pocet">{s.pocet}</span>
                </div>
                <h3 className="rs-h3">{s.nazev}</h3>
                <p className="rs-card-popis">{s.popis}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="rs-section rs-section-dark" id="duvera" aria-labelledby="duvera-h">
        <div className="rs-section-inner">
          <div className="rs-duvera-grid">
            <div className="rs-duvera-intro">
              <h2 className="rs-h2" id="duvera-h">
                Proč nakupovat značení <span className="rs-mark">u nás v Budějovicích</span>
              </h2>
              <p className="rs-duvera-text">
                ReSit není překupník — tabulky a samolepky tiskneme a řežeme sami.
                Když potřebujete poradit s označením dílny, skladu nebo fotovoltaiky,
                mluvíte přímo s lidmi, kteří značení vyrábějí.
              </p>
              <p className="rs-duvera-text">
                Objednávky balíme tentýž nebo následující pracovní den. Osobní odběr
                v Českých Budějovicích domluvíte telefonicky.
              </p>
            </div>

            <ol className="rs-duvody">
              {duvody.map((d) => (
                <li className="rs-duvod" key={d.titulek}>
                  <h3 className="rs-h3 rs-duvod-h">{d.titulek}</h3>
                  <p>{d.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <blockquote className="rs-citace">
            <p>
              „Potřebovali jsme kompletně přeznačit halu po revizi — únikovky, hasicí
              přístroje, GHS na sklad chemie. Poslali seznam, co kam patří, a za tři dny
              přišel balík. Kontrola prošla bez připomínek.“
            </p>
            <footer className="rs-citace-autor">— správce areálu, výrobní firma, Českobudějovicko</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
