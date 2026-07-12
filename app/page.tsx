export default function Page() {
  const steps = [
    {
      title: "Nejdřív vás vyslechneme",
      text: "Řeknete nám, kdy se vám vidění zhoršuje — při práci, řízení, čtení nebo sportu.",
    },
    {
      title: "Přesně změříme zrak",
      text: "Na vyšetření máme dost času. Kontrolujeme ostrost i spolupráci očí, ne jen počet dioptrií.",
    },
    {
      title: "Vybereme řešení",
      text: "Srozumitelně porovnáme typy čoček, úpravy i cenu. Doporučíme jen to, co skutečně využijete.",
    },
    {
      title: "Doladíme obrubu",
      text: "Hledáme tvar, který sedí obličeji, drží na místě a počítá s přesnou polohou vašich očí.",
    },
    {
      title: "Brýle předáme a seřídíme",
      text: "Při výdeji ověříme vidění i pohodlí. Pozdější dotažení nebo úpravu řešíme osobně.",
    },
  ];

  return (
    <main className="laro-page">
      <section className="laro-hero" aria-labelledby="laro-hero-title">
        <header className="laro-header">
          <a className="laro-wordmark" href="#top" aria-label="Laro optik — úvod">
            <span className="laro-wordmark-lens" aria-hidden="true" />
            <span>LARO</span>
            <small>optik · Praha</small>
          </a>

          <nav className="laro-nav" aria-label="Hlavní navigace">
            <a href="#jak-to-probiha">Jak to probíhá</a>
            <a href="#proc-laro">Proč Laro</a>
            <a className="laro-nav-call" href="tel:+420733716494">Zavolat</a>
          </nav>
        </header>

        <div className="laro-hero-grid" id="top">
          <div className="laro-hero-copy">
            <p className="laro-kicker">Oční optika v Praze</p>
            <h1 id="laro-hero-title">
              Ne jen víc
              <span>dioptrií.</span>
              <strong>Lepší vidění.</strong>
            </h1>
            <p className="laro-intro">
              Změříme, jak vaše oči opravdu pracují. Pak vybereme brýle nebo kontaktní čočky,
              se kterými se dobře žije od rána do večera.
            </p>
            <div className="laro-actions">
              <a
                className="laro-button laro-button-primary"
                href="mailto:lidicka@larooptik.cz?subject=Objednání%20měření%20zraku"
              >
                Objednat měření zraku
              </a>
              <a className="laro-button laro-button-quiet" href="tel:+420733716494">
                +420 733 716 494
              </a>
            </div>
            <p className="laro-availability">
              <span aria-hidden="true" /> Měření, brýle, čočky i zrakový trénink na jednom místě
            </p>
          </div>

          <div className="laro-lens-stage" aria-label="Detail přesného měření zraku v Laro optik">
            <div className="laro-lens-frame">
              <img
                src="/hero.webp"
                alt="Optometrista při přesném měření zraku v pražské optice Laro"
              />
              <span className="laro-focus-line laro-focus-line-x" aria-hidden="true" />
              <span className="laro-focus-line laro-focus-line-y" aria-hidden="true" />
            </div>
            <p className="laro-lens-note">
              <b>01</b>
              <span>Každé doporučení začíná důkladným měřením.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="laro-process" id="jak-to-probiha" aria-labelledby="process-title">
        <div className="laro-section-heading">
          <p className="laro-kicker">Od prvního měření po nové brýle</p>
          <h2 id="process-title">Pět kroků k vidění, které vám sedne.</h2>
          <p>
            Žádné přeskakování mezi přístroji a regály. Celým výběrem vás provede člověk,
            který zná vaše výsledky i každodenní potřeby.
          </p>
        </div>

        <div className="laro-process-layout">
          <figure className="laro-process-visual">
            <img
              src="/section-1.webp"
              alt="Výběr a přesné přizpůsobení brýlové obruby v Laro optik"
            />
            <figcaption>Obruba musí sedět obličeji i optickému středu čoček.</figcaption>
          </figure>

          <ol className="laro-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="laro-step-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="laro-trust" id="proc-laro" aria-labelledby="trust-title">
        <div className="laro-trust-grid">
          <div className="laro-trust-copy">
            <p className="laro-kicker">Péče nekončí u pokladny</p>
            <h2 id="trust-title">Když brýle žijí s vámi, občas potřebují pomoc.</h2>
            <p className="laro-trust-lead">
              V Laro optik se můžete vrátit pro seřízení, radu i servis. Známe vaše brýle
              a hledáme řešení dřív, než začneme mluvit o nových.
            </p>

            <div className="laro-promises" aria-label="Co v Laro optik získáte">
              <article>
                <h3>Čas na správné rozhodnutí</h3>
                <p>Obruby zkoušíte bez nátlaku. Vysvětlíme rozdíly a necháme vás v klidu porovnat.</p>
              </article>
              <article>
                <h3>Srozumitelnou cenu</h3>
                <p>Před objednáním víte, za co platíte a které úpravy čoček pro vás mají smysl.</p>
              </article>
              <article>
                <h3>Servis v Praze</h3>
                <p>Seřízení i nenadálou opravu řešíte s týmem, který vaše brýle zná.</p>
              </article>
            </div>
          </div>

          <div className="laro-proof">
            <figure className="laro-proof-image">
              <img
                src="/section-2.webp"
                alt="Detail precizní práce optika při servisu brýlí"
              />
            </figure>
            <blockquote>
              <p>
                „Z obvykle stresujícího výběru nových brýlí se stal nakonec skvělý zážitek.“
              </p>
              <cite>Jiří Vild · zákazník Laro optik</cite>
            </blockquote>
            <div className="laro-proof-meta">
              <span>Praha</span>
              <span>Ověřený servis</span>
              <span>Aktualizováno 07/2026</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
