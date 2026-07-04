import type { CSSProperties } from "react";

export default function Page() {
  const materialy = [
    { nazev: "Terrazzo", zrno: "lité, brusné", pozn: "nové odlévání i renovace mozaik" },
    { nazev: "Žula", zrno: "tvrdá, matná", pozn: "schody v administrativních budovách" },
    { nazev: "Mramor", zrno: "jemná zrnitost", pozn: "broušení do lesku" },
    { nazev: "Opuka", zrno: "měkká, savá", pozn: "fasády i historické prahy" },
    { nazev: "Pískovec", zrno: "pórovitý", pozn: "tryskání a čištění" },
    { nazev: "Beton", zrno: "hrubé", pozn: "broušení dlažeb" },
  ];

  const postup = [
    {
      cislo: "01",
      titul: "Odléváme",
      text: "Nové lité terazzo, dlažby, schody a mramorové mozaiky. Barvu i zrno mícháme podle vzoru.",
    },
    {
      cislo: "02",
      titul: "Renovujeme",
      text: "Opravy a doplňování kamenných schodů, dlažby a konstrukcí. Vytlučené hrany doplníme, spáry srovnáme.",
    },
    {
      cislo: "03",
      titul: "Čistíme",
      text: "Schody a dlažby ze žuly, mramoru, terrazza, betonu a opuky. Tlaková voda, pára, případně chemicky.",
    },
    {
      cislo: "04",
      titul: "Brousíme",
      text: "Schody a dlažby z mramoru, opuky, pískovce, žuly, terrazza a betonu. Do matu i do lesku.",
    },
  ];

  const reference = [
    {
      text: "V administrativní budově v centru Prahy jsme přebrušovali žulové schodiště. Práce bez jakýchkoliv připomínek.",
      kdo: "Barbora Trčová",
    },
    {
      text: "Firma, která rozumí své práci. Nechal jsem si čistit povrchy z kamene — velmi dobrý výsledek a vstřícné jednání.",
      kdo: "Stanislav Švercl",
    },
    {
      text: "Perfektně odvedená práce. Schody vypadají jako nové.",
      kdo: "Vít Novotný",
    },
  ];

  return (
    <main className="stone">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="ISIS Technic — kamenictví Praha">
          <span className="wordmark__isis">ISIS</span>
          <span className="wordmark__technic">TECHNIC</span>
          <span className="wordmark__sub">kamenictví · Praha</span>
        </a>
        <a className="topbar__call" href="tel:+420602224733">602 224 733</a>
      </header>

      <section className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Broušené kamenné schodiště obnovené firmou ISIS Technic"
          />
        </div>
        <div className="hero__copy">
          <p className="eyebrow">Od roku 1990 · práce po celé ČR a Slovensku</p>
          <h1 className="hero__title">
            Kámen, který <em>obrousíme</em><br />
            zpátky do lesku.
          </h1>
          <p className="hero__lead">
            Odléváme nové terrazzo, renovujeme stará schodiště a brousíme dlažby
            z mramoru, žuly, opuky i betonu. Dílna z Vysočan, která ke každému
            povrchu ví, jaké zrno na něj patří.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420602224733">Zavolat 602 224 733</a>
            <a className="btn btn--ghost" href="mailto:kamenictvi@email.cz">Napsat na e-mail</a>
          </div>
        </div>
      </section>

      <section className="work" aria-labelledby="work-h">
        <div className="section-head">
          <p className="eyebrow">Co u nás objednáte</p>
          <h2 id="work-h" className="section-title">Čtyři úkony na jednom kameni</h2>
        </div>
        <ol className="work__list">
          {postup.map((p) => (
            <li key={p.cislo} className="work__item">
              <span className="work__num">{p.cislo}</span>
              <div className="work__body">
                <h3 className="work__title">{p.titul}</h3>
                <p className="work__text">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="work__figure">
          <img
            src="/section-1.webp"
            alt="Detail broušeného terazza s viditelnou zrnitostí"
          />
          <figcaption>
            Vzorník zrn — podle materiálu volíme brusný kotouč i postup.
          </figcaption>
        </figure>

        <div className="grit" role="list" aria-label="Materiály, které zpracováváme">
          {materialy.map((m, i) => (
            <div
              className="grit__cell"
              role="listitem"
              key={m.nazev}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="grit__name">{m.nazev}</span>
              <span className="grit__grain">{m.zrno}</span>
              <span className="grit__note">{m.pozn}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust__intro">
          <p className="eyebrow">Reference · 12 hodnocení na Googlu</p>
          <h2 id="trust-h" className="section-title">
            Přes třicet let ruční práce v Praze
          </h2>
          <p className="trust__lead">
            Vede nás Michal Nový. Přijedeme, zaměříme, řekneme rovnou, co má cenu
            renovovat a co odlít znovu. Termíny držíme — to slyšíme od zákazníků
            nejčastěji.
          </p>
          <dl className="facts">
            <div className="facts__row">
              <dt>Dílna</dt>
              <dd>Nad Krocínkou 372/92, Praha 9 – Vysočany</dd>
            </div>
            <div className="facts__row">
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8:00–17:00</dd>
            </div>
            <div className="facts__row">
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420602224733">602 224 733</a>{" "}·{" "}
                <a href="tel:+420608571750">608 571 750</a>
              </dd>
            </div>
            <div className="facts__row">
              <dt>E-mail</dt>
              <dd><a href="mailto:kamenictvi@email.cz">kamenictvi@email.cz</a></dd>
            </div>
          </dl>
        </div>

        <figure className="trust__figure">
          <img
            src="/section-2.webp"
            alt="Hotové renovované kamenné schodiště po broušení"
          />
        </figure>

        <ul className="quotes">
          {reference.map((r) => (
            <li className="quote" key={r.kdo}>
              <p className="quote__text">„{r.text}“</p>
              <p className="quote__who">— {r.kdo}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
