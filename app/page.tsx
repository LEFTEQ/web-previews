import type { CSSProperties } from "react";

export default function Page() {
  const opening = [
    { day: "Pondělí", h: "9–20" },
    { day: "Úterý", h: "9–20" },
    { day: "Středa", h: "9–20" },
    { day: "Čtvrtek", h: "9–20" },
    { day: "Pátek", h: "9–20" },
    { day: "Sobota", h: "9–20" },
    { day: "Neděle", h: "9–20" },
  ];

  const today = new Date().getDay(); // 0 = neděle
  const todayIndex = today === 0 ? 6 : today - 1;

  const shelves = [
    {
      no: "01",
      title: "Regionální literatura",
      body: "Ještěd, Jizerky, Frýdlantsko i pověsti z Liberecka. Průvodce, mapy a čtení, které máte doslova za humny. Tuhle polici tady najdete na čestném místě.",
    },
    {
      no: "02",
      title: "Napříč žánry",
      body: "Od beletrie a poezie přes detektivky po odbornou literaturu. Nevíte, jestli je to ta pravá kniha? Zeptejte se — našim knihkupcům prošly rukama tisíce stránek.",
    },
    {
      no: "03",
      title: "Nejen knihy",
      body: "Deskové hry, kalendáře a diáře, plyšáci, papírnictví a dárkové drobnosti. Neknižní sortiment tu má pestrý výběr — vejde se do každé návštěvy.",
    },
  ];

  const routes = [
    {
      mode: "Tramvají",
      lines: "linka 2 a 3",
      stop: "zastávka Šaldovo náměstí",
    },
    {
      mode: "Autobusem",
      lines: "12, 13, 14, 15, 18, 19, 25, 26",
      stop: "zastávka Šaldovo náměstí",
    },
    {
      mode: "Autem",
      lines: "z ulic Palachova, Rumunská, 8. března a Gutenbergova",
      stop: "parkoviště přímo u centra Plaza",
    },
  ];

  return (
    <main className="kd">
      {/* HERO */}
      <header className="kd-hero">
        <nav className="kd-nav" aria-label="Hlavní">
          <a className="kd-mark" href="#" aria-label="Knihy Dobrovský, Liberec">
            <span className="kd-mark-k">Knihy</span>
            <span className="kd-mark-d">Dobrovský</span>
            <span className="kd-mark-city">Liberec</span>
          </a>
          <ul className="kd-nav-links">
            <li><a href="#regaly">Co u nás najdete</a></li>
            <li><a href="#cesta">Kudy k nám</a></li>
            <li><a href="#otvirak">Otevřeno</a></li>
          </ul>
        </nav>

        <div className="kd-hero-grid">
          <div className="kd-hero-copy">
            <p className="kd-eyebrow">Knihkupectví · NG Plaza · v centru Liberce</p>
            <h1 className="kd-title">
              Tisíce a tisíce stránek<span className="kd-title-em">, které vám podáme do ruky.</span>
            </h1>
            <p className="kd-lede">
              Liberecké knihkupectví najdete přímo v centru, v obchodním
              centru Plaza. Zastávka i parkoviště máte přede dveřmi — jste
              u nás cobydup. A když si nevíte s výběrem rady, knihkupci
              poradí. Za ta léta vědí, co vám sedne.
            </p>
            <div className="kd-hero-actions">
              <a className="kd-btn kd-btn-primary" href="#cesta">Ukázat cestu</a>
              <a className="kd-btn kd-btn-ghost" href="#otvirak">Kdy máme otevřeno</a>
            </div>
          </div>

          <figure className="kd-hero-media">
            <img
              src="/hero.webp"
              alt="Interiér knihkupectví Knihy Dobrovský v centru Liberce s regály plnými knih"
              className="kd-hero-img"
            />
            <figcaption className="kd-hero-tag">
              <span className="kd-hero-tag-addr">Palachova 1404</span>
              <span className="kd-hero-tag-city">460 90 Liberec</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — CO U NÁS NAJDETE (police) */}
      <section className="kd-shelves" id="regaly" aria-labelledby="regaly-h">
        <div className="kd-section-head">
          <p className="kd-eyebrow kd-eyebrow-dark">Podle regálů</p>
          <h2 className="kd-h2" id="regaly-h">Každý tu objeví čtení, které je jeho srdci milé.</h2>
        </div>

        <div className="kd-shelf-media">
          <img
            src="/section-1.webp"
            alt="Vybrané knihy naskládané v regálech knihkupectví"
            className="kd-img"
          />
        </div>

        <ol className="kd-shelf-list">
          {shelves.map((s) => (
            <li className="kd-shelf" key={s.no}>
              <span className="kd-shelf-no" aria-hidden="true">{s.no}</span>
              <div className="kd-shelf-text">
                <h3 className="kd-shelf-title">{s.title}</h3>
                <p className="kd-shelf-body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* SEKCE 2 — KUDY K NÁM + OTEVÍRACÍ DOBA */}
      <section className="kd-visit" id="cesta" aria-labelledby="cesta-h">
        <div className="kd-visit-media">
          <img
            src="/section-2.webp"
            alt="Prodejna Knihy Dobrovský v obchodním centru Plaza v Liberci"
            className="kd-img"
          />
        </div>

        <div className="kd-visit-body">
          <div className="kd-section-head">
            <p className="kd-eyebrow kd-eyebrow-dark">Zastávka Šaldovo náměstí</p>
            <h2 className="kd-h2" id="cesta-h">Kudy k nám</h2>
          </div>

          <ul className="kd-routes">
            {routes.map((r) => (
              <li className="kd-route" key={r.mode}>
                <span className="kd-route-mode">{r.mode}</span>
                <span className="kd-route-lines">{r.lines}</span>
                <span className="kd-route-stop">{r.stop}</span>
              </li>
            ))}
          </ul>

          <div className="kd-hours" id="otvirak">
            <div className="kd-hours-head">
              <h3 className="kd-hours-title">Otevřeno každý den</h3>
              <span className="kd-hours-all">9:00 — 20:00</span>
            </div>
            <table className="kd-hours-table">
              <caption className="kd-visually-hidden">Otevírací doba prodejny Liberec, NG Plaza</caption>
              <tbody>
                {opening.map((o, i) => (
                  <tr
                    key={o.day}
                    className={i === todayIndex ? "kd-hours-row kd-hours-today" : "kd-hours-row"}
                    style={{ "--i": i } as CSSProperties}
                  >
                    <th scope="row">
                      {o.day}
                      {i === todayIndex && <span className="kd-hours-badge">dnes</span>}
                    </th>
                    <td>{o.h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="kd-hours-note">
              Adresa: Palachova 1404, 460 90 Liberec — přímo v OC Plaza.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
