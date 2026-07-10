export default function Page() {
  const bill = [
    {
      no: "01",
      title: "Zaměření u vás doma",
      desc: "Přijedeme do bytu i rozestavěné novostavby, změříme na milimetr a poradíme s rozmístěním spotřebičů, zásuvek i osvětlení dřív, než padne první řez.",
      mat: "Plzeň a okolí do 40 km",
    },
    {
      no: "02",
      title: "Návrh a 3D vizualizace",
      desc: "Uvidíte svou kuchyni ještě před výrobou — v barvách dvířek, s reálným dekorem dýhy i pracovní deskou, kterou si můžete osahat na vzorku.",
      mat: "Dub · dýha · lamino · fólie",
    },
    {
      no: "03",
      title: "Výroba v naší dílně",
      desc: "Korpusy, čela i atypické police vyrábíme sami z ověřených materiálů. Žádné polotovary z katalogu — každý díl řežeme a olepujeme na míru vaší místnosti.",
      mat: "Kování Blum · tichý dojezd",
    },
    {
      no: "04",
      title: "Montáž, seřízení, předání",
      desc: "Vše dovezeme, sestavíme a seřídíme do posledního pantu. Nakonec vás v klidu provedeme údržbou, aby kuchyně vypadala jako nová i po letech.",
      mat: "Držíme dohodnutý termín",
    },
  ];

  const refs = [
    {
      text: "Byli jsme opravdu velmi spokojeni — s milým a individuálním přístupem i s kvalitou zpracování kuchyně a výsledným vzhledem. Je vidět, že své práci rozumí.",
      who: "Zuzana Gálová",
    },
    {
      text: "Nejlepší z nejlepších. Lidé na svém místě, perfektní spolupráce a trpělivost se zákazníkem.",
      who: "Elaine Lóre",
    },
    {
      text: "Vše proběhlo v naprostém pořádku — od návrhu až po montáž. Určitě doporučuji dál.",
      who: "Lucia Urbánková Tkáčová",
    },
  ];

  return (
    <>
      <header className="topbar">
        <div className="topbar-in">
          <a className="wordmark" href="#top" aria-label="Design Studio Plzeň, domů">
            Design&nbsp;Studio<span className="studio">Plzeň · kuchyně na míru</span>
          </a>
          <nav className="topbar-meta" aria-label="Rychlý kontakt">
            <span className="hours">Po–Pá&nbsp;9–17</span>
            <span className="sep">/</span>
            <a href="tel:+420603436432">+420&nbsp;603&nbsp;436&nbsp;432</a>
            <span className="sep">/</span>
            <a href="mailto:info@designplzen.cz">Napsat</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-text">
                <span className="eyebrow rise d1">Truhlářská dílna · Plaská, Plzeň</span>
                <h1 className="rise d2">
                  Kuchyně
                  <br />
                  řezaná <span className="ital">na míru</span>
                  <br />
                  vaší zdi.
                </h1>
                <p className="hero-lede rise d3">
                  Navrhujeme a v <b>naší plzeňské dílně</b> vyrábíme kuchyně, které
                  sednou na centimetr — i do šikmin, výklenků a starých bytů, kde
                  žádná sériová linka nesedne.
                </p>
                <div className="hero-cta rise d4">
                  <a className="btn btn-primary" href="tel:+420603436432">Zavolat do dílny</a>
                  <a className="btn btn-ghost" href="#postup">Jak vzniká kuchyně</a>
                </div>
              </div>

              <div className="hero-media rise d2">
                <img
                  src="/hero.webp"
                  alt="Kuchyně na míru vyrobená v dílně Design Studia Plzeň"
                  loading="eager"
                />
                <div className="spec-tag">
                  Poslední realizace <span>Plzeň, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="strip">
          <div className="strip-in">
            <div className="strip-item"><span className="k">10+</span><span className="l">let ve výrobě kuchyní</span></div>
            <div className="strip-item"><span className="k">±1 mm</span><span className="l">přesnost zaměření</span></div>
            <div className="strip-item"><span className="k">Blum</span><span className="l">kování s tichým dojezdem</span></div>
            <div className="strip-item"><span className="k">Plzeň</span><span className="l">vlastní dílna, Plaská 78</span></div>
          </div>
        </div>

        <section className="block" id="postup">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-kicker">Od zaměření po předání</div>
              <h2>Čtyři kroky, které mezi vámi a hotovou kuchyní stojí.</h2>
              <p>
                U nás nekupujete krabice z katalogu. Provedeme vás celou cestou —
                a v každém kroku víte, co se děje a z čeho se vaše kuchyně skládá.
              </p>
            </div>

            <div className="bill">
              {bill.map((r) => (
                <div className="bill-row" key={r.no}>
                  <div className="bill-no">{r.no}</div>
                  <div className="bill-title">{r.title}</div>
                  <div className="bill-desc">
                    {r.desc}
                    <span className="mat">{r.mat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="reference" style={{ background: "var(--paper-deep)" }}>
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-kicker">Reference z okolí</div>
              <h2>Rodiny z Plzně, Líní i Staňkova, kterým jsme kuchyň postavili.</h2>
            </div>

            <div className="trust-grid">
              <div className="trust-media">
                <img
                  src="/section-1.webp"
                  alt="Detail realizované kuchyně na míru — dvířka a pracovní deska"
                  loading="lazy"
                />
                <div className="stamp" aria-hidden="true">
                  <span className="big">10+</span>
                  <span className="sml">let praxe</span>
                </div>
              </div>

              <div className="quotes">
                {refs.map((q) => (
                  <blockquote className="quote" key={q.who}>
                    <div className="stars" aria-label="Hodnocení pět z pěti">★★★★★</div>
                    <p>„{q.text}“</p>
                    <div className="who">{q.who} · zákazník</div>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
