import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Pokrývačské práce",
      lead: "Nová krytina i kompletní přeložení",
      body: "Pokládáme střešní krytinu na novostavbách a rekonstruujeme stávající střechy — od výměny plechu za betonové tašky až po přeložení celé plochy. Vždy včetně přelaťování konstrukce a příslušných klempířských úprav.",
      tags: ["Šikmé střechy", "Ploché střechy", "Novostavby", "Rekonstrukce"],
    },
    {
      no: "02",
      title: "Klempířské práce",
      lead: "Titanzinek, který drží desítky let",
      body: "Oplechování, okapy, svody i lemování komínů a prostupů vyrábíme z titanzinku. Klempířina drží pokrývačskou práci pohromadě — bez ní žádná střecha netěsní tak, jak má.",
      tags: ["Titanzinek", "Okapy a svody", "Oplechování", "Lemování"],
    },
    {
      no: "03",
      title: "Zateplení a izolace",
      lead: "Teplo v domě, sucho pod krytinou",
      body: "Řešíme izolaci u novostaveb i při budování půdní vestavby ve starším domě. Demontáž krytiny, paropropustná fólie, přelaťování a zpětná montáž — se všemi klempířskými komponenty.",
      tags: ["Paropropustná fólie", "Půdní vestavby", "Hydroizolace"],
    },
  ];

  return (
    <main className="roof">
      <header className="roof-top">
        <a className="roof-mark" href="#" aria-label="Jaroslav Horníček — pokrývačství">
          <span className="roof-mark-line">Jaroslav</span>
          <span className="roof-mark-name">Horníček</span>
          <span className="roof-mark-sub">pokrývačství · Ústí n. L.</span>
        </a>
        <nav className="roof-nav" aria-label="Hlavní">
          <a href="#prace">Řemesla</a>
          <a href="#duvera">O nás</a>
          <a className="roof-call" href="tel:+420777800181">
            <span className="roof-call-dot" aria-hidden="true" />
            +420 777 800 181
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Dokončená šikmá střecha s taškovou krytinou nad Ústím nad Labem"
            className="hero-img"
          />
        </div>
        <div className="hero-grid">
          <p className="hero-eyebrow">
            <span>Ústí nad Labem &amp; Teplice</span>
            <span className="hero-since">od roku 1999</span>
          </p>
          <h1 className="hero-title">
            Střechu
            <br />
            <span className="hero-title-em">pokládáme ob&nbsp;řadu.</span>
            <br />
            Řada za řadou,
            <br />
            aby&nbsp;držela.
          </h1>
          <p className="hero-lead">
            Tašku po tašce, lať po lati. Přes dvacet let stavíme, opravujeme a
            zateplujeme střechy v Ústeckém kraji — pokrývačsky, klempířsky i
            tesařsky, kompletně na klíč.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="tel:+420777800181">Zavolat na střechu</a>
            <a className="btn-ghost" href="#prace">Co umíme</a>
          </div>
        </div>

        <div className="hero-ledger" aria-label="Skladba střechy">
          {[
            { k: "Krytina", v: "Tondach · Bramac" },
            { k: "Latění", v: "přesně na sklon" },
            { k: "Fólie", v: "paropropustná" },
            { k: "Klempířina", v: "titanzinek" },
          ].map((row) => (
            <div className="ledger-row" key={row.k}>
              <span className="ledger-k">{row.k}</span>
              <span className="ledger-line" aria-hidden="true" />
              <span className="ledger-v">{row.v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="prace" id="prace">
        <div className="sec-head">
          <p className="sec-eyebrow">Tři řemesla, jedna střecha</p>
          <h2 className="sec-title">Skladba shora dolů</h2>
          <p className="sec-note">
            Dobrá střecha není jedna práce, ale tři, které na sebe navazují.
            Děláme všechny tři — proto vám nikdo neřekne, že „to byla chyba toho
            druhého“.
          </p>
        </div>

        <ol className="cards">
          {services.map((s, i) => (
            <li
              className="card"
              key={s.no}
              style={{ "--i": i } as CSSProperties}
            >
              <div className="card-no">{s.no}</div>
              <div className="card-body">
                <h3 className="card-title">{s.title}</h3>
                <p className="card-lead">{s.lead}</p>
                <p className="card-text">{s.body}</p>
                <ul className="card-tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="strip">
          <img
            src="/section-1.webp"
            alt="Detail latění a pokládky krytiny na šikmé střeše"
            className="strip-img"
          />
          <div className="strip-note">
            <p className="strip-lead">Přeložení plechu za betonové tašky?</p>
            <p>
              Zvládneme i přelaťování konstrukce a všechny klempířské úpravy —
              odejdeme, až když voda teče tam, kam má.
            </p>
          </div>
        </div>
      </section>

      <section className="duvera" id="duvera">
        <div className="duvera-media">
          <img
            src="/section-2.webp"
            alt="Realizace střechy na rodinném domě v Ústeckém kraji"
            className="duvera-img"
          />
        </div>
        <div className="duvera-text">
          <p className="sec-eyebrow">Kdo vám leze na střechu</p>
          <h2 className="sec-title sec-title-light">
            Parta řemeslníků z&nbsp;Ústeckého kraje
          </h2>
          <p className="duvera-lead">
            Tesaři, klempíři a pokrývači, kteří dělají střechy od roku 1999.
            Rodinné domy, firemní i obecní budovy — od drobné opravy po celou
            střechu na klíč.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt>Od roku</dt>
              <dd>1999</dd>
            </div>
            <div className="fact">
              <dt>Působíme</dt>
              <dd>Ústí n.&nbsp;L. &amp; Teplice</dd>
            </div>
            <div className="fact">
              <dt>Materiál klempířiny</dt>
              <dd>titanzinek</dd>
            </div>
          </dl>

          <blockquote className="tip">
            <p>
              „Po zimě se vyplatí střechu obejít. Tající sníh drží v spárách
              vlhkost a i ojedinělý noční mrazík ji roztáhne — z malé trhliny je
              pak velká oprava.“
            </p>
            <cite>— rada od Jaroslava po každé oblevě</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
